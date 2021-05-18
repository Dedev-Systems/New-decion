var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: process.env.PREFIX,
 bank:"0",
 cash:"0",
 diamond:"0",
 fish:"0",
 fishrod:"0",
 pickaxe:"0",
 laptop:"0",
 health:"100",
 hungry:"100",
 thirsty:"100",
 pizza:"0",
 drink:"0",
 hm:"0",
 key:"0",
 daily: process.env.DAILY_SALARY,
 monthly: process.env.MONTHLY_SALARY,
 adminchannel: process.env.ADMIN_CHANNEL_ID
})
  
 //commands handler
var reader = fs.readdirSync("./economy/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./economy/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//help command here
bot.command({

name: "help",
code: `$title[HELP MENU]

$description[**$getServerVar[prefix]help** - This!
**$getServerVar[prefix]balance** - Your balance.
**$getServerVar[prefix]inv** - Your Inventory.
**$getServerVar[prefix]dep** - Deposit cash to bank.
**$getServerVar[prefix]with** - Withdraw bank to cash.
**$getServerVar[prefix]daily** - Daily salary.
**$getServerVar[prefix]monthly** - Monthly salary.
**$getServerVar[prefix]work** - Work for money.
**$getServerVar[prefix]mine** - Mine for money.
**$getServerVar[prefix]fish** - Fishing.
**$getServerVar[prefix]heist** - Heist the international bank?
**$getServerVar[prefix]give** - Give money to someone.
**$getServerVar[prefix]rob** - Steal money from someone.
**$getServerVar[prefix]shop** - Shop. (Shows the buying and using commands!)]

$color[RANDOM]
$footer[Help • Made by dedev]
$addTimestamp`
})

//admin help command here
bot.command({

name: "admin-help",
code: `$title[ADMIN ONLY HELP MENU]

$description[**$getServerVar[prefix]adminhelp** - This!
**$getServerVar[prefix]add-cash** - Add cash to a user's cash value.
**$getServerVar[prefix]add-bank** - Add bank to a user's bank value.
**$getServerVar[prefix]set-cash** - Set a user's cash value.
**$getServerVar[prefix]set-bank** - Set a user's bank value.
$color[RANDOM]
$footer[Admin Help • Made by dedev]
$addTimestamp
$onlyIf[$channelID==$getServerVar[adminchannel]]
`
})