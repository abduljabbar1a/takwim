
var TelegramBot = require('node-telegram-bot-api');

var token = '5266816142:AAHG9RC8tQ4j57Sy0s1ae94hAYI1nIoWxSQ';
var bot = new TelegramBot(token, {polling: true});
bot.on("polling_error", (err) => console.log(err));


var linke= 'https://www.youtube.com/watch?v=';
bot.on("message",function(msg){
var monn = msg.text;
  var nok = monn.indexOf(".");
   
let index = memb.indexOf(monn);
if(index>-1){
  var pag= monn.slice(0,nok);
  var que= monn.slice(nok+1,nok+3);
  
  var rep= ' التمرين رقم'+que+' في الصفحة رقم ' + pag;    
  
  var tito='اضغط لمشاهدة حل التمرين';
  if(msg.text == '/start'){
  rep = 'يسعدنا إنضمامك الى مجموعة حل تمارين الهندسة';
  tito='اضغط للاشتراك في المجموعة '};
 bot.sendMessage(msg.chat.id,rep, {
  reply_markup: {
      inline_keyboard: [
          [{
              text: tito ,
              url: linke+ylin[index]
          }]
      ]
  }
});
}
});
