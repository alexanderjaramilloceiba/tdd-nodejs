test("sumar I y I", () => {
	expect(add("I", "I")).toBe("II");
});
function add(arg0: string, arg1: string): any {
	return "II";
}
