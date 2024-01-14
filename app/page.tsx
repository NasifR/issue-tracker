import Image from 'next/image';
import { Popover } from '@radix-ui/react-popover';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-500'>
      <h1 className='text-white text-4xl font-bold mb-4'>Welcome to IssueTracker</h1>
      <p className='text-gray-200 mb-4'>Manage and Monitor Issues with Seamless Database Integration</p>
      <Button><Link href='issues'>Get Started</Link></Button>
    </div>
  );
}
