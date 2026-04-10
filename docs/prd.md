# Wholesalify 官网完整实施方案
B2B Wholesale Ordering SaaS

目标

- 建立 Wholesalify 官方网站
- SEO 友好
- 收集 Early Access / Trial 用户
- 快速上线
- 部署到 Vercel
- 后续可扩展营销与博客

---

# 一、产品定位

产品名称  
Wholesalify

产品类型  
B2B Wholesale Ordering SaaS

核心功能

1 批发订货商城  
客户在线下单（不支付）

2 批发订单管理  
管理所有客户订单

3 库存管理  
实时库存与库存提醒

4 采购管理  
创建采购订单管理供应商

5 批发客户管理  
客户账号 / 客户订单

6 管理后台  
Web Admin + Mobile App

目标用户

- 批发商
- 贸易公司
- 分销商
- 食品批发
- 建材批发
- FMCG 批发

---

# 二、官网核心目标

官网核心目标只有三个

1 获取潜在客户 Email  
2 展示产品价值  
3 获取 SEO 流量

转化路径

Visitor  
↓  
Landing Page  
↓  
Request Early Access  
↓  
Email Capture  
↓  
Founder Contact

---

# 三、技术架构（推荐）

Frontend

- Next.js 14
- React
- TypeScript

UI

- TailwindCSS
- shadcn/ui

Backend

- Next.js API Route

Email

- Resend

Analytics

- Vercel Analytics

SEO

- Next.js Metadata API
- next-sitemap
- schema.org

部署

- Vercel

域名

- 腾讯云

架构流程

User  
↓  
Landing Page  
↓  
Submit Email  
↓  
Next.js API  
↓  
Resend  
↓  
Send Email To Founder

优势

- 无服务器
- 运维成本接近 0
- SEO 极佳
- 全球 CDN
- 扩展容易

---

# 四、网站页面结构

网站结构

/
Landing Page

/features
产品功能

/pricing
价格（暂不实现）

/blog
SEO 内容

/about
关于产品

/contact
联系

/privacy
隐私政策

/terms
服务条款

---

# 五、Landing Page 结构

高转化 SaaS Landing Page

---

## Hero Section

标题

Wholesalify  
Modern B2B Wholesale Ordering Platform

副标题

Manage wholesale orders, inventory, and purchasing in one simple system.

CTA

Request Early Access

UI

[ Enter your email ] [ Request Access ]

辅助文案

Join the early access list.

---

## Problem Section

标题

Wholesale businesses still manage orders manually.

问题

- Orders through WhatsApp
- Manual spreadsheets
- Inventory mistakes
- Slow purchasing workflows

---

## Solution Section

标题

Wholesalify simplifies wholesale operations.

---

### Wholesale Ordering Portal

Customers place wholesale orders online.

功能

- B2B catalog
- Bulk ordering
- Customer accounts
- Order history

---

### Order Management

Manage all orders in one dashboard.

功能

- Order tracking
- Status updates
- Customer records

---

### Inventory Management

Real‑time inventory tracking.

功能

- Inventory levels
- Low stock alerts
- Stock reports

---

### Purchasing Management

Manage suppliers and purchase orders.

功能

- Purchase orders
- Supplier tracking
- Stock replenishment

---

### Admin Dashboard

Complete wholesale management.

功能

- Orders overview
- Inventory insights
- Customer analytics

---

### Mobile Admin

Manage business anywhere.

- iOS
- Android

---

## Product Preview

展示

Dashboard Screenshot

模块

- Orders
- Inventory
- Purchasing
- Customers

---

## CTA Section

Start using Wholesalify

[ Enter email ]  
[ Request Early Access ]

---

## Footer

Product

Features

About  
Contact

Legal

Privacy  
Terms

---

# 六、SEO 方案

核心关键词

Primary Keywords

- B2B wholesale ordering system
- wholesale ordering software
- B2B ordering platform
- wholesale inventory management software

Secondary Keywords

- wholesale order management
- B2B wholesale marketplace software
- wholesale distribution software

---

Meta Title

Wholesalify – B2B Wholesale Ordering Platform

Meta Description

Wholesalify helps wholesalers manage orders, inventory and purchasing in one platform. Modern B2B ordering system for distributors.

---

OpenGraph

og:title  
Wholesalify Wholesale Platform

og:description  
Modern B2B ordering system for wholesalers.

og:image  
/og-image.png

---

Schema.org

SoftwareApplication

字段

name  
applicationCategory  
operatingSystem  
offers

---

Sitemap

自动生成

工具

next-sitemap

---

# 七、Email 收集方案

推荐

Resend + Next.js API

优点

- 极简
- 无数据库
- 稳定
- 免费额度高

流程

User submit email  
↓  
POST /api/waitlist  
↓  
Next.js API  
↓  
Resend  
↓  
邮件发送给 Founder

---

# 八、API 设计

API

/api/waitlist

Method

POST

Request

```
{
  "email": "user@email.com"
}
```

Response

```
{
  "success": true
}
```

---

# 九、Next.js API 示例

路径

app/api/waitlist/route.ts

代码

```
import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  const body = await req.json()

  const email = body.email

  if (!email) {
    return NextResponse.json(
      { error: "Email required" },
      { status: 400 }
    )
  }

  try {

    await resend.emails.send({
      from: "Wholesalify <onboarding@resend.dev>",
      to: "your@email.com",
      subject: "New Wholesalify Early Access Request",
      html: `
        <h2>New Early Access Request</h2>
        <p>Email: ${email}</p>
      `
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    )

  }

}
```

---

# 十、Email Form UI

组件

components/email-form.tsx

代码

```
"use client"

import { useState } from "react"

export default function EmailForm() {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function submit() {

    if (!email) return

    setLoading(true)

    await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    })

    setLoading(false)

    alert("Thanks! We'll contact you soon.")
  }

  return (

    <div className="flex gap-3">

      <input
        type="email"
        placeholder="Enter your email"
        className="border rounded-lg px-4 py-3 w-72"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Submitting..." : "Request Access"}
      </button>

    </div>

  )
}
```

---

# 十一、Next.js 项目结构

```
wholesalify-site

app
  page.tsx
  features/page.tsx
  pricing/page.tsx
  about/page.tsx
  contact/page.tsx

  api
    waitlist
      route.ts

components
  hero.tsx
  features.tsx
  email-form.tsx
  footer.tsx
  navbar.tsx

lib
  resend.ts

public
  og-image.png
  logo.svg

styles
  globals.css
```