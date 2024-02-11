'use client';

import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/src/components';
import { ScriptDTO } from '@/src/models/ScriptDTO';
import { splitAtCapitalLetters } from '@/src/utils/helpers';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuSettings2 } from 'react-icons/lu';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    withRouting?: boolean;
}

export const DataTable = <TData, TValue>({ columns, data, withRouting }: DataTableProps<TData, TValue>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

    const router = useRouter();

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
    });

    return (
        <div>
            <div className='flex items-center py-4'>
                <Input
                    placeholder='Filter languages...'
                    value={(table.getColumn('programmingLanguage')?.getFilterValue() as string) ?? ''}
                    onChange={event => table.getColumn('programmingLanguage')?.setFilterValue(event.target.value)}
                    className='max-w-sm'
                />
                <div className='flex-1 text-sm text-muted-foreground ml-5'>
                    {table.getFilteredRowModel().rows.length} Script(s) found.
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' className='ml-auto flex gap-2'>
                            <LuSettings2 /> View
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel className='capitalize'>Toggle Columns</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {table
                            .getAllColumns()
                            .filter(column => !(column.id === 'actions') && column.getCanHide())
                            .map(column => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className='capitalize'
                                        checked={column.getIsVisible()}
                                        onCheckedChange={value => column.toggleVisibility(!!value)}>
                                        {splitAtCapitalLetters(column.id)}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='rounded-md border'>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id} className='hover:bg-transparent'>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => {
                                return (
                                    <TableRow
                                        onClick={() => {
                                            withRouting && router.push(`/scripts/${(row.original as ScriptDTO).id}`);
                                        }}
                                        key={row.id}
                                        data-state={row.getIsSelected() && 'selected'}
                                        className='cursor-pointer'>
                                        {row.getVisibleCells().map(cell => {
                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    onClick={e => {
                                                        if (cell.column.id === 'actions') {
                                                            e.stopPropagation();
                                                        }
                                                    }}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className='flex items-center justify-end space-x-2 py-4'>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    Previous
                </Button>
                {Array.from({ length: table.getPageCount() }, (_, i) => (
                    <Button
                        key={i}
                        variant='outline'
                        size='sm'
                        onClick={() => table.setPageIndex(i)}
                        disabled={table.getState().pagination.pageIndex === i}>
                        {i + 1}
                    </Button>
                ))}
                <Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </Button>
            </div>
        </div>
    );
};
