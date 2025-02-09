const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂‎💠" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224669094865";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/JWXBLJbp/1739068619802.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_16_01_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6RFlLSHB1cCtqanIyZlNGN2ovZlNkek80TFdSdERlN2ZMRHJWV0U2TEEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXMjJyODhEbFJkZXROSHF2NGEyWFNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3NmY4OGVmLWYxN2ItNGEwZi05MDE4LTNmMTBmZTNjYmVlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA4NyxcbiAgICAgIDI1MixcbiAgICAgIDM2LFxuICAgICAgMjQ4LFxuICAgICAgMjMyLFxuICAgICAgMTA2LFxuICAgICAgNjgsXG4gICAgICAyMyxcbiAgICAgIDE0OCxcbiAgICAgIDIxNixcbiAgICAgIDEwOSxcbiAgICAgIDkwLFxuICAgICAgMTQ4LFxuICAgICAgOTUsXG4gICAgICAxOTMsXG4gICAgICA5LFxuICAgICAgMTE1LFxuICAgICAgODIsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAzMyxcbiAgICAgIDIzNyxcbiAgICAgIDI1MyxcbiAgICAgIDIwNSxcbiAgICAgIDExMSxcbiAgICAgIDE5MyxcbiAgICAgIDIyOCxcbiAgICAgIDgzLFxuICAgICAgMjI4LFxuICAgICAgNDQsXG4gICAgICA2MixcbiAgICAgIDI0OCxcbiAgICAgIDcwLFxuICAgICAgMTIxLFxuICAgICAgMjU0LFxuICAgICAgMjA0LFxuICAgICAgMTAsXG4gICAgICAxOTQsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SzRTM0NMOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjY5MDk0ODY1OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQyMjM1NjU5ODM4ODM6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZXZ3NzR0VKemZrcndHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKZ1pLTS8wTTNYZ2dnQldUbWVyMEwrbUtOVytsVXVrSStzTDVGS0x0OFNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRJU0NNaHhiSW9aMXorV0pEQngyVktqYTJwR3dmdllPd3dtV3d2NTJiS0F2Mm92VHBBKzVWQXdXek5wbm4zbnUyWWUyb20wNFE3MWdOSE9kU3UzR0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYzYjk1NjJBSUVZVkJ5WDRrMXhDNmdua3NEdUV3aDhGWmJabGlwVWtHSzNsNkR2bEh3b0pLNXFFT0NlL29pajNWUi9KT1hXaWEvdzcwNkFBSml1YWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNDY2OTA5NDg2NTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjc0ODk2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlGZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUZkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0hNUGpEN2dvNVR0cWlXWE1KT1dtRHF3bzdFTnR3a290Ujc5NzBhMTZ0az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzY3OTQyOTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂‎💠",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "‎彡[ᴀɴᴏɴʏᴍᴏᴜs]彡",
  ownername:process.env.OWNER_NAME|| "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂‎💠",


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
