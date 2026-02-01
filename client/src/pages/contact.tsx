
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    subject: z.string().min(5, "Subject must be at least 5 characters."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real app, this would send data to a backend
        console.log(values);
        // Open WhatsApp with the message
        const waMessage = `Name: ${values.name}%0AEmail: ${values.email}%0APhone: ${values.phone}%0ASubject: ${values.subject}%0AMessage: ${values.message}`;
        window.open(`https://wa.me/917015129364?text=${waMessage}`, '_blank');
    }

    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            <SEO
                title="Contact Us | Cehpoint - Best IT Company in Kolkata"
                description="Get in touch with Cehpoint. We're here to help with your IT consultancy, software development, and digital transformation needs."
                keywords={["Contact Cehpoint", "IT Support", "Business Inquiry", "Kolkata IT Company"]}
                url="https://www.cehpoint.co.in/contact"
                canonical="https://www.cehpoint.co.in/contact"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Contact", url: "https://www.cehpoint.co.in/contact" }
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            <span className="text-sm font-bold">We'd Love to Hear From You</span>
                        </div>
                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight">
                            Let's Start a <span className="text-gradient">Conversation</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                            Whether you have a question about our services, need a demo, or want to discuss a partnership, our team is ready to answer all your questions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-display font-bold text-3xl mb-8">Get in Touch</h2>

                            <div className="space-y-8">
                                <Card className="glass border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-primary/10 p-3 rounded-xl">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                                            <p className="text-muted-foreground">Cehpoint, Labpur, Sandipan Patsala Para,<br />Birbhum, Bolpur, West Bengal - 731303, India</p>
                                            <a href="https://maps.google.com/?q=Cehpoint+Labpur+Bolpur" target="_blank" rel="noreferrer" className="text-primary text-sm mt-2 hover:underline">View on Google Maps</a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="glass border-l-4 border-l-blue-500 hover:translate-x-2 transition-transform duration-300">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-blue-500/10 p-3 rounded-xl">
                                            <Phone className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                            <p className="text-muted-foreground">Mon-Fri from 10am to 7pm</p>
                                            <a href="tel:+913369029331" className="text-xl font-bold mt-1 block hover:text-blue-500 transition-colors">+91 33690 29331</a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="glass border-l-4 border-l-green-500 hover:translate-x-2 transition-transform duration-300">
                                    <CardContent className="p-6 flex items-start space-x-4">
                                        <div className="bg-green-500/10 p-3 rounded-xl">
                                            <Mail className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                            <p className="text-muted-foreground">For general inquiries and support</p>
                                            <a href="mailto:contact@cehpoint.co.in" className="text-lg font-medium mt-1 block hover:text-green-500 transition-colors">contact@cehpoint.co.in</a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-secondary/30">
                                <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                                <div className="space-y-4 text-muted-foreground">
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-semibold text-foreground">India (HQ)</span>
                                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">IST</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Mon - Fri</span>
                                            <span className="font-medium text-foreground">2:00 PM - 10:00 PM</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-border/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-semibold text-foreground">International</span>
                                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Local</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Mon - Fri</span>
                                            <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-border/10">
                                        <div className="flex justify-between text-sm">
                                            <span>Weekends</span>
                                            <span className="text-red-400 font-medium">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="glass p-8">
                                <div className="mb-6">
                                    <h2 className="font-display font-bold text-2xl mb-2">Send us a Message</h2>
                                    <p className="text-muted-foreground">We usually respond within 24 hours.</p>
                                </div>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John Doe" {...field} className="bg-secondary/20" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="+91 98765 43210" {...field} className="bg-secondary/20" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="john@example.com" {...field} className="bg-secondary/20" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Subject</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Project Inquiry..." {...field} className="bg-secondary/20" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Tell us about your project or inquiry..."
                                                            className="min-h-[150px] bg-secondary/20"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full btn-primary py-6 text-lg font-bold">
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </Button>
                                    </form>
                                </Form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Offices Section */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">Global <span className="text-gradient">Presence</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We operate seamlessly across borders with virtual and physical offices in key global financial and technology hubs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                country: "United States",
                                flag: "🇺🇸",
                                address: "5 Penn Plaza, 14th Floor, New York, NY 10001, US",
                            },
                            {
                                country: "United Kingdom",
                                flag: "🇬🇧",
                                address: "12 Steward Street, The Steward Building, London, E1 6FQ, Great Britain",
                            },
                            {
                                country: "Germany",
                                flag: "🇩🇪",
                                address: "Banking Circle S.A. - German Branch, Maximilianstraße 54, 80538 München",
                            },
                            {
                                country: "Australia",
                                flag: "🇦🇺",
                                address: "Level 11/10 Carrington St, Sydney NSW 2000, Australia",
                            },
                            {
                                country: "Canada",
                                flag: "🇨🇦",
                                address: "736 Meridian Road N.E, Calgary, Alberta, CA",
                            },
                            {
                                country: "United Arab Emirates",
                                flag: "🇦🇪",
                                address: "1st Floor, Emaar Square, Building 6, Dubai, United Arab Emirates",
                            },
                        ].map((office, index) => (
                            <motion.div
                                key={office.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full glass hover:border-primary/50 transition-colors duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="text-4xl">{office.flag}</div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">{office.country}</h3>
                                                <p className="text-sm text-foreground/80 leading-relaxed">
                                                    {office.address}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
