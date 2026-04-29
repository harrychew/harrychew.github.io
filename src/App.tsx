import { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Terminal, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar, 
  Briefcase,
  ChevronRight,
  ExternalLink,
  Award,
  Code,
  Send,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// HUD Corner Component
const HUDCorner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const positionClasses = {
    tl: 'top-4 left-4 border-t-2 border-l-2',
    tr: 'top-4 right-4 border-t-2 border-r-2',
    bl: 'bottom-4 left-4 border-b-2 border-l-2',
    br: 'bottom-4 right-4 border-b-2 border-r-2',
  };
  
  return (
    <div 
      className={`fixed w-16 h-16 border-accent hud-pulse pointer-events-none z-50 ${positionClasses[position]}`}
      style={{ opacity: 0.7 }}
    />
  );
};

// Particle Background
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent/20 rounded-full particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

// Navigation
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { label: 'Profile', href: '#profile' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md' : ''}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="font-heading font-bold text-lg text-cyber-white tracking-wider">
            HARRY<span className="text-accent">.</span>CHEW
          </a>
          <button 
            onClick={() => setIsOpen(true)}
            className="font-mono text-xs text-cyber-gray hover:text-accent transition-colors flex items-center gap-2"
          >
            <Menu className="w-4 h-4" />
            MENU
          </button>
        </div>
      </nav>
      
      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-cyber-black/98 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="font-heading font-bold text-lg text-cyber-white">MENU</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-cyber-gray hover:text-accent transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl md:text-5xl text-cyber-white hover:text-accent transition-colors flex items-center gap-4 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="font-mono text-sm text-cyber-gray">0{i + 1}</span>
                {item.label}
                <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          <div className="mt-auto flex gap-6">
            <a href="https://www.linkedin.com/in/chew-yong-shan-harry-023b5aaa/" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/harrychew" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:hello@harrychew.dev" className="text-cyber-gray hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero Section
const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-faint grid-drift opacity-50" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-30" />
      
      {/* Center Crosshair */}
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      >
        <div className="relative w-20 h-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent/30" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-accent/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent/50 rounded-full" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div 
          className={`transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-mono text-xs text-accent tracking-[0.3em] mb-6">CYBERSECURITY PROFESSIONAL</p>
        </div>
        
        <h1 
          className={`font-heading text-5xl md:text-7xl lg:text-8xl text-cyber-white leading-none mb-4 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          SECURE THE
          <br />
          <span className="text-gradient">FUTURE</span>
        </h1>
        
        <h2 
          className={`font-heading text-3xl md:text-5xl lg:text-6xl text-cyber-gray mb-8 transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          BREAK THE <span className="text-accent">THREAT</span>
        </h2>
        
        <p 
          className={`text-cyber-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-all duration-700 delay-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Penetration Tester | SOC Analyst | Cloud Security Specialist
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-1100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a href="#experience" className="btn-primary flex items-center justify-center gap-2">
            <Briefcase className="w-4 h-4" />
            VIEW EXPERIENCE
          </a>
          <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            CONTACT ME
          </a>
        </div>
      </div>
      
      {/* Bottom Stats */}
      <div 
        className={`absolute bottom-12 left-0 right-0 px-6 transition-all duration-700 delay-1300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto flex justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="font-heading text-3xl md:text-4xl text-accent">4+</p>
            <p className="font-mono text-xs text-cyber-gray mt-1">YEARS EXP</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl md:text-4xl text-accent">6</p>
            <p className="font-mono text-xs text-cyber-gray mt-1">CERTIFICATIONS</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-3xl md:text-4xl text-accent">50+</p>
            <p className="font-mono text-xs text-cyber-gray mt-1">PROJECTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Profile Section
const ProfileSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const stats = [
    { label: 'Based in', value: 'Kuala Lumpur' },
    { label: 'Experience', value: '4+ Years' },
    { label: 'Focus', value: 'Pentest / Cloud / IR' },
    { label: 'Availability', value: 'Open to roles' },
  ];
  
  return (
    <section 
      id="profile" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 bg-cyber-black"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 border border-accent/40 overflow-hidden group">
              <img 
                src="/profile-portrait.jpg" 
                alt="Harry Chew" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-accent">
                ID: HYC-96
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
          
          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">PROFILE</p>
            <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-2">HARRY CHEW</h2>
            <p className="text-accent text-xl mb-6">Cybersecurity Professional</p>
            
            <p className="text-cyber-gray text-lg leading-relaxed mb-8">
              I help organizations find weaknesses before attackers do—through disciplined testing, 
              clear reporting, and practical remediation. With expertise spanning penetration testing, 
              incident response, and cloud security assessments, I deliver comprehensive security solutions 
              that protect critical assets.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={stat.label}
                  className={`p-4 border border-accent/20 bg-accent/5 transition-all duration-500 hover:border-accent/60`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <p className="font-mono text-xs text-cyber-gray mb-1">{stat.label}</p>
                  <p className="font-heading text-lg text-cyber-white">{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/chew-yong-shan-harry-023b5aaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-gray hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/harrychew" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-gray hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const experiences = [
    {
      title: 'Senior Analyst – Cybersecurity',
      subtitle: 'Assistant Manager',
      company: 'Sunway Shared Services Sdn. Bhd.',
      period: 'Aug 2024 – Present',
      location: 'Kuala Lumpur, Malaysia',
      description: 'Lead comprehensive VAPT initiatives, manage penetration testing team, oversee security testing projects, and conduct external client engagements.',
      achievements: [
        'Managed RM630K+ in security projects',
        'Identified 25+ critical and high-severity vulnerabilities',
        'Developed mobile penetration testing training programs',
        'Established comprehensive Knowledge Management System',
      ],
    },
    {
      title: 'Senior Associate – Cybersecurity',
      subtitle: '',
      company: 'PricewaterhouseCoopers Risk Services Sdn. Bhd. (PwC MYVN)',
      period: 'Jan 2023 – Jul 2024',
      location: 'Kuala Lumpur, Malaysia',
      description: 'Executed end-to-end VAPT services, led cyber incident response initiatives, deployed and maintained SOC SIEM infrastructure, and designed security awareness training programs.',
      achievements: [
        'Conducted 15+ penetration tests for enterprise clients',
        'Executed phishing simulation for Thailand bank',
        'Delivered cyber crisis consultation for Malaysian Pension Fund',
        'Led crisis simulation exercises for Malaysia\'s National Payment Service Provider',
        'Spearheaded SOC deployment at PwC DarkLab',
      ],
    },
    {
      title: 'Specialist Cyber Security',
      subtitle: 'SOC Analyst L1',
      company: 'Infineon Technologies (Malaysia) Sdn. Bhd.',
      period: 'Oct 2020 – Dec 2022',
      location: 'Melaka, Malaysia',
      description: 'Monitored and analyzed security events across global semiconductor manufacturing infrastructure. Performed incident response and threat analysis.',
      achievements: [
        'Processed 10K+ security alerts monthly with 99.5% SLA compliance',
        'Implemented email filtering rules reducing spam by 95%',
        'Completed 6-month international assignment in Austria & Germany',
        'Led Aurora EDR sandbox POC improving detection rates by 60%',
      ],
    },
    {
      title: 'Intern – IT Security',
      subtitle: '',
      company: 'LGMS – LE Global Services Sdn Bhd',
      period: 'May 2019 – Aug 2019',
      location: 'Malaysia',
      description: 'Assisted in vulnerability assessments and documentation for compliance engagements.',
      achievements: [
        'Conducted web application security assessments',
        'Prepared detailed security audit reports',
        'Supported senior consultants on client engagements',
      ],
    },
  ];
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-cyber-black"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">EXPERIENCE</p>
            <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-4">WHERE I'VE MADE IMPACT</h2>
            <p className="text-cyber-gray text-lg max-w-2xl">
              A track record of hands-on security work—from SOC operations to offensive engagements.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className={`absolute left-0 md:left-8 top-0 bottom-0 w-px bg-accent/30 transition-all duration-1500 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
              style={{ transformOrigin: 'top' }}
            />
            
            {experiences.map((exp, i) => (
              <div 
                key={i}
                className={`relative pl-8 md:pl-20 pb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Node */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-glow" />
                
                <div className="border border-accent/20 bg-accent/5 p-6 md:p-8 hover:border-accent/50 transition-all duration-300 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl text-cyber-white">{exp.title}</h3>
                      {exp.subtitle && <p className="text-accent text-sm mt-1">{exp.subtitle}</p>}
                      <p className="text-cyber-gray mt-2">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                      <p className="font-mono text-sm text-accent flex items-center md:justify-end gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs text-cyber-gray mt-1 flex items-center md:justify-end gap-2">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-cyber-gray mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-cyber-gray">
                        <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const skillCategories = [
    {
      title: 'Offensive Security',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['Penetration Testing', 'Web App Testing', 'Mobile App Testing', 'Network Exploitation', 'Social Engineering', 'Red Team Support'],
    },
    {
      title: 'Defensive Operations',
      icon: <Shield className="w-5 h-5" />,
      skills: ['Incident Response', 'SIEM (Wazuh/LogRhythm)', 'Threat Hunting', 'Digital Forensics', 'Detection Rules', 'Malware Analysis'],
    },
    {
      title: 'Cloud & Automation',
      icon: <Cloud className="w-5 h-5" />,
      skills: ['AWS/Azure Security', 'Cloud Assessments', 'Python/Bash', 'Automation Scripts', 'CI/CD Security', 'Infrastructure as Code'],
    },
  ];
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-cyber-black"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">SKILLS</p>
            <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-4">TOOLS & CAPABILITIES</h2>
            <p className="text-cyber-gray text-lg max-w-2xl mx-auto">
              Comprehensive skill set spanning offensive and defensive security domains.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <div 
                key={category.title}
                className={`border border-accent/20 bg-accent/5 p-6 md:p-8 transition-all duration-700 hover:border-accent/50 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 border border-accent/50 flex items-center justify-center text-accent">
                    {category.icon}
                  </div>
                  <h3 className="font-heading text-xl text-cyber-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Tools */}
          <div 
            className={`mt-12 border border-accent/20 bg-accent/5 p-6 md:p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="font-heading text-xl text-cyber-white mb-6 flex items-center gap-3">
              <Code className="w-5 h-5 text-accent" />
              TECHNOLOGIES & TOOLS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Splunk', 'ELK Stack',
                'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Git', 'Jenkins',
                'Python', 'Bash', 'PowerShell', 'SQL', 'React', 'Node.js',
                'AWS', 'Azure', 'GCP', 'Linux', 'Windows', 'macOS'
              ].map((tool) => (
                <div key={tool} className="flex items-center gap-2 text-sm text-cyber-gray">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Cloud icon component
const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);

// Certifications Section
const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const certifications = [
    {
      name: 'OSWP',
      fullName: 'OffSec Wireless Professional',
      issuer: 'OffSec',
      year: 'Feb 2026',
      credentialId: 'OS-BWA-25182',
      link: 'https://credentials.offsec.com/a5628d53-d978-4f0a-beed-d4ea12d2fa95#acc.MEbqfD0r',
      logo: '/logos/offsec.png',
    },
    {
      name: 'CARTP',
      fullName: 'Certified Azure Red Team Professional',
      issuer: 'Altered Security',
      year: 'Jul 2025',
      credentialId: 'AZLID2772',
      link: 'https://www.credential.net/060cf437-b96e-470d-b8ac-61dd6b8e34ba#acc.COuKf4E6',
      logo: '/logos/altered-security.png',
    },
    {
      name: 'CAPv2',
      fullName: 'Certified AppSec Practitioner',
      issuer: 'The SecOps Group',
      year: 'Nov 2024',
      credentialId: '9338039',
      link: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXWngODVdv9a4qMzqomtZkIahgUKZUaud/e5X16zzNksSCWdX1vFddbS7eC54rnx7dLuwnbVxMyQAinc1i4ziapU=',
      logo: '/logos/secops-group.png',
    },
    {
      name: 'CRTP',
      fullName: 'Certified Red Team Professional',
      issuer: 'Altered Security',
      year: 'Oct 2024',
      credentialId: 'ADLID9716',
      link: 'https://www.credential.net/0b267b86-5fa7-45e7-8839-7ff4655a5f2e#gs.ggwzpz',
      logo: '/logos/altered-security.png',
    },
    {
      name: 'OSCP',
      fullName: 'OffSec Certified Professional',
      issuer: 'OffSec',
      year: 'Mar 2024',
      credentialId: 'OS-101-57094',
      link: 'https://www.credential.net/8d2fa8be-1bb4-44d4-ac2a-1911cda13415',
      logo: '/logos/offsec.png',
    },
    {
      name: 'PNPT',
      fullName: 'Practical Network Penetration Tester',
      issuer: 'TCM Security',
      year: 'Jun 2023',
      credentialId: '76214054',
      link: 'https://www.credential.net/0e8eb4c1-64cc-4018-aec4-7af2975f7490#gs.1zyap0',
      logo: '/logos/tcm-security.png',
    },
    {
      name: 'eCIR',
      fullName: 'eLearnSecurity Certified Incident Responder',
      issuer: 'INE Security',
      year: 'Oct 2021',
      credentialId: '9026181',
      link: 'https://verified.elearnsecurity.com/certificates/d1f961a8-c4e9-42e2-ae49-8efb90fb37d1',
      logo: '/logos/ine-security.png',
    },
  ];
  
  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-cyber-black"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">CERTIFICATIONS</p>
            <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-4">TRUSTED CREDENTIALS</h2>
            <p className="text-cyber-gray text-lg max-w-2xl">
              Validated by industry-recognized hands-on exams.
            </p>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={cert.name}
                className={`border border-accent/20 bg-accent/5 p-6 transition-all duration-700 hover:border-accent/50 card-hover group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white/5 border border-accent/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="font-mono text-xs text-cyber-gray">{cert.year}</span>
                </div>
                
                <h3 className="font-heading text-2xl text-cyber-white mb-1 group-hover:text-accent transition-colors">{cert.name}</h3>
                <p className="text-cyber-gray text-sm mb-2">{cert.fullName}</p>
                <p className="font-mono text-xs text-accent mb-3">{cert.issuer}</p>
                <p className="font-mono text-xs text-cyber-gray">ID: {cert.credentialId}</p>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-cyber-gray group-hover:text-accent transition-colors">
                  <ExternalLink className="w-3 h-3" />
                  <span>Verify Credential</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const projects = [
    {
      title: 'CloudSec Assessment Toolkit',
      description: 'AWS/Azure security scans, IAM reviews, and misconfiguration checks with automated reporting.',
      image: '/project-cloud.jpg',
      tags: ['Python', 'AWS', 'Azure', 'Terraform'],
      link: '#',
    },
    {
      title: 'Phishing Simulation Platform',
      description: 'Campaign management, reporting, and user awareness metrics for enterprise security training.',
      image: '/project-phishing.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
      link: '#',
    },
    {
      title: 'Detection Rule Library',
      description: 'SIEM rules, threat mapping, and false-positive tuning notes for enterprise security operations.',
      image: '/project-siem.jpg',
      tags: ['Splunk', 'Sigma', 'YAML', 'Git'],
      link: '#',
    },
  ];
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-cyber-black"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-30" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">PROJECTS</p>
            <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-4">
              BUILT TO <span className="text-accent">BREAK</span> / BUILT TO <span className="text-accent">DEFEND</span>
            </h2>
            <p className="text-cyber-gray text-lg max-w-2xl mx-auto">
              Real-world security tools and frameworks developed for enterprise environments.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div 
                key={project.title}
                className={`group border border-accent/20 bg-accent/5 overflow-hidden transition-all duration-700 hover:border-accent/50 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl text-cyber-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyber-gray text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-accent/80 bg-accent/10 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm text-cyber-gray hover:text-accent transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'chewys96@gmail.com', href: 'mailto:chewys96@gmail.com' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'linkedin.com/in/harrychew', href: 'https://linkedin.com/in/chew-yong-shan-harry-023b5aaa' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'github.com/harrychew', href: 'https://github.com/harrychew' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Kuala Lumpur, Malaysia', href: '#' },
  ];
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-background-secondary"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-20" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Info */}
            <div 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <p className="font-mono text-xs text-accent tracking-[0.2em] mb-4">CONTACT</p>
              <h2 className="font-heading text-4xl md:text-5xl text-cyber-white mb-4">
                LET'S BUILD <span className="text-accent">SECURE</span> SYSTEMS.
              </h2>
              <p className="text-cyber-gray text-lg mb-8">
                If you're hiring, need a security review, or want to collaborate—send a message.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 border border-accent/20 bg-accent/5 hover:border-accent/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="text-accent">{item.icon}</div>
                    <div>
                      <p className="font-mono text-xs text-cyber-gray">{item.label}</p>
                      <p className="text-cyber-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right - Form */}
            <div 
              className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <form onSubmit={handleSubmit} className="border border-accent/20 bg-accent/5 p-6 md:p-8">
                <h3 className="font-heading text-xl text-cyber-white mb-6">SEND MESSAGE</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="font-mono text-xs text-cyber-gray mb-2 block">NAME</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cyber-black border border-accent/30 px-4 py-3 text-cyber-white input-cyber transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-mono text-xs text-cyber-gray mb-2 block">EMAIL</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cyber-black border border-accent/30 px-4 py-3 text-cyber-white input-cyber transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-mono text-xs text-cyber-gray mb-2 block">SUBJECT</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-cyber-black border border-accent/30 px-4 py-3 text-cyber-white input-cyber transition-all duration-300"
                      placeholder="How can I help?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-mono text-xs text-cyber-gray mb-2 block">MESSAGE</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-cyber-black border border-accent/30 px-4 py-3 text-cyber-white input-cyber transition-all duration-300 h-32 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
                  >
                    {submitted ? (
                      <>MESSAGE SENT</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Footer */}
          <div 
            className={`mt-20 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-mono text-xs text-cyber-gray">
              © 2026 HARRY CHEW. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-mono text-xs text-cyber-gray hover:text-accent transition-colors flex items-center gap-2">
                <Award className="w-4 h-4" />
                RESUME PDF
              </a>
              <a href="#" className="font-mono text-xs text-cyber-gray hover:text-accent transition-colors">
                BACK TO TOP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App
function App() {
  return (
    <div className="relative bg-cyber-black min-h-screen">
      {/* HUD Corners */}
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <HUDCorner position="bl" />
      <HUDCorner position="br" />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <main>
        <HeroSection />
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
