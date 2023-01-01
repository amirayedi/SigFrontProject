import { Objet } from "./objet";

export class Video {
    id!: number;
    lien!: string;
    lat!: number;
    lng!: number;
    owner!:number;
    objet!:Objet;
    idUser!:number;
}
