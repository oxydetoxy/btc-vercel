import Link from "next/link";
import { Logo } from "@/components/Logo";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/classes/access", label: "Classes" },
  { href: "/sessions", label: "Sessions" },
  { href: "/coaching", label: "Coaching" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#fafaf9] text-black">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <Logo variant="footer" className="hover:opacity-90 transition-opacity" />
            <p className="mt-4 font-body text-sm text-black/80 max-w-sm">
              Empowering you to create a life of infinite possibilities with joy,
              awareness, and transformation.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-accent text-xs uppercase tracking-[0.2em] text-black/90 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-xs text-black/60">
            © {new Date().getFullYear()} Be The Change. All rights reserved.
          </p>
          <a
            href="mailto:contactus@bethechangebyaradhana.com"
            className="font-body text-xs text-black/80 hover:text-black transition-colors"
          >
            contactus@bethechangebyaradhana.com
          </a>
        </div>
      </div>
    </footer>
  );
}
