import commander, { createCommand } from "commander";
import { getVersionSync } from "@bconnorwhite/module";

/**
 * Set the program version to `version` from the nearest package.json up from `dirname`.
 *
 * This method auto-registers the "-v, --version" flag
 * which will print the version number when passed.
 *
 * You can optionally supply the  flags and description to override the defaults.
 */
export default (dirname: string, flags: string | undefined = "-v --version", description?: string | undefined) => {
  const version = getVersionSync(dirname);
  if(version) {
    return createCommand().version(version, flags, description);
  } else {
    return createCommand();
  }
}

export {
  commander,
  createCommand
}