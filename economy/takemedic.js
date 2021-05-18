module.exports = {
  
  name: "take-medic",
  code: `
$description[gulp!]
$setGlobalUserVar[hm;$sub[$getGlobalUserVar[hm];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];20]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];10]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];10]]
$onlyIf[$getGlobalUserVar[hm]>=1;Not enough Medicine!]`
}