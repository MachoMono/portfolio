export const resume = {
  name: 'Caleb Larry',
  email: 'larrycm@gmail.com',
  // TODO: write the intro. Aim for 2-3 sentences covering:
  //   1. What you build and who it helps (same idea as the home page headline).
  //   2. How you got here: security, then technical writing, then agent tooling. Use dates you can stand behind.
  //   3. What kind of role you want next.
  intro:
    'I spent seven years in IT, five of them in network security, then moved into technical writing because I love reading, writing, and organizing data. I grew from junior to senior, and in the age of AI into something different again: designing workflows that finish tasks, meet business needs, and keep the end user front of mind. My English degree taught me to teach myself, and the discipline that carried me through my security career and my GCIH certification still drives me.',
  skills: [
    { label: 'AI tooling', items: ['Claude Code', 'Codex', 'GitHub Copilot', 'ChatGPT', 'Herdr', 'AI agents'] },
    { label: 'Documentation', items: ['Markdown', 'Hugo', 'Diátaxis', 'Confluence'] },
    { label: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS', 'MySQL'] },
    { label: 'Workflow', items: ['Git', 'GitHub', 'VS Code', 'Jira'] },
    { label: 'Systems', items: ['Linux', 'Command line'] },
  ],
  experience: [
    {
      role: 'Technical Writer II',
      company: 'Cvent',
      dates: 'January 2023 – Present',
      points: [
        'Upskilled team members on technical workflows for document management',
        'Collaborated with SMEs to develop new engineering design docs templates',
        'Developed and implemented new KPI scorecard formats for SMEs',
        'Developed and maintained internal Developer Portal website',
      ],
    },
    {
      role: 'Technical Writer',
      company: 'cPanel',
      dates: 'January 2020 – 2023',
      points: [
        'Produce documentation requests using docs-as-code workflow',
        'Collaborate with SMEs to document UI features from planning to release',
        'Author web hosting documentation using Confluence, Jira, Hugo, and Atom',
        'Write and review strings for developers',
      ],
    },
    {
      role: 'Security Analyst',
      company: 'Prosperity Bank',
      dates: 'December 2016 – December 2019',
      points: [
        'Created and managed email phishing campaigns across all internal departments',
        'Trained new security department hires and document department processes',
        'Created and authored the security department newsletter',
      ],
    },
    {
      role: 'Security Analyst',
      company: 'Tokio Marine HCC',
      dates: 'March 2015 – September 2016',
      points: [
        'Wrote executive-level incident reports after security investigation',
        'Wrote best practice security training materials for users',
      ],
    },
    {
      role: 'Security and Log Review Analyst',
      company: 'Alert Logic',
      dates: 'May 2013 – March 2015',
      points: [
        'Wrote weekly security reports based on customer requests',
        'Trained new hires and edited training materials',
      ],
    },
    {
      role: 'Junior Linux Administrator',
      company: 'BubbleUP',
      dates: 'March 2011 – April 2013',
      points: [
        'Wrote installation materials for Kiosks',
        'Edited HTML and CSS templates based on customer requests',
        'Transferred website SQL database information from development to production',
      ],
    },
  ],
  education: [
    {
      school: 'Stephen F. Austin State University, Nacogdoches, Texas, 2008',
      detail: 'B.S. in Communication, and a minor in English',
    },
    {
      school: 'SANS Institute, 2015',
      detail: 'GIAC Certified Incident Handler – GCIH Analyst #25281',
    },
  ],
};
