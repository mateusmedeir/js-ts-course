const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    console.log(files);
    walk(files, rootDir);
}

async function walk(files, rootDir, amountHyp=0) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        const hyphens = putHyphens(amountHyp);
        console.log(`${hyphens}${file}`);
        if (stats.isDirectory()) {
            const filesInFolder = await fs.readdir(fileFullPath);
            walk(filesInFolder, fileFullPath, amountHyp + 1);
        }
    }
}

function putHyphens(amountHyp) {
    let hyphens = '';
    for (let i = 0; i < amountHyp; i++) hyphens += '-';
    return hyphens;
}

readdir('c:\\Users\\Mateus\\Documents\\js-ts-course\\node\\essential\\');