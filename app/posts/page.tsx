import Card from '@/components/Card';

export type Posts = {
  id: string;
  title: string;
  category: string;
  slug: string;
  img: string;
  description: string;
  type: string;
};

async function getPosts(): Promise<Posts[]> {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch posts:", res.status, res.statusText);
    return [];
  }

  return res.json();
}

export default async function PostsPage({searchParams,}: {searchParams: { type?: string; category?: string }}) {

  const type = searchParams.type || '';
  const category = searchParams.category || '';

  const allPosts = await getPosts();

  let filteredPosts = allPosts;

  if (category) {
    filteredPosts = filteredPosts.filter((p) => p.category === category);
  }
  if (type) {
    filteredPosts = filteredPosts.filter((p) => p.type === type);
  }
  if (!filteredPosts) {
    return <div className="text-center text-3xl font-bold">Post Not Found!</div>;
  }

  
  return (
    <main>
      <h1 className='text-4xl font-bold my-6 py-10'>{category} {type}</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredPosts.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            title={article.title}
            category={article.category}
            slug={article.slug}
            img={article.img}
            description={article.description}
          />
        ))
      }
    </section>
    </main>
    
  );
}
