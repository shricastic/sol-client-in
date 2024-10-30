import {LAMPORTS_PER_SOL, Connection, clusterApiUrl, PublicKey} from '@solana/web3.js'

async function main() {
  const connection = new Connection(clusterApiUrl('devnet'));
  console.log(`Cluster URL: ${connection.rpcEndpoint}`);
  console.log('Connection object:', connection);
  
  const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN')
  const balance = await connection.getBalance(address);
  const balanceSol = balance/LAMPORTS_PER_SOL;

  console.log(`The balace of account at ${address} is ${balanceSol} SOL`)
}

main()
