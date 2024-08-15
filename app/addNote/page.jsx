"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BASE_URL } from "../constant/baseurl";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Title and body are required.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.log("Error creating note: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Note title"
      />
      <input
        onChange={(e) => setBody(e.target.value)}
        value={body}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Note body"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
