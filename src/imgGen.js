var Jimp = require('jimp');

//random file name generator that i totally didnt yank from stackoverflow

var fileId = (length) =>{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
console.log(fileId(10));

const imageGen = async () => {

    // open a file called "lenna.png"
    Jimp.read('../ysk.jpg', (err, ysk) => {
        if (err) throw err;
        ysk
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write(`../data/${fileId(16)}.jpeg`); // save
    });
}

module.exports = imageGen;