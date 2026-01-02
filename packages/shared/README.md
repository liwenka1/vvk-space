# @vvk/shared

共享配置和个人信息包，供所有应用使用。

## 使用方式

```typescript
// 导入个人信息
import { profile } from "@vvk/shared/profile";

// 导入站点配置
import { SITE_CONFIG } from "@vvk/shared/constants";

// 导入类型
import type { Profile, SiteConfig } from "@vvk/shared/types";
```

## 包含内容

- **profile.ts** - 个人信息（姓名、简介、社交链接等）
- **constants.ts** - 站点配置和通用常量
- **types.ts** - TypeScript 类型定义

## 修改个人信息

只需修改 `src/profile.ts` 和 `src/constants.ts`，所有应用会自动同步更新。
