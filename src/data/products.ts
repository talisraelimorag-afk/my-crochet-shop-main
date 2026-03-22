import type { Product } from "../types/Product";
import racoon1 from "../assets/pictures/20170308_203900.jpg";
import racoon2 from "../assets/pictures/20170308_203919.jpg";
import brownSheep from "../assets/pictures/20170109_143433.jpg";
import graySheep1 from "../assets/pictures/20170926_171637.jpg";
import graySheep2 from "../assets/pictures/20170926_171648.jpg";
import chunkySheep1 from "../assets/pictures/20170926_171624.jpg";
import kitty1 from "../assets/pictures/20170520_104438.jpg";
import kitty2 from "../assets/pictures/20170520_104524.jpg";
import bigFox2 from "../assets/pictures/20170311_163743.jpg";
import bigFox1 from "../assets/pictures/20170311_163758.jpg";
import cat1 from "../assets/pictures/20170928_195619.jpg";
import cat2 from "../assets/pictures/20170928_195704.jpg";
import jelly from "../assets/pictures/20170528_135028.jpg";
import dino1 from "../assets/pictures/20260316_181038.jpg";
import dino2 from "../assets/pictures/20260316_181104.jpg";
import hen1 from "../assets/pictures/20260316_181528.jpg";
import hen2 from "../assets/pictures/20260316_181624.jpg";
import piggy1 from "../assets/pictures/20260316_181654.jpg";
import froggy1 from "../assets/pictures/20260316_181803.jpg";
import froggy2 from "../assets/pictures/20260316_181826.jpg";
import stork1 from "../assets/pictures/20260316_181952.jpg";
import stork2 from "../assets/pictures/20260316_182033.jpg";
import whale1 from "../assets/pictures/20260316_182055.jpg";
import whale2 from "../assets/pictures/20260316_182107.jpg";
import turtle1 from "../assets/pictures/20260316_182241.jpg";
import turtle2 from "../assets/pictures/20260316_182247.jpg";
import turtle3 from "../assets/pictures/20260316_182303.jpg";
import dragon from "../assets/pictures/20260316_182329.jpg";
import croc1 from "../assets/pictures/20260316_182436.jpg";
import croc2 from "../assets/pictures/20260316_182452.jpg";
import turtle4 from "../assets/pictures/IMG_3353.JPG";
import turtle5 from "../assets/pictures/IMG_3356.JPG";
import turtle6 from "../assets/pictures/IMG_3357.JPG";
import turtle7 from "../assets/pictures/IMG_3358.JPG";
import turtle8 from "../assets/pictures/IMG_3359.JPG";
import whale3 from "../assets/pictures/IMG_3360.JPG";
import whale4 from "../assets/pictures/IMG_3361.JPG";
import whale5 from "../assets/pictures/IMG_3362.JPG";
import piggy2 from "../assets/pictures/IMG_3365.JPG";
import piggy3 from "../assets/pictures/IMG_3367.JPG";
import hen3 from "../assets/pictures/IMG_3369.JPG";
import hen4 from "../assets/pictures/IMG_3370.JPG";
import hen5 from "../assets/pictures/IMG_3371.JPG";
import froggy3 from "../assets/pictures/IMG_3375.JPG";
import froggy4 from "../assets/pictures/IMG_3376.JPG";
import froggy5 from "../assets/pictures/IMG_3377.JPG";
import penguin1 from "../assets/pictures/20260318_123833.jpg";
import pengui2 from "../assets/pictures/20260318_123858.jpg";
import lion1 from "../assets/pictures/20260318_124135.jpg";
import lion2 from "../assets/pictures/20260318_124143.jpg";
import shortdoggy1 from "../assets/pictures/20260318_124237.jpg";
import shortdoggy2 from "../assets/pictures/20260318_124318.jpg";
import longdoggy1 from "../assets/pictures/20260318_124333.jpg";
import longdoggy2 from "../assets/pictures/20260318_124351.jpg";
import elephant1 from "../assets/pictures/20260318_124434.jpg";
import elephant2 from "../assets/pictures/20260318_124449.jpg";
import elephant3 from "../assets/pictures/20260318_124455.jpg";
import elephant4 from "../assets/pictures/20260318_124505.jpg";
import elephant5 from "../assets/pictures/20260318_124538.jpg";
import sloth1 from "../assets/pictures/20260318_124551.jpg";
import sloth2 from "../assets/pictures/20260318_124611.jpg";
import sloth3 from "../assets/pictures/20260318_124625.jpg";
import froggy6 from "../assets/pictures/20260318_125325.jpg";
import froggy7 from "../assets/pictures/20260318_125350.jpg";
import minions from "../assets/pictures/20260318_125409.jpg";
import lolly1 from "../assets/pictures/20260318_125438.jpg";
import lolly2 from "../assets/pictures/20260318_125457.jpg";
import lolly3 from "../assets/pictures/20260318_125523.jpg";
import peng1 from "../assets/pictures/20260318_125550.jpg";
import chunkySheep2 from "../assets/pictures/20260318_125630.jpg";
import ele1 from "../assets/pictures/20260318_125701.jpg";
import bat1 from "../assets/pictures/20260318_125724.jpg";
import bat2 from "../assets/pictures/20260318_125740.jpg";
import rhino1 from "../assets/pictures/20260318_125816.jpg";
import rhino2 from "../assets/pictures/20260318_125820.jpg";
import rhino3 from "../assets/pictures/20260318_125838.jpg";
import rhino4 from "../assets/pictures/20260318_125900.jpg";
import fox1 from "../assets/pictures/20260318_125935.jpg";
import fox2 from "../assets/pictures/20260318_130006.jpg";
import fox3 from "../assets/pictures/20260318_130026.jpg";
import fox4 from "../assets/pictures/20260318_130215.jpg";
import fox5 from "../assets/pictures/20260318_130225.jpg";
import bear1 from "../assets/pictures/20260318_130300.jpg";
import bear2 from "../assets/pictures/20260318_130305.jpg";
import llama1 from "../assets/pictures/20260318_130343.jpg";
import llama2 from "../assets/pictures/20260318_130410.jpg";
import llama3 from "../assets/pictures/20260318_130425.jpg";
import duck1 from "../assets/pictures/20260318_130526.jpg";
import duck2 from "../assets/pictures/20260318_130533.jpg";
import duck3 from "../assets/pictures/20260318_130554.jpg";
import monkey1 from "../assets/pictures/20260318_130615.jpg";
import monkey2 from "../assets/pictures/20260318_130715.jpg";
export const products: Product[] = [
  {
    id: 1,
    name: "Rocky Racoon",
    description: "Cute racoon plush toy, perfect for cuddling.",
    price: 100,
    imageUrl: [racoon1, racoon2],
    CategoryType1: "Racoon",
    CategoryType2: ["Animal", "Woodland"],
    
  },
  {
    id: 2,
    name: "Sheepy",
    description: "",
    price: 100,
    CategoryType1: "Sheep",
    CategoryType2: ["Animal", "Farm"],
    imageUrl: [graySheep1, graySheep2, brownSheep],
  },
  {
    id: 3,
    name: "Chunky Sheep",
    description: "",
    price: 100,
    CategoryType1: "Sheep",
    CategoryType2: ["Animal", "Farm"],
    imageUrl: [chunkySheep1, chunkySheep2],
  },
  {
    id: 4,
    name: "Kitty",
    description: "",
    price: 100,
    CategoryType1: "Cat",
    CategoryType2: ["Animal", "House"],
    imageUrl: [kitty1, kitty2],
  },
  {
    id: 5,
    name: "Cat",
    description: "",
    price: 100,
    CategoryType1: "Cat",
    CategoryType2: ["Animal", "House"],
    imageUrl: [cat1, cat2],
  },
  {
    id: 6,
    name: "Fox",
    description: "",
    price: 100,
    CategoryType1: "Fox",
    CategoryType2: ["Animal", "Woodland"],
    imageUrl: [bigFox1, bigFox2],
  },
  {
    id: 7,
    name: "Jelly",
    description: "Cute Jelly plush toy.",
    price: 100,
    CategoryType1: "Jelly",
    CategoryType2: ["Animal", "Sea"],
    imageUrl: [jelly],
  },
  {
    id: 8,
    name: "Dino",
    description: "Cute Dino plush toy.",
    price: 100,
    CategoryType1: "Dinosaur",
    CategoryType2: ["Animal", "Prehistoric"],
    imageUrl: [dino1, dino2],
  },
  {
    id: 9,
    name: "Hen",
    description: "Cute Hen plush toy.",
    price: 100,
    CategoryType1: "Hen",
    CategoryType2: ["Animal", "Farm"],
    imageUrl: [hen1, hen2, hen3, hen4, hen5],
  },
  {
    id: 10,
    name: "Piggy",
    description: "Cute Piggy plush toy.",
    price: 100,
    CategoryType1: "Pig",
    CategoryType2: ["Animal", "Farm"],
    imageUrl: [piggy1, piggy2, piggy3],
  },
  {
    id: 11,
    name: "Froggy",
    description: "Cute Froggy plush toy.",
    price: 100,
    CategoryType1: "Frog",
    CategoryType2: ["Animal", "Pond"],
    imageUrl: [froggy1, froggy2, froggy3, froggy4, froggy5, froggy6, froggy7],
  },
  {
    id: 12,
    name: "Stork",
    description: "Cute Stork plush toy.",
    price: 100,
    CategoryType1: "Stork",
    CategoryType2: ["Animal", "Bird"],
    imageUrl: [stork1, stork2],
  },
  {
    id: 13,
    name: "Whale",
    description: "Cute Whale plush toy.",
    price: 100,
    CategoryType1: "Whale",
    CategoryType2: ["Animal", "Sea"],
    imageUrl: [whale1, whale2,whale3, whale4, whale5],
  },
  {
    id: 14,
    name: "Turtle",
    description: "Cute Turtle plush toy.",
    price: 100,
    CategoryType1: "Turtle",
    CategoryType2: ["Animal", "Sea"],
    imageUrl: [turtle1, turtle2, turtle3, turtle4, turtle5, turtle6, turtle7, turtle8],
  },
  {
    id: 15,
    name: "Dragon",
    description: "Cute Dragon plush toy.",
    price: 100,
    CategoryType1: "Dragon",
    CategoryType2: ["Animal", "Mythical"],
    imageUrl: [dragon],
  },
  {
    id: 16,
    name: "Croc",
    description: "Cute Croc plush toy.",
    price: 100,
    CategoryType1: "Crocodile",
    CategoryType2: ["Animal", "Reptile"],
    imageUrl: [croc1, croc2],
  },
  {
    id: 17,
    name: "Penguin",
    description: "Cute Penguin plush toy.",
    price: 100,
    CategoryType1: "Penguin",
    CategoryType2: ["Animal", "Sea"],
    imageUrl: [penguin1, pengui2],
  },
  {
    id: 18,
    name: "Lion",
    description: "Cute Lion plush toy.",
    price: 100,
    CategoryType1: "Lion",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [lion1, lion2],
  },
  {
    id: 19,
    name: "Short Doggy",
    description: "Cute Short Doggy plush toy.",
    price: 100,
    CategoryType1: "Dog",
    CategoryType2: ["Animal", "House"],
    imageUrl: [shortdoggy1, shortdoggy2],
  },
  {
    id: 20,
    name: "Long Doggy",
    description: "Cute Long Doggy plush toy.",
    price: 100,
    CategoryType1: "Dog",
    CategoryType2: ["Animal", "House"],
    imageUrl: [longdoggy1, longdoggy2],
  },
  {
    id: 21,
    name: "Elephant",
    description: "Cute Elephant plush toy.",
    price: 100,
    CategoryType1: "Elephant",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [elephant1, elephant2, elephant3, elephant4, elephant5],
  },
  {
    id: 22,
    name: "Sloth",
    description: "Cute Sloth plush toy.",
    price: 100,
    CategoryType1: "Sloth",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [sloth1, sloth2, sloth3],
  },
  {
    id: 23,
    name: "Minions",
    description: "Cute Minions plush toy.",
    price: 100,
    CategoryType1: "Minions",
    CategoryType2: ["Character", "Movie"],
    imageUrl: [minions],
  },
  {
    id: 24,
    name: "Om Nom",
    description: "Cute Cut the Rope plush toy.",
    price: 100,
    CategoryType1: "Om Nom",
    CategoryType2: ["Character", "Game"],
    imageUrl: [lolly1, lolly2, lolly3],
  },
  {
    id: 25,
    name: "Penguin 2",
    description: "Cute Peng plush toy.",
    price: 100,
    CategoryType1: "Penguin",
    CategoryType2: ["Animal", "Sea"],
    imageUrl: [peng1],
  },
  {
    id: 26,
    name: "Bat",
    description: "Cute Bat plush toy.",
    price: 100,
    CategoryType1: "Bat",
    CategoryType2: ["Animal"],
    imageUrl: [bat1, bat2],
  },
  {
    id: 27,
    name: "Rhino",
    description: "Cute Rhino plush toy.",
    price: 100,
    CategoryType1: "Rhino",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [rhino1, rhino2, rhino3, rhino4],
  },
  {
    id: 28,
    name: "Fox 2",
    description: "Cute Fox plush toy.",
    price: 100,
    CategoryType1: "Fox",
    CategoryType2: ["Animal", "Woodland"],
    imageUrl: [fox1, fox2, fox3, fox4, fox5],
  },
  {
    id: 29,
    name: "Bear",
    description: "Cute Bear plush toy.",
    price: 100,
    CategoryType1: "Bear",
    CategoryType2: ["Animal", "Woodland"],
    imageUrl: [bear1, bear2],
  },
  {
    id: 30,
    name: "Llama",
    description: "Cute Llama plush toy.",
    price: 100,
    CategoryType1: "Llama",
    CategoryType2: ["Animal", "Farm"],
    imageUrl: [llama1, llama2, llama3],
  },
  {
    id: 31,
    name: "Duck",
    description: "Cute Duck plush toy.",
    price: 100,
    CategoryType1: "Duck",
    CategoryType2: ["Animal", "Bird"],
    imageUrl: [duck1, duck2, duck3],
  },
  {
    id: 32,
    name: "Monkey",
    description: "Cute Monkey plush toy.",
    price: 100,
    CategoryType1: "Monkey",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [monkey1, monkey2],
  },
   {
    id: 33,
    name: "Party Elephant",
    description: "Cute Elephant plush toy.",
    price: 100,
    CategoryType1: "Elephant",
    CategoryType2: ["Animal", "Safari"],
    imageUrl: [ele1],
  },
];
