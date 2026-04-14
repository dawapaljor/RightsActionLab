import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE_CONTENT } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-secondary p-1.5 rounded-sm">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl leading-none tracking-tight">Rights Action Lab</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-sans font-semibold">Human Rights & Digital Security</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-sm font-semibold uppercase tracking-widest hover:text-secondary transition-colors ${location.pathname === link.href ? 'text-secondary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button variant="secondary" className="font-bold uppercase tracking-widest text-xs px-6" asChild>
              <Link to="/donate">Support Our Work</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-primary-foreground" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-primary text-primary-foreground border-primary">
                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-heading font-semibold hover:text-secondary transition-colors border-b border-white/10 pb-2 ${location.pathname === link.href ? 'text-secondary' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button variant="secondary" className="w-full py-6 text-lg font-bold" asChild>
                    <Link to="/donate" onClick={() => setIsOpen(false)}>Donate Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-secondary" />
              <span className="font-heading font-bold text-3xl tracking-tight">Rights Action Lab</span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed italic mb-8">
              Supporting mission-aligned projects that advance human rights for people living under extreme repression through secure digital communications and creative nonviolent activism.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-secondary uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm font-semibold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-secondary transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/donate" className="hover:text-secondary transition-colors">Support Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <p>© {new Date().getFullYear()} Rights Action Lab. All rights reserved.</p>
          <p>Nonprofit 501(c)(3) Charitable Organization | Tax ID: {SITE_CONTENT.taxId}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/30 selection:text-primary">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
