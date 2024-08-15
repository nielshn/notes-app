import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, body } = await request.json();
    await connectMongoDB();
    await Note.create({ title, body, createdAt: new Date() });
    return NextResponse.json({ message: "Note created successfully" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const notes = await Note.find().sort({ createdAt: -1 });
    return NextResponse.json({ notes });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note deleted successfully" }, { status: 200 });
}
