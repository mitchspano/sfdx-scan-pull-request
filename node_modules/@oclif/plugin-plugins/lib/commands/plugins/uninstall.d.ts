import { Command, flags } from '@oclif/command';
import Plugins from '../../plugins';
export default class PluginsUninstall extends Command {
    static description: string;
    static usage: string;
    static help: string;
    static variableArgs: boolean;
    static args: {
        name: string;
        description: string;
    }[];
    static flags: flags.Input<any>;
    static aliases: string[];
    plugins: Plugins;
    run(): Promise<undefined>;
    private removeTags;
}
