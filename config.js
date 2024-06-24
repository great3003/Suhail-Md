const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/great3003/Suhail-Md/tree/main";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b44c6239710466c2e81d1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨✞ᵍʳᵉʸ✞" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347014128473";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347014128473";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3UU1rTVZBQU1TQ2c3RHhaN3NzeExmYkpuMGdMNS9nMXhiOWNmVVhaOVRVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1eEFDTTJuTVFPSzdrRWZGYk5ZSmRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxYjVhYzAxLTg4MTctNGEzOS04MjhmLWFiNjM1Yjc0MGRmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMjksXG4gICAgICAyNDIsXG4gICAgICA0NSxcbiAgICAgIDE4NSxcbiAgICAgIDE2LFxuICAgICAgMTczLFxuICAgICAgMTM1LFxuICAgICAgNTMsXG4gICAgICAyMTYsXG4gICAgICAyNCxcbiAgICAgIDUsXG4gICAgICAyMzksXG4gICAgICA4NixcbiAgICAgIDI1MCxcbiAgICAgIDExMixcbiAgICAgIDIzNyxcbiAgICAgIDk4LFxuICAgICAgMTM1LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxODYsXG4gICAgICAyMDYsXG4gICAgICAyMDMsXG4gICAgICAyOCxcbiAgICAgIDExNCxcbiAgICAgIDE1NSxcbiAgICAgIDc2LFxuICAgICAgMjM1LFxuICAgICAgMTMwLFxuICAgICAgMTM5LFxuICAgICAgMTk3LFxuICAgICAgMTYsXG4gICAgICAyMjMsXG4gICAgICA3NixcbiAgICAgIDE5MixcbiAgICAgIDMsXG4gICAgICAyMjcsXG4gICAgICA0MyxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQ1pQUkVHWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNDEyODQ3Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTMyNDU2MTI4MTg0MzQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVEExWU1GRU5DUDViTUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhia0w2alJJRXE2YkpZQWdvSWpUblRQcEUxN1VrUmRIVnk2QTZxM0owMUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOTA2amF1RTc0bnFWL3JyUzdUSzNzdjFGUHl2SHVxcmtEckhzeFpqRVpuTlV4SEJnTXQzdkJYRExVRW1mZU1pZmpyK20wT292YjUvNVAxRmVYb2t3Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2h4R3lCbE1qSzZ5dHlpYldyTHdPc2c5RjFIRWRsZDBDZGVLc1dDN2JaM25tWWRRWk56WTdHajZ1QlZJVkdtNVkzYW5JN0RXeG9YRHMzWVZ2dTliZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNDEyODQ3Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIyNDI3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg5YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDliLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTDh4Y1ZiczVsYWRrMWhwQ2pKUmZ4R01nNlZqQ3B2SXNDRjZGMVpBODYwOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ5ODY5NjIwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ King_Sukuna²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨",
  packname: process.env.PACK_NAME || "✞ᵍʳᵉʸ✞",
  botname : process.env.BOT_NAME  || "𝑇𝛨𝛯𝐺𝑅𝛯𝛥𝑇-𝛯𝑆𝑇 𝛭𝐷",
  ownername:process.env.OWNER_NAME|| "𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨✞ᵍʳᵉʸ✞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
