<div align="center">

# gohit.xyz

**A modern, high-performance web application built with cutting-edge technologies**

[![Built with Astro](https://img.shields.io/badge/Astro-5.16.4-BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Bun Runtime](https://img.shields.io/badge/Bun-Runtime-000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)

</div>

---

## 📸 Preview

![Screenshot](public/github/screenshot.webp)

## ⚡ Performance

![Performance](public/github/performance.webp)

---

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🌙 **Dark/Light Mode** - Automatic theme switching with system preference support
- 🌍 **Internationalization** - Multi-language support (English, Spanish, Mandarin)
- ⚡ **Lightning Fast** - Optimized performance with Astro's island architecture
- 📱 **Fully Responsive** - Perfect experience across all devices
- ♿ **Accessible** - Built with accessibility best practices
- 🔍 **SEO Optimized** - Comprehensive meta tags and structured data

---

## 🛠️ Tech Stack

### Core Framework

- **[Astro](https://astro.build)** `v5.16.4` - The web framework for content-driven websites
- **[React](https://react.dev)** `v19.2.1` - Interactive UI components
- **[Bun](https://bun.sh)** - Fast all-in-one JavaScript runtime

### Styling

- **[Tailwind CSS](https://tailwindcss.com)** `v4.1.17` - Utility-first CSS framework
- **[@tailwindcss/vite](https://tailwindcss.com/docs/vite)** `v4.1.17` - Tailwind Vite plugin

### Development Tools

- **[Prettier](https://prettier.io)** `v3.7.4` - Code formatter
- **[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)** `v0.14.1` - Astro file formatting
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** `v0.7.2` - Tailwind class sorting

### TypeScript Support

- **[@types/react](https://www.npmjs.com/package/@types/react)** `v19.2.7`
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** `v19.2.3`

---

## 🚀 Quick Start

### Prerequisites

Make sure you have [Bun](https://bun.sh) installed on your system:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gohitx
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:4321`

---

## 📦 Available Scripts

| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `bun dev`     | Start development server with hot-reload |
| `bun build`   | Build production-ready site              |
| `bun preview` | Preview production build locally         |
| `bun astro`   | Run Astro CLI commands                   |

---

## 🏗️ Project Structure

```
gohitx/
├── public/              # Static assets
│   └── github/          # GitHub assets (screenshots, etc.)
├── src/
│   ├── components/      # Reusable components
│   │   ├── me/          # Personal/profile components
│   │   └── ui/          # UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   │   ├── me/          # Personal pages
│   │   ├── es/          # Spanish translations
│   │   └── zh/          # Chinese translations
│   ├── sections/        # Page sections
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Dependencies and scripts
```

---

## 🎨 Key Integrations

### Adding Tailwind CSS

```bash
bunx astro add tailwindcss
```

### Adding React

```bash
bunx astro add react
```

### Setting up Prettier

```bash
bun add -d prettier prettier-plugin-astro prettier-plugin-tailwindcss
```

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Built with ❤️ using Astro, React, and Tailwind CSS**

</div>
