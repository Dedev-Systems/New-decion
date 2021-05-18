module.exports = {
  
  name: "shop",
  code: `$author[THE SHOP] 
$description[**> Necessities :**

Pizza🍕
**$getServerVar[prefix]buy-pizza** = $100
**$getServerVar[prefix]eat-pizza** = Eat it! +10 Health, +20 Hunger Level, +5 Thirst Level.

Drink🥛
**$getServerVar[prefix]buy-drink** = $50
**$getServerVar[prefix]drink** = Drink it! +5 Health, +5 Hunger Level, +20 Thirst Level.

Medicine 💊
**$getServerVar[prefix]buy-medic** = $125
**$getServerVar[prefix]take-medicine** = Take it! +20 Health, +10 Hunger Level, +10 Thirst Level.

**> Job Items :**

Fishing Rod 🎣
**$getServerVar[prefix]buy-fishrod** = $75

Pickaxe ⛏️
**$getServerVar[prefix]buy-pickaxe** = $150

Laptop 🖱
**$getServerVar[prefix]buy-laptop** = $13,000

Vault Key 🗝️ 
**$getServerVar[prefix]buy-key** = $50,000
]
$color[RANDOM]
$footer[Shop • Made by dedev]
$addTimestamp`
}