import * as React from "react";
import { CrudRequest } from "@crud/core";
export declare class NotifySnackbar extends React.Component {
    context: CrudRequest;
    props: {
        classes?: {
            error?: string;
            success?: string;
        };
        autoHideDuration?: number;
        onOpen?: (data: any) => void;
        action?: any;
    };
    static contextType: React.Context<CrudRequest>;
    state: any;
    onClose: () => void;
    componentDidMount(): void;
    render(): React.ReactNode;
}
