export function GET() {
  return Response.json({ demo: process.env.DEMO_MODE === "true" });
}
