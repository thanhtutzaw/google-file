// const { readdir } = require("fs/promises");
// const getDirectories = async source =>
//   (await readdir(source, { withFileTypes: true }))
//     .filter(dirent => dirent.isDirectory())
//     .map(dirent => dirent.name)
const { defineConfig } = require("cypress");
const execa = require("execa");
module.exports = defineConfig({
  // cy.viewport('iphone-6'),
  
  e2e: {
    setupNodeEvents(on, config) {},
  },
  

  component: {
    viewportWidth: 1000,
    viewportHeight: 660,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    
  },
});
