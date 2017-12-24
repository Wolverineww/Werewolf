const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzkyNDU1Mjk0MDE5NDM2NTUx.DRq4Hw.bFMDIReuLg2b6vh5C6BnG1y8XQQ'
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ blagues: [], xp: []})
    .write();

    client.login(process.env.BOT_TOKEN);
