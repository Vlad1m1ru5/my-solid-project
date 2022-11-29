# my-solid-project

Reproduces a bug for the `denoland.vscode-deno` extension.

## Pre-start

```shell
$ deno --version
deno 1.28.2 (release, x86_64-unknown-linux-gnu)
v8 10.9.194.1
typescript 4.8.3
```

## Steps to Reproduce

- create a new project w/ `deno init`
- creation an `import_map.json` file containing `npm` module dependency
- run Deno to produce a `deno.lock` file, i.e. w/ `deno test`

I assume that `npm` module imports shall be resolved after that spets but they
are not.

```ts
// [~/main.ts]
import { createSignal } from "solid-js";
// This is the assumed bug:  ^^^^^^^^^^
// ...
```

This behavior reproduces either with or without specification of the
`deno.importMap: "./import_map.json"` inside the `.vscode/settings` file.
