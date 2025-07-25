import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "TechStart Solutions",
    position: "Full Stack Developer",
    location: "San Francisco, CA",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description: [
      "Developed and maintained web applications using React, Node.js, and TypeScript",
      "Collaborated with cross-functional teams to deliver high-quality software products",
      "Implemented responsive designs and optimized application performance",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    company: "Digital Innovations Inc",
    position: "Junior Frontend Developer",
    location: "Remote",
    period: "Jun 2022 - Dec 2022",
    type: "Full-time",
    description: [
      "Built responsive user interfaces using React and modern CSS frameworks",
      "Worked closely with designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and handled state management with Redux",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["React", "Redux", "Sass", "JavaScript", "REST APIs"],
  },
  {
    company: "FreelanceWork",
    position: "Web Developer",
    location: "Remote",
    period: "Jan 2022 - May 2022",
    type: "Freelance",
    description: [
      "Delivered custom websites for small businesses and startups",
      "Worked with clients to understand requirements and provide technical solutions",
      "Built responsive websites using HTML, CSS, JavaScript, and WordPress",
      "Managed project timelines and communicated progress with clients",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my development career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-primary"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {experience.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-primary">
                        {experience.position}
                      </CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Building className="w-4 h-4 mr-2" />
                          {experience.company}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;