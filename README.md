# GDG SYNCS Frontend Round 1 - UI Replication

## 中文简介

这是 GDG SYNCS 前端挑战赛 Round 1 的提交项目。目标是在限定时间内，根据提供的设计资料与资源文件，完成一个可部署的前端页面复刻作品，并保证核心交互与页面结构可在浏览器中正常运行。

本项目采用原生 `HTML + CSS + JavaScript` 实现，适合直接导入 Vercel 进行静态部署。入口文件为 `index.html`。

## English Overview

This repository contains a submission for **Round 1 of the GDG SYNCS frontend challenge**. The brief focused on recreating a provided interface within a limited time window while preserving the required layout, assets, and front-end interactions.

The project is built with **HTML, CSS, and JavaScript** and is ready for static deployment on Vercel. The main entry file is `index.html`.

## 中文功能概览

- 多段式页面结构与滚动导航
- 首屏聚光灯式进入效果
- Landing section 视觉复刻
- 可拖拽元素与悬停交互
- 跟随鼠标的装饰性眼睛效果
- 模拟手机界面的打字动画

## Feature Highlights

- Multi-section front-end layout
- Intro spotlight interaction
- Landing section replication
- Hover and drag-based interactions
- Cursor-following decorative eye effect
- Typing animation inside the phone interface

## 技术栈 / Tech Stack

- HTML
- CSS
- JavaScript
- GitHub
- Vercel

## 仓库结构 / Repository Structure

```text
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── envelope.png
│   ├── phone.jpg
│   └── fonts/
├── 项目说明.md
└── docs/
    ├── highlights.md
    └── 交付说明.md
```

## 本地预览 / Local Preview

```bash
python -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173
```

## 部署说明 / Deployment

This repository is structured for direct static deployment on Vercel. Import the repository and keep the default static settings.