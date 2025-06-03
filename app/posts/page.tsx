import Card from '@/components/Card';
import { notFound } from 'next/navigation';

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
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch posts:", res.status, res.statusText);
    return [];
  }

  return res.json();
}

// اصلاح تایپ searchParams به Promise
interface PostListPageProps {
  searchParams: Promise<{
    type?: string;
    category?: string;
  }>;
}

export default async function PostsPage({ searchParams }: PostListPageProps) {
  const { type = '', category = '' } = await searchParams;

  const allPosts = await getPosts();

  let filteredPosts = allPosts;

  if (category) {
    filteredPosts = filteredPosts.filter((p) => p.category === category);
  }
  if (type) {
    filteredPosts = filteredPosts.filter((p) => p.type === type);
  }

  if (filteredPosts.length === 0 && (category || type)) {
    notFound();
  }

  const pageTitle = category && type
    ? `${category} ${type}s`
    : category
    ? `${category} Posts`
    : type
    ? `${type}s`
    : 'All Posts';

  return (
    <main>
      <h1 className="text-4xl font-bold my-6 py-10 text-center">{pageTitle}</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((article) => (
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
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No posts found matching the applied filters.
          </p>
        )}
      </section>
    </main>
  );
}
