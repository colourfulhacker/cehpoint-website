import { Link } from "wouter";
import { Home, ChevronRight } from "lucide-react";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
  className?: string;
}

const BASE_URL = "https://www.cehpoint.co.in";

export default function PageBreadcrumb({ items, className }: Props) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema
        items={allItems.map((i) => ({
          name: i.name,
          url: i.href.startsWith("http") ? i.href : `${BASE_URL}${i.href}`,
        }))}
      />
      <nav aria-label="Breadcrumb" className={className ?? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"}>
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={`${item.href}-${idx}`} className="flex items-center gap-1.5">
                {idx > 0 && <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="text-foreground font-medium inline-flex items-center gap-1">
                    {idx === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                    {idx === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
