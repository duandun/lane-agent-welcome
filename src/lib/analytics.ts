type HmtCommand = [string, ...unknown[]];

declare global {
  interface Window {
    _hmt?: HmtCommand[];
  }
}

/** 百度统计事件上报；脚本未加载时先进入 _hmt 队列。 */
export function trackEvent(category: string, action: string, label?: string) {
  if (typeof window === 'undefined') return;
  window._hmt = window._hmt ?? [];
  window._hmt.push(['_trackEvent', category, action, label]);
}
