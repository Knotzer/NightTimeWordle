function PlaySong(Choice, Songs) {
    var Choice = Math.floor(Math.random() * 16);
    var sound = new Howl({

        src: [Songs[Choice]],
        html5: true,
        onend: function () {
            PlaySong(Choice, Songs)
        }
    });

    sound.play();

}

var Choice = Math.floor(Math.random()* 16);
const Songs = [
    "/Music/__.mp3",
    "/Music/90's flav - call me.mp3",
    "/Music/Brandon Kai - 3 AM.mp3",
    "/Music/Flance - Somdedays",
    "/Music/j^p^n - amend (second part looped).mp3",
    "/Music/Kanisan x Wishes and Dreams - morning moon.mp3",
    "/Music/kudasai - dream of her.mp3",
    "/Music/kudasai - technicolor.mp3",
    "/Music/kudasai - the girl i haven't met.mp3",
    "/Music/Lavender.mp3",
    "/Music/Let Me Hold You.mp3",
    "/Music/Melatonin.mp3",
    "/Music/Ocean I.mp3",
    "/Music/Peace of Mind.mp3",
    "/Music/Stargazing.mp3",

];
PlaySong(Choice, Songs);



