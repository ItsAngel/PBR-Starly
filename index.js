const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTIzODc3NjEyNzEyNjI0MTM5.DvyXng.yYxoTFLAOpzn69W9iTjV14-QXr8'

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 's!ping')
    {
        message.channel.sendMessage('Pong!')
    }

});

bot.on('ready', function(){
    console.log("Logged in as PBR|Starly!");
})



bot.login(TOKEN);
