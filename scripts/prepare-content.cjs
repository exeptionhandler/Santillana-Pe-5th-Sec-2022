const fs = require('fs-extra');
const path = require('path');

const contentPath = path.resolve(__dirname, '../../com.santillana.multiui.compartir/files/content/v1/files');
const publicPath = path.resolve(__dirname, '../public/content');
const books = [];

async function prepareContent() {
  try {
    await fs.ensureDir(publicPath);
    const resourceFolders = await fs.readdir(contentPath);

    for (const resourceFolder of resourceFolders) {
      const resourcePath = path.join(contentPath, resourceFolder);
      const stats = await fs.stat(resourcePath);

      if (stats.isDirectory()) {
        const projectJsonPath = path.join(resourcePath, 'project.json');
        if (await fs.pathExists(projectJsonPath)) {
          const projectData = await fs.readJson(projectJsonPath);
          const lang = Object.keys(projectData)[0];
          const book = {
            id: projectData[lang].project.id,
            title: projectData[lang].project.name,
            path: `content/${resourceFolder}`,
          };
          books.push(book);

          await fs.copy(resourcePath, path.join(publicPath, resourceFolder));
        }
      }
    }

    await fs.writeJson(path.join(publicPath, 'books.json'), books, { spaces: 2 });
    console.log('Content prepared successfully!');
  } catch (error) {
    console.error('Error preparing content:', error);
  }
}

prepareContent();
