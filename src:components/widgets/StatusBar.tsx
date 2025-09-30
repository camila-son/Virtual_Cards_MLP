import svgPaths from "../../src:assets/svg-eedehvfhj9";

export function StatusBar() {
  return (
    <div className="flex items-start justify-between pb-2.5 pl-8 pr-6 pt-4.5 w-full">
      <div className="flex items-center gap-px">
        <div className="text-[15px] font-medium text-foreground tracking-[-0.24px] leading-5">
          11:08
        </div>
      </div>
      <div className="h-5 w-[67.661px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20">
          <g>
            <path d={svgPaths.p25c9c700} fill="currentColor" fillOpacity="0.96" />
            <path d={svgPaths.p32821cc0} fill="currentColor" fillOpacity="0.96" />
            <g>
              <rect height="10.3333" opacity="0.35" rx="3.5" stroke="currentColor" strokeOpacity="0.96" width="21" x="43.833" y="4.83333" />
              <path d={svgPaths.p2deda380} fill="currentColor" fillOpacity="0.96" opacity="0.4" />
              <rect fill="currentColor" fillOpacity="0.96" height="7.33333" rx="2.3" width="18" x="45.333" y="6.33333" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}