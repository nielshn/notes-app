"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeNote = async () => {
    const confirmRemove = confirm("Are you sure you want to remove?");
    if (confirmRemove) {
      const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
        method: "DELETE",
        // cache: "no-store",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button className="text-red-400" onClick={removeNote}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
