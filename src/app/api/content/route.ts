import { translations } from "@/lib/i18n";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    meta: {
      site: "tomag.xyz",
      author: "Tomáš Magula",
      languages: ["en", "sk"],
      updatedAt: new Date().toISOString(),
    },
    content: translations,
  });
}
