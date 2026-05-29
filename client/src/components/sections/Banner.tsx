import { StickyBanner } from "../ui/sticky-banner";
import { Shield, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { COMPLIANCE } from "@/data/contact";

export function Banner() {
  const { t } = useTranslation();
  return (
    <div className="fixed flex min-h-10 w-full flex-col z-50" role="region" aria-label="Company certifications">
      <StickyBanner className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <div className="flex items-center justify-center text-[11px] sm:text-sm text-white drop-shadow-md px-2 py-1.5">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6">
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white/90 shrink-0" aria-hidden="true" />
              <span className="font-medium text-white/90">{t("banner.gstin")}:</span>
              <span className="font-mono text-white font-semibold tracking-wide">
                {COMPLIANCE.gstin}
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/30" aria-hidden="true"></div>

            <div className="flex items-center space-x-1.5">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white/90 shrink-0" aria-hidden="true" />
              <span className="font-medium text-white/90">{t("banner.certified")}:</span>
              <span className="font-semibold text-white">
                {COMPLIANCE.iso}
              </span>
            </div>
          </div>
        </div>
      </StickyBanner>
    </div>
  );
}