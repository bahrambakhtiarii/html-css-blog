import Link from "next/link";
import Image from "next/image";


export type Article = {
  id: string;
  title: string;
  category: string;
  slug: string;
  img: string;
  description: string;
};

export default function Card(props: Article) {
  const smallDescrib = props.description.length > 100
    ? props.description.slice(0, 100) + "..."
    : props.description;

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
             <Image
                src={props.img}
                alt={props.slug}
                width={720} 
                height={400} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {props.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {smallDescrib}
                </p>
                
                <Link href={`/posts/${props.slug}`} className="mt-auto inline-block bg-slate-600 text-white text-center py-2 px-4 rounded-lg hover:bg-slate-500 transition-colors duration-200" >
                    Show Post
                </Link>
            </div>
        </div>
    </>
  );
}