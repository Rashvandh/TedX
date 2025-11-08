import { Card } from "@/components/ui/card";

const speakers = [
  { id: 1, name: "Coming Soon", role: "Speaker" },
  { id: 2, name: "Coming Soon", role: "Speaker" },
  { id: 3, name: "Coming Soon", role: "Speaker" },
  { id: 4, name: "Coming Soon", role: "Speaker" },
];

export const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-primary">SPEAKERS</span>
            <span className="text-foreground">'25</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet our incredible lineup of thought leaders and innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card 
              key={speaker.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="text-6xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity">
                    <span className="text-primary">?</span>
                  </div>
                  <p className="text-muted-foreground font-medium">{speaker.name}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-1">{speaker.role}</h3>
                <p className="text-sm text-muted-foreground">To be announced</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
