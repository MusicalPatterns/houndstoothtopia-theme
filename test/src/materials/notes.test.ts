import { NotePropertySpec, NoteSpec, to } from '../../../../../src/indexForTest'
import { buildNoteSpec, ContourElement } from '../../../src/indexForTest'

describe('houndstoothtopia notes', () => {
    let noteSpec: NoteSpec
    describe('non-rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement = [ to.Index(7), to.Index(3) ]
            noteSpec = buildNoteSpec(testContour)
        })

        describe('duration', () => {
            let durationSpec: NotePropertySpec
            beforeEach(() => {
                durationSpec = noteSpec.durationSpec || {}
            })

            it('sets the index to the second element', () => {
                expect(durationSpec.index)
                    .toBe(to.Index(3))
            })

            it('sets the scale index to the default for duration', () => {
                expect(durationSpec.scaleIndex)
                    .toBe(to.Index(1))
            })
        })

        describe('pitch', () => {
            let pitchSpec: NotePropertySpec
            beforeEach(() => {
                pitchSpec = noteSpec.pitchSpec || {}
            })

            it('sets the index to the first element', () => {
                expect(pitchSpec.index)
                    .toBe(to.Index(7))
            })

            it('sets the scale index to the default for pitch', () => {
                expect(pitchSpec.scaleIndex)
                    .toBe(to.Index(2))
            })
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('by default leaves scalar undefined, so that it defaults to 1', () => {
                expect(gainSpec.scalar)
                    .toBe(undefined)
            })
        })

        describe('sustain', () => {
            let sustainSpec: NotePropertySpec
            beforeEach(() => {
                sustainSpec = noteSpec.sustainSpec || {}
            })

            it('sets the scalar to something quite staccato but still related to the irrational theme', () => {
                expect(sustainSpec.scalar)
                    .toBe(to.Scalar(Math.sqrt(2) - 1))
            })

            it('sets the scale index to the default for durations', () => {
                expect(sustainSpec.scaleIndex)
                    .toBe(to.Index(1))
            })

            it('leaves the index undefined so that it will default to zero', () => {
                expect(sustainSpec.index)
                    .toBe(undefined)
            })
        })
    })

    describe('rest note', () => {
        beforeEach(() => {
            const testContour: ContourElement = [ to.Index(-1), to.Index(3) ]
            noteSpec = buildNoteSpec(testContour)
        })

        describe('gain', () => {
            let gainSpec: NotePropertySpec
            beforeEach(() => {
                gainSpec = noteSpec.gainSpec || {}
            })

            it('sets gain to zero', () => {
                expect(gainSpec.scalar)
                    .toBe(to.Scalar(0))
            })
        })
    })
})
