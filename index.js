const fs = require("fs").promises;
const path = require("path");
const promptSVG = require("./lib/userInput");
// THEN I can enter up to three characters
(async () => {
	const svg = await promptSVG();
	await fs.writeFile(path.join("Output", "logo.svg"), svg);
	console.log("Generated logo.svg");
})();

// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
