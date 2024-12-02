

const audio = document.getElementById('audio');
const lyrics = document.getElementById('lyrics').getElementsByTagName('p');
const lyricsArray = Array.from(lyrics);


const times = [
    { time: 18, line: 0 },// We were speeding together
    { time: 20, line: 1 },// Down the dark avenues
    { time: 25, line: 2 },// But besides of the stardom
    { time: 28, line: 3 },// All we got was blues
    { time: 32, line: 4 },// But through all of that sorrow
    { time: 35, line: 5 },// We were riding high
    { time: 40, line: 6 },// And the truth of the matter is
    { time: 42, line: 7 },// I never let you go, let you go
    { time: 47, line: 8 },// We were scanning the cities
    { time: 50, line: 9 },// Rocking to pay the dues
    { time: 54, line: 10 },// But besides of the glamour
    { time: 57, line: 11 },// All we got was bruised
    { time: 62, line: 12 },// But through all of that sorrow
    { time: 65, line: 13 },// We were riding high
    { time: 69, line: 14 },// And the truth of the matter is
    { time: 72, line: 15 },// I never let you go, let you go
    { time: 77, line: 16 },// You go down just like Holy Mary
    { time: 85, line: 17 },// Mary on a, Mary on a cross
    { time: 89, line: 18 },// Not just another Bloody Mary
    { time: 93, line: 19 },// Mary on a, Mary on a cross
    { time: 97, line: 20 },// If you choose to run away with me
    { time: 100, line: 21 },// I will tickle you internally
    { time: 104, line: 22 }, // And I see nothing wrong with that
    { time: 125, line: 23 },// We were searching for reasons
    { time: 128, line: 24 },// To play by the rules
    { time: 132, line: 25 },// But we quickly found
    { time: 136, line: 26 },// It was just for fools
    { time: 139, line: 27 },// Now through all of this sorrow
    { time: 143, line: 28 },// We'll be riding high
    { time: 147, line: 29 },// And the truth of the matter is
    { time: 150, line: 30 },// I never let you go, let you go
    { time: 162, line: 31 },// You go down just like Holy Mary
    { time: 166, line: 32 },// Mary on a, Mary on a cross
    { time: 171, line: 33 },// Not just another Bloody Mary
    { time: 174, line: 34 },// Mary on a, Mary on a
    { time: 178, line: 35 },// You go down just like Holy Mary
    { time: 181, line: 36 },// Mary on a, Mary on a cross
    { time: 185, line: 37 },// Your beauty never ever scared me
    { time: 188, line: 38 },// Mary on a, Mary on a cross
    { time: 193, line: 39 },// If you choose to run away with me
    { time: 197, line: 40 },// I will tickle you internally
    { time: 201, line: 41 },// And I see nothing wrong with that
    { time: 208, line: 42 },// Nothing wrong with that
    { time: 212, line: 43 },// Mary on a, Mary on a cross
    { time: 217, line: 44 }// Mary on a, Mary on a cross
];
   

audio.ontimeupdate = function () {
    const currentTime = audio.currentTime;
    times.forEach(({ time, line }) => {
        const lyric = lyricsArray[line];

        // Grifar a linha se o tempo atual ultrapassar o tempo da linha
        if (currentTime >= time && currentTime < (times[line + 1]?.time || currentTime + 5)) {
            lyric.querySelector('span').classList.add('grifada');
        } else {
            lyric.querySelector('span').classList.remove('grifada');
        }
    });
};