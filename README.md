# bug-report

Pnpm should not change the file mode for bin files.

## Environment

- ubuntu
- pnpm v10.3.0
- node v22.14.0

## Steps to Reproduce

1. Clone this repo and checkout branch `pnpm-file-mode-bug-in-workspace`.
2. Run `pnpm i`.

## Expected Behavior

Pnpm didn't change the `packages/foo/bin.js` file mode.

## Actual Behavior

Pnpm changed the `packages/foo/bin.js` file mode by adding a execution permission to it.

Running `git status` you will find that `packages/foo/bin.js` has been modified.

## More Information
