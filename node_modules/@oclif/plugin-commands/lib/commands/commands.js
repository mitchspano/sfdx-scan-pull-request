"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const cli_ux_1 = require("cli-ux");
const _ = require("lodash");
const os_1 = require("os");
class Commands extends command_1.Command {
    async run() {
        const { flags } = this.parse(Commands);
        let commands = this.getCommands();
        if (!flags.hidden) {
            commands = commands.filter(c => !c.hidden);
        }
        const config = this.config;
        commands = _.sortBy(commands, 'id').map(command => {
            // Template supported fields.
            command.description = (typeof command.description === 'string' && _.template(command.description)({ command, config })) || undefined;
            command.usage = (typeof command.usage === 'string' && _.template(command.usage)({ command, config })) || undefined;
            return command;
        });
        if (flags.json) {
            cli_ux_1.ux.styledJSON(commands.map(cmd => {
                let commandClass = cmd.load();
                const obj = Object.assign({}, cmd, commandClass);
                // Load all properties on all extending classes.
                while (commandClass !== undefined) {
                    commandClass = Object.getPrototypeOf(commandClass) || undefined;
                    Object.assign(obj, commandClass);
                }
                // The plugin property on the loaded class contains a LOT of information including all the commands again. Remove it.
                delete obj.plugin;
                // If Command classes have circular references, don't break the commands command.
                return this.removeCycles(obj);
            }));
        }
        else {
            cli_ux_1.ux.table(commands.map(command => {
                // Massage some fields so it looks good in the table
                command.description = (command.description || '').split(os_1.EOL)[0];
                command.hidden = Boolean(command.hidden);
                command.usage = (command.usage || '');
                return command;
            }), {
                id: {
                    header: 'Command',
                },
                description: {},
                usage: {
                    extended: true,
                },
                pluginName: {
                    extended: true,
                    header: 'Plugin',
                },
                pluginType: {
                    extended: true,
                    header: 'Type',
                },
                hidden: {
                    extended: true,
                },
            }, Object.assign({ printLine: this.log }, flags));
        }
    }
    getCommands() {
        return this.config.commands;
    }
    removeCycles(object) {
        // Keep track of seen objects.
        const seenObjects = new WeakMap();
        const _removeCycles = (obj) => {
            // Use object prototype to get around type and null checks
            if (Object.prototype.toString.call(obj) === '[object Object]') {
                // We know it is a "Dictionary" because of the conditional
                const dictionary = obj;
                if (seenObjects.has(dictionary)) {
                    // Seen, return undefined to remove.
                    return undefined;
                }
                seenObjects.set(dictionary, undefined);
                for (const key in dictionary) {
                    // Delete the duplicate object if cycle found.
                    if (_removeCycles(dictionary[key]) === undefined) {
                        delete dictionary[key];
                    }
                }
            }
            else if (Array.isArray(obj)) {
                for (const i in obj) {
                    if (_removeCycles(obj[i]) === undefined) {
                        // We don't want to delete the array, but we can replace the element with null.
                        obj[i] = null;
                    }
                }
            }
            return obj;
        };
        return _removeCycles(object);
    }
}
Commands.description = 'list all the commands';
Commands.flags = Object.assign({ help: command_1.flags.help({ char: 'h' }), json: command_1.flags.boolean({ char: 'j', description: 'display unfiltered api data in json format' }), hidden: command_1.flags.boolean({ description: 'show hidden commands' }) }, cli_ux_1.ux.table.flags());
exports.default = Commands;
