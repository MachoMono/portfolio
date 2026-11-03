---
layout: ../../layouts/Project.astro
title: Work Twin
category: ai
order: 1
summary: I designed and built Work Twin, an AI agent that learns how a person does their job through a short interview, then does that work with them.
card: card-work-twin.png
pitch: An AI colleague that learns how you do your job, then does that work with you. Nothing leaves your desk without your yes.
facts:
  - label: Built in
    value: About 10 days
  - label: Runs on
    value: Claude Code or Codex
  - label: Status
    value: In pilot
gallery:
  - file: work-twin-horizon.png
    alt: Work Twin home screen showing the greeting, the ask line, recent arrivals, and two playbooks with their schedules
    caption: The home screen shows only what needs a decision, the twin's finished work, and its playbooks.
    address: 127.0.0.1:8787
flow:
  - title: Teach it
    text: A short interview asks how you do the task. You answer in your own words.
  - title: It writes a playbook
    text: Your answers become one plain text file per task.
  - title: A trigger wakes it
    text: A schedule starts the playbook, like every morning at 7:30.
  - title: It does the work
    text: Claude Code or Codex runs the steps, then checks itself against the playbook.
  - title: You approve
    text: Anything other people would see waits for a one-click yes.
decisions:
  - title: Trust is earned per playbook
    text: Each playbook starts out checking in at every step. It earns more autonomy after clean runs.
  - title: Nothing goes out without a yes
    text: A message, a merge, or a shared document waits for approval before anyone else sees it.
  - title: Your words, your folder
    text: Playbooks use the owner's wording. Every correction becomes a rule, and everything stays in one folder on your machine.
playbook:
  title: A playbook, annotated
  intro: This is my first one, kept small on purpose. It sends me one message a day.
  parts:
    - code: |
        id: pb-hello-caleb
        name: Hello Caleb Morning Message
        trigger: every morning at 7:30
        autonomy: prepare
        harness: claude
      note: The header sets when it runs, how much it may do before asking, and which agent runs it.
    - code: |
        ## Goal
        Send Caleb a Slack DM to himself with the exact text Hello Caleb.
      note: One goal, in plain language.
    - code: |
        ## Steps
        1. [read] Confirm the owner's Slack user through the connector.
        2. [read] Check today's DMs: one message per day, never two.
        3. [external-write] Send the message. Locked: waits for a yes.
      note: Each step is tagged. Reads run freely. The step that reaches other people is locked until I approve.
    - code: |
        ## Rules, in the owner's words
        - "Exact text, Hello Caleb, nothing else."
      note: When I correct the twin, the correction lands here as a rule, in my words.
    - code: |
        ## Done When
        - One Hello Caleb message in the owner's DM today, with its link.
        - No other message was sent.
      note: Every run ends with this checklist and has to show evidence for each line.
    - code: |
        ## Fallback
        If Slack is unreachable, leave the item in the outbox and say so.
      note: What it does when something breaks, so a failure is visible instead of silent.
results:
  status: Pilot in progress. It ends November 6.
  metrics:
    - value: 35+
      label: People using it
    - value: 50+
      label: Playbooks created
  next: Final pilot results will follow after it ends. Version 2 added scheduled triggers and an interface that shows only what needs a decision.
---

At my current job, technical writing has been folded into something new. The name is still pending, but the idea is AI-native work and enablement. A senior technology operations manager told me about the concept of one agent doing your work instead of many. I expanded on it: the agent should be personal to you and your work. I can't know everything every person in my department does, so the design had to be open-ended.

The agent interviews you and saves your answers as playbooks it can recall later. From there, I built in the ability for the twin to act as an expert AI orchestrator, coordinating persistent teams of sub-agents at different models and effort levels to get your work done. The audience is people who need AI features but don't want to dig into managing agents and workflows, so I met them where they're most comfortable.

I packaged the agent and workflow as a plugin with a simple install process through the Claude guide, plus a narrated installation video and a companion HTML guide.
