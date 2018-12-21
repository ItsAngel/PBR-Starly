const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a 6 sided dice'
        });
    }
   
    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6 + 1); 
        message.reply("Your Dice Landed on " + diceRoll);
    
    }  
}

module.exports = CoinFlipCommand;

