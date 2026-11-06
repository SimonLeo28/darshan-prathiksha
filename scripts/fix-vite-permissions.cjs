const fs = require('fs');
const path = require('path');

const binDir = path.join(__dirname, '..', 'node_modules', '.bin');

if (!fs.existsSync(binDir)) {
  process.exit(0);
}

for (const entry of fs.readdirSync(binDir)) {
  const fullPath = path.join(binDir, entry);
  const stat = fs.statSync(fullPath);

  if (stat.isFile()) {
    try {
      fs.chmodSync(fullPath, 0o755);
    } catch (error) {
      // Ignore permission changes that are not supported in this environment.
    }
  }
}
