import { Claudiolator } from "../../src/modules/claudiolator/domain/model/claudiolator";

test("sumar I y I", () => {
	expect(new Claudiolator().add("I", "I")).toBe("II");
});
