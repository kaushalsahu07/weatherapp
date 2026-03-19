import './index.css'
import Layout from './components/layout'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
    </>
  )
}

export default App
