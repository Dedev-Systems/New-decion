module.exports = {
  
  name: "mine",
  code: `$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$random[0;2]]]
  $setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;30]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;10]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;20]]]
$title[**$username** Get:]
$color[$random[10000;999999]]
$description[$random[0;2] Diamond!💎, \`$getServerVar[prefix]sell-diamond\` to sell 1 diamond for $1000]
$globalCooldown[5m;**⏰ Wait for %time% to mine again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Your hunger rate is below 10, and you should eat first! You can buy the food.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Your thirst level is below 20, and you should drink first! You can buy the drink.]
$onlyIf[$getGlobalUserVar[health]>=30;Your health rate is below 30, and you should take and take medicine first! You can buy it.]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;There is no pickaxe!]`
}