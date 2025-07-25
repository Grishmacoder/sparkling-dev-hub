import { Card, CardContent } from "@/components/ui/card";
import developerPhoto from "@/assets/developer-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 2 years of experience creating innovative web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={developerPhoto}
                alt="Developer Profile"
                className="relative w-80 h-80 object-cover rounded-lg mx-auto shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with 2 years of hands-on experience building 
                  modern web applications. My journey started with curiosity about how websites work, 
                  and has evolved into a deep love for creating seamless user experiences and robust backend systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Node.js, and TypeScript, creating responsive frontends and 
                  scalable backends. I'm passionate about clean code, user experience, and staying 
                  up-to-date with the latest technologies. Always eager to take on new challenges 
                  and learn emerging technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me contributing to open source projects, 
                  reading tech blogs, or exploring new frameworks. I believe in continuous learning 
                  and enjoy sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;