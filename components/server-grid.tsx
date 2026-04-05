"use client";

import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search, Plug } from "lucide-react";

export interface MCPServer {
  id: string;
  name: string;
  description: string;
  category: string;
  website: string;
  endpoint: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "ai-ml": "bg-purple-100 text-purple-800",
  "cloud": "bg-sky-100 text-sky-800",
  "communication": "bg-green-100 text-green-800",
  "data-analysis": "bg-orange-100 text-orange-800",
  "database": "bg-yellow-100 text-yellow-800",
  "development": "bg-blue-100 text-blue-800",
  "monitoring": "bg-red-100 text-red-800",
  "payments": "bg-emerald-100 text-emerald-800",
  "productivity": "bg-indigo-100 text-indigo-800",
};

function categoryLabel(cat: string) {
  return cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ServerGrid({ servers }: { servers: MCPServer[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(servers.map((s) => s.category))).sort();
    return ["all", ...cats];
  }, [servers]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return servers.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      const matchesCategory = activeCategory === "all" || s.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [servers, query, activeCategory]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          className="pl-9"
          placeholder="Search servers by name, description, or category…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-3.5 py-1 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat === "all" ? "All" : categoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? "server" : "servers"} found
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-slate-400">No servers match your search.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((server) => (
            <Card key={server.id} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{server.name}</CardTitle>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      CATEGORY_COLORS[server.category] ?? "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {categoryLabel(server.category)}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">{server.description}</p>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-2 pt-3 border-t border-slate-100">
                {server.endpoint && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 w-full min-w-0">
                    <Plug className="h-3.5 w-3.5 shrink-0" />
                    <code className="truncate font-mono text-xs text-slate-600">{server.endpoint}</code>
                  </div>
                )}
                {server.website && (
                  <a
                    href={server.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Website
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
