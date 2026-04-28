import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#A82323] font-display text-sm leading-relaxed border-t-[6px] border-[#A82323] w-full pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
        {/* Brand / Legal */}
        <div className="flex flex-col gap-6">
          <span className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              architecture
            </span>
            H.E.D
          </span>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} House Extension Dublin. Trusted
            house extension builders since 2010.
          </p>
          <div className="text-slate-400 text-xs leading-relaxed not-italic">
            77 Sir John Rogerson&apos;s Quay,
            <br />
            Grand Canal Dock,
            <br />
            Dublin 2, D02 VK60
            <br />
            <a
              href="tel:+35312308892"
              className="hover:text-[#A82323] transition-colors"
            >
              +353 1 230 8892
            </a>
            <br />
            <a
              href="mailto:info@houseextensiondublin.ie"
              className="hover:text-[#A82323] transition-colors break-all"
            >
              info@houseextensiondublin.ie
            </a>
            <br />
            Mon&ndash;Sun 8AM&ndash;6PM
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider mb-2">
            Services
          </h4>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/services"
          >
            All Services
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/services/kitchen-extension"
          >
            Kitchen Extensions
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/services/attic-conversion"
          >
            Attic Conversions
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/services/home-renovations"
          >
            Home Renovations
          </Link>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider mb-2">
            Areas Served
          </h4>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/areas"
          >
            All Areas
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <span className="text-slate-400">Dublin 2</span>
            <span className="text-slate-400">Dublin 4</span>
            <span className="text-slate-400">Dublin 6</span>
            <span className="text-slate-400">Tallaght</span>
            <span className="text-slate-400">Swords</span>
            <span className="text-slate-400">Malahide</span>
            <span className="text-slate-400">Blackrock</span>
            <Link
              className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
              href="/areas/drogheda"
            >
              Drogheda
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider mb-2">
            Company
          </h4>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/faq"
          >
            FAQ
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-slate-400 hover:text-[#e1e2b8] transition-colors duration-200"
            href="/terms"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
