# 🌤️ WeatherApp TypeScript

A modern, type-safe weather application built with React, TypeScript, and Vite. Get real-time weather data, forecasts, and location-based weather information with a responsive and intuitive user interface.

## Features

✨ **Real-time Weather Data** - Fetch current weather conditions with temperature, humidity, and wind speed

📍 **Location-Based** - Automatic location detection or search by city

🌡️ **Weather Forecasts** - 5-day weather forecasts with hourly breakdowns

🎨 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

⚡ **Lightning-Fast Performance** - Powered by Vite for instant dev server startup

🔄 **Smart Caching** - Intelligent data caching with React Query to minimize API calls

🛡️ **Type-Safe** - Full TypeScript support for better code quality and IDE intelligence

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building interactive components |
| **TypeScript** | Type-safe JavaScript for enhanced developer experience |
| **Vite** | Next-generation build tool and dev server |
| **Axios** | HTTP client for API requests with interceptors |
| **React Query** | Server state management and data fetching |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **PostCSS** | CSS transformation and optimization |

### Why Axios?

**Axios** is used for making HTTP requests to the weather API with these key benefits:

- **Request/Response Interceptors** - Centralized error handling and request transformation
- **Request Cancellation** - Cancel requests when components unmount, preventing memory leaks
- **Timeout Support** - Built-in timeout handling for slow API responses
- **Automatic Data Transformation** - Transforms request and response data automatically
- **XSRF Protection** - Built-in Cross-Site Request Forgery token handling
- **Promise-based API** - Clean, modern async/await syntax

### Why React Query?

**React Query** (TanStack Query) handles server state management and data synchronization:

- **Automatic Caching** - Intelligent caching reduces unnecessary API calls and improves performance
- **Background Refetching** - Refreshes stale data automatically while keeping UI responsive
- **Request Deduplication** - Batches multiple identical requests into a single API call
- **Automatic Retry Logic** - Built-in retry strategy with exponential backoff
- **Minimal Boilerplate** - Eliminates manual loading/error state management
- **DevTools Integration** - Powerful debugging tools for queries and cache inspection
- **Stale Time Management** - Configurable cache invalidation and garbage collection

**Result:** A robust, efficient data fetching solution with better performance, reliability, and user experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0 or higher) or **yarn**
- A code editor like [VS Code](https://code.visualstudio.com/)
- An API key from [OpenWeatherMap](https://openweathermap.org/api) or similar weather service

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kaushalsahu07/weatherapp-ts.git
   cd weatherapp-ts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Rename a `.env.example -> .env` file in the root directory and add your API credentials:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. **Run the setup:**
   ```bash
   npm run dev
   ```

## Docker Setup

**Prerequisites:** Docker & Docker Compose

### Quick Start

1. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

2. **Add your API key:**
   ```env
   VITE_API_KEY=your_openweathermap_api_key_here
   ```

3. **Run:**
   ```bash
   docker compose up -d
   ```

Access at: `http://localhost:5173`

### Build Options

**Option 1: Build from Dockerfile (default)**
```yaml
# docker-compose.yml
services:
  weatherapp:
    build: .  # Builds locally from Dockerfile
    ports:
      - "5173:5173"
    env_file: .env
    volumes:
      - .:/WEATHERAPP
      - /WEATHERAPP/node_modules
```

**Option 2: Use Pre-built Image**
```yaml
# docker-compose.yml
services:
  weatherapp:
    image: kaushalsahu/weatherapp:1.0  # Replace with your image
    ports:
      - "5173:5173"
    env_file: .env
    volumes:
      - .:/WEATHERAPP
      - /WEATHERAPP/node_modules
```

Then run:
```bash
docker compose up -d
```

### Common Commands

```bash
docker compose up -d          # Start container
docker compose logs -f        # View logs
docker compose down           # Stop container
docker compose down -v        # Stop & remove volumes
docker compose up -d --build  # Rebuild & start
```

### Troubleshooting

**Container won't start:**
```bash
docker compose logs weatherapp
```

**Port already in use:**
Edit `docker-compose.yml` - change `5173` to another port (e.g., `5174`)

## Project Structure

```
weatherapp-ts/
├── src/
│   ├── api/
│   │   ├── config.ts              # Axios instance & configuration
│   │   ├── weather.ts             # Weather API endpoints
│   │   └── weather.types.ts       # TypeScript type definitions
│   ├── components/
│   │   ├── layout.tsx             # Main layout component
│   │   └── ui/
│   │       ├── box.tsx            # Generic box/card component
│   │       ├── forecast.tsx       # Forecast display component
│   │       ├── weatherIcon.tsx    # Weather icon component
│   │       └── error.tsx          # Error display component
│   ├── hooks/
│   │   ├── useWeather.ts          # React Query hook for weather data
│   │   └── geocoding.ts           # Geocoding utility for location search
│   ├── assets/                    # Static images and icons
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/                         # Static assets
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.js               # ESLint rules
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies and scripts
└── README.md                       # This file
```

## License

This project is open source and available under the MIT License.

## Contact & Links

Have questions or want to connect? Reach out through any of these channels:

- **Email:** [kaushalsahu.me@gmail.com](mailto:kaushalsahu.me@gmail.com)
- **GitHub:** [@kaushalsahu07](https://github.com/kaushalsahu07)
- **LinkedIn:** [@kaushalsahu07](https://www.linkedin.com/in/kaushalsahu07)
- **Portfolio:** [kaushalsahu.tech](https://kaushalsahu.tech/)
- **Twitter/X:** [@kaushalsahu_07](https://x.com/kaushalsahu_07)
- **Instagram:** [@cd.kaushal](https://www.instagram.com/cd.kaushal)

---

<div align="center">

**Made with ❤️ by [Kaushal Sahu](https://github.com/kaushalsahu07)**

</div>
