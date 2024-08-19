import  { checkSchema } from 'express-validator';


export const createProductSchema = checkSchema({
    name: {
        in: ['body'],
        isString: {
            errorMessage: 'Nombre debe ser un string'
        },
        isLength: {
            errorMessage: 'Nombre debe tener al menos 3 caracteres',
            options: { min: 3 }
        }
    },
    price: {
        in: ['body'],
        isNumeric: {
            errorMessage: 'Precio debe ser un número'
        }
    },
    category: {
        in: ['body'],
        isString: {
            errorMessage: 'Categoria debe ser un string'
        }
    },
    description: {
        in: ['body'],
        isString: {
            errorMessage: 'Descripcion debe ser un string'
        }
    },
    stock: {
        in: ['body'],
        isNumeric: {
            errorMessage: 'Stock debe ser un número'
        }
    },
    image: {
        in: ['body'],
        isString: {
            errorMessage: 'Imagen debe ser un string'
        }
    }
});