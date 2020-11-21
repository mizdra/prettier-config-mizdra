# @mizdra/prettier-config

Shareable Prettier Config for @mizdra

## Install

```bash
yarn add -D @mizdra/prettier-config prettier
```

## Usage

If you have written the prettier configuration in `package.json`:

```json
{
  "name": "your-app",
  "version": "0.0.1",
  "prettier": "@mizdra/prettier-config"
}
```

If you have written the prettier configuration in `.prettierrc.json`:

```json
"@mizdra/prettier-config"
```

If you have written the prettier configuration in `.prettierrc.js`:

```js
module.exports = {
  ...require('@mizdra/prettier-config'),
  // You can override the options of a shared prettier
  // configuration in `.prettierrc.js`
  semi: false,
};
```

## How to release (for Contributor)

```console
$ # Wait for passing CI...
$ git switch master
$ git pull
$ yarn version
$ npm publish
$ git push --follow-tags
```
