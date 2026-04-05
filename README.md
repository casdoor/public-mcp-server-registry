# Public MCP Server Registry

A public registry of [Model Context Protocol](https://modelcontextprotocol.io) (MCP) servers, with a browsable web UI built on Next.js + shadcn UI.

🌐 **Website:** [https://mcp.casdoor.org](https://mcp.casdoor.org)
📄 **Registry data:** [https://mcp.casdoor.org/registry.json](https://mcp.casdoor.org/registry.json)

---

## Adding a new MCP server

### 1. Fork & clone this repository

```bash
git clone https://github.com/YOUR_USERNAME/public-mcp-server-registry.git
cd public-mcp-server-registry
```

### 2. Add your server to `registry.json`

Open [`registry.json`](registry.json) and append a new entry to the array:

```json
{
  "id": "your-server-id",
  "name": "Your Server Name",
  "description": "One-line description of what this server does.",
  "category": "productivity",
  "website": "https://your-website.com",
  "endpoint": "wss://your-endpoint.example.com"
}
```

**Field reference:**

| Field | Required | Description |
|---|---|---|
| `id` | ✅ | Unique identifier, lowercase with hyphens (e.g. `my-server`) |
| `name` | ✅ | Display name shown in the registry |
| `description` | ✅ | Short, one-line description |
| `category` | ✅ | One of the categories below |
| `website` | ✅ | Maintainer or product website URL |
| `endpoint` | ✅ | Production WebSocket endpoint URL |

**Available categories:**

| Value | Description |
|---|---|
| `ai-ml` | AI & machine learning tools |
| `cloud` | Cloud infrastructure & services |
| `communication` | Messaging, email & collaboration |
| `data-analysis` | Data processing & analytics |
| `database` | Databases & data storage |
| `development` | Developer tools & code platforms |
| `monitoring` | Observability & monitoring |
| `payments` | Payments, billing & fintech |
| `productivity` | Productivity & business apps |

### 3. Open a Pull Request

Submit your PR with the updated `registry.json`. Once merged, the registry and website will reflect your server automatically.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Import this repository in the [Vercel dashboard](https://vercel.com/new).
2. Vercel auto-detects Next.js at the root — no extra configuration needed.
3. No environment variables are required.
