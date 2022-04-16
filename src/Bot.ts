import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import * as dotenv from 'dotenv';
import TempChannels from "discord-temp-channels";
dotenv.config();

const client = new Client({intents: IntentOptions});
const tempChannels = new TempChannels(client);
ready(client);
interactionCreate(client);
tempChannels.registerChannel("964709389409873940", {
    childCategory: "812202088419426356",
    childAutoDeleteIfEmpty: true,
    childAutoDeleteIfOwnerLeaves: true,
    childFormat: (member, count) => `#${count} | ${member.user.username}'s lounge`
})
client.login(process.env.BOT_TOKEN);