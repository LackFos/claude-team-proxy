# Claude Team Proxy

**Use at your own risk. Sharing your account is not permitted by Anthropic (see: [Anthropic Consumer Terms](https://www.anthropic.com/legal/consumer-terms)).**

---

## Overview

This is a simple proxy server that allows multiple people to share a single Anthropic API key. It acts as a middleman to track exactly how many tokens each person uses, making it easy to monitor costs across a team.

## Why use this?

When you share one API key directly, you cannot see who is using the most credits. This tool:

- **Identifies** each user via a custom header.
- **Tracks** input and output tokens for every request.
- **Logs** usage to a database so you can see individual costs.

## How it works

1. **Developer** sends a request from their machine to this proxy.
2. **Proxy** identifies the developer and forwards the request to Anthropic using the shared Master Key.
3. **Anthropic** sends back the answer and the "bill" (usage data).
4. **Proxy** saves the token count to the user's name and returns the answer to the developer.

## Features

- **Simple Tracking:** No more guessing who used the budget.
- **Claude Code Compatible:** Designed to work with the `claude` CLI.
- **Lightweight:** Easy to run on a local server or a private cloud.

## Basic Setup

1. **Install:** Clone this repository and install dependencies.
2. **Configure:** Add your `ANTHROPIC_API_KEY` to your environment variables.
3. **Launch:** Start the proxy server.
4. **Connect:** Set your Claude Code environment to point to this proxy URL.

## Disclaimer

This project is for educational and internal monitoring purposes. Users are responsible for complying with Anthropic's terms of service and ensuring their API keys are handled securely.
