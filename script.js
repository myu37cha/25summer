function showRecommendation(mood) {
  const recommendation = document.getElementById("recommendation");

  const moodTracks = {
  "元気": [
    { title: "TWICE - Talk that Talk", id: "k6jqx9kZgPM" },
    { title: "TWICE - Dance The Night Away", id: "Fm5iP0S1z9w" },
    { title: "TWICE - ONE SPARK", id: "jCzez_q8si0" },
    { title: "TWICE - FANCY", id: "kOHB85vDuow" },
    { title: "TWICE - LIKEY", id: "V2hlQkVJZhE" }
  ],
  "リラックス": [
    { title: "TWICE - MOONLIGHT SUNRISE", id: "cKlEE_EYuNM" },
    { title: "TWICE - Queen of Hearts", id: "Q4Rb5_kjS2M" },
    { title: "TWICE - Gone", id: "5x5HlWxv72s" },
    { title: "TWICE - Wallflower", id: "iQZ0aevvtO4" },
    { title: "TWICE - When We Were Kids", id: "nEuRhtp6u8k" }
  ],
  "おはよう": [
    { title: "TWICE - I GOT YOU", id: "haf67eKF0uo" },
    { title: "TWICE - ONE SPARK", id: "jCzez_q8si0" },
    { title: "TWICE - Basics", id: "Vm6prJ76kmA" },
    { title: "TWICE - Celebrate", id: "fMIn43MiwG8" },
    { title: "TWICE - The Feels", id: "f5_wn8mexmM" }
  ],
  "おやすみ": [
    { title: "TWICE - Brave", id: "uE67Gu5TFQM" },
    { title: "TWICE - Trouble", id: "UaCBS4K9R64" },
    { title: "TWICE - CRY FOR ME", id: "bkQw-F1QTq4" },
    { title: "TWICE - MOONLIGHT", id: "InRt1kpqVPw" },
    { title: "TWICE - The Best Thing I Ever Did", id: "CfUGjK6gGgs" }
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
