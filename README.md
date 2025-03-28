# MKP SDK Communication System Monorepo

This monorepo hosts the two main packages, client applications (running inside iframes) and core sdk which acts as a library. The project consists of:

- **Core SDK** – A lightweight, type-safe communication layer that uses the browser’s `postMessage` API to facilitate secure messaging between different window contexts. It handles low-level details such as secure handshakes, request/response patterns, event pub/sub, and origin validation. Consumed by Host SDK and Client SDK to abstract the communication layer
- **Client SDK** – This high-level SDK is designed to be used within client applications (typically in an iframe). Inspired by React Query, it offers a query/mutation API that manages internal state, loading status, and error handling while leveraging the Core SDK for communication.

## Monorepo Structure

The repository is organized as follows:

```
/root
├── package.json          // Root configuration, workspaces, and monorepo scripts
├── lerna.json            // Lerna configuration for multi-package management
├── packages
│     ├── core        // Core SDK (communication layer)
│     └── client      // Client SDK (client application integration)
└── docs                  // Additional documentation and project guides
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Install dependencies from the root:

```bash
pnpm install
```

This installs all dependencies across the packages and sets up the workspaces.

## Monorepo Commands

Below are the main monorepo commands defined in the root `package.json`:

- **Build All Packages**  
  Build every package (transpiling TypeScript, etc.):

  ```bash
  pnpm build
  ```

- **Clean All Packages**  
  Remove build artifacts (e.g., `dist` directories):

  ```bash
  pnpm clean
  ```

- **Lint All Packages**  
  Run ESLint checks across all packages:

  ```bash
  pnpm lint
  ```

- **Run All Tests**  
  Execute test suites for each package:

  ```bash
  pnpm test:all
  ```

- **Generate Client SDK Types - Under Development**  
  Automatically generate static TypeScript types for the Client SDK based on the defined schema:

  ```bash
  pnpm generate:client
  ```

## Working with Individual Packages

Each package lives under the `packages/` directory. For example, to work on the Core SDK:

1. Navigate into the package folder:
   ```bash
   cd packages/core
   ```
2. Use package-specific scripts (e.g., build, test, lint) as defined in its own `package.json`.

Repeat the same for the Client SDK.

## High-Level SDK Overview

### Core SDK
- **Purpose:** Acts as the backbone for secure communication. It abstracts all low-level postMessage handling and exposes a uniform, type-safe API.
- **Key Features:** Secure handshake, request/response pattern, event pub/sub system, and origin validation.

### Client SDK
- **Purpose:** Provides client applications (typically running in an iframe) with a developer-friendly API to interact with the host application.
- **Key Features:** Query/mutation API inspired by React Query, automatic state management (data, status, isLoading), and seamless integration with the Core SDK.
