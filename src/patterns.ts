import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, Pattern, PatternId, Patterns } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { post } from './metadata'
import { specData } from './specs'
import { HoundstoothtopiaThemePatternSpec } from './types'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    description: post,
    formattedName: 'Houndstoothtopia',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-02-21T07:00:00.000Z',
    musicalIdeaIllustrated: 'irrational rhythm and harmony',
    originalPublish: '2018-02-21T07:00:00.000Z',
}

const pattern: Pattern<HoundstoothtopiaThemePatternSpec> = {
    material,
    metadata,
    patternId: PatternId.HOUNDSTOOTHTOPIA_THEME,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
