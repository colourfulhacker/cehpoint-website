import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, MapPin, Briefcase, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MultiSelect } from "@/components/ui/multi-select";
import { leadershipData } from "@/data/leadership";

export default function LeadershipSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

    // Extract unique countries
    const countryOptions = useMemo(() => {
        return Array.from(new Set(leadershipData.map(l => l.country)))
            .sort()
            .map(c => ({ label: c, value: c }));
    }, []);

    // Extract unique departments for the selected countries
    const departmentOptions = useMemo(() => {
        const filteredByCountries = selectedCountries.length === 0
            ? leadershipData
            : leadershipData.filter(l => selectedCountries.includes(l.country));

        return Array.from(new Set(filteredByCountries.map(l => l.department || "Other")))
            .sort()
            .map(d => ({ label: d, value: d }));
    }, [selectedCountries]);

    // Cleanup: Remove selected departments that are no longer available in the newly selected countries
    useMemo(() => {
        if (selectedCountries.length > 0 && selectedDepartments.length > 0) {
            const availableDepts = new Set(
                leadershipData
                    .filter(l => selectedCountries.includes(l.country))
                    .map(l => l.department || "Other")
            );

            const validSelectedDepts = selectedDepartments.filter(d => availableDepts.has(d));
            if (validSelectedDepts.length !== selectedDepartments.length) {
                setSelectedDepartments(validSelectedDepts);
            }
        }
    }, [selectedCountries]);

    const filteredLeaders = useMemo(() => {
        // Only show results if a specific country or department is selected
        if (selectedCountries.length === 0 && selectedDepartments.length === 0) {
            return [];
        }

        return leadershipData.filter(leader => {
            const matchesSearch =
                leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leader.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (leader.department && leader.department.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(leader.country);
            const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(leader.department || "Other");

            return matchesSearch && matchesCountry && matchesDepartment;
        });
    }, [searchQuery, selectedCountries, selectedDepartments]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCountries([]);
        setSelectedDepartments([]);
    };

    const isInitialState = selectedCountries.length === 0 && selectedDepartments.length === 0;

    return (
        <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Leadership Team Search
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Find the right expert entirely by Name, Designation, Country, or Department.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <Input
                            type="text"
                            placeholder="Search by name, designation, or department..."
                            className="pl-10 h-12 text-lg bg-background text-foreground border-2 border-primary/20 focus:border-primary placeholder:text-muted-foreground shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 md:w-[300px]">
                            <MultiSelect
                                options={countryOptions}
                                selected={selectedCountries}
                                onChange={setSelectedCountries}
                                placeholder="Select Countries"
                                className="bg-background border-primary/20"
                            />
                        </div>

                        <div className="flex-1 md:w-[400px]">
                            <MultiSelect
                                options={departmentOptions}
                                selected={selectedDepartments}
                                onChange={setSelectedDepartments}
                                placeholder="Select Departments"
                                className="bg-background border-primary/20"
                            />
                        </div>

                        {(selectedCountries.length > 0 || selectedDepartments.length > 0 || searchQuery) && (
                            <Button
                                variant="ghost"
                                onClick={clearFilters}
                                className="h-11 px-4 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4 mr-2" />
                                Clear Filters
                            </Button>
                        )}
                    </div>

                    <div className="mt-2 text-sm text-center text-muted-foreground">
                        {filteredLeaders.length === 0 ? (
                            isInitialState ? "" : "No matches found"
                        ) : (
                            `Showing ${filteredLeaders.length} result${filteredLeaders.length !== 1 ? 's' : ''}`
                        )}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredLeaders.map((leader, index) => (
                            <motion.div
                                key={`${leader.email}-${leader.name}`}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm group">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <div>
                                                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                    {leader.name}
                                                </CardTitle>
                                                <CardDescription className="mt-1 font-medium text-foreground/80">
                                                    {leader.designation}
                                                </CardDescription>
                                                {leader.department && (
                                                    <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                                        <Briefcase className="h-3.5 w-3.5" />
                                                        {leader.department}
                                                    </div>
                                                )}
                                            </div>
                                            <Badge variant="outline" className="shrink-0 flex items-center gap-1 bg-background/50">
                                                <MapPin className="h-3 w-3" />
                                                {leader.country}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary/80 transition-colors">
                                            <Mail className="h-4 w-4" />
                                            <a href={`mailto:${leader.email}`} className="text-sm hover:underline truncate">
                                                {leader.email}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredLeaders.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-muted-foreground"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <Filter className="h-10 w-10 opacity-20" />
                            {isInitialState ? (
                                <p className="text-lg">Please select a <b>Country</b> or <b>Department</b> to view leadership members.</p>
                            ) : (
                                <>
                                    <Search className="h-10 w-10 opacity-20" />
                                    <p>No team members found with the current filters.</p>
                                    <Button variant="link" onClick={clearFilters}>
                                        Clear all filters
                                    </Button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
