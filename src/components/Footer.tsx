import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-warm-dark text-primary-foreground">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Pannai Veetu Virundhu" className="w-10 h-10 rounded-full" />
              <span className="font-heading font-bold text-lg">Pannai Veetu Virundhu</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Authentic Tamil Nadu village feast experience. Rooted in tradition, served with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Specialties", href: "#specialties" },
                { label: "Gallery", href: "#gallery" },
                { label: "Book a Table", href: "#booking" },
                { label: "Visit Us", href: "#location" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="tel:+919003600936" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91 9003600936
              </a>
              <a href="mailto:pannaiveetuvirudhu@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> pannaiveetuvirudhu@gmail.com
              </a>
              <a
                href="https://www.instagram.com/pannaiveetuvirundhu?igsh=NXlmZHY5NzZoam5n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" /> @pannaiveetuvirundhu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Pannai Veetu Virundhu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
