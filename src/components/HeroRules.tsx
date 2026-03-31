"use client";

import { useEffect, useState, useCallback, useRef, type RefObject } from "react";

export interface Zone {
  ref: RefObject<HTMLElement | null>;
  label: string;
  color: string;
  /** Border width in px. Defaults to 2 for first zone, 1 for the rest. */
  borderWidth?: number;
}

interface HeroRulesProps {
  zones: Zone[];
  /** Toggle visibility. Defaults to true in dev, false in production. */
  visible?: boolean;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function HeroRules({ zones, visible }: HeroRulesProps) {
  const isVisible = visible ?? process.env.NODE_ENV === "development";
  const containerRef = useRef<HTMLDivElement>(null);
  const [rects, setRects] = useState<(Rect | null)[]>([]);
  const [show, setShow] = useState(false);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get the overlay container's position so we can make all rects relative to it
    const parentRect = container.offsetParent
      ? (container.offsetParent as HTMLElement).getBoundingClientRect()
      : { top: 0, left: 0 };

    const next = zones.map(({ ref }) => {
      const el = ref.current;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top: r.top - parentRect.top,
        left: r.left - parentRect.left,
        width: r.width,
        height: r.height,
      };
    });
    setRects(next);
  }, [zones]);

  useEffect(() => {
    if (!isVisible) return;

    const raf = requestAnimationFrame(() => {
      measure();
      setShow(true);
    });

    let timer: ReturnType<typeof setTimeout>;
    const debouncedMeasure = () => {
      clearTimeout(timer);
      timer = setTimeout(measure, 60);
    };

    const ro = new ResizeObserver(debouncedMeasure);
    zones.forEach(({ ref }) => {
      if (ref.current) ro.observe(ref.current);
    });

    window.addEventListener("resize", debouncedMeasure, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("resize", debouncedMeasure);
      window.removeEventListener("scroll", measure);
    };
  }, [isVisible, measure, zones]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: show ? 1 : 0,
        transition: "opacity 300ms ease",
        overflow: "visible",
      }}
    >
      {zones.map((zone, i) => {
        const rect = rects[i];
        if (!rect) return null;

        const bw = zone.borderWidth ?? (i === 0 ? 2 : 1);

        return (
          <div
            key={zone.label}
            style={{
              position: "absolute",
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              border: `${bw}px dashed ${zone.color}`,
              borderRadius: 4,
              pointerEvents: "none",
              boxSizing: "border-box",
            }}
          >
            {/* Label badge */}
            <span
              style={{
                position: "absolute",
                top: -1,
                left: -1,
                padding: "1px 8px",
                fontSize: 10,
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
                fontWeight: 600,
                lineHeight: "16px",
                color: "#fff",
                backgroundColor: zone.color,
                borderRadius: "0 0 6px 0",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {zone.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
