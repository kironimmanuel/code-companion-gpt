import { defineMessages } from '@formatjs/intl';

export const successMessages = defineMessages({
    CODE_SNIPPET_COPIED: {
        id: 'code-snippet-copied',
        message: 'Code snippet copied to clipboard!',
    },
    SCRIPT_DELETED: {
        id: 'script-deleted',
        message: 'Script has been deleted!',
    },
});

export const errorMessages = defineMessages({
    GENERIC_ERROR: {
        id: 'generic-error',
        message: 'An error occurred! Please try again.',
    },
    SCRIPT_EXISTS: {
        id: 'script-exists',
        message: 'The script could not be created because it already exists.',
    },
    SCRIPT_NOT_FOUND: {
        id: 'script-not-found',
        message: 'The script could not be found.',
    },
    INSUFFICIENT_TOKENS: {
        id: 'insufficient-tokens',
        message: 'You do not have enough tokens to generate a script.',
    },
    UNAUTHORIZED: {
        id: 'unauthorized',
        message: 'You are not authorized to perform this action.',
    },
    GENERATING_SCRIPT_ERROR: {
        id: 'generating-script-error',
        message: 'An error occurred while generating the script.',
    },
});

export const infoMessages = defineMessages({
    REMAINING_TOKENS: {
        id: 'tokens-remaining',
        message: 'tokens remaining',
    },
});
