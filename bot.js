
var TelegramBot = require('node-telegram-bot-api');

var token = '5266816142:AAHG9RC8tQ4j57Sy0s1ae94hAYI1nIoWxSQ';
var bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", (err) => console.log(err));

var pathh = 'https://github.com/abduljabbar1a/takwim/edit/main/delet.txt';

var linke= 'https://www.youtube.com/watch?v=';

bot.on("message",function(msg){
      var monn = msg.text;
  if(msg.text == '/start'){
  rep = 'يسعدنا إنضمامك الى مجموعة حل تمارين الهندسة';
  tito='اضغط للاشتراك في المجموعة '};
  
 bot.sendMessage(msg.chat.id,'hello', {
  reply_markup: {
      inline_keyboard: [
          [{
              text: 'pathh' ,
              url: 'https'
          }]
                       ]
                 }
                                  });
                               
});
