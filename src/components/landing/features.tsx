import {
  Blocks,
  Cat,
  Check,
  Ellipsis,
  FileCode2,
  History,
  Keyboard,
  Monitor,
  Moon,
  MousePointer2,
  Pencil,
  Plus,
  Sparkles,
  Sun,
  Terminal,
  Users,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';
import SectionIntro from './section-intro';

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionIntro
          icon={Sparkles}
          label="它不止会回答"
          title={
            <>
              从定位文件到跑完检查，
              <br className="hidden sm:block" />
              整条链路都在你的项目里完成。
            </>
          }
        >
          Lane 把 agent 能力装进一个干净的外壳。你可以看着它思考，也可以在它需要授权时拦住它。
        </SectionIntro>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <article className="bento reveal p-6 sm:p-8 md:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <Terminal className="size-4 text-brand" aria-hidden="true" />
              真实项目，真实操作
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              在你的项目里动手
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
              读文件、改代码、执行命令。改动直接落在工作目录里，不是一段需要你复制粘贴的答案。
            </p>
            <DiffVisual />
          </article>

          <article className="bento bento-wash reveal p-6 sm:p-8 md:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <Zap className="size-4 text-brand" aria-hidden="true" />
              过程透明
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">每一步都看得见</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
              思考与工具调用按顺序展开，运行中自动打开，结束后收成一行。需要授权时，决定权在你。
            </p>
            <ActivityVisual />
          </article>

          <article className="bento reveal p-6 md:col-span-3">
            <LaptopIcon />
            <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink">
              桌面端，开箱即用
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              内置 agent 运行时与 agent-desktop 技能，不需要先装 Node、npm 或命令行工具。
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-semibold text-ink-soft">
              {['macOS', 'Windows', 'Linux'].map((platform) => (
                <span
                  key={platform}
                  className="rounded-md border border-line bg-surface-2 px-2 py-1"
                >
                  {platform}
                </span>
              ))}
            </div>
          </article>

          <article className="bento reveal p-6 md:col-span-3">
            <ThemeVisual />
            <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink">
              白天黑夜，跟着你
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-soft">
              浅色、深色或跟随系统。切换只改变外壳，不打断手上的任务。
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-semibold text-ink-soft">
              {['跟随系统', '浅色', '深色'].map((mode) => (
                <span key={mode} className="rounded-md border border-line bg-surface-2 px-2 py-1">
                  {mode}
                </span>
              ))}
            </div>
          </article>
        </div>

        <article className="bento reveal mt-4 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <Blocks className="size-4 text-brand" aria-hidden="true" />
              模型自由
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              自定义模型，想加几个加几个。
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-ink-soft">
              内置模型之外，还可以接入任意 OpenAI 兼容供应商。一个供应商下可以添加多个模型，
              保存后直接出现在模型选择器里，按项目随时切换。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
              {[
                'OpenAI 兼容接口，Provider / 模型 ID / Base URL 自己填',
                '一个供应商下可挂多个模型，编辑和删除互不影响',
                '配置写进项目，Key 存在本地服务',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ModelVisual />
        </article>

        <article className="bento reveal mt-4 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <Users className="size-4 text-brand" aria-hidden="true" />
              角色分工
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              换个角色，换个思路。
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-ink-soft">
              顶部角色选择器里，前端工程师、代码审查员、后端工程师、测试工程师、技术写手各有自己的提示词和关注点，切换后立刻换一种回答方式。没找到合适的？新增一个，填好名称、描述和提示词就能用。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
              {[
                '内置前端、后端、审查、测试、写作五种角色',
                '每个角色有自己的提示词与侧重点',
                '新增角色可单独指定模型，默认跟随当前模型',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <RoleVisual />
        </article>

        <article className="bento reveal mt-4 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <History className="size-4 text-brand" aria-hidden="true" />
              会话历史
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              每次回来，都接得上上次。
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-ink-soft">
              打开项目时自动回到最近的会话，左侧侧栏按目录列出历史。新建、切换、重命名、删除都在这里；
              会话标题取自你的第一条提问，一眼就能认出是哪件事。
            </p>
            <ul className="mt-5 space-y-2.5 text-sm leading-6 text-ink-soft">
              {[
                '点开历史会话即恢复消息、角色和待回答的问题',
                '悬停出现操作菜单，可重命名或删除，删除前再确认一次',
                '桌面端常驻可折叠，窄屏收进抽屉',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-1 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <SessionVisual />
        </article>

        <article className="bento reveal mt-4 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <MousePointer2 className="size-4 text-brand" aria-hidden="true" />
              操控你的电脑
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              不只写代码，也能操控桌面应用。
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-ink-soft">
              内置 agent-desktop，Lane
              能看见并操作你的电脑：点击按钮、填写表单、滚动页面、读取界面状态。
              它在你本机执行，辅助功能与屏幕录制权限由系统把关。
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-ink-soft sm:grid-cols-3">
              {[
                ['看见界面', '读取无障碍树'],
                ['点击与输入', '操作真实应用'],
                ['本机执行', '权限由你授予'],
              ].map(([title, detail]) => (
                <li
                  key={title}
                  className="rounded-xl border border-line bg-surface-2/70 px-3 py-2.5"
                >
                  <p className="flex items-center gap-1.5 font-semibold text-ink">
                    <Check className="size-3.5 text-ok" aria-hidden="true" />
                    {title}
                  </p>
                  <p className="mt-0.5 text-xs">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <DesktopControlVisual />
        </article>

        <article className="bento reveal mt-4 grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_240px] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-ink-soft">
              <Cat className="size-4 text-brand" aria-hidden="true" />
              你的智能小伙伴
            </div>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              它会陪你一起忙，也会替你着急。
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft">
              小猫还是小鹰，随你挑。发呆时它打哈欠，思考时转圈，读到文件时抱紧不放，跑命令时飞到一边，
              需要你授权时举起爪子等你。按住它，还能拖到屏幕的任何角落。
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {['发呆', '思考', '阅读', '执行', '等待授权', '出错'].map((state) => (
                <span
                  key={state}
                  className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-ink-soft"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

          <div className="group relative mx-auto w-full max-w-[240px]">
            <div className="overflow-hidden rounded-[28px] border border-line bg-[#f1f3f5] transition-transform duration-300 group-hover:-translate-y-1 dark:bg-[#0f1115]">
              <img
                src="/companions/cat-light.webp"
                alt="Lane 的小猫伙伴抱着文件工作"
                width={230}
                height={250}
                loading="lazy"
                decoding="async"
                className="block w-full transition-transform duration-500 group-hover:scale-[1.03] dark:hidden"
              />
              <img
                src="/companions/cat-dark.webp"
                alt="Lane 的小猫伙伴在深色主题下待命"
                width={230}
                height={250}
                loading="lazy"
                decoding="async"
                className="hidden w-full transition-transform duration-500 group-hover:scale-[1.03] dark:block"
              />
            </div>
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#0c1626]/90 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
              <span className="size-1.5 rounded-full bg-ok" />
              在线
            </span>
            <span className="absolute bottom-3 right-3 rounded-full border border-line bg-surface/90 px-2 py-1 text-[10px] font-semibold text-ink-soft backdrop-blur">
              按住拖动
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ModelVisual() {
  const rows = [
    { name: 'Mimo V2.6 Flash', id: 'mimo', custom: false, active: true },
    { name: 'DeepSeek Chat', id: 'custom-deepseek', custom: true, active: false },
    { name: 'Kimi K2', id: 'custom-kimi', custom: true, active: false },
    { name: 'Qwen3 Coder', id: 'custom-qwen', custom: true, active: false },
  ];

  return (
    <div className="rounded-2xl border border-line bg-surface-2/70 p-4">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft">
          <Blocks className="size-3.5 text-brand" aria-hidden="true" />
          模型选择
        </span>
        <span className="font-mono text-[10px] text-ink-soft/60">3 个自定义</span>
      </div>

      <div className="mt-3 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.id}
            className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs ${
              row.active
                ? 'border-brand/30 bg-accent/60 text-ink'
                : 'border-line bg-surface text-ink-soft'
            }`}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span
                className={`size-1.5 shrink-0 rounded-full ${row.active ? 'bg-ok' : 'bg-line'}`}
              />
              <span className="truncate">{row.name}</span>
              {row.custom && (
                <span className="shrink-0 rounded-full border border-brand/20 bg-brand/10 px-1.5 py-0.5 text-[9px] font-semibold text-brand">
                  自定义
                </span>
              )}
            </span>
            {row.active ? (
              <Check className="size-3.5 shrink-0 text-ok" aria-hidden="true" />
            ) : (
              <span className="shrink-0 font-mono text-[10px] text-ink-soft/60">{row.id}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-2 text-[11px] font-semibold text-ink-soft">
        <Plus className="size-3.5" aria-hidden="true" />
        添加自定义模型
      </div>
    </div>
  );
}

function RoleVisual() {
  const roles = [
    { name: '前端工程师', detail: 'React / 交互与样式', active: true },
    { name: '代码审查员', detail: '审查改动，只挑关键问题' },
    { name: '后端工程师', detail: '服务端 / API / 数据库' },
    { name: '测试工程师', detail: '测试用例、边界与回归' },
    { name: '技术写手', detail: '文档、README、说明' },
  ];

  return (
    <div className="rounded-2xl border border-line bg-surface-2/70 p-4">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft">
          <Users className="size-3.5 text-brand" aria-hidden="true" />
          角色选择
        </span>
        <span className="font-mono text-[10px] text-ink-soft/60">{roles.length} 个角色</span>
      </div>

      <div className="mt-3 space-y-1.5">
        {roles.map((role) => (
          <div
            key={role.name}
            className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs ${
              role.active
                ? 'border-brand/30 bg-accent/60 text-ink'
                : 'border-line bg-surface text-ink-soft'
            }`}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span
                className={`size-1.5 shrink-0 rounded-full ${role.active ? 'bg-ok' : 'bg-line'}`}
              />
              <span className="truncate">{role.name}</span>
            </span>
            <span className="shrink-0 text-[10px] text-ink-soft/70">{role.detail}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-2 text-[11px] font-semibold text-ink-soft">
        <Plus className="size-3.5" aria-hidden="true" />
        新增角色
      </div>
    </div>
  );
}

function SessionVisual() {
  const sessions = [
    { title: '把下载按钮换成品牌蓝', time: '刚刚', active: true },
    { title: '给活动列表加上耗时显示', time: '2 小时前' },
    { title: '接入会话历史侧栏', time: '昨天' },
    { title: '整理 README 的使用说明', time: '3 天前' },
  ];

  return (
    <div className="rounded-2xl border border-line bg-surface-2/70 p-4">
      <div className="flex items-center justify-between border-b border-line pb-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-soft">
          <History className="size-3.5 text-brand" aria-hidden="true" />
          历史会话
        </span>
        <span className="font-mono text-[10px] text-ink-soft/60">{sessions.length} 个</span>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-[11px] font-semibold text-ink">
        <Plus className="size-3.5" aria-hidden="true" />
        新会话
      </div>

      <div className="mt-3 space-y-1">
        {sessions.map((session) => (
          <div
            key={session.title}
            className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs ${
              session.active
                ? 'border-brand/30 bg-accent/60 text-ink'
                : 'border-line bg-surface text-ink-soft'
            }`}
          >
            <span className="flex min-w-0 items-center gap-2">
              <span
                className={`size-1.5 shrink-0 rounded-full ${session.active ? 'bg-ok' : 'bg-line'}`}
              />
              <span className="min-w-0">
                <span className="block truncate">{session.title}</span>
                <span className="block text-[10px] text-ink-soft/60">{session.time}</span>
              </span>
            </span>
            <Ellipsis className="size-3.5 shrink-0 text-ink-soft/60" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopControlVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-2/70 p-4">
      <div className="flex items-center gap-1.5 border-b border-line pb-2.5">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-ink-soft">Preview · 导出</span>
      </div>

      <div className="relative mt-4 space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2 text-xs">
          <span className="text-ink">导出为 PDF</span>
          <span className="rounded-md bg-brand px-2.5 py-1 text-[10px] font-bold text-white">
            导出
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2 text-xs">
          <span className="text-ink">文件名</span>
          <span className="font-mono text-ink-soft">Q3-report.pdf</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px] text-ink-soft">
          <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-1">
            <MousePointer2 className="size-3" aria-hidden="true" /> click
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-1">
            <Keyboard className="size-3" aria-hidden="true" /> type
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-2 py-1">
            <Monitor className="size-3" aria-hidden="true" /> read
          </span>
        </div>

        <MousePointer2
          className="absolute right-14 top-5 size-5 text-brand drop-shadow-[0_2px_4px_rgba(32,85,240,0.35)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function DiffVisual() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface-2/80 font-mono text-[11px] leading-6">
      <div className="flex items-center justify-between border-b border-line px-3 py-2 text-ink-soft">
        <span className="flex items-center gap-1.5">
          <FileCode2 className="size-3.5" aria-hidden="true" />
          DownloadSection.tsx
        </span>
        <span className="flex items-center gap-1 text-ok">
          <Check className="size-3" aria-hidden="true" /> +8 −8
        </span>
      </div>
      <div className="overflow-x-auto p-3">
        <p className="whitespace-pre text-ink-soft/80">
          {' '}
          &lt;DownloadButton className=
          <span className="text-destructive line-through decoration-destructive/60">
            &quot;bg-slate-900&quot;
          </span>
          <span className="text-ok">&quot;bg-[#2055f0]&quot;</span> /&gt;
        </p>
        <p className="whitespace-pre text-ink-soft/80">
          {' '}
          &lt;section className=
          <span className="text-destructive line-through decoration-destructive/60">
            &quot;gap-6&quot;
          </span>
          <span className="text-ok">&quot;gap-4 sm:gap-6&quot;</span> /&gt;
        </p>
      </div>
    </div>
  );
}

function ActivityVisual() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-surface p-2 text-xs">
      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 font-semibold text-ink">
        <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
          <Zap className="size-3" aria-hidden="true" />
        </span>
        已处理
        <span className="font-normal text-ink-soft">1 次思考 · 3 个工具</span>
        <Check className="ml-auto size-3.5 text-ok" aria-hidden="true" />
      </div>
      <div className="ml-4 border-l border-line pl-3">
        <Row
          icon={<Sparkles className="size-3" />}
          name="思考"
          detail="先定位按钮样式，再确认移动端断点"
        />
        <Row icon={<FileCode2 className="size-3" />} name="read" detail="DownloadSection.tsx" />
        <Row icon={<Pencil className="size-3" />} name="edit" detail="Updated 1 file. +8 −8" />
        <Row icon={<Terminal className="size-3" />} name="bash" detail="npm run check" />
      </div>
    </div>
  );
}

function Row({ icon, name, detail }: { icon: ReactNode; name: string; detail: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 text-ink-soft">
      <span className="text-ink-soft/70">{icon}</span>
      <span className="font-mono text-[11px] text-ink">{name}</span>
      <span className="truncate">{detail}</span>
      <Check className="ml-auto size-3 shrink-0 text-ok" aria-hidden="true" />
    </div>
  );
}

function ThemeVisual() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="grid size-9 place-items-center rounded-full border border-line bg-surface-2 text-ink-soft">
        <Sun className="size-4" />
      </span>
      <span className="h-px w-4 bg-line" />
      <span className="grid size-9 place-items-center rounded-full border border-line bg-[#0c1626] text-[#f2f6ff]">
        <Moon className="size-4" />
      </span>
    </div>
  );
}

function LaptopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-brand" aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
