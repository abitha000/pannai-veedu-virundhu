import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const WelcomeAnimation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("pvv-visited");
    if (!hasVisited) {
      setShow(true);
      sessionStorage.setItem("pvv-visited", "true");
      const timer = setTimeout(() => setShow(false), 3400);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background animate-welcome-exit">
      <img
        src={logo}
        alt="Pannai Veetu Virundhu"
        className="w-28 h-28 md:w-36 md:h-36 rounded-full animate-logo-reveal"
      />
      <h1 className="mt-6 font-heading text-2xl md:text-3xl font-bold text-primary opacity-0 animate-text-reveal">
        Pannai Veetu Virundhu
      </h1>
      <p className="mt-2 font-tamil text-sm text-muted-foreground opacity-0 animate-text-reveal" style={{ animationDelay: "0.9s" }}>
        நாட்டுக்கோழி கோர்சை வறுவல்
      </p>
    </div>
  );
};

export default WelcomeAnimation;
