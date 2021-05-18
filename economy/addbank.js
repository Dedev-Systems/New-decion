module.exports = {
  name: "add-bank",
  code:`$title[Admin Only Bank Add]
$description[You just gave <@$mentioned[1]> $$message[2] in their bank!]

  $setGlobalUserVar[bank;$sum[$getGlobalUserVar[cash;$mentioned[1]];$message[2]];$mentioned[1]]
  $argsCheck[2;To Use: \`$getServerVar[prefix]addbank <@user> <ammount>\`]
$onlyIf[$channelID==$getServerVar[adminchannel]]
`
}