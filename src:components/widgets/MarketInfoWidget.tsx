import svgPaths from "../../src:assets/svg-vftz5ennzh";
import { imgGroup, imgGroup1 } from "../../src:assets/svg-r5mb8.tsx";

const USFlag = () => (
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 rounded-full">
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute inset-[-1.92%_-23.83%_-0.51%_-1.56%]"
          style={{ 
            maskImage: `url('${imgGroup}'), url('${imgGroup1}')`,
            maskComposite: 'intersect',
            maskMode: 'alpha',
            maskRepeat: 'no-repeat',
            maskPosition: '0.5px 0.5px, 0.616px 0.616px',
            maskSize: '32px 32px, 32px 32px'
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
            <g>
              <path d={svgPaths.p2e605000} fill="white" />
              <path d={svgPaths.p147e2900} fill="#231D9A" />
              <path d={svgPaths.p539b100} fill="white" />
              <path d={svgPaths.p33ce6300} fill="white" />
              <path d={svgPaths.p8529900} fill="white" />
              <path d={svgPaths.pdebaf00} fill="white" />
              <path d={svgPaths.p1c600a00} fill="white" />
              <path d={svgPaths.p3734b90} fill="white" />
              <path d={svgPaths.p2cfb7e80} fill="white" />
              <path d={svgPaths.p4fa4500} fill="white" />
              <path d={svgPaths.p2891cf00} fill="white" />
              <path d={svgPaths.p3d434100} fill="white" />
              <path d={svgPaths.p20414a80} fill="white" />
              <path d={svgPaths.p3fba3ef0} fill="white" />
              <path d={svgPaths.p18aee800} fill="white" />
              <path d={svgPaths.p1d219400} fill="white" />
              <path d={svgPaths.p3a369800} fill="white" />
              <path d={svgPaths.p1c4b0b40} fill="white" />
              <path d={svgPaths.p32223c80} fill="#F0263C" />
              <path d={svgPaths.p24e3cc80} fill="#F0263C" />
              <path d={svgPaths.p35f1c380} fill="#F0263C" />
              <path d={svgPaths.pc70d380} fill="#F0263C" />
              <path d={svgPaths.p21814fc0} fill="#F0263C" />
              <path d={svgPaths.p5f6f080} fill="#F0263C" />
              <path d={svgPaths.p38e7d0a0} fill="#F0263C" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bg-black/4 inset-0 rounded-full" />
    </div>
  </div>
);

const BitcoinLogo = () => (
  <div className="relative w-8 h-8">
    <div className="absolute bg-card inset-0 overflow-hidden rounded-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <rect fill="#FB8A22" height="32" width="32" />
          <path d={svgPaths.p320719c0} fill="#FFE7D0" />
        </g>
      </svg>
    </div>
  </div>
);

export function MarketInfoWidget() {
  return (
    <div className="bg-card flex flex-col h-[165.5px] items-start overflow-hidden rounded-[24px] w-full">
      {/* Top Section */}
      <div className="flex-1 w-full">
        <div className="h-full">
          <div className="flex flex-col gap-2 items-start pb-0 pt-2 px-2 h-full">
            <div className="flex-1 border border-border rounded-[16px] w-full">
              <div className="flex flex-col gap-2 items-start px-0 py-2 w-full">
                {/* Digital Dollar Row */}
                <div className="flex flex-col items-start justify-center px-2 py-0 w-full">
                  <div className="flex gap-2 items-center w-full">
                    <USFlag />
                    <div className="flex-1 flex flex-col items-start justify-center leading-[0]">
                      <div 
                        className="text-nowrap overflow-ellipsis overflow-hidden w-full"
                        style={{
                          fontFamily: 'var(--font-graphik)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--muted-foreground)',
                          lineHeight: '1.3'
                        }}
                      >
                        Digital Dollar
                      </div>
                      <div 
                        className="overflow-ellipsis overflow-hidden w-full"
                        style={{
                          fontFamily: 'var(--font-graphik)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          lineHeight: '1.3'
                        }}
                      >
                        1 USDc = 1 USD
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="bg-border h-px w-full" />
                
                {/* Bitcoin Row */}
                <div className="flex flex-col items-start justify-center px-2 py-0 w-full">
                  <div className="flex gap-2 items-center w-full">
                    <BitcoinLogo />
                    <div className="flex-1 flex flex-col items-start justify-center leading-[0]">
                      <div 
                        className="text-nowrap overflow-ellipsis overflow-hidden w-full"
                        style={{
                          fontFamily: 'var(--font-graphik)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-normal)',
                          color: 'var(--muted-foreground)',
                          lineHeight: '1.3'
                        }}
                      >
                        Bitcoin price
                      </div>
                      <div 
                        className="overflow-ellipsis overflow-hidden w-full"
                        style={{
                          fontFamily: 'var(--font-graphik)',
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          lineHeight: '1.3'
                        }}
                      >
                        $115,447.28
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="w-full">
        <div className="h-full">
          <div className="flex flex-col items-start p-2 w-full">
            <div className="bg-secondary h-9 rounded-full w-full flex items-center justify-center">
              <span 
                className="text-center"
                style={{
                  fontFamily: 'var(--font-graphik)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--foreground)',
                  lineHeight: '1.3'
                }}
              >
                View all
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}