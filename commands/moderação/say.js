const Discord = require("discord.js");
const config = require("../../config.json");
/*
Titulo: Comando de say
Descrição: Um comando que faz o bot dalar algo por você
Comando: say
Sinônimos: [dizer]
*/
module.exports = {
    name: "say",
    aliases: ["dizer"],

    run: async(client, message, args) => {
        let say = args.join(" ");
        
        if (!say) return message.channel.send(`:x: | Escreva algo ao lado do comando ex. \`${config.prefix}say {mensagem}\` `);

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | Você não tem permissão para isso`);

        message.channel.send(say);
        message.delete(say)
    }
}
