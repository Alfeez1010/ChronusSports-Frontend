import { Address } from "./address";

export interface Auth {
    email: string;
    password: string;
}

export interface RecoveryPassword {
    email: string;
}

export interface NewPassword {
    newPassword: string;
    confirmNewPassword: string;
}

export interface CustomerUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender?: string;
    hasCryptoWallet?: boolean,
    document: string;
    address: Address;
    birthday: string;
    cryptoWallet?: any;

}


export interface AthleteUser {
    userType: number;
    clubId: string;
    type: number;
    activity: number;
    birthday: string;
    playingField: string;
    primaryEmail: string;
    firstName: string;
    gender: number;
    primaryDocument: string;
    address: Address;
    nationality: string;
    phone: string;
    hasCryptoWallet: boolean;
    legalGuardian: {
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        document: string;
    }
    companyName: string;
    registrationNumber: string;
    contract: {
        description: string;
        expiration: string;
        value: number;
        contact: string
    };
    password: string;
    secondaryEmail: string;
    lastName: string;
    secondaryDocument: string;
}

export interface ClubUser {
    userType: number;
    primaryEmail: string;
    firstName: string;
    gender: number;
    primaryDocument: string;
    address: Address;
    nationality: string;
    phone: string;
    hasCryptoWallet: boolean;
    legalGuardian: {
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        document: string;
    }
    companyName: string;
    registrationNumber: string;
    contract: {
        description: string;
        expiration: string;
        value: number;
        contact: string
    };
    password: string;
    secondaryEmail: string;
    lastName: string;
    secondaryDocument: string;
}

export interface FederationUser {
    userType: number;
    primaryEmail: string;
    name: string;
    gender: number;
    primaryDocument: string;
    address: Address;
    nationality: string;
    phone: string;
    hasCryptoWallet: boolean;
    legalGuardian: {
        email: string;
        firstName: string;
        lastName: string;
        gender: string;
        document: string;
    }
    companyName: string;
    registrationNumber: string;
    contract: {
        description: string;
        expiration: string;
        value: number;
        contact: string
    };
    password: string;
    secondaryEmail: string;
    secondaryDocument: string;
}

export interface ForgotPassword {
    email: string;
}

export interface NewPassword {
    newPassword: string;
    confirmNewPassword: string;
}

export interface SignIn {
    newPassword: string;
    confirmNewPassword: string;
}
