# Wbit 详情页修改入口

网站里的 Wbit 详情页不是普通作品模板，也不是一张长图。它是一个独立静态案例页，通过 iframe 挂到个人网站的作品详情页里。

## 网站访问地址

```txt
http://127.0.0.1:3000/work/wbit-ai-platform
```

## 网站承载入口

```txt
src/components/ui/WbitCaseFrame.tsx
```

这个文件只负责把 Wbit 独立详情页嵌进网站，并处理 iframe 高度。

## Wbit 页面内容

```txt
public/wbit-case-study/index.html
```

改文案、模块顺序、页面结构、图片引用，改这里。

## Wbit 页面样式

```txt
public/wbit-case-study/styles.css
```

改配色、间距、字号、圆角、布局、响应式，改这里。

## Wbit 图片素材

```txt
public/wbit-case-study/assets/
```

替换首页电脑图、页面展示图、数字人头像，放这里。

## 原始独立源文件

```txt
/Users/weijinshan/Desktop/wbit-case-study/
```

如果先在独立页面里改，改完后把 `index.html`、`styles.css`、`assets/` 同步到网站的 `public/wbit-case-study/`。

## 其他作品详情

其他作品仍然走普通模板：

```txt
src/app/work/[slug]/page.tsx
src/data/works.ts
```

Wbit 在 `page.tsx` 里有特殊分支：`work.slug === "wbit-ai-platform"`。
