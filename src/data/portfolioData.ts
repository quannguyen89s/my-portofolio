import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Alex Rivera',
  preferredName: 'Alex',
  role: 'Senior Full-Stack Engineer & System Architect',
  shortBio: 'Crafting ultra-scalable distributed backends and human-centric, fluid web interfaces with meticulous attention to detail and performance.',
  location: 'Hanoi, Vietnam (UTC+7)',
  email: 'alex.rivera.dev@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  availableForWork: true,
  statusText: 'Available for high-impact roles & technical consulting',
  yearsOfExperience: '6+',
  completedProjects: '30+',
  uptimeRecord: '99.99%',
};

export const BENTO_METRICS = [
  {
    label: 'Years of Experience',
    value: '6+',
    description: 'Architecting resilient cloud backends & fluid frontends',
  },
  {
    label: 'Production Systems',
    value: '24+',
    description: 'Shipped to over 250,000 monthly active users',
  },
  {
    label: 'Average Performance Score',
    value: '99/100',
    description: 'Lighthouse audit & Core Web Vitals excellence',
  },
  {
    label: 'Code Efficiency',
    value: '-45%',
    description: 'Average latency reduction across legacy refactors',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'pulse-sync',
    title: 'PulseSync Cloud',
    tagline: 'Distributed Real-time Event Streaming & Workflow Engine',
    category: 'Distributed Systems',
    featured: true,
    year: '2025',
    description:
      'High-throughput distributed event streaming platform built to orchestrate microservice message pipelines with sub-5ms p99 latency and guaranteed idempotent delivery.',
    gradient: 'from-sky-500/20 via-blue-600/10 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'terminal',
    metrics: [
      { label: 'Throughput', value: '140k req/s' },
      { label: 'p99 Latency', value: '3.8ms' },
      { label: 'Zero-loss Uptime', value: '99.999%' },
    ],
    tags: ['Go', 'Rust', 'Apache Kafka', 'gRPC', 'Docker', 'Prometheus', 'Redis'],
    links: {
      live: 'https://example.com/pulsesync',
      github: 'https://github.com/example/pulsesync-engine',
    },
    caseStudy: {
      overview:
        'PulseSync Cloud was engineered to solve high data ingestion bottlenecks for multi-tenant financial telemetry services requiring millisecond data consistency.',
      challenge:
        'Legacy monolithic messaging systems suffered from intermittent queue lockups during market volatility, with p99 latency spiking above 450ms and recurring duplicate transaction ingestion.',
      solution:
        'Designed a partition-based event router in Go and Rust utilizing Raft consensus, zero-copy buffer pools, and gRPC bidirectional streaming, coupled with Prometheus real-time telemetry.',
      architectureHighlights: [
        'Custom memory-mapped ring buffers for zero-allocation packet parsing.',
        'Distributed leader-election using Raft consensus algorithm with automatic failover in < 250ms.',
        'Deterministic deduplication layer utilizing Bloom filters and transactional Redis caching.',
        'Dynamic backpressure mechanism preventing cascading downstream failures under 10x traffic spikes.',
      ],
      keyOutcomes: [
        'Reduced p99 latency from 450ms to 3.8ms under 140,000 req/s stress loads.',
        'Eliminated 100% of duplicate transaction alerts across 4.2 million daily transactions.',
        'Decreased cloud infrastructure compute expenditure by 38% through optimized memory allocations.',
      ],
      techStackBreakdown: [
        { title: 'Core Engine', tech: ['Go 1.23', 'Rust Core Modules', 'gRPC', 'Protobuf'] },
        { title: 'Data & Queues', tech: ['Apache Kafka', 'Redis Cluster', 'PostgreSQL Timescale'] },
        { title: 'Infrastructure', tech: ['Kubernetes', 'Terraform', 'Prometheus', 'Grafana'] },
      ],
    },
  },
  {
    id: 'aura-canvas',
    title: 'Aura Spatial Studio',
    tagline: 'Collaborative Real-time Canvas & Design System Engine',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Multiplayer collaborative workspace with infinite zoom, real-time Conflict-free Replicated Data Types (CRDTs), and GPU-accelerated rendering for design & system engineering.',
    gradient: 'from-cyan-500/20 via-sky-600/10 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Sync Latency', value: '14ms' },
      { label: 'Concurrent Users', value: '10,000+' },
      { label: 'Frame Rate', value: '60 FPS' },
    ],
    tags: ['React 19', 'TypeScript', 'Y.js (CRDT)', 'WebSockets', 'Tailwind CSS', 'WebGL'],
    links: {
      live: 'https://example.com/auracanvas',
      github: 'https://github.com/example/aura-studio',
    },
    caseStudy: {
      overview:
        'Aura Studio gives remote product teams a lightning-fast visual collaboration surface with real-time multi-cursor awareness, component token synchronization, and zero server desyncs.',
      challenge:
        'Traditional DOM-heavy whiteboards experience severe frame drops when rendering more than 1,000 vector nodes, and standard WebSocket state sync leads to nasty merge conflicts during concurrent edits.',
      solution:
        'Implemented a hybrid WebGL + DOM virtualization pipeline connected to Y.js CRDT state over binary WebSocket protocols, ensuring buttery smooth 60fps pan/zoom even with 50,000 canvas elements.',
      architectureHighlights: [
        'Decoupled UI thread from spatial rendering loop using Web Workers and OffscreenCanvas.',
        'Optimistic local updates with delta-compressed CRDT replication for offline-first support.',
        'Smart viewport culling: only nodes within user camera frustum are computed and painted.',
        'Accessible keyboard shortcuts and spatial navigation for screen reader users.',
      ],
      keyOutcomes: [
        'Maintained steady 60 FPS performance on laptops during 50+ concurrent editor sessions.',
        'Cut bundle size to 82kB gzip through aggressive tree-shaking and dynamic module imports.',
        'Adopted by 85,000+ active users with an average daily dwell time of 42 minutes.',
      ],
      techStackBreakdown: [
        { title: 'Frontend Surface', tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
        { title: 'Spatial Engine', tech: ['WebGL', 'HTML5 Canvas API', 'Web Workers', 'Y.js CRDT'] },
        { title: 'Real-time Transport', tech: ['Fastify', 'ws (WebSocket)', 'Redis Pub/Sub', 'Fly.io'] },
      ],
    },
  },
  {
    id: 'cognitive-ops',
    title: 'CognitiveOps AI',
    tagline: 'Autonomous Incident Diagnostic & System Observability Platform',
    category: 'AI & Tools',
    featured: true,
    year: '2024',
    description:
      'AI-driven site reliability companion that autonomously correlates distributed traces, log anomalies, and git commits to pinpoint root causes in seconds.',
    gradient: 'from-blue-500/20 via-indigo-600/10 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'analytics',
    metrics: [
      { label: 'MTTR Reduction', value: '68%' },
      { label: 'False Positives', value: '< 2.4%' },
      { label: 'Trace Ingestion', value: '1.2B/day' },
    ],
    tags: ['Python', 'FastAPI', 'React', 'OpenTelemetry', 'pgvector', 'ClickHouse', 'LLMs'],
    links: {
      live: 'https://example.com/cognitiveops',
      github: 'https://github.com/example/cognitive-ops',
    },
    caseStudy: {
      overview:
        'CognitiveOps converts chaotic alerting storms into clear, actionable root-cause hypotheses by synthesizing telemetry traces with commit histories and runbook context.',
      challenge:
        'DevOps engineers faced alert fatigue with hundreds of Slack alerts per incident, taking an average of 45 minutes to trace microservice cascade failures through multiple repos.',
      solution:
        'Engineered an event aggregation pipeline using ClickHouse for rapid log ingestion, combined with vector similarity search over historical incidents and an autonomous agent reasoning pipeline.',
      architectureHighlights: [
        'Sub-second vectorized telemetry embedding index using pgvector and pg_ivm.',
        'Deterministic guardrails ensuring agent suggested patches pass staging CI before prompt review.',
        'OpenTelemetry native SDK integration requiring zero code changes in client applications.',
        'Strict data masking ensuring PII and access tokens never leave customer VPC boundaries.',
      ],
      keyOutcomes: [
        'Reduced Mean Time to Resolution (MTTR) from 45 minutes to under 14 minutes across pilot teams.',
        'Cut alert fatigue by 74% via intelligent topological deduplication.',
        'Processed over 1.2 billion telemetry events daily on modest cluster specifications.',
      ],
      techStackBreakdown: [
        { title: 'Intelligence Core', tech: ['Python 3.12', 'LangChain', 'FastAPI', 'Anthropic Claude API'] },
        { title: 'Observability & Storage', tech: ['ClickHouse', 'OpenTelemetry', 'PostgreSQL', 'pgvector'] },
        { title: 'Web Dashboard', tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
      ],
    },
  },
  {
    id: 'krypton-kv',
    title: 'KryptonKV Engine',
    tagline: 'High-Performance Embedded LSM Key-Value Store in Rust',
    category: 'Distributed Systems',
    featured: false,
    year: '2024',
    description:
      'Zero-dependency Log-Structured Merge-tree storage engine designed for edge runtimes with deterministic crash safety and memtable concurrency.',
    gradient: 'from-sky-600/20 via-blue-500/10 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'terminal',
    metrics: [
      { label: 'Read IOPS', value: '410k' },
      { label: 'Write Amplification', value: '1.9x' },
      { label: 'Binary Footprint', value: '3.6MB' },
    ],
    tags: ['Rust', 'LSM-Tree', 'Zero-Allocation', 'SIMD', 'Concurrency'],
    links: {
      github: 'https://github.com/example/krypton-kv',
    },
    caseStudy: {
      overview:
        'An open-source storage engine tailored for edge devices and IoT gateways where memory footprints are constrained under 32MB.',
      challenge:
        'Off-the-shelf stores like RocksDB introduce significant binary bloat and high write amplification factors on flash-based edge hardware.',
      solution:
        'Built a clean-room Rust LSM engine with tiered compaction, SIMD-accelerated Bloom filtering, and lock-free SkipList memtables.',
      architectureHighlights: [
        'Lock-free concurrent SkipList memtable utilizing crossbeam atomics.',
        'Fast tiered compaction algorithm reducing SSD wear by minimizing repetitive rewriting.',
        'SIMD-accelerated block searching for sub-microsecond point query resolution.',
      ],
      keyOutcomes: [
        'Achieved 410,000 random read IOPS on standard NVMe test benches.',
        'Lowered write amplification factor to 1.9x compared to RocksDB default 4.5x.',
        'Complete zero-dependency release binary under 3.6MB.',
      ],
      techStackBreakdown: [
        { title: 'Language', tech: ['Rust 2024 Edition', 'Tokio', 'Crossbeam'] },
        { title: 'Testing & Fuzzing', tech: ['Loom', 'Cargo-fuzz', 'Jepsen-style crash tests'] },
      ],
    },
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'exp-1',
    year: '2023 — Present',
    period: 'Nov 2023 — Present',
    role: 'Lead System Architect & Staff Engineer',
    company: 'Nexus Scale Technologies',
    location: 'Remote / Global',
    type: 'work',
    description:
      'Spearheading distributed systems architecture, API gateway design, and frontend performance standards for tier-1 enterprise SaaS products.',
    highlights: [
      'Architected event-driven microservices serving 1.5M+ requests daily with 99.99% availability.',
      'Established engineering design system & strict WCAG 2.2 AA accessibility guidelines across 6 frontend squads.',
      'Reduced core cloud compute billing by $65,000 annually by optimizing serverless cold starts & database connection pooling.',
    ],
    skills: ['Go', 'TypeScript', 'Kubernetes', 'Apache Kafka', 'Next.js', 'System Architecture'],
  },
  {
    id: 'exp-2',
    year: '2021 — 2023',
    period: 'Mar 2021 — Oct 2023',
    role: 'Senior Full-Stack Developer',
    company: 'Vortex Interactive Labs',
    location: 'Hanoi, Vietnam',
    type: 'work',
    description:
      'Delivered high-performance web applications, interactive spatial dashboards, and real-time collaboration engines for Fortune 500 clients.',
    highlights: [
      'Led migration from monolithic legacy stack to React + TypeScript micro-frontends with zero customer downtime.',
      'Authored internal WebSocket synchronization library, cutting collaborative latency by 60%.',
      'Mentored 8 mid-level and junior engineers through code reviews, architecture RFCs, and workshops.',
    ],
    skills: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Docker', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    year: '2019 — 2021',
    period: 'Aug 2019 — Feb 2021',
    role: 'Software Engineer',
    company: 'Aether Cloud Systems',
    location: 'Hanoi, Vietnam',
    type: 'work',
    description:
      'Engineered RESTful APIs, data migration pipelines, and responsive client dashboards for fintech & e-commerce platforms.',
    highlights: [
      'Developed automated regression testing suite achieving 92% code coverage on core billing modules.',
      'Refactored SQL queries and indexing strategies, decreasing median query latency from 800ms to 45ms.',
    ],
    skills: ['JavaScript', 'Python', 'React', 'MySQL', 'AWS S3 / Lambda', 'Git'],
  },
  {
    id: 'exp-4',
    year: '2015 — 2019',
    period: '2015 — 2019',
    role: 'B.Sc. in Computer Science & Software Engineering',
    company: 'Hanoi University of Science and Technology (HUST)',
    location: 'Hanoi, Vietnam',
    type: 'education',
    description:
      'Graduated with High Distinction (Top 5%). Specialized in Distributed Computing, Algorithms & Data Structures, and Human-Computer Interaction.',
    highlights: [
      'Published graduation thesis on "Consensus Algorithms in Edge Computing Environments".',
      'First Place — National Collegiate Algorithmic Programming Contest 2018.',
      'Head of Developer Student Club, organizing hackathons for 300+ students.',
    ],
    skills: ['Algorithms', 'Data Structures', 'C/C++', 'Operating Systems', 'Networking'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering & UI/UX',
    subtitle: 'Pixel-perfect, accessible, and high-performance user interfaces',
    skills: [
      { name: 'React 19 & Next.js', level: 'Expert', iconName: 'Code' },
      { name: 'TypeScript Strict Mode', level: 'Expert', iconName: 'FileCode' },
      { name: 'Tailwind CSS & CSS Tokens', level: 'Expert', iconName: 'Palette' },
      { name: 'Framer Motion & Web Animations', level: 'Advanced', iconName: 'Sparkles' },
      { name: 'State Management (Zustand/TanStack)', level: 'Expert', iconName: 'Layers' },
      { name: 'Web Performance & Web Vitals', level: 'Expert', iconName: 'Gauge' },
      { name: 'WCAG 2.2 AA Accessibility', level: 'Expert', iconName: 'Eye' },
    ],
  },
  {
    id: 'backend',
    title: 'Distributed Systems & Backends',
    subtitle: 'Scalable services, low latency, and robust concurrent architectures',
    skills: [
      { name: 'Go (Golang)', level: 'Expert', iconName: 'Cpu' },
      { name: 'Node.js & Bun Runtimes', level: 'Expert', iconName: 'Server' },
      { name: 'Rust Systems Programming', level: 'Advanced', iconName: 'ShieldCheck' },
      { name: 'Python & FastAPI', level: 'Advanced', iconName: 'Terminal' },
      { name: 'gRPC & Protocol Buffers', level: 'Expert', iconName: 'Network' },
      { name: 'GraphQL & RESTful APIs', level: 'Expert', iconName: 'Boxes' },
      { name: 'WebSocket & Server-Sent Events', level: 'Expert', iconName: 'Radio' },
    ],
  },
  {
    id: 'data-cloud',
    title: 'Data Architecture & Cloud DevOps',
    subtitle: 'Reliable storage, stream processing, and container orchestration',
    skills: [
      { name: 'PostgreSQL & TimescaleDB', level: 'Expert', iconName: 'Database' },
      { name: 'Redis Cache & Pub/Sub', level: 'Expert', iconName: 'Zap' },
      { name: 'Apache Kafka & Event-Driven', level: 'Advanced', iconName: 'Workflow' },
      { name: 'ClickHouse & Analytics', level: 'Advanced', iconName: 'BarChart3' },
      { name: 'Docker & Kubernetes (K8s)', level: 'Advanced', iconName: 'Container' },
      { name: 'Terraform & Infrastructure as Code', level: 'Proficient', iconName: 'Cloud' },
      { name: 'Prometheus, OpenTelemetry & Grafana', level: 'Advanced', iconName: 'Activity' },
    ],
  },
];
