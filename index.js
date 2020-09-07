require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login("NzUyNTEyNzExNjA2NDAzMDcy.X1YuEw._Ife4furhQFxFNAOTaTqekvqKbQ");

function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'halo pippi' || msg.content === 'pippi' || msg.content === 'halo Pippi' || msg.content === 'Pippi') {
    msg.reply('iya Pippi ? kamu mau nanya apa ? (Pippi cuma bisa jawab ya atau tidak)');
  }else if(msg.content !== 'halo pippi' || msg.content !== 'halo Pippi'){
    let n = msg.content.search("pippi");
    let m = msg.content.search("Pippi");
    if(n>-1 || m>-1){
      console.log(msg.author.username)
      if(msg.author.username!=="pippi" || msg.author.username!=="Pippi"){
        let answer=["iya Pippi..","tidak Pippi.."]
        msg.reply(random_item(answer));
      }
    }
  }
});
