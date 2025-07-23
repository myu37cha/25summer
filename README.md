<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>気分で選ぶ音楽サイト</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>気分で選ぶ音楽🎧</h1>
    <p>あなたの気分にぴったりの音楽を見つけよう！</p>
  </header>

  <section class="moods">
    <button onclick="showRecommendation('元気')">元気</button>
    <button onclick="showRecommendation('リラックス')">リラックス</button>
    <button onclick="showRecommendation('悲しい')">悲しい</button>
  </section>

  <section id="recommendation"></section>

  <script>
    function showRecommendation(mood) {
      const recommendation = document.getElementById("recommendation");
      let message = "";
      switch(mood) {
        case "元気":
          message = "🎵 アップテンポなポップがおすすめ！";
          break;
        case "リラックス":
          message = "🧘‍♀️ ゆったりジャズやLo-Fiはいかが？";
          break;
        case "悲しい":
          message = "😢 バラードで心に寄り添ってみよう";
          break;
      }
      recommendation.innerHTML = `<p>${message}</p>`;
    }
  </script>
</body>
</html>
