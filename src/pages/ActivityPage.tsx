import AccountBalances from "../sections/AccountBalances";
import HistoryPanel from "../sections/HistoryPanel";
import TrendingTopicsSection from "../sections/TrendyTopicSection";
import animeImage from "../assets/anime.svg";

const ActivityPage: React.FC = () => {
  return (
    <div className="flex h-screen ">
      <div className="flex-1 px-12 pt-6  relative overflow-y-auto scrollbar-hide">
        <TrendingTopicsSection />

        <div className="flex relative mt-14 ">
          <div className=" w-1/4 xl:w-2/4 relative ">
            <img
              src={animeImage}
              alt="Character"
              className="absolute left-0 bottom-[-15px] xl:bottom-[-85px] xl:w-80 h-auto"
            />
          </div>

          <div className="w-3/4 xl:w-2/3 ">
            <AccountBalances />
          </div>
        </div>
      </div>

      <div className="w-[250px] xl:w-[300px] h-screen bg-white shadow-lg p-4 sticky top-0">
        <HistoryPanel />
      </div>
    </div>
  );
};

export default ActivityPage;
