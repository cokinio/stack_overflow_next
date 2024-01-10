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
                method: "GET",
                headers: {
                    authorization: process.env.MOBULA_API_KEY,
                },
            }
        );
        itemFound = await res.json();
        // console.log(`la respuesta de ${lista} es ${itemFound.data}`);
        // console.log("la data es");
        // console.log(itemFound);
        for (const property in itemFound.data) {
            const data = { ...itemFound.data[property], name: property };
            arreglo.push(data);
        }
        // console.log("pasado a arreglo queda");
        // console.log(arreglo);
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
                            El precio actual es el % del ath
                        </th>
                        <th className="border px-4 py-2 text-white">
                            El precio actual subio tantas veces desde el atl
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
                                        {Number(item.atl).toFixed(5)}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {Number(item.ath).toFixed(5)}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {Number(item.price).toFixed(5)}
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {(
                                            (Number(item.price) /
                                                Number(item.ath)) *
                                            100
                                        ).toFixed(2)}
                                        %
                                    </td>
                                    <td className="border px-4 py-2 font-medium">
                                        {(
                                            (Number(item.price) /
                                                Number(item.atl)) *
                                            100
                                        ).toFixed(2)}
                                        %
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
