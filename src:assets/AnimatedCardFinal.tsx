import svgPaths from "./svg-eedehvfhj9";
import imgMagicAvatar from "figma:asset/a36dcbdac73a87ca8826a1fc403327edadb89527.png";
import { imgGroup, imgGroup1 } from "./svg-pgfr8";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Icon_2">
            <path d={svgPaths.p5250a80} fill="var(--fill-0, black)" fillOpacity="0.96" />
            <path d={svgPaths.p7d22800} fill="var(--fill-0, black)" fillOpacity="0.96" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TouchArea() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[48px]" data-name="Touch area">
      <Icon />
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center overflow-clip relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] shrink-0" data-name="Navigation">
      <div className="absolute bg-[#820ad1] left-[-82px] rounded-[24px] size-[40px] top-1/2 translate-y-[-50%]" data-name="Active highlight" />
      <TouchArea />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center relative shrink-0" data-name="Label">
      <div className="css-85jwfh flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] min-w-[48px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Assistant</p>
      </div>
    </div>
  );
}

function AssistantButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[48px]" data-name="Assistant button">
      <Navigation />
      <Label />
    </div>
  );
}

function Content() {
  return (
    <div className="backdrop-blur backdrop-filter content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Content">
      <AssistantButton />
    </div>
  );
}

function MagicNavBar() {
  return (
    <div className="absolute backdrop-blur-md backdrop-filter bg-[#ece9ee] bottom-0 box-border content-stretch flex flex-col items-start left-1/2 pb-[20px] pt-[16px] px-[16px] translate-x-[-50%] w-[375px]" data-name="[Magic] Nav Bar">
      <Content />
    </div>
  );
}

function TimeWrapper() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0" data-name="Time Wrapper">
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-[rgba(0,0,0,0.96)] text-center text-nowrap tracking-[-0.24px]">
        <p className="leading-[20px] whitespace-pre">11:08</p>
      </div>
    </div>
  );
}

function Carrier() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.661px]" data-name="Carrier">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 20">
        <g id="Carrier">
          <path d={svgPaths.p25c9c700} fill="var(--fill-0, black)" fillOpacity="0.96" id="Signal" />
          <path d={svgPaths.p32821cc0} fill="var(--fill-0, black)" fillOpacity="0.96" id="Wi-Fi" />
          <g id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="3.5" stroke="var(--stroke-0, black)" strokeOpacity="0.96" width="21" x="43.833" y="4.83333" />
            <path d={svgPaths.p2deda380} fill="var(--fill-0, black)" fillOpacity="0.96" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" fillOpacity="0.96" height="7.33333" id="Capacity" rx="2.3" width="18" x="45.333" y="6.33333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="box-border content-stretch flex items-start justify-between pb-[10px] pl-[32px] pr-[24px] pt-[18px] relative shrink-0 w-[375px]" data-name="Status Bar">
      <TimeWrapper />
      <Carrier />
    </div>
  );
}

function Overlay() {
  return <div className="absolute bg-[rgba(0,0,0,0.04)] left-1/2 rounded-[64px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]" data-name="Overlay" />;
}

function MagicAvatar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative rounded-[64px] shrink-0" data-name="[Magic] Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[64px] size-full" src={imgMagicAvatar} />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <Overlay />
      <div className="relative shrink-0 size-[40px] z-[1]" data-name="Image">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Image"></g>
        </svg>
      </div>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Leading">
      <MagicAvatar />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="basis-0 css-4u65p1 flex flex-col font-['Nu_Sans_Text:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(0,0,0,0.96)] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Gabriel</p>
      </div>
    </div>
  );
}

function SecondaryContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Secondary Content">
      <div className="basis-0 css-9dzape flex flex-col font-['Nu_Sans_Text:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#820ad1] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Nu Account</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Title />
      <SecondaryContent />
    </div>
  );
}

function MagicOutlinedUiActionsCommonActionsHelp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="[Magic] outlined/ui actions/common actions/help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="[Magic] outlined/ui actions/common actions/help">
          <g id="Icon">
            <path d={svgPaths.p5f5d00} fill="var(--fill-0, black)" fillOpacity="0.64" />
            <path d={svgPaths.p397ca500} fill="var(--fill-0, black)" fillOpacity="0.64" />
            <path d={svgPaths.p1d082b00} fill="var(--fill-0, black)" fillOpacity="0.64" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconAction() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative shrink-0 w-[32px]" data-name="Icon Action">
      <MagicOutlinedUiActionsCommonActionsHelp />
    </div>
  );
}

function Component3NdAction() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center max-h-[44px] max-w-[44px] min-h-[44px] min-w-[44px] p-[8px] relative rounded-[64px] shrink-0 size-[44px]" data-name="3nd Action">
      <IconAction />
    </div>
  );
}

function MagicOutlinedHumanUserAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="[Magic] outlined/human/user_add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="[Magic] outlined/human/user_add">
          <g id="Icon">
            <path d={svgPaths.p3efb9f00} fill="var(--fill-0, black)" fillOpacity="0.64" />
            <path d={svgPaths.p3df6880} fill="var(--fill-0, black)" fillOpacity="0.64" />
            <path d={svgPaths.pd803e80} fill="var(--fill-0, black)" fillOpacity="0.64" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconAction1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative shrink-0 w-[32px]" data-name="Icon Action">
      <MagicOutlinedHumanUserAdd />
    </div>
  );
}

function Component2ndAction() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center max-h-[44px] max-w-[44px] min-h-[44px] min-w-[44px] p-[8px] relative rounded-[64px] shrink-0 size-[44px]" data-name="2nd Action">
      <IconAction1 />
    </div>
  );
}

function MagicOutlinedActionsCommonActionsVisibilityOn() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="[Magic] outlined/actions/common actions/visibility_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="[Magic] outlined/actions/common actions/visibility_on">
          <g id="Icon">
            <path d={svgPaths.p305c50c0} fill="var(--fill-0, black)" fillOpacity="0.64" />
            <path d={svgPaths.p19ec2580} fill="var(--fill-0, black)" fillOpacity="0.64" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconAction2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative shrink-0 w-[32px]" data-name="Icon Action">
      <MagicOutlinedActionsCommonActionsVisibilityOn />
    </div>
  );
}

function Component1stAction() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center max-h-[44px] max-w-[44px] min-h-[44px] min-w-[44px] p-[8px] relative rounded-[64px] shrink-0 size-[44px]" data-name="1st Action">
      <IconAction2 />
    </div>
  );
}

function Trailing() {
  return (
    <div className="content-stretch flex h-[44px] items-center overflow-clip relative shrink-0" data-name="Trailing">
      <Component3NdAction />
      <Component2ndAction />
      <Component1stAction />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Wrapper">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[76px] items-center justify-end p-[16px] relative w-full">
          <Leading />
          <Content1 />
          <Trailing />
        </div>
      </div>
    </div>
  );
}

function MagicTopBar1stLevel() {
  return (
    <div className="absolute backdrop-blur-md backdrop-filter bg-[rgba(236,233,238,0.64)] content-stretch flex flex-col items-start justify-center left-0 overflow-clip top-0 w-[375px]" data-name="[Magic] Top Bar – 1st Level">
      <StatusBar />
      <Wrapper />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col h-[32px] items-center justify-end left-0 pb-[8px] pt-[19px] px-0 right-0" data-name="Home Indicator">
      <div className="bg-[rgba(0,0,0,0.96)] h-[5px] rounded-[64px] shrink-0 w-[140px]" data-name="Line" />
    </div>
  );
}

function WidgetAnimation3() {
  return (
    <div className="absolute bg-white h-[157px] left-1/2 rounded-[24px] top-[136px] translate-x-[-50%] w-[343px]" data-name="Widget Animation (3)">
      <div aria-hidden="true" className="absolute border-[3px] border-[rgba(15,10,209,0.4)] border-solid inset-[-1.5px] pointer-events-none rounded-[25.5px]" />
    </div>
  );
}

function WidgetAnimation2() {
  return (
    <div className="absolute bg-white blur-[10.5px] filter h-[156px] left-1/2 rounded-[24px] top-[136px] translate-x-[-50%] w-[343px]" data-name="Widget Animation (2)">
      <div aria-hidden="true" className="absolute border-2 border-[#0f0ad1] border-solid inset-[-2px] pointer-events-none rounded-[26px]" />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <div className="-webkit-box basis-0 css-q2kh9o font-['250422.Nu.BETA:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,0,0,0.64)]">
        <p className="leading-[1.3]">Add Digital Dollars to your account and see them grow 🤑</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[20px] w-[234px]" data-name="Content">
      <div className="-webkit-box bg-clip-text css-717fty font-['Nu_Sans_Display:Medium',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] w-full" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 234 24\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.868 1.35 -7.6388 64.15 2.4477 5.5)\\\'><stop stop-color=\\\'rgba(15,10,209,0.8)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(43,21,215,0.805)\\\' offset=\\\'0.070941\\\'/><stop stop-color=\\\'rgba(70,33,221,0.81)\\\' offset=\\\'0.14188\\\'/><stop stop-color=\\\'rgba(124,55,232,0.82)\\\' offset=\\\'0.28376\\\'/><stop stop-color=\\\'rgba(179,78,244,0.83)\\\' offset=\\\'0.42565\\\'/><stop stop-color=\\\'rgba(233,101,255,0.84)\\\' offset=\\\'0.56753\\\'/><stop stop-color=\\\'rgba(255,101,175,0.61)\\\' offset=\\\'0.71875\\\'/><stop stop-color=\\\'rgba(255,111,133,0.5825)\\\' offset=\\\'0.76823\\\'/><stop stop-color=\\\'rgba(255,121,91,0.555)\\\' offset=\\\'0.81771\\\'/><stop stop-color=\\\'rgba(255,131,50,0.5275)\\\' offset=\\\'0.86719\\\'/><stop stop-color=\\\'rgba(255,141,8,0.5)\\\' offset=\\\'0.91667\\\'/><stop stop-color=\\\'rgba(244,130,39,0.5)\\\' offset=\\\'0.92708\\\'/><stop stop-color=\\\'rgba(233,120,70,0.5)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(212,98,131,0.5)\\\' offset=\\\'0.95833\\\'/><stop stop-color=\\\'rgba(190,76,193,0.5)\\\' offset=\\\'0.97917\\\'/><stop stop-color=\\\'rgba(168,55,255,0.5)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
        <p className="leading-[1.2]">Earn 4% APY</p>
      </div>
      <Wrapper1 />
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

function IconAction3() {
  return (
    <div className="bg-[#f5f3f6] content-stretch flex items-center justify-center relative rounded-[64px] shrink-0 size-[32px]" data-name="Icon Action">
      <MagicIcon />
    </div>
  );
}

function MagicIconAction() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[295px] max-h-[48px] max-w-[48px] min-h-[48px] min-w-[48px] p-[8px] rounded-[64px] top-0" data-name="[Magic] Icon Action">
      <IconAction3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#820ad1] box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center left-[12px] px-[12px] py-0 rounded-[64px] top-[109px] w-[319px]" data-name="Button">
      <div className="css-txq99v flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Add money</p>
      </div>
    </div>
  );
}

function MagicMediumWidget() {
  return (
    <div className="bg-white h-[157px] relative rounded-[24px] shrink-0 w-[343px]" data-name="[Magic] Medium Widget">
      <Content2 />
      <MagicIconAction />
      <Button />
    </div>
  );
}

function OutlinedActionsCommonActionsAdd() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="outlined/actions/common actions/add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outlined/actions/common actions/add">
          <path d={svgPaths.p3cd52b40} fill="var(--fill-0, black)" fillOpacity="0.96" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shadow-[0px_0.833px_0px_0px_#e5e0e8] shrink-0 size-[60px]" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <path d={svgPaths.p3ac20600} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <OutlinedActionsCommonActionsAdd />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label">
      <div className="css-6iubiy flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] whitespace-pre">Add</p>
      </div>
    </div>
  );
}

function Atom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-center relative shrink-0 w-[60px]" data-name="atom">
      <Avatar />
      <Label1 />
    </div>
  );
}

function OutlinedUiActionsCommonActionsArrowUp() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="outlined/ui actions/common actions/arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outlined/ui actions/common actions/arrow_up">
          <path d={svgPaths.p38d5080} fill="var(--fill-0, black)" fillOpacity="0.96" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shadow-[0px_0.833px_0px_0px_#e5e0e8] shrink-0 size-[60px]" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <path d={svgPaths.p3ac20600} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <OutlinedUiActionsCommonActionsArrowUp />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label">
      <div className="css-6iubiy flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] whitespace-pre">Send</p>
      </div>
    </div>
  );
}

function Atom1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-center relative shrink-0 w-[60px]" data-name="atom">
      <Avatar1 />
      <Label2 />
    </div>
  );
}

function OutlinedUiActionsCommonActionsArrowDown() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="outlined/ui actions/common actions/arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outlined/ui actions/common actions/arrow_down">
          <path d={svgPaths.p15b97e80} fill="var(--fill-0, black)" fillOpacity="0.96" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shadow-[0px_0.833px_0px_0px_#e5e0e8] shrink-0 size-[60px]" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <path d={svgPaths.p3ac20600} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <OutlinedUiActionsCommonActionsArrowDown />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label">
      <div className="css-6iubiy flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] whitespace-pre">Receive</p>
      </div>
    </div>
  );
}

function Atom2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-center relative shrink-0 w-[60px]" data-name="atom">
      <Avatar2 />
      <Label3 />
    </div>
  );
}

function OutlinedUiActionsCommonActionsArrowsTowardsEachOther() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="outlined/ui actions/common actions/arrows_towards_each_other">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outlined/ui actions/common actions/arrows_towards_each_other">
          <path d={svgPaths.p2e863b00} fill="var(--fill-0, black)" fillOpacity="0.96" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shadow-[0px_0.833px_0px_0px_#e5e0e8] shrink-0 size-[60px]" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <path d={svgPaths.p3ac20600} fill="var(--fill-0, white)" id="Background" />
        </svg>
      </div>
      <OutlinedUiActionsCommonActionsArrowsTowardsEachOther />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Label">
      <div className="css-6iubiy flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] whitespace-pre">Exchange</p>
      </div>
    </div>
  );
}

function Atom3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-center relative shrink-0 w-[60px]" data-name="atom">
      <Avatar3 />
      <Label4 />
    </div>
  );
}

function ActionRow() {
  return (
    <div className="box-border content-stretch flex items-start justify-between overflow-clip p-[8px] relative rounded-[24px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.04)] shrink-0 w-[343px]" data-name="Action Row">
      <Atom />
      <Atom1 />
      <Atom2 />
      <Atom3 />
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title + Description">
      <div className="-webkit-box css-teon6v font-['Nu_Sans_Display:Medium',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-[rgba(0,0,0,0.96)] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">$0.00</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="-webkit-box css-txjoqe font-['Nu_Sans_Text:Regular',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] tracking-[0.12px] w-full">
        <p className="leading-[1.3]">Total balance</p>
      </div>
      <TitleDescription />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[303px]" data-name="Header">
      <Content3 />
    </div>
  );
}

function TitleYield() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title + Yield">
      <div className="-webkit-box css-yw6k25 flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#820ad1] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">4% APY</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="css-1lc4t1 flex flex-col font-['Nu_Sans_Text:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] text-nowrap tracking-[0.12px] w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Digital Dollar</p>
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

function MagicAvatar1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <UnitedStates />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="Avatar">
      <MagicAvatar1 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Wrapper">
      <Content4 />
      <Avatar4 />
    </div>
  );
}

function LineItem() {
  return (
    <div className="basis-0 grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Line Item">
      <div aria-hidden="true" className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[56px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <Wrapper2 />
        </div>
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[319px]">
      <LineItem />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[319px]" data-name="Content">
      <Line1 />
    </div>
  );
}

function BalanceWidget() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[12px] pt-[20px] px-[12px] relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] shrink-0 w-[343px]" data-name="Balance Widget">
      <Header />
      <Content5 />
    </div>
  );
}

function Group4() {
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

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32px_32px]" data-name="Vector" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p37cbd980} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function UnitedStates1() {
  return (
    <div className="absolute inset-0 rounded-[64px]" data-name="United States">
      <ClipPathGroup1 />
    </div>
  );
}

function Overlay1() {
  return <div className="absolute bg-[rgba(0,0,0,0.04)] inset-0 rounded-[64px]" data-name="Overlay" />;
}

function MagicAvatar2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <UnitedStates1 />
      <Overlay1 />
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <MagicAvatar2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] tracking-[0.12px]" data-name="Content">
      <div className="css-1lc4t1 font-['Nu_Sans_Text:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.64)] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Digital Dollar</p>
      </div>
      <div className="-webkit-box css-oqig1h font-['Nu_Sans_Text:Semibold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] w-full">
        <p className="leading-[1.3] text-[12px]">1 USDc = 1 USD</p>
      </div>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Wrapper">
      <Leading1 />
      <Content6 />
    </div>
  );
}

function Row1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative size-full">
          <Wrapper3 />
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

function MagicAvatar3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="[Magic] Avatar">
      <NudsLogoBtc />
    </div>
  );
}

function Leading2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <MagicAvatar3 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] tracking-[0.12px]" data-name="Content">
      <div className="css-1lc4t1 font-['Nu_Sans_Text:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.64)] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">Bitcoin price</p>
      </div>
      <div className="-webkit-box css-oqig1h font-['Nu_Sans_Text:Semibold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] w-full">
        <p className="leading-[1.3] text-[12px]">$115,447.28</p>
      </div>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Wrapper">
      <Leading2 />
      <Content7 />
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[8px] py-0 relative size-full">
          <Wrapper4 />
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

function Button1() {
  return (
    <div className="bg-[#f5f3f6] h-[36px] relative rounded-[64px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-0 relative w-full">
          <div className="css-u77svo flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
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
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function MagicMediumWidget1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[165.5px] items-start overflow-clip relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] shrink-0 w-[165px]" data-name="[Magic] Medium Widget">
      <Top />
      <Bottom />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bottom-[-0.16%] left-0 right-[-0.16%] top-0" data-name="card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 33">
        <g id="card">
          <path d={svgPaths.p21fd7d00} fill="var(--fill-0, #820AD1)" id="vector" />
          <g id="mask group">
            <mask height="33" id="mask0_1_7498" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
              <path d={svgPaths.p154ac870} fill="url(#paint0_linear_1_7498)" id="vector_2" />
            </mask>
            <g mask="url(#mask0_1_7498)">
              <path d={svgPaths.p154ac870} fill="var(--fill-0, #AA68FF)" id="vector_3" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7498" x1="10.7081" x2="10.7081" y1="0.978148" y2="31.0204">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[9.01%_59.6%_77.15%_9.36%]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
        <g id="logo">
          <path d={svgPaths.pa1f5700} fill="var(--fill-0, #F3D58D)" id="vector" />
          <path d={svgPaths.p1d02c880} fill="var(--fill-0, #EA9C68)" id="vector_2" />
          <path d={svgPaths.p187a0fc0} fill="var(--fill-0, #EE7067)" id="vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bottom-0 left-[17.27%] right-[15.6%] top-0" data-name="card">
      <Card />
      <Logo1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[30.65%_7.9%_48.89%_71.55%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Group 9">
          <path d={svgPaths.p14485500} fill="var(--fill-0, #CEBAF4)" id="virtual shape" />
          <path d={svgPaths.p1b4cef00} fill="var(--fill-0, #DCDAEA)" id="virtual shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[21.9%] left-0 right-[74.35%] top-[52.56%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="Group 10">
          <path d={svgPaths.p18476b80} fill="var(--fill-0, #AA68FF)" id="virtual shape" />
          <path d={svgPaths.pef6ae80} fill="var(--fill-0, #DCDAEA)" id="virtual shape_2" />
        </g>
      </svg>
    </div>
  );
}

function VirtualCard() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.46%] top-0" data-name="virtual card">
      <Card1 />
      <Group9 />
      <div className="absolute bottom-[7.3%] left-[91.05%] right-0 top-[83.78%]" data-name="virtual shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p10af3380} fill="var(--fill-0, #820AD1)" id="virtual shape" />
        </svg>
      </div>
      <Group10 />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.46%] top-0" data-name="Illustration">
      <VirtualCard />
    </div>
  );
}

function CardsVirtual() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Cards / Virtual">
      <Illustration />
    </div>
  );
}

function Leading3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leading">
      <CardsVirtual />
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 w-full" data-name="Content">
      <div className="-webkit-box css-txjoqe font-['Nu_Sans_Text:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] tracking-[0.12px] w-full">
        <p className="leading-[1.3]">Shop safely</p>
      </div>
      <div className="-webkit-box css-teon6v font-['Nu_Sans_Text:Semibold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-[rgba(0,0,0,0.96)] w-full">
        <p className="leading-[1.3]">Virtual card</p>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <Leading3 />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f3f6] h-[36px] relative rounded-[64px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-0 relative w-full">
          <div className="css-u77svo flex flex-col font-['250422.Nu.BETA:Medium',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.96)] text-nowrap tracking-[0.12px]">
            <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Create</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function MagicMediumWidget2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[165.5px] items-start overflow-clip relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] shrink-0 w-[165px]" data-name="[Magic] Medium Widget">
      <Top1 />
      <Bottom1 />
    </div>
  );
}

function OutlinedObjectsTimeHistory() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="outlined/objects/time/history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="outlined/objects/time/history">
          <path d={svgPaths.p95bcd80} fill="var(--fill-0, black)" fillOpacity="0.96" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.p1a7cad80} fill="var(--fill-0, white)" id="Background" stroke="var(--stroke-0, #EFEFEF)" />
        </svg>
      </div>
      <OutlinedObjectsTimeHistory />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px]" data-name="Content">
      <div className="css-4u65p1 flex flex-col font-['Nu_Sans_Text:Semibold',_sans-serif] h-[19px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">No transactions yet</p>
      </div>
      <div className="css-5w9crs flex flex-col font-['250422.Nu.BETA:Regular',_sans-serif] justify-center relative shrink-0 text-[rgba(0,0,0,0.64)] tracking-[-0.14px] w-full">
        <p className="leading-[1.3]">Once you make a transaction, it will be displayed in this section.</p>
      </div>
    </div>
  );
}

function Leading4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Leading">
      <Avatar5 />
      <Content9 />
    </div>
  );
}

function List1() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-end overflow-clip px-0 py-[12px] relative shrink-0 w-full" data-name="List">
      <Leading4 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[303px]" data-name="List">
      <div className="bg-[#efefef] h-px shrink-0 w-[311px]" />
      <List1 />
    </div>
  );
}

function TransactionsCard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] shrink-0 w-[343px]" data-name="Transactions card">
      <div className="css-uw4u63 font-['Nu_Sans_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] text-nowrap tracking-[0.12px]">
        <p className="leading-[1.3] whitespace-pre">Transactions</p>
      </div>
      <List2 />
    </div>
  );
}

function Frame1422568605() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[13px] h-[782px] items-start left-[16px] top-[136px] w-[343px]">
      <MagicMediumWidget />
      <ActionRow />
      <BalanceWidget />
      <MagicMediumWidget1 />
      <MagicMediumWidget2 />
      <TransactionsCard />
    </div>
  );
}

export default function AnimatedCardFinal() {
  return (
    <div className="bg-[#ece9ee] relative rounded-[40px] size-full" data-name="Animated Card (Final)">
      <div className="overflow-clip relative size-full">
        <MagicNavBar />
        <MagicTopBar1stLevel />
        <HomeIndicator />
        <WidgetAnimation3 />
        <WidgetAnimation2 />
        <Frame1422568605 />
      </div>
      <div aria-hidden="true" className="absolute border-8 border-black border-solid inset-[-8px] pointer-events-none rounded-[48px]" />
    </div>
  );
}