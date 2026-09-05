import '@tiptap/core'

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        notionImage: {
            setNotionImage: (options: {
                src: string
                alt?: string
                title?: string
            }) => ReturnType
        }
    }
}