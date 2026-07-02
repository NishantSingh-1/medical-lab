import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-teal-600 text-white text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-5 text-lg">
          We are here to help you anytime.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid md:grid-cols-2 gap-14">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Have questions about medical tests or bookings?
              Contact our support team anytime.
            </p>

            <div className="mt-10 flex flex-col gap-6">

              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="font-bold text-xl text-gray-800">
                  Email
                </h3>

                <p className="mt-2 text-gray-600">
                  support@medlab.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="font-bold text-xl text-gray-800">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 9876543210
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="font-bold text-xl text-gray-800">
                  Address
                </h3>

                <p className="mt-2 text-gray-600">
                  India
                </p>
              </div>

            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900">
              Send Message
            </h2>

            <div className="mt-8 flex flex-col gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
              ></textarea>

              <button className="bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl text-lg font-semibold">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default ContactPage;