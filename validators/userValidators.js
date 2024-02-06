import Joi from 'joi';

// Schéma de validation pour l'inscription
export const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    
});

// Schéma de validation pour la connexion
export const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    
});
