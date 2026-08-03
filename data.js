/* 落地頁內容資料
   賣家資料來源與篩選過程：../sellers-shortlist.md（2026-07-28 抓取，個人頁逐一覆核）
   url：聯盟審核通過前先放原始賣家頁，核准後整批換成 deep link（見每筆的 TODO）
   設計依據：../design-research.md（Pinterest Trends 實測受眾 18-34 佔 82%、女性 64%） */

const SITE = {
  niche: "VIDEO EDITING",
  headline: "Find a video editor you'd actually rehire.",
  subhead: "Ten vetted Fiverr Pro editors, compared side by side — what they edit, what they charge, how many clients came back.",
  domain: "https://tammysu123.github.io/vetted-pros/",   // 2026-07-28 上線
};

/* FTC：揭露聯盟關係，用語依 FTC 指引（"affiliate link" 字樣不合格） */
const DISCLOSURE =
  "Disclosure: if you buy through links on this page, we may earn a commission at no extra cost to you. We only list sellers with strong review records.";

/* 我們怎麼挑的 — 頁面上的信任訊號，同時是 Pinterest 的網域品質訊號 */
const CRITERIA = [
  "Fiverr Pro only — every editor here passed Fiverr's own vetting, not just a seller level badge.",
  "200+ reviews and 4.7 stars minimum. No new accounts, no thin review histories.",
  "Every profile checked by hand for what they actually edit — nobody made this list on keywords alone.",
];

/* 每個分類一則「下單前該知道的事」——真的有用的資訊，不是填空。
   作用：① 讓只有 1 位賣家的分類不會空一半 ② Pinterest 排名看網域品質，內容單薄的聯盟頁會被扣分 */
const CATEGORY_NOTES = {
  "Reels & TikTok": "Ask for the first 3 seconds as a separate deliverable. Most short-form edits live or die on the hook, and it's the cheapest thing to iterate on.",
  "YouTube": "Send one of your own past videos as reference and ask what they'd cut. The answer tells you more than any portfolio reel.",
  "Brand & corporate": "Agree on who supplies the b-roll and music licences before you order — that's where corporate edits usually blow past budget.",
  "Podcast": "Decide up front whether you need the audio mastered too. Video-only podcast edits often arrive with untouched sound.",
  "Wedding & events": "Ask how many minutes of raw footage the base price covers. Wedding shoots run long and per-hour overages add up fast.",
  "Ads & UGC": "Order variations, not one perfect cut. Paid social needs 3-5 versions of the same edit to find the one that performs.",
};

/* 誰做的 —— 買家的信任訊號，同時是寄給賣家索取素材授權時他們唯一看得到的「我們是誰」。
   刻意不放 email：Fiverr 禁止繞過平台聯絡，把聯絡方式擺在頁面上再叫賣家去看，容易被解讀成引導站外。 */
const ABOUT = {
  title: "Who's behind this",
  body: "I'm Tammy — a musician and creator who films her own content and got tired of gambling on editors. This page is the shortlist I built for myself: ten Fiverr Pro editors, checked by hand, kept current. No sponsored placements — nobody paid to be on this list or to rank higher on it.",
  sellerNote: "If you're one of the editors listed here: message me on Fiverr and I'll point the link at a different gig of yours, correct anything that's wrong, or take you off the page the same day.",
};

const SERVICES = [
  {
    name: "Scaler Studios",
    tag: "Reels & TikTok",
    blurb: "Short-form & motion team",
    reviews: 1700,
    rating: 4.9,
    price: "from $100",
    img: "",
    url: "https://pro.fiverr.com/agencies/scalerstudios",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/agencies/scalerstudios",
    bestFor: "Reels and TikToks at volume, with motion graphics baked in",
  },
  {
    name: "Katerina",
    tag: "Reels & TikTok",
    blurb: "Social video ads editor",
    reviews: 965,
    rating: 4.9,
    price: "from $150",
    img: "",
    url: "https://pro.fiverr.com/freelancers/katerinasmileva",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/katerinasmileva",
    bestFor: "Brands who want reels that sell, not just look good",
  },
  {
    name: "Roshan Studio",   // 2026-08-02 賣家本人在 Fiverr 訊息指定的顯示名稱
    tag: "YouTube",
    blurb: "YouTube video editor",
    reviews: 2082,
    rating: 4.9,
    price: "from $100",
    img: "",
    url: "https://pro.fiverr.com/freelancers/roshan_101",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/roshan_101",
    bestFor: "Creators uploading weekly who need retention-first edits",
  },
  {
    name: "Sazzad H.",
    tag: "YouTube",
    blurb: "YouTube, vlog & podcast editor",
    reviews: 479,
    rating: 4.9,
    price: "from $75",
    img: "",
    url: "https://pro.fiverr.com/freelancers/sazzadedits",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/sazzadedits",
    bestFor: "One editor covering long-form, vlogs and real estate clips",
  },
  {
    name: "Denis",
    tag: "Brand & corporate",
    blurb: "Ads, commercials & color grading",
    reviews: 397,
    rating: 4.9,
    // 2026-08-03 賣家本人指定的 gig 與實際套餐價（Basic $350 / Standard $480 / Premium $650）
    price: "from $350",
    img: "",
    url: "https://www.fiverr.com/mrdiiiiin/edit-your-video-ads-and-commercials",
    fiverrProfile: "https://pro.fiverr.com/freelancers/mrdiiiiin",
    bestFor: "Ads and commercials that need After Effects and real color work",
  },
  {
    name: "Katie",
    tag: "Podcast",
    blurb: "Podcast editor & audio engineer",
    reviews: 1125,
    rating: 4.9,
    price: "from $110",
    img: "",
    url: "https://pro.fiverr.com/freelancers/katiejanner",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/katiejanner",
    bestFor: "Podcasters who want clean audio plus show notes in one pass",
  },
  {
    name: "Luis Nava",
    tag: "Podcast",
    blurb: "Long-form video & audio",
    reviews: 1008,
    rating: 4.9,
    price: "from $100",
    img: "",
    url: "https://pro.fiverr.com/freelancers/luisfernava",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/luisfernava",
    bestFor: "Hour-long interviews where the audio matters as much as the cut",
  },
  {
    name: "Veronica Alana",
    tag: "Wedding & events",
    blurb: "Cinematic & motion graphics",
    reviews: 284,
    rating: 4.9,
    price: "from $320",
    img: "",
    url: "https://pro.fiverr.com/freelancers/veroalana",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/veroalana",
    bestFor: "Weddings and event films that need a cinematic finish",
  },
  {
    name: "Eduardo Berth",
    tag: "Wedding & events",
    blurb: "Senior editor & certified colorist",
    reviews: 226,
    rating: 4.9,
    price: "from $150",
    img: "",
    url: "https://pro.fiverr.com/freelancers/eduberth",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/eduberth",
    bestFor: "Story-driven edits where grading carries the mood",
  },
  {
    name: "Filmito",
    tag: "Ads & UGC",
    blurb: "UGC & ad creative",
    reviews: 956,
    rating: 4.9,
    price: "from $200",
    img: "",
    url: "https://pro.fiverr.com/freelancers/shivamsuthar",   // TODO 聯盟核准後換 deep link
    fiverrProfile: "https://pro.fiverr.com/freelancers/shivamsuthar",
    bestFor: "Paid ads and UGC cuts built around conversion, not vibes",
  },
];
