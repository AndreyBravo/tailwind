export function App3() {
  return (
    <div className="p-3 w-2/3 mx-auto">
      <section className="mb-12">
        <div className="text-white mb-0.5">Your balance</div>
        <div className="flex items-center gap-2 mb-3.5">
          <div className="flex items-center justify-center shadow-2xl bg-yellow-400 rounded-full w-6 h-6">
            <span className="italic font-bold text-red-400">V</span>
          </div>
          <div className="text-2xl font-bold">$1.022,43</div>
        </div>
        <button className="bg-blue-400 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 font-medium">
          <span>+</span>
          <span>Buy credits</span>
        </button>
      </section>
      <section>
        <div className="flex justify-between items-center mb-2.5`">
          <div className="font-semibold ">Paymant cards</div>
          <button className="font-semibold text-blue-500">
            <span>+ </span>
            <span>Add card</span>
          </button>
        </div>
        <div className="flex items-center py-2 gap-2">
          <img
            src="data:image/png;base64,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"
            alt="visa"
            width={80}
            className="rounded-xs overflow-hidden shrink-0 h-12"
          />
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="flex items-center gap-2 font-medium ">
                Dom Crayki
                <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py[-0.002rem] text-[0.5rem]">
                  Primary
                </div>
              </div>
              <div className="opacity-50 text-ms mt-0.5">**** 3412</div>
            </div>
            <button>&#9658;</button>
          </div>
        </div>

        <div className="flex items-center py-2 gap-2">
          <img
            src="data:image/png;base64,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"
            alt="mastercard"
            width={80}
            className="rounded-xs overflow-hidden shrink-0 h-12"
          />
          <div className="flex items-center justify-between w-full">
            <div>
              <div className="flex items-center gap-2 font-medium ">
                Lick Tiles
                
              </div>
              <div className="opacity-50 text-ms mt-0.5">**** 1637</div>
            </div>
            <button>&#9658;</button>
          </div>
        </div>

        <div className="bg-green-200/15 rounded-lg py-2 px-3 text-sm">
          We are comptiont with the payment card industry data security
        </div>
      </section>
    </div>
  );
}
