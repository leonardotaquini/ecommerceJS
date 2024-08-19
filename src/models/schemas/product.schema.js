import  { checkSchema } from 'express-validator';
import mongoose from 'mongoose';
import { isAdminType } from '../../helpers/user.helpers.js';

export const createProductSchema = checkSchema({
    userId:{
        in: ['body'],
        notEmpty: {
            errorMessage: 'UserId es requerido',
            options: { ignore_whitespace: true }
        },
        isString: {
            errorMessage: 'Usuario debe ser un string'
        },
        custom:{
            options: async (value) => {
                const isUser = await isAdminType(value);
                if(!isUser){
                    throw new Error('No tienes permisos para crear un producto');
                }
                return true;
            },
            
        }
    },
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