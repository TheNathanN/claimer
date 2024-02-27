import * as nearAPI from "near-api-js"

const CONTRACT = process.env.CONTRACT

export default async function claim({ pub, priv }) {
  const { keyStores, KeyPair, connect, Contract } = nearAPI
  const keyPair = KeyPair.fromString(priv)

  const keyStore = new keyStores.InMemoryKeyStore()
  await keyStore.setKey("mainnet", pub, keyPair)

  const connectionConfig = {
    keyStore,
    networkId: "mainnet",
    nodeUrl: "https://rpc.mainnet.near.org",
  }

  const nearConnection = await connect(connectionConfig)
  const account = await nearConnection.account(pub)

  const contract = new Contract(account, CONTRACT, {
    changeMethods: ["claim"],
  })

  const response = await contract.claim({
    args: {},
  })

  return response
}
