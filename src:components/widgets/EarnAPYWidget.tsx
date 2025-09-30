import svgPaths from "../../src:assets/svg-fq1vamp6s2";


export function EarnAPYWidget() {
  return (
    <div className="relative w-full h-[157px]">

      
      {/* Main Widget Container */}
      <div 
        className="relative bg-card rounded-[24px] w-full h-full z-10"
        style={{
          background: `
            radial-gradient(circle at center, 
              rgba(15, 10, 209, 0.4) 0%, 
              rgba(233, 101, 255, 0.44) 57%, 
              rgba(255, 101, 175, 0.31) 72%, 
              rgba(255, 141, 8, 0.3) 92%, 
              rgba(168, 55, 255, 0.3) 100%
            ) padding-box,
            radial-gradient(circle at center, 
              rgba(15, 10, 209, 0.4) 0%, 
              rgba(233, 101, 255, 0.44) 57%, 
              rgba(255, 101, 175, 0.31) 72%, 
              rgba(255, 141, 8, 0.3) 92%, 
              rgba(168, 55, 255, 0.3) 100%
            ) border-box
          `,
          border: '1px solid transparent',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box'
        }}
      >
        {/* White background overlay to maintain card appearance */}
        <div className="absolute inset-[1px] bg-card rounded-[23px]">
          {/* Content - 20pt from left, 40pt clearance from close button */}
          <div className="absolute flex flex-col gap-1 left-5 top-5 right-[52px] z-10">
            {/* Title with gradient text */}
            <div 
              className="w-full bg-clip-text text-transparent leading-[1.2]"
              style={{
                fontFamily: 'var(--font-graphik)',
                fontSize: 'var(--text-list-title)',
                fontWeight: 'var(--font-weight-medium)',
                WebkitTextFillColor: "transparent",
                backgroundImage: `radial-gradient(circle at center, 
                  rgba(15, 10, 209, 0.8) 0%, 
                  rgba(233, 101, 255, 0.84) 57%, 
                  rgba(255, 101, 175, 0.61) 72%, 
                  rgba(255, 141, 8, 0.5) 92%, 
                  rgba(168, 55, 255, 0.5) 100%
                )`
              }}
            >
              Earn 4% APY
            </div>
            
            {/* Description text */}
            <div 
              className="text-muted-foreground leading-[1.3] tracking-[-0.14px]"
              style={{
                fontFamily: 'var(--font-graphik)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)'
              }}
            >
              Add Digital Dollars to your account and see them grow 🤑
            </div>
          </div>
          
          {/* Close button - touches top and right edges */}
          <div className="absolute right-0 top-0 p-2 z-10">
            <div className="bg-[#f5f3f6] flex items-center justify-center rounded-full w-8 h-8">
              <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1108f570} fill="var(--foreground)" fillOpacity="0.64" />
              </svg>
            </div>
          </div>
          
          {/* Button - 12pt from sides */}
          <div 
            className="absolute bg-primary left-3 right-3 top-[109px] h-9 rounded-full flex items-center justify-center z-10"
            style={{
              backgroundColor: '#820ad1'
            }}
          >
            <span 
              className="text-primary-foreground text-center tracking-[-0.14px]"
              style={{
                fontFamily: 'var(--font-graphik)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              Add money
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}