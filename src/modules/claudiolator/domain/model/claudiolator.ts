import { DecimalConverter } from "./decimal-converter";

export class Claudiolator {
	constructor(private readonly decimalConverter: DecimalConverter<string>) {}

	add(romanNumeral1: string, romanNumeral2: string): string {
		const num1 = this.decimalConverter.from(romanNumeral1);
		const num2 = this.decimalConverter.from(romanNumeral2);

		const sum = num1 + num2;

		return this.decimalConverter.to(sum);
	}
}
