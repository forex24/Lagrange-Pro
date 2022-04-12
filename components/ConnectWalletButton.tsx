/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  Fragment,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react'
import { Menu } from '@headlessui/react'
import { useWallet, Wallet } from '@solana/wallet-adapter-react'
import { WalletReadyState } from '@solana/wallet-adapter-base'
// @ts-ignore
import { notify } from 'utils/notifications'
// @ts-ignore
import useMangoStore from 'stores/useMangoStore'
import { useTranslation } from 'next-i18next'
// @ts-ignore
import { WalletSelect } from 'components/WalletSelect'
import uniqBy from 'lodash/uniqBy'

export const handleWalletConnect = (wallet: Wallet) => {
  if (!wallet) {
    return
  }
  if (wallet.readyState === WalletReadyState.NotDetected) {
    window.open(wallet.adapter.url, '_blank')
  } else {
    wallet?.adapter?.connect().catch((e) => {
      if (e.name.includes('WalletLoadError')) {
        notify({
          title: `${wallet.adapter.name} Error`,
          type: 'error',
          description: `Please install ${wallet.adapter.name} and then reload this page.`,
        })
      }
    })
  }
}

export const ConnectWalletButton: React.FC = () => {
  const { connected, publicKey, wallet, wallets, select } = useWallet()
  const [toggle, setToggle] = useState(Boolean)
  const { t } = useTranslation('common')
  const set = useMangoStore((s) => s.set)
  const mangoGroup = useMangoStore((s) => s.selectedMangoGroup.current)


  const installedWallets = useMemo(() => {
    const installed: Wallet[] = []

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet)
      }
    }

    return installed
  }, [wallets])

  const displayedWallets = useMemo(() => {
    return uniqBy([...installedWallets, ...wallets], (w) => {
      return w.adapter.name
    })
  }, [wallets, installedWallets])

  const handleConnect = useCallback(() => {
    if (wallet) {
      handleWalletConnect(wallet)
    }
  }, [wallet])



  const handleDisconnect = useCallback(() => {
    wallet?.adapter?.disconnect()
    setToggle(false)
    set((state) => {
      state.mangoAccounts = []
      state.selectedMangoAccount.current = null
      state.tradeHistory = {
        spot: [],
        perp: [],
        parsed: [],
        initialLoad: false,
      }
    })
    notify({
      type: 'info',
      title: t('wallet-disconnected'),
    })
  }, [wallet, set, t])

  useEffect(() => {
    if (!wallet && displayedWallets?.length) {
      select(displayedWallets[0].adapter.name)
    }
  }, [wallet, displayedWallets, select])

  return (
    <>
      {connected && publicKey ? (
          <div className="relative ConnectWalletButton" id="profile-menu-tip">         
              <button
                onClick={handleDisconnect}
              >
                Disconnect
              </button>         
          </div>       
      ) : (
        <div className="ConnectWalletButton">
          {toggle && (
            <button
              onClick={handleConnect}
              disabled={!mangoGroup}
            >
              Connect Wallet
            </button>
          )}
          {!toggle && (
          <Menu>
            <>
              <Menu.Button
                className={`flex h-full w-10 cursor-pointer items-center justify-center rounded-none bg-th-primary-dark text-th-bkg-1 hover:brightness-[1.1] focus:outline-none`}
              >
                Select wallet
              </Menu.Button>
              <Menu.Items className="absolute" style={{ zIndex: '100000' }}>
                {wallets?.map((wallet, index) => (
                  <Menu.Item key={index}>
                    <button
                      className="walletlist"
                      onClick={() => {
                        select(wallet.adapter.name)
                        setToggle(true)
                      }} 
                    >
                      <div className="imgspan">
                        <img
                          src={wallet.adapter.icon}
                          alt={`${wallet.adapter.name} icon`}
                        />
                        <span> {wallet.adapter.name} </span>
                      </div>
                    </button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </>
          </Menu>
            )}
        </div>
      )
      }

    </>
  )
}
