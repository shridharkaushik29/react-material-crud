import * as React from "react";
import { CrudRequest } from "@crud/core";
export default class ProgressIndicator extends React.Component {
    context: CrudRequest;
    props: any;
    static contextType: React.Context<CrudRequest>;
    state: any;
    onClose: () => void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
