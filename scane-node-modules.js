const fs = require("fs");
const path = require("path");

const NODE_MODULES_DIR = path.join(__dirname, "node_modules");

const suspiciousPatterns = [
  /import\s*{\s*use\s*}\s*from\s*['"]react['"]/,
  /import\s*\*\s*as\s*React5\s*from\s*['"]react['"]/,
  /React5\./
];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Avoid scanning massive nested folders like .bin
        if (!file.startsWith(".")) scanDirectory(fullPath);
      } else if (file.endsWith(".js")) {
        checkFile(fullPath);
      }
    } catch (err) {
      // Ignore permission errors or symlink issues
    }
  }
}

function checkFile(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  lines.forEach((line, index) => {
    suspiciousPatterns.forEach((pattern) => {
      if (pattern.test(line)) {
        console.log(`⚠️ Suspicious code in ${filePath}:${index + 1} -> ${line.trim()}`);
      }
    });
  });
}

console.log("🔍 Scanning node_modules for invalid React imports...");
scanDirectory(NODE_MODULES_DIR);
console.log("✅ Scan complete.");