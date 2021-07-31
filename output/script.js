"use strict";
// declare string variable player name
var playerName = "Masrafi";
playerName = "Asrafull";
playerName = "Sakib";
// Type 'number' is not assignable to type 'string'
// playerName = 123
// Type 'stirng' in function paramiter
function getPlayer(playerOne, playerTwo) {
    return playerName + playerTwo;
}
// let playerList: string[] array
var playerList = ["Masrafi", "Asarafull", "Sakib", "Rafiq", "Mostafiz"];
// let playerInfo object declare
var playerInfo = {
    name: 'Masrafi Bin Mortuza',
    age: 36,
    dateOfBirth: 1985,
    isCaptain: true
};
// playerInfo.name string type
// playerInfo.age number type
// playerInfo.dateOfBirth number type
console.log(playerList.push("Bijoy"));
console.log(getPlayer(" Rafiq ", " Mostafiz "));
console.log(playerName);
