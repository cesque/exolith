const games = [
    { name: "Kingdom: New Lands", link: "https://store.steampowered.com/app/496300/", id: 496300, description: "roguelike village-builder thing where you play as the king or queen" },
    { name: "Wizard of Legend", link: "https://store.steampowered.com/app/445980/", id: 445980, description: "a great little top-down roguelike where you mix and match spells." },
    { name: "Hidden Folks", link: "https://store.steampowered.com/app/435400/", id: 435400, description: "like Where's Wally, but interactive. check the screenshots!" },
    { name: "DEMON'S TILT", link: "https://store.steampowered.com/app/422510/", id: 422510, description: "a bit pricy, but a freakin' cool pinball game. only one table though,,," },
    { name: "Caveblazers", link: "https://store.steampowered.com/app/452060/", id: 452060, description: "cheap little difficult roguelike platformer. like spelunky kinda" },
    { name: "Donut County", link: "https://store.steampowered.com/app/702670/", id: 702670, description: "drop stuff down holes and enjoy the super cute story" },
    { name: "Tick Tock: A Tale for Two", link: "https://store.steampowered.com/app/790740/", id: 790740, description: "a short but fun little co-op (point and click?) puzzle game." },
    { name: "SHENZHEN SOLITAIRE", link: "https://store.steampowered.com/app/570490/", id: 570490, description: "woah how'd this game get in here oh well it's probably mega cheap" },
    { name: "Cogmind", link: "https://store.steampowered.com/app/722730/", id: 722730, description: "mech traditional roguelike. it's got some really good graphics for being a text roguelike" },
    { name: "Out There Somewhere", link: "https://store.steampowered.com/app/263980/", id: 263980, description: "please play this tiny metroidvania it's always very cheap and it's really good" },
    { name: "CYPHER", link: "https://store.steampowered.com/app/746710/", id: 746710, description: "please pick this up if you like ciphers and codes" },
    { name: "The Messenger", link: "https://store.steampowered.com/app/764790/", id: 764790, description: "more devolver! 8bit platformer, very ninja gaiden. has some fun twists :)" },
    { name: "OlliOlli2", link: "https://store.steampowered.com/app/365660/", id: 365660, description: "a skateboarding platformer where you do tricks and try to hit high scores." },
    { name: "Prime Mover", link: "https://store.steampowered.com/app/693700/", id: 693700, description: "it's a zachtronics game but not by zachtronics" },
    { name: "Celeste", link: "https://store.steampowered.com/app/504230/", id: 504230, description: "skill-based platformer game. one of this generation's masterpieces" },
    { name: "LUFTRAUSERS", link: "https://store.steampowered.com/app/233150/", id: 233150, description: "stylish (devolver + vlambeer) game about being in an air dogfight" },
    { name: "Shatter", link: "https://store.steampowered.com/app/20820/", id: 20820, description: "it's breakout, but with magnets and powerups and a KILLER soundtrack" },
    { name: "NEO NEO", link: "https://store.steampowered.com/app/873070/", id: 873070, description: "an intense geometric top-down shooter. very flashy, and VERY cheap" },
    { name: "Hollow Knight", link: "https://store.steampowered.com/app/367520/", id: 367520, description: "another of this gen's masterpieces. the best metroidvania ever made??? please buy" },
    { name: "ШП", link: "https://store.steampowered.com/app/727640/", id: 727640, description: "i got a 502 bad gateway when i opened this and that's probably for the best" },
    { name: "RiME", link: "https://store.steampowered.com/app/493200/", id: 493200, description: "BEAUTIFUL 3D puzzle game. not very hard, focuses more on the experience" },
    { name: "Mini Metro", link: "https://store.steampowered.com/app/287980/", id: 287980, description: "make your own tube system then watch it completely fail to do its job" },
    { name: "Downwell", link: "https://store.steampowered.com/app/360740/", id: 360740, description: "why buy [X] when you just buy [Y] copies of Downwell instead?" },
    { name: "kuso", link: "https://store.steampowered.com/app/578930/", id: 578930, description: "it's the most \"platformer\" platformer game. also check out its prequel, LOVE" },
    { name: "Desert of Vice", link: "https://store.steampowered.com/app/796370/", id: 796370, description: "i wrote the music for this game. it's so cheap. buy it or i cry" },
    { name: "Cosmic Express", link: "https://store.steampowered.com/app/583270/", id: 583270, description: "brutal puzzle game with very cute aesthetics" },
    { name: "SEUM: Speedrunners from Hell", link: "https://store.steampowered.com/app/457210/", id: 457210, description: "quake movement but parkour levels. horribly underrated by everyone i know" },
    { name: "Rain World", link: "https://store.steampowered.com/app/312520/", id: 312520, description: "an atmospheric metroivania. as difficult as it is beautiful as it is terrifying" },
    { name: "Firewatch", link: "https://store.steampowered.com/app/383870/", id: 383870, description: "story-based exploration in a Wyoming national park. superbly atmospheric" },
    { name: "The Witness", link: "https://store.steampowered.com/app/210970/", id: 210970, description: "god this game is fantastic. 3D puzzle game, and that's all you should know before playing." },
    { name: "theHunter: Call of the Wild", link: "https://store.steampowered.com/app/518790/", id: 518790, description: "it's a hunting simulator. very relaxing, very pretty and very immersive" },
    { name: "The Talos Principle", link: "https://store.steampowered.com/app/257510/", id: 257510, description: "incredibly tightly designed first person puzzle game. also it's croatian" },
    { name: "Lovely Planet", link: "https://store.steampowered.com/app/298600/", id: 298600, description: "this is the same game as SEUM but with CUTE AF visuals. speedrunnable 3d platform fps(ish)" },
    { name: "Absolver", link: "https://store.steampowered.com/app/473690/", id: 473690, description: "cool atmosphere melee combat game with progression (it also has pvp)" },
    { name: "BYTEPATH", link: "https://store.steampowered.com/app/760330/", id: 760330, description: "stylish asteroids game with a lot of progression. also it's super cheap. play SNKRX by the same dev!" },
    { name: "Cultist Simulator", link: "https://store.steampowered.com/app/718670/", id: 718670, description: "cryptic card based roguelike??? you dont get told any rules. great writing" },
    { name: "N++", link: "https://store.steampowered.com/app/230270/", id: 230270, description: "a great floaty difficult platformer. it has interchangeable colour palettes!" },
    { name: "Objects in Space", link: "https://store.steampowered.com/app/824070/", id: 824070, description: "space trading game. operate your ship with entirely too many monitors" },
    { name: "Thumper", link: "https://store.steampowered.com/app/356400/", id: 356400, description: "imagine guitar hero but you're a bug having a panic attack" },
    { name: "Slipstream", link: "https://store.steampowered.com/app/732810/", id: 732810, description: "retro 90's arcade inspired racing game. check the screenshots!" },
    { name: "Simmiland", link: "https://store.steampowered.com/app/932850/", id: 932850, description: "a pretty lil god game but you play and combine cards to introduce new elements" },
    { name: "HITMAN 2", link: "https://store.steampowered.com/app/863550/", id: 863550, description: "it's just a great stealth game. if you like it, get Hitman 3" },
    { name: "Downward", link: "https://store.steampowered.com/app/506900/", id: 506900, description: "pretty cool fantasy-ish parkour exploration game. underappreciated" },
    { name: "Receiver", link: "https://store.steampowered.com/app/234190/", id: 234190, description: "roguelike FPS but with full gun handling mechanics... good luck!" },
    { name: "Fidel Dungeon Rescue", link: "https://store.steampowered.com/app/573170/", id: 573170, description: "fantasically designed dog-based puzzle game" },
    { name: "SUPERHOT", link: "https://store.steampowered.com/app/322500/", id: 322500, description: "it's the most innovative shooter i've played in years." },
    { name: "Watch_Dogs 2", link: "https://store.steampowered.com/app/447040/", id: 447040, description: "classic ubi open world game set in San Francisco. a fun story and not very edgy" },
    { name: "Teleglitch", link: "https://store.steampowered.com/app/234390/", id: 234390, description: "kinda underrated roguelike/topdown shooter. cool vision mechanic too" },
    { name: "Environmental Station Alpha", link: "https://store.steampowered.com/app/350070/", id: 350070, description: "if you like metroidvanias you NEED to play this." },
    { name: "ART SQOOL", link: "https://store.steampowered.com/app/953300/", id: 953300, description: "become an artist in a very strange but blessed world" },
    { name: "Super House of Dead Ninjas", link: "https://store.steampowered.com/app/224820/", id: 224820, description: "a super fast ninja platformer. unmissable for the price" },
    { name: "High Hell", link: "https://store.steampowered.com/app/673000/", id: 673000, description: "fast as heck level-based FPS. stylish (devolver published, so of course)" },
    { name: "The Turing Test", link: "https://store.steampowered.com/app/499520/", id: 499520, description: "it's like a worse Portal but its still pretty good" },
    { name: "GoNNER", link: "https://store.steampowered.com/app/437570/", id: 437570, description: "another great roguelike platformer, but with a cool artstyle" },
    { name: "Hexcells", link: "https://store.steampowered.com/sub/50074/", id: 50074, description: "really fantastic sudoku/picross/minesweeper-like gameplay. and there's 3 of them!!!", imageOverride: "https://cdn.cloudflare.steamstatic.com/steam/subs/50074/header_292x136.jpg" },
    { name: "Desert Golfing", link: "https://store.steampowered.com/app/757040/", id: 757040, description: "listen. this is an essential game. you have to believe me. (also the sequel, Golf on Mars)" },

    { name: "Battlerite", link: "https://store.steampowered.com/app/504370/", id: 504370, description: "fun as hell top down arena fighter, with fantastic mechanics. even though it has a small playerbase, you can still find matches!" },
    { name: "SNKRX", link: "https://store.steampowered.com/app/915310/", id: 915310, description: "autochess-style snake with units that shoot at enemies + there's cool powerups + more. mega fun. play BYTEPATH by the same dev!" },
    { name: "Red Orchestra 2", link: "https://store.steampowered.com/app/35450/", id: 35450, description: "cold, depressing FPS. surprisingly immersive, though not much of a playerbase. URA!!!" },
    { name: "GemCraft", link: "https://store.steampowered.com/bundle/13292/GemCraft_Bundle/", id: 437920, description: "the only tower defence games i've played which felt deep enough to keep my attention", imageOverride: "https://cdn.cloudflare.steamstatic.com/steam/bundles/13292/4xj9cc4exspn6e3i/header_292x136.jpg" },
    { name: "Door2:Key", link: "https://store.steampowered.com/app/1161900/", id: 1161900, description: "talos + the witness + baby's first unity game jank, but shows promise. *will* make you motion sick" },
    { name: "Lenna's Inception", link: "https://store.steampowered.com/app/1114870/", id: 1114870, description: "procedurally generated zelda, plus some interesting glitchy mechanics. not bad" },
    { name: "holedown", link: "https://store.steampowered.com/app/1268370/", id: 1268370, description: "one of these bouncy-ball games, which are i think inherently fun" },
    { name: "Puyo Puyo Tetris", link: "https://store.steampowered.com/app/1259790/", id: 1259790, description: "it's puyo puyo + tetris. what else can i write here? (also there's a sequel?)" },
    { name: "DCS World", link: "https://store.steampowered.com/app/223750/", id: 223750, description: "very realistic and unnaproachable combat flight sim. free, but bankrupt yourself with DLC" },
    { name: "RITE", link: "https://store.steampowered.com/app/1322650/", id: 1322650, description: "for their first released game, the dev made a very slick precision platformer. impressed!" },
    { name: "Pro Gymnast", link: "https://store.steampowered.com/app/1214520/", id: 1214520, description: "perform flips and tricks QWOP style, by controlling just your arms and legs" },
    { name: "Tomb of Tyrants", link: "https://store.steampowered.com/app/340360/", id: 340360, description: "10000000/YMBAB-like, but with some extra mechanics which i understand to varying degrees" },
    { name: "ShootMania Storm", link: "https://store.steampowered.com/app/229870/", id: 229870, description: "difficult to recommend, but i love it's strategic yet frenetic gameplay. TERRIBLE menus, good lord. and lots of french people" },
    { name: "Wilmot's Warehouse", link: "https://store.steampowered.com/app/839870/", id: 839870, description: "organise abstract boxes and get very stressed. also, play with a friend!" },
    { name: "Slasher's Keep", link: "https://store.steampowered.com/app/598060/", id: 598060, description: "billboarded enemies and random loot and a big dungeon to explore. pass down some spare loot to your future selves!" },
    { name: "Spin Rhythm XD", link: "https://store.steampowered.com/app/1058830/", id: 1058830, description: "great rhythm game, equally great song selection. wish i had a cool custom controller :(" },
    { name: "Geometry Arena", link: "https://store.steampowered.com/app/1255650/", id: 1255650, description: "roguelike geometry wars, where you'll get strong enough to kill god" },
    { name: "ROCKETSROCKETSROCKETS", link: "https://store.steampowered.com/app/289760/", id: 289760, description: "frantic midair 2d space battles. if you got friends over, play this" },
    { name: "ibb & obb", link: "https://store.steampowered.com/app/95400/", id: 95400, description: "2 player gravity flipping puzzle platformer. it gets surprisingly hard to solve" },
    { name: "Creature in the Well", link: "https://store.steampowered.com/app/852300/", id: 852300, description: "what if hyper light drifter... was pinball..." },
    { name: "Forager", link: "https://store.steampowered.com/app/751780/", id: 751780, description: "50% idle game, 50% exploring crafting gathering collecting. you'll get sucked into it VERY HARD for a few days" },
    { name: "Mixolumia", link: "https://store.steampowered.com/app/1414020/", id: 1414020, description: "the lost bitGenerations game; turn your brain off and create lines of blocks" },
    { name: "NITE Team 4", link: "https://store.steampowered.com/app/544390/", id: 544390, description: "the only good hacking game on steam. apparently it's got multiplayer?" },
    { name: "Nova Drift", link: "https://store.steampowered.com/app/858210/", id: 858210, description: "asteroids, but it's a roguelike! simple as that" },
    { name: "The Room", link: "https://store.steampowered.com/bundle/20773/The_Room_Collection/", id: 437920, description: "interact with wilder and wilder puzzle boxes for 4 games (and counting)", imageOverride: "https://cdn.cloudflare.steamstatic.com/steam/bundles/20773/vufv29i866segfy5/header_292x136.jpg" },
    { name: "Crusader Kings III", link: "https://store.steampowered.com/app/1158310/", id: 1158310, description: "become ruler of a country. assassinate your court physician. wage war against the Holy Roman Empire. impregnate your brother's wife" },
    { name: "Crossniq+", link: "https://store.steampowered.com/app/1128180/", id: 1128180, description: "y2k-aesthetic arcade puzzle game. absolutely nails its intended style" },
    { name: "Prodigal", link: "https://store.steampowered.com/app/1393820/", id: 1393820, description: "90% zelda, 10% harvest-moon-style-dating-sim. not my fav game but goddamn the character design and art carries it so hard" },
    { name: "Generation Zero", link: "https://store.steampowered.com/app/704270/", id: 704270, description: "Stålenhag's Tales from the Loop exploration FPS with ROBOTS. moody and swedish" },
    { name: "Teardown", link: "https://store.steampowered.com/app/1167630/", id: 1167630, description: "speedrun routing around hyper-destructable environments. super fun, cool tech, software raytracing too!" },
    { name: "Baba Is You", link: "https://store.steampowered.com/app/736260/", id: 736260, description: "mind-bending sokoban-like where you directly change the rules of the game with every action" },
    { name: "Disco Elysium", link: "https://store.steampowered.com/app/632470/", id: 632470, description: "features some of the only good writing in video games, so it gets a free pass on here even if i didn't play too much" },
    { name: "Golf On Mars", link: "https://store.steampowered.com/app/1340570/", id: 1340570, description: "sequel to Desert Golfing. my comfort game <3" },
    { name: "VIDEOBALL", link: "https://store.steampowered.com/app/277390/", id: 277390, description: "facing off against your friends in a super stylised abstract sports game? THAT'S VIDEOBALL" },
    { name: "Chalo Chalo", link: "https://store.steampowered.com/app/410000/", id: 410000, description: "the slowest racing game ever made. this game lives rent-free in my head at all times" },
    { name: "Noita", link: "https://store.steampowered.com/app/881100/", id: 881100, description: "terraria-roguelike with a fully simulated particle world and 100000000 spells which can be crafted together. PLUS SECRETS" },
    { name: "Rift Wizard", link: "https://store.steampowered.com/app/1271280/", id: 1271280, description: "fantasy roguelike with really cool character skill customisation. too bad it's giga hard" },
    { name: "Furi", link: "https://store.steampowered.com/app/423230/", id: 423230, description: "face off against impossible bosses while listening to a sick soundtrack. and lamp waifu" },
    { name: "Ladderhead", link: "https://store.steampowered.com/app/1047800/", id: 1047800, description: "weird text adventure thing - very atmospheric and also I WROTE THE MUSIC PLS BUY THIS AND DESERT OF VICE" },
    { name: "Drawkanoid", link: "https://store.steampowered.com/app/951370/", id: 951370, description: "yeah it's arkanoid but you draw the bat. it's just fun?" },
    { name: "OCTOPTICOM", link: "https://store.steampowered.com/app/943190/", id: 943190, description: "impossible-to-say/remember name aside, this is a really solid Zachtronics-like, despite its low-budget appearance" },
    { name: "Factorio", link: "https://store.steampowered.com/app/427520/", id: 427520, description: "build the biggest spaghetti factory and wipe out the local wildlife in the process" },
    { name: "Everything", link: "https://store.steampowered.com/app/582270/", id: 582270, description: "\"haha everything on steam is on sale\" anyway roll around, become an atom or planet and listen to philosophy" },
    { name: "Flat Heroes", link: "https://store.steampowered.com/app/508790/", id: 508790, description: "cool levels where you gotta dodge hazards and stay alive longer than your friends" },
    { name: "Loop Hero", link: "https://store.steampowered.com/app/1282730/", id: 1282730, description: "autobattler roguelike type thing with progression, good art and better music" },
    { name: "Hyper Light Drifter", link: "https://store.steampowered.com/app/257850/", id: 257850, description: "the art, the world, the combat, the SOUNDTRACK tho" },
    { name: "Microsoft Flight Simulator", link: "https://store.steampowered.com/app/1250410/", id: 1250410, description: "your computer will cry and catch on fire, but at least you get to fly around your hometown" },
    { name: "Cathedral 3-D", link: "https://store.steampowered.com/app/1091590/", id: 1091590, description: "your heart is in this box and if the enemies get it you'll die, so shoot em all before you get overwhelmed" },
    { name: "Ace Combat 7: Skies Unknown", link: "https://store.steampowered.com/app/502500/", id: 502500, description: "another game which i didn't play enough, but lives rent-free in my head. bonkers but super cool story?" },
    { name: "Gunfire Reborn", link: "https://store.steampowered.com/app/1217060/", id: 1217060, description: "feels like it should be jank, but is actually a really fun and engaging third person shooter. HIGHLY recommend" },
    { name: "Please, Don't Touch Anything", link: "https://store.steampowered.com/app/354240/", id: 354240, description: "unlock all the endings by solving cryptic puzzles. *really* well executed (also it's Loop Hero devs)" },
    { name: "Please, Don't Touch Anything 3D", link: "https://store.steampowered.com/app/529590/", id: 529590, description: "PDTA but in 3D - with some little tweaks and changes to mix it up. you can even play in VR!" },
    { name: "Minion Masters", link: "https://store.steampowered.com/app/489520/", id: 489520, description: "really addictive cardbuilding PvP moba-creep thing: summon units and watch em walk at the enemy's units" },
    { name: "Control", link: "https://store.steampowered.com/app/870780/", id: 870780, description: "finally, they made a *good* SCP game" },
    { name: "Dicey Dungeons", link: "https://store.steampowered.com/app/861540/", id: 861540, description: "i'm too dumb for this game, but it looks and sounds dope so i don't mind too much" },
    { name: "Sea of Thieves", link: "https://store.steampowered.com/app/1172620/", id: 1172620, description: "despite its cartoony trappings, it manages to be reaaaally immersive at points. and the water looks incredible" },
    { name: "TIS-100", link: "https://store.steampowered.com/app/370360/", id: 370360, description: "tbh play all the Zachtronics programming games. but this one has a special place in my heart" },
    { name: "LUMINES REMASTERED", link: "https://store.steampowered.com/app/851670/", id: 851670, description: "you know how you strobe monitors to fix dead pixels? this is that, but for your brain" },
    { name: "NEOVERSE", link: "https://store.steampowered.com/app/994220/", id: 994220, description: "slay the spire but with sexy ladies. this came out before it was trendy to release StS-likes!" },
    { name: "Heat Signature", link: "https://store.steampowered.com/app/268130/", id: 268130, description: "steal spaceships by roaming 'em and taking out the crew in weird and wonderful ways" },
    { name: "Quarries of Scred", link: "https://store.steampowered.com/app/346770/", id: 346770, description: "dig towards treasure and don't make boulders fall on your head" },
    { name: "Path of Exile", link: "https://store.steampowered.com/app/238960/", id: 238960, description: "nowadays i just compare the concept of learning anything to my experience learning how PoE works" },
    { name: "Tricky Towers", link: "https://store.steampowered.com/app/437920/", id: 437920, description: "multiplayer tetris but wind will push your tower over into the ocean and you'll be eliminated" },
    
    { name: "Demoncrawl", link: "https://store.steampowered.com/app/1141220/", id: 1141220, description: "minesweeper but it's a roguelike! the game LOVES to bully you, but it also gives you good customisation" },
    { name: "Boomerang X", link: "https://store.steampowered.com/app/1170060/", id: 1170060, description: "very slick arena shooter where you throw + recall a boomerang. and get new abilities" },
    { name: "BPM: BULLETS PER MINUTE", link: "https://store.steampowered.com/app/1286350/", id: 1286350, description: "FPS roguelike where you can only shoot to the beat. they did something weird to the graphics and i think it is kinda cool?" },
    { name: "Rogue Legacy 2", link: "https://store.steampowered.com/app/1253920/", id: 1253920, description: "did you play Rogue Legacy? it's that. but 2" },
    { name: "Haiku, the Robot", link: "https://store.steampowered.com/app/1231880/", id: 1231880, description: "the comparisons to Hollow Knight are unavoidable; while not perfect, it manages to be a great mini-Hollow Knight while we wait for Silksong" },
    { name: "TUNIC", link: "https://store.steampowered.com/app/553420/", id: 553420, description: "Legend of Zelda, but you only learn the mechanics through reading an inscrutable untranslated manual (which is one of the best things i've ever seen). SO MANY SECRETS" },
    { name: "Chronicon", link: "https://store.steampowered.com/app/375480/", id: 375480, description: "pixel-art Path of Exile! not anywhere as deep but definitely still a good time for a while" },
    { name: "Backpack Hero", link: "https://store.steampowered.com/app/1970580/", id: 1970580, description: "mostly too dumb for this game, but 3rd character is amazing. Slay the Spire but you arrange items on a grid instead of playing cards" },
    { name: "Just King", link: "https://store.steampowered.com/app/1059980/", id: 1059980, description: "autochess-style arena think that- ah heck it's just slightly-different SNKRX so if you liked that then play this" },
    { name: "Vampire Survivors", link: "https://store.steampowered.com/app/1794680/", id: 1794680, description: "literally spawned a genre of \"walking around while you mow down hordes of enemies with your upgrades\" games. great fun" },
    { name: "20 Minutes Till Dawn", link: "https://store.steampowered.com/app/1966900/", id: 1966900, description: "Vampire Survivors but prettier and you actually have the task of aiming a gun! (which makes it have a bit more longevity)" },
    { name: "Peglin", link: "https://store.steampowered.com/app/1296610/", id: 1296610, description: "it's a pachinko roguelike! my tip: spawn as many bombs as possible" },
    { name: "Neophyte", link: "https://store.steampowered.com/app/1409530/", id: 1409530, description: "horde mode mini action roguelike thing. satisfyingly juicy, and quite diverse upgrades" },

    { name: "Virtual Circuit Board", link: "https://store.steampowered.com/app/1885690/", id: 1885690, description: "sandbox circuit board logic simulator... not too focused, not much of a game, but hell i like it" },
    { name: "The Zachtronics Solitaire Collection", link: "https://store.steampowered.com/app/1988540/", id: 1988540, description: "i'm a little solitaire gremlin and i won't apologise for it" },
    { name: "Boneraiser Minions", link: "https://store.steampowered.com/app/1944570/", id: 1944570, description: "Vampire Survivors, but with surprising depth. much combining of units, and lots of meta-progression. plus it has a card minigame too???" },
    { name: "Battlefield 2042", link: "https://store.steampowered.com/app/1517290/", id: 1517290, description: "honestly i think this game has basically always been good. just play Sundance and wingsuit everywhere!" },
    { name: "Omega Strikers", link: "https://store.steampowered.com/app/1869590/", id: 1869590, description: "kinda like Battlerite mixed with air hockey? pretty damn fun" },

    { name: "Your Only Move Is HUSTLE", link: "https://store.steampowered.com/app/2212330/", id: 2212330, description: "turnbased fighting game; toribash but 2d; it's those old flash animations of stick figures fighting, but you can play it" },
    { name: "Dwarf Fortress", link: "https://store.steampowered.com/app/975370/", id: 975370, description: "manage a colony of dwarfs. intricately detailed, a complete timesink, and an amazing example of emergent gameplay" },
    { name: "Risk of Rain Returns", link: "https://store.steampowered.com/app/1337520/", id: 1337520, description: "they just kinda released Risk of Rain 1 again but with more stuff" },
    { name: "(the) Gnorp Apologue", link: "https://store.steampowered.com/app/1473350/", id: 1473350, description: "short (~8hr) idle game, which is great because it doesn't overstay its welcome. saw it likened to PoE or a good roguelike run" },
    { name: "Slice & Dice", link: "https://store.steampowered.com/app/1775490/", id: 1775490, description: "this game is *almost* too hard for me to enjoy, but it's got so much combinatoric roguelike nonsense that i still respect it a lot" },
    { name: "Tiny Rogues", link: "https://store.steampowered.com/app/2088570/", id: 2088570, description: "quickly risen to be one of my favourite roguelikes. tons of build-crafting, and lands perfectly on the difficulty spectrum" },
]

const sortedGames = games.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

export default sortedGames