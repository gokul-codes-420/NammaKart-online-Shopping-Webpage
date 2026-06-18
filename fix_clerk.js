const fs = require('fs');
const path = require('path');

const dir = './app/api';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach((file) => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('getAuth')) {
    content = content.replace(/import\s+\{\s*([^}]*?)\s*getAuth\s*([^}]*?)\s*\}\s+from\s+['"]@clerk\/nextjs\/server['"];/, (match, p1, p2) => {
        let imports = [p1, 'auth', p2].filter(Boolean).map(s => s.trim()).filter(s => s !== ',');
        return `import { ${imports.join(', ')} } from "@clerk/nextjs/server";`;
    });
    
    // Replace `const { userId } = await getAuth(request);` or `const { userId } = getAuth(request);`
    content = content.replace(/const\s+\{\s*userId\s*\}\s*=\s*(?:await\s+)?getAuth\(request\);/g, 'const { userId } = await auth();');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
