import { ServerGrid, type MCPServer } from "@/components/server-grid";
import registry from "@/registry.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">MCP Server Registry</h1>
              <p className="mt-1 text-sm text-slate-500">
                A public registry of{" "}
                <span className="font-medium text-slate-700">{registry.length}</span> Model Context
                Protocol servers
              </p>
            </div>
            <a
              href="/registry.json"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              registry.json
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ServerGrid servers={registry as MCPServer[]} />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-slate-400">
            MCP Server Registry &mdash; data available at{" "}
            <a href="/registry.json" className="underline hover:text-slate-600">
              /registry.json
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
