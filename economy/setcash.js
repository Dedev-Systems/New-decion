module.exports = {
  name: "set-cash",
  code:`$title[Admin Only Cash Set]
$description[You just set <@$mentioned[1]> at $$message[2] in cash!]

  $setGlobalUserVar[cash;$message[2];$mentioned[1]]
  $argsCheck[2;To Use: \`$getServerVar[prefix]setcash <@user> <ammount>\`]
$onlyIf[$channelID==$getServerVar[adminchannel]]
`
}