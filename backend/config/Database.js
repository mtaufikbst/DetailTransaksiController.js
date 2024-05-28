import { Sequelize } from "sequelize";
//Inisialisasi Keoneksi Ke Database
const koneksidb = new Sequelize ('penjualan_guru_tamu', 'root', '',{
    host:'127.0.0.1',
    dialect:'mysql'
});
//Coba koneksi ke database
async function testConnection(){
    try {
        await koneksidb.authenticate();
        console.log('Database connection has been established successfully');
    } catch (error) {
        console.error('Unable to connect to the database:',error);
    }
    }
//Panggil fungsi untuk menguji koneksi saat file ini dijalankan
testConnection();

// Eksport modul database
export default koneksidb;
