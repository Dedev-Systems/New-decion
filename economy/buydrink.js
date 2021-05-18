module.exports = {
  
  name: "buy-drink",
  code: `
$description[**@$username Success in buying a Drink🥛 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];50]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[cash]>=50;Not enough cash!]`
}