module.exports = {
  
  name: "buy-pizza",
  code: `
$description[**@$username Success in buying a Pizza🍕 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];100]]
$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza];1]]
$onlyIf[$getGlobalUserVar[cash]>=100;Not enough cash!]`
}