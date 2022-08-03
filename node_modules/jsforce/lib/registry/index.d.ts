import { Registry } from './types';
import { FileRegistry } from './file';
import { SfdxRegistry } from './sfdx';
import { EmptyRegistry } from './empty';
declare const registry: SfdxRegistry | FileRegistry;
export default registry;
export { Registry, FileRegistry, SfdxRegistry, EmptyRegistry };
