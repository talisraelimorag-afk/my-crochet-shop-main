export type Category2 =
  | "Animal"
  | "Woodland"
  | "Sea"
  | "Doll"
  | "Safari"
  | "House"
  | "Farm"
  | "Prehistoric"
  | "Pond"
  | "Mythical"
  | "Reptile"
  | "Bird"
  | "Character"
  | "Movie"
  | "Game"

  ;

  export type Category1 =
  | "Cat"
  | "Dog"
  | "Fox"
  | "Penguin"
  | "Elephant"
  | "Monkey"
  | "Bear"
  | "Bat"
  | "Dinosaur"
  | "Dragon"
  | "Lion"
  | "Stork"
  | "Duck"
  | "Whale"
  | "Crocodile"
  | "Hen"
  | "Sloth"
  | "Racoon"
  | "Pig"
  | "Frog"
  | "Turtle"
  | "Sheep"
  | "Jelly"
  | "Minions"
  | "Om Nom"
  | "Rhino"
  | "Llama"
  | "Octopus"
  | "Bunny"
  |"Puffin"
  |"Deer"
|"Seal"
  ;

export interface Product {
  id: number;
  name: string;
  description: string;
  CategoryType1: Category1;
  CategoryType2: Category2[];
  price: number;
  imageUrl: string[];
}
