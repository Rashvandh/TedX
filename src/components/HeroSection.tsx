import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-3xl"></div>
        
        {/* Large X pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
            <path d="M100 100L700 700M700 100L100 700" stroke="currentColor" strokeWidth="80" className="text-primary" />
          </svg>
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 border border-primary/30 rounded-full mb-4">
            <span className="text-sm text-muted-foreground">
              X = Independently organised TED event
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-primary">TEDx</span>
            <br />
            <span className="text-foreground">
              KPR College Of Arts
              <br />
              Science and Research
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable day of ideas worth spreading
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 animate-glow-pulse"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              REGISTER NOW
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
