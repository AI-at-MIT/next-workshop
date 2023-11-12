import Link from 'next/link';


export default function Navbar(){
    return (
        <nav className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-xl font-semibold">Example Application</h1>
            <div>
            <Link href="/" className="mx-3 text-white hover:text-blue-300">
                Home
              </Link>
              <Link href="/about" className="mx-3 text-white hover:text-blue-300">
                About
              </Link>       
            </div>

          </div>
        </nav>
  
    );
  };
  