## CJS compatible

@swisstronik/utils package with CJS compability.

### Changes

axios package version downgraded to 0.21.1

### Utils for encryption / decryption

Main purpose of this package is to provide set of helper functions for transaction data / query encryption 
and decryption of node response

## Installation

```shell
npm install @lianliss/swisstronik-utils
```

## Examples

### Convert bech32 address to ethereum and vice versa

```typescript
import { bech32toEthAddress, ethAddressToBech32} from '@lianliss/swisstronik-utils'

const originalBech32Address = "swtr13sllcdsqhjektac5r6h50dvjrthm0yt6zw3q4s"

const ethAddress = bech32toEthAddress(originalBech32Address) // 0x8C3FFC3600BCB365F7141EAF47B5921AEFB7917A
const bech32Address = ethAddressToBech32(ethAddress) // swtr13sllcdsqhjektac5r6h50dvjrthm0yt6zw3q4s
```