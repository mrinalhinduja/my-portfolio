import { Card, CardContent } from './ui/card';
import { Lightbulb, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Content Creator',
      description: 'I create helpful content that breaks down complex topics into simple, actionable insights.'
    },
    {
      icon: Target,
      title: 'Tool Builder',
      description: 'Building simple, focused tools that solve real problems without unnecessary complexity.'
    },
    {
      icon: Zap,
      title: 'Simplicity First',
      description: 'Everything I create follows one principle: make it simple, make it work, make it beautiful.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
              <ImageWithFallback
                src="/images/ankit.jpeg"
                alt="Ankit Patel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            About Me & Plainli
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm Ankit, and I believe in the power of simplicity. Through <strong className="text-foreground">Plainli</strong>, 
            I create content and build tools that make complex things beautifully simple and accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-secondary/50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-medium text-foreground mb-4">
            The Plainli Mission
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm building Plainli to be your go-to place for simple solutions. Currently focused on creating 
            valuable content, with exciting tools and products coming soon. Join me on this journey!
          </p>
        </div>
      </div>
    </section>
  );
}