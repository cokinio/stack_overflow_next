"use client";
import React from "react";

const table = async ({ lista }) => {
    let string = "";
    let itemFound;
    const arreglo = [];
    lista.forEach((coin) => (string = string + "%2C" + coin));

    try {
        const res = await fetch(
            `https://api.mobula.io/api/1/market/multi-data?symbols=${string}`,
            {
                cache: "no-store",
            }
        );
        itemFound = await res.json();
        for (const property in itemFound.data) {
            const data = { ...itemFound.data[property], name: property };
            arreglo.push(data);
        }
    } catch (error) {
        console.log(error);
    }

    return (
        <div className="overflow-hidden rounded-t-xl p-10">
            <table className="w-full table-auto border-collapse border text-center">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="border px-4 py-2 text-white">#</th>
                        <th className="border px-4 py-2 text-white">Nombre</th>
                        <th className="border px-4 py-2 text-white">
                            Minimo Historico
                        </th>
                        <th className="border px-4 py-2 text-white">
                            Maximo Historico
                        </th>
                        <th className="border px-4 py-2 text-white">Precio</th>
                        <th className="border px-4 py-2 text-white">
                            Decrease from all Time High
                        </th>
                        <th className="border px-4 py-2 text-white">Ranking</th>
                    </tr>
                </thead>
                <tbody className="table-auto">
                    {arreglo.map((item, index) => {
                        return (
                            <React.Fragment key={item}>
                                <tr>
                                    <th className="border px-4 py-2 font-medium">
                                        {index}
                                    </th>
                                    <td className="border px-4 py-2 font-medium">
                                        {item.name}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {item.atl}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {item.ath}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {item.price}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        completar
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {item.rank}
                                    </td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default table;
