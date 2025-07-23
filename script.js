function showRecommendation(mood) {
  const recommendation = document.getElementById("recommendation");
  let message = "";
  switch (mood) {
    case "元気":
      message = "🎵 アップテンポなポップがおすすめ！";
      break;
    case "リラックス":
      message = "🧘‍♀️ ゆったりジャズやLo-Fiはいかが？";
      break;
    case "おはよう":
      message = "🌅 爽やかで前向きな曲で気持ちよくスタートしよう！";
      break;
    case "おやすみ":
      message = "🌙 静かなピアノやアンビエントで心を落ち着けて…";
      break;
  }
  recommendation.innerHTML = `<p>${message}</p>`;
}
