import { Check, Globe, Moon, Sun } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 border-t border-line bg-surface-2/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-sm font-bold text-brand">
              <Moon className="size-4" aria-hidden="true" />
              同一个 Lane，两种光线
            </p>
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-[2.6rem] sm:leading-[1.12]">
              白天看得清，夜里不刺眼。
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink-soft">
            桌面端、Web 端共用一套界面。主题可以跟随系统，也可以在右上角手动切换。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <figure className="reveal">
            <div className="shot-frame">
              <img
                src="/shots/app-light.webp"
                alt="Lane 桌面端浅色主题：欢迎页与快捷任务"
                width={1600}
                height={999}
                loading="lazy"
                className="block w-full"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 px-1 text-xs text-ink-soft">
              <Sun className="size-3.5" aria-hidden="true" /> 浅色 · 桌面端
            </figcaption>
          </figure>

          <figure className="reveal">
            <div className="shot-frame">
              <img
                src="/shots/app-dark.webp"
                alt="Lane 桌面端深色主题：欢迎页与快捷任务"
                width={1600}
                height={999}
                loading="lazy"
                className="block w-full"
              />
            </div>
            <figcaption className="mt-3 flex items-center gap-2 px-1 text-xs text-ink-soft">
              <Moon className="size-3.5" aria-hidden="true" /> 深色 · 桌面端
            </figcaption>
          </figure>
        </div>

        <div className="reveal mt-10 grid items-center gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold text-brand">
              <Globe className="size-3.5" aria-hidden="true" />
              Web 端 / 远程连接
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              也可以连接你自己的服务。
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
              打开网页版，填入服务地址、访问密码和项目目录。桌面端会把地址和密码自动填好。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
              {[
                '密码由你在启动本地服务时设置',
                '远程访问时，放行当前页面的域名',
                '服务跑在哪台机器，agent 就在哪台机器执行',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <figure className="mx-auto w-full max-w-[360px]">
            <ConnectVisual />
            <figcaption className="mt-3 flex items-center gap-2 px-1 text-xs text-ink-soft">
              <Globe className="size-3.5" aria-hidden="true" />
              连接项目 · 地址、密码与工作目录
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ConnectVisual() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_24px_60px_-32px_rgba(12,22,38,0.3)]">
      <div className="flex items-center gap-2.5">
        <img src="/brand/lane-mark.svg" alt="" width={32} height={32} className="size-8" />
        <div>
          <p className="text-sm font-extrabold text-ink">Lane</p>
          <p className="text-[11px] text-ink-soft">连接一个项目</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-xs">
        <Field label="服务地址" value="http://127.0.0.1:4096" mono />
        <Field label="访问密码" value="••••••••" mono />
        <Field label="项目目录" value="/Users/you/project" mono />
        <div className="grid h-9 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
          连接
        </div>
      </div>

      <p className="mt-3 text-[11px] leading-5 text-ink-soft">
        agent 会在这个目录里读写文件、执行命令。
      </p>
    </div>
  );
}

function Field({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="mb-1 font-semibold text-ink-soft">{label}</p>
      <p
        className={`rounded-lg border border-line bg-surface-2/70 px-3 py-2 text-ink ${
          mono ? 'font-mono' : ''
        }`}
      >
        {value}
      </p>
    </div>
  );
}
