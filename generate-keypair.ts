import {Keypair} from '@solana/web3.js'

const keypair = Keypair.generate();

function main(){
  console.log(`Keypair: ${keypair}`)
  console.log(`Public Key: ${keypair.publicKey.toBase58()}`)
  console.log(`Private Key: ${keypair.secretKey}`)
}

main()

