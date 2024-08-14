// app.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/route-loja.js';

const app = express();

app.use(cors('http://localhost:4200'));

app.use(express.json());
app.use(productRoutes);

mongoose.connect("mongodb+srv://rhuanyp:EHlyC1ODxOn81RAp@projetoteste.2sd92.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoTeste")
    .then(() => console.log("Funciona!"))
    .catch((error) => console.error("Não funciona!", error));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
