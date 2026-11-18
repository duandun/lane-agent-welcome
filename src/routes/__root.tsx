import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

import appCss from '../styles.css?url';

import type { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
  queryClient: QueryClient;
}

const themeScript = `(function(){try{var s=localStorage.getItem('lane-theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';var m=document.querySelector('meta[name="color-scheme"]');if(m)m.setAttribute('content',d?'dark':'light');}catch(e){}})()`;

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'color-scheme',
        content: 'light dark',
      },
      {
        title: 'Lane · 会动手的本地 AI Agent',
      },
      {
        name: 'description',
        content:
          'Lane 是跑在你项目目录里的 AI agent。读代码、改文件、执行命令，支持 macOS、Windows、Linux 与 Web。',
      },
      {
        property: 'og:title',
        content: 'Lane · 会动手的本地 AI Agent',
      },
      {
        property: 'og:description',
        content:
          '在你自己的项目目录里读代码、改文件、跑命令。桌面端开箱即用，也可以连接自己的本地 agent 服务。',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
    scripts: [{ children: themeScript }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
