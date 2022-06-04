# @mizdra/prettier-config-mizdra

Shareable Prettier Config for @mizdra

## Install

```bash
pnpm add -D @mizdra/prettier-config-mizdra prettier
```

## Usage

If you have written the prettier configuration in `package.json`:

```json
{
  "name": "your-app",
  "version": "0.0.1",
  "prettier": "@mizdra/prettier-config-mizdra"
}
```

If you have written the prettier configuration in `.prettierrc.json`:

```json
"@mizdra/prettier-config-mizdra"
```

If you have written the prettier configuration in `.prettierrc.js`:

```js
module.exports = {
  ...require('@mizdra/prettier-config-mizdra'),
  // You can override the options of a shared prettier
  // configuration in `.prettierrc.js`
  semi: false,
};
```
