const Chartboard2 = () => {
  return (
    <>
      <div className="column23">
        <div className="dex">DEX</div>
        <div className="per1"> $0.11</div>
      </div>
      <div className="unset">Unsettlet Balances</div>
      <div className="table-end-div">
        <table className="table23">
          <tr>
            <th className="ast">Market</th>
            <th>Token</th>
            <th>Amount</th>
            <th>Price</th>
            <th className="value-btn">Value</th>
          </tr>
          <tr>
            <td className="kkx">60Kx...Rtt23</td>
            <td>USDC</td>
            <td>0.3303</td>
            <td>$1.01</td>
            <td className="settle">
              <div>{"<"}$1.01</div>
              <div>
                <button>Settle</button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="kkx">60Kx...Rtt23</td>
            <td>USDC</td>
            <td>0.3303</td>
            <td>$1.01</td>
            <td className="settle">
              <div>{"<"}$1.01</div>
              <div>
                <button>Settle</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Chartboard2;