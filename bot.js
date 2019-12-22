const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU3MDAwNzg0NzAxMDMwNDAw.XfrL1g.WV0-mCb7ia8L5Ku3yAIjEu-xnEY';

bot.on('ready', () =>{
    console.log('this bot is online');
})

bot.on('message', msg=>{
    console.log('this bot is online');
        bot.user.setActivity('in luna');

})

client.login(process.env.BOT_TOKEN);
