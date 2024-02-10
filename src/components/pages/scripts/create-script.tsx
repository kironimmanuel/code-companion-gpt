'use client';
import { programmingLanguages } from '@/src/constants/programming-languages';
import { useNewScriptMutation } from '@/src/hooks/mutation';
import { useNewScriptForm } from '@/src/store';
import { AiOutlineLoading } from 'react-icons/ai';
import { Form, Heading, ScriptInfo } from '../..';

export const NewScript = () => {
    const newScriptForm = useNewScriptForm();

    const { data: script, mutate: generateScript, isPending } = useNewScriptMutation();

    const handleSubmission = (e: React.FormEvent) => {
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const script = Object.fromEntries(formData.entries());
        generateScript(script);
    };

    return (
        <>
            <Form onSubmitCallback={handleSubmission} store={newScriptForm} className='max-w-2xl'>
                <Heading level={2} className='mb-4'>
                    Add new Script
                </Heading>
                <Form.Group className='join w-full'>
                    <Form.TextInput
                        value={newScriptForm.state.feature}
                        name='feature'
                        disabled={isPending}
                        placeholder='Feature'
                        className='input input-bordered join-item w-full rounded-lg'
                        required
                        maxLength={50}
                    />
                    <Form.Select
                        value={newScriptForm.state.programmingLanguage}
                        name='programmingLanguage'
                        disabled={isPending}
                        placeholder='Language'
                        className='input input-bordered join-item w-full rounded-lg'
                        required
                        options={programmingLanguages}
                    />
                    <Form.Button
                        className='btn btn-primary join-item w-44'
                        type='submit'
                        disabled={
                            !!!newScriptForm.state.feature || !!!newScriptForm.state.programmingLanguage || isPending
                        }>
                        {isPending ? <AiOutlineLoading className='animate-spin text-xl' /> : 'Generate Script'}
                    </Form.Button>
                </Form.Group>
            </Form>
            <div className='mt-16'>{script && <ScriptInfo {...script} />}</div>
        </>
    );
};
