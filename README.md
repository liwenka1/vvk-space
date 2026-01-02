# vvk-space

基于 Next.js 的 Monorepo 个人站点集合

## 项目结构

```
vvk-space/
├── apps/
│   ├── website/      # 个人主站 (端口: 3000)
│   ├── portfolio/    # 作品集 (端口: 3001)
│   └── weekly/       # 技术周刊 (端口: 3002)
├── packages/
│   ├── shared/             # 共享配置和个人信息
│   ├── eslint-config/      # 共享 ESLint 配置
│   └── typescript-config/  # 共享 TypeScript 配置
```

## 技术栈

- **框架**: Next.js 16 + React 19
- **样式**: Tailwind CSS 4
- **包管理**: pnpm workspace
- **构建工具**: Turborepo 2.7
- **代码检查**: ESLint 9 (扁平配置)
- **代码格式化**: Prettier 3.4
- **语言**: TypeScript 5

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动所有应用
pnpm dev

# 构建所有应用
pnpm build
```

## 可用命令

```bash
# 开发
pnpm dev              # 启动所有应用

# 构建
pnpm build            # 构建所有应用

# 代码质量
pnpm lint             # ESLint 检查
pnpm typecheck        # TypeScript 类型检查
pnpm format           # 格式化代码
pnpm format:check     # 检查代码格式

# 清理
pnpm clean            # 清理所有构建产物
```

## 单独运行应用

```bash
# 个人主站
cd apps/website && pnpm dev

# 作品集
cd apps/portfolio && pnpm dev

# 技术周刊
cd apps/weekly && pnpm dev
```

## 共享配置管理

所有个人信息和站点配置都集中在 `packages/shared` 中：

### 修改个人信息

编辑 `packages/shared/src/profile.ts`：

```typescript
export const profile: Profile = {
  name: "Your Name",
  nickname: "VVK",
  title: "Full Stack Developer",
  bio: "热爱技术，专注于 Web 开发和用户体验",
  email: "your.email@example.com",
  social: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername" }
  ]
};
```

### 修改站点配置

编辑 `packages/shared/src/constants.ts`：

```typescript
export const SITE_CONFIG = {
  website: {
    name: "VVK Space",
    description: "个人主站描述",
    url: "https://vvk.space"
  }
  // ... 其他站点配置
};
```

### 在应用中使用

```typescript
// 导入个人信息
import { profile } from "@vvk/shared/profile";

// 导入站点配置
import { SITE_CONFIG } from "@vvk/shared/constants";

// 使用
console.log(profile.name); // Your Name
console.log(SITE_CONFIG.website.name); // VVK Space
```

修改一次，三个站点自动同步更新！
