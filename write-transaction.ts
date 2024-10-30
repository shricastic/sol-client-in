import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey } from '@solana/web3.js'
import 'dotenv/config'
import { getKeypairFromEnvironment } from '@solana-developers/helpers'

async function main(){
  const receiverPubKey = process.argv[2] || null;

  if (!receiverPubKey){
    console.log(`Please provide receivers address`)
    process.exit(1)
  }

  const senderKeypair = getKeypairFromEnvironment('SECRET_KEY')
  console.log(`receiverPubKey: ${receiverPubKey}`)

  const toPubkey = new PublicKey(receiverPubKey)
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
  console.log('loaded receivers and senders address and connected to solana')

  const transaction = new Transaction();
  const LAMPORTS_TO_SEND = 5000;

  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey, 
    lamports: LAMPORTS_TO_SEND
  })
  
  transaction.add(sendSolInstruction) 

  const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair,]);

  console.log(`Sent ${LAMPORTS_TO_SEND} lamports to address ${toPubkey}`)
  console.log(`Signature: ${signature}`)
}

main()
