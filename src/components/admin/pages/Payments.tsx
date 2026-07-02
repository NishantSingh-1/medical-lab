import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

const Payments = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<string[] | null>(null);

  const payments = [
    ["PAY-1001", "Nishant Singh", "₹799", "UPI", "Paid", "22 Jun 2026"],
    ["PAY-1002", "Rahul Kumar", "₹499", "Card", "Pending", "22 Jun 2026"],
    ["PAY-1003", "Priya Sharma", "₹1299", "Net Banking", "Paid", "21 Jun 2026"],
  ];

  return (
    <AdminLayout>
      <Topbar />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Revenue" value="₹85,000" />
        <StatCard title="Today's Revenue" value="₹4,500" />
        <StatCard title="Pending Amount" value="₹2,300" />
        <StatCard title="Transactions" value="125" />
      </div>

      <div className="bg-white border rounded-2xl p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Payments Management
          </h2>
          <p className="text-gray-500 text-sm">
            Track payments, invoices and transactions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="py-3">Payment ID</th>
                <th>Patient</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  {payment.map((item, i) => (
                    <td key={i} className="py-4 text-gray-700">
                      {item}
                    </td>
                  ))}

                  <td>
                    <button
                      onClick={() => setSelectedInvoice(payment)}
                      className="text-teal-600"
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedInvoice && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-gray-800">
                Invoice Details
              </h3>

              <button
                onClick={() => setSelectedInvoice(null)}
                className="text-gray-500 hover:text-red-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <p><strong>Payment ID:</strong> {selectedInvoice[0]}</p>
              <p><strong>Patient:</strong> {selectedInvoice[1]}</p>
              <p><strong>Amount:</strong> {selectedInvoice[2]}</p>
              <p><strong>Method:</strong> {selectedInvoice[3]}</p>
              <p><strong>Status:</strong> {selectedInvoice[4]}</p>
              <p><strong>Date:</strong> {selectedInvoice[5]}</p>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="bg-teal-600 text-white px-5 py-2 rounded-xl">
                Download
              </button>

              <button
                onClick={() => setSelectedInvoice(null)}
                className="bg-gray-200 px-5 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Payments;