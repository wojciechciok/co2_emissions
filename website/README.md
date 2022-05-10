# Nextjs project template for Halfspace

## Components

After running the project the developer style guide and components are displayed as a demo defined in `index.tsx`. After copying this template you can delete the contents of that file.

## Project structure

This template includes proposed structure of files and storing components, ts interfaces etc. React components should be stored in `/components` in a component specific file like `/components/Button.tsx`. TypeScript interfaces, types and enums which would be reused by multiple components should be stored in `/ts`. These should be grouped in model specific files. For example, `User` interface and `UserResponse` interface should be stored in `/ts/User.ts`.

## Libraries

The project has a couple of dev dependencies to help with the development experience:

1. [Tailwind CSS](https://tailwindcss.com/) - CSS framework with easy to use utility classes
2. [TypeScript](https://www.typescriptlang.org/) - strongly typed superset of JS
3. [Eslint](https://eslint.org/) - linter for JS
4. [Prettier](https://prettier.io/) - code formatter
5. [clsx](https://github.com/lukeed/clsx#readme) - className appending tool
6. `/src` directory has `@/` alias. You can reference it from any file like: `import Button from '@/components/Button'`

## Downloading dependencies

`npm run dev`

## Running the app in dev mode

`npm run dev`

## Building the output

`npm run build`

The output is saved to _/out_ directory. Note that eslint won't compile the project if there are any errors.

## Formatting on save

In Visual Studio Code install Prettier extension. Change VSCode settings so that it knows to use Prettier on save:

1. `Ctrl + Shift + P`
2. Choose `Preferences: Open Settings (JSON)`
3. Paste the following to the object:

`"editor.defaultFormatter": "esbenp.prettier-vscode", "editor.formatOnSave": true`

## Tailwind CSS IntelliSense

Install the VSCode extension for autocomplete, syntax highlighting, and linting Tailwind clasees.
