# WeatherApp TypeScript

A modern weather application built with React, TypeScript, and Vite, featuring real-time weather data and forecasts.

## Tech Stack

- **React** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Axios** - HTTP client for API requests
- **React Query** - Powerful data fetching and caching library

## Why Axios?

**Axios** is used for making HTTP requests to the weather API. Key benefits include:

- **Interceptors** - Request/response interceptors for centralized error handling and request transformation
- **Request Cancellation** - Ability to cancel requests when components unmount, preventing memory leaks
- **Timeout Support** - Built-in timeout handling for slow API responses
- **Automatic Data Transformation** - Automatically transforms request and response data
- **XSRF Protection** - Built-in Cross-Site Request Forgery token handling
- **Promise-based API** - Clean, modern async/await syntax

## Why React Query?

**React Query** (TanStack Query) handles server state management and data synchronization. Key benefits include:

- **Automatic Caching** - Intelligent caching that reduces unnecessary API calls and improves performance
- **Background Refetching** - Automatically refreshes stale data in the background while keeping the UI responsive
- **Request Deduplication** - Multiple identical requests within milliseconds are batched into a single API call
- **Automatic Retry Logic** - Built-in retry strategy for failed requests with exponential backoff
- **Optimistic Updates** - Update the UI immediately while the request is in progress
- **Minimal Boilerplate** - Eliminates manual loading/error state management
- **DevTools** - Powerful debugging tools to inspect queries, cache, and request history
- **Stale Time Management** - Configurable cache invalidation and garbage collection
- **Pagination & Infinite Queries** - Built-in support for paginated and infinite scroll data

Together, **Axios** and **React Query** create a robust, efficient data fetching solution that provides:

✅ Better performance through intelligent caching  
✅ Improved reliability with automatic retries and error handling  
✅ Enhanced user experience with background updates and deduplication  
✅ Reduced boilerplate code and complexity  
✅ Superior debugging capabilities

## Project Structure

```
src/
├── api/
│   ├── config.ts          # Axios instance configuration
│   ├── weather.ts         # Weather API endpoints
│   └── weather.types.ts   # TypeScript type definitions
├── components/
│   ├── layout.tsx         # Main layout component
│   └── ui/
│       ├── box.tsx        # Generic box component
│       ├── forecast.tsx   # Forecast display component
│       └── weatherIcon.tsx # Weather icon component
├── hooks/
│   ├── useWeather.ts      # React Query hook for weather data
│   └── geocoding.ts       # Geocoding utility hook
├── App.tsx                # Root app component
└── main.tsx               # Application entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
