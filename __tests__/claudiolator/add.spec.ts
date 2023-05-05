import { Claudiolator } from "../../src/modules/claudiolator/domain/model/claudiolator";
import { DecimalConverter } from "../../src/modules/claudiolator/domain/model/decimal-converter";

describe(Claudiolator.name, () => {
	let claudiolator: Claudiolator;

	let decimalConverter: DecimalConverter<string>;

	beforeEach(() => {
		decimalConverter = {
			from: (romanNumeral: string): number =>
				({
					["I"]: 1,
					["II"]: 2,
				}[romanNumeral] || 0),
			to: (decimal: number): string =>
				({
					[2]: "II",
					[3]: "III",
					[4]: "IV",
				}[decimal] || ""),
		};

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
