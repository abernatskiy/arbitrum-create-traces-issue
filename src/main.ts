import {MockDatabase} from '@belopash/mock-store'
import {processor} from './processor'

processor.run(new MockDatabase(), async (ctx) => {
  console.log(`Got ${ctx.blocks.length} blocks`)
})
