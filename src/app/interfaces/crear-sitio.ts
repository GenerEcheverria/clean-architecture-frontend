/**
 * Posiciones del encabezado.
 */
enum HeaderPosition {
    center = "center",
    left = "left",
    right = "right"
}

/**
 * Tamaños del encabezado.
 */
enum HeaderSize {
    big = "big",
    small = "small",
    medium = "medium"
}

/**
 * Tamaños del cuerpo.
 */
enum BodySize{
    big = "big",
    small = "small",
    medium = "medium"
}

/**
 * Interfaz que describe la estructura para crear un sitio.
 */
export interface CrearSitio {
    name: string,
    backgroundColor: string,
    views: number,
    url: string,
    header: {
        title: string;
        color: string;
        position: HeaderPosition;
        size: HeaderSize;
        hero: boolean;        
        image: string;
    },
    /*body: (
        { full: { text: { alignment: string; position: string; text: string; title: string; } } } |
        { full: { image: { caption: string; image: string; size: BodySize; } } } |
        { full: { video: { video: string; size: BodySize; } } } |
        { right: { video: { video: string; size: BodySize; } }, left: { image: { caption: string; image: string; size: BodySize; } } }
    )[];*/
    footer: {
        backgroundColor: string;
        textColor: string;
        socialMedia:{
            setSocialMedia: boolean;
            facebook: string;
            instagram: string
            twitter: string;
            linkedin: string;
            tiktok: string;
            otro: string;
        },
        extra:{
            setExtra: boolean;
            image: string;
            text: string
        },
        contact:{
            setContact: boolean;
            phone: string;
            address: string
        }
    }
}