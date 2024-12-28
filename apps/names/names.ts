//import { getRandomItem } from "@speaklogicai/util";

export function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const NAMES = [
    "Brie",
    "Vinnie",
    "Romeo",
    "Kid",
    "Stella",
    "Cody",
    "Nickers",
    "Lynx",
    "Kramer",
    "Arrow",
    "Mulligan",
    "Kallie",
    "Dante",
    "Kane",
    "Klaus",
    "Dolly",
    "Moose",
    "Bella",
    "Quincy",
    "Tuck",
    "Jenny",
    "Pirate",
    "Tucker",
    "Lilly",
    "Monkey",
    "Tessie",
    "Tyler",
    "Patty",
    "Hammer",
    "Freddy",
    "Snoop",
    "Maggie-moo",
    "Connor",
    "Erin",
    "Simone",
    "Buddie",
    "Bobo",
    "Baby Doll",
    "Bugsey",
    "Wally",
    "Bullet",
    "Bo",
    "Opie",
    "Alex",
    "Carley",
    "Mason",
    "Boris",
    "Duchess",
    "Smoke",
    "Skinny",
    "Wilber",
    "Georgie",
    "Axel",
    "Tramp",
    "Cinnamon",
    "Freckles",
    "Jimmuy",
    "Copper",
    "Toto",
    "Puck",
    "Jojo",
    "Grover",
    "Grizzly",
    "Tequila",
    "Tipr",
    "Pepper",
    "Clyde",
    "Morgan",
    "Poppy",
    "Killian",
    "Odie",
    "Ralphie",
    "Frisky",
    "Elwood",
    "Flower",
    "Ivy",
    "Kiwi",
    "Tippy",
    "Sandy",
    "Salem",
    "Sheena",
    "Flint",
    "Macho",
    "Moonshine",
    "Jetta",
    "Gabby",
    "Oscar",
    "Rollie",
    "Cotton",
    "Oakley",
    "Ruby",
    "Jackpot",
    "Dudley",
    "Fancy",
    "Howie",
];

export function getRandomName(): string {
    return getRandomItem(NAMES);
}
