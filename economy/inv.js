module.exports = {
  
  name: "inv",
  code: `$title[Your Inventory $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤Health**
**Health**: $getGlobalUserVar[health]
**Hunger Level**: $getGlobalUserVar[hungry]
**Level of Thirst**: $getGlobalUserVar[thirsty]

**🗃Inventory:**
**Pizzas**: $getGlobalUserVar[pizza] 🍕
**Drinks**: $getGlobalUserVar[drink] 🥛
**Health Medicine**: $getGlobalUserVar[hm]  💊
**Fish**: $getGlobalUserVar[fish] Kg
**Fishing Rods**: $getGlobalUserVar[fishrod] 🎣
**Diamonds**: $getGlobalUserVar[diamond] 💎
**Pickaxes**: $getGlobalUserVar[pickaxe]  ⛏️
**Laptops**: $getGlobalUserVar[laptop] 💻

$color[RANDOM]
$footer[Your Inventory • Made by dedev]
$addTimestamp`
}