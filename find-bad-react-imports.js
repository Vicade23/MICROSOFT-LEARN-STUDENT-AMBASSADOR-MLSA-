const fs = require("fs");

const path = require("path");



// Directory to scan

const SRC_DIR = path.join(__dirname, "src");



// Patterns to detect

const suspiciousPatterns = [

  /import\s*{\s*use\s*}\s*from\s*['"]react['"]/,

  /import\s*\*\s*as\s*React5\s*from\s*['"]react['"]/,

  /React5\./

];



function scanDirectory(dir) {

  const files = fs.readdirSync(dir);

  for (const file of files) {

    const fullPath = path.join(dir, file);

    const stat = fs.statSync(fullPath);



    if (stat.isDirectory()) {

      scanDirectory(fullPath);

    } else if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".ts") || file.endsWith(".tsx")) {

      checkFile(fullPath);

    }

  }

}



function checkFile(filePath) {

  const lines = fs.readFileSync(filePath, "utf8").split("\n");

  lines.forEach((line, index) => {

    suspiciousPatterns.forEach(pattern => {

      if (pattern.test(line)) {

        console.log(`⚠️ Suspicious code in ${filePath}:${index + 1} -> ${line.trim()}`);

      }

    });

  });

}



console.log("🔍 Scanning for bad React imports...");

scanDirectory(SRC_DIR);

console.log("✅ Scan complete.");