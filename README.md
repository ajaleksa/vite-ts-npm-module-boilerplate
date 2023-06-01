# Typescript NPM module boilerplate based on Vite

![GitHub](https://img.shields.io/github/license/ajaleksa/vite-ts-npm-module-boilerplate?style=flat-square)

This is a boilerplate for creating a roboust Typescript NPM modules. It uses:
 - [Vite](https://vitejs.dev/) for bundling
 - [Vitest](https://vitest.dev/) for testing
 - [XO](https://github.com/xojs/xo) for linting
 - [Prettier](https://prettier.io/) for formatting

## Setup

1. Fork or clone this repo
2. Change the name of the module, author and version in `package.json`
3. Set the license
4. Set private to `false` if you want to publish the module to NPM, or delete it all together
5. Change the name of the module in `vite.config.ts`
6. Change main and module in `package.json` to point to the entry point of the module defined in `vite.config.ts`
7. Setup prettier, xo and vscode to your liking
8. Change README
9. Happy coding!

## Usage

1. Run `npm ci`
2. Run `npm run dev` to start development server
3. Run `npm run build` to build the module
4. Run `npm run test` to run tests
5. Run `npm run lint` to lint the code
6. Run `npm run lint:fix` to fix linting errors
7. Run `npm run test:coverage` to run tests with coverage
8. Run `npm run format` to format the code
9. Run `npm run publish` to publish the module to NPM

## To be done

- Include Typescript documentation generator
- Define guidelines for browser testing

## License

This project is licensed under the [Unlicense](https://unlicense.org/).