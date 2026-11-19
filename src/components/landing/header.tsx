import { ArrowRight } from 'lucide-react';
import { track } from '@vercel/analytics';
import ThemeToggle from './theme-toggle';

export const NAV = [
  { href: '#features', label: '功能' },
  { href: '#workflow', label: '怎么用' },
  { href: '#gallery', label: '界面' },
  { href: '#downloads', label: '下载' },
];

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-line backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-ink no-underline">
          <img src="/brand/lane-mark.svg" alt="" width={30} height={30} className="size-7.5" />
          <span className="text-[17px] font-extrabold tracking-tight">Lane</span>
          <span className="hidden rounded-full border border-line px-2 py-0.5 text-[10px] font-semibold tracking-wide text-ink-soft sm:inline">
            lane-agent
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-soft md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
              onClick={() => track('nav_click', { target: item.label })}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          <a
            href="#downloads"
            className="btn btn-primary hidden h-9 px-4 text-xs sm:inline-flex"
            onClick={() => track('cta_click', { target: 'header_download' })}
          >
            下载
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
