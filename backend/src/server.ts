import cors from "cors";
import express, { Request, Response } from "express";
import { LocalStorage } from "node-localstorage";
import { v4 as uuidv4 } from "uuid";

const localStorage = new LocalStorage("./scratch");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Define the Purchase interface
interface Purchase {
  id: string;
  productId: number;
  quantity: number;
  date: string;
  price: number;
  name: string;
}

// Endpoint to get purchases
app.get("/api/purchases", (req: Request, res: Response) => {
  const purchasesData: Purchase[] = JSON.parse(
    localStorage.getItem("purchases") || "[]"
  );
  res.status(200).json(purchasesData);
});

// Endpoint to update purchases
app.post("/api/purchases/update", (req: Request, res: Response) => {
  const { purchases }: { purchases: Omit<Purchase, "id">[] } = req.body;
  const purchasesData: Purchase[] = purchases.map((purchase) => ({
    ...purchase,
    id: uuidv4(),
  }));

  localStorage.setItem("purchases", JSON.stringify(purchasesData));
  res.status(200).json(purchasesData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
