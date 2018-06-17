const Discord = require("discord.js");
const token = "NDU2MTg1MjA3MDgzNDk5NTIx.DgG6RQ.ydgeCcU_cMA4eLJLwald_k_TdCE";
let bot = new Discord.Client();

bot.on("ready",function(){
  console.log('ready')
})
bot.on("message", function(message){
  console.log(message.content)
  // if(message.author.equals(bot.user)){return;}

  if(message.content==="hello"){
    message.channel.sendMessage("Ya3tik 1000 3asba")
  }
});
bot.login(token);