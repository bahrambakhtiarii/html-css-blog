import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function NotFound(){
    return(
        <div className='flex justify-center items-center flex-col'>
            <div>
                <Image 
                    src="/global/404.png"
                    alt="Not Found image"
                    width={800} 
                    height={600} 
                    className="max-w-xs md:max-w-md lg:max-w-lg h-auto mb-6"
                
                />
            </div>
            <div>
                <Link href='/'>
                    <Button className='bg-slate-700 hover:bg-slate-500'>Back To Home</Button>
                </Link>
            </div>
        </div>
    )
}