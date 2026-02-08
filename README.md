# Fullstack Portfolio Website

A modern, comprehensive portfolio website built with React, Node.js, MongoDB, and featuring a blog section, admin dashboard, and microfrontend architecture.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **pnpm** ([Install](https://pnpm.io/installation))

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies for all packages
pnpm install

# Start development servers
pnpm dev

# Or start individual services
pnpm dev:frontend  # Frontend on http://localhost:5173
pnpm dev:backend   # Backend on http://localhost:3000
```

## 📁 Project Structure

This is a **monorepo** using pnpm workspaces:

```
fullstack-portfolio/
├── packages/
│   ├── frontend/        # React SPA with TypeScript
│   ├── backend/         # Node.js Express API
│   └── shared/          # Shared types & utilities
├── .github/workflows/   # CI/CD pipelines
├── docs/                # Documentation
└── PROJECT_PLAN.md      # Detailed project roadmap
```

## 📖 Documentation

- **[PROJECT_PLAN.md](./PROJECT_PLAN.md)** - Full project roadmap, architecture, and timeline
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - System design & microfrontend approach (coming soon)
- **[docs/API_DOCS.md](./docs/API_DOCS.md)** - API documentation (coming soon)
- **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Deployment guide (coming soon)
- **[docs/SEO_STRATEGY.md](./docs/SEO_STRATEGY.md)** - Blog SEO optimization (coming soon)

## 🛠️ Available Scripts

### Root Level
```bash
pnpm dev              # Start all services
pnpm build            # Build all packages
pnpm test             # Run all tests
pnpm test:e2e         # Run E2E tests
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code with Prettier
pnpm type-check       # TypeScript type checking
```

### Frontend
```bash
pnpm dev:frontend     # Start dev server (port 5173)
pnpm build:frontend   # Production build
pnpm test:frontend    # Component tests
```

### Backend
```bash
pnpm dev:backend      # Start dev server (port 3000)
pnpm build:backend    # Build for production
pnpm test:backend     # API tests
```

## 🎯 Features (Planned)

### Core Pages
- ✅ Home - Hero section and quick intro
- ✅ About - Bio and professional journey
- ✅ Skills - Categorized skills showcase
- ✅ Projects - Portfolio with filtering
- ✅ Contact - Contact form with email integration
- ✅ Blog - Articles with SEO optimization

### Advanced Features
- ✨ Microfrontend architecture (Blog as micro-app)
- ✨ Protected admin dashboard for content management
- ✨ Blog post editor with WYSIWYG
- ✨ Contact form submissions view
- ✨ Analytics dashboard
- ✨ Dark/Light theme toggle

## 🔧 Tech Stack

### Frontend
- React 18+
- Vite
- TypeScript
- Tailwind CSS + SASS
- React Router v6
- Vitest + React Testing Library
- Playwright E2E
- Module Federation

### Backend
- Node.js 18+
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Vitest + Supertest

### DevOps
- pnpm Workspaces
- GitHub Actions (CI/CD)
- Vercel (Frontend hosting)
- Render / Railway (Backend hosting)
- MongoDB Atlas (Database)

## 🧪 Testing

```bash
# Component tests
pnpm test:frontend

# API tests
pnpm test:backend

# End-to-end tests
pnpm test:e2e

# With coverage
pnpm test -- --coverage
```

## 🚀 Deployment

### Frontend (Vercel)
- Auto-deploys from `main` branch
- Preview builds for PRs
- Built-in SEO optimizations

### Backend (Render / Railway)
- Auto-deploys from GitHub
- MongoDB Atlas integration

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed setup.

## 📱 Environment Setup

Create `.env` files in respective packages:

### Frontend (`packages/frontend/.env`)
```
VITE_API_URL=http://localhost:3000/api
VITE_APP_URL=http://localhost:5173
```

### Backend (`packages/backend/.env`)
```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-secret-key
```

## 🔒 Security

- Environment variables not committed
- JWT-based authentication
- CORS properly configured
- Input validation & sanitization
- Rate limiting on APIs
- HTTPS enforced in production

## 📊 Project Status

- [x] Project planning
- [x] Repository initialization
- [ ] Monorepo setup with pnpm
- [ ] Frontend setup
- [ ] Backend setup
- [ ] Testing infrastructure
- [ ] CI/CD pipelines
- [ ] Deployment setup

See [PROJECT_PLAN.md](./PROJECT_PLAN.md) for detailed timeline.

## 🤝 Contributing

This is a personal project, but feel free to fork and adapt for your needs.

## 📄 License

MIT

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [MongoDB University](https://university.mongodb.com)
- [Module Federation](https://module-federation.io)

## 📞 Contact

For questions or suggestions about this portfolio, visit the contact page (once deployed!).

---

**Last Updated**: February 2026  
**Status**: In Development
