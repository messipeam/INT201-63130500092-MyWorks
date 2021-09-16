#client 887954304906973244
#tokent ODg3OTU0MzA0OTA2OTczMjQ0.YULp4w.ig79RxFA_0TBzgx--9ZAWbZLGJo
#permission 256064

import discord 
from discord.ext import commands
from discord.ext.commands import Bot

client = Bot(command_prefix = "!")

@client.event
async def on_ready() :
        print("Start bot!")

@client.event
async def on_message(message) :
    if message.content.startswith('!greet') :
        await message.channel.send('Hello this is bot Peam!')

@client.event
async def on_message(message) :
    if message.content.startswith('!wtf') :
        await message.channel.send('Oh Who do you think you are?')

@client.event
async def on_message(message) :
    if message.content.startswith('!mu') :
        await message.channel.send('กินหมูมัํย?')

client.run('ODg3OTU0MzA0OTA2OTczMjQ0.YULp4w.ig79RxFA_0TBzgx--9ZAWbZLGJo')