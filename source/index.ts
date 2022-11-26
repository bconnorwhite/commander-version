import commander, { Command } from "commander";
import { getVersionSync } from "@bconnorwhite/module";

function setDefaultHelp(command: commander.Command): commander.Command {
  const defaultHelpDescription = "Display help for command";
  return command
    .helpOption("-h --help", defaultHelpDescription)
    .addHelpCommand("help [command]", defaultHelpDescription);
}

/**
 * Set the program version to `version` from the nearest package.json up from `dirname`.
 *
 * This method auto-registers the `-v, --version` flag
 * which will print the version number when passed.
 *
 * You can optionally supply flags and description to override the defaults.
 */
export const program = function (dirname: string, flags = "-v --version", description = "Output the version number") {
  const version = getVersionSync(dirname);
  const command = new Command();
  if(version) {
    command.version(version, flags, description);
  }
  return setDefaultHelp(command);
};

const defaultCreateCommand = commander.createCommand;

export const createCommand = function (name?: string) {
  return setDefaultHelp(defaultCreateCommand(name));
};

commander.createCommand = createCommand;

export default commander;
