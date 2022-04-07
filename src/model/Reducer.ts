import {IpublicInformation} from './PublicInformation';

export interface reducer  {
    Information : information|undefined,
    lylich: Lylich|undefined
}
export interface information {
    Information : IpublicInformation|undefined
}
export interface Lylich {
    lylich : String[]|undefined
}