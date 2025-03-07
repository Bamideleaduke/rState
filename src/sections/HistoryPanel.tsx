import { FaEnvelopeOpen, FaEnvelope } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import HistoryItem from "../components/HistoryItem";

const HistoryPanel: React.FC = () => {
  const historyItems = [
    {
      id: 1,
      type: "email",
      action: "Email opened",
      date: "July 2, 2021 8am",
      isActive: true,
      icon: <FaEnvelopeOpen size={14} />,
    },
    {
      id: 2,
      type: "email",
      action: "Email sent",
      date: "July 2, 2021 8am",
      isActive: false,
      icon: <FaEnvelope size={14} />,
    },
    {
      id: 3,
      type: "website",
      action: "Visited website",
      date: "July 2, 2021 8am",
      isActive: false,
      icon: <MdOutlineWeb size={14} />,
    },
    {
      id: 4,
      type: "email",
      action: "Email sent",
      date: "July 2, 2021 8am",
      isActive: false,
      icon: <FaEnvelope size={14} />,
    },
    {
      id: 5,
      type: "email",
      action: "Email sent",
      date: "July 2, 2021 8am",
      isActive: false,
      icon: <FaEnvelope size={14} />,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mt-4 mb-10 text-[#404650]">
        History
      </h2>
      <div className="">
        {historyItems.map((item, index) => (
          <HistoryItem
            key={item.id}
            item={item}
            isActive={item.isActive}
            icon={item.icon}
            isLastItem={index === historyItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
