import margheritaPizza from "../assets/images/menu/margherita-pizza.jpg";
import paneerTikkaPizza from "../assets/images/menu/paneer-tikka-pizza.jpg";
import farmhousePizza from "../assets/images/menu/farmhouse-pizza.jpg";
import cheeseBurstPizza from "../assets/images/menu/cheese-burst-pizza.jpg";

import vegBurger from "../assets/images/menu/veg-burger.jpg";
import vegCheeseSandwich from "../assets/images/menu/veg-cheese-sandwich.jpg";
import cheesyGarlicBread from "../assets/images/menu/cheesy-garlic-bread.jpg";
import loadedNachos from "../assets/images/menu/loaded-nachos.jpg";

import whiteSaucePasta from "../assets/images/menu/white-sauce-pasta.jpg";
import redSaucePasta from "../assets/images/menu/red-sauce-pasta.jpg";

import stuffedVegQuesadilla from "../assets/images/menu/stuffed-veg-quesadilla.jpg";
import mexicanVegTacos from "../assets/images/menu/mexican-veg-tacos.jpg";

import chocolateLavaCake from "../assets/images/menu/chocolate-lava-cake.jpg";
import brownieIcecream from "../assets/images/menu/brownie-icecream.jpg";

import coldCoffee from "../assets/images/menu/cold-coffee.jpg";
import mangoMilkshake from "../assets/images/menu/mango-milkshake.jpg";

const menuData = [
  {
    id: 1,
    title: "Margherita Pizza",
    category: "pizza",
    image: margheritaPizza,
    description: "Fresh mozzarella cheese with tomato sauce and basil leaves.",
    price: 299,
  },

  {
    id: 2,
    title: "Paneer Tikka Pizza",
    category: "pizza",
    image: paneerTikkaPizza,
    description:
      "Loaded with spicy paneer tikka, capsicum and mozzarella cheese.",
    price: 349,
  },

  {
    id: 3,
    title: "Farmhouse Pizza",
    category: "pizza",
    image: farmhousePizza,
    description:
      "Fresh vegetables, olives, sweet corn and extra cheese.",
    price: 379,
  },

  {
    id: 4,
    title: "Cheese Burst Pizza",
    category: "pizza",
    image: cheeseBurstPizza,
    description:
      "Loaded with creamy cheese and delicious toppings.",
    price: 399,
  },

  {
  id: 5,
  title: "Veg Burger",
  category: "snacks",
  image: vegBurger,
  description: "Crispy vegetable patty with cheese and fresh lettuce.",
  price: 199,
},

{
  id: 6,
  title: "Veg Cheese Sandwich",
  category: "snacks",
  image: vegCheeseSandwich,
  description: "Grilled sandwich filled with vegetables and melted cheese.",
  price: 179,
},

{
  id: 7,
  title: "Cheesy Garlic Bread",
  category: "snacks",
  image: cheesyGarlicBread,
  description: "Freshly baked garlic bread topped with mozzarella cheese and herbs.",
  price: 219,
},

{
  id: 8,
  title: "Loaded Nachos",
  category: "snacks",
  image: loadedNachos,
  description: "Crispy nachos topped with melted cheese, jalapeños, olives and salsa.",
  price: 249,
},

{
  id: 9,
  title: "White Sauce Pasta",
  category: "pasta",
  image: whiteSaucePasta,
  description: "Creamy white sauce pasta with mushrooms and herbs.",
  price: 279,
},

{
  id: 10,
  title: "Red Sauce Pasta",
  category: "pasta",
  image: redSaucePasta,
  description: "Italian pasta tossed in rich tomato basil sauce.",
  price: 269,
},

{
  id: 11,
  title: "Stuffed Veg Quesadilla",
  category: "mexican",
  image: stuffedVegQuesadilla,
  description: "Grilled tortilla stuffed with fresh vegetables, cheese and flavorful spices.",
  price: 289,
},

{
  id: 12,
  title: "Mexican Veg Tacos",
  category: "mexican",
  image: mexicanVegTacos,
  description: "Crispy tacos filled with fresh vegetables, cheese and spicy Mexican sauce.",
  price: 299,
},

{
  id: 13,
  title: "Chocolate Lava Cake",
  category: "desserts",
  image: chocolateLavaCake,
  description: "Warm chocolate cake with a rich molten chocolate center.",
  price: 199,
},

{
  id: 14,
  title: "Brownie with Ice Cream",
  category: "desserts",
  image: brownieIcecream,
  description: "Hot chocolate brownie served with vanilla ice cream.",
  price: 229,
},

{
  id: 15,
  title: "Cold Coffee",
  category: "drinks",
  image: coldCoffee,
  description: "Refreshing chilled coffee blended with creamy ice cream.",
  price: 179,
},

{
  id: 16,
  title: "Mango Milkshake",
  category: "drinks",
  image: mangoMilkshake,
  description: "Fresh mango blended with chilled milk for a refreshing drink.",
  price: 159,
},
];



export default menuData;