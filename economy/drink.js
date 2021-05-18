module.exports = {
  
  name: "drink",
  code: `
$description[Ahh... This is so refreshing!]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[drink];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];5]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];5]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];20]]
$onlyIf[$getGlobalUserVar[drink]>=1;Not enough drink!]`
}