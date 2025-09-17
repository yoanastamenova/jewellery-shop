"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { CheckoutAction } from "./checkout-action";

export default function Checkout() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (total === 0 || items.length === 0) {
    return (
      <div className="container mx-auto px-5 py-8 text-center">
        {" "}
        <h1 className="text-3xl font-bold mb-4"> Your cart is empty.</h1>
      </div>
    );
  }

  const formatPrice = (amount: number) =>
    (amount / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });

return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center"> Checkout</h1>
        <Card className="max-w-md mx-auto mb-8">
            <CardHeader>
                <CardTitle className="text-xl font-bold"> Order Summary </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.id} className="flex flex-col gap-2 border-b pb-2 border-gray-300">
                            <div className="flex justify-between">
                                <span className="font-medium"> {item.name} </span>
                                <span className="font-semibold">
                                    {formatPrice(item.price * item.quantity)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => removeItem(item.id)}
                                >
                                    -
                                </Button>
                                <span className="text-lg font-semibold">{item.quantity}</span>
                                <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => addItem({...item,quantity: 1})}>
                                    +
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 pt-2 text-lg border-t font-semibold border-gray-300">
                    Total: {formatPrice(total)}
                </div>
            </CardContent>
        </Card>
        <div className="flex justify-center max-w-md mx-auto gap-20">
            <div className="max-w-md mx-auto">
                 <Button type="reset" variant="default" className="w-full bg-gray-500 text-white rounded-3xl mt-4 cursor-pointer" onClick={clearCart}> 
                    Empty Cart
                    </Button>
                    </div>

            <form  action={CheckoutAction} className="max-w-md mx-auto">
                <input type="hidden" name="items" value={JSON.stringify(items)} />
            <Button type="submit" variant="default" className="w-full bg-green-500 text-white rounded-3xl mt-4 cursor-pointer"> 
                    Proceed to Payment
            </Button>
        </form>
        </div>
    </div>
);
}
