import { Scalar, SQUARE_ROOT_OF_TWO, testArraysAreCloseSoFar, to } from '@musical-patterns/utilities'
import { buildRootOfTwoScalars } from '../../../src/indexForTest'

describe('scalars', () => {
    it('root of two scalars start at 1 and increase by the square root of 2', () => {
        const rootOfTwoScalars: Scalar[] = buildRootOfTwoScalars()
        const expectedScalars: Scalar[] = [
            1,
            SQUARE_ROOT_OF_TWO,
            2,
            SQUARE_ROOT_OF_TWO * 2,
            4,
            SQUARE_ROOT_OF_TWO * 4,
            8,
            SQUARE_ROOT_OF_TWO * 8,
        ].map(to.Scalar)

        testArraysAreCloseSoFar(rootOfTwoScalars, expectedScalars)
    })
})
