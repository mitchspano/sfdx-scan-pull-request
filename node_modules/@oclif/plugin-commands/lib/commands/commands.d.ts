import { Command, flags } from '@oclif/command';
export default class Commands extends Command {
    static description: string;
    static flags: flags.Input<any>;
    run(): Promise<void>;
    private getCommands;
    private removeCycles;
}
