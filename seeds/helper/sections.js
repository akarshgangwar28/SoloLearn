const Videos = require('../../models/videos');
var v = []
module.exports.generateRandomVideos = () => {
    
    const randomVideosNo = Math.floor(Math.random() * 10);
    for (let j = 0; j < randomVideosNo; j++) {
        const randomVideo = Math.floor(Math.random() * 48) + 1;
        Videos.findOne().skip(randomVideo).exec((err, result) => {
            v.push(String(result._id));
            // console.log(v)

        })

    }
    return v;
}