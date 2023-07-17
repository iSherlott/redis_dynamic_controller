export function isValidNumber(value: any): string | null {
    try {
        if (!value) throw ("Invalid value");
        if (typeof value !== 'number') throw ("Non-numeric value");
        if (value < 0) throw ("Value less than 0");

        return null;
    } catch (error: any) {
        return error;
    }

}
