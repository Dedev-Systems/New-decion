module.exports = {
  
  name: "rob",
  code: `$title[Give Cash!]
$description[You just stole $random[10;10000] from <@$mentioned[1]> and got away with it!]

  $setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1];$random[10;10000]];$mentioned[1]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$message[2]];$authorID]

$argsCheck[1;To Use: \`$getServerVar[prefix]rob\`]]
$color[$random[0;999999]]
$onlyIf[$getGlobalUserVar[key]>=1;You can't rob someone without a vault key!]

`
}