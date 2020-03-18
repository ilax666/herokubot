const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("test sur heroku point");
	console.log("OwO je suis connecte");
});

bot.login("Njg5ODgyOTcwMTU2NDMzNDgz.XnJZOQ.CL9ewZuQWSH0XPx5YMlzpHPSmWI");
