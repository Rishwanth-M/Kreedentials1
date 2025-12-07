// src/Layout.jsx
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
