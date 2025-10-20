# 🤖 メタバース仮想学校 - Codex実装プロンプト

> **対象AI**: GitHub Copilot, Cursor, Codex, その他コード生成AI  
> **バージョン**: 1.0.0  
> **作成日**: 2025年10月20日  
> **プロジェクト**: メタバース仮想学校アプリケーション

---

## 📌 このプロンプトについて

このプロンプトは、**Codex（コード生成AI）**に対して、メタバース仮想学校プロジェクトのコードを生成させるための指示書です。

**重要**: このプロンプトをCodexに渡す前に、必ず `METAVERSE_PROJECT_GUIDE.md` を読んで、プロジェクトの全体像を理解してください。

---

## 🎯 プロジェクト基本情報

### プロジェクト名
**メタバース仮想学校 (Virtual School Platform)**

### 技術スタック

```json
{
  "frontend": {
    "framework": "Next.js 15 (App Router)",
    "ui": "React 19",
    "language": "TypeScript 5.3",
    "styling": "TailwindCSS 3.4",
    "graphics": "Canvas API"
  },
  "backend": {
    "runtime": "Node.js LTS",
    "framework": "Express.js",
    "realtime": "Socket.io 4.6",
    "orm": "Prisma 5.7",
    "auth": "JWT"
  },
  "database": {
    "development": "SQLite",
    "production": "PostgreSQL 16"
  }
}
```

---

## ⚠️ Codexへの重要な指示

### 🚨 絶対に守るべき原則

```plaintext
1. ❌ 複数機能を同時に生成しない
   ✅ 1つの機能だけを生成する

2. ❌ 完璧なコードを一気に生成しない
   ✅ 段階的に、動作確認しながら生成する

3. ❌ 環境設定を複数作らない
   ✅ .envファイルは各ディレクトリに1つだけ

4. ❌ any型を使わない
   ✅ 適切な型定義を必ず行う

5. ❌ エラーハンドリングを省略しない
   ✅ すべての関数で適切にエラー処理
```

---

## 📋 段階的実装フェーズ

### 現在実装するPhase

```plaintext
Phase {番号}: {機能名}

【このPhaseで実装するもの】
- {機能1}
- {機能2}

【このPhaseで実装しないもの】
- {機能A}
- {機能B}
```

**Codexへの指示**: 上記の「実装するもの」だけを生成してください。「実装しないもの」は絶対に含めないでください。

---

## 🔧 Phase別実装指示

使用する際は、該当するPhaseのセクションだけをCodexに渡してください。

---

## Phase 0: プロジェクト準備

### 目標
最小限の構成で「Hello World」レベルのアプリを作成

### バックエンド実装指示

```plaintext
【タスク】
バックエンドの最小構成を作成してください

【技術要件】
- Node.js + Express.js + TypeScript
- ヘルスチェックエンドポイント（/health）だけ実装
- CORSを有効化
- 環境変数で設定可能

【ファイル構成】
backend/
├── src/
│   ├── server.ts          # エントリーポイント
│   └── routes/
│       └── health.ts      # /health エンドポイント
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json

【実装要件】
1. server.ts
   - Expressサーバーのセットアップ
   - CORS設定
   - /healthルートの登録
   - ポート5000で起動
   - 環境変数からポート番号取得

2. routes/health.ts
   - GET /health で {"status": "OK"} を返す

3. .env
   - PORT=5000
   - NODE_ENV=development
   - FRONTEND_URL=http://localhost:3000

4. package.json
   - 必要な依存関係のみ
   - npm run dev でnodemon起動
   - npm run build でTypeScriptコンパイル

5. tsconfig.json
   - strict mode有効
   - ES2022ターゲット

【実装してはいけないもの】
❌ データベース関連
❌ 認証関連
❌ Socket.io関連
❌ 複雑なミドルウェア
❌ ユーザー管理

【完了条件】
✅ npm run dev で起動
✅ http://localhost:5000/health で {"status": "OK"} が返る
✅ TypeScriptエラーゼロ
✅ コンソールエラーゼロ
```

### フロントエンド実装指示

```plaintext
【タスク】
フロントエンドの最小構成を作成してください

【技術要件】
- Next.js 15 (App Router) + React 19 + TypeScript
- TailwindCSS
- 環境変数で設定可能

【ファイル構成】
frontend/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx       # "Hello World"
│       └── globals.css
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

【実装要件】
1. page.tsx
   - シンプルな "Hello World" 表示
   - Tailwindでセンタリング

2. layout.tsx
   - 基本的なHTML構造
   - メタデータ設定

3. .env.local
   - NEXT_PUBLIC_API_URL=http://localhost:5000

4. next.config.js
   - 基本設定のみ

【実装してはいけないもの】
❌ 認証関連
❌ データベース関連
❌ Socket.io関連
❌ 複雑なコンポーネント
❌ 状態管理

【完了条件】
✅ npm run dev で起動
✅ http://localhost:3000 で "Hello World" が表示
✅ TypeScriptエラーゼロ
✅ コンソールエラーゼロ
```

---

## Phase 1: 認証システム

### バックエンド実装指示

```plaintext
【前提条件】
Phase 0 が完全に動作していること

【タスク】
JWT認証システムを実装してください

【技術要件】
- jsonwebtoken
- bcryptjs
- express-validator

【ファイル構成】
backend/src/
├── controllers/
│   └── auth.controller.ts
├── middleware/
│   └── auth.middleware.ts
├── routes/
│   ├── auth.routes.ts
│   └── health.ts (既存)
├── types/
│   └── index.ts
├── utils/
│   └── jwt.utils.ts
└── server.ts (更新)

【実装手順】
Step 1: JWT ユーティリティ作成
Step 2: 認証ミドルウェア作成
Step 3: 認証コントローラー作成
Step 4: ルート定義
Step 5: server.ts に統合

【詳細仕様】

1. types/index.ts
```
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}

export interface JWTPayload {
  userId: string;
  email: string;
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
}
```

2. utils/jwt.utils.ts
```
// 以下の関数を実装
- generateToken(payload: JWTPayload): string
- verifyToken(token: string): JWTPayload | null
```

3. controllers/auth.controller.ts
```
// 以下のエンドポイントを実装
- POST /auth/register
  - メール、パスワード、名前を受け取る
  - パスワードをbcryptでハッシュ化
  - メモリにユーザーを保存（まだDBは使わない）
  - JWTトークンを生成して返す

- POST /auth/login
  - メール、パスワードを受け取る
  - ユーザーを検索
  - パスワードを検証
  - JWTトークンを生成して返す
```

4. middleware/auth.middleware.ts
```
// リクエストのAuthorizationヘッダーからトークンを検証
// 検証成功したらreq.userにユーザー情報を追加
```

5. .env に追加
```
JWT_SECRET=your-super-secret-jwt-key-must-be-at-least-32-characters-long
JWT_EXPIRE=7d
```

【実装してはいけないもの】
❌ データベース連携（メモリ上で管理）
❌ Socket.io
❌ パスワードリセット機能
❌ メール送信機能

【完了条件】
✅ POST /auth/register でユーザー登録できる
✅ POST /auth/login でログインできる
✅ JWTトークンが正しく発行される
✅ 認証が必要なエンドポイントが保護される
✅ TypeScriptエラーゼロ
```

### フロントエンド実装指示

```plaintext
【前提条件】
Phase 0 が完全に動作していること
バックエンドのPhase 1が完了していること

【タスク】
ログイン・ログアウト機能を実装してください

【技術要件】
- React 19 + Next.js 15
- localStorage でトークン管理
- カスタムフックで状態管理

【ファイル構成】
frontend/src/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx (更新)
│   └── page.tsx (更新)
├── components/
│   └── auth/
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── hooks/
│   └── useAuth.ts
├── lib/
│   ├── api.ts
│   └── constants.ts
└── types/
    └── index.ts

【実装手順】
Step 1: 型定義
Step 2: API クライアント作成
Step 3: useAuth フック作成
Step 4: ログインフォーム作成
Step 5: ダッシュボードページ作成

【詳細仕様】

1. types/index.ts
```
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}
```

2. lib/api.ts
```
// 以下の関数を実装
- register(data: RegisterData): Promise<AuthResponse>
- login(credentials: LoginCredentials): Promise<AuthResponse>
- getMe(token: string): Promise<User>
```

3. hooks/useAuth.ts
```
// 以下を提供するカスタムフック
- user: User | null
- token: string | null
- login: (credentials) => Promise<void>
- register: (data) => Promise<void>
- logout: () => void
- isAuthenticated: boolean
```

4. components/auth/LoginForm.tsx
```
// ログインフォーム
- メールアドレス入力
- パスワード入力
- ログインボタン
- バリデーション
- エラー表示
```

5. app/dashboard/page.tsx
```
// 保護されたページ
- 未ログイン時はリダイレクト
- ユーザー情報表示
- ログアウトボタン
```

6. .env.local に追加
```
NEXT_PUBLIC_JWT_SECRET=your-super-secret-jwt-key-must-be-at-least-32-characters-long
```

【重要】
JWT_SECRET はバックエンドと完全に一致させてください！

【実装してはいけないもの】
❌ データベース関連
❌ Socket.io
❌ プロフィール編集
❌ パスワードリセット

【完了条件】
✅ ユーザー登録ができる
✅ ログインができる
✅ トークンがlocalStorageに保存される
✅ ダッシュボードページにアクセスできる
✅ ログアウトができる
✅ 未ログイン時はリダイレクトされる
```

---

## Phase 2: データベース連携

### バックエンド実装指示

```plaintext
【前提条件】
Phase 1 が完全に動作していること

【タスク】
Prismaを使ってSQLiteデータベースを統合してください

【技術要件】
- Prisma 5.7
- SQLite

【ファイル構成】
backend/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts (オプション)
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── auth.controller.ts (更新)
│   └── services/
│       └── user.service.ts
└── .env (更新)

【実装手順】
Step 1: Prismaセットアップ
Step 2: スキーマ定義
Step 3: Prisma Client生成
Step 4: データベースサービス作成
Step 5: 認証コントローラー更新

【詳細仕様】

1. prisma/schema.prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

2. config/database.ts
```
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// 接続テスト関数
export async function connectDatabase(): Promise<void>
```

3. services/user.service.ts
```
// 以下の関数を実装
- createUser(data: CreateUserData): Promise<User>
- findUserByEmail(email: string): Promise<User | null>
- findUserById(id: string): Promise<User | null>
```

4. controllers/auth.controller.ts を更新
```
// メモリ管理から Prisma を使った実装に変更
- register: user.service.createUser を使用
- login: user.service.findUserByEmail を使用
```

5. .env に追加
```
DATABASE_URL="file:./dev.db"
```

【セットアップコマンド】
```
# Prismaインストール
npm install @prisma/client
npm install -D prisma

# 初期化
npx prisma init

# マイグレーション
npx prisma db push

# Prisma Client生成
npx prisma generate
```

【実装してはいけないもの】
❌ PostgreSQL（まだSQLiteのみ）
❌ 複雑なリレーション
❌ メッセージモデル
❌ ルームモデル

【完了条件】
✅ dev.dbファイルが作成される
✅ ユーザー登録がDBに保存される
✅ ログインがDBから認証される
✅ サーバー再起動後もデータが残る
✅ Prisma Studioでデータを確認できる（npx prisma studio）
✅ 既存機能が壊れていない
```

---

## Phase 3: Socket.io基本接続

### バックエンド実装指示

```plaintext
【前提条件】
Phase 2 が完全に動作していること

【タスク】
Socket.ioの基本的な接続を実装してください

【技術要件】
- Socket.io 4.6
- CORS設定

【ファイル構成】
backend/src/
├── socket/
│   ├── index.ts
│   └── handlers/
│       └── connection.handler.ts
├── server.ts (大幅更新)
└── types/
    └── socket.types.ts

【実装手順】
Step 1: Socket.ioサーバーセットアップ
Step 2: 基本的な接続ハンドラー
Step 3: Ping/Pongイベント
Step 4: 切断処理

【詳細仕様】

1. server.ts を更新
```
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }
});

// Socket.ioハンドラーをインポートして接続
import { initializeSocketHandlers } from './socket';
initializeSocketHandlers(io);

// ExpressとSocket.ioを同じポートで起動
httpServer.listen(PORT);
```

2. socket/index.ts
```
import { Server } from 'socket.io';

export function initializeSocketHandlers(io: Server): void {
  io.on('connection', (socket) => {
    console.log(`✅ Client connected: ${socket.id}`);
    
    // Ping/Pong イベント
    socket.on('ping', () => {
      socket.emit('pong', { timestamp: Date.now() });
    });
    
    // 切断処理
    socket.on('disconnect', () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });
}
```

3. types/socket.types.ts
```
export interface ServerToClientEvents {
  pong: (data: { timestamp: number }) => void;
}

export interface ClientToServerEvents {
  ping: () => void;
}
```

【実装してはいけないもの】
❌ Socket.io認証（次のPhase）
❌ チャット機能
❌ ルーム機能
❌ アバター位置同期

【完了条件】
✅ Socket.ioサーバーが起動する
✅ クライアントから接続できる
✅ Ping/Pongイベントが動作する
✅ 切断が正しく処理される
✅ コンソールに接続ログが表示される
✅ 既存機能（Phase 0-2）が壊れていない
```

### フロントエンド実装指示

```plaintext
【前提条件】
Phase 2 が完全に動作していること
バックエンドのPhase 3が完了していること

【タスク】
Socket.ioクライアントを実装してください

【技術要件】
- socket.io-client
- React hooks

【ファイル構成】
frontend/src/
├── lib/
│   └── socket.ts
├── hooks/
│   └── useSocket.ts
├── components/
│   └── SocketStatus.tsx
└── app/
    └── dashboard/
        └── page.tsx (更新)

【実装手順】
Step 1: Socket.ioクライアントセットアップ
Step 2: useSocket カスタムフック
Step 3: 接続状態表示コンポーネント
Step 4: ダッシュボードに統合

【詳細仕様】

1. lib/socket.ts
```
'use client';
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
      { autoConnect: false }
    );
  }
  return socket;
}

export function connectSocket(): void {
  const socket = getSocket();
  if (!socket.connected) {
    socket.connect();
  }
}

export function disconnectSocket(): void {
  const socket = getSocket();
  if (socket.connected) {
    socket.disconnect();
  }
}
```

2. hooks/useSocket.ts
```
// 以下を提供するカスタムフック
- isConnected: boolean
- connect: () => void
- disconnect: () => void
- sendPing: () => void
- lastPong: number | null

// useEffectでSocket接続とイベントリスナー管理
// クリーンアップ処理を忘れずに
```

3. components/SocketStatus.tsx
```
// 接続状態を表示するコンポーネント
- 接続中: 緑色の丸
- 切断中: 赤色の丸
- Pingボタン
- 最後のPong時刻表示
```

4. app/dashboard/page.tsx に追加
```
// SocketStatusコンポーネントを表示
// ログイン時に自動接続
// ログアウト時に自動切断
```

【実装してはいけないもの】
❌ Socket.io認証
❌ チャット機能
❌ ルーム機能
❌ アバター位置同期

【完了条件】
✅ Socket.io接続が確立される
✅ 接続状態がUIに表示される
✅ Pingボタンでイベント送信できる
✅ Pongイベントを受信できる
✅ 切断が正しく処理される
✅ コンポーネントアンマウント時にクリーンアップされる
```

---

## 🔧 コーディング規約

### TypeScript規約

```typescript
// ✅ 良い例
interface User {
  id: string;
  email: string;
  name: string;
}

function getUser(id: string): Promise<User | null> {
  // 実装
}

// ❌ 悪い例
function getUser(id: any): any {
  // 実装
}
```

### 命名規約

```typescript
// ファイル名: kebab-case
auth.controller.ts
user.service.ts
socket.handler.ts

// クラス名: PascalCase
class UserService {}
class AuthController {}

// 関数名: camelCase
function getUserById() {}
function createUser() {}

// 定数: UPPER_SNAKE_CASE
const JWT_SECRET = process.env.JWT_SECRET;
const MAX_USERS = 100;

// インターフェース: PascalCase
interface User {}
interface AuthResponse {}
```

### エラーハンドリング

```typescript
// ✅ 必ず実装
try {
  const user = await userService.create(data);
  return res.json(user);
} catch (error) {
  console.error('Error creating user:', error);
  return res.status(500).json({
    error: 'Failed to create user'
  });
}

// ❌ エラーハンドリングなし
const user = await userService.create(data);
return res.json(user);
```

### 非同期処理

```typescript
// ✅ async/await を使用
async function getUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

// ❌ コールバック地獄
function getUsers(callback) {
  prisma.user.findMany((error, users) => {
    if (error) {
      callback(error);
    } else {
      callback(null, users);
    }
  });
}
```

---

## 📝 コメント規約

### 関数コメント

```typescript
/**
 * ユーザーをメールアドレスで検索
 * @param email - 検索するメールアドレス
 * @returns 見つかったユーザー、または null
 * @throws {DatabaseError} データベースエラーが発生した場合
 */
async function findUserByEmail(email: string): Promise<User | null> {
  // 実装
}
```

### インラインコメント

```typescript
// ✅ 必要な場所にだけ
const hashedPassword = await bcrypt.hash(password, 10); // saltRounds = 10

// ❌ 不要なコメント
const users = []; // ユーザーの配列
```

---

## 🧪 テストの書き方（Phase 5以降）

```typescript
// ユニットテストの例
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
      };
      
      const user = await userService.createUser(userData);
      
      expect(user.email).toBe(userData.email);
      expect(user.name).toBe(userData.name);
      expect(user.password).not.toBe(userData.password); // ハッシュ化確認
    });
  });
});
```

---

## 🚨 よくある間違いと修正方法

### 間違い1: any型の使用

```typescript
// ❌ 悪い
function processData(data: any): any {
  return data.value;
}

// ✅ 良い
interface Data {
  value: string;
}

function processData(data: Data): string {
  return data.value;
}
```

### 間違い2: エラーの無視

```typescript
// ❌ 悪い
try {
  await someAsyncOperation();
} catch (error) {
  // 何もしない
}

// ✅ 良い
try {
  await someAsyncOperation();
} catch (error) {
  console.error('Operation failed:', error);
  throw new Error('Failed to complete operation');
}
```

### 間違い3: 環境変数の直接参照

```typescript
// ❌ 悪い
const secret = process.env.JWT_SECRET;

// ✅ 良い
const secret = process.env.JWT_SECRET || 'default-secret';
if (!process.env.JWT_SECRET) {
  console.warn('JWT_SECRET not set, using default');
}
```

### 間違い4: Socket.ioのクリーンアップ忘れ

```typescript
// ❌ 悪い
useEffect(() => {
  socket.on('message', handleMessage);
}, []);

// ✅ 良い
useEffect(() => {
  socket.on('message', handleMessage);
  
  return () => {
    socket.off('message', handleMessage);
  };
}, [handleMessage]);
```

---

## 📦 package.json テンプレート

### バックエンド

```json
{
  "name": "metaverse-school-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/server.js",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^5.7.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.2",
    "socket.io": "^4.6.0"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/node": "^20.10.5",
    "nodemon": "^3.0.2",
    "prisma": "^5.7.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

### フロントエンド

```json
{
  "name": "metaverse-school-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "socket.io-client": "^4.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.5",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
```

---

## 🎯 Codexに渡す際のテンプレート

### 基本テンプレート

```plaintext
【プロジェクト】
メタバース仮想学校

【現在のPhase】
Phase {番号}: {機能名}

【前提条件】
- Phase {前のPhase番号} が完全に動作している
- すべての既存機能が正常動作中

【実装タスク】
{上記のPhase別実装指示から該当部分をコピー}

【重要な制約】
1. この機能「だけ」を実装する
2. any型を使用しない
3. エラーハンドリングを必ず実装
4. TypeScript strictモードに準拠
5. コメントは必要最小限

【確認事項】
実装後、以下を確認してください：
- TypeScriptエラーがゼロ
- npm run dev でエラーなく起動
- コンソールエラーがゼロ
- 実装した機能が動作する
- 既存機能が壊れていない
```

---

## 🆘 エラーが発生したら

### Claudeに質問するテンプレート

```markdown
【エラー報告】

【発生したエラー】
```
{エラーメッセージ全文をコピー}
```

【実装したコード】
```typescript
{エラーが出ているコードをコピー}
```

【環境情報】
- Phase: Phase {番号}
- ファイル: {ファイル名}
- Node.js: {バージョン}

【試したこと】
- {試したこと1}
- {試したこと2}

【質問】
メタバース仮想学校プロジェクトのCodex実装中です。
上記のエラーを解決する方法を教えてください。
```

---

## ✅ 完了条件チェックリスト

各Phase完了時に確認：

```markdown
Phase {番号} 完了チェックリスト

### コード品質
- [ ] TypeScriptエラーがゼロ
- [ ] ESLintエラーがゼロ
- [ ] any型を使用していない
- [ ] すべての関数に型注釈がある

### 動作確認
- [ ] npm run dev でエラーなく起動
- [ ] 実装した機能が正しく動作
- [ ] コンソールエラーがゼロ
- [ ] ブラウザで正常に表示

### 既存機能
- [ ] 既存機能が壊れていない
- [ ] 前のPhaseの機能が動作
- [ ] 統合テストを実施

### ドキュメント
- [ ] 必要なコメントを追加
- [ ] README.mdを更新（必要なら）
- [ ] GitHubにコミット

### 環境設定
- [ ] .envファイルが正しい
- [ ] .env.exampleを更新
- [ ] 環境変数が一致している
```

---

## 🎓 学習リソース

Codexが生成したコードを理解するためのリソース：

- **TypeScript**: https://www.typescriptlang.org/docs
- **Express.js**: https://expressjs.com/
- **Next.js**: https://nextjs.org/docs
- **Socket.io**: https://socket.io/docs/v4/
- **Prisma**: https://www.prisma.io/docs

---

## 📞 サポート

Codexでの実装中に問題が発生したら、以下の情報と共にClaudeに質問してください：

```markdown
1. 現在のPhase番号
2. エラーメッセージ全文
3. 実装したコード
4. 試したこと
5. 環境情報
```

---

**Codexでの実装、頑張ってください！** 🚀

**段階的に、確実に進めていきましょう！** 🌟

---

**END OF DOCUMENT**
