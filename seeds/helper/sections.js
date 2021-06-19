const Videos = require('../../models/videos');
<<<<<<< HEAD
var v = []
module.exports.generateRandomVideos = () => {
    
    const randomVideosNo = Math.floor(Math.random() * 10);
    for (let j = 0; j < randomVideosNo; j++) {
        const randomVideo = Math.floor(Math.random() * 48) + 1;
        Videos.findOne().skip(randomVideo).exec((err, result) => {
            v.push(String(result._id));
            // console.log(v)

        })

=======

module.exports.generateRandomVideos = async () => {
    var v = []
    const noOfVideos = Math.floor(Math.random() * 9 + 1);
    for (let i = 0; i < noOfVideos; i++) {
        const rand = Math.floor(Math.random() * 50)
        const randomVideo = await Videos.findOne().skip(rand);
        v.push(String(randomVideo._id))
>>>>>>> 079a05fb4dff42ea99327c3ada8706e3aa0c6184
    }
    return v;
}