# Node.js Practice Repository

This repository contains my hands-on practice and learning journey with Node.js. I created small projects and experimented with different Node.js modules and packages to solidify my understanding of the basics.

## What I Learned and Practiced

- **Project Structure in Node.js:**  
  Organized code into separate modules and folders for clarity and modularity.

- **Using External Packages:**  
  - Practiced installing and using third-party packages (`npm install`).
  - Example: Used the `figlet` package to generate ASCII art in the console.
  - Example: Used the `random-words` package to generate random words.

- **Working with `require` and `import`:**  
  - Explored both CommonJS (`require()`) and ES module (`import`) syntaxes for including packages.

- **Managing Dependencies:**  
  - Learned how `package.json` and `package-lock.json` work.
  - Understood how to declare, install, and lock package versions in a Node.js project.

- **Callback Functions:**  
  - Practiced handling asynchronous operations using callbacks (as seen with `figlet`).

---

## Essential Node.js & npm Commands

| Command                       | Definition                                                                     | Why/When to Use                                                           |
|-------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `node filename.js`            | Runs a Node.js script.                                                         | To execute your JavaScript file using Node.js runtime.                     |
| `npm init`                    | Initializes a new Node.js project and creates a `package.json` file.           | Run this at the start of a new project to manage dependencies and metadata.|
| `npm init -y`                 | Same as `npm init` but auto-fills default values.                              | Quickly create a `package.json` without answering prompts.                 |
| `npm install package-name`    | Installs a package and adds it to `dependencies` in `package.json`.            | Use when you need to use a library/module in your project.                 |
| `npm install`                 | Installs all dependencies listed in `package.json`.                            | Use after cloning a project or when `package.json` changes.                |
| `npm install -g package-name` | Installs a package globally.                                                   | Use for tools you want available system-wide (e.g., nodemon).              |
| `npm uninstall package-name`  | Removes a package from your project and updates `package.json`.                | Use to clean up unused dependencies.                                       |
| `npm update`                  | Updates all installed packages to the latest allowed versions.                  | Keep your project dependencies up-to-date and secure.                      |
| `npm list`                    | Lists all installed packages in the current project.                           | Useful to see dependency tree and versions.                                |
| `npm outdated`                | Lists outdated packages in your project.                                       | Check which dependencies have newer versions available.                    |
| `npm run script-name`         | Runs a script defined in the `scripts` section of `package.json`.              | Automate tasks (e.g., testing, building, starting server).                 |
| `npx command`                 | Runs a command from a package (temporarily installs if not present).           | Use for one-off tasks without installing globally.                         |
| `require('module')`           | CommonJS syntax to import modules.                                             | Standard way to include modules in Node.js scripts.                        |
| `import { ... } from 'module'`| ES Module syntax to import modules.                                            | Modern way to include modules (when using `"type": "module"` in `package.json`). |

---

## Folders & Examples

- `practice1OfNodeJs/First_Node_module/`  
  - **index.js**: Uses `figlet` to print stylized text.
- `practice2OfNodeJs/second_Node_module/`  
  - **index.js**: Uses `random-words` to generate random words.

---

## Reflection

Today, I completed my initial Node.js learning journey.  
I practiced creating modules, using npm, managing dependencies, and working with popular packages.  
This has given me a strong foundation to explore more advanced Node.js topics and build larger projects next!

---
