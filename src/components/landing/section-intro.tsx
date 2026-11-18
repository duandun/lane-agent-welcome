import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export default function SectionIntro({
  icon: Icon,
  label,
  title,
  children,
}: {
  icon: LucideIcon;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="reveal max-w-2xl">
      <p className="mb-3 flex items-center gap-2 text-sm font-bold text-brand">
        <Icon className="size-4" aria-hidden="true" />
        {label}
      </p>
      <h2 className="text-balance text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-[2.6rem] sm:leading-[1.12]">
        {title}
      </h2>
      {children && <p className="mt-4 text-pretty leading-7 text-ink-soft">{children}</p>}
    </div>
  );
}
