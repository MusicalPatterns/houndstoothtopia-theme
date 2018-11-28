import { apply, CoordinateElement, from, HALF, NoteSpec, to } from '@musical-patterns/shared'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '../../../../patternMaterial'
import { PITCH_SCALAR_INDICATING_REST, SQRT_TWO_AS_BASE } from '../constants'
import { HoundstoothtopiaContourElement } from '../nominal'
import { HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR } from './constants'
import { UnpackedHoundstoothtopiaContourElement } from './types'

const unpackHoundstoothtopiaContourElement:
    (contourElement: HoundstoothtopiaContourElement) => UnpackedHoundstoothtopiaContourElement =
    (contourElement: HoundstoothtopiaContourElement): UnpackedHoundstoothtopiaContourElement => ({
        duration: to.Index(contourElement[ 1 ]),
        pitch: to.Scalar(contourElement[ 0 ]),
        // tslint:disable-next-line:no-magic-numbers
        position: to.Coordinate(contourElement[ 2 ]),
    })

const buildHoundstoothtopiaNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => {
        const { pitch, duration, position } = unpackHoundstoothtopiaContourElement(contourElement)

        return {
            durationSpec: {
                index: duration,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: pitch === PITCH_SCALAR_INDICATING_REST ? to.Scalar(0) : undefined,
            },
            pitchSpec: {
                scalar: pitch,
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
            },
            positionSpec: position.map((positionElement: CoordinateElement) =>
                ({ scalar: to.Scalar(from.CoordinateElement(positionElement)) }),
            ),
            sustainSpec: {
                scalar: HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        }
    }

const buildSupertileNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => {
        const { pitch } = unpackHoundstoothtopiaContourElement(contourElement)

        return {
            ...buildHoundstoothtopiaNoteSpec(contourElement),
            gainSpec: {
                scalar: pitch === PITCH_SCALAR_INDICATING_REST ? to.Scalar(0) : HALF,
            },
        }
    }

const buildPerimeterNoteSpec: (contourElement: HoundstoothtopiaContourElement) => NoteSpec =
    (contourElement: HoundstoothtopiaContourElement): NoteSpec => ({
        ...buildHoundstoothtopiaNoteSpec(contourElement),
        sustainSpec: {
            scalar: apply.Scalar(HOUNDSTOOTHTOPIA_THEME_SUSTAIN_SCALAR, to.Scalar(from.Base(SQRT_TWO_AS_BASE))),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

export {
    buildSupertileNoteSpec,
    buildPerimeterNoteSpec,
}
