const { TwitchPoster } = require("discord-twitch")

const {Client, MessageEmbed, Permissions, MessageActionRow, MessageButton} = require("discord.js")

const client = new Client({intents:[32767]})
const config = require("./src/twitch.json")
const poster = new TwitchPoster({
    client: client,
    loop_delays_in_min: 2,
    client_id: config.clientId,
    client_secret: config.clientSecret
    
    
        
})
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw

client.on("ready", async () => {
    
    client.user.setActivity("By Cheeini (https://github.com/Nicat-dcw/)")
    
})

client.on("messageCreate", async (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "twitch-ayarla"){
      const permission = message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)

if(!permission) {
     return message.reply({
        content: ':x: ** Bu komutu kullanmak için Yeterli Izniniz Bulunmamaktadır.**',
        ephemeral: true
      });
}
    const kanalIsim = args[0]
    const kanalId = args[1]
    poster.setChannel(kanalIsim, kanalId, preventDuplicates = true)
    message.reply("👨‍🔧😉 ** Sistem Ayarlandı!.**")
    // Daha Fazlası için https://discord-twitch.js.org/TwitchPoster.html
}

})
client.login(config.token)
                          // Daha Fazlası için https://discord-twitch.js.org/TwitchPoster.html
// Daha Fazlası için https://discord-twitch.js.org/TwitchPoster.html
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
// https://github.com/Nicat-dcw
