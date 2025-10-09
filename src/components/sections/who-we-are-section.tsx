'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: 'Our Mission',
    description:
      'R3ACTR is a next-generation student-led software innovation startup, committed to building intelligent, impactful, and accessible digital solutions. Rooted in creativity and driven by a passion for technology, we focus on creating products that solve real-world problems — especially in education, productivity, and grassroots sectors like agriculture.',
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: 'Our Vision',
    description:
      'To empower users — especially students and underserved communities — with innovative tools that simplify lives, promote learning, and bridge digital gaps using open technologies and smart design.',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Our Team',
    description:
      "R3ACTR is more than just a startup — it's a movement. We're a team of young tech enthusiasts, builders, and visionaries shaping tools for tomorrow — today.",
  },
];

export function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-black text-white py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Who We Are</h2>
          <p className="text-xl mt-4 text-gray-400">
            Built by Students. Powered by Passion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-gray-900 border-gray-800 text-white">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
