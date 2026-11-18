import { ArrowRight, ArrowUpRight, Globe, Terminal } from 'lucide-react';
import type { ReactNode } from 'react';

const PLATFORMS: {
  name: string;
  meta: string;
  note: string;
  href: string;
  size: string;
  external?: boolean;
  icon: ReactNode;
}[] = [
  {
    name: 'macOS',
    meta: 'Apple Silicon · dmg',
    note: 'macOS 12+',
    href: '/app-release/Lane-agent-0.1.0-arm64.dmg',
    size: '245 MB',
    icon: <AppleIcon />,
  },
  {
    name: 'Windows',
    meta: 'x64 · zip 压缩包',
    note: 'Windows 10+',
    href: '/app-release/lane-agent-win.zip',
    size: '299 MB',
    icon: <WindowsIcon />,
  },
  {
    name: 'Linux',
    meta: 'x64 · zip 压缩包',
    note: 'X11 / Wayland',
    href: '/app-release/lane-agent-linux.zip',
    size: '263 MB',
    icon: <Terminal className="size-5" aria-hidden="true" />,
  },
  {
    name: 'Web',
    meta: '浏览器直接打开',
    note: '连接你的本地服务',
    href: 'https://ai.cr123.life',
    size: '在线',
    external: true,
    icon: <Globe className="size-5" aria-hidden="true" />,
  },
];

export function Downloads() {
  return (
    <section id="downloads" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold text-brand">
            <ArrowRight className="size-4" aria-hidden="true" />
            下载 Lane
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-[2.6rem] sm:leading-[1.12]">
            在你的电脑上跑起来。
          </h2>
          <p className="mt-4 text-pretty leading-7 text-ink-soft">
            选一个平台。桌面端已经内置 agent 运行时与 agent-desktop 技能，装好就能把任务交给它。
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              download={platform.external ? undefined : true}
              target={platform.external ? '_blank' : undefined}
              rel={platform.external ? 'noreferrer' : undefined}
              className="platform-card reveal group flex flex-col p-4 no-underline"
            >
              <span className="text-brand">{platform.icon}</span>
              <span className="mt-3 text-base font-extrabold text-ink">{platform.name}</span>
              <span className="mt-0.5 text-[11px] text-ink-soft">{platform.meta}</span>
              <span className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[10px] text-ink-soft">
                {platform.note}
                <span className="flex items-center gap-1.5">
                  <span className="font-mono text-ink-soft/60">{platform.size}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface-2 px-2 py-1 font-sans font-semibold text-ink-soft transition-colors group-hover:border-brand/30 group-hover:text-brand">
                    {platform.external ? '打开' : '下载'}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-surface-2/70 px-5 py-4 text-xs leading-6 text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            macOS 与 Windows 安装包未做代码签名。首次打开若被系统拦截，请右键 → 打开。
            下载包较大，请留出足够的磁盘空间。
          </p>
          <p className="shrink-0 font-mono text-[11px]">v0.1.0 · 桌面端内置运行时</p>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="reveal relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1426] px-6 py-12 text-center text-white sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(560px 300px at 50% -20%, rgba(74,147,255,.5), transparent 70%), radial-gradient(420px 240px at 90% 120%, rgba(11,33,184,.55), transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              把第一个任务交给 Lane。
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
              下载桌面端，或者打开网页版。它不会替你写一段泛泛的建议，它会直接在你的项目里动手。
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#downloads" className="btn bg-white text-[#0c1626] hover:bg-white/90">
                下载 Lane
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#features"
                className="btn border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                再看一眼功能
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M16.6 12.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.4 1.1-2.5-.1 0-2.3-.9-2.3-3.4ZM14.5 6.5c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M3 4.6 10.4 3.6v7.6H3V4.6Zm8.7-1.1L21 2v9.2h-9.3V3.5ZM3 12.4h7.4v7.6L3 19V12.4Zm8.7 0H21V22l-9.3-1.3v-8.3Z" />
    </svg>
  );
}
