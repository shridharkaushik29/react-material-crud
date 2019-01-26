import * as React from "react";
import {CrudRequest} from "@crud/core";
import {Context} from "react";

export const CrudContext: Context<CrudRequest> = React.createContext(null);

export class CrudProvider extends React.Component {

    props: {
        children: any,
        crud: CrudRequest
    }

    constructor(props) {
        super(props);
        if (!this.props.crud){
            throw "Please provide a CrudRequest instance"
        }
    }


    render(): React.ReactNode {
        return <CrudContext.Provider value={this.props.crud}>
            {this.props.children}
        </CrudContext.Provider>;
    }
}