'use client';
import { useAllScriptsQuery } from '@/src/hooks/queries';
import { deleteScriptById } from '@/src/services/script-actions';
import { useQueryClient } from '@tanstack/react-query';
import { LoadingSpinner } from '../..';
import { DataTable } from './script-data-table';
import { columns } from './script-table-columns';

export const AllScripts = () => {
    const queryClient = useQueryClient();

    const { data: allScripts, isPending } = useAllScriptsQuery();

    const deleteScriptByIdAndRefetch = async (scriptId: string) => {
        await deleteScriptById(scriptId);
        queryClient.invalidateQueries({ queryKey: ['scripts'] });
    };

    return (
        <>
            {isPending && (
                <div className='w-full items-center justify-center flex h-[80vh] lg:h-[50vh]'>
                    <LoadingSpinner />
                </div>
            )}
            {!isPending && (
                <DataTable columns={columns(deleteScriptByIdAndRefetch)} data={allScripts || []} withRouting />
            )}
        </>
    );
};
