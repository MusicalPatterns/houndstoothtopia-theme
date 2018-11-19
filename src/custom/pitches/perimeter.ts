import { Coordinate, CoordinateElement, from, Scalar, to } from '@musical-patterns/utilities'
import { applyCycle, applyOffset, DictionaryOf } from '../../../../../src'
import { rotate } from '../../utilities'
import {
    EIGHTH_TURN_COUNTERCLOCKWISE,
    NO_TURN_COUNTERCLOCKWISE,
    PERIMETER_PITCH_OFFSET,
    QUARTER_TURN_COUNTERCLOCKWISE,
    THREE_EIGHTHS_TURN_COUNTERCLOCKWISE,
} from '../constants'
import {
    buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps,
    buildHoundstoothSolidCenterOriginCoordinate,
} from '../coordinates'
import { CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE } from './constants'

const heights: CoordinateElement[] = []

const extractHeight: (coordinates: Coordinate[]) => Scalar[] =
    (coordinates: Coordinate[]): Scalar[] =>
        coordinates.map((coordinate: Coordinate): Scalar => {
            const height: CoordinateElement = coordinate[ 1 ]
            heights.push(height)

            return to.Scalar(applyOffset(from.CoordinateElement(height), PERIMETER_PITCH_OFFSET))
        })

const buildPerimeterPitches: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const houndstoothCoordinates: Coordinate[] =
            buildHoundstoothCoordinatesWholeNumbersSolidCenterOriginClockwiseStartingOnConidBeforeCusps()
        const cycledHoundstoothCoordinates: Coordinate[] = applyCycle(
            houndstoothCoordinates,
            CYCLE_TO_START_ON_ROOT_TIP_BEFORE_ROOT_BASE,
        )

        const houndstoothCenterCoordinate: Coordinate = buildHoundstoothSolidCenterOriginCoordinate()
        const houndstoothTopRightGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: NO_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: EIGHTH_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothTopLeftGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
                rotate({
                    coordinate,
                    fixedCoordinate: houndstoothCenterCoordinate,
                    rotation: QUARTER_TURN_COUNTERCLOCKWISE,
                }))
        const houndstoothLeftGrainCoordinates: Coordinate[] =
            cycledHoundstoothCoordinates.map((coordinate: Coordinate) =>
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
