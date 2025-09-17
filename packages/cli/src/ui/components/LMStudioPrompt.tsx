/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type React from 'react';
import { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { DEFAULT_LM_STUDIO_SERVER_URL, DEFAULT_LM_STUDIO_MODEL } from '@qwen-code/qwen-code-core';
import { Colors } from '../colors.js';

interface LMStudioPromptProps {
  onSubmit: (serverUrl: string, model: string, apiKey?: string) => void;
  onCancel: () => void;
}

export function LMStudioPrompt({
  onSubmit,
  onCancel,
}: LMStudioPromptProps): React.JSX.Element {
  const [serverUrl, setServerUrl] = useState(DEFAULT_LM_STUDIO_SERVER_URL);
  const [model, setModel] = useState(DEFAULT_LM_STUDIO_MODEL);
  const [apiKey, setApiKey] = useState('');
  const [currentField, setCurrentField] = useState<
    'serverUrl' | 'model' | 'apiKey'
  >('serverUrl');

  useInput((input, key) => {
    // Filter paste-related control sequences
    let cleanInput = (input || '')
      // Filter ESC-based control sequences (like \u001b[200~, \u001b[201~, etc.)
      .replace(/\u001b\[[0-9;]*[a-zA-Z]/g, '') // eslint-disable-line no-control-regex
      // Filter paste start marker [200~
      .replace(/\[200~/g, '')
      // Filter paste end marker [201~
      .replace(/\[201~/g, '')
      // Filter standalone [ and ~ characters (possible paste marker remnants)
      .replace(/^\[|~$/g, '');

    // Filter all invisible characters (ASCII < 32, except for carriage return and newline)
    cleanInput = cleanInput
      .split('')
      .filter((ch) => ch.charCodeAt(0) >= 32)
      .join('');

    if (cleanInput.length > 0) {
      if (currentField === 'serverUrl') {
        setServerUrl((prev: string) => prev + cleanInput);
      } else if (currentField === 'model') {
        setModel((prev: string) => prev + cleanInput);
      } else if (currentField === 'apiKey') {
        setApiKey((prev: string) => prev + cleanInput);
      }
      return;
    }

    // Check if it's Enter key (by checking if input contains newline)
    if (input.includes('\n') || input.includes('\r')) {
      if (currentField === 'serverUrl') {
        // Allow empty server URL, use default
        setCurrentField('model');
        return;
      } else if (currentField === 'model') {
        setCurrentField('apiKey');
        return;
      } else if (currentField === 'apiKey') {
        // Submit with current values
        const finalServerUrl = serverUrl.trim() || DEFAULT_LM_STUDIO_SERVER_URL;
        const finalModel = model.trim() || DEFAULT_LM_STUDIO_MODEL;
        onSubmit(finalServerUrl, finalModel, apiKey.trim() || undefined);
      }
      return;
    }

    if (key.escape) {
      onCancel();
      return;
    }

    // Handle Tab key for field navigation
    if (key.tab) {
      if (currentField === 'serverUrl') {
        setCurrentField('model');
      } else if (currentField === 'model') {
        setCurrentField('apiKey');
      } else if (currentField === 'apiKey') {
        setCurrentField('serverUrl');
      }
      return;
    }

    // Handle arrow keys for field navigation
    if (key.upArrow) {
      if (currentField === 'model') {
        setCurrentField('serverUrl');
      } else if (currentField === 'apiKey') {
        setCurrentField('model');
      }
      return;
    }

    if (key.downArrow) {
      if (currentField === 'serverUrl') {
        setCurrentField('model');
      } else if (currentField === 'model') {
        setCurrentField('apiKey');
      }
      return;
    }

    // Handle backspace - check both key.backspace and delete key
    if (key.backspace || key.delete) {
      if (currentField === 'serverUrl') {
        setServerUrl((prev: string) => prev.slice(0, -1));
      } else if (currentField === 'model') {
        setModel((prev: string) => prev.slice(0, -1));
      } else if (currentField === 'apiKey') {
        setApiKey((prev: string) => prev.slice(0, -1));
      }
      return;
    }
  });

  return (
    <Box
      borderStyle="round"
      borderColor={Colors.AccentBlue}
      flexDirection="column"
      padding={1}
      width="100%"
    >
      <Text bold color={Colors.AccentBlue}>
        LM Studio (Local) Configuration
      </Text>
      <Box marginTop={1}>
        <Text>
          Configure connection to your local LM Studio server running{' '}
          <Text color={Colors.AccentBlue}>{DEFAULT_LM_STUDIO_MODEL}</Text> with tool use support.
        </Text>
      </Box>
      <Box marginTop={1} flexDirection="row">
        <Box width={14}>
          <Text
            color={currentField === 'serverUrl' ? Colors.AccentBlue : Colors.Gray}
          >
            Server URL:
          </Text>
        </Box>
        <Box flexGrow={1}>
          <Text>
            {currentField === 'serverUrl' ? '> ' : '  '}
            {serverUrl || DEFAULT_LM_STUDIO_SERVER_URL}
          </Text>
        </Box>
      </Box>
      <Box marginTop={1} flexDirection="row">
        <Box width={14}>
          <Text
            color={currentField === 'model' ? Colors.AccentBlue : Colors.Gray}
          >
            Model:
          </Text>
        </Box>
        <Box flexGrow={1}>
          <Text>
            {currentField === 'model' ? '> ' : '  '}
            {model || DEFAULT_LM_STUDIO_MODEL}
          </Text>
        </Box>
      </Box>
      <Box marginTop={1} flexDirection="row">
        <Box width={14}>
          <Text
            color={currentField === 'apiKey' ? Colors.AccentBlue : Colors.Gray}
          >
            API Key:
          </Text>
        </Box>
        <Box flexGrow={1}>
          <Text>
            {currentField === 'apiKey' ? '> ' : '  '}
            {apiKey || '(optional - most local instances don\'t need this)'}
          </Text>
        </Box>
      </Box>
      <Box marginTop={1}>
        <Text color={Colors.Gray}>
          Press Enter to continue, Tab/↑↓ to navigate, Esc to cancel
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text color={Colors.AccentPurple}>
          💡 Ensure your LM Studio server is running and model supports tool use
        </Text>
      </Box>
      <Box marginTop={1}>
        <Text color={Colors.Gray}>
          Note: API key is only needed if your LM Studio requires authentication
        </Text>
      </Box>
    </Box>
  );
}