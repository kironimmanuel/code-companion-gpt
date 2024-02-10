namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        DATABASE_URL: string;
        CLERK_SECRET_KEY: string;
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
        OPENAI_API_KEY: string;
        GENERATE_TOKENS_AMOUNT: string;
        MAX_REQUEST_TOKENS: string;
        NEXT_PUBLIC_MAX_REQUEST_TOKENS: string;
    }
}
