import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getMahasiswa = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/datamahasiswa`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Mahasiswa: ", error);
  }
};

export default async function MahasiswaList() {
  const { Mahasiswa } = await getMahasiswa();

  return (
    <>
      {Mahasiswa.map((e) => (
        <div key={e._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-center">
          <div>
            <div className=" flex gap-3 mb-4">
              <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">{e.prodi}</div>
              <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">{e.fakultas}</div>
            </div>
            <h5 className="font-bold text-xl">
              {e.namaMahasiswa} {e.nim}
            </h5>
            <div>{e.email}</div>
          </div>
          <div>
            <p>{e.jenisKelamin}</p>
          </div>
          <div>
            <p>{e.noPhone}</p>
          </div>
          <div>
            <p>{e.alamat}</p>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={e._id} />
            <Link href={`/editMahasiswa/${e._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
