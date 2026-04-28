import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const outputFile = path.join(projectRoot, 'src/data/pokemon.ts')
const iconDir = path.join(projectRoot, 'public/pokemon-icons')

const SPECIES_LIST_URL = 'https://pokeapi.co/api/v2/pokemon-species?limit=2000'
const FETCH_CONCURRENCY = 18
const DOWNLOAD_CONCURRENCY = 10
const RETRY_COUNT = 3

const FALLBACK_TITLES_BY_GENERATION = {
  1: 'ポケットモンスター 赤・緑',
  2: 'ポケットモンスター 金・銀',
  3: 'ポケットモンスター ルビー・サファイア',
  4: 'ポケットモンスター ダイヤモンド・パール',
  5: 'ポケットモンスター ブラック・ホワイト',
  6: 'ポケットモンスター X・Y',
  7: 'ポケットモンスター サン・ムーン',
  8: 'ポケットモンスター ソード・シールド',
  9: 'ポケットモンスター スカーレット・バイオレット',
}

const VERSION_LABELS = {
  red: 'ポケットモンスター 赤・緑',
  blue: 'ポケットモンスター 赤・緑',
  green: 'ポケットモンスター 赤・緑',
  yellow: 'ポケットモンスター ピカチュウ',
  gold: 'ポケットモンスター 金・銀',
  silver: 'ポケットモンスター 金・銀',
  crystal: 'ポケットモンスター クリスタル',
  ruby: 'ポケットモンスター ルビー・サファイア',
  sapphire: 'ポケットモンスター ルビー・サファイア',
  emerald: 'ポケットモンスター エメラルド',
  firered: 'ポケットモンスター ファイアレッド・リーフグリーン',
  leafgreen: 'ポケットモンスター ファイアレッド・リーフグリーン',
  diamond: 'ポケットモンスター ダイヤモンド・パール',
  pearl: 'ポケットモンスター ダイヤモンド・パール',
  platinum: 'ポケットモンスター プラチナ',
  heartgold: 'ポケットモンスター ハートゴールド・ソウルシルバー',
  soulsilver: 'ポケットモンスター ハートゴールド・ソウルシルバー',
  black: 'ポケットモンスター ブラック・ホワイト',
  white: 'ポケットモンスター ブラック・ホワイト',
  'black-2': 'ポケットモンスター ブラック2・ホワイト2',
  'white-2': 'ポケットモンスター ブラック2・ホワイト2',
  x: 'ポケットモンスター X・Y',
  y: 'ポケットモンスター X・Y',
  'omega-ruby': 'ポケットモンスター オメガルビー・アルファサファイア',
  'alpha-sapphire': 'ポケットモンスター オメガルビー・アルファサファイア',
  sun: 'ポケットモンスター サン・ムーン',
  moon: 'ポケットモンスター サン・ムーン',
  'ultra-sun': 'ポケットモンスター ウルトラサン・ウルトラムーン',
  'ultra-moon': 'ポケットモンスター ウルトラサン・ウルトラムーン',
  'lets-go-pikachu': 'ポケットモンスター Let\'s Go! ピカチュウ・イーブイ',
  'lets-go-eevee': 'ポケットモンスター Let\'s Go! ピカチュウ・イーブイ',
  sword: 'ポケットモンスター ソード・シールド',
  shield: 'ポケットモンスター ソード・シールド',
  'brilliant-diamond': 'ポケットモンスター ブリリアントダイヤモンド・シャイニングパール',
  'shining-pearl': 'ポケットモンスター ブリリアントダイヤモンド・シャイニングパール',
  'legends-arceus': 'Pokemon LEGENDS アルセウス',
  scarlet: 'ポケットモンスター スカーレット・バイオレット',
  violet: 'ポケットモンスター スカーレット・バイオレット',
  colosseum: 'ポケモンコロシアム',
  xd: 'ポケモンXD 闇の旋風ダーク・ルギア',
}

const VERSION_GROUP_LABELS = {
  'red-blue': 'ポケットモンスター 赤・緑',
  yellow: 'ポケットモンスター ピカチュウ',
  'gold-silver': 'ポケットモンスター 金・銀',
  crystal: 'ポケットモンスター クリスタル',
  'ruby-sapphire': 'ポケットモンスター ルビー・サファイア',
  emerald: 'ポケットモンスター エメラルド',
  'firered-leafgreen': 'ポケットモンスター ファイアレッド・リーフグリーン',
  'diamond-pearl': 'ポケットモンスター ダイヤモンド・パール',
  platinum: 'ポケットモンスター プラチナ',
  'heartgold-soulsilver': 'ポケットモンスター ハートゴールド・ソウルシルバー',
  'black-white': 'ポケットモンスター ブラック・ホワイト',
  'black-2-white-2': 'ポケットモンスター ブラック2・ホワイト2',
  'x-y': 'ポケットモンスター X・Y',
  'omega-ruby-alpha-sapphire':
    'ポケットモンスター オメガルビー・アルファサファイア',
  'sun-moon': 'ポケットモンスター サン・ムーン',
  'ultra-sun-ultra-moon': 'ポケットモンスター ウルトラサン・ウルトラムーン',
  'lets-go-pikachu-lets-go-eevee':
    'ポケットモンスター Let\'s Go! ピカチュウ・イーブイ',
  'sword-shield': 'ポケットモンスター ソード・シールド',
  'brilliant-diamond-and-shining-pearl':
    'ポケットモンスター ブリリアントダイヤモンド・シャイニングパール',
  'legends-arceus': 'Pokemon LEGENDS アルセウス',
  'scarlet-violet': 'ポケットモンスター スカーレット・バイオレット',
}

const MANUAL_INCLUDE = new Set(['tatsugiri-droopy', 'tatsugiri-stretchy'])
const MANUAL_EXCLUDE = new Set([
  'koraidon-limited-build',
  'koraidon-sprinting-build',
  'koraidon-swimming-build',
  'koraidon-gliding-build',
  'miraidon-low-power-mode',
  'miraidon-drive-mode',
  'miraidon-aquatic-mode',
  'miraidon-glide-mode',
])
const GENERATION_NUMBERS = {
  'generation-i': 1,
  'generation-ii': 2,
  'generation-iii': 3,
  'generation-iv': 4,
  'generation-v': 5,
  'generation-vi': 6,
  'generation-vii': 7,
  'generation-viii': 8,
  'generation-ix': 9,
}

await main()

async function main() {
  console.log('Fetching species index...')
  const speciesList = await fetchJson(SPECIES_LIST_URL)
  const speciesDetails = await mapLimit(
    speciesList.results,
    FETCH_CONCURRENCY,
    (entry) => fetchJson(entry.url),
  )

  console.log(`Fetched ${speciesDetails.length} species`)
  const varieties = speciesDetails.flatMap((species) =>
    species.varieties.map((variety) => ({
      species,
      pokemonUrl: variety.pokemon.url,
      isDefault: variety.is_default,
    })),
  )

  const pokemonDetails = await mapLimit(varieties, FETCH_CONCURRENCY, async (entry) => ({
    ...entry,
    pokemon: await fetchJson(entry.pokemonUrl),
  }))

  const formTargets = pokemonDetails.filter(
    (entry) => !entry.isDefault || entry.pokemon.forms?.[0]?.name !== entry.species.name,
  )
  const formDetails = new Map(
    await mapLimit(formTargets, FETCH_CONCURRENCY, async (entry) => {
      const url = entry.pokemon.forms?.[0]?.url
      if (!url) {
        return [entry.pokemon.name, null]
      }
      return [entry.pokemon.name, await fetchJson(url)]
    }),
  )

  const grouped = new Map()

  for (const entry of pokemonDetails) {
    const list = grouped.get(entry.species.name) ?? []
    list.push({
      ...entry,
      form: formDetails.get(entry.pokemon.name) ?? null,
    })
    grouped.set(entry.species.name, list)
  }

  const included = []

  for (const [, forms] of grouped) {
    forms.sort(compareForms)
    const defaultForm = forms.find((entry) => entry.isDefault) ?? forms[0]
    const defaultSignature = gameplaySignature(defaultForm.pokemon)

    for (const entry of forms) {
      if (shouldIncludeForm(entry, defaultSignature)) {
        included.push(entry)
      }
    }
  }

  included.sort((left, right) => {
    if (left.species.id !== right.species.id) {
      return left.species.id - right.species.id
    }

    if (left.isDefault !== right.isDefault) {
      return left.isDefault ? -1 : 1
    }

    return left.pokemon.id - right.pokemon.id
  })

  await fs.rm(iconDir, { recursive: true, force: true })
  await fs.mkdir(iconDir, { recursive: true })

  const entries = await mapLimit(included, DOWNLOAD_CONCURRENCY, async (entry) => {
    const defaultForm =
      grouped.get(entry.species.name)?.find((candidate) => candidate.isDefault) ?? null
    const spriteUrl = await downloadBestSprite(
      [
        ...getSpriteCandidates(entry.pokemon, entry.form),
        ...getSpriteCandidates(defaultForm?.pokemon, defaultForm?.form),
      ],
      path.join(iconDir, `${entry.pokemon.name}.png`),
    )
    const extension = getFileExtension(spriteUrl)
    const imageFile = `${entry.pokemon.name}${extension}`
    if (extension !== '.png') {
      await fs.rename(
        path.join(iconDir, `${entry.pokemon.name}.png`),
        path.join(iconDir, imageFile),
      )
    }

    return {
      id: entry.pokemon.id,
      slug: entry.pokemon.name,
      speciesKey: entry.species.name,
      nameJa: buildLocalizedDisplayName(entry, 'ja'),
      nameEn: buildLocalizedDisplayName(entry, 'en'),
      imagePath: `pokemon-icons/${imageFile}`,
      types: entry.pokemon.types
        .slice()
        .sort((left, right) => left.slot - right.slot)
        .map((type) => type.type.name),
      baseStats: buildBaseStats(entry.pokemon.stats),
      generation: generationNumber(entry.species.generation.name),
      debutTitle: resolveDebutTitle(entry),
      isDefault: entry.isDefault,
    }
  })

  const output = `import type { PokemonEntry } from '../lib/types.ts'\n\nexport const POKEMON_ENTRIES = ${JSON.stringify(
    entries,
    null,
    2,
  )} satisfies readonly PokemonEntry[]\n\nexport const POKEMON_DATA_GENERATED_AT = ${JSON.stringify(
    new Date().toISOString(),
  )}\n`

  await fs.writeFile(outputFile, output, 'utf8')
  console.log(`Wrote ${entries.length} entries to ${path.relative(projectRoot, outputFile)}`)
}

function shouldIncludeForm(entry, defaultSignature) {
  if (entry.isDefault) {
    return true
  }

  if (MANUAL_INCLUDE.has(entry.pokemon.name)) {
    return true
  }

  if (MANUAL_EXCLUDE.has(entry.pokemon.name)) {
    return false
  }

  if (entry.form?.is_battle_only || entry.form?.is_mega) {
    return true
  }

  return gameplaySignature(entry.pokemon) !== defaultSignature
}

function compareForms(left, right) {
  if (left.isDefault !== right.isDefault) {
    return left.isDefault ? -1 : 1
  }

  const leftOrder = left.form?.order ?? left.pokemon.order ?? left.pokemon.id
  const rightOrder = right.form?.order ?? right.pokemon.order ?? right.pokemon.id

  return leftOrder - rightOrder
}

function gameplaySignature(pokemon) {
  const types = pokemon.types
    .slice()
    .sort((left, right) => left.slot - right.slot)
    .map((type) => type.type.name)
    .join('|')
  const stats = pokemon.stats
    .slice()
    .sort((left, right) => left.stat.name.localeCompare(right.stat.name))
    .map((stat) => stat.base_stat)
    .join('|')
  const abilities = pokemon.abilities
    .map((ability) => `${ability.slot}:${ability.ability.name}:${ability.is_hidden}`)
    .sort()
    .join('|')
  const moves = pokemon.moves.map((move) => move.move.name).sort().join('|')

  return [types, stats, abilities, moves, pokemon.height, pokemon.weight].join('::')
}

function buildLocalizedDisplayName(entry, language) {
  const speciesName = localizedName(entry.species.names, language) ?? titleCase(entry.species.name)
  const fullFormName = localizedName(entry.form?.names, language)
  const formName = localizedName(entry.form?.form_names, language)

  if (fullFormName) {
    return fullFormName
  }

  if (!formName) {
    return speciesName
  }

  const open = language === 'en' ? ' (' : '（'
  const close = language === 'en' ? ')' : '）'
  return formName.includes(speciesName) ? formName : `${speciesName}${open}${formName}${close}`
}

function buildBaseStats(stats) {
  const values = Object.fromEntries(
    stats.map((stat) => [stat.stat.name, stat.base_stat]),
  )
  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0)

  return {
    hp: values.hp ?? 0,
    attack: values.attack ?? 0,
    defense: values.defense ?? 0,
    specialAttack: values['special-attack'] ?? 0,
    specialDefense: values['special-defense'] ?? 0,
    speed: values.speed ?? 0,
    total,
  }
}

function resolveDebutTitle(entry) {
  const versionCandidates = entry.pokemon.game_indices.map((item) => ({
    order: parseResourceId(item.version.url),
    label: VERSION_LABELS[item.version.name] ?? slugToLabel(item.version.name),
  }))
  const formCandidate =
    versionCandidates.length === 0 && entry.form?.version_group
      ? {
          order: parseResourceId(entry.form.version_group.url),
          label:
            VERSION_GROUP_LABELS[entry.form.version_group.name] ??
            slugToLabel(entry.form.version_group.name),
        }
      : null
  const candidates = formCandidate ? [...versionCandidates, formCandidate] : versionCandidates

  if (candidates.length > 0) {
    return candidates.sort((left, right) => left.order - right.order)[0].label
  }

  return FALLBACK_TITLES_BY_GENERATION[generationNumber(entry.species.generation.name)]
}

function getSpriteCandidates(pokemon, form) {
  if (!pokemon) {
    return []
  }

  return uniqueStrings([
    pokemon.sprites.front_default ||
      form?.sprites?.front_default ||
      null,
    pokemon.sprites.versions?.['generation-viii']?.icons?.front_default ?? null,
    findNestedFrontDefault(pokemon.sprites.versions),
    findNestedFrontDefault(form?.sprites?.versions),
    pokemon.sprites.other?.home?.front_default ?? null,
    pokemon.sprites.other?.['official-artwork']?.front_default ?? null,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
  ])
}

async function fetchJson(url, attempts = RETRY_COUNT) {
  let lastError

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': 'poke-type-matchup-game-generator/1.0' },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} for ${url}`)
      }

      return response.json()
    } catch (error) {
      lastError = error
      await sleep(attempt * 200)
    }
  }

  throw lastError
}

async function downloadFile(url, destination) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'poke-type-matchup-game-generator/1.0' },
  })

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`)
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  await fs.writeFile(destination, buffer)
}

async function downloadBestSprite(candidates, destination) {
  let lastError = null

  for (const candidate of candidates) {
    try {
      await downloadFile(candidate, destination)
      return candidate
    } catch (error) {
      lastError = error
    }
  }

  throw lastError ?? new Error(`No sprite candidates for ${destination}`)
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length)
  let index = 0

  async function worker() {
    while (index < items.length) {
      const current = index
      index += 1
      results[current] = await mapper(items[current], current)
    }
  }

  const size = Math.min(limit, items.length)
  await Promise.all(Array.from({ length: size }, () => worker()))

  return results
}

function parseResourceId(url) {
  const match = url.match(/\/(\d+)\/?$/)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

function generationNumber(generationName) {
  return GENERATION_NUMBERS[generationName] ?? 0
}

function localizedName(entries, language) {
  return entries?.find((entry) => entry.language.name === language)?.name ?? null
}

function getFileExtension(url) {
  const parsed = new URL(url)
  const extension = path.extname(parsed.pathname)
  return extension || '.png'
}

function slugToLabel(value) {
  return value
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ')
}

function titleCase(value) {
  return slugToLabel(value)
}

function findNestedFrontDefault(value) {
  if (!value || typeof value !== 'object') {
    return null
  }

  if (typeof value.front_default === 'string' && value.front_default.length > 0) {
    return value.front_default
  }

  for (const child of Object.values(value)) {
    const nested = findNestedFrontDefault(child)
    if (nested) {
      return nested
    }
  }

  return null
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function uniqueStrings(values) {
  return [...new Set(values.filter((value) => typeof value === 'string' && value.length > 0))]
}
