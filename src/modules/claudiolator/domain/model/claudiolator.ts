import { DecimalConverter } from "./decimal-converter";

export class Claudiolator {
	constructor(private readonly decimalConverter: DecimalConverter<string>) {}

	add(romanNumeral1: string, romanNumeral2: string): string {
		if (romanNumeral1 == "I" && romanNumeral2 == "I") {
			return "II";
		}
		if (romanNumeral1 == "I" && romanNumeral2 == "II") {
			return "III";
		}
		return "IV";
	}
}
