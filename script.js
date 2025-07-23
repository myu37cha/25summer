function showRecommendation(mood) {
  const recommendation = document.getElementById("recommendation");

  const moodTracks = {
    "元気": [
      "🎵 TWICE - Feel Special",
      "🎵 YOASOBI - アイドル"
    ],
    "リラックス": [
      "🧘‍♀️ Nujabes - Reflection Eternal",
      "🧘‍♀️ Aimer - 星の消える夜に"
    ],
    "おはよう": [
      "🌅 Official髭男dism - Universe",
      "🌅 Spitz - 空も飛べるはず"
    ],
    "おやすみ": [
      "🌙 RADWIMPS - なんでもないや",
      "🌙 Piano Sleep - Rainy Night"
    ]
  };

  const tracks = moodTracks[mood];
  let message = `<h3>「${mood}」におすすめの曲：</h3><ul>`;
  tracks.forEach(track => {
    message += `<li>${track}</li>`;
  });
  message += `</ul>`;

  recommendation.innerHTML = message;
}
