const fs = require("fs");
module.exports.config = {
  name: "good morning",
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
  if(react.includes("morning") ||
     react.includes("Morning") || react.includes("MORNING") || react.includes("GM") ||
react.includes("gm") ||
react.includes("good morning")) {
    var msg = {
        body: `𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😻`,attachment: fs.createReadStream(__dirname + `/SHAN-KHAN/MORNING.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
