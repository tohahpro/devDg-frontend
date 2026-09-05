import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export const blogEditorExtensions = [
    StarterKit.configure({
        heading: {
            levels: [2, 3],
        },
    }),

    Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        defaultProtocol: "https",
        HTMLAttributes: {
            rel: "noopener noreferrer",
            target: "_blank",
            class: "blog-editor-link",
        },
    }),

    Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
            class: "blog-content-image",
        },
    }),
];