const products = [
  {
    src: "https://images.pexels.com/videos/15720111/pexels-photo-15720111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Forest in the evening",
  },
  {
    src: "https://images.pexels.com/photos/18036573/pexels-photo-18036573/free-photo-of-light-sea-city-nature.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Abstract, architecture, art",
  },
  {
    src: "https://images.pexels.com/photos/5372615/pexels-photo-5372615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Mountain Lake at Dawn Covered with Fog",
  },
  {
    src: "https://images.pexels.com/photos/13519405/pexels-photo-13519405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Blue and White Strip Umbrella under Blue Sky",
  },
  {
    src: "https://images.pexels.com/photos/11376797/pexels-photo-11376797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Low-Angle Shot of a Concrete Building",
  },
  {
    src: "https://images.pexels.com/photos/17715085/pexels-photo-17715085/free-photo-of-brown-bear.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Brown Bear",
  },
  {
    src: "https://images.pexels.com/videos/10780284/4k-animal-animals-buck-10780284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Rein Deer",
  },
  {
    src: "https://images.pexels.com/photos/18373686/pexels-photo-18373686/free-photo-of-back-view-of-women-in-hijabs-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Two women",
  },
  {
    src: "https://images.pexels.com/photos/18273135/pexels-photo-18273135/free-photo-of-snowed-fjadrargljufur-canyon-on-iceland.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Ice Mountains",
  },
  {
    src: "https://images.pexels.com/videos/18522098/bukit-bintang-kl-tower-klcc-kuala-lumpur-18522098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "City in the night",
  },
  {
    src: "https://images.pexels.com/photos/6851359/pexels-photo-6851359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Aerial View of Cars on Road",
  },
  {
    src: "https://images.pexels.com/photos/18137869/pexels-photo-18137869/free-photo-of-chinese-pavilion-in-by-pond.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
    title: "Chinese Pavilion in by Pond",
  },
  // {
  //   src: "https://images.pexels.com/videos/15394287/bosphorus-flying-birds-free-videos-jetty-15394287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   title: "",
  // },
  // {
  //   "src": "https://images.pexels.com/photos/18607904/pexels-photo-18607904/free-photo-of-vineta-auf-dem-stormthaler-see.png?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Vineta auf dem Störmthaler See"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/18418642/pexels-photo-18418642/free-photo-of-budding-water-lily.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": ""
  // },
  // {
  //   "src": "https://images.pexels.com/photos/18245637/pexels-photo-18245637/free-photo-of-a-hiker-with-a-backpack-walks-at-sunset.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "a hiker with a backpack walks at sunset"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/2907/car-mustang.jpg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Blue Ford Mustang Coupe"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/13470682/pexels-photo-13470682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Curved Road Up the Mountain "
  // },
  // {
  //   "src": "https://images.pexels.com/photos/18263099/pexels-photo-18263099/free-photo-of-a-car-in-the-forest-under-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "lonely car at night into the forest "
  // },
  // {
  //   "src": "https://images.pexels.com/photos/6979423/pexels-photo-6979423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Old church with arched details"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/10433031/pexels-photo-10433031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Water Droplets on Glass Panel"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/8869973/pexels-photo-8869973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Curly Woman in the Grass Field Posing"
  // },
  // {
  //   "src": "https://images.pexels.com/photos/18492598/pexels-photo-18492598/free-photo-of-light-city-landscape-summer.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": ""
  // },
  // {
  //   "src": "https://images.pexels.com/photos/17801656/pexels-photo-17801656/free-photo-of-coffe-break.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
  //   "title": "Coffe Break"
  // }
];

const experience = [
  {
    duration: "2017 — Present",
    title: "OH.STUDIO",
    role: "Freelance Designer",
    type: "Director",
  },
  {
    duration: "2021 — Present",
    title: "Friendly Studio",
    role: "Lead Product Designer",
    type: "Freelance",
  },
  {
    duration: "2022",
    title: "R/GA",
    role: "Senior Visual Designer",
    type: "Freelance",
  },
  {
    duration: "2021",
    title: "R/GA",
    role: "Senior Visual Designer",
    type: "Freelance",
  },
  {
    duration: "2021",
    title: "AKQA",
    role: "Senior Designer",
    type: "Freelance",
  },
  {
    duration: "2020",
    title: "AKQA",
    role: "Senior Designer",
    type: "Freelance",
  },
  {
    duration: "2019",
    title: "UI Centric",
    role: "Senior Product Designer",
    type: "Freelance",
  },
  {
    duration: "2017",
    title: "Agency TK",
    role: "Senior Digital Designer",
    type: "Permanent",
  },
  {
    duration: "2012",
    title: "Agency TK",
    role: "Digital Designer",
    type: "Permanent",
  },
  {
    duration: "2009",
    title: "Next Level",
    role: "Digital Designer",
    type: "Permanent",
  },
  {
    duration: "2008",
    title: "Next Level",
    role: "Junior Digital Designer",
    type: "Permanent",
  },
];

const clients = [
  "https://framerusercontent.com/images/nXLdc1LsU15dk6AODEpMgByLDw.png?scale-down-to=512",
  "https://framerusercontent.com/images/roAzNhDBr8shtI8EFOALn1BTMO0.png?scale-down-to=512",
  "https://framerusercontent.com/images/vzRTkTnoLuK5zvS2serU2qCb4.png?scale-down-to=512",
  "https://framerusercontent.com/images/DFu6Bri5cuYIVyEC6OTxtuZC6w.png?scale-down-to=512",
  "https://framerusercontent.com/images/IDRNrtKWyB6T6o3dY4mUDqueC0.png?scale-down-to=512",
  "https://framerusercontent.com/images/X5Lg2eapOCFOhSpAFsZNTW9BlY.png?scale-down-to=512",
  "https://framerusercontent.com/images/PCQIe7uLIcRFBG5bKFWCX3niBek.png?scale-down-to=512",
  "https://framerusercontent.com/images/8w3YBn3xA3P0u5w43PGhPo1jpYA.png?scale-down-to=512",
  "https://framerusercontent.com/images/LZKUjkgnsVfFzQQN8ia8Vsx05Gc.png?scale-down-to=512",
  "https://framerusercontent.com/images/0SV0avmvDSqmXrnokG46LzlhDY.png?scale-down-to=512",
  "https://framerusercontent.com/images/OcncVh5JYd0fPDgeMql6apXe7eU.png?scale-down-to=512",
  "https://framerusercontent.com/images/370YdQkcdjKWJ5KnsDqECHExB3c.png?scale-down-to=512",
];
export { products, experience, clients };
