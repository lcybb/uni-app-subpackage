const execa = require("execa");
const fs = require("fs");
const { resolve } = require("path");

const CWD = process.cwd();
let PKG_MAIN = resolve(CWD, "./packages/main");
let PKG_SUB1 = resolve(CWD, "./packages/sub1");
let PKG_SUB2 = resolve(CWD, "./packages/sub2");

const buildMainPack = () => execa("pnpm", [`build:main`], { cwd: PKG_MAIN });
const buildSub1Pack = () => execa("pnpm", [`build:sub`], { cwd: PKG_SUB1 });
const buildSub2Pack = () => execa("pnpm", [`build:sub`], { cwd: PKG_SUB2 });

async function runTask(taskName, task) {
  try {
    console.log(taskName);
    await task();
  } catch (e) {
    console.error(`失败原因：${e.toString()}`);
  }
}

(async () => {
  await runTask("main", buildMainPack);
  await runTask("sub1", buildSub1Pack);
  await runTask("sub2", buildSub2Pack);

  injectSubPages();
})();

function injectSubPages() {
  let appJson = fs.readFileSync(
    resolve("./dist/build/mp-weixin/app.json"),
    "utf-8"
  );
  appJson = JSON.parse(appJson);
  appJson.subPackages = [
    {
      root: "sub1",
      pages: ["pages/index/index"],
    },
    {
      root: "sub2",
      pages: ["pages/index/index"],
    },
  ];

  fs.writeFileSync(
    resolve("./dist/build/mp-weixin/app.json"),
    JSON.stringify(appJson, null, 2)
  );
}
