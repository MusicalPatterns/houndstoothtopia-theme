// tslint:disable variable-name no-any ban-types

import {
    Grain,
    GrainCycleSequence,
} from './types'

const Grain: (grain: number) => Grain =
    (grain: number): Grain =>
        grain as any

const GrainCycleSequence: <T extends Number>(grainCycleSequence: T[]) => GrainCycleSequence =
    <T extends Number>(grainCycleSequence: T[]): GrainCycleSequence =>
        grainCycleSequence.map(
            (grain: T): Grain => grain as any,
        ) as any

export {
    Grain,
    GrainCycleSequence,
}
