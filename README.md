# Node ![TStarter](https://img.shields.io/badge/tarter-3178C6?style=for-the-badge&logo=typescript&logoColor=FFF)

This is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for a Node.js with TypeScript and Vitest project.

## How to use

Creating a repository from a template is similar to forking a repository, but there are important differences, [see more here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates).

[See here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) how to create a repository from this template.

You can also use `gh repo create [<name>] [flags]` passing the `--template joaovbrandon/node-tstarter`, [see more here](https://cli.github.com/manual/gh_repo_create).

## Stack

This Node.js Project Starter uses:

- [pnpm](https://www.npmjs.com/package/pnpm)
  - Is recommended to keep using `pnpm`, but [npm](https://www.npmjs.com/package/npm) or [yarn](https://www.npmjs.com/package/yarn) can be used, for that delete the [pnpm-lock.yaml](./pnpm-lock.yaml) and install with your prefered tool
- [TypeScript](https://www.npmjs.com/package/typescript)
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variables
- [Vitest](https://www.npmjs.com/package/vitest) for tests
- [tsx](https://www.npmjs.com/package/tsx) for development
- [tsup](https://www.npmjs.com/package/tsup) for bundling
- [EditorConfig](https://editorconfig.org/) for consistent coding styles between different editors and IDEs
- [prettier](https://www.npmjs.com/package/prettier) for code formatting
- [eslint](https://www.npmjs.com/package/eslint) for code linting
- [husky](https://www.npmjs.com/package/husky) + [lint-staged](https://www.npmjs.com/package/lint-staged) for git hooks
- [commitlint](https://www.npmjs.com/package/@commitlint/cli) for commit messages linting
- [commitizen](https://www.npmjs.com/package/commitizen) as a cli helper tool for commit (optional use)

### Recommended Libraries

These are other recommended libraries that isn't in this starter because it is not necessary for all projects:

- [pino](https://www.npmjs.com/package/pino) and [pino-pretty](https://www.npmjs.com/package/pino-pretty) for logs
- [pino-http](https://www.npmjs.com/package/pino-http) for https logs
- [tRPC](https://www.npmjs.com/package/@trpc/server) for End-to-end typesafe APIs
- [Zod](https://www.npmjs.com/package/zod) for schema validation with static type inference
- [date-fns](https://npmjs.com/package/date-fns) and [date-fns-tz](https://www.npmjs.com/package/date-fns-tz) for date manipulation
- [RxJS](https://npmjs.com/package/rxjs) for reactivity
- [SuperTest](https://www.npmjs.com/package/supertest) for HTTP tests

## Scripts

Feel free to modify the scripts in the [package.json](./package.json) file as you want.

### Tests

- Run `pnpm test` to run tests and watch it
- Run `pnpm test <test-file-path>` to run this single file tests and watch it (example: `pnpm test ./src/app.test.ts`)
- Run `pnpm test:ui` to run tests with the [Vitest UI](https://vitest.dev/guide/ui.html)
- Run `pnpm test:coverage` to run generate and see the test coverage

See CI test scripts in the [package.json](./package.json) file.

### Development

Run `pnpm dev` and the app will start.

### Build

Run `pnpm build:staging` (build with sourcemap) or `pnpm build:production`.

### Code Patterns & Types

- Run `pnpm typecheck` to check types
- Run `pnpm prettier` to check code formatting
- Run `pnpm prettier:fix` to check and fix issues with code formatting
- Run `pnpm lint` to check eslint rules
- Run `pnpm lint:fix` to check and fix eslint rules

## Code Patterns Configs

This starter uses the following ESLint packages:

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-sort-destructure-keys](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys)

See details in the [.eslintrc.cjs](./.eslintrc.cjs) and [.prettierrc](./.prettierrc) files.

## Commit Patterns

This starter uses [commitlint](https://www.npmjs.com/package/@commitlint/cli) with [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) to check commit messages.

- [What is commitlint?](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- [Config Conventinal Rules](https://www.npmjs.com/package/@commitlint/config-conventional)

You can customize the commitlint rules as you wish, see more at the commitlint docs.

This starter also have [commitizen](https://www.npmjs.com/package/commitizen) configured, that is a cli helper tool for commit, to use it run `pnpm commit` instead of `git commit` to commit.

## Environment Variables

This starter uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variables, you can create the `.env` file in the project root and add your environment variables to develop locally, don't forget to add the variables in your staging and production servers.

The [.env.sample](./.env.sample) file is a place to add the variables without values, to be a guide for other developers.

## CI

### commit-msg hook

[Husky](https://typicode.github.io/husky/) is used to check commit message pattern before each commit.

### pre-commit hook

[Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) are used to check Types, Lint, Prettier and tests before each commit.

### GitHub Actions

This starter have 2 GitHub workflows:

- [auto-author-assign.yaml](./.github/workflows/auto-author-assign.yaml) to auto assign the Pull Request author to the Pull Request
- [ci.yaml](./.github/workflows/ci.yaml) to check commit messages pattern, Types, Lint, Prettier, tests and Production Build

The starter also have Pull Request and Issues templates, see in the [.github](./.github) folder.

It is recommended to create a `Branch protection rule` for the `main` branch in your repository, so you can require approvals and status checks to pass for Pull Requests.

## TODO File

You can create a `TODO.md` file in the project root to write personal notes and todos. This file is in the [.gitignore](./.gitignore) and will be not commited.
