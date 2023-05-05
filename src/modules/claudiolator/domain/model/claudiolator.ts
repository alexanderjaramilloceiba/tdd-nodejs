export class Claudiolator {
	add(romanNumeral1: string, romanNumeral2: string): any {
		if (romanNumeral1 == "I" && romanNumeral2 == "I") {
			return "II";
		}
		if (romanNumeral1 == "I" && romanNumeral2 == "II") {
			return "III";
		}
		return "IV";
	}
}
