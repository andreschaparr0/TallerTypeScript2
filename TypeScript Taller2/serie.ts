export enum Canal{
    AMC = "AMC",
    NETFLIX = "Netflix",
    HBO = "HBO", 
    CBS = "CBS",
    BBC = "BBC",
    CARACOL = "Caracol",
    RCN = "RCN"
}

export class Serie{
    constructor(public nombre: string, public descripcion: string, public imagen: string, public canal: Canal, public temporadas: number, public link: string){}
}