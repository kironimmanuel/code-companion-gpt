namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
        CLERK_SECRET_KEY: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
        OPENAI_API_KEY: string;
        NODE_ENV: 'development' | 'production';
        MAX_REQUEST_TOKENS: string;
        NEXT_PUBLIC_MAX_REQUEST_TOKENS: string;
        GENERATE_TOKENS_AMOUNT: string;
        DB_PASSWORD: string;
    }
}
