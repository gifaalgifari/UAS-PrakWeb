import connectMongoDB from "@/libs/mongodb";
import dataMhs from "@/models/dataMhs";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { namaMahasiswa: namaMahasiswa, nim: nim, jenisKelamin: jenisKelamin, prodi: prodi, fakultas: fakultas, alamat: alamat, email: email, noPhone: noPhone } = await request.json();
  await connectMongoDB();
  await dataMhs.findByIdAndUpdate(id, { namaMahasiswa, nim, jenisKelamin, prodi, fakultas, alamat, email, noPhone });
  return NextResponse.json({ message: "Contact Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const mahasiswa = await dataMhs.findOne({ _id: id });
  return NextResponse.json({ mahasiswa }, { status: 200 });
}
