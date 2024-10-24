import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const processor = new EvmBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/arbitrum-one')
/*    .setRpcEndpoint({
        url: assertNotNull(process.env.RPC_HTTP, 'No RPC endpoint supplied'),
    })
    .setFinalityConfirmation(75)*/
    .setBlockRange({
        from: 322891,
    })
    .addTrace({
        type: ['create'],
        transaction: true,
    })
    .setFields({
      trace: {
          createResultAddress: true,
          createResultCode: true,
          createInit: true, //TODO: This does not work on Arbitrum
          createValue: true,
          createFrom: true,
          error: true,
      },
      transaction: {
          status: true,
          nonce: true,
          input: true
      }
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
