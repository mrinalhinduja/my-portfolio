import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Lightbulb, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export function InteractiveSimplifier() {
  const [userInput, setUserInput] = useState('');
  const [isSimplifying, setIsSimplifying] = useState(false);
  const [simplified, setSimplified] = useState<string[] | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Predefined simplification examples for common tasks
  const simplificationDatabase: Record<string, string[]> = {
    'learning a new language': [
      'Start with 10 basic words daily',
      'Use a simple language app for 15 minutes',
      'Practice one conversation phrase each day',
      'Watch one short video with subtitles weekly'
    ],
    'starting a business': [
      'Identify one problem you can solve',
      'Create a simple solution (MVP)',
      'Find 10 potential customers to talk to',
      'Test your idea with minimal investment'
    ],
    'getting organized': [
      'Choose one area to organize first',
      'Sort items into keep, donate, trash',
      'Assign everything a specific place',
      'Spend 10 minutes daily maintaining order'
    ],
    'building a website': [
      'Define your main goal in one sentence',
      'Choose a simple website builder',
      'Create 3-5 essential pages only',
      'Launch with basics, improve gradually'
    ],
    'losing weight': [
      'Replace one unhealthy meal daily',
      'Take a 15-minute walk after lunch',
      'Drink water before each meal',
      'Track progress weekly, not daily'
    ],
    'saving money': [
      'Track expenses for one week',
      'Identify your top 3 unnecessary expenses',
      'Automate savings of $50/month',
      'Review and adjust monthly'
    ],
    'learning to code': [
      'Pick one programming language',
      'Complete 30 minutes of tutorials daily',
      'Build one tiny project weekly',
      'Join a beginner-friendly community'
    ]
  };

  const getGenericSimplification = (task: string): string[] => {
    return [
      `Break "${task}" into smaller, manageable parts`,
      'Focus on one step at a time',
      'Set a realistic timeline for each part',
      'Start with the easiest or most important step',
      'Celebrate small wins along the way'
    ];
  };

  const handleSimplify = async () => {
    if (!userInput.trim()) return;

    setIsSimplifying(true);
    setShowResult(false);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if we have a specific simplification for this task
    const lowerInput = userInput.toLowerCase().trim();
    let steps: string[] = [];

    // Check for exact matches or partial matches
    for (const [key, value] of Object.entries(simplificationDatabase)) {
      if (lowerInput.includes(key) || key.includes(lowerInput)) {
        steps = value;
        break;
      }
    }

    // If no specific match, use generic simplification
    if (steps.length === 0) {
      steps = getGenericSimplification(userInput);
    }

    setSimplified(steps);
    setIsSimplifying(false);
    setShowResult(true);
  };

  const handleReset = () => {
    setUserInput('');
    setSimplified(null);
    setShowResult(false);
  };

  const exampleTasks = [
    'Learning a new language',
    'Starting a business',
    'Getting organized',
    'Building a website'
  ];

  return (
    <section id="interactive" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            The Plainli Way
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience my approach to simplification. Tell me something complex you're working on, 
            and I'll show you how to break it down into simple, actionable steps.
          </p>
        </div>

        <Card className="border-2 border-primary/10 shadow-lg">
          <CardContent className="p-8">
            {!showResult ? (
              <div className="space-y-6">
                <div>
                  <label htmlFor="task-input" className="block text-foreground mb-3">
                    What complex task would you like to simplify?
                  </label>
                  <Input
                    id="task-input"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="e.g., Learning a new skill, organizing my life, starting a project..."
                    className="text-lg py-4"
                    disabled={isSimplifying}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground">Try:</span>
                  {exampleTasks.map((task) => (
                    <Button
                      key={task}
                      variant="outline"
                      size="sm"
                      onClick={() => setUserInput(task)}
                      disabled={isSimplifying}
                      className="text-xs"
                    >
                      {task}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={handleSimplify}
                  disabled={!userInput.trim() || isSimplifying}
                  className="w-full group relative overflow-hidden"
                  size="lg"
                >
                  {isSimplifying ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                      Simplifying...
                    </div>
                  ) : (
                    <>
                      Simplify This
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    Here's how to simplify: "{userInput}"
                  </h3>
                  <p className="text-muted-foreground">
                    Break it down into these manageable steps:
                  </p>
                </div>

                <div className="space-y-3">
                  {simplified?.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg border border-primary/10 opacity-0 translate-y-5 animate-[fadeInUp_0.5s_ease-out_forwards]"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="group"
                  >
                    Try Another
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get More Help
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            This is just a taste of how I approach complex problems. 
            Interested in working together on your next project?
          </p>
        </div>
      </div>
    </section>
  );
}