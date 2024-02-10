import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { create } from 'zustand';
import { Theme } from '../constants/themes';

/**
 * Interface representing the theme store.
 */
interface ThemeStore {
    state: {
        theme: Theme;
    };
    toggleTheme: () => void;
}

/**
 * Zustand hook for managing the state of the theme.
 * @param {Function} set - Function provided by Zustand for updating state.
 * @returns {ThemeStore} - The state and actions for the theme store.
 */
export const useThemeStore = create<ThemeStore>(set => ({
    state: {
        theme: Theme.Light,
    },
    toggleTheme: () =>
        set(({ state }) => {
            const newTheme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
            document.documentElement.setAttribute('data-theme', newTheme);
            if (newTheme === Theme.Light) {
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
            }
            return {
                state: {
                    theme: newTheme,
                },
            };
        }),
}));

/**
 * Base store interface for a form with generic state.
 * @template TState - Generic state type.
 */
interface BaseFormStore<TState = Record<string, unknown>> {
    state: TState;
    change: (value: string, name: string) => void;
    clearForm: () => void;
}

/**
 * Store interface for a chat form, extends BaseFormStore.
 */
type ChatForm = BaseFormStore<{ prompt: string }>;

/**
 * Zustand hook for managing the state of a chat form.
 * @param {Function} set - Function provided by Zustand for updating state.
 * @returns {ChatForm} - The state and actions for the chat form.
 */
export const useChatForm = create<ChatForm>(set => ({
    state: {
        prompt: '',
    },
    change: value => set(() => ({ state: { prompt: value } })),
    clearForm: () => set({ state: { prompt: '' } }),
}));

/**
 * Store interface for managing chat messages.
 */
interface ChatStore {
    state: {
        messages: ChatCompletionMessageParam[];
    };
    addMessage: (message: ChatCompletionMessageParam) => void;
}

/**
 * Zustand hook for managing the state of a chat.
 * @param {Function} set - Function provided by Zustand for updating state.
 * @returns {ChatStore} - The state and actions for the chat.
 */
export const useChatStore = create<ChatStore>(set => ({
    state: {
        messages: [],
    },
    addMessage: message => set(({ state }) => ({ state: { ...state, messages: [...state.messages, message] } })),
}));

/**
 * Store interface for a new script form, extends BaseFormStore.
 */
type NewScriptForm = BaseFormStore<{ feature: string; programmingLanguage: string }>;

/**
 * Zustand hook for managing the state of a new script form.
 * @param {Function} set - Function provided by Zustand for updating state.
 * @returns {ChatForm} - The state and actions for the new script  form.
 */
export const useNewScriptForm = create<NewScriptForm>(set => ({
    state: {
        feature: '',
        programmingLanguage: '',
    },
    change: (value, name) => set(({ state }) => ({ state: { ...state, [name]: value } })),
    clearForm: () => set({ state: { feature: '', programmingLanguage: '' } }),
}));
