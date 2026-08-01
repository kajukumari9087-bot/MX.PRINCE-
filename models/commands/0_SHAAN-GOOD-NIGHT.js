const fs = require("fs");
module.exports.config = {
  name: "good night",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "PRINCE BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("night") ||
     react.includes("Night") || react.includes("शुभ रात्रि") || react.includes("NIGHT") ||
react.includes("good night") ||
react.includes("GOOD NIGHT")) {
    var msg = {
        body: `𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 😴 𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌 😇`,attachment: fs.createReadStream(__dirname + `/SHAN-KHAN/NIGHT.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
