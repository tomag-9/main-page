import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = process.env.NEXT_PUBLIC_SITE_HOST ?? "tomag.xyz";
const FORCE_HTTPS_REDIRECT = process.env.FORCE_HTTPS_REDIRECT === "true";

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function proxy(request: NextRequest) {
  const incomingHost = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const forwardedProto = (request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();
  const cfVisitor = request.headers.get("cf-visitor") ?? "";
  const isHttpsFromCloudflare = cfVisitor.includes('"scheme":"https"');
  const isHttps = forwardedProto === "https" || isHttpsFromCloudflare;

  if (!incomingHost || isLocalHost(incomingHost)) {
    return NextResponse.next();
  }

  const needsCanonicalHost = incomingHost !== CANONICAL_HOST;
  const needsHttps = FORCE_HTTPS_REDIRECT && !isHttps;

  if (!needsCanonicalHost && !needsHttps) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = "https";
  redirectUrl.host = CANONICAL_HOST;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
