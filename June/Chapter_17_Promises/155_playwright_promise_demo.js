// Playwright + Promises demo
// Run with:  npm start        (or)   node 155_playwright_promise_demo.js
//
// Almost every Playwright call returns a Promise. This file shows:
//   1. await on a single Promise
//   2. a Promise resolving to a value
//   3. Promise.all  -> run several async tasks in parallel
//   4. try / catch   -> handling a rejected Promise

const { chromium } = require("playwright");

async function main() {
  // launch() returns a Promise that resolves once the browser is up.
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // No network needed: we feed the page its HTML directly.
  await page.setContent(`
    <h1>Promise Demo</h1>
    <button id="load" onclick="document.getElementById('out').textContent='loaded!'">
      Load
    </button>
    <p id="out">waiting...</p>
  `);

  // 1. await a single Promise
  const title = await page.textContent("h1");
  console.log("1. Title:", title);

  // 2. A Promise that resolves with a value
  const clicked = page.click("#load"); // returns a Promise
  console.log("2. click() is a Promise?", clicked instanceof Promise);
  await clicked; // wait for it to finish

  // 3. Run independent async tasks in PARALLEL with Promise.all
  const [h1, out, count] = await Promise.all([
    page.textContent("h1"),
    page.textContent("#out"),
    page.locator("button").count(),
  ]);
  console.log("3. Parallel results ->", { h1, out, count });

  // 4. Handling a rejected Promise with try / catch
  try {
    await page.click("#does-not-exist", { timeout: 1000 });
  } catch (err) {
    console.log("4. Caught a rejected Promise:", err.message.split("\n")[0]);
  }

  await browser.close(); // also a Promise
  console.log("Done. Browser closed.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
