const Discord = require("discord.js")
const simplydjs = require("simply-djs");
/*
Titulo: Comando de calculadora avançada
Descrição: Um comando que parece ser simplés mais ele simplesmente é muito bom
Comando: Calc
Sinônimos: [calculadora, calculator]
*/
module.exports = {
  name: "calc",
  aliases: ["calculadora", "calculator"],

  run: async(client, message, args) => {
    simplydjs.calculator(message,{
      embedColor:"AQUA"
    })
  }
}
