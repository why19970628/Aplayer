const ap = new APlayer({
    container: document.getElementById('player'),
    fixed:true,
    // mini: true,
    listFolded: false,
    listMaxHeight: 900,
    volume: 0.5,
    audio: [
        {
            name: '起风了（Cover 高桥优）',
            artist: '买辣椒也用券',
            url: '起风了（Cover 高桥优）.mp3',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        },
        {
            name: '我们',
            artist: '子宏',
            url: '子宏.《我们》《李兰妈妈》《我的将军啊》《monster》《预谋》《非酋》-子宏〖收徒弟〗 -79546425.aac',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        },
        {
            name: '奏(かなで)',
            artist: '高木さん(CV:高橋李依)',
            url: '1.mp3',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        },
        {
            name: '粉雪',
            artist: '高木さん(CV:高橋李依)',
            url: '2.mp3',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        },
        {
            name: 'キセキ',
            artist: '高木さん(CV:高橋李依)',
            url: '3.mp3',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        },
        {
            name: 'ありがとう',
            artist: '高木さん(CV:高橋李依)',
            url: '4.mp3',
            cover: 'Cover.jpg',
            theme: '#F4A7B9'
        }
    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (data) => {
    setTheme(data.index);
});
