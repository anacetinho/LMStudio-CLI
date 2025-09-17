# Qwen Code - Enhanced LM Studio Fork

<div align="center">

![Qwen Code Screenshot](./docs/assets/qwen-screenshot.png)

[![npm version](https://img.shields.io/npm/v/@qwen-code/qwen-code.svg)](https://www.npmjs.com/package/@qwen-code/qwen-code)
[![License](https://img.shields.io/github/license/QwenLM/qwen-code.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![Downloads](https://img.shields.io/npm/dm/@qwen-code/qwen-code.svg)](https://www.npmjs.com/package/@qwen-code/qwen-code)

**🏠 Enhanced AI-powered command-line tool with LM Studio integration**

> **Fork Notice**: This is an enhanced fork of [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) with optimized LM Studio integration, improved model selection, and resolved loop detection issues for better local AI performance.

[Installation](#installation) • [Quick Start](#quick-start) • [Features](#key-features) • [Documentation](./docs/) • [Contributing](./CONTRIBUTING.md)

</div>

<div align="center">
  
  <a href="https://qwenlm.github.io/qwen-code-docs/de/">Deutsch</a> | 
  <a href="https://qwenlm.github.io/qwen-code-docs/fr">français</a> | 
  <a href="https://qwenlm.github.io/qwen-code-docs/ja/">日本語</a> | 
  <a href="https://qwenlm.github.io/qwen-code-docs/ru">Русский</a> | 
  <a href="https://qwenlm.github.io/qwen-code-docs/zh/">中文</a>
  
</div>

Qwen Code is a powerful command-line AI workflow tool adapted from [**Gemini CLI**](https://github.com/google-gemini/gemini-cli) ([details](./README.gemini.md)), specifically optimized for [Qwen3-Coder](https://github.com/QwenLM/Qwen3-Coder) models. It enhances your development workflow with advanced code understanding, automated tasks, and intelligent assistance.

## 🚀 Fork Enhancements

This enhanced fork provides **superior LM Studio integration** with significant improvements:

- **🎯 Optimized Model Selection**: Default `openai/gpt-oss-20b` model for better performance and reduced loop issues
- **🔧 Simplified Configuration**: Streamlined `.env` setup with comprehensive examples and troubleshooting
- **🛡️ Loop Detection Fixes**: Resolved infinite loop issues through improved model configuration
- **📖 Enhanced Documentation**: Complete LM Studio setup guide with hardware recommendations
- **⚡ Performance Optimized**: Better conversation flow and tool calling reliability

## 💡 Free Options Available

Get started with Qwen Code at no cost using any of these free options:

### 🔥 Qwen OAuth (Recommended)

- **2,000 requests per day** with no token limits
- **60 requests per minute** rate limit
- Simply run `qwen` and authenticate with your qwen.ai account
- Automatic credential management and refresh
- Use `/auth` command to switch to Qwen OAuth if you have initialized with OpenAI compatible mode

### 🏠 LM Studio Local (Enhanced - Recommended for Privacy)

- **100% Free** - No API costs or usage limits
- **Complete Privacy** - Everything runs locally on your hardware
- **Superior Performance** - Optimized `openai/gpt-oss-20b` model configuration
- **No Loop Issues** - Resolved infinite loop problems through model optimization
- **Easy Setup** - Streamlined configuration with comprehensive `.env` examples

### 🌏 Regional Free Tiers

- **Mainland China**: ModelScope offers **2,000 free API calls per day**
- **International**: OpenRouter provides **up to 1,000 free API calls per day** worldwide

For detailed setup instructions, see [Authorization](#authorization).

> [!WARNING]
> **Token Usage Notice**: Qwen Code may issue multiple API calls per cycle, resulting in higher token usage (similar to Claude Code). We're actively optimizing API efficiency.

## Key Features

- **Code Understanding & Editing** - Query and edit large codebases beyond traditional context window limits
- **Workflow Automation** - Automate operational tasks like handling pull requests and complex rebases
- **Enhanced Parser** - Adapted parser specifically optimized for Qwen-Coder models

## Installation

### Prerequisites

Ensure you have [Node.js version 20](https://nodejs.org/en/download) or higher installed.

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

### Install from npm

```bash
npm install -g @qwen-code/qwen-code@latest
qwen --version
```

### Install from source

```bash
git clone https://github.com/QwenLM/qwen-code.git
cd qwen-code
npm install
npm install -g .
```

### Install globally with Homebrew (macOS/Linux)

```bash
brew install qwen-code
```

## Quick Start

```bash
# Start Qwen Code
qwen

# Example commands
> Explain this codebase structure
> Help me refactor this function
> Generate unit tests for this module
```

### Session Management

Control your token usage with configurable session limits to optimize costs and performance.

#### Configure Session Token Limit

Create or edit `.qwen/settings.json` in your home directory:

```json
{
  "sessionTokenLimit": 32000
}
```

#### Session Commands

- **`/compress`** - Compress conversation history to continue within token limits
- **`/clear`** - Clear all conversation history and start fresh
- **`/stats`** - Check current token usage and limits

> 📝 **Note**: Session token limit applies to a single conversation, not cumulative API calls.

### Authorization

Choose your preferred authentication method based on your needs:

#### 1. Qwen OAuth (🚀 Recommended - Start in 30 seconds)

The easiest way to get started - completely free with generous quotas:

```bash
# Just run this command and follow the browser authentication
qwen
```

**What happens:**

1. **Instant Setup**: CLI opens your browser automatically
2. **One-Click Login**: Authenticate with your qwen.ai account
3. **Automatic Management**: Credentials cached locally for future use
4. **No Configuration**: Zero setup required - just start coding!

**Free Tier Benefits:**

- ✅ **2,000 requests/day** (no token counting needed)
- ✅ **60 requests/minute** rate limit
- ✅ **Automatic credential refresh**
- ✅ **Zero cost** for individual users
- ℹ️ **Note**: Model fallback may occur to maintain service quality

#### 2. OpenAI-Compatible API

Use API keys for OpenAI or other compatible providers:

**Configuration Methods:**

1. **Environment Variables**

   ```bash
   export OPENAI_API_KEY="your_api_key_here"
   export OPENAI_BASE_URL="your_api_endpoint"
   export OPENAI_MODEL="your_model_choice"
   ```

2. **Project `.env` File**
   Create a `.env` file in your project root:
   ```env
   OPENAI_API_KEY=your_api_key_here
   OPENAI_BASE_URL=your_api_endpoint
   OPENAI_MODEL=your_model_choice
   ```

**API Provider Options**

> ⚠️ **Regional Notice:**
>
> - **Mainland China**: Use Alibaba Cloud Bailian or ModelScope
> - **International**: Use Alibaba Cloud ModelStudio or OpenRouter

<details>
<summary><b>🇨🇳 For Users in Mainland China</b></summary>

**Option 1: Alibaba Cloud Bailian** ([Apply for API Key](https://bailian.console.aliyun.com/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

**Option 2: ModelScope (Free Tier)** ([Apply for API Key](https://modelscope.cn/docs/model-service/API-Inference/intro))

- ✅ **2,000 free API calls per day**
- ⚠️ Connect your Aliyun account to avoid authentication errors

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://api-inference.modelscope.cn/v1"
export OPENAI_MODEL="Qwen/Qwen3-Coder-480B-A35B-Instruct"
```

</details>

<details>
<summary><b>🌍 For International Users</b></summary>

**Option 1: Alibaba Cloud ModelStudio** ([Apply for API Key](https://modelstudio.console.alibabacloud.com/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
export OPENAI_MODEL="qwen3-coder-plus"
```

**Option 2: OpenRouter (Free Tier Available)** ([Apply for API Key](https://openrouter.ai/))

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export OPENAI_MODEL="qwen/qwen3-coder:free"
```

</details>

<details>
<summary><b>🏠 Enhanced LM Studio Integration (Fork Optimized)</b></summary>

**LM Studio Local Configuration** - Connect to your local LM Studio server with optimized model selection

This enhanced fork provides **superior LM Studio integration** with resolved loop issues and better performance through optimized model configuration.

### Quick Setup

1. **Start LM Studio** on your local machine or network
2. **Load a compatible model** (e.g., `openai/gpt-oss-20b`)
3. **Start the local server** in LM Studio
4. **Configure Qwen CLI** with your server details

### Environment Variables

Create a `.env` file in your project root:

```env
# LM Studio Configuration
LM_STUDIO_SERVER_URL=http://192.168.1.91:1234/v1
LM_STUDIO_MODEL=openai/gpt-oss-20b
```

### 🎯 Enhanced Model Configuration

**⭐ Recommended Model (Fork Optimized):**
- `openai/gpt-oss-20b` - **Optimized** (20B params) - Best conversation flow, no loop issues, superior tool calling

**Alternative Qwen3-Coder Models:**
- `qwen/qwen3-coder-7b` - **Lightweight** (7B params) - Faster inference, lower VRAM
- `qwen/qwen3-coder-14b` - **Balanced** (14B params) - Good performance/speed ratio
- `qwen/qwen3-coder-30b` - **High Quality** (30B params) - Better code quality, more VRAM
- `qwen/qwen3-coder-32b` - **Premium** (32B params) - Highest quality, requires significant resources

> **🚀 Fork Enhancement**: The `openai/gpt-oss-20b` model has been extensively tested and provides significantly better performance with resolved loop detection issues that commonly occur with other models.

**🔧 Hardware Recommendations:**
```env
# For 8GB VRAM or less (use lightweight alternatives)
DEFAULT_LM_STUDIO_MODEL=qwen/qwen3-coder-7b

# For 16GB VRAM (recommended for most users)
DEFAULT_LM_STUDIO_MODEL=qwen/qwen3-coder-14b

# For 20GB+ VRAM (recommended - fork optimized)
DEFAULT_LM_STUDIO_MODEL=openai/gpt-oss-20b

# For 24GB+ VRAM (premium performance)
DEFAULT_LM_STUDIO_MODEL=qwen/qwen3-coder-30b
```

**⚠️ Important:** The model name must **exactly match** what you have loaded in LM Studio.

### Authentication Setup

```bash
# Option 1: Use environment variables
export LM_STUDIO_SERVER_URL="http://192.168.1.91:1234/v1"
export LM_STUDIO_MODEL="openai/gpt-oss-20b"
export QWEN_DEFAULT_AUTH_TYPE="lm-studio-local"

# Option 2: Configure interactively
qwen
# Select "3. LM Studio (Local)"
# Enter your server URL and model name
```

**🎯 Enhanced Benefits:**
- ✅ **Complete privacy** - Everything runs locally
- ✅ **No API costs** - Use your own hardware
- ✅ **Superior performance** - Optimized model selection
- ✅ **No loop issues** - Resolved infinite loop problems
- ✅ **Full tool use support** - Compatible with all Qwen Code features
- ✅ **Easy sharing** - Configure once via .env file

**📋 Requirements:**
- LM Studio running with a compatible model
- Network access to the LM Studio server
- Model with tool use capabilities (recommended: `openai/gpt-oss-20b`)

### 🛠️ Troubleshooting Common Issues

**Loop Detection Problems:**
- ✅ **Solved in this fork** - Use `openai/gpt-oss-20b` model instead of qwen models
- Clear conversation with `/clear` command if loops occur
- Ensure model supports tool calling properly

**Connection Issues:**
```bash
# Test LM Studio connectivity
curl -v http://YOUR_LM_STUDIO_IP:1234/v1/models

# Verify environment variables
echo $LM_STUDIO_SERVER_URL
echo $LM_STUDIO_MODEL
```

**Model Performance:**
- Use `openai/gpt-oss-20b` for best results (fork optimized)
- Ensure adequate VRAM for chosen model
- Restart LM Studio if model behaves unexpectedly

</details>

## Usage Examples

### 🔍 Explore Codebases

```bash
cd your-project/
qwen

# Architecture analysis
> Describe the main pieces of this system's architecture
> What are the key dependencies and how do they interact?
> Find all API endpoints and their authentication methods
```

### 💻 Code Development

```bash
# Refactoring
> Refactor this function to improve readability and performance
> Convert this class to use dependency injection
> Split this large module into smaller, focused components

# Code generation
> Create a REST API endpoint for user management
> Generate unit tests for the authentication module
> Add error handling to all database operations
```

### 🔄 Automate Workflows

```bash
# Git automation
> Analyze git commits from the last 7 days, grouped by feature
> Create a changelog from recent commits
> Find all TODO comments and create GitHub issues

# File operations
> Convert all images in this directory to PNG format
> Rename all test files to follow the *.test.ts pattern
> Find and remove all console.log statements
```

### 🐛 Debugging & Analysis

```bash
# Performance analysis
> Identify performance bottlenecks in this React component
> Find all N+1 query problems in the codebase

# Security audit
> Check for potential SQL injection vulnerabilities
> Find all hardcoded credentials or API keys
```

## Popular Tasks

### 📚 Understand New Codebases

```text
> What are the core business logic components?
> What security mechanisms are in place?
> How does the data flow through the system?
> What are the main design patterns used?
> Generate a dependency graph for this module
```

### 🔨 Code Refactoring & Optimization

```text
> What parts of this module can be optimized?
> Help me refactor this class to follow SOLID principles
> Add proper error handling and logging
> Convert callbacks to async/await pattern
> Implement caching for expensive operations
```

### 📝 Documentation & Testing

```text
> Generate comprehensive JSDoc comments for all public APIs
> Write unit tests with edge cases for this component
> Create API documentation in OpenAPI format
> Add inline comments explaining complex algorithms
> Generate a README for this module
```

### 🚀 Development Acceleration

```text
> Set up a new Express server with authentication
> Create a React component with TypeScript and tests
> Implement a rate limiter middleware
> Add database migrations for new schema
> Configure CI/CD pipeline for this project
```

## Commands & Shortcuts

### Session Commands

- `/help` - Display available commands
- `/clear` - Clear conversation history
- `/compress` - Compress history to save tokens
- `/stats` - Show current session information
- `/exit` or `/quit` - Exit Qwen Code

### Keyboard Shortcuts

- `Ctrl+C` - Cancel current operation
- `Ctrl+D` - Exit (on empty line)
- `Up/Down` - Navigate command history

## Benchmark Results

### Terminal-Bench Performance

| Agent     | Model              | Accuracy |
| --------- | ------------------ | -------- |
| Qwen Code | Qwen3-Coder-480A35 | 37.5%    |
| Qwen Code | Qwen3-Coder-30BA3B | 31.3%    |

## Development & Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to contribute to the project.

For detailed authentication setup, see the [authentication guide](./docs/cli/authentication.md).

## Troubleshooting

If you encounter issues, check the [troubleshooting guide](docs/troubleshooting.md).

## Acknowledgments

This project is based on [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). We acknowledge and appreciate the excellent work of the Gemini CLI team. Our main contribution focuses on parser-level adaptations to better support Qwen-Coder models.

## License

[LICENSE](./LICENSE)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=QwenLM/qwen-code&type=Date)](https://www.star-history.com/#QwenLM/qwen-code&Date)
