import * as React from "react";
import { CrudRequest } from "@crud/core";
export interface PromptOptions {
    title?: string;
    textContent?: string;
    initialValue?: any;
    placeholder?: string;
    ok?: string;
    cancel?: string;
    dialogProps?: any;
}
export declare class PromptDialog extends React.Component {
    context: CrudRequest;
    static contextType: React.Context<CrudRequest>;
    state: any;
    onConfirm: (value: string) => void;
    onCancel: () => void;
    componentDidMount(): void;
    cancel(): void;
    confirm(): void;
    render(): React.ReactNode;
}
