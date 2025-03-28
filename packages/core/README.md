# SITECORE MARKETPLACE CORE SDK

**Disclaimer: This package is not intended for direct use by developers. It is a core library that is used by other packages in the Sitecore Marketplace ecosystem.**

- **Core SDK** – A lightweight, type-safe communication layer that uses the browser’s `postMessage` API to facilitate
  secure messaging between different window contexts. It handles low-level details such as secure handshakes,
  request/response patterns, event pub/sub, and origin validation. Consumed by Host and Client modules to abstract the
  communication layer

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Install dependencies from the root:

```bash
npm install
```

This installs all dependencies across the packages and sets up the workspaces.
