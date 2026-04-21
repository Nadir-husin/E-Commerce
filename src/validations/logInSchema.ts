import { z } from 'zod'

const logInSchema = z.object({

    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
        .string()
        .min(1, { message: "Password is required" })
}) 
type LogInType = z.infer<typeof logInSchema>

export { logInSchema, type LogInType }