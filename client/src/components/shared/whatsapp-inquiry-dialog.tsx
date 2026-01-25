import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const inquirySchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(10, "Valid phone number required"),
    appName: z.string().optional(),
});

interface WhatsAppInquiryDialogProps {
    title?: string;
    description?: React.ReactNode;
    appName?: string;
    locationName: string; // The city or region name
    trigger: React.ReactNode;
}

export function WhatsAppInquiryDialog({
    title = "Start Your Journey",
    description,
    appName = "General Inquiry",
    locationName,
    trigger
}: WhatsAppInquiryDialogProps) {
    const form = useForm<z.infer<typeof inquirySchema>>({
        resolver: zodResolver(inquirySchema),
        defaultValues: { name: "", phone: "", appName: appName },
    });

    const onSubmit = (data: z.infer<typeof inquirySchema>) => {
        // Standardized message format for WhatsApp
        const message = `*Inquiry from ${locationName} Page*
Name: ${data.name}
Phone: ${data.phone}
Interested In: ${data.appName || appName}
Location: ${locationName}
`;
        // Using the mobile number capable of receiving WhatsApp messages
        window.open(`https://wa.me/919091156095?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[400px] glass-intense border-white/20 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                    <DialogDescription className="text-gray-300">
                        {description || (
                            <>
                                Get a quote & connect with experts for <strong>{appName}</strong> in {locationName}.
                            </>
                        )}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl><Input placeholder="Your Name" {...field} className="bg-white/10 border-white/20 text-white" /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone/WhatsApp</FormLabel>
                                    <FormControl><Input placeholder="+91 XXXXX XXXXX" {...field} className="bg-white/10 border-white/20 text-white" /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full btn-primary bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700">
                            Get Quote on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
