const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [imarhaam](https://imarhaam.github.io/exe/)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://media.discordapp.net/attachments/1226261781979074610/1226278899445399703/New_Project.png?ex=66243038&is=6611bb38&hm=a07441a9249bb2b6d8b6a98f98a842ae35e06f560d5e1e93440d0e39507b3c40&=&format=webp&quality=lossless`);

    const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/@SoulBoundMC')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://dsc.gg/soulbound')
      .setStyle(ButtonStyle.Link);


      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
