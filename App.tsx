import { StatusBar } from "./components/widgets/StatusBar";
import { TopNavigation } from "./components/widgets/TopNavigation";
import { EarnAPYWidget } from "./components/widgets/EarnAPYWidget";
import { ActionButtons } from "./components/widgets/ActionButtons";
import { BalanceWidget } from "./components/widgets/BalanceWidget";
import { MarketInfoWidget } from "./components/widgets/MarketInfoWidget";
import { VirtualCardWidget } from "./components/widgets/VirtualCardWidget";
import { TransactionsWidget } from "./components/widgets/TransactionsWidget";



export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#ece9ee]">
      {/* Top Bar with Backdrop Blur */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(236,233,238,0.64)]">
        <StatusBar />
        <TopNavigation />
      </div>
      

      
      {/* Main Content */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-[13px] pt-4">
          <EarnAPYWidget />
          <ActionButtons />
          <BalanceWidget />
          <div className="flex gap-[12px]">
            <div className="flex-1">
              <MarketInfoWidget />
            </div>
            <div className="flex-1">
              <VirtualCardWidget />
            </div>
          </div>
          <TransactionsWidget />
        </div>
      </div>
      


    </div>
  );
}