import axios, { AxiosError } from 'axios'

interface GetNodePublicKeyOptions {
  blockNumber?: string
}

interface GetNodePublicKeyResult {
  publicKey?: string
  error?: string
}

export async function getNodePublicKey(
  rpcEndpoint: string,
  options?: GetNodePublicKeyOptions
): Promise<GetNodePublicKeyResult> {
  let blockNumber = 'latest';
  if (options) {
      if (options.blockNumber) {
          blockNumber = options.blockNumber;
      }
  }
  const requestData = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getNodePublicKey',
    params: [blockNumber],
  }

  try {
    const { data } = await axios.post(rpcEndpoint, requestData)
    if (!data.result) {
      throw new Error('corrupted response')
    }
    return { publicKey: data.result }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { error: (err as AxiosError).message }
    } else {
      return {
        error: `Cannot get node public key: an unexpected error occurred: ${err}`,
      }
    }
  }
}
