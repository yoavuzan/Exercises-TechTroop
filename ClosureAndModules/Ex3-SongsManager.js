module.exports = function SongsManager(){
    const songs = {}
    function addSong(name,url){
        songs[name] = url.split("=")[1];
    }
    function getSong(name){
        if (songs[name]){
            return "https://www.youtube.com/watch?v="+songs[name];
        }else{
            console.log("the song is not exist");
        }
    }
    return {getSong,addSong}
}