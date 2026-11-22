import { Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 进入视口才播放：首屏不下载整段视频，偏好减少动效时保持静止。
  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <figure className="reveal">
          <div className="shot-frame overflow-hidden">
            <video
              ref={videoRef}
              src="/shots/lane-demo.mp4"
              poster="/shots/lane-demo-poster.webp"
              width={1920}
              height={1080}
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Lane 在几步内完成一次任务：思考、grep、read、修改并检查"
              className="block w-full"
            />
          </div>
          <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <Play className="size-3.5" aria-hidden="true" />
              13 秒 · 从一句提问到改完检查
            </span>
            <span className="font-mono">Lane · 动手、改文件、换模型</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
