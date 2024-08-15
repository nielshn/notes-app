import { BASE_URL } from "@/app/constant/baseurl";
import EditNoteForm from "@/components/EditNoteForm";

const getNoteById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }

    const data = await res.json();
    return data;
    
  } catch (error) {
    console.log(error);
    return { note: null };
  }
};

export default async function EditNote({ params }) {
  const { id } = params;
  const { note } = await getNoteById(id);

  if (!note) {
    return (
      <div className="text-center text-red-500">
        Note not found. Please try again.
      </div>
    );
  }

  const { title, body } = note;
  return <EditNoteForm id={id} title={title} body={body} />;
}
