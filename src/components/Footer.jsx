export default function Footer() {
  return (
    <footer className="bg-white shadow-inner text-center py-3 text-sm text-slate-500">
      © {new Date().getFullYear()} HealthCare Dashboard — All rights reserved.
    </footer>
  );
}
