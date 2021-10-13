require("dotenv").config();

const { Client, Intents } = require("discord.js");
const prefix = "!";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const ytdl = require("ytdl-core");

client.on("ready", () => {
  console.log(`${client.user.username} is ready.`);
});
client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on("message", async (message) => {
  console.log(`[${message.author.tag}] : ${message.content}`);
  if (message.content === `${prefix}hello`) {
    message.channel.send(`สวัสดีครับคุณ ${message.author} กินหมูมั๊ยครับ`);
  }
  if (message.content === `${prefix}เอเชีย`) {
    message.channel.send(`ข้ารู้จักชายผู้นี้ เขาเป็นชายที่จู๋แหลมที่สุดในโลก!`);
  }

  if (message.content.startsWith(`${prefix}join`)) {
    if (message.member.voice.channel) {
      message.member.voice.channel
        .join()
        .then((connection) => {
          message.reply("ข้ามาแล้ว");
        })
        .catch(console.log);
    } else {
      message.reply("เข้ามาในห้องก่อนซิ้แล้วค่อยเชิญ! ");
    }
  }
  if (message.content.startsWith(`${prefix}leave`)) {
    if (message.guild.me.voice.channel) {
      message.member.voice.channel.leave();
      message.reply("ลาก่อนแล้วพบกันใหม่");
    } else {
      message.reply("ยังไม่ได้เข้าก็จะไล่กันซะแล้ว เชิญก่อนซิ้!");
    }
  }
  if (message.content.startsWith(`${prefix}reset`)) {
    message.reply("Reset...");
    client.destroy();
    client.login(process.env.DISCORDJS_BOT_TOKEN);
  }

  if (message.content.startsWith(`${prefix}clear`)) {
    const args = message.content.split(" ").slice(1);
    const amount = args.join(" ");

    if(amount > 100){
        return message.reply(`You can't not delete more than 100 messages!`);
    }
    if(!amount){ //check null value
        return message.reply(`You need to enter amount number messages before clear messages!`);
    }

    await message.channel.messages.fetch({ limit: amount }).then((messages) => {
      message.channel.bulkDelete(messages);
    });
  }

});
