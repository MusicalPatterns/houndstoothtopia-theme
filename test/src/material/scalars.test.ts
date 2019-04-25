import { as, Duration, Scalar, SQUARE_ROOT_OF_TWO } from '@musical-patterns/utilities'
import { computeRootOfTwoScalars } from '../../../src/indexForTest'

describe('scalars', () => {
    it('root of two scalars start at 1 and increase by the square root of 2', () => {
        const rootOfTwoScalars: Array<Scalar<Duration>> = computeRootOfTwoScalars()
        const expectedScalars: Array<Scalar<Duration>> = [
            1,
            SQUARE_ROOT_OF_TWO,
            2,
            SQUARE_ROOT_OF_TWO * 2,
            4,
            SQUARE_ROOT_OF_TWO * 4,
            8,
            SQUARE_ROOT_OF_TWO * 8,
        ].map((expected: number) => as.Scalar<Duration>(expected))

        expect(rootOfTwoScalars)
            .toBeCloseSoFar(expectedScalars)
    })
})
