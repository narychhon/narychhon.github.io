export const profile = {
  name: 'NARY CHHON',
  bio: 'I am a multidisciplinary professional with interests and experience across technology, cybersecurity, graphic design, communication, and event engagement. I enjoy combining analytical thinking, creative expression, and collaboration to develop ideas, solve problems, and create meaningful experiences.',
  email: '',
  cvUrl: '/documents/CV.pdf',
  linkedin: '',
  github: '',
}

export const kolapseSlides = [
  '/images/projects/kolapse/workflow.jpg',
  '/images/projects/kolapse/frontpage.png',
  '/images/projects/kolapse/achievement.jpg',
]

export const technologies = [
  {
    title: 'KOLAPSE — AI-Powered Elderly Fall Detection & Monitoring System',
    category: 'AI / Machine Learning / Research',
    role: 'Academic project team role — confirm in project materials',
    tools: ['YOLOv8', 'MediaPipe Pose', 'OpenCV', 'TensorFlow/Keras', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Telegram'],
    description: 'An academic research and development system that processes CCTV or webcam video, detects fall incidents, records monitoring activity, and sends caregiver alerts through Telegram and WhatsApp.',
    image: '/images/projects/kolapse/workflow.jpg',
    poster: '/images/projects/kolapse/poster.png',
    methodology: 'YOLOv8 detects and crops people; MediaPipe Pose extracts 16 landmarks; spine angular features and angular velocity are assembled into 30-frame sequences for RNN+LSTM, CNN+LSTM, and Transformer comparison.',
    results: 'CNN+LSTM was selected. Test accuracy: 83.39%; test loss: 0.7277; macro F1-score: 0.83; fall precision 0.92 / recall 0.81; standing precision 0.89 / recall 0.88; sitting recall 0.85.',
    status: 'Academic research project',
  },
  {
    title: 'Secure E-commerce CMS — Cloud Deployment & Security Architecture',
    category: 'Cybersecurity / Cloud Computing / Web Application Security',
    role: 'University project contributor — confirm contribution',
    tools: ['Strapi', 'AWS', 'Web security', 'Cloud architecture'],
    description: 'A university project demonstrating secure e-commerce content management through Strapi and AWS deployment. Project reports and deployment screenshots provide the detailed technical evidence.',
    link: 'https://konserskrumakara.me',
    methodology: 'The available project report and demonstration should be inspected before expanding this case study.',
    results: 'Live demo: https://konserskrumakara.me',
    status: 'University project',
  },
  {
    title: 'LadyBug — Static Malware Analysis',
    category: 'Cybersecurity / Malware Analysis',
    role: 'Project team member — confirm contribution',
    tools: ['Static analysis tools — confirm exact tools'],
    description: 'A cybersecurity project showcase covering static malware analysis. The repository contains the project implementation and supporting materials, including static-analysis resources. Pitch deck, poster, logo, and terminal visuals document the project presentation.',
    image: '/images/projects/ladybug/terminal.jpg',
    repository: 'https://github.com/Chhonnary/ladybug_.git',
    methodology: 'Present purpose and static-analysis workflow only when confirmed by the supplied pitch deck and poster.',
    results: 'Specific findings remain to be populated from project materials.',
    status: 'Cybersecurity project showcase',
  },
  {
    title: 'TOS',
    category: 'Technology / Project Showcase',
    role: 'Contributor — confirm contribution',
    tools: ['See pitch deck and demo screenshots'],
    description: 'A concise showcase of the project concept and proposed solution. Project pitch and demo materials should be used as the source for the final case study.',
    methodology: 'Use the pitch deck and demo screenshots to document concept, problem, solution, and contribution.',
    results: 'Project readiness and outcomes remain to be confirmed.',
    status: 'Project showcase — not confirmed finished product',
  },
]

export const designWorks = [
  { title: 'KOLAPSE Research Poster', category: 'Poster / Publication', color: 'lime', type: 'Research poster', image: '/images/projects/kolapse/poster.png' },
  { title: 'KOLAPSE System Workflow', category: 'Visual communication', color: 'violet', type: 'Technical visual', image: '/images/projects/kolapse/workflow.jpg' },
  { title: 'LadyBug Interface', category: 'Visual identity', color: 'coral', type: 'Project visual', image: '/images/projects/ladybug/terminal.jpg' },
]

export const events = [
  {
    title: 'International Conference on the New World Order',
    role: 'Conference participation / event engagement — confirm exact role',
    date: '30 October 2026',
    venue: 'Pannasastra University of Cambodia',
    description: 'A documented conference event bringing together participants and organizers for discussion of global and local themes. Use this photograph with the exact role and contribution confirmed from the event records.',
    image: '/images/events/international-conference-new-world-order.jpg',
  },
]

export const achievements = [
  {
    title: 'Competition Recognition',
    issuer: 'Team achievement — organization name to add',
    date: 'Date to add',
    detail: 'KOLAPSE team photograph and competition recognition materials should be added here when team.png is supplied. The achievement is represented as a team accomplishment; specific competition details remain to be confirmed.',
  },
]
