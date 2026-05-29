import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function PortfolioCareers() {
  const { t } = useTranslation();
  return (
    <section className="py-24" data-testid="portfolio-careers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portfolio */}
          <div className="glass rounded-3xl p-8 hover-lift" data-testid="portfolio-card">
            <h3 className="font-display font-bold text-3xl mb-4" data-testid="portfolio-title">
              {t("pages.sections.portfolioTitleLead")} <span className="text-primary">{t("pages.sections.portfolioTitleAccent")}</span>
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="portfolio-description">
              {t("pages.sections.portfolioDesc")}
            </p>
            <a
              href="https://portfolios.cehpoint.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portfolio-cta"
            >
              <Button className="btn-primary inline-flex items-center px-6 py-3 rounded-xl font-semibold text-primary-foreground">
                {t("cta.viewPortfolio")}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Careers */}
          <div className="glass rounded-3xl p-8 hover-lift" data-testid="careers-card">
            <h3 className="font-display font-bold text-3xl mb-4" data-testid="careers-title">
              {t("pages.sections.joinTitleLead")} <span className="text-primary">{t("pages.sections.joinTitleAccent")}</span>
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="careers-description">
              {t("pages.sections.joinDesc")}
            </p>
            <Link href="/careers">
              <Button className="btn-primary inline-flex items-center px-6 py-3 rounded-xl font-semibold text-primary-foreground">
                {t("pages.sections.joinCta")}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
