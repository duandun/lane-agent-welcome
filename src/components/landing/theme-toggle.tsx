import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Mode = 'system' | 'light' | 'dark';

const OPTIONS: { value: Mode; label: string; icon: LucideIcon }[] = [
  { value: 'system', label: '跟随系统', icon: Monitor },
  { value: 'light', label: '浅色', icon: Sun },
  { value: 'dark', label: '深色', icon: Moon },
];

function apply(mode: Mode) {
  const dark =
    mode === 'dark' ||
    (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const root = document.documentElement;
  root.classList.toggle('dark', dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
  document
    .querySelector('meta[name="color-scheme"]')
    ?.setAttribute('content', dark ? 'dark' : 'light');
  try {
    if (mode === 'system') localStorage.removeItem('lane-theme');
    else localStorage.setItem('lane-theme', mode);
  } catch {
    // 存不了也不影响本次切换。
  }
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('system');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 首屏主题由 head 里的脚本应用；这里只同步菜单的显示值。
  useEffect(() => {
    let stored: Mode = 'system';
    try {
      const value = localStorage.getItem('lane-theme');
      if (value === 'light' || value === 'dark') stored = value;
    } catch {
      // 读不到时按跟随系统处理。
    }
    setMode(stored);
    apply(stored);
  }, []);

  // 选择“跟随系统”时，系统主题变化要实时跟上。
  useEffect(() => {
    if (mode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => apply('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode]);

  // 点外面或按 Escape 关闭。
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // 打开时把焦点放到当前选项上，方便键盘操作。
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus();
  }, [open]);

  function pick(next: Mode) {
    setMode(next);
    apply(next);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onMenuKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const items = [...(menuRef.current?.querySelectorAll('button') ?? [])];
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    const next =
      event.key === 'ArrowDown'
        ? (index + 1) % items.length
        : (index - 1 + items.length) % items.length;
    items[next]?.focus();
  }

  const CurrentIcon = OPTIONS.find((option) => option.value === mode)?.icon ?? Monitor;

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="cursor-pointer inline-flex h-10 items-center gap-2 pl-3 pr-2.5 text-xs font-semibold text-ink-soft hover:border-brand/30 hover:text-ink"
      >
        <CurrentIcon className="size-3.5" aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="主题模式"
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-40 animate-in rounded-xl border border-line bg-popover p-1.5 text-popover-foreground shadow-xl shadow-black/10 backdrop-blur duration-150 fade-in-0 zoom-in-95 slide-in-from-top-1 motion-reduce:animate-none"
        >
          {OPTIONS.map((option) => {
            const Icon = option.icon;
            const selected = option.value === mode;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => pick(option.value)}
                className={`cursor-pointer flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-semibold transition-colors focus-visible:outline-none ${
                  selected
                    ? 'bg-accent text-accent-foreground'
                    : 'text-ink-soft hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
                }`}
              >
                <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="flex-1">{option.label}</span>
                {selected && <Check className="size-3.5 shrink-0" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
