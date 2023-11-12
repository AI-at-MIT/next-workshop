import Link from 'next/link';
import Image from "next/image";


function MyPage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    
    <Image
    alt="Executive"
    src="/memes/meme.png"
    width={400}
    height={400}
    className="m-5"
    />



    <p className="max-w-[600px] text-xl">
        Another example page and meme.
    </p>

    </div>

  );
}

export default MyPage;
