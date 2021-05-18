module.exports = {
  
  name: "eat-pizza",
  code: `
$description[mmm... This is so good!]
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];10]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];20]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];5]]
$onlyIf[$getGlobalUserVar[pizza]>=1;Not enough pizza!]`
}