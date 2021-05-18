module.exports = {
  name: "set-bank",
  code:`$title[Admin Only Bank Set]
$description[You just set <@$mentioned[1]> at $$message[2] in their bank!]

  $setGlobalUserVar[bank;$message[2];$mentioned[1]]
  $argsCheck[2;To Use: \`$getServerVar[prefix]setbank <@user> <ammount>\`]
$onlyIf[$channelID==$getServerVar[adminchannel]]
`
}