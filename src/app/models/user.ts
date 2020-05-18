export interface Roles {
    admin?: boolean;
    client?: boolean;
    producer?: boolean;

}

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    cellPhone?: string;
    address?: string;
    street?: string;
    nDoor?: string;
    building?: string;
    distric?: string;
    photoUrl?: string;
    additionalInformation?: string;
    roles: Roles;
}