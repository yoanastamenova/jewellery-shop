import Link from "next/link";
import Stripe from "stripe"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}


export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price;
  return (
    <Link href={"/products/1"}>
          <Card>
            {product.images && product.images[0] && (
              <div className="relative h-80 w-full">
                <Image 
                alt={product.name} 
                src={product.images[0]} 
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-500 ease-in-out"
                />
              </div>
            )}

            <CardHeader> 
                {" "}
            <CardTitle> {product.name} </CardTitle>
            <CardContent>
                {product.description}
                {price && price.unit_amount &&  (
                    <p className="text-xl text-black">
                    {new Intl.NumberFormat("de-DE", { 
                    style: "currency", 
                    currency: "EUR", 
                    minimumFractionDigits: 0 
                    }).format(price.unit_amount / 100)}
                </p> 
            )}
            <Button>
                View Details
            </Button>
            </CardContent>
            </CardHeader>
       </Card>
    </Link>
  )
}