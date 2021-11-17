var Jimp = require('jimp');

//random file name generator that i totally didnt yank from stackoverflow

var fileId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var LeString = "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLl"


const imageGen = async () => {
    let fileName = fileId(16);
    const font = await Jimp.loadFont("../fonts/TAHOMA_32/TAHOMABD.ttf.fnt");
    // open a file called "lenna.png"
    Jimp.read('../ysk.jpg', (err, ysk) => {
        if (err) throw err;
        ysk
            //.resize(256, 256) // resize
            //.print(font, 30, 65, 'YOU SHOULD')
            .print(font,20 ,110,
                {
                  text: LeString.toUpperCase(),
                  alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                  alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                },
                400, 200)   
            //.print(font, 120, 300, 'NOW!')
            // .quality(60) // set JPEG quality
            // .greyscale() // set greyscale
            .write(`../data/${fileName}.jpeg`); // save
    });
    console.log(fileName)
}

module.exports = imageGen;