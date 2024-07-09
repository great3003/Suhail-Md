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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIno2VVE0R21qNUFXRUovYXlQb3dnQk1pMlNBK1hRamtKekZibGJEYVVEekE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpKbjlQOG96VDgyb29NSWdVa3V1b1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjBlMjQwYzctZDRiNS00Y2NmLWIzZjgtZTRjMGE2YThiOThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgMTkyLFxuICAgICAgOTksXG4gICAgICA1NyxcbiAgICAgIDUxLFxuICAgICAgNjAsXG4gICAgICA0NCxcbiAgICAgIDIwNyxcbiAgICAgIDE0MyxcbiAgICAgIDYxLFxuICAgICAgMTQyLFxuICAgICAgMjA0LFxuICAgICAgMTQsXG4gICAgICAxNTIsXG4gICAgICAxMjYsXG4gICAgICAxNDEsXG4gICAgICAyNDAsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTQxLFxuICAgICAgODQsXG4gICAgICA3OSxcbiAgICAgIDIyMyxcbiAgICAgIDUwLFxuICAgICAgMjA5LFxuICAgICAgMTU4LFxuICAgICAgNzQsXG4gICAgICA4NSxcbiAgICAgIDE2LFxuICAgICAgMjQ4LFxuICAgICAgMTExLFxuICAgICAgNzEsXG4gICAgICAxMzUsXG4gICAgICAyMjEsXG4gICAgICA4OCxcbiAgICAgIDEyNixcbiAgICAgIDE3MyxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TVFNVlMyRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNDEyODQ3MzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEzMjQ1NjEyODE4NDM0OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01MQTFZTUZFSnZidHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieGJrTDZqUklFcTZiSllBZ29JalRuVFBwRTE3VWtSZEhWeTZBNnEzSjAxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwRXRBR2lMSGdMYzVCZU1TNDVGOUEvYXFyeno1aUIrd1JrVVRDS1dNVnZCUHdhSzBzb2VVc1RKSDRRa3RRcjBrcXFEa1NkZVBqRUNHK0pwenBYL0lDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXU3JTVlAyV0lxVHZENEZydFB5eUY4TjAvMWV5VmFjcWhFUUthMTF2YWRrbkNhbC84R3BZeHJFNVEybzFNS0MvSUZhaDhLRXIvTzNjQ051TUhwenBDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE0MTI4NDczOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU2MTA1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxtSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTG1ILmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFRlNk9FRC9VYUJGRUxnamZvcXZld3hKcTl3SzVCbS9TVEd3cU0wZjNJYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ5ODY5NjM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1Mzk2MjY2MTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝑇𝛨𝛯𝐺𝑅𝛯𝛥𝑇-𝛯𝑆𝑇 𝛭𝐷",
  packname: process.env.PACK_NAME || "𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒",
  botname : process.env.BOT_NAME  || "𝑇𝛨𝛯𝐺𝑅𝛯𝛥𝑇-𝛯𝑆𝑇 𝛭𝐷",
  ownername:process.env.OWNER_NAME|| "𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒",


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
