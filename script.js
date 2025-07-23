function showRecommendation(mood) {
  const recommendation = document.getElementById("recommendation");

  const moodTracks = {
    "元気": [
      {
        title: "TWICE - Feel Special",
        id: "FzVR_fymZw4"
      },
      {
        title: "YOASOBI - アイドル",
        id: "ZRtdQ81I3_c"
      }
      "Aimer - Brave Shine",
      "Perfume - FLASH"
    ],
    "リラックス": [
      "Nujabes - Reflection Eternal",
      "Aimer - 星の消える夜に",
      "Lofi Chill - Snow Fall",
      "藤井風 - ガーデン"
    ],
    "おはよう": [
      "Official髭男dism - Universe",
      "Spitz - 空も飛べるはず",
      "Vaundy - 僕は今日も",
      "YUKI - ふがいないや"
    ],
    "おやすみ": [
      "RADWIMPS - なんでもないや",
      "Piano Sleep - Rainy Night",
      "Ryo Fukui - Scenery",
      "Sheena Ringo - 浴室"
    ]
  };

  const tracks = moodTracks[mood];
  const mainIndex = Math.floor(Math.random() * tracks.length);
  const mainTrack = tracks[mainIndex];

  // 他のおすすめ曲（重複なし）
  const otherTracks = tracks.filter((_, i) => i !== mainIndex).slice(0, 3);

  // 表示
 let html = `<h3>「${mood}」にぴったりの曲：</h3>`;
  html += `
    <div>
      <a href="https://www.youtube.com/watch?v=${mainTrack.id}" target="_blank">
        <img src="https://img.youtube.com/vi/${mainTrack.id}/mqdefault.jpg" alt="${mainTrack.title}" />
      </a>
      <p>${mainTrack.title}</p>
    </div>
  `;

  html += `<h4>他のおすすめ：</h4><div style="display:flex;justify-content:center;gap:20px;">`;
  otherTracks.forEach(track => {
    html += `
      <div>
        <a href="https://www.youtube.com/watch?v=${track.id}" target="_blank">
          <img src="https://img.youtube.com/vi/${track.id}/mqdefault.jpg" alt="${track.title}" width="120" />
        </a>
        <p style="font-size:14px;">${track.title}</p>
      </div>
    `;
  });
  html += `</div>`;


  recommendation.innerHTML = html;
}
