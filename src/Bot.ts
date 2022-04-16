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
tempChannels.registerChannel(`${process.env.CHANNEL_ID}`, {
    childCategory: `${process.env.CATEGORY_ID}`,
    childAutoDeleteIfEmpty: true,
    childAutoDeleteIfOwnerLeaves: true,
    childFormat: (member, count) => `${member.user.username}'s Tent`
})
client.login(process.env.BOT_TOKEN);
