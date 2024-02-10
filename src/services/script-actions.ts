'use server';
import prisma from '../config/db';

export const getAllScripts = async (searchTerm?: string) => {
    if (!searchTerm) {
        const scripts = await prisma.script.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        });

        return scripts;
    }

    const scripts = await prisma.script.findMany({
        where: {
            OR: [
                {
                    programmingLanguage: {
                        contains: searchTerm,
                    },
                },
                {
                    feature: {
                        contains: searchTerm,
                    },
                },
            ],
        },
        orderBy: {
            createdAt: 'asc',
        },
    });
    return scripts;
};

export const getScriptById = async (id: string) => {
    try {
        return await prisma.script.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const getExistingScript = async ({
    feature,
    programmingLanguage,
}: {
    feature: string;
    programmingLanguage: string;
}) => {
    try {
        return prisma.script.findUnique({
            where: {
                feature_programmingLanguage: { feature, programmingLanguage },
            },
        });
    } catch (error) {
        throw error;
    }
};

export const createNewScript = async (script: any) => {
    try {
        return await prisma.script.create({
            data: script,
        });
    } catch (error) {
        throw error;
    }
};

export const deleteScriptById = async (id: string) => {
    try {
        return await prisma.script.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        throw error;
    }
};
