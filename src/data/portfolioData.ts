import { Project, TimelineItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Nguyễn Anh Quân',
  birthYear: 2004,
  university: 'FPT University (Đà Nẵng)',
  degree: 'Kỹ thuật Phần mềm (Software Engineering)',
  handle: 'quannguyen89s',
  role: 'Software Developer',
  shortBio: 'Sinh viên Kỹ thuật Phần mềm tại FPT University Đà Nẵng (Gen 2004). Chuyên sâu phát triển ứng dụng Web, Mobile và dịch vụ Backend với React, TypeScript, Java (Spring Boot) và Node.js.',
  avatar: 'https://avatars.githubusercontent.com/u/161696764?v=4',
  location: 'Đà Nẵng, Việt Nam',
  email: 'quann89.dev@gmail.com',
  github: 'https://github.com/quannguyen89s',
  linkedin: 'https://linkedin.com',
  availableForWork: true,
  statusText: 'Gen 2004 • FPT University Đà Nẵng • Sẵn sàng nhận dự án',
  yearsOfExperience: 'FPTU',
  completedProjects: '8+ Repos',
  uptimeRecord: '99.9%',
};

// 6 Nhóm kỹ năng công nghệ chuẩn xác theo yêu cầu
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

// Danh sách các dự án thực tế trên GitHub (viết tách bạch từng repo)
export const PROJECTS: Project[] = [
  {
    id: 'frontend-hesta',
    title: 'Hesta Smart Home — Web Dashboard',
    repoName: 'diethon/frontend_hesta',
    tagline: 'Giao diện web quản lý và điều khiển thiết bị nhà thông minh thời gian thực',
    category: 'Smart Home / IoT',
    featured: true,
    year: '2026',
    description:
      'Bảng điều khiển trung tâm của hệ sinh thái Hesta Smart Home. Hỗ trợ theo dõi cảm biến môi trường (nhiệt độ, độ ẩm), điều khiển đèn/quạt/công tắc, thiết lập kịch bản tự động hóa và phân quyền người dùng trong gia đình.',
    gradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Ngôn ngữ', value: 'TypeScript' },
      { label: 'Giao diện', value: 'React + Tailwind' },
      { label: 'Tương tác', value: 'Realtime IoT' },
    ],
    tags: ['TypeScript', 'React.js', 'Tailwind CSS', 'Vite', 'REST API', 'IoT Dashboard'],
    links: {
      github: 'https://github.com/diethon/frontend_hesta',
    },
    caseStudy: {
      overview:
        'Dự án trọng điểm thuộc hệ sinh thái nhà thông minh Hesta Smart Home nhằm cung cấp trải nghiệm điều khiển thiết bị tối ưu trên nền tảng Web.',
      challenge:
        'Cập nhật trạng thái các nút bấm và cảm biến IoT ngay tức thì, không làm chậm giao diện người dùng.',
      solution:
        'Ứng dụng kiến trúc Component phân cấp, state management tối giản và kết nối đồng bộ với backend Spring Boot qua RESTful API.',
      architectureHighlights: [
        'Giao diện trực quan mô phỏng phòng khách, phòng ngủ và trạng thái các thiết bị điện.',
        'Tương thích mượt mà trên cả trình duyệt máy tính và máy tính bảng tablet.',
        'Hệ thống thông báo đẩy cảnh báo an toàn điện trong nhà.',
      ],
      keyOutcomes: [
        'Mã nguồn TypeScript sạch, kiểm soát chặt chẽ kiểu dữ liệu.',
        'Thời gian phản hồi lệnh điều khiển dưới 150ms.',
      ],
      techStackBreakdown: [
        { title: 'Frontend Core', tech: ['TypeScript', 'React.js', 'Tailwind CSS', 'Vite'] },
        { title: 'API & Protocol', tech: ['REST API', 'JSON Web Token (JWT)', 'WebSocket'] },
      ],
    },
  },
  {
    id: 'backend-hesta',
    title: 'Hesta Smart Home — Backend Services',
    repoName: 'diethon/backend_hesta',
    tagline: 'Hệ thống máy chủ dịch vụ lõi Java Spring Boot xử lý logic IoT & phân quyền',
    category: 'Backend & API',
    featured: true,
    year: '2026',
    description:
      'Dịch vụ máy chủ trung tâm cho nền tảng Hesta Smart Home. Xử lý tiếp nhận dữ liệu từ cảm biến IoT, lưu trữ lịch sử tiêu thụ điện năng, phân quyền thành viên gia đình và bảo mật giao tiếp qua JWT.',
    gradient: 'from-blue-600/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'terminal',
    metrics: [
      { label: 'Ngôn ngữ', value: 'Java' },
      { label: 'Framework', value: 'Spring Boot' },
      { label: 'Bảo mật', value: 'JWT Auth' },
    ],
    tags: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'MySQL', 'JWT', 'Postman'],
    links: {
      github: 'https://github.com/diethon/backend_hesta',
    },
    caseStudy: {
      overview:
        'Phát triển API dịch vụ máy chủ hiệu năng cao, kết nối trực tiếp giữa phần cứng IoT và các ứng dụng Web/Mobile của gia chủ.',
      challenge:
        'Xử lý hàng nghìn gói tin cập nhật trạng thái cảm biến đồng thời mà vẫn đảm bảo tính toàn vẹn dữ liệu.',
      solution:
        'Thiết kế kiến trúc phân tầng chuẩn Controller - Service - Repository với Spring Data JPA và quản lý kết nối cơ sở dữ liệu hiệu quả.',
      architectureHighlights: [
        'Bảo mật các endpoint điều khiển thiết bị bằng Spring Security & JWT.',
        'Tối ưu hóa các câu truy vấn SQL lấy báo cáo điện năng tiêu thụ theo ngày/tháng.',
        'Kiểm thử endpoint chuyên sâu bằng Postman collection.',
      ],
      keyOutcomes: [
        'Khả năng chịu tải ổn định, phân tách module độc lập.',
        'Cung cấp API tài liệu hóa chuẩn cho cả team Frontend Web và Mobile.',
      ],
      techStackBreakdown: [
        { title: 'Core Backend', tech: ['Java', 'Spring Boot', 'Spring Security', 'JPA'] },
        { title: 'Storage & Tooling', tech: ['MySQL', 'PostgreSQL', 'Postman', 'Git'] },
      ],
    },
  },
  {
    id: 'app-hesta',
    title: 'Hesta Smart Home — Mobile App',
    repoName: 'diethon/app_hesta',
    tagline: 'Ứng dụng di động điều khiển nhà thông minh mọi lúc, mọi nơi',
    category: 'Mobile',
    featured: true,
    year: '2026',
    description:
      'Ứng dụng di động dành cho gia chủ điều khiển toàn bộ thiết bị thông minh trong nhà, nhận thông báo đẩy cảnh báo an ninh, điều chỉnh độ sáng đèn và điều hòa không khí trực tiếp trên điện thoại.',
    gradient: 'from-cyan-500/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Nền tảng', value: 'Mobile App' },
      { label: 'Tính năng', value: 'Điều khiển IoT' },
      { label: 'Thông báo', value: 'Realtime Alert' },
    ],
    tags: ['Mobile App', 'IoT Control', 'Cross-Platform', 'REST API', 'Smart Living'],
    links: {
      github: 'https://github.com/diethon/app_hesta',
    },
    caseStudy: {
      overview:
        'Mảnh ghép di động quan trọng trong hệ sinh thái Hesta, đem lại sự tiện nghi cao nhất cho gia chủ khi ở bên ngoài.',
      challenge:
        'Tối ưu thời gian mở ứng dụng và kết nối nhanh với máy chủ khi chuyển đổi giữa mạng WiFi và 4G.',
      solution:
        'Xây dựng luồng kết nối API thông minh với bộ đệm trạng thái thiết bị cục bộ.',
      architectureHighlights: [
        'Giao diện chạm vuốt mượt mà, tối ưu cử chỉ ngón tay.',
        'Tự động đồng bộ hóa trạng thái thiết bị ngay khi ứng dụng active.',
      ],
      keyOutcomes: [
        'Trải nghiệm sử dụng nhanh nhạy, hiện đại.',
        'Hỗ trợ chế độ Dark Mode tiết kiệm pin cho màn hình OLED.',
      ],
      techStackBreakdown: [
        { title: 'Mobile Client', tech: ['Mobile Framework', 'State Management', 'REST API'] },
      ],
    },
  },
  {
    id: 'worksy-platform',
    title: 'Worksy Platform',
    repoName: 'quannguyen89s/Worksy',
    tagline: 'Nền tảng quản lý công việc và tác vụ thông minh cho developer & team',
    category: 'Web Apps',
    featured: true,
    year: '2025',
    description:
      'Nền tảng quản lý dự án và giao việc với React, TypeScript và Node.js. Hỗ trợ bảng Kanban kéo thả, quản lý sprint và theo dõi tiến độ công việc trực quan.',
    gradient: 'from-sky-500/10 via-blue-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Frontend', value: 'React + TS' },
      { label: 'Backend', value: 'Node.js / Express' },
      { label: 'Database', value: 'MongoDB' },
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
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
    repoName: 'quannguyen89s/landingPage',
    tagline: 'Trang giới thiệu sản phẩm tốc độ cao chuẩn Vercel Web Guidelines',
    category: 'Web Apps',
    featured: false,
    year: '2025',
    description:
      'Website giới thiệu sản phẩm tối ưu chuyển đổi, đạt điểm số Lighthouse tuyệt đối 100/100, zero layout shift và chuyển động mượt mà 60 FPS.',
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
        'Tối ưu tốc độ tải hình ảnh và font chữ trên các kết nối di động.',
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
    id: 'flow-intelligence',
    title: 'Flow Intelligence GitHub',
    repoName: 'diethon/Flow-Intelligence-Github',
    tagline: 'Công cụ phân tích và tối ưu hóa luồng làm việc mã nguồn với GitHub API',
    category: 'Web Apps',
    featured: false,
    year: '2025',
    description:
      'Ứng dụng tích hợp GitHub API để theo dõi chu kỳ commit, hoạt động pull request và hiệu suất đóng góp mã nguồn của các thành viên trong dự án.',
    gradient: 'from-emerald-600/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Tích hợp', value: 'GitHub API' },
      { label: 'Dữ liệu', value: 'Realtime' },
      { label: 'Phân tích', value: 'Developer Flow' },
    ],
    tags: ['TypeScript', 'GitHub API', 'REST API', 'React.js', 'Data Visualization'],
    links: {
      github: 'https://github.com/diethon/Flow-Intelligence-Github',
    },
    caseStudy: {
      overview:
        'Hỗ trợ tech lead và nhóm phát triển có cái nhìn tổng quan về nhịp độ phát triển phần mềm.',
      challenge:
        'Giới hạn tỷ lệ truy vấn Rate Limit của GitHub API.',
      solution:
        'Bộ nhớ đệm thông minh phía client và gộp các truy vấn dữ liệu.',
      architectureHighlights: [
        'Biểu đồ trực quan hóa dữ liệu commit và tần suất code.',
        'Giao diện tối giản phong cách shadcn/ui.',
      ],
      keyOutcomes: [
        'Cung cấp thông tin trực quan giúp cải thiện quy trình review code.',
      ],
      techStackBreakdown: [
        { title: 'Core Stack', tech: ['TypeScript', 'React.js', 'GitHub REST API'] },
      ],
    },
  },
  {
    id: 'healthcare-plus',
    title: 'Healthcare Plus Full-Stack',
    repoName: 'diethon/heathcareplus-fullstack-project',
    tagline: 'Hệ thống quản lý thông tin phòng khám và đặt lịch khám bệnh trực tuyến',
    category: 'Web Apps',
    featured: false,
    year: '2025',
    description:
      'Dự án full-stack hỗ trợ đặt lịch khám bệnh trực tuyến, quản lý lịch làm việc của bác sĩ và lưu trữ hồ sơ bệnh án điện tử an toàn.',
    gradient: 'from-indigo-600/10 via-sky-500/5 to-transparent',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'browser',
    metrics: [
      { label: 'Kiến trúc', value: 'Full-Stack' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Backend', value: 'Node.js / Express' },
    ],
    tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    links: {
      github: 'https://github.com/diethon/heathcareplus-fullstack-project',
    },
    caseStudy: {
      overview:
        'Giải pháp số hóa quy trình tiếp đón và quản trị dữ liệu bệnh nhân tại các phòng khám vừa và nhỏ.',
      challenge:
        'Xử lý trùng lặp lịch hẹn của bác sĩ trong cùng một khung giờ.',
      solution:
        'Kiểm tra xung đột lịch trình trên cơ sở dữ liệu trước khi xác nhận booking.',
      architectureHighlights: [
        'Phân quyền tài khoản đa tầng: Bệnh nhân, Bác sĩ, Quản trị viên.',
        'Bảo mật thông tin cá nhân và dữ liệu y tế.',
      ],
      keyOutcomes: [
        'Hệ thống chạy ổn định và tối ưu thời gian thao tác cho người dùng.',
      ],
      techStackBreakdown: [
        { title: 'Full-Stack', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'] },
      ],
    },
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'fpt-university',
    year: '2022 — Hiện tại',
    period: '2022 — Hiện tại',
    role: 'Sinh viên Chuyên ngành Kỹ thuật Phần mềm (Software Engineering)',
    company: 'FPT University Đà Nẵng',
    location: 'Đà Nẵng, Việt Nam',
    type: 'education',
    description:
      'Nguyễn Anh Quân (Gen 2004) đang theo học chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT Đà Nẵng. Tập trung vào lập trình web full-stack, hệ sinh thái IoT nhà thông minh Hesta Smart Home, ứng dụng mobile và kiến trúc backend phân tán.',
    highlights: [
      'Nắm vững kiến thức nền tảng: Lập trình hướng đối tượng Java, Cấu trúc dữ liệu & Giải thuật, Hệ quản trị cơ sở dữ liệu SQL & NoSQL.',
      'Đóng góp tích cực vào dự án Hesta Smart Home (cả Frontend React/TS và Backend Java Spring Boot).',
      'Phát triển ứng dụng Web & Mobile độc lập và nhóm trên GitHub cá nhân @quannguyen89s và tổ chức @diethon.',
    ],
    skills: ['FPT University Đà Nẵng', 'Java', 'Spring Boot', 'React.js', 'TypeScript', 'Node.js', 'REST API'],
  },
];
