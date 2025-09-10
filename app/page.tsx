import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 gap-8 px-8 sm:px-16 md:grid-cols-2 md:items-center">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to Luxotica</h2>
            <p className="text-neutral-600"> Discover how lux meets reality and perfection</p>
            <Button 
            asChild 
            variant="default"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link 
              href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >Browse All Products</Link>
            </Button>
          </div>
          <Image 
          alt="Banner Image" 
          width={450} 
          height={450} 
          src={products.data[3].images[0]}
          className="rounded"
          ></Image>
        </div>
        </section>
        <section className="py-8">
          <Carousel />
        </section>
    </div>
  );
}
