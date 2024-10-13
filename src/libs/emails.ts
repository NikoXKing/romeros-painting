import nodemailer, { type SendMailOptions } from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'nikolay.envialia@gmail.com',
        pass: import.meta.env.EMAIL_GOOGLE_API,
    },
})

export const sendEmailQuote = async (email: string, subject: string, fullName: string, message: string) => {
    const emailQuote: SendMailOptions = {
        from: 'nikolay.envialia@gmail.com',
        to: 'omar@romerospaintingmaintenance.com',
        subject,
        html: `
        <p>Ha llegado un email de: ${fullName}</p>
        <p>Con el siguiente email: ${email}</p>
        <p>${message}</p>`
    }

    try {
        await transporter.sendMail(emailQuote);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}