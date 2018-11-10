import { applyPower, buildStandardScales, DictionaryOf, from, Scalar, to } from '../../../../src'
import { SQRT_THREE_AS_BASE, SQRT_TWO_AS_BASE } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { harmonicSeriesScale } = buildStandardScales()

        const rootOfThreeScalars: Scalar[] = harmonicSeriesScale.scalars.map(
            (n: Scalar): Scalar => to.Scalar(applyPower(from.Base(SQRT_THREE_AS_BASE), to.Power(from.Scalar(n) - 1))),
        )
        const rootOfTwoScalars: Scalar[] = harmonicSeriesScale.scalars.map(
            (n: Scalar): Scalar => to.Scalar(applyPower(from.Base(SQRT_TWO_AS_BASE), to.Power(from.Scalar(n) - 1))),
        )

        return {
            rootOfThreeScalars,
            rootOfTwoScalars,
        }
    }

export {
    buildScalars,
}
