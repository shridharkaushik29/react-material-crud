import * as React from "react";
import { CrudRequest } from "@crud/core";
export default class ConfirmDialog extends React.Component {
    context: CrudRequest;
    static contextType: React.Context<CrudRequest>;
    state: any;
    onCancel: () => void;
    onConfirm: () => void;
    componentDidMount(): void;
    cancel(): void;
    confirm(): void;
    render(): React.ReactNode;
}
