import { LoadingSpinner } from '@/src/components';

export default function loading() {
    return (
        <div className='w-full items-center justify-center flex h-[80vh] lg:h-[50vh]'>
            <LoadingSpinner />
        </div>
    );
}
