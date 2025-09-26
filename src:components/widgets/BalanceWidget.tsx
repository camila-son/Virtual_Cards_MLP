import svgPaths from "../../imports/svg-2f8ekj8a34";
import svgPathsNew from "../../imports/svg-v1unyf83bw";
import { imgGroup, imgGroup1 } from "../../imports/svg-lnjnh";

function Ticker() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-0 pt-[4px] px-0 relative shrink-0" data-name="Ticker">
      <div 
        className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-[25px]"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--muted-foreground)',
          letterSpacing: '0.12px'
        }}
      >
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden">USD</p>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex gap-[4pt] items-center relative shrink-0 w-full" data-name="Title + Description">
      <div 
        className="w-fit leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)'
        }}
      >
        <p className="leading-[1.2] whitespace-pre w-fit" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-medium)' }}>$0.00</p>
      </div>
      <div className="box-border content-stretch flex items-center justify-center pb-0 pt-[4px] px-0 relative shrink-0">
        <div 
          className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-fit"
          style={{
            fontFamily: 'var(--font-graphik)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--muted-foreground)',
            letterSpacing: '0.12px'
          }}
        >
          <p className="leading-[1.3]" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)' }}>USD</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div 
        className="leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 w-full"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-normal)',
          color: 'var(--muted-foreground)',
          lineHeight: '1.4'
        }}
      >
        <p className="leading-[1.4]" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>Balance</p>
      </div>
      <TitleDescription />
    </div>
  );
}

function RightAction() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Right Action">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Right Action">
          <path d={svgPaths.p340e8f00} fill="var(--muted-foreground)" fillOpacity="1" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[8px] py-0 relative w-full">
          <Content />
          <RightAction />
        </div>
      </div>
    </div>
  );
}

function TitleYieldNew() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Title + Yield">
      <div 
        className="flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)'
        }}
      >
        <p className="leading-[1.3] text-nowrap whitespace-pre" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>$0.00</p>
      </div>
      <div 
        className="overflow-ellipsis overflow-hidden relative shrink-0"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-normal)',
          color: 'var(--success-foreground)',
          letterSpacing: '0.12px'
        }}
      >
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap whitespace-pre" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>Yields 4% APY</p>
      </div>
    </div>
  );
}

function ContentNew() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div 
        className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full"
        style={{
          fontFamily: 'var(--font-graphik)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-weight-normal)',
          color: 'var(--muted-foreground)',
          letterSpacing: '0.12px'
        }}
      >
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>Digital Dollar</p>
      </div>
      <TitleYieldNew />
    </div>
  );
}

function Group1New() {
  return (
    <div 
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[-1.92%_-23.83%_-0.51%_-1.56%] mask-position-[0.5px,_0.5px_0.616px,_0.616px] mask-size-[32px_32px,_32px_32px]" 
      data-name="Group" 
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
        <g id="Group">
          <path d={svgPathsNew.p2e605000} fill="white" id="Vector" />
          <path d={svgPathsNew.p147e2900} fill="#231D9A" id="Vector_2" />
          <path d={svgPathsNew.p539b100} fill="white" id="Vector_3" />
          <path d={svgPathsNew.p33ce6300} fill="white" id="Vector_4" />
          <path d={svgPathsNew.p8529900} fill="white" id="Vector_5" />
          <path d={svgPathsNew.pdebaf00} fill="white" id="Vector_6" />
          <path d={svgPathsNew.p1c600a00} fill="white" id="Vector_7" />
          <path d={svgPathsNew.p3734b90} fill="white" id="Vector_8" />
          <path d={svgPathsNew.p2cfb7e80} fill="white" id="Vector_9" />
          <path d={svgPathsNew.p4fa4500} fill="white" id="Vector_10" />
          <path d={svgPathsNew.p2891cf00} fill="white" id="Vector_11" />
          <path d={svgPathsNew.p3d434100} fill="white" id="Vector_12" />
          <path d={svgPathsNew.p20414a80} fill="white" id="Vector_13" />
          <path d={svgPathsNew.p3fba3ef0} fill="white" id="Vector_14" />
          <path d={svgPathsNew.p18aee800} fill="white" id="Vector_15" />
          <path d={svgPathsNew.p1d219400} fill="white" id="Vector_16" />
          <path d={svgPathsNew.p3a369800} fill="white" id="Vector_17" />
          <path d={svgPathsNew.p1c4b0b40} fill="white" id="Vector_18" />
          <path d={svgPathsNew.p32223c80} fill="#F0263C" id="Vector_19" />
          <path d={svgPathsNew.p24e3cc80} fill="#F0263C" id="Vector_20" />
          <path d={svgPathsNew.p35f1c380} fill="#F0263C" id="Vector_21" />
          <path d={svgPathsNew.pc70d380} fill="#F0263C" id="Vector_22" />
          <path d={svgPathsNew.p21814fc0} fill="#F0263C" id="Vector_23" />
          <path d={svgPathsNew.p5f6f080} fill="#F0263C" id="Vector_24" />
          <path d={svgPathsNew.p38e7d0a0} fill="#F0263C" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroupNew() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1New />
    </div>
  );
}

function Group2New() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div 
        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32px_32px]" 
        data-name="Vector" 
        style={{ maskImage: `url('${imgGroup}')` }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPathsNew.p37cbd980} fill="white" id="Vector" />
        </svg>
      </div>
      <MaskGroupNew />
    </div>
  );
}

function ClipPathGroupNew() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2New />
    </div>
  );
}

function UnitedStatesNew() {
  return (
    <div className="absolute inset-0 rounded-[64px]" data-name="United States">
      <ClipPathGroupNew />
    </div>
  );
}

function MagicAvatarNew() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <UnitedStatesNew />
    </div>
  );
}

function AvatarNew() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="Avatar">
      <MagicAvatarNew />
    </div>
  );
}

function WrapperNew() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Wrapper">
      <ContentNew />
      <AvatarNew />
    </div>
  );
}

function LineItemNew() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Line Item">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <WrapperNew />
        </div>
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LineItemNew />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Line1 />
    </div>
  );
}

export function BalanceWidget() {
  return (
    <div className="bg-card relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] size-full" data-name="Balance Widget">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[12px] pt-[20px] px-[12px] relative size-full">
          <Header />
          <Content2 />
        </div>
      </div>
    </div>
  );
}