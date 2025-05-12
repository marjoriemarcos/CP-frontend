import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="relative mx-auto h-[calc(100vh-var(--spacing-navbar))] overflow-y-auto">
      <Outlet />
    </main>
  );
}

export default App;
