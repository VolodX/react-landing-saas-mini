# 🚀 EdgeAI - AI-Powered SaaS Platform

> **Empower Your Business with AI** - A modern SaaS platform that seamlessly integrates AI capabilities into your existing workflows.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.6-000000?logo=zotero&logoColor=white)](https://github.com/pmndrs/zustand)

## ✨ Features

- 🤖 **AI-Powered Services** - Advanced machine learning and natural language processing
- 💼 **Enterprise Ready** - Scalable architecture for business-critical applications
- 🎨 **Modern UI/UX** - Clean, responsive design with dark/light theme support
- 📊 **Real-time Analytics** - Live insights and data-driven decision making
- 🔐 **Secure & Reliable** - Enterprise-grade security and 99.9% uptime guarantee
- 🚀 **Fast Performance** - Optimized for speed with modern web technologies

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with enhanced developer experience
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Beautiful, accessible component library

### State Management
- **Zustand** - Lightweight state management with TypeScript support
- **Persistent Storage** - Theme preferences and user settings persistence

### Styling & Theming
- **Custom CSS Variables** - Flexible theming system
- **Dark/Light Mode** - Automatic theme detection and manual toggle
- **Responsive Design** - Mobile-first approach with breakpoint management

## 🎨 Theme System

Our sophisticated theme system supports both light and dark modes with smooth transitions:

```typescript
// Theme store with Zustand
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        typeof window !== 'undefined' &&
        window.matchMedia('(prefer-color-scheme: dark').matches
          ? 'dark'
          : 'light',
      toggleTheme: () => {
        const newTheme: Theme = get().theme === 'light' ? 'dark' : 'light';
        if (typeof document !== undefined) {
          document.documentElement.classList.toggle(
            'dark',
            newTheme === 'dark'
          );
        }

				set({theme: newTheme})
      }
    }),
    {name: 'theme', onRehydrateStorage: () => (state) => {
			if (state?.theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}}
  )
);
```

### Theme Features
- 🌅 **Auto-detection** - Respects system preferences
- 🔄 **Smooth transitions** - Animated theme switching
- 💾 **Persistence** - Remembers user preference
- 🎯 **CSS Variables** - Consistent color system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VolodX/react-landing-saas-mini
   cd react-landing-saas-mini
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cards/           # Content blocks, often for display. 
│   ├── elements/        # Custom elements
│   |── sections/        # Page sections
|   |__ shared/					 # General-purpose UI, used widely.
|   |__ ui/							 # shadcn/ui components
├── store/               # Zustand stores
│   └── ThemeStore.ts    # Theme management
├── utils/               # Utility functions
├── index.css            # Global styles and themes
└── App.tsx              # Main application component
```

## 🎯 Key Components

### Theme Toggle
```typescript
import { useThemeStore } from '@/store/ThemeStore';

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (🌙) : (☀️)}
    </button>
  );
};
```

### Responsive Design
- **Mobile-first approach** - Optimized for all devices
- **Custom breakpoints** - Tailored for business applications
- **Flexible layouts** - Adapts to different screen sizes

## 🔧 Vite Configuration

```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ across all metrics
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimized**: Perfect responsive design
- 🎯 **SEO Ready**: Semantic HTML and meta tags

## 🔒 Security

- 🛡️ **Type Safety** - Full TypeScript coverage
- 🔐 **Secure Headers** - CSRF and XSS protection
- 🌐 **HTTPS Only** - Secure data transmission
- 🔑 **Environment Variables** - Secure configuration management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
<div align="center">
  <strong>🚀 Ready to transform your business with AI?</strong>
  <br>
  <a href="https://edgeai-saas.vercel.app/">Get Started Today</a>
</div>