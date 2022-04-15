import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const commands = [
	new SlashCommandBuilder().setName("ping").setDescription("Replies with pong!")
]
	.map(command => command.toJSON());

const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN!);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_TEST_ID!), { body: commands })
	.then(() => console.log("Successfully registered application commands."))
    .catch(console.error)