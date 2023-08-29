/* import Awakening from "../Images/products/Heal/Awakening";
import BurnHeal from "../Images/products/Heal/BurnHeal";
import FullHeal from "../Images/products/Heal/FullHeal";
import IceHeal from "../Images/products/Heal/IceHeal";
import ParalizeHeal from "../Images/products/Heal/ParalizeHeal";

import bike from "../Images/products/Others/bike";
import Bread from "../Images/products/Others/Bread";
import Glasses from "../Images/products/Others/Glasses";
import Rod from "../Images/products/Others/Rod";
import Ticket from "../Images/products/Others/S.S.Ticket";

import MasterBall from "../Images/products/Pokeballs/MasterBall";
import PokeBall from "../Images/products/Pokeballs/PokeBall";
import SuperBall from "../Images/products/Pokeballs/SuperBall";

import hPotion from "../Images/products//Potions/hyper-potion";
import potion from "../Images/products//Potions/potion";
import sPotion from "../Images/products//Potions/super-potion"; */


const PRODUCTS = {
  Pokeballs: [
    {
      id: 0,
      title: "PokeBall",
      image: "../Images/products/Pokeballs/PokeBall",
      price: 200,
      stock: 5,
    },
    {
      id: 1,
      title: "MasterBall",
      image: "../Images/products/Pokeballs/MasterBall",
      price: 350,
      stock: 3,
    },
    {
      id: 2,
      title: "SuperBall",
      image: "../Images/products/Pokeballs/SuperBall",
      price: 250,
      stock: 10,
    },
  ],
  Heal: [
    {
      id: 0,
      title: "Awakening",
      image: "../Images/products/Heal/Awakening",
      price: 200,
      stock: 5,
    },
    {
      id: 1,
      title: "BurnHeal",
      image: "../Images/products/Heal/BurnHeal",
      price: 300,
      stock: 10,
    },
    {
      id: 2,
      title: "FullHeal",
      image: "../Images/products/Heal/FullHeal",
      price: 550,
      stock: 4,
    },
    {
      id: 3,
      title: "IceHeal",
      image: "../Images/products/Heal/IceHeal",
      price: 300,
      stock: 2,
    },
    {
      id: 4,
      title: "ParalizeHeal",
      image: "../Images/products/Heal/ParalizeHeal",
      price: 300,
      stock: 6,
    },
  ],
  Potions: [
    {
      id: 0,
      title: "hPotion",
      image: "../Images/products//Potions/hyper-potion",
      price: 900,
      stock: 2,
    },
    {
      id: 1,
      title: "potion",
      image: "../Images/products//Potions/potion",
      price: 800,
      stock: 8,
    },
    {
      id: 2,
      title: "sPotion",
      image: "../Images/products//Potions/super-potion",
      price: 850,
      stock: 4,
    },
  ],
  Other: [
    {
      id: 0,
      title: "bike",
      image: "../Images/products/Others/bike",
      price: 2500,
      stock: 15,
    },
    {
      id: 1,
      title: "Bread",
      image: "../Images/products/Others/Bread",
      price: 50,
      stock: 20,
    },
    {
      id: 2,
      title: "Glasses",
      image: "../Images/products/Others/Glasses",
      price: 500,
      stock: 10,
    },
    {
      id: 3,
      title: "Rod",
      image: "../Images/products/Others/Rod",
      price: 150,
      stock: 5,
    },
    {
      id: 4,
      title: "Ticket",
      image: "../Images/products/Others/S.S.Ticket",
      price: 5500,
      stock: 5,
    },
  ],
};


/* const PRODUCTS = [
  {
    id: 0,
    title: "PokeBall",
    image: "../Images/products/Pokeballs/PokeBall",
    price: 200,
    stock: 5,
  },
  {
    id: 1,
    title: "MasterBall",
    image: "../Images/products/Pokeballs/MasterBall",
    price: 350,
    stock: 3,
  },
  {
    id: 2,
    title: "SuperBall",
    image: "../Images/products/Pokeballs/SuperBall",
    price: 250,
    stock: 10,
  },
] */

/* const appState = () =>  {
  console.log("hola")
} */