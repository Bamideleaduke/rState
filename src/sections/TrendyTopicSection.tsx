import TrendingTopicCard from "../components/cards/TrendyTopicCard";

interface Topic {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const TrendingTopicsSection: React.FC = () => {
  const trendingTopics: Topic[] = [
    {
      id: 1,
      title: "Hashtag research",
      description: "Upgrade to pro subscription for",
      duration: " $9 / month",
    },
    {
      id: 2,
      title: "Hashtag analysis",
      description: "Upgrade to pro subscription for",
      duration: " $9 / month",
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-8">Trending topics</h2>
      <div className="grid grid-cols-2 gap-8">
        {trendingTopics.map((topic) => (
          <TrendingTopicCard
            key={topic.id}
            title={topic.title}
            description={topic.description}
            duration={topic.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingTopicsSection;
