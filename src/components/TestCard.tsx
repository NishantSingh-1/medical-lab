import { useMemo } from "react";
import { useCart } from "./context/CartContext";
import Button from "./common/Button";
import Card from "./common/Card";

interface TestCardProps {
  title: string;
  price: string;
  reportTime: string;
  image: string;
}

const TestCard = ({ title, price, reportTime, image }: TestCardProps) => {
  const { addToCart } = useCart();

  const cartItem = useMemo(
    () => ({
      title,
      price,
      reportTime,
      image,
    }),
    [title, price, reportTime, image]
  );

  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-dark text-xl font-bold">{title}</h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-primary text-lg font-bold">₹{price}</p>

          <p className="text-muted text-sm">{reportTime}</p>
        </div>

        <div className="mt-5 flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1 rounded-2xl py-3"
          >
            Details
          </Button>

          <Button
            type="button"
            onClick={() => addToCart(cartItem)}
            className="flex-1 rounded-2xl py-3"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TestCard;