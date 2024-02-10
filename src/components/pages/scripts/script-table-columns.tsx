import { Button } from '@/src/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { successMessages } from '@/src/constants/messages';
import { ScriptDTO } from '@/src/models/ScriptDTO';
import { shortenString } from '@/src/utils/helpers';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { toast } from 'react-toastify';

type ColumnsFunction = (deleteScriptByIdAndRefetch: (scriptId: string) => void) => ColumnDef<ScriptDTO>[];

export const columns: ColumnsFunction = deleteScriptByIdAndRefetch => [
    {
        accessorKey: 'programmingLanguage',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='pl-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Language
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
        cell: ({ row }) => {
            return <p className='capitalize font-bold'>{row.original.programmingLanguage}</p>;
        },
    },
    {
        accessorKey: 'feature',
        header: 'Feature',
        cell: ({ row }) => {
            return <p className='capitalize'>{row.original.feature}</p>;
        },
    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => {
            const description = row.original.description;
            const shortenedDescription = shortenString(description, 125);
            return <p className='inline'>{shortenedDescription}</p>;
        },
    },
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    className='pl-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Created At
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
        cell: ({ row }) => {
            const createdAt = new Date(row.original.createdAt);
            const formattedDate = createdAt.toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            });
            return <p className='opacity-50'>{formattedDate}</p>;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const script = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={e => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(script.codeSnippet);
                                toast.success(successMessages.CODE_SNIPPET_COPIED.message);
                            }}>
                            Copy Codesnippet
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={e => {
                                e.stopPropagation();
                                deleteScriptByIdAndRefetch(script.id);
                                toast.success(successMessages.SCRIPT_DELETED.message);
                            }}>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
