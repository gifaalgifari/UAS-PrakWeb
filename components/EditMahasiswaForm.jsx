"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditMahasiswaForm(mahasiswa) {
  const detailmahasiswa = mahasiswa.mahasiswa;
  const [namaMahasiswa, setnamaMahasiswa] = useState(detailmahasiswa.namaMahasiswa);
  const [nim, setNim] = useState(detailmahasiswa.nim);
  const [jenisKelamin, setJenisKelamin] = useState(detailmahasiswa.jenisKelamin);
  const [prodi, setProdi] = useState(detailmahasiswa.prodi);
  const [fakultas, setFakultas] = useState(detailmahasiswa.fakultas);
  const [alamat, setAlamat] = useState(detailmahasiswa.alamat);
  const [email, setEmail] = useState(detailmahasiswa.email);
  const [noPhone, setNoPhone] = useState(detailmahasiswa.noPhone);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(namaMahasiswa, nim, jenisKelamin, prodi, alamat, email, noPhone);

    try {
      const res = await fetch(`/api/datamahasiswa/${detailmahasiswa._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ namaMahasiswa, nim, jenisKelamin, prodi,fakultas, alamat, email, noPhone }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input onChange={(e) => setnamaMahasiswa(e.target.value)} value={namaMahasiswa} className="border border-slate-500 px-8 py-2" type="text" placeholder="Nama Mahasiswa" />
      <input onChange={(e) => setNim(e.target.value)} value={nim} className="border border-slate-500 px-8 py-2" type="text" placeholder="Nim" />
      <input onChange={(e) => setJenisKelamin(e.target.value)} value={jenisKelamin} className="border border-slate-500 px-8 py-2" type="text" placeholder="Jenis Kelamin" />
      <input onChange={(e) => setProdi(e.target.value)} value={prodi} className="border border-slate-500 px-8 py-2" type="text" placeholder="Prodi" />
      <input onChange={(e) => setFakultas(e.target.value)} value={fakultas} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fakultas" />
      <input onChange={(e) => setAlamat(e.target.value)} value={alamat} className="border border-slate-500 px-8 py-2" type="text" placeholder="Alamat" />
      <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-slate-500 px-8 py-2" type="text" placeholder="Email" />
      <input onChange={(e) => setNoPhone(e.target.value)} value={noPhone} className="border border-slate-500 px-8 py-2" type="text" placeholder="No Phone" />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Mahasiswa</button>
    </form>
  );
}
