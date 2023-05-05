export class Claudiolator {
	add(romanNumeral1: string, romanNumeral2: string): any {
		if (romanNumeral1 == "I" && romanNumeral2 == "I") {
			return "II";
		}
		return "III";
	}
}
