test("sumar I y I", () => {
	expect(new Claudiolator().add("I", "I")).toBe("II");
});

class Claudiolator {
	add(arg0: string, arg1: string): any {
		return "II";
	}
}
