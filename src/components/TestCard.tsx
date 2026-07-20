import { useMemo } from "react";

import { AppButton } from "./common/AppButton";
import { AppCard } from "./common/AppCard";
import { useCart } from "./context/CartContext";

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
    <AppCard className="overflow-hidden p-0 transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">₹{price}</p>
          <p className="text-sm text-muted-foreground">{reportTime}</p>
        </div>

        <div className="mt-5 flex gap-3">
          <AppButton type="button" variant="outline" className="flex-1 py-3">
            Details
          </AppButton>

          <AppButton
            type="button"
            onClick={() => addToCart(cartItem)}
            className="flex-1 py-3"
          >
            Add To Cart
          </AppButton>
        </div>
      </div>
    </AppCard>
  );
};

export default TestCard;