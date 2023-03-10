import Link from "next/link";
import { Form } from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);

  if (!res.ok) {
    throw new Error("failed to load");
  }

  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();
  console.log("🚀 ~ file: page.tsx:14 ~ Home ~ data:", data);

  return (
    <main className="py-8 px-48">
      <Link
        className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href={"/dashboard"}
      >
        Go to the dashboard
      </Link>
      <Form />
      <div className="py-6">
        {data.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div>
    </main>
  );
}
