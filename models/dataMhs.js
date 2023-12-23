import mongoose, { Schema } from "mongoose";

const mahasiswa = new Schema(
  {
    namaMahasiswa: String,
    nim: String,
    jenisKelamin: String,
    prodi: String,
    fakultas: String,
    alamat: String,
    email: String,
    noPhone: String,
  },
  {
    timestamps: true,
  }
);

const dataMhs = mongoose.models.DataMhs || mongoose.model("DataMhs", mahasiswa);
export default dataMhs;
