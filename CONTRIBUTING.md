# Contributing

This is a guide for contributors.

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  npm version
  ```
- ```bash
  npm publish
  ```
- ```bash
  git push --follow-tags
  ```
