import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Vosyn",
    position: "Backend Developer",
    location: "Toronto, ON",
    period: "Jan 2025 - Jun 2025",
    type: "Internship",
    description: [
      "Developed and maintained scalable backend Apis using Python, Django, and GCP/PostgreSQL for video translation worlflow, and integration with LLM-based AI models for video/audio transcription and translation",
      "Collaborated with cross-functional teams to deliver high-quality software products",
      "Participated in code reviews and knowledge-sharing sessions with developers",
    ],
    technologies: ["Python", "Django", "REST API", "PostgreSQL", "GCP"],
  },
  {
    company: "Lsquared Digital Signage",
    position: "Full Stack Developer",
    location: "Toronto",
    period: "May 2023 - July 2024",
    type: "Full-time",
    description: [
      "Developed multimedia synchronization web services using WebSocket and REST APIs, optimizing real-time video, audio, mage playback sync across multiple screens while reducing latency by 120ms",
      "Developed a dynamic visual editor using React and TypeScript, allowing users to manage and edit features for device management, provisioning, activation, and control within UI and visualizing updates in real time",
      "Engineered a video wall system by dynamically cropping videos using Cloudinary and GCP, enabling synchronized display across multi-screen setups, improved content rendering efficiency by 80%",
    ],
    technologies: ["React", "WebSocket", "TypeScript", "Node.js", "REST APIs", "Python"],
  },
  {
    company: "FreelanceWork",
    position: "Web Developer",
    location: "Remote",
    period: "Jun 2020 - May 2022",
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