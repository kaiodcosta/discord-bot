const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./secret.json").discord_token;

// My files here
const music = require("./Music/music.js");
const games = require("./Games/games.js");
const lyrics = require("./Lyrics/lyrics.js");
const help = require("./Help/help.js");
const weather = require("./Weather/weather.js");
const words = require("./Words/words.js");

client.on("ready", () => {
  client.user.setPresence({
    status: "online",
    activity: { name: "Under development. Please wait :)" },
  });
  console.log(
    `Logged in as ${client.user.tag}!\nVersion Running: ${Discord.version}`
  );
});

client.on("message", (message) => {
  if (message.author.tag === "boom boom#6330") return;
  if (!message.content.startsWith("/")) return;

  console.log(
    message.author.tag +
      " sent a message " +
      (message.guild ? "in " + message.guild.name : "personally")
  );
  console.log("Content: " + message.content + "\n");

  if (message.content.startsWith("/help")) help.index(message);
  else if (message.content.startsWith("/music")) music.playSong(message);
  else if (message.content.startsWith("/queue")) music.displayQueue(message);
  else if (message.content.startsWith("/streamahp"))
    music.streamAfterHours(message);
  else if (message.content.startsWith("/streamsb"))
    music.streamStarboy(message);
  else if (message.content.startsWith("/skip")) music.skip(message);
  else if (message.content.startsWith("/p")) music.streamSong(message);
  else if (message.content.startsWith("/pause")) music.pauseSong(message);
  else if (message.content.startsWith("/stop")) music.stopSong(message);
  else if (message.content.startsWith("/mute")) music.mute(message);
  else if (message.content.startsWith("/resume")) music.resumeSong(message);
  else if (message.content.startsWith("/volume")) music.changeVolume(message);
  else if (message.content.startsWith("/leave")) music.leaveChannel(message);
  else if (message.content.startsWith("/lyrics")) lyrics.getLyrics(message);
  else if (message.content.startsWith("/weather")) weather.getWeather(message);
  else if (message.content.startsWith("/game")) games.gameHandler(message);
  else if (message.content.startsWith(`/word`)) words.word(message);

  // if (message.content.startsWith("/lyrics")) lyrics.getLyrics(message);
  // else message.reply("Under maintenance! Please reach back later.");
});

client.login(token);
