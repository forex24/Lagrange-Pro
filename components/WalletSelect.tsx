import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { useWallet, Wallet } from '@solana/wallet-adapter-react'

export const WalletSelect: React.FC<{ wallets: Wallet[] }> = ({ wallets }) => {
  const { select } = useWallet()

  if (!wallets?.length) {
    return null
  }

  return (
    <Menu>
      {({ open }) => (
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
      )}
    </Menu>
  )
}
