import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-4">© {new Date().getFullYear()} Smart Sparx — Built with ❤️</div>
    </footer>
  );
}
