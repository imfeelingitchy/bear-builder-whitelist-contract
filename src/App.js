import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_WalletConnect } from "@reach-sh/stdlib"
import * as backend from './build/index.main.mjs';
import { useState } from "react";

const stdlib = loadStdlib("ALGO")
let acc

function App() {

  const connectWallet = async () => {
    stdlib.setWalletFallback(stdlib.walletFallback(
      {
          providerEnv: {
              ALGO_TOKEN: '',
              ALGO_SERVER: "https://testnet-api.algonode.cloud",
              ALGO_PORT: '',
              ALGO_INDEXER_TOKEN: '',
              ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
              ALGO_INDEXER_PORT: '',
          },
          WalletConnect: ALGO_WalletConnect,
      }
    ))
    acc = await stdlib.getDefaultAccount()
    setView(1)
    setStatus("")
  }

  const newContract = async () => {
    const tokID = Number(window.prompt("Enter the Asset ID of the token you wish to distribute:"))
    const howMany = Number(window.prompt("How many addresses do you wish to distribute to?")) 
    const quantity = Number(window.prompt("How many tokens will each address receive?"))
    setStatus("Please sign the transaction to deploy the contract.")
    const adminCtc = acc.contract(backend)
    await stdlib.withDisconnect(() =>
        adminCtc.p.Admin({
            ready: stdlib.disconnect,
            tokenID: tokID,
            tokenQuantity: quantity,
            howManyWhitelisted: howMany
        })
    )
    const ctcID = parseInt((await adminCtc.getInfo())._hex, 16)
    setStatus("The contract is deployed as: " + ctcID)
  }

  const getWhitelisted = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.UserAPI.submit()
      setStatus("Your address is whitelisted!")
    } catch (e) {
      const errMsg = JSON.stringify(e.message)
      if (errMsg.includes("API called in the wrong state")) {
        setStatus("Error: The whitelist is full!")
      } else if (errMsg.includes("Assertion failed")) {
        setStatus("Error: You are already in the whitelist.")
      }
    }
  }

  const disburse = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.AdminAPI.disburse()
      setStatus("The whitelisted addresses may now claim their tokens.")
    } catch (_) {
      setStatus("An error occured.")
    }
  }

  const claimTokens = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.UserAPI.claim()
      setStatus("The tokens will be sent to your wallet!")
    } catch (e) {
      const errMsg = JSON.stringify(e.message)
      if (errMsg.includes("API called in the wrong state")) {
        setStatus("You may not claim tokens at this time.")
      } else if (errMsg.includes("Assertion failed")) {
        setStatus("Error: You are not in the whitelist.")
      }
    }
  }

  const reload = () => {
    localStorage.clear()
    window.location.reload()
  }

  const [view, setView] = useState(0)
  const [status, setStatus] = useState("Please connect your wallet.")

  return (
    <div className="App">
      {
        (view === 0) &&
        <button onClick={connectWallet}>Connect Wallet</button>
      }
      {
        (view === 1) &&
        <>
          <button onClick={newContract}>Deploy New Contract</button>
          <button onClick={getWhitelisted}>Get Whitelisted</button>
          <button onClick={disburse}>Disburse Tokens (Deployer Only)</button>
          <button onClick={claimTokens}>Claim Tokens</button>
          <button onClick={reload}>Disconnect Wallet</button>
        </>
      }
      <h1>{status}</h1>
    </div>
  );
}

export default App;
