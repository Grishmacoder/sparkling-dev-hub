import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Palette,
  Server,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <GitBranch className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Jest/Testing", level: 80 },
      { name: "Figma", level: 75 },
      { name: "CI/CD", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
              "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS", "Next.js", "Express"
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;