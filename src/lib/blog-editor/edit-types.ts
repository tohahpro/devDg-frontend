import type { JSONContent } from "@tiptap/core";

export type SavedTextSelection = {
    from: number;
    to: number;
};

export type BlogEditorValue = {
    title: string;
    content: JSONContent;
    contentHtml: string;
};

export type UploadImageResponse = {
    success: boolean;
    message?: string;
    url?: string;
};

export type CreateBlogResponse = {
    success: boolean;
    message: string;
    data?: unknown;
};