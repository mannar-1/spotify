import React from 'react'
import {useEffect,useState} from 'react'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../utils/const'
import { useWallet } from '@solana/wallet-adapter-react'

const anchor = require('@project-serum/anchor')
const { web3 }=anchor
const {SystemProgram}=web3
const utf8=anchor.utils.bytes.utf8
const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}

const Payment =()=>{
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)
  const program = getProgramInstance(connection, wallet)
  const [payers, setPayers] = useState([]) //keep track of payers
  const [isPaid, setPaid] = useState(false)
  return (
    <div className={styles.main}>
    <p className={styles.text}>Make payment</p>
    <div className={styles.buttons}>
      <button
        className={styles.button}
        onClick={payClicked}
        disabled={isPaid}
      >
        Pay 0.1 Sol
      </button>
      <button className={styles.button} onClick={getAllWallets}>
        Update List
      </button>
    </div>
  </div>
  )
}
export default Payment