exports.run = function(bot, msg, args) {
  var code = args.join(" ");
  try {
      var evaled = eval(code);
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
      msg.channel.sendMessage(`\`\`\`xl\n${clean(evaled)}\n\`\`\``
      );        
  }
  catch(err) {
      msg.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  }
  else {
      return text;
  }
}
