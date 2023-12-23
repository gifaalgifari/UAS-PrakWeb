import EditMahasiswaForm from "@/components/EditMahasiswaForm";


const getMahasiswaById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/datamahasiswa/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { mahasiswa } = await getMahasiswaById(id);

  return  <EditMahasiswaForm id={id} mahasiswa={mahasiswa} />

}
