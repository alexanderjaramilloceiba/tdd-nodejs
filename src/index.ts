import express from "express";

const app = express();

app.use(express.json());

app.post("/post", async (req, res) => {
	const { sample } = req.body;
	res.json({ received: { sample } });
});

app.get("/", async (req, res) => {
	res.json({ ok: true });
});

app.get("/param/:id", async (req, res) => {
	const { id }: { id?: string } = req.params;

	res.json({ received: { id } });
});

/* const server =  */ app.listen(3000, () =>
	console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
