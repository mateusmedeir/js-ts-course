const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    await walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        
        const stats = await fs.stat(fileFullPath);
        if (/\.html$/g.test(fileFullPath))
            console.log(fileFullPath);
        if (stats.isDirectory()) {
            await readdir(fileFullPath);
        }
    }
}

readdir('c:\\Users\\Mateus\\Documents\\js-ts-course', 0);