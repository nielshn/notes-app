import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { BASE_URL } from "@/app/constant/baseurl";

const getNotes = async () => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch notes: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
    return { notes: [] };
  }
};

const NotesList = async () => {
  const { notes } = await getNotes();

  return (
    <div className="space-y-4">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note._id}
            className="p-5 border rounded-lg shadow-sm flex justify-between items-center bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="font-bold text-xl mb-2">{note.title}</h2>
              <p className="text-gray-600">{note.body}</p>
              <small className="text-gray-400">
                {new Date(note.createdAt).toLocaleDateString()}
              </small>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={note._id} />
              <Link href={`/editNote/${note._id}`}>
                <HiPencilAlt
                  size={24}
                  className="text-blue-500 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">Tidak ada catatan</div>
      )}
    </div>
  );
};

export default NotesList;
