---
layout: ../../layouts/Work.astro
title: Work Twin
category: ai
order: 1
summary: I designed and built Work Twin, an AI agent that learns how a person does their job through a short interview, then does that work with them.
card: card-work-twin.png
gallery:
  - file: work-twin-horizon.png
    alt: Work Twin home screen showing the greeting, the ask line, recent arrivals, and two playbooks with their schedules
    caption: The home screen shows only what needs a decision, the twin's finished work, and its playbooks.
    address: 127.0.0.1:8787
---

I designed and built Work Twin, an AI colleague that learns how someone does their job and then does that work with them. A short guided interview turns their answers into a playbook in their own words, and Claude Code or Codex runs that playbook. Anything other people would see, like a message, a merge, or a shared document, waits for a one-click approval.

The main design problem was trust. Each playbook starts out checking in at every step and earns more autonomy after clean runs. Every run ends with a checklist and evidence, and every correction becomes a rule in the playbook. Everything stays in one folder on the user's machine.

I built it in about ten days and released it to a pilot group. Version 2 added scheduled triggers and an interface that shows only what needs a decision.

A playbook is one plain text file per task. This is my first one, kept small on purpose:

```text
id: pb-hello-caleb
name: Hello Caleb Morning Message
trigger: every morning at 7:30
autonomy: prepare
harness: claude

## Goal
Send Caleb a Slack DM to himself with the exact text Hello Caleb.

## Steps
1. [read] Confirm the owner's Slack user through the connector.
2. [read] Check today's DMs: one message per day, never two.
3. [external-write] Send the message. Locked: waits for a yes.

## Rules, in the owner's words
- "Exact text, Hello Caleb, nothing else."

## Done When
- One Hello Caleb message in the owner's DM today, with its link.
- No other message was sent.

## Fallback
If Slack is unreachable, leave the item in the outbox and say so.
```
