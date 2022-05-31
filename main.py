import discord
from discord.ext import commands

client = Client(command_prefix = "PREFIXO", case_sensivite = True) # Coloque o prefixo do seu bot onde está escrito "PREFIXO". nesse exemplo o prefixo sera "!"

@bot.event
async def on_ready():
  print(f"conectado como {client.user}!")
  
client.on("TOKEN") # Coloque o token do seu bot onde está escrito "TOKEN"

 #comando de say 
@bot.command
async def say(message, msg=None):
  if (msg == None):
    message.channel.send(f":x: {message.author} escreva o que você quer que eu fale ao lado do comando ex. `!say`")
    
   message.channel.send(f"{msg}
   mensagem enviada por {message.author}!")
  
