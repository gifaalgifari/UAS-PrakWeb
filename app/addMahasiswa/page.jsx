"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [namaMahasiswa, setnamaMahasiswa] = useState("");
  const [nim, setNim] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [prodi, setProdi] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [noPhone, setNoPhone] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!namaMahasiswa || !nim || !jenisKelamin || !prodi || !fakultas || !alamat || !email || !noPhone) {
      alert("All Form is required");
      return;
    }

    try {
      const res = await fetch(`/api/datamahasiswa`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ namaMahasiswa, nim, jenisKelamin, prodi, fakultas, alamat, email, noPhone }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a contact");
      }
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

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Mahasiswa
      </button>
    </form>
  );
}
