import svgPaths from "../../imports/svg-xzon47pqta";

const ActionButton = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex flex-col items-center gap-2 h-[86px] w-15">
    <div className="relative w-15 h-15">
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <path d={svgPaths.p3ac20600} fill="var(--card)" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={icon} fill="var(--foreground)" fillOpacity="0.96" />
        </svg>
      </div>
    </div>
    <div className="badge text-foreground text-nowrap tracking-[0.12px]">
      {label}
    </div>
  </div>
);

export function ActionButtons() {
  return (
    <div className="w-full flex items-start justify-between overflow-hidden p-2">
      <ActionButton icon={svgPaths.p3cd52b40} label="Add" />
      <ActionButton icon={svgPaths.p38d5080} label="Send" />
      <ActionButton icon={svgPaths.p15b97e80} label="Receive" />
      <ActionButton icon={svgPaths.p2e863b00} label="Exchange" />
    </div>
  );
}