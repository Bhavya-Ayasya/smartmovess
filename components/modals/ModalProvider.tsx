"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Modal } from "./Modal";
import { InternshipEnrollmentForm } from "@/components/forms/InternshipEnrollmentForm";
import { InstagramAuditForm } from "@/components/forms/InstagramAuditForm";

type ModalName = "internship" | "instagram" | null;

const Ctx = createContext<{ open: (m: Exclude<ModalName, null>) => void; close: () => void } | null>(null);

export function useModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<ModalName>(null);
  const open = useCallback((m: Exclude<ModalName, null>) => setCurrent(m), []);
  const close = useCallback(() => setCurrent(null), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <Modal
        open={current === "internship"}
        onClose={close}
        title="Enroll in Our Internship Program"
        description="Share your basic details to express your interest in the internship program."
        maxWidth={680}
      >
        <InternshipEnrollmentForm onDone={close} />
      </Modal>
      <Modal
        open={current === "instagram"}
        onClose={close}
        title="Request Your Instagram Profile Audit"
        description="Share your Instagram profile and business details so we can understand your goals and audit requirements."
        maxWidth={720}
      >
        <InstagramAuditForm onDone={close} />
      </Modal>
    </Ctx.Provider>
  );
}

/** Opens a modal from anywhere (including server-rendered pages). */
export function ModalTrigger({
  modal,
  className,
  children,
}: {
  modal: Exclude<ModalName, null>;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useModal();
  return (
    <button type="button" onClick={() => open(modal)} className={className} aria-haspopup="dialog">
      {children}
    </button>
  );
}
