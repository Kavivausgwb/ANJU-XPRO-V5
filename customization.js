const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  ARTISTS:[
      "Slowed reverb",
      "Amal Perera original",
      "Victor Ratnayake original",
      "Nanda Malini original",
      "Kasun Kalhara original",
      "Uresha Ravihari original",
      "Dinesh Kanagaratnam original",
      "Dilu Beats original",
      "Mihiran original",
      "Iman Fernando",
      "Mihiruk S original",
      "Smokio original",
      "Chira Boy original",
      "Dhyan Hewage",
      "Boot song",
      "Old Hit",
      "Dilipa Saranga mashup",
      "Trend English song",
      "Sk music",
      "Asi music",
      "Slowed and reverb sinhala song",
      "Moon vibes",
      "Kovizz audio",
      "මනෝපාරකට සිංදු",
      "Kanchana anuradhi",
      "Dasawana music",
      "Uvindu ayshcharya",
      "Silun music",
      "Sinhala new song",
      "Slowed + Reverb",
      "Chamara Ranavaka original",
      "Keefa",
      "Bee music",
      "Zany Inzane original",
      "Sayfalse",
      "New trend Funk"
    ],
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
> *🪝 ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*🪝

*╭────── ❖ SYSTEM INFO ❖ ──────╮*
 *❘ 📅 Date Today :* ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
 *❘ ⌚ Time Now :* ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
 *❘ 🍭 Bot Name : KAVI-MD V${packageJson.version}*
 *❘ 👾 Prefix : ${config.PREFIX}*
 *❘ 📚 Version : ${packageJson.version}*
 *❘ 📝 Platform : ${os.platform()}*
 *❘ 🤴 Owner : Kavidu Rasanga*
 *❘ 🔮 Mode : ${config.MODE}*
 *❘ 🍁 Uptime : ${runtime(process.uptime())}*
 *❘ ✨ Mem : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*╰─────────────────────────╯*    
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
💎 *KAVI-MD TIKTOK DOWNLOADER* 💎

🔢 *Please reply with the number you want to select 🙂*

📄 *_Title :-_* ${title}
🧛‍♂️ *_Author :-_* ${author}
🪄 *_URL :-_* ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
🧊 KAVI-MD FB DOWNLOADER 🧊
    
📄 *_TITLE :-_* ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 KAVI-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "./src/media/LOGOS/alive.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🫧 𝐊𝐀𝐕𝐈-𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🫧

🔮 *I'm Alive Now. . . !*

┏━━━━❮ 🔮 𝙏𝙊𝘿𝘼𝙔 🔮 ❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮✨ *_STATUS DETAILS_* ✨❯━━━
┃ 🍭 *Bot Name :* *KAVI-MD V${packageJson.version}*
┃ 👾 *Prefix :* *${config.PREFIX}*
┃ 📚 *Version :* *${packageJson.version}*
┃ 📝 *Platform :* *${os.platform()}*
┃ 🤴 *Owner :* *Kavidu Rasanga*
┃ 🔮 *Mode :* *${config.MODE}*
┃ 🍁 *Uptime :* *${runtime(process.uptime())}*
┃ ✨ *Mem :* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*
*⃝⚯━━━━━━━━━━━━━━━━━━⚯⃝*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Movie Name :- _${movieData.title}_*
🌟 *IMDB Rating :- _${movieData.rating?.value || "𝙽/𝙰"} ★_*
📆 *Release Date :- _${movieData.metadata?.releaseDate || "𝙽/𝙰"}_*
🌍 *Country :- _${movieData.metadata?.country || "𝙽/𝙰"}_*
⏳ *Duration :- _${movieData.metadata?.runtime || "𝙽/𝙰"}_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*

*🗣️ අවශ්‍ය අනෙක් ගෘප් ලින්ක් සහ වෙනත් දෑ චැනල් එකෙන් ගන්න, ෆලෝ කරල තියාගන්න 👇*

📌 *Movie Channel :- _https://whatsapp.com/channel/0029Vb5xFPHGE56jTnm4ZD2k_*

*📌 Song Channel :- _https://whatsapp.com/channel/0029VbAdks3I7BeO8aUGNG06_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*
*⃝⚯━━━━━━━━━━━━━━━━━━⚯⃝*

> *ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️*

🩸 *Movie Name :- _${title}_*
       
🌟 *IMDB Rating :- _${rating?.value || "𝙽/𝙰"} ★_*
📆 *Release Date :- _${metadata?.releaseDate || "𝙽/𝙰"}_*
🌍 *Country :- _${metadata?.country || "𝙽/𝙰"}_*
⏳ *Duration :- _${metadata?.runtime || "𝙽/𝙰"}_*
🍃 *Genres :- _${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"}_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*

*🗣️ අවශ්‍ය අනෙක් ගෘප් ලින්ක් සහ වෙනත් දෑ චැනල් එකෙන් ගන්න, ෆලෝ කරල තියාගන්න 👇*

📌 *Movie Channel :- _https://whatsapp.com/channel/0029Vb5xFPHGE56jTnm4ZD2k_*

*📌 Song Channel :- _https://whatsapp.com/channel/0029VbAdks3I7BeO8aUGNG06_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*
*⃝⚯━━━━━━━━━━━━━━━━━━⚯⃝*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Tv Show :- _${movieResponse.episodeInfo?.title || "𝙽/𝙰"}_*
🎞️ *Episode :- _${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}_*
📅 *Date :- _${movieResponse.episodeInfo?.date || "𝙽/𝙰"}_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*

*🗣️ අවශ්‍ය අනෙක් ගෘප් ලින්ක් සහ වෙනත් දෑ චැනල් එකෙන් ගන්න, ෆලෝ කරල තියාගන්න 👇*

📌 *Movie Channel :- _https://whatsapp.com/channel/0029Vb5xFPHGE56jTnm4ZD2k_*

*📌 Song Channel :- _https://whatsapp.com/channel/0029VbAdks3I7BeO8aUGNG06_*
*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Movie Name :- _${movieData.data.title}_*
📆 *Release Date :- _${movieData.data.releaseDate}_*
🌍 *Network :- _${movieData.data.network}_*
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Movie Name :- _${title}_* 
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Movie Name :- _${title}_*  
📆 *Release Date :- _${releaseDate}_*  
🌍 *Country :- _${country}_*     
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*

> ෆයිල් දවස් 14 තුල ඩවුන්ලෝඩ් කරගන්න ‼️

🩸 *Movie Name :- _${title}_*
📆 *Release Date :- _${releaseDate}_*  
🌍 *Country :- _${country}_*
⏳ *Duration :- _${duration}_*  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*

🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗*  
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗* 

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  SINHALASUBTVSHOW: function (episodeInfo, quality) {
    return `
*✗♛  𝘔𝘖𝘝𝘐𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘛𝘐𝘖𝘕  ♛✗* 

📺 *TV Show:* ${episodeInfo.title || "N/A"}
🎞️ *Episode:* ${episodeInfo.episodeTitle || "N/A"}
📅 *Date:* ${episodeInfo.date || "N/A"}
💾 *Quality:* ${quality.toUpperCase()}
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🩸YT SONG DOWNLOADER 🩸
      
✅ Song Found. . !
          
• 🎶 *Title :- _${data.title}_*
• ⏳ *Duration :- _${data.timestamp}_*
• 👁️ *Views :- _${data.views}_*
• 📅 *Uploaded :- _${data.ago}_*
• 🔗 *Link :- _${data.url}_*
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

> Enjoy With KAVI-MD
        `.trim();
  },
  VIDEO: function (data) {
    return `
🩸 YT VIDEO DOWNLOADER 🩸
      
✅ VIDEO Found!
          
• 🎶 *Title :- _${data.title}_*
• ⏳ *Duration :- _${data.timestamp}_*
• 👁️ *Views :- _${data.views}_*
• 📅 *Uploaded :- _${data.ago}_*
• 🔗 *Link :- _${data.url}_*
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

> Enjoy With KAVI-MD
        `.trim();
  },
  //=====================hiru news===========================================
  AUTONEWS: function (source, newsData, isGroup, groupMetadata, conf) {
    return `
*✗♛  𝘒𝘈𝘝𝘐-𝘔𝘋 𝘕𝘌𝘞𝘚  ♛✗*

✨ *${source.toUpperCase()} News Update*

📌 *Title :- _${newsData.title}_*
📅 *Date :- _${newsData.date || "N/A"}_*

📝 *Description :-*
${newsData.desc || "No details available"}
${isGroup ? `\n\n📨 *Shared In :-* ${groupMetadata?.subject || "Group"}\n🛡️ *Admin :-* ${conf.MNAME}\n` : ""}
🔗 *Read more:* ${newsData.url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim();
  },
  AUTOMOVIE: function (title, rating, metadata, description, isGroup, groupMetadata, conf) {
    return `
*✗♛  𝘒𝘈𝘝𝘐-𝘔𝘋 𝘔𝘖𝘝𝘐𝘌  ♛✗*

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres?.map(g => `#${g}`).join(" • ") || "𝙽/𝙰"}

${isGroup ? `📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupMetadata?.subject || "Group"}\n🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}` : ""}

📌 *Movie Summary :-*
${description || "— 𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 —"}

*✗━━━━━━━━━━━━━━━━━✗*
${configs.FOOTER}`.trim();
  },
  AUTOSONG: function (foundSong, currentArtist, nextArtist, config, botNumber, isGroup, groupMetadata) {
    return `
🎵 𝙑𝙄𝘽𝙀 𝙊𝙁 𝙏𝙃𝙀 𝙎𝙊𝙉𝙂 || 𝐎𝐅𝐂 🖤
*━━━━━━━━━━━━━━━━━━━━━*

*┏━❮ _✨SONG DETAILS✨_❯━*
*┣➤ 📄 Name : _${foundSong.title}_*
*┣➤ 👨‍🦱 Artist : _${currentArtist.replace(" original", "")}_*
*┣➤ ⏳ Duration : _${foundSong.timestamp || "𝙽/𝙰"}_*
*┣➤ 🐼 Views : _${foundSong.views.toLocaleString() || "𝙽/𝙰"}_*
*┣➤ 🌪️ Uploaded : _${foundSong.ago || "𝙽/𝙰"}_*
*┗━━━━━━━━━━━━━━❀❀*

*◻┃ 🎧 USE HEADPHONES TO GET THE BEST EXPERIENCE 💆‍♂️❤️‍🔥*


*◻┃  සිංදුවට රියැක්ට් කරන්න ලමායි 😩💫💞*

📌 *Channel Link :-*
    *_https://whatsapp.com/channel/0029VbAdks3I7BeO8aUGNG06_*
    ${isGroup ? `

━━━━━━━━━━━━━━━━━━━
👥 *𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾* 
╠➤ *𝙽𝚊𝚖𝚎:* ${groupMetadata?.subject || "Group"}
╠➤ *𝙰𝚍𝚖𝚒𝚗:* ${config.MNAME}
╠➤ *𝙱𝚘𝚝 𝙽𝚞𝚖𝚋𝚎𝚛:* ${botNumber}
━━━━━━━━━━━━━━━━━━━
` : ""}
${config.FOOTER || "🎼 Enjoy the music! 🎧"}`.trim();
  },
  AIMODEPROMPT: function (userMessage) {
    return `
    You're an advanced AI assistant called "MR KAVIDU AI." You're professional, respectful, and knowledgeable, always ready to assist with expertise. 👑 Your goal is to provide helpful, accurate, and engaging responses while maintaining a courteous and professional tone.
    
    usermessage in {${userMessage}}`;
  }
};
