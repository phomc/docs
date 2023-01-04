# Contributing Guide

Thank you for your decision to contribute to our project!

## Workflow
To start making changes to this repo, let's have an overview about the workflow:
1. Fork this repo
2. Make changes to your fork
3. Submit a PR
5. Resolve requested changes to your PR
6. Waiting for acceptance from a team member
7. Your PR is successfully merged
8. The documentation is automatically built and deployed

## Internals

### Content format
The Tensai documentation is built with [Docusaurus](https://docusaurus.io/) - an amazing documentation site made by Meta Inc.<br>
The content can be written easily without coding at all, with the support of Markdown.<br>
To have a quick overview of Markdown, read this cheatsheet: https://www.markdownguide.org/cheat-sheet/.<br>
In addition, Docusaurus also supports extra features, which can be viewed here: https://docusaurus.io/docs/markdown-features.<br>

### Organization
The documentation is divided into three modules:
- One for players: provides information how to install and use the mod. The relevant directory is located at `/docs/player`.
- One for administrators: provides information how to install, configure, and use the mod/plugin. The relevant directory is located at `/docs/admin`.
- One for developers: teaches how to integrate Tensai with their mods/plugins. The relevant directory is located at `/docs/dev`.

Each module has the following directory hierarchy:
```
/intro.md: introduction to the current documentation module

/<category 1>/_category_.json: the current category's information
/<category 1>/page 1.md
/<category 1>/page 2.md
/<category 1>/page 3.md
...
/<category 1>/page n.md

/<category 2>/_category_.json
/<category 2>/page 1.md
...
/<category 2>/page n.md

/<category 3>/_category_.json
/<category 3>/page 1.md
...
/<category 3>/page n.md
```

In other words, at each module directory, we have a `intro.md` file and multiple categories. Each category groups relevant pages together.<br>
We also have `_category_.json` file that describes the current category (its name, its position in the sidebar)

