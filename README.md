# bug-report

## Environment

- Node: 22.11.0
- pnpm: 9.5.0

## Steps to Reproduce

1. `pnpm i`
2. `./node_modules/.bin/prettier ./src/foo2.d.ts -w`: No errors😄
3. `./node_modules/.bin/prettier ./src/foo1.d.ts -w`: Throw an error😭

## Expected Behavior

1. `pnpm i`
2. `./node_modules/.bin/prettier ./src/foo2.d.ts -w`: No errors😄
3. `./node_modules/.bin/prettier ./src/foo1.d.ts -w`: No errors😄

## Actual behavior

1. `pnpm i`
2. `./node_modules/.bin/prettier ./src/foo2.d.ts -w`: No errors😄
3. `./node_modules/.bin/prettier ./src/foo1.d.ts -w`: Throw an error😭
