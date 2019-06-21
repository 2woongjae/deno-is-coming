const {stat, statSync} = Deno;

(async () => {
    const fileInfo1 = await stat("README.md");
    console.log(fileInfo1);
    console.log(fileInfo1.isFile());
    console.log(fileInfo1.isDirectory());

    const fileInfo2 = statSync("README.md");
    console.log(fileInfo2);
    console.log(fileInfo2.isFile());
    console.log(fileInfo2.isDirectory());
})();