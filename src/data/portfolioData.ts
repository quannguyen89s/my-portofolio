import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Quân Nguyễn',
  handle: 'quannguyen89s',
  role: 'Software Developer',
  shortBio: 'Chuyên xây dựng ứng dụng web hiện đại, kiến trúc tối ưu và giao diện tinh tế.',
  avatar: 'https://avatars.githubusercontent.com/u/161696764?v=4',
  location: 'Việt Nam (UTC+7)',
  email: 'quannguyen.dev@gmail.com',
  github: 'https://github.com/quannguyen89s',
  linkedin: 'https://linkedin.com',
  availableForWork: true,
  statusText: 'Sẵn sàng cho dự án & cơ hội mới',
  yearsOfExperience: '3+',
  completedProjects: '15+',
  uptimeRecord: '99.9%',
};

export const BENTO_METRICS = [
  {
    label: 'Kinh nghiệm',
    value: '3+ Năm',
    description: 'Phát triển frontend & backend',
  },
  {
    label: 'Dự án hoàn thành',
    value: '15+',
    description: 'Ứng dụng web & hệ thống thực tế',
  },
  {
    label: 'Tối ưu tốc độ',
    value: '< 100ms',
    description: 'Thời gian phản hồi giao diện',
  },
  {
    label: 'Code Quality',
    value: '100%',
    description: 'TypeScript strict mode & linting',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'worksy-app',
    title: 'Worksy Platform',
    tagline: 'Ứng dụng quản lý công việc và quy trình làm việc thông minh',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Nền tảng tối ưu năng suất làm việc, tích hợp quản lý dự án, theo dõi tiến độ và giao việc trực quan.',
    gradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Tốc độ tải', value: '0.8s' },
      { label: 'UI Score', value: '98/100' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'REST API'],
    links: {
      github: 'https://github.com/quannguyen89s/Worksy',
    },
    caseStudy: {
      overview:
        'Worksy giải quyết bài toán quản lý tác vụ phân tán, giúp người dùng theo dõi deadline và phân chia công việc nhanh chóng.',
      challenge:
        'Cần giao diện trực quan, đồng bộ dữ liệu nhanh và không gây giật lag khi tải lượng lớn tác vụ.',
      solution:
        'Sử dụng kiến trúc component hóa với React, tối ưu re-render và chuẩn hóa API backend.',
      architectureHighlights: [
        'Quản lý state tinh gọn, hạn chế render thừa.',
        'Thiết kế responsive chuẩn mobile-first.',
        'Validation dữ liệu 2 chiều an toàn.',
      ],
      keyOutcomes: [
        'Thời gian tương tác dưới 100ms.',
        'Giảm 40% thao tác thủ công khi quản lý công việc.',
      ],
      techStackBreakdown: [
        { title: 'Frontend', tech: ['React', 'TypeScript', 'Tailwind CSS'] },
        { title: 'Backend', tech: ['Node.js', 'Express', 'PostgreSQL'] },
      ],
    },
  },
  {
    id: 'landing-page',
    title: 'Modern Landing Studio',
    tagline: 'Trang đích doanh nghiệp tốc độ cao & tối ưu chuyển đổi',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2025',
    description:
      'Giao diện web giới thiệu sản phẩm với thiết kế hiện đại, typography chuẩn mực và hiệu ứng cuộn trang mượt mà.',
    gradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Lighthouse', value: '100/100' },
      { label: 'First Paint', value: '0.3s' },
      { label: 'Chuyển đổi', value: '+35%' },
    ],
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Responsive'],
    links: {
      github: 'https://github.com/quannguyen89s/landingPage',
    },
    caseStudy: {
      overview:
        'Dự án tối ưu trải nghiệm đọc và tốc độ hiển thị cho sản phẩm công nghệ.',
      challenge:
        'Đảm bảo tốc độ tải cực nhanh trên mạng di động yếu mà vẫn giữ hình ảnh sắc nét.',
      solution:
        'Tối ưu kích thước asset, lazy load thông minh và áp dụng hệ thống typography tương phản cao.',
      architectureHighlights: [
        'Zero layout shift (CLS = 0).',
        'Tương thích hoàn hảo từ mobile 375px đến 4K màn hình lớn.',
      ],
      keyOutcomes: [
        'Điểm số hiệu năng Lighthouse đạt 100/100.',
        'Dung lượng bundle ban đầu dưới 60kB gzip.',
      ],
      techStackBreakdown: [
        { title: 'Công nghệ', tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'] },
      ],
    },
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio',
    tagline: 'Hệ thống Portfolio cá nhân với Design System chuẩn mực',
    category: 'Full-Stack Apps',
    featured: true,
    year: '2026',
    description:
      'Portfolio cá nhân tối giản, màu sáng thanh lịch với sắc xanh nước biển, tối ưu khả năng truy cập WCAG 2.2 AA.',
    gradient: 'from-sky-400/10 via-cyan-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Tương phản', value: 'WCAG AA' },
      { label: 'Framework', value: 'React 19' },
      { label: 'Rhythm', value: '8-point' },
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/quannguyen89s/my-portofolio',
    },
    caseStudy: {
      overview:
        'Thiết kế giao diện portfolio chuyên nghiệp, hiện đại, thể hiện năng lực lập trình và gu thẩm mỹ UI/UX.',
      challenge:
        'Tránh giao diện màu mè hoặc rườm rà; tập trung vào nội dung súc tích và trải nghiệm mượt.',
      solution:
        'Áp dụng quy tắc 8-point grid, tone màu sáng dịu mắt kết hợp xanh nước biển sang trọng.',
      architectureHighlights: [
        'Design token quản lý tập trung.',
        'Hỗ trợ đầy đủ phím điều hướng và responsive.',
      ],
      keyOutcomes: [
        'Giao diện trực quan, dễ đọc lướt trong 30 giây.',
        'Thời gian build sản xuất dưới 1 giây.',
      ],
      techStackBreakdown: [
        { title: 'Stack', tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      ],
    },
  },
  {
    id: 'java-backend-services',
    title: 'Backend Services & Core APIs',
    tagline: 'Xử lý logic nghiệp vụ, quản lý cơ sở dữ liệu và thuật toán',
    category: 'Distributed Systems',
    featured: false,
    year: '2024',
    description:
      'Các mô-đun dịch vụ backend, xử lý cấu trúc dữ liệu và giải thuật tối ưu hiệu năng.',
    gradient: 'from-blue-600/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'terminal',
    metrics: [
      { label: 'Nền tảng', value: 'Java / OOP' },
      { label: 'Cấu trúc', value: 'Clean Code' },
      { label: 'Kiểm thử', value: 'JUnit' },
    ],
    tags: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'SQL'],
    links: {
      github: 'https://github.com/quannguyen89s/exercise1',
    },
    caseStudy: {
      overview:
        'Tập hợp các giải thuật và cấu trúc dữ liệu nền tảng xử lý nghiệp vụ backend.',
      challenge:
        'Tối ưu độ phức tạp thời gian và không gian cho các thuật toán xử lý dữ liệu lớn.',
      solution:
        'Áp dụng các mẫu thiết kế hướng đối tượng (OOP) và kiểm thử đơn vị chặt chẽ.',
      architectureHighlights: [
        'Tổ chức mã nguồn theo mô hình phân tầng.',
        'Quản lý ngoại lệ và logging rõ ràng.',
      ],
      keyOutcomes: [
        'Thuật toán đạt hiệu suất O(n log n).',
        'Mã nguồn sạch, dễ mở rộng.',
      ],
      techStackBreakdown: [
        { title: 'Core', tech: ['Java', 'JUnit', 'SQL'] },
      ],
    },
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'exp-1',
    year: '2024 — Hiện tại',
    period: '2024 — Hiện tại',
    role: 'Software Developer',
    company: 'Dự án Công nghệ & Web Applications',
    location: 'Việt Nam',
    type: 'work',
    description:
      'Phát triển ứng dụng web hiện đại với React, TypeScript, Node.js và Java backend.',
    highlights: [
      'Xây dựng các ứng dụng Worksy, Landing Studio với trải nghiệm người dùng tối ưu.',
      'Thiết kế giao diện responsive và chuẩn hóa quy trình phát triển frontend.',
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'],
  },
  {
    id: 'exp-2',
    year: '2023 — 2024',
    period: '2023 — 2024',
    role: 'Lập trình viên Web & Phần mềm',
    company: 'Học tập & Thực hành Kỹ thuật phần mềm',
    location: 'Việt Nam',
    type: 'education',
    description:
      'Nghiên cứu sâu về Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng Java, Cơ sở dữ liệu.',
    highlights: [
      'Hoàn thành các đồ án backend Java và xây dựng API xử lý dữ liệu.',
      'Áp dụng nguyên lý Clean Code và thiết kế kiến trúc phần mềm.',
    ],
    skills: ['Java', 'SQL', 'Algorithms', 'OOP', 'HTML/CSS'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend & Giao diện',
    subtitle: 'Xây dựng giao diện mượt mà, chuẩn xác và responsive',
    skills: [
      { name: 'React & Vite', level: 'Expert', iconName: 'Code' },
      { name: 'TypeScript', level: 'Expert', iconName: 'FileCode' },
      { name: 'Tailwind CSS', level: 'Expert', iconName: 'Palette' },
      { name: 'Framer Motion', level: 'Advanced', iconName: 'Sparkles' },
      { name: 'HTML5 & Modern CSS', level: 'Expert', iconName: 'Layers' },
      { name: 'Responsive Design', level: 'Expert', iconName: 'Gauge' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Hệ thống',
    subtitle: 'Xử lý logic, API và cơ sở dữ liệu tin cậy',
    skills: [
      { name: 'Java (OOP)', level: 'Advanced', iconName: 'Cpu' },
      { name: 'Node.js & Express', level: 'Advanced', iconName: 'Server' },
      { name: 'RESTful API Design', level: 'Expert', iconName: 'Network' },
      { name: 'SQL & Database Design', level: 'Advanced', iconName: 'Database' },
      { name: 'Git & Version Control', level: 'Expert', iconName: 'GitBranch' },
    ],
  },
  {
    id: 'principles',
    title: 'Nguyên lý & Kỹ thuật',
    subtitle: 'Tiêu chuẩn chất lượng phần mềm và tối ưu',
    skills: [
      { name: 'Clean Code & Refactoring', level: 'Expert', iconName: 'ShieldCheck' },
      { name: 'Web Performance', level: 'Advanced', iconName: 'Zap' },
      { name: 'UI/UX Best Practices', level: 'Advanced', iconName: 'Eye' },
      { name: 'Component Architecture', level: 'Expert', iconName: 'Boxes' },
    ],
  },
];
