/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthType } from '@qwen-code/qwen-code-core';
import { loadEnvironment } from './settings.js';

export const validateAuthMethod = (authMethod: string): string | null => {
  loadEnvironment();
  if (
    authMethod === AuthType.LOGIN_WITH_GOOGLE ||
    authMethod === AuthType.CLOUD_SHELL
  ) {
    return null;
  }

  if (authMethod === AuthType.USE_GEMINI) {
    if (!process.env['GEMINI_API_KEY']) {
      return 'GEMINI_API_KEY environment variable not found. Add that to your environment and try again (no reload needed if using .env)!';
    }
    return null;
  }

  if (authMethod === AuthType.USE_VERTEX_AI) {
    const hasVertexProjectLocationConfig =
      !!process.env['GOOGLE_CLOUD_PROJECT'] &&
      !!process.env['GOOGLE_CLOUD_LOCATION'];
    const hasGoogleApiKey = !!process.env['GOOGLE_API_KEY'];
    if (!hasVertexProjectLocationConfig && !hasGoogleApiKey) {
      return (
        'When using Vertex AI, you must specify either:\n' +
        '• GOOGLE_CLOUD_PROJECT and GOOGLE_CLOUD_LOCATION environment variables.\n' +
        '• GOOGLE_API_KEY environment variable (if using express mode).\n' +
        'Update your environment and try again (no reload needed if using .env)!'
      );
    }
    return null;
  }

  if (authMethod === AuthType.USE_OPENAI) {
    if (!process.env['OPENAI_API_KEY']) {
      return 'OPENAI_API_KEY environment variable not found. You can enter it interactively or add it to your .env file.';
    }
    return null;
  }

  if (authMethod === AuthType.QWEN_OAUTH) {
    // Qwen OAuth doesn't require any environment variables for basic setup
    // The OAuth flow will handle authentication
    return null;
  }

  if (authMethod === AuthType.LM_STUDIO_LOCAL) {
    // Check for either LM_STUDIO_SERVER_URL or DEFAULT_LM_STUDIO_SERVER_URL
    const lmStudioServerUrl = process.env['LM_STUDIO_SERVER_URL'] || process.env['DEFAULT_LM_STUDIO_SERVER_URL'];

    // If no server URL is configured, allow interactive configuration
    // The LMStudioPrompt component will handle user input
    if (!lmStudioServerUrl) {
      return null; // Allow interactive configuration
    }

    // Basic URL validation if environment variable is provided
    try {
      const url = new URL(lmStudioServerUrl);
      // Ensure the path includes /v1 for proper OpenAI-compatible API access
      if (!url.pathname.includes('/v1')) {
        return 'LM Studio server URL must include /v1 path. Example: http://localhost:1234/v1';
      }
    } catch {
      return 'Invalid LM Studio server URL format. Please provide a valid URL like http://localhost:1234/v1';
    }

    // Check if model name is specified (check both variable names)
    const lmStudioModel = process.env['LM_STUDIO_MODEL'] || process.env['DEFAULT_LM_STUDIO_MODEL'];
    if (!lmStudioModel) {
      return null; // Allow interactive configuration
    }

    // Connectivity and model availability will be tested during content generation
    // If the server is not reachable or model doesn't exist, the user will get a clear error message
    return null;
  }

  return 'Invalid auth method selected.';
};

export const setOpenAIApiKey = (apiKey: string): void => {
  process.env['OPENAI_API_KEY'] = apiKey;
};

export const setOpenAIBaseUrl = (baseUrl: string): void => {
  process.env['OPENAI_BASE_URL'] = baseUrl;
};

export const setOpenAIModel = (model: string): void => {
  process.env['OPENAI_MODEL'] = model;
};

export const setLMStudioServerUrl = (serverUrl: string): void => {
  process.env['LM_STUDIO_SERVER_URL'] = serverUrl;
  // Also set OPENAI_BASE_URL since LM Studio uses OpenAI-compatible endpoints
  process.env['OPENAI_BASE_URL'] = serverUrl;
};

export const setLMStudioModel = (model: string): void => {
  process.env['LM_STUDIO_MODEL'] = model;
  // Also set OPENAI_MODEL since LM Studio uses OpenAI-compatible API
  process.env['OPENAI_MODEL'] = model;
};

export const setLMStudioApiKey = (apiKey: string): void => {
  if (apiKey && apiKey.trim()) {
    process.env['LM_STUDIO_API_KEY'] = apiKey;
    // Also set OPENAI_API_KEY since LM Studio uses OpenAI-compatible API
    process.env['OPENAI_API_KEY'] = apiKey;
  } else {
    // For local LM Studio instances, clear any existing API key
    // This ensures we use the default placeholder 'sk-no-key-required'
    delete process.env['LM_STUDIO_API_KEY'];
    delete process.env['OPENAI_API_KEY'];
  }
};
