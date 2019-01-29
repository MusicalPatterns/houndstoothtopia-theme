import { apply, Coordinate2d, cycle, DictionaryOf, rotate, Scalar, to } from '@musical-patterns/utilities'
import {
    EIGHTH_TURN_COUNTERCLOCKWISE,
    NO_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_OFFSET,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
} from '../constants'
import {
    buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme,
    buildHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'

const extractHeight: (coordinates: Coordinate2d[]) => Scalar[] =
    (coordinates: Coordinate2d[]): Scalar[] =>
        coordinates.map((coordinate: Coordinate2d): Scalar => {
            const height: number = coordinate[ 1 ]

            return to.Scalar(apply.Offset(height, PERIMETER_PITCH_OFFSET))
        })

const buildPerimeterPitches: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const houndstoothCoordinates: Coordinate2d[] =
            buildHoundstoothCoordinatesSpecializedForHoundstoothtopiaTheme()
        const cycledHoundstoothCoordinates: Coordinate2d[] = cycle(
            houndstoothCoordinates,
            CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: Coordinate2d = buildHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: Coordinate2d[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate2d) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopGrainCoordinates: Coordinate2d[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate2d) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopLeftGrainCoordinates: Coordinate2d[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate2d) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothLeftGrainCoordinates: Coordinate2d[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate2d) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
                }))

        const perimeterRhythmLeftGrainPitches: Scalar[] = extractHeight(houndstoothLeftGrainCoordinates)
        const perimeterRhythmTopGrainPitches: Scalar[] = extractHeight(houndstoothTopGrainCoordinates)
        const perimeterRhythmTopLeftGrainPitches: Scalar[] = extractHeight(houndstoothTopLeftGrainCoordinates)
        const perimeterRhythmTopRightGrainPitches: Scalar[] = extractHeight(houndstoothTopRightGrainCoordinates)

        return {
            perimeterRhythmLeftGrainPitches,
            perimeterRhythmTopGrainPitches,
            perimeterRhythmTopLeftGrainPitches,
            perimeterRhythmTopRightGrainPitches,
        }
    }

export {
    buildPerimeterPitches,
}
