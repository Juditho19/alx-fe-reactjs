import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PostsComponent from "./components/PostsComponent.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is “fresh” for 30s → no refetch on remount during this time
      staleTime: 30 * 1000,
      // Cache stays in memory for 5 min after last unsubscribe (unmount)
      cacheTime: 5 * 60 * 1000,
      // Keep behaviour predictable for demos
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
        <h1>React Query Demo</h1>
        <div>
          <button onClick={() => setShow((s) => !s)}>
            {show ? "Unmount Posts" : "Mount Posts"}
          </button>
        </div>
        {show && <PostsComponent />}
      </div>

      {/* Optional but super helpful */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
