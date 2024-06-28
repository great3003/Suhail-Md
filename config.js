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
global.github=process.env.GITHUB|| "https://github.com/great3003/Suhail-Md";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_40_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhrajJhUGlNNkFoSVltNTJIZ2xRbXZsVmpDZW9pbzdzaENkTnlFaEs3d1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNDEyODQ3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkZEQjY4QTBDQUE0MkRBNEE0MzY2NUNCMTlGNjQzQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTM1MjM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFWNFN1VVBWU3JxXzM3dDJYc1k2WWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTBiM2YxNTUtNTg1MC00NTQzLWJhMzItMzY2ZjkyZTNiZmFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE5LFxuICAgICAgMTg0LFxuICAgICAgODMsXG4gICAgICAzNyxcbiAgICAgIDExNCxcbiAgICAgIDU2LFxuICAgICAgMTQsXG4gICAgICAyMDAsXG4gICAgICAyMTMsXG4gICAgICA5LFxuICAgICAgMjMzLFxuICAgICAgMTEwLFxuICAgICAgMzEsXG4gICAgICAxMTEsXG4gICAgICA1MCxcbiAgICAgIDE3NixcbiAgICAgIDEzNCxcbiAgICAgIDE3OSxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTcyLFxuICAgICAgMzUsXG4gICAgICAyNDEsXG4gICAgICA3MyxcbiAgICAgIDI3LFxuICAgICAgMTEzLFxuICAgICAgMTIwLFxuICAgICAgMTIyLFxuICAgICAgMTY2LFxuICAgICAgMjU1LFxuICAgICAgMjYsXG4gICAgICAxNTQsXG4gICAgICAyMzEsXG4gICAgICAxMjksXG4gICAgICAxOTgsXG4gICAgICAyMTEsXG4gICAgICAxNTUsXG4gICAgICAxODcsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTMVhHMVRaNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNDEyODQ3MzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEzMjQ1NjEyODE4NDM0OjEzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkbLwnZGw8J2RtfCdka5f8J2RuvCdkbzwnZGy8J2RvPCdkbXwnZGo4pye4bWNyrPhtYnKuOKcnlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xuQTFZTUZFUCtNK0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGJrTDZqUklFcTZiSllBZ29JalRuVFBwRTE3VWtSZEhWeTZBNnEzSjAxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0cE5SVFRXb0lVVlVFcTVjcjVUcXVJSFBGYmxRN04rZWFjU2p0UjZmd2FmckFneVpLQnMvZUZnSThPRnRkUFBqZmFmejBrTWpsQ1hFdEVycDQxemZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3QUZLSlphWnpwNUJvOHRKUEFaSk5kSEExcDJOOEtUUnh0cmU5NW1RZEVLMmEybnBzTjQ0cG9xZnZxZlVTeDdleHBDd1gxUzFmZDJSL1VTYkZ4U3hnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE0MTI4NDczOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTUzNTIzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg5aVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDlpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzFRelV0VTQrSjAzZVBlcFpkb0s4MUI3ZmJoWlc0a2wzdWhmUWlzRXFqcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ5ODY5NjI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1MzUyMzc3OTdcIn0iCn0="  // PUT your SESSION_ID 


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
