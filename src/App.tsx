import {
  QueryClientProvider,
} from "@tanstack/react-query";

import { queryClient } from "./app/queryClient";

import AppRouter from "./app/AppRouter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;