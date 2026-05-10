
export type Language = "en" | "hi" | "bn";

export interface LocalizedContent {
    en: string;
    hi: string;
    bn: string;
}

export type SectionType =
    | "paragraph"
    | "heading"
    | "list-item"
    | "lead"
    | "quote"
    | "sub-heading"
    | "table"
    | "custom-callout"
    | "callout"
    | "grid"
    | "list";

export interface TableData {
    headers: LocalizedContent[];
    rows: LocalizedContent[][];
}

export interface GridItem {
    title: LocalizedContent;
    content: LocalizedContent;
    icon?: string;
}

export interface GridData {
    items: GridItem[];
    columns?: number;
}

export interface ListData {
    title?: LocalizedContent;
    items: LocalizedContent[];
    style?: "bullet" | "number" | "check";
}

export interface ArticleSection {
    type: SectionType;
    content?: LocalizedContent;
    variant?: string; // e.g., 'primary', 'success', 'destructive', 'blue'
    tableData?: TableData;
    gridData?: GridData;
    listData?: ListData;
}

export interface ArticleData {
    id: string;
    slug: string;
    title: LocalizedContent;
    description: LocalizedContent;
    publishedDate: string;
    category: LocalizedContent;
    author: LocalizedContent;
    image?: string;
    sections: ArticleSection[];
}
