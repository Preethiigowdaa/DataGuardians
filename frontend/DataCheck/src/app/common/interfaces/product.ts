export interface Product {
    product_key: number;
    brand_name: string;
}

export interface Indications {
    indication_key: string;
    indication_desc: string;
}
export interface Speciality {
    sp_key: number;
    speciality_name: string;
}
export interface Category {
    nc_key: string;
    category: string;
}
export interface Location {
    loc_key: string;
    loc_name: string;
}
