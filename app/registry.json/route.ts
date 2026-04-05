import registry from "@/registry.json";

export function GET() {
  return new Response(JSON.stringify(registry, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
