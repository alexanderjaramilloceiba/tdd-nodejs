import { Claudiolator } from "../../src/modules/claudiolator/domain/model/claudiolator";

test("sumar I y I", () => {
	// Arrange
	const claudiolator = new Claudiolator();
	// Act
	const result = claudiolator.add("I", "I");
	// Assert
	expect(result).toBe("II");
});
