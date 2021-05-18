module.exports = {
  name: "add-cash",
  code:`$title[Admin Only Cash Add]
$description[You just gave <@$mentioned[1]> $$message[2] in cash!]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1]];$message[2]];$mentioned[1]]
  $argsCheck[2;To Use: \`$getServerVar[prefix]addcash <@user> <ammount>\`]
$onlyIf[$channelID==$getServerVar[adminchannel]]
`
}