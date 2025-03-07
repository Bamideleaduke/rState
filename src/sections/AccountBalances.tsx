import { useState } from "react";
import AccountRow from "../components/AccountRow";

interface Account {
  id: number;
  name: string;
  balance: number;
}

const AccountBalances: React.FC = () => {
  const [accounts] = useState<Account[]>([
    { id: 1, name: "Savings Account", balance: 1500 },
    { id: 2, name: "Checking Account", balance: 3200 },
    { id: 3, name: "Investments", balance: 4500 },
    { id: 4, name: "Emergency Fund", balance: 114 },
  ]);

  return (
    <div
      className="bg-white rounded-lg p-6 pb-14 shadow-sm mb-6"
      style={{ boxShadow: "0px 22px 40px 0px rgba(142, 151, 164, 0.19)" }}
    >
      <h2 className="text-sm text-[#404650] font-semibold mb-2">Balances</h2>
      <div className="text-2xl text-[#404650] font-semibold mb-6">
        ${accounts.reduce((total, acc) => total + acc.balance, 0)}
      </div>

      <div className="">
        {accounts.map((account) => (
          <AccountRow key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default AccountBalances;
