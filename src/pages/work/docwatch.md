---
layout: ../../layouts/Project.astro
title: Docwatch
category: ai
order: 2
summary: I designed and built Docwatch, a four-agent pipeline that turns the questions people keep asking in Slack into fact-checked documentation pull requests, with a person approving each step that matters.
card: card-docwatch.png
pitch: Slack questions in, verified docs out. Four agents find the gaps, draft the fix, and check every claim before a pull request opens.
facts:
  - label: Agents
    value: 4, one narrow job each
  - label: Human gates
    value: 2, before and after the draft
  - label: Built with
    value: Claude Code
video:
  badge: Watch how it works
  file: docwatch-animated.mp4
  poster: docwatch-poster.png
  alt: Animated diagram of the Docwatch pipeline. A question in Slack moves through detect, a human gate, classify, write, a second human gate, and interrogate, ending in a pull request.
  caption: One gap, from question to pull request.
flow:
  - title: Detect the gap
    text: The first agent clusters the questions people keep asking and skips topics the docs already cover.
  - title: A person approves
    text: Only gaps a person approves move on. Everything else stops here.
  - title: Classify and write
    text: It picks the documentation type and the target file, then drafts from a ledger of claims.
  - title: Interrogate
    text: A separate agent pulls the material claims from the draft and fact-checks each one.
  - title: A writer reviews
    text: A writer reviews the branch, and the pull request opens with an accuracy review attached.
decisions:
  - title: Agents draft, humans decide
    text: A person approves the gap before any writing starts, and a writer reviews the branch before the pull request opens.
  - title: Evidence has tiers
    text: Code and tests count as proof. Slack describes a symptom, never a cause, so a claim about system behavior needs the top tier.
  - title: Narrow jobs, least privilege
    text: Each agent gets only the tools it needs. Only the writer can edit files, and every run is its own process with its own prompt.
screens:
  - file: docwatch-board.png
    alt: The Docwatch gap board with columns from Pending Approval to Finished and a card for each documentation gap
    caption: The gap board. A person approves, rejects or writes each gap. The topics shown are sample data.
  - file: docwatch-analytics.png
    alt: The Docwatch analytics page with four totals and two line charts of gaps detected and docs written per day
    caption: Analytics for gaps detected and docs written. The numbers shown are sample data.
results:
  status: In daily use by a developer team.
  metrics:
    - value: 50+
      label: Documents authored with it
  next: The write-up is about the design.
---

I built this tool after a few months with our Backstage team. I joined as a forward-deployed technical writer, got to know the team and their processes, and wrote a few documents before identifying the pain points they raised in standups and retros. The team needed to clean up its docsite and keep it fresh, so its engineers could spend less time answering help chats (there were five) and more time engineering. Those chats are where Docwatch gets its questions: it reads the Slack questions people keep asking and turns them into documentation.

I planned a workflow in Claude Code, tested it with the team lead, and presented a prototype to the team. The response was good, so the next step was rebuilding it in the company's CDF framework and hosting it online. I worked with the team's engineers on that move. Since then, the tool has been used to author more than 50 documents. It brought order and a Diátaxis-based structure to their site, along with standards for the team's hand-written documents.
