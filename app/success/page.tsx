"use client";

import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  
  return (
    <div>
      <div className="container mx-auto px-4 py-8 text-center place-items-center">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <Image  
            alt="thankyou"
            src="/check.png" 
            height={300} width={300} 
            className="mask-t-from-50% "
            />
        <p className="flex justify-center mb-4">
          Your request has been processed successfully!
        </p>
        <p className="text-gray-400 pt-0">
          You&#39;ll receive a confirmation email shortly after we process your order with a tracking number
        </p>
      </div>
      <div className="flex justify-center max-w-md mx-auto gap-20">
        <Link href="/" className="w-full p-2 bg-amber-700 text-white rounded-2xl mt-4 cursor-pointer text-center">
          Go back to home page
        </Link>
        <Link href="/products" 
        className="w-full p-2 bg-yellow-500 text-white rounded-2xl mt-4 cursor-pointer text-center">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
