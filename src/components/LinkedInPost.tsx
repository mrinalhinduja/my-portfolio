import { ExternalLink, Heart, MessageCircle, Repeat2, Send, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import { useRef } from 'react';

interface LinkedInPostData {
  id: number;
  content: string;
  date: string;
  likes: number;
  comments: number;
  reposts: number;
  link: string;
}

export function LinkedInPost() {
  const sliderRef = useRef<Slider>(null);

  // Mock data for multiple LinkedIn posts - organized with best posts first
  const linkedInPosts: LinkedInPostData[] = [
    // Best/Featured Posts (High engagement)
    {
      
        id: 1,
        content: `Last week, I asked one of my senior team members: "How's it going with the new hires?"
      
      "Great! They're picking things up quickly," he replied.
      
      Then I asked: "If you gave them a project and stepped away for two weeks, would they deliver?"
      
      The silence said it all.
      
      Here's what I've learned at Ditto Insurance: 
      
      The real measure of leadership isn't how your team performs when you're watching, it's how they perform when you're not.
      
      Absence-based performance reveals:
      - Whether you've built capability or dependency
      - If you're developing decision-makers or task-followers 
      - Whether your team has ownership or just accountability
      
      The key question every leader should ask: "Am I building people who need me, or people ready to lead without me?"
      
      I have learnt this lesson much later in life, about creating future leaders and not followers.
      
      How do you test for true independence in your team?`,
        date: "2 weeks ago",
        likes: 203,
        comments: 45,
        reposts: 38,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7365593771146727424/"
      
      
    },
    {
      id: 2,
      content: "Side project update: Plainli is becoming more than just an idea.\n\nStarted with a simple question: Why do we accept that powerful tools have to be complicated?\n\nAfter talking to 50+ professionals across different industries, the pattern is clear - we're all drowning in overcomplicated solutions.\n\nPlainli's mission: Build tools that feel like they read your mind. Simple on the surface, powerful underneath.\n\nFirst tool launching soon. Can't wait to share what we've been working on! 🚀",
      date: "1 week ago",
      likes: 156,
      comments: 18,
      reposts: 24,
      link: "https://linkedin.com/in/ankitpatel"
    },
    {
      id: 3,
      content: "Building simple tools that solve real problems isn't just about code—it's about understanding the human experience behind every click, every frustration, every 'aha!' moment.\n\nAt Plainli, I'm not just creating products; I'm crafting solutions that make complex tasks feel effortless. Because the best technology is the one you don't have to think about.\n\nWhat's one tool or feature you wish existed to make your daily work simpler?",
      date: "2 days ago",
      likes: 127,
      comments: 23,
      reposts: 15,
      link: "https://linkedin.com/in/ankitpatel"
    },
    // Recent Posts
    // {
    //   id: 4,
    //   content: "The best user interfaces are invisible.\n\nToday I spent 3 hours removing a feature that took me 2 weeks to build. Why? Because sometimes the most powerful thing you can do is take something away, not add more.\n\nComplexity is easy. Simplicity is hard.\n\nEvery line of code, every button, every click should earn its place. If it doesn't make the user's life easier, it doesn't belong.\n\nWhat's something you recently simplified that made a huge difference?",
    //   date: "5 days ago",
    //   likes: 89,
    //   comments: 31,
    //   reposts: 12,
    //   link: "https://linkedin.com/in/ankitpatel"
    // },
    // {
    //   id: 5,
    //   content: "Coffee shop observation: Everyone's switching between 5+ apps to get work done.\n\nSlack for team chat. Notion for notes. Figma for design. Google Drive for files. Trello for tasks.\n\nWe've created productivity chaos in the name of having the 'best tool for each job.'\n\nWhat if the best tool was the one that did just enough of everything, really well?\n\nSometimes less is exponentially more.",
    //   date: "3 days ago",
    //   likes: 94,
    //   comments: 28,
    //   reposts: 11,
    //   link: "https://linkedin.com/in/ankitpatel"
    // },
    // {
    //   id: 6,
    //   content: "User feedback that changed everything: 'I love what it does, but I hate how it makes me feel.'\n\nPowerful reminder that we're not just building features—we're crafting experiences.\n\nEvery interaction should feel effortless, not exhausting.\nEvery click should feel purposeful, not pointless.\nEvery outcome should feel inevitable, not accidental.\n\nThe best products don't just work well. They feel right.",
    //   date: "4 days ago",
    //   likes: 78,
    //   comments: 19,
    //   reposts: 8,
    //   link: "https://linkedin.com/in/ankitpatel"
    // }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const PostCard = ({ post }: { post: LinkedInPostData }) => (
    <div className="px-3">
      <Card className="border-2 border-primary/10 shadow-lg hover:shadow-2xl hover:scale-110 hover:border-primary/30 transition-all duration-300 ease-out h-full flex flex-col cursor-pointer group relative">
        <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
          {/* Post Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
              <ImageWithFallback
                src="/images/ankit.jpeg"
                alt="Ankit Patel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-foreground">Ankit Patel</h3>
                <span className="text-sm text-primary">• Founder of Plainli</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-4 flex-1 overflow-hidden">
            <p className="text-foreground leading-relaxed whitespace-pre-line text-sm group-hover:line-clamp-none line-clamp-6 transition-all duration-300">
              {post.content}
            </p>
          </div>

          {/* Post Engagement */}
          <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Heart className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">{post.comments}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Repeat2 className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">{post.reposts}</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="group text-xs md:text-sm px-2 md:px-3"
              onClick={() => window.open(post.link, '_blank')}
            >
              <span className="hidden lg:inline">View on LinkedIn</span>
              <span className="lg:hidden">View</span>
              <ExternalLink className="ml-1 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );



  return (
    <section id="latest-post" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Best Posts & Latest Updates
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            My most popular insights and latest thoughts on building simple, powerful tools
          </p>
          <p className="text-sm text-muted-foreground/80">
            Hover over any post to see it enlarged and read the full content
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg -ml-8"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg -mr-8"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slider */}
          <div className="linkedin-posts-slider">
            <Slider ref={sliderRef} {...settings}>
              {linkedInPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </Slider>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more insights and behind-the-scenes content?
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://www.linkedin.com/in/ankit-patel-b66b8a115/', '_blank')}
            className="group"
          >
            Follow on LinkedIn
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>



    </section>
  );
}