const db = require("./db/config");

const TARGET_SPEED = 100;

afterAll(() => {
  db.end();
});

test("performance", async () => {
  const start = performance.now();
  await db.query("SELECT * FROM items");
  expect(performance.now() - start).toBeLessThan(TARGET_SPEED);
});
