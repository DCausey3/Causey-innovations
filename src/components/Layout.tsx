import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { CircuitBackground } from "./CircuitBackground";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <CircuitBackground />
      <Navigation />
      <main className="flex-1 pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
