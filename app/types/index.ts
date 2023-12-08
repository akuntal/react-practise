export type UserType = {
    name: string;
    username: string;
    id: string;
    address: AddressType;
    email: string;
}

export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: any;
}

export type SomeOtherType = {}