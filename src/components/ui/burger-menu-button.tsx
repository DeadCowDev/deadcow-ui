import { cn } from "@/utils";

export function BurgerMenuButton({
  open,
  onClick,
  label,
}: {
  open: boolean;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <button
      aria-label={label}
      onClick={() => onClick?.()}
      className="py-[4px] px-[3px] w-[24px] aspect-square flex items-center relative flex-shrink-0 xl:hidden"
    >
      <span
        className={cn(
          "absolute right-[3px] top-[4px] w-[18px] h-[2px] bg-white origin-[top_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500",
          open ? "-rotate-[44deg] right-[6.5px] top-[5px]" : ""
        )}
      ></span>
      <span
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-[12px] h-[2px] bg-white origin-right transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500 delay-100",
          open ? "w-[9px] scale-0" : ""
        )}
      ></span>
      <span
        className={cn(
          "absolute right-[3px] bottom-[4px] w-[18px] h-[2px] bg-white origin-[bottom_right] transition-all ease-[cubic-bezier(0.69,0.01,0.38,1.38)] duration-500",
          open ? "rotate-[44deg] right-[6.5px] bottom-[5px]" : ""
        )}
      ></span>
    </button>
  );
}
