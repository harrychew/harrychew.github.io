import { useState } from 'react';

const EMAIL = 'chewys96@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/harry-chew-023b5aaa/';
const GITHUB_URL = 'https://github.com/harrychew';
const IEEE_URL = 'https://ieeexplore.ieee.org/document/9166229';

const stats = [
  { value: '6+', label: 'years in security' },
  { value: '7', label: 'hands-on certifications' },
  { value: '25+', label: 'critical and high-severity findings' },
  { value: '500K+', label: 'customer accounts affected by critical findings' },
  { value: '13+', label: 'business divisions in testing scope' },
];

const certifications = [
  { code: 'OSWE', issuer: 'OffSec', badge: '/badges/oswe.png', plate: 'bg-white' },
  { code: 'OSCP', issuer: 'OffSec', badge: '/badges/oscp.png', plate: 'bg-white' },
  { code: 'OSWP', issuer: 'OffSec', badge: '/badges/oswp.png', plate: 'bg-white' },
  { code: 'CARTP', issuer: 'Altered Security', badge: '/badges/cartp.png', plate: 'bg-console-bg' },
  { code: 'CRTP', issuer: 'Altered Security', badge: '/badges/crtp.png', plate: 'bg-console-bg' },
  { code: 'PNPT', issuer: 'TCM Security', badge: '/badges/pnpt.png', plate: 'bg-console-bg' },
  { code: 'eCIR', issuer: 'INE Security', badge: '/badges/ecir.png', plate: 'bg-[#121212]' },
];

const roles = [
  {
    lens: 'OFFENCE',
    company: 'Sunway Shared Services',
    title: 'Senior Analyst, Assistant Manager',
    period: '2024 – now',
    result: 'Manage the penetration testing team and lead VAPT across 13+ divisions and 50+ locations, plus external client work.',
  },
  {
    lens: 'ADVISORY',
    company: 'PwC Malaysia',
    title: 'Senior Associate',
    period: '2023 – 2024',
    result: 'Tested, advised and ran crisis simulations for financial-sector organisations, and helped stand up a SOC.',
  },
  {
    lens: 'DEFENCE',
    company: 'Infineon Technologies',
    title: 'SOC Analyst L1',
    period: '2020 – 2022',
    result: 'Monitored global semiconductor manufacturing infrastructure, with a 6-month assignment in Austria and Germany.',
  },
];

type Credential = { code: string; note: string; url?: string };
type Capability = {
  id: string;
  name: string;
  credentials: Credential[];
  skills: string[];
  impact: { value: string; label: string }[];
};

const capabilities: Capability[] = [
  {
    id: 'network',
    name: 'Network, wireless and adversary simulation',
    credentials: [
      { code: 'OSCP', note: 'OffSec, Mar 2024', url: 'https://www.credential.net/8d2fa8be-1bb4-44d4-ac2a-1911cda13415' },
      { code: 'CRTP', note: 'Altered Security, Oct 2024', url: 'https://www.credential.net/0b267b86-5fa7-45e7-8839-7ff4655a5f2e#gs.ggwzpz' },
      { code: 'PNPT', note: 'TCM Security, Jun 2023', url: 'https://www.credential.net/0e8eb4c1-64cc-4018-aec4-7af2975f7490#gs.1zyap0' },
      { code: 'OSWP', note: 'OffSec, Feb 2026', url: 'https://credentials.offsec.com/a5628d53-d978-4f0a-beed-d4ea12d2fa95#acc.MEbqfD0r' },
    ],
    skills: ['Kerberoasting', 'Delegation abuse', 'Rubeus', 'PowerView', 'Sliver C2', 'Evil Twin APs', 'Aircrack-ng', 'Detection bypass'],
    impact: [
      { value: '15+', label: 'penetration tests for financial institutions' },
      { value: '500K+', label: 'customer accounts affected by critical vulnerabilities I found' },
      { value: 'Both sides', label: 'adversary simulations run for internal teams and external clients' },
    ],
  },
  {
    id: 'appsec',
    name: 'Web, API, mobile and thick client',
    credentials: [{ code: 'OSWE', note: 'OffSec, Nov 2026' }],
    skills: ['Source code review', 'Burp Suite', 'SQLMap', 'Nuclei', 'Custom Frida scripts', 'Root and SSL pinning bypass', 'MobSF', 'Ghidra', 'Echo Mirage'],
    impact: [
      { value: '25+', label: 'critical and high-severity vulnerabilities, including remote code execution' },
      { value: '+40%', label: 'in-house mobile testing capability after training an 8-person team' },
    ],
  },
  {
    id: 'cloud',
    name: 'Azure and cloud attack paths',
    credentials: [
      { code: 'CARTP', note: 'Altered Security, Jul 2025', url: 'https://www.credential.net/060cf437-b96e-470d-b8ac-61dd6b8e34ba#acc.COuKf4E6' },
    ],
    skills: ['ROADtools', 'AzureHound', 'AADInternals', 'Golden SAML', 'Pass-the-PRT', 'RBAC abuse', 'Cloud-to-on-prem pivoting'],
    impact: [
      { value: 'Assessed', label: 'cloud environments tested alongside web and mobile, with vulnerabilities identified' },
    ],
  },
  {
    id: 'detect',
    name: 'Detection and incident response',
    credentials: [
      { code: 'eCIR', note: 'INE Security, Oct 2021', url: 'https://verified.elearnsecurity.com/certificates/d1f961a8-c4e9-42e2-ae49-8efb90fb37d1' },
    ],
    skills: ['Wazuh', 'LogRhythm', 'TheHive', 'MISP', 'Microsoft ATP', 'ELK stack'],
    impact: [
      { value: '99.5%', label: 'SLA compliance while handling 10K+ alerts a month' },
      { value: '60%', label: 'better malware detection from an endpoint security proof of concept' },
      { value: '95%', label: 'less spam after new email filtering rules, across a global workforce' },
      { value: '24/7', label: 'threat detection from a SOC deployment I spearheaded' },
    ],
  },
  {
    id: 'lead',
    name: 'Leadership and crisis readiness',
    credentials: [{ code: 'Field-earned', note: 'Proven on the job' }],
    skills: ['Team management', 'VAPT programmes', 'Crisis simulation', 'Phishing simulation', 'Stakeholder advisory', 'OWASP standards'],
    impact: [
      { value: '13+', label: 'business divisions and 50+ locations in VAPT scope' },
      { value: '6 figures', label: 'in security projects managed end to end' },
      { value: '85–90%', label: 'awareness improvement from phishing programmes' },
      { value: 'Billions', label: 'of yearly transactions and assets covered by crisis exercises and advice' },
    ],
  },
];

const values = [
  {
    title: 'Risk leaders can act on',
    promise: 'Turn technical findings into clear priorities, so decisions are about business risk and not just severity scores.',
    proof: 'led VAPT across 13+ business divisions and advised stakeholders on the results.',
  },
  {
    title: 'The attacker view, inside the defence',
    promise: 'Bring offensive and SOC experience together, so what testers find improves what defenders detect.',
    proof: 'worked both sides, from a global SOC to leading penetration tests.',
  },
  {
    title: 'Readiness before the incident',
    promise: 'Help organisations and their people rehearse the bad day, so the real one is shorter and calmer.',
    proof: 'ran crisis simulations, and phishing programmes with 85–90% awareness improvement.',
  },
  {
    title: 'Teams that outlast one person',
    promise: 'Build skills and shared knowledge, so security capability stays when any one expert moves on.',
    proof: 'lifted in-house mobile testing capability by 40% and standardised OWASP methods.',
  },
];

const Prompt = ({ children }: { children: string }) => (
  <p className="mb-2 font-mono text-[15px] text-console-amber">{children}</p>
);

const SectionHeading = ({ children }: { children: string }) => (
  <h2 className="text-[clamp(30px,4.4vw,44px)] leading-[1.12]">{children}</h2>
);

const Header = () => (
  <header className="sticky top-0 z-20 border-b border-console-line bg-console-bg/95">
    <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5 font-mono text-[15px]">
      <a href="#top" className="font-semibold text-console-text no-underline">harry@chew:~$</a>
      <nav aria-label="Main" className="flex flex-wrap gap-x-7 gap-y-2">
        {['career', 'impact', 'value', 'contact'].map((link) => (
          <a key={link} href={`#${link}`} className="text-console-muted hover:text-console-amber">{link}</a>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="flex flex-wrap items-center gap-14 py-[72px]">
    <div className="min-w-0 flex-[999_1_520px]">
      <Prompt>$ whoami</Prompt>
      <h1 className="text-[clamp(40px,6.2vw,68px)] leading-[1.05]">Security leadership, built from the keyboard up.</h1>
      <p className="mt-6 max-w-[600px] text-[21px] text-console-soft">
        Harry Chew. Six years across SOC operations, consulting and penetration testing, now managing the testing team at Sunway.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="inline-flex min-h-12 items-center bg-console-amber px-6 font-semibold text-console-bg no-underline hover:bg-console-glow">
          Start a conversation
        </a>
        <a href="#career" className="inline-flex min-h-12 items-center border border-console-edge px-6 font-semibold text-console-text no-underline hover:border-console-amber">
          View career
        </a>
      </div>
    </div>
    <figure className="m-0 min-w-0 flex-[1_1_320px] border border-console-line bg-console-panel p-2.5">
      <img
        src="/profile-portrait.jpg"
        alt="Portrait of Harry Chew"
        width="640"
        height="640"
        className="block aspect-square h-auto w-full object-cover object-top"
      />
      <figcaption className="px-1 pb-0.5 pt-2.5 font-mono text-sm text-console-muted">Kuala Lumpur, Malaysia</figcaption>
    </figure>
  </section>
);

const Stats = () => (
  <section aria-label="Results" className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] border-y border-console-line">
    {stats.map((stat) => (
      <div key={stat.label} className="py-6 pr-5">
        <p className="font-mono text-4xl font-semibold leading-[1.15] text-console-amber">{stat.value}</p>
        <p className="mt-1.5 text-[15px] text-console-muted">{stat.label}</p>
      </div>
    ))}
  </section>
);

const CertificationCards = () => (
  <>
    {certifications.map((certification) => (
      <li key={certification.code} className="flex w-[204px] shrink-0 items-center gap-3 border border-console-line bg-console-panel p-2.5 pr-4">
        <span className={`h-16 w-[72px] shrink-0 overflow-hidden ${certification.plate}`}>
          <img src={certification.badge} alt={`${certification.code} badge`} className="block h-full w-full object-contain" />
        </span>
        <span className="min-w-0">
          <span className="block font-mono font-semibold leading-tight">{certification.code}</span>
          <span className="block truncate text-[13px] text-console-muted">{certification.issuer}</span>
        </span>
      </li>
    ))}
  </>
);

const CertificationTrain = () => (
  <section aria-label="Certifications" className="cert-train-window mt-10 overflow-hidden">
    <div className="cert-train flex w-max">
      <ul className="m-0 flex list-none gap-3 p-0 pr-3"><CertificationCards /></ul>
      <ul aria-hidden="true" className="cert-train-copy m-0 flex list-none gap-3 p-0 pr-3"><CertificationCards /></ul>
    </div>
  </section>
);

const Career = () => (
  <section id="career" className="scroll-mt-24 pt-20">
    <Prompt>$ git log --career</Prompt>
    <SectionHeading>Three vantage points on the same problem.</SectionHeading>
    <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      {roles.map((role) => (
        <article key={role.company} className="border border-t-[3px] border-console-line border-t-console-amber bg-console-panel p-6">
          <p className="font-mono text-sm text-console-amber">{role.lens}</p>
          <h3 className="mt-2 text-[22px] leading-[1.25]">{role.company}</h3>
          <p className="mt-1 text-[15px] text-console-muted">{role.title}, {role.period}</p>
          <p className="mt-3.5 text-console-soft">{role.result}</p>
        </article>
      ))}
    </div>
  </section>
);

const ColumnLabel = ({ children, accent = false }: { children: string; accent?: boolean }) => (
  <p className={`mb-3.5 font-mono text-[13px] ${accent ? 'text-console-amber' : 'text-console-muted'}`}>{children}</p>
);

const Impact = () => {
  const [pickedId, setPickedId] = useState(capabilities[0].id);
  const picked = capabilities.find((capability) => capability.id === pickedId) ?? capabilities[0];

  return (
    <section id="impact" className="scroll-mt-24 pt-20">
      <Prompt>$ trace --skill-to-impact</Prompt>
      <SectionHeading>From credential to result.</SectionHeading>
      <p className="mb-8 mt-3 max-w-[640px] text-console-soft">
        Pick a capability to trace the proof behind it. Credentials link to their public verification pages.
      </p>

      <div className="flex flex-wrap items-stretch gap-4">
        <div role="group" aria-label="Capabilities" className="flex min-w-0 flex-[1_1_260px] flex-col gap-2">
          {capabilities.map((capability) => {
            const isPicked = capability.id === pickedId;
            return (
              <button
                key={capability.id}
                type="button"
                aria-pressed={isPicked}
                onClick={() => setPickedId(capability.id)}
                className={`min-h-[52px] w-full border px-4 py-3 text-left font-semibold ${
                  isPicked
                    ? 'border-console-amber bg-console-amber text-console-bg'
                    : 'border-console-line bg-console-panel text-console-text hover:border-console-amber'
                }`}
              >
                {capability.name}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="grid min-w-0 flex-[999_1_560px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border border-console-line bg-console-line">
          <div className="bg-console-panel p-[22px]">
            <ColumnLabel>01 / CREDENTIALS</ColumnLabel>
            {picked.credentials.map((credential) => (
              <div key={credential.code} className="border-t border-console-line py-2">
                <p className="font-mono font-semibold">
                  {credential.url ? (
                    <a href={credential.url} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${credential.code}`}>{credential.code}</a>
                  ) : credential.code}
                </p>
                <p className="text-sm leading-[1.4] text-console-muted">{credential.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-console-panel p-[22px]">
            <ColumnLabel>02 / SKILLS AND TOOLS</ColumnLabel>
            <div className="flex flex-wrap gap-1.5">
              {picked.skills.map((skill) => (
                <span key={skill} className="border border-console-edge px-2 py-1 font-mono text-[13px] leading-normal">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-console-raised p-[22px]">
            <ColumnLabel accent>03 / IMPACT</ColumnLabel>
            {picked.impact.map((item) => (
              <div key={item.label} className="border-t border-console-line py-2.5">
                <p className="font-mono text-2xl font-semibold leading-[1.2] text-console-amber">{item.value}</p>
                <p className="mt-1 text-[15px] leading-[1.4] text-console-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Value = () => (
  <section id="value" className="scroll-mt-24 pt-20">
    <Prompt>$ cat value.md</Prompt>
    <SectionHeading>The value I want to bring.</SectionHeading>
    <p className="mb-8 mt-3 max-w-[640px] text-console-soft">
      Testing finds problems. The goal is less risk for the business, and a team that keeps getting stronger.
    </p>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      {values.map((value) => (
        <article key={value.title} className="flex flex-col border border-console-line bg-console-panel p-6">
          <h3 className="text-[22px] leading-[1.25]">{value.title}</h3>
          <p className="mt-2.5 text-console-soft">{value.promise}</p>
          <p className="mt-4 border-t border-console-line pt-3 text-[15px] leading-[1.45] text-console-muted">
            <span className="font-mono text-console-amber">done:</span> {value.proof}
          </p>
        </article>
      ))}
    </div>
  </section>
);

const BackgroundCard = ({ label, title, children }: { label: string; title: string; children: React.ReactNode }) => (
  <div className="bg-console-panel p-[22px]">
    <ColumnLabel>{label}</ColumnLabel>
    <h3 className="text-[19px] leading-[1.3]">{title}</h3>
    <p className="mt-2 text-[15px] leading-[1.45] text-console-soft">{children}</p>
  </div>
);

const Background = () => (
  <section id="background" className="scroll-mt-24 pt-20">
    <Prompt>$ cat background.txt</Prompt>
    <SectionHeading>Beyond the job titles.</SectionHeading>
    <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px border border-console-line bg-console-line">
      <BackgroundCard label="EDUCATION" title="First Class Honours, CGPA 3.99">
        Bachelor of IT (Hons.) Security Technology, Multimedia University, Malaysia.
      </BackgroundCard>
      <BackgroundCard label="RESEARCH" title="Published in IEEE">
        <a href={IEEE_URL} target="_blank" rel="noopener noreferrer">Deep Analysis for Smartphone-based Human Activity Recognition</a>, my final year research.
      </BackgroundCard>
      <BackgroundCard label="INTERNATIONAL" title="Worked across borders">
        6 months with a multinational incident response team in Austria and Germany. Fluent in Chinese and English, with working Malay and some German.
      </BackgroundCard>
      <BackgroundCard label="OFF KEYBOARD" title="Wing Chun and Taekwondo">
        Also badminton, travel and films.
      </BackgroundCard>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="mt-20 scroll-mt-24 border-t border-console-line pb-16 pt-10">
    <h2 className="text-[clamp(30px,4.6vw,46px)] leading-[1.12]">Let's talk about your security programme.</h2>
    <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-mono">
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">linkedin</a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github</a>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-console-bg text-console-text">
      <Header />
      <main id="top" className="mx-auto max-w-[1180px] px-6">
        <Hero />
        <Stats />
        <CertificationTrain />
        <Career />
        <Impact />
        <Value />
        <Background />
        <Contact />
      </main>
      <footer className="border-t border-console-line">
        <p className="mx-auto max-w-[1180px] px-6 py-6 font-mono text-[13px] text-console-muted">© 2026 Harry Chew</p>
      </footer>
    </div>
  );
}

export default App;
