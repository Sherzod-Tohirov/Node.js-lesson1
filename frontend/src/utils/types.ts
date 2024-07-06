import { FormEvent, ReactNode } from "react";

export interface Post {
    id: number;
    title: string;
    desc: string;
  }

export interface ModalType {
    title: ReactNode | string;
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    onSubmit: (e: FormEvent) => void;
}