import cors from "cors";
import express from "express";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the Simple E-commerce Backend!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
