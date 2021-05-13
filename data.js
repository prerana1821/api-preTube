const videos = [
  {
    _id: "WylKHt5SuMI",
    thumbnail:
      "https://i.ytimg.com/vi/WylKHt5SuMI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLoMliRG-07pvqJoRhyfITvPfyyQ",
    name:
      "Dr. Vivek Bindra On Self Motivation, The Future of Business in India",
    date: "Jun 12, 2020",
    category: "Ranveer Show",
  },
  {
    _id: "d3R2-nW065U",
    thumbnail:
      "https://i.ytimg.com/vi/d3R2-nW065U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqEVtw-8OcE7coTjkikBVcIpD7dQ",
    name:
      "Ayushmann Khurrana's Life Hacks on Confidence, Spirituality & Fitness",
    date: "Nov 7, 2019",
    category: "Ranveer Show",
  },
  {
    _id: "2UDczkt_vaI",
    thumbnail:
      "https://i.ytimg.com/vi/2UDczkt_vaI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC18Y_P4NGKY9s-V3ovtakbwkIOZQ",
    name: "Tanmay Bhat​ On His Comeback, Weight Loss, AIB & Finance",
    date: "Jan 10, 2020",
    category: "Ranveer Show",
  },
  {
    _id: "WYNRt-AwoUg",
    thumbnail:
      "https://i.ytimg.com/vi/WYNRt-AwoUg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXQTqkOb-71gvi3peH2qgktX7trA",
    name: "When I Met My Idol - Arnold Schwarzenegger",
    date: "Oct 28, 2019",
    category: "Ranveer Show",
  },
  {
    _id: "sBH-ngpL0zo",
    thumbnail:
      "https://i.ytimg.com/vi/sBH-ngpL0zo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx0iIWWymPgJ1Pn4mFPOkXCLMaow",
    name: "Gaur Gopal Das​ On His Life Lessons And Spirituality",
    date: "Mar 13, 2020",
    category: "Ranveer Show",
  },
  {
    _id: "eavpj-z5Y4Q",
    thumbnail:
      "https://i.ytimg.com/vi/eavpj-z5Y4Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsQb87D1DjHFsZfVutskHvJ0n5Ug",
    name: "Priyanka Chopra On Mental Health, Goals & Motivation",
    date: "Oct 8, 2019",
    category: "Ranveer Show",
  },

  {
    _id: "64z0focMWqI",
    thumbnail:
      "https://i.ytimg.com/vi/64z0focMWqI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4EJBzjhvGJ73tAoUFw-g7-5B61Q",
    name: "Rajkummar Rao On Initial Struggle, Career Hacks",
    date: "Nov 7, 2019",
    category: "Ranveer Show",
  },
  {
    _id: "Qm1C4hBPu20",
    thumbnail:
      "https://i.ytimg.com/vi/Qm1C4hBPu20/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8v7uQjaOYtIraX_RXwfAjbohM_A",
    name: "Ayush Mehra on Love, Long Term Relationships",
    date: "Mar 20, 2020",
    category: "Ranveer Show",
  },
  {
    _id: "mddai-lDoHA",
    thumbnail:
      "https://i.ytimg.com/vi/mddai-lDoHA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuPp9Xgyc4_VcSojewC2xEgGf0dg",
    name: "Vegetarianism, Masturbation, NoFap And No Addiction",
    date: "Aug 2, 2019",
    category: "Ranveer Show",
  },
  {
    _id: "QLUxKjPx0KU",
    thumbnail:
      "https://i.ytimg.com/vi/QLUxKjPx0KU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4xKzauhqqVT8Hw8EIMnSFNLl7WA",
    name:
      "Shilpa Shetty Kundra​'s Secrets To A Rich, Spiritual & Peaceful Life",
    date: "Nov 29, 2019",
    category: "Ranveer Show",
  },
  {
    _id: "klMP7sMFtDw",
    thumbnail:
      "https://i.ytimg.com/vi/klMP7sMFtDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoRJHcKSoV8pTp_mESfqyuI2YrBg",
    name: "Tamannaah Bhatia On Relationships, Career Growth Mentality",
    date: "Oct 23, 2020",
    category: "Ranveer Show",
  },
  {
    _id: "MLdpVcOeBrc",
    thumbnail:
      "https://i.ytimg.com/vi/MLdpVcOeBrc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZsSG6mqk8aM_EQCLhfLMFhANftQ",
    name: "My Honest Depression Story!",
    date: "Nov 22, 2018",
    category: "Metal Fitness",
  },
  {
    _id: "4-zRZmKm9IA",
    thumbnail:
      "https://i.ytimg.com/vi/4-zRZmKm9IA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkSCtycVZqGQHOqOHKaZavpAD4-Q",
    name: "Mental Trick To Study With Full Concentration & Focus",
    date: "Jan 10, 2018",
    category: "Metal Fitness",
  },
  {
    _id: "5rZVTBgV7cc",
    name: "3 CAREER STRATEGIES That Will Change Your Future",
    thumbnail:
      "https://i.ytimg.com/vi/5rZVTBgV7cc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR-glK7Wq17xAuubwN08QLMyrIvQ",
    date: "Sep 6, 2018",
    category: "Metal Fitness",
  },
  {
    _id: "pe8dsnsczNU",
    thumbnail:
      "https://i.ytimg.com/vi/pe8dsnsczNU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmUEtWYBDxtQmEEQcH7tc8CD_RHg",
    name: "3 PRACTICAL Mental Tricks That Virat Kohli Used",
    date: "Apr 12, 2018",
    category: "Metal Fitness",
  },
  {
    _id: "7cCMmHqHHQ0",
    thumbnail:
      "https://i.ytimg.com/vi/7cCMmHqHHQ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1rViPwKuHI7rjcayxa2M22_5izw",
    name: "Top 10 Easy Tips To Achieve Happiness In Life",
    date: "Dec 21, 2017",
    category: "Metal Fitness",
  },
  {
    _id: "dI0O8TnC2d8",
    thumbnail:
      "https://i.ytimg.com/vi/dI0O8TnC2d8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3cCVj4xI-OuVK5cUuxi8tDnDDjg",
    name: "Best Home Workout Routine",
    date: "Jun 8, 2017",
    category: "Home Workout",
  },
  {
    _id: "AXZlb-3MMYE",
    thumbnail:
      "https://i.ytimg.com/vi/AXZlb-3MMYE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJIqU-SX71Do5gYXRKY9kvGMUCzQ",
    name: "Guided Home Workout for Men and Women",
    date: "Jun 29, 2017",
    category: "Home Workout",
  },
  {
    _id: "Qp88IAYnvWc",
    thumbnail:
      "https://i.ytimg.com/vi/Qp88IAYnvWc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeNgI6HZ_sX0fW-V_B_Hz3I4EY_Q",
    name: "Arm Workout AT HOME For Men & Women",
    date: "Aug 31, 2017",
    category: "Home Workout",
  },
];

const userCredentials = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  }
]

module.exports = { videos, userCredentials };
