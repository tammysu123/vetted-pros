/* 分類情境圖 — 純 SVG 現畫，不是賣家作品也不是照片
   為什麼不用 AI 生圖：Gemini image model 的 free tier 是 limit 0，要開帳單（小羽尚未決定）
   為什麼不用圖庫照：Openverse 免費授權庫裡這類主題只有博物館舊照，品質不能用
   這套的好處：0 成本、0 版權風險、檔案小（inline，不發任何額外請求）、跟頁面同一組色 */

const ART_PALETTE = {
  ink: "#14140f",
  paper: "#faf9f6",
  accent: "#d8452a",
  sand: "#e8dfd0",
  clay: "#c9a227",
  slate: "#3f4a52",
};

/* 每個分類一組場景。刻意畫成「這類影片的樣子」，不冒充任何人的作品。 */
const ART_SCENES = {
  "Reels & TikTok": p => `
    <rect width="600" height="200" fill="${p.slate}"/>
    <g opacity=".22">${[...Array(9)].map((_, i) =>
      `<rect x="${20 + i * 66}" y="${28 + (i % 3) * 18}" width="46" height="${120 - (i % 3) * 24}" rx="6" fill="${p.paper}"/>`).join("")}</g>
    <rect x="252" y="24" width="96" height="152" rx="12" fill="${p.paper}"/>
    <rect x="252" y="24" width="96" height="152" rx="12" fill="none" stroke="${p.ink}" stroke-width="2"/>
    <path d="M288 86 L316 100 L288 114 Z" fill="${p.accent}"/>
    <rect x="264" y="150" width="48" height="6" rx="3" fill="${p.sand}"/>`,

  "YouTube": p => `
    <rect width="600" height="200" fill="${p.paper}"/>
    <rect x="40" y="26" width="330" height="106" rx="8" fill="${p.slate}"/>
    <path d="M186 66 L222 79 L186 92 Z" fill="${p.paper}"/>
    <g>${[...Array(26)].map((_, i) =>
      `<rect x="${40 + i * 20}" y="${152 - (i % 5) * 9}" width="11" height="${14 + (i % 5) * 9}" rx="3"
         fill="${i % 7 === 0 ? p.accent : p.sand}"/>`).join("")}</g>
    <rect x="392" y="26" width="168" height="106" rx="8" fill="${p.sand}"/>
    <rect x="408" y="46" width="120" height="8" rx="4" fill="${p.slate}" opacity=".45"/>
    <rect x="408" y="64" width="88" height="8" rx="4" fill="${p.slate}" opacity=".3"/>
    <rect x="408" y="82" width="104" height="8" rx="4" fill="${p.slate}" opacity=".3"/>`,

  "Podcast": p => `
    <rect width="600" height="200" fill="${p.sand}"/>
    <g stroke="${p.ink}" stroke-width="3" fill="none">
      <path d="M150 150 L150 96"/><path d="M450 150 L450 96"/>
    </g>
    <rect x="128" y="34" width="44" height="66" rx="22" fill="${p.ink}"/>
    <rect x="428" y="34" width="44" height="66" rx="22" fill="${p.slate}"/>
    <g>${[...Array(19)].map((_, i) => {
      const h = 8 + Math.abs(Math.sin(i * 1.1)) * 62;
      return `<rect x="${196 + i * 11}" y="${100 - h / 2}" width="4" height="${h}" rx="2"
        fill="${i === 9 ? p.accent : p.ink}" opacity="${i === 9 ? 1 : 0.35}"/>`;
    }).join("")}</g>
    <rect x="120" y="150" width="360" height="3" rx="1.5" fill="${p.ink}" opacity=".25"/>`,

  "Wedding & events": p => `
    <rect width="600" height="200" fill="${p.clay}" opacity=".22"/>
    <circle cx="300" cy="128" r="72" fill="${p.clay}" opacity=".55"/>
    <circle cx="300" cy="128" r="44" fill="${p.accent}" opacity=".35"/>
    <g fill="${p.ink}" opacity=".72">
      <rect x="0" y="0" width="600" height="20"/><rect x="0" y="180" width="600" height="20"/>
    </g>
    <g fill="${p.paper}">${[...Array(15)].map((_, i) =>
      `<rect x="${14 + i * 40}" y="5" width="16" height="10" rx="2"/><rect x="${14 + i * 40}" y="185" width="16" height="10" rx="2"/>`).join("")}</g>
    <g fill="${p.paper}" opacity=".8">
      ${[[120, 60], [188, 44], [432, 58], [498, 40], [372, 34]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`).join("")}
    </g>`,

  "Brand & corporate": p => `
    <rect width="600" height="200" fill="${p.ink}"/>
    <g>${["#f2e6d0", "#e2c9a0", "#cf9f6b", "#a86a45", "#6d4630", "#3a2a22"].map((c, i) =>
      `<rect x="${40 + i * 88}" y="34" width="72" height="98" rx="6" fill="${c}"/>`).join("")}</g>
    <rect x="40" y="150" width="520" height="6" rx="3" fill="${p.paper}" opacity=".25"/>
    <circle cx="176" cy="153" r="10" fill="${p.accent}"/>`,

  "Ads & UGC": p => `
    <rect width="600" height="200" fill="${p.paper}"/>
    <rect x="0" y="128" width="600" height="72" fill="${p.sand}" opacity=".7"/>
    <path d="M132 12 L96 128 L300 128 Z" fill="${p.clay}" opacity=".3"/>
    <rect x="96" y="0" width="72" height="18" rx="4" fill="${p.slate}"/>
    <g transform="translate(272,64)">
      <rect x="0" y="26" width="72" height="46" rx="8" fill="${p.slate}"/>
      <rect x="14" y="0" width="44" height="32" rx="6" fill="${p.accent}"/>
      <ellipse cx="36" cy="76" rx="52" ry="7" fill="${p.ink}" opacity=".12"/>
    </g>
    <rect x="432" y="52" width="80" height="126" rx="10" fill="${p.paper}" stroke="${p.ink}" stroke-width="2"/>
    <circle cx="472" cy="70" r="4" fill="${p.ink}" opacity=".35"/>
    <rect x="446" y="84" width="52" height="62" rx="5" fill="${p.slate}" opacity=".25"/>
    <circle cx="472" cy="160" r="7" fill="${p.accent}"/>`,
};

function categoryArt(tag) {
  const scene = ART_SCENES[tag];
  if (!scene) return "";
  return '<svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" role="presentation" focusable="false">' +
    scene(ART_PALETTE) + "</svg>";
}
