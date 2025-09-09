import { Separator } from './ui/separator';
import { Mail, Globe, Heart } from 'lucide-react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-foreground mb-3">
              plainli.com
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Hi, I'm Ankit! Through Plainli, I create content and build simple tools
              that make complex things beautifully simple.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">ankit@plainli.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-medium text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* What I Do */}
          <div className="md:col-span-1">
            <h4 className="font-medium text-foreground mb-3">What I Do</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Content Creation</li>
              <li>Educational Content</li>
              <li>Simple Tools</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} plainli.com. All rights reserved.
          </p>

          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm flex items-center gap-2">
              Built with
              <span className="inline-flex items-center">
                <Heart className="h-4 w-4 text-red-500" aria-hidden="true" />
                <span className="sr-only">love</span>
              </span>
              and AI by Mrinal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
