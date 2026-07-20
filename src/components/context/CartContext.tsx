import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  reportTime?: string;
  type?: "test" | "package";
};

type CartContextValue = {
  cartItems: CartItem[];
  cartCount: number;
  subtotal: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isItemInCart: (itemId: string) => boolean;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((currentItems) => {
      const alreadyAdded = currentItems.some(
        (cartItem) => cartItem.id === item.id
      );

      if (alreadyAdded) {
        return currentItems;
      }

      return [...currentItems, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isItemInCart = (itemId: string) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price),
      0
    );
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      cartCount: cartItems.length,
      subtotal,
      addToCart,
      removeFromCart,
      clearCart,
      isItemInCart,
    }),
    [cartItems, subtotal]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};