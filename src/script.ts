// declare string variable player name
let playerName = "Masrafi";
playerName = "Asrafull";
playerName = "Sakib"

// Type 'number' is not assignable to type 'string'
// playerName = 123

// Type 'stirng' in function paramiter
function getPlayer(playerOne:string, playerTwo:string) {
    return playerName + playerTwo;
}

// let playerList: string[] array
let playerList = ["Masrafi", "Asarafull", "Sakib", "Rafiq", "Mostafiz"];

// let playerInfo object declare
let playerInfo = {
    name: 'Masrafi Bin Mortuza',
    age:36,
    dateOfBirth:1985,
    isCaptain: true
}

// playerInfo.name string type
// playerInfo.age number type
// playerInfo.dateOfBirth number type

console.log(playerList.push("Bijoy"));
console.log(getPlayer(" Rafiq "," Mostafiz "));
console.log(playerName);