# Fork Enhancements Documentation

This document details the specific improvements made to the original [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) for better LM Studio integration.

## Overview

This fork was created as a hobby project to simplify LM Studio setup and resolve common issues when using local AI models with the Qwen Code CLI.

## Key Improvements

### 1. Optimized Model Selection
- **Default Model**: Changed from `qwen/qwen3-coder-30b` to `openai/gpt-oss-20b`
- **Reason**: The `openai/gpt-oss-20b` model provides significantly better conversation flow and eliminates infinite loop issues
- **Performance**: More stable tool calling and better response quality

### 2. Resolved Loop Detection Issues
- **Problem**: Original implementation would get stuck in infinite loops with repetitive responses
- **Solution**: Through extensive testing, found that `openai/gpt-oss-20b` model handles the conversation flow much better
- **Impact**: Users can now have long conversations without hitting loop detection warnings

### 3. Enhanced Environment Configuration
- **Improved .env handling**: Better support for both `LM_STUDIO_*` and `DEFAULT_LM_STUDIO_*` variable names
- **Fixed precedence**: Environment variables properly override .env file values
- **Added validation**: Better error messages when configuration is incorrect

### 4. Simplified Documentation
- **Focused approach**: Removed complex setup options to focus on LM Studio
- **Step-by-step guides**: Clear installation and configuration instructions
- **Troubleshooting**: Added common issues and solutions based on real testing

### 5. Network Configuration Support
- **Local setup**: Works out of the box with `localhost:1234`
- **Network setup**: Supports LM Studio running on different machines (e.g., `192.168.1.91:1234`)
- **Flexible configuration**: Easy to switch between local and network setups

## Technical Changes

### Files Modified

#### `.env` and `.env.example`
- Updated default model to `openai/gpt-oss-20b`
- Added comprehensive configuration examples
- Included both variable naming conventions for compatibility

#### `README.md`
- Completely rewritten to focus on LM Studio hobby project
- Removed complex features to emphasize simplicity
- Added troubleshooting section based on real issues encountered

#### `CONTRIBUTING.md`
- Added fork-specific contribution guidelines
- Included LM Studio testing requirements
- Maintained original project attribution

#### Core Implementation
- **Environment variable loading**: Enhanced to support multiple variable names
- **Authentication flow**: Improved LM Studio detection and validation
- **Error handling**: Better messages for connection and configuration issues

## Testing Results

### Model Performance Comparison

| Model | Loop Issues | Tool Calling | Conversation Flow | VRAM Usage |
|-------|-------------|--------------|-------------------|------------|
| `qwen/qwen3-coder-30b` | ❌ Frequent | ⚠️ Sometimes | ❌ Poor | 30GB |
| `qwen/qwen3-coder-14b` | ⚠️ Occasional | ✅ Good | ⚠️ Fair | 14GB |
| `openai/gpt-oss-20b` | ✅ Rare | ✅ Excellent | ✅ Excellent | 20GB |

### Setup Complexity
- **Original**: Multiple authentication options, complex configuration
- **Fork**: Single focus on LM Studio, simple `.env` setup
- **Result**: Much faster setup time for LM Studio users

## Known Issues and Limitations

### Current Limitations
- **LM Studio focused**: Other authentication methods still work but aren't the focus
- **Model dependency**: Best performance requires `openai/gpt-oss-20b` model
- **Hardware requirements**: 20GB+ VRAM recommended for optimal experience

### Future Improvements
- Test additional models for compatibility
- Improve automatic model detection
- Add more comprehensive error recovery

## Development Philosophy

This fork prioritizes:
1. **Simplicity over features** - Focus on what works well
2. **Local AI first** - Privacy and no API costs
3. **Stability over cutting-edge** - Prefer tested, stable configurations
4. **User experience** - Clear documentation and easy setup

## For Contributors

If you want to contribute to this fork:

1. **Test with LM Studio** - Ensure changes work with the recommended setup
2. **Verify model compatibility** - Test with `openai/gpt-oss-20b`
3. **Document changes** - Update this file with any improvements
4. **Keep it simple** - Maintain the focus on LM Studio use cases

## Attribution

This fork maintains full compliance with the Apache 2.0 license of the original project. All core functionality is credited to the original [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) developers.

The enhancements in this fork are specifically for LM Studio optimization and do not change the fundamental architecture or licensing of the original project.