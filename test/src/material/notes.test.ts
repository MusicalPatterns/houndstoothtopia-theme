import { NotePropertySpec, NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationXYZ, SILENT } from '@musical-patterns/pattern'
import { ContourElement, SQUARE_ROOT_OF_TWO, to } from '@musical-patterns/utilities'
import { buildSupertileNoteSpec } from '../../../src/indexForTest'

describe('notes', () => {
    let noteSpec: NoteSpec
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = to.ContourElement<PitchDurationXYZ>([ 2.12, 3, 3, 5, 8 ])
            noteSpec = buildSupertileNoteSpec(testContour)
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('sets the index to the second element', () => {
                expect(durationSpec.index)
                    .toBe(to.Ordinal(3))
            })

            it('sets the scale index to the default for duration', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(to.Ordinal(1))
            })
        })

        describe('pitch', () => {
            let pitchSpec: NotePropertySpec
            beforeEach(() => {
                pitchSpec = noteSpec.pitchSpec || {}
            })

            it('sets the index to the first element', () => {
                expect(pitchSpec.scalar)
                    .toBe(to.Scalar(2.12))
            })

            it('sets the scale index to the default for pitch', () => {
                expect(pitchSpec.scaleIndex)
                    .toBe(to.Ordinal(2))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('sets gain to half', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(0.5))
            })
        })

        describe('sustain', () => {
            let sustainSpec: NotePropertySpec
            beforeEach(() => {
                sustainSpec = noteSpec.sustainSpec || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(sustainSpec.scalar)
                    .toBe(to.Scalar(SQUARE_ROOT_OF_TWO - 1))
            })

            it('sets the scale index to the default for durations', () => {
                expect(sustainSpec.scaleIndex)
                    .toBe(to.Ordinal(1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(sustainSpec.index)
                    .toBe(undefined)
            })
        })

        describe('position', () => {
            let positionSpec: NotePropertySpec[]
            beforeEach(() => {
                positionSpec = noteSpec.positionSpec as NotePropertySpec[]
            })

            it('sets the scalar from the contour', () => {
                expect(positionSpec[ 0 ].scalar)
                    .toBe(to.Scalar(3))
                expect(positionSpec[ 1 ].scalar)
                    .toBe(to.Scalar(5))
                expect(positionSpec[ 2 ].scalar)
                    .toBe(to.Scalar(8))
            })

            it('sets the scale index to the scales for position dimensions x, y, and z', () => {
                expect(positionSpec[ 0 ].scaleIndex)
                    .toBe(to.Ordinal(3))
                expect(positionSpec[ 1 ].scaleIndex)
                    .toBe(to.Ordinal(4))
                expect(positionSpec[ 2 ].scaleIndex)
                    .toBe(to.Ordinal(5))
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement<PitchDurationXYZ> = to.ContourElement<PitchDurationXYZ>([ -1, 3, 0, 0, 0 ])
            noteSpec = buildSupertileNoteSpec(testContour)
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('sets gain to zero', () => {
                expect(gainSpec.scalar)
                    .toBe(SILENT)
            })
        })
    })
})
