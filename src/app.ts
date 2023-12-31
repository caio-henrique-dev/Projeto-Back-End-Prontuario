import path from "path"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

import { initializeDatabase } from "./dataBase/config"
import { router } from "./routes"

const app = express()
app.use(express.json())

;(async () => {
    
    await initializeDatabase(); 

    const port = process.env.PORT || 3000;
    app.listen(+port, "0.0.0.0",() => {
      console.log(`App is listening on port: ${+port}`);
    });
  })();

app.use('/images', express.static(path.resolve(__dirname, "..", "uploads")))
app.use(router)
