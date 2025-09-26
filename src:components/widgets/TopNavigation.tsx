import svgPaths from "../../imports/svg-eedehvfhj9";
import imgMagicAvatar from "figma:asset/a36dcbdac73a87ca8826a1fc403327edadb89527.png";

export function TopNavigation() {
  return (
    <div className="flex items-center justify-between px-4 py-4 h-19">
      {/* Avatar and User Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <img alt="Gabriel" className="w-full h-full object-cover" src={imgMagicAvatar} />
          <div className="absolute inset-0 border border-black/8 rounded-full pointer-events-none" />
          <div className="absolute bg-black/4 inset-0 rounded-full z-[2]" />
        </div>
        <div className="flex flex-col">
          <div className="text-foreground" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-light)' }}>Gabriel</div>
          <p 
            className="text-primary"
            style={{
              fontFamily: 'var(--font-graphik)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)'
            }}
          >Nu Account</p>
        </div>
      </div>
      
      {/* Action Icons */}
      <div className="flex items-center">
        <button className="p-2 rounded-full w-11 h-11">
          <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5f5d00} fill="currentColor" fillOpacity="0.64" />
            <path d={svgPaths.p397ca500} fill="currentColor" fillOpacity="0.64" />
            <path d={svgPaths.p1d082b00} fill="currentColor" fillOpacity="0.64" />
          </svg>
        </button>
        <button className="p-2 rounded-full w-11 h-11">
          <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3efb9f00} fill="currentColor" fillOpacity="0.64" />
            <path d={svgPaths.p3df6880} fill="currentColor" fillOpacity="0.64" />
            <path d={svgPaths.pd803e80} fill="currentColor" fillOpacity="0.64" />
          </svg>
        </button>
        <button className="p-2 rounded-full w-11 h-11">
          <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p305c50c0} fill="currentColor" fillOpacity="0.64" />
            <path d={svgPaths.p19ec2580} fill="currentColor" fillOpacity="0.64" />
          </svg>
        </button>
      </div>
    </div>
  );
}