import { ChevronUp } from "lucide-react";



export function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-600">
            <span className="flex size-4 items-center justify-center rounded border border-violet-500">
                <ChevronUp className="size-2.5" />
            </span>
            {children}
        </div>
    );
}