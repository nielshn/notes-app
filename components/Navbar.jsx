import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-8 py-4">
      <Link className="text-white text-2xl font-bold" href="/">
        NielCoding.
      </Link>
      <Link
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        href="/addNote"
      >
        Add Note
      </Link>
    </nav>
  );
};

export default Navbar;
