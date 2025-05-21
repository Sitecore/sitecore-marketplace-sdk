import { createClient } from '@hey-api/openapi-ts';
import { defineAugmentationConfig } from './plugins/augmentation';
import { defineClientTransformerConfig } from './plugins/client-transformer/config';
import { defineSchemaPatcherConfig } from './plugins/schema-patcher';

createClient({
  input: './schema/xmapp.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client-xmapp',
  },
  plugins: [
    defineSchemaPatcherConfig(),
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    '@hey-api/sdk',
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    defineAugmentationConfig({
      namespaces: ['xmc.xmapp'],
    }),
    defineClientTransformerConfig({
      typePrefix: 'Xmapp',
    }),
  ],
});

createClient({
  input: './schema/authoring.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client-authoring',
  },
  plugins: [
    defineSchemaPatcherConfig(),
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    '@hey-api/sdk',
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    defineAugmentationConfig({
      namespaces: ['xmc.authoring'],
    }),
    defineClientTransformerConfig({
      typePrefix: 'Authoring',
    }),
  ],
});

createClient({
  input: './schema/content-transfer.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client-content-transfer',
  },
  plugins: [
    defineSchemaPatcherConfig(),
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    '@hey-api/sdk',
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    defineAugmentationConfig({
      namespaces: ['xmc.contentTransfer'],
    }),
    defineClientTransformerConfig({
      typePrefix: 'ContentTransfer',
    }),
  ],
});

createClient({
  input: './schema/content.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client-content',
  },
  plugins: [
    defineSchemaPatcherConfig(),
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    '@hey-api/sdk',
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    defineAugmentationConfig({
      namespaces: ['xmc.preview', 'xmc.live'],
    }),
    defineClientTransformerConfig({
      typePrefix: 'Content',
    }),
  ],
});
