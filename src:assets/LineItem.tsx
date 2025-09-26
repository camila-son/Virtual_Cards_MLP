import svgPaths from "./svg-v1unyf83bw";
import { imgGroup, imgGroup1 } from "./svg-lnjnh";

function TitleYield() {
  return (
    <div className="content-stretch flex gap-[12px] items-center leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Title + Yield">
      <div className="-webkit-box css-5vmney flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.96)]">
        <p className="leading-[1.3] text-nowrap whitespace-pre">$0.00</p>
      </div>
      <div className="css-7wymjg font-['Nu_Sans_Text:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[#0c7a3a] text-[12px] tracking-[0.12px]">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap whitespace-pre">Yields 4% APY</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="css-1lc4t1 flex flex-col font-['Nu_Sans_Text:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Digital Dollar</p>
      </div>
      <TitleYield />
    </div>
  );
}

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

function MagicAvatar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <UnitedStates />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="Avatar">
      <MagicAvatar />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Wrapper">
      <Content />
      <Avatar />
    </div>
  );
}

export default function LineItem() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Line Item">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[12px] py-[8px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}