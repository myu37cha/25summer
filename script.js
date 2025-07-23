function showRecommendation(mood) {
  const recommendation = document.getElementById("recommendation");

  const moodTracks = {
  "元気": [
    { title: "TWICE - Talk that Talk", id: "Sj9Yl2ZDZrRcqgXw" },
    { title: "TWICE - Dance The Night Away", id: "Fm5iP0S1z9w" },
    { title: "TWICE - ONE SPARK", id: "0eqNrlSqoO-BYOmr" },
    { title: "TWICE - FANCY", id: "JoV8c7MPHpwu-M7n" },
    { title: "TWICE - LIKEY", id: "mTIZMvAnQlGLw9dy" }
  ],
  "リラックス": [
    { title: "TWICE - MOONLIGHT SUNRISE", id: "zHjPJITrMJfGils_" },
    { title: "TWICE - Queen of Hearts", id: "oMmuTAd-B-_ebTm6" },
    { title: "TWICE - Gone", id: "IN_dhhR8gBtt0lpi" },
    { title: "TWICE - Wallflower", id: "GSJs_4mHPQjRcyLx" },
    { title: "TWICE - When We Were Kids", id: "o0QtSUz2Uwm9QoRh" }
  ],
  "おはよう": [
    { title: "TWICE - I GOT YOU", id: "jE3lBnYxBFs" },
    { title: "TWICE - ONE SPARK", id: "67Oe2LWddss" },
    { title: "TWICE - Basics", id: "Y1VwZAY53rw" },
    { title: "TWICE - Celebrate", id: "JYodSpcJaJM" },
    { title: "TWICE - The Feels", id: "f5_wn8mexmM" }
  ],
  "おやすみ": [
    { title: "TWICE - Brave", id: "xrUu2U-zF88" },
    { title: "TWICE - Trouble", id: "JYodSpcJaJM" },
    { title: "TWICE - CRY FOR ME", id: "YHNU7JxE7Ew" },
    { title: "TWICE - Sweet Talker", id: "JYodSpcJaJM" },
    { title: "TWICE - The Best Thing I Ever Did", id: "JYodSpcJaJM" }
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
