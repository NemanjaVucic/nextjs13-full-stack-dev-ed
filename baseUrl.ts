export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
}
