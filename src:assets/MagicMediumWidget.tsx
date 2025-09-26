import svgPaths from "./svg-fq1vamp6s2";

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <div className="-webkit-box basis-0 css-ynnwy6 font-['Graphik:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.64)] tracking-[-0.14px]">
        <p className="leading-[1.3]">Add Digital Dollars to your account and see them grow 🤑</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[20px] w-[234px]" data-name="Content">
      <div className="-webkit-box bg-clip-text css-fixbj9 font-['Graphik:Medium',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] tracking-[-0.4px] w-full" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 234 24\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.868 1.35 -7.6388 64.15 2.4477 5.5)\\\'><stop stop-color=\\\'rgba(15,10,209,0.8)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(43,21,215,0.805)\\\' offset=\\\'0.070941\\\'/><stop stop-color=\\\'rgba(70,33,221,0.81)\\\' offset=\\\'0.14188\\\'/><stop stop-color=\\\'rgba(124,55,232,0.82)\\\' offset=\\\'0.28376\\\'/><stop stop-color=\\\'rgba(179,78,244,0.83)\\\' offset=\\\'0.42565\\\'/><stop stop-color=\\\'rgba(233,101,255,0.84)\\\' offset=\\\'0.56753\\\'/><stop stop-color=\\\'rgba(255,101,175,0.61)\\\' offset=\\\'0.71875\\\'/><stop stop-color=\\\'rgba(255,111,133,0.5825)\\\' offset=\\\'0.76823\\\'/><stop stop-color=\\\'rgba(255,121,91,0.555)\\\' offset=\\\'0.81771\\\'/><stop stop-color=\\\'rgba(255,131,50,0.5275)\\\' offset=\\\'0.86719\\\'/><stop stop-color=\\\'rgba(255,141,8,0.5)\\\' offset=\\\'0.91667\\\'/><stop stop-color=\\\'rgba(244,130,39,0.5)\\\' offset=\\\'0.92708\\\'/><stop stop-color=\\\'rgba(233,120,70,0.5)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(212,98,131,0.5)\\\' offset=\\\'0.95833\\\'/><stop stop-color=\\\'rgba(190,76,193,0.5)\\\' offset=\\\'0.97917\\\'/><stop stop-color=\\\'rgba(168,55,255,0.5)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
        <p className="leading-[1.2]">Earn 4% APY</p>
      </div>
      <Wrapper />
    </div>
  );
}

function MagicIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="[Magic] Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="[Magic] Icon">
          <path d={svgPaths.p1108f570} fill="var(--fill-0, black)" fillOpacity="0.64" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function IconAction() {
  return (
    <div className="bg-[#f5f3f6] content-stretch flex items-center justify-center relative rounded-[64px] shrink-0 size-[32px]" data-name="Icon Action">
      <MagicIcon />
    </div>
  );
}

function MagicIconAction() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[295px] max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] p-[8px] rounded-[64px] top-0" data-name="[Magic] Icon Action">
      <IconAction />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#820ad1] box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center left-[12px] px-[12px] py-0 rounded-[64px] top-[109px] w-[319px]" data-name="Button">
      <div className="css-l6gd9o flex flex-col font-['Graphik:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.14px]">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Add money</p>
      </div>
    </div>
  );
}

export default function MagicMediumWidget() {
  return (
    <div className="bg-white relative rounded-[24px] size-full" data-name="[Magic] Medium Widget">
      <Content />
      <MagicIconAction />
      <Button />
    </div>
  );
}