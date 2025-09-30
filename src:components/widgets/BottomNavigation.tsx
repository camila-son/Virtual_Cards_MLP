import svgPaths from "../../src:assets/svg-eedehvfhj9";

export function BottomNavigation() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[375px] backdrop-blur-md bg-[rgba(236,233,238,0.8)] flex flex-col items-start pb-5 pt-4 px-4">
      <div className="backdrop-blur flex gap-4 items-start justify-end w-full">
        <div className="flex flex-col gap-2 items-end w-12">
          <div className="bg-card flex items-center justify-center overflow-hidden rounded-[24px] shadow-[0px_1px_0px_0px_#E5E0E8]">
            <div className="absolute bg-primary left-[-82px] rounded-[24px] w-10 h-10 top-1/2 -translate-y-1/2" />
            <div className="p-1 rounded-[24px] w-12 h-12 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <g>
                    <path d={svgPaths.p5250a80} fill="currentColor" fillOpacity="0.96" />
                    <path d={svgPaths.p7d22800} fill="currentColor" fillOpacity="0.96" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex h-4 items-center justify-center">
            <div className="text-xs font-medium text-center tracking-[0.12px] min-w-12">
              Assistant
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}