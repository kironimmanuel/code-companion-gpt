import { ScriptInfo } from '@/src/components';
import { buttonVariants } from '@/src/components/ui/button';
import { getScriptById } from '@/src/services/script-actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
    params: {
        id: string;
    };
}

export default async function SingleScriptPage({ params }: Props) {
    const script = await getScriptById(params.id);

    if (!script) {
        redirect('/scripts');
    }

    return (
        <section className='max-w-[1280px] mx-auto p-5 lg:p-12'>
            <Link href='/scripts' className={`${buttonVariants({ variant: 'outline' })} mb-12`}>
                Back to scripts
            </Link>
            {script && <ScriptInfo {...script} />}
        </section>
    );
}
