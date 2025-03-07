interface HistoryItemProps {
  item: {
    action: string;
    date: string;
  };
  isActive: boolean;
  icon: React.ReactNode;
  isLastItem: boolean;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
  item,
  isActive,
  icon,
  isLastItem,
}) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col items-center">
        <div
          className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
            isActive
              ? "bg-blue-500 text-white"
              : "border border-gray-400 text-gray-400"
          }`}
        >
          {icon}
        </div>

        {!isLastItem && (
          <div className="h-18 border-l border-dashed border-[1px] border-[#88909C]"></div>
        )}
      </div>

      <div className="ml-4">
        <div
          className={`font-medium ${
            isActive ? "text-[#3579DC]" : "text-[#404650]"
          }`}
        >
          {item.action}
        </div>
        <div className="text-xs text-[#88909C]">{item.date}</div>
      </div>
    </div>
  );
};

export default HistoryItem;
