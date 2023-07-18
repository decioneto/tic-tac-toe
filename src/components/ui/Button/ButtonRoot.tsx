import { BUTTON_TYPE, ButtonRootProps } from "./types";
import { roboto_cond } from "@/app/fonts";

export function ButtonRoot({ children, styleType, ...args }: ButtonRootProps) {
  return (
    <button
      {...args}
      className={`
        ${BUTTON_TYPE[styleType]}
        ${roboto_cond.className}
        shadow-ttt_sm rounded-full min-w-[140px] cursor-pointer px-3 h-12 hover:shadow-ttt_md disabled:opacity-50
    `}
    >
      {children}
    </button>
  );
}
