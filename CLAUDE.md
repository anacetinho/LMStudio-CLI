# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
- `npm run build` - Build the main project
- `npm run build:all` - Build main project, sandbox, and VS Code extension
- `npm run start` - Start Qwen Code CLI
- `npm run debug` - Start CLI in debug mode with inspector

### Testing
- `npm test` - Run all workspace tests
- `npm run test:ci` - Run tests with coverage for CI
- `npm run test:e2e` - Run end-to-end integration tests
- `npm run test:integration:sandbox:none` - Run integration tests without sandbox
- `npm run test:integration:sandbox:docker` - Run integration tests with Docker sandbox

### Code Quality
- `npm run lint` - Lint TypeScript code with ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run typecheck` - Run TypeScript type checking across workspaces
- `npm run format` - Format code with Prettier

### Build System
- `npm run bundle` - Create production bundle for distribution
- `npm run build:sandbox` - Build sandbox container image
- `npm run build:vscode` - Build VS Code companion extension

## Architecture Overview

This is a monorepo containing multiple packages that work together to provide an AI-powered command-line tool adapted from Google's Gemini CLI for Qwen models.

### Workspace Structure
- **packages/cli** - Main CLI application entry point and UI components
- **packages/core** - Core functionality, AI integrations, and business logic
- **packages/test-utils** - Shared testing utilities across packages
- **packages/vscode-ide-companion** - VS Code extension for IDE integration

### Key Technologies
- **TypeScript** - Primary language with strict type checking
- **React + Ink** - Terminal UI framework for interactive CLI experience
- **Node.js 20+** - Runtime requirement
- **Vitest** - Testing framework across all packages
- **ESBuild** - Fast bundling for production builds

### Core Integrations
- **Qwen Models** - Primary AI backend with OAuth authentication
- **OpenAI-Compatible APIs** - Support for various model providers
- **Google GenAI** - Fallback AI integration
- **Model Context Protocol (MCP)** - Extensible tool integration
- **Terminal/PTY** - Advanced terminal interaction capabilities

### Authentication Flow
The project supports multiple authentication methods:
1. **Qwen OAuth** (default) - Browser-based authentication with qwen.ai
2. **OpenAI-compatible APIs** - Environment variables or .env files
3. **Regional providers** - ModelScope (China), OpenRouter (International)

### Build and Distribution
- **Bundle target**: Single executable at `bundle/gemini.js`
- **Package publishing**: NPM package `@qwen-code/qwen-code`
- **Container images**: `ghcr.io/qwenlm/qwen-code:0.0.11`
- **Cross-platform**: Supports macOS, Linux, Windows via optional native dependencies

### Development Workflow
1. Install dependencies: `npm install`
2. Build packages: `npm run build`
3. Run locally: `npm run start`
4. Make changes and test: `npm test`
5. Type check: `npm run typecheck`
6. Lint and format: `npm run lint:fix && npm run format`

### Important Notes
- This codebase is adapted from Google Gemini CLI with parser optimizations for Qwen models
- Uses workspace pattern with shared dependencies
- Includes comprehensive integration testing with sandbox environments
- Supports both local development and containerized deployment