import { Claudiolator } from "../../src/modules/claudiolator/domain/model/claudiolator";

let claudiolator: Claudiolator;
beforeEach(() => {
	// Jest will wait for this promise to resolve before running tests.
	claudiolator = new Claudiolator();
});

test("sumar I y I", () => {
	// Act
	const result = claudiolator.add("I", "I");
	// Assert
	expect(result).toBe("II");
});

test("sumar I y II", () => {
	// Act
	const result = claudiolator.add("I", "II");
	// Assert
	expect(result).toBe("III");
});

test("sumar II y II", () => {
	// Act
	const result = claudiolator.add("II", "II");
	// Assert
	expect(result).toBe("IV");
});
