# Qwen Code - LM Studio CLI Setup

[![License](https://img.shields.io/github/license/QwenLM/qwen-code.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)

**A hobby project for setting up a local AI CLI with LM Studio**

> **Original Project**: This is based on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code), an AI-powered command-line workflow tool. This fork focuses specifically on optimized LM Studio integration for local AI development.

## Why This Fork?

This is a personal hobby project to create a simple, reliable CLI interface for LM Studio. The original Qwen Code is feature-rich but can be complex to set up with local models. This fork:

- **Focuses on LM Studio** - Simplified setup for local AI
- **Fixes loop issues** - Uses `openai/gpt-oss-20b` model for stable conversations
- **No API costs** - Everything runs locally on your hardware
- **Complete privacy** - No data leaves your machine

## Requirements

- [Node.js 20+](https://nodejs.org/) installed
- [LM Studio](https://lmstudio.ai/) running locally
- Compatible model loaded (recommended: `openai/gpt-oss-20b`)
- 20GB+ VRAM for optimal performance

## Quick Setup

### 1. Install from Source
```bash
git clone https://github.com/anacetinho/qwen-code.git
cd qwen-code
npm install
npm install -g .
```

### 2. Start LM Studio
1. Open LM Studio
2. Download and load `openai/gpt-oss-20b` model
3. Start the local server (default: `http://localhost:1234`)
4. Ensure the server includes `/v1` path: `http://localhost:1234/v1`

### 3. Configure Environment
Create a `.env` file in your project directory:
```env
# LM Studio Configuration
LM_STUDIO_SERVER_URL=http://localhost:1234/v1
LM_STUDIO_MODEL=openai/gpt-oss-20b
QWEN_DEFAULT_AUTH_TYPE=lm-studio-local
```

For network setups, replace `localhost` with your LM Studio server IP:
```env
LM_STUDIO_SERVER_URL=http://192.168.1.91:1234/v1
```

### 4. Run the CLI
```bash
qwen
```

The CLI should start without asking for authentication and connect to your local LM Studio.

## Model Recommendations

**Best Performance (Recommended):**
- `openai/gpt-oss-20b` - Tested and optimized, no loop issues

**Alternative Models:**
- `qwen/qwen3-coder-14b` - Lighter option for 16GB VRAM
- `qwen/qwen3-coder-7b` - Minimal option for 8GB VRAM

**Hardware Requirements:**
- 8GB VRAM: `qwen/qwen3-coder-7b`
- 16GB VRAM: `qwen/qwen3-coder-14b`
- 20GB+ VRAM: `openai/gpt-oss-20b` (recommended)

## Troubleshooting

### Connection Issues
```bash
# Test LM Studio is running
curl http://localhost:1234/v1/models

# Check environment variables
echo $LM_STUDIO_SERVER_URL
echo $LM_STUDIO_MODEL
```

### Infinite Loops
- Use `openai/gpt-oss-20b` model (most stable)
- Clear conversation with `/clear` command
- Restart LM Studio if issues persist

### Model Not Found
- Ensure model name exactly matches what's loaded in LM Studio
- Check LM Studio server is running on correct port
- Verify `/v1` is included in the server URL

## Basic Usage

```bash
# Start the CLI
qwen

# Basic commands
> Help me create a Python script
> Read this file and explain what it does
> /clear  # Clear conversation history
> /help   # Show available commands
```

## Original Qwen3 Features

This fork focuses on LM Studio, but the original project supports many other options:

- **Qwen OAuth** - Cloud-based Qwen models
- **OpenAI API** - ChatGPT and other OpenAI models
- **ModelScope** - Chinese model marketplace
- **OpenRouter** - Multiple AI providers

For full features and cloud options, visit the [original repository](https://github.com/QwenLM/qwen-code).

## License

Apache License 2.0 - Same as the original project.

## Acknowledgments

This project is based on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) by the Qwen team. All credit for the core functionality goes to the original developers. This fork simply optimizes the setup for LM Studio users.