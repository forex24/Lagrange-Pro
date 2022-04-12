import { Tab } from "@headlessui/react";
import React, { useState, useCallback } from 'react'
import { useWallet, Wallet } from '@solana/wallet-adapter-react'
import useMangoStore from 'stores/useMangoStore'
import { WalletReadyState } from '@solana/wallet-adapter-base'


export const handleWalletConnect = (wallet) => {
	if (!wallet) {
		return
	}
	if (wallet.readyState === WalletReadyState.NotDetected) {
		window.open(wallet.adapter.url, '_blank')
	} else {
		wallet?.adapter?.connect().catch((e) => {

		})
	}
}
function Tabs1() {
	const [tabs, setTabs] = useState([
		{
			twotd: "121212020020",
			threetd: "",
			fourtd: "",
			fivetd: "",
			sixtd: "",
			seventd: "",
			eighttd: "",
			ninetd: "",
			tentd: "",
			eleventd: "",
			twelvetd: "",
			threeteentd: ""

		},
		{
			twotd: "121212020020",
			threetd: "",
			fourtd: "",
			fivetd: "",
			sixtd: "",
			seventd: "",
			eighttd: "",
			ninetd: "",
			tentd: "",
			eleventd: "",
			twelvetd: "",
			threeteentd: ""
		}
	])
	const { connected, publicKey, wallet, wallets, select } = useWallet()
	const mangoGroup = useMangoStore((s) => s.selectedMangoGroup.current)



	const handleConnect = useCallback(() => {
		if (wallet) {
			handleWalletConnect(wallet)
		}
	}, [wallet])
	return (
		<div className="GeneralTabs">
			<Tab.Group>
				<Tab.List className="TabList">
					<Tab className="Tab">
						{({ selected }) => (
							<div className={selected ? "tabactive" : null}
								style={{ borderBottom: selected ? "1px solid #CCC51B" : "1px solid #888888" }}
							>Orders</div>
						)}
					</Tab>
					<Tab className="Tab">
						{({ selected }) => (
							<div className={selected ? "tabactive" : null}
								style={{ borderBottom: selected ? "1px solid #CCC51B" : "1px solid #888888" }}
							>Trade History</div>
						)}
					</Tab>
					<Tab className="Tab">
						{({ selected }) => (
							<div className={selected ? "tabactive" : null}
								style={{ borderBottom: selected ? "1px solid #CCC51B" : "1px solid #888888" }}
							>Positions</div>
						)}
					</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel className="partTwo-main">

						{connected && publicKey ? (

							<table>
								<tr>
									<th>STATUS</th>
									<th>ORDER ID</th>
									<th>DATE / TIME</th>
									<th>ALGO</th>
									<th>CHANNEL</th>
									<th>INSTRUMENT</th>
									<th>SIDE</th>
									<th>CCY</th>
									<th>QTY</th>
									<th>FILLED</th>
									<th>%</th>
									<th>COUNTER</th>
									<th>MARKET</th>
								</tr>
								<tr>
									<td><button>Filled</button></td>
									<td>121212020020</td>
									<td>12.02.2022/15:03:04</td>
									<td> - </td>
									<td>GUI</td>
									<td>EUR/USD</td>
									<td>Sell</td>
									<td>EUR</td>
									<td>1.000.00</td>
									<td>1.000.00</td>
									<td>100%</td>
									<td>1.912.525</td>
									<td> - </td>
								</tr>
								<tr>
									<td><button>Filled</button></td>
									<td>121212020020</td>
									<td>12.02.2022/15:03:04</td>
									<td> - </td>
									<td>GUI</td>
									<td>EUR/USD</td>
									<td>Sell</td>
									<td>EUR</td>
									<td>1.000.00</td>
									<td>1.000.00</td>
									<td>100%</td>
									<td>1.912.525</td>
									<td> - </td>
								</tr>
								<tr className="empty-td">
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</table>) : (
							<div className="ConnectWalletButton">
								<button
									onClick={handleConnect}
									disabled={!mangoGroup}
								>
									Connect Wallet
								</button>
							</div>
						)}
					</Tab.Panel>
					<Tab.Panel className="partTwo-main">
						{connected && publicKey ? (
							<table>
							<tr>
								<th>STATUS</th>
								<th>ORDER ID</th>
								<th>DATE / TIME</th>
								<th>ALGO</th>
								<th>CHANNEL</th>
								<th>INSTRUMENT</th>
								<th>SIDE</th>
								<th>CCY</th>
								<th>QTY</th>
								<th>FILLED</th>
								<th>%</th>
								<th>COUNTER</th>
								<th>MARKET</th>
							</tr>
							<tr>
								<td><button>Filled</button></td>
								<td>121212020020</td>
								<td>12.02.2022/15:03:04</td>
								<td> - </td>
								<td>GUI</td>
								<td>EUR/USD</td>
								<td>Sell</td>
								<td>EUR</td>
								<td>1.000.00</td>
								<td>1.000.00</td>
								<td>100%</td>
								<td>1.912.525</td>
								<td> - </td>
							</tr>
							<tr>
								<td><button>Filled</button></td>
								<td>121212020020</td>
								<td>12.02.2022/15:03:04</td>
								<td> - </td>
								<td>GUI</td>
								<td>EUR/USD</td>
								<td>Sell</td>
								<td>EUR</td>
								<td>1.000.00</td>
								<td>1.000.00</td>
								<td>100%</td>
								<td>1.912.525</td>
								<td> - </td>
							</tr>
							<tr className="empty-td">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</table>
						) : (
								<div className="ConnectWalletButton">
								<button
									onClick={handleConnect}
									disabled={!mangoGroup}
								>
									Connect Wallet
								</button>
						</div>	
						)}
					</Tab.Panel>
					<Tab.Panel className="partTwo-main">
					  {connected && publicKey ? (
						  <table>
						  <tr>
							  <th>STATUS</th>
							  <th>ORDER ID</th>
							  <th>DATE / TIME</th>
							  <th>ALGO</th>
							  <th>CHANNEL</th>
							  <th>INSTRUMENT</th>
							  <th>SIDE</th>
							  <th>CCY</th>
							  <th>QTY</th>
							  <th>FILLED</th>
							  <th>%</th>
							  <th>COUNTER</th>
							  <th>MARKET</th>
						  </tr>
						  <tr>
							  <td><button>Filled</button></td>
							  <td>121212020020</td>
							  <td>12.02.2022/15:03:04</td>
							  <td> - </td>
							  <td>GUI</td>
							  <td>EUR/USD</td>
							  <td>Sell</td>
							  <td>EUR</td>
							  <td>1.000.00</td>
							  <td>1.000.00</td>
							  <td>100%</td>
							  <td>1.912.525</td>
							  <td> - </td>
						  </tr>
						  <tr>
							  <td><button>Filled</button></td>
							  <td>121212020020</td>
							  <td>12.02.2022/15:03:04</td>
							  <td> - </td>
							  <td>GUI</td>
							  <td>EUR/USD</td>
							  <td>Sell</td>
							  <td>EUR</td>
							  <td>1.000.00</td>
							  <td>1.000.00</td>
							  <td>100%</td>
							  <td>1.912.525</td>
							  <td> - </td>
						  </tr>
						  <tr className="empty-td">
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
							  <td></td>
						  </tr>
					  </table>
					  ) : (
								<div className="ConnectWalletButton">
								<button
									onClick={handleConnect}
									disabled={!mangoGroup}
								>
									Connect Wallet
								</button>
						</div>	
						)}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

export default Tabs1;
