# Playwright Portfolio

End-to-end testing practice project built with [Playwright](https://playwright.dev/) and TypeScript.

[![Playwright Tests](https://github.com/florianciovirnache-tech/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/florianciovirnache-tech/playwright-portfolio/actions/workflows/playwright.yml)

## About

This repository documents my journey learning test automation with Playwright. It includes end-to-end tests running across multiple browsers (Chromium, Firefox, WebKit), with automated test runs on every push via GitHub Actions.

## Tech Stack

- [Playwright](https://playwright.dev/) — end-to-end testing framework
- TypeScript
- GitHub Actions — CI/CD

## Getting Started

Clone the repository and install dependencies:

    git clone https://github.com/florianciovirnache-tech/playwright-portfolio.git
    cd playwright-portfolio
    npm install
    npx playwright install

Run the tests:

    npx playwright test

View the HTML report after a run:

    npx playwright show-report

## Status

🚧 Work in progress — actively adding new tests as I learn.