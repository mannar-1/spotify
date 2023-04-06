import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Payment } from './Payments'

const Login = () => {
  const wallet = useWallet()

  /** show payment UI if wallet is connected */
  if (wallet.connected) {
    console.log("testing ");
    return  <Payment/>
  }

  return (
    <div className={styles.loginPage}>
      <p className={styles.text}>Login to access this app</p>
      <WalletMultiButton />
    </div>
  )
}

export default Login

const styles = {
  main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
  button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
  text: `text-4xl text-black mb-10`,
  buttons: `flex items-center`,
}