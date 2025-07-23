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
  html += `<p>🎧 ${mainTrack}</p>`;
  html += `<h4>他のおすすめ：</h4><ul>`;
  otherTracks.forEach(track => {
    html += `<li>${track}</li>`;
  });
  html += `</ul>`;

  recommendation.innerHTML = html;
}
