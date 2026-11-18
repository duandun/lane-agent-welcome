import { NAV } from './header';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <img src="/brand/lane-mark.svg" alt="" width={26} height={26} className="size-6.5" />
          <div>
            <p className="text-sm font-extrabold text-ink">Lane</p>
            <p className="text-xs text-ink-soft">跑在你项目目录里的 AI agent。</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-xs font-semibold text-ink-soft">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
          <span className="text-ink-soft/60">© {new Date().getFullYear()} Lane</span>
        </nav>
      </div>
    </footer>
  );
}
