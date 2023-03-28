const pages = ["article", "about-us", "contact"];

const basePath = "./src/";

const sitemap = {
    files: [],
};

for (let i = 0; i < pages.length; i++) {
    const key = pages[i];
    sitemap.files.push({
        templatePath: basePath + key + ".html",
        filename: key + ".html",
    });
}

module.exports = sitemap;
