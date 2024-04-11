# bug-report

## Steps to Reproduce

```sh
pnpm i

mkdir -p node_modules/foo

echo '{"name":"foo","exports":{"require":"./index.cjs","import":"./index.mjs"}}' > node_modules/foo/package.json

echo 'exports.foo="from cjs"' > node_modules/foo/index.cjs

echo 'export const foo="from esm"' > node_modules/foo/index.mjs

npx tsx ./src/app.ts # Print 'from cjs'

pnpm vitest # Should pass the test, but fail.
```

## Expected Behavior

Pass.

## Actual behavior

Fail.
