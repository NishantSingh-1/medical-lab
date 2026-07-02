const RevenueChart = () => {
  const months = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 70 },
    { month: "May", value: 60 },
    { month: "Jun", value: 85 },
  ];

  return (
    <div className="bg-white border rounded-2xl p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Revenue Analytics
        </h2>
        <p className="text-sm text-gray-500">Last 6 Months</p>
      </div>

      <div className="h-64 flex items-end gap-6 border-b border-gray-200 pb-6">
        {months.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-full max-w-16 bg-teal-600 rounded-t-xl"
              style={{ height: `${item.value}%` }}
            ></div>

            <p className="text-sm text-gray-500 mt-3">
              {item.month}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;