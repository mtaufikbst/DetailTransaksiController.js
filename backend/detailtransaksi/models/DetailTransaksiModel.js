import { DataTypes, Sequelize } from "sequelize";
import koneksidb from "../../config/Database.js";

const DetailTransaksi = koneksidb.define('detailtransaksi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
        transaksi_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        produk_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        harga: {
        type:DataTypes.DECIMAL(10,2),
        allowNull: false
    },
        total: {
        type: DataTypes.VIRTUAL(DataTypes.DECIMAL, ['jumlah','harga']),
        get() {
            return this.getDataValue('jumlah') * this.getDataValue('harga');
        }
    },
    sub_total: {
        type: DataTypes.DECIMAL(10,2)
    },
    metode_pembayaran: {
        type: DataTypes.STRING(50)
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate:Sequelize.literal('CURRENT_TIMESTAMP')
    }
});
DetailTransaksi.belongsTo(transaksi, {foreignKey:'transaksi_id'});
DetailTransaksi.belongsTo(Produk, {foreignKey:'produk_id'});

module.exports = DetailTransaksi;
