import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Program {
  href: string;
  label: string;
  description: string;
}

interface Props {
  heading?: string;
  description?: string;
  programs: Program[];
  className?: string;
}

export default function RelatedPrograms({
  heading = "Continue exploring",
  description = "Other programs and services that pair well with this one.",
  programs,
  className = "",
}: Props) {
  if (!programs?.length) return null;
  return (
    <section className={`py-16 bg-card/30 border-y border-border ${className}`} aria-labelledby="related-programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Continue exploring</p>
          <h2 id="related-programs-heading" className="text-2xl md:text-3xl font-display font-bold mb-3">{heading}</h2>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-border bg-background hover:border-primary/40 hover:bg-card transition-all p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                <span>{p.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
