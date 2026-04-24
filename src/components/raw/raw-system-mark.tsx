import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number | string;
  title?: string;
};

export function RawSystemMark({ className, size = 48, title = "RAW SYSTEM" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("inline-block shrink-0 select-none", className)}
    >
      <title>{title}</title>
      <defs>
        <mask id="raw-system-mark" maskUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r="20" fill="black" />
          <polygon points="38,-2 62,-2 50,30" fill="black" />
          <g transform="rotate(120 50 50)">
            <polygon points="38,-2 62,-2 50,30" fill="black" />
          </g>
          <g transform="rotate(240 50 50)">
            <polygon points="38,-2 62,-2 50,30" fill="black" />
          </g>
        </mask>
      </defs>
      <circle cx="50" cy="50" r="48" mask="url(#raw-system-mark)" />
    </svg>
  );
}

export function RawSystemWordmark({
  className,
  showMark = true,
  markSize = 22,
}: {
  className?: string;
  showMark?: boolean;
  markSize?: number;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.22em]",
        className,
      )}
    >
      {showMark ? <RawSystemMark size={markSize} /> : null}
      <span className="leading-none">
        RAW <span className="text-[var(--raw-fg-dim)]">/</span> SYSTEM
      </span>
    </span>
  );
}
