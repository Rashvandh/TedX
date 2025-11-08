export const Footer = () => {
  return (
    <footer id="contacts" className="bg-primary py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-foreground">
                TEDx<span className="font-normal">KPRCAS</span>
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                In the spirit of ideas worth spreading, TEDx is a program of local, 
                self-organized events that bring people together to share a TED-like experience.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#register" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary-foreground">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-primary-foreground/80">
                  KPR College Of Arts Science and Research
                </p>
                <p className="text-primary-foreground/80">
                  Email: tedx@kprcas.ac.in
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80 text-sm">
                © 2025 TEDxKPRCAS. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs">
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/20 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};
