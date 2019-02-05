// tslint:disable no-magic-numbers

import { Base, Frequency, Milliseconds, Offset, Scalar, to } from '@musical-patterns/utilities'

const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY: Frequency = to.Frequency(141.42)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(471.4)
const HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR: Scalar = to.Scalar(4)

const SQRT_TWO_AS_BASE: Base = to.Base(Math.sqrt(2))

const PITCH_SCALAR_INDICATING_REST: Scalar = to.Scalar(-1)

export {
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_DURATION,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_FREQUENCY,
    SQRT_TWO_AS_BASE,
    PITCH_SCALAR_INDICATING_REST,
    HOUNDSTOOTHTOPIA_THEME_INITIAL_BASE_POSITION_SCALAR,
}
