module.exports = {
  
  name: "fish",
  code: `$description[You fish at $randomText[Bath;River;Pond;Swimming Pool;Sea], and you get **$random[0;8] Kg Fish.** \`$getServerVar[prefix]sell-fish\` to sell 5Kg of fish for $250]
$color[$random[0;999999]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[0;8]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;30]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;10]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;20]]]
$globalCooldown[10s;**⏰ Wait for %time% to fishing again!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Your hunger rate is below 10, and you should eat first! You can buy the food.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Your thirst level is below 20, and you should drink first! You can buy the drink.]
$onlyIf[$getGlobalUserVar[health]>=30;Your health rate is below 30, and you should take and take medicine first! You can buy it.]
$onlyIf[$getGlobalUserVar[fishrod]>=1;There is no fishing rod!]`
}