import Image from 'next/image'
import logo from '../public/global/logo.jpg';

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center p-4 text-gray-400 bg-slate-900'>
      <h1 className="text-3xl font-extrabold text-white">HTML & CSS</h1> 
      <div className="flex items-center"> 
        <Image src={logo} alt="blog logo" width={100} height={100} className='rounded-full' /> 
      </div>
    </header>
  );
}