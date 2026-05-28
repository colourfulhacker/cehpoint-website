import { StickyBanner } from "../ui/sticky-banner";
import { Shield, Award } from "lucide-react";

export function Banner() {
  return (
    <div className="fixed flex min-h-10 w-full flex-col z-50" role="region" aria-label="Company certifications">
      <StickyBanner className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <div className="flex items-center justify-center text-[11px] sm:text-sm text-white drop-shadow-md px-2 py-1.5">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6">
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white/90 shrink-0" aria-hidden="true" />
              <span className="font-medium text-white/90">GSTIN:</span>
              <span className="font-mono text-white font-semibold tracking-wide">
                19ETGPB5153Q1Z5
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/30" aria-hidden="true"></div>

            <div className="flex items-center space-x-1.5">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white/90 shrink-0" aria-hidden="true" />
              <span className="font-medium text-white/90">Certified:</span>
              <span className="font-semibold text-white">
                ISO 9001:2015
              </span>
            </div>
          </div>
        </div>
      </StickyBanner>
    </div>
  );
}