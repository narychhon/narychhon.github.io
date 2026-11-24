export const profile = {
  name: 'NARY CHHON',
  bio: 'I am a multidisciplinary professional with interests and experience across technology, cybersecurity, graphic design, communication, and event engagement. I enjoy combining analytical thinking, creative expression, and collaboration to develop ideas, solve problems, and create meaningful experiences.',
  email: 'chhonnary.r@gmail.com',
  cvUrl: '/documents/CV.pdf',
  linkedin: 'https://www.linkedin.com/in/narychhon/',
}

export const technologies = [
  {
    title: 'KOLAPSE — AI-Powered Elderly Fall Detection & Monitoring System',
    category: 'AI / Machine Learning / Research',
    role: 'Academic project team member',
    tools: ['YOLOv8', 'MediaPipe Pose', 'OpenCV', 'TensorFlow/Keras', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Telegram', 'WhatsApp'],
    description: `Connect & Protect Your Loved One With Us.

AI-powered fall detection that turns existing webcam or CCTV footage into proactive elderly monitoring. When a potential fall or unusual movement is detected, KOLAPSE alerts caregivers through a chatbot or monitoring dashboard.`,
    slides: [
      '/images/projects/kolapse/workflow.jpg',
      '/images/projects/kolapse/frontpage.png',
      '/images/projects/kolapse/achievement.jpg',
    ],
    poster: '/images/projects/kolapse/poster.png',
    pitchdeck: '/documents/kolapse/pitchdeck.pdf',
    methodology: `Monitor → Detect & Analyze → Recognize Activity → Alert & Notify. YOLOv8 detects people, MediaPipe Pose extracts keypoints, and RNN+LSTM, CNN+LSTM and Transformer models classify standing, sitting, lying down and falling. CNN+LSTM was selected.`,
    results: `Tech stack: YOLOv8 · MediaPipe Pose · OpenCV · TensorFlow/Keras · FastAPI · PostgreSQL · WebSocket · Telegram · WhatsApp

Test accuracy: 83.39% · macro F1: 0.83 · fall precision 0.92 / recall 0.81 · sitting recall 0.85.`,
    status: 'Academic research project',
  },
  {
    title: 'InnoBox — Innovation Project',
    category: 'Innovation / Startup / Product design',
    role: 'Marketing & business development',
    description: `InnoBox is a hybrid STEM learning solution that brings hands-on experiments into Cambodian classrooms, where theory-based lessons and limited equipment often leave students disengaged. It combines affordable experiment kits with a digital platform of video tutorials, gamified challenges, and an online community. The prototype was built with on-shelf materials and a 3D printer, inspired by Mark Rober's CrunchLab approach.`,
    slides: [
      '/images/projects/innobox/frontpage.webp',
      '/images/projects/innobox/productflow.webp',
      '/images/projects/innobox/productflow-2.webp',
      '/images/projects/innobox/award.webp',
      '/images/projects/innobox/unipreneur-award.webp',
    ],
    pitchdeck: 'https://www.canva.com/design/DAGOewsFff4/hKYhtG1-c_lMB1oe6XXHmg/edit',
    methodology: 'Affordable DIY STEAM kit with a STEAM Challenge application for students, plus a curriculum design package for schools and summer camps — built to bring the spark back to kids learning science.',
    results: 'Pitch deck and recognition materials available.',
    status: 'Innovation project',
  },
  {
    title: 'Secure E-commerce CMS — Cloud Deployment & Security Architecture',
    category: 'Cybersecurity / Cloud Computing / Web Application Security',
    role: 'Frontend & integration developer',
    tools: ['Strapi', 'AWS', 'Web security', 'Cloud architecture', 'Frontend development', 'Integration'],
    description: 'A cloud-based e-commerce CMS built on AWS with Strapi, EC2, RDS PostgreSQL, and S3. It demonstrates a full end-to-end flow from a deployed frontend through the Strapi API to database and media storage — I handled the frontend build, API integration, and deployment.',
    report: 'https://docs.google.com/document/d/1rr_pwhQMEgbp2lTQwJY3MduJJPoC3ITAWhRchvlUSIU/edit?usp=sharing',
    methodology: 'VPC → EC2 with Strapi CMS → RDS PostgreSQL → S3 media storage → frontend deployment → component and end-to-end testing.',
    results: 'Project report linked below.',
    status: 'University project',
  },
  {
    title: 'Lancang–Mekong Regional Cybersecurity Forum & Competition 2026 — Landing Website',
    category: 'Web development / Cybersecurity event / Client communication',
    role: 'Team & client communication, content drafting, note-taking, website flow design, frontend',
    tools: ['Team collaboration', 'Client communication', 'Content drafting', 'Note-taking', 'Website flow design', 'Frontend development'],
    description: `A landing website for the Lancang–Mekong Regional Cybersecurity Forum & Competition 2026, built with my team for the Ministry of Post and Telecommunication of the Kingdom of Cambodia.

I worked with the team and the client to understand what they wanted — taking notes, drafting the content, designing the website flow, and building the frontend within a tight turnaround.`,
    slides: [
      '/images/projects/lmc/forum-01.webp',
      '/images/projects/lmc/forum-02.webp',
    ],
    methodology: 'Client discussions → note-taking → content drafting → website flow design → frontend build → launch.',
    results: `Live website: https://lancangmekong-cambodia.com/

Client: Ministry of Post and Telecommunication of the Kingdom of Cambodia.`,
    status: 'Live website — 2026',
    link: 'https://lancangmekong-cambodia.com/',
  },
  {
    title: 'LadyBug — Static Malware Analysis',
    category: 'Pentest Project / Static Malware Analysis',
    role: 'Project team member',
    tools: ['Static analysis', 'Malware analysis'],
    description: 'A cybersecurity project showcase covering static malware analysis. The repository contains the project implementation and supporting materials, including static-analysis resources. Pitch deck, poster, logo, and terminal visuals document the project presentation.',
    slides: [
      '/images/projects/ladybug/frontpage.webp',
      '/images/projects/ladybug/solution.webp',
    ],
    slideFit: 'contain',
    repository: 'https://github.com/Chhonnary/ladybug_',
    report: '/documents/ladybug/pitchdeck.pdf',
    methodology: 'Static-analysis workflow documented in the supplied pitch deck and poster.',
    results: 'Supporting materials include a pitch deck, poster, repository, and presentation visuals.',
    status: 'Pentest Project',
  },
  {
    title: 'TOS (Let’s Go in Khmer) — Cambodia Tourism Platform',
    category: 'Innovation competition / Tourism platform / Product design',
    role: 'Team member — first innovation competition',
    tools: ['Team collaboration', 'Competition pitch', 'Figma prototype'],
    description: `My first innovation competition, where I joined the team as its only woman. As a frequent traveller, I had seen how misleading online information leaves tourists confused, disappointed, and missing out. TOS (Let's Go in Khmer) introduces Cambodia to international visitors with reliable local content and personalized trip recommendations — locations, activities, food, local gems, and more.`,
    slides: [
      '/images/projects/tos/tos-01.webp',
      '/images/projects/tos/tos-02.webp',
      '/images/projects/tos/tos-03.webp',
      '/images/projects/tos/tos-04.webp',
    ],
    pitchdeck: '/documents/tos/pitchdeck.pdf',
    prototype: 'https://www.figma.com/design/W14IU2Tx8Zqx262s0RbUu8/TOS-APP?node-id=0-1&p=f',
    methodology: 'Problem research → reliable local content → personalized recommendation flow → Figma prototype → competition pitch.',
    results: 'Platform concept and prototype presented at an innovation competition.',
    status: 'Innovation competition',
  },
]

export const designWorks = [
  { title: 'Approved 02', ratio: 0.375, scale: 1, category: 'Graphic design', color: 'lime', type: 'Poster', image: '/images/design/approved-2.webp' },
  { title: 'Approved', ratio: 0.375, scale: 1, category: 'Graphic design', color: 'violet', type: 'Poster', image: '/images/design/approved.webp' },
  { title: 'DL', ratio: 0.667, scale: 1, category: 'Visual identity', color: 'coral', type: 'Design work', image: '/images/design/dl.webp' },
  { title: 'DR', ratio: 0.667, scale: 1, category: 'Visual identity', color: 'paper', type: 'Design work', image: '/images/design/dr.webp' },
  { title: 'Kirirom Charity Trip', ratio: 0.707, scale: 1, category: 'Event visual', color: 'lime', type: 'Event design', image: '/images/design/kirirom-charity-trip.webp' },
  { title: 'Artwork 01', ratio: 3.333, scale: 0.45, category: 'Graphic design', color: 'violet', type: 'Design work', image: '/images/design/artwork-01.webp' },
  { title: 'Artwork 02', ratio: 1.491, scale: 1, category: 'Graphic design', color: 'coral', type: 'Design work', image: '/images/design/artwork-02.webp' },
  { title: 'Artwork 03', ratio: 3.328, scale: 0.45, category: 'Graphic design', color: 'lime', type: 'Design work', image: '/images/design/artwork-03.webp' },
]

export const events = [
  { title: 'International Conference on the New World Order', image: '/images/events/new-world-order.webp', ratio: 1.5 },
  { title: 'SUSU Dream Run 8K', image: '/images/events/susu-dream-run-8k.webp', ratio: 1.777 },
  { title: 'CET 2025', image: '/images/events/cet-2025.webp', ratio: 1.5 },
  { title: 'Open House', image: '/images/events/open-house.webp', ratio: 0.667 },
  { title: 'LMCC', image: '/images/events/lmcc.webp', ratio: 1.5 },
  { title: 'LMCC Team', image: '/images/events/lmcc-team.webp', ratio: 1.5 },
  { title: 'Run for Children Smile 2025', image: '/images/events/run-for-children-smile.webp', ratio: 1.333 },
]

export const achievements = [
  {
    title: 'Certified Phishing Prevention Specialist',
    field: 'Cybersecurity',
    issuer: '',
    date: '',
    detail: 'Cybersecurity certification focused on phishing prevention.',
    image: '/images/achievements/certified-phishing-prevention-specialist.webp',
    color: 'lime',
  },
  {
    title: 'Cybersecurity Career Starter Certificate',
    field: 'Cybersecurity',
    issuer: '',
    date: '',
    detail: 'Foundational cybersecurity career-readiness certificate.',
    image: '/images/achievements/cybersecurity-career-starter.webp',
    color: 'violet',
  },
  {
    title: 'Indonesian Experience 2026 — Certificate of Participation',
    field: 'Exchange / participation',
    issuer: '',
    date: '2026',
    detail: 'Certificate of participation for the Indonesian Experience 2026 program.',
    image: '/images/achievements/indonesian-experience-2026.webp',
    color: 'coral',
  },
  {
    title: 'IBM Cognitive Class — SQL',
    field: 'Data & SQL',
    issuer: 'IBM',
    date: '',
    detail: 'SQL learning certificate from IBM Cognitive Class.',
    image: '/images/achievements/ibm-cognitive-class-sql.webp',
    color: 'paper',
  },
  {
    title: 'SDG Certificate',
    field: 'Sustainable development',
    issuer: '',
    date: '',
    detail: 'Certificate supplied as SDG.pdf.',
    image: '/images/achievements/sdg.webp',
    color: 'lime',
  },
  {
    title: 'Shandong Exchange',
    field: 'Exchange program',
    issuer: '',
    date: '',
    detail: 'Certificate from the Shandong exchange program.',
    image: '/images/achievements/shandong-exchange.webp',
    color: 'violet',
  },
  {
    title: 'TryHackMe — Advent of Cyber 2025',
    field: 'Cybersecurity',
    issuer: 'TryHackMe',
    date: '2025',
    detail: 'Advent of Cyber 2025 completion certificate.',
    image: '/images/achievements/tryhackme-aoc-2025.webp',
    color: 'coral',
  },
]
