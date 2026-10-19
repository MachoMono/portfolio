export const resume = {
  name: 'Caleb Larry',
  email: 'Larrycm@gmail.com',
  intro:
    'Senior technical writer with 13+ years of writing for technical audiences, from security operations to developer documentation. I build documentation infrastructure for the AI era: agent-driven authoring and review tools, pipelines that turn support questions into docs, and audits that measure how well content performs for AI search. I treat docs as code and verify AI output against real product behavior.',
  skills: [
    'AI tooling: Claude Code (skills, subagents, multi-agent pipelines), Glean agents, MCP, LLM-based review and evaluation',
    'Docs as code: Git/GitHub, pull requests, Markdown, Astro, Hugo, Backstage, GitHub Actions',
    'Programming and scripting: Python, JavaScript, SQL (MySQL), HTML/CSS, Bash',
    'Frameworks and tools: Diátaxis, Confluence, Jira, Slack, Agile',
    'Linux, macOS, and Windows, including the command line on each',
  ],
  experience: [
    {
      role: 'Senior Technical Writer',
      company: 'Cvent',
      dates: 'January 2026 – Present',
      points: [
        'Built Airo-Grade in Glean, an audit tool that scores Confluence pages on how well they perform with Cvent’s internal AI search, combining deterministic checks with parallel subagent review of prose quality',
        'Ran department-wide AI-readiness audits; the scored HTML reports became the reference for Cvent’s AI-readiness initiative',
        'Architected Docwatch with Claude Code, a four-agent pipeline that monitors Slack for undocumented questions and turns them into a reviewable documentation backlog, letting the Backstage support team point engineers to existing docs and draft new entries from resolved cases',
        'Built techdoc, a Claude Code authoring skill that interviews the writer (at most four questions for a new page, three for an update) and produces Diátaxis-typed docs with complete frontmatter',
        'Built techdocs-standards, a Claude Code pull request review skill that runs three passes: a hard frontmatter gate plus advisory structure and style checks',
      ],
    },
    {
      role: 'Technical Writer II',
      company: 'Cvent',
      dates: 'April 2023 – January 2026',
      points: [
        'Migrated the Cvent developer portal off WordPress and restructured it with the Diátaxis framework, giving content from many internal contributors one consistent style and voice',
        'Maintained the developer portal and trained a successor on the site, Git, and Markdown before handing it off',
        'Worked with engineers to create engineering design doc templates',
        'Designed KPI scorecard formats for SMEs and trained team members on document management workflows',
      ],
    },
    {
      role: 'Technical Writer',
      company: 'cPanel',
      dates: 'January 2020 – 2023',
      points: [
        'Documented UI features and APIs from planning through release in a docs-as-code workflow (Git, Hugo, Markdown)',
        'Worked with engineers and product managers to document web hosting features, including database tools and the Plesk 360 API',
        'Wrote and reviewed UI strings for developers',
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
