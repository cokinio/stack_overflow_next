import React from "react";
import Tablita from "@/components/Tablita";

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
    ];

    return (
        <div>
            <h1>Monedas con potencial</h1>
            <h2 className="my-5">20X</h2>
            <Tablita lista={list20x} />
            <h2 className="my-5">50X</h2>
            <Tablita lista={list50x} />
            <h2 className="my-5">100X</h2>
            <Tablita lista={list100x} />
            <h2 className="my-5">1000X</h2>
            <Tablita lista={list1000x} />
        </div>
    );
};

export default page;
