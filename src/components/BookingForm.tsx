import Button from "./common/Button";
import Card from "./common/Card";
import Input from "./common/Input";

const slots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
];

const BookingForm = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <h2 className="text-dark text-4xl font-bold">Book Your Slot</h2>

          <p className="text-muted mt-4">
            Schedule your medical test easily online.
          </p>
        </div>

        <Card className="mt-12 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="tel" placeholder="Phone Number" />
            <Input type="date" />
          </div>

          <div className="mt-8">
            <h3 className="text-dark mb-5 text-xl font-bold">
              Select Time Slot
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {slots.map((slot) => (
                <Button
                  key={slot}
                  type="button"
                  variant="outline"
                  className="w-full py-3"
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            className="mt-10 w-full py-4 text-lg"
          >
            Confirm Booking
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;