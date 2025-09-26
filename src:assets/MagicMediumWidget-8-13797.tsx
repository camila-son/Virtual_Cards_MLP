import svgPaths from "./svg-vftz5ennzh";
import { imgGroup, imgGroup1 } from "./svg-r5mb8";

function Group1() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[-1.92%_-23.83%_-0.51%_-1.56%] mask-position-[0.5px,_0.5px_0.616px,_0.616px] mask-size-[32px_32px,_32px_32px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
        <g id="Group">
          <path d={svgPaths.p2e605000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p147e2900} fill="var(--fill-0, #231D9A)" id="Vector_2" />
          <path d={svgPaths.p539b100} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p33ce6300} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p8529900} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pdebaf00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1c600a00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3734b90} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p2cfb7e80} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p4fa4500} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2891cf00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p3d434100} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p20414a80} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3fba3ef0} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p18aee800} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p1d219400} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p3a369800} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p1c4b0b40} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p32223c80} fill="var(--fill-0, #F0263C)" id="Vector_19" />
          <path d={svgPaths.p24e3cc80} fill="var(--fill-0, #F0263C)" id="Vector_20" />
          <path d={svgPaths.p35f1c380} fill="var(--fill-0, #F0263C)" id="Vector_21" />
          <path d={svgPaths.pc70d380} fill="var(--fill-0, #F0263C)" id="Vector_22" />
          <path d={svgPaths.p21814fc0} fill="var(--fill-0, #F0263C)" id="Vector_23" />
          <path d={svgPaths.p5f6f080} fill="var(--fill-0, #F0263C)" id="Vector_24" />
          <path d={svgPaths.p38e7d0a0} fill="var(--fill-0, #F0263C)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32px_32px]" data-name="Vector" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p37cbd980} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function UnitedStates() {
  return (
    <div className="absolute inset-0 rounded-[64px]" data-name="United States">
      <ClipPathGroup />
    </div>
  );
}

function Overlay() {
  return <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-[64px]" data-name="Overlay" />;
}

function MagicAvatar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <UnitedStates />
      <Overlay />
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <MagicAvatar />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px]" data-name="Content">
      <div className="css-hej6uk font-['Graphik:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.64)] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Digital Dollar</p>
      </div>
      <div className="-webkit-box css-5vmney font-['Graphik:Medium',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] w-full">
        <p className="leading-[1.3] text-[12px]">1 USDc = 1 USD</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
          <Leading />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#efefef] h-px shrink-0 w-full" data-name="Divider 1" />;
}

function Logo() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <g id="Logo">
        <rect fill="var(--fill-0, #FB8A22)" height="32" id="BG" width="32" />
        <path d={svgPaths.p320719c0} fill="var(--fill-0, #FFE7D0)" id="Vector" />
      </g>
    </svg>
  );
}

function NudsLogoBtc() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-[64px]" data-name="nuds_logo_btc">
      <Logo />
    </div>
  );
}

function MagicAvatar1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <NudsLogoBtc />
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <MagicAvatar1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] w-[93px]" data-name="Content">
      <div className="css-hej6uk font-['Graphik:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.64)] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Bitcoin price</p>
      </div>
      <div className="-webkit-box css-5vmney font-['Graphik:Medium',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] w-full">
        <p className="leading-[1.3] text-[12px]">$115,447.28</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative size-full">
          <Leading1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px px-0 py-[8px] relative rounded-[16px] shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Row1 />
      <Divider1 />
      <Row2 />
    </div>
  );
}

function Top() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[8px] px-[8px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f3f6] h-[36px] relative rounded-[64px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-0 relative w-full">
          <div className="css-4u65p1 flex flex-col font-['Graphik:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap">
            <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">View all</p>
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

export default function MagicMediumWidget() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] size-full" data-name="[Magic] Medium Widget">
      <Top />
      <Bottom />
    </div>
  );
}