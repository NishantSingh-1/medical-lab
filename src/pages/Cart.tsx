import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + Number(item.price),
    0
  );

  const gst = Math.round(subtotal * 0.05);

  const total = subtotal + gst;

  return (
    <section className="min-h-screen bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl font-bold text-gray-900">
          My Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.length === 0 ? (

              <div className="bg-white p-8 rounded-2xl shadow text-center">

                <h2 className="text-2xl font-bold">
                  Cart is Empty
                </h2>

                <p className="text-gray-500 mt-2">
                  Add some tests to continue.
                </p>

              </div>

            ) : (

              cartItems.map((item: any, index: number) => (

                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow"
                >

                  <div className="flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-xl"
                    />

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500">
                        {item.reportTime}
                      </p>

                    </div>

                  </div>

                  <div className="flex justify-between items-center mt-5">

                    <span className="text-2xl font-bold text-teal-600">
                      ₹{item.price}
                    </span>

                    <button
                      onClick={() =>
                        removeFromCart(item.title)
                      }
                      className="text-red-500 font-medium"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* Summary */}
          <div>

            <div className="bg-white p-6 rounded-2xl shadow sticky top-28">

              <h3 className="text-2xl font-bold mb-6">
                Order Summary
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <Link
                to="/booking"
                className="block text-center w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold"
              >
                Proceed To Booking
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;