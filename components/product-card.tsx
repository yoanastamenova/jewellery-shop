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
    <Link href={`/products/${product.id}`} className="block h-full">
          <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-1">
            {product.images && product.images[0] && (
              <div className="relative h-60 w-full">
                <Image 
                alt={product.name} 
                src={product.images[0]} 
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                />
              </div>
            )}
            <CardHeader className="p-4"> 
                {" "}
            <CardTitle className="text-xl font-bold text-gray-800"> {product.name} </CardTitle>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">
                {product.description && (
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                )}
                    {price && price.unit_amount &&  (
                        <p className="text-lg font-semibold text-gray-900">
                        {new Intl.NumberFormat("de-DE", { 
                            style: "currency", 
                            currency: "EUR", 
                            minimumFractionDigits: 0 
                        }).format(price.unit_amount / 100)}
                        </p> 
            )}
            <Button className="mt-4 bg-black text-white">
                View Details
            </Button>
            </CardContent>
            </CardHeader>
       </Card>
    </Link>
  )
}