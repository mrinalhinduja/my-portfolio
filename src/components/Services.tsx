import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Globe, Palette, Code, Smartphone } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Content Creation',
      description: 'I create helpful articles, tutorials, and guides that make complex topics simple and actionable.',
      features: ['Tech Tutorials', 'Productivity Tips', 'Tool Reviews', 'Simple Guides'],
      price: 'Free & Premium'
    },
    {
      icon: Palette,
      title: 'Educational Content',
      description: 'Breaking down complex concepts into bite-sized, easy-to-understand content for everyone.',
      features: ['Video Content', 'Written Guides', 'Step-by-Step Tutorials', 'Quick Tips'],
      price: 'Always Free'
    },
    {
      icon: Code,
      title: 'Simple Tools',
      description: 'Building lightweight, focused tools that solve specific problems without the bloat.',
      features: ['Web Tools', 'Productivity Apps', 'Calculators', 'Utilities'],
      price: 'Coming Soon'
    },
    {
      icon: Smartphone,
      title: 'Consulting',
      description: 'Personal consultation on simplifying your digital workflow and choosing the right tools.',
      features: ['Tool Selection', 'Workflow Optimization', 'Digital Simplification', '1-on-1 Guidance'],
      price: 'Available Now'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently focused on creating valuable content and building simple tools. 
            Here's what Plainli offers now and what's coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-medium">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Have an idea for a simple tool or content topic? <span className="text-primary font-medium">I'd love to hear about it!</span>
          </p>
        </div>
      </div>
    </section>
  );
}