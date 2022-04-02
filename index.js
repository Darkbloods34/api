const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`ok`)
)

app.get('/list', (req, res) => {
    res.status(200).send(
        {
            "request_hash": "request:top:58399c95e55435d6ccef63eef7ce609974e4f2d5",
"request_cached": true,
"request_cache_expiry": 117067,
"API_DEPRECATION": true,
"API_DEPRECATION_DATE": "2022-02-10T16:02:50+00:00",
"API_DEPRECATION_INFO": "https://bit.ly/jikan-v3-deprecation",
        "top": [

{
 "mal_id": 1,
    "title": "Shingeki no Kyojin",
 "type": "ALL"
},
{
 "mal_id": 2,
    "title": "Fullmetal Alchemist: Brotherhood",
 "type": "ALL"
},
{
 "mal_id": 3,
    "title": "One Punch Man",
 "type": "ALL"
},
{
 "mal_id": 4,
    "title": "Sword Art Online",
 "type": "ALL"
},
{
 "mal_id": 5,
    "title": "Boku no Hero Academia",
 "type": "ALL"
},
{
 "mal_id": 6,
    "title": "Tokyo Ghoul",
 "type": "ALL"
},
{
 "mal_id": 7,
    "title": "Naruto",
 "type": "ALL"
},
{
 "mal_id": 8,
    "title": "Kimetsu no Yaiba",
 "type": "ALL"
},
{
 "mal_id": 9,
    "title": "Hunter x Hunter (2011)",
 "type": "ALL"
},
{
 "mal_id": 10,
    "title": "Shingeki no Kyojin Season 2",
 "type": "ALL"
},
{
 "mal_id": 11,
    "title": "Boku no Hero Academia 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 12,
    "title": "Naruto: Shippuuden",
 "type": "ALL"
},
{
 "mal_id": 13,
    "title": "Code Geass: Hangyaku no Lelouch",
 "type": "ALL"
},
{
 "mal_id": 14,
    "title": "Noragami",
 "type": "ALL"
},
{
 "mal_id": 15,
    "title": "Shingeki no Kyojin Season 3",
 "type": "ALL"
},
{
 "mal_id": 16,
    "title": "Boku no Hero Academia 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 17,
    "title": "One Piece",
 "type": "ALL"
},
{
 "mal_id": 18,
    "title": "Akame ga Kill!",
 "type": "ALL"
},
{
 "mal_id": 19,
    "title": "Mirai Nikki (TV)",
 "type": "ALL"
},
{
 "mal_id": 20,
    "title": "Nanatsu no Taizai",
 "type": "ALL"
},
{
 "mal_id": 21,
    "title": "Shingeki no Kyojin Season 3 Part 2",
 "type": "ALL"
},
{
 "mal_id": 22,
    "title": "Jujutsu Kaisen (TV)",
 "type": "ALL"
},
{
 "mal_id": 23,
    "title": "Sword Art Online II",
 "type": "ALL"
},
{
 "mal_id": 24,
    "title": "Ao no Exorcist",
 "type": "ALL"
},
{
 "mal_id": 25,
    "title": "Ansatsu Kyoushitsu",
 "type": "ALL"
},
{
 "mal_id": 26,
    "title": "Mob Psycho 100",
 "type": "ALL"
},
{
 "mal_id": 27,
    "title": "Bleach",
 "type": "ALL"
},
{
 "mal_id": 28,
    "title": "Kiseijuu: Sei no Kakuritsu",
 "type": "ALL"
},
{
 "mal_id": 29,
    "title": "Cowboy Bebop",
 "type": "ALL"
},
{
 "mal_id": 30,
    "title": "Fairy Tail",
 "type": "ALL"
},
{
 "mal_id": 31,
    "title": "Tokyo Ghoul √A",
 "type": "ALL"
},
{
 "mal_id": 32,
    "title": "Code Geass: Hangyaku no Lelouch R2",
 "type": "ALL"
},
{
 "mal_id": 33,
    "title": "Kill la Kill",
 "type": "ALL"
},
{
 "mal_id": 34,
    "title": "Shingeki no Kyojin: The Final Season",
 "type": "ALL"
},
{
 "mal_id": 35,
    "title": "Neon Genesis Evangelion",
 "type": "ALL"
},
{
 "mal_id": 36,
    "title": "Soul Eater",
 "type": "ALL"
},
{
 "mal_id": 37,
    "title": "Psycho-Pass",
 "type": "ALL"
},
{
 "mal_id": 38,
    "title": "Tengen Toppa Gurren Lagann",
 "type": "ALL"
},
{
 "mal_id": 39,
    "title": "Boku no Hero Academia 4th Season",
 "type": "ALL"
},
{
 "mal_id": 40,
    "title": "Darling in the FranXX",
 "type": "ALL"
},
{
 "mal_id": 41,
    "title": "One Punch Man 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 42,
    "title": "JoJo no Kimyou na Bouken (TV)",
 "type": "ALL"
},
{
 "mal_id": 43,
    "title": "Elfen Lied",
 "type": "ALL"
},
{
 "mal_id": 44,
    "title": "Fullmetal Alchemist",
 "type": "ALL"
},
{
 "mal_id": 45,
    "title": "Fate/Zero",
 "type": "ALL"
},
{
 "mal_id": 46,
    "title": "Highschool of the Dead",
 "type": "ALL"
},
{
 "mal_id": 47,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
 "type": "ALL"
},
{
 "mal_id": 48,
    "title": "Overlord",
 "type": "ALL"
},
{
 "mal_id": 49,
    "title": "Black Clover",
 "type": "ALL"
},
{
 "mal_id": 50,
    "title": "Noragami Aragoto",
 "type": "ALL"
},
{
 "mal_id": 51,
    "title": "Tate no Yuusha no Nariagari",
 "type": "ALL"
},
{
 "mal_id": 52,
    "title": "Durarara!!",
 "type": "ALL"
},
{
 "mal_id": 53,
    "title": "Ansatsu Kyoushitsu 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 54,
    "title": "Mob Psycho 100 II",
 "type": "ALL"
},
{
 "mal_id": 55,
    "title": "Owari no Seraph",
 "type": "ALL"
},
{
 "mal_id": 56,
    "title": "Tensei shitara Slime Datta Ken",
 "type": "ALL"
},
{
 "mal_id": 57,
    "title": "Bungou Stray Dogs",
 "type": "ALL"
},
{
 "mal_id": 58,
    "title": "Deadman Wonderland",
 "type": "ALL"
},
{
 "mal_id": 59,
    "title": "Guilty Crown",
 "type": "ALL"
},
{
 "mal_id": 60,
    "title": "Kimetsu no Yaiba Movie: Mugen Ressha-hen",
 "type": "ALL"
},
{
 "mal_id": 61,
    "title": "Samurai Champloo",
 "type": "ALL"
},
{
 "mal_id": 62,
    "title": "Dragon Ball Z",
 "type": "ALL"
},
{
 "mal_id": 63,
    "title": "Mononoke Hime",
 "type": "ALL"
},
{
 "mal_id": 64,
    "title": "Vinland Saga",
 "type": "ALL"
},
{
 "mal_id": 65,
    "title": "Enen no Shouboutai",
 "type": "ALL"
},
{
 "mal_id": 66,
    "title": "Kuroshitsuji",
 "type": "ALL"
},
{
 "mal_id": 67,
    "title": "Log Horizon",
 "type": "ALL"
},
{
 "mal_id": 68,
    "title": "JoJo no Kimyou na Bouken Part 3: Stardust Crusaders",
 "type": "ALL"
},
{
 "mal_id": 69,
    "title": "Fate/Zero 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 70,
    "title": "Tokyo Ghoul:re",
 "type": "ALL"
},
{
 "mal_id": 71,
    "title": "Nanatsu no Taizai: Imashime no Fukkatsu",
 "type": "ALL"
},
{
 "mal_id": 72,
    "title": "Dororo",
 "type": "ALL"
},
{
 "mal_id": 73,
    "title": "Devilman: Crybaby",
 "type": "ALL"
},
{
 "mal_id": 74,
    "title": "Mahouka Koukou no Rettousei",
 "type": "ALL"
},
{
 "mal_id": 75,
    "title": "Fate/stay night: Unlimited Blade Works",
 "type": "ALL"
},
{
 "mal_id": 76,
    "title": "Gintama",
 "type": "ALL"
},
{
 "mal_id": 77,
    "title": "Magi: The Labyrinth of Magic",
 "type": "ALL"
},
{
 "mal_id": 78,
    "title": "Goblin Slayer",
 "type": "ALL"
},
{
 "mal_id": 79,
    "title": "JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai",
 "type": "ALL"
},
{
 "mal_id": 80,
    "title": "JoJo no Kimyou na Bouken Part 3: Stardust Crusaders 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 81,
    "title": "Tokyo Revengers",
 "type": "ALL"
},
{
 "mal_id": 82,
    "title": "Sword Art Online: Alicization",
 "type": "ALL"
},
{
 "mal_id": 83,
    "title": "Boku no Hero Academia 5th Season",
 "type": "ALL"
},
{
 "mal_id": 84,
    "title": "Fairy Tail (2014)",
 "type": "ALL"
},
{
 "mal_id": 85,
    "title": "Black Lagoon",
 "type": "ALL"
},
{
 "mal_id": 86,
    "title": "Fate/stay night",
 "type": "ALL"
},
{
 "mal_id": 87,
    "title": "Darker than Black: Kuro no Keiyakusha",
 "type": "ALL"
},
{
 "mal_id": 88,
    "title": "Black Bullet",
 "type": "ALL"
},
{
 "mal_id": 89,
    "title": "Overlord II",
 "type": "ALL"
},
{
 "mal_id": 90,
    "title": "Baccano!",
 "type": "ALL"
},
{
 "mal_id": 91,
    "title": "High School DxD New",
 "type": "ALL"
},
{
 "mal_id": 92,
    "title": "Rakudai Kishi no Cavalry",
 "type": "ALL"
},
{
 "mal_id": 93,
    "title": "JoJo no Kimyou na Bouken Part 5: Ougon no Kaze",
 "type": "ALL"
},
{
 "mal_id": 94,
    "title": "Hellsing Ultimate",
 "type": "ALL"
},
{
 "mal_id": 95,
    "title": "Btooom!",
 "type": "ALL"
},
{
 "mal_id": 96,
    "title": "Kimetsu no Yaiba: Yuukaku-hen",
 "type": "ALL"
},
{
 "mal_id": 97,
    "title": "Youjo Senki",
 "type": "ALL"
},
{
 "mal_id": 98,
    "title": "Kekkai Sensen",
 "type": "ALL"
},
{
 "mal_id": 99,
    "title": "Shingeki no Kyojin: The Final Season Part 2",
 "type": "ALL"
},
{
 "mal_id": 100,
    "title": "Magi: The Kingdom of Magic",
 "type": "ALL"
},
{
 "mal_id": 101,
    "title": "Fate/stay night: Unlimited Blade Works 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 102,
    "title": "Kami no Tou",
 "type": "ALL"
},
{
 "mal_id": 103,
    "title": "Zero no Tsukaima",
 "type": "ALL"
},
{
 "mal_id": 104,
    "title": "Trinity Seven",
 "type": "ALL"
},
{
 "mal_id": 105,
    "title": "The God of High School",
 "type": "ALL"
},
{
 "mal_id": 106,
    "title": "Akatsuki no Yona",
 "type": "ALL"
},
{
 "mal_id": 107,
    "title": "Boruto: Naruto Next Generations",
 "type": "ALL"
},
{
 "mal_id": 108,
    "title": "Toaru Majutsu no Index",
 "type": "ALL"
},
{
 "mal_id": 109,
    "title": "Overlord III",
 "type": "ALL"
},
{
 "mal_id": 110,
    "title": "FLCL",
 "type": "ALL"
},
{
 "mal_id": 111,
    "title": "Koutetsujou no Kabaneri",
 "type": "ALL"
},
{
 "mal_id": 112,
    "title": "Akira",
 "type": "ALL"
},
{
 "mal_id": 113,
    "title": "High School DxD BorN",
 "type": "ALL"
},
{
 "mal_id": 114,
    "title": "Tokyo Ghoul:re 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 115,
    "title": "Gate: Jieitai Kanochi nite, Kaku Tatakaeri",
 "type": "ALL"
},
{
 "mal_id": 116,
    "title": "Tensei shitara Slime Datta Ken 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 117,
    "title": "Dragon Ball Super",
 "type": "ALL"
},
{
 "mal_id": 118,
    "title": "InuYasha",
 "type": "ALL"
},
{
 "mal_id": 119,
    "title": "K",
 "type": "ALL"
},
{
 "mal_id": 120,
    "title": "Banana Fish",
 "type": "ALL"
},
{
 "mal_id": 121,
    "title": "Bungou Stray Dogs 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 122,
    "title": "Owari no Seraph: Nagoya Kessen-hen",
 "type": "ALL"
},
{
 "mal_id": 123,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II",
 "type": "ALL"
},
{
 "mal_id": 124,
    "title": "Ao no Exorcist: Kyoto Fujouou-hen",
 "type": "ALL"
},
{
 "mal_id": 125,
    "title": "Accel World",
 "type": "ALL"
},
{
 "mal_id": 126,
    "title": "Trigun",
 "type": "ALL"
},
{
 "mal_id": 127,
    "title": "Hai to Gensou no Grimgar",
 "type": "ALL"
},
{
 "mal_id": 128,
    "title": "Hellsing",
 "type": "ALL"
},
{
 "mal_id": 129,
    "title": "Sword Art Online Movie: Ordinal Scale",
 "type": "ALL"
},
{
 "mal_id": 130,
    "title": "D.Gray-man",
 "type": "ALL"
},
{
 "mal_id": 131,
    "title": "Nanatsu no Taizai: Seisen no Shirushi",
 "type": "ALL"
},
{
 "mal_id": 132,
    "title": "Boku no Hero Academia the Movie 1: Futari no Hero",
 "type": "ALL"
},
{
 "mal_id": 133,
    "title": "Blood Lad",
 "type": "ALL"
},
{
 "mal_id": 134,
    "title": "Sword Art Online: Alicization - War of Underworld",
 "type": "ALL"
},
{
 "mal_id": 135,
    "title": "Rokudenashi Majutsu Koushi to Akashic Records",
 "type": "ALL"
},
{
 "mal_id": 136,
    "title": "Nanatsu no Taizai: Kamigami no Gekirin",
 "type": "ALL"
},
{
 "mal_id": 137,
    "title": "91 Days",
 "type": "ALL"
},
{
 "mal_id": 138,
    "title": "Claymore",
 "type": "ALL"
},
{
 "mal_id": 139,
    "title": "Shinmai Maou no Testament",
 "type": "ALL"
},
{
 "mal_id": 140,
    "title": "Psycho-Pass 2",
 "type": "ALL"
},
{
 "mal_id": 141,
    "title": "Yuu☆Yuu☆Hakusho",
 "type": "ALL"
},
{
 "mal_id": 142,
    "title": "Gakusen Toshi Asterisk",
 "type": "ALL"
},
{
 "mal_id": 143,
    "title": "Enen no Shouboutai: Ni no Shou",
 "type": "ALL"
},
{
 "mal_id": 144,
    "title": "Kore wa Zombie Desu ka?",
 "type": "ALL"
},
{
 "mal_id": 145,
    "title": "IS: Infinite Stratos",
 "type": "ALL"
},
{
 "mal_id": 146,
    "title": "Strike the Blood",
 "type": "ALL"
},
{
 "mal_id": 147,
    "title": "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou",
 "type": "ALL"
},
{
 "mal_id": 148,
    "title": "Rokka no Yuusha",
 "type": "ALL"
},
{
 "mal_id": 149,
    "title": "Dragon Ball GT",
 "type": "ALL"
},
{
 "mal_id": 150,
    "title": "Pokemon",
 "type": "ALL"
},
{
 "mal_id": 151,
    "title": "Log Horizon 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 152,
    "title": "Inuyashiki",
 "type": "ALL"
},
{
 "mal_id": 153,
    "title": "Zetsuen no Tempest",
 "type": "ALL"
},
{
 "mal_id": 154,
    "title": "Toaru Kagaku no Railgun",
 "type": "ALL"
},
{
 "mal_id": 155,
    "title": "Koukaku Kidoutai",
 "type": "ALL"
},
{
 "mal_id": 156,
    "title": "Arifureta Shokugyou de Sekai Saikyou",
 "type": "ALL"
},
{
 "mal_id": 157,
    "title": "Beelzebub",
 "type": "ALL"
},
{
 "mal_id": 158,
    "title": "Sword Art Online Alternative: Gun Gale Online",
 "type": "ALL"
},
{
 "mal_id": 159,
    "title": "Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?",
 "type": "ALL"
},
{
 "mal_id": 160,
    "title": "Ajin",
 "type": "ALL"
},
{
 "mal_id": 161,
    "title": "Kenpuu Denki Berserk",
 "type": "ALL"
},
{
 "mal_id": 162,
    "title": "Gintama°",
 "type": "ALL"
},
{
 "mal_id": 163,
    "title": "Higashi no Eden",
 "type": "ALL"
},
{
 "mal_id": 164,
    "title": "Katekyo Hitman Reborn!",
 "type": "ALL"
},
{
 "mal_id": 165,
    "title": "Hunter x Hunter",
 "type": "ALL"
},
{
 "mal_id": 166,
    "title": "Kuroshitsuji II",
 "type": "ALL"
},
{
 "mal_id": 167,
    "title": "Great Pretender",
 "type": "ALL"
},
{
 "mal_id": 168,
    "title": "Tensei shitara Slime Datta Ken 2nd Season Part 2",
 "type": "ALL"
},
{
 "mal_id": 169,
    "title": "Gangsta.",
 "type": "ALL"
},
{
 "mal_id": 170,
    "title": "Katanagatari",
 "type": "ALL"
},
{
 "mal_id": 171,
    "title": "Shakugan no Shana",
 "type": "ALL"
},
{
 "mal_id": 172,
    "title": "The Last: Naruto the Movie",
 "type": "ALL"
},
{
 "mal_id": 173,
    "title": "Absolute Duo",
 "type": "ALL"
},
{
 "mal_id": 174,
    "title": "God Eater",
 "type": "ALL"
},
{
 "mal_id": 175,
    "title": "Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru",
 "type": "ALL"
},
{
 "mal_id": 176,
    "title": "86",
 "type": "ALL"
},
{
 "mal_id": 177,
    "title": "Gate: Jieitai Kanochi nite, Kaku Tatakaeri 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 178,
    "title": "Drifters",
 "type": "ALL"
},
{
 "mal_id": 179,
    "title": "Sword Art Online: Alicization - War of Underworld 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 180,
    "title": "Evangelion: 1.0 You Are (Not) Alone",
 "type": "ALL"
},
{
 "mal_id": 181,
    "title": "Musaigen no Phantom World",
 "type": "ALL"
},
{
 "mal_id": 182,
    "title": "Aldnoah.Zero",
 "type": "ALL"
},
{
 "mal_id": 183,
    "title": "Bungou Stray Dogs 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 184,
    "title": "Kenja no Mago",
 "type": "ALL"
},
{
 "mal_id": 185,
    "title": "Ichiban Ushiro no Daimaou",
 "type": "ALL"
},
{
 "mal_id": 186,
    "title": "Zero no Tsukaima: Futatsuki no Kishi",
 "type": "ALL"
},
{
 "mal_id": 187,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III",
 "type": "ALL"
},
{
 "mal_id": 188,
    "title": "Gintama'",
 "type": "ALL"
},
{
 "mal_id": 189,
    "title": "Evangelion: 2.0 You Can (Not) Advance",
 "type": "ALL"
},
{
 "mal_id": 190,
    "title": "Full Metal Panic!",
 "type": "ALL"
},
{
 "mal_id": 191,
    "title": "Sousei no Onmyouji",
 "type": "ALL"
},
{
 "mal_id": 192,
    "title": "Boku no Hero Academia the Movie 2: Heroes:Rising",
 "type": "ALL"
},
{
 "mal_id": 193,
    "title": "Black Lagoon: The Second Barrage",
 "type": "ALL"
},
{
 "mal_id": 194,
    "title": "Megalo Box",
 "type": "ALL"
},
{
 "mal_id": 195,
    "title": "Darwin's Game",
 "type": "ALL"
},
{
 "mal_id": 196,
    "title": "Rurouni Kenshin: Meiji Kenkaku Romantan",
 "type": "ALL"
},
{
 "mal_id": 197,
    "title": "Tate no Yuusha no Nariagari Season 2",
 "type": "ALL"
},
{
 "mal_id": 198,
    "title": "Tokyo Ravens",
 "type": "ALL"
},
{
 "mal_id": 199,
    "title": "Durarara!!x2 Shou",
 "type": "ALL"
},
{
 "mal_id": 200,
    "title": "Shingeki no Kyojin: Kuinaki Sentaku",
 "type": "ALL"
},
{
 "mal_id": 201,
    "title": "Re:Creators",
 "type": "ALL"
},
{
 "mal_id": 202,
    "title": "Magi: Sinbad no Bouken (TV)",
 "type": "ALL"
},
{
 "mal_id": 203,
    "title": "Fairy Tail: Final Series",
 "type": "ALL"
},
{
 "mal_id": 204,
    "title": "Dorohedoro",
 "type": "ALL"
},
{
 "mal_id": 205,
    "title": "High School DxD Hero",
 "type": "ALL"
},
{
 "mal_id": 206,
    "title": "Kaze no Stigma",
 "type": "ALL"
},
{
 "mal_id": 207,
    "title": "Fate/Apocrypha",
 "type": "ALL"
},
{
 "mal_id": 208,
    "title": "Toaru Majutsu no Index II",
 "type": "ALL"
},
{
 "mal_id": 209,
    "title": "Zero no Tsukaima: Princesses no Rondo",
 "type": "ALL"
},
{
 "mal_id": 210,
    "title": "Boruto: Naruto the Movie",
 "type": "ALL"
},
{
 "mal_id": 211,
    "title": "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.",
 "type": "ALL"
},
{
 "mal_id": 212,
    "title": "Vivy: Fluorite Eye's Song",
 "type": "ALL"
},
{
 "mal_id": 213,
    "title": "Gleipnir",
 "type": "ALL"
},
{
 "mal_id": 214,
    "title": "Shingeki no Kyojin OVA",
 "type": "ALL"
},
{
 "mal_id": 215,
    "title": "Kizumonogatari III: Reiketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 216,
    "title": "No.6",
 "type": "ALL"
},
{
 "mal_id": 217,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Gaiden: Sword Oratoria",
 "type": "ALL"
},
{
 "mal_id": 218,
    "title": "Darker than Black: Ryuusei no Gemini",
 "type": "ALL"
},
{
 "mal_id": 219,
    "title": "Kizumonogatari II: Nekketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 220,
    "title": "Kara no Kyoukai 1: Fukan Fuukei",
 "type": "ALL"
},
{
 "mal_id": 221,
    "title": "Houseki no Kuni (TV)",
 "type": "ALL"
},
{
 "mal_id": 222,
    "title": "Takt Op. Destiny",
 "type": "ALL"
},
{
 "mal_id": 223,
    "title": "Kimetsu no Yaiba: Mugen Ressha-hen",
 "type": "ALL"
},
{
 "mal_id": 224,
    "title": "Fate/stay night Movie: Heaven's Feel - I. Presage Flower",
 "type": "ALL"
},
{
 "mal_id": 225,
    "title": "Kekkai Sensen & Beyond",
 "type": "ALL"
},
{
 "mal_id": 226,
    "title": "Hagure Yuusha no Aesthetica",
 "type": "ALL"
},
{
 "mal_id": 227,
    "title": "Shingeki no Bahamut: Genesis",
 "type": "ALL"
},
{
 "mal_id": 228,
    "title": "Sekirei",
 "type": "ALL"
},
{
 "mal_id": 229,
    "title": "Evangelion: 3.0 You Can (Not) Redo",
 "type": "ALL"
},
{
 "mal_id": 230,
    "title": "Digimon Adventure",
 "type": "ALL"
},
{
 "mal_id": 231,
    "title": "Chainsaw Man",
 "type": "ALL"
},
{
 "mal_id": 232,
    "title": "Koukaku Kidoutai: Stand Alone Complex",
 "type": "ALL"
},
{
 "mal_id": 233,
    "title": "Durarara!!x2 Ten",
 "type": "ALL"
},
{
 "mal_id": 234,
    "title": "Keijo!!!!!!!!",
 "type": "ALL"
},
{
 "mal_id": 235,
    "title": "Kuroshitsuji: Book of Circus",
 "type": "ALL"
},
{
 "mal_id": 236,
    "title": "World Trigger",
 "type": "ALL"
},
{
 "mal_id": 237,
    "title": "IS: Infinite Stratos 2",
 "type": "ALL"
},
{
 "mal_id": 238,
    "title": "Kore wa Zombie Desu ka? of the Dead",
 "type": "ALL"
},
{
 "mal_id": 239,
    "title": "Yu☆Gi☆Oh! Duel Monsters",
 "type": "ALL"
},
{
 "mal_id": 240,
    "title": "Blood+",
 "type": "ALL"
},
{
 "mal_id": 241,
    "title": "Hitsugi no Chaika",
 "type": "ALL"
},
{
 "mal_id": 242,
    "title": "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
 "type": "ALL"
},
{
 "mal_id": 243,
    "title": "Toaru Kagaku no Railgun S",
 "type": "ALL"
},
{
 "mal_id": 244,
    "title": "Saijaku Muhai no Bahamut",
 "type": "ALL"
},
{
 "mal_id": 245,
    "title": "Hidan no Aria",
 "type": "ALL"
},
{
 "mal_id": 246,
    "title": "Shinmai Maou no Testament Burst",
 "type": "ALL"
},
{
 "mal_id": 247,
    "title": "Jujutsu Kaisen 0 Movie",
 "type": "ALL"
},
{
 "mal_id": 248,
    "title": "Durarara!!x2 Ketsu",
 "type": "ALL"
},
{
 "mal_id": 249,
    "title": "Arslan Senki (TV)",
 "type": "ALL"
},
{
 "mal_id": 250,
    "title": "Panty & Stocking with Garterbelt",
 "type": "ALL"
},
{
 "mal_id": 251,
    "title": "Akudama Drive",
 "type": "ALL"
},
{
 "mal_id": 252,
    "title": "Shaman King",
 "type": "ALL"
},
{
 "mal_id": 253,
    "title": "Dragon Ball Kai",
 "type": "ALL"
},
{
 "mal_id": 254,
    "title": "Nanatsu no Taizai: Fundo no Shinpan",
 "type": "ALL"
},
{
 "mal_id": 255,
    "title": "Busou Shoujo Machiavellianism",
 "type": "ALL"
},
{
 "mal_id": 256,
    "title": "Seireitsukai no Blade Dance",
 "type": "ALL"
},
{
 "mal_id": 257,
    "title": "Black★Rock Shooter (TV)",
 "type": "ALL"
},
{
 "mal_id": 258,
    "title": "Quanzhi Gaoshou",
 "type": "ALL"
},
{
 "mal_id": 259,
    "title": "Afro Samurai",
 "type": "ALL"
},
{
 "mal_id": 260,
    "title": "Cowboy Bebop: Tengoku no Tobira",
 "type": "ALL"
},
{
 "mal_id": 261,
    "title": "Hundred",
 "type": "ALL"
},
{
 "mal_id": 262,
    "title": "Plunderer",
 "type": "ALL"
},
{
 "mal_id": 263,
    "title": "Air Gear",
 "type": "ALL"
},
{
 "mal_id": 264,
    "title": "Gantz",
 "type": "ALL"
},
{
 "mal_id": 265,
    "title": "Kumo Desu ga, Nani ka?",
 "type": "ALL"
},
{
 "mal_id": 266,
    "title": "Redline",
 "type": "ALL"
},
{
 "mal_id": 267,
    "title": "Blood-C",
 "type": "ALL"
},
{
 "mal_id": 268,
    "title": "Danganronpa 3: The End of Kibougamine Gakuen - Mirai-hen",
 "type": "ALL"
},
{
 "mal_id": 269,
    "title": "Jormungand",
 "type": "ALL"
},
{
 "mal_id": 270,
    "title": "Fate/stay night Movie: Heaven's Feel - II. Lost Butterfly",
 "type": "ALL"
},
{
 "mal_id": 271,
    "title": "Berserk",
 "type": "ALL"
},
{
 "mal_id": 272,
    "title": "JoJo no Kimyou na Bouken Part 6: Stone Ocean",
 "type": "ALL"
},
{
 "mal_id": 273,
    "title": "Suisei no Gargantia",
 "type": "ALL"
},
{
 "mal_id": 274,
    "title": "Phantom: Requiem for the Phantom",
 "type": "ALL"
},
{
 "mal_id": 275,
    "title": "Dragon Ball Super: Broly",
 "type": "ALL"
},
{
 "mal_id": 276,
    "title": "Kishuku Gakkou no Juliet",
 "type": "ALL"
},
{
 "mal_id": 277,
    "title": "BNA",
 "type": "ALL"
},
{
 "mal_id": 278,
    "title": "B: The Beginning",
 "type": "ALL"
},
{
 "mal_id": 279,
    "title": "Wolf's Rain",
 "type": "ALL"
},
{
 "mal_id": 280,
    "title": "Ben-To",
 "type": "ALL"
},
{
 "mal_id": 281,
    "title": "Baki",
 "type": "ALL"
},
{
 "mal_id": 282,
    "title": "K: Return of Kings",
 "type": "ALL"
},
{
 "mal_id": 283,
    "title": "Code:Breaker",
 "type": "ALL"
},
{
 "mal_id": 284,
    "title": "Tales of Zestiria the Cross",
 "type": "ALL"
},
{
 "mal_id": 285,
    "title": "Initial D First Stage",
 "type": "ALL"
},
{
 "mal_id": 286,
    "title": "Stranger: Mukou Hadan",
 "type": "ALL"
},
{
 "mal_id": 287,
    "title": "Machine-Doll wa Kizutsukanai",
 "type": "ALL"
},
{
 "mal_id": 288,
    "title": "Golden Kamuy",
 "type": "ALL"
},
{
 "mal_id": 289,
    "title": "Seikon no Qwaser",
 "type": "ALL"
},
{
 "mal_id": 290,
    "title": "Freezing",
 "type": "ALL"
},
{
 "mal_id": 291,
    "title": "Kemono Jihen",
 "type": "ALL"
},
{
 "mal_id": 292,
    "title": "Naruto: Shippuuden Movie 6 - Road to Ninja",
 "type": "ALL"
},
{
 "mal_id": 293,
    "title": "Shakugan no Shana II (Second)",
 "type": "ALL"
},
{
 "mal_id": 294,
    "title": "Aldnoah.Zero 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 295,
    "title": "Nanbaka",
 "type": "ALL"
},
{
 "mal_id": 296,
    "title": "Witch Craft Works",
 "type": "ALL"
},
{
 "mal_id": 297,
    "title": "Ore dake Haireru Kakushi Dungeon",
 "type": "ALL"
},
{
 "mal_id": 298,
    "title": "Sentouin, Hakenshimasu!",
 "type": "ALL"
},
{
 "mal_id": 299,
    "title": "One Punch Man: Road to Hero",
 "type": "ALL"
},
{
 "mal_id": 300,
    "title": "Mahouka Koukou no Rettousei: Raihousha-hen",
 "type": "ALL"
},
{
 "mal_id": 301,
    "title": "Fate/stay night: Unlimited Blade Works Prologue",
 "type": "ALL"
},
{
 "mal_id": 302,
    "title": "Nejimaki Seirei Senki: Tenkyou no Alderamin",
 "type": "ALL"
},
{
 "mal_id": 303,
    "title": "Sword Art Online: Extra Edition",
 "type": "ALL"
},
{
 "mal_id": 304,
    "title": "Devil May Cry",
 "type": "ALL"
},
{
 "mal_id": 305,
    "title": "Danganronpa 3: The End of Kibougamine Gakuen - Zetsubou-hen",
 "type": "ALL"
},
{
 "mal_id": 306,
    "title": "C: The Money of Soul and Possibility Control",
 "type": "ALL"
},
{
 "mal_id": 307,
    "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
 "type": "ALL"
},
{
 "mal_id": 308,
    "title": "Taimadou Gakuen 35 Shiken Shoutai",
 "type": "ALL"
},
{
 "mal_id": 309,
    "title": "Dimension W",
 "type": "ALL"
},
{
 "mal_id": 310,
    "title": "One Punch Man Specials",
 "type": "ALL"
},
{
 "mal_id": 311,
    "title": "Seiken Tsukai no World Break",
 "type": "ALL"
},
{
 "mal_id": 312,
    "title": "Gintama': Enchousen",
 "type": "ALL"
},
{
 "mal_id": 313,
    "title": "Full Metal Panic? Fumoffu",
 "type": "ALL"
},
{
 "mal_id": 314,
    "title": "Shijou Saikyou no Deshi Kenichi",
 "type": "ALL"
},
{
 "mal_id": 315,
    "title": "Densetsu no Yuusha no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 316,
    "title": "Code Geass: Fukkatsu no Lelouch",
 "type": "ALL"
},
{
 "mal_id": 317,
    "title": "86 Part 2",
 "type": "ALL"
},
{
 "mal_id": 318,
    "title": "Kino no Tabi: The Beautiful World",
 "type": "ALL"
},
{
 "mal_id": 319,
    "title": "Genjitsu Shugi Yuusha no Oukoku Saikenki",
 "type": "ALL"
},
{
 "mal_id": 320,
    "title": "Girls & Panzer",
 "type": "ALL"
},
{
 "mal_id": 321,
    "title": "Ajin 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 322,
    "title": "Grancrest Senki",
 "type": "ALL"
},
{
 "mal_id": 323,
    "title": "Fate/stay night Movie: Heaven's Feel - III. Spring Song",
 "type": "ALL"
},
{
 "mal_id": 324,
    "title": "Kämpfer",
 "type": "ALL"
},
{
 "mal_id": 325,
    "title": "Gintama.",
 "type": "ALL"
},
{
 "mal_id": 326,
    "title": "Deca-Dence",
 "type": "ALL"
},
{
 "mal_id": 327,
    "title": "Naruto: Shippuuden Movie 1",
 "type": "ALL"
},
{
 "mal_id": 328,
    "title": "Juuni Taisen",
 "type": "ALL"
},
{
 "mal_id": 329,
    "title": "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
 "type": "ALL"
},
{
 "mal_id": 330,
    "title": "Isekai Cheat Magician",
 "type": "ALL"
},
{
 "mal_id": 331,
    "title": "Nanatsu no Taizai Movie 1: Tenkuu no Torawarebito",
 "type": "ALL"
},
{
 "mal_id": 332,
    "title": "Shingeki no Kyojin: Lost Girls",
 "type": "ALL"
},
{
 "mal_id": 333,
    "title": "SSSS.Gridman",
 "type": "ALL"
},
{
 "mal_id": 334,
    "title": "Tsuki ga Michibiku Isekai Douchuu",
 "type": "ALL"
},
{
 "mal_id": 335,
    "title": "Maken-Ki!",
 "type": "ALL"
},
{
 "mal_id": 336,
    "title": "Taboo Tattoo",
 "type": "ALL"
},
{
 "mal_id": 337,
    "title": "Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen",
 "type": "ALL"
},
{
 "mal_id": 338,
    "title": "Masou Gakuen HxH",
 "type": "ALL"
},
{
 "mal_id": 339,
    "title": "Black Lagoon: Roberta's Blood Trail",
 "type": "ALL"
},
{
 "mal_id": 340,
    "title": "InuYasha: Kanketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 341,
    "title": "Bleach Movie 1: Memories of Nobody",
 "type": "ALL"
},
{
 "mal_id": 342,
    "title": "Nurarihyon no Mago",
 "type": "ALL"
},
{
 "mal_id": 343,
    "title": "Akuma no Riddle",
 "type": "ALL"
},
{
 "mal_id": 344,
    "title": "Fate/kaleid liner Prisma☆Illya",
 "type": "ALL"
},
{
 "mal_id": 345,
    "title": "Ao no Exorcist Movie",
 "type": "ALL"
},
{
 "mal_id": 346,
    "title": "Servamp",
 "type": "ALL"
},
{
 "mal_id": 347,
    "title": "Full Metal Panic! The Second Raid",
 "type": "ALL"
},
{
 "mal_id": 348,
    "title": "Persona 4 the Animation",
 "type": "ALL"
},
{
 "mal_id": 349,
    "title": "Psycho-Pass Movie",
 "type": "ALL"
},
{
 "mal_id": 350,
    "title": "Seirei Gensouki",
 "type": "ALL"
},
{
 "mal_id": 351,
    "title": "Darker than Black: Kuro no Keiyakusha Gaiden",
 "type": "ALL"
},
{
 "mal_id": 352,
    "title": "Tenkuu Shinpan",
 "type": "ALL"
},
{
 "mal_id": 353,
    "title": "Arifureta Shokugyou de Sekai Saikyou 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 354,
    "title": "K: Missing Kings",
 "type": "ALL"
},
{
 "mal_id": 355,
    "title": "Pokemon Movie 01: Mewtwo no Gyakushuu",
 "type": "ALL"
},
{
 "mal_id": 356,
    "title": "Noblesse",
 "type": "ALL"
},
{
 "mal_id": 357,
    "title": "Promare",
 "type": "ALL"
},
{
 "mal_id": 358,
    "title": "Naruto: Shippuuden Movie 2 - Kizuna",
 "type": "ALL"
},
{
 "mal_id": 359,
    "title": "Mahou Sensou",
 "type": "ALL"
},
{
 "mal_id": 360,
    "title": "Zero kara Hajimeru Mahou no Sho",
 "type": "ALL"
},
{
 "mal_id": 361,
    "title": "Kuusen Madoushi Kouhosei no Kyoukan",
 "type": "ALL"
},
{
 "mal_id": 362,
    "title": "Devils Line",
 "type": "ALL"
},
{
 "mal_id": 363,
    "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
 "type": "ALL"
},
{
 "mal_id": 364,
    "title": "Medaka Box",
 "type": "ALL"
},
{
 "mal_id": 365,
    "title": "Psycho-Pass 3",
 "type": "ALL"
},
{
 "mal_id": 366,
    "title": "Princess Connect! Re:Dive",
 "type": "ALL"
},
{
 "mal_id": 367,
    "title": "One Piece Film: Z",
 "type": "ALL"
},
{
 "mal_id": 368,
    "title": "11eyes",
 "type": "ALL"
},
{
 "mal_id": 369,
    "title": "Omamori Himari",
 "type": "ALL"
},
{
 "mal_id": 370,
    "title": "Ga-Rei: Zero",
 "type": "ALL"
},
{
 "mal_id": 371,
    "title": "Shakugan no Shana III (Final)",
 "type": "ALL"
},
{
 "mal_id": 372,
    "title": "Tokyo Ghoul: Jack",
 "type": "ALL"
},
{
 "mal_id": 373,
    "title": "100-man no Inochi no Ue ni Ore wa Tatteiru",
 "type": "ALL"
},
{
 "mal_id": 374,
    "title": "Persona 5 the Animation",
 "type": "ALL"
},
{
 "mal_id": 375,
    "title": "Youjo Senki Movie",
 "type": "ALL"
},
{
 "mal_id": 376,
    "title": "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen",
 "type": "ALL"
},
{
 "mal_id": 377,
    "title": "Sekirei: Pure Engagement",
 "type": "ALL"
},
{
 "mal_id": 378,
    "title": "Bleach Movie 2: The DiamondDust Rebellion - Mou Hitotsu no Hyourinmaru",
 "type": "ALL"
},
{
 "mal_id": 379,
    "title": "Knight's & Magic",
 "type": "ALL"
},
{
 "mal_id": 380,
    "title": "Kara no Kyoukai 2: Satsujin Kousatsu (Zen)",
 "type": "ALL"
},
{
 "mal_id": 381,
    "title": "Naruto: Shippuuden Movie 4 - The Lost Tower",
 "type": "ALL"
},
{
 "mal_id": 382,
    "title": "Sirius",
 "type": "ALL"
},
{
 "mal_id": 383,
    "title": "Kuroshitsuji: Book of Murder",
 "type": "ALL"
},
{
 "mal_id": 384,
    "title": "Toaru Majutsu no Index III",
 "type": "ALL"
},
{
 "mal_id": 385,
    "title": "Spy x Family",
 "type": "ALL"
},
{
 "mal_id": 386,
    "title": "Shingeki no Bahamut: Virgin Soul",
 "type": "ALL"
},
{
 "mal_id": 387,
    "title": "Kara no Kyoukai 5: Mujun Rasen",
 "type": "ALL"
},
{
 "mal_id": 388,
    "title": "Texhnolyze",
 "type": "ALL"
},
{
 "mal_id": 389,
    "title": "Yu☆Gi☆Oh!",
 "type": "ALL"
},
{
 "mal_id": 390,
    "title": "Mirai Nikki",
 "type": "ALL"
},
{
 "mal_id": 391,
    "title": "Sidonia no Kishi",
 "type": "ALL"
},
{
 "mal_id": 392,
    "title": "Tsubasa Chronicle",
 "type": "ALL"
},
{
 "mal_id": 393,
    "title": "Chrno Crusade",
 "type": "ALL"
},
{
 "mal_id": 394,
    "title": "Hayate no Gotoku!",
 "type": "ALL"
},
{
 "mal_id": 395,
    "title": "Terra Formars",
 "type": "ALL"
},
{
 "mal_id": 396,
    "title": "Bungou Stray Dogs: Dead Apple",
 "type": "ALL"
},
{
 "mal_id": 397,
    "title": "Dance in the Vampire Bund",
 "type": "ALL"
},
{
 "mal_id": 398,
    "title": "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
 "type": "ALL"
},
{
 "mal_id": 399,
    "title": "Koukaku Kidoutai: Stand Alone Complex 2nd GIG",
 "type": "ALL"
},
{
 "mal_id": 400,
    "title": "One Piece Film: Strong World",
 "type": "ALL"
},
{
 "mal_id": 401,
    "title": "Canaan",
 "type": "ALL"
},
{
 "mal_id": 402,
    "title": "Pokemon: The Origin",
 "type": "ALL"
},
{
 "mal_id": 403,
    "title": "Tate no Yuusha no Nariagari Season 3",
 "type": "ALL"
},
{
 "mal_id": 404,
    "title": "Bleach Movie 3: Fade to Black - Kimi no Na wo Yobu",
 "type": "ALL"
},
{
 "mal_id": 405,
    "title": "Goblin Slayer: Goblin's Crown",
 "type": "ALL"
},
{
 "mal_id": 406,
    "title": "Big Order (TV)",
 "type": "ALL"
},
{
 "mal_id": 407,
    "title": "Kara no Kyoukai 3: Tsuukaku Zanryuu",
 "type": "ALL"
},
{
 "mal_id": 408,
    "title": "Naruto: Shippuuden Movie 5 - Blood Prison",
 "type": "ALL"
},
{
 "mal_id": 409,
    "title": "Digimon Adventure 02",
 "type": "ALL"
},
{
 "mal_id": 410,
    "title": "Tiger & Bunny",
 "type": "ALL"
},
{
 "mal_id": 411,
    "title": "Kurenai no Buta",
 "type": "ALL"
},
{
 "mal_id": 412,
    "title": "Saihate no Paladin",
 "type": "ALL"
},
{
 "mal_id": 413,
    "title": "Ushio to Tora (TV)",
 "type": "ALL"
},
{
 "mal_id": 414,
    "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
 "type": "ALL"
},
{
 "mal_id": 415,
    "title": "Aoharu x Kikanjuu",
 "type": "ALL"
},
{
 "mal_id": 416,
    "title": "Kantai Collection: KanColle",
 "type": "ALL"
},
{
 "mal_id": 417,
    "title": "Final Fantasy VII: Advent Children",
 "type": "ALL"
},
{
 "mal_id": 418,
    "title": "Mobile Suit Gundam 00",
 "type": "ALL"
},
{
 "mal_id": 419,
    "title": "Fate/stay night Movie: Unlimited Blade Works",
 "type": "ALL"
},
{
 "mal_id": 420,
    "title": "Karneval (TV)",
 "type": "ALL"
},
{
 "mal_id": 421,
    "title": "Log Horizon: Entaku Houkai",
 "type": "ALL"
},
{
 "mal_id": 422,
    "title": "Mobile Suit Gundam: Iron-Blooded Orphans",
 "type": "ALL"
},
{
 "mal_id": 423,
    "title": "07-Ghost",
 "type": "ALL"
},
{
 "mal_id": 424,
    "title": "Seirei no Moribito",
 "type": "ALL"
},
{
 "mal_id": 425,
    "title": "Maou-sama, Retry!",
 "type": "ALL"
},
{
 "mal_id": 426,
    "title": "Chrome Shelled Regios",
 "type": "ALL"
},
{
 "mal_id": 427,
    "title": "Fate/Extra: Last Encore",
 "type": "ALL"
},
{
 "mal_id": 428,
    "title": "Berserk: Ougon Jidai-hen I - Haou no Tamago",
 "type": "ALL"
},
{
 "mal_id": 429,
    "title": "Kara no Kyoukai 4: Garan no Dou",
 "type": "ALL"
},
{
 "mal_id": 430,
    "title": "Fairy Tail Movie 1: Houou no Miko",
 "type": "ALL"
},
{
 "mal_id": 431,
    "title": "Toaru Kagaku no Railgun T",
 "type": "ALL"
},
{
 "mal_id": 432,
    "title": "Rail Wars!",
 "type": "ALL"
},
{
 "mal_id": 433,
    "title": "Rewrite",
 "type": "ALL"
},
{
 "mal_id": 434,
    "title": "Tengen Toppa Gurren Lagann Movie 2: Lagann-hen",
 "type": "ALL"
},
{
 "mal_id": 435,
    "title": "Yu☆Gi☆Oh!: Duel Monsters GX",
 "type": "ALL"
},
{
 "mal_id": 436,
    "title": "Arcana Famiglia",
 "type": "ALL"
},
{
 "mal_id": 437,
    "title": "Rozen Maiden",
 "type": "ALL"
},
{
 "mal_id": 438,
    "title": "Hataraku Saibou Black (TV)",
 "type": "ALL"
},
{
 "mal_id": 439,
    "title": "Berserk: Ougon Jidai-hen III - Kourin",
 "type": "ALL"
},
{
 "mal_id": 440,
    "title": "Soul Eater NOT!",
 "type": "ALL"
},
{
 "mal_id": 441,
    "title": "Dragon Ball Z Movie 14: Kami to Kami",
 "type": "ALL"
},
{
 "mal_id": 442,
    "title": "Kara no Kyoukai 7: Satsujin Kousatsu (Go)",
 "type": "ALL"
},
{
 "mal_id": 443,
    "title": "Hitsugi no Chaika: Avenging Battle",
 "type": "ALL"
},
{
 "mal_id": 444,
    "title": "Mo Dao Zu Shi",
 "type": "ALL"
},
{
 "mal_id": 445,
    "title": "Tokyo Ghoul: Pinto",
 "type": "ALL"
},
{
 "mal_id": 446,
    "title": "Burn the Witch",
 "type": "ALL"
},
{
 "mal_id": 447,
    "title": "Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara",
 "type": "ALL"
},
{
 "mal_id": 448,
    "title": "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
 "type": "ALL"
},
{
 "mal_id": 449,
    "title": "Bleach Movie 4: Jigoku-hen",
 "type": "ALL"
},
{
 "mal_id": 450,
    "title": "Kill la Kill Specials",
 "type": "ALL"
},
{
 "mal_id": 451,
    "title": "Tensei shitara Slime Datta Ken OVA",
 "type": "ALL"
},
{
 "mal_id": 452,
    "title": "Hachi-nan tte, Sore wa Nai deshou!",
 "type": "ALL"
},
{
 "mal_id": 453,
    "title": "Princess Principal",
 "type": "ALL"
},
{
 "mal_id": 454,
    "title": "Fate/Grand Order: First Order",
 "type": "ALL"
},
{
 "mal_id": 455,
    "title": "Radiant",
 "type": "ALL"
},
{
 "mal_id": 456,
    "title": "Shuumatsu no Walküre",
 "type": "ALL"
},
{
 "mal_id": 457,
    "title": "Berserk: Ougon Jidai-hen II - Doldrey Kouryaku",
 "type": "ALL"
},
{
 "mal_id": 458,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya",
 "type": "ALL"
},
{
 "mal_id": 459,
    "title": "Naruto: Shippuuden Movie 3 - Hi no Ishi wo Tsugu Mono",
 "type": "ALL"
},
{
 "mal_id": 460,
    "title": "Isekai no Seikishi Monogatari",
 "type": "ALL"
},
{
 "mal_id": 461,
    "title": "Cross Ange: Tenshi to Ryuu no Rondo",
 "type": "ALL"
},
{
 "mal_id": 462,
    "title": "Dog Days",
 "type": "ALL"
},
{
 "mal_id": 463,
    "title": "D.N.Angel",
 "type": "ALL"
},
{
 "mal_id": 464,
    "title": "Kino no Tabi: The Beautiful World - The Animated Series",
 "type": "ALL"
},
{
 "mal_id": 465,
    "title": "UQ Holder!: Mahou Sensei Negima! 2",
 "type": "ALL"
},
{
 "mal_id": 466,
    "title": "Michiko to Hatchin",
 "type": "ALL"
},
{
 "mal_id": 467,
    "title": "Gunslinger Girl",
 "type": "ALL"
},
{
 "mal_id": 468,
    "title": "Tenjou Tenge",
 "type": "ALL"
},
{
 "mal_id": 469,
    "title": "D.Gray-man Hallow",
 "type": "ALL"
},
{
 "mal_id": 470,
    "title": "Kara no Kyoukai 6: Boukyaku Rokuon",
 "type": "ALL"
},
{
 "mal_id": 471,
    "title": "Boku no Hero Academia: Training of the Dead",
 "type": "ALL"
},
{
 "mal_id": 472,
    "title": "Initial D Second Stage",
 "type": "ALL"
},
{
 "mal_id": 473,
    "title": "Strike the Blood II",
 "type": "ALL"
},
{
 "mal_id": 474,
    "title": "Hitori no Shita: The Outcast",
 "type": "ALL"
},
{
 "mal_id": 475,
    "title": "Gintama.: Shirogane no Tamashii-hen",
 "type": "ALL"
},
{
 "mal_id": 476,
    "title": "Nanatsu no Taizai OVA",
 "type": "ALL"
},
{
 "mal_id": 477,
    "title": "Basilisk: Kouga Ninpou Chou",
 "type": "ALL"
},
{
 "mal_id": 478,
    "title": "No Guns Life",
 "type": "ALL"
},
{
 "mal_id": 479,
    "title": "Gungrave",
 "type": "ALL"
},
{
 "mal_id": 480,
    "title": "Trinity Blood",
 "type": "ALL"
},
{
 "mal_id": 481,
    "title": "Jormungand: Perfect Order",
 "type": "ALL"
},
{
 "mal_id": 482,
    "title": "Kingdom",
 "type": "ALL"
},
{
 "mal_id": 483,
    "title": "Fullmetal Alchemist: The Sacred Star of Milos",
 "type": "ALL"
},
{
 "mal_id": 484,
    "title": "Qualidea Code",
 "type": "ALL"
},
{
 "mal_id": 485,
    "title": "Kyousou Giga (TV)",
 "type": "ALL"
},
{
 "mal_id": 486,
    "title": "Overlord IV",
 "type": "ALL"
},
{
 "mal_id": 487,
    "title": "Gintama.: Porori-hen",
 "type": "ALL"
},
{
 "mal_id": 488,
    "title": "Black★Rock Shooter (OVA)",
 "type": "ALL"
},
{
 "mal_id": 489,
    "title": "Tsugumomo",
 "type": "ALL"
},
{
 "mal_id": 490,
    "title": "Mnemosyne: Mnemosyne no Musume-tachi",
 "type": "ALL"
},
{
 "mal_id": 491,
    "title": "Hunter x Hunter Movie 1: Phantom Rouge",
 "type": "ALL"
},
{
 "mal_id": 492,
    "title": "Kyoukaisenjou no Horizon",
 "type": "ALL"
},
{
 "mal_id": 493,
    "title": "Pokemon Advanced Generation",
 "type": "ALL"
},
{
 "mal_id": 494,
    "title": "Boku no Hero Academia 2nd Season: Hero Note",
 "type": "ALL"
},
{
 "mal_id": 495,
    "title": "Code Geass: Boukoku no Akito 1 - Yokuryuu wa Maiorita",
 "type": "ALL"
},
{
 "mal_id": 496,
    "title": "Kuroshitsuji Movie: Book of the Atlantic",
 "type": "ALL"
},
{
 "mal_id": 497,
    "title": "Baccano! Specials",
 "type": "ALL"
},
{
 "mal_id": 498,
    "title": "C³",
 "type": "ALL"
},
{
 "mal_id": 499,
    "title": "Seiken no Blacksmith",
 "type": "ALL"
},
{
 "mal_id": 500,
    "title": "Eyeshield 21",
 "type": "ALL"
},
{
 "mal_id": 501,
    "title": "Hyakka Ryouran: Samurai Girls",
 "type": "ALL"
},
{
 "mal_id": 502,
    "title": "Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo",
 "type": "ALL"
},
{
 "mal_id": 503,
    "title": "Fairy Tail Movie 2: Dragon Cry",
 "type": "ALL"
},
{
 "mal_id": 504,
    "title": "Nomad: Megalo Box 2",
 "type": "ALL"
},
{
 "mal_id": 505,
    "title": "One Piece Film: Gold",
 "type": "ALL"
},
{
 "mal_id": 506,
    "title": "Shuumatsu no Izetta",
 "type": "ALL"
},
{
 "mal_id": 507,
    "title": "Tennis no Ouji-sama",
 "type": "ALL"
},
{
 "mal_id": 508,
    "title": "Killing Bites",
 "type": "ALL"
},
{
 "mal_id": 509,
    "title": "Busou Renkin",
 "type": "ALL"
},
{
 "mal_id": 510,
    "title": "Mob Psycho 100 III",
 "type": "ALL"
},
{
 "mal_id": 511,
    "title": "Dragon Crisis!",
 "type": "ALL"
},
{
 "mal_id": 512,
    "title": "Sabikui Bisco",
 "type": "ALL"
},
{
 "mal_id": 513,
    "title": "Pokemon Movie 03: Kesshoutou no Teiou Entei",
 "type": "ALL"
},
{
 "mal_id": 514,
    "title": "Last Exile",
 "type": "ALL"
},
{
 "mal_id": 515,
    "title": "Danganronpa 3: The End of Kibougamine Gakuen - Kibou-hen",
 "type": "ALL"
},
{
 "mal_id": 516,
    "title": "Tokyo ESP",
 "type": "ALL"
},
{
 "mal_id": 517,
    "title": "Durarara!! Specials",
 "type": "ALL"
},
{
 "mal_id": 518,
    "title": "Dragon Ball Kai (2014)",
 "type": "ALL"
},
{
 "mal_id": 519,
    "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
 "type": "ALL"
},
{
 "mal_id": 520,
    "title": "Devil Survivor 2 The Animation",
 "type": "ALL"
},
{
 "mal_id": 521,
    "title": "Strike Witches",
 "type": "ALL"
},
{
 "mal_id": 522,
    "title": "Beatless",
 "type": "ALL"
},
{
 "mal_id": 523,
    "title": "Nabari no Ou",
 "type": "ALL"
},
{
 "mal_id": 524,
    "title": "Boku no Hero Academia: Sukue! Kyuujo Kunren!",
 "type": "ALL"
},
{
 "mal_id": 525,
    "title": "Divine Gate",
 "type": "ALL"
},
{
 "mal_id": 526,
    "title": "Hakuouki",
 "type": "ALL"
},
{
 "mal_id": 527,
    "title": "Kakumeiki Valvrave",
 "type": "ALL"
},
{
 "mal_id": 528,
    "title": "Golden Kamuy 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 529,
    "title": "DRAMAtical Murder",
 "type": "ALL"
},
{
 "mal_id": 530,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka OVA",
 "type": "ALL"
},
{
 "mal_id": 531,
    "title": "Trinity Seven Movie 1: Eternity Library to Alchemic Girl",
 "type": "ALL"
},
{
 "mal_id": 532,
    "title": "Sennen Joyuu",
 "type": "ALL"
},
{
 "mal_id": 533,
    "title": "Mobile Suit Gundam SEED",
 "type": "ALL"
},
{
 "mal_id": 534,
    "title": "Boku no Hero Academia the Movie 3: World Heroes' Mission",
 "type": "ALL"
},
{
 "mal_id": 535,
    "title": "Fairy Gone",
 "type": "ALL"
},
{
 "mal_id": 536,
    "title": "Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria",
 "type": "ALL"
},
{
 "mal_id": 537,
    "title": "Freezing Vibration",
 "type": "ALL"
},
{
 "mal_id": 538,
    "title": "Utawarerumono",
 "type": "ALL"
},
{
 "mal_id": 539,
    "title": "Shingetsutan Tsukihime",
 "type": "ALL"
},
{
 "mal_id": 540,
    "title": "Berserk 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 541,
    "title": "Vampire Hunter D (2000)",
 "type": "ALL"
},
{
 "mal_id": 542,
    "title": "Dragon Ball Z Movie 15",
 "type": "ALL"
},
{
 "mal_id": 543,
    "title": "Sengoku Basara",
 "type": "ALL"
},
{
 "mal_id": 544,
    "title": "Nurarihyon no Mago: Sennen Makyou",
 "type": "ALL"
},
{
 "mal_id": 545,
    "title": "Hunter x Hunter Movie 2: The Last Mission",
 "type": "ALL"
},
{
 "mal_id": 546,
    "title": "Gantz 2nd Stage",
 "type": "ALL"
},
{
 "mal_id": 547,
    "title": "Initial D Fourth Stage",
 "type": "ALL"
},
{
 "mal_id": 548,
    "title": "Casshern Sins",
 "type": "ALL"
},
{
 "mal_id": 549,
    "title": "Tengen Toppa Gurren Lagann Movie 1: Gurren-hen",
 "type": "ALL"
},
{
 "mal_id": 550,
    "title": "Tales of Zestiria the Cross 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 551,
    "title": "Kyoukai no Kanata Movie 1: I'll Be Here - Kako-hen",
 "type": "ALL"
},
{
 "mal_id": 552,
    "title": "Mobile Suit Gundam Wing",
 "type": "ALL"
},
{
 "mal_id": 553,
    "title": "Ore, Twintail ni Narimasu.",
 "type": "ALL"
},
{
 "mal_id": 554,
    "title": "Fate/kaleid liner Prisma☆Illya 2wei!",
 "type": "ALL"
},
{
 "mal_id": 555,
    "title": "Boku no Hero Academia 6th Season",
 "type": "ALL"
},
{
 "mal_id": 556,
    "title": "Mahou Shoujo Ikusei Keikaku",
 "type": "ALL"
},
{
 "mal_id": 557,
    "title": "Initial D Third Stage",
 "type": "ALL"
},
{
 "mal_id": 558,
    "title": "Kaizoku Oujo",
 "type": "ALL"
},
{
 "mal_id": 559,
    "title": "Choujigen Game Neptune The Animation",
 "type": "ALL"
},
{
 "mal_id": 560,
    "title": "Digimon Frontier",
 "type": "ALL"
},
{
 "mal_id": 561,
    "title": "Triage X",
 "type": "ALL"
},
{
 "mal_id": 562,
    "title": "Dragon Ball Z Movie 08: Moetsukiro!! Nessen, Ressen, Chougekisen",
 "type": "ALL"
},
{
 "mal_id": 563,
    "title": "Gintama Movie 1: Shinyaku Benizakura-hen",
 "type": "ALL"
},
{
 "mal_id": 564,
    "title": "Heavy Object",
 "type": "ALL"
},
{
 "mal_id": 565,
    "title": "Sabage-bu!",
 "type": "ALL"
},
{
 "mal_id": 566,
    "title": "Azur Lane",
 "type": "ALL"
},
{
 "mal_id": 567,
    "title": "Pokemon XY",
 "type": "ALL"
},
{
 "mal_id": 568,
    "title": "Aoki Hagane no Arpeggio: Ars Nova",
 "type": "ALL"
},
{
 "mal_id": 569,
    "title": "Yozakura Quartet",
 "type": "ALL"
},
{
 "mal_id": 570,
    "title": "Brave 10",
 "type": "ALL"
},
{
 "mal_id": 571,
    "title": "Seihou Bukyou Outlaw Star",
 "type": "ALL"
},
{
 "mal_id": 572,
    "title": "Boku no Hero Academia: Ikinokore! Kesshi no Survival Kunren",
 "type": "ALL"
},
{
 "mal_id": 573,
    "title": "Hakata Tonkotsu Ramens",
 "type": "ALL"
},
{
 "mal_id": 574,
    "title": "Bungou Stray Dogs: Hitori Ayumu",
 "type": "ALL"
},
{
 "mal_id": 575,
    "title": "Dantalian no Shoka",
 "type": "ALL"
},
{
 "mal_id": 576,
    "title": "Mobile Suit Gundam 00 Second Season",
 "type": "ALL"
},
{
 "mal_id": 577,
    "title": "Macross F",
 "type": "ALL"
},
{
 "mal_id": 578,
    "title": "Hunter x Hunter: Greed Island",
 "type": "ALL"
},
{
 "mal_id": 579,
    "title": "Uchuu Patrol Luluco",
 "type": "ALL"
},
{
 "mal_id": 580,
    "title": "Maken-Ki! Two",
 "type": "ALL"
},
{
 "mal_id": 581,
    "title": "Higashi no Eden Movie II: Paradise Lost",
 "type": "ALL"
},
{
 "mal_id": 582,
    "title": "Isuca",
 "type": "ALL"
},
{
 "mal_id": 583,
    "title": "Zettai Karen Children: The Unlimited - Hyoubu Kyousuke",
 "type": "ALL"
},
{
 "mal_id": 584,
    "title": "Garo: Honoo no Kokuin",
 "type": "ALL"
},
{
 "mal_id": 585,
    "title": "Needless",
 "type": "ALL"
},
{
 "mal_id": 586,
    "title": "Sekai Seifuku: Bouryaku no Zvezda",
 "type": "ALL"
},
{
 "mal_id": 587,
    "title": "Akiba's Trip The Animation",
 "type": "ALL"
},
{
 "mal_id": 588,
    "title": "Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2",
 "type": "ALL"
},
{
 "mal_id": 589,
    "title": "Shikkakumon no Saikyou Kenja",
 "type": "ALL"
},
{
 "mal_id": 590,
    "title": "Loveless",
 "type": "ALL"
},
{
 "mal_id": 591,
    "title": "Zombie-Loan",
 "type": "ALL"
},
{
 "mal_id": 592,
    "title": "Baki: Dai Raitaisai-hen",
 "type": "ALL"
},
{
 "mal_id": 593,
    "title": "Gunjou no Magmell",
 "type": "ALL"
},
{
 "mal_id": 594,
    "title": "Dragon Ball Z Movie 12: Fukkatsu no Fusion!! Gokuu to Vegeta",
 "type": "ALL"
},
{
 "mal_id": 595,
    "title": "Medaka Box Abnormal",
 "type": "ALL"
},
{
 "mal_id": 596,
    "title": "Yumekui Merry",
 "type": "ALL"
},
{
 "mal_id": 597,
    "title": "Arslan Senki (TV): Fuujin Ranbu",
 "type": "ALL"
},
{
 "mal_id": 598,
    "title": "Juuni Kokuki",
 "type": "ALL"
},
{
 "mal_id": 599,
    "title": "Bounen no Xamdou",
 "type": "ALL"
},
{
 "mal_id": 600,
    "title": "Hunter x Hunter: Greed Island Final",
 "type": "ALL"
},
{
 "mal_id": 601,
    "title": "Dragon Ball Z Movie 05: Tobikkiri no Saikyou tai Saikyou",
 "type": "ALL"
},
{
 "mal_id": 602,
    "title": "One Piece Movie 14: Stampede",
 "type": "ALL"
},
{
 "mal_id": 603,
    "title": "Kuromukuro",
 "type": "ALL"
},
{
 "mal_id": 604,
    "title": "Deadman Wonderland: Akai Knife Tsukai",
 "type": "ALL"
},
{
 "mal_id": 605,
    "title": "Fate/kaleid liner Prisma☆Illya 2wei Herz!",
 "type": "ALL"
},
{
 "mal_id": 606,
    "title": "Dies Irae",
 "type": "ALL"
},
{
 "mal_id": 607,
    "title": "Pokemon Diamond & Pearl",
 "type": "ALL"
},
{
 "mal_id": 608,
    "title": "Trinity Seven: Nanatsu no Taizai to Nana Madoushi",
 "type": "ALL"
},
{
 "mal_id": 609,
    "title": "Seikon no Qwaser II",
 "type": "ALL"
},
{
 "mal_id": 610,
    "title": "Kore wa Zombie Desu ka? OVA",
 "type": "ALL"
},
{
 "mal_id": 611,
    "title": "Walkure Romanze",
 "type": "ALL"
},
{
 "mal_id": 612,
    "title": "Code Geass: Boukoku no Akito 2 - Hikisakareshi Yokuryuu",
 "type": "ALL"
},
{
 "mal_id": 613,
    "title": "Senjou no Valkyria",
 "type": "ALL"
},
{
 "mal_id": 614,
    "title": "Sunabouzu",
 "type": "ALL"
},
{
 "mal_id": 615,
    "title": "Zetman",
 "type": "ALL"
},
{
 "mal_id": 616,
    "title": "Final Fantasy VII: Advent Children Complete",
 "type": "ALL"
},
{
 "mal_id": 617,
    "title": "Shingeki no Kyojin: Ano Hi Kara",
 "type": "ALL"
},
{
 "mal_id": 618,
    "title": "Trigun: Badlands Rumble",
 "type": "ALL"
},
{
 "mal_id": 619,
    "title": "Yu☆Gi☆Oh! 5D's",
 "type": "ALL"
},
{
 "mal_id": 620,
    "title": "Senran Kagura",
 "type": "ALL"
},
{
 "mal_id": 621,
    "title": "Samurai Flamenco",
 "type": "ALL"
},
{
 "mal_id": 622,
    "title": "Valkyrie Drive: Mermaid",
 "type": "ALL"
},
{
 "mal_id": 623,
    "title": "Golden Kamuy 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 624,
    "title": "Ansatsu Kyoushitsu: Deai no Jikan",
 "type": "ALL"
},
{
 "mal_id": 625,
    "title": "Dragon Ball Z Movie 03: Chikyuu Marugoto Choukessen",
 "type": "ALL"
},
{
 "mal_id": 626,
    "title": "Ushio to Tora (TV) 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 627,
    "title": "Toaru Majutsu no Index Movie: Endymion no Kiseki",
 "type": "ALL"
},
{
 "mal_id": 628,
    "title": "FLCL Progressive",
 "type": "ALL"
},
{
 "mal_id": 629,
    "title": "Shichisei no Subaru",
 "type": "ALL"
},
{
 "mal_id": 630,
    "title": "Mobile Suit Gundam: Iron-Blooded Orphans 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 631,
    "title": "Initial D Fifth Stage",
 "type": "ALL"
},
{
 "mal_id": 632,
    "title": "Akatsuki no Yona OVA",
 "type": "ALL"
},
{
 "mal_id": 633,
    "title": "Magi: Sinbad no Bouken",
 "type": "ALL"
},
{
 "mal_id": 634,
    "title": "High School DxD BorN: Yomigaeranai Fushichou",
 "type": "ALL"
},
{
 "mal_id": 635,
    "title": "Sarazanmai",
 "type": "ALL"
},
{
 "mal_id": 636,
    "title": "Kishibe Rohan wa Ugokanai",
 "type": "ALL"
},
{
 "mal_id": 637,
    "title": "Kengan Ashura",
 "type": "ALL"
},
{
 "mal_id": 638,
    "title": "Donten ni Warau",
 "type": "ALL"
},
{
 "mal_id": 639,
    "title": "Blade & Soul",
 "type": "ALL"
},
{
 "mal_id": 640,
    "title": "Dragon Ball Z Movie 10: Kiken na Futari! Super Senshi wa Nemurenai",
 "type": "ALL"
},
{
 "mal_id": 641,
    "title": "Fairy Tail x Rave",
 "type": "ALL"
},
{
 "mal_id": 642,
    "title": "Boku no Hero Academia the Movie: Futari no Hero Specials",
 "type": "ALL"
},
{
 "mal_id": 643,
    "title": "Hokuto no Ken",
 "type": "ALL"
},
{
 "mal_id": 644,
    "title": "Yozakura Quartet: Hana no Uta",
 "type": "ALL"
},
{
 "mal_id": 645,
    "title": "Toriko",
 "type": "ALL"
},
{
 "mal_id": 646,
    "title": "Bleach: Memories in the Rain",
 "type": "ALL"
},
{
 "mal_id": 647,
    "title": "Nanbaka 2",
 "type": "ALL"
},
{
 "mal_id": 648,
    "title": "Pokemon XY&Z",
 "type": "ALL"
},
{
 "mal_id": 649,
    "title": "Goblin Slayer 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 650,
    "title": "Hunter x Hunter: Original Video Animation",
 "type": "ALL"
},
{
 "mal_id": 651,
    "title": "Dragon Ball Z Movie 13: Ryuuken Bakuhatsu!! Gokuu ga Yaraneba Dare ga Yaru",
 "type": "ALL"
},
{
 "mal_id": 652,
    "title": "Shikabane Hime: Aka",
 "type": "ALL"
},
{
 "mal_id": 653,
    "title": "GetBackers",
 "type": "ALL"
},
{
 "mal_id": 654,
    "title": "Kurokami The Animation",
 "type": "ALL"
},
{
 "mal_id": 655,
    "title": "Coppelion",
 "type": "ALL"
},
{
 "mal_id": 656,
    "title": "Katsute Kami Datta Kemono-tachi e",
 "type": "ALL"
},
{
 "mal_id": 657,
    "title": "World Trigger 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 658,
    "title": "Dokyuu Hentai HxEros",
 "type": "ALL"
},
{
 "mal_id": 659,
    "title": "IS: Infinite Stratos Encore - Koi ni Kogareru Rokujuusou",
 "type": "ALL"
},
{
 "mal_id": 660,
    "title": "Dragon Ball Z Movie 06: Gekitotsu!! 100-oku Power no Senshi-tachi",
 "type": "ALL"
},
{
 "mal_id": 661,
    "title": "Fate/kaleid liner Prisma☆Illya 3rei!!",
 "type": "ALL"
},
{
 "mal_id": 662,
    "title": "Tsubasa Chronicle 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 663,
    "title": "Katsugeki/Touken Ranbu",
 "type": "ALL"
},
{
 "mal_id": 664,
    "title": "Shinmai Maou no Testament: Toujou Basara no Hard Sweet na Nichijou",
 "type": "ALL"
},
{
 "mal_id": 665,
    "title": "Sidonia no Kishi: Daikyuu Wakusei Seneki",
 "type": "ALL"
},
{
 "mal_id": 666,
    "title": "Senyuu.",
 "type": "ALL"
},
{
 "mal_id": 667,
    "title": "Top wo Nerae! Gunbuster",
 "type": "ALL"
},
{
 "mal_id": 668,
    "title": "RahXephon",
 "type": "ALL"
},
{
 "mal_id": 669,
    "title": "Dragon Ball Z Movie 01: Ora no Gohan wo Kaese!!",
 "type": "ALL"
},
{
 "mal_id": 670,
    "title": "Mars Red",
 "type": "ALL"
},
{
 "mal_id": 671,
    "title": "Chain Chronicle: Haecceitas no Hikari",
 "type": "ALL"
},
{
 "mal_id": 672,
    "title": "Shigurui",
 "type": "ALL"
},
{
 "mal_id": 673,
    "title": "Sword Art Online II: Debriefing",
 "type": "ALL"
},
{
 "mal_id": 674,
    "title": "Ueki no Housoku",
 "type": "ALL"
},
{
 "mal_id": 675,
    "title": "Karakuri Circus (TV)",
 "type": "ALL"
},
{
 "mal_id": 676,
    "title": "Quanzhi Fashi",
 "type": "ALL"
},
{
 "mal_id": 677,
    "title": "Dragon Ball Z Movie 07: Kyokugen Battle!! Sandai Super Saiyajin",
 "type": "ALL"
},
{
 "mal_id": 678,
    "title": "Mai-HiME",
 "type": "ALL"
},
{
 "mal_id": 679,
    "title": "Dragon Ball Z Movie 11: Super Senshi Gekiha!! Katsu no wa Ore da",
 "type": "ALL"
},
{
 "mal_id": 680,
    "title": "Hayate no Gotoku!!",
 "type": "ALL"
},
{
 "mal_id": 681,
    "title": "Accel World EX",
 "type": "ALL"
},
{
 "mal_id": 682,
    "title": "Noblesse: Awakening",
 "type": "ALL"
},
{
 "mal_id": 683,
    "title": "Digimon Adventure tri. 1: Saikai",
 "type": "ALL"
},
{
 "mal_id": 684,
    "title": "Senki Zesshou Symphogear",
 "type": "ALL"
},
{
 "mal_id": 685,
    "title": "Bleach: The Sealed Sword Frenzy",
 "type": "ALL"
},
{
 "mal_id": 686,
    "title": "Hakkenden: Touhou Hakken Ibun",
 "type": "ALL"
},
{
 "mal_id": 687,
    "title": "Dragon Ball Z Movie 09: Ginga Girigiri!! Bucchigiri no Sugoi Yatsu",
 "type": "ALL"
},
{
 "mal_id": 688,
    "title": "Star Driver: Kagayaki no Takuto",
 "type": "ALL"
},
{
 "mal_id": 689,
    "title": "Shingeki no Kyojin Movie 2: Jiyuu no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 690,
    "title": "Witchblade",
 "type": "ALL"
},
{
 "mal_id": 691,
    "title": "Koutetsujou no Kabaneri Movie 3: Unato Kessen",
 "type": "ALL"
},
{
 "mal_id": 692,
    "title": "Dragon Ball Z Movie 04: Super Saiyajin da Son Gokuu",
 "type": "ALL"
},
{
 "mal_id": 693,
    "title": "Bleach: Sennen Kessen-hen",
 "type": "ALL"
},
{
 "mal_id": 694,
    "title": "Hanyou no Yashahime: Sengoku Otogizoushi",
 "type": "ALL"
},
{
 "mal_id": 695,
    "title": "Digimon Adventure Movie",
 "type": "ALL"
},
{
 "mal_id": 696,
    "title": "Persona 3 the Movie 1: Spring of Birth",
 "type": "ALL"
},
{
 "mal_id": 697,
    "title": "Conception",
 "type": "ALL"
},
{
 "mal_id": 698,
    "title": "One Punch Man 2nd Season Specials",
 "type": "ALL"
},
{
 "mal_id": 699,
    "title": "Cop Craft",
 "type": "ALL"
},
{
 "mal_id": 700,
    "title": "Grappler Baki (TV)",
 "type": "ALL"
},
{
 "mal_id": 701,
    "title": "Koroshi Ai",
 "type": "ALL"
},
{
 "mal_id": 702,
    "title": "Pokemon Movie 08: Mew to Hadou no Yuusha Lucario",
 "type": "ALL"
},
{
 "mal_id": 703,
    "title": "Witch Hunter Robin",
 "type": "ALL"
},
{
 "mal_id": 704,
    "title": "Ixion Saga DT",
 "type": "ALL"
},
{
 "mal_id": 705,
    "title": "Rewrite 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 706,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV",
 "type": "ALL"
},
{
 "mal_id": 707,
    "title": "Dansai Bunri no Crime Edge",
 "type": "ALL"
},
{
 "mal_id": 708,
    "title": "Speed Grapher",
 "type": "ALL"
},
{
 "mal_id": 709,
    "title": "Chaos Dragon: Sekiryuu Seneki",
 "type": "ALL"
},
{
 "mal_id": 710,
    "title": "One Piece Movie 1",
 "type": "ALL"
},
{
 "mal_id": 711,
    "title": "Uchuu Senkan Yamato 2199",
 "type": "ALL"
},
{
 "mal_id": 712,
    "title": "Heroic Age",
 "type": "ALL"
},
{
 "mal_id": 713,
    "title": "Schwarzesmarken",
 "type": "ALL"
},
{
 "mal_id": 714,
    "title": "SSSS.Dynazenon",
 "type": "ALL"
},
{
 "mal_id": 715,
    "title": "Code Geass: Boukoku no Akito 3 - Kagayaku Mono Ten yori Otsu",
 "type": "ALL"
},
{
 "mal_id": 716,
    "title": "Fate/Prototype",
 "type": "ALL"
},
{
 "mal_id": 717,
    "title": "Shingeki no Kyojin Movie 1: Guren no Yumiya",
 "type": "ALL"
},
{
 "mal_id": 718,
    "title": "Strike the Blood III",
 "type": "ALL"
},
{
 "mal_id": 719,
    "title": "Phi Brain: Kami no Puzzle",
 "type": "ALL"
},
{
 "mal_id": 720,
    "title": "Comet Lucifer",
 "type": "ALL"
},
{
 "mal_id": 721,
    "title": "Noir",
 "type": "ALL"
},
{
 "mal_id": 722,
    "title": "Blood Lad: Wagahai wa Neko de wa Nai",
 "type": "ALL"
},
{
 "mal_id": 723,
    "title": "Pokemon Movie 07: Rekkuu no Houmonsha Deoxys",
 "type": "ALL"
},
{
 "mal_id": 724,
    "title": "Dragon Ball: Episode of Bardock",
 "type": "ALL"
},
{
 "mal_id": 725,
    "title": "Kekkaishi (TV)",
 "type": "ALL"
},
{
 "mal_id": 726,
    "title": "Luck & Logic",
 "type": "ALL"
},
{
 "mal_id": 727,
    "title": "Lupin III: Cagliostro no Shiro",
 "type": "ALL"
},
{
 "mal_id": 728,
    "title": "Dragon Ball Z Movie 02: Kono Yo de Ichiban Tsuyoi Yatsu",
 "type": "ALL"
},
{
 "mal_id": 729,
    "title": "Bakuten Shoot Beyblade",
 "type": "ALL"
},
{
 "mal_id": 730,
    "title": "Pokemon Movie 10: Dialga vs. Palkia vs. Darkrai",
 "type": "ALL"
},
{
 "mal_id": 731,
    "title": "Aquarion Evol",
 "type": "ALL"
},
{
 "mal_id": 732,
    "title": "Kore wa Zombie Desu ka? of the Dead: Hai, Minotake ni Attemasu",
 "type": "ALL"
},
{
 "mal_id": 733,
    "title": "Utawarerumono: Itsuwari no Kamen",
 "type": "ALL"
},
{
 "mal_id": 734,
    "title": "Rozen Maiden: Träumend",
 "type": "ALL"
},
{
 "mal_id": 735,
    "title": "Tekkon Kinkreet",
 "type": "ALL"
},
{
 "mal_id": 736,
    "title": "Quanzhi Gaoshou 2",
 "type": "ALL"
},
{
 "mal_id": 737,
    "title": "Kingdom 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 738,
    "title": "Mobile Suit Gundam SEED Destiny",
 "type": "ALL"
},
{
 "mal_id": 739,
    "title": "A.I.C.O.: Incarnation",
 "type": "ALL"
},
{
 "mal_id": 740,
    "title": "Bloodivores",
 "type": "ALL"
},
{
 "mal_id": 741,
    "title": "Black Blood Brothers",
 "type": "ALL"
},
{
 "mal_id": 742,
    "title": "Dog Days'",
 "type": "ALL"
},
{
 "mal_id": 743,
    "title": "Saint Seiya: The Lost Canvas - Meiou Shinwa",
 "type": "ALL"
},
{
 "mal_id": 744,
    "title": "Fate/stay night: Unlimited Blade Works 2nd Season - Sunny Day",
 "type": "ALL"
},
{
 "mal_id": 745,
    "title": "Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi",
 "type": "ALL"
},
{
 "mal_id": 746,
    "title": "Hand Shakers",
 "type": "ALL"
},
{
 "mal_id": 747,
    "title": "High School Fleet",
 "type": "ALL"
},
{
 "mal_id": 748,
    "title": "Asura Cryin'",
 "type": "ALL"
},
{
 "mal_id": 749,
    "title": "Mahou Shoujo Lyrical Nanoha",
 "type": "ALL"
},
{
 "mal_id": 750,
    "title": "Ansatsu Kyoushitsu: 365-nichi no Jikan",
 "type": "ALL"
},
{
 "mal_id": 751,
    "title": "Macross",
 "type": "ALL"
},
{
 "mal_id": 752,
    "title": "Gintama: The Final",
 "type": "ALL"
},
{
 "mal_id": 753,
    "title": "InuYasha Movie 2: Kagami no Naka no Mugenjo",
 "type": "ALL"
},
{
 "mal_id": 754,
    "title": "Inferno Cop",
 "type": "ALL"
},
{
 "mal_id": 755,
    "title": "Cuticle Tantei Inaba",
 "type": "ALL"
},
{
 "mal_id": 756,
    "title": "Blame! Movie",
 "type": "ALL"
},
{
 "mal_id": 757,
    "title": "Nobunaga the Fool",
 "type": "ALL"
},
{
 "mal_id": 758,
    "title": "Quanzhi Gaoshou Specials",
 "type": "ALL"
},
{
 "mal_id": 759,
    "title": "Code Geass: Boukoku no Akito 4 - Nikushimi no Kioku kara",
 "type": "ALL"
},
{
 "mal_id": 760,
    "title": "Bakugan Battle Brawlers",
 "type": "ALL"
},
{
 "mal_id": 761,
    "title": "Afro Samurai: Resurrection",
 "type": "ALL"
},
{
 "mal_id": 762,
    "title": "Cencoroll",
 "type": "ALL"
},
{
 "mal_id": 763,
    "title": "InuYasha Movie 1: Toki wo Koeru Omoi",
 "type": "ALL"
},
{
 "mal_id": 764,
    "title": "Hidan no Aria AA",
 "type": "ALL"
},
{
 "mal_id": 765,
    "title": "Kubikiri Cycle: Aoiro Savant to Zaregototsukai",
 "type": "ALL"
},
{
 "mal_id": 766,
    "title": "Guilty Crown: Lost Christmas - An Episode of Port Town",
 "type": "ALL"
},
{
 "mal_id": 767,
    "title": "InuYasha Movie 3: Tenka Hadou no Ken",
 "type": "ALL"
},
{
 "mal_id": 768,
    "title": "Black Clover Movie",
 "type": "ALL"
},
{
 "mal_id": 769,
    "title": "Hyakka Ryouran: Samurai Bride",
 "type": "ALL"
},
{
 "mal_id": 770,
    "title": "Pokemon Sun & Moon",
 "type": "ALL"
},
{
 "mal_id": 771,
    "title": "Trinity Seven Movie 2: Heavens Library to Crimson Lord",
 "type": "ALL"
},
{
 "mal_id": 772,
    "title": "Rakuen Tsuihou",
 "type": "ALL"
},
{
 "mal_id": 773,
    "title": "Radiant 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 774,
    "title": "Vinland Saga Season 2",
 "type": "ALL"
},
{
 "mal_id": 775,
    "title": "Super Danganronpa 2.5: Komaeda Nagito to Sekai no Hakaimono",
 "type": "ALL"
},
{
 "mal_id": 776,
    "title": "Eureka Seven AO",
 "type": "ALL"
},
{
 "mal_id": 777,
    "title": "Lupin III",
 "type": "ALL"
},
{
 "mal_id": 778,
    "title": "Kuroko no Basket: Saikou no Present Desu",
 "type": "ALL"
},
{
 "mal_id": 779,
    "title": "Kurozuka",
 "type": "ALL"
},
{
 "mal_id": 780,
    "title": "Psycho-Pass: Sinners of the System Case.1 - Tsumi to Batsu",
 "type": "ALL"
},
{
 "mal_id": 781,
    "title": "Tian Guan Ci Fu",
 "type": "ALL"
},
{
 "mal_id": 782,
    "title": "Tsubasa: Tokyo Revelations",
 "type": "ALL"
},
{
 "mal_id": 783,
    "title": "Muv-Luv Alternative: Total Eclipse",
 "type": "ALL"
},
{
 "mal_id": 784,
    "title": "Blood-C: The Last Dark",
 "type": "ALL"
},
{
 "mal_id": 785,
    "title": "Pokemon Best Wishes!",
 "type": "ALL"
},
{
 "mal_id": 786,
    "title": "Tetsuwan Birdy Decode",
 "type": "ALL"
},
{
 "mal_id": 787,
    "title": "Mobile Suit Gundam Unicorn",
 "type": "ALL"
},
{
 "mal_id": 788,
    "title": "Kakumeiki Valvrave 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 789,
    "title": "Queen's Blade: Rurou no Senshi",
 "type": "ALL"
},
{
 "mal_id": 790,
    "title": "Break Blade",
 "type": "ALL"
},
{
 "mal_id": 791,
    "title": "Full Metal Panic! Invisible Victory",
 "type": "ALL"
},
{
 "mal_id": 792,
    "title": "Gantz:O",
 "type": "ALL"
},
{
 "mal_id": 793,
    "title": "Code Geass: Hangyaku no Lelouch I - Koudou",
 "type": "ALL"
},
{
 "mal_id": 794,
    "title": "One Piece Movie 4: Dead End no Bouken",
 "type": "ALL"
},
{
 "mal_id": 795,
    "title": "Hellsing: The Dawn",
 "type": "ALL"
},
{
 "mal_id": 796,
    "title": "Strike the Blood: Valkyria no Oukoku-hen",
 "type": "ALL"
},
{
 "mal_id": 797,
    "title": "FLCL Alternative",
 "type": "ALL"
},
{
 "mal_id": 798,
    "title": "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. II",
 "type": "ALL"
},
{
 "mal_id": 799,
    "title": "InuYasha Movie 4: Guren no Houraijima",
 "type": "ALL"
},
{
 "mal_id": 800,
    "title": "Jouran: The Princess of Snow and Blood",
 "type": "ALL"
},
{
 "mal_id": 801,
    "title": "The Big O",
 "type": "ALL"
},
{
 "mal_id": 802,
    "title": "BlazBlue: Alter Memory",
 "type": "ALL"
},
{
 "mal_id": 803,
    "title": "Terra Formars: Revenge",
 "type": "ALL"
},
{
 "mal_id": 804,
    "title": "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
 "type": "ALL"
},
{
 "mal_id": 805,
    "title": "Ulysses: Jehanne Darc to Renkin no Kishi",
 "type": "ALL"
},
{
 "mal_id": 806,
    "title": "Rolling☆Girls",
 "type": "ALL"
},
{
 "mal_id": 807,
    "title": "Princess Connect! Re:Dive Season 2",
 "type": "ALL"
},
{
 "mal_id": 808,
    "title": "Tsugu Tsugumomo",
 "type": "ALL"
},
{
 "mal_id": 809,
    "title": "Mikagura Gakuen Kumikyoku (TV)",
 "type": "ALL"
},
{
 "mal_id": 810,
    "title": "Date A Bullet: Dead or Bullet",
 "type": "ALL"
},
{
 "mal_id": 811,
    "title": "Koukaku Kidoutai 2.0",
 "type": "ALL"
},
{
 "mal_id": 812,
    "title": "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
 "type": "ALL"
},
{
 "mal_id": 813,
    "title": "Mushibugyou",
 "type": "ALL"
},
{
 "mal_id": 814,
    "title": "One Piece Movie 6: Omatsuri Danshaku to Himitsu no Shima",
 "type": "ALL"
},
{
 "mal_id": 815,
    "title": "Togainu no Chi",
 "type": "ALL"
},
{
 "mal_id": 816,
    "title": "Concrete Revolutio: Choujin Gensou",
 "type": "ALL"
},
{
 "mal_id": 817,
    "title": "Mo Dao Zu Shi: Xian Yun Pian",
 "type": "ALL"
},
{
 "mal_id": 818,
    "title": "Fate/kaleid liner Prisma☆Illya Movie: Sekka no Chikai",
 "type": "ALL"
},
{
 "mal_id": 819,
    "title": "Tokyo Majin Gakuen Kenpucho: Tou",
 "type": "ALL"
},
{
 "mal_id": 820,
    "title": "Hakuouki: Hekketsuroku",
 "type": "ALL"
},
{
 "mal_id": 821,
    "title": "Break Blade 1: Kakusei no Toki",
 "type": "ALL"
},
{
 "mal_id": 822,
    "title": "Buddy Complex",
 "type": "ALL"
},
{
 "mal_id": 823,
    "title": "Youjo Senki II",
 "type": "ALL"
},
{
 "mal_id": 824,
    "title": "Shakugan no Shana S",
 "type": "ALL"
},
{
 "mal_id": 825,
    "title": "Ling Qi",
 "type": "ALL"
},
{
 "mal_id": 826,
    "title": "Code Geass: Hangyaku no Lelouch III - Oudou",
 "type": "ALL"
},
{
 "mal_id": 827,
    "title": "Pokemon Movie 11: Giratina to Sora no Hanataba Sheimi",
 "type": "ALL"
},
{
 "mal_id": 828,
    "title": "One Piece Movie 2: Nejimaki-jima no Daibouken",
 "type": "ALL"
},
{
 "mal_id": 829,
    "title": "Shinmai Maou no Testament Departures",
 "type": "ALL"
},
{
 "mal_id": 830,
    "title": "Code Geass: Boukoku no Akito 5 - Itoshiki Mono-tachi e",
 "type": "ALL"
},
{
 "mal_id": 831,
    "title": "B: The Beginning Succession",
 "type": "ALL"
},
{
 "mal_id": 832,
    "title": "Strike Witches 2",
 "type": "ALL"
},
{
 "mal_id": 833,
    "title": "Blassreiter",
 "type": "ALL"
},
{
 "mal_id": 834,
    "title": "Shironeko Project: Zero Chronicle",
 "type": "ALL"
},
{
 "mal_id": 835,
    "title": "Vandread",
 "type": "ALL"
},
{
 "mal_id": 836,
    "title": "Chuunibyou demo Koi ga Shitai!: Depth of Field - Ai to Nikushimi Gekijou",
 "type": "ALL"
},
{
 "mal_id": 837,
    "title": "High School DxD Hero: Taiikukan-ura no Holy",
 "type": "ALL"
},
{
 "mal_id": 838,
    "title": "Mob Psycho 100: Reigen - Shirarezaru Kiseki no Reinouryokusha",
 "type": "ALL"
},
{
 "mal_id": 839,
    "title": "Kyoukaisenjou no Horizon II",
 "type": "ALL"
},
{
 "mal_id": 840,
    "title": "s.CRY.ed",
 "type": "ALL"
},
{
 "mal_id": 841,
    "title": "Pokemon Movie 09: Pokemon Ranger to Umi no Ouji Manaphy",
 "type": "ALL"
},
{
 "mal_id": 842,
    "title": "Persona: Trinity Soul",
 "type": "ALL"
},
{
 "mal_id": 843,
    "title": "Pokemon Movie 12: Arceus Choukoku no Jikuu e",
 "type": "ALL"
},
{
 "mal_id": 844,
    "title": "Captain Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 845,
    "title": "Psycho-Pass: Sinners of the System Case.3 - Onshuu no Kanata ni＿＿",
 "type": "ALL"
},
{
 "mal_id": 846,
    "title": "Mob Psycho 100: Dai Ikkai Rei toka Soudansho Ian Ryokou - Kokoro Mitasu Iyashi no Tabi",
 "type": "ALL"
},
{
 "mal_id": 847,
    "title": "Touken Ranbu: Hanamaru",
 "type": "ALL"
},
{
 "mal_id": 848,
    "title": "Etotama",
 "type": "ALL"
},
{
 "mal_id": 849,
    "title": "X",
 "type": "ALL"
},
{
 "mal_id": 850,
    "title": "Brotherhood: Final Fantasy XV",
 "type": "ALL"
},
{
 "mal_id": 851,
    "title": "World Trigger 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 852,
    "title": "Psycho-Pass: Sinners of the System Case.2 - First Guardian",
 "type": "ALL"
},
{
 "mal_id": 853,
    "title": "Persona 3 the Movie 2: Midsummer Knight's Dream",
 "type": "ALL"
},
{
 "mal_id": 854,
    "title": "Scarlet Nexus",
 "type": "ALL"
},
{
 "mal_id": 855,
    "title": "ViVid Strike!",
 "type": "ALL"
},
{
 "mal_id": 856,
    "title": "Digimon Adventure tri. 2: Ketsui",
 "type": "ALL"
},
{
 "mal_id": 857,
    "title": "Psycho-Pass 3: First Inspector",
 "type": "ALL"
},
{
 "mal_id": 858,
    "title": "Tears to Tiara",
 "type": "ALL"
},
{
 "mal_id": 859,
    "title": "Sacred Seven",
 "type": "ALL"
},
{
 "mal_id": 860,
    "title": "Ashita no Joe",
 "type": "ALL"
},
{
 "mal_id": 861,
    "title": "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
 "type": "ALL"
},
{
 "mal_id": 862,
    "title": "Steamboy",
 "type": "ALL"
},
{
 "mal_id": 863,
    "title": "Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen",
 "type": "ALL"
},
{
 "mal_id": 864,
    "title": "Owari no Seraph: Kyuuketsuki Shahar",
 "type": "ALL"
},
{
 "mal_id": 865,
    "title": "IS: Infinite Stratos 2 - World Purge-hen",
 "type": "ALL"
},
{
 "mal_id": 866,
    "title": "Kaibutsu Oujo",
 "type": "ALL"
},
{
 "mal_id": 867,
    "title": "Mahou Shoujo Tokushusen Asuka",
 "type": "ALL"
},
{
 "mal_id": 868,
    "title": "Kengan Ashura Part 2",
 "type": "ALL"
},
{
 "mal_id": 869,
    "title": "Bungou Stray Dogs 4th Season",
 "type": "ALL"
},
{
 "mal_id": 870,
    "title": "The Animatrix",
 "type": "ALL"
},
{
 "mal_id": 871,
    "title": "Vampire Hunter D",
 "type": "ALL"
},
{
 "mal_id": 872,
    "title": "Black Fox",
 "type": "ALL"
},
{
 "mal_id": 873,
    "title": "Ikkitousen: Dragon Destiny",
 "type": "ALL"
},
{
 "mal_id": 874,
    "title": "Ansatsu Kyoushitsu: Jump Festa 2013 Special",
 "type": "ALL"
},
{
 "mal_id": 875,
    "title": "Assault Lily: Bouquet",
 "type": "ALL"
},
{
 "mal_id": 876,
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Kaikou",
 "type": "ALL"
},
{
 "mal_id": 877,
    "title": "Shikabane Hime: Kuro",
 "type": "ALL"
},
{
 "mal_id": 878,
    "title": "Ex-Arm",
 "type": "ALL"
},
{
 "mal_id": 879,
    "title": "Toji no Miko",
 "type": "ALL"
},
{
 "mal_id": 880,
    "title": "Hanma Baki: Son of Ogre",
 "type": "ALL"
},
{
 "mal_id": 881,
    "title": "Shinmai Maou no Testament Burst: Toujou Basara no Shigoku Heiwa na Nichijou",
 "type": "ALL"
},
{
 "mal_id": 882,
    "title": "Kenka Banchou Otome: Girl Beats Boys",
 "type": "ALL"
},
{
 "mal_id": 883,
    "title": "Caligula (TV)",
 "type": "ALL"
},
{
 "mal_id": 884,
    "title": "Rozen Maiden (2013)",
 "type": "ALL"
},
{
 "mal_id": 885,
    "title": "Naruto: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo! - Konoha no Sato no Dai Undoukai",
 "type": "ALL"
},
{
 "mal_id": 886,
    "title": "Sousei no Aquarion",
 "type": "ALL"
},
{
 "mal_id": 887,
    "title": "Towa no Quon 1: Utakata no Kaben",
 "type": "ALL"
},
{
 "mal_id": 888,
    "title": "Gun x Sword",
 "type": "ALL"
},
{
 "mal_id": 889,
    "title": "Overlord: Ple Ple Pleiades",
 "type": "ALL"
},
{
 "mal_id": 890,
    "title": "Dragonaut: The Resonance",
 "type": "ALL"
},
{
 "mal_id": 891,
    "title": "One Piece Movie 3: Chinjuu-jima no Chopper Oukoku",
 "type": "ALL"
},
{
 "mal_id": 892,
    "title": "Overlord Movie 1: Fushisha no Ou",
 "type": "ALL"
},
{
 "mal_id": 893,
    "title": "Girly Air Force",
 "type": "ALL"
},
{
 "mal_id": 894,
    "title": "Shingeki no Kyojin: Chronicle",
 "type": "ALL"
},
{
 "mal_id": 895,
    "title": "Top wo Nerae 2! Diebuster",
 "type": "ALL"
},
{
 "mal_id": 896,
    "title": "Bubuki Buranki",
 "type": "ALL"
},
{
 "mal_id": 897,
    "title": "Pokemon: Mewtwo! Ware wa Koko ni Ari",
 "type": "ALL"
},
{
 "mal_id": 898,
    "title": "Ookamikakushi",
 "type": "ALL"
},
{
 "mal_id": 899,
    "title": "Macross Δ",
 "type": "ALL"
},
{
 "mal_id": 900,
    "title": "Drifters (OVA)",
 "type": "ALL"
},
{
 "mal_id": 901,
    "title": "No Guns Life 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 902,
    "title": "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
 "type": "ALL"
},
{
 "mal_id": 903,
    "title": "Appleseed (Movie)",
 "type": "ALL"
},
{
 "mal_id": 904,
    "title": "Urusei Yatsura",
 "type": "ALL"
},
{
 "mal_id": 905,
    "title": "Manyuu Hikenchou",
 "type": "ALL"
},
{
 "mal_id": 906,
    "title": "Grisaia: Phantom Trigger The Animation",
 "type": "ALL"
},
{
 "mal_id": 907,
    "title": "Kamisama Dolls",
 "type": "ALL"
},
{
 "mal_id": 908,
    "title": "One Piece Movie 5: Norowareta Seiken",
 "type": "ALL"
},
{
 "mal_id": 909,
    "title": "Dog Days''",
 "type": "ALL"
},
{
 "mal_id": 910,
    "title": "Gunslinger Stratos The Animation",
 "type": "ALL"
},
{
 "mal_id": 911,
    "title": "Strike the Blood IV",
 "type": "ALL"
},
{
 "mal_id": 912,
    "title": "Garo: Vanishing Line",
 "type": "ALL"
},
{
 "mal_id": 913,
    "title": "Nanatsu no Taizai: Eiyuu-tachi wa Hashagu",
 "type": "ALL"
},
{
 "mal_id": 914,
    "title": "Ibara no Ou",
 "type": "ALL"
},
{
 "mal_id": 915,
    "title": "Saint Seiya: The Lost Canvas - Meiou Shinwa 2",
 "type": "ALL"
},
{
 "mal_id": 916,
    "title": "Mardock Scramble: The First Compression",
 "type": "ALL"
},
{
 "mal_id": 917,
    "title": "Toshokan Sensou",
 "type": "ALL"
},
{
 "mal_id": 918,
    "title": "Juu Ou Sei",
 "type": "ALL"
},
{
 "mal_id": 919,
    "title": "City Hunter",
 "type": "ALL"
},
{
 "mal_id": 920,
    "title": "Digimon Adventure tri. 3: Kokuhaku",
 "type": "ALL"
},
{
 "mal_id": 921,
    "title": "Mugen no Juunin: Immortal",
 "type": "ALL"
},
{
 "mal_id": 922,
    "title": "Gundam Build Fighters",
 "type": "ALL"
},
{
 "mal_id": 923,
    "title": "Upotte!!",
 "type": "ALL"
},
{
 "mal_id": 924,
    "title": "Kemonozume",
 "type": "ALL"
},
{
 "mal_id": 925,
    "title": "Star Wars: Visions",
 "type": "ALL"
},
{
 "mal_id": 926,
    "title": "Dragon Ball GT: Gokuu Gaiden! Yuuki no Akashi wa Suushinchuu",
 "type": "ALL"
},
{
 "mal_id": 927,
    "title": "Yu☆Gi☆Oh! Zexal",
 "type": "ALL"
},
{
 "mal_id": 928,
    "title": "Rinne no Lagrange",
 "type": "ALL"
},
{
 "mal_id": 929,
    "title": "Accel World: Infinite∞Burst",
 "type": "ALL"
},
{
 "mal_id": 930,
    "title": "Orient",
 "type": "ALL"
},
{
 "mal_id": 931,
    "title": "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 1 - Wandering; Agateram",
 "type": "ALL"
},
{
 "mal_id": 932,
    "title": "Sengoku Basara Ni",
 "type": "ALL"
},
{
 "mal_id": 933,
    "title": "Yasuke",
 "type": "ALL"
},
{
 "mal_id": 934,
    "title": "R.O.D: The TV",
 "type": "ALL"
},
{
 "mal_id": 935,
    "title": "Kingdom 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 936,
    "title": "Persona 3 the Movie 3: Falling Down",
 "type": "ALL"
},
{
 "mal_id": 937,
    "title": "Phantasy Star Online 2 The Animation",
 "type": "ALL"
},
{
 "mal_id": 938,
    "title": "Black★Rock Shooter",
 "type": "ALL"
},
{
 "mal_id": 939,
    "title": "Captain Tsubasa (2018)",
 "type": "ALL"
},
{
 "mal_id": 940,
    "title": "Pokemon Movie 13: Genei no Hasha Zoroark",
 "type": "ALL"
},
{
 "mal_id": 941,
    "title": "Captain Earth",
 "type": "ALL"
},
{
 "mal_id": 942,
    "title": "Ao no Exorcist: Kyoto Fujouou-hen OVA",
 "type": "ALL"
},
{
 "mal_id": 943,
    "title": "Grappler Baki: Saidai Tournament-hen",
 "type": "ALL"
},
{
 "mal_id": 944,
    "title": "Release the Spyce",
 "type": "ALL"
},
{
 "mal_id": 945,
    "title": "Code Geass: Hangyaku no Lelouch II - Handou",
 "type": "ALL"
},
{
 "mal_id": 946,
    "title": "Kenzen Robo Daimidaler",
 "type": "ALL"
},
{
 "mal_id": 947,
    "title": "Blade of the Immortal",
 "type": "ALL"
},
{
 "mal_id": 948,
    "title": "Vividred Operation",
 "type": "ALL"
},
{
 "mal_id": 949,
    "title": "Ansatsu Kyoushitsu 2nd Season: Kagaijugyou-hen",
 "type": "ALL"
},
{
 "mal_id": 950,
    "title": "Final Fantasy VII: Last Order",
 "type": "ALL"
},
{
 "mal_id": 951,
    "title": "Super Dragon Ball Heroes",
 "type": "ALL"
},
{
 "mal_id": 952,
    "title": "Toaru Kagaku no Railgun: Misaka-san wa Ima Chuumoku no Mato Desu kara",
 "type": "ALL"
},
{
 "mal_id": 953,
    "title": "Overlord Movie 2: Shikkoku no Eiyuu",
 "type": "ALL"
},
{
 "mal_id": 954,
    "title": "Nobunagun",
 "type": "ALL"
},
{
 "mal_id": 955,
    "title": "Bem",
 "type": "ALL"
},
{
 "mal_id": 956,
    "title": "One Piece Movie 7: Karakuri-jou no Mecha Kyohei",
 "type": "ALL"
},
{
 "mal_id": 957,
    "title": "Cheating Craft",
 "type": "ALL"
},
{
 "mal_id": 958,
    "title": "Air Gear: Kuro no Hane to Nemuri no Mori - Break on the Sky",
 "type": "ALL"
},
{
 "mal_id": 959,
    "title": "Hitori no Shita: The Outcast 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 960,
    "title": "Gintama: Shiroyasha Koutan",
 "type": "ALL"
},
{
 "mal_id": 961,
    "title": "Persona 3 the Movie 4: Winter of Rebirth",
 "type": "ALL"
},
{
 "mal_id": 962,
    "title": "Sword Gai The Animation",
 "type": "ALL"
},
{
 "mal_id": 963,
    "title": "Mobile Suit Gundam: The Origin",
 "type": "ALL"
},
{
 "mal_id": 964,
    "title": "Subarashiki Kono Sekai The Animation",
 "type": "ALL"
},
{
 "mal_id": 965,
    "title": "Gibiate",
 "type": "ALL"
},
{
 "mal_id": 966,
    "title": "One Piece: Heart of Gold",
 "type": "ALL"
},
{
 "mal_id": 967,
    "title": "Lupin III (2015)",
 "type": "ALL"
},
{
 "mal_id": 968,
    "title": "K: Seven Stories Movie 1 - R:B - Blaze",
 "type": "ALL"
},
{
 "mal_id": 969,
    "title": "Pokemon (2019)",
 "type": "ALL"
},
{
 "mal_id": 970,
    "title": "Durarara!!x2 Shou: Watashi no Kokoro wa Nabe Moyou",
 "type": "ALL"
},
{
 "mal_id": 971,
    "title": "R.O.D: Read or Die",
 "type": "ALL"
},
{
 "mal_id": 972,
    "title": "Bakuten Shoot Beyblade 2002",
 "type": "ALL"
},
{
 "mal_id": 973,
    "title": "Fate/Extra: Last Encore - Illustrias Tendousetsu",
 "type": "ALL"
},
{
 "mal_id": 974,
    "title": "Sumomomo Momomo: Chijou Saikyou no Yome",
 "type": "ALL"
},
{
 "mal_id": 975,
    "title": "Karas",
 "type": "ALL"
},
{
 "mal_id": 976,
    "title": "Mahou Shoujo Lyrical Nanoha A's",
 "type": "ALL"
},
{
 "mal_id": 977,
    "title": "Nanatsu no Taizai: Imashime no Fukkatsu Joshou",
 "type": "ALL"
},
{
 "mal_id": 978,
    "title": "Rekka no Honoo",
 "type": "ALL"
},
{
 "mal_id": 979,
    "title": "One Piece: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna",
 "type": "ALL"
},
{
 "mal_id": 980,
    "title": "Ikkitousen: Great Guardians",
 "type": "ALL"
},
{
 "mal_id": 981,
    "title": "Naruto: Shippuuden - Shippuu! Konoha Gakuen Den",
 "type": "ALL"
},
{
 "mal_id": 982,
    "title": "Shakugan no Shana Movie",
 "type": "ALL"
},
{
 "mal_id": 983,
    "title": "JoJo no Kimyou na Bouken: Phantom Blood",
 "type": "ALL"
},
{
 "mal_id": 984,
    "title": "Shoumetsu Toshi",
 "type": "ALL"
},
{
 "mal_id": 985,
    "title": "Break Blade 2: Ketsubetsu no Michi",
 "type": "ALL"
},
{
 "mal_id": 986,
    "title": "Majutsushi Orphen Hagure Tabi",
 "type": "ALL"
},
{
 "mal_id": 987,
    "title": "Dragon Ball Movie 1: Shen Long no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 988,
    "title": "A Kite",
 "type": "ALL"
},
{
 "mal_id": 989,
    "title": "Lodoss-tou Senki",
 "type": "ALL"
},
{
 "mal_id": 990,
    "title": "Tatakau Shisho: The Book of Bantorra",
 "type": "ALL"
},
{
 "mal_id": 991,
    "title": "Cike Wu Liuqi",
 "type": "ALL"
},
{
 "mal_id": 992,
    "title": "Asura Cryin' 2",
 "type": "ALL"
},
{
 "mal_id": 993,
    "title": "Afro Samurai Movie",
 "type": "ALL"
},
{
 "mal_id": 994,
    "title": "Hakkenden: Touhou Hakken Ibun 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 995,
    "title": "One Piece Movie 8: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
 "type": "ALL"
},
{
 "mal_id": 996,
    "title": "Tsubasa: Shunraiki",
 "type": "ALL"
},
{
 "mal_id": 997,
    "title": "Pokemon Best Wishes! Season 2",
 "type": "ALL"
},
{
 "mal_id": 998,
    "title": "Tales of Zestiria the Cross: Saiyaku no Jidai",
 "type": "ALL"
},
{
 "mal_id": 999,
    "title": "Dogs: Bullets & Carnage",
 "type": "ALL"
},
{
 "mal_id": 1000,
    "title": "Rozen Maiden: Ouvertüre",
 "type": "ALL"
},
{
 "mal_id": 1001,
    "title": "Revisions",
 "type": "ALL"
},
{
 "mal_id": 1002,
    "title": "King's Raid: Ishi wo Tsugumono-tachi",
 "type": "ALL"
},
{
 "mal_id": 1003,
    "title": "Quanzhi Fashi II",
 "type": "ALL"
},
{
 "mal_id": 1004,
    "title": "Owari no Seraph: The Beginning of the End",
 "type": "ALL"
},
{
 "mal_id": 1005,
    "title": "Dragon Quest: Dai no Daibouken (2020)",
 "type": "ALL"
},
{
 "mal_id": 1006,
    "title": "Terra e... (TV)",
 "type": "ALL"
},
{
 "mal_id": 1007,
    "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia - Initium Iter",
 "type": "ALL"
},
{
 "mal_id": 1008,
    "title": "Gunslinger Girl: Il Teatrino",
 "type": "ALL"
},
{
 "mal_id": 1009,
    "title": "Kämpfer für die Liebe",
 "type": "ALL"
},
{
 "mal_id": 1010,
    "title": "Break Blade 3: Kyoujin no Ato",
 "type": "ALL"
},
{
 "mal_id": 1011,
    "title": "Mobile Suit Gundam 00 The Movie: A Wakening of the Trailblazer",
 "type": "ALL"
},
{
 "mal_id": 1012,
    "title": "One Piece Movie 9: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura",
 "type": "ALL"
},
{
 "mal_id": 1013,
    "title": "Monochrome Factor",
 "type": "ALL"
},
{
 "mal_id": 1014,
    "title": "Shin Tennis no Ouji-sama",
 "type": "ALL"
},
{
 "mal_id": 1015,
    "title": "Godzilla 1: Kaijuu Wakusei",
 "type": "ALL"
},
{
 "mal_id": 1016,
    "title": "Godzilla: S.P",
 "type": "ALL"
},
{
 "mal_id": 1017,
    "title": "Dragon Ball Movie 2: Majinjou no Nemurihime",
 "type": "ALL"
},
{
 "mal_id": 1018,
    "title": "Lupin the Third: Mine Fujiko to Iu Onna",
 "type": "ALL"
},
{
 "mal_id": 1019,
    "title": "Break Blade 4: Sanka no Chi",
 "type": "ALL"
},
{
 "mal_id": 1020,
    "title": "Yu☆Gi☆Oh! Arc-V",
 "type": "ALL"
},
{
 "mal_id": 1021,
    "title": "Shingeki no Kyojin Season 2 Movie: Kakusei no Houkou",
 "type": "ALL"
},
{
 "mal_id": 1022,
    "title": "Shangri-La",
 "type": "ALL"
},
{
 "mal_id": 1023,
    "title": "Amatsuki",
 "type": "ALL"
},
{
 "mal_id": 1024,
    "title": "IS: Infinite Stratos 2 - Hitonatsu no Omoide",
 "type": "ALL"
},
{
 "mal_id": 1025,
    "title": "Wizard Barristers: Benmashi Cecil",
 "type": "ALL"
},
{
 "mal_id": 1026,
    "title": "Maken-Ki! OVA",
 "type": "ALL"
},
{
 "mal_id": 1027,
    "title": "Mobile Suit Gundam Wing: Endless Waltz Special",
 "type": "ALL"
},
{
 "mal_id": 1028,
    "title": "M3: Sono Kuroki Hagane",
 "type": "ALL"
},
{
 "mal_id": 1029,
    "title": "Murder Princess",
 "type": "ALL"
},
{
 "mal_id": 1030,
    "title": "Kingsglaive: Final Fantasy XV",
 "type": "ALL"
},
{
 "mal_id": 1031,
    "title": "Senyuu. 2",
 "type": "ALL"
},
{
 "mal_id": 1032,
    "title": "Senki Zesshou Symphogear G",
 "type": "ALL"
},
{
 "mal_id": 1033,
    "title": "Arifureta Shokugyou de Sekai Saikyou Specials",
 "type": "ALL"
},
{
 "mal_id": 1034,
    "title": "Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu",
 "type": "ALL"
},
{
 "mal_id": 1035,
    "title": "Peace Maker Kurogane",
 "type": "ALL"
},
{
 "mal_id": 1036,
    "title": "Brave Witches",
 "type": "ALL"
},
{
 "mal_id": 1037,
    "title": "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1038,
    "title": "Hakuouki: Reimeiroku",
 "type": "ALL"
},
{
 "mal_id": 1039,
    "title": "Overlord: Ple Ple Pleiades - Nazarick Saidai no Kiki",
 "type": "ALL"
},
{
 "mal_id": 1040,
    "title": "Hidan no Aria: Butei ga Kitarite Onsen Kenshuu",
 "type": "ALL"
},
{
 "mal_id": 1041,
    "title": "Angolmois: Genkou Kassenki",
 "type": "ALL"
},
{
 "mal_id": 1042,
    "title": "Yuusha, Yamemasu",
 "type": "ALL"
},
{
 "mal_id": 1043,
    "title": "Dragon Ball Movie 4: Saikyou e no Michi",
 "type": "ALL"
},
{
 "mal_id": 1044,
    "title": "Break Blade 5: Shisen no Hate",
 "type": "ALL"
},
{
 "mal_id": 1045,
    "title": "Planet With",
 "type": "ALL"
},
{
 "mal_id": 1046,
    "title": "Nanatsu no Taizai Movie 2: Hikari ni Norowareshi Mono-tachi",
 "type": "ALL"
},
{
 "mal_id": 1047,
    "title": "Musaigen no Phantom World: Mizutama no Kiseki",
 "type": "ALL"
},
{
 "mal_id": 1048,
    "title": "Mo Dao Zu Shi: Wanjie Pian",
 "type": "ALL"
},
{
 "mal_id": 1049,
    "title": "Detective Conan Movie 13: The Raven Chaser",
 "type": "ALL"
},
{
 "mal_id": 1050,
    "title": "Digimon Adventure tri. 4: Soushitsu",
 "type": "ALL"
},
{
 "mal_id": 1051,
    "title": "One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari",
 "type": "ALL"
},
{
 "mal_id": 1052,
    "title": "Grenadier: Hohoemi no Senshi",
 "type": "ALL"
},
{
 "mal_id": 1053,
    "title": "Break Blade 6: Doukoku no Toride",
 "type": "ALL"
},
{
 "mal_id": 1054,
    "title": "Shijou Saikyou no Deshi Kenichi OVA",
 "type": "ALL"
},
{
 "mal_id": 1055,
    "title": "Gintama: The Semi-Final",
 "type": "ALL"
},
{
 "mal_id": 1056,
    "title": "Shounen Onmyouji",
 "type": "ALL"
},
{
 "mal_id": 1057,
    "title": "One Punch Man 2nd Season Commemorative Special",
 "type": "ALL"
},
{
 "mal_id": 1058,
    "title": "Ginga Kikoutai Majestic Prince",
 "type": "ALL"
},
{
 "mal_id": 1059,
    "title": "Galilei Donna",
 "type": "ALL"
},
{
 "mal_id": 1060,
    "title": "Ao no 6-gou",
 "type": "ALL"
},
{
 "mal_id": 1061,
    "title": "Gintama: Nanigoto mo Saiyo ga Kanjin nano de Tasho Senobisuru Kurai ga Choudoyoi",
 "type": "ALL"
},
{
 "mal_id": 1062,
    "title": "Kamikaze Kaitou Jeanne",
 "type": "ALL"
},
{
 "mal_id": 1063,
    "title": "One Piece 3D: Mugiwara Chase",
 "type": "ALL"
},
{
 "mal_id": 1064,
    "title": "Gensoumaden Saiyuuki",
 "type": "ALL"
},
{
 "mal_id": 1065,
    "title": "Saredo Tsumibito wa Ryuu to Odoru",
 "type": "ALL"
},
{
 "mal_id": 1066,
    "title": "Captain Tsubasa: Road to 2002",
 "type": "ALL"
},
{
 "mal_id": 1067,
    "title": "Dragon Ball Movie 3: Makafushigi Daibouken",
 "type": "ALL"
},
{
 "mal_id": 1068,
    "title": "Hypnosis Mic: Division Rap Battle - Rhyme Anima",
 "type": "ALL"
},
{
 "mal_id": 1069,
    "title": "Persona 5 the Animation: The Day Breakers",
 "type": "ALL"
},
{
 "mal_id": 1070,
    "title": "Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram",
 "type": "ALL"
},
{
 "mal_id": 1071,
    "title": "Vandread: The Second Stage",
 "type": "ALL"
},
{
 "mal_id": 1072,
    "title": "Sekai de Ichiban Tsuyoku Naritai!",
 "type": "ALL"
},
{
 "mal_id": 1073,
    "title": "Fate/Grand Order: Shuukyoku Tokuiten - Kani Jikan Shinden Solomon",
 "type": "ALL"
},
{
 "mal_id": 1074,
    "title": "Digimon Adventure:",
 "type": "ALL"
},
{
 "mal_id": 1075,
    "title": "Under the Dog",
 "type": "ALL"
},
{
 "mal_id": 1076,
    "title": "Mahou Shoujo Lyrical Nanoha StrikerS",
 "type": "ALL"
},
{
 "mal_id": 1077,
    "title": "Detective Conan Movie 14: The Lost Ship in the Sky",
 "type": "ALL"
},
{
 "mal_id": 1078,
    "title": "Tales of Symphonia The Animation: Sylvarant-hen",
 "type": "ALL"
},
{
 "mal_id": 1079,
    "title": "Durarara!!x2 Ketsu: Dufufufu!!",
 "type": "ALL"
},
{
 "mal_id": 1080,
    "title": "Queen's Blade: Gyokuza wo Tsugu Mono",
 "type": "ALL"
},
{
 "mal_id": 1081,
    "title": "Captain Herlock",
 "type": "ALL"
},
{
 "mal_id": 1082,
    "title": "Ninja Batman",
 "type": "ALL"
},
{
 "mal_id": 1083,
    "title": "Pokemon Generations",
 "type": "ALL"
},
{
 "mal_id": 1084,
    "title": "Cardfight!! Vanguard",
 "type": "ALL"
},
{
 "mal_id": 1085,
    "title": "Fate/Grand Order: Moonlight/Lostroom",
 "type": "ALL"
},
{
 "mal_id": 1086,
    "title": "Noblesse: Pamyeol-ui Sijak",
 "type": "ALL"
},
{
 "mal_id": 1087,
    "title": "Durarara!!x2 Ten: Onoroke Chakapoko",
 "type": "ALL"
},
{
 "mal_id": 1088,
    "title": "Kidou Senkan Nadesico",
 "type": "ALL"
},
{
 "mal_id": 1089,
    "title": "Tetsuwan Birdy Decode:02",
 "type": "ALL"
},
{
 "mal_id": 1090,
    "title": "Hortensia Saga (TV)",
 "type": "ALL"
},
{
 "mal_id": 1091,
    "title": "Naruto Soyokazeden Movie: Naruto to Mashin to Mitsu no Onegai Dattebayo!!",
 "type": "ALL"
},
{
 "mal_id": 1092,
    "title": "Naruto x UT",
 "type": "ALL"
},
{
 "mal_id": 1093,
    "title": "Pokemon Movie 20: Kimi ni Kimeta!",
 "type": "ALL"
},
{
 "mal_id": 1094,
    "title": "Fairy Tail: 100 Years Quest",
 "type": "ALL"
},
{
 "mal_id": 1095,
    "title": "Naruto: The Cross Roads",
 "type": "ALL"
},
{
 "mal_id": 1096,
    "title": "MÄR",
 "type": "ALL"
},
{
 "mal_id": 1097,
    "title": "Muhyo to Rouji no Mahouritsu Soudan Jimusho",
 "type": "ALL"
},
{
 "mal_id": 1098,
    "title": "Aoi Sekai no Chuushin de",
 "type": "ALL"
},
{
 "mal_id": 1099,
    "title": "Seikai no Monshou",
 "type": "ALL"
},
{
 "mal_id": 1100,
    "title": "Tenchi Muyou! Ryououki",
 "type": "ALL"
},
{
 "mal_id": 1101,
    "title": "Dragon Ball: Ossu! Kaettekita Son Gokuu to Nakama-tachi!!",
 "type": "ALL"
},
{
 "mal_id": 1102,
    "title": "Ni no Kuni",
 "type": "ALL"
},
{
 "mal_id": 1103,
    "title": "Neppuu Kairiku Bushi Road",
 "type": "ALL"
},
{
 "mal_id": 1104,
    "title": "Mobile Suit Gundam Thunderbolt",
 "type": "ALL"
},
{
 "mal_id": 1105,
    "title": "91 Days: Toki no Asase/Subete no Kinou/Ashita, Mata Ashita",
 "type": "ALL"
},
{
 "mal_id": 1106,
    "title": "Tales of Vesperia: The First Strike",
 "type": "ALL"
},
{
 "mal_id": 1107,
    "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II: Past & Future",
 "type": "ALL"
},
{
 "mal_id": 1108,
    "title": "Ragnarök The Animation",
 "type": "ALL"
},
{
 "mal_id": 1109,
    "title": "Tenshi Kinryouku",
 "type": "ALL"
},
{
 "mal_id": 1110,
    "title": "Zero no Tsukaima: Princesses no Rondo Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 1111,
    "title": "Phi Brain: Kami no Puzzle - Orpheus Order-hen",
 "type": "ALL"
},
{
 "mal_id": 1112,
    "title": "Imawa no Kuni no Alice (OVA)",
 "type": "ALL"
},
{
 "mal_id": 1113,
    "title": "Ikkitousen: Xtreme Xecutor",
 "type": "ALL"
},
{
 "mal_id": 1114,
    "title": "Seven Knights Revolution: Eiyuu no Keishousha",
 "type": "ALL"
},
{
 "mal_id": 1115,
    "title": "Zoids",
 "type": "ALL"
},
{
 "mal_id": 1116,
    "title": "Seirei Gensouki 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1117,
    "title": "One Piece: Romance Dawn Story",
 "type": "ALL"
},
{
 "mal_id": 1118,
    "title": "Saint Seiya: Meiou Hades Meikai-hen",
 "type": "ALL"
},
{
 "mal_id": 1119,
    "title": "Digimon Adventure tri. 5: Kyousei",
 "type": "ALL"
},
{
 "mal_id": 1120,
    "title": "Bayonetta: Bloody Fate",
 "type": "ALL"
},
{
 "mal_id": 1121,
    "title": "ēlDLIVE",
 "type": "ALL"
},
{
 "mal_id": 1122,
    "title": "Saint Seiya Omega",
 "type": "ALL"
},
{
 "mal_id": 1123,
    "title": "Koihime†Musou",
 "type": "ALL"
},
{
 "mal_id": 1124,
    "title": "RideBack",
 "type": "ALL"
},
{
 "mal_id": 1125,
    "title": "Shijou Saikyou no Daimaou, Murabito A ni Tensei suru",
 "type": "ALL"
},
{
 "mal_id": 1126,
    "title": "Mobile Suit Gundam Wing: Endless Waltz",
 "type": "ALL"
},
{
 "mal_id": 1127,
    "title": "Code Geass: Hangyaku no Lelouch R2 Special Edition - Zero Requiem",
 "type": "ALL"
},
{
 "mal_id": 1128,
    "title": "Sword Art Online: Alicization - War of Underworld Reflection",
 "type": "ALL"
},
{
 "mal_id": 1129,
    "title": "One Piece: Episode of Luffy - Hand Island no Bouken",
 "type": "ALL"
},
{
 "mal_id": 1130,
    "title": "Digimon Xros Wars",
 "type": "ALL"
},
{
 "mal_id": 1131,
    "title": "Initial D Extra Stage",
 "type": "ALL"
},
{
 "mal_id": 1132,
    "title": "Wu Liuqi Zhi Zui Qiang Fa Xing Shi",
 "type": "ALL"
},
{
 "mal_id": 1133,
    "title": "Bakuten Shoot Beyblade G Revolution",
 "type": "ALL"
},
{
 "mal_id": 1134,
    "title": "Soukyuu no Fafner: Dead Aggressor",
 "type": "ALL"
},
{
 "mal_id": 1135,
    "title": "Pokemon Movie 15: Kyurem vs. Seikenshi",
 "type": "ALL"
},
{
 "mal_id": 1136,
    "title": "Tsubasa Chronicle: Tori Kago no Kuni no Himegimi",
 "type": "ALL"
},
{
 "mal_id": 1137,
    "title": "Goblin Slayer: Bouken Kiroku Youshi - Adventure Sheet",
 "type": "ALL"
},
{
 "mal_id": 1138,
    "title": "Kyousou Giga",
 "type": "ALL"
},
{
 "mal_id": 1139,
    "title": "Kara no Kyoukai Remix: Gate of Seventh Heaven",
 "type": "ALL"
},
{
 "mal_id": 1140,
    "title": "Baraou no Souretsu",
 "type": "ALL"
},
{
 "mal_id": 1141,
    "title": "Koukaku Kidoutai: Shin Movie",
 "type": "ALL"
},
{
 "mal_id": 1142,
    "title": "Busou Shoujo Machiavellianism: Doki! Goken-darake no Ian Ryokou",
 "type": "ALL"
},
{
 "mal_id": 1143,
    "title": "Sengoku Otome: Momoiro Paradox",
 "type": "ALL"
},
{
 "mal_id": 1144,
    "title": "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou 2nd Season Part 2",
 "type": "ALL"
},
{
 "mal_id": 1145,
    "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana",
 "type": "ALL"
},
{
 "mal_id": 1146,
    "title": "Zettai Karen Children",
 "type": "ALL"
},
{
 "mal_id": 1147,
    "title": "Kiddy Grade",
 "type": "ALL"
},
{
 "mal_id": 1148,
    "title": "Tensei shitara Slime Datta Ken: Kanwa - Hinata Sakaguchi",
 "type": "ALL"
},
{
 "mal_id": 1149,
    "title": "Freezing Specials",
 "type": "ALL"
},
{
 "mal_id": 1150,
    "title": "Tokkou",
 "type": "ALL"
},
{
 "mal_id": 1151,
    "title": "Youjuu Toshi",
 "type": "ALL"
},
{
 "mal_id": 1152,
    "title": "Gunsmith Cats",
 "type": "ALL"
},
{
 "mal_id": 1153,
    "title": "Dragon Ball Kai: Mirai ni Heiwa wo! Goku no Tamashii yo Eien ni",
 "type": "ALL"
},
{
 "mal_id": 1154,
    "title": "Ajin OVA",
 "type": "ALL"
},
{
 "mal_id": 1155,
    "title": "Koukaku no Pandora",
 "type": "ALL"
},
{
 "mal_id": 1156,
    "title": "Senkou no Night Raid",
 "type": "ALL"
},
{
 "mal_id": 1157,
    "title": "Tennis no Ouji-sama: Zenkoku Taikai-hen",
 "type": "ALL"
},
{
 "mal_id": 1158,
    "title": "Phantom in the Twilight",
 "type": "ALL"
},
{
 "mal_id": 1159,
    "title": "Last Exile: Ginyoku no Fam",
 "type": "ALL"
},
{
 "mal_id": 1160,
    "title": "Fairy Gone 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1161,
    "title": "Senki Zesshou Symphogear GX",
 "type": "ALL"
},
{
 "mal_id": 1162,
    "title": "Shirogane no Ishi: Argevollen",
 "type": "ALL"
},
{
 "mal_id": 1163,
    "title": "Ajin Part 1: Shoudou",
 "type": "ALL"
},
{
 "mal_id": 1164,
    "title": "Youjo Senki: Sabaku no Pasta Daisakusen",
 "type": "ALL"
},
{
 "mal_id": 1165,
    "title": "Dorohedoro: Ma no Omake",
 "type": "ALL"
},
{
 "mal_id": 1166,
    "title": "Futari wa Precure",
 "type": "ALL"
},
{
 "mal_id": 1167,
    "title": "Quanzhi Fashi III",
 "type": "ALL"
},
{
 "mal_id": 1168,
    "title": "Macross: Do You Remember Love?",
 "type": "ALL"
},
{
 "mal_id": 1169,
    "title": "Makai Senki Disgaea",
 "type": "ALL"
},
{
 "mal_id": 1170,
    "title": "Koutetsujou no Kabaneri Movie 1: Tsudou Hikari",
 "type": "ALL"
},
{
 "mal_id": 1171,
    "title": "Bakugan Battle Brawlers: Gundalian Invaders",
 "type": "ALL"
},
{
 "mal_id": 1172,
    "title": "Bakugan Battle Brawlers: Mechtanium Surge",
 "type": "ALL"
},
{
 "mal_id": 1173,
    "title": "Turn A Gundam",
 "type": "ALL"
},
{
 "mal_id": 1174,
    "title": "Shining Hearts: Shiawase no Pan",
 "type": "ALL"
},
{
 "mal_id": 1175,
    "title": "Koutetsujou no Kabaneri Movie 2: Moeru Inochi",
 "type": "ALL"
},
{
 "mal_id": 1176,
    "title": "Kurogane no Linebarrels",
 "type": "ALL"
},
{
 "mal_id": 1177,
    "title": "Tengen Toppa Gurren Lagann: Mitee Mono wa Miteen da!!",
 "type": "ALL"
},
{
 "mal_id": 1178,
    "title": "Ninja Slayer From Animation",
 "type": "ALL"
},
{
 "mal_id": 1179,
    "title": "Digimon Adventure tri. 6: Bokura no Mirai",
 "type": "ALL"
},
{
 "mal_id": 1180,
    "title": "Allison to Lillia",
 "type": "ALL"
},
{
 "mal_id": 1181,
    "title": "Majutsushi Orphen",
 "type": "ALL"
},
{
 "mal_id": 1182,
    "title": "Ashita no Joe 2",
 "type": "ALL"
},
{
 "mal_id": 1183,
    "title": "Quanzhi Gaoshou Zhi Dianfeng Rongyao",
 "type": "ALL"
},
{
 "mal_id": 1184,
    "title": "Pokemon Movie 16: Shinsoku no Genosect - Mewtwo Kakusei",
 "type": "ALL"
},
{
 "mal_id": 1185,
    "title": "Brave Story",
 "type": "ALL"
},
{
 "mal_id": 1186,
    "title": "Monster Farm: Enbanseki no Himitsu",
 "type": "ALL"
},
{
 "mal_id": 1187,
    "title": "Ling Qi 2",
 "type": "ALL"
},
{
 "mal_id": 1188,
    "title": "One Piece Film: Red",
 "type": "ALL"
},
{
 "mal_id": 1189,
    "title": "Shonan Junai Gumi!",
 "type": "ALL"
},
{
 "mal_id": 1190,
    "title": "Senyoku no Sigrdrifa",
 "type": "ALL"
},
{
 "mal_id": 1191,
    "title": "Wu Shan Wu Xing (2020)",
 "type": "ALL"
},
{
 "mal_id": 1192,
    "title": "Yu☆Gi☆Oh! VRAINS",
 "type": "ALL"
},
{
 "mal_id": 1193,
    "title": "86 Special Edition: Senya ni Akaku Hinageshi no Saku",
 "type": "ALL"
},
{
 "mal_id": 1194,
    "title": "Grimms Notes The Animation",
 "type": "ALL"
},
{
 "mal_id": 1195,
    "title": "Gundam Build Fighters Try",
 "type": "ALL"
},
{
 "mal_id": 1196,
    "title": "Pokemon Best Wishes! Season 2: Episode N",
 "type": "ALL"
},
{
 "mal_id": 1197,
    "title": "Fate/stay night TV Reproduction",
 "type": "ALL"
},
{
 "mal_id": 1198,
    "title": "Hellsing: Digest for Freaks",
 "type": "ALL"
},
{
 "mal_id": 1199,
    "title": "Lord of Vermilion: Guren no Ou",
 "type": "ALL"
},
{
 "mal_id": 1200,
    "title": "Ouritsu Uchuugun: Honneamise no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1201,
    "title": "Super Crooks",
 "type": "ALL"
},
{
 "mal_id": 1202,
    "title": "Strike Witches Movie",
 "type": "ALL"
},
{
 "mal_id": 1203,
    "title": "Hitsugi no Chaika: Nerawareta Hitsugi/Yomigaeru Iseki",
 "type": "ALL"
},
{
 "mal_id": 1204,
    "title": "Pumpkin Scissors",
 "type": "ALL"
},
{
 "mal_id": 1205,
    "title": "Kamen no Maid Guy",
 "type": "ALL"
},
{
 "mal_id": 1206,
    "title": ".hack//Quantum",
 "type": "ALL"
},
{
 "mal_id": 1207,
    "title": "Tensei shitara Slime Datta Ken 2nd Season: Kanwa - Veldora Nikki 2",
 "type": "ALL"
},
{
 "mal_id": 1208,
    "title": "Kemeko Deluxe!",
 "type": "ALL"
},
{
 "mal_id": 1209,
    "title": "Code Geass: Hangyaku no Lelouch Special Edition - Black Rebellion",
 "type": "ALL"
},
{
 "mal_id": 1210,
    "title": "Gintama: Yorinuki Gintama-san on Theater 2D",
 "type": "ALL"
},
{
 "mal_id": 1211,
    "title": "Queen's Blade: Rebellion",
 "type": "ALL"
},
{
 "mal_id": 1212,
    "title": "Suisei no Gargantia: Meguru Kouro, Haruka",
 "type": "ALL"
},
{
 "mal_id": 1213,
    "title": "Suisei no Gargantia Specials",
 "type": "ALL"
},
{
 "mal_id": 1214,
    "title": "Golgo 13 (TV)",
 "type": "ALL"
},
{
 "mal_id": 1215,
    "title": "First Squad: The Moment of Truth",
 "type": "ALL"
},
{
 "mal_id": 1216,
    "title": "Gintama: Shinyaku Benizakura-hen",
 "type": "ALL"
},
{
 "mal_id": 1217,
    "title": "Halo Legends",
 "type": "ALL"
},
{
 "mal_id": 1218,
    "title": "RErideD: Tokigoe no Derrida",
 "type": "ALL"
},
{
 "mal_id": 1219,
    "title": "Mardock Scramble: The Second Combustion",
 "type": "ALL"
},
{
 "mal_id": 1220,
    "title": "Lupin III: Part 5",
 "type": "ALL"
},
{
 "mal_id": 1221,
    "title": "Sword Art Online: Alicization - Recollection",
 "type": "ALL"
},
{
 "mal_id": 1222,
    "title": "Kekkai Sensen: Ousama no Restaurant no Ousama",
 "type": "ALL"
},
{
 "mal_id": 1223,
    "title": "Saint Seiya: Meiou Hades Elysion-hen",
 "type": "ALL"
},
{
 "mal_id": 1224,
    "title": "Koukaku Kidoutai: Stand Alone Complex - The Laughing Man",
 "type": "ALL"
},
{
 "mal_id": 1225,
    "title": "Pokemon Best Wishes! Season 2: Decolora Adventure",
 "type": "ALL"
},
{
 "mal_id": 1226,
    "title": "Dolls' Frontline",
 "type": "ALL"
},
{
 "mal_id": 1227,
    "title": "Appleseed Saga Ex Machina",
 "type": "ALL"
},
{
 "mal_id": 1228,
    "title": "Saiyuuki Reload Blast",
 "type": "ALL"
},
{
 "mal_id": 1229,
    "title": "Senran Kagura Shinovi Master: Tokyo Youma-hen",
 "type": "ALL"
},
{
 "mal_id": 1230,
    "title": "Detective Conan Movie 18: The Sniper from Another Dimension",
 "type": "ALL"
},
{
 "mal_id": 1231,
    "title": "Big Order",
 "type": "ALL"
},
{
 "mal_id": 1232,
    "title": "Akuma no Riddle: Shousha wa Dare? Nukiuchi Test",
 "type": "ALL"
},
{
 "mal_id": 1233,
    "title": "Bakumatsu Kikansetsu Irohanihoheto",
 "type": "ALL"
},
{
 "mal_id": 1234,
    "title": "Full Metal Panic! The Second Raid Episode 00",
 "type": "ALL"
},
{
 "mal_id": 1235,
    "title": "Heroman",
 "type": "ALL"
},
{
 "mal_id": 1236,
    "title": "KanColle Movie",
 "type": "ALL"
},
{
 "mal_id": 1237,
    "title": "Kuroshitsuji Recap",
 "type": "ALL"
},
{
 "mal_id": 1238,
    "title": "Sora wo Miageru Shoujo no Hitomi ni Utsuru Sekai",
 "type": "ALL"
},
{
 "mal_id": 1239,
    "title": "Black Clover: Jump Festa 2016 Special",
 "type": "ALL"
},
{
 "mal_id": 1240,
    "title": "Nihon Animator Mihonichi",
 "type": "ALL"
},
{
 "mal_id": 1241,
    "title": "Yozakura Quartet: Hoshi no Umi",
 "type": "ALL"
},
{
 "mal_id": 1242,
    "title": "Kekkai Sensen: Soresaemo Saitei de Saikou na Hibi",
 "type": "ALL"
},
{
 "mal_id": 1243,
    "title": "Hayate no Gotoku!!: Atsu ga Natsuize - Mizugi-hen!",
 "type": "ALL"
},
{
 "mal_id": 1244,
    "title": "Guilty Crown: Kiseki - Reassortment",
 "type": "ALL"
},
{
 "mal_id": 1245,
    "title": "Dragon Ball Super: Super Hero",
 "type": "ALL"
},
{
 "mal_id": 1246,
    "title": "Smile Precure!",
 "type": "ALL"
},
{
 "mal_id": 1247,
    "title": "Towa no Quon 2: Konton no Ranbu",
 "type": "ALL"
},
{
 "mal_id": 1248,
    "title": "Zhen Hun Jie",
 "type": "ALL"
},
{
 "mal_id": 1249,
    "title": "Towa no Quon 6: Towa no Quon",
 "type": "ALL"
},
{
 "mal_id": 1250,
    "title": "Gintama': Futon ni Haitte kara Buki Nokoshi ni Kizuite Neru ni Nerenai Toki mo Aru",
 "type": "ALL"
},
{
 "mal_id": 1251,
    "title": "Sweat Punch",
 "type": "ALL"
},
{
 "mal_id": 1252,
    "title": "Beelzebub: Hirotta Akachan wa Daimaou!?",
 "type": "ALL"
},
{
 "mal_id": 1253,
    "title": "Godzilla 2: Kessen Kidou Zoushoku Toshi",
 "type": "ALL"
},
{
 "mal_id": 1254,
    "title": "Air Master",
 "type": "ALL"
},
{
 "mal_id": 1255,
    "title": "Busou Shinki",
 "type": "ALL"
},
{
 "mal_id": 1256,
    "title": "Kyuuketsuhime Miyu (TV)",
 "type": "ALL"
},
{
 "mal_id": 1257,
    "title": "Sword Art Online Alternative: Gun Gale Online - Refrain",
 "type": "ALL"
},
{
 "mal_id": 1258,
    "title": "Princess Principal: Crown Handler Movie 1",
 "type": "ALL"
},
{
 "mal_id": 1259,
    "title": "KanColle: Itsuka Ano Umi de",
 "type": "ALL"
},
{
 "mal_id": 1260,
    "title": "Akame ga Kill! Recap",
 "type": "ALL"
},
{
 "mal_id": 1261,
    "title": "Panty & Stocking in Sanitarybox",
 "type": "ALL"
},
{
 "mal_id": 1262,
    "title": "Last Period: Owarinaki Rasen no Monogatari",
 "type": "ALL"
},
{
 "mal_id": 1263,
    "title": "Detective Conan Movie 20: The Darkest Nightmare",
 "type": "ALL"
},
{
 "mal_id": 1264,
    "title": "Rockman.EXE",
 "type": "ALL"
},
{
 "mal_id": 1265,
    "title": "Code Geass: Hangyaku no Lelouch Recaps",
 "type": "ALL"
},
{
 "mal_id": 1266,
    "title": "Mahoutsukai Reimeiki",
 "type": "ALL"
},
{
 "mal_id": 1267,
    "title": "Cannon Busters",
 "type": "ALL"
},
{
 "mal_id": 1268,
    "title": "Seireitsukai no Blade Dance Specials",
 "type": "ALL"
},
{
 "mal_id": 1269,
    "title": "Kishin Houkou Demonbane (TV)",
 "type": "ALL"
},
{
 "mal_id": 1270,
    "title": "JoJo no Kimyou na Bouken Part 5: Ougon no Kaze Recaps",
 "type": "ALL"
},
{
 "mal_id": 1271,
    "title": "Back Arrow",
 "type": "ALL"
},
{
 "mal_id": 1272,
    "title": "Final Fantasy: Unlimited",
 "type": "ALL"
},
{
 "mal_id": 1273,
    "title": "Yu☆Gi☆Oh! Zexal Second",
 "type": "ALL"
},
{
 "mal_id": 1274,
    "title": "Cencoroll Connect",
 "type": "ALL"
},
{
 "mal_id": 1275,
    "title": "Ginga Eiyuu Densetsu: Waga Yuku wa Hoshi no Taikai",
 "type": "ALL"
},
{
 "mal_id": 1276,
    "title": "Genius Party",
 "type": "ALL"
},
{
 "mal_id": 1277,
    "title": "Machine-Doll wa Kizutsukanai Specials",
 "type": "ALL"
},
{
 "mal_id": 1278,
    "title": "Tennis no Ouji-sama: Zenkoku Taikai-hen - Semifinal",
 "type": "ALL"
},
{
 "mal_id": 1279,
    "title": "Towa no Quon 3: Mugen no Renza",
 "type": "ALL"
},
{
 "mal_id": 1280,
    "title": "Tokyo Majin Gakuen Kenpucho: Tou Dai Ni Maku",
 "type": "ALL"
},
{
 "mal_id": 1281,
    "title": "Terra Formars: Bugs 2-hen",
 "type": "ALL"
},
{
 "mal_id": 1282,
    "title": "Wangan Midnight",
 "type": "ALL"
},
{
 "mal_id": 1283,
    "title": "X/1999",
 "type": "ALL"
},
{
 "mal_id": 1284,
    "title": "Digimon Adventure: Last Evolution Kizuna",
 "type": "ALL"
},
{
 "mal_id": 1285,
    "title": "Aoharu x Kikanjuu: Kemono-tachi no Senjou da na!",
 "type": "ALL"
},
{
 "mal_id": 1286,
    "title": "One Piece: Episode of Sabo - 3 Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi",
 "type": "ALL"
},
{
 "mal_id": 1287,
    "title": "Phi Brain: Kami no Puzzle - Shukuteki! Rätsel-hen",
 "type": "ALL"
},
{
 "mal_id": 1288,
    "title": "Initial D Extra Stage 2",
 "type": "ALL"
},
{
 "mal_id": 1289,
    "title": "Double Decker! Doug & Kirill",
 "type": "ALL"
},
{
 "mal_id": 1290,
    "title": "Gintama: Dai Hanseikai",
 "type": "ALL"
},
{
 "mal_id": 1291,
    "title": "Shachou, Battle no Jikan Desu!",
 "type": "ALL"
},
{
 "mal_id": 1292,
    "title": "God Eater Prologue",
 "type": "ALL"
},
{
 "mal_id": 1293,
    "title": "Towa no Quon 4: Guren no Shoushin",
 "type": "ALL"
},
{
 "mal_id": 1294,
    "title": "Senki Zesshou Symphogear XV",
 "type": "ALL"
},
{
 "mal_id": 1295,
    "title": "Basilisk: Ouka Ninpouchou",
 "type": "ALL"
},
{
 "mal_id": 1296,
    "title": "Detective Conan Movie 19: The Hellfire Sunflowers",
 "type": "ALL"
},
{
 "mal_id": 1297,
    "title": "Biohazard: Degeneration",
 "type": "ALL"
},
{
 "mal_id": 1298,
    "title": "Mobile Suit Gundam I",
 "type": "ALL"
},
{
 "mal_id": 1299,
    "title": "Sword Art Online: Progressive Movie - Kuraki Yuuyami no Scherzo",
 "type": "ALL"
},
{
 "mal_id": 1300,
    "title": "Kuroinu: Kedakaki Seijo wa Hakudaku ni Somaru",
 "type": "ALL"
},
{
 "mal_id": 1301,
    "title": "Lupin the IIIrd: Chikemuri no Ishikawa Goemon",
 "type": "ALL"
},
{
 "mal_id": 1302,
    "title": "One Piece: Adventure of Nebulandia",
 "type": "ALL"
},
{
 "mal_id": 1303,
    "title": "Akanesasu Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1304,
    "title": "Mardock Scramble: The Third Exhaust",
 "type": "ALL"
},
{
 "mal_id": 1305,
    "title": "Concrete Revolutio: Choujin Gensou - The Last Song",
 "type": "ALL"
},
{
 "mal_id": 1306,
    "title": "Wonderful Days",
 "type": "ALL"
},
{
 "mal_id": 1307,
    "title": "Overlord: Ple Ple Pleiades 2",
 "type": "ALL"
},
{
 "mal_id": 1308,
    "title": "Angel Densetsu",
 "type": "ALL"
},
{
 "mal_id": 1309,
    "title": "Towa no Quon 5: Souzetsu no Raifuku",
 "type": "ALL"
},
{
 "mal_id": 1310,
    "title": "Initial D Battle Stage",
 "type": "ALL"
},
{
 "mal_id": 1311,
    "title": "Tengen Toppa Gurren Lagann: Ore no Gurren wa Pikka-Pika!!",
 "type": "ALL"
},
{
 "mal_id": 1312,
    "title": "Hangyakusei Million Arthur",
 "type": "ALL"
},
{
 "mal_id": 1313,
    "title": "Shining Tears X Wind",
 "type": "ALL"
},
{
 "mal_id": 1314,
    "title": "Beatless Final Stage",
 "type": "ALL"
},
{
 "mal_id": 1315,
    "title": "Magatsu Wahrheit: Zuerst",
 "type": "ALL"
},
{
 "mal_id": 1316,
    "title": "Uchuu Kaizoku Captain Herlock",
 "type": "ALL"
},
{
 "mal_id": 1317,
    "title": "Nijuu Mensou no Musume",
 "type": "ALL"
},
{
 "mal_id": 1318,
    "title": "Bastard!! Ankoku no Hakaishin",
 "type": "ALL"
},
{
 "mal_id": 1319,
    "title": "One Piece: Umi no Heso no Daibouken-hen",
 "type": "ALL"
},
{
 "mal_id": 1320,
    "title": "Zegapain",
 "type": "ALL"
},
{
 "mal_id": 1321,
    "title": "Saiyuuki Reload",
 "type": "ALL"
},
{
 "mal_id": 1322,
    "title": "One Piece: Taose! Kaizoku Ganzack",
 "type": "ALL"
},
{
 "mal_id": 1323,
    "title": "Senki Zesshou Symphogear AXZ",
 "type": "ALL"
},
{
 "mal_id": 1324,
    "title": "Vassalord.",
 "type": "ALL"
},
{
 "mal_id": 1325,
    "title": "Wu Liuqi Zhi Xuanwu Guo Pian",
 "type": "ALL"
},
{
 "mal_id": 1326,
    "title": "Lupin III vs. Detective Conan",
 "type": "ALL"
},
{
 "mal_id": 1327,
    "title": "Fuse: Teppou Musume no Torimonochou",
 "type": "ALL"
},
{
 "mal_id": 1328,
    "title": "Mushikago no Cagaster",
 "type": "ALL"
},
{
 "mal_id": 1329,
    "title": "Choujigen Game Neptune The Animation: Yakusoku no Eien - True End",
 "type": "ALL"
},
{
 "mal_id": 1330,
    "title": "Pokemon Movie 21: Minna no Monogatari",
 "type": "ALL"
},
{
 "mal_id": 1331,
    "title": "Genocyber",
 "type": "ALL"
},
{
 "mal_id": 1332,
    "title": "Witch Craft Works: Takamiya-kun to Imouto no Warudakumi",
 "type": "ALL"
},
{
 "mal_id": 1333,
    "title": "One Piece: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken",
 "type": "ALL"
},
{
 "mal_id": 1334,
    "title": "Tribe Nine",
 "type": "ALL"
},
{
 "mal_id": 1335,
    "title": "Frame Arms Girl",
 "type": "ALL"
},
{
 "mal_id": 1336,
    "title": ".hack//G.U. Trilogy",
 "type": "ALL"
},
{
 "mal_id": 1337,
    "title": "Code:Breaker OVA",
 "type": "ALL"
},
{
 "mal_id": 1338,
    "title": "Drifters: Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1339,
    "title": "Seikai no Senki",
 "type": "ALL"
},
{
 "mal_id": 1340,
    "title": "Yoru no Yatterman",
 "type": "ALL"
},
{
 "mal_id": 1341,
    "title": "New Initial D Movie: Legend 1 - Kakusei",
 "type": "ALL"
},
{
 "mal_id": 1342,
    "title": "AIKa",
 "type": "ALL"
},
{
 "mal_id": 1343,
    "title": "Ginga Eiyuu Densetsu: Arata Naru Tatakai no Overture",
 "type": "ALL"
},
{
 "mal_id": 1344,
    "title": "Tales of Symphonia The Animation: Tethe'alla-hen",
 "type": "ALL"
},
{
 "mal_id": 1345,
    "title": "Lupin III: Part II",
 "type": "ALL"
},
{
 "mal_id": 1346,
    "title": "Demashita! Powerpuff Girls Z",
 "type": "ALL"
},
{
 "mal_id": 1347,
    "title": "Gintama°: Umai-mono wa Atomawashi ni Suru to Yokodorisareru kara Yappari Saki ni Kue",
 "type": "ALL"
},
{
 "mal_id": 1348,
    "title": "Armitage III",
 "type": "ALL"
},
{
 "mal_id": 1349,
    "title": "Kouya no Kotobuki Hikoutai",
 "type": "ALL"
},
{
 "mal_id": 1350,
    "title": "Cyborg 009: The Cyborg Soldier",
 "type": "ALL"
},
{
 "mal_id": 1351,
    "title": "Kage no Jitsuryokusha ni Naritakute!",
 "type": "ALL"
},
{
 "mal_id": 1352,
    "title": "Fate/Grand Order",
 "type": "ALL"
},
{
 "mal_id": 1353,
    "title": "Supernatural The Animation",
 "type": "ALL"
},
{
 "mal_id": 1354,
    "title": "91 Days: Mijikai Rousoku",
 "type": "ALL"
},
{
 "mal_id": 1355,
    "title": "Muv-Luv Alternative",
 "type": "ALL"
},
{
 "mal_id": 1356,
    "title": "Hellsing: Psalm of the Darkness",
 "type": "ALL"
},
{
 "mal_id": 1357,
    "title": "Shokei Shoujo no Virgin Road",
 "type": "ALL"
},
{
 "mal_id": 1358,
    "title": "Persona 5 the Animation TV Specials",
 "type": "ALL"
},
{
 "mal_id": 1359,
    "title": "Saber Marionette J",
 "type": "ALL"
},
{
 "mal_id": 1360,
    "title": "Mahou Shoujo Lyrical Nanoha: The Movie 1st",
 "type": "ALL"
},
{
 "mal_id": 1361,
    "title": "Mobile Suit Gundam AGE",
 "type": "ALL"
},
{
 "mal_id": 1362,
    "title": "Mobile Suit Gundam Unicorn RE:0096",
 "type": "ALL"
},
{
 "mal_id": 1363,
    "title": "Project Scard: Praeter no Kizu",
 "type": "ALL"
},
{
 "mal_id": 1364,
    "title": "Aoki Hagane no Arpeggio: Ars Nova Movie 2 - Cadenza",
 "type": "ALL"
},
{
 "mal_id": 1365,
    "title": "Atom: The Beginning",
 "type": "ALL"
},
{
 "mal_id": 1366,
    "title": "Koukaku Kidoutai: SAC_2045",
 "type": "ALL"
},
{
 "mal_id": 1367,
    "title": "Godzilla 3: Hoshi wo Kuu Mono",
 "type": "ALL"
},
{
 "mal_id": 1368,
    "title": "Garo: Guren no Tsuki",
 "type": "ALL"
},
{
 "mal_id": 1369,
    "title": "Macross F Movie 1: Itsuwari no Utahime",
 "type": "ALL"
},
{
 "mal_id": 1370,
    "title": "Lodoss-tou Senki: Eiyuu Kishi Den",
 "type": "ALL"
},
{
 "mal_id": 1371,
    "title": "Skull Man",
 "type": "ALL"
},
{
 "mal_id": 1372,
    "title": "Kurau Phantom Memory",
 "type": "ALL"
},
{
 "mal_id": 1373,
    "title": "Arifureta Shokugyou de Sekai Saikyou Recap",
 "type": "ALL"
},
{
 "mal_id": 1374,
    "title": "Tenchi Muyou! GXP",
 "type": "ALL"
},
{
 "mal_id": 1375,
    "title": "Code Geass: Dakkan no Z",
 "type": "ALL"
},
{
 "mal_id": 1376,
    "title": "The Reflection",
 "type": "ALL"
},
{
 "mal_id": 1377,
    "title": "One Piece: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!",
 "type": "ALL"
},
{
 "mal_id": 1378,
    "title": "Mezzo Forte",
 "type": "ALL"
},
{
 "mal_id": 1379,
    "title": "Nanbaka: Shusseki Bangou no Tsuita Baka-tachi!",
 "type": "ALL"
},
{
 "mal_id": 1380,
    "title": "Cat Shit One",
 "type": "ALL"
},
{
 "mal_id": 1381,
    "title": "Yuu☆Yuu☆Hakusho (Movie)",
 "type": "ALL"
},
{
 "mal_id": 1382,
    "title": "Bakumatsu Rock",
 "type": "ALL"
},
{
 "mal_id": 1383,
    "title": "Hoshi no Kirby",
 "type": "ALL"
},
{
 "mal_id": 1384,
    "title": "Regalia: The Three Sacred Stars",
 "type": "ALL"
},
{
 "mal_id": 1385,
    "title": "Lupin III vs. Detective Conan: The Movie",
 "type": "ALL"
},
{
 "mal_id": 1386,
    "title": "Gundam: G no Reconguista",
 "type": "ALL"
},
{
 "mal_id": 1387,
    "title": "Sengoku Basara Movie: The Last Party",
 "type": "ALL"
},
{
 "mal_id": 1388,
    "title": "Tetsuwan Birdy",
 "type": "ALL"
},
{
 "mal_id": 1389,
    "title": "Mobile Suit Gundam II: Soldiers of Sorrow",
 "type": "ALL"
},
{
 "mal_id": 1390,
    "title": "Heartcatch Precure!",
 "type": "ALL"
},
{
 "mal_id": 1391,
    "title": "Ayakashi",
 "type": "ALL"
},
{
 "mal_id": 1392,
    "title": "Zombie-Loan Specials",
 "type": "ALL"
},
{
 "mal_id": 1393,
    "title": "Mobile Suit Gundam III: Encounters in Space",
 "type": "ALL"
},
{
 "mal_id": 1394,
    "title": "Pokemon XY: Mega Evolution",
 "type": "ALL"
},
{
 "mal_id": 1395,
    "title": "Merc Storia: Mukiryoku no Shounen to Bin no Naka no Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1396,
    "title": "Hokuto no Ken 2",
 "type": "ALL"
},
{
 "mal_id": 1397,
    "title": "Solty Rei",
 "type": "ALL"
},
{
 "mal_id": 1398,
    "title": "Macross 7",
 "type": "ALL"
},
{
 "mal_id": 1399,
    "title": "Koukaku Kidoutai: Stand Alone Complex 2nd GIG - Individual Eleven",
 "type": "ALL"
},
{
 "mal_id": 1400,
    "title": "Tokyo Underground",
 "type": "ALL"
},
{
 "mal_id": 1401,
    "title": "Appleseed",
 "type": "ALL"
},
{
 "mal_id": 1402,
    "title": "Saint Seiya: Soul of Gold",
 "type": "ALL"
},
{
 "mal_id": 1403,
    "title": "One Piece: Mamore! Saigo no Dai Butai",
 "type": "ALL"
},
{
 "mal_id": 1404,
    "title": "Batman: Gotham Knight",
 "type": "ALL"
},
{
 "mal_id": 1405,
    "title": "Hero Mask",
 "type": "ALL"
},
{
 "mal_id": 1406,
    "title": "Rinne no Lagrange Season 2",
 "type": "ALL"
},
{
 "mal_id": 1407,
    "title": "Yozakura Quartet: Tsuki ni Naku",
 "type": "ALL"
},
{
 "mal_id": 1408,
    "title": "Taiho Shichau zo (TV)",
 "type": "ALL"
},
{
 "mal_id": 1409,
    "title": "Devilman",
 "type": "ALL"
},
{
 "mal_id": 1410,
    "title": "C³: Rinkan Gakkou Confusion!",
 "type": "ALL"
},
{
 "mal_id": 1411,
    "title": "Blue Seed",
 "type": "ALL"
},
{
 "mal_id": 1412,
    "title": "Tiger & Bunny Movie 2: The Rising",
 "type": "ALL"
},
{
 "mal_id": 1413,
    "title": "Iron Man",
 "type": "ALL"
},
{
 "mal_id": 1414,
    "title": "Kite Liberator",
 "type": "ALL"
},
{
 "mal_id": 1415,
    "title": "Captain Tsubasa J",
 "type": "ALL"
},
{
 "mal_id": 1416,
    "title": "Street Fighter II Movie",
 "type": "ALL"
},
{
 "mal_id": 1417,
    "title": "Initial D Battle Stage 2",
 "type": "ALL"
},
{
 "mal_id": 1418,
    "title": "Sword Art Online: Alicization - War of Underworld Recap",
 "type": "ALL"
},
{
 "mal_id": 1419,
    "title": "Hakuouki Movie 1: Kyoto Ranbu",
 "type": "ALL"
},
{
 "mal_id": 1420,
    "title": "Yumeria",
 "type": "ALL"
},
{
 "mal_id": 1421,
    "title": "Hina Logi: From Luck & Logic",
 "type": "ALL"
},
{
 "mal_id": 1422,
    "title": "Bus Gamer",
 "type": "ALL"
},
{
 "mal_id": 1423,
    "title": "Sengoku Basara: Judge End",
 "type": "ALL"
},
{
 "mal_id": 1424,
    "title": "Mujin Wakusei Survive",
 "type": "ALL"
},
{
 "mal_id": 1425,
    "title": "Tenchi Muyou! Ryououki 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1426,
    "title": "Detective Conan Movie 21: The Crimson Love Letter",
 "type": "ALL"
},
{
 "mal_id": 1427,
    "title": "Zoku Touken Ranbu: Hanamaru",
 "type": "ALL"
},
{
 "mal_id": 1428,
    "title": "Hakuouki: Sekkaroku",
 "type": "ALL"
},
{
 "mal_id": 1429,
    "title": "Kyousou Giga (2012)",
 "type": "ALL"
},
{
 "mal_id": 1430,
    "title": "Gundam Build Divers",
 "type": "ALL"
},
{
 "mal_id": 1431,
    "title": "Quanzhi Fashi IV",
 "type": "ALL"
},
{
 "mal_id": 1432,
    "title": "Ingress the Animation",
 "type": "ALL"
},
{
 "mal_id": 1433,
    "title": "Re: Cutey Honey",
 "type": "ALL"
},
{
 "mal_id": 1434,
    "title": "Seikon no Qwaser: Jotei no Shouzou",
 "type": "ALL"
},
{
 "mal_id": 1435,
    "title": "Blade",
 "type": "ALL"
},
{
 "mal_id": 1436,
    "title": "Yuu☆Yuu☆Hakusho: Meikai Shitou-hen - Honoo no Kizuna",
 "type": "ALL"
},
{
 "mal_id": 1437,
    "title": "Switch",
 "type": "ALL"
},
{
 "mal_id": 1438,
    "title": "Kochouki: Wakaki Nobunaga",
 "type": "ALL"
},
{
 "mal_id": 1439,
    "title": "One Piece: Glorious Island",
 "type": "ALL"
},
{
 "mal_id": 1440,
    "title": "Macross F Movie 2: Sayonara no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1441,
    "title": "Rurouni Kenshin: Meiji Kenkaku Romantan - Shin Kyoto-hen",
 "type": "ALL"
},
{
 "mal_id": 1442,
    "title": "Arve Rezzle: Kikaijikake no Yousei-tachi",
 "type": "ALL"
},
{
 "mal_id": 1443,
    "title": "Beyblade Burst",
 "type": "ALL"
},
{
 "mal_id": 1444,
    "title": "3x3 Eyes",
 "type": "ALL"
},
{
 "mal_id": 1445,
    "title": "Juushin Enbu: Hero Tales",
 "type": "ALL"
},
{
 "mal_id": 1446,
    "title": "Hunter x Hunter Pilot",
 "type": "ALL"
},
{
 "mal_id": 1447,
    "title": "Digimon Xros Wars: Aku no Death General to Nanatsu no Oukoku",
 "type": "ALL"
},
{
 "mal_id": 1448,
    "title": "Strike Witches OVA",
 "type": "ALL"
},
{
 "mal_id": 1449,
    "title": "Kono Danshi, Uchuujin to Tatakaemasu.",
 "type": "ALL"
},
{
 "mal_id": 1450,
    "title": "Fuuun Ishin Dai☆Shogun",
 "type": "ALL"
},
{
 "mal_id": 1451,
    "title": "Overlord: Ple Ple Pleiades 3",
 "type": "ALL"
},
{
 "mal_id": 1452,
    "title": "X-Men",
 "type": "ALL"
},
{
 "mal_id": 1453,
    "title": "Lupin the IIIrd: Jigen Daisuke no Bohyou",
 "type": "ALL"
},
{
 "mal_id": 1454,
    "title": "Final Fantasy VII: On the Way to a Smile - Episode: Denzel",
 "type": "ALL"
},
{
 "mal_id": 1455,
    "title": "Bubuki Buranki: Hoshi no Kyojin",
 "type": "ALL"
},
{
 "mal_id": 1456,
    "title": "Lupin III: The First",
 "type": "ALL"
},
{
 "mal_id": 1457,
    "title": "Sword Gai The Animation Part II",
 "type": "ALL"
},
{
 "mal_id": 1458,
    "title": "Street Fighter II V",
 "type": "ALL"
},
{
 "mal_id": 1459,
    "title": "Ajin Part 2: Shoutotsu",
 "type": "ALL"
},
{
 "mal_id": 1460,
    "title": "Aoki Hagane no Arpeggio: Ars Nova Movie 1 - DC",
 "type": "ALL"
},
{
 "mal_id": 1461,
    "title": "Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita",
 "type": "ALL"
},
{
 "mal_id": 1462,
    "title": "Wolverine",
 "type": "ALL"
},
{
 "mal_id": 1463,
    "title": "Strait Jacket",
 "type": "ALL"
},
{
 "mal_id": 1464,
    "title": "Argento Soma",
 "type": "ALL"
},
{
 "mal_id": 1465,
    "title": "Detective Conan Movie 22: Zero the Enforcer",
 "type": "ALL"
},
{
 "mal_id": 1466,
    "title": "Soul Eater: Late Night Show",
 "type": "ALL"
},
{
 "mal_id": 1467,
    "title": "Shingeki no Bahamut: Genesis - Short Story",
 "type": "ALL"
},
{
 "mal_id": 1468,
    "title": "Uchuu Senkan Yamato",
 "type": "ALL"
},
{
 "mal_id": 1469,
    "title": "One Piece: Episode of Sorajima",
 "type": "ALL"
},
{
 "mal_id": 1470,
    "title": "RD Sennou Chousashitsu",
 "type": "ALL"
},
{
 "mal_id": 1471,
    "title": "Buddy Complex: Kanketsu-hen - Ano Sora ni Kaeru Mirai de",
 "type": "ALL"
},
{
 "mal_id": 1472,
    "title": "Freezing Vibration Specials",
 "type": "ALL"
},
{
 "mal_id": 1473,
    "title": "Bokura no Nanokakan Sensou",
 "type": "ALL"
},
{
 "mal_id": 1474,
    "title": "Cyber City Oedo 808",
 "type": "ALL"
},
{
 "mal_id": 1475,
    "title": "Ginga Nagareboshi Gin",
 "type": "ALL"
},
{
 "mal_id": 1476,
    "title": "Kekkai Sensen & Beyond: Zapp Renfro Ingaouhouchuu!!/Baccardio no Shizuku",
 "type": "ALL"
},
{
 "mal_id": 1477,
    "title": "Mahou Shoujo Lyrical Nanoha ViVid",
 "type": "ALL"
},
{
 "mal_id": 1478,
    "title": "Digimon Xros Wars: Toki wo Kakeru Shounen Hunter-tachi",
 "type": "ALL"
},
{
 "mal_id": 1479,
    "title": "Yaoguai Mingdan",
 "type": "ALL"
},
{
 "mal_id": 1480,
    "title": "Fate/kaleid liner Prisma☆Illya Movie: Licht - Namae no Nai Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1481,
    "title": "W'z",
 "type": "ALL"
},
{
 "mal_id": 1482,
    "title": "Giant Robo the Animation: Chikyuu ga Seishi Suru Hi",
 "type": "ALL"
},
{
 "mal_id": 1483,
    "title": "Mobile Suit Gundam: Hathaway's Flash",
 "type": "ALL"
},
{
 "mal_id": 1484,
    "title": "Biohazard: Damnation",
 "type": "ALL"
},
{
 "mal_id": 1485,
    "title": "Strike the Blood: Kieta Seisou-hen",
 "type": "ALL"
},
{
 "mal_id": 1486,
    "title": "UQ Holder!: Mahou Sensei Negima! 2 (OVA)",
 "type": "ALL"
},
{
 "mal_id": 1487,
    "title": "Ajin Part 3: Shougeki",
 "type": "ALL"
},
{
 "mal_id": 1488,
    "title": "Servamp Movie: Alice in the Garden",
 "type": "ALL"
},
{
 "mal_id": 1489,
    "title": "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen (Zoku-hen)",
 "type": "ALL"
},
{
 "mal_id": 1490,
    "title": "Nurarihyon no Mago OVA",
 "type": "ALL"
},
{
 "mal_id": 1491,
    "title": "Fate/Zero Remix",
 "type": "ALL"
},
{
 "mal_id": 1492,
    "title": "Mahou Sensei Negima!: Mou Hitotsu no Sekai",
 "type": "ALL"
},
{
 "mal_id": 1493,
    "title": "Promare: Lio-hen",
 "type": "ALL"
},
{
 "mal_id": 1494,
    "title": "Strike Witches: Operation Victory Arrow",
 "type": "ALL"
},
{
 "mal_id": 1495,
    "title": "Shingeki no Kyotou",
 "type": "ALL"
},
{
 "mal_id": 1496,
    "title": "Toaru Majutsu no Index-tan Movie: Endymion no Kiseki - Ga Attari Nakattari",
 "type": "ALL"
},
{
 "mal_id": 1497,
    "title": "Dies Irae: Reimei",
 "type": "ALL"
},
{
 "mal_id": 1498,
    "title": "Promare: Galo-hen",
 "type": "ALL"
},
{
 "mal_id": 1499,
    "title": "Tales of Symphonia The Animation: Sekai Tougou-hen",
 "type": "ALL"
},
{
 "mal_id": 1500,
    "title": "Monster Strike",
 "type": "ALL"
},
{
 "mal_id": 1501,
    "title": "City Hunter 2",
 "type": "ALL"
},
{
 "mal_id": 1502,
    "title": "Cardfight!! Vanguard: Asia Circuit-hen",
 "type": "ALL"
},
{
 "mal_id": 1503,
    "title": "Detective Conan Movie 23: The Fist of Blue Sapphire",
 "type": "ALL"
},
{
 "mal_id": 1504,
    "title": "Battle Girl High School",
 "type": "ALL"
},
{
 "mal_id": 1505,
    "title": "Muhyo to Rouji no Mahouritsu Soudan Jimusho 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1506,
    "title": "Mutsu Enmei Ryuu Gaiden: Shura no Toki",
 "type": "ALL"
},
{
 "mal_id": 1507,
    "title": "Tiger & Bunny Movie 1: The Beginning",
 "type": "ALL"
},
{
 "mal_id": 1508,
    "title": "Uchuu no Stellvia",
 "type": "ALL"
},
{
 "mal_id": 1509,
    "title": "Garo Movie: Divine Flame",
 "type": "ALL"
},
{
 "mal_id": 1510,
    "title": "Hataraku Saibou!!: Saikyou no Teki, Futatabi. Karada no Naka wa Chou Oosawagi!",
 "type": "ALL"
},
{
 "mal_id": 1511,
    "title": "Kuusen Madoushi Kouhosei no Kyoukan: Lecty no, Ikimonogatari",
 "type": "ALL"
},
{
 "mal_id": 1512,
    "title": "Pokemon Crystal: Raikou Ikazuchi no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 1513,
    "title": "Elsword: El-ui Yeoin",
 "type": "ALL"
},
{
 "mal_id": 1514,
    "title": "Ultraman",
 "type": "ALL"
},
{
 "mal_id": 1515,
    "title": "Freedom",
 "type": "ALL"
},
{
 "mal_id": 1516,
    "title": "Kyoukai Senki",
 "type": "ALL"
},
{
 "mal_id": 1517,
    "title": "Chiisana Eiyuu: Kani to Tamago to Toumei Ningen",
 "type": "ALL"
},
{
 "mal_id": 1518,
    "title": "Toshokan Sensou: Kakumei no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1519,
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 1",
 "type": "ALL"
},
{
 "mal_id": 1520,
    "title": "Triage X: Recollection XOXO",
 "type": "ALL"
},
{
 "mal_id": 1521,
    "title": "Gunslinger Girl: Il Teatrino OVA",
 "type": "ALL"
},
{
 "mal_id": 1522,
    "title": "Mahou Shoujo Lyrical Nanoha: The Movie 2nd A's",
 "type": "ALL"
},
{
 "mal_id": 1523,
    "title": "AIKa R-16: Virgin Mission",
 "type": "ALL"
},
{
 "mal_id": 1524,
    "title": "Dokidoki! Precure",
 "type": "ALL"
},
{
 "mal_id": 1525,
    "title": "Bakumatsu",
 "type": "ALL"
},
{
 "mal_id": 1526,
    "title": "Black★★Rock Shooter:  Dawn Fall",
 "type": "ALL"
},
{
 "mal_id": 1527,
    "title": "Phantasy Star Online 2: Episode Oracle",
 "type": "ALL"
},
{
 "mal_id": 1528,
    "title": "Chain Chronicle: Haecceitas no Hikari Part 1",
 "type": "ALL"
},
{
 "mal_id": 1529,
    "title": "Tenchi Muyou! in Love",
 "type": "ALL"
},
{
 "mal_id": 1530,
    "title": "Dragon Drive",
 "type": "ALL"
},
{
 "mal_id": 1531,
    "title": "Seikai no Senki II",
 "type": "ALL"
},
{
 "mal_id": 1532,
    "title": "Honoo no Mirage",
 "type": "ALL"
},
{
 "mal_id": 1533,
    "title": "Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru Recap",
 "type": "ALL"
},
{
 "mal_id": 1534,
    "title": "K: Seven Stories Movie 2 - Side:Blue - Tenrou no Gotoku",
 "type": "ALL"
},
{
 "mal_id": 1535,
    "title": "Douluo Dalu",
 "type": "ALL"
},
{
 "mal_id": 1536,
    "title": "Strike Witches: Road to Berlin",
 "type": "ALL"
},
{
 "mal_id": 1537,
    "title": "Beelzebub Specials",
 "type": "ALL"
},
{
 "mal_id": 1538,
    "title": "Grisaia: Phantom Trigger The Animation - Stargazer",
 "type": "ALL"
},
{
 "mal_id": 1539,
    "title": "Devilman Lady",
 "type": "ALL"
},
{
 "mal_id": 1540,
    "title": "Saiyuuki Reload Gunlock",
 "type": "ALL"
},
{
 "mal_id": 1541,
    "title": "Prism Ark",
 "type": "ALL"
},
{
 "mal_id": 1542,
    "title": "iDOLM@STER Xenoglossia",
 "type": "ALL"
},
{
 "mal_id": 1543,
    "title": "Duel Masters",
 "type": "ALL"
},
{
 "mal_id": 1544,
    "title": "Aquarion Logos",
 "type": "ALL"
},
{
 "mal_id": 1545,
    "title": "Majutsushi Orphen Hagure Tabi: Kimluck-hen",
 "type": "ALL"
},
{
 "mal_id": 1546,
    "title": "Iria: Zeiram The Animation",
 "type": "ALL"
},
{
 "mal_id": 1547,
    "title": "Sengoku Musou",
 "type": "ALL"
},
{
 "mal_id": 1548,
    "title": "Golden Kamuy OVA",
 "type": "ALL"
},
{
 "mal_id": 1549,
    "title": "D_Cide Traumerei the Animation",
 "type": "ALL"
},
{
 "mal_id": 1550,
    "title": "Ginga Eiyuu Densetsu Gaiden",
 "type": "ALL"
},
{
 "mal_id": 1551,
    "title": "Yingxiong Zai Lin",
 "type": "ALL"
},
{
 "mal_id": 1552,
    "title": "Taiho Shichau zo",
 "type": "ALL"
},
{
 "mal_id": 1553,
    "title": "Soul Link",
 "type": "ALL"
},
{
 "mal_id": 1554,
    "title": "Isekai Cheat Magician: Yoiboshi no Matsuri to Majutsushi",
 "type": "ALL"
},
{
 "mal_id": 1555,
    "title": "Soukou Kihei Votoms",
 "type": "ALL"
},
{
 "mal_id": 1556,
    "title": "The God of Highschool",
 "type": "ALL"
},
{
 "mal_id": 1557,
    "title": "Sidonia no Kishi: Ai Tsumugu Hoshi",
 "type": "ALL"
},
{
 "mal_id": 1558,
    "title": "Da Wang Rao Ming",
 "type": "ALL"
},
{
 "mal_id": 1559,
    "title": "One Piece 3D: Gekisou! Trap Coaster",
 "type": "ALL"
},
{
 "mal_id": 1560,
    "title": "Black Cat (TV): Toozakaru Neko",
 "type": "ALL"
},
{
 "mal_id": 1561,
    "title": "Dragon's Dogma",
 "type": "ALL"
},
{
 "mal_id": 1562,
    "title": "Luger Code 1951",
 "type": "ALL"
},
{
 "mal_id": 1563,
    "title": "Gate Keepers",
 "type": "ALL"
},
{
 "mal_id": 1564,
    "title": "Megami Kouhosei",
 "type": "ALL"
},
{
 "mal_id": 1565,
    "title": "Tetsuwan Birdy Decode: The Cipher",
 "type": "ALL"
},
{
 "mal_id": 1566,
    "title": "Dantalian no Shoka: Ibarahime",
 "type": "ALL"
},
{
 "mal_id": 1567,
    "title": "Soul Buster",
 "type": "ALL"
},
{
 "mal_id": 1568,
    "title": "Pokemon Movie 22: Mewtwo no Gyakushuu Evolution",
 "type": "ALL"
},
{
 "mal_id": 1569,
    "title": "Drifters: The Outlandish Knight",
 "type": "ALL"
},
{
 "mal_id": 1570,
    "title": "Astro Boy: Tetsuwan Atom",
 "type": "ALL"
},
{
 "mal_id": 1571,
    "title": "Soukyuu no Fafner: Dead Aggressor - Exodus",
 "type": "ALL"
},
{
 "mal_id": 1572,
    "title": "Tekken: Blood Vengeance",
 "type": "ALL"
},
{
 "mal_id": 1573,
    "title": "Cardfight!! Vanguard: Link Joker-hen",
 "type": "ALL"
},
{
 "mal_id": 1574,
    "title": "Tiger Mask W",
 "type": "ALL"
},
{
 "mal_id": 1575,
    "title": "Hakuouki Movie 2: Shikon Soukyuu",
 "type": "ALL"
},
{
 "mal_id": 1576,
    "title": "The Third: Aoi Hitomi no Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1577,
    "title": "Uchuu Senkan Yamato 2202: Ai no Senshi-tachi",
 "type": "ALL"
},
{
 "mal_id": 1578,
    "title": "Tennis no Ouji-sama Movie 1: Futari no Samurai - The First Game",
 "type": "ALL"
},
{
 "mal_id": 1579,
    "title": "Tesla Note",
 "type": "ALL"
},
{
 "mal_id": 1580,
    "title": "Quanzhi Gaoshou 3",
 "type": "ALL"
},
{
 "mal_id": 1581,
    "title": "One Piece Film: Gold Episode 0 - 711 ver.",
 "type": "ALL"
},
{
 "mal_id": 1582,
    "title": "Levius",
 "type": "ALL"
},
{
 "mal_id": 1583,
    "title": "Dragon Ball Z: Atsumare! Gokuu World",
 "type": "ALL"
},
{
 "mal_id": 1584,
    "title": "Queen's Blade: Utsukushiki Toushi-tachi",
 "type": "ALL"
},
{
 "mal_id": 1585,
    "title": "Arslan Senki",
 "type": "ALL"
},
{
 "mal_id": 1586,
    "title": "Tsugumomo OVA",
 "type": "ALL"
},
{
 "mal_id": 1587,
    "title": "Dies Irae: To the Ring Reincarnation",
 "type": "ALL"
},
{
 "mal_id": 1588,
    "title": "Imanara Maniau! Log Horizon",
 "type": "ALL"
},
{
 "mal_id": 1589,
    "title": "Gangsta. Recap",
 "type": "ALL"
},
{
 "mal_id": 1590,
    "title": "Digimon X-Evolution",
 "type": "ALL"
},
{
 "mal_id": 1591,
    "title": "Utawarerumono OVA",
 "type": "ALL"
},
{
 "mal_id": 1592,
    "title": "Strike the Blood Final",
 "type": "ALL"
},
{
 "mal_id": 1593,
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 3",
 "type": "ALL"
},
{
 "mal_id": 1594,
    "title": "Key the Metal Idol",
 "type": "ALL"
},
{
 "mal_id": 1595,
    "title": "Mezzo DSA",
 "type": "ALL"
},
{
 "mal_id": 1596,
    "title": "Coyote Ragtime Show",
 "type": "ALL"
},
{
 "mal_id": 1597,
    "title": "One Piece Recap",
 "type": "ALL"
},
{
 "mal_id": 1598,
    "title": "Zipang",
 "type": "ALL"
},
{
 "mal_id": 1599,
    "title": "CLAMP in Wonderland 2",
 "type": "ALL"
},
{
 "mal_id": 1600,
    "title": "Xenosaga The Animation",
 "type": "ALL"
},
{
 "mal_id": 1601,
    "title": "Mobile Suit Gundam Thunderbolt 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1602,
    "title": "Tenchi Muyou! Ryououki 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 1603,
    "title": "Kyuuketsuhime Miyu",
 "type": "ALL"
},
{
 "mal_id": 1604,
    "title": "Finder Series",
 "type": "ALL"
},
{
 "mal_id": 1605,
    "title": "Shaman King Specials",
 "type": "ALL"
},
{
 "mal_id": 1606,
    "title": "K: Seven Stories Movie 5 - Memory of Red - Burn",
 "type": "ALL"
},
{
 "mal_id": 1607,
    "title": "Space Cobra",
 "type": "ALL"
},
{
 "mal_id": 1608,
    "title": "Taimanin Asagi",
 "type": "ALL"
},
{
 "mal_id": 1609,
    "title": "Schoolgirl Strikers: Animation Channel",
 "type": "ALL"
},
{
 "mal_id": 1610,
    "title": "Mobile Suit Gundam Thunderbolt: December Sky",
 "type": "ALL"
},
{
 "mal_id": 1611,
    "title": "Sekai Seifuku: Bouryaku no Zvezda - Shin Zvezda Daisakusen",
 "type": "ALL"
},
{
 "mal_id": 1612,
    "title": "Biohazard: Vendetta",
 "type": "ALL"
},
{
 "mal_id": 1613,
    "title": "Major Movie: Yuujou no Winning Shot",
 "type": "ALL"
},
{
 "mal_id": 1614,
    "title": "009-1",
 "type": "ALL"
},
{
 "mal_id": 1615,
    "title": "City Hunter '91",
 "type": "ALL"
},
{
 "mal_id": 1616,
    "title": "Devils Line: Anytime Anywhere",
 "type": "ALL"
},
{
 "mal_id": 1617,
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 2",
 "type": "ALL"
},
{
 "mal_id": 1618,
    "title": "Lupin III: Part III",
 "type": "ALL"
},
{
 "mal_id": 1619,
    "title": "Muteki Kanban Musume",
 "type": "ALL"
},
{
 "mal_id": 1620,
    "title": "Fairy Ranmaru: Anata no Kokoro Otasuke Shimasu",
 "type": "ALL"
},
{
 "mal_id": 1621,
    "title": "Mouse",
 "type": "ALL"
},
{
 "mal_id": 1622,
    "title": "Densetsu no Yuusha no Densetsu: Iris Report",
 "type": "ALL"
},
{
 "mal_id": 1623,
    "title": "Shika no Ou: Yuna to Yakusoku no Tabi",
 "type": "ALL"
},
{
 "mal_id": 1624,
    "title": "Hakumei no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1625,
    "title": "Riding Bean",
 "type": "ALL"
},
{
 "mal_id": 1626,
    "title": "High School Fleet OVA",
 "type": "ALL"
},
{
 "mal_id": 1627,
    "title": "Mai-Otome Zwei",
 "type": "ALL"
},
{
 "mal_id": 1628,
    "title": "K: Seven Stories Movie 3 - Side:Green - Uwagaki Sekai",
 "type": "ALL"
},
{
 "mal_id": 1629,
    "title": "Pastel Memories",
 "type": "ALL"
},
{
 "mal_id": 1630,
    "title": "Night Walker: Mayonaka no Tantei",
 "type": "ALL"
},
{
 "mal_id": 1631,
    "title": "Tailenders",
 "type": "ALL"
},
{
 "mal_id": 1632,
    "title": "Vexille: 2077 Nihon Sakoku",
 "type": "ALL"
},
{
 "mal_id": 1633,
    "title": "Rurouni Kenshin Special",
 "type": "ALL"
},
{
 "mal_id": 1634,
    "title": "Yuu☆Yuu☆Hakusho: Two Shots/Noru ka Soru ka",
 "type": "ALL"
},
{
 "mal_id": 1635,
    "title": "Xie Wang Zhui Qi",
 "type": "ALL"
},
{
 "mal_id": 1636,
    "title": "City Hunter 3",
 "type": "ALL"
},
{
 "mal_id": 1637,
    "title": "Daicon Opening Animations",
 "type": "ALL"
},
{
 "mal_id": 1638,
    "title": "Senran Kagura Estival Versus: Mizugi-darake no Zenyasai",
 "type": "ALL"
},
{
 "mal_id": 1639,
    "title": "K: Seven Stories Movie 4 - Lost Small World - Ori no Mukou ni",
 "type": "ALL"
},
{
 "mal_id": 1640,
    "title": "Golden Kamuy 2nd Season OVA",
 "type": "ALL"
},
{
 "mal_id": 1641,
    "title": "Overlord Movie: Ple Ple Pleiades",
 "type": "ALL"
},
{
 "mal_id": 1642,
    "title": "Cestvs: The Roman Fighter",
 "type": "ALL"
},
{
 "mal_id": 1643,
    "title": "Ginga Eiyuu Densetsu Gaiden (1999)",
 "type": "ALL"
},
{
 "mal_id": 1644,
    "title": "Medarot Damashii",
 "type": "ALL"
},
{
 "mal_id": 1645,
    "title": "Shingeki no Kyojin-ten 360° Taikan Theater",
 "type": "ALL"
},
{
 "mal_id": 1646,
    "title": "Yawara!",
 "type": "ALL"
},
{
 "mal_id": 1647,
    "title": "Mutafukaz",
 "type": "ALL"
},
{
 "mal_id": 1648,
    "title": "Chuuka Ichiban!",
 "type": "ALL"
},
{
 "mal_id": 1649,
    "title": "Persona 4 the Animation: The Factor of Hope",
 "type": "ALL"
},
{
 "mal_id": 1650,
    "title": "Sabage-bu! Specials",
 "type": "ALL"
},
{
 "mal_id": 1651,
    "title": "Weiß Kreuz",
 "type": "ALL"
},
{
 "mal_id": 1652,
    "title": "Tokyo Babylon",
 "type": "ALL"
},
{
 "mal_id": 1653,
    "title": "Valkyrie Drive: Mermaid Specials",
 "type": "ALL"
},
{
 "mal_id": 1654,
    "title": "009 Re:Cyborg",
 "type": "ALL"
},
{
 "mal_id": 1655,
    "title": "Shin Angyo Onshi",
 "type": "ALL"
},
{
 "mal_id": 1656,
    "title": "Cat's Eye",
 "type": "ALL"
},
{
 "mal_id": 1657,
    "title": "Isekai Meikyuu de Harem wo",
 "type": "ALL"
},
{
 "mal_id": 1658,
    "title": "K: Seven Stories Movie 6 - Circle Vision - Nameless Song",
 "type": "ALL"
},
{
 "mal_id": 1659,
    "title": "Megazone 23",
 "type": "ALL"
},
{
 "mal_id": 1660,
    "title": "Juubee-chan: Lovely Gantai no Himitsu",
 "type": "ALL"
},
{
 "mal_id": 1661,
    "title": "AIKa Zero",
 "type": "ALL"
},
{
 "mal_id": 1662,
    "title": "Cutie Honey Universe",
 "type": "ALL"
},
{
 "mal_id": 1663,
    "title": "Souten Kouro",
 "type": "ALL"
},
{
 "mal_id": 1664,
    "title": "Fate/kaleid liner Prisma☆Illya: Prisma☆Phantasm",
 "type": "ALL"
},
{
 "mal_id": 1665,
    "title": "Pokemon Movie 23: Koko",
 "type": "ALL"
},
{
 "mal_id": 1666,
    "title": ".hack//The Movie: Sekai no Mukou ni",
 "type": "ALL"
},
{
 "mal_id": 1667,
    "title": "Senyuu. Specials",
 "type": "ALL"
},
{
 "mal_id": 1668,
    "title": "Project A-Ko",
 "type": "ALL"
},
{
 "mal_id": 1669,
    "title": "Appleseed Alpha",
 "type": "ALL"
},
{
 "mal_id": 1670,
    "title": "Blood-C: Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1671,
    "title": "HeatGuy J",
 "type": "ALL"
},
{
 "mal_id": 1672,
    "title": "Kiddy GiRL-AND",
 "type": "ALL"
},
{
 "mal_id": 1673,
    "title": "Akira (Shin Anime)",
 "type": "ALL"
},
{
 "mal_id": 1674,
    "title": "Sentou Yousei Yukikaze",
 "type": "ALL"
},
{
 "mal_id": 1675,
    "title": "Gakuen Basara",
 "type": "ALL"
},
{
 "mal_id": 1676,
    "title": "Omae Umasou da na",
 "type": "ALL"
},
{
 "mal_id": 1677,
    "title": "Ikkitousen: Shuugaku Toushi Keppuuroku",
 "type": "ALL"
},
{
 "mal_id": 1678,
    "title": "Dororo to Hyakkimaru",
 "type": "ALL"
},
{
 "mal_id": 1679,
    "title": "Gyakuten Sekai no Denchi Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1680,
    "title": "Armitage III: Dual-Matrix",
 "type": "ALL"
},
{
 "mal_id": 1681,
    "title": "Dororon Enma-kun Meeramera",
 "type": "ALL"
},
{
 "mal_id": 1682,
    "title": "Lupin III: Part 6",
 "type": "ALL"
},
{
 "mal_id": 1683,
    "title": "Highlander: The Search for Vengeance",
 "type": "ALL"
},
{
 "mal_id": 1684,
    "title": "Sol Levante",
 "type": "ALL"
},
{
 "mal_id": 1685,
    "title": "Kaze no Na wa Amnesia",
 "type": "ALL"
},
{
 "mal_id": 1686,
    "title": "Pokemon Black and White 2: Introduction Movie",
 "type": "ALL"
},
{
 "mal_id": 1687,
    "title": "Seikai no Senki III",
 "type": "ALL"
},
{
 "mal_id": 1688,
    "title": "Dual! Parallel Lun-Lun Monogatari",
 "type": "ALL"
},
{
 "mal_id": 1689,
    "title": "Baldr Force Exe Resolution",
 "type": "ALL"
},
{
 "mal_id": 1690,
    "title": "Code Geass: Boukoku no Akito 2 - Hikisakareshi Yokuryuu Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 1691,
    "title": "Vampire Hunter",
 "type": "ALL"
},
{
 "mal_id": 1692,
    "title": "Chu Feng: B.E.E",
 "type": "ALL"
},
{
 "mal_id": 1693,
    "title": "Mobile Suit Gundam: The Origin - Advent of the Red Comet",
 "type": "ALL"
},
{
 "mal_id": 1694,
    "title": "Chou Yuu Sekai: Being the Reality",
 "type": "ALL"
},
{
 "mal_id": 1695,
    "title": "Angel Heart",
 "type": "ALL"
},
{
 "mal_id": 1696,
    "title": "Angel Cop",
 "type": "ALL"
},
{
 "mal_id": 1697,
    "title": "Zenonzard The Animation",
 "type": "ALL"
},
{
 "mal_id": 1698,
    "title": "Crystal Blaze",
 "type": "ALL"
},
{
 "mal_id": 1699,
    "title": "Nanatsu no Taizai: Ensa no Edinburgh",
 "type": "ALL"
},
{
 "mal_id": 1700,
    "title": "Circlet Princess",
 "type": "ALL"
},
{
 "mal_id": 1701,
    "title": "Mushi-Uta",
 "type": "ALL"
},
{
 "mal_id": 1702,
    "title": "Fate/Apocrypha Recaps",
 "type": "ALL"
},
{
 "mal_id": 1703,
    "title": "Futari wa Precure: Max Heart",
 "type": "ALL"
},
{
 "mal_id": 1704,
    "title": "Hangyakusei Million Arthur 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1705,
    "title": "Rockman.EXE Axess",
 "type": "ALL"
},
{
 "mal_id": 1706,
    "title": "Zettai Shougeki: Platonic Heart",
 "type": "ALL"
},
{
 "mal_id": 1707,
    "title": "Overlord: Ple Ple Pleiades - Clementine Toubou-hen",
 "type": "ALL"
},
{
 "mal_id": 1708,
    "title": "Baoh Raihousha",
 "type": "ALL"
},
{
 "mal_id": 1709,
    "title": "Golgo 13",
 "type": "ALL"
},
{
 "mal_id": 1710,
    "title": "Area 88",
 "type": "ALL"
},
{
 "mal_id": 1711,
    "title": "Arad Senki: Slap Up Party",
 "type": "ALL"
},
{
 "mal_id": 1712,
    "title": "Vivy: Fluorite Eye's Song - To Make Everyone Happy With My Singing",
 "type": "ALL"
},
{
 "mal_id": 1713,
    "title": "Queen's Blade OVA",
 "type": "ALL"
},
{
 "mal_id": 1714,
    "title": "Parasite Dolls",
 "type": "ALL"
},
{
 "mal_id": 1715,
    "title": "Ken En Ken: Aoki Kagayaki",
 "type": "ALL"
},
{
 "mal_id": 1716,
    "title": "Urusei Yatsura 2: Beautiful Dreamer",
 "type": "ALL"
},
{
 "mal_id": 1717,
    "title": "Shin Tennis no Ouji-sama OVA vs. Genius 10",
 "type": "ALL"
},
{
 "mal_id": 1718,
    "title": "Mobile Suit Gundam NT",
 "type": "ALL"
},
{
 "mal_id": 1719,
    "title": "Eiyuu Densetsu: Sora no Kiseki The Animation",
 "type": "ALL"
},
{
 "mal_id": 1720,
    "title": "One Piece: Kinkyuu Kikaku One Piece Kanzen Kouryakuhou",
 "type": "ALL"
},
{
 "mal_id": 1721,
    "title": "Mazinger Z",
 "type": "ALL"
},
{
 "mal_id": 1722,
    "title": "Zettai Junpaku♡Mahou Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1723,
    "title": "Monster Farm: Legend e no Michi",
 "type": "ALL"
},
{
 "mal_id": 1724,
    "title": "Macross Plus Movie Edition",
 "type": "ALL"
},
{
 "mal_id": 1725,
    "title": "Mecha-ude",
 "type": "ALL"
},
{
 "mal_id": 1726,
    "title": "Ranma ½: Chou Musabetsu Kessen! Ranma Team vs. Densetsu no Houou",
 "type": "ALL"
},
{
 "mal_id": 1727,
    "title": "Arc the Lad",
 "type": "ALL"
},
{
 "mal_id": 1728,
    "title": "Digimon Ghost Game",
 "type": "ALL"
},
{
 "mal_id": 1729,
    "title": "Chain Chronicle: Haecceitas no Hikari Part 2",
 "type": "ALL"
},
{
 "mal_id": 1730,
    "title": "Kinnikuman II Sei",
 "type": "ALL"
},
{
 "mal_id": 1731,
    "title": "Bakuretsu Tenshi: Infinity",
 "type": "ALL"
},
{
 "mal_id": 1732,
    "title": "Dragon Ball Z: Zenbu Misemasu Toshi Wasure Dragon Ball Z!",
 "type": "ALL"
},
{
 "mal_id": 1733,
    "title": "Shingeki no Bahamut: Genesis - Roundup",
 "type": "ALL"
},
{
 "mal_id": 1734,
    "title": "Go! Princess Precure",
 "type": "ALL"
},
{
 "mal_id": 1735,
    "title": "Dance in the Vampire Bund: Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1736,
    "title": "Grappler Baki",
 "type": "ALL"
},
{
 "mal_id": 1737,
    "title": "Trava: Fist Planet",
 "type": "ALL"
},
{
 "mal_id": 1738,
    "title": "Street Fighter Zero The Animation",
 "type": "ALL"
},
{
 "mal_id": 1739,
    "title": "Yes! Precure 5",
 "type": "ALL"
},
{
 "mal_id": 1740,
    "title": "Zoids Genesis",
 "type": "ALL"
},
{
 "mal_id": 1741,
    "title": "Darwin's Game: Log Line",
 "type": "ALL"
},
{
 "mal_id": 1742,
    "title": "Cutey Honey",
 "type": "ALL"
},
{
 "mal_id": 1743,
    "title": "Yu☆Gi☆Oh!: Sevens",
 "type": "ALL"
},
{
 "mal_id": 1744,
    "title": "Uchuu no Kishi Tekkaman Blade",
 "type": "ALL"
},
{
 "mal_id": 1745,
    "title": "Dragon Ball Super: Broly - Skytree Super",
 "type": "ALL"
},
{
 "mal_id": 1746,
    "title": "Tenchi Muyou! Manatsu no Eve",
 "type": "ALL"
},
{
 "mal_id": 1747,
    "title": "Baki: Most Evil Death Row Convicts Special Anime",
 "type": "ALL"
},
{
 "mal_id": 1748,
    "title": "Utawarerumono Specials",
 "type": "ALL"
},
{
 "mal_id": 1749,
    "title": "Kidou Senkan Nadesico: The Prince of Darkness",
 "type": "ALL"
},
{
 "mal_id": 1750,
    "title": "Ozma",
 "type": "ALL"
},
{
 "mal_id": 1751,
    "title": "Senjou no Valkyria 3: Tagatame no Juusou",
 "type": "ALL"
},
{
 "mal_id": 1752,
    "title": "Fresh Precure!",
 "type": "ALL"
},
{
 "mal_id": 1753,
    "title": "RahXephon: Tagen Hensoukyoku",
 "type": "ALL"
},
{
 "mal_id": 1754,
    "title": "Soukihei MD Geist",
 "type": "ALL"
},
{
 "mal_id": 1755,
    "title": "Byston Well Monogatari: Garzey no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1756,
    "title": "Tekken",
 "type": "ALL"
},
{
 "mal_id": 1757,
    "title": "Mobile Suit Gundam SEED: After-Phase Between the Stars",
 "type": "ALL"
},
{
 "mal_id": 1758,
    "title": "Shikabane Hime: Kuro – Soredemo, Hito to Shite",
 "type": "ALL"
},
{
 "mal_id": 1759,
    "title": "Rayearth",
 "type": "ALL"
},
{
 "mal_id": 1760,
    "title": "Cike Wu Liuqi Fanwai",
 "type": "ALL"
},
{
 "mal_id": 1761,
    "title": "Berserk: Majo no Tsuisou",
 "type": "ALL"
},
{
 "mal_id": 1762,
    "title": "Cardfight!! Vanguard: Legion Mate-hen",
 "type": "ALL"
},
{
 "mal_id": 1763,
    "title": "Final Fantasy",
 "type": "ALL"
},
{
 "mal_id": 1764,
    "title": "Queen's Blade: Rurou no Senshi Specials",
 "type": "ALL"
},
{
 "mal_id": 1765,
    "title": "Cardfight!! Vanguard G",
 "type": "ALL"
},
{
 "mal_id": 1766,
    "title": "Soukyuu no Fafner: Right of Left - Single Program",
 "type": "ALL"
},
{
 "mal_id": 1767,
    "title": "Shikizakura",
 "type": "ALL"
},
{
 "mal_id": 1768,
    "title": "Shin Mazinger Shougeki! Z-hen",
 "type": "ALL"
},
{
 "mal_id": 1769,
    "title": "Aldnoah.Zero Extra Archives",
 "type": "ALL"
},
{
 "mal_id": 1770,
    "title": "Boku no Hero Academia the Movie 3: World Heroes' Mission - Tabidachi",
 "type": "ALL"
},
{
 "mal_id": 1771,
    "title": "Yao Jing Zhong Zhi Shou Ce",
 "type": "ALL"
},
{
 "mal_id": 1772,
    "title": "Chain Chronicle: Haecceitas no Hikari Part 3",
 "type": "ALL"
},
{
 "mal_id": 1773,
    "title": "Overlord Movie 3: Sei Oukoku-hen",
 "type": "ALL"
},
{
 "mal_id": 1774,
    "title": "Kingdom 4th Season",
 "type": "ALL"
},
{
 "mal_id": 1775,
    "title": "Donten ni Warau Gaiden: Ketsubetsu, Yamainu no Chikai",
 "type": "ALL"
},
{
 "mal_id": 1776,
    "title": "Detective Conan Movie 24: The Scarlet Bullet",
 "type": "ALL"
},
{
 "mal_id": 1777,
    "title": "Najica Dengeki Sakusen",
 "type": "ALL"
},
{
 "mal_id": 1778,
    "title": "Ajin 2nd Season OVA",
 "type": "ALL"
},
{
 "mal_id": 1779,
    "title": "Suite Precure♪",
 "type": "ALL"
},
{
 "mal_id": 1780,
    "title": "High School Fleet Movie",
 "type": "ALL"
},
{
 "mal_id": 1781,
    "title": "Manyuu Hikenchou Specials",
 "type": "ALL"
},
{
 "mal_id": 1782,
    "title": "Koutetsu no Majo Annerose",
 "type": "ALL"
},
{
 "mal_id": 1783,
    "title": "Black Magic M-66",
 "type": "ALL"
},
{
 "mal_id": 1784,
    "title": "Queen's Blade Rebellion vs. Hagure Yuusha no Aesthetica",
 "type": "ALL"
},
{
 "mal_id": 1785,
    "title": "Plastic Little",
 "type": "ALL"
},
{
 "mal_id": 1786,
    "title": "One Piece: Episode of Alabasta - Prologue",
 "type": "ALL"
},
{
 "mal_id": 1787,
    "title": "Douluo Dalu: Jingying Sai",
 "type": "ALL"
},
{
 "mal_id": 1788,
    "title": "Soukyuu no Fafner: Dead Aggressor - Exodus 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1789,
    "title": "Hug tto! Precure",
 "type": "ALL"
},
{
 "mal_id": 1790,
    "title": "Armitage III: Poly-Matrix",
 "type": "ALL"
},
{
 "mal_id": 1791,
    "title": "Saber Marionette J to X",
 "type": "ALL"
},
{
 "mal_id": 1792,
    "title": "Boruto: Jump Festa 2016 Special",
 "type": "ALL"
},
{
 "mal_id": 1793,
    "title": "3x3 Eyes: Seima Densetsu",
 "type": "ALL"
},
{
 "mal_id": 1794,
    "title": "Betterman",
 "type": "ALL"
},
{
 "mal_id": 1795,
    "title": "Code Geass: Soubou no Oz Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 1796,
    "title": "Appleseed XIII",
 "type": "ALL"
},
{
 "mal_id": 1797,
    "title": "Soukyuu no Fafner: Dead Aggressor - Heaven and Earth",
 "type": "ALL"
},
{
 "mal_id": 1798,
    "title": "Yao Shen Ji",
 "type": "ALL"
},
{
 "mal_id": 1799,
    "title": "Ginga Eiyuu Densetsu Gaiden: Ougon no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1800,
    "title": "Arifureta Shokugyou de Sekai Saikyou 2nd Season Special",
 "type": "ALL"
},
{
 "mal_id": 1801,
    "title": "Phantom The Animation",
 "type": "ALL"
},
{
 "mal_id": 1802,
    "title": "Nurarihyon no Mago Recaps",
 "type": "ALL"
},
{
 "mal_id": 1803,
    "title": "Hakuouki: Hekketsuroku - Kyoto Kaisouroku",
 "type": "ALL"
},
{
 "mal_id": 1804,
    "title": "Change!! Getter Robo: Sekai Saigo no Hi",
 "type": "ALL"
},
{
 "mal_id": 1805,
    "title": "Photon",
 "type": "ALL"
},
{
 "mal_id": 1806,
    "title": "Shin Hokuto no Ken",
 "type": "ALL"
},
{
 "mal_id": 1807,
    "title": "Beyblade Burst God",
 "type": "ALL"
},
{
 "mal_id": 1808,
    "title": "Arslan Senki (TV): Tsuioku no Shou - Dakkan no Yaiba",
 "type": "ALL"
},
{
 "mal_id": 1809,
    "title": "Quanzhi Fashi V",
 "type": "ALL"
},
{
 "mal_id": 1810,
    "title": "Dokyuu Hentai HxEros OVA",
 "type": "ALL"
},
{
 "mal_id": 1811,
    "title": "Hakuouki OVA",
 "type": "ALL"
},
{
 "mal_id": 1812,
    "title": "Toaru Majutsu no Index 10th Anniversary PV",
 "type": "ALL"
},
{
 "mal_id": 1813,
    "title": "Aoki Densetsu Shoot!",
 "type": "ALL"
},
{
 "mal_id": 1814,
    "title": "Silent Möbius",
 "type": "ALL"
},
{
 "mal_id": 1815,
    "title": "Digimon Universe: Appli Monsters",
 "type": "ALL"
},
{
 "mal_id": 1816,
    "title": "Inferno Cop 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1817,
    "title": "Clamp Gakuen Tanteidan",
 "type": "ALL"
},
{
 "mal_id": 1818,
    "title": "Onigamiden",
 "type": "ALL"
},
{
 "mal_id": 1819,
    "title": "Kaze no Youjinbou",
 "type": "ALL"
},
{
 "mal_id": 1820,
    "title": "Cyborg 009 VS Devilman",
 "type": "ALL"
},
{
 "mal_id": 1821,
    "title": "Area 88 (TV)",
 "type": "ALL"
},
{
 "mal_id": 1822,
    "title": "Ar Tonelico: Sekai no Owari de Utai Tsuzukeru Shoujo",
 "type": "ALL"
},
{
 "mal_id": 1823,
    "title": "Gintama: Monster Strike-hen",
 "type": "ALL"
},
{
 "mal_id": 1824,
    "title": "Kure-nai OVA",
 "type": "ALL"
},
{
 "mal_id": 1825,
    "title": "Kono Healer, Mendokusai",
 "type": "ALL"
},
{
 "mal_id": 1826,
    "title": "Ushio to Tora",
 "type": "ALL"
},
{
 "mal_id": 1827,
    "title": "Soukou Musume Senki",
 "type": "ALL"
},
{
 "mal_id": 1828,
    "title": "Senjuushi",
 "type": "ALL"
},
{
 "mal_id": 1829,
    "title": "Ikkitousen: Extravaganza Epoch",
 "type": "ALL"
},
{
 "mal_id": 1830,
    "title": "Aquarian Age: Sign for Evolution",
 "type": "ALL"
},
{
 "mal_id": 1831,
    "title": "Digimon Savers the Movie: Kyuukyoku Power! Burst Mode Hatsudou!!",
 "type": "ALL"
},
{
 "mal_id": 1832,
    "title": "Ranma ½: Akumu! Shunmin Kou",
 "type": "ALL"
},
{
 "mal_id": 1833,
    "title": "Saint Seiya: Saintia Shou",
 "type": "ALL"
},
{
 "mal_id": 1834,
    "title": "Saiyuuki Gaiden",
 "type": "ALL"
},
{
 "mal_id": 1835,
    "title": "Busou Shinki Moon Angel",
 "type": "ALL"
},
{
 "mal_id": 1836,
    "title": "Kishin Douji Zenki",
 "type": "ALL"
},
{
 "mal_id": 1837,
    "title": "Aru Zombie Shoujo no Sainan (ONA)",
 "type": "ALL"
},
{
 "mal_id": 1838,
    "title": "Venus Senki",
 "type": "ALL"
},
{
 "mal_id": 1839,
    "title": "Mahou Shoujo Lyrical Nanoha: Reflection",
 "type": "ALL"
},
{
 "mal_id": 1840,
    "title": "Saiyuuki Reload: Burial",
 "type": "ALL"
},
{
 "mal_id": 1841,
    "title": "Uchuu Senkan Yamato 2199: Hoshimeguru Hakobune",
 "type": "ALL"
},
{
 "mal_id": 1842,
    "title": "Kaibutsu Oujo (OVA)",
 "type": "ALL"
},
{
 "mal_id": 1843,
    "title": "Choujuushin Gravion",
 "type": "ALL"
},
{
 "mal_id": 1844,
    "title": "Ryo",
 "type": "ALL"
},
{
 "mal_id": 1845,
    "title": "Vanquished Queens",
 "type": "ALL"
},
{
 "mal_id": 1846,
    "title": "Berserk Recap",
 "type": "ALL"
},
{
 "mal_id": 1847,
    "title": "Gundam Build Divers Re:Rise",
 "type": "ALL"
},
{
 "mal_id": 1848,
    "title": "Project ARMS",
 "type": "ALL"
},
{
 "mal_id": 1849,
    "title": "Sengoku Basara: Setonai no Gekitotsu! Hi wo Fuku Umi no Daiyousai - Fugaku!!",
 "type": "ALL"
},
{
 "mal_id": 1850,
    "title": "Kyoushoku Soukou Guyver (1989)",
 "type": "ALL"
},
{
 "mal_id": 1851,
    "title": "Bio Hunter",
 "type": "ALL"
},
{
 "mal_id": 1852,
    "title": "Fire Emblem",
 "type": "ALL"
},
{
 "mal_id": 1853,
    "title": "Ryuusei no Rockman",
 "type": "ALL"
},
{
 "mal_id": 1854,
    "title": "86 Part 2 Recaps",
 "type": "ALL"
},
{
 "mal_id": 1855,
    "title": "Black Jack 21",
 "type": "ALL"
},
{
 "mal_id": 1856,
    "title": "Kyattou Ninden Teyandee",
 "type": "ALL"
},
{
 "mal_id": 1857,
    "title": "Choujin Densetsu Urotsukidouji",
 "type": "ALL"
},
{
 "mal_id": 1858,
    "title": "Macross F: Close Encounter - Deculture Edition",
 "type": "ALL"
},
{
 "mal_id": 1859,
    "title": "Fatal Fury: The Motion Picture",
 "type": "ALL"
},
{
 "mal_id": 1860,
    "title": "Star Driver the Movie",
 "type": "ALL"
},
{
 "mal_id": 1861,
    "title": "Yuu☆Yuu☆Hakusho: Eizou Hakusho II",
 "type": "ALL"
},
{
 "mal_id": 1862,
    "title": "Ragnastrike Angels",
 "type": "ALL"
},
{
 "mal_id": 1863,
    "title": "Tetsuwan Atom (1980)",
 "type": "ALL"
},
{
 "mal_id": 1864,
    "title": "RoboMasters the Animated Series",
 "type": "ALL"
},
{
 "mal_id": 1865,
    "title": "Yuu☆Yuu☆Hakusho: Eizou Hakusho - Ankoku Bujutsukai no Shou",
 "type": "ALL"
},
{
 "mal_id": 1866,
    "title": "Jormungand: Perfect Order Recap",
 "type": "ALL"
},
{
 "mal_id": 1867,
    "title": "Dragon Ball Z: Summer Vacation Special",
 "type": "ALL"
},
{
 "mal_id": 1868,
    "title": "Sakigake!! Otokojuku",
 "type": "ALL"
},
{
 "mal_id": 1869,
    "title": "Btooom!: Bakusatsu Digest",
 "type": "ALL"
},
{
 "mal_id": 1870,
    "title": "Lupin III: Lupin vs. Fukusei-ningen",
 "type": "ALL"
},
{
 "mal_id": 1871,
    "title": "Biohazard: Infinite Darkness",
 "type": "ALL"
},
{
 "mal_id": 1872,
    "title": "Inazuma Eleven Go vs. Danball Senki W Movie",
 "type": "ALL"
},
{
 "mal_id": 1873,
    "title": "Megaton-kyuu Musashi",
 "type": "ALL"
},
{
 "mal_id": 1874,
    "title": "Futari wa Precure: Splash☆Star",
 "type": "ALL"
},
{
 "mal_id": 1875,
    "title": "Five Star Stories",
 "type": "ALL"
},
{
 "mal_id": 1876,
    "title": "Queen's Blade: Gyokuza wo Tsugu Mono Specials",
 "type": "ALL"
},
{
 "mal_id": 1877,
    "title": "Kara no Kyoukai: Manner Movies",
 "type": "ALL"
},
{
 "mal_id": 1878,
    "title": "Overman King Gainer",
 "type": "ALL"
},
{
 "mal_id": 1879,
    "title": "Shijou Saikyou no Deshi Kenichi Specials",
 "type": "ALL"
},
{
 "mal_id": 1880,
    "title": "Nurarihyon no Mago: Sennen Makyou Recaps",
 "type": "ALL"
},
{
 "mal_id": 1881,
    "title": "Munto: Toki no Kabe wo Koete",
 "type": "ALL"
},
{
 "mal_id": 1882,
    "title": "Hokuto no Ken: Raoh Gaiden Ten no Haoh",
 "type": "ALL"
},
{
 "mal_id": 1883,
    "title": "Trigger-chan",
 "type": "ALL"
},
{
 "mal_id": 1884,
    "title": "Mahoutsukai Precure!",
 "type": "ALL"
},
{
 "mal_id": 1885,
    "title": "Mahou Sensei Negima!: Introduction Film",
 "type": "ALL"
},
{
 "mal_id": 1886,
    "title": "Yuugo: Koushounin",
 "type": "ALL"
},
{
 "mal_id": 1887,
    "title": "Bakumatsu: Crisis",
 "type": "ALL"
},
{
 "mal_id": 1888,
    "title": "Nezha Zhi Mo Tong Jiang Shi",
 "type": "ALL"
},
{
 "mal_id": 1889,
    "title": "Rurouni Kenshin: Special Techniques",
 "type": "ALL"
},
{
 "mal_id": 1890,
    "title": "Rokka no Yuusha Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 1891,
    "title": "Lupin the IIIrd: Mine Fujiko no Uso",
 "type": "ALL"
},
{
 "mal_id": 1892,
    "title": "Final Fantasy VII: Advent Children - Venice Film Festival Footage",
 "type": "ALL"
},
{
 "mal_id": 1893,
    "title": "Buki yo Saraba",
 "type": "ALL"
},
{
 "mal_id": 1894,
    "title": "Utawarerumono: Futari no Hakuoro",
 "type": "ALL"
},
{
 "mal_id": 1895,
    "title": "Shenmue the Animation",
 "type": "ALL"
},
{
 "mal_id": 1896,
    "title": "Shin Captain Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 1897,
    "title": "Mobile Suit Gundam 00 Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1898,
    "title": "Sidonia no Kishi Movie",
 "type": "ALL"
},
{
 "mal_id": 1899,
    "title": "Shamanic Princess",
 "type": "ALL"
},
{
 "mal_id": 1900,
    "title": "Beatless Intermission",
 "type": "ALL"
},
{
 "mal_id": 1901,
    "title": "Goulart Knights: Evoked the Beginning Black",
 "type": "ALL"
},
{
 "mal_id": 1902,
    "title": "Stranger: Mukou Hadan Pilot",
 "type": "ALL"
},
{
 "mal_id": 1903,
    "title": "Zone of the Enders: Dolores, I",
 "type": "ALL"
},
{
 "mal_id": 1904,
    "title": "Violence Jack: Harlem Bomber-hen",
 "type": "ALL"
},
{
 "mal_id": 1905,
    "title": "Gundam Build Fighters Try: Island Wars",
 "type": "ALL"
},
{
 "mal_id": 1906,
    "title": "Ginga Tetsudou Monogatari",
 "type": "ALL"
},
{
 "mal_id": 1907,
    "title": "Kaibutsu Oujo: Konsui Oujo",
 "type": "ALL"
},
{
 "mal_id": 1908,
    "title": "Irregular Hunter X: The Day of Sigma",
 "type": "ALL"
},
{
 "mal_id": 1909,
    "title": "Pocket Monsters: Diamond & Pearl Specials",
 "type": "ALL"
},
{
 "mal_id": 1910,
    "title": "Megalo Box Specials",
 "type": "ALL"
},
{
 "mal_id": 1911,
    "title": "Tian Guan Ci Fu 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1912,
    "title": "Souten no Ken",
 "type": "ALL"
},
{
 "mal_id": 1913,
    "title": "Saber Marionette J Again",
 "type": "ALL"
},
{
 "mal_id": 1914,
    "title": "Tiger & Bunny 2",
 "type": "ALL"
},
{
 "mal_id": 1915,
    "title": "Choujigen Game Neptune The Animation OVA",
 "type": "ALL"
},
{
 "mal_id": 1916,
    "title": "Tenchi Muyou! Ryououki 3rd Season: Tenchi Seirou naredo Namitakashi?",
 "type": "ALL"
},
{
 "mal_id": 1917,
    "title": "Tetsuwan Atom",
 "type": "ALL"
},
{
 "mal_id": 1918,
    "title": "Mobile Suit Gundam SEED Destiny Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1919,
    "title": "Karen Senki",
 "type": "ALL"
},
{
 "mal_id": 1920,
    "title": "Grancrest Senki: Tsuisou",
 "type": "ALL"
},
{
 "mal_id": 1921,
    "title": "Donten ni Warau Gaiden: Shukumei, Soutou no Fuuma",
 "type": "ALL"
},
{
 "mal_id": 1922,
    "title": "Beyblade Burst Chouzetsu",
 "type": "ALL"
},
{
 "mal_id": 1923,
    "title": "Koukaku Kidoutai Arise: Another Mission",
 "type": "ALL"
},
{
 "mal_id": 1924,
    "title": "Tokyo Tribe 2",
 "type": "ALL"
},
{
 "mal_id": 1925,
    "title": "Ikkitousen: Western Wolves",
 "type": "ALL"
},
{
 "mal_id": 1926,
    "title": "Viewtiful Joe",
 "type": "ALL"
},
{
 "mal_id": 1927,
    "title": "Shin Tennis no Ouji-sama Specials",
 "type": "ALL"
},
{
 "mal_id": 1928,
    "title": "Mobile Suit Gundam Thunderbolt: Bandit Flower",
 "type": "ALL"
},
{
 "mal_id": 1929,
    "title": "A.D. Police (TV)",
 "type": "ALL"
},
{
 "mal_id": 1930,
    "title": "Kyousou Giga (TV) Recaps",
 "type": "ALL"
},
{
 "mal_id": 1931,
    "title": "Inferno Cop: Fact Files",
 "type": "ALL"
},
{
 "mal_id": 1932,
    "title": "Hokuto no Ken: Raoh Gaiden Junai-hen",
 "type": "ALL"
},
{
 "mal_id": 1933,
    "title": "Hero Mask 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 1934,
    "title": "Seisenshi Dunbine",
 "type": "ALL"
},
{
 "mal_id": 1935,
    "title": "Mobile Suit Gundam Wing: Operation Meteor",
 "type": "ALL"
},
{
 "mal_id": 1936,
    "title": "Mato Seihei no Slave",
 "type": "ALL"
},
{
 "mal_id": 1937,
    "title": "Garo: Honoo no Kokuin - Home",
 "type": "ALL"
},
{
 "mal_id": 1938,
    "title": "Souten no Ken: Regenesis",
 "type": "ALL"
},
{
 "mal_id": 1939,
    "title": "Nekojiru Gekijou Jirujiru Original",
 "type": "ALL"
},
{
 "mal_id": 1940,
    "title": "Cardfight!! Vanguard (2018)",
 "type": "ALL"
},
{
 "mal_id": 1941,
    "title": "Happiness Charge Precure!",
 "type": "ALL"
},
{
 "mal_id": 1942,
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Gekitotsu",
 "type": "ALL"
},
{
 "mal_id": 1943,
    "title": "Sousei no Aquarion OVA",
 "type": "ALL"
},
{
 "mal_id": 1944,
    "title": "Queen's Blade: Grimoire",
 "type": "ALL"
},
{
 "mal_id": 1945,
    "title": "Eureka Seven AO: Jungfrau no Hanabana-tachi",
 "type": "ALL"
},
{
 "mal_id": 1946,
    "title": "Tennis no Ouji-sama Movie 2: Eikokushiki Teikyuu Shiro Kessen!",
 "type": "ALL"
},
{
 "mal_id": 1947,
    "title": "Burn Up Excess",
 "type": "ALL"
},
{
 "mal_id": 1948,
    "title": "Anime Tenchou",
 "type": "ALL"
},
{
 "mal_id": 1949,
    "title": "Bleach: Gotei 13 Omake",
 "type": "ALL"
},
{
 "mal_id": 1950,
    "title": "Yuu☆Yuu☆Hakusho Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 1951,
    "title": "Kirakira☆Precure A La Mode",
 "type": "ALL"
},
{
 "mal_id": 1952,
    "title": "Bakuten Shoot Beyblade the Movie: Gekitou!! Takao vs. Daichi",
 "type": "ALL"
},
{
 "mal_id": 1953,
    "title": "Gundam Evolve",
 "type": "ALL"
},
{
 "mal_id": 1954,
    "title": "Lupin III: Dead or Alive",
 "type": "ALL"
},
{
 "mal_id": 1955,
    "title": "Crying Freeman",
 "type": "ALL"
},
{
 "mal_id": 1956,
    "title": "Cluster Edge",
 "type": "ALL"
},
{
 "mal_id": 1957,
    "title": "Meitantei Holmes",
 "type": "ALL"
},
{
 "mal_id": 1958,
    "title": "Lupin III: Kutabare! Nostradamus",
 "type": "ALL"
},
{
 "mal_id": 1959,
    "title": "Afro Samurai Pilot",
 "type": "ALL"
},
{
 "mal_id": 1960,
    "title": "Queen's Blade: Unlimited",
 "type": "ALL"
},
{
 "mal_id": 1961,
    "title": "Kakugo no Susume",
 "type": "ALL"
},
{
 "mal_id": 1962,
    "title": "Mobile Suit Gundam SEED Special Edition",
 "type": "ALL"
},
{
 "mal_id": 1963,
    "title": "11-nin Iru!",
 "type": "ALL"
},
{
 "mal_id": 1964,
    "title": "Honoo no Mirage: Minagiwa no Hangyakusha",
 "type": "ALL"
},
{
 "mal_id": 1965,
    "title": "Bubblegum Crash",
 "type": "ALL"
},
{
 "mal_id": 1966,
    "title": "Chain Chronicle: Short Animation",
 "type": "ALL"
},
{
 "mal_id": 1967,
    "title": "Mobile Suit Gundam: Twilight Axis",
 "type": "ALL"
},
{
 "mal_id": 1968,
    "title": "Gate Keepers 21",
 "type": "ALL"
},
{
 "mal_id": 1969,
    "title": "Pokemon XY&Z Specials",
 "type": "ALL"
},
{
 "mal_id": 1970,
    "title": "eX-Driver",
 "type": "ALL"
},
{
 "mal_id": 1971,
    "title": "Phantom of the Kill: Zero kara no Hangyaku",
 "type": "ALL"
},
{
 "mal_id": 1972,
    "title": "Quiz Magic Academy: The Original Animation",
 "type": "ALL"
},
{
 "mal_id": 1973,
    "title": "Angel Blade",
 "type": "ALL"
},
{
 "mal_id": 1974,
    "title": "Igano Kabamaru",
 "type": "ALL"
},
{
 "mal_id": 1975,
    "title": "Tenkuu Senki Shurato",
 "type": "ALL"
},
{
 "mal_id": 1976,
    "title": "City Hunter Movie: Shinjuku Private Eyes",
 "type": "ALL"
},
{
 "mal_id": 1977,
    "title": "Ta ga Tame no Alchemist",
 "type": "ALL"
},
{
 "mal_id": 1978,
    "title": "Midnight Eye: Gokuu",
 "type": "ALL"
},
{
 "mal_id": 1979,
    "title": "Eat-Man",
 "type": "ALL"
},
{
 "mal_id": 1980,
    "title": "Viper's Creed",
 "type": "ALL"
},
{
 "mal_id": 1981,
    "title": "Koroshiya 1 The Animation: Episode 0",
 "type": "ALL"
},
{
 "mal_id": 1982,
    "title": "Terra Formars: Earth-hen",
 "type": "ALL"
},
{
 "mal_id": 1983,
    "title": "Blame! Prologue",
 "type": "ALL"
},
{
 "mal_id": 1984,
    "title": "Lupin III: Fuuma Ichizoku no Inbou",
 "type": "ALL"
},
{
 "mal_id": 1985,
    "title": "Initial D: Project D to the Next Stage - Project D e Mukete",
 "type": "ALL"
},
{
 "mal_id": 1986,
    "title": "Weiß Kreuz Glühen",
 "type": "ALL"
},
{
 "mal_id": 1987,
    "title": "Saiyuuki Reload: Zeroin",
 "type": "ALL"
},
{
 "mal_id": 1988,
    "title": "Mad★Bull 34",
 "type": "ALL"
},
{
 "mal_id": 1989,
    "title": "Terra e...",
 "type": "ALL"
},
{
 "mal_id": 1990,
    "title": "I: Wish You Were Here",
 "type": "ALL"
},
{
 "mal_id": 1991,
    "title": "Violence Jack: Jigoku Gai-hen",
 "type": "ALL"
},
{
 "mal_id": 1992,
    "title": "Toshokan Sensou: Koi no Shougai",
 "type": "ALL"
},
{
 "mal_id": 1993,
    "title": "Lupin III: Episode 0 First Contact",
 "type": "ALL"
},
{
 "mal_id": 1994,
    "title": "Fatal Fury: Legend of the Hungry Wolf",
 "type": "ALL"
},
{
 "mal_id": 1995,
    "title": "Queen's Blade OVA Specials",
 "type": "ALL"
},
{
 "mal_id": 1996,
    "title": "Taiho Shichau zo: Second Season",
 "type": "ALL"
},
{
 "mal_id": 1997,
    "title": "Mobile Suit Gundam: Iron-Blooded Orphans - Urðr Hunt",
 "type": "ALL"
},
{
 "mal_id": 1998,
    "title": "Hyper Police",
 "type": "ALL"
},
{
 "mal_id": 1999,
    "title": "Brave Witches: Petersburg Daisenryaku",
 "type": "ALL"
},
{
 "mal_id": 2000,
    "title": "Virtua Fighter",
 "type": "ALL"
},
{
 "mal_id": 2001,
    "title": "Cardfight!! Vanguard G: GIRS Crisis-hen",
 "type": "ALL"
},
{
 "mal_id": 2002,
    "title": "Gun Frontier",
 "type": "ALL"
},
{
 "mal_id": 2003,
    "title": "Aachi wa Ssipak",
 "type": "ALL"
},
{
 "mal_id": 2004,
    "title": "Pluto",
 "type": "ALL"
},
{
 "mal_id": 2005,
    "title": "Dragon Age: Blood Mage no Seisen",
 "type": "ALL"
},
{
 "mal_id": 2006,
    "title": "Waga Seishun no Arcadia",
 "type": "ALL"
},
{
 "mal_id": 2007,
    "title": "Maou Dante",
 "type": "ALL"
},
{
 "mal_id": 2008,
    "title": "Pokemon Omega Ruby & Alpha Sapphire: Mega Special Animation",
 "type": "ALL"
},
{
 "mal_id": 2009,
    "title": "Shin Getter Robo",
 "type": "ALL"
},
{
 "mal_id": 2010,
    "title": "Mahou Sensei Negima!: Mou Hitotsu no Sekai Extra - Mahou Shoujo Yue♥",
 "type": "ALL"
},
{
 "mal_id": 2011,
    "title": "Lupin III: Pilot Film",
 "type": "ALL"
},
{
 "mal_id": 2012,
    "title": "Star☆Twinkle Precure",
 "type": "ALL"
},
{
 "mal_id": 2013,
    "title": "Hokuto no Ken: Raoh Gaiden Gekitou-hen",
 "type": "ALL"
},
{
 "mal_id": 2014,
    "title": "Yes! Precure 5 GoGo!",
 "type": "ALL"
},
{
 "mal_id": 2015,
    "title": "Journey: Taiko Arabia Hantou de no Kiseki to Tatakai no Monogatari",
 "type": "ALL"
},
{
 "mal_id": 2016,
    "title": "Onkyo Seimeitai Noiseman",
 "type": "ALL"
},
{
 "mal_id": 2017,
    "title": "Dragonaut: The Resonance - Kotou - Tozasareta Kyousoo",
 "type": "ALL"
},
{
 "mal_id": 2018,
    "title": "Tiger Mask",
 "type": "ALL"
},
{
 "mal_id": 2019,
    "title": "Kagaku Ninja-tai Gatchaman",
 "type": "ALL"
},
{
 "mal_id": 2020,
    "title": "Brain Powerd",
 "type": "ALL"
},
{
 "mal_id": 2021,
    "title": "Final Fantasy XV: Episode Ardyn - Prologue",
 "type": "ALL"
},
{
 "mal_id": 2022,
    "title": "Golgo 13: Queen Bee",
 "type": "ALL"
},
{
 "mal_id": 2023,
    "title": "Tiger & Bunny Pilot",
 "type": "ALL"
},
{
 "mal_id": 2024,
    "title": "Cardfight!! Vanguard G: Next",
 "type": "ALL"
},
{
 "mal_id": 2025,
    "title": "Donten ni Warau Gaiden: Ouka, Tenbou no Kakehashi",
 "type": "ALL"
},
{
 "mal_id": 2026,
    "title": "Space Adventure Cobra",
 "type": "ALL"
},
{
 "mal_id": 2027,
    "title": "Jinzou Ningen Kikaider The Animation",
 "type": "ALL"
},
{
 "mal_id": 2028,
    "title": "Saihate no Paladin: Michiyuki",
 "type": "ALL"
},
{
 "mal_id": 2029,
    "title": "Burn Up Scramble",
 "type": "ALL"
},
{
 "mal_id": 2030,
    "title": "Urusei Yatsura Movie 1: Only You",
 "type": "ALL"
},
{
 "mal_id": 2031,
    "title": "Dog Days' Specials",
 "type": "ALL"
},
{
 "mal_id": 2032,
    "title": "Healin' Good♡Precure",
 "type": "ALL"
},
{
 "mal_id": 2033,
    "title": "Gundam Build Divers Re:Rise 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2034,
    "title": "Generator Gawl",
 "type": "ALL"
},
{
 "mal_id": 2035,
    "title": "Kamen no Maid Guy: Ano Natsu, Ichiban Yutaka na Chichi.",
 "type": "ALL"
},
{
 "mal_id": 2036,
    "title": "Dragon's Heaven",
 "type": "ALL"
},
{
 "mal_id": 2037,
    "title": "Cyborg 009 (1979)",
 "type": "ALL"
},
{
 "mal_id": 2038,
    "title": "Taiho Shichau zo: Full Throttle",
 "type": "ALL"
},
{
 "mal_id": 2039,
    "title": "Danball Senki",
 "type": "ALL"
},
{
 "mal_id": 2040,
    "title": "Super Robot Taisen OG: The Inspector",
 "type": "ALL"
},
{
 "mal_id": 2041,
    "title": "One Piece: Long Ring Long Land-hen",
 "type": "ALL"
},
{
 "mal_id": 2042,
    "title": "Doupo Cangqiong",
 "type": "ALL"
},
{
 "mal_id": 2043,
    "title": "Rockman.EXE Stream",
 "type": "ALL"
},
{
 "mal_id": 2044,
    "title": "Cutey Honey F",
 "type": "ALL"
},
{
 "mal_id": 2045,
    "title": "Wellber no Monogatari: Sisters of Wellber",
 "type": "ALL"
},
{
 "mal_id": 2046,
    "title": "Kurokami: Tora to Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 2047,
    "title": "Tropical-Rouge! Precure",
 "type": "ALL"
},
{
 "mal_id": 2048,
    "title": "Nasu: Andalusia no Natsu",
 "type": "ALL"
},
{
 "mal_id": 2049,
    "title": "Cybersix",
 "type": "ALL"
},
{
 "mal_id": 2050,
    "title": "Saint Beast: Seijuu Kourin-hen",
 "type": "ALL"
},
{
 "mal_id": 2051,
    "title": "Princess Principal: Crown Handler Movie 2",
 "type": "ALL"
},
{
 "mal_id": 2052,
    "title": "Shihaisha no Tasogare",
 "type": "ALL"
},
{
 "mal_id": 2053,
    "title": "Samurai Gun",
 "type": "ALL"
},
{
 "mal_id": 2054,
    "title": "Fatal Fury 2: The New Battle",
 "type": "ALL"
},
{
 "mal_id": 2055,
    "title": "Zone of the Enders: 2167 Idolo",
 "type": "ALL"
},
{
 "mal_id": 2056,
    "title": "ViVid Strike! Specials",
 "type": "ALL"
},
{
 "mal_id": 2057,
    "title": "Bem Movie: Become Human",
 "type": "ALL"
},
{
 "mal_id": 2058,
    "title": "Chou Robot Seimeitai Transformers Micron Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2059,
    "title": "Kikou Ryohei Mellowlink",
 "type": "ALL"
},
{
 "mal_id": 2060,
    "title": "Macross 7 Movie: Ginga ga Ore wo Yondeiru!",
 "type": "ALL"
},
{
 "mal_id": 2061,
    "title": "Battle Athletess Daiundoukai (TV)",
 "type": "ALL"
},
{
 "mal_id": 2062,
    "title": "Macross 7 Encore",
 "type": "ALL"
},
{
 "mal_id": 2063,
    "title": "Etotama: Nyankyaku Banrai",
 "type": "ALL"
},
{
 "mal_id": 2064,
    "title": "Mobile Suit Gundam: The 08th MS Team - A Battle with the Third Dimension",
 "type": "ALL"
},
{
 "mal_id": 2065,
    "title": "Rurouni Kenshin Recap",
 "type": "ALL"
},
{
 "mal_id": 2066,
    "title": "Douluo Dalu: Xiaowu Juebie",
 "type": "ALL"
},
{
 "mal_id": 2067,
    "title": "F-Zero: Falcon Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2068,
    "title": "Majutsushi Orphen Hagure Tabi: Tennin no Isan",
 "type": "ALL"
},
{
 "mal_id": 2069,
    "title": "Cardfight!! Vanguard G: Stride Gate-hen",
 "type": "ALL"
},
{
 "mal_id": 2070,
    "title": "Mass Effect: Paragon Lost",
 "type": "ALL"
},
{
 "mal_id": 2071,
    "title": "Seihou Tenshi Angel Links",
 "type": "ALL"
},
{
 "mal_id": 2072,
    "title": "Spider Riders: Oracle no Yuusha-tachi",
 "type": "ALL"
},
{
 "mal_id": 2073,
    "title": "Windaria",
 "type": "ALL"
},
{
 "mal_id": 2074,
    "title": "Yi Nian Yong Heng",
 "type": "ALL"
},
{
 "mal_id": 2075,
    "title": "Kenyuu Densetsu Yaiba",
 "type": "ALL"
},
{
 "mal_id": 2076,
    "title": "Tensei shitara Ken Deshita",
 "type": "ALL"
},
{
 "mal_id": 2077,
    "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia Recaps",
 "type": "ALL"
},
{
 "mal_id": 2078,
    "title": "Reideen",
 "type": "ALL"
},
{
 "mal_id": 2079,
    "title": "Infini-T Force",
 "type": "ALL"
},
{
 "mal_id": 2080,
    "title": "Shin Ikkitousen",
 "type": "ALL"
},
{
 "mal_id": 2081,
    "title": "Mobile Suit Gundam 0083: The Fading Light of Zeon",
 "type": "ALL"
},
{
 "mal_id": 2082,
    "title": "Ark IX",
 "type": "ALL"
},
{
 "mal_id": 2083,
    "title": "Buzzer Beater 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2084,
    "title": "Kodai Ouja Kyouryuu King: Yokuryuu Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2085,
    "title": "Macross Δ Movie: Gekijou no Walküre",
 "type": "ALL"
},
{
 "mal_id": 2086,
    "title": "Katsugeki/Touken Ranbu Movie",
 "type": "ALL"
},
{
 "mal_id": 2087,
    "title": "Gundam Build Fighters: GM no Gyakushuu",
 "type": "ALL"
},
{
 "mal_id": 2088,
    "title": "Kikou Souseiki Mospeada",
 "type": "ALL"
},
{
 "mal_id": 2089,
    "title": "Yaoguai Mingdan 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2090,
    "title": "Dirty Pair: The Movie",
 "type": "ALL"
},
{
 "mal_id": 2091,
    "title": "Altered Carbon: Resleeved",
 "type": "ALL"
},
{
 "mal_id": 2092,
    "title": "Gambo",
 "type": "ALL"
},
{
 "mal_id": 2093,
    "title": "Cobra The Animation",
 "type": "ALL"
},
{
 "mal_id": 2094,
    "title": "Mahou Shoujo Ai",
 "type": "ALL"
},
{
 "mal_id": 2095,
    "title": "Ice",
 "type": "ALL"
},
{
 "mal_id": 2096,
    "title": "The Hakkenden",
 "type": "ALL"
},
{
 "mal_id": 2097,
    "title": "Dirty Pair Flash",
 "type": "ALL"
},
{
 "mal_id": 2098,
    "title": "Chou Henshin Cosprayers",
 "type": "ALL"
},
{
 "mal_id": 2099,
    "title": "Youma",
 "type": "ALL"
},
{
 "mal_id": 2100,
    "title": "Next A-Class",
 "type": "ALL"
},
{
 "mal_id": 2101,
    "title": "Muv-Luv Alternative: Total Eclipse Recap - Climax Chokuzen Special",
 "type": "ALL"
},
{
 "mal_id": 2102,
    "title": "Devilman: Crybaby - Digest Eizou",
 "type": "ALL"
},
{
 "mal_id": 2103,
    "title": "Marvel Disk Wars: The Avengers",
 "type": "ALL"
},
{
 "mal_id": 2104,
    "title": "Hokuto no Ken: Yuria-den",
 "type": "ALL"
},
{
 "mal_id": 2105,
    "title": "Burn Up!",
 "type": "ALL"
},
{
 "mal_id": 2106,
    "title": "Canaan: Minorikawa Report 201X Shanghai",
 "type": "ALL"
},
{
 "mal_id": 2107,
    "title": "Code Geass: Hangyaku no Lelouch Picture Drama - Hajimari no Zenya",
 "type": "ALL"
},
{
 "mal_id": 2108,
    "title": "Digimon Adventure 3D: Digimon Grand Prix!",
 "type": "ALL"
},
{
 "mal_id": 2109,
    "title": "Tenka Hyakken: Meiji-kan e Youkoso!",
 "type": "ALL"
},
{
 "mal_id": 2110,
    "title": "Kyoushoku Soukou Guyver II",
 "type": "ALL"
},
{
 "mal_id": 2111,
    "title": "Lupin III: Green vs. Red",
 "type": "ALL"
},
{
 "mal_id": 2112,
    "title": "Hokuto no Ken: Toki-den",
 "type": "ALL"
},
{
 "mal_id": 2113,
    "title": "Sonic: Night of the WereHog",
 "type": "ALL"
},
{
 "mal_id": 2114,
    "title": "Taiho Shichau zo The Movie",
 "type": "ALL"
},
{
 "mal_id": 2115,
    "title": "Tenjoubito to Akutobito Saigo no Tatakai",
 "type": "ALL"
},
{
 "mal_id": 2116,
    "title": "Etotama Specials",
 "type": "ALL"
},
{
 "mal_id": 2117,
    "title": "Armed Blue Gunvolt",
 "type": "ALL"
},
{
 "mal_id": 2118,
    "title": "Hikyou Tanken Fam & Ihrlie",
 "type": "ALL"
},
{
 "mal_id": 2119,
    "title": "Wild Adapter",
 "type": "ALL"
},
{
 "mal_id": 2120,
    "title": "Mahou Shoujo Lyrical Nanoha: Detonation",
 "type": "ALL"
},
{
 "mal_id": 2121,
    "title": "Violence Jack: Hell's Wind-hen",
 "type": "ALL"
},
{
 "mal_id": 2122,
    "title": "Lupin III: Babylon no Ougon Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2123,
    "title": "Gifuu Doudou!!: Kanetsugu to Keiji",
 "type": "ALL"
},
{
 "mal_id": 2124,
    "title": "Saber Marionette R",
 "type": "ALL"
},
{
 "mal_id": 2125,
    "title": "Mushibugyou OVA",
 "type": "ALL"
},
{
 "mal_id": 2126,
    "title": "Eureka Seven AO: One More Time - Lord Don't Slow Me Down",
 "type": "ALL"
},
{
 "mal_id": 2127,
    "title": "Uchuu Senkan Yamato 2",
 "type": "ALL"
},
{
 "mal_id": 2128,
    "title": "Pokemon Best Wishes! Season 2: Decolora Adventure - Dent to Takeshi! Gyarados no Gekirin!!",
 "type": "ALL"
},
{
 "mal_id": 2129,
    "title": "Street Fighter IV: Aratanaru Kizuna",
 "type": "ALL"
},
{
 "mal_id": 2130,
    "title": "Pokemon XY SP: Road to Kalos",
 "type": "ALL"
},
{
 "mal_id": 2131,
    "title": "Toriko: Jump Super Anime Tour 2009 Special",
 "type": "ALL"
},
{
 "mal_id": 2132,
    "title": "Biohazard 4: Incubate",
 "type": "ALL"
},
{
 "mal_id": 2133,
    "title": "Iron Man: Rise of Technovore",
 "type": "ALL"
},
{
 "mal_id": 2134,
    "title": "Yao Shen Ji 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2135,
    "title": "Rockman.EXE Beast",
 "type": "ALL"
},
{
 "mal_id": 2136,
    "title": "MD Geist II: Death Force",
 "type": "ALL"
},
{
 "mal_id": 2137,
    "title": "Sekai de Ichiban Tsuyoku Naritai! Specials",
 "type": "ALL"
},
{
 "mal_id": 2138,
    "title": "Lupin III: Walther P38",
 "type": "ALL"
},
{
 "mal_id": 2139,
    "title": "Tatakae!! Iczer-1",
 "type": "ALL"
},
{
 "mal_id": 2140,
    "title": "Space Pirate Captain Herlock: Outside Legend - The Endless Odyssey",
 "type": "ALL"
},
{
 "mal_id": 2141,
    "title": "Ys",
 "type": "ALL"
},
{
 "mal_id": 2142,
    "title": "Spriggan (ONA)",
 "type": "ALL"
},
{
 "mal_id": 2143,
    "title": "Ginga Teikoku no Metsubou Gaiden: Aoki Ookami-tachi no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2144,
    "title": "Pokemon XY: Odemashi Ko Majin Hoopa",
 "type": "ALL"
},
{
 "mal_id": 2145,
    "title": "Lupin III: Moeyo Zantetsuken!",
 "type": "ALL"
},
{
 "mal_id": 2146,
    "title": "Alexander Senki",
 "type": "ALL"
},
{
 "mal_id": 2147,
    "title": "Kai Doh Maru",
 "type": "ALL"
},
{
 "mal_id": 2148,
    "title": "Wild Arms: Twilight Venom",
 "type": "ALL"
},
{
 "mal_id": 2149,
    "title": "Dallos",
 "type": "ALL"
},
{
 "mal_id": 2150,
    "title": "Crayon Shin-chan Movie 02: Buriburi Oukoku no Hihou",
 "type": "ALL"
},
{
 "mal_id": 2151,
    "title": "City Hunter: Ai to Shukumei no Magnum",
 "type": "ALL"
},
{
 "mal_id": 2152,
    "title": "Princess Principal Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 2153,
    "title": "Chiruran: Nibun no Ichi",
 "type": "ALL"
},
{
 "mal_id": 2154,
    "title": "Super Robot Taisen OG: Divine Wars",
 "type": "ALL"
},
{
 "mal_id": 2155,
    "title": "Mazinger Z Movie: Infinity",
 "type": "ALL"
},
{
 "mal_id": 2156,
    "title": "Lupin III (2015) Specials",
 "type": "ALL"
},
{
 "mal_id": 2157,
    "title": "Jie Mo Ren",
 "type": "ALL"
},
{
 "mal_id": 2158,
    "title": "Koutetsujou no Kabaneri: Ran - Hajimaru Michiato",
 "type": "ALL"
},
{
 "mal_id": 2159,
    "title": "Asagiri no Miko",
 "type": "ALL"
},
{
 "mal_id": 2160,
    "title": "Vandread: Taidou-hen",
 "type": "ALL"
},
{
 "mal_id": 2161,
    "title": "City Hunter: The Secret Service",
 "type": "ALL"
},
{
 "mal_id": 2162,
    "title": "Pucca 2",
 "type": "ALL"
},
{
 "mal_id": 2163,
    "title": "Vandread: Gekitou-hen",
 "type": "ALL"
},
{
 "mal_id": 2164,
    "title": "Lupin III: Bye Bye Liberty - Kiki Ippatsu!",
 "type": "ALL"
},
{
 "mal_id": 2165,
    "title": "Douluo Dalu: Hao Tian Yang Wei",
 "type": "ALL"
},
{
 "mal_id": 2166,
    "title": "Juusen Battle Monsuno",
 "type": "ALL"
},
{
 "mal_id": 2167,
    "title": "Digimon Savers: Agumon! Gaomon! Lalamon! Bakuretsu! Jougai Last Battle!",
 "type": "ALL"
},
{
 "mal_id": 2168,
    "title": "Sengoku Basara Ni: Ryuko, Itadaki no Chikai! Atsuki Mirai e Kakeru Tamashii!!",
 "type": "ALL"
},
{
 "mal_id": 2169,
    "title": "Aozora Shoujo-tai",
 "type": "ALL"
},
{
 "mal_id": 2170,
    "title": "Heibai Wushang",
 "type": "ALL"
},
{
 "mal_id": 2171,
    "title": "Bannou Bunka Neko-Musume (1998)",
 "type": "ALL"
},
{
 "mal_id": 2172,
    "title": "Douluo Dalu: Qian Hua Xi Jin",
 "type": "ALL"
},
{
 "mal_id": 2173,
    "title": "Choujikuu Kidan Southern Cross",
 "type": "ALL"
},
{
 "mal_id": 2174,
    "title": "Crusher Joe",
 "type": "ALL"
},
{
 "mal_id": 2175,
    "title": "Beautiful World",
 "type": "ALL"
},
{
 "mal_id": 2176,
    "title": "Battle Athletess Daiundoukai ReSTART!",
 "type": "ALL"
},
{
 "mal_id": 2177,
    "title": "Gundam Build Fighters: Battlogue",
 "type": "ALL"
},
{
 "mal_id": 2178,
    "title": "Lupin III: Honoo no Kioku - Tokyo Crisis",
 "type": "ALL"
},
{
 "mal_id": 2179,
    "title": "Mobile Suit Gundam 00: Tenshitachi no Kiseki",
 "type": "ALL"
},
{
 "mal_id": 2180,
    "title": "Crayon Shin-chan Movie 01: Action Kamen vs. Haigure Maou",
 "type": "ALL"
},
{
 "mal_id": 2181,
    "title": "City Hunter: Bay City Wars",
 "type": "ALL"
},
{
 "mal_id": 2182,
    "title": ".hack//Versus: The Thanatos Report",
 "type": "ALL"
},
{
 "mal_id": 2183,
    "title": "Fushigi no Umi no Nadia: Original Movie",
 "type": "ALL"
},
{
 "mal_id": 2184,
    "title": "Beyblade Burst Gachi",
 "type": "ALL"
},
{
 "mal_id": 2185,
    "title": "Koroshiya-san: The Hired Gun",
 "type": "ALL"
},
{
 "mal_id": 2186,
    "title": "Dragon Ball Z: The Real 4-D",
 "type": "ALL"
},
{
 "mal_id": 2187,
    "title": "Yao Shen Ji: Ying Yao Pian",
 "type": "ALL"
},
{
 "mal_id": 2188,
    "title": "Tide-Line Blue",
 "type": "ALL"
},
{
 "mal_id": 2189,
    "title": "Getter Robo",
 "type": "ALL"
},
{
 "mal_id": 2190,
    "title": "Lupin III: The Last Job",
 "type": "ALL"
},
{
 "mal_id": 2191,
    "title": "Chou Denji Machine Voltes V",
 "type": "ALL"
},
{
 "mal_id": 2192,
    "title": "Peace Maker Kurogane Movie 1: Omou Michi",
 "type": "ALL"
},
{
 "mal_id": 2193,
    "title": "Legend of Lemnear: Kyokuguro no Tsubasa Valkisas",
 "type": "ALL"
},
{
 "mal_id": 2194,
    "title": "Lupin III: Lupin Ansatsu Shirei",
 "type": "ALL"
},
{
 "mal_id": 2195,
    "title": "Battle Royal High School",
 "type": "ALL"
},
{
 "mal_id": 2196,
    "title": "First Squad",
 "type": "ALL"
},
{
 "mal_id": 2197,
    "title": "Kinnikuman II Sei: Ultimate Muscle",
 "type": "ALL"
},
{
 "mal_id": 2198,
    "title": "Kimera",
 "type": "ALL"
},
{
 "mal_id": 2199,
    "title": "Pokemon: Pikachu no Natsumatsuri",
 "type": "ALL"
},
{
 "mal_id": 2200,
    "title": "Shuumatsu no Walküre 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2201,
    "title": "Lupin III: Alcatraz Connection",
 "type": "ALL"
},
{
 "mal_id": 2202,
    "title": "Cardfight!! Vanguard G: Z",
 "type": "ALL"
},
{
 "mal_id": 2203,
    "title": "Nurarihyon no Mago: Gekitou Dai Futsal Taikai! Nuragumi W Cup!!",
 "type": "ALL"
},
{
 "mal_id": 2204,
    "title": "Karakuri no Kimi",
 "type": "ALL"
},
{
 "mal_id": 2205,
    "title": "Venus Project: Climax",
 "type": "ALL"
},
{
 "mal_id": 2206,
    "title": "Cinderella Boy",
 "type": "ALL"
},
{
 "mal_id": 2207,
    "title": "Tenchi Muyou! Ryououki 4th Season",
 "type": "ALL"
},
{
 "mal_id": 2208,
    "title": "Toriko 3D: Kaimaku Gourmet Adventure!!",
 "type": "ALL"
},
{
 "mal_id": 2209,
    "title": "Zettai Karen Children OVA: Aitazousei! Ubawareta Mirai?",
 "type": "ALL"
},
{
 "mal_id": 2210,
    "title": "Queen Emeraldas",
 "type": "ALL"
},
{
 "mal_id": 2211,
    "title": "Hitori no Shita: The Outcast Fanwai Pian",
 "type": "ALL"
},
{
 "mal_id": 2212,
    "title": "Lupin III: Twilight Gemini no Himitsu",
 "type": "ALL"
},
{
 "mal_id": 2213,
    "title": "Super Street Fighter IV",
 "type": "ALL"
},
{
 "mal_id": 2214,
    "title": "Hand Shakers: Go ago Go",
 "type": "ALL"
},
{
 "mal_id": 2215,
    "title": "Jikuu Bouken Nuumamonjaa",
 "type": "ALL"
},
{
 "mal_id": 2216,
    "title": "Aguu: Tensai Ningyou",
 "type": "ALL"
},
{
 "mal_id": 2217,
    "title": "Tennis no Ouji-sama: Oshougatsu Special",
 "type": "ALL"
},
{
 "mal_id": 2218,
    "title": "Ze Tian Ji",
 "type": "ALL"
},
{
 "mal_id": 2219,
    "title": "Quanzhi Fashi VI",
 "type": "ALL"
},
{
 "mal_id": 2220,
    "title": "City Hunter: Hyakuman Dollar no Inbou",
 "type": "ALL"
},
{
 "mal_id": 2221,
    "title": "Hikari no Megami",
 "type": "ALL"
},
{
 "mal_id": 2222,
    "title": "Pokemon Best Wishes! Season 2: Decolora Adventure - Iris vs. Ibuki! Dragon Master e no Michi!!",
 "type": "ALL"
},
{
 "mal_id": 2223,
    "title": "Monster Strike Anime",
 "type": "ALL"
},
{
 "mal_id": 2224,
    "title": "Lupin III: Chi no Kokuin - Eien no Mermaid",
 "type": "ALL"
},
{
 "mal_id": 2225,
    "title": "Soukyuu no Fafner: Dead Aggressor - The Beyond",
 "type": "ALL"
},
{
 "mal_id": 2226,
    "title": "Rekka no Honoo: Final Burning",
 "type": "ALL"
},
{
 "mal_id": 2227,
    "title": "Deca-Dence: Install",
 "type": "ALL"
},
{
 "mal_id": 2228,
    "title": "Fate/kaleid liner Prisma☆Illya (Zoku-hen)",
 "type": "ALL"
},
{
 "mal_id": 2229,
    "title": "Fate/strange Fake",
 "type": "ALL"
},
{
 "mal_id": 2230,
    "title": "Urusei Yatsura Movie 3: Remember My Love",
 "type": "ALL"
},
{
 "mal_id": 2231,
    "title": "Makai Tenshou",
 "type": "ALL"
},
{
 "mal_id": 2232,
    "title": "Lupin III: Ai no Da Capo - Fujiko's Unlucky Days",
 "type": "ALL"
},
{
 "mal_id": 2233,
    "title": "Hataraku Saibou Black",
 "type": "ALL"
},
{
 "mal_id": 2234,
    "title": "Jikuu Tenshou Nazca",
 "type": "ALL"
},
{
 "mal_id": 2235,
    "title": "Crayon Shin-chan Movie 08: Arashi wo Yobu Jungle",
 "type": "ALL"
},
{
 "mal_id": 2236,
    "title": "Jungle de Ikou!",
 "type": "ALL"
},
{
 "mal_id": 2237,
    "title": "Arcade Gamer Fubuki",
 "type": "ALL"
},
{
 "mal_id": 2238,
    "title": "Shin Megami Tensei: Tokyo Mokushiroku",
 "type": "ALL"
},
{
 "mal_id": 2239,
    "title": "Zenonzard The Animation Episode 0",
 "type": "ALL"
},
{
 "mal_id": 2240,
    "title": "Ultraviolet: Code 044",
 "type": "ALL"
},
{
 "mal_id": 2241,
    "title": "Wonder Momo",
 "type": "ALL"
},
{
 "mal_id": 2242,
    "title": "Lupin III: $1 Money Wars",
 "type": "ALL"
},
{
 "mal_id": 2243,
    "title": "Full Metal Panic! Movie 1: Boy Meets Girl",
 "type": "ALL"
},
{
 "mal_id": 2244,
    "title": "Doupo Cangqiong 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2245,
    "title": "Seihou Bukyou Outlaw Star Specials",
 "type": "ALL"
},
{
 "mal_id": 2246,
    "title": "Attacker You!",
 "type": "ALL"
},
{
 "mal_id": 2247,
    "title": "Toriko Movie: Bishokushin no Special Menu",
 "type": "ALL"
},
{
 "mal_id": 2248,
    "title": "Seihou Bukyou Outlaw Star Pilot",
 "type": "ALL"
},
{
 "mal_id": 2249,
    "title": "Eyeshield 21: Jump Festa 2005 Special",
 "type": "ALL"
},
{
 "mal_id": 2250,
    "title": "Busou Chuugakusei: Basket Army",
 "type": "ALL"
},
{
 "mal_id": 2251,
    "title": "Double Decker! Doug & Kirill: Extra",
 "type": "ALL"
},
{
 "mal_id": 2252,
    "title": "Last Exile: Ginyoku no Fam - Adjournment",
 "type": "ALL"
},
{
 "mal_id": 2253,
    "title": "Urusei Yatsura Movie 5: Kanketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 2254,
    "title": "Lupin III: Harimao no Zaihou wo Oe!!",
 "type": "ALL"
},
{
 "mal_id": 2255,
    "title": "Dengeki Oshioki Musume Gootaman: Gootaman Tanjou-hen",
 "type": "ALL"
},
{
 "mal_id": 2256,
    "title": "Mobile Suit Gundam 0083: Stardust Memory - The Mayfly of Space",
 "type": "ALL"
},
{
 "mal_id": 2257,
    "title": "Bakuretsu Hunters OVA",
 "type": "ALL"
},
{
 "mal_id": 2258,
    "title": "Gall Force 1: Eternal Story",
 "type": "ALL"
},
{
 "mal_id": 2259,
    "title": "Kurokami: Intermission",
 "type": "ALL"
},
{
 "mal_id": 2260,
    "title": "Busou Shinki: Install x Dream",
 "type": "ALL"
},
{
 "mal_id": 2261,
    "title": "Sacred Seven: Shirogane no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 2262,
    "title": "Gundam Build Divers Prologue",
 "type": "ALL"
},
{
 "mal_id": 2263,
    "title": "Tian Bao Fuyao Lu",
 "type": "ALL"
},
{
 "mal_id": 2264,
    "title": "Urusei Yatsura Movie 6: Itsudatte My Darling",
 "type": "ALL"
},
{
 "mal_id": 2265,
    "title": "Lupin III: Otakara Henkyaku Daisakusen!!",
 "type": "ALL"
},
{
 "mal_id": 2266,
    "title": "Princess Principal: Ange Report",
 "type": "ALL"
},
{
 "mal_id": 2267,
    "title": "Honoo no Tenkousei",
 "type": "ALL"
},
{
 "mal_id": 2268,
    "title": "Ippatsu Kiki Musume",
 "type": "ALL"
},
{
 "mal_id": 2269,
    "title": "Waga Seishun no Arcadia: Mugen Kidou SSX",
 "type": "ALL"
},
{
 "mal_id": 2270,
    "title": "Metal Skin Panic MADOX-01",
 "type": "ALL"
},
{
 "mal_id": 2271,
    "title": "Ginga Kikoutai Majestic Prince Movie: Kakusei no Idenshi",
 "type": "ALL"
},
{
 "mal_id": 2272,
    "title": "Cencoroll 3",
 "type": "ALL"
},
{
 "mal_id": 2273,
    "title": "Usagi-chan de Cue!!",
 "type": "ALL"
},
{
 "mal_id": 2274,
    "title": "Eden's Bowy",
 "type": "ALL"
},
{
 "mal_id": 2275,
    "title": "Kage (OVA)",
 "type": "ALL"
},
{
 "mal_id": 2276,
    "title": "Haja Taisei Dangaiou",
 "type": "ALL"
},
{
 "mal_id": 2277,
    "title": "Digimon Savers 3D: Digital World Kiki Ippatsu!",
 "type": "ALL"
},
{
 "mal_id": 2278,
    "title": "Miyamoto Musashi: Souken ni Haseru Yume",
 "type": "ALL"
},
{
 "mal_id": 2279,
    "title": "Blue Seed 2",
 "type": "ALL"
},
{
 "mal_id": 2280,
    "title": "Lupin III: Tenshi no Tactics - Yume no Kakera wa Koroshi no Kaori",
 "type": "ALL"
},
{
 "mal_id": 2281,
    "title": "Lupin III: Hemingway Paper no Nazo",
 "type": "ALL"
},
{
 "mal_id": 2282,
    "title": "Urusei Yatsura Movie 4: Lum The Forever",
 "type": "ALL"
},
{
 "mal_id": 2283,
    "title": "Kinnikuman II Sei: Ultimate Muscle 2",
 "type": "ALL"
},
{
 "mal_id": 2284,
    "title": "Biao Ren: Blades of the Guardians",
 "type": "ALL"
},
{
 "mal_id": 2285,
    "title": "Abunai Sisters: Koko & Mika",
 "type": "ALL"
},
{
 "mal_id": 2286,
    "title": "Kyoushoku Soukou Guyver",
 "type": "ALL"
},
{
 "mal_id": 2287,
    "title": "Seiken Gakuin no Makentsukai",
 "type": "ALL"
},
{
 "mal_id": 2288,
    "title": "Lupin III: Russia yori Ai wo Komete",
 "type": "ALL"
},
{
 "mal_id": 2289,
    "title": "Shanhe Jian Xin",
 "type": "ALL"
},
{
 "mal_id": 2290,
    "title": "Tokyo One Piece Tower: Tongari Shima no Dai Hihou",
 "type": "ALL"
},
{
 "mal_id": 2291,
    "title": "Full Metal Panic! Movie 2: One Night Stand",
 "type": "ALL"
},
{
 "mal_id": 2292,
    "title": "Taiho Shichau zo Special",
 "type": "ALL"
},
{
 "mal_id": 2293,
    "title": "Full Metal Panic! Movie 3: Into the Blue",
 "type": "ALL"
},
{
 "mal_id": 2294,
    "title": "Precure All Stars Movie DX2: Kibou no Hikari☆Rainbow Jewel wo Mamore!",
 "type": "ALL"
},
{
 "mal_id": 2295,
    "title": "Dokyuu Hentai HxEros: HxEros Report",
 "type": "ALL"
},
{
 "mal_id": 2296,
    "title": "Bakugan: Battle Planet",
 "type": "ALL"
},
{
 "mal_id": 2297,
    "title": "Arion",
 "type": "ALL"
},
{
 "mal_id": 2298,
    "title": "Birth",
 "type": "ALL"
},
{
 "mal_id": 2299,
    "title": "Xie Wang Zhui Qi: Yishi Qingcheng",
 "type": "ALL"
},
{
 "mal_id": 2300,
    "title": "Ginga Kikoutai Majestic Prince: Mirai e no Tsubasa",
 "type": "ALL"
},
{
 "mal_id": 2301,
    "title": "Sakura Nagashi",
 "type": "ALL"
},
{
 "mal_id": 2302,
    "title": "Cyborg 009 (TV)",
 "type": "ALL"
},
{
 "mal_id": 2303,
    "title": "Rockman.EXE Beast+",
 "type": "ALL"
},
{
 "mal_id": 2304,
    "title": "Shin Hakkenden",
 "type": "ALL"
},
{
 "mal_id": 2305,
    "title": "Ai City",
 "type": "ALL"
},
{
 "mal_id": 2306,
    "title": "Jiang Ziya",
 "type": "ALL"
},
{
 "mal_id": 2307,
    "title": "Crayon Shin-chan Movie 05: Ankoku Tamatama Daitsuiseki",
 "type": "ALL"
},
{
 "mal_id": 2308,
    "title": "Xingchen Bian",
 "type": "ALL"
},
{
 "mal_id": 2309,
    "title": "Herlock Saga: Nibelung no Yubiwa",
 "type": "ALL"
},
{
 "mal_id": 2310,
    "title": "Cardfight!! Vanguard Movie: Neon Messiah",
 "type": "ALL"
},
{
 "mal_id": 2311,
    "title": "Sol Bianca",
 "type": "ALL"
},
{
 "mal_id": 2312,
    "title": "Rurouni Kenshin: Review Special",
 "type": "ALL"
},
{
 "mal_id": 2313,
    "title": "Mini Toji",
 "type": "ALL"
},
{
 "mal_id": 2314,
    "title": "Hitori no Shita: The Outcast Recap",
 "type": "ALL"
},
{
 "mal_id": 2315,
    "title": "Zoids Wild",
 "type": "ALL"
},
{
 "mal_id": 2316,
    "title": "Genmu Senki Leda",
 "type": "ALL"
},
{
 "mal_id": 2317,
    "title": "Sukeban Deka",
 "type": "ALL"
},
{
 "mal_id": 2318,
    "title": "Lupin III: Napoleon no Jisho wo Ubae",
 "type": "ALL"
},
{
 "mal_id": 2319,
    "title": "Full Metal Panic! Invisible Victory Intermission",
 "type": "ALL"
},
{
 "mal_id": 2320,
    "title": "Taimanin Asagi Special",
 "type": "ALL"
},
{
 "mal_id": 2321,
    "title": "Hashire Melos (Movie)",
 "type": "ALL"
},
{
 "mal_id": 2322,
    "title": "Persona 2: Another Self",
 "type": "ALL"
},
{
 "mal_id": 2323,
    "title": "Detonator Orgun",
 "type": "ALL"
},
{
 "mal_id": 2324,
    "title": "Sengoku Musou SP: Sanada no Shou",
 "type": "ALL"
},
{
 "mal_id": 2325,
    "title": "Shinzou Ningen Casshern",
 "type": "ALL"
},
{
 "mal_id": 2326,
    "title": "Danball Senki W",
 "type": "ALL"
},
{
 "mal_id": 2327,
    "title": "Bakuretsu Tenshi: Infinity Special",
 "type": "ALL"
},
{
 "mal_id": 2328,
    "title": "Tiger Mask Nisei",
 "type": "ALL"
},
{
 "mal_id": 2329,
    "title": "Precure All Stars Movie DX: Minna Tomodachi☆Kiseki no Zenin Daishuugou!",
 "type": "ALL"
},
{
 "mal_id": 2330,
    "title": "Mission-E",
 "type": "ALL"
},
{
 "mal_id": 2331,
    "title": "Choujin Densetsu Urotsukidouji Movie",
 "type": "ALL"
},
{
 "mal_id": 2332,
    "title": "Juusenki L-Gaim",
 "type": "ALL"
},
{
 "mal_id": 2333,
    "title": "Captain Tsubasa: Europe Daikessen",
 "type": "ALL"
},
{
 "mal_id": 2334,
    "title": "Yokoyama Mitsuteru Sangokushi",
 "type": "ALL"
},
{
 "mal_id": 2335,
    "title": "Project A-Ko 2: Daitokuji Zaibatsu no Inbou",
 "type": "ALL"
},
{
 "mal_id": 2336,
    "title": "Sumeba Miyako no Cosmos-sou Suttoko Taisen Dokkoida",
 "type": "ALL"
},
{
 "mal_id": 2337,
    "title": "Lupin III: Nusumareta Lupin",
 "type": "ALL"
},
{
 "mal_id": 2338,
    "title": "Uchuu Senkan Yamato III",
 "type": "ALL"
},
{
 "mal_id": 2339,
    "title": "Dragon Quest: Yuusha Abel Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2340,
    "title": "Doupo Cangqiong 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 2341,
    "title": "Project ARMS: The 2nd Chapter",
 "type": "ALL"
},
{
 "mal_id": 2342,
    "title": "Dragon Pink",
 "type": "ALL"
},
{
 "mal_id": 2343,
    "title": "Kakutou Bijin Wulong",
 "type": "ALL"
},
{
 "mal_id": 2344,
    "title": "Lupin III: Kiri no Elusive",
 "type": "ALL"
},
{
 "mal_id": 2345,
    "title": "Lu Shidai",
 "type": "ALL"
},
{
 "mal_id": 2346,
    "title": "Battle Athletess Daiundoukai",
 "type": "ALL"
},
{
 "mal_id": 2347,
    "title": "Hakaima Sadamitsu",
 "type": "ALL"
},
{
 "mal_id": 2348,
    "title": "Kaze no Tairiku",
 "type": "ALL"
},
{
 "mal_id": 2349,
    "title": "Kurogane Communication",
 "type": "ALL"
},
{
 "mal_id": 2350,
    "title": "Precure All Stars Movie DX3: Mirai ni Todoke! Sekai wo Tsunagu☆Nijiiro no Hana",
 "type": "ALL"
},
{
 "mal_id": 2351,
    "title": "TO",
 "type": "ALL"
},
{
 "mal_id": 2352,
    "title": "Choujikuu Seiki Orguss",
 "type": "ALL"
},
{
 "mal_id": 2353,
    "title": "Lupin III: Goodbye Partner",
 "type": "ALL"
},
{
 "mal_id": 2354,
    "title": "Weiß Kreuz OVA",
 "type": "ALL"
},
{
 "mal_id": 2355,
    "title": "Zuihou de Zhaohuan Shi",
 "type": "ALL"
},
{
 "mal_id": 2356,
    "title": "Eat-Man '98",
 "type": "ALL"
},
{
 "mal_id": 2357,
    "title": "Starship Troopers: Invasion",
 "type": "ALL"
},
{
 "mal_id": 2358,
    "title": "Master Mosquiton",
 "type": "ALL"
},
{
 "mal_id": 2359,
    "title": "Genma Taisen",
 "type": "ALL"
},
{
 "mal_id": 2360,
    "title": "California Crisis: Tsuigeki no Juuka",
 "type": "ALL"
},
{
 "mal_id": 2361,
    "title": "Cyborg 009: Call of Justice 1",
 "type": "ALL"
},
{
 "mal_id": 2362,
    "title": "Wu Dong Qian Kun",
 "type": "ALL"
},
{
 "mal_id": 2363,
    "title": "Lupin III: Ikiteita Majutsushi",
 "type": "ALL"
},
{
 "mal_id": 2364,
    "title": "Bannou Bunka Neko-Musume DASH!",
 "type": "ALL"
},
{
 "mal_id": 2365,
    "title": "Yuugen Kaisha",
 "type": "ALL"
},
{
 "mal_id": 2366,
    "title": "Angel Core: Tenshi-tachi no Sumika",
 "type": "ALL"
},
{
 "mal_id": 2367,
    "title": "Lie Huo Jiao Chou",
 "type": "ALL"
},
{
 "mal_id": 2368,
    "title": "Shin Getter Robo tai Neo Getter Robo",
 "type": "ALL"
},
{
 "mal_id": 2369,
    "title": "Meiou Project Zeorymer",
 "type": "ALL"
},
{
 "mal_id": 2370,
    "title": "Senkou no Night Raid Specials",
 "type": "ALL"
},
{
 "mal_id": 2371,
    "title": "Avengers Confidential: Black Widow to Punisher",
 "type": "ALL"
},
{
 "mal_id": 2372,
    "title": "Sengoku☆Paradise Kiwami",
 "type": "ALL"
},
{
 "mal_id": 2373,
    "title": "Keroro Gunsou Movie 2: Shinkai no Princess de Arimasu!",
 "type": "ALL"
},
{
 "mal_id": 2374,
    "title": "Douluo Dalu: Xingdou Xian Ji Pian",
 "type": "ALL"
},
{
 "mal_id": 2375,
    "title": "Muteking the Dancing Hero",
 "type": "ALL"
},
{
 "mal_id": 2376,
    "title": "Persona 5 the Animation Recap",
 "type": "ALL"
},
{
 "mal_id": 2377,
    "title": "Detective Conan: The Scarlet Alibi",
 "type": "ALL"
},
{
 "mal_id": 2378,
    "title": "Dog Days Recap",
 "type": "ALL"
},
{
 "mal_id": 2379,
    "title": "Bastard!! Ankoku no Hakaishin (ONA)",
 "type": "ALL"
},
{
 "mal_id": 2380,
    "title": "Macross Δ Movie 2: Zettai Live!!!",
 "type": "ALL"
},
{
 "mal_id": 2381,
    "title": "I'll/CKBC",
 "type": "ALL"
},
{
 "mal_id": 2382,
    "title": "Amon Saga",
 "type": "ALL"
},
{
 "mal_id": 2383,
    "title": "Cop Craft: Utsukushiki Onna Kishi! Toraware no Yousei wo Oe!",
 "type": "ALL"
},
{
 "mal_id": 2384,
    "title": "Chousoku Henkei Gyrozetter",
 "type": "ALL"
},
{
 "mal_id": 2385,
    "title": "Tennis no Ouji-sama: The Band of Princes Film Kick the Future",
 "type": "ALL"
},
{
 "mal_id": 2386,
    "title": "Quiz Magic Academy: The Original Animation 2",
 "type": "ALL"
},
{
 "mal_id": 2387,
    "title": "Midnight Eye: Gokuu II",
 "type": "ALL"
},
{
 "mal_id": 2388,
    "title": "Da Zhu Zai",
 "type": "ALL"
},
{
 "mal_id": 2389,
    "title": "Cobra The Animation: The Psycho-Gun",
 "type": "ALL"
},
{
 "mal_id": 2390,
    "title": "Pokemon XY: New Year Special",
 "type": "ALL"
},
{
 "mal_id": 2391,
    "title": "Mobile Suit Gundam: Hathaway's Flash 2",
 "type": "ALL"
},
{
 "mal_id": 2392,
    "title": "Touken Ranbu: Hanamaru - Makuai Kaisouroku",
 "type": "ALL"
},
{
 "mal_id": 2393,
    "title": "Uchuu Densetsu Ulysses 31",
 "type": "ALL"
},
{
 "mal_id": 2394,
    "title": "Giant Gorg",
 "type": "ALL"
},
{
 "mal_id": 2395,
    "title": "Mokei Senshi Gunpla Builders Beginning G",
 "type": "ALL"
},
{
 "mal_id": 2396,
    "title": "Ashita no Joe (Movie)",
 "type": "ALL"
},
{
 "mal_id": 2397,
    "title": "Shoka",
 "type": "ALL"
},
{
 "mal_id": 2398,
    "title": "Uchuu Kaizoku Captain Herlock: Arcadia-gou no Nazo",
 "type": "ALL"
},
{
 "mal_id": 2399,
    "title": "Great Mazinger",
 "type": "ALL"
},
{
 "mal_id": 2400,
    "title": "Oh! Super Milk-chan",
 "type": "ALL"
},
{
 "mal_id": 2401,
    "title": "Sei Juushi Bismarck",
 "type": "ALL"
},
{
 "mal_id": 2402,
    "title": "Toji no Miko: Kizamishi Issen no Tomoshibi OVA",
 "type": "ALL"
},
{
 "mal_id": 2403,
    "title": "Lupin III: Princess of the Breeze - Kakusareta Kuuchuu Toshi",
 "type": "ALL"
},
{
 "mal_id": 2404,
    "title": "Cosmo Warrior Zero",
 "type": "ALL"
},
{
 "mal_id": 2405,
    "title": "Dia Horizon (Kabu)",
 "type": "ALL"
},
{
 "mal_id": 2406,
    "title": "Lupin III: Seven Days Rhapsody",
 "type": "ALL"
},
{
 "mal_id": 2407,
    "title": "Kurogane no Linebarrels Specials",
 "type": "ALL"
},
{
 "mal_id": 2408,
    "title": "God Eater 3",
 "type": "ALL"
},
{
 "mal_id": 2409,
    "title": "Ultraman Season 2",
 "type": "ALL"
},
{
 "mal_id": 2410,
    "title": "Arknights: Reimei Zensou",
 "type": "ALL"
},
{
 "mal_id": 2411,
    "title": "Lupin III (2015): Italian Game",
 "type": "ALL"
},
{
 "mal_id": 2412,
    "title": "Yao Shen Ji: Hei Yu Pian",
 "type": "ALL"
},
{
 "mal_id": 2413,
    "title": "Lupin III: Pilot Film (1978)",
 "type": "ALL"
},
{
 "mal_id": 2414,
    "title": "Girls & Panzer: Dai 63-kai Senshadou Zenkoku Koukousei Taikai Recap",
 "type": "ALL"
},
{
 "mal_id": 2415,
    "title": "Sin: The Movie",
 "type": "ALL"
},
{
 "mal_id": 2416,
    "title": "Cardfight!! Vanguard: Zoku Koukousei-hen",
 "type": "ALL"
},
{
 "mal_id": 2417,
    "title": "Duel Masters Charge",
 "type": "ALL"
},
{
 "mal_id": 2418,
    "title": "All That Gundam",
 "type": "ALL"
},
{
 "mal_id": 2419,
    "title": "Lupin III: Sweet Lost Night - Mahou no Lamp wa Akumu no Yokan",
 "type": "ALL"
},
{
 "mal_id": 2420,
    "title": "Hajimari no Boukensha-tachi: Legend of Crystania",
 "type": "ALL"
},
{
 "mal_id": 2421,
    "title": "Legend of Crystania",
 "type": "ALL"
},
{
 "mal_id": 2422,
    "title": "Gundam: Mission to the Rise",
 "type": "ALL"
},
{
 "mal_id": 2423,
    "title": "Project A-Ko 3: Cinderella Rhapsody",
 "type": "ALL"
},
{
 "mal_id": 2424,
    "title": "Soul Worker: Your Destiny Awaits",
 "type": "ALL"
},
{
 "mal_id": 2425,
    "title": "Yu☆Gi☆Oh! Zexal Special",
 "type": "ALL"
},
{
 "mal_id": 2426,
    "title": "009-1: R&B",
 "type": "ALL"
},
{
 "mal_id": 2427,
    "title": "Sengoku Kitan Youtouden Movie",
 "type": "ALL"
},
{
 "mal_id": 2428,
    "title": "A-Ko The Versus",
 "type": "ALL"
},
{
 "mal_id": 2429,
    "title": "s.CRY.ed Alteration I: Tao",
 "type": "ALL"
},
{
 "mal_id": 2430,
    "title": "Akai Koudan Zillion",
 "type": "ALL"
},
{
 "mal_id": 2431,
    "title": "Delicious Party♡Precure",
 "type": "ALL"
},
{
 "mal_id": 2432,
    "title": "Macross FB7: Ore no Uta wo Kike!",
 "type": "ALL"
},
{
 "mal_id": 2433,
    "title": "Monster Strike The Animation",
 "type": "ALL"
},
{
 "mal_id": 2434,
    "title": "Usuzumizakura: Garo",
 "type": "ALL"
},
{
 "mal_id": 2435,
    "title": "Dirty Pair: Lovely Angels yori Ai wo Komete",
 "type": "ALL"
},
{
 "mal_id": 2436,
    "title": "Fuyu no Semi Special",
 "type": "ALL"
},
{
 "mal_id": 2437,
    "title": "Soreyuke! Uchuu Senkan Yamamoto Youko (1999)",
 "type": "ALL"
},
{
 "mal_id": 2438,
    "title": "Shounen Sunday CM Gekijou: InuYasha-hen",
 "type": "ALL"
},
{
 "mal_id": 2439,
    "title": "Douluo Dalu: Haishen Zhi Guang",
 "type": "ALL"
},
{
 "mal_id": 2440,
    "title": "Koukaku Kidoutai: SAC_2045 Season 2",
 "type": "ALL"
},
{
 "mal_id": 2441,
    "title": "Azur Lane Recap",
 "type": "ALL"
},
{
 "mal_id": 2442,
    "title": "Douluo Dalu: Hanhai Qian Kun",
 "type": "ALL"
},
{
 "mal_id": 2443,
    "title": "Koukaku Kidoutai Arise [.jp]",
 "type": "ALL"
},
{
 "mal_id": 2444,
    "title": "Makai Senki Disgaea: Welcome to Netherworld",
 "type": "ALL"
},
{
 "mal_id": 2445,
    "title": "Captain Tsubasa: Ayaushi! Zen Nihon Jr.",
 "type": "ALL"
},
{
 "mal_id": 2446,
    "title": "eX-Driver the Movie",
 "type": "ALL"
},
{
 "mal_id": 2447,
    "title": "Project A-Ko 4: Final",
 "type": "ALL"
},
{
 "mal_id": 2448,
    "title": "Mobile Suit Gundam AGE: Memory of Eden",
 "type": "ALL"
},
{
 "mal_id": 2449,
    "title": "Long Zhi Gu: Poxiao Qibing",
 "type": "ALL"
},
{
 "mal_id": 2450,
    "title": "Kiddy Grade: Ignition",
 "type": "ALL"
},
{
 "mal_id": 2451,
    "title": "Captain Tsubasa: Sekai Daikessen!! Jr. World Cup",
 "type": "ALL"
},
{
 "mal_id": 2452,
    "title": "Kiddy GiRL-AND Pilot",
 "type": "ALL"
},
{
 "mal_id": 2453,
    "title": "Mo Ri Shu Guang",
 "type": "ALL"
},
{
 "mal_id": 2454,
    "title": "B'T X Neo",
 "type": "ALL"
},
{
 "mal_id": 2455,
    "title": "Sabiiro no Armor: Reimei",
 "type": "ALL"
},
{
 "mal_id": 2456,
    "title": "Top wo Nerae 3!",
 "type": "ALL"
},
{
 "mal_id": 2457,
    "title": "Isekai Shoukan wa Nidome desu",
 "type": "ALL"
},
{
 "mal_id": 2458,
    "title": "Yu☆Gi☆Oh! Zexal Second: Midokoro Tenkomori Special",
 "type": "ALL"
},
{
 "mal_id": 2459,
    "title": "Glamorous Heroes",
 "type": "ALL"
},
{
 "mal_id": 2460,
    "title": "Gravity Daze The Animation: Ouverture",
 "type": "ALL"
},
{
 "mal_id": 2461,
    "title": "MapleStory",
 "type": "ALL"
},
{
 "mal_id": 2462,
    "title": "Shion",
 "type": "ALL"
},
{
 "mal_id": 2463,
    "title": "Zhen Hun Jie: Bei Luo Shi Men Pian Part 1",
 "type": "ALL"
},
{
 "mal_id": 2464,
    "title": "Choujuu Kishin Dancougar",
 "type": "ALL"
},
{
 "mal_id": 2465,
    "title": "Mobile Suit Gundam ZZ: Gundam Frag.",
 "type": "ALL"
},
{
 "mal_id": 2466,
    "title": "Taiho Shichau zo in America",
 "type": "ALL"
},
{
 "mal_id": 2467,
    "title": "Urusei Yatsura: The Shougaibutsu Suieitaikai",
 "type": "ALL"
},
{
 "mal_id": 2468,
    "title": "Megami Kouhosei Special Curriculum",
 "type": "ALL"
},
{
 "mal_id": 2469,
    "title": "Turn A Gundam I Movie: Earth Light",
 "type": "ALL"
},
{
 "mal_id": 2470,
    "title": "Kyoukaisenjou no Horizon Special",
 "type": "ALL"
},
{
 "mal_id": 2471,
    "title": "Taiho Shichau zo: Nagisa no Koutsuu Yuudou",
 "type": "ALL"
},
{
 "mal_id": 2472,
    "title": "D.I.C.E.",
 "type": "ALL"
},
{
 "mal_id": 2473,
    "title": "Gaiking: Legend of Daiku-Maryu",
 "type": "ALL"
},
{
 "mal_id": 2474,
    "title": "Lupin III: Touhou Kenbunroku - Another Page",
 "type": "ALL"
},
{
 "mal_id": 2475,
    "title": "Getter Robo Arc",
 "type": "ALL"
},
{
 "mal_id": 2476,
    "title": "Monster Strike Anime: Kieyuku Uchuu-hen",
 "type": "ALL"
},
{
 "mal_id": 2477,
    "title": "Captain Tsubasa: Asu ni Mukatte Hashire!",
 "type": "ALL"
},
{
 "mal_id": 2478,
    "title": "Hakuouki OVA (2021)",
 "type": "ALL"
},
{
 "mal_id": 2479,
    "title": "Wu Geng Ji",
 "type": "ALL"
},
{
 "mal_id": 2480,
    "title": "Imawa no Kuni no Alice",
 "type": "ALL"
},
{
 "mal_id": 2481,
    "title": "Inferno Cop Specials",
 "type": "ALL"
},
{
 "mal_id": 2482,
    "title": "Frame Arms Girl Movie: Kyakkya Ufufu na Wonderland",
 "type": "ALL"
},
{
 "mal_id": 2483,
    "title": "Danball Senki Wars",
 "type": "ALL"
},
{
 "mal_id": 2484,
    "title": "Gunslinger Stratos",
 "type": "ALL"
},
{
 "mal_id": 2485,
    "title": "Extra",
 "type": "ALL"
},
{
 "mal_id": 2486,
    "title": "Dirty Pair no Ooshoubu: Nolandia no Nazo",
 "type": "ALL"
},
{
 "mal_id": 2487,
    "title": "Captain Tsubasa: Saikyou no Teki! Holland Youth",
 "type": "ALL"
},
{
 "mal_id": 2488,
    "title": "Hakuouki: Reimeiroku OVA",
 "type": "ALL"
},
{
 "mal_id": 2489,
    "title": "Kiddy Grade: Maelstrom",
 "type": "ALL"
},
{
 "mal_id": 2490,
    "title": "Dies Irae: Marie\'s Memory Michi ni Tsuuzu Kiseki",
 "type": "ALL"
},
{
 "mal_id": 2491,
    "title": "Variable Geo",
 "type": "ALL"
},
{
 "mal_id": 2492,
    "title": "SD Gundam Sangokuden Brave Battle Warriors",
 "type": "ALL"
},
{
 "mal_id": 2493,
    "title": "Kiddy Grade: Truth Dawn",
 "type": "ALL"
},
{
 "mal_id": 2494,
    "title": "Spider Riders: Yomigaeru Taiyou",
 "type": "ALL"
},
{
 "mal_id": 2495,
    "title": "Turn A Gundam II Movie: Moonlight Butterfly",
 "type": "ALL"
},
{
 "mal_id": 2496,
    "title": "G-On Riders",
 "type": "ALL"
},
{
 "mal_id": 2497,
    "title": "Ribbon no Kishi",
 "type": "ALL"
},
{
 "mal_id": 2498,
    "title": "L/R: Licensed by Royal",
 "type": "ALL"
},
{
 "mal_id": 2499,
    "title": "Mazinkaiser: Shitou! Ankoku Dai Shogun",
 "type": "ALL"
},
{
 "mal_id": 2500,
    "title": "Fresh Precure! Movie: Omocha no Kuni wa Himitsu ga Ippai!?",
 "type": "ALL"
},
{
 "mal_id": 2501,
    "title": "Dark Cat",
 "type": "ALL"
},
{
 "mal_id": 2502,
    "title": "Marimo no Hana: Saikyou Butouha Shougakusei Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2503,
    "title": "Lupin III: Lupin wa Ima mo Moete Iru ka?",
 "type": "ALL"
},
{
 "mal_id": 2504,
    "title": "Kingdom Hearts χ Back Cover",
 "type": "ALL"
},
{
 "mal_id": 2505,
    "title": "T.P. Sakura: Time Paladin Sakura",
 "type": "ALL"
},
{
 "mal_id": 2506,
    "title": "Heartwork: Symphony of Destruction",
 "type": "ALL"
},
{
 "mal_id": 2507,
    "title": "Itazura Majo to Nemuranai Machi",
 "type": "ALL"
},
{
 "mal_id": 2508,
    "title": "Break Blade: Virgins War",
 "type": "ALL"
},
{
 "mal_id": 2509,
    "title": "Monster Strike The Movie: Hajimari no Basho e",
 "type": "ALL"
},
{
 "mal_id": 2510,
    "title": "Souten no Ken: Regenesis 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2511,
    "title": "Biohazard 4D-Executer",
 "type": "ALL"
},
{
 "mal_id": 2512,
    "title": "Wanmei Shijie",
 "type": "ALL"
},
{
 "mal_id": 2513,
    "title": "Ninja Ryuukenden",
 "type": "ALL"
},
{
 "mal_id": 2514,
    "title": "Under the Dog: Anthea-chan",
 "type": "ALL"
},
{
 "mal_id": 2515,
    "title": "Last Exile: Ginyoku no Fam Movie - Over the Wishes",
 "type": "ALL"
},
{
 "mal_id": 2516,
    "title": "Precure All Stars Movie New Stage 2: Kokoro no Tomodachi",
 "type": "ALL"
},
{
 "mal_id": 2517,
    "title": "Lupin III: Part 6 - Jidai",
 "type": "ALL"
},
{
 "mal_id": 2518,
    "title": "Wu Shan Wu Xing (2020): Xichuan Huan Zi Lin",
 "type": "ALL"
},
{
 "mal_id": 2519,
    "title": "Super Milk-chan",
 "type": "ALL"
},
{
 "mal_id": 2520,
    "title": "Da Li Si Rizhi",
 "type": "ALL"
},
{
 "mal_id": 2521,
    "title": "Appleseed XIII Remix Movie 2: Yogen",
 "type": "ALL"
},
{
 "mal_id": 2522,
    "title": "Kaiketsu Jouki Tanteidan",
 "type": "ALL"
},
{
 "mal_id": 2523,
    "title": "Sword Gai",
 "type": "ALL"
},
{
 "mal_id": 2524,
    "title": "Captain Future",
 "type": "ALL"
},
{
 "mal_id": 2525,
    "title": "Iron Kid",
 "type": "ALL"
},
{
 "mal_id": 2526,
    "title": "Muteki Choujin Zanbot 3",
 "type": "ALL"
},
{
 "mal_id": 2527,
    "title": "The King of Fighters: Destiny",
 "type": "ALL"
},
{
 "mal_id": 2528,
    "title": "Abashiri Ikka",
 "type": "ALL"
},
{
 "mal_id": 2529,
    "title": "Pokemon XY&Z: Subete no Nazo wo Tokiakase!",
 "type": "ALL"
},
{
 "mal_id": 2530,
    "title": "Ginga Tetsudou 999: Eternal Fantasy",
 "type": "ALL"
},
{
 "mal_id": 2531,
    "title": "Mobile Suit Gundam: Hathaway's Flash 3",
 "type": "ALL"
},
{
 "mal_id": 2532,
    "title": "Sanctuary",
 "type": "ALL"
},
{
 "mal_id": 2533,
    "title": "Tenkai Knights",
 "type": "ALL"
},
{
 "mal_id": 2534,
    "title": "Pokemon (2019): Kami to Yobareshi Arceus",
 "type": "ALL"
},
{
 "mal_id": 2535,
    "title": "Gekiganger 3: The Movie",
 "type": "ALL"
},
{
 "mal_id": 2536,
    "title": "Ring ni Kakero 1",
 "type": "ALL"
},
{
 "mal_id": 2537,
    "title": "Bright: Samurai Soul",
 "type": "ALL"
},
{
 "mal_id": 2538,
    "title": "Examurai Sengoku",
 "type": "ALL"
},
{
 "mal_id": 2539,
    "title": "Shuranosuke Zanmaken: Shikamamon no Otoko",
 "type": "ALL"
},
{
 "mal_id": 2540,
    "title": "Long Zhi Gu: Jingling Wangzuo",
 "type": "ALL"
},
{
 "mal_id": 2541,
    "title": "Douluo Dalu: Shan Yu Yu Lai",
 "type": "ALL"
},
{
 "mal_id": 2542,
    "title": "Koukou Butouden Crows",
 "type": "ALL"
},
{
 "mal_id": 2543,
    "title": "Kyoukai Senki Part 2",
 "type": "ALL"
},
{
 "mal_id": 2544,
    "title": "Urusei Yatsura: Haru da, Tobidase!",
 "type": "ALL"
},
{
 "mal_id": 2545,
    "title": "Baku Tech! Bakugan",
 "type": "ALL"
},
{
 "mal_id": 2546,
    "title": "Dororo Pilot",
 "type": "ALL"
},
{
 "mal_id": 2547,
    "title": "Blassreiter: Navi",
 "type": "ALL"
},
{
 "mal_id": 2548,
    "title": "Appleseed XIII Remix Movie 1: Yuigon",
 "type": "ALL"
},
{
 "mal_id": 2549,
    "title": "Virus: Virus Buster Serge",
 "type": "ALL"
},
{
 "mal_id": 2550,
    "title": "Rockman.EXE Movie: Hikari to Yami no Program",
 "type": "ALL"
},
{
 "mal_id": 2551,
    "title": "Uchuu Senkan Yamato 2205: Aratanaru Tabidachi - Zenshou - Take Off",
 "type": "ALL"
},
{
 "mal_id": 2552,
    "title": "Sakkai Eightraid",
 "type": "ALL"
},
{
 "mal_id": 2553,
    "title": "Fuuto Tantei",
 "type": "ALL"
},
{
 "mal_id": 2554,
    "title": "Tekken Chinmi",
 "type": "ALL"
},
{
 "mal_id": 2555,
    "title": "Dirty Pair: Bouryaku no 005-bin",
 "type": "ALL"
},
{
 "mal_id": 2556,
    "title": "Words Worth Gaiden",
 "type": "ALL"
},
{
 "mal_id": 2557,
    "title": "Koukou Tekken-den Tough",
 "type": "ALL"
},
{
 "mal_id": 2558,
    "title": "Macross (Shin Series)",
 "type": "ALL"
},
{
 "mal_id": 2559,
    "title": "Crayon Shin-chan Movie 11: Arashi wo Yobu Eikou no Yakiniku Road",
 "type": "ALL"
},
{
 "mal_id": 2560,
    "title": "Master Mosquiton '99",
 "type": "ALL"
},
{
 "mal_id": 2561,
    "title": "Moero! Top Striker",
 "type": "ALL"
},
{
 "mal_id": 2562,
    "title": "Cobra The Animation: Time Drive",
 "type": "ALL"
},
{
 "mal_id": 2563,
    "title": "Ryouma! The Prince of Tennis Shinsei Movie: Tennis no Ouji-sama",
 "type": "ALL"
},
{
 "mal_id": 2564,
    "title": "Beyblade Burst Sparking",
 "type": "ALL"
},
{
 "mal_id": 2565,
    "title": "Utawarerumono Recaps",
 "type": "ALL"
},
{
 "mal_id": 2566,
    "title": "Marvel Future Avengers",
 "type": "ALL"
},
{
 "mal_id": 2567,
    "title": "Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀ (TV)",
 "type": "ALL"
},
{
 "mal_id": 2568,
    "title": "Bomberman Jetters",
 "type": "ALL"
},
{
 "mal_id": 2569,
    "title": "eX-Driver: Nina & Rei Danger Zone",
 "type": "ALL"
},
{
 "mal_id": 2570,
    "title": "Uchuu no Kishi Tekkaman Blade II",
 "type": "ALL"
},
{
 "mal_id": 2571,
    "title": "Eightman After",
 "type": "ALL"
},
{
 "mal_id": 2572,
    "title": "The Epic Of ZektBach",
 "type": "ALL"
},
{
 "mal_id": 2573,
    "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana OVA",
 "type": "ALL"
},
{
 "mal_id": 2574,
    "title": "Uchuu Senkan Yamato: Fukkatsu-hen",
 "type": "ALL"
},
{
 "mal_id": 2575,
    "title": "Shi Huang Zhi Shen",
 "type": "ALL"
},
{
 "mal_id": 2576,
    "title": "Bean Bandit",
 "type": "ALL"
},
{
 "mal_id": 2577,
    "title": "Toushinden",
 "type": "ALL"
},
{
 "mal_id": 2578,
    "title": "Hangyakusei Million Arthur Special",
 "type": "ALL"
},
{
 "mal_id": 2579,
    "title": "s.CRY.ed Alteration II: Quan",
 "type": "ALL"
},
{
 "mal_id": 2580,
    "title": "Soujuu Senshi Psychic Wars",
 "type": "ALL"
},
{
 "mal_id": 2581,
    "title": "Star Fox Zero: The Battle Begins",
 "type": "ALL"
},
{
 "mal_id": 2582,
    "title": "Planzet",
 "type": "ALL"
},
{
 "mal_id": 2583,
    "title": "RahXephon Specials",
 "type": "ALL"
},
{
 "mal_id": 2584,
    "title": "Senkou no Night Raid: Yogen",
 "type": "ALL"
},
{
 "mal_id": 2585,
    "title": "Saraba Uchuu Senkan Yamato: Ai no Senshi-tachi",
 "type": "ALL"
},
{
 "mal_id": 2586,
    "title": "Cyborg 009: Call of Justice 3",
 "type": "ALL"
},
{
 "mal_id": 2587,
    "title": "Lupin III: Prison of the Past",
 "type": "ALL"
},
{
 "mal_id": 2588,
    "title": "Ling Long: Incarnation",
 "type": "ALL"
},
{
 "mal_id": 2589,
    "title": "Detective Conan: Happy New Year Special",
 "type": "ALL"
},
{
 "mal_id": 2590,
    "title": "Hakuouki: Shinkai - Kaze no Shou",
 "type": "ALL"
},
{
 "mal_id": 2591,
    "title": "Pokemon XY: New Year's Eve 2014 Super Mega Special",
 "type": "ALL"
},
{
 "mal_id": 2592,
    "title": "Ladyspo",
 "type": "ALL"
},
{
 "mal_id": 2593,
    "title": "Fight League: Gear Gadget Generators",
 "type": "ALL"
},
{
 "mal_id": 2594,
    "title": "Twinkle Nora Rock Me!",
 "type": "ALL"
},
{
 "mal_id": 2595,
    "title": "Gatchaman",
 "type": "ALL"
},
{
 "mal_id": 2596,
    "title": "Princess Principal: Crown Handler Movie 3",
 "type": "ALL"
},
{
 "mal_id": 2597,
    "title": "Ginga Ojousama Densetsu Yuna: Kanashimi no Siren",
 "type": "ALL"
},
{
 "mal_id": 2598,
    "title": "Uchuu no Kishi Tekkaman Blade OVA: Twin Blood",
 "type": "ALL"
},
{
 "mal_id": 2599,
    "title": "Urda",
 "type": "ALL"
},
{
 "mal_id": 2600,
    "title": "Doupo Cangqiong 4th Season",
 "type": "ALL"
},
{
 "mal_id": 2601,
    "title": "Jigen Sengokushi: Kuro no Shishi - Jinnai-hen",
 "type": "ALL"
},
{
 "mal_id": 2602,
    "title": "Uchuu Senkan Yamato: Kanketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 2603,
    "title": "Soukou Kihei Votoms: The Last Red Shoulder",
 "type": "ALL"
},
{
 "mal_id": 2604,
    "title": "Tenchi Muyou! Ryououki 5th Season",
 "type": "ALL"
},
{
 "mal_id": 2605,
    "title": "Crayon Shin-chan Movie 23: Ora no Hikkoshi Monogatari - Saboten Daisuugeki",
 "type": "ALL"
},
{
 "mal_id": 2606,
    "title": "Masamune Datenicle",
 "type": "ALL"
},
{
 "mal_id": 2607,
    "title": "Ginga Tetsudou Monogatari: Eien e no Bunkiten",
 "type": "ALL"
},
{
 "mal_id": 2608,
    "title": "Gundress",
 "type": "ALL"
},
{
 "mal_id": 2609,
    "title": "Transformers: The☆Headmasters",
 "type": "ALL"
},
{
 "mal_id": 2610,
    "title": "Argento Soma Special",
 "type": "ALL"
},
{
 "mal_id": 2611,
    "title": "Sakura Taisen: Ecole de Paris",
 "type": "ALL"
},
{
 "mal_id": 2612,
    "title": "Cyborg 009: Call of Justice 2",
 "type": "ALL"
},
{
 "mal_id": 2613,
    "title": "Choujin Gakuen Gowcaizer: The Voltage Fighters",
 "type": "ALL"
},
{
 "mal_id": 2614,
    "title": "Rockman Hoshi ni Negai wo",
 "type": "ALL"
},
{
 "mal_id": 2615,
    "title": "Hokuto no Ken: Legend of Heroes",
 "type": "ALL"
},
{
 "mal_id": 2616,
    "title": "Ginga Hyouryuu Vifam",
 "type": "ALL"
},
{
 "mal_id": 2617,
    "title": "Kyoufu no Bio Ningen Saishuu Kyoushi",
 "type": "ALL"
},
{
 "mal_id": 2618,
    "title": "Precure All Stars GoGo Dream Live!",
 "type": "ALL"
},
{
 "mal_id": 2619,
    "title": "Toki no Tabibito: Time Stranger",
 "type": "ALL"
},
{
 "mal_id": 2620,
    "title": "Guardian Hearts-Power UP!",
 "type": "ALL"
},
{
 "mal_id": 2621,
    "title": "Dirty Pair Flash 2",
 "type": "ALL"
},
{
 "mal_id": 2622,
    "title": "V.G.Neo The Animation",
 "type": "ALL"
},
{
 "mal_id": 2623,
    "title": "Seikai no Monshou Special",
 "type": "ALL"
},
{
 "mal_id": 2624,
    "title": "Benghuai 3: Reburn",
 "type": "ALL"
},
{
 "mal_id": 2625,
    "title": "Ku Pao Ying Xiong",
 "type": "ALL"
},
{
 "mal_id": 2626,
    "title": "Konjiki no Gash Bell!!: Ougon no Chichi wo Motsu Otoko",
 "type": "ALL"
},
{
 "mal_id": 2627,
    "title": "Huan Jie Wang",
 "type": "ALL"
},
{
 "mal_id": 2628,
    "title": "Uchuu Senkan Yamato to Iu Jidai: Seireki 2202-nen no Sentaku",
 "type": "ALL"
},
{
 "mal_id": 2629,
    "title": "Bakusou Kyoudai Let's & Go MAX",
 "type": "ALL"
},
{
 "mal_id": 2630,
    "title": "Bounty Dog: Getsumen no Ibu",
 "type": "ALL"
},
{
 "mal_id": 2631,
    "title": "New Mobile Report Gundam Wing: Frozen Teardrop Picture Drama - Aratanaru Tatakai",
 "type": "ALL"
},
{
 "mal_id": 2632,
    "title": "Cardfight!! Vanguard: Shinemon-hen",
 "type": "ALL"
},
{
 "mal_id": 2633,
    "title": "Uchuu Senkan Yamato: Aratanaru Tabidachi",
 "type": "ALL"
},
{
 "mal_id": 2634,
    "title": "Wo Jia Da Shixiong Naozi You Keng",
 "type": "ALL"
},
{
 "mal_id": 2635,
    "title": "Red Baron",
 "type": "ALL"
},
{
 "mal_id": 2636,
    "title": "Mobile Suit Gundam: Twilight Axis - Akaki Zan-ei",
 "type": "ALL"
},
{
 "mal_id": 2637,
    "title": "Shen Qi Huan Qi Tan",
 "type": "ALL"
},
{
 "mal_id": 2638,
    "title": "Yuusha-Ou GaoGaiGar Final Grand Glorious Gathering",
 "type": "ALL"
},
{
 "mal_id": 2639,
    "title": "Riki-Oh: Toukatsu Jigoku",
 "type": "ALL"
},
{
 "mal_id": 2640,
    "title": "Eiyuu Kyoushitsu",
 "type": "ALL"
},
{
 "mal_id": 2641,
    "title": "Chivas 1-2-3",
 "type": "ALL"
},
{
 "mal_id": 2642,
    "title": "Plawres Sanshirou",
 "type": "ALL"
},
{
 "mal_id": 2643,
    "title": "Harukanaru Toki no Naka de 3: Kurenai no Tsuki",
 "type": "ALL"
},
{
 "mal_id": 2644,
    "title": "Kakutou Bijin Wulong: Rebirth",
 "type": "ALL"
},
{
 "mal_id": 2645,
    "title": "Crayon Shin-chan Movie 12: Arashi wo Yobu! Yuuhi no Kasukabe Boys",
 "type": "ALL"
},
{
 "mal_id": 2646,
    "title": "Pokemon Diamond & Pearl: Clip Show",
 "type": "ALL"
},
{
 "mal_id": 2647,
    "title": "Koukaku Kidoutai: SAC_2045 - Jizoku Kanou Sensou",
 "type": "ALL"
},
{
 "mal_id": 2648,
    "title": "Chargeman Ken!",
 "type": "ALL"
},
{
 "mal_id": 2649,
    "title": "Fanren Xiu Xian Chuan: Fanren Feng Qi Tian Nan",
 "type": "ALL"
},
{
 "mal_id": 2650,
    "title": "Moldiver",
 "type": "ALL"
},
{
 "mal_id": 2651,
    "title": "Wan Jie Xian Zong",
 "type": "ALL"
},
{
 "mal_id": 2652,
    "title": "Zoids Wild Zero",
 "type": "ALL"
},
{
 "mal_id": 2653,
    "title": "Dirty Pair Flash 3",
 "type": "ALL"
},
{
 "mal_id": 2654,
    "title": "Macross 25th Anniversary: All That VF Macross F Version",
 "type": "ALL"
},
{
 "mal_id": 2655,
    "title": "Owari no Chronicle",
 "type": "ALL"
},
{
 "mal_id": 2656,
    "title": "Aquarian Age: Saga II - Don't Forget Me...",
 "type": "ALL"
},
{
 "mal_id": 2657,
    "title": "Doupo Cangqiong Specials",
 "type": "ALL"
},
{
 "mal_id": 2658,
    "title": "Yu☆Gi☆Oh! Zexal Second: Iza! Saishuu Kessen e!! Special",
 "type": "ALL"
},
{
 "mal_id": 2659,
    "title": "Initial D Battle Stage 3",
 "type": "ALL"
},
{
 "mal_id": 2660,
    "title": "Toji no Miko Recap",
 "type": "ALL"
},
{
 "mal_id": 2661,
    "title": "Douluo Dalu: Chongfan Haotian",
 "type": "ALL"
},
{
 "mal_id": 2662,
    "title": "Hug tto! Precure♡Futari wa Precure Movie: All Stars Memories",
 "type": "ALL"
},
{
 "mal_id": 2663,
    "title": "Early Reins",
 "type": "ALL"
},
{
 "mal_id": 2664,
    "title": "6 Angels",
 "type": "ALL"
},
{
 "mal_id": 2665,
    "title": "Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu",
 "type": "ALL"
},
{
 "mal_id": 2666,
    "title": "Buddy Complex: Daremo Shiranai Ashita e",
 "type": "ALL"
},
{
 "mal_id": 2667,
    "title": "Garo: Guren no Tsuki Special",
 "type": "ALL"
},
{
 "mal_id": 2668,
    "title": "Shinkansen Henkei Robo Shinkalion The Animation",
 "type": "ALL"
},
{
 "mal_id": 2669,
    "title": "Ling Jian Zun",
 "type": "ALL"
},
{
 "mal_id": 2670,
    "title": "Choujikuu Seiki Orguss 02",
 "type": "ALL"
},
{
 "mal_id": 2671,
    "title": "Soukyuu no Fafner: Dead Aggressor - The Beyond Part 2",
 "type": "ALL"
},
{
 "mal_id": 2672,
    "title": "Yamato yo Towa ni",
 "type": "ALL"
},
{
 "mal_id": 2673,
    "title": "Mobile Suit Gundam G40",
 "type": "ALL"
},
{
 "mal_id": 2674,
    "title": "Battle Spirits: Ryuuko no Ken",
 "type": "ALL"
},
{
 "mal_id": 2675,
    "title": "Choujin Locke",
 "type": "ALL"
},
{
 "mal_id": 2676,
    "title": "Babel Nisei (2001)",
 "type": "ALL"
},
{
 "mal_id": 2677,
    "title": "Qin Shi Mingyue: Bai Bu Fei Jian",
 "type": "ALL"
},
{
 "mal_id": 2678,
    "title": "Soukou Kihei Votoms: Big Battle",
 "type": "ALL"
},
{
 "mal_id": 2679,
    "title": "Injuu Alien",
 "type": "ALL"
},
{
 "mal_id": 2680,
    "title": "Choujigen Game Neptune: Hi☆Light",
 "type": "ALL"
},
{
 "mal_id": 2681,
    "title": "Offside (TV)",
 "type": "ALL"
},
{
 "mal_id": 2682,
    "title": "Xue Ying Ling Zhu",
 "type": "ALL"
},
{
 "mal_id": 2683,
    "title": "Seikai no Senki Special",
 "type": "ALL"
},
{
 "mal_id": 2684,
    "title": "Kakumeiki Valvrave Recaps",
 "type": "ALL"
},
{
 "mal_id": 2685,
    "title": "Peace Maker Kurogane Movie 2: Yuumei",
 "type": "ALL"
},
{
 "mal_id": 2686,
    "title": "Precure All Stars Movie: Minna de Utau♪ - Kiseki no Mahou",
 "type": "ALL"
},
{
 "mal_id": 2687,
    "title": "Hikari to Mizu no Daphne Specials",
 "type": "ALL"
},
{
 "mal_id": 2688,
    "title": "Macross 25th Anniversary: All That VF Macross Zero Version",
 "type": "ALL"
},
{
 "mal_id": 2689,
    "title": "Seirei Tsukai",
 "type": "ALL"
},
{
 "mal_id": 2690,
    "title": "Monster Strike the Movie: Lucifer - Zetsubou no Yoake",
 "type": "ALL"
},
{
 "mal_id": 2691,
    "title": "Taiyou no Yuusha Fighbird",
 "type": "ALL"
},
{
 "mal_id": 2692,
    "title": "Doupo Cangqiong: San Nian Zhi Yue",
 "type": "ALL"
},
{
 "mal_id": 2693,
    "title": "Gear Fighter Dendoh",
 "type": "ALL"
},
{
 "mal_id": 2694,
    "title": "Yuusha Keisatsu J-Decker",
 "type": "ALL"
},
{
 "mal_id": 2695,
    "title": "Freedom Previsited",
 "type": "ALL"
},
{
 "mal_id": 2696,
    "title": "Precure Dream Stars! Movie",
 "type": "ALL"
},
{
 "mal_id": 2697,
    "title": "CB Chara Go Nagai World",
 "type": "ALL"
},
{
 "mal_id": 2698,
    "title": "Asobot Senki Gokuu",
 "type": "ALL"
},
{
 "mal_id": 2699,
    "title": "Bakuen Campus Guardress",
 "type": "ALL"
},
{
 "mal_id": 2700,
    "title": "Odin: Koushi Hansen Starlight",
 "type": "ALL"
},
{
 "mal_id": 2701,
    "title": "Lime-iro Senkitan: Nankoku Yume Roman",
 "type": "ALL"
},
{
 "mal_id": 2702,
    "title": "Bakegyamon",
 "type": "ALL"
},
{
 "mal_id": 2703,
    "title": "Chimera",
 "type": "ALL"
},
{
 "mal_id": 2704,
    "title": "Dog Days'' Specials",
 "type": "ALL"
},
{
 "mal_id": 2705,
    "title": "Zhen Hun Jie: Bei Luo Shi Men Pian Part 2",
 "type": "ALL"
},
{
 "mal_id": 2706,
    "title": "Gunnm 3D Special",
 "type": "ALL"
},
{
 "mal_id": 2707,
    "title": "Cyborg 009",
 "type": "ALL"
},
{
 "mal_id": 2708,
    "title": "Precure All Stars Movie: Haru no Carnival♪",
 "type": "ALL"
},
{
 "mal_id": 2709,
    "title": "Toriko: Barbarian Ivy wo Hokaku Seyo!",
 "type": "ALL"
},
{
 "mal_id": 2710,
    "title": "Crusher Joe OVA",
 "type": "ALL"
},
{
 "mal_id": 2711,
    "title": "Hijikata Toshizou: Shiro no Kiseki",
 "type": "ALL"
},
{
 "mal_id": 2712,
    "title": "Kikou Kai Galient",
 "type": "ALL"
},
{
 "mal_id": 2713,
    "title": "Zegapain ADP",
 "type": "ALL"
},
{
 "mal_id": 2714,
    "title": "Mahoutsukai Precure! Movie: Kiseki no Henshin! Cure Mofurun!",
 "type": "ALL"
},
{
 "mal_id": 2715,
    "title": "SF Shinseiki Lensman",
 "type": "ALL"
},
{
 "mal_id": 2716,
    "title": "Pandora to Akubi",
 "type": "ALL"
},
{
 "mal_id": 2717,
    "title": "Cardfight!! Vanguard Gaiden: If",
 "type": "ALL"
},
{
 "mal_id": 2718,
    "title": "Gundam Breaker: Battlogue",
 "type": "ALL"
},
{
 "mal_id": 2719,
    "title": "Shin Tennis no Ouji-sama: U-17 World Cup",
 "type": "ALL"
},
{
 "mal_id": 2720,
    "title": "Taiho Shichau zo: Full Throttle - Watashitachi no Iru Basho",
 "type": "ALL"
},
{
 "mal_id": 2721,
    "title": "JRA Hokan Keikaku",
 "type": "ALL"
},
{
 "mal_id": 2722,
    "title": "Ushio to Tora: Comical Deformer Gekijou",
 "type": "ALL"
},
{
 "mal_id": 2723,
    "title": "Votoms Finder",
 "type": "ALL"
},
{
 "mal_id": 2724,
    "title": "Dragon Knight",
 "type": "ALL"
},
{
 "mal_id": 2725,
    "title": "Ze Tian Ji 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2726,
    "title": "Take Your Way",
 "type": "ALL"
},
{
 "mal_id": 2727,
    "title": "Gunslinger Stratos The Animation: Kikan/Kaze no Yukue",
 "type": "ALL"
},
{
 "mal_id": 2728,
    "title": "Hanappe Bazooka",
 "type": "ALL"
},
{
 "mal_id": 2729,
    "title": "Rinne no Lagrange: Kamogawa Memoria",
 "type": "ALL"
},
{
 "mal_id": 2730,
    "title": "Goulart Knights: Evoked the Beginning White",
 "type": "ALL"
},
{
 "mal_id": 2731,
    "title": "Gun x Sword-san",
 "type": "ALL"
},
{
 "mal_id": 2732,
    "title": "Star☆Twinkle Precure: Hoshi no Uta ni Omoi wo Komete",
 "type": "ALL"
},
{
 "mal_id": 2733,
    "title": "Wushen Zhuzai",
 "type": "ALL"
},
{
 "mal_id": 2734,
    "title": "Gall Force 2: Destruction",
 "type": "ALL"
},
{
 "mal_id": 2735,
    "title": "Goddamn",
 "type": "ALL"
},
{
 "mal_id": 2736,
    "title": "Ojousama Sousamou",
 "type": "ALL"
},
{
 "mal_id": 2737,
    "title": "Suisei no Gargantia: Puchitto Furikaerintia",
 "type": "ALL"
},
{
 "mal_id": 2738,
    "title": "Tiger & Bunny: Too Many Cooks Spoil the Broth.",
 "type": "ALL"
},
{
 "mal_id": 2739,
    "title": "Jigoku Sensei Nube OVA",
 "type": "ALL"
},
{
 "mal_id": 2740,
    "title": "Xiao Qian",
 "type": "ALL"
},
{
 "mal_id": 2741,
    "title": "Elsword: Ain-ui Gieog Animation",
 "type": "ALL"
},
{
 "mal_id": 2742,
    "title": "Cleopatra D.C.",
 "type": "ALL"
},
{
 "mal_id": 2743,
    "title": "Tennis no Ouji-sama: Best Games!!",
 "type": "ALL"
},
{
 "mal_id": 2744,
    "title": "Bakugan: Armored Alliance",
 "type": "ALL"
},
{
 "mal_id": 2745,
    "title": "Daishizen no Majuu: Bagi",
 "type": "ALL"
},
{
 "mal_id": 2746,
    "title": "Luv Wave",
 "type": "ALL"
},
{
 "mal_id": 2747,
    "title": "Xin Shen Bang: Nezha Chonsheng",
 "type": "ALL"
},
{
 "mal_id": 2748,
    "title": "Soukyuu no Fafner: Arcadian Memory",
 "type": "ALL"
},
{
 "mal_id": 2749,
    "title": "Macross XX",
 "type": "ALL"
},
{
 "mal_id": 2750,
    "title": "Kinnikuman: Kinnikusei Oui Soudatsu-hen",
 "type": "ALL"
},
{
 "mal_id": 2751,
    "title": "Koutetsu Jeeg",
 "type": "ALL"
},
{
 "mal_id": 2752,
    "title": "Tokumu Sentai Shinesman",
 "type": "ALL"
},
{
 "mal_id": 2753,
    "title": "Shi Xiong",
 "type": "ALL"
},
{
 "mal_id": 2754,
    "title": "Monster Strike the Movie: Sora no Kanata",
 "type": "ALL"
},
{
 "mal_id": 2755,
    "title": "Haou Taikei Ryuu Knight",
 "type": "ALL"
},
{
 "mal_id": 2756,
    "title": "Hidamari no Ki",
 "type": "ALL"
},
{
 "mal_id": 2757,
    "title": "Heroman Specials",
 "type": "ALL"
},
{
 "mal_id": 2758,
    "title": "Gunslinger Stratos The Animation: Bunki/Futatsu no Mirai",
 "type": "ALL"
},
{
 "mal_id": 2759,
    "title": "Sweet Valerian",
 "type": "ALL"
},
{
 "mal_id": 2760,
    "title": "Monster Strike: Zoku Saishuu-banashi - Pandora no Hako",
 "type": "ALL"
},
{
 "mal_id": 2761,
    "title": "Soukou Kihei Votoms: Koei Futatabi",
 "type": "ALL"
},
{
 "mal_id": 2762,
    "title": "D4 Princess",
 "type": "ALL"
},
{
 "mal_id": 2763,
    "title": "Heavy Object: Dai 37 Kidou Seihi Daitai - Sakusen Kiroku",
 "type": "ALL"
},
{
 "mal_id": 2764,
    "title": "Dengeki Oshioki Musume Gootaman R: Ai to Kanashimi no Final Battle",
 "type": "ALL"
},
{
 "mal_id": 2765,
    "title": "Monster Strike: Mermaid Rhapsody",
 "type": "ALL"
},
{
 "mal_id": 2766,
    "title": "Nendo no Tatakai",
 "type": "ALL"
},
{
 "mal_id": 2767,
    "title": "Gundam: G no Reconguista Movie I - Ike! Core Fighter",
 "type": "ALL"
},
{
 "mal_id": 2768,
    "title": "DNA Sights 999.9",
 "type": "ALL"
},
{
 "mal_id": 2769,
    "title": "Zettai Karen Children: Gentei Kaikin!! OVA Chou Sakidori Special!!",
 "type": "ALL"
},
{
 "mal_id": 2770,
    "title": "Kotetsu no Daibouken",
 "type": "ALL"
},
{
 "mal_id": 2771,
    "title": "Natsuki Crisis",
 "type": "ALL"
},
{
 "mal_id": 2772,
    "title": "Chiyu Mahou no Machigatta Tsukaikata: Senjou wo Kakeru Kaifuku Youin",
 "type": "ALL"
},
{
 "mal_id": 2773,
    "title": "Yuuwaku Countdown",
 "type": "ALL"
},
{
 "mal_id": 2774,
    "title": "Zettai Karen Children: Oobanburumai! Natsuko to Hotaru no B.A.B.E.L. Tsuushin",
 "type": "ALL"
},
{
 "mal_id": 2775,
    "title": "Uchuu no Kishi Tekkaman",
 "type": "ALL"
},
{
 "mal_id": 2776,
    "title": "Onikirimaru",
 "type": "ALL"
},
{
 "mal_id": 2777,
    "title": "Mutant Turtles: Choujin Densetsu-hen",
 "type": "ALL"
},
{
 "mal_id": 2778,
    "title": "Panzer Dragoon",
 "type": "ALL"
},
{
 "mal_id": 2779,
    "title": "Legendz: Yomigaeru Ryuuou Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2780,
    "title": "Generation of Chaos",
 "type": "ALL"
},
{
 "mal_id": 2781,
    "title": "Under Ninja",
 "type": "ALL"
},
{
 "mal_id": 2782,
    "title": "Wu Geng Ji Zhi Tianqi",
 "type": "ALL"
},
{
 "mal_id": 2783,
    "title": "Sengoku Majin Goushougun: Toki no Etranger",
 "type": "ALL"
},
{
 "mal_id": 2784,
    "title": "Submarine 707R",
 "type": "ALL"
},
{
 "mal_id": 2785,
    "title": "De:vadasy",
 "type": "ALL"
},
{
 "mal_id": 2786,
    "title": "Tenpou Ibun: Ayakashi Ayashi - Ayashi Shinkyoku",
 "type": "ALL"
},
{
 "mal_id": 2787,
    "title": "Gall Force 3: Stardust War",
 "type": "ALL"
},
{
 "mal_id": 2788,
    "title": "TV-ban Pokemon Special Masara Town-hen Recaps",
 "type": "ALL"
},
{
 "mal_id": 2789,
    "title": "Haja Kyosei G Dangaiou",
 "type": "ALL"
},
{
 "mal_id": 2790,
    "title": "City Hunter: Ryou no Propose",
 "type": "ALL"
},
{
 "mal_id": 2791,
    "title": "Harukanaru Toki no Naka de 3: Owarinaki Unmei",
 "type": "ALL"
},
{
 "mal_id": 2792,
    "title": "Soukyuu no Fafner: Dead Aggressor - The Beyond Part 3",
 "type": "ALL"
},
{
 "mal_id": 2793,
    "title": "Big Wars: Kami Utsu Akaki Kouya ni",
 "type": "ALL"
},
{
 "mal_id": 2794,
    "title": "Kenritsu Chikyuu Boueigun",
 "type": "ALL"
},
{
 "mal_id": 2795,
    "title": "Pokemon no Heisei-shi: Kayou Kara Mokuyou, Soshite Nichiyou e",
 "type": "ALL"
},
{
 "mal_id": 2796,
    "title": "Kikaider 01 The Animation",
 "type": "ALL"
},
{
 "mal_id": 2797,
    "title": "Sousei Kishi Gaiarth",
 "type": "ALL"
},
{
 "mal_id": 2798,
    "title": "Mahou Shoujo Lyrical Nanoha ViVid: Special Program",
 "type": "ALL"
},
{
 "mal_id": 2799,
    "title": "Parol no Miraijima",
 "type": "ALL"
},
{
 "mal_id": 2800,
    "title": "Chouon Senshi Borgman",
 "type": "ALL"
},
{
 "mal_id": 2801,
    "title": "Getter Robo G",
 "type": "ALL"
},
{
 "mal_id": 2802,
    "title": "Heibai Wushang 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2803,
    "title": "The☆Ultraman",
 "type": "ALL"
},
{
 "mal_id": 2804,
    "title": "Wizardry",
 "type": "ALL"
},
{
 "mal_id": 2805,
    "title": "Wu Dong Qian Kun 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2806,
    "title": "Youseiki Suikoden",
 "type": "ALL"
},
{
 "mal_id": 2807,
    "title": "Tian Bao Fuyao Lu 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2808,
    "title": "Peace Maker Kurogane Special",
 "type": "ALL"
},
{
 "mal_id": 2809,
    "title": "Bouken! Iczer 3",
 "type": "ALL"
},
{
 "mal_id": 2810,
    "title": "Yuusha Tokkyuu Might Gaine",
 "type": "ALL"
},
{
 "mal_id": 2811,
    "title": "Yuan Long",
 "type": "ALL"
},
{
 "mal_id": 2812,
    "title": "Douluo Dalu: Xiaowu Fuhuo",
 "type": "ALL"
},
{
 "mal_id": 2813,
    "title": "Xian Yue Meng Ying",
 "type": "ALL"
},
{
 "mal_id": 2814,
    "title": "Precure Super Stars! Movie",
 "type": "ALL"
},
{
 "mal_id": 2815,
    "title": "Shin Chou Kyou Ryo: Condor Hero III",
 "type": "ALL"
},
{
 "mal_id": 2816,
    "title": "Xingchen Bian: Yu Li Cang Hai",
 "type": "ALL"
},
{
 "mal_id": 2817,
    "title": "Soukou Kihei Votoms: Genei-hen",
 "type": "ALL"
},
{
 "mal_id": 2818,
    "title": "Yuan Shen Haojie",
 "type": "ALL"
},
{
 "mal_id": 2819,
    "title": "Sacred Seven: Shirogane no Tsubasa Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 2820,
    "title": "Monster Strike: Rain of Memories",
 "type": "ALL"
},
{
 "mal_id": 2821,
    "title": "Down Load: Namu Amida Butsu wa Ai no Uta",
 "type": "ALL"
},
{
 "mal_id": 2822,
    "title": "Rhea Gall Force",
 "type": "ALL"
},
{
 "mal_id": 2823,
    "title": "Kirakira☆Precure A La Mode Movie: Paritto! Omoide no Mille-Feuille!",
 "type": "ALL"
},
{
 "mal_id": 2824,
    "title": "Li Shi",
 "type": "ALL"
},
{
 "mal_id": 2825,
    "title": "No Doubt",
 "type": "ALL"
},
{
 "mal_id": 2826,
    "title": "Jian Wangchao",
 "type": "ALL"
},
{
 "mal_id": 2827,
    "title": "Iczer-Girl Iczelion",
 "type": "ALL"
},
{
 "mal_id": 2828,
    "title": "Sexy Sailor Soldiers",
 "type": "ALL"
},
{
 "mal_id": 2829,
    "title": "Dou Shen Ji",
 "type": "ALL"
},
{
 "mal_id": 2830,
    "title": "Gakuen Tokusou Hikaruon",
 "type": "ALL"
},
{
 "mal_id": 2831,
    "title": "Ore, Twintail ni Narimasu. Recap",
 "type": "ALL"
},
{
 "mal_id": 2832,
    "title": "Gall Force: Chikyuu Shou",
 "type": "ALL"
},
{
 "mal_id": 2833,
    "title": "Ginga Ojousama Densetsu Yuna: Shin'en no Fairy",
 "type": "ALL"
},
{
 "mal_id": 2834,
    "title": "Sengoku Majin Goushougun",
 "type": "ALL"
},
{
 "mal_id": 2835,
    "title": "VS Knight Lamune & 40 Fire",
 "type": "ALL"
},
{
 "mal_id": 2836,
    "title": "Dr.",
 "type": "ALL"
},
{
 "mal_id": 2837,
    "title": "Cyphers",
 "type": "ALL"
},
{
 "mal_id": 2838,
    "title": "Ze Tian Ji 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 2839,
    "title": "Suna no Bara: Yuki no Mokushiroku",
 "type": "ALL"
},
{
 "mal_id": 2840,
    "title": "Shounan Bakusouzoku",
 "type": "ALL"
},
{
 "mal_id": 2841,
    "title": "Mahou Shoujo Magical Destroyers",
 "type": "ALL"
},
{
 "mal_id": 2842,
    "title": "Dennou Sentai Voogie's★Angel",
 "type": "ALL"
},
{
 "mal_id": 2843,
    "title": "Super Robot Taisen OG: Divine Wars - Sorezore no Michi",
 "type": "ALL"
},
{
 "mal_id": 2844,
    "title": "Ashiaraiyashiki no Juunin-tachi.",
 "type": "ALL"
},
{
 "mal_id": 2845,
    "title": "Doupo Cangqiong 2nd Season Specials",
 "type": "ALL"
},
{
 "mal_id": 2846,
    "title": "Iron Virgin Jun",
 "type": "ALL"
},
{
 "mal_id": 2847,
    "title": "Konpeki no Kantai",
 "type": "ALL"
},
{
 "mal_id": 2848,
    "title": "Grey: Digital Target",
 "type": "ALL"
},
{
 "mal_id": 2849,
    "title": "Anime Tenchou Movie",
 "type": "ALL"
},
{
 "mal_id": 2850,
    "title": "Holy Knight Light",
 "type": "ALL"
},
{
 "mal_id": 2851,
    "title": "Youchien Senshi: Hanamaru Girls",
 "type": "ALL"
},
{
 "mal_id": 2852,
    "title": "W'z Special",
 "type": "ALL"
},
{
 "mal_id": 2853,
    "title": "Souten no Ken Specials",
 "type": "ALL"
},
{
 "mal_id": 2854,
    "title": "Kujakuou",
 "type": "ALL"
},
{
 "mal_id": 2855,
    "title": "Senkou no Night Raid: Aruku Hako",
 "type": "ALL"
},
{
 "mal_id": 2856,
    "title": "Yawara!: Zutto Kimi no Koto ga...",
 "type": "ALL"
},
{
 "mal_id": 2857,
    "title": "HeatGuy J Special",
 "type": "ALL"
},
{
 "mal_id": 2858,
    "title": "Beast Wars Second Chou Seimeitai Transformers",
 "type": "ALL"
},
{
 "mal_id": 2859,
    "title": "The Hakkenden: Shin Shou",
 "type": "ALL"
},
{
 "mal_id": 2860,
    "title": "Zero Seiki Movie 1: Emeraldas",
 "type": "ALL"
},
{
 "mal_id": 2861,
    "title": "Bad Boys",
 "type": "ALL"
},
{
 "mal_id": 2862,
    "title": "Ankoku Cat",
 "type": "ALL"
},
{
 "mal_id": 2863,
    "title": "Babel Nisei (OVA)",
 "type": "ALL"
},
{
 "mal_id": 2864,
    "title": "Gundam: G no Reconguista - From the Past to the Future",
 "type": "ALL"
},
{
 "mal_id": 2865,
    "title": "Yuusha Raideen",
 "type": "ALL"
},
{
 "mal_id": 2866,
    "title": "Red Ash: Gearworld",
 "type": "ALL"
},
{
 "mal_id": 2867,
    "title": "Toku: Touken Ranbu - Hanamaru - Setsugetsuka",
 "type": "ALL"
},
{
 "mal_id": 2868,
    "title": "Chou Seimeitai Transformers Beast Wars Neo",
 "type": "ALL"
},
{
 "mal_id": 2869,
    "title": "Yume Senshi Wingman",
 "type": "ALL"
},
{
 "mal_id": 2870,
    "title": "Fuuma no Kojirou: Yasha-hen",
 "type": "ALL"
},
{
 "mal_id": 2871,
    "title": "Midnight Panther",
 "type": "ALL"
},
{
 "mal_id": 2872,
    "title": "Toji no Miko: Kizamishi Issen no Tomoshibi",
 "type": "ALL"
},
{
 "mal_id": 2873,
    "title": "Uchuu Kaizoku Mito no Daibouken",
 "type": "ALL"
},
{
 "mal_id": 2874,
    "title": "Fei Ren Xueyuan",
 "type": "ALL"
},
{
 "mal_id": 2875,
    "title": "Wanna-Be's",
 "type": "ALL"
},
{
 "mal_id": 2876,
    "title": "Sakigake!! Otokojuku Movie",
 "type": "ALL"
},
{
 "mal_id": 2877,
    "title": "Ougon Yuusha Goldran",
 "type": "ALL"
},
{
 "mal_id": 2878,
    "title": "Kouya no Kotobuki Hikoutai Kanzenban",
 "type": "ALL"
},
{
 "mal_id": 2879,
    "title": "Starship Troopers: Red Planet",
 "type": "ALL"
},
{
 "mal_id": 2880,
    "title": "Wan Jie Xian Zong 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2881,
    "title": "Guy: Youma Kakusei",
 "type": "ALL"
},
{
 "mal_id": 2882,
    "title": "Shin Megami Tensei Devil Children",
 "type": "ALL"
},
{
 "mal_id": 2883,
    "title": "Feng Yun Jue",
 "type": "ALL"
},
{
 "mal_id": 2884,
    "title": "Uchuu Senkan Yamato 2199: Tsuioku no Koukai",
 "type": "ALL"
},
{
 "mal_id": 2885,
    "title": "Cosmo Police Justy",
 "type": "ALL"
},
{
 "mal_id": 2886,
    "title": "Aoki Densetsu Shoot! (Movie)",
 "type": "ALL"
},
{
 "mal_id": 2887,
    "title": "Möbius Dust",
 "type": "ALL"
},
{
 "mal_id": 2888,
    "title": "Lu Shidai 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2889,
    "title": "Majuu Sensen: The Apocalypse",
 "type": "ALL"
},
{
 "mal_id": 2890,
    "title": "Rokushin Gattai GodMars",
 "type": "ALL"
},
{
 "mal_id": 2891,
    "title": "Cyborg 009: Chou Ginga Densetsu",
 "type": "ALL"
},
{
 "mal_id": 2892,
    "title": "Kaitouranma The Animation",
 "type": "ALL"
},
{
 "mal_id": 2893,
    "title": "God Mazinger",
 "type": "ALL"
},
{
 "mal_id": 2894,
    "title": "Kikou Kantai Dairugger XV",
 "type": "ALL"
},
{
 "mal_id": 2895,
    "title": "Gaist Crusher",
 "type": "ALL"
},
{
 "mal_id": 2896,
    "title": "Run=Dim",
 "type": "ALL"
},
{
 "mal_id": 2897,
    "title": "Koukaku Kidoutai: Ghost Chaser",
 "type": "ALL"
},
{
 "mal_id": 2898,
    "title": "Mobile Suit Gundam 0083: Stardust Memory Picture Drama - The Mayfly of Space 2",
 "type": "ALL"
},
{
 "mal_id": 2899,
    "title": "Nendo no Tatakai 2",
 "type": "ALL"
},
{
 "mal_id": 2900,
    "title": "Senyoku no Sigrdrifa: Dai-909 Senjutsu Hime-tai Sentou Kiroku!",
 "type": "ALL"
},
{
 "mal_id": 2901,
    "title": "Jungle no Ouja Taa-chan",
 "type": "ALL"
},
{
 "mal_id": 2902,
    "title": "Just Awake",
 "type": "ALL"
},
{
 "mal_id": 2903,
    "title": "Xue Se Cang Qiong",
 "type": "ALL"
},
{
 "mal_id": 2904,
    "title": "Akai Kiba: Blue Sonnet",
 "type": "ALL"
},
{
 "mal_id": 2905,
    "title": "Momotarou: Umi no Shinpei",
 "type": "ALL"
},
{
 "mal_id": 2906,
    "title": "Yuusha Exkaiser",
 "type": "ALL"
},
{
 "mal_id": 2907,
    "title": "Karasu Tengu Kabuto",
 "type": "ALL"
},
{
 "mal_id": 2908,
    "title": "Mon-Soni! D'Artagnan no Idol Sengen",
 "type": "ALL"
},
{
 "mal_id": 2909,
    "title": "Samurai Spirits 2: Asura Zanmaden",
 "type": "ALL"
},
{
 "mal_id": 2910,
    "title": "Maps",
 "type": "ALL"
},
{
 "mal_id": 2911,
    "title": "Taimanin Yukikaze Special",
 "type": "ALL"
},
{
 "mal_id": 2912,
    "title": "Meisou! Underworld",
 "type": "ALL"
},
{
 "mal_id": 2913,
    "title": "Alexander Senki Movie",
 "type": "ALL"
},
{
 "mal_id": 2914,
    "title": "Ganbare Genki",
 "type": "ALL"
},
{
 "mal_id": 2915,
    "title": "Kunoichi Gakuen Ninpouchou",
 "type": "ALL"
},
{
 "mal_id": 2916,
    "title": "Precure Miracle Universe Movie",
 "type": "ALL"
},
{
 "mal_id": 2917,
    "title": "Wild 7",
 "type": "ALL"
},
{
 "mal_id": 2918,
    "title": "Mazinger Z tai Ankoku Daishougun",
 "type": "ALL"
},
{
 "mal_id": 2919,
    "title": "Tobira wo Akete",
 "type": "ALL"
},
{
 "mal_id": 2920,
    "title": "Soreyuke! Uchuu Senkan Yamamoto Youko II",
 "type": "ALL"
},
{
 "mal_id": 2921,
    "title": "Chiryokumaru",
 "type": "ALL"
},
{
 "mal_id": 2922,
    "title": "Mobile Suit Gundam UC Perfectibility",
 "type": "ALL"
},
{
 "mal_id": 2923,
    "title": "Jigoku Sensei Nube: Kyoufu no Natsuyasumi!! Ayashi no Umi no Densetsu!",
 "type": "ALL"
},
{
 "mal_id": 2924,
    "title": "Kyutai Panic Adventure!",
 "type": "ALL"
},
{
 "mal_id": 2925,
    "title": "Panda-Z: The Robonimation",
 "type": "ALL"
},
{
 "mal_id": 2926,
    "title": "Monsuto Anime: Katsubou no Hate no Risoukyou",
 "type": "ALL"
},
{
 "mal_id": 2927,
    "title": "Prism Ark Specials",
 "type": "ALL"
},
{
 "mal_id": 2928,
    "title": "Great Mazinger tai Getter Robo",
 "type": "ALL"
},
{
 "mal_id": 2929,
    "title": "Sengoku Kitan Youtouden",
 "type": "ALL"
},
{
 "mal_id": 2930,
    "title": "Yamato Takeru",
 "type": "ALL"
},
{
 "mal_id": 2931,
    "title": "Grendizer: Getter Robo G - Great Mazinger Kessen! Daikaijuu",
 "type": "ALL"
},
{
 "mal_id": 2932,
    "title": "Aru Zombie Shoujo no Sainan",
 "type": "ALL"
},
{
 "mal_id": 2933,
    "title": "Ginga Senpuu Braiger",
 "type": "ALL"
},
{
 "mal_id": 2934,
    "title": "Madou King Granzort",
 "type": "ALL"
},
{
 "mal_id": 2935,
    "title": "Chinmoku no Kantai",
 "type": "ALL"
},
{
 "mal_id": 2936,
    "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana Recap",
 "type": "ALL"
},
{
 "mal_id": 2937,
    "title": "Kagaku Ninja-tai Gatchaman II",
 "type": "ALL"
},
{
 "mal_id": 2938,
    "title": "Chou Deneiban SD Gundam Sangokuden Brave Battle Warriors",
 "type": "ALL"
},
{
 "mal_id": 2939,
    "title": "Can Ci Pin: Fangzhu Xingkong",
 "type": "ALL"
},
{
 "mal_id": 2940,
    "title": "Yu☆Gi☆Oh!: Go Rush!!",
 "type": "ALL"
},
{
 "mal_id": 2941,
    "title": "Kyutai Panic Adventure Returns!",
 "type": "ALL"
},
{
 "mal_id": 2942,
    "title": "Duel Masters Cross",
 "type": "ALL"
},
{
 "mal_id": 2943,
    "title": "Gall Force: New Era",
 "type": "ALL"
},
{
 "mal_id": 2944,
    "title": "Hurricane Polymar",
 "type": "ALL"
},
{
 "mal_id": 2945,
    "title": "Evangelion Shito, Hakata Shuurai",
 "type": "ALL"
},
{
 "mal_id": 2946,
    "title": "Wu Shang Shen Di",
 "type": "ALL"
},
{
 "mal_id": 2947,
    "title": "Ankoku Shindenshou Takegami",
 "type": "ALL"
},
{
 "mal_id": 2948,
    "title": "El",
 "type": "ALL"
},
{
 "mal_id": 2949,
    "title": "Mirai Keisatsu Urashiman",
 "type": "ALL"
},
{
 "mal_id": 2950,
    "title": "Getter Robo Go",
 "type": "ALL"
},
{
 "mal_id": 2951,
    "title": "SD Gundam World: Sangoku Souketsuden",
 "type": "ALL"
},
{
 "mal_id": 2952,
    "title": "Xiang Ling Ji",
 "type": "ALL"
},
{
 "mal_id": 2953,
    "title": "Precure Miracle Leap Movie: Minna to no Fushigi na Ichinichi",
 "type": "ALL"
},
{
 "mal_id": 2954,
    "title": "Bari Bari Densetsu (1987)",
 "type": "ALL"
},
{
 "mal_id": 2955,
    "title": "Ze Tian Ji 4th Season",
 "type": "ALL"
},
{
 "mal_id": 2956,
    "title": "Arknights",
 "type": "ALL"
},
{
 "mal_id": 2957,
    "title": "Hate You",
 "type": "ALL"
},
{
 "mal_id": 2958,
    "title": "Hangyakusei Million Arthur PV",
 "type": "ALL"
},
{
 "mal_id": 2959,
    "title": "Psychic Force",
 "type": "ALL"
},
{
 "mal_id": 2960,
    "title": "Arcade Gamer Fubuki Extra",
 "type": "ALL"
},
{
 "mal_id": 2961,
    "title": "Wu Geng Ji Zhi San Jie",
 "type": "ALL"
},
{
 "mal_id": 2962,
    "title": "Balthus: Tia no Kagayaki",
 "type": "ALL"
},
{
 "mal_id": 2963,
    "title": "Kagaku Ninja-tai Gatchaman F",
 "type": "ALL"
},
{
 "mal_id": 2964,
    "title": "Crayon Shin-chan Manatsu no Yoru ni Ora Sanjou! Arashi wo Yobu Den-O vs. Shin-O 60-bu Special!!",
 "type": "ALL"
},
{
 "mal_id": 2965,
    "title": "Dragon Quest: Dai no Daibouken Buchiyabure!! Shinsei 6 Daishougun",
 "type": "ALL"
},
{
 "mal_id": 2966,
    "title": "Ring ni Kakero 1: Nichibei Kessen-hen",
 "type": "ALL"
},
{
 "mal_id": 2967,
    "title": "Soukyuu no Fafner: Dead Aggressor - The Beyond Part 4",
 "type": "ALL"
},
{
 "mal_id": 2968,
    "title": "A New Journey",
 "type": "ALL"
},
{
 "mal_id": 2969,
    "title": "Dragon Quest: Dai no Daibouken Tachiagare!! Aban no Shito",
 "type": "ALL"
},
{
 "mal_id": 2970,
    "title": "Power Dolls",
 "type": "ALL"
},
{
 "mal_id": 2971,
    "title": "Gundam Build Divers: Battlogue",
 "type": "ALL"
},
{
 "mal_id": 2972,
    "title": "Tobe! Isami",
 "type": "ALL"
},
{
 "mal_id": 2973,
    "title": "Shuo Feng: Po Zhen Zi",
 "type": "ALL"
},
{
 "mal_id": 2974,
    "title": "Deva Zan",
 "type": "ALL"
},
{
 "mal_id": 2975,
    "title": "Kouya no Kotobuki Hikoutai Gaiden: Oozora no Harukaze Hikoutai",
 "type": "ALL"
},
{
 "mal_id": 2976,
    "title": "Uchuu no Kishi Tekkaman Blade OVA: Burning Clock",
 "type": "ALL"
},
{
 "mal_id": 2977,
    "title": "Time Travel Tondekeman!",
 "type": "ALL"
},
{
 "mal_id": 2978,
    "title": "Katsugeki Shoujo Tanteidan",
 "type": "ALL"
},
{
 "mal_id": 2979,
    "title": "Ling Jian Zun 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 2980,
    "title": "DT Eightron",
 "type": "ALL"
},
{
 "mal_id": 2981,
    "title": "Dragon Quest: Dai no Daibouken (2020): Bouken no Kiseki, Kore kara no Tabiji",
 "type": "ALL"
},
{
 "mal_id": 2982,
    "title": "Baku Tech! Bakugan Gachi",
 "type": "ALL"
},
{
 "mal_id": 2983,
    "title": "Go! Go! Ackman",
 "type": "ALL"
},
{
 "mal_id": 2984,
    "title": "Shin Kujakuou",
 "type": "ALL"
},
{
 "mal_id": 2985,
    "title": "Yoroshiku Mechadock",
 "type": "ALL"
},
{
 "mal_id": 2986,
    "title": "Ghost Messenger",
 "type": "ALL"
},
{
 "mal_id": 2987,
    "title": "Ryuu Seiki",
 "type": "ALL"
},
{
 "mal_id": 2988,
    "title": "Shin Hurricane Polymar",
 "type": "ALL"
},
{
 "mal_id": 2989,
    "title": "Barom One",
 "type": "ALL"
},
{
 "mal_id": 2990,
    "title": "Haru no Ashioto The Movie: Ourin Dakkan",
 "type": "ALL"
},
{
 "mal_id": 2991,
    "title": "Akai Hayate",
 "type": "ALL"
},
{
 "mal_id": 2992,
    "title": "Min Diao Ju Yi Wen Lu",
 "type": "ALL"
},
{
 "mal_id": 2993,
    "title": "Ougon Bat",
 "type": "ALL"
},
{
 "mal_id": 2994,
    "title": "Romance wa Tsurugi no Kagayaki II",
 "type": "ALL"
},
{
 "mal_id": 2995,
    "title": "Genshi Shounen Ryuu",
 "type": "ALL"
},
{
 "mal_id": 2996,
    "title": "Riki-Oh 2: Horobi no Ko",
 "type": "ALL"
},
{
 "mal_id": 2997,
    "title": "Seijuuden: Twin Dolls",
 "type": "ALL"
},
{
 "mal_id": 2998,
    "title": "Space Cobra Pilot",
 "type": "ALL"
},
{
 "mal_id": 2999,
    "title": "Urashima Tarou (1931)",
 "type": "ALL"
},
{
 "mal_id": 3000,
    "title": "Kouryuu Densetsu Villgust",
 "type": "ALL"
},
{
 "mal_id": 3001,
    "title": "Ace wo Nerae! Final Stage",
 "type": "ALL"
},
{
 "mal_id": 3002,
    "title": "Yuusha Shirei Dagwon",
 "type": "ALL"
},
{
 "mal_id": 3003,
    "title": "Sabu to Ichi Torimono Hikae",
 "type": "ALL"
},
{
 "mal_id": 3004,
    "title": "Monkey Punch: Manga Katsudou Daishashin",
 "type": "ALL"
},
{
 "mal_id": 3005,
    "title": "Futari wa Precure: Splash☆Star Maji★Doki♥ Theater",
 "type": "ALL"
},
{
 "mal_id": 3006,
    "title": "Net Ghost Pipopa",
 "type": "ALL"
},
{
 "mal_id": 3007,
    "title": "Robo to Shoujo (Kari)",
 "type": "ALL"
},
{
 "mal_id": 3008,
    "title": "Tokyo Vice",
 "type": "ALL"
},
{
 "mal_id": 3009,
    "title": "Duel Masters Cross Shock",
 "type": "ALL"
},
{
 "mal_id": 3010,
    "title": "Mulan: Heng Kong Chu Shi",
 "type": "ALL"
},
{
 "mal_id": 3011,
    "title": "Time Bokan Oudou Fukko",
 "type": "ALL"
},
{
 "mal_id": 3012,
    "title": "Phantasy Star Online 2: Episode Oracle - Xiao's Report",
 "type": "ALL"
},
{
 "mal_id": 3013,
    "title": "Juusenshi Gulkeeva",
 "type": "ALL"
},
{
 "mal_id": 3014,
    "title": "Gon",
 "type": "ALL"
},
{
 "mal_id": 3015,
    "title": "Catblue: Dynamite",
 "type": "ALL"
},
{
 "mal_id": 3016,
    "title": "Kikou Sennyo Rouran",
 "type": "ALL"
},
{
 "mal_id": 3017,
    "title": "Chou Kousoku Gran Doll",
 "type": "ALL"
},
{
 "mal_id": 3018,
    "title": "Kochira Katsushikaku Kameari Kouenmae Hashutsujo The Movie",
 "type": "ALL"
},
{
 "mal_id": 3019,
    "title": "Uchuu no Kishi Tekkaman Blade OVA: Missing Link",
 "type": "ALL"
},
{
 "mal_id": 3020,
    "title": "Pokemon Masters: Trainers Great Gathering Special Animation",
 "type": "ALL"
},
{
 "mal_id": 3021,
    "title": "Beyblade Burst Dynamite Battle",
 "type": "ALL"
},
{
 "mal_id": 3022,
    "title": "Chikyuu Bouei Kazoku",
 "type": "ALL"
},
{
 "mal_id": 3023,
    "title": "Docchi mo Maid",
 "type": "ALL"
},
{
 "mal_id": 3024,
    "title": "Time Bokan Series: Yattodetaman",
 "type": "ALL"
},
{
 "mal_id": 3025,
    "title": "Lupin III 3DCG",
 "type": "ALL"
},
{
 "mal_id": 3026,
    "title": "Juuni Senshi Bakuretsu Eto Ranger",
 "type": "ALL"
},
{
 "mal_id": 3027,
    "title": "Tokyo Juushouden",
 "type": "ALL"
},
{
 "mal_id": 3028,
    "title": "Mobile Suit SD Gundam Festival",
 "type": "ALL"
},
{
 "mal_id": 3029,
    "title": "Makyou Gaiden Le Deus",
 "type": "ALL"
},
{
 "mal_id": 3030,
    "title": "Tetsujin 28-gou (1980)",
 "type": "ALL"
},
{
 "mal_id": 3031,
    "title": "Cyborg 009: Kaijuu Sensou",
 "type": "ALL"
},
{
 "mal_id": 3032,
    "title": "Jian Wang 3: Xia Gan Yi Dan Shen Jianxin",
 "type": "ALL"
},
{
 "mal_id": 3033,
    "title": "Birthday Boy",
 "type": "ALL"
},
{
 "mal_id": 3034,
    "title": "Shin Kaitei Gunkan",
 "type": "ALL"
},
{
 "mal_id": 3035,
    "title": "Unkai no Meikyuu Zeguy",
 "type": "ALL"
},
{
 "mal_id": 3036,
    "title": "Ai Zai Xiyuan Qian",
 "type": "ALL"
},
{
 "mal_id": 3037,
    "title": "Kishin Douji Zenki Gaiden: Anki Kitan",
 "type": "ALL"
},
{
 "mal_id": 3038,
    "title": "Shanhe Jian Xin 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3039,
    "title": "Doamaiger D",
 "type": "ALL"
},
{
 "mal_id": 3040,
    "title": "Ling Jian Zun 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3041,
    "title": "Wan Jie Xian Zong 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3042,
    "title": "Transformers: Scramble City",
 "type": "ALL"
},
{
 "mal_id": 3043,
    "title": "Cyborg 009: The Reopening",
 "type": "ALL"
},
{
 "mal_id": 3044,
    "title": "Hareluya II Boy",
 "type": "ALL"
},
{
 "mal_id": 3045,
    "title": "Infini-T Force Movie: Gatchaman - Saraba Tomo yo",
 "type": "ALL"
},
{
 "mal_id": 3046,
    "title": "Dog Soldier",
 "type": "ALL"
},
{
 "mal_id": 3047,
    "title": "Kemurikusa",
 "type": "ALL"
},
{
 "mal_id": 3048,
    "title": "M3: Sono Kuroki Hagane Recap",
 "type": "ALL"
},
{
 "mal_id": 3049,
    "title": "Transfer",
 "type": "ALL"
},
{
 "mal_id": 3050,
    "title": "Tenkuu Senki Shurato: Sousei e no Anto",
 "type": "ALL"
},
{
 "mal_id": 3051,
    "title": "Ling Jian Zun 4th Season",
 "type": "ALL"
},
{
 "mal_id": 3052,
    "title": "Dash! Yonkurou",
 "type": "ALL"
},
{
 "mal_id": 3053,
    "title": "Condom Battler Gorou",
 "type": "ALL"
},
{
 "mal_id": 3054,
    "title": "Urban Square: Kohaku no Tsuigeki",
 "type": "ALL"
},
{
 "mal_id": 3055,
    "title": "Andromeda Stories",
 "type": "ALL"
},
{
 "mal_id": 3056,
    "title": "Uchuu Senkan Yamato 2205: Aratanaru Tabidachi - Koushou - Stasha",
 "type": "ALL"
},
{
 "mal_id": 3057,
    "title": "Healin' Good♡Precure Movie: Yume no Machi de Kyun! Tto GoGo! Dai Henshin!!",
 "type": "ALL"
},
{
 "mal_id": 3058,
    "title": "Juushin Liger",
 "type": "ALL"
},
{
 "mal_id": 3059,
    "title": "Dragon Slayer Eiyuu Densetsu: Ouji no Tabidachi",
 "type": "ALL"
},
{
 "mal_id": 3060,
    "title": "Aoki Ryuusei SPT Layzner OVA",
 "type": "ALL"
},
{
 "mal_id": 3061,
    "title": "Kizuoibito",
 "type": "ALL"
},
{
 "mal_id": 3062,
    "title": "Relic Armor Legaciam",
 "type": "ALL"
},
{
 "mal_id": 3063,
    "title": "Tactical Roar Special",
 "type": "ALL"
},
{
 "mal_id": 3064,
    "title": "Kingsglaive: FFXV Fan Kansha Tokubetsu Movie",
 "type": "ALL"
},
{
 "mal_id": 3065,
    "title": "Yamato 2520",
 "type": "ALL"
},
{
 "mal_id": 3066,
    "title": "Soukyuu no Fafner: Dead Aggressor - Exodus Special",
 "type": "ALL"
},
{
 "mal_id": 3067,
    "title": "Submarine Super 99",
 "type": "ALL"
},
{
 "mal_id": 3068,
    "title": "Shenmue: The Movie",
 "type": "ALL"
},
{
 "mal_id": 3069,
    "title": "Bobobo-bo Bo-bobo Recap",
 "type": "ALL"
},
{
 "mal_id": 3070,
    "title": "Good Morning Althea",
 "type": "ALL"
},
{
 "mal_id": 3071,
    "title": "Ozanari Dungeon: Kaze no Tou",
 "type": "ALL"
},
{
 "mal_id": 3072,
    "title": "Ariel Visual",
 "type": "ALL"
},
{
 "mal_id": 3073,
    "title": "Street Fighter II: Yomigaeru Fujiwara-Kyou - Toki wo Kaketa Fighter-tachi",
 "type": "ALL"
},
{
 "mal_id": 3074,
    "title": "Dinghai Fusheng Lu",
 "type": "ALL"
},
{
 "mal_id": 3075,
    "title": "Makasete Iruka!",
 "type": "ALL"
},
{
 "mal_id": 3076,
    "title": "Hon Ran",
 "type": "ALL"
},
{
 "mal_id": 3077,
    "title": "OZ",
 "type": "ALL"
},
{
 "mal_id": 3078,
    "title": "Ninpuu Kamui Gaiden",
 "type": "ALL"
},
{
 "mal_id": 3079,
    "title": "Mobile Suit SD Gundam Musha, Knight, Commando",
 "type": "ALL"
},
{
 "mal_id": 3080,
    "title": "Walking Meat",
 "type": "ALL"
},
{
 "mal_id": 3081,
    "title": "Goal FH: Field Hunter",
 "type": "ALL"
},
{
 "mal_id": 3082,
    "title": "Duel Masters Zero",
 "type": "ALL"
},
{
 "mal_id": 3083,
    "title": "Keroro Gunsou: KeroZero Shupattsudayo! Zeninshuugou!",
 "type": "ALL"
},
{
 "mal_id": 3084,
    "title": "Great Mazinger tai Getter Robo G: Kuuchuu Daigekitotsu",
 "type": "ALL"
},
{
 "mal_id": 3085,
    "title": "Shin Megami Tensei Devil Children: Light & Dark",
 "type": "ALL"
},
{
 "mal_id": 3086,
    "title": "Machine Robo: Cronos no Dai Gyakushuu",
 "type": "ALL"
},
{
 "mal_id": 3087,
    "title": "Mobile Suit Gundam UC: A Phantom World",
 "type": "ALL"
},
{
 "mal_id": 3088,
    "title": "Uchuu Kuubo Blue Noah",
 "type": "ALL"
},
{
 "mal_id": 3089,
    "title": "Kyuukyoku no Sex Adventure Kamasutra",
 "type": "ALL"
},
{
 "mal_id": 3090,
    "title": "Sailor Victory",
 "type": "ALL"
},
{
 "mal_id": 3091,
    "title": "Kurenai Sanshirou",
 "type": "ALL"
},
{
 "mal_id": 3092,
    "title": "Shi Zhi Ge: Hua Yu Yan De Kuangxiang Shi",
 "type": "ALL"
},
{
 "mal_id": 3093,
    "title": "Bannou Bunka Neko-Musume Specials",
 "type": "ALL"
},
{
 "mal_id": 3094,
    "title": "Devilman Memorial",
 "type": "ALL"
},
{
 "mal_id": 3095,
    "title": "Arad: Suming Zhi Men",
 "type": "ALL"
},
{
 "mal_id": 3096,
    "title": "Shishigari",
 "type": "ALL"
},
{
 "mal_id": 3097,
    "title": "Twin Signal: Family Game",
 "type": "ALL"
},
{
 "mal_id": 3098,
    "title": "Pokemon: Aki no Special",
 "type": "ALL"
},
{
 "mal_id": 3099,
    "title": "Xue Ying Ling Zhu Zhi Qi Yu Pian",
 "type": "ALL"
},
{
 "mal_id": 3100,
    "title": "Tekkon Kinkreet Pilot",
 "type": "ALL"
},
{
 "mal_id": 3101,
    "title": "Sex: Prologue",
 "type": "ALL"
},
{
 "mal_id": 3102,
    "title": "Mini Toji: Kanami-Mihono no Toji Miko Taidou-hen 205-byou de Shoukai Tokuban!",
 "type": "ALL"
},
{
 "mal_id": 3103,
    "title": "Gall Force: The Revolution",
 "type": "ALL"
},
{
 "mal_id": 3104,
    "title": "Last Orders",
 "type": "ALL"
},
{
 "mal_id": 3105,
    "title": "Planet:Valkyrie",
 "type": "ALL"
},
{
 "mal_id": 3106,
    "title": "Ichirin-sha",
 "type": "ALL"
},
{
 "mal_id": 3107,
    "title": "The Impression of First Gundam",
 "type": "ALL"
},
{
 "mal_id": 3108,
    "title": "Shutsugeki! Machine Robo Rescue",
 "type": "ALL"
},
{
 "mal_id": 3109,
    "title": "The Legend of Heroes: Sen no Kiseki Northern War",
 "type": "ALL"
},
{
 "mal_id": 3110,
    "title": "Karakuri Kiden: Hiwou Senki",
 "type": "ALL"
},
{
 "mal_id": 3111,
    "title": "Growlanser IV: Wayfarer of the Time",
 "type": "ALL"
},
{
 "mal_id": 3112,
    "title": "Nayuta",
 "type": "ALL"
},
{
 "mal_id": 3113,
    "title": "Choujuu Kishin Dancougar: God Bless Dancougar",
 "type": "ALL"
},
{
 "mal_id": 3114,
    "title": "Dragon Ball Z: The Real 4-D at Super Tenkaichi Budokai",
 "type": "ALL"
},
{
 "mal_id": 3115,
    "title": "Qin Xia",
 "type": "ALL"
},
{
 "mal_id": 3116,
    "title": "Shaonian Ge Xing",
 "type": "ALL"
},
{
 "mal_id": 3117,
    "title": "Tiger & Bunny Recaps",
 "type": "ALL"
},
{
 "mal_id": 3118,
    "title": "Dubu Xiaoyao",
 "type": "ALL"
},
{
 "mal_id": 3119,
    "title": "Crayon Shin-chan Gaiden: Kazokuzure Ookami",
 "type": "ALL"
},
{
 "mal_id": 3120,
    "title": "Mushrambo (2008)",
 "type": "ALL"
},
{
 "mal_id": 3121,
    "title": "Tarou-san no Kisha",
 "type": "ALL"
},
{
 "mal_id": 3122,
    "title": "Hoshi no Kirby:  Taose!! Koukaku Majuu Ebizou",
 "type": "ALL"
},
{
 "mal_id": 3123,
    "title": "Ten Little Gall Force",
 "type": "ALL"
},
{
 "mal_id": 3124,
    "title": "Shinshaku Sengoku Eiyuu Densetsu: Sanada Juu Yuushi The Animation",
 "type": "ALL"
},
{
 "mal_id": 3125,
    "title": "Chou Mashin Eiyuuden Wataru",
 "type": "ALL"
},
{
 "mal_id": 3126,
    "title": "Chokin Senshi Cashman",
 "type": "ALL"
},
{
 "mal_id": 3127,
    "title": "Fuuma no Kojirou: Seiken Sensou-hen",
 "type": "ALL"
},
{
 "mal_id": 3128,
    "title": "Azure Nihon Data Center",
 "type": "ALL"
},
{
 "mal_id": 3129,
    "title": "Eightman",
 "type": "ALL"
},
{
 "mal_id": 3130,
    "title": "Stratos 4: Logbook",
 "type": "ALL"
},
{
 "mal_id": 3131,
    "title": "Yao Shen Ji 5th Season",
 "type": "ALL"
},
{
 "mal_id": 3132,
    "title": "Hengen Taima Yakou Karura Mau! Nara Onryou Emaki",
 "type": "ALL"
},
{
 "mal_id": 3133,
    "title": "Ninjala (TV)",
 "type": "ALL"
},
{
 "mal_id": 3134,
    "title": "Duel Masters (2017)",
 "type": "ALL"
},
{
 "mal_id": 3135,
    "title": "Ring ni Kakero 1: Kage Dou-hen",
 "type": "ALL"
},
{
 "mal_id": 3136,
    "title": "Exper Zenon",
 "type": "ALL"
},
{
 "mal_id": 3137,
    "title": "Flag Director's Edition: Issenman no Kufura no Kiroku",
 "type": "ALL"
},
{
 "mal_id": 3138,
    "title": "Monkey Punch no Sekai: Alice",
 "type": "ALL"
},
{
 "mal_id": 3139,
    "title": "Douluo Dalu: Feng Qi Tang Men",
 "type": "ALL"
},
{
 "mal_id": 3140,
    "title": "Ninkuu (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3141,
    "title": "Kagaku Ninja-tai Gatchaman (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3142,
    "title": "Galactic Patrol Lensman",
 "type": "ALL"
},
{
 "mal_id": 3143,
    "title": "Genesis Climber Mospeada: Love, Live, Alive",
 "type": "ALL"
},
{
 "mal_id": 3144,
    "title": "Hyper-Psychic Geo Garaga",
 "type": "ALL"
},
{
 "mal_id": 3145,
    "title": "Idol Fight Suchie-Pai 2",
 "type": "ALL"
},
{
 "mal_id": 3146,
    "title": "Tetsuwan Atom: Uchuu no Yuusha",
 "type": "ALL"
},
{
 "mal_id": 3147,
    "title": "Dragon Knight Gaiden",
 "type": "ALL"
},
{
 "mal_id": 3148,
    "title": "Emblem Take 2",
 "type": "ALL"
},
{
 "mal_id": 3149,
    "title": "Ze Tian Ji 5th Season",
 "type": "ALL"
},
{
 "mal_id": 3150,
    "title": "Shakotan★Boogie",
 "type": "ALL"
},
{
 "mal_id": 3151,
    "title": "Wan Jie Xian Zong 4th Season",
 "type": "ALL"
},
{
 "mal_id": 3152,
    "title": "Zero Seiki Movie 2: Herlock",
 "type": "ALL"
},
{
 "mal_id": 3153,
    "title": "Gekijou Tanpen Macross Frontier: Toki no Meikyuu",
 "type": "ALL"
},
{
 "mal_id": 3154,
    "title": "Generation of Chaos Next: Chikai no Pendant",
 "type": "ALL"
},
{
 "mal_id": 3155,
    "title": "Shin-Men",
 "type": "ALL"
},
{
 "mal_id": 3156,
    "title": "Master of Torque",
 "type": "ALL"
},
{
 "mal_id": 3157,
    "title": "Arei no Kagami: Way to the Virgin Space",
 "type": "ALL"
},
{
 "mal_id": 3158,
    "title": "Geisters: Fractions of the Earth",
 "type": "ALL"
},
{
 "mal_id": 3159,
    "title": "Pink Mizu Dorobou Ame Dorobou",
 "type": "ALL"
},
{
 "mal_id": 3160,
    "title": "Qin Shi Mingyue: Tian Xing Jiu Ge",
 "type": "ALL"
},
{
 "mal_id": 3161,
    "title": "Beast Saga",
 "type": "ALL"
},
{
 "mal_id": 3162,
    "title": "Gundam: G no Reconguista Movie II - Bellri Gekishin",
 "type": "ALL"
},
{
 "mal_id": 3163,
    "title": "Arabian Night: Sindbad no Bouken",
 "type": "ALL"
},
{
 "mal_id": 3164,
    "title": "Umi kara no Shisha",
 "type": "ALL"
},
{
 "mal_id": 3165,
    "title": "Ling Long: Incarnation Part 2",
 "type": "ALL"
},
{
 "mal_id": 3166,
    "title": "Ali Baba to 40-hiki no Touzoku",
 "type": "ALL"
},
{
 "mal_id": 3167,
    "title": "Crayon Shin-chan Gaiden: Omocha Wars",
 "type": "ALL"
},
{
 "mal_id": 3168,
    "title": "Armageddon",
 "type": "ALL"
},
{
 "mal_id": 3169,
    "title": "Yuan Long 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3170,
    "title": "Area 88 Movie",
 "type": "ALL"
},
{
 "mal_id": 3171,
    "title": "Reyon Densetsu Flair",
 "type": "ALL"
},
{
 "mal_id": 3172,
    "title": "Choujuu Kishin Dancougar: Ushinawareta Mono-tachi e no Requiem",
 "type": "ALL"
},
{
 "mal_id": 3173,
    "title": "Yi Nian Yong Heng: Chuan Cheng Pian",
 "type": "ALL"
},
{
 "mal_id": 3174,
    "title": "Armored Core: Fort Tower Song",
 "type": "ALL"
},
{
 "mal_id": 3175,
    "title": "Pokemon Diamond & Pearl Atsumare! Pokemon Planet Center",
 "type": "ALL"
},
{
 "mal_id": 3176,
    "title": "Joker: Marginal City",
 "type": "ALL"
},
{
 "mal_id": 3177,
    "title": "Monkey Turn",
 "type": "ALL"
},
{
 "mal_id": 3178,
    "title": "Taichi Senjimon",
 "type": "ALL"
},
{
 "mal_id": 3179,
    "title": "Ariel Deluxe",
 "type": "ALL"
},
{
 "mal_id": 3180,
    "title": "Chu Feng: Yi Dian Zhi Zi",
 "type": "ALL"
},
{
 "mal_id": 3181,
    "title": "Xue Ying Ling Zhu 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3182,
    "title": "Gakuentoshi Varanoir Joukan",
 "type": "ALL"
},
{
 "mal_id": 3183,
    "title": "Slime Boukenki: Umi da, Yeah!",
 "type": "ALL"
},
{
 "mal_id": 3184,
    "title": "Tairiki Tarou no Mucha Shuugyou",
 "type": "ALL"
},
{
 "mal_id": 3185,
    "title": "Explorer Woman Ray",
 "type": "ALL"
},
{
 "mal_id": 3186,
    "title": "Ninja Bugei-chou",
 "type": "ALL"
},
{
 "mal_id": 3187,
    "title": "Naikaku Kenryoku Hanzai Kyousei Torishimarikan Zaizen Joutarou",
 "type": "ALL"
},
{
 "mal_id": 3188,
    "title": "Marvel Future Avengers 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3189,
    "title": "Mirai Robo Daltanias",
 "type": "ALL"
},
{
 "mal_id": 3190,
    "title": "Saint Seiya: Gold Saints Data File",
 "type": "ALL"
},
{
 "mal_id": 3191,
    "title": "Yuukai Anna",
 "type": "ALL"
},
{
 "mal_id": 3192,
    "title": "Choujikuu Romanesque Samy: Missing 99",
 "type": "ALL"
},
{
 "mal_id": 3193,
    "title": "Gundam: G no Reconguista Movie III - Uchuu kara no Isan",
 "type": "ALL"
},
{
 "mal_id": 3194,
    "title": "Next Senki Ehrgeiz",
 "type": "ALL"
},
{
 "mal_id": 3195,
    "title": "Wakusei Daikaiju Negadon",
 "type": "ALL"
},
{
 "mal_id": 3196,
    "title": "Chou Kousoku Galvion",
 "type": "ALL"
},
{
 "mal_id": 3197,
    "title": "Time Slip Ichimannen: Prime Rose",
 "type": "ALL"
},
{
 "mal_id": 3198,
    "title": "Zinba",
 "type": "ALL"
},
{
 "mal_id": 3199,
    "title": "Delpower X Bakuhatsu Miracle Genki!",
 "type": "ALL"
},
{
 "mal_id": 3200,
    "title": "Kung Fu Liaoli Niang",
 "type": "ALL"
},
{
 "mal_id": 3201,
    "title": "Qiang Shen Ji",
 "type": "ALL"
},
{
 "mal_id": 3202,
    "title": "Landreaall",
 "type": "ALL"
},
{
 "mal_id": 3203,
    "title": "Mononogatari",
 "type": "ALL"
},
{
 "mal_id": 3204,
    "title": "Ice Movie",
 "type": "ALL"
},
{
 "mal_id": 3205,
    "title": "Wan Jie Chun Qiu",
 "type": "ALL"
},
{
 "mal_id": 3206,
    "title": "Getsumen To Heiki Mina Specials",
 "type": "ALL"
},
{
 "mal_id": 3207,
    "title": "Elysium",
 "type": "ALL"
},
{
 "mal_id": 3208,
    "title": "Ore wa Teppei",
 "type": "ALL"
},
{
 "mal_id": 3209,
    "title": "Wo Jiao Bai Xiaofei",
 "type": "ALL"
},
{
 "mal_id": 3210,
    "title": "02",
 "type": "ALL"
},
{
 "mal_id": 3211,
    "title": "Wo Jia Da Shixiong Shi Ge Fanpai",
 "type": "ALL"
},
{
 "mal_id": 3212,
    "title": "Xi Xing Ji",
 "type": "ALL"
},
{
 "mal_id": 3213,
    "title": "Techno Police 21C",
 "type": "ALL"
},
{
 "mal_id": 3214,
    "title": "Generation of Chaos III: Toki no Fuuin",
 "type": "ALL"
},
{
 "mal_id": 3215,
    "title": "Zettai Shougeki: Platonic Heart Picture Drama",
 "type": "ALL"
},
{
 "mal_id": 3216,
    "title": "Firestorm",
 "type": "ALL"
},
{
 "mal_id": 3217,
    "title": "Akuu Daisakusen Srungle",
 "type": "ALL"
},
{
 "mal_id": 3218,
    "title": "Astroganger",
 "type": "ALL"
},
{
 "mal_id": 3219,
    "title": "Fanren Xiu Xian Chuan: Yan Jia Bao Dazhan",
 "type": "ALL"
},
{
 "mal_id": 3220,
    "title": "Kuusou Kagaku Sekai Gulliver Boy",
 "type": "ALL"
},
{
 "mal_id": 3221,
    "title": "Princess Army: Wedding★Combat",
 "type": "ALL"
},
{
 "mal_id": 3222,
    "title": "Mini Toji: Yume",
 "type": "ALL"
},
{
 "mal_id": 3223,
    "title": "Sasuga no Sarutobi",
 "type": "ALL"
},
{
 "mal_id": 3224,
    "title": "Uchuu Senshi Baldios (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3225,
    "title": "Hi-Speed Jecy",
 "type": "ALL"
},
{
 "mal_id": 3226,
    "title": "Mang Huang Ji",
 "type": "ALL"
},
{
 "mal_id": 3227,
    "title": "Xingchen Bian: Xingchen Yao Hai",
 "type": "ALL"
},
{
 "mal_id": 3228,
    "title": "Ryuuseiki Gakusaver",
 "type": "ALL"
},
{
 "mal_id": 3229,
    "title": "Uchuu Enban Dai-Sensou",
 "type": "ALL"
},
{
 "mal_id": 3230,
    "title": "Kamen Rider SD Kaiki?! Kumo Otoko",
 "type": "ALL"
},
{
 "mal_id": 3231,
    "title": "Kaitei Choutokkyuu: Marine Express",
 "type": "ALL"
},
{
 "mal_id": 3232,
    "title": "Majuu Sensen",
 "type": "ALL"
},
{
 "mal_id": 3233,
    "title": "Cluster Edge Specials",
 "type": "ALL"
},
{
 "mal_id": 3234,
    "title": "Karasu Tengu Kabuto: Ougon no Me no Kemono",
 "type": "ALL"
},
{
 "mal_id": 3235,
    "title": "Wolf Guy",
 "type": "ALL"
},
{
 "mal_id": 3236,
    "title": "Bakugan: Geogan Rising",
 "type": "ALL"
},
{
 "mal_id": 3237,
    "title": "Genji Tsuushin Agedama",
 "type": "ALL"
},
{
 "mal_id": 3238,
    "title": "Kyokujitsu no Kantai",
 "type": "ALL"
},
{
 "mal_id": 3239,
    "title": "Tropical-Rouge! Precure Movie: Yuki no Princess to Kiseki no Yubiwa!",
 "type": "ALL"
},
{
 "mal_id": 3240,
    "title": "Keroro Gunsou: Mushakero Ohirome Sengoku Ranstar Dai Battle",
 "type": "ALL"
},
{
 "mal_id": 3241,
    "title": "O-parts: Oman",
 "type": "ALL"
},
{
 "mal_id": 3242,
    "title": "Uchuu Kaizoku Mito no Daibouken: Futari no Joou-sama",
 "type": "ALL"
},
{
 "mal_id": 3243,
    "title": "Beast Wars Second Chou Seimeitai Transformers: Lio Convoy Kiki Ippatsu! Movie",
 "type": "ALL"
},
{
 "mal_id": 3244,
    "title": "Zhen Hun Jie Recaps",
 "type": "ALL"
},
{
 "mal_id": 3245,
    "title": "Sasuke",
 "type": "ALL"
},
{
 "mal_id": 3246,
    "title": "Love Like Aliens",
 "type": "ALL"
},
{
 "mal_id": 3247,
    "title": "Xing Wushen Jue",
 "type": "ALL"
},
{
 "mal_id": 3248,
    "title": "Rusty Nail",
 "type": "ALL"
},
{
 "mal_id": 3249,
    "title": "Fuuma no Kojirou: Fuuma Hanran-hen",
 "type": "ALL"
},
{
 "mal_id": 3250,
    "title": "Fight!!",
 "type": "ALL"
},
{
 "mal_id": 3251,
    "title": "Hanasaku Kizuna no Romantan",
 "type": "ALL"
},
{
 "mal_id": 3252,
    "title": "Monster Strike The Animation Episode 0",
 "type": "ALL"
},
{
 "mal_id": 3253,
    "title": "Tatakae!! Ramenman",
 "type": "ALL"
},
{
 "mal_id": 3254,
    "title": "Choujin Locke: Lord Leon",
 "type": "ALL"
},
{
 "mal_id": 3255,
    "title": "Duel Masters Victory",
 "type": "ALL"
},
{
 "mal_id": 3256,
    "title": "Dankichi-jima no Olympic Taikai",
 "type": "ALL"
},
{
 "mal_id": 3257,
    "title": "Arad: Gyakuten no Wa",
 "type": "ALL"
},
{
 "mal_id": 3258,
    "title": "Cool Cool Bye",
 "type": "ALL"
},
{
 "mal_id": 3259,
    "title": "Ai Zai Xiyuan Qian 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3260,
    "title": "Honoo no Mirage: Muyou no Michi",
 "type": "ALL"
},
{
 "mal_id": 3261,
    "title": "Duel Masters VSRF",
 "type": "ALL"
},
{
 "mal_id": 3262,
    "title": "Qin Shi Mingyue: Zhu Zi Bai Jia",
 "type": "ALL"
},
{
 "mal_id": 3263,
    "title": "MonHun Nikki Girigiri Airou Mura: Airou Kiki Ippatsu",
 "type": "ALL"
},
{
 "mal_id": 3264,
    "title": "Zero Seiki Movie 3: Maetel",
 "type": "ALL"
},
{
 "mal_id": 3265,
    "title": "Kamen Rider Den-O: Imagin Anime",
 "type": "ALL"
},
{
 "mal_id": 3266,
    "title": "Tomica Kizuna Gattai: Earth Granner",
 "type": "ALL"
},
{
 "mal_id": 3267,
    "title": "Kinnikuman (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3268,
    "title": "Muu no Hakugei",
 "type": "ALL"
},
{
 "mal_id": 3269,
    "title": "Wang Gu Shenhua Zhi Tian Xuanzhe",
 "type": "ALL"
},
{
 "mal_id": 3270,
    "title": "Dead Heat",
 "type": "ALL"
},
{
 "mal_id": 3271,
    "title": "Jue Shi Wu Hun",
 "type": "ALL"
},
{
 "mal_id": 3272,
    "title": "Lord of Vermilion III Special Anime Movie",
 "type": "ALL"
},
{
 "mal_id": 3273,
    "title": "Puso Ni Comi",
 "type": "ALL"
},
{
 "mal_id": 3274,
    "title": "Circuit Angel: Ketsui no Starting Grid",
 "type": "ALL"
},
{
 "mal_id": 3275,
    "title": "Mugen Kouro",
 "type": "ALL"
},
{
 "mal_id": 3276,
    "title": "A.F",
 "type": "ALL"
},
{
 "mal_id": 3277,
    "title": "Nekketsu Saikyou Go-Saurer",
 "type": "ALL"
},
{
 "mal_id": 3278,
    "title": "Haou Taikei Ryuu Knight: Adeu Legend",
 "type": "ALL"
},
{
 "mal_id": 3279,
    "title": "High School Agent",
 "type": "ALL"
},
{
 "mal_id": 3280,
    "title": "Qin Shi Mingyue: Wanli Changcheng",
 "type": "ALL"
},
{
 "mal_id": 3281,
    "title": "Karakuri Circus",
 "type": "ALL"
},
{
 "mal_id": 3282,
    "title": "Bari Bari Densetsu",
 "type": "ALL"
},
{
 "mal_id": 3283,
    "title": "Feng Yu Zhou",
 "type": "ALL"
},
{
 "mal_id": 3284,
    "title": "Dynamic Super Robots Soushingekki",
 "type": "ALL"
},
{
 "mal_id": 3285,
    "title": "Kamen Rider Fourze x Crayon Shin-chan",
 "type": "ALL"
},
{
 "mal_id": 3286,
    "title": "Benkei tai Ushiwaka",
 "type": "ALL"
},
{
 "mal_id": 3287,
    "title": "Moeru! Oniisan",
 "type": "ALL"
},
{
 "mal_id": 3288,
    "title": "Wu Shang Shen Di 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3289,
    "title": "Super Child",
 "type": "ALL"
},
{
 "mal_id": 3290,
    "title": "AWOL",
 "type": "ALL"
},
{
 "mal_id": 3291,
    "title": "Bounty Hunter: The Hard",
 "type": "ALL"
},
{
 "mal_id": 3292,
    "title": "Fanren Xiu Xian Chuan: Fanren Feng Qi Tian Nan Er",
 "type": "ALL"
},
{
 "mal_id": 3293,
    "title": "Tokusou Kihei Dorvack",
 "type": "ALL"
},
{
 "mal_id": 3294,
    "title": "Tomoe ga Yuku!",
 "type": "ALL"
},
{
 "mal_id": 3295,
    "title": "Duel Masters VSR",
 "type": "ALL"
},
{
 "mal_id": 3296,
    "title": "Golden Batman",
 "type": "ALL"
},
{
 "mal_id": 3297,
    "title": "Me gumi no Daigo: Kajiba no Baka Yarou",
 "type": "ALL"
},
{
 "mal_id": 3298,
    "title": "Injuu Seisen XX",
 "type": "ALL"
},
{
 "mal_id": 3299,
    "title": "Choujin Locke: Shinsekai Sentai",
 "type": "ALL"
},
{
 "mal_id": 3300,
    "title": "Duel Masters!",
 "type": "ALL"
},
{
 "mal_id": 3301,
    "title": "Jetter Mars",
 "type": "ALL"
},
{
 "mal_id": 3302,
    "title": "Qin Shi Mingyue: Ye Jin Tianming",
 "type": "ALL"
},
{
 "mal_id": 3303,
    "title": "Ark",
 "type": "ALL"
},
{
 "mal_id": 3304,
    "title": "Ninjutsu Hinotama Kozou: Edo no Maki",
 "type": "ALL"
},
{
 "mal_id": 3305,
    "title": "Track City",
 "type": "ALL"
},
{
 "mal_id": 3306,
    "title": "Ultraman USA",
 "type": "ALL"
},
{
 "mal_id": 3307,
    "title": "Lost Utopia",
 "type": "ALL"
},
{
 "mal_id": 3308,
    "title": "Kinnikuman II Sei: Muscle Ninjin Soudatsu sen! Choujin Daisensou",
 "type": "ALL"
},
{
 "mal_id": 3309,
    "title": "Nano Invaders",
 "type": "ALL"
},
{
 "mal_id": 3310,
    "title": "Hibari no Yadogae",
 "type": "ALL"
},
{
 "mal_id": 3311,
    "title": "Chou no Sainan",
 "type": "ALL"
},
{
 "mal_id": 3312,
    "title": "Sakura Kakumei: Hanasaku Otome-tachi",
 "type": "ALL"
},
{
 "mal_id": 3313,
    "title": "Doubutsu Sumo Taikai",
 "type": "ALL"
},
{
 "mal_id": 3314,
    "title": "Tunshi Xingkong 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3315,
    "title": "Kosuke-sama Rikimaru-sama: Konpeitou no Ryuu",
 "type": "ALL"
},
{
 "mal_id": 3316,
    "title": "Shin Onimusha: Dawn of Dreams the Story",
 "type": "ALL"
},
{
 "mal_id": 3317,
    "title": "Battle Can²",
 "type": "ALL"
},
{
 "mal_id": 3318,
    "title": "Juusenki L-Gaim III: Full Metal Soldier",
 "type": "ALL"
},
{
 "mal_id": 3319,
    "title": "Destiny Child",
 "type": "ALL"
},
{
 "mal_id": 3320,
    "title": "Majokko Club Yoningumi: A Kuukan kara no Alien X",
 "type": "ALL"
},
{
 "mal_id": 3321,
    "title": "Senjuushi: Kijuushi-tachi no Happy Birthday!",
 "type": "ALL"
},
{
 "mal_id": 3322,
    "title": "Hairpin Double",
 "type": "ALL"
},
{
 "mal_id": 3323,
    "title": "Kikou Keisatsu Metal Jack",
 "type": "ALL"
},
{
 "mal_id": 3324,
    "title": "Maze☆Bakunetsu Jikuu: Hot Springs",
 "type": "ALL"
},
{
 "mal_id": 3325,
    "title": "Kara The Animation",
 "type": "ALL"
},
{
 "mal_id": 3326,
    "title": "Xiong Bing Lian",
 "type": "ALL"
},
{
 "mal_id": 3327,
    "title": "Yakyuukyou no Uta",
 "type": "ALL"
},
{
 "mal_id": 3328,
    "title": "Juan Siliang",
 "type": "ALL"
},
{
 "mal_id": 3329,
    "title": "Nezumi no Rusuban",
 "type": "ALL"
},
{
 "mal_id": 3330,
    "title": "Believe",
 "type": "ALL"
},
{
 "mal_id": 3331,
    "title": "Kouryuu no Mimi: Mina no Shou",
 "type": "ALL"
},
{
 "mal_id": 3332,
    "title": "Cure Miracle to Mofurun no Mahou Lesson",
 "type": "ALL"
},
{
 "mal_id": 3333,
    "title": "Bavi Stock",
 "type": "ALL"
},
{
 "mal_id": 3334,
    "title": "Magnerobo Ga-Keen",
 "type": "ALL"
},
{
 "mal_id": 3335,
    "title": "Ginga Reppuu Baxingar",
 "type": "ALL"
},
{
 "mal_id": 3336,
    "title": "Ginga Shippuu Sasuraiger",
 "type": "ALL"
},
{
 "mal_id": 3337,
    "title": "Vampiyan Kids: Pilot",
 "type": "ALL"
},
{
 "mal_id": 3338,
    "title": "Psychoarmor Govarian",
 "type": "ALL"
},
{
 "mal_id": 3339,
    "title": "Kyouryuu Daisensou Izenborg",
 "type": "ALL"
},
{
 "mal_id": 3340,
    "title": "Gegege no Kitarou: Nippon Bakuretsu",
 "type": "ALL"
},
{
 "mal_id": 3341,
    "title": "Nendo no Tatakai (2019)",
 "type": "ALL"
},
{
 "mal_id": 3342,
    "title": "Tian Huang Zhan Shen",
 "type": "ALL"
},
{
 "mal_id": 3343,
    "title": "Uchuu Taitei God Sigma",
 "type": "ALL"
},
{
 "mal_id": 3344,
    "title": "Magma Taishi",
 "type": "ALL"
},
{
 "mal_id": 3345,
    "title": "Gegege no Kitarou: Daikaijuu",
 "type": "ALL"
},
{
 "mal_id": 3346,
    "title": "Rokudenashi Blues 1993",
 "type": "ALL"
},
{
 "mal_id": 3347,
    "title": "Croket!",
 "type": "ALL"
},
{
 "mal_id": 3348,
    "title": "Qin Shi Ming Yue 3D: Dianying Longteng Wanli",
 "type": "ALL"
},
{
 "mal_id": 3349,
    "title": "Scoopers",
 "type": "ALL"
},
{
 "mal_id": 3350,
    "title": "Toukiden: The Age of Demons - Introduction",
 "type": "ALL"
},
{
 "mal_id": 3351,
    "title": "Xian Feng Jianyu Lu",
 "type": "ALL"
},
{
 "mal_id": 3352,
    "title": "Dochinpira",
 "type": "ALL"
},
{
 "mal_id": 3353,
    "title": "Ling Long: Incarnation Middle Chapter",
 "type": "ALL"
},
{
 "mal_id": 3354,
    "title": "Mahjong Hishouden: Naki no Ryuu",
 "type": "ALL"
},
{
 "mal_id": 3355,
    "title": "Cyborg 009: The Cyborg Soldier - Kami no Ubugoe",
 "type": "ALL"
},
{
 "mal_id": 3356,
    "title": "Duel Masters VS",
 "type": "ALL"
},
{
 "mal_id": 3357,
    "title": "Ar:pieL - 6-seosgae-ui Unmyeong",
 "type": "ALL"
},
{
 "mal_id": 3358,
    "title": "Blue Seagull",
 "type": "ALL"
},
{
 "mal_id": 3359,
    "title": "Issunboushi: Chibisuke Monogatari",
 "type": "ALL"
},
{
 "mal_id": 3360,
    "title": "Compiler Festa",
 "type": "ALL"
},
{
 "mal_id": 3361,
    "title": "Haruwo",
 "type": "ALL"
},
{
 "mal_id": 3362,
    "title": "Kuiba: Zhi Shiwanhuoji",
 "type": "ALL"
},
{
 "mal_id": 3363,
    "title": "Wo Shi Da Shenxian",
 "type": "ALL"
},
{
 "mal_id": 3364,
    "title": "Junk Story: Tetsukuzu Monogatari",
 "type": "ALL"
},
{
 "mal_id": 3365,
    "title": "Hallelujah: Unmei no Sentaku",
 "type": "ALL"
},
{
 "mal_id": 3366,
    "title": "MAPS: Densetsu no Samayoeru Seijin-tachi",
 "type": "ALL"
},
{
 "mal_id": 3367,
    "title": "Toukiden Kiwami",
 "type": "ALL"
},
{
 "mal_id": 3368,
    "title": "Video Senshi Lezarion",
 "type": "ALL"
},
{
 "mal_id": 3369,
    "title": "Duel Masters Victory V3",
 "type": "ALL"
},
{
 "mal_id": 3370,
    "title": "Ai no Senshi Rainbowman",
 "type": "ALL"
},
{
 "mal_id": 3371,
    "title": "Kyomu Senshi Miroku",
 "type": "ALL"
},
{
 "mal_id": 3372,
    "title": "Qin Shi Ming Yue: Canghai Hengliu",
 "type": "ALL"
},
{
 "mal_id": 3373,
    "title": "Chiisana Kyojin Microman",
 "type": "ALL"
},
{
 "mal_id": 3374,
    "title": "Qin Shi Mingyue: Tian Xing Jiu Ge 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3375,
    "title": "Kagaku Kyuujo-tai TechnoVoyager",
 "type": "ALL"
},
{
 "mal_id": 3376,
    "title": "Haai Step Jun",
 "type": "ALL"
},
{
 "mal_id": 3377,
    "title": "Duel Masters Movie 2: Lunatic God Saga",
 "type": "ALL"
},
{
 "mal_id": 3378,
    "title": "Inazma Delivery",
 "type": "ALL"
},
{
 "mal_id": 3379,
    "title": "Wan Wan Chuushingura",
 "type": "ALL"
},
{
 "mal_id": 3380,
    "title": "Shinkansen Henkei Robo Shinkalion: Mirai kara Kita Shinsoku no ALFA-X",
 "type": "ALL"
},
{
 "mal_id": 3381,
    "title": "Tian Bao Fuyao Lu 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3382,
    "title": "Ougon Senshi Gold Lightan",
 "type": "ALL"
},
{
 "mal_id": 3383,
    "title": "Qin Shi Ming Yue: Junlin Tianxia",
 "type": "ALL"
},
{
 "mal_id": 3384,
    "title": "Duel Masters Victory V",
 "type": "ALL"
},
{
 "mal_id": 3385,
    "title": "Chouon Senshi Borgman: Lovers Rain",
 "type": "ALL"
},
{
 "mal_id": 3386,
    "title": "Wonder Beat Scramble",
 "type": "ALL"
},
{
 "mal_id": 3387,
    "title": "Ahiru Rikusentai",
 "type": "ALL"
},
{
 "mal_id": 3388,
    "title": "Semi wa Magic Cube 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3389,
    "title": "Shinkansen Henkei Robo Shinkalion Z the Animation",
 "type": "ALL"
},
{
 "mal_id": 3390,
    "title": "Time Bokan Series: Time Patroltai Otasukeman",
 "type": "ALL"
},
{
 "mal_id": 3391,
    "title": "AWM Jixian Juji",
 "type": "ALL"
},
{
 "mal_id": 3392,
    "title": "Yomigaeru Sora Pilot",
 "type": "ALL"
},
{
 "mal_id": 3393,
    "title": "Chou Dendou Robo Tetsujin 28-gou FX",
 "type": "ALL"
},
{
 "mal_id": 3394,
    "title": "Sinbi Apateu: Ghost Ball Bimil",
 "type": "ALL"
},
{
 "mal_id": 3395,
    "title": "Baku Tech! Bakugan Gachi Special",
 "type": "ALL"
},
{
 "mal_id": 3396,
    "title": "Furudera no Obake-soudou",
 "type": "ALL"
},
{
 "mal_id": 3397,
    "title": "Guilty Gear X",
 "type": "ALL"
},
{
 "mal_id": 3398,
    "title": "Big X",
 "type": "ALL"
},
{
 "mal_id": 3399,
    "title": "Dokaben",
 "type": "ALL"
},
{
 "mal_id": 3400,
    "title": "Ghost Messenger Movie",
 "type": "ALL"
},
{
 "mal_id": 3401,
    "title": "AKB48 Stage Fighter",
 "type": "ALL"
},
{
 "mal_id": 3402,
    "title": "Wellber no Monogatari: Kanashimi no Senshi Galahad no Banka",
 "type": "ALL"
},
{
 "mal_id": 3403,
    "title": "Time Bokan Series: Gyakuten Ippatsuman",
 "type": "ALL"
},
{
 "mal_id": 3404,
    "title": "Tie Shan Gongzhu",
 "type": "ALL"
},
{
 "mal_id": 3405,
    "title": "Makyuu Senjou",
 "type": "ALL"
},
{
 "mal_id": 3406,
    "title": "Wu Dong Qian Kun 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3407,
    "title": "Duel Masters!!",
 "type": "ALL"
},
{
 "mal_id": 3408,
    "title": "Pony Metal U-GAIM Promotion Film",
 "type": "ALL"
},
{
 "mal_id": 3409,
    "title": "Uchuu Majin Daikengou",
 "type": "ALL"
},
{
 "mal_id": 3410,
    "title": "Tetsuwan Atom: Ivan no Wakusei - Robot to Ningen no Yuujou",
 "type": "ALL"
},
{
 "mal_id": 3411,
    "title": "Wild 7 Another Bouryaku Unga",
 "type": "ALL"
},
{
 "mal_id": 3412,
    "title": "Izakaya no Ichiya",
 "type": "ALL"
},
{
 "mal_id": 3413,
    "title": "The Borgman: Last Battle",
 "type": "ALL"
},
{
 "mal_id": 3414,
    "title": "Shouxi Yu Ling Shi",
 "type": "ALL"
},
{
 "mal_id": 3415,
    "title": "Doubutsu Mura no Sports Day",
 "type": "ALL"
},
{
 "mal_id": 3416,
    "title": "Guilstein",
 "type": "ALL"
},
{
 "mal_id": 3417,
    "title": "Tetsujin 28-gou: Hakuchuu no Zangetsu",
 "type": "ALL"
},
{
 "mal_id": 3418,
    "title": "UFO Senshi Dai Apolon",
 "type": "ALL"
},
{
 "mal_id": 3419,
    "title": "Lightning Trap: Leina & Laika",
 "type": "ALL"
},
{
 "mal_id": 3420,
    "title": "Norakuro Nitouhei: Kyouren no Maki",
 "type": "ALL"
},
{
 "mal_id": 3421,
    "title": "Chiruran: Nibun no Ichi Special",
 "type": "ALL"
},
{
 "mal_id": 3422,
    "title": "Juusenki L-Gaim I: Pentagona Window + Lady Gavlet",
 "type": "ALL"
},
{
 "mal_id": 3423,
    "title": "Play Ball",
 "type": "ALL"
},
{
 "mal_id": 3424,
    "title": "Liu Yi Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 3425,
    "title": "Shaonian Ge Xing: Feng Hua Xue Yue Pian Part 1",
 "type": "ALL"
},
{
 "mal_id": 3426,
    "title": "Kouya no Shounen Isamu",
 "type": "ALL"
},
{
 "mal_id": 3427,
    "title": "Cosmic Fantasy: Ginga Mehyou no Wana",
 "type": "ALL"
},
{
 "mal_id": 3428,
    "title": "Fanren Xiu Xian Chuan: Mo Dao Zheng Feng",
 "type": "ALL"
},
{
 "mal_id": 3429,
    "title": "Shishunki Bishoujo Gattai Robo Z-Mind",
 "type": "ALL"
},
{
 "mal_id": 3430,
    "title": "Kinnikuman: Ooabare! Seigi Choujin",
 "type": "ALL"
},
{
 "mal_id": 3431,
    "title": "Anison Nippon",
 "type": "ALL"
},
{
 "mal_id": 3432,
    "title": "Choujin Locke: Mirror Ring",
 "type": "ALL"
},
{
 "mal_id": 3433,
    "title": "Kikou Kai Galient OVA",
 "type": "ALL"
},
{
 "mal_id": 3434,
    "title": "Hen Xi You",
 "type": "ALL"
},
{
 "mal_id": 3435,
    "title": "Xin Jue",
 "type": "ALL"
},
{
 "mal_id": 3436,
    "title": "Toushi Gordian",
 "type": "ALL"
},
{
 "mal_id": 3437,
    "title": "Kinnikuman: Kessen! Shichinin no Choujin tai Uchuu Nobushi",
 "type": "ALL"
},
{
 "mal_id": 3438,
    "title": "The Five Killers",
 "type": "ALL"
},
{
 "mal_id": 3439,
    "title": "Hinomaru Hatanosuke: Inazuma-gumi Tobatsu no Maki",
 "type": "ALL"
},
{
 "mal_id": 3440,
    "title": "Uju Heukgisa",
 "type": "ALL"
},
{
 "mal_id": 3441,
    "title": "Justeen",
 "type": "ALL"
},
{
 "mal_id": 3442,
    "title": "Planetarium Pokemon: Aurora kara no Message",
 "type": "ALL"
},
{
 "mal_id": 3443,
    "title": "Bouken Yuuki Pluster World",
 "type": "ALL"
},
{
 "mal_id": 3444,
    "title": "Norakuro Shoui: Nichiyoubi no Kaijiken",
 "type": "ALL"
},
{
 "mal_id": 3445,
    "title": "Blocker Gundan IV Machine Blaster",
 "type": "ALL"
},
{
 "mal_id": 3446,
    "title": "Kogane no Hana",
 "type": "ALL"
},
{
 "mal_id": 3447,
    "title": "Senkou",
 "type": "ALL"
},
{
 "mal_id": 3448,
    "title": "Behind a Smile",
 "type": "ALL"
},
{
 "mal_id": 3449,
    "title": "Ni Tian Zhizun",
 "type": "ALL"
},
{
 "mal_id": 3450,
    "title": "Otoko Ippiki Gaki Daishou",
 "type": "ALL"
},
{
 "mal_id": 3451,
    "title": "Awake",
 "type": "ALL"
},
{
 "mal_id": 3452,
    "title": "Giant Robo",
 "type": "ALL"
},
{
 "mal_id": 3453,
    "title": "Time Bokan Series: Zenderman",
 "type": "ALL"
},
{
 "mal_id": 3454,
    "title": "Semi wa Magic Cube",
 "type": "ALL"
},
{
 "mal_id": 3455,
    "title": "Wonder 3",
 "type": "ALL"
},
{
 "mal_id": 3456,
    "title": "Rokushin Gattai GodMars: Juunana-sai no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 3457,
    "title": "Captain Future: Kareinaru Taiyokei Race",
 "type": "ALL"
},
{
 "mal_id": 3458,
    "title": "Ling Long: Incarnation Final Chapter",
 "type": "ALL"
},
{
 "mal_id": 3459,
    "title": "Kamen Rider Den-O: Imagin Anime 2",
 "type": "ALL"
},
{
 "mal_id": 3460,
    "title": "Shounen Ninja Kaze no Fujimaru",
 "type": "ALL"
},
{
 "mal_id": 3461,
    "title": "Soukou Kihei Votoms Recaps",
 "type": "ALL"
},
{
 "mal_id": 3462,
    "title": "Wei Wo Du Shen",
 "type": "ALL"
},
{
 "mal_id": 3463,
    "title": "Samurai Gun Special",
 "type": "ALL"
},
{
 "mal_id": 3464,
    "title": "Magic Knight Rayearth Pilot",
 "type": "ALL"
},
{
 "mal_id": 3465,
    "title": "Kyouryuu Tankentai Born Free",
 "type": "ALL"
},
{
 "mal_id": 3466,
    "title": "Xing Hai Qishi",
 "type": "ALL"
},
{
 "mal_id": 3467,
    "title": "Paul no Miracle Daisakusen",
 "type": "ALL"
},
{
 "mal_id": 3468,
    "title": "Juusenki L-Gaim II: Farewell My Lovely + Pentagona Dolls",
 "type": "ALL"
},
{
 "mal_id": 3469,
    "title": "Machine Hayabusa",
 "type": "ALL"
},
{
 "mal_id": 3470,
    "title": "Qiang Niang",
 "type": "ALL"
},
{
 "mal_id": 3471,
    "title": "Mu Wang Zhi Wang: Qi Lin Jue",
 "type": "ALL"
},
{
 "mal_id": 3472,
    "title": "Senjuushi: Gendaijuu no Heya",
 "type": "ALL"
},
{
 "mal_id": 3473,
    "title": "Time Bokan 2000: Kaitou Kiramekiman",
 "type": "ALL"
},
{
 "mal_id": 3474,
    "title": "Katayoku no Khronos Gear",
 "type": "ALL"
},
{
 "mal_id": 3475,
    "title": "Seigi wo Aisuru Mono Gekkou Kamen",
 "type": "ALL"
},
{
 "mal_id": 3476,
    "title": "Nogsaegjeoncha Hamos",
 "type": "ALL"
},
{
 "mal_id": 3477,
    "title": "Tetsuwan Atom: Ao Kishi no Kan",
 "type": "ALL"
},
{
 "mal_id": 3478,
    "title": "Xianjing Chuanshuo RO: Shouhu Yongheng de Ai",
 "type": "ALL"
},
{
 "mal_id": 3479,
    "title": "Tondemo Senshi Muteking",
 "type": "ALL"
},
{
 "mal_id": 3480,
    "title": "Apache Yakyuugun",
 "type": "ALL"
},
{
 "mal_id": 3481,
    "title": "Xue Ying Ling Zhu 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3482,
    "title": "Long Dao Qi Yuan",
 "type": "ALL"
},
{
 "mal_id": 3483,
    "title": "Haou Daikei Ryuu Knight: Adeu Legend II",
 "type": "ALL"
},
{
 "mal_id": 3484,
    "title": "Soukou Kihei Votoms Vol.I: Stories of the A.T.Votoms",
 "type": "ALL"
},
{
 "mal_id": 3485,
    "title": "Grendizer Giga",
 "type": "ALL"
},
{
 "mal_id": 3486,
    "title": "Bada-ui Jeonseol Jangbogo",
 "type": "ALL"
},
{
 "mal_id": 3487,
    "title": "Wu Geng Ji 4th Season",
 "type": "ALL"
},
{
 "mal_id": 3488,
    "title": "Totsugeki! Pappara-tai",
 "type": "ALL"
},
{
 "mal_id": 3489,
    "title": "Zhen Dao Ge",
 "type": "ALL"
},
{
 "mal_id": 3490,
    "title": "Saikyou Robot Daiouja",
 "type": "ALL"
},
{
 "mal_id": 3491,
    "title": "Chouon Senshi Borgman 2: Shin Seiki 2058",
 "type": "ALL"
},
{
 "mal_id": 3492,
    "title": "AOTU Shijie",
 "type": "ALL"
},
{
 "mal_id": 3493,
    "title": "Pachislo Kizoku Gin",
 "type": "ALL"
},
{
 "mal_id": 3494,
    "title": "Monster Farm 5: Circus Caravan OVA - Kessei!! Orcoro Circus",
 "type": "ALL"
},
{
 "mal_id": 3495,
    "title": "Master of Torque 2",
 "type": "ALL"
},
{
 "mal_id": 3496,
    "title": "The Gakuen Choujo-tai",
 "type": "ALL"
},
{
 "mal_id": 3497,
    "title": "Shinkai no Kantai: Submarine 707",
 "type": "ALL"
},
{
 "mal_id": 3498,
    "title": "Qin Shi Mingyue: Kong Shan Niao Yu",
 "type": "ALL"
},
{
 "mal_id": 3499,
    "title": "Tekkamen wo Oe: d\'Artagnan Monogatari yori",
 "type": "ALL"
},
{
 "mal_id": 3500,
    "title": "Danball Senki Wars: All Star Battle",
 "type": "ALL"
},
{
 "mal_id": 3501,
    "title": "Hinomaru Tarou: Musha Shugyou no Maki",
 "type": "ALL"
},
{
 "mal_id": 3502,
    "title": "Pepsi Nex x 009 Re:Cyborg",
 "type": "ALL"
},
{
 "mal_id": 3503,
    "title": "Kinnikuman: Seigi Choujin vs. Kodai Choujin",
 "type": "ALL"
},
{
 "mal_id": 3504,
    "title": "Kamen no Ninja Akakage",
 "type": "ALL"
},
{
 "mal_id": 3505,
    "title": "Restol: Teugsu Gujo Dae",
 "type": "ALL"
},
{
 "mal_id": 3506,
    "title": "Rokushin Gattai GodMars (1982)",
 "type": "ALL"
},
{
 "mal_id": 3507,
    "title": "Wan Jie Xian Zong 5th Season",
 "type": "ALL"
},
{
 "mal_id": 3508,
    "title": "Kai Feng Qitan: Zhege Baogong Bu Taixing",
 "type": "ALL"
},
{
 "mal_id": 3509,
    "title": "Kinnikuman: Gyakushuu! Uchuu Kakure Choujin",
 "type": "ALL"
},
{
 "mal_id": 3510,
    "title": "Yuusei Shounen Papii",
 "type": "ALL"
},
{
 "mal_id": 3511,
    "title": "Zhandou Wang Zhi Jufeng Zhan Hun",
 "type": "ALL"
},
{
 "mal_id": 3512,
    "title": "Dahufa",
 "type": "ALL"
},
{
 "mal_id": 3513,
    "title": "Stratos 4 OVA: Stratos 4.1 - Dutch Roll",
 "type": "ALL"
},
{
 "mal_id": 3514,
    "title": "Ring no Seraph",
 "type": "ALL"
},
{
 "mal_id": 3515,
    "title": "Wo Shi Da Shenxian 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3516,
    "title": "Ys IV: The Dawn of Ys",
 "type": "ALL"
},
{
 "mal_id": 3517,
    "title": "Seikima II Humane Society: Jinrui Ai ni Michita Shakai",
 "type": "ALL"
},
{
 "mal_id": 3518,
    "title": "Go! Go! Atom",
 "type": "ALL"
},
{
 "mal_id": 3519,
    "title": "Shinrabanshou: Tenchi Shinmei no Shou",
 "type": "ALL"
},
{
 "mal_id": 3520,
    "title": "Kamen Rider Den-O: Imagin Anime 3",
 "type": "ALL"
},
{
 "mal_id": 3521,
    "title": "Promised Town",
 "type": "ALL"
},
{
 "mal_id": 3522,
    "title": "Kinnikuman: New York Kiki Ippatsu!",
 "type": "ALL"
},
{
 "mal_id": 3523,
    "title": "Monkey Turn V",
 "type": "ALL"
},
{
 "mal_id": 3524,
    "title": "Chou Tokkyuu Hikarian",
 "type": "ALL"
},
{
 "mal_id": 3525,
    "title": "Nine",
 "type": "ALL"
},
{
 "mal_id": 3526,
    "title": "Ninkuu: Knife no Bohyou",
 "type": "ALL"
},
{
 "mal_id": 3527,
    "title": "Soukou Kihei Votoms Vol.II: Highlights from the A.T.Votoms",
 "type": "ALL"
},
{
 "mal_id": 3528,
    "title": "Machine Robo: Leina, The Legend of Wolf Blade",
 "type": "ALL"
},
{
 "mal_id": 3529,
    "title": "Buddy Spirits",
 "type": "ALL"
},
{
 "mal_id": 3530,
    "title": "Rainbow Sentai Robin",
 "type": "ALL"
},
{
 "mal_id": 3531,
    "title": "Ai Sky Tree 21",
 "type": "ALL"
},
{
 "mal_id": 3532,
    "title": "Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀",
 "type": "ALL"
},
{
 "mal_id": 3533,
    "title": "Kinkyuu Hasshin Saver Kids",
 "type": "ALL"
},
{
 "mal_id": 3534,
    "title": "Install Pilot",
 "type": "ALL"
},
{
 "mal_id": 3535,
    "title": "Zero Tester",
 "type": "ALL"
},
{
 "mal_id": 3536,
    "title": "Phantom Yuusha Densetsu",
 "type": "ALL"
},
{
 "mal_id": 3537,
    "title": "Star Ocean: Anamnesis",
 "type": "ALL"
},
{
 "mal_id": 3538,
    "title": "Maken Liner 0011 Henshin Seyo!",
 "type": "ALL"
},
{
 "mal_id": 3539,
    "title": "Hoshi to Tsubasa no Paradox",
 "type": "ALL"
},
{
 "mal_id": 3540,
    "title": "High & Low: G-Sword",
 "type": "ALL"
},
{
 "mal_id": 3541,
    "title": "Mugen Senshi Valis",
 "type": "ALL"
},
{
 "mal_id": 3542,
    "title": "Doubutsu Mura no Daisodou",
 "type": "ALL"
},
{
 "mal_id": 3543,
    "title": "Ippatsu Hicchuu!! Devander",
 "type": "ALL"
},
{
 "mal_id": 3544,
    "title": "Xingchen Bian: Po Tian Mi Ju",
 "type": "ALL"
},
{
 "mal_id": 3545,
    "title": "Kanzen Shouri Daiteiou",
 "type": "ALL"
},
{
 "mal_id": 3546,
    "title": "Ylion to Callysia",
 "type": "ALL"
},
{
 "mal_id": 3547,
    "title": "Naked Wolves",
 "type": "ALL"
},
{
 "mal_id": 3548,
    "title": "Space Gundam V",
 "type": "ALL"
},
{
 "mal_id": 3549,
    "title": "Kinnikuman: Haresugata! Seigi Choujin",
 "type": "ALL"
},
{
 "mal_id": 3550,
    "title": "Jinzou Konchuu Kabutoborg VxV",
 "type": "ALL"
},
{
 "mal_id": 3551,
    "title": "Zi Chuan",
 "type": "ALL"
},
{
 "mal_id": 3552,
    "title": "Duel Masters King",
 "type": "ALL"
},
{
 "mal_id": 3553,
    "title": "Heavy",
 "type": "ALL"
},
{
 "mal_id": 3554,
    "title": "Chang Jian Feng Yun",
 "type": "ALL"
},
{
 "mal_id": 3555,
    "title": "Ling Long: Incarnation Special",
 "type": "ALL"
},
{
 "mal_id": 3556,
    "title": "Seikai no Senki II Special",
 "type": "ALL"
},
{
 "mal_id": 3557,
    "title": "Kinnikuman: Seigi Choujin vs. Senshi Choujin",
 "type": "ALL"
},
{
 "mal_id": 3558,
    "title": "Super Doll Licca-chan: Licca-chan Zettai Zetsumei! Doll Knights no Kiseki",
 "type": "ALL"
},
{
 "mal_id": 3559,
    "title": "Tian Yu",
 "type": "ALL"
},
{
 "mal_id": 3560,
    "title": "Gowapper 5 Gordam",
 "type": "ALL"
},
{
 "mal_id": 3561,
    "title": "Ni Zhuan Ci Yuan: AI Jue Qi",
 "type": "ALL"
},
{
 "mal_id": 3562,
    "title": "Meng Ta: Xue Mi Cheng",
 "type": "ALL"
},
{
 "mal_id": 3563,
    "title": "Shinshuu Sudama-hen",
 "type": "ALL"
},
{
 "mal_id": 3564,
    "title": "Soul Reviver",
 "type": "ALL"
},
{
 "mal_id": 3565,
    "title": "Junk Head",
 "type": "ALL"
},
{
 "mal_id": 3566,
    "title": "Chouriki Robo Galatt",
 "type": "ALL"
},
{
 "mal_id": 3567,
    "title": "Present made no Michinori",
 "type": "ALL"
},
{
 "mal_id": 3568,
    "title": "Wanpaku Tanteidan",
 "type": "ALL"
},
{
 "mal_id": 3569,
    "title": "Rebirth Moon Divergence",
 "type": "ALL"
},
{
 "mal_id": 3570,
    "title": "Sankou to Tako: Hyakumanryou Chinsoudou",
 "type": "ALL"
},
{
 "mal_id": 3571,
    "title": "Yamato Takeru: After War",
 "type": "ALL"
},
{
 "mal_id": 3572,
    "title": "Tokyo Juushouden: Fuuma Gogyou Denshou",
 "type": "ALL"
},
{
 "mal_id": 3573,
    "title": "Kaitei Shounen Marine",
 "type": "ALL"
},
{
 "mal_id": 3574,
    "title": "Xinghe Zhizun",
 "type": "ALL"
},
{
 "mal_id": 3575,
    "title": "Xi Xing Ji: Jijie Pian",
 "type": "ALL"
},
{
 "mal_id": 3576,
    "title": "Shinsetsu Kachikachi Yama",
 "type": "ALL"
},
{
 "mal_id": 3577,
    "title": "Liu Xing Huan Jian",
 "type": "ALL"
},
{
 "mal_id": 3578,
    "title": "Machine Robo: Butchigiri Battle Hackers",
 "type": "ALL"
},
{
 "mal_id": 3579,
    "title": "Sushi Ninja",
 "type": "ALL"
},
{
 "mal_id": 3580,
    "title": "Toukiden 2",
 "type": "ALL"
},
{
 "mal_id": 3581,
    "title": "Wangu Xian Qiong IV: Yin Yue Cheng Pian",
 "type": "ALL"
},
{
 "mal_id": 3582,
    "title": "Ippatsu Kanta-kun",
 "type": "ALL"
},
{
 "mal_id": 3583,
    "title": "Nanocore 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3584,
    "title": "Gene Diver",
 "type": "ALL"
},
{
 "mal_id": 3585,
    "title": "Kingyo Chuuihou! (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3586,
    "title": "Hyouga Senshi Gaislugger",
 "type": "ALL"
},
{
 "mal_id": 3587,
    "title": "Kujakuou: Sengoku Tensei",
 "type": "ALL"
},
{
 "mal_id": 3588,
    "title": "Project HAL",
 "type": "ALL"
},
{
 "mal_id": 3589,
    "title": "Inazma Delivery: Dougyousha Attack-hen",
 "type": "ALL"
},
{
 "mal_id": 3590,
    "title": "Sangokushi II: Amakakeru Otoko-tachi",
 "type": "ALL"
},
{
 "mal_id": 3591,
    "title": "Denkou Chou Tokkyuu Hikarian",
 "type": "ALL"
},
{
 "mal_id": 3592,
    "title": "Shin Mashin Eiyuuden Wataru Majinzan",
 "type": "ALL"
},
{
 "mal_id": 3593,
    "title": "Zetsubou Funsai Shoujo ∞ Amida",
 "type": "ALL"
},
{
 "mal_id": 3594,
    "title": "Meimon! Daisan Yakyuubu",
 "type": "ALL"
},
{
 "mal_id": 3595,
    "title": "Pucca 3",
 "type": "ALL"
},
{
 "mal_id": 3596,
    "title": "Hungry to Win",
 "type": "ALL"
},
{
 "mal_id": 3597,
    "title": "Ginga Hyouryuu Vifam 13",
 "type": "ALL"
},
{
 "mal_id": 3598,
    "title": "Fruity Samurai",
 "type": "ALL"
},
{
 "mal_id": 3599,
    "title": "Uchuu Ace",
 "type": "ALL"
},
{
 "mal_id": 3600,
    "title": "Nakanaori",
 "type": "ALL"
},
{
 "mal_id": 3601,
    "title": "Spheres",
 "type": "ALL"
},
{
 "mal_id": 3602,
    "title": "Duel Masters King!",
 "type": "ALL"
},
{
 "mal_id": 3603,
    "title": "Jing: Shuang Cheng - Feng Qi Pian",
 "type": "ALL"
},
{
 "mal_id": 3604,
    "title": "Shi Wan Ge Leng Xiaohua Movie 1",
 "type": "ALL"
},
{
 "mal_id": 3605,
    "title": "MonHun Nikki Girigiri Airou Mura G",
 "type": "ALL"
},
{
 "mal_id": 3606,
    "title": "Monkey Punch: Manga Katsudou Daishashin - Crime Mate Special",
 "type": "ALL"
},
{
 "mal_id": 3607,
    "title": "Inferious Wakusei Senshi Gaiden Condition Green",
 "type": "ALL"
},
{
 "mal_id": 3608,
    "title": "Fire Emblem Heroes Book III Movie：Cohort of the Dead",
 "type": "ALL"
},
{
 "mal_id": 3609,
    "title": "Chou Supercar Gattiger",
 "type": "ALL"
},
{
 "mal_id": 3610,
    "title": "Master of Torque 3",
 "type": "ALL"
},
{
 "mal_id": 3611,
    "title": "Ginga Hyouryuu Vifam: Keito no Kioku - Namida no Dakkai Sakusen",
 "type": "ALL"
},
{
 "mal_id": 3612,
    "title": "Inishie no Megami to Houseki no Ite",
 "type": "ALL"
},
{
 "mal_id": 3613,
    "title": "Raldessia Chronicles",
 "type": "ALL"
},
{
 "mal_id": 3614,
    "title": "Seupideuwang Beongae",
 "type": "ALL"
},
{
 "mal_id": 3615,
    "title": "Katsura Hime",
 "type": "ALL"
},
{
 "mal_id": 3616,
    "title": "Zhong Hua Xiao Zi",
 "type": "ALL"
},
{
 "mal_id": 3617,
    "title": "Shibai Taroka",
 "type": "ALL"
},
{
 "mal_id": 3618,
    "title": "Ultraman: Chou Toushi Gekiden - Suisei Senjin Tsuifon Toujou",
 "type": "ALL"
},
{
 "mal_id": 3619,
    "title": "Ulysses 31 Pilot",
 "type": "ALL"
},
{
 "mal_id": 3620,
    "title": "Sangokushi: Dai Ni Bu - Choukou Moyu!",
 "type": "ALL"
},
{
 "mal_id": 3621,
    "title": "Xia Lan",
 "type": "ALL"
},
{
 "mal_id": 3622,
    "title": "Hi Gekiga Ukiyoe Senya Ichiya",
 "type": "ALL"
},
{
 "mal_id": 3623,
    "title": "Karakuri Kengou Den Musashi Lord",
 "type": "ALL"
},
{
 "mal_id": 3624,
    "title": "Kinniku Banzuke: Kongou-kun no Daibouken!",
 "type": "ALL"
},
{
 "mal_id": 3625,
    "title": "Sugata Sanshirou",
 "type": "ALL"
},
{
 "mal_id": 3626,
    "title": "Xi Xing Ji: Zaijian Wukong",
 "type": "ALL"
},
{
 "mal_id": 3627,
    "title": "Onikiri Musume Saisen",
 "type": "ALL"
},
{
 "mal_id": 3628,
    "title": "Wan Guo Zhi",
 "type": "ALL"
},
{
 "mal_id": 3629,
    "title": "Jian Wangchao 2",
 "type": "ALL"
},
{
 "mal_id": 3630,
    "title": "Play the Lupin: Clips x Parts Collection",
 "type": "ALL"
},
{
 "mal_id": 3631,
    "title": "Samuraider: Nazo no Tenkousei",
 "type": "ALL"
},
{
 "mal_id": 3632,
    "title": "Future GPX Cyber Formula Graffiti",
 "type": "ALL"
},
{
 "mal_id": 3633,
    "title": "Mashin Eiyuuden Wataru: Shichikon no Ryuujinmaru",
 "type": "ALL"
},
{
 "mal_id": 3634,
    "title": "Virtua Fighter: Costomize Clip",
 "type": "ALL"
},
{
 "mal_id": 3635,
    "title": "Ttori wa Zeta Robot",
 "type": "ALL"
},
{
 "mal_id": 3636,
    "title": "Tokiwa Kitareri!!",
 "type": "ALL"
},
{
 "mal_id": 3637,
    "title": "Legend of Lemnear: Kyokuguro no Tsubasa Valkisas Pilot Film",
 "type": "ALL"
},
{
 "mal_id": 3638,
    "title": "Ikkyuu-san (1978)",
 "type": "ALL"
},
{
 "mal_id": 3639,
    "title": "Microid S",
 "type": "ALL"
},
{
 "mal_id": 3640,
    "title": "Cyborg 009: The Cyborg Soldier - Yomi no Gunzou",
 "type": "ALL"
},
{
 "mal_id": 3641,
    "title": "Qin Shi Mingyue: Luosheng Tangxia",
 "type": "ALL"
},
{
 "mal_id": 3642,
    "title": "Kentauros no Densetsu",
 "type": "ALL"
},
{
 "mal_id": 3643,
    "title": "Koutetsu no Vendetta Episode 0",
 "type": "ALL"
},
{
 "mal_id": 3644,
    "title": "Robot Taekwon V",
 "type": "ALL"
},
{
 "mal_id": 3645,
    "title": "Touyama Sakura Uchuu Chou: Yatsu no Na wa Gold",
 "type": "ALL"
},
{
 "mal_id": 3646,
    "title": "Dahua Zhi Shaonian You",
 "type": "ALL"
},
{
 "mal_id": 3647,
    "title": "Tatakae!! Ramenman (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3648,
    "title": "Qin Shi Mingyue Tebie Pian: Di Zi Jiang Xi",
 "type": "ALL"
},
{
 "mal_id": 3649,
    "title": "Okawari-Boy Starzan-S",
 "type": "ALL"
},
{
 "mal_id": 3650,
    "title": "Dennou Sentai Voogie's★Angel: Forever and Ever",
 "type": "ALL"
},
{
 "mal_id": 3651,
    "title": "Ai to Shi",
 "type": "ALL"
},
{
 "mal_id": 3652,
    "title": "Bao Lian Deng",
 "type": "ALL"
},
{
 "mal_id": 3653,
    "title": "Gon 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3654,
    "title": "Kaitei Daisensou: Ai no 20,000 Miles",
 "type": "ALL"
},
{
 "mal_id": 3655,
    "title": "Studio Khara vs. CyberConnect2 Gachinko! Animation Taiketsu!",
 "type": "ALL"
},
{
 "mal_id": 3656,
    "title": "Go! Samurai",
 "type": "ALL"
},
{
 "mal_id": 3657,
    "title": "Cap Kakumei Bottleman",
 "type": "ALL"
},
{
 "mal_id": 3658,
    "title": "Oh! Super Milk-chan Special",
 "type": "ALL"
},
{
 "mal_id": 3659,
    "title": "Mars",
 "type": "ALL"
},
{
 "mal_id": 3660,
    "title": "Guan Hai Ce",
 "type": "ALL"
},
{
 "mal_id": 3661,
    "title": "SmaSTATION-3 SMAnime",
 "type": "ALL"
},
{
 "mal_id": 3662,
    "title": "Chouon Senshi Borgman: Madnight☆Gigs!",
 "type": "ALL"
},
{
 "mal_id": 3663,
    "title": "Twin Bee Paradise",
 "type": "ALL"
},
{
 "mal_id": 3664,
    "title": "Ore no Sora Keiji-hen",
 "type": "ALL"
},
{
 "mal_id": 3665,
    "title": "L/R: Licensed by Royal Special",
 "type": "ALL"
},
{
 "mal_id": 3666,
    "title": "Ultraman Graffiti",
 "type": "ALL"
},
{
 "mal_id": 3667,
    "title": "Xevious",
 "type": "ALL"
},
{
 "mal_id": 3668,
    "title": "Yuan Long 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3669,
    "title": "Geori-eui Mubeopja",
 "type": "ALL"
},
{
 "mal_id": 3670,
    "title": "Shinken Densetsu: Tight Road",
 "type": "ALL"
},
{
 "mal_id": 3671,
    "title": "Sou Xuan Lu Zhi Chen Ling Ji",
 "type": "ALL"
},
{
 "mal_id": 3672,
    "title": "Jiyi Guanli Ju",
 "type": "ALL"
},
{
 "mal_id": 3673,
    "title": "Zhandou Wang Zhi Jufeng Zhan Hun 3",
 "type": "ALL"
},
{
 "mal_id": 3674,
    "title": "Gyouten Ningen Batsealer",
 "type": "ALL"
},
{
 "mal_id": 3675,
    "title": "Kuiba II: Dazhan Yuan Yang Jie",
 "type": "ALL"
},
{
 "mal_id": 3676,
    "title": "Hei Mao Jing Zhang",
 "type": "ALL"
},
{
 "mal_id": 3677,
    "title": "Quantum Leap",
 "type": "ALL"
},
{
 "mal_id": 3678,
    "title": "Zhen Gyi Hong Shi",
 "type": "ALL"
},
{
 "mal_id": 3679,
    "title": "Mu Wang Zhi Wang: Han Tie Dou",
 "type": "ALL"
},
{
 "mal_id": 3680,
    "title": "Uchuu Shounen Soran",
 "type": "ALL"
},
{
 "mal_id": 3681,
    "title": "Play Ball 2nd",
 "type": "ALL"
},
{
 "mal_id": 3682,
    "title": "Si Hai Jing Qi",
 "type": "ALL"
},
{
 "mal_id": 3683,
    "title": "Sangokushi: Dai San Bu - Harukanaru Taichi",
 "type": "ALL"
},
{
 "mal_id": 3684,
    "title": "Shiritsutantei: Toki Shouzou Trouble Note - Hard & Loose",
 "type": "ALL"
},
{
 "mal_id": 3685,
    "title": "Tenkuu Senki Shurato Recaps",
 "type": "ALL"
},
{
 "mal_id": 3686,
    "title": "Double Hard",
 "type": "ALL"
},
{
 "mal_id": 3687,
    "title": "Bakujuu Gasshin Ziguru Hazeru",
 "type": "ALL"
},
{
 "mal_id": 3688,
    "title": "Gundam: G no Reconguista Movie IV - Gekitou ni Sakebu Ai",
 "type": "ALL"
},
{
 "mal_id": 3689,
    "title": "Sabaku no Kaizoku! Captain Kuppa",
 "type": "ALL"
},
{
 "mal_id": 3690,
    "title": "84 Taekwon V",
 "type": "ALL"
},
{
 "mal_id": 3691,
    "title": "Xi Xing Ji: Suming Pian",
 "type": "ALL"
},
{
 "mal_id": 3692,
    "title": "Zhen Wu Dianfeng",
 "type": "ALL"
},
{
 "mal_id": 3693,
    "title": "W-Tails Cat: A Strange Presence",
 "type": "ALL"
},
{
 "mal_id": 3694,
    "title": "Shouxi Yu Ling Shi 2",
 "type": "ALL"
},
{
 "mal_id": 3695,
    "title": "Zero Tester: Chikyuu wo Mamore!",
 "type": "ALL"
},
{
 "mal_id": 3696,
    "title": "Chikyuu Bouei Kazoku Special",
 "type": "ALL"
},
{
 "mal_id": 3697,
    "title": "Kamigawa: Kagayakeru Sekai",
 "type": "ALL"
},
{
 "mal_id": 3698,
    "title": "Monkey Gang Anarchy",
 "type": "ALL"
},
{
 "mal_id": 3699,
    "title": "Shin Karate Jigoku-hen",
 "type": "ALL"
},
{
 "mal_id": 3700,
    "title": "15 Sonyeon Uju Pyoryugi",
 "type": "ALL"
},
{
 "mal_id": 3701,
    "title": "Huo Feng Liao Yuan",
 "type": "ALL"
},
{
 "mal_id": 3702,
    "title": "Bulsajo Robot Phoenix King",
 "type": "ALL"
},
{
 "mal_id": 3703,
    "title": "Skyers 5",
 "type": "ALL"
},
{
 "mal_id": 3704,
    "title": "Hatara Kids Mai Ham Gumi",
 "type": "ALL"
},
{
 "mal_id": 3705,
    "title": "5-fun de Wakaru! Kingdom: Gasshougun-hen",
 "type": "ALL"
},
{
 "mal_id": 3706,
    "title": "Regalia: The Three Sacred Stars Recaps",
 "type": "ALL"
},
{
 "mal_id": 3707,
    "title": "Senjutsu Choukoukaku Orion",
 "type": "ALL"
},
{
 "mal_id": 3708,
    "title": "Choujin Locke Special",
 "type": "ALL"
},
{
 "mal_id": 3709,
    "title": "Gundam: G no Reconguista Movie V - Shisen wo Koete",
 "type": "ALL"
},
{
 "mal_id": 3710,
    "title": "Zhandou Wang Zhi Jufeng Zhan Hun 2",
 "type": "ALL"
},
{
 "mal_id": 3711,
    "title": "AOTU Shijie 2",
 "type": "ALL"
},
{
 "mal_id": 3712,
    "title": "Ganbare! Marine Kid",
 "type": "ALL"
},
{
 "mal_id": 3713,
    "title": "Jian Wang 3: Xia Gan Yi Dan Shen Jianxin 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3714,
    "title": "Kedama no Gonjirou",
 "type": "ALL"
},
{
 "mal_id": 3715,
    "title": "Madou King Granzort: Saigo no Magical Taisen",
 "type": "ALL"
},
{
 "mal_id": 3716,
    "title": "Mirai Kara Kita Shounen Super Jetter",
 "type": "ALL"
},
{
 "mal_id": 3717,
    "title": "Shizukanaru Don: Yakuza Side Story",
 "type": "ALL"
},
{
 "mal_id": 3718,
    "title": "Yokohama Meibutsu: Otoko Katayama-gumi!",
 "type": "ALL"
},
{
 "mal_id": 3719,
    "title": "Mugen Senki Portriss",
 "type": "ALL"
},
{
 "mal_id": 3720,
    "title": "High School Jingi",
 "type": "ALL"
},
{
 "mal_id": 3721,
    "title": "Samuroid Zero",
 "type": "ALL"
},
{
 "mal_id": 3722,
    "title": "77Danui Bimil",
 "type": "ALL"
},
{
 "mal_id": 3723,
    "title": "Feng Wei Ying Xiong",
 "type": "ALL"
},
{
 "mal_id": 3724,
    "title": "Velvet Underworld: Fragment Person",
 "type": "ALL"
},
{
 "mal_id": 3725,
    "title": "Zhan Shou Zhi Ren",
 "type": "ALL"
},
{
 "mal_id": 3726,
    "title": "UFO Senshi Dai Apolon 2",
 "type": "ALL"
},
{
 "mal_id": 3727,
    "title": "Choegang Top Plate",
 "type": "ALL"
},
{
 "mal_id": 3728,
    "title": "X-Men Openings",
 "type": "ALL"
},
{
 "mal_id": 3729,
    "title": "Arisa☆Good Luck",
 "type": "ALL"
},
{
 "mal_id": 3730,
    "title": "Dangobei Torimonochou: Hirake - Goma no Maki",
 "type": "ALL"
},
{
 "mal_id": 3731,
    "title": "Choubakuretsu Ijigen Menko Battle: Gigant Shooter Tsukasa",
 "type": "ALL"
},
{
 "mal_id": 3732,
    "title": "Jue Ming Xiang Ying",
 "type": "ALL"
},
{
 "mal_id": 3733,
    "title": "Starlight Scramble Renai Kouhosei",
 "type": "ALL"
},
{
 "mal_id": 3734,
    "title": "An Jie Shen Shi",
 "type": "ALL"
},
{
 "mal_id": 3735,
    "title": "Qin Shi Ming Yue: Guoqing Tebie Pian",
 "type": "ALL"
},
{
 "mal_id": 3736,
    "title": "Madou King Granzort: Bouken-hen",
 "type": "ALL"
},
{
 "mal_id": 3737,
    "title": "Chinzei Hachirou Tametomo",
 "type": "ALL"
},
{
 "mal_id": 3738,
    "title": "Kamishibai Itazura Tanuki no Maki",
 "type": "ALL"
},
{
 "mal_id": 3739,
    "title": "Yuuyake Banchou",
 "type": "ALL"
},
{
 "mal_id": 3740,
    "title": "Computer Haekjeonham Pokpa Daejakjeon",
 "type": "ALL"
},
{
 "mal_id": 3741,
    "title": "Baito-saki wa Aku no Soshiki!?",
 "type": "ALL"
},
{
 "mal_id": 3742,
    "title": "Saikyou Kamizmode!",
 "type": "ALL"
},
{
 "mal_id": 3743,
    "title": "Super Majingga 3",
 "type": "ALL"
},
{
 "mal_id": 3744,
    "title": "Choujikuu Seiki Orguss Memorial",
 "type": "ALL"
},
{
 "mal_id": 3745,
    "title": "Tough Guy!",
 "type": "ALL"
},
{
 "mal_id": 3746,
    "title": "MapleStory Special",
 "type": "ALL"
},
{
 "mal_id": 3747,
    "title": "Nanocore 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3748,
    "title": "Go! Go! Kadendanshi",
 "type": "ALL"
},
{
 "mal_id": 3749,
    "title": "Mu Wang Zhi Wang: Xuan Guan Si",
 "type": "ALL"
},
{
 "mal_id": 3750,
    "title": "Choujuu Kishin Dancougar: Juusenki-tai Songs",
 "type": "ALL"
},
{
 "mal_id": 3751,
    "title": "Jintai no Survival!",
 "type": "ALL"
},
{
 "mal_id": 3752,
    "title": "Origami Warriors",
 "type": "ALL"
},
{
 "mal_id": 3753,
    "title": "Condom Battler Gorou: Revive",
 "type": "ALL"
},
{
 "mal_id": 3754,
    "title": "Yakyuukyou no Uta: Kita no Ookami Minami no Tora",
 "type": "ALL"
},
{
 "mal_id": 3755,
    "title": "Ninjala",
 "type": "ALL"
},
{
 "mal_id": 3756,
    "title": "Kotowa Jiten: Hetana Teppou mo Kazu Ucha Ataru!",
 "type": "ALL"
},
{
 "mal_id": 3757,
    "title": "Fight Da!! Pyuta",
 "type": "ALL"
},
{
 "mal_id": 3758,
    "title": "Game Tengoku: The Game Paradise!",
 "type": "ALL"
},
{
 "mal_id": 3759,
    "title": "Bousou Sengokushi",
 "type": "ALL"
},
{
 "mal_id": 3760,
    "title": "Toumei Shounen Tantei Akira",
 "type": "ALL"
},
{
 "mal_id": 3761,
    "title": "Mayonaka wa Junketsu",
 "type": "ALL"
},
{
 "mal_id": 3762,
    "title": "Chinka",
 "type": "ALL"
},
{
 "mal_id": 3763,
    "title": "Ginga Hyouryuu Vifam: Chicago Super Police 13",
 "type": "ALL"
},
{
 "mal_id": 3764,
    "title": "Otoko Doahou! Koushien",
 "type": "ALL"
},
{
 "mal_id": 3765,
    "title": "Jian Wang 3: Xia Gan Yi Dan Shen Jianxin 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 3766,
    "title": "MonHun Nikki Girigiri Airou Mura: Airou Kiki Ippatsu Specials",
 "type": "ALL"
},
{
 "mal_id": 3767,
    "title": "Qian Cong Shou",
 "type": "ALL"
},
{
 "mal_id": 3768,
    "title": "The Siamese: First Mission",
 "type": "ALL"
},
{
 "mal_id": 3769,
    "title": "Battle Break",
 "type": "ALL"
},
{
 "mal_id": 3770,
    "title": "Hong Ling Jin Xia",
 "type": "ALL"
},
{
 "mal_id": 3771,
    "title": "Aigan Kaijuu",
 "type": "ALL"
},
{
 "mal_id": 3772,
    "title": "Aterui",
 "type": "ALL"
},
{
 "mal_id": 3773,
    "title": "Valhait Rising: Kandou e.",
 "type": "ALL"
},
{
 "mal_id": 3774,
    "title": "Dolphin Ouji",
 "type": "ALL"
},
{
 "mal_id": 3775,
    "title": "Ogami Matsugorou",
 "type": "ALL"
},
{
 "mal_id": 3776,
    "title": "Zoids Wild Senki",
 "type": "ALL"
},
{
 "mal_id": 3777,
    "title": "Ginga Hyouryuu Vifam Recaps",
 "type": "ALL"
},
{
 "mal_id": 3778,
    "title": "Udauda Yatteru Hima wa Nee!",
 "type": "ALL"
},
{
 "mal_id": 3779,
    "title": "Ninpuu Kamui Gaiden: Tsukihigai no Maki",
 "type": "ALL"
},
{
 "mal_id": 3780,
    "title": "Qi Cai Lao Fu Zi",
 "type": "ALL"
},
{
 "mal_id": 3781,
    "title": "Kumo ni Noru",
 "type": "ALL"
},
{
 "mal_id": 3782,
    "title": "Shin Skyers 5",
 "type": "ALL"
},
{
 "mal_id": 3783,
    "title": "Hwanggeum Nalgae 1.2.3.",
 "type": "ALL"
},
{
 "mal_id": 3784,
    "title": "Ring ni Kakero 1 Pilot",
 "type": "ALL"
},
{
 "mal_id": 3785,
    "title": "Roboteuwang Sseonsyakeu",
 "type": "ALL"
},
{
 "mal_id": 3786,
    "title": "Feng Ji Yun Nu",
 "type": "ALL"
},
{
 "mal_id": 3787,
    "title": "Dennou Sentai Voogie's★Angel Gaiden: Susume! Super★Angels!",
 "type": "ALL"
},
{
 "mal_id": 3788,
    "title": "Offside",
 "type": "ALL"
},
{
 "mal_id": 3789,
    "title": "Tatakae! Osper",
 "type": "ALL"
},
{
 "mal_id": 3790,
    "title": "The Midnight★Animal",
 "type": "ALL"
},
{
 "mal_id": 3791,
    "title": "Ying Xiong Bie Nao",
 "type": "ALL"
},
{
 "mal_id": 3792,
    "title": "Virtual Star 2000",
 "type": "ALL"
},
{
 "mal_id": 3793,
    "title": "Velvet Underworld: Alternative",
 "type": "ALL"
},
{
 "mal_id": 3794,
    "title": "Shounen Ninja Kaze no Fujimaru: Nazo no Arabiya Ningyou",
 "type": "ALL"
},
{
 "mal_id": 3795,
    "title": "Ju Bing Chang Cheng Zhuan",
 "type": "ALL"
},
{
 "mal_id": 3796,
    "title": "Bad! Bad! Bad!",
 "type": "ALL"
},
{
 "mal_id": 3797,
    "title": "Marco to Ginga Ryuu",
 "type": "ALL"
},
{
 "mal_id": 3798,
    "title": "Onimaru: Senjou ni Kakeru Itsutsu no Seishun",
 "type": "ALL"
},
{
 "mal_id": 3799,
    "title": "Onikiri Shoujo",
 "type": "ALL"
},
{
 "mal_id": 3800,
    "title": "Shu",
 "type": "ALL"
},
{
 "mal_id": 3801,
    "title": "Heungnyong Wang gwa Bihodongja",
 "type": "ALL"
},
{
 "mal_id": 3802,
    "title": "Wrestler Gundan Seisenshi Robin Jr.",
 "type": "ALL"
},
{
 "mal_id": 3803,
    "title": "Bakugan: Battle Planet Short Anime",
 "type": "ALL"
},
{
 "mal_id": 3804,
    "title": "Gekiyaba∞Bokkan!!",
 "type": "ALL"
},
{
 "mal_id": 3805,
    "title": "Korogashi Ryouta",
 "type": "ALL"
},
{
 "mal_id": 3806,
    "title": "Mashin Eiyuuden Wataru: Soukaizan Eiyuu Densetsu",
 "type": "ALL"
},
{
 "mal_id": 3807,
    "title": "Yong Sheng",
 "type": "ALL"
},
{
 "mal_id": 3808,
    "title": "Ankoku Cat VS",
 "type": "ALL"
},
{
 "mal_id": 3809,
    "title": "Johnny Cypher",
 "type": "ALL"
},
{
 "mal_id": 3810,
    "title": "Dokidoki Gakuen Kessen!! Youki Daimashiro",
 "type": "ALL"
},
{
 "mal_id": 3811,
    "title": "Hei Mao Jing Zhang (1992)",
 "type": "ALL"
},
{
 "mal_id": 3812,
    "title": "Yokohama Bakkure-tai",
 "type": "ALL"
},
{
 "mal_id": 3813,
    "title": "Uchuu no Kishi Tekkaman Blade II: Virgin Memory",
 "type": "ALL"
},
{
 "mal_id": 3814,
    "title": "Project Tokyo Dolls: Episode 0",
 "type": "ALL"
},
{
 "mal_id": 3815,
    "title": "Fengshen Bang",
 "type": "ALL"
},
{
 "mal_id": 3816,
    "title": "Gohan Kaijuu Pap",
 "type": "ALL"
},
{
 "mal_id": 3817,
    "title": "Kai Feng Kidan Movie",
 "type": "ALL"
},
{
 "mal_id": 3818,
    "title": "Huan Jing Nuo De Lin",
 "type": "ALL"
},
{
 "mal_id": 3819,
    "title": "Jiu Ye Shen Chuan",
 "type": "ALL"
},
{
 "mal_id": 3820,
    "title": "Teppen",
 "type": "ALL"
},
{
 "mal_id": 3821,
    "title": "The King of Fighters XV",
 "type": "ALL"
},
{
 "mal_id": 3822,
    "title": "Koha Ginjiro",
 "type": "ALL"
},
{
 "mal_id": 3823,
    "title": "Ninjaman Ippei",
 "type": "ALL"
},
{
 "mal_id": 3824,
    "title": "Jing: Shuang Cheng 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3825,
    "title": "Kuiba Yao Xia Zhuan",
 "type": "ALL"
},
{
 "mal_id": 3826,
    "title": "Tu Xia Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 3827,
    "title": "Kyouryoku Boukuusen",
 "type": "ALL"
},
{
 "mal_id": 3828,
    "title": "Xian Jian Qi Xia Zhuan: Huan Li Jing",
 "type": "ALL"
},
{
 "mal_id": 3829,
    "title": "Monster ni Natta Domerica",
 "type": "ALL"
},
{
 "mal_id": 3830,
    "title": "Ponsuke no Udekurabe",
 "type": "ALL"
},
{
 "mal_id": 3831,
    "title": "Youkai Ninpouchou Jiraiya!",
 "type": "ALL"
},
{
 "mal_id": 3832,
    "title": "Chiisana Kyojin Microman: Daigekisen! Microman vs. Saikyou Senshi Gorgon",
 "type": "ALL"
},
{
 "mal_id": 3833,
    "title": "Tai Yi Xian Mo Lu Zhi Ling Fei Ji",
 "type": "ALL"
},
{
 "mal_id": 3834,
    "title": "Narara Superboard",
 "type": "ALL"
},
{
 "mal_id": 3835,
    "title": "Taikong Lixianji",
 "type": "ALL"
},
{
 "mal_id": 3836,
    "title": "Youxia Zhanji",
 "type": "ALL"
},
{
 "mal_id": 3837,
    "title": "Majin Sentai Death Ranger: Ubawareta Pudding!",
 "type": "ALL"
},
{
 "mal_id": 3838,
    "title": "Shan T Lao Fu Zi",
 "type": "ALL"
},
{
 "mal_id": 3839,
    "title": "Solar I.II.III",
 "type": "ALL"
},
{
 "mal_id": 3840,
    "title": "Cheorin Samchongsa",
 "type": "ALL"
},
{
 "mal_id": 3841,
    "title": "Sengoku Bushou Retsuden Bakufuu Douji Hissatsuman",
 "type": "ALL"
},
{
 "mal_id": 3842,
    "title": "Vegeta Super Yasaijin ni Narou-hen",
 "type": "ALL"
},
{
 "mal_id": 3843,
    "title": "Benghuai Xinghe",
 "type": "ALL"
},
{
 "mal_id": 3844,
    "title": "Taekwon Dongja Maruchi Arachi",
 "type": "ALL"
},
{
 "mal_id": 3845,
    "title": "Yeonghongibyeong Lazenca",
 "type": "ALL"
},
{
 "mal_id": 3846,
    "title": "Binghuo Mochu",
 "type": "ALL"
},
{
 "mal_id": 3847,
    "title": "Kangetsu Ittou: Akuryou Kiri",
 "type": "ALL"
},
{
 "mal_id": 3848,
    "title": "Sangokushi",
 "type": "ALL"
},
{
 "mal_id": 3849,
    "title": "Examurai Sengoku Recap",
 "type": "ALL"
},
{
 "mal_id": 3850,
    "title": "Itsuka no Main: Kaminari Shounen - Tenta Sanjou!",
 "type": "ALL"
},
{
 "mal_id": 3851,
    "title": "Choubakumatsu Shounen Seiki Takamaru",
 "type": "ALL"
},
{
 "mal_id": 3852,
    "title": "Robot Taekwon V: Wooju Jakjeon",
 "type": "ALL"
},
{
 "mal_id": 3853,
    "title": "Eunhajeonseol Tera",
 "type": "ALL"
},
{
 "mal_id": 3854,
    "title": "Kushimitama Samurai",
 "type": "ALL"
},
{
 "mal_id": 3855,
    "title": "Da Wei Bei Ken: Daomei Tegong Xiong",
 "type": "ALL"
},
{
 "mal_id": 3856,
    "title": "Qiang Shen Ji: Tegong Shijie Pian",
 "type": "ALL"
},
{
 "mal_id": 3857,
    "title": "Bai She Chuan Zhi Bai Suzhen",
 "type": "ALL"
},
{
 "mal_id": 3858,
    "title": "Yinhe Zhi Xin",
 "type": "ALL"
},
{
 "mal_id": 3859,
    "title": "Tian Yi Que",
 "type": "ALL"
},
{
 "mal_id": 3860,
    "title": "Xingji Biaoche Wang",
 "type": "ALL"
},
{
 "mal_id": 3861,
    "title": "Zhen Dao Ge: Chenshi Hang",
 "type": "ALL"
},
{
 "mal_id": 3862,
    "title": "Super Taekwon V",
 "type": "ALL"
},
{
 "mal_id": 3863,
    "title": "Shinkansen Henkei Robo Shinkalion The Animation Recap",
 "type": "ALL"
},
{
 "mal_id": 3864,
    "title": "Bakugan: Evolutions",
 "type": "ALL"
},
{
 "mal_id": 3865,
    "title": "GUNbare! Game Tengoku: The Game Paradise 2",
 "type": "ALL"
},
{
 "mal_id": 3866,
    "title": "Naniwa Yuukyouden",
 "type": "ALL"
},
{
 "mal_id": 3867,
    "title": "Beompeoking Jaepeo",
 "type": "ALL"
},
{
 "mal_id": 3868,
    "title": "Tasuuketsu: Judgement Assizes",
 "type": "ALL"
},
{
 "mal_id": 3869,
    "title": "Hwanggeum Cheolin",
 "type": "ALL"
},
{
 "mal_id": 3870,
    "title": "Robot Taekwon V 3tan! Sujung Teukgongdae",
 "type": "ALL"
},
{
 "mal_id": 3871,
    "title": "Shaonian Baima Zui Chunfeng",
 "type": "ALL"
},
{
 "mal_id": 3872,
    "title": "T-Rex",
 "type": "ALL"
},
{
 "mal_id": 3873,
    "title": "Tu Xia Zhi Qing Li Chuanshuo",
 "type": "ALL"
},
{
 "mal_id": 3874,
    "title": "Madou King Granzort: Nonstop Rabi",
 "type": "ALL"
},
{
 "mal_id": 3875,
    "title": "Miracle Psychicer Seizan",
 "type": "ALL"
},
{
 "mal_id": 3876,
    "title": "Time-Patrol Bon: Fujiko F. Fujio Anime Special - SF Adventure",
 "type": "ALL"
},
{
 "mal_id": 3877,
    "title": "Go! Go! Kadendanshi 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3878,
    "title": "Hopiwa Chadolbawi",
 "type": "ALL"
},
{
 "mal_id": 3879,
    "title": "Wo Jia Da Shixiong You Dian Kaopu",
 "type": "ALL"
},
{
 "mal_id": 3880,
    "title": "Bing Zhu Qi Hun",
 "type": "ALL"
},
{
 "mal_id": 3881,
    "title": "Geki Drive",
 "type": "ALL"
},
{
 "mal_id": 3882,
    "title": "Philip",
 "type": "ALL"
},
{
 "mal_id": 3883,
    "title": "Shaonian Ge Xing: Feng Hua Xue Yue Pian Part 2",
 "type": "ALL"
},
{
 "mal_id": 3884,
    "title": "AOTU Shijie 3",
 "type": "ALL"
},
{
 "mal_id": 3885,
    "title": "Zhan Shuang Panini",
 "type": "ALL"
},
{
 "mal_id": 3886,
    "title": "Zoku Naniwa Yuukyouden",
 "type": "ALL"
},
{
 "mal_id": 3887,
    "title": "Deliver Police: Nishitokyo-shi Deliver Keisatsutai",
 "type": "ALL"
},
{
 "mal_id": 3888,
    "title": "Kuuchuu Gunkan Atlantis",
 "type": "ALL"
},
{
 "mal_id": 3889,
    "title": "Xiyou Ji: Zai Shi Yao Wang",
 "type": "ALL"
},
{
 "mal_id": 3890,
    "title": "Dragon Egg",
 "type": "ALL"
},
{
 "mal_id": 3891,
    "title": "Qiang Shen Ji: Xuezu Mishi Pian",
 "type": "ALL"
},
{
 "mal_id": 3892,
    "title": "Zhu Tian Ji",
 "type": "ALL"
},
{
 "mal_id": 3893,
    "title": "Genki Bakuhatsu Ganbaruger: Hyakka",
 "type": "ALL"
},
{
 "mal_id": 3894,
    "title": "Jeonja Ingan 337",
 "type": "ALL"
},
{
 "mal_id": 3895,
    "title": "Sora no Arawashi",
 "type": "ALL"
},
{
 "mal_id": 3896,
    "title": "Hokseong Robot Sseondeo A",
 "type": "ALL"
},
{
 "mal_id": 3897,
    "title": "Narara Wonder Gongju",
 "type": "ALL"
},
{
 "mal_id": 3898,
    "title": "Shiden Pilot",
 "type": "ALL"
},
{
 "mal_id": 3899,
    "title": "Street Fighter IV: Aftermath",
 "type": "ALL"
},
{
 "mal_id": 3900,
    "title": "Chao Shen Youxi",
 "type": "ALL"
},
{
 "mal_id": 3901,
    "title": "Shi Wan Ge Leng Xiaohua Movie 2",
 "type": "ALL"
},
{
 "mal_id": 3902,
    "title": "Son O-gong gwa Byeoldeul-ui Jeonjaeng",
 "type": "ALL"
},
{
 "mal_id": 3903,
    "title": "Chikyuu SOS Sore Ike Kororin",
 "type": "ALL"
},
{
 "mal_id": 3904,
    "title": "Shin Choubakumatsu Shounen Seiki Takamaru",
 "type": "ALL"
},
{
 "mal_id": 3905,
    "title": "Bikkuriman: Daiichiji Seima Taisen",
 "type": "ALL"
},
{
 "mal_id": 3906,
    "title": "Bikkuriman: Moen Zone no Himitsu",
 "type": "ALL"
},
{
 "mal_id": 3907,
    "title": "Robot King",
 "type": "ALL"
},
{
 "mal_id": 3908,
    "title": "Gunners",
 "type": "ALL"
},
{
 "mal_id": 3909,
    "title": "Narara! Ujujeonham Geobukseon",
 "type": "ALL"
},
{
 "mal_id": 3910,
    "title": "Chuanyue Huoxian: Youling Jihua",
 "type": "ALL"
},
{
 "mal_id": 3911,
    "title": "Space Shower Man: Legacy for the Future",
 "type": "ALL"
},
{
 "mal_id": 3912,
    "title": "High & Low: G-Sword OVA",
 "type": "ALL"
},
{
 "mal_id": 3913,
    "title": "Wan Yu Feng Shen",
 "type": "ALL"
},
{
 "mal_id": 3914,
    "title": "Xi Yangyang Yu Hui Tailang: Juezhan Ci Shidai",
 "type": "ALL"
},
{
 "mal_id": 3915,
    "title": "Wonder 3 Pilot",
 "type": "ALL"
},
{
 "mal_id": 3916,
    "title": "Si Hai Jing Qi 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 3917,
    "title": "Jiuzhou Feichang Dao",
 "type": "ALL"
},
{
 "mal_id": 3918,
    "title": "Tian Yu 2nd Season: Cang Gu Zhi Ban",
 "type": "ALL"
},
{
 "mal_id": 3919,
    "title": "Dokkaebi Gamtu",
 "type": "ALL"
},
{
 "mal_id": 3920,
    "title": "Cheol-in 007",
 "type": "ALL"
},
{
 "mal_id": 3921,
    "title": "Eunhahamdae Jiguho",
 "type": "ALL"
},
{
 "mal_id": 3922,
    "title": "Dokkaebi Bangmang-I",
 "type": "ALL"
},
{
 "mal_id": 3923,
    "title": "Jian Yu Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 3924,
    "title": "Renwu Dashi",
 "type": "ALL"
},
{
 "mal_id": 3925,
    "title": "Nanbo no Monjai! Yankee Gurentai",
 "type": "ALL"
},
{
 "mal_id": 3926,
    "title": "Tough Boy",
 "type": "ALL"
},
{
 "mal_id": 3927,
    "title": "Momotaros no Natsuyasumi",
 "type": "ALL"
},
{
 "mal_id": 3928,
    "title": "Gancheopjamneun Ttorijanggun",
 "type": "ALL"
},
{
 "mal_id": 3929,
    "title": "Kouryuu Densetsu Villgust PV",
 "type": "ALL"
},
{
 "mal_id": 3930,
    "title": "Big X Episode 0",
 "type": "ALL"
},
{
 "mal_id": 3931,
    "title": "Super Titans 15",
 "type": "ALL"
},
{
 "mal_id": 3932,
    "title": "Naniwa Yuukyouden: Nekketsu!! Bakushou Mankai-hen",
 "type": "ALL"
},
{
 "mal_id": 3933,
    "title": "Renjian Zui Deyi",
 "type": "ALL"
},
{
 "mal_id": 3934,
    "title": "Ganba! Fly High",
 "type": "ALL"
},
{
 "mal_id": 3935,
    "title": "Ultra Dino Makera",
 "type": "ALL"
},
{
 "mal_id": 3936,
    "title": "Xpice",
 "type": "ALL"
},
{
 "mal_id": 3937,
    "title": "Ninja Bugei-chou Pilot Film",
 "type": "ALL"
},
{
 "mal_id": 3938,
    "title": "Please! Marry Me!!",
 "type": "ALL"
},
{
 "mal_id": 3939,
    "title": "Dash! Yonkurou: Horizon Gundan vs. Dash Gundan",
 "type": "ALL"
},
{
 "mal_id": 3940,
    "title": "Guan Hai Ce Zhi Tie Qi Xiong Guan",
 "type": "ALL"
},
{
 "mal_id": 3941,
    "title": "Beam!",
 "type": "ALL"
},
{
 "mal_id": 3942,
    "title": "Shimajirou to Ehon no Kuni",
 "type": "ALL"
},
{
 "mal_id": 3943,
    "title": "Taeng-gu & Ulasyong",
 "type": "ALL"
},
{
 "mal_id": 3944,
    "title": "Shiroi Zou (1981)",
 "type": "ALL"
},
{
 "mal_id": 3945,
    "title": "Lie Yang Tiandao II",
 "type": "ALL"
},
{
 "mal_id": 3946,
    "title": "Moshi Juexing: Suyuan",
 "type": "ALL"
},
{
 "mal_id": 3947,
    "title": "Role Playing Soldier",
 "type": "ALL"
},
{
 "mal_id": 3948,
    "title": "Kagaku Manga Survival",
 "type": "ALL"
},
{
 "mal_id": 3949,
    "title": "Shinkai no Survival!",
 "type": "ALL"
},
{
 "mal_id": 3950,
    "title": "Lie Yang Tiandao I",
 "type": "ALL"
},
{
 "mal_id": 3951,
    "title": "Magnerobo Ga-Keen Recap",
 "type": "ALL"
},
{
 "mal_id": 3952,
    "title": "Xiao Taiji",
 "type": "ALL"
},
{
 "mal_id": 3953,
    "title": "Megido 72: Nagaki Sen Tabi no Katawara de",
 "type": "ALL"
},
{
 "mal_id": 3954,
    "title": "Mini Yon Soldier Rin!",
 "type": "ALL"
},
{
 "mal_id": 3955,
    "title": "Meoteoldosawa 108 Yogoe",
 "type": "ALL"
},
{
 "mal_id": 3956,
    "title": "Meoteoldosawa Ttomae",
 "type": "ALL"
},
{
 "mal_id": 3957,
    "title": "Naniwa Yuukyouden: Chou Gokudou! Yoru no Bat wa Manrui-hen",
 "type": "ALL"
},
{
 "mal_id": 3958,
    "title": "Geisters Movie: Hikari no Shou",
 "type": "ALL"
},
{
 "mal_id": 3959,
    "title": "Hong Haier: Juezhan Huoyanshan",
 "type": "ALL"
},
{
 "mal_id": 3960,
    "title": "Feng Shu Zhan Jing",
 "type": "ALL"
},
{
 "mal_id": 3961,
    "title": "Geisters Movie: Inochi no Shou",
 "type": "ALL"
},
{
 "mal_id": 3962,
    "title": "Feng Qi Luoyang Zhi Shen Ji Shaonian",
 "type": "ALL"
},
{
 "mal_id": 3963,
    "title": "Jack Nicholson",
 "type": "ALL"
},
{
 "mal_id": 3964,
    "title": "Mecha Robot Corps 3",
 "type": "ALL"
},
{
 "mal_id": 3965,
    "title": "Shiroi Zou",
 "type": "ALL"
},
{
 "mal_id": 3966,
    "title": "Sonyeon 007 Eunhateukgongdae",
 "type": "ALL"
},
{
 "mal_id": 3967,
    "title": "Gongnyong Baengmannyeon Ttori",
 "type": "ALL"
},
{
 "mal_id": 3968,
    "title": "Chel-in sacheon-wang",
 "type": "ALL"
},
{
 "mal_id": 3969,
    "title": "Miraesonyeon Kunta Beomyuda 5000 Nyeon",
 "type": "ALL"
},
{
 "mal_id": 3970,
    "title": "Xing You Ji: Fengbao Famila 2",
 "type": "ALL"
},
{
 "mal_id": 3971,
    "title": "Jing Cui Xian Zun",
 "type": "ALL"
},
{
 "mal_id": 3972,
    "title": "Nanbo no Monjai! 2: Yankee Gurentai",
 "type": "ALL"
},
{
 "mal_id": 3973,
    "title": "Tai Yi Xian Mo Lu Zhi Ling Fei Ji IV",
 "type": "ALL"
},
{
 "mal_id": 3974,
    "title": "Chi Jian Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 3975,
    "title": "Lightning Atom",
 "type": "ALL"
},
{
 "mal_id": 3976,
    "title": "Soukou Kihei Votoms: Case;Irvine - Tenmatsu",
 "type": "ALL"
},
{
 "mal_id": 3977,
    "title": "Xiyue Qi Tong",
 "type": "ALL"
},
{
 "mal_id": 3978,
    "title": "Hua Jianghu: Gui Yexing",
 "type": "ALL"
},
{
 "mal_id": 3979,
    "title": "Naniwa Yuukyouden: Kyouretsu! Ana ga Attara Iretai-hen",
 "type": "ALL"
},
{
 "mal_id": 3980,
    "title": "Mujeokcheorin Rambot",
 "type": "ALL"
},
{
 "mal_id": 3981,
    "title": "San Jian Hao Zhi Ban Mian Ren",
 "type": "ALL"
},
{
 "mal_id": 3982,
    "title": "Slippy Dandy",
 "type": "ALL"
},
{
 "mal_id": 3983,
    "title": "Uju Jeonsa Hong Gildong",
 "type": "ALL"
},
{
 "mal_id": 3984,
    "title": "Meoteoldosa",
 "type": "ALL"
},
{
 "mal_id": 3985,
    "title": "Xiling Diguo",
 "type": "ALL"
},
{
 "mal_id": 3986,
    "title": "Chao Wa Zhanshi",
 "type": "ALL"
},
{
 "mal_id": 3987,
    "title": "Marin X",
 "type": "ALL"
},
{
 "mal_id": 3988,
    "title": "Naniwa Yuukyouden: Kanketsu-hen",
 "type": "ALL"
},
{
 "mal_id": 3989,
    "title": "Tai Yi Xian Mo Lu Zhi Ling Fei Ji III",
 "type": "ALL"
},
{
 "mal_id": 3990,
    "title": "Xiong Bing Lian: Zhi Zhu Tian Jianglin",
 "type": "ALL"
},
{
 "mal_id": 3991,
    "title": "Lengxue Kuang Yan",
 "type": "ALL"
},
{
 "mal_id": 3992,
    "title": "Don't Cry (Movie)",
 "type": "ALL"
},
{
 "mal_id": 3993,
    "title": "Nareuneun Dwaeji - Haejeok Mateo",
 "type": "ALL"
},
{
 "mal_id": 3994,
    "title": "Xiyue Qi Tong (2006)",
 "type": "ALL"
},
{
 "mal_id": 3995,
    "title": "Kkoma Bus Tayo-ui Ace Guchuljakjeon",
 "type": "ALL"
},
{
 "mal_id": 3996,
    "title": "Sonyeon 007 Jihajeguk",
 "type": "ALL"
},
{
 "mal_id": 3997,
    "title": "Hong Gil Dong 2084",
 "type": "ALL"
},
{
 "mal_id": 3998,
    "title": "Goesu Daejeonjaeng",
 "type": "ALL"
},
{
 "mal_id": 3999,
    "title": "Qiang Shen Ji: Shenhai Xianluo Pian",
 "type": "ALL"
},
{
 "mal_id": 4000,
    "title": "Ttoli Janggun",
 "type": "ALL"
},
{
 "mal_id": 4001,
    "title": "Menghuan Xiyou",
 "type": "ALL"
},
{
 "mal_id": 4002,
    "title": "Devil & Devil",
 "type": "ALL"
},
{
 "mal_id": 4003,
    "title": "Gu Xiong",
 "type": "ALL"
},
{
 "mal_id": 4004,
    "title": "Video Ranger 007",
 "type": "ALL"
},
{
 "mal_id": 4005,
    "title": "Ji Jia Shou Shen Zhi Baolie Feiche",
 "type": "ALL"
},
{
 "mal_id": 4006,
    "title": "Long She Yanyi",
 "type": "ALL"
},
{
 "mal_id": 4007,
    "title": "Taegeugsonyeon Huin Dogsuli",
 "type": "ALL"
},
{
 "mal_id": 4008,
    "title": "Wangu Jian Shen",
 "type": "ALL"
},
{
 "mal_id": 4009,
    "title": "Mask Masters",
 "type": "ALL"
},
{
 "mal_id": 4010,
    "title": "Tai Yi Xian Mo Lu Zhi Ling Fei Ji II",
 "type": "ALL"
},
{
 "mal_id": 4011,
    "title": "Zone: Intro",
 "type": "ALL"
},
{
 "mal_id": 4012,
    "title": "Kuro Kishi to Shiro no Maou VR Sennyuu! Maoujou-hen",
 "type": "ALL"
},
{
 "mal_id": 4013,
    "title": "Super Samchongsa",
 "type": "ALL"
},
{
 "mal_id": 4014,
    "title": "Mu Wang Zhi Wang: You Du Zhan",
 "type": "ALL"
},
{
 "mal_id": 4015,
    "title": "Qi Jie Diyi Xian",
 "type": "ALL"
},
{
 "mal_id": 4016,
    "title": "Menghuan Xiyou 2",
 "type": "ALL"
},
{
 "mal_id": 4017,
    "title": "Dou Hun Wei Zhi Xuan Yue Qiyuan IV",
 "type": "ALL"
},
{
 "mal_id": 4018,
    "title": "Chao Wa Zhanshi: Weiwu Jiaoguan",
 "type": "ALL"
},
{
 "mal_id": 4019,
    "title": "Wu Sheng Guan Gong",
 "type": "ALL"
},
{
 "mal_id": 4020,
    "title": "Moshi Juexing: Ruqin",
 "type": "ALL"
},
{
 "mal_id": 4021,
    "title": "Zhu Zhu Xia: Bukesiyi de Shijie",
 "type": "ALL"
},
{
 "mal_id": 4022,
    "title": "Ninja Box",
 "type": "ALL"
},
{
 "mal_id": 4023,
    "title": "Zhandou Wang Zhi Jufeng Zhan Hun 5: Heti Fanwai Pian",
 "type": "ALL"
},
{
 "mal_id": 4024,
    "title": "Bei Ken Xiong 2: Jinpai Tegong",
 "type": "ALL"
},
{
 "mal_id": 4025,
    "title": "Chinzei Hachirou Tametomo (2021)",
 "type": "ALL"
},
{
 "mal_id": 4026,
    "title": "Kkomaeosa Ttori",
 "type": "ALL"
},
{
 "mal_id": 4027,
    "title": "Monkateu",
 "type": "ALL"
},
{
 "mal_id": 4028,
    "title": "Jingju Mao Zhi Cheng Feng Polang",
 "type": "ALL"
},
{
 "mal_id": 4029,
    "title": "Shen Lan Qi Yu Wushuang Zhu",
 "type": "ALL"
},
{
 "mal_id": 4030,
    "title": "Ye Xing Xia Ying",
 "type": "ALL"
},
{
 "mal_id": 4031,
    "title": "Gabuli",
 "type": "ALL"
},
{
 "mal_id": 4032,
    "title": "Kkureogi Balmyeongwang",
 "type": "ALL"
},
{
 "mal_id": 4033,
    "title": "Ujusonyeon Kaesi",
 "type": "ALL"
},
{
 "mal_id": 4034,
    "title": "Girls★Battle Aloe Megumi",
 "type": "ALL"
},
{
 "mal_id": 4035,
    "title": "Zi Chuan: Yincang Hudong Ju",
 "type": "ALL"
},
{
 "mal_id": 4036,
    "title": "Running Man",
 "type": "ALL"
},
{
 "mal_id": 4037,
    "title": "Xiuluo Wu Shen",
 "type": "ALL"
},
{
 "mal_id": 4038,
    "title": "Xin Qin Shi Mingyue",
 "type": "ALL"
},
{
 "mal_id": 4039,
    "title": "Koi Nobori",
 "type": "ALL"
},
{
 "mal_id": 4040,
    "title": "Getter Robo Memorial",
 "type": "ALL"
},
{
 "mal_id": 4041,
    "title": "Lalala Demacia",
 "type": "ALL"
},
{
 "mal_id": 4042,
    "title": "Wu Kong Dazhan Er Lang Shen",
 "type": "ALL"
},
{
 "mal_id": 4043,
    "title": "McDull: Fan Bao Qibing",
 "type": "ALL"
},
{
 "mal_id": 4044,
    "title": "Huang Feihong Yong Chuang Tianxia",
 "type": "ALL"
},
{
 "mal_id": 4045,
    "title": "Zhandou Wang Zhi Jufeng Zhan Hun 5",
 "type": "ALL"
},
{
 "mal_id": 4046,
    "title": "Mingwang Huan Shi Lu",
 "type": "ALL"
},
{
 "mal_id": 4047,
    "title": "Moshi Juexing: Ruqin 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4048,
    "title": "Duel Masters King Max",
 "type": "ALL"
},
{
 "mal_id": 4049,
    "title": "Zet Ranger",
 "type": "ALL"
},
{
 "mal_id": 4050,
    "title": "Chao Shen Xueyuan",
 "type": "ALL"
},
{
 "mal_id": 4051,
    "title": "Cap Kakumei Bottleman DX",
 "type": "ALL"
},
{
 "mal_id": 4052,
    "title": "Miniforce",
 "type": "ALL"
},
{
 "mal_id": 4053,
    "title": "Shijian Qiutu",
 "type": "ALL"
},
{
 "mal_id": 4054,
    "title": "Aerover: Seupeiseu Drone Gwihwan",
 "type": "ALL"
},
{
 "mal_id": 4055,
    "title": "Chao Shen Xueyuan: Zhi Hei Jia",
 "type": "ALL"
},
{
 "mal_id": 4056,
    "title": "Xing Hai Qishi: Xinghuo Chongran",
 "type": "ALL"
},
{
 "mal_id": 4057,
    "title": "Jingju Mao",
 "type": "ALL"
},
{
 "mal_id": 4058,
    "title": "Wu Ying Sanqian Dao",
 "type": "ALL"
},
{
 "mal_id": 4059,
    "title": "Battle Mode",
 "type": "ALL"
},
{
 "mal_id": 4060,
    "title": "Shin Skyers 5 EX",
 "type": "ALL"
},
{
 "mal_id": 4061,
    "title": "Honky Tonk Women",
 "type": "ALL"
},
{
 "mal_id": 4062,
    "title": "Hulu Xiao Jin Gang",
 "type": "ALL"
},
{
 "mal_id": 4063,
    "title": "Baolie Feiche 3: Shou Shen Heti",
 "type": "ALL"
},
{
 "mal_id": 4064,
    "title": "Baolie Feiche II: Xing Neng Juexing",
 "type": "ALL"
},
{
 "mal_id": 4065,
    "title": "Chao Shen Xueyuan: Shen yu Shen",
 "type": "ALL"
},
{
 "mal_id": 4066,
    "title": "Jingju Mao Zhi Xinnian de Maoxian",
 "type": "ALL"
},
{
 "mal_id": 4067,
    "title": "Jingju Mao Zhi Jiaota Shidi",
 "type": "ALL"
},
{
 "mal_id": 4068,
    "title": "Skyers 5 EX",
 "type": "ALL"
},
{
 "mal_id": 4069,
    "title": "Kamen Senshi Lavithunder CM",
 "type": "ALL"
},
{
 "mal_id": 4070,
    "title": "Sigan Yeohaengja Luke",
 "type": "ALL"
},
{
 "mal_id": 4071,
    "title": "Shaolin Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 4072,
    "title": "Aerover: Pinigseuui Buhwal",
 "type": "ALL"
},
{
 "mal_id": 4073,
    "title": "Lalala Demacia Third Season",
 "type": "ALL"
},
{
 "mal_id": 4074,
    "title": "Lalala Demacia Second Season",
 "type": "ALL"
},
{
 "mal_id": 4075,
    "title": "Ninja Box 3rd Season",
 "type": "ALL"
},
{
 "mal_id": 4076,
    "title": "Wu Tain Yu Shang 2035",
 "type": "ALL"
},
{
 "mal_id": 4077,
    "title": "Boy General",
 "type": "ALL"
},
{
 "mal_id": 4078,
    "title": "Gu Xiong: Huo Qi",
 "type": "ALL"
},
{
 "mal_id": 4079,
    "title": "Hong Gildong Janggun",
 "type": "ALL"
},
{
 "mal_id": 4080,
    "title": "Ninja Box 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4081,
    "title": "Ushigaeru",
 "type": "ALL"
},
{
 "mal_id": 4082,
    "title": "Wuxian Shijie",
 "type": "ALL"
},
{
 "mal_id": 4083,
    "title": "Chao Shou Wuzhuang: Renzhe Wudi",
 "type": "ALL"
},
{
 "mal_id": 4084,
    "title": "Hei Mao Jing Zhan Zhi Fei Cui Zhi Xing",
 "type": "ALL"
},
{
 "mal_id": 4085,
    "title": "Iljimae",
 "type": "ALL"
},
{
 "mal_id": 4086,
    "title": "Jun You Yun",
 "type": "ALL"
},
{
 "mal_id": 4087,
    "title": "Hei Mao Jing Zhang (2010)",
 "type": "ALL"
},
{
 "mal_id": 4088,
    "title": "Shaonian Jinyiwei Xuzhang",
 "type": "ALL"
},
{
 "mal_id": 4089,
    "title": "Metallion",
 "type": "ALL"
},
{
 "mal_id": 4090,
    "title": "Feng Shen Bang Chuanqi",
 "type": "ALL"
},
{
 "mal_id": 4091,
    "title": "Doraon Yeongung Hong Gildong",
 "type": "ALL"
},
{
 "mal_id": 4092,
    "title": "Ji Jia Shou Shen",
 "type": "ALL"
},
{
 "mal_id": 4093,
    "title": "SMAP 2000 Concert Anime",
 "type": "ALL"
},
{
 "mal_id": 4094,
    "title": "Matenrou to Rinkai-ten",
 "type": "ALL"
},
{
 "mal_id": 4095,
    "title": "Synostone",
 "type": "ALL"
},
{
 "mal_id": 4096,
    "title": "Te Ke Dong Ji Pian",
 "type": "ALL"
},
{
 "mal_id": 4097,
    "title": "Ujudaejang Aekkunun",
 "type": "ALL"
},
{
 "mal_id": 4098,
    "title": "Uchuu Ace Pilots",
 "type": "ALL"
},
{
 "mal_id": 4099,
    "title": "Geo Mecha: Beast Guardian",
 "type": "ALL"
},
{
 "mal_id": 4100,
    "title": "Ji Jia Shou Shen 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4101,
    "title": "Geo Mecha: Captain Dino",
 "type": "ALL"
},
{
 "mal_id": 4102,
    "title": "Q-Borg",
 "type": "ALL"
},
{
 "mal_id": 4103,
    "title": "Cike Nieyinniang Qianchuan",
 "type": "ALL"
},
{
 "mal_id": 4104,
    "title": "Qihuan Long Bao",
 "type": "ALL"
},
{
 "mal_id": 4105,
    "title": "Shen Shou Jin Gang",
 "type": "ALL"
},
{
 "mal_id": 4106,
    "title": "Dan Zhu Chuan Shuo",
 "type": "ALL"
},
{
 "mal_id": 4107,
    "title": "Chuldong! Robot V",
 "type": "ALL"
},
{
 "mal_id": 4108,
    "title": "Jing Ma Zhanshi",
 "type": "ALL"
},
{
 "mal_id": 4109,
    "title": "Son Ogong",
 "type": "ALL"
},
{
 "mal_id": 4110,
    "title": "G Fighters",
 "type": "ALL"
},
{
 "mal_id": 4111,
    "title": "Fengyu Lang Qiao",
 "type": "ALL"
},
{
 "mal_id": 4112,
    "title": "Ni Yian Jian Shen",
 "type": "ALL"
},
{
 "mal_id": 4113,
    "title": "Jouiseon-in",
 "type": "ALL"
},
{
 "mal_id": 4114,
    "title": "Shen Wu Tianzun",
 "type": "ALL"
},
{
 "mal_id": 4115,
    "title": "Qi Jiguang",
 "type": "ALL"
},
{
 "mal_id": 4116,
    "title": "Shen Yin Wangzuo",
 "type": "ALL"
},
{
 "mal_id": 4117,
    "title": "Generic Riot!!",
 "type": "ALL"
},
{
 "mal_id": 4118,
    "title": "5-fun de Wakaru! Tate no Yuusha no Nariagari",
 "type": "ALL"
},
{
 "mal_id": 4119,
    "title": "Alice Gear Aegis",
 "type": "ALL"
},
{
 "mal_id": 4120,
    "title": "Arifureta Shokugyou de Sekai Saikyou 2nd Season OVA",
 "type": "ALL"
},
{
 "mal_id": 4121,
    "title": "Ayakashi Triangle",
 "type": "ALL"
},
{
 "mal_id": 4122,
    "title": "Bastard!! Ankoku no Hakaishin (ONA) Part 2",
 "type": "ALL"
},
{
 "mal_id": 4123,
    "title": "Bucchigire!",
 "type": "ALL"
},
{
 "mal_id": 4124,
    "title": "Chao Bian Wu Shou",
 "type": "ALL"
},
{
 "mal_id": 4125,
    "title": "Da Li Si Rizhi 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4126,
    "title": "Doupo Cangqiong: Nian Fan",
 "type": "ALL"
},
{
 "mal_id": 4127,
    "title": "Doupo Cangqiong: Yuanqi",
 "type": "ALL"
},
{
 "mal_id": 4128,
    "title": "FLCL: Grunge",
 "type": "ALL"
},
{
 "mal_id": 4129,
    "title": "FLCL: Shoegaze",
 "type": "ALL"
},
{
 "mal_id": 4130,
    "title": "Golden Kamuy 4th Season",
 "type": "ALL"
},
{
 "mal_id": 4131,
    "title": "Gridman x Dynazenon",
 "type": "ALL"
},
{
 "mal_id": 4132,
    "title": "Grisaia: Phantom Trigger the Animation (TV)",
 "type": "ALL"
},
{
 "mal_id": 4133,
    "title": "Hanma Baki: Son of Ogre 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4134,
    "title": "Helck",
 "type": "ALL"
},
{
 "mal_id": 4135,
    "title": "Hoshi no Samidare",
 "type": "ALL"
},
{
 "mal_id": 4136,
    "title": "Ji Gong: Xiang Long Jiang Shi",
 "type": "ALL"
},
{
 "mal_id": 4137,
    "title": "JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 2",
 "type": "ALL"
},
{
 "mal_id": 4138,
    "title": "Jujutsu Kaisen (TV) 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4139,
    "title": "Kengan Ashura (Zoku-hen)",
 "type": "ALL"
},
{
 "mal_id": 4140,
    "title": "Keshin",
 "type": "ALL"
},
{
 "mal_id": 4141,
    "title": "Kimetsu no Yaiba: Katanakaji no Sato-hen",
 "type": "ALL"
},
{
 "mal_id": 4142,
    "title": "Kuro no Shoukanshi",
 "type": "ALL"
},
{
 "mal_id": 4143,
    "title": "Mahouka Koukou no Rettousei (Zoku-hen)",
 "type": "ALL"
},
{
 "mal_id": 4144,
    "title": "Megaton-kyuu Musashi 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4145,
    "title": "Musabi Daibakuhatsu",
 "type": "ALL"
},
{
 "mal_id": 4146,
    "title": "Muv-Luv Alternative 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4147,
    "title": "Nanatsu no Maken ga Shihai suru",
 "type": "ALL"
},
{
 "mal_id": 4148,
    "title": "NieR:Automata",
 "type": "ALL"
},
{
 "mal_id": 4149,
    "title": "Nitian Xie Shen",
 "type": "ALL"
},
{
 "mal_id": 4150,
    "title": "Noumin Kanren no Skill bakka Agetetara Nazeka Tsuyoku Natta.",
 "type": "ALL"
},
{
 "mal_id": 4151,
    "title": "One Piece: Otoshidama Special - Tokubetsu Hou Mugiwara Kaizoku-dan no Himitsu!",
 "type": "ALL"
},
{
 "mal_id": 4152,
    "title": "Orient Part 2",
 "type": "ALL"
},
{
 "mal_id": 4153,
    "title": "Oshougatsuda yo! Pokemon Special!",
 "type": "ALL"
},
{
 "mal_id": 4154,
    "title": "Pokemon Legends Arceus",
 "type": "ALL"
},
{
 "mal_id": 4155,
    "title": "Ramen Chai-nyan",
 "type": "ALL"
},
{
 "mal_id": 4156,
    "title": "Rurouni Kenshin: Meiji Kenkaku Romantan (Shin Anime Project)",
 "type": "ALL"
},
{
 "mal_id": 4157,
    "title": "RWBY: Hyousetsu Teikoku",
 "type": "ALL"
},
{
 "mal_id": 4158,
    "title": "Saihate no Paladin 2nd Season",
 "type": "ALL"
},
{
 "mal_id": 4159,
    "title": "Saikyou Onmyouji no Isekai Tenseiki: Geboku no Youkai-domo ni Kurabete Monster ga Yowasugirunda ga",
 "type": "ALL"
},
{
 "mal_id": 4160,
    "title": "Spy Kyoushitsu",
 "type": "ALL"
},
{
 "mal_id": 4161,
    "title": "Spy x Family Part 2",
 "type": "ALL"
},
{
 "mal_id": 4162,
    "title": "Tokyo Revengers: Seiya Kessen-hen",
 "type": "ALL"
},
{
 "mal_id": 4163,
    "title": "Tunshi Yongheng",
 "type": "ALL"
},
{
 "mal_id": 4164,
    "title": "Wu Shan Wu Xing",
 "type": "ALL"
},
{
 "mal_id": 4165,
    "title": "Xing Hai Qishi: Xia Ban Ji",
 "type": "ALL"
},
{
 "mal_id": 4166,
    "title": "Yamato yo, Towa ni: Rebel 3199",
 "type": "ALL"
},
{
 "mal_id": 4167,
    "title": "Zhen Dao Ge: Tebie Pian",
 "type": "ALL"
}
    ]
        })
});