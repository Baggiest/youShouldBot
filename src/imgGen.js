var Jimp = require('jimp');

//random file name generator that i totally didnt yank from stackoverflow

var fileId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const imageGen = async () => {
    let fileName = fileId(16);
    const font = await Jimp.loadFont("../TAHOMABD.fnt");
    // open a file called "lenna.png"
    Jimp.read('../ysk.jpg', (err, ysk) => {
        if (err) throw err;
        ysk
            //.resize(256, 256) // resize
            .print(font, 100, 0, 'kill yourself')
            // .quality(60) // set JPEG quality
            // .greyscale() // set greyscale
            .write(`../data/${fileName}.jpeg`); // save
    });
    console.log(fileName)
}

module.exports = imageGen;