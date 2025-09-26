function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
          <div className="-webkit-box css-txjoqe font-['Nu_Sans_Text:Regular',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,0,0,0.64)] tracking-[0.12px] w-full">
            <p className="leading-[1.3]">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center leading-[0] not-italic px-[8px] py-0 relative size-full text-[14px] text-center text-nowrap">
          <div className="-webkit-box css-hdlrir font-['Graphik:Medium',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.96)] tracking-[-0.14px]">
            <p className="leading-[1.3] text-nowrap whitespace-pre">No transactions</p>
          </div>
          <div className="css-vdvikz font-['Nu_Sans_Text:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(0,0,0,0.32)]">
            <p className="leading-[1.3] overflow-ellipsis overflow-hidden text-[14px] text-nowrap whitespace-pre">There are no recent events</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TransactionsWidget() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[8px] pt-[20px] px-0 relative rounded-[24px] shadow-[0px_1px_0px_0px_#e5e0e8] size-full" data-name="Transactions widget">
      <Title />
      <Content />
    </div>
  );
}