// components/FooterContent.tsx
"use client";

import { Coffee } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n";

export default function FooterContent() {
  const { t } = useLocale();

  return (
    <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-zinc-300/75">
      {"credit" in t.footer ? (
        <>
          <span>{t.footer.credit}</span>
          <Coffee size={16} weight="regular" className="shrink-0 text-amber-300" aria-hidden="true" />
        </>
      ) : (
        <>
          <span>{t.footer.madeWith}</span>
          <Coffee size={16} weight="regular" className="shrink-0 text-amber-300" aria-hidden="true" />
          <span>{t.footer.madeWithSuffix}</span>
        </>
      )}
      <span>&copy; {new Date().getFullYear()}</span>
    </p>
  );
}
