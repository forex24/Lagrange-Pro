function Header() {
  return (
    <div className="header-general">
      <div className="head">
        <div>Net worth </div>
        <div>$180.22</div>
        <div>Portfolio Overview</div>
      </div>
      <div className="portfolio">
        <div className="inline ">
          <img src=" https://i.stack.imgur.com/e2kSK.png " />
        </div>
        <div className="trx">
          <div className="ff">
            <div className=" ">
              <div className="yielding">Value of Yielding Positons</div>
              <div className="value1">---</div>
            </div>

            <div className="rectangle1">
              <div className="pending">Total Pending Rewards</div>
              <div className="value2">---</div>
            </div>

            <div className="rectangle2">
              <div className="estimated">Estimated Total Rewards</div>
              <div className="value3">---</div>
            </div>
          </div>
        </div>
      </div>
      <div className="just-mid">
        <div className="balance">Balances</div>
        <div className="value4">$32.55</div>
      </div>
    </div>
  );
}

export default Header;