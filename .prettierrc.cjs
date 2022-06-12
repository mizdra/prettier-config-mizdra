// self-hosting
module.exports = () => ({
  ...(await import('.')).default,
});
