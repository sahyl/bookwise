import { auth } from '@/auth'
import { title } from 'process'
import {z} from 'zod'

export const signUpSchema = z.object({
    fullName:z.string().min(3),
    email:z.string().email(),
    universityId:z.coerce.number(),
    universityCard:z.string().nonempty('Please upload your university card'),
    password:z.string().min(6),

})


export const signInSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

export const  bookSchema = z.object({
    title:z.string().trim().min(2).max(100),
    description:z.string().trim().min(10).max(1000),
    author:z.string().trim().min(2).max(100),
    genre:z.string().trim().min(2).max(50),
    rating:z.number().min(1).max(5),
    totalCopies: z.coerce.number().int().positive().lte(10000),
    coverUrl:z.string().nonempty(),
    coverColor:z.string().trim().regex(/^#([A-Fa-f0-9]{6})$/),
    videoUrl:z.string().nonempty(),
    summary:z.string().trim().min(10),


})