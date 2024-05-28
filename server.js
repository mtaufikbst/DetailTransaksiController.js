import express from "express";
import cors from 'cors';
import koneksidb from "./backend/config/Database.js";
import produkRoutes from "./backend/produk/routes/ProdukRoutes.js";
import pelangganRoutes from "./backend/pelanggan/routes/PelangganRoutes.js";
import transaksiRoutes from "./backend/transaksi/routes/TransaksiRoutes.js";
import detailtransaksiRoutes from "./backend/detailtransaksi/routes/DetailTransaksiRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

// Gunakan rute produk
app.use(produkRoutes);

// Gunakan rute pelanggan
app.use(pelangganRoutes);
app.use(transaksiRoutes);
app.use(detailtransaksiRoutes);

//Gunakan Koneksi Database
koneksidb.sync().then(()=>{
    app.listen(2526,()=> {
        console.log("Server Running");
    });
}).catch(err=>{
    console.error('Unable to connect to the database',err);
});