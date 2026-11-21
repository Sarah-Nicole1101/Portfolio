// Edit this file to add projects, screenshots, technology lists, and personal contributions.
// Project-wide features and Sarah's contributions intentionally have separate fields.
const projectImage = (filename) => `/assets/${filename}`;

export const projects = [
  {
    id: 'agap',
    name: 'AGAP', year: '2026', type: 'TEAM CAPSTONE PROJECT · DESKTOP APPLICATION',
    art: 'agap-art', mark: 'AGAP', caption: 'A LITTLE MORE AWARE. A LITTLE MORE BALANCED.', decoration: 'leaves',
    cover: projectImage('image(20261120-132906).png'),
    coverAlt: 'AGAP dashboard with fatigue risk score, daily activity, and a risk trend chart',
    summary: 'A privacy-conscious desktop application that identifies behavioral changes linked to fatigue and burnout risk.',
    description: 'AGAP is a desktop application designed to identify changes in computer-interaction patterns that may be associated with fatigue and burnout risk among remote workers. Rather than analyzing the content of users’ activities, it focuses on behavioral patterns through local activity processing and risk scoring.',
    purpose: 'To help remote workers become more aware of possible fatigue and burnout risks by identifying changes in their computer-interaction patterns.',
    keyFeatures: [
      'Dashboard and application settings',
      'User onboarding experience',
      'Computer-interaction pattern processing',
      'Behavioral risk scoring',
      'Electron IPC communication between the frontend and background processes',
      'Local SQLite data storage'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Electron', 'Node.js', 'SQLite', 'pnpm'],
    tags: ['React', 'Electron', 'SQLite', 'UI/UX'],
    role: 'Development · Design · Documentation',
    contributions: [
      'Designed and refined the Dashboard, History, About, Settings, Notifications, and onboarding interfaces, improving responsiveness, typography, alignment, and visual consistency.',
      'Implemented native Windows notifications using Electron and TypeScript, including the renderer notification service, preload/IPC wiring, Risk, Weekly Check-in, and Break triggers, and click-to-open navigation.',
      'Improved the presentation of fatigue-risk scores, behavioral signals, baseline and calibration explanations, work schedules, weekly check-ins, and privacy information.',
      'Prepared comprehensive technical documentation for the entire AGAP system, including system architecture, process flows, ERD and database design, and the rationale for choosing an explainable heuristic-based risk-scoring approach over machine learning.',
      'Performed manual functional testing of notification behavior, navigation, and application workflows, documenting findings and refining the UI.'
    ],
    privateRepo: true,
    note: 'The features above describe the overall team system. My contributions are listed separately.',
    gallery: [
      ['image(20261120-132707).png', 'Onboarding welcome screen'],
      ['image(20261120-132733).png', 'Privacy and data explanation'],
      ['image(20261120-132745).png', 'Work schedule setup'],
      ['image(20261120-132906).png', 'Fatigue-risk dashboard'],
      ['image(20261120-132856).png', 'Settings and privacy controls'],
      ['image(20261120-132837).png', 'About AGAP and calibration'],
      ['image(20261120-132831).png', 'Check-in confirmation'],
      ['image(20261120-132912).png', 'Wellness notifications']
    ]
  },
  {
    id: 'connectly',
    name: 'Connectly REST API', year: '2026', type: 'BACKEND DEVELOPMENT',
    art: 'connect-art', mark: 'connectly.', caption: 'CONNECTIONS, BUILT FROM THE BACKEND.', decoration: 'connect',
    summary: 'A social media API with authentication, social interactions, and access controls.',
    tags: ['REST API', 'Google OAuth', 'API testing'], role: 'Development · API testing',
    contributions: [
      'Built on a course-provided foundation and led the continued development and enhancement of the existing API.',
      'Developed likes, comments, Google OAuth authentication, news feed, role-based access control, privacy settings, caching, and pagination.',
      'Created system diagrams, maintained technical documentation, and performed API testing and issue resolution.'
    ],
    repo: 'https://github.com/Elocin-MMDC/Connectly'
  },
  {
    id: 'motorph',
    name: 'MotorPH Payroll System', year: '2025–2026', type: 'DESKTOP APPLICATION',
    art: 'payroll-art', mark: 'MotorPH', caption: 'PAYROLL, WITH CARE AND PRECISION.',
    summary: 'Payroll software with interface improvements, manual QA, and data security enhancements.',
    tags: ['Java', 'MySQL', 'Manual QA', 'Data security'], role: 'Frontend · QA · Security',
    contributions: [
      'Implemented and improved selected user interface components and user-facing features.',
      'Created and executed manual test cases, documented results and issues, and retested fixes.',
      'Identified security vulnerabilities and proposed improvements to protect sensitive employee information.',
      'Developed a local Java utility for encrypting employee records in MySQL and tested the implementation locally.'
    ],
    repo: 'https://github.com/Elocin-MMDC/AOOP-Payroll-System-IAS1'
  },
  {
    id: 'centinel',
    name: 'Centinel', year: '2025–2026', type: 'ANDROID DESIGN & TESTING',
    art: 'centinel-art', mark: 'Centinel', caption: 'DESIGNED WITH INTENTION. TESTED WITH CARE.', decoration: 'bubble',
    summary: 'Android application prototyping and functional testing, recognized as an exemplary course output.',
    tags: ['Figma', 'UI/UX prototyping', 'Android Studio'], role: 'UI/UX · Manual QA',
    contributions: [
      'Created UI/UX designs and interactive prototypes in Figma to visualize the application’s interface and functionality.',
      'Performed manual functional testing on the Android application using Android Studio.',
      'The project was selected as a Mobile Development Exemplary Learners’ Output to demonstrate course rubric standards.'
    ]
  },
  {
    id: 'seen',
    name: 'SEEN — Memory Card Game', year: '2025', type: 'GAME DESIGN & TESTING',
    art: 'seen-art', mark: 'SEEN', caption: 'A LITTLE MEMORY. A LITTLE PLAY.', decoration: 'bubble',
    cover: projectImage('image(20261120-133056).png'),
    coverAlt: 'SEEN memory game theme selection with fruit, animal, and symbol cards',
    summary: 'A memory card game shaped through wireframes, UI/UX design, and manual testing.',
    tags: ['Figma', 'Wireframing', 'Functional testing'], role: 'UI/UX · Manual QA',
    contributions: [
      'Created wireframes and UI/UX designs in Figma to plan the game’s layout, navigation, and experience.',
      'Performed functional testing, identified and documented issues, and retested fixes to verify expected behavior.'
    ],
    demo: 'https://eldanmmdc.github.io/ELDANMMDC-SEEN-Project-Memory-Card-Game/index.html',
    gallery: [
      ['image(20261120-133048).png', 'SEEN start screen'],
      ['image(20261120-133051).png', 'Board size selection'],
      ['image(20261120-133056).png', 'Card theme selection'],
      ['image(20261120-133100).png', 'Memory matching gameplay'],
      ['image(20261120-133104).png', 'Game results and score']
    ]
  },
  {
    id: 'bubbistix',
    name: 'Bubbistix — Digital Sticker Shop', year: '2026', type: 'VISUAL DESIGN & CONTENT',
    art: 'bubbi-art', mark: 'bubbistix', caption: 'SMALL STICKERS. LOTS OF PERSONALITY.', decoration: 'bubble',
    cover: projectImage('image(20261120-132433).png'),
    coverAlt: 'Pink Bubbistix sticker shop home page decorated with strawberries',
    summary: 'Digital stickers, visual assets, and written content for an online sticker shop.',
    tags: ['Canva', 'Visual assets', 'Content writing'], role: 'Visual design · Content',
    contributions: [
      'Designed digital stickers and visual assets using Canva for integration and display in the digital sticker shop.',
      'Created descriptions and written content for display within the system.'
    ],
    repo: 'https://github.com/Elocin-MMDC/BUBBISTIX-WebTech',
    gallery: [
      ['image(20261120-132433).png', 'Sticker shop home page'],
      ['image(20261120-132438).png', 'Sticker collection and catalog'],
      ['image(20261120-132441).png', 'About Bubbistix page'],
      ['image(20261120-132445).png', 'Shopping cart'],
      ['image(20261120-132449).png', 'Digital sticker library'],
      ['image(20261120-132452).png', 'Project team section']
    ]
  }
];
