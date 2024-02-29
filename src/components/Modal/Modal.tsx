import { useState } from "react";
import Link from "next/link";

export function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md relative overflow-hidden">
          <button
            className="absolute top-2 right-2 text-black text-sm"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
