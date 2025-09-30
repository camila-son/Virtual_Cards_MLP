import svgPaths from "../../src:assets/svg-frv9c42num";

function Card() {
  return (
    <div className="absolute bottom-[-0.16%] left-0 right-[-0.16%] top-0" data-name="card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 21">
        <g id="card">
          <path d={svgPaths.p34baf80} fill="var(--fill-0, #8D42C9)" id="vector" />
          <g id="mask group">
            <mask height="21" id="mask0_8_14820" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
              <path d={svgPaths.p4c06280} fill="url(#paint0_linear_8_14820)" id="vector_2" />
            </mask>
            <g mask="url(#mask0_8_14820)">
              <path d={svgPaths.p4c06280} fill="var(--fill-0, #D480F0)" id="vector_3" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_14820" x1="7.05075" x2="7.05075" y1="0.639057" y2="20.2667">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="relative size-full" data-name="Card">
      <Card />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bottom-[-0.16%] left-0 right-[-0.16%] top-0" data-name="card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 21">
        <g id="card">
          <path d={svgPaths.p1cc84880} fill="var(--fill-0, #4B218D)" id="vector" />
          <g id="mask group">
            <mask height="21" id="mask0_8_14814" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
              <path d={svgPaths.p27a1fa80} fill="url(#paint0_linear_8_14814)" id="vector_2" />
            </mask>
            <g mask="url(#mask0_8_14814)">
              <path d={svgPaths.p27a1fa80} fill="var(--fill-0, #794FC8)" id="vector_3" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_14814" x1="7.05075" x2="7.05075" y1="0.639057" y2="20.2667">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="relative size-full" data-name="Card">
      <Card2 />
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bottom-[-0.16%] left-0 right-[-0.16%] top-0" data-name="card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 21">
        <g id="card">
          <path d={svgPaths.p34baf80} fill="var(--fill-0, #820AD1)" id="vector" />
          <g id="mask group">
            <mask height="21" id="mask0_8_14808" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
              <path d={svgPaths.p4c06280} fill="url(#paint0_linear_8_14808)" id="vector_2" />
            </mask>
            <g mask="url(#mask0_8_14808)">
              <path d={svgPaths.p4c06280} fill="var(--fill-0, #AA68FF)" id="vector_3" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_14808" x1="7.05075" x2="7.05075" y1="0.639057" y2="20.2667">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[9.02%_59.6%_77.15%_9.36%]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
        <g id="logo">
          <path d={svgPaths.pea8c200} fill="var(--fill-0, #F3D58D)" id="vector" />
          <path d={svgPaths.p66dc200} fill="var(--fill-0, #EA9C68)" id="vector_2" />
          <path d={svgPaths.p137dc080} fill="var(--fill-0, #EE7067)" id="vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute inset-[22.67%_43.33%_12%_12.67%]" data-name="Card">
      <Card4 />
      <Logo />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute contents inset-[10.67%_12.83%_10.75%_12.67%]" data-name="Illustration">
      <div className="absolute flex inset-[10.67%_12.83%_10.75%_16.4%] items-center justify-center">
        <div className="flex-none h-[20.907px] rotate-[30deg] w-[14.08px]">
          <Card1 />
        </div>
      </div>
      <div className="absolute flex inset-[14%_27.3%_11.51%_13.29%] items-center justify-center">
        <div className="flex-none h-[20.907px] rotate-[15deg] w-[14.08px]">
          <Card3 />
        </div>
      </div>
      <Card5 />
    </div>
  );
}

function CardsFromOtherBanks() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Cards From Other Banks">
      <Illustration />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 w-full" data-name="Content">
      <div 
        className="overflow-ellipsis overflow-hidden relative shrink-0 w-full"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-normal)',
          color: 'var(--muted-foreground)',
          lineHeight: '1.3'
        }}
      >
        <p 
          className="leading-[1.3]"
          style={{
            fontFamily: 'var(--font-graphik)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-normal)'
          }}
        >Shop safely</p>
      </div>
      <div 
        className="overflow-ellipsis overflow-hidden relative shrink-0 w-full"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          lineHeight: '1.3',
          letterSpacing: '-0.18px'
        }}
      >
        <p 
          className="leading-[1.3]"
          style={{
            fontFamily: 'var(--font-graphik)',
            fontSize: '18px',
            fontWeight: 'var(--font-weight-medium)'
          }}
        >My Cards</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <CardsFromOtherBanks />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-secondary h-[36px] relative rounded-[64px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-0 relative w-full">
          <div 
            className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap"
            style={{
              fontFamily: 'var(--font-graphik)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--foreground)',
              lineHeight: '1.3'
            }}
          >
            <p 
              className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre"
              style={{
                fontFamily: 'var(--font-graphik)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >Create</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

export function VirtualCardWidget() {
  return (
    <div className="bg-card flex flex-col h-[165.5px] items-start overflow-hidden rounded-[24px] w-full" data-name="virtual card widget">
      <Top />
      <Bottom />
    </div>
  );
}