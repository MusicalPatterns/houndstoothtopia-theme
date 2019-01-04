import { buildStandardScales } from '@musical-patterns/pattern'
import { apply, DictionaryOf, from, Scalar, to } from '@musical-patterns/utilities'
import { SQRT_TWO_AS_BASE } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const { harmonicSeriesScale } = buildStandardScales()

        const harmonicSeriesScalars: Scalar[] = harmonicSeriesScale.scalars || []
        const rootOfTwoScalars: Scalar[] = harmonicSeriesScalars.map(
            (n: Scalar): Scalar => to.Scalar(apply.Power(from.Base(SQRT_TWO_AS_BASE), to.Power(from.Scalar(n) - 1))),
        )

        return {
            rootOfTwoScalars,
        }
    }

export {
    buildScalars,
}
