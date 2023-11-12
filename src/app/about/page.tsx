import Link from 'next/link';
import Image from "next/image";


function MyPage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

    <p className="max-w-[600px] text-xl">
        This is a demo Next.js app made by David Koplow for the AIM Labs Next Workshop on 11/12/2023. It outlines the basics of Next.js and Flask integration. See the slides <Link className = "text-blue-500 hover:underline" href="https://docs.google.com/presentation/d/1y8sTyngFo9CfDdB5A6WtErXz5EB0UWVSeU3NdyK1asU/edit?usp=sharing">here</Link>.
    </p>

    <a href="/memepage" className="m-10 group border border-transparent px-4 py-4 flex flex-col items-center w-[250px] h-[350px] ">
      <div className="transition duration-500 ease-in-out group-active:scale-95 w-[200px] relative h-[270px] rounded-3xl overflow-hidden hover ">
        <Image
          alt="Executive"
          src="/memes/meme_labs.png"
          quality={100}
          fill={true}
          style={{ userSelect: 'none' ,objectFit: "cover"}} 
          className="grayscale group-hover:grayscale-0 group-active:scale-125 transition duration-500 ease-in-out"
          />
        </div>
      <div className="mt-4 text-center">
        <h3 className="text-xxl font-semibold">Meme 1</h3>
        <p className="text-xl text-gray-500">The Dankest Meme</p>
      </div>
    </a>


    </div>

  );
}

export default MyPage;
