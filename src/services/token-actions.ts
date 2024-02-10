'use server';
import { revalidatePath } from 'next/cache';
import prisma from '../config/db';

export const getUserTokensByUserId = async (clerkId: string) => {
    try {
        const result = await prisma.token.findUnique({
            where: {
                clerkId,
            },
        });
        return result?.tokens;
    } catch (error) {
        console.error(error);
    }
};

export const createUserTokensByUserId = async (clerkId: string, tokens: number) => {
    try {
        const result = await prisma.token.create({
            data: {
                clerkId,
                tokens,
            },
        });

        return result?.tokens;
    } catch (error) {
        console.error(error);
    }
};

export const getOrCreateUserTokensByUserId = async (clerkId: string) => {
    try {
        const result = await prisma.token.findUnique({
            where: {
                clerkId,
            },
        });

        if (result) {
            return result.tokens;
        }

        return await createUserTokensByUserId(clerkId, Number(process.env.GENERATE_TOKENS_AMOUNT));
    } catch (error) {
        console.error(error);
    }
};

export const decrementUserTokensByUserId = async (clerkId: string, tokens: number) => {
    try {
        const result = await prisma.token.update({
            where: {
                clerkId,
            },
            data: {
                tokens: {
                    decrement: tokens,
                },
            },
        });

        revalidatePath('/profile');
        return result?.tokens;
    } catch (error) {
        console.error(error);
    }
};
