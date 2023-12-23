import connectMongoDB from "@/libs/mongodb";
import dataMhs from "@/models/dataMhs";
import Contact from "@/models/dataMhs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {namaMahasiswa, nim, prodi, fakultas,jenisKelamin, alamat, email, noPhone } = await request.json();
  await connectMongoDB();
  await dataMhs.create({namaMahasiswa, nim, prodi, fakultas,jenisKelamin,  alamat, email, noPhone });
  return NextResponse.json({ message: "Mahasiswa Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const contact = await Contact.find();
  return NextResponse.json({ contact });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
}
