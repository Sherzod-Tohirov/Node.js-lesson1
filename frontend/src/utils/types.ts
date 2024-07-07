import { Dispatch, FormEvent, ReactNode, SetStateAction } from "react";

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

export interface PostContextStateType {
    posts: Post[];
    setPosts: Dispatch<SetStateAction<Post[]> | []>
}