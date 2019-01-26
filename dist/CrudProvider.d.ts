import * as React from "react";
import { CrudRequest } from "@crud/core";
import { Context } from "react";
export declare const CrudContext: Context<CrudRequest>;
export declare class CrudProvider extends React.Component {
    props: {
        children: any;
        crud: CrudRequest;
    };
    constructor(props: any);
    render(): React.ReactNode;
}
