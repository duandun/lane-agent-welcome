import { Check, FolderOpen } from 'lucide-react';
import type { ReactNode } from 'react';
import SectionIntro from './section-intro';

export default function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionIntro
          icon={FolderOpen}
          label="一次任务的完整路径"
          title="连接，描述，然后看它完成。"
        >
          不需要新的工作流。Lane 接着你已有的项目、命令和模型，把 agent 放进你本来就在做的事情里。
        </SectionIntro>

        <div className="lane-section relative mt-14">
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[120px] w-full md:block"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="lane-path"
              pathLength={1}
              d="M 10 26 H 1190"
              stroke="var(--brand)"
              strokeOpacity="0.32"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="absolute bottom-6 left-[25px] top-6 w-px bg-line md:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-6 md:grid-cols-3 md:gap-5">
            <Step
              n="01"
              title="连接项目"
              body="把 Lane 指向你的项目目录。桌面端自动拉起本地服务；Web 端连接你自己运行的本地服务。"
            >
              <div className="rounded-xl border border-line bg-surface-2/80 p-3 font-mono text-[11px] text-ink-soft">
                <p className="flex items-center gap-1.5 text-ink">
                  <FolderOpen className="size-3.5 text-brand" aria-hidden="true" />
                  /Users/you/project
                </p>
                <p className="mt-2 text-ink-soft/80">访问密码 = ••••</p>
                <p className="text-ink-soft/80">本地服务 · 端口 4096</p>
              </div>
            </Step>

            <Step
              n="02"
              title="说清楚要做什么"
              body="用自然语言描述任务，也可以带上 skill 或附件。Lane 会回到当前目录最近的会话，也可以随时新建一个，接着上下文开始工作。"
            >
              <div className="rounded-xl border border-line bg-surface-2/80 p-3 text-xs leading-6 text-ink">
                把下载按钮换成品牌蓝，移动端间距也收一下，改完跑一遍检查。
              </div>
            </Step>

            <Step
              n="03"
              title="看着它完成"
              body="思考与工具调用实时出现。需要授权时由你决定；结束时用服务端真值对齐整段对话。"
            >
              <div className="flex items-center justify-between rounded-xl border border-line bg-surface-2/80 px-3 py-2.5 text-xs">
                <span className="flex items-center gap-1.5 text-ink-soft">
                  <Check className="size-3.5 text-ok" aria-hidden="true" />3 个工具 · 1 次检查
                </span>
                <span className="font-mono text-[10px] text-ok">done</span>
              </div>
            </Step>
          </ol>
        </div>

        <figure className="reveal mt-16 grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <figcaption>
            <p className="flex items-center gap-2 text-sm font-bold text-brand">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-ok/40" />
                <span className="relative inline-flex size-2 rounded-full bg-ok" />
              </span>
              运行中
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              你看到的，就是它正在做的。
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
              思考、工具调用和等待授权按发生顺序展开。输入框会进入运行态，桌面端的小伙伴也会跟着换动作。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
              {[
                '流式输出，思考与工具调用即时出现',
                '需要授权时自动暂停，由你决定下一步',
                '运行结束后用服务端真值对齐整段对话',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </figcaption>

          <div>
            <div className="shot-frame">
              <img
                src="/shots/app-running.webp"
                alt="Lane 桌面端运行中：思考、编辑文件和执行 npm run check 的活动列表"
                width={1600}
                height={999}
                loading="lazy"
                decoding="async"
                className="block w-full"
              />
            </div>
            <p className="mt-3 flex items-center gap-2 px-1 text-xs text-ink-soft">
              <span className="size-1.5 rounded-full bg-ok" />
              运行中 · 活动卡片自动展开，执行完自动收起
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  children,
}: {
  n: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <li className="reveal relative pl-16 md:pl-0">
      <span className="absolute left-0 top-0 grid size-[52px] place-items-center rounded-full border border-line bg-surface font-display text-lg font-bold text-brand md:static md:mb-5">
        {n}
      </span>
      <h3 className="text-xl font-extrabold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 min-h-[72px] text-sm leading-6 text-ink-soft">{body}</p>
      <div className="mt-4">{children}</div>
    </li>
  );
}
