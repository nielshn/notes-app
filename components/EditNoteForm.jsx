"use client";

import { BASE_URL } from "@/app/constant/baseurl";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditNoteForm = ({ id, title, body }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, body: newBody }),
      });

      router.refresh();
      if (!res.ok) {
        throw new Error("Failed to update note");
      }
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Note title"
      />
      <textarea
        onChange={(e) => setNewBody(e.target.value)}
        value={newBody}
        className="border border-slate-500 px-8 py-2"
        placeholder="Note Body"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Note
      </button>
    </form>
  );
};

export default EditNoteForm;
