import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";

export default function InvestigationLegal() {
    return (
        <InvestigationLayout>
            <SEO
                title="Legal, Confidentiality & Compliance | Cehpoint"
                description="Our legal adherence, confidentiality guarantees, and compliance standards for digital forensics."
            />
            <section className="pt-32 pb-20 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-12">Legal & Compliance</h1>

                <div className="space-y-12 text-muted-foreground leading-relaxed">
                    <PolicySection title="Confidentiality Guarantee">
                        <p>
                            Cehpoint adheres to strict non-disclosure protocols. All client data, investigation findings, and reports are treated as highly confidential. We implement military-grade encryption for data at rest and in transit. Access is restricted on a strict need-to-know basis within our investigation unit.
                        </p>
                    </PolicySection>

                    <PolicySection title="Data Handling & Privacy">
                        <p>
                            Our digital forensics lab operates in alignment with ISO 27037 (Digital Evidence) standards. We do not sell, share, or monetize client data. All evidence data is retained only for the duration mandated by the engagement contract or law, after which it is securely sanitized (DoD 5220.22-M standard).
                        </p>
                    </PolicySection>

                    <PolicySection title="Evidence Admissibility">
                        <p>
                            Investigations are conducted with the primary goal of legal admissibility. We maintain hash-verified Chain of Custody logs for all acquired evidence. Our analysts are prepared to provide expert witness testimony in Indian and International courts regarding the integrity and methodology of our findings.
                        </p>
                    </PolicySection>

                    <PolicySection title="Jurisdiction & Authority">
                        <p>
                            Cehpoint acts as a technical consulting agency. We do not have the authority to arrest, detain, or seize property without a court order. We work in tandem with Law Enforcement Agencies (LEAs) when required by the client to facilitate such actions based on our technical evidence.
                        </p>
                    </PolicySection>

                    <PolicySection title="Conflict of Interest">
                        <p>
                            We conduct mandatory conflict checks before accepting any engagement. We will not accept a case where we have a pre-existing relationship with the opposing party or where our impartiality might be compromised.
                        </p>
                    </PolicySection>
                </div>
            </section>
        </InvestigationLayout>
    );
}

function PolicySection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <div className="text-lg">
                {children}
            </div>
        </div>
    );
}
