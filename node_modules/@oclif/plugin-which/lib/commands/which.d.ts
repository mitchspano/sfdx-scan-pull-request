import { Command } from '@oclif/command';
export default class Which extends Command {
    static description: string;
    static args: {
        name: string;
        required: boolean;
    }[];
    run(): Promise<void>;
}
