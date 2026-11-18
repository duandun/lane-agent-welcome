import { ArrowRight, Blocks, ShieldCheck, Terminal, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-clip">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{
          background:
            'radial-gradient(640px 320px at 50% 0%, var(--glow), transparent 72%), radial-gradient(420px 260px at 82% 18%, var(--glow-2), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-ink-soft backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-ok/40" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            跑在你本机项目里的 AI agent
          </div>

          <h1 className="text-balance text-[clamp(2.6rem,7.2vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink">
            把任务写出来，
            <br />让 Lane 动手做。
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            它会读代码、改文件、执行命令——不是给你一段建议，而是在你的项目目录里把事做完。
            过程、授权和结果，都留在你能看见的地方。
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#downloads" className="btn btn-primary">
              下载 Lane
              <ArrowRight className="size-4" />
            </a>
            <a href="#features" className="btn btn-ghost">
              看看它能做什么
            </a>
          </div>

          <p className="mt-5 font-mono text-[11px] tracking-wide text-ink-soft/80">
            macOS · Windows · Linux · Web
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          <div
            className="pointer-events-none absolute -inset-x-8 -top-8 bottom-10 rounded-[40px] opacity-70 blur-3xl"
            style={{
              background: 'radial-gradient(50% 55% at 50% 45%, var(--glow), transparent 75%)',
            }}
            aria-hidden="true"
          />
          <figure className="shot-rise relative">
            <div className="shot-frame">
              <img
                src="/shots/app-chat-light.webp"
                alt="Lane 桌面端界面：用户让 Lane 修改下载按钮颜色，Lane 思考、读取文件、编辑并给出结果"
                width={1280}
                height={799}
                fetchPriority="high"
                className="block w-full dark:hidden"
              />
              <img
                src="/shots/app-chat-dark.webp"
                alt="Lane 桌面端深色界面：一次完整的任务执行与结果"
                width={1280}
                height={799}
                loading="lazy"
                decoding="async"
                className="hidden w-full dark:block"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-ink-soft">
              <span>真实桌面端 · 一次完整的任务执行</span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <span className="size-1.5 rounded-full bg-ok" />
                本地服务 · 已连接
              </span>
            </div>
          </figure>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 text-sm sm:mt-14 sm:grid-cols-4">
          {[
            { icon: ShieldCheck, label: '代码留在本机' },
            { icon: Terminal, label: '自带运行时' },
            { icon: Zap, label: '工具调用可见' },
            { icon: Blocks, label: '模型自由切换' },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-3 py-2.5 text-center font-semibold text-ink-soft"
            >
              <Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
