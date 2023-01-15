
export interface User {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    name?: string;
    surname?: string;
    phone?: string;
    car?: string;
    carPlate?: string
}