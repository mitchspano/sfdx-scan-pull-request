/**
 * A date object to keep Salesforce date literal
 *
 * @class
 * @constructor
 * @see http://www.salesforce.com/us/developer/docs/soql_sosl/Content/sforce_api_calls_soql_select_dateformats.htm
 */
export declare class SfDate {
    private _literal;
    /**
     *
     */
    constructor(literal: string);
    /**
     * Returns literal when converted to string
     */
    toJSON(): string;
    toString: () => string;
    /**
     * Convert JavaScript date object to ISO8601 Date format (e.g. 2012-10-31)
     *
     * @param {String|Number|Date} date - Input date
     * @returns {SfDate} - Salesforce date literal with ISO8601 date format
     */
    static toDateLiteral(date: string | number | Date): SfDate;
    /**
     * Convert JavaScript date object to ISO8601 DateTime format
     * (e.g. 2012-10-31T12:34:56Z)
     */
    static toDateTimeLiteral(date: string | number | Date): SfDate;
    /**
     * Convert JavaScript date object to ISO8601 time format
     * (e.g. 12:34:56.789Z)
     */
    static toTimeLiteral(time: string | number | Date): SfDate;
    /**
     * Parse IS08601 date(time) formatted string and return date instance
     */
    static parseDate(str: string): Date;
    /**
     * Parse IS08601 time formatted string and convert to parse string
     */
    static parseTime(str: string): Date;
    static YESTERDAY: SfDate;
    static TODAY: SfDate;
    static TOMORROW: SfDate;
    static LAST_WEEK: SfDate;
    static THIS_WEEK: SfDate;
    static NEXT_WEEK: SfDate;
    static LAST_MONTH: SfDate;
    static THIS_MONTH: SfDate;
    static NEXT_MONTH: SfDate;
    static LAST_90_DAYS: SfDate;
    static NEXT_90_DAYS: SfDate;
    static LAST_N_DAYS: (num: number) => SfDate;
    static NEXT_N_DAYS: (num: number) => SfDate;
    static NEXT_N_WEEKS: (num: number) => SfDate;
    static LAST_N_WEEKS: (num: number) => SfDate;
    static NEXT_N_MONTHS: (num: number) => SfDate;
    static LAST_N_MONTHS: (num: number) => SfDate;
    static THIS_QUARTER: SfDate;
    static LAST_QUARTER: SfDate;
    static NEXT_QUARTER: SfDate;
    static NEXT_N_QUARTERS: (num: number) => SfDate;
    static LAST_N_QUARTERS: (num: number) => SfDate;
    static THIS_YEAR: SfDate;
    static LAST_YEAR: SfDate;
    static NEXT_YEAR: SfDate;
    static NEXT_N_YEARS: (num: number) => SfDate;
    static LAST_N_YEARS: (num: number) => SfDate;
    static THIS_FISCAL_QUARTER: SfDate;
    static LAST_FISCAL_QUARTER: SfDate;
    static NEXT_FISCAL_QUARTER: SfDate;
    static THIS_FISCAL_YEAR: SfDate;
    static NEXT_N_FISCAL_QUARTERS: (num: number) => SfDate;
    static LAST_N_FISCAL_QUARTERS: (num: number) => SfDate;
    static LAST_FISCAL_YEAR: SfDate;
    static NEXT_FISCAL_YEAR: SfDate;
    static NEXT_N_FISCAL_YEARS: (num: number) => SfDate;
    static LAST_N_FISCAL_YEARS: (num: number) => SfDate;
}
export default SfDate;
