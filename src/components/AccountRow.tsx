import Minus from "../assets/icons/circularMinus.svg";
import Plus from "../assets/icons/circularPlus.svg";

interface Account {
  id: number;
  name: string;
  balance: number;
}

interface AccountRowProps {
  account: Account;
}

const AccountRow: React.FC<AccountRowProps> = ({ account }) => (
  <div className="flex items-center justify-between border-b border-[#F1F4F5] last:border-b-0 py-4">
    <p className="text-[#404650] text-[1rem] font-[400]">{account.name}</p>
    <div className="flex items-center space-x-2">
      <button className="w-6 h-6 flex items-center justify-center">
        <img src={Minus} alt="Anime Character" className="w-6 h-6" />
      </button>
      <span className="w-16 text-center text-[#404650] text-sm font-medium">
        ${account.balance}
      </span>
      <button className="w-6 h-6 flex items-center justify-center">
        <img src={Plus} alt="Anime Character" className="w-6 h-6" />
      </button>
    </div>
  </div>
);

export default AccountRow;
