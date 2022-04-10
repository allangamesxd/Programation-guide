const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const config = require("./config.json");
const moment = require("moment");
const fs = require("fs");
client.login(config.token); 


client.once('ready', async () => {

    console.log(`${client.user.tag.replace(`#${client.user.discriminator}`, ` `)}online!`)

})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});

 client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;    

      if(message.content ===`<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) return message.channel.send({content: `${message.author}`, embeds: [embed1]});

       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
     if(message.guild.id === '957090756785483868') return message.reply(`Esse servidor foi removido da minha **SERVER_LIST**`);
      if(!message.content.startsWith(prefix)) return;
  
      console.log(`${message.author.tag} escreveu uma mensagem contendo ${message}`);
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });
 
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
  
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);  
