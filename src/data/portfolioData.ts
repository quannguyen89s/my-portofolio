import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Nguyễn Anh Quân',
  birthYear: 2004,
  university: 'FPT University',
  degree: 'Kỹ thuật Phần mềm (Software Engineering)',
  handle: 'quannguyen89s',
  role: 'Software Developer',
  shortBio: 'Sinh viên Kỹ thuật Phần mềm tại FPT University (Gen 2004). Đam mê xây dựng ứng dụng web & mobile hiện đại, hiệu năng cao và chuẩn mực UI/UX.',
  avatar: 'https://avatars.githubusercontent.com/u/161696764?v=4',
  location: 'Hà Nội, Việt Nam (FPT University)',
  email: 'quannguyen.dev@gmail.com',
  github: 'https://github.com/quannguyen89s',
  linkedin: 'https://linkedin.com',
  availableForWork: true,
  statusText: 'Sinh viên FPTU 2004 • Sẵn sàng thực tập & dự án',
  yearsOfExperience: '2004 (FPTU)',
  completedProjects: '10+',
  uptimeRecord: '99.9%',
};

export const BENTO_METRICS = [
  {
    label: 'Học vấn & Nền tảng',
    value: 'FPT University',
    description: 'Chuyên ngành Kỹ thuật Phần mềm',
  },
  {
    label: 'Thế hệ Developer',
    value: 'Gen 2004',
    description: 'Nhiệt huyết, tư duy hiện đại & học hỏi nhanh',
  },
  {
    label: 'Dự án thực tế',
    value: '10+ Repos',
    description: 'Web, Mobile React Native & Backend Java',
  },
  {
    label: 'Tốc độ phản hồi',
    value: '< 100ms',
    description: 'Giao diện mượt mà chuẩn Emil Design',
  },
];

// Danh mục kỹ năng được chuẩn hóa 100% theo đúng 6 nhóm yêu cầu của bạn:
export const TECH_STACK_CATEGORIES = [
  {
    category: '1. Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'SQL'],
    description: 'Ngôn ngữ lập trình cốt lõi',
    accent: 'sky',
  },
  {
    category: '2. Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    description: 'Giao diện web hiện đại & responsive',
    accent: 'blue',
  },
  {
    category: '3. Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
    description: 'Dịch vụ máy chủ & API hiệu năng cao',
    accent: 'indigo',
  },
  {
    category: '4. Mobile',
    skills: ['React Native', 'Expo'],
    description: 'Ứng dụng di động đa nền tảng iOS & Android',
    accent: 'cyan',
  },
  {
    category: '5. Database',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'MySQL'],
    description: 'Lưu trữ dữ liệu quan hệ & NoSQL',
    accent: 'emerald',
  },
  {
    category: '6. Tools & Technologies',
    skills: ['Git', 'GitHub', 'Postman', 'REST API', 'JWT'],
    description: 'Công cụ phát triển & bảo mật xác thực',
    accent: 'slate',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'worksy-platform',
    title: 'Worksy Platform',
    tagline: 'Ứng dụng quản lý công việc và quy trình tác vụ thông minh',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Nền tảng quản lý dự án và giao việc với React, TypeScript và Node.js. Tối ưu giao diện tương tác tức thì.',
    gradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Frontend', value: 'React + TS' },
      { label: 'Tốc độ', value: '< 100ms' },
      { label: 'Trạng thái', value: 'Active' },
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API'],
    links: {
      github: 'https://github.com/quannguyen89s/Worksy',
    },
    caseStudy: {
      overview:
        'Worksy giải quyết bài toán quản lý tác vụ cá nhân và nhóm nhỏ, hỗ trợ kéo thả và theo dõi trạng thái công việc.',
      challenge:
        'Cần trải nghiệm mượt mà, hạn chế render thừa và phân quyền người dùng an toàn.',
      solution:
        'Tách component theo nguyên lý atomic design, xác thực người dùng bằng JWT và REST API.',
      architectureHighlights: [
        'Xác thực an toàn với JSON Web Tokens (JWT).',
        'Giao diện responsive tối ưu cho cả desktop và mobile.',
        'Quản lý state tinh gọn với React Hooks.',
      ],
      keyOutcomes: [
        'Mã nguồn sạch, phân chia thư mục rõ ràng.',
        'Tương tác nhanh nhạy không có độ trễ thị giác.',
      ],
      techStackBreakdown: [
        { title: 'Frontend', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'] },
        { title: 'Backend & Data', tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'] },
      ],
    },
  },
  {
    id: 'landing-studio',
    title: 'Modern Landing Page',
    tagline: 'Trang giới thiệu sản phẩm tốc độ cao chuẩn Vercel Guidelines',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Giao diện web giới thiệu sản phẩm tối ưu chuyển đổi, áp dụng typography sắc nét và animation 60fps.',
    gradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Lighthouse', value: '100/100' },
      { label: 'First Paint', value: '0.3s' },
      { label: 'Thiết kế', value: 'Responsive' },
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    links: {
      github: 'https://github.com/quannguyen89s/landingPage',
    },
    caseStudy: {
      overview:
        'Xây dựng landing page giới thiệu công nghệ với hiệu suất tải trang cao nhất.',
      challenge:
        'Tối ưu tốc độ tải hình ảnh và font chữ trên các kết nối di động 4G/3G.',
      solution:
        'Áp dụng quy chuẩn Vercel Web Interface Guidelines: nén assets, zero layout shift và sub-pixel borders.',
      architectureHighlights: [
        'Tuân thủ 8-point vertical grid chuẩn xác.',
        'Hỗ trợ đầy đủ phím Tab điều hướng cho người khiếm thị.',
      ],
      keyOutcomes: [
        'Điểm số hiệu năng tuyệt đối 100/100 Lighthouse.',
        'Bundle gọn nhẹ tải dưới 0.4s.',
      ],
      techStackBreakdown: [
        { title: 'Công nghệ', tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'] },
      ],
    },
  },
  {
    id: 'mobile-expo-app',
    title: 'Mobile Cross-Platform App',
    tagline: 'Ứng dụng di động đa nền tảng xây dựng với React Native & Expo',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Trải nghiệm ứng dụng di động mượt mà cho iOS & Android với kiến trúc React Native và Expo SDK.',
    gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Framework', value: 'React Native' },
      { label: 'Toolchain', value: 'Expo SDK' },
      { label: 'Nền tảng', value: 'iOS & Android' },
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile UI', 'REST API'],
    links: {
      github: 'https://github.com/quannguyen89s',
    },
    caseStudy: {
      overview:
        'Phát triển ứng dụng mobile tương thích cả hai hệ điều hành phổ biến nhất hiện nay.',
      challenge:
        'Đảm bảo layout hiển thị đồng nhất giữa màn hình iPhone có notch/Dynamic Island và các máy Android.',
      solution:
        'Sử dụng Expo SafeAreaProvider và component chuẩn hóa đa nền tảng.',
      architectureHighlights: [
        'Điều hướng mượt mà với React Navigation.',
        'Tích hợp RESTful API và lưu trữ token an toàn.',
      ],
      keyOutcomes: [
        'Chạy mượt 60 FPS trên cả thiết bị cấu hình tầm trung.',
        'Dễ dàng build và phân phối qua Expo Application Services.',
      ],
      techStackBreakdown: [
        { title: 'Mobile Stack', tech: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'] },
      ],
    },
  },
  {
    id: 'spring-boot-backend',
    title: 'Backend Services & Spring Boot API',
    tagline: 'Kiến trúc dịch vụ máy chủ hướng đối tượng với Java & Spring Boot',
    category: 'Distributed Systems',
    featured: false,
    year: '2024',
    description:
      'Hệ thống xử lý nghiệp vụ, quản lý dữ liệu quan hệ với Spring Boot, PostgreSQL/MySQL và kiểm thử Postman.',
    gradient: 'from-emerald-600/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'terminal',
    metrics: [
      { label: 'Ngôn ngữ', value: 'Java / SQL' },
      { label: 'Framework', value: 'Spring Boot' },
      { label: 'Database', value: 'PostgreSQL' },
    ],
    tags: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'MySQL', 'Postman'],
    links: {
      github: 'https://github.com/quannguyen89s/exercise1',
    },
    caseStudy: {
      overview:
        'Xây dựng RESTful API backend phục vụ quản lý dữ liệu và xử lý nghiệp vụ backend.',
      challenge:
        'Thiết kế schema cơ sở dữ liệu quan hệ chuẩn hóa 3NF, tránh dư thừa dữ liệu.',
      solution:
        'Áp dụng kiến trúc phân tầng Controller - Service - Repository với Spring Boot và Hibernate/JPA.',
      architectureHighlights: [
        'Kiểm thử endpoint chi tiết với Postman collection.',
        'Quản lý giao dịch (Transactions) và bắt ngoại lệ tập trung (@ControllerAdvice).',
      ],
      keyOutcomes: [
        'API đáp ứng chuẩn RESTful với mã trạng thái HTTP chính xác.',
        'Cơ sở dữ liệu truy vấn tối ưu thời gian phản hồi.',
      ],
      techStackBreakdown: [
        { title: 'Core Backend', tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'JWT'] },
        { title: 'Databases', tech: ['PostgreSQL', 'MySQL', 'Supabase'] },
      ],
    },
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'exp-1',
    year: '2022 — Hiện tại',
    period: '2022 — Hiện tại',
    role: 'Sinh viên Chuyên ngành Kỹ thuật Phần mềm (Software Engineering)',
    company: 'FPT University (Đại học FPT)',
    location: 'Hà Nội, Việt Nam',
    type: 'education',
    description:
      'Nguyễn Anh Quân (Sinh năm 2004) đang theo học chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT, tập trung vào lập trình web full-stack, mobile app và kiến trúc phần mềm.',
    highlights: [
      'Nắm vững kiến thức nền tảng: Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng Java, Cơ sở dữ liệu SQL/NoSQL.',
      'Thực hiện các đồ án ứng dụng thực tế với React, Node.js, Spring Boot và React Native.',
      'Chủ động phát triển các repository mã nguồn mở trên GitHub cá nhân @quannguyen89s.',
    ],
    skills: ['FPT University', 'Java', 'React.js', 'Spring Boot', 'Node.js', 'TypeScript'],
  },
  {
    id: 'exp-2',
    year: '2024 — Hiện tại',
    period: '2024 — Hiện tại',
    role: 'Thực hành & Phát triển Phần mềm Thực chiến',
    company: 'Dự án Độc lập & Đồ án Công nghệ',
    location: 'Hà Nội, Việt Nam',
    type: 'work',
    description:
      'Xây dựng các sản phẩm thực tế: Worksy Platform, Landing Studio, Mobile Cross-Platform App và các dịch vụ Spring Boot API.',
    highlights: [
      'Thiết kế và đóng gói ứng dụng web với Vite, React.js và Tailwind CSS.',
      'Kết nối cơ sở dữ liệu Supabase, PostgreSQL và MongoDB với xác thực JWT bảo mật.',
      'Áp dụng quy chuẩn UI/UX cao cấp từ Vercel Web Guidelines và Emil Kowalski Motion Design.',
    ],
    skills: ['Full-Stack Development', 'React Native', 'Expo', 'Supabase', 'Postman'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: '1. Languages',
    subtitle: 'Ngôn ngữ lập trình cốt lõi',
    skills: [
      { name: 'JavaScript', level: 'Expert', iconName: 'Code' },
      { name: 'TypeScript', level: 'Expert', iconName: 'FileCode' },
      { name: 'Java', level: 'Advanced', iconName: 'Cpu' },
      { name: 'SQL', level: 'Advanced', iconName: 'Database' },
    ],
  },
  {
    id: 'frontend',
    title: '2. Frontend',
    subtitle: 'Giao diện web hiện đại & responsive',
    skills: [
      { name: 'React.js', level: 'Expert', iconName: 'Layers' },
      { name: 'HTML5', level: 'Expert', iconName: 'Code' },
      { name: 'CSS3', level: 'Expert', iconName: 'Palette' },
      { name: 'Tailwind CSS', level: 'Expert', iconName: 'Sparkles' },
      { name: 'Vite', level: 'Expert', iconName: 'Zap' },
    ],
  },
  {
    id: 'backend',
    title: '3. Backend',
    subtitle: 'Dịch vụ máy chủ & API hiệu năng cao',
    skills: [
      { name: 'Node.js', level: 'Advanced', iconName: 'Server' },
      { name: 'Express.js', level: 'Advanced', iconName: 'Network' },
      { name: 'Spring Boot', level: 'Advanced', iconName: 'ShieldCheck' },
    ],
  },
  {
    id: 'mobile',
    title: '4. Mobile',
    subtitle: 'Ứng dụng di động đa nền tảng iOS & Android',
    skills: [
      { name: 'React Native', level: 'Advanced', iconName: 'Smartphone' },
      { name: 'Expo', level: 'Advanced', iconName: 'Layers' },
    ],
  },
  {
    id: 'database',
    title: '5. Database',
    subtitle: 'Lưu trữ dữ liệu quan hệ & NoSQL',
    skills: [
      { name: 'MongoDB', level: 'Advanced', iconName: 'Database' },
      { name: 'PostgreSQL', level: 'Advanced', iconName: 'Database' },
      { name: 'Supabase', level: 'Advanced', iconName: 'Cloud' },
      { name: 'MySQL', level: 'Advanced', iconName: 'Database' },
    ],
  },
  {
    id: 'tools',
    title: '6. Tools & Technologies',
    subtitle: 'Công cụ phát triển & bảo mật xác thực',
    skills: [
      { name: 'Git', level: 'Expert', iconName: 'GitBranch' },
      { name: 'GitHub', level: 'Expert', iconName: 'Github' },
      { name: 'Postman', level: 'Expert', iconName: 'Activity' },
      { name: 'REST API', level: 'Expert', iconName: 'Network' },
      { name: 'JWT', level: 'Advanced', iconName: 'Lock' },
    ],
  },
];
