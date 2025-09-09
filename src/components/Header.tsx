import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
              <ImageWithFallback
                src="/images/ankit.jpeg"
                alt="Ankit Patel"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg font-medium text-primary">plainli</span>
              <span className="text-sm text-muted-foreground ml-1">by Ankit</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('latest-post')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Latest Post
            </button>
            <button
              onClick={() => scrollToSection('interactive')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Try Simplifier
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('latest-post')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Latest Post
              </button>
              <button
                onClick={() => scrollToSection('interactive')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Try Simplifier
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}