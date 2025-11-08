import { Card } from "@/components/ui/card";

const teamMembers = [
  { id: 1, name: "Team Member", role: "Organizer" },
  { id: 2, name: "Team Member", role: "Organizer" },
  { id: 3, name: "Team Member", role: "Organizer" },
  { id: 4, name: "Team Member", role: "Organizer" },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-primary">TEAM</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The passionate individuals behind TEDxKPRCAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
