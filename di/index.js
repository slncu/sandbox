(async () => {
  try {
    await import("./module.mjs");
  } catch (err) {
    throw new Error(err);
  }
})();
