import * as React from "react";
import { CrudRequest } from "@crud/core";
export default class AlertDialog extends React.Component<{
    dialogProps?: any;
}, any> {
    context: CrudRequest;
    static contextType: React.Context<CrudRequest>;
    state: any;
    onConfirm: () => void;
    componentDidMount(): void;
    confirm(): void;
    render(): React.ReactNode;
}
