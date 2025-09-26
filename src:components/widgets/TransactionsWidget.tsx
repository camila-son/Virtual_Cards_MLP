function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
          <div className="-webkit-box css-txjoqe overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontFamily: 'var(--font-nusans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)', color: 'rgba(0,0,0,0.64)', letterSpacing: '0.12px', lineHeight: '0' }}>
            <p className="leading-[1.3]" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-normal)' }}>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-1 w-full p-8" data-name="Content">
      <div className="flex flex-col items-center justify-center text-center gap-1">
        <div style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'rgba(0,0,0,0.96)', letterSpacing: '-0.14px' }}>
          <p className="leading-[1.3]" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>No transactions</p>
        </div>
        <div style={{ fontFamily: 'var(--font-nusans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)', color: 'rgba(0,0,0,0.32)' }}>
          <p className="leading-[1.3]" style={{ fontFamily: 'var(--font-graphik)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-normal)' }}>There are no recent events</p>
        </div>
      </div>
    </div>
  );
}

export function TransactionsWidget() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[8px] pt-[20px] px-0 relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] w-full" data-name="Transactions widget">
      <Title />
      <Content />
    </div>
  );
}