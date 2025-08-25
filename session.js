//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lmV1EvUWJXQVFYYjJHQ09QOFV0N0paV0pqWWVhMXNCTGlLWUpKQ1NYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzlwb2dWUndEbGhkUGgybVlaanlRclFIM08wZ0lMckVKaFRFV1N6bVUwND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSFhOZTZRZCt4SWxCc0hKUXJUTTZHZWpJN2tjUXBHT011K1hxc1JZS2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZVZCUUNYblhtM0tVbE1NWGs5eXd4YXNnNzdDRnd5Ykk0cWVQS2h2WENnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJSHNzb09QUU1pWVNNbytqQVpYQkYvcmkwWWFMcE1YMnFTb0syS0M3bFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlczbTd2QjNxc01CeG8vQnRXbyttN1lReTFITkhoSTY4bUNFZ2wyU3NwZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0d1M0JhODNoNmRvUWthL0Ztb1ZSbWZYbUw4RElUYlh4cjI1cEFTdFpVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDhoRElWTjRJbmo5OGtsc1hZcUUzeE91U2pma2NFUHFsNFpuVGd2L05WMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdsYUorRDlBekdjNUFrbzVSMVJHL3JIcjR4L3BBWXFyZVdpUDNGMW1BRVZUSEQ4VlBnNHF2Lzk2elVHRVJyRG4rTWtMck84K0pwcHZ0cWNsMDFsQkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIzcFJnbHJMeUpOazR0L05qZktQVUp3UGVSMlV5Wlc3d0IzTG5HdDFQc2hBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUV3lMVTBEZlFRV1BwNmRWOEhCQVpnIiwicGhvbmVJZCI6IjJkNjE2OTk5LTMxOWQtNDIwMy1iMmYzLTUwNWY5YTQwNzE2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkYzI2djFZTFdkTkRlaVo0RmpielNkL0NkbWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1GOERHSUR3OTNRUWRhL3ZIMU5XclVFUTVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFYRFo4NDhEIiwibWUiOnsiaWQiOiI5NDc3NDM5MTU2MDo2NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVIFAgbCBvIGEgZCBlIHIgIDogKSIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjY1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlNEN0xjSEVKTzBxOFVHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTzg2QU5ROHJSTzNzUm1lMHY5SG9ETEswWUFSZUtJSUU3WEZHMXBreFZHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmkvbC9zUUpKLzMvTVNZSVh0V3JQaHZ5eXlEaXZVZVordld4czUwQzQxNXZqUDcyRmZYWGNkMjhyRXlvamNmdHkrblRuWWN5WTJPUmd1bElMUktGQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJJeWVhSjI5bitxcEJCbGUzZ2xMR3BGYzFkRFFXcTJ6SDdlanJKYU9vWDRqWEYzWUcxOTlOMm1qSTUyL0trcVFXeC9ZZjRuMTMrNnc0bmVQVzcyOEJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHZPZ0RVUEswVHQ3RVpudEwvUjZBeXl0R0FFWGlpQ0JPMXhSdGFaTVZSaSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDI3NDI0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIyciJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
