## Getting Started

Install

```bash
yarn
```

Then

```bash
yarn dev
```

## Testing the app

http://localhost:3000/lit-test

## The error

```bash
yarn build
```

Will generate this

```
Error occurred prerendering page "/lit-test". Read more: https://nextjs.org/docs/messages/prerender-error

Error: Cannot find module './fetch.node'
    at t (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/app/(pages)/lit-test/page.js:1:102)
    at 6908 (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/app/(pages)/lit-test/page.js:1175:86372)
    at t (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/webpack-runtime.js:1:143)
    at 58231 (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/app/(pages)/lit-test/page.js:1175:82968)
    at t (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/webpack-runtime.js:1:143)
    at 18247 (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/app/(pages)/lit-test/page.js:1175:35053)
    at t (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/webpack-runtime.js:1:143)
    at 50021 (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/app/(pages)/lit-test/page.js:1175:34868)
    at t (/Users/luke-bundlr/Documents/irys/dev/lit-test-repo/.next/server/webpack-runtime.js:1:143)
 ✓ Generating static pages (5/5)

```
