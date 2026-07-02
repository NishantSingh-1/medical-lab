interface StatCardProps {
  title: string;
  value: string;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;