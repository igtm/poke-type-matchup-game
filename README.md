# ポケモンタイプ相性学習ゲーム

`SolidJS + Vite` で作った、単一画面のポケモンタイプ相性学習ゲームです。  
公開 URL は `https://igtm.github.io/poke-type-matchup-game/` を前提にしています。

## できること

- 対象ポケモンと攻撃タイプを見て、`4x / 2x / 1x / 0.5x / 0.25x / 0x` の 6 択で回答
- `100svh` 前提の app-like レイアウトで、モバイルはタブ切替、デスクトップは 2 カラム
- 誤答した未学習問題だけを出す `復習モード`
- `覚えた` で問題単位に除外
- `localStorage` に run 履歴、問題別の誤答数、学習済み状態を保存
- ベスト連続正解ランキング、苦手タイプランキング、最近の誤答一覧を表示

## データ方針

- ランタイム fetch は行いません
- PokéAPI から事前生成した `src/data/pokemon.ts` をそのまま読み込みます
- 画像は `public/pokemon-icons/` にローカル同梱しています
- battle-relevant な派生フォームを優先し、見た目だけの差分は生成スクリプト側で除外します

現時点の生成物:

- 収録フォーム数: `1340`
- 生成スクリプト: `scripts/generate-pokemon-data.mjs`
- 出力先: `src/data/pokemon.ts`, `public/pokemon-icons/`

## 開発

```bash
pnpm install
pnpm dev
```

主なコマンド:

```bash
pnpm test
pnpm build
pnpm generate:data
```

## データ再生成

PokéAPI から最新の生成物を作り直す場合:

```bash
pnpm generate:data
```

このコマンドは以下を更新します。

- `src/data/pokemon.ts`
- `public/pokemon-icons/`

## GitHub Pages 設定

このリポジトリは project pages 構成です。`vite.config.ts` で `base: '/poke-type-matchup-game/'` を設定しています。

必要な設定:

1. GitHub リポジトリを `igtm/poke-type-matchup-game` に置く
2. GitHub の `Settings > Pages` を開く
3. `Source` を `GitHub Actions` に変更する

デプロイの流れ:

- `pull_request`: `CI` が `pnpm test` と `pnpm build` を実行
- `push` to `main` / `workflow_dispatch`: `Deploy Pages` が `dist` を artifact 化して公開

## 実装メモ

- タイプ相性は `src/lib/matchup.ts` の `TYPE_CHART` で一元管理
- 問題生成は全問題を事前インデックス化してから、通常モード / 復習モードで重み付け抽選
- 乱数は `src/lib/rng.ts` の `MersenneTwister` を使用
