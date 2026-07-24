const TimelineData = [
  {
    id: 'education',
    date: '2019 - 2023',
    shortDate: '2019',
    role: 'Bachelors in Electrical Engineering',
    company: 'Punjab Engineering College (PEC)',
    location: 'Chandigarh, India',
    details: [
      'Graduated with 7.65 CGPA.',
      'Developed Placed.PEC (College Recruitment Platform) using React.js, Firebase, Firestore, and Bootstrap.',
      'Won 1st Prize (out of 1,100) in Code Rush 1.0 intra-college coding competition.'
    ]
  },
  {
    id: 'nucleus',
    date: 'Jan 2022 - July 2022',
    shortDate: 'Jan 2022',
    role: 'DevOps Intern',
    company: 'Nucleus Software Exports',
    location: 'Noida, India',
    details: [
      'Led a code migration POC from SVN to Git based VCS (GitLab) and performed Gerrit code review flow.',
      'Developed and deployed secure, configurable, and memory-efficient immutable infrastructure with CI/CD automation, reducing manual errors by 40%.',
      'Automated 60+ user acceptance test scenarios using FitNesse testing tool, integrated into CI/CD pipeline leading to 50% faster feedback loop.'
    ]
  },
  {
    id: 'skeps',
    date: 'July 2023 - July 2025',
    shortDate: 'July 2023',
    role: 'Software Development Engineer',
    company: 'Skeps',
    location: 'Gurugram, India',
    details: [
      'Designed and implemented server-side development using Node.js (Express) with JavaScript and RESTful APIs, decreasing API response time by 30%.',
      'Identified and resolved a critical data leak issue in the production environment, enhancing software reliability.',
      'Increased datalake service cron job efficiency by 55% by reducing database network calls.',
      'Independently architected and developed a distributed, scalable data warehouse microservice with advanced ETL capabilities, reducing analysis workload by 40% and saving 25% in costs.',
      'Awarded the SPOT Award at Skeps for automating 5 critical workflows, reducing execution time from 1 day to 10 minutes.'
    ]
  },
  {
    id: 'zupee',
    date: 'July 2025 - March 2026',
    shortDate: 'July 2025',
    role: 'Software Engineer',
    company: 'Zupee',
    location: 'Gurugram, India',
    details: [
      'Part of backend team delivering Zupee Studio, a video streaming platform, from concept to launch within 1 week.',
      'Migrated and enabled real time data sync for 1.5M users from an acquired startup by processing 15M records at 10K rpm leveraging S3, AWS Lambda and SQS.',
      'Improved API latency by 65% using a multi-cache wrapper combining in-memory cache and Redis hashmaps.',
      'Introduced chaos testing framework, reducing downtime risks and improving overall system resilience by 10%.',
      'Rolled out A/B based payment gateway routing between PhonePe and Juspay, improving transaction success metric from 12% to 14% at scale.',
      'Awarded the Hustler Award at Zupee for high impact contributions.'
    ]
  },
  {
    id: 'alaan',
    date: 'April 2026 - Present',
    shortDate: 'April 2026',
    role: 'Senior Software Engineer',
    company: 'Alaan',
    location: 'Bengaluru, India',
    details: [
      'Led the separation of a NestJS microservice from a monolithic system, optimizing critical workflows and improving API latency by 60%.',
      'Identified and fixed IDOR vulnerabilities across the codebase, strengthening application security.'
    ]
  }
];

export default TimelineData;
