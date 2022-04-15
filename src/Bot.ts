import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import * as dotenv from 'dotenv';
dotenv.config();

const client = new Client({intents: IntentOptions});
ready(client);
interactionCreate(client);
client.login(process.env.BOT_TOKEN);