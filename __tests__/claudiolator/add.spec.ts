import { Claudiolator } from "../../src/modules/claudiolator/domain/model/claudiolator";
import { DecimalConverter } from "../../src/modules/claudiolator/domain/model/decimal-converter";

describe(Claudiolator.name, () => {
	let claudiolator: Claudiolator;
	let decimalConverter: DecimalConverter<string>;
	beforeEach(() => {
		// Jest will wait for this promise to resolve before running tests.
		claudiolator = new Claudiolator(decimalConverter);
	});

	describe.each([
		["I", "I", "II"],
		["I", "II", "III"],
		["II", "II", "IV"],
	])(
		"sumar %s y %s",
		(romanNumeral1: string, romanNumeral2: string, expected: string) => {
			test(`retorna ${expected}`, () => {
				// Act
				const result = claudiolator.add(romanNumeral1, romanNumeral2);
				// Assert
				expect(result).toBe(expected);
			});
		}
	);
});
