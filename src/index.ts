import express from "express";
import { Claudiolator } from "./modules/claudiolator/domain/model/claudiolator";

const app = express();

app.use(express.json());

app.get("/:romanNumeral1/plus/:romanNumeral2", async (req, res) => {
	const {
		romanNumeral1,
		romanNumeral2,
	}: { romanNumeral1: string; romanNumeral2?: string } = req.params;

	const decimalConverter = {
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

	const claudiolator = new Claudiolator(decimalConverter);

	res.json({ result: claudiolator.add(romanNumeral1, romanNumeral2) });
});

/* const server =  */ app.listen(3000, () =>
	console.log(`
🚀 Server ready at: http://localhost:3000/II/plus/I
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
