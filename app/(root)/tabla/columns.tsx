"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Data = {
    market_cap: number;
    market_cap_diluted: number;
    liquidity: number;
    price: number;
    off_chain_volume: number;
    volume: number;
    volume_change_24h: number;
    volume_7d: number;
    is_listed: boolean;
    price_change_24h: number;
    price_change_1h: number;
    price_change_7d: number;
    price_change_1m: number;
    price_change_1y: number;
    ath: number;
    atl: number;
    rank: number;
    name: string;
    desdeAth: number;
    desdeAtl: number;
};

export const columns: ColumnDef<Data>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Precio</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 8,
                // minimumSignificantDigits: 3,
            }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "market_cap",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Market Cap
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("market_cap"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 8,
                // minimumSignificantDigits: 3,
            }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
        }
    },
    {
        accessorKey: "atl",
        header: () => <div className="text-right">Minimo Historico</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("atl"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "ath",
        header: () => <div className="text-right">Maximo Historico</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("ath"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 10,
            }).format(amount);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    
    {
        accessorKey: "desdeAth",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    El precio actual es el tanto % del ath
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("desdeAth"));
            const formatted = Number(amount).toFixed(4);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "desdeAtl",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    El precio actual subio tantas veces desde el atl
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("desdeAtl"));
            const formatted = Number(amount).toFixed(4);
            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "rank",
        header: "Ranking",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const data = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(data.name)
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
