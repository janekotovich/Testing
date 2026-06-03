# Async Code & Test Hooks — Testing Course

A small playground for practicing **automated testing with [Vitest](https://vitest.dev/)**, focused on two common challenges:

- Testing **asynchronous code** (callbacks and promises)
- Using **test setup/teardown hooks** to keep tests clean and isolated

## What's inside

```
.
├── async-testing/        # Standalone async-testing exercise
│   └── async/
│       ├── async-example.js        # Token generation (callback + promise APIs)
│       └── async-example.test.js
└── hooks/                # Async testing + class behaviour with hooks
    ├── async/
    │   ├── async-example.js
    │   └── async-example.test.js
    └── hooks/
        ├── hooks.js                # User class
        └── hooks.test.js
```

### Async testing

[`async-example.js`](hooks/async/async-example.js) exposes two ways to generate a JWT:

- `generateToken(userEmail, doneFn)` — callback-based
- `generateTokenPromise(userEmail)` — promise-based

The matching tests show how to test each style with Vitest:

- The **`done` callback** pattern for callback-based code, with `try/catch` so assertion failures are reported instead of timing out.
- **`.resolves`** matchers and **`async/await`** for promise-based code.

### Test hooks

[`hooks.js`](hooks/hooks/hooks.js) defines a simple `User` class (`updateEmail`, `clearEmail`). The tests exercise its behaviour and are a starting point for practicing lifecycle hooks such as `beforeEach`, `afterEach`, `beforeAll`, and `afterAll`.

## Getting started

Each subproject (`async-testing/` and `hooks/`) is self-contained with its own dependencies.

```bash
# pick a subproject
cd hooks            # or: cd async-testing

# install dependencies
yarn install        # or: npm install
```

## Running the tests

```bash
yarn test           # run Vitest in watch mode
yarn test:w         # run with the verbose reporter
```

The `async-testing/` project additionally provides:

```bash
yarn test:c         # run once with coverage
yarn start          # serve the folder with http-server
```

## Requirements

- [Node.js](https://nodejs.org/) (with ES module support — both projects use `"type": "module"`)
- [Yarn](https://yarnpkg.com/) or npm

## Tech

- [Vitest](https://vitest.dev/) — test runner
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) — used in the async examples
