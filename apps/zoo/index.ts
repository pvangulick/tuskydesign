import { getRandomAnimal } from "@speaklogicai/animals";
import { getRandomName } from "@speaklogicai/names";

const name = getRandomName();
const animal = getRandomAnimal();

console.log(`${name} the ${animal.name} says ${animal.sound}!`);
