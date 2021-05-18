module.exports = {
  
  name: "buy-pickaxe",
  code: `
$description[**@$username Success in buying a Pickaxe ⛏️ !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];150]]
$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];1]]
$onlyIf[$getGlobalUserVar[cash]>=150;Not enough cash!]`
}