import { SizeLimit } from "next"

export interface Billboard {
    id : string
    name : string
    imageUrl : string
}

export interface Category {
    id : string 
    name : string 
}

export interface Product {
    id : string 
    category : Category
    name :string
    price  : string  
    isFeatured :boolean
    size : Size
    color : Color
    images: Image[]
}

export interface Image {
    id: string 
    url : string 
}

export interface Size{
    id : string 
    name  :string 
    value  :string 
}

export interface Color{
    id : string 
    name  :string 
    value  :string 
}