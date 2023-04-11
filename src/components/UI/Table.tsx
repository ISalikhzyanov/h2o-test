import React, {useEffect, useMemo, useState} from 'react'
import "../../../src/assets/scss/table-styles.scss";
import prevPage from '../../../src/assets/img/navigation/prev-page.svg'
import nextPage from '../../../src/assets/img/navigation/next-page.svg'
import sortUp from  '../../../src/assets/img/sort-up.svg'
import sortDown from  '../../../src/assets/img/sort-down.svg'

//
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    RowData,
} from '@tanstack/react-table'
import {Person, sData} from '../../variables/makeData'
import {sortingFunctions} from "../../variables/sortingFunctions";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects} from "../../redux/actions";
import Loader from "./Loader";

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (rowIndex: number, columnId: string, value: unknown) => void
    }
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<Person>> = {
    cell: function Cell ({ getValue, row: { index }, column: { id }, table }){
        const initialValue = getValue()
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue)
        const edit = useSelector((state: any) => state.app.edit)

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
            table.options.meta?.updateData(index, id, value)
        }

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
            setValue(initialValue)
        }, [initialValue])

        return (
            <input
                value={value as string}
                onChange={e => setValue(e.target.value)}
                readOnly={edit}
                onBlur={onBlur}
            />
        )
    },
}

function useSkipper() {
    const shouldSkipRef = React.useRef(true)
    const shouldSkip = shouldSkipRef.current

    // Wrap a function with this to skip a pagination reset temporarily
    const skip = React.useCallback(() => {
        shouldSkipRef.current = false
    }, [])

    React.useEffect(() => {
        shouldSkipRef.current = true
    })

    return [shouldSkip, skip] as const
}

export default function Table() {
    const edit = false

    const columns = useMemo<ColumnDef<Person>[]>(
        () => [
            {
                header: '№',
                footer: props => props.column.id,
                accessorKey: 'serial',
            },
            {
                header: 'Name',
                footer: props => props.column.id,
                accessorKey: 'name',

            },

            {
                accessorKey: 'person_id',
                header: () => 'ID номер',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'phone',
                header: () => 'Телефон',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'gender',
                header: () => 'Пол',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'bDate',
                header: () => 'Дата рождения',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'subway',
                header: () => 'Метро',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'adress',
                header: () => 'Адрес проживания',
                footer: props => props.column.id,
                size: 200
            },

            {
                accessorKey: 'bank',
                header: () => 'Банк',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'card_number',
                header: () => 'Номер карты',
                footer: props => props.column.id,
            },

            {
                accessorKey: 'citizenship',
                header: () => 'Гражданство',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'passport',
                header: () => 'Паспорт',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'issued_by',
                header: () => 'Кем выдан',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'validity',
                header: () => 'Срок дейсвия',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'bPlace',
                header: () => 'Место рождения',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'adress',
                header: () => 'Адрес проживания',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'patent',
                header: () => 'Патент',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'patent_validaty',
                header: () => 'Срок дейсвия',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'snils',
                header: () => 'СНИЛС',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'inn',
                header: () => 'ИНН',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'medical_book',
                header: () => 'Медкнижка',
                footer: props => props.column.id,
            },

            {
                accessorKey: 'post',
                header: () => 'Должност',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'subdivision',
                header: () => 'Подразделение',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'decision',
                header: () => 'Решение',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'source',
                header: () => 'Источник',
                footer: props => props.column.id,
            },
            {
                accessorKey: 'decision_date',
                header: () => 'Дата',
                footer: props => props.column.id,
                rowSpan: 2
            },
            {
                accessorKey: 'remark',
                header: () => 'Примечание',
                footer: props => props.column.id,
            },
        ],
        []
    )
    const commonBase = useSelector((state: any) => state.table.data)
    const loader = useSelector((state: any) => state.app.loader)

    const dispatch = useDispatch()

    useEffect(()=> {
        if (!commonBase.length) {
            // @ts-ignore
            dispatch(fetchProjects())

        }
        setData(commonBase)
    }, [dispatch, commonBase.length])

    const [data, setData] = useState<Person[]>(commonBase)

    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper()

    const table = useReactTable({
        // @ts-ignore
        data,
        columns,
        defaultColumn,
        initialState: {
            pagination: {
                pageSize: 8
            }
        } ,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        autoResetPageIndex,
        // Provide our updateData function to our table meta
        meta: {
            updateData: (rowIndex, columnId, value) => {
                // Skip page index reset until after next rerender
                skipAutoResetPageIndex()
                if (edit) {
                    setData((old: any) =>
                        old.map((row: any, index: any) => {
                            if (index === rowIndex) {
                                return {
                                    ...old[rowIndex]!,
                                    [columnId]: value,
                                }
                            }
                            return row
                        })
                    )
                }
            }
        },
        debugTable: true,
    })

    function getElem () {
        if ((table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1)) > sData.length){
            return sData.length
        } else {
            return table.getState().pagination.pageSize * (table.getState().pagination.pageIndex + 1)
        }
    }


    function getSort (item: string) {
        console.log(item)
        // @ts-ignore
        const result = [...data].sort((a, b) => a.person_id - b.person_id)
        setData(() => result)
    }

    return (
        <>
            {loader && <div className="employee-table__loader">
                <Loader width="60px" height="60px"/>
            </div>}
            {!loader && <div className="employee-table">
                <div className="employee-table__table">
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan={2} style={{minWidth: 46}}>
                                №
                            </th>
                            <th
                                style={{minWidth: 200}} rowSpan={2}>
                                <div
                                    className="employee-table__sort-column"
                                >
                                                        <span>
                                                            Имя сотрудника
                                                        </span>
                                    <div className="employee-table__sort-btns">
                                        <img
                                            className="employee-table__sort-btn"
                                            src={sortUp}
                                            onClick={() => sortingFunctions.sortUp('name', setData)}
                                        />
                                        <img
                                            className="employee-table__sort-btn"
                                            src={sortDown} alt=""
                                            onClick={() => sortingFunctions.sortDown('name', setData)}
                                        />
                                    </div>
                                </div>
                            </th>
                            <th align="center" colSpan={6}>
                                Основная информация
                            </th>
                            <th align="center" colSpan={2}>
                                Банковквская информация
                            </th>
                            <th align="center" colSpan={11}>
                                Документы сотрудника
                            </th>
                            <th align="center" colSpan={6}>
                                Информация от HR
                            </th>
                        </tr>
                        <tr>
                            {table.getHeaderGroups().map((headerGroup) => {
                                    return headerGroup.headers.map((header, index) => {
                                        if (index !== 0 && index !== 1) {
                                            if (sortingFunctions.selectableColumns.includes(header.id)) {
                                                return <th
                                                    key={header.id + index}
                                                    colSpan={header.colSpan}

                                                >
                                                    {header.isPlaceholder ? null : (
                                                        <div
                                                            style={{width: header.column.columnDef.size}}
                                                            className="employee-table__sort-column"
                                                        >
                                                        <span>
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                        </span>
                                                            <div className="employee-table__sort-btns">
                                                                <img
                                                                    className="employee-table__sort-btn"
                                                                    src={sortUp}
                                                                    onClick={() => sortingFunctions.sortUp(header.id, setData)}
                                                                />
                                                                <img
                                                                    className="employee-table__sort-btn"
                                                                    src={sortDown} alt=""
                                                                    onClick={() => sortingFunctions.sortDown(header.id, setData)}
                                                                />
                                                            </div>
                                                        </div>

                                                    )}
                                                </th>
                                            } else {
                                                return <th
                                                    key={header.id + index}
                                                    colSpan={header.colSpan}
                                                >
                                                    {header.isPlaceholder ? null : (
                                                        <div
                                                            style={{width: header.column.columnDef.size}}
                                                        >
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                        </div>
                                                    )}
                                                </th>
                                            }
                                        }
                                    })
                                }
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {table.getRowModel().rows.map((row, index) => {
                            return (
                                <tr key={row.id}
                                    style={index % 2 !== 0 ? {background: "rgba(248, 248, 248, 0.5)"} : {background: 'rgba(229, 248, 246, 0.5)'}}>
                                    {row.getVisibleCells().map((cell, index) => {
                                        return (
                                            <td key={index}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="table-actions">
                    <div className="pagination__info">
                        Показано &nbsp;
                        {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
                        - {getElem()} &nbsp;
                        из &nbsp; {sData.length} &nbsp; результатов
                    </div>
                    <div className="pagination">
                        <button
                            className="pagination__btns"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <img src={prevPage} alt=""/>
                        </button>
                        <div className="pagination__row">
                            {table.getPageOptions().map(i => {
                                return <span
                                    className={i === table.getState().pagination.pageIndex ? 'pagination__active-page' : 'pagination__page'}
                                    key={'page_' + i}
                                    onClick={() => table.setPageIndex(i)}>{i + 1}
                            </span>
                            })}
                        </div>
                        <button
                            className="pagination__btns"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <img src={nextPage} alt=""/>
                        </button>
                    </div>
                    <div className="pagination__info">
                        отображать на странице &nbsp;
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => {
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            {[8, 10, 14, 16].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
