# react-webApp-template

自分用reactのwebappテンプレート(随時更新)

## 技術選定

### 言語

typescript(javascript), html, css,

### ライブラリ

react

### パッケージ管理

npm

### バージョン管理

volta

### 開発環境

firebase hosting

## 導入

### volta

```
brew install volta
export PATH="$HOME/.volta/bin:$PATH" #pathを通す
volta install node@20 #node install
volta pin node@20 package.jsonにnode versionの書き込み
```

### vite (フロントエンド開発ツール)

```
npm create vite@latest # インストールも踏まえて
npm install # 必要な依存関係のインストール
```

## prettierとlinterのインストール

package.jsonのdevDependenciesに入れるように設定

```
#prettier
npm install --save-dev prettier
#linter
npm install --save-dev eslint
```

## linter
