import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
              <Link href="/" className="hover:text-blue-600"> 
                <Image src="/logo2.png" height={80} width={80} alt="logo"/>
              </Link>
            <div className="hidden md:flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/products" className="hover:text-blue-600">Products</Link>
                <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
            </div>
            <div className="flex items-center space-x-4"></div>
            </div>
        </nav>
    );
    };