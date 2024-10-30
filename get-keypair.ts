import 'dotenv/config'
import {getKeypairFromEnvironment} from '@solana-developers/helpers'

const keypair = getKeypairFromEnvironment("SECRET_KEY")

function main(){
  console.log(`Keypair: ${keypair}`)
}

main()
