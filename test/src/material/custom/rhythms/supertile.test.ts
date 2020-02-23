import { as, Block } from '@musical-patterns/utilities'
import { thunkSupertileRhythm } from '../../../../../src/indexForTest'

describe('supertile rhythm', (): void => {
    it('evokes the four different tiles of houndstooth: black/black, black/white, white/white, white/black, alternating short and long values, where short is 1 and long is square root of 2, and black is 2 count and white is 1 count', (): void => {
        const supertileRhythm: Block = thunkSupertileRhythm()

        expect(supertileRhythm)
            .toEqual(as.Block([
                0, 1,
                0, 0, 1,
                0, 0, 1, 1,
                0, 1, 1,
            ]))
    })
})
