import { useEffect, useState } from "react";
import penninNalamLogo from "@/assets/pennin-nalam-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade-out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-primary flex flex-col items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center animate-fade-in">
        <div className="mb-8 animate-float">
          <img 
            src={penninNalamLogo} 
            alt="Pennin Nalam Logo" 
            className="w-32 h-32 mx-auto drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-2">
          பெண்ணின் நலம்
        </h1>
        
        <h2 className="text-xl font-medium text-white/90 mb-4">
          Pennin Nalam
        </h2>
        
        <p className="text-lg text-white/80 max-w-xs mx-auto leading-relaxed">
          Empowering Women<br />
          Protecting Lives<br />
          <span className="text-sm">महिला सशक्तिकरण • பெண்கள் மேம்பாடு</span>
        </p>
      </div>
      
      <div className="absolute bottom-8">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
};