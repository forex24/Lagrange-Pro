const Chartboard1 = () => {
 
  return (
    <div className="general1">
      <div className="spot-general">
        <div className="spot">Spot Assets</div>
        <div className="table-div">
          <table>
            <tr>
              <th className="ast">Asset</th>
              <th>Balance</th>
              <th>Price</th>
              <th width="50px">Value</th>
            </tr>
            <tr>
              <td className="first-td">
                <div className="img-div">
                  <img src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389" />
                  USDT
                </div>
                <div className="div-button">
                  <button className="btn-btn1">Send</button>
                  <button className="btn-btn2">Stake</button>
                </div>
              </td>
              <td>0.1212121</td>
              <td>$141.22</td>
              <td>$17.21</td>
            </tr>
            <tr>
              <td colSpan="7">
                <div className="light-dark-persent">
                  <div className="light-green"></div>
                  <div className="dark-green"></div>
                  <div className="persent111">51.22%</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first-td">
                <div className="img-div">
                  <img src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389" />
                  USDC
                </div>
              </td>
              <td>0.1212121</td>
              <td>$141.22</td>
              <td>$17.21</td>
            </tr>
            <tr>
              <td colSpan="4">
                <div className="light-dark-persent">
                  <div className="light-green"></div>
                  <div className="dark-green"></div>
                  <div className="persent111">51.22%</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first-td">
                <div className="img-div">
                  <img src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389" />
                  JPSC
                </div>
              </td>
              <td>0.1212121</td>
              <td>$141.22</td>
              <td>$17.21</td>
            </tr>
            <tr>
              <td colSpan="4">
                <div className="light-dark-persent">
                  <div className="light-green"></div>
                  <div className="dark-green"></div>
                  <div className="persent111">51.22%</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first-td">
                <div className="img-div">
                  <img src="https://assets.coingecko.com/coins/images/10119/small/JBs9jiXO_400x400.jpg?1642668342" />
                  Bilira
                </div>
              </td>
              <td>0.1212121</td>
              <td>$141.22</td>
              <td>$17.21</td>
            </tr>
            <tr>
              <td colSpan="4">
                <div className="light-dark-persent">
                  <div className="light-green"></div>
                  <div className="dark-green"></div>
                  <div className="persent111">51.22%</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="first-td">
                <div className="img-div">
                  <img src="https://assets.coingecko.com/coins/images/8472/small/2_vtiD3xwce9knG2COxtSMaQ.png?1597786961" />
                  BRZ
                </div>
              </td>
              <td>0.1212121</td>
              <td>$141.22</td>
              <td>$17.21</td>
            </tr>
            <tr>
              <td colSpan="4">
                <div className="light-dark-persent">
                  <div className="light-green"></div>
                  <div className="dark-green"></div>
                  <div className="persent111">51.22%</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chartboard1;