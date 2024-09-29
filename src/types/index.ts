export interface Imagen {
    src: string
    alt: string
}
export interface ImagesBeforeAfter {
    before: Imagen
    after: Imagen
}

export interface CardsInterface {
    title: string;
    src: string;
    description: string;
    keywords?: string[];
}