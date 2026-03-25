import { Stethoscope, User, ShieldHalf, Bot, HeartPulse, FileText, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { AiDemo } from '@/components/landing/ai-demo';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-20 items-center justify-between px-4">
      <Link href="/">
        <Logo className="h-10 w-auto" />
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
        <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">For You</Link>
        <Link href="#ai-tool" className="text-sm font-medium hover:text-primary transition-colors">AI Tool</Link>
      </nav>
      <Button asChild>
        <Link href="#contact">Request a Demo</Link>
      </Button>
    </div>
  </header>
);

const Hero = () => (
  <section className="pt-20 bg-gradient-to-b from-background to-secondary/30">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 py-24 text-center md:text-left">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Effortless Healthcare,{" "}
          <span className="text-primary">Intelligently Delivered.</span>
        </h1>
        <p className="text-lg text-muted-foreground md:w-4/5">
          M.ez is a unified platform that simplifies prescription management, enhances patient understanding, and streamlines administrative tasks for a more efficient healthcare ecosystem.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Button size="lg" asChild>
            <Link href="#ai-tool">Try the AI Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          alt="Doctor and patient reviewing medical data on a tablet"
          fill
          className="rounded-xl object-cover"
          data-ai-hint="doctor patient"
        />
      </div>
    </div>
  </section>
);

const featureList = [
  { icon: Stethoscope, title: "Doctor Prescription Tool", description: "Quickly generate detailed and accurate prescriptions with our intuitive interface." },
  { icon: User, title: "Patient Medication Overview", description: "Access clear medication schedules and drug information anytime, anywhere." },
  { icon: Bot, title: "AI-Driven Alternative Suggestions", description: "Discover cost-effective medication alternatives without compromising on quality." },
  { icon: ShieldHalf, title: "Simplified Admin Panel", description: "Reduce administrative overhead with a centralized management dashboard." },
  { icon: FileText, title: "Comprehensive Report Generation", description: "Compile patient data and prescriptions into clear, professional reports." },
  { icon: HeartPulse, title: "Enhanced Patient Analysis", description: "Gain deeper insights into patient history for better-informed decisions." },
];

const Features = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline">A Better Experience for Everyone</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Our platform is designed from the ground up to improve the lives of doctors, patients, and administrators.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((feature, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                <feature.icon className="h-8 w-8" />
              </div>
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const benefitsList = [
    {
        for: "Doctors",
        title: "Focus on Patients, Not Paperwork",
        description: "Our intuitive interface allows you to analyze patient data efficiently and generate prescriptions in moments. Spend less time on administrative tasks and more time providing care.",
        points: ["Easy Patient Analysis", "Quick Prescription Tool", "Detailed Drug Information"],
        image: { src: "https://images.unsplash.com/photo-1550831106-0994fe8abcfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBoZWxwaW5nfGVufDB8fHx8MTc1NDY1OTAxNHww&ixlib=rb-4.1.0&q=80&w=1080", hint: "doctor smiling" },
        align: "left",
    },
    {
        for: "Patients",
        title: "Clarity and Control Over Your Health",
        description: "Never be confused about your medication again. Get clear schedules and information. Plus, our AI can help you find more affordable options if you wish.",
        points: ["Clear Medication Schedules", "Cost-Saving AI Suggestions", "Easy-to-Understand Reports"],
        image: { src: "https://images.unsplash.com/photo-1611329828782-deb11033016b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwYXRpZW50JTIwd2VhcmluZyUyMG1hc2slMjBnaXZpbmclMjB0aHVtYnMlMjB1cHxlbnwwfHx8fDE3NTQ2NTk3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "patient smiling" },
        align: "right",
    },
    {
        for: "Admins",
        title: "Streamline Your Operations",
        description: "M.ez reduces the complexity of hospital management. Our platform is easy to maintain and provides a clear oversight of prescription-related activities.",
        points: ["Reduced Maintenance", "Streamlined Oversight", "Efficient Workflow"],
        image: { src: "https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBhbmQlMjBwYXRpZW50JTIwaGFwcHl8ZW58MHx8fHwxNzU0NjU5ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080", hint: "hospital administration" },
        align: "left",
    }
];

const Benefits = () => (
    <section id="benefits" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 space-y-24">
            {benefitsList.map((benefit, index) => (
                <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${benefit.align === 'right' ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={`relative h-80 w-full rounded-xl overflow-hidden shadow-xl ${benefit.align === 'right' ? 'md:col-start-2' : ''}`}>
                         <Image src={benefit.image.src} alt={benefit.title} fill className="object-cover" data-ai-hint={benefit.image.hint} />
                    </div>
                    <div className="space-y-4">
                        <span className="inline-block bg-primary/10 text-primary text-base font-semibold uppercase tracking-wider px-3 py-1 rounded-full">{benefit.for}</span>
                        <h3 className="text-3xl font-bold font-headline">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                        <ul className="space-y-2 pt-2">
                            {benefit.points.map((point, pIndex) => (
                                <li key={pIndex} className="flex items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const AiToolSection = () => (
    <section id="ai-tool" className="py-24 bg-background">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-headline">Smart Savings with AI</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Empowering patients with choices. Our AI analyzes prescriptions to suggest therapeutically similar, lower-cost alternatives, putting you in control of your healthcare expenses.
                </p>
            </div>
            <AiDemo />
        </div>
    </section>
);


const Footer = () => (
  <footer id="contact" className="bg-secondary/50">
    <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <Link href="/" className="inline-block mb-4">
                    <Logo className="h-10 w-auto" />
                </Link>
                <p className="text-sm text-muted-foreground">Making healthcare knowledge meaningful and accessible for everyone.</p>
            </div>
             <div>
                <h4 className="font-semibold mb-4">Links</h4>
                <ul className="space-y-2">
                    <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                    <li><Link href="#benefits" className="text-sm text-muted-foreground hover:text-primary">For You</Link></li>
                    <li><Link href="#ai-tool" className="text-sm text-muted-foreground hover:text-primary">AI Tool</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Get a Demo</h4>
                <p className="text-sm text-muted-foreground mb-4">See how M.ez can transform your organization.Explore the possibilities by booking time with a M.ez expert today. Contact us for a personalized demo.</p>
                <Button>Contact Sales</Button>
            </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} M.ez Inc. All rights reserved.</p>
        </div>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Benefits />
        <AiToolSection />
      </main>
      <Footer />
    </div>
  );
}
