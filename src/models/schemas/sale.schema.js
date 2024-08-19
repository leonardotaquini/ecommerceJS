import { checkSchema } from "express-validator";


export const createSaleSchema = checkSchema({
    "seller": {
        in: ['body'],
        isString: {
            errorMessage: 'userId debe ser un string'
        }
    },
    "products": {
        in: ['body'],
        isArray: {
            errorMessage: 'products debe ser un array'
        }
    },
    "products.*.productId": {
        in: ['body'],
        isString: {
            errorMessage: 'productId debe ser un string'
        }
    },
    "products.*.quantity": {
        in: ['body'],
        isNumeric: {
            errorMessage: 'quantity debe ser un número'
        }
    },
    "totalAmount": {
        in: ['body'],
        isNumeric: {
            errorMessage: 'totalAmount debe ser un número'
        }
    },
    "saleDate": {
        in: ['body'],
        isString: {
            errorMessage: 'saleDate debe ser un string'
        }
    }
});