import Image from "next/image"

export type Posts = {
  id: string
  title: string
  category: string
  slug: string
  img: string
  description: string
  type: string
}

async function getPosts(): Promise<Posts[]> {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch posts:", res.status, res.statusText);
    return [];
  }
  
  return res.json();
}

export default async function SinglePost({params}: {params: {slug: string}}) {
  const allPosts = await getPosts();
  const post = allPosts.find((a) => a.slug === params.slug);
  

  if (!post) {
    return <div className="text-center text-3xl font-bold">Post Not Found!</div>;
  }


  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl font-sans text-gray-800">
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4 text-center">
            {post.title}
        </h1>
      </header>
      <figure className="mb-10 w-full">
        <Image
            src={post.img}
            alt={post.slug}
            width={800} 
            height={600} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </figure>
      <article className="prose prose-lg max-w-none text-justify leading-relaxed">
        <p>
            {post.description}
        </p>
      </article>
    </div>
  );
}
