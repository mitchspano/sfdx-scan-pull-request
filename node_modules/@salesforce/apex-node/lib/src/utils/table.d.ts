export interface Row {
    [column: string]: string;
}
export interface Column {
    key: string;
    label: string;
}
export declare class Table {
    createTable(rows: Row[], cols: Column[], title?: string): string;
    private calculateMaxColumnWidths;
    private fillColumn;
}
