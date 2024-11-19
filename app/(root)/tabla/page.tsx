import React from "react";
import Tablita from "@/components/Tablita";
import { Data, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(lista: string[]): Promise<Data[]> {
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
            const data = {
                ...itemFound.data[property],
                name: property,
                desdeAth:
                    Number(itemFound.data[property].price) /
                    Number(itemFound.data[property].ath),
                desdeAtl:
                    Number(itemFound.data[property].price) /
                    Number(itemFound.data[property].atl),
            };

            arreglo.push(data);
        }
        // console.log("pasado a arreglo queda");
        console.log(arreglo);
    } catch (error) {
        console.log(error);
    }
    return arreglo;
}

const page = async () => {
    const list20x = ["link", "avax", "atom", "shib"];
    const list50x = ["icp", "xdc", "egld", "dot", "matic", "op", "arb"];
    const list100x = [
        "mtrg",
        "inj",
        "kas",
        "qnt",
        "tao",
        "dag",
        "kuji",
        "cspr",
        "rdnt",
        "mnw",
        "rose",
        "rndr",
        "chng",
        "azero",
        "hello",
        "fet",
        "woo",
    ];
    const list1000x = [
        "rio",
        "rvf",
        "mlt",
        "ator",
        "tet",
        "naka",
        "csix",
        "tava",
        "tara",
        "kata",
        "trias",
        "dione",
        "space",
        "cyber",
        "octa",
        "loop",
        "leox",
        "opti",
        "vetme",
        "was",
        "rose",
        "seph",
        "zano",
        "sersh",
        "xna",
        "paal",
        "zig",
        "vra",
        "octa",
        "lai",
        "alph",
        "qubic",
        "nexa",
        "koin",
        "kuji",
        "sfund",
        "rvf",
        "chng",
        "frm",
        "vetme"
    ];
    const listaNueva=["cell", 
        "jasmy",
        "grt" ,
        "alt",
        "kda",
        "gmx",
        "kas",
        "arb",
        "rose",
        "frm",
        "matic",
        "inj",
        "uni","ada","xrp","ltc"]

    const listaBanter=["sol", "stx", "link", "strd", "astro","aevo","pendle","rune","rndr", "fil", "super", "crown", "imx","sfund","rlb","redo","ar","blur"]
    const data20 = await getData(list20x);
    const data50 = await getData(list50x);
    const data100 = await getData(list100x);
    const data1000 = await getData(list1000x);
    const dataListaNueva=await getData(listaNueva);
    const dataBanter=await getData(listaBanter);

    return (
        <div>
            {/* <h1>Monedas con potencial</h1>
            <h2 className="my-5">20X</h2>
            <Tablita lista={list20x} />
            <h2 className="my-5">50X</h2>
            <Tablita lista={list50x} />
            <h2 className="my-5">100X</h2>
            <Tablita lista={list100x} />
            <h2 className="my-5">1000X</h2>
            <Tablita lista={list1000x} /> */}

            <h2 className="my-5">20X</h2>
            <DataTable columns={columns} data={data20} />
            <h2 className="my-5">50X</h2>
            <DataTable columns={columns} data={data50} />
            <h2 className="my-5">100X</h2>
            <DataTable columns={columns} data={data100} />
            <h2 className="my-5">1000X</h2>
            <DataTable columns={columns} data={data1000} />
            <h2 className="my-5">Lista nueva</h2>
            <DataTable columns={columns} data={dataListaNueva} />
            <h2 className="my-5">Lista Banter</h2>
            <DataTable columns={columns} data={dataBanter} />
        </div>
    );
};

export default page;
