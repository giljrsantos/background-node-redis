import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        dalay: 5000,
        priority: 3
    },

    async handle({ data }){
        const { user } = data;

        await Mail.sendMail({
            from: 'GILBERTO <giljrsantos@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Novo Cadastro Cliente',
            html: `Olá, ${user.name}, bem-vindo!`
        });        
    }
}

