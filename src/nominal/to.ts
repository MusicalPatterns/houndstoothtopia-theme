// tslint:disable:variable-name no-any

import { Coordinate, CoordinateElement, Length, Radian } from './types'

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any

const Length: (length: number) => Length =
    (length: number): Length => length as any

const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any

const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any

export {
    Coordinate,
    Length,
    Radian,
    CoordinateElement,
}
