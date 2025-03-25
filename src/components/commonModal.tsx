import { HTMLProps, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Prop extends HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
// ${visible ? "" : "hidden"}
export default function CommonModal({ children, isOpen, onClose, ...rest }: Prop) {
  const { className } = rest;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달 열릴 때 스크롤 방지
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`inset-0 flex bg-modal items-center justify-center fixed 
      cursor-default`}
      onClick={onClose}
    >
      <div
        {...rest}
        className={`relative w-120 max-h-240
        bg-main-light-black text-white gap-4
        rounded-3xl flex flex-col  text-base/7 whitespace-pre-wrap ${className}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="rounded-3xl overflow-auto no-scrollbar">{children}</div>
      </div>
    </div>,
    document.body
  );
}
