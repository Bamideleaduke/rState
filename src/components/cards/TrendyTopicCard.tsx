import { FiHome } from "react-icons/fi";

interface TrendingTopicCardProps {
  title: string;
  description: string;
  duration: string;
}

const TrendingTopicCard: React.FC<TrendingTopicCardProps> = ({
  title,
  description,
  duration,
}) => (
  <div
    className="bg-white rounded-lg p-4 shadow-sm"
    style={{ boxShadow: "0px 22px 40px 0px rgba(142, 151, 164, 0.19)" }}
  >
    <div className="flex items-center mb-2">
      <div className="bg-[#E9EBEC] p-2 rounded mr-3">
        <FiHome size={18} className="text-[#404650]" />
      </div>
      <div>
        <div className="font-medium text-[#404650]">{title}</div>
        <div className="text-sm text-[#404650]">
          <p>{description} </p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  </div>
);

export default TrendingTopicCard;
