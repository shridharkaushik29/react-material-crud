import * as React from "react";
import { CrudRequest } from "@crud/core/src";
export declare class ProgressIndicator extends React.Component {
    context: CrudRequest;
    props: any;
    static contextType: React.Context<CrudRequest>;
    state: any;
    onClose: () => void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
