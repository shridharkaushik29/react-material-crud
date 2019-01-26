import * as React from "react";
import {CrudContext} from "./CrudProvider";
import {CrudRequest} from "@crud/core/src";
import Button from "@material-ui/core/es/Button";
import Snackbar from "@material-ui/core/es/Snackbar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SnackbarContent from "@material-ui/core/es/SnackbarContent";
import classNames = require("classnames");

// @ts-ignore
@withStyles({
    error: {
        backgroundColor: "red"
    },
    success: {
        backgroundColor: "green"
    }
})
export class NotifySnackbar extends React.Component {

    context: CrudRequest

    props: {
        classes?: {
            error?: string,
            success?: string
        },
        autoHideDuration?: number,
        onOpen?: (data: any) => void
        action?: any
    }

    static contextType = CrudContext

    state: any = {
        action: this.props.action || <Button color="inherit" onClick={() => this.setState({open: false})}>Hide</Button>
    }

    onClose: () => void

    componentDidMount(): void {
        const $crud = this.context;
        $crud.config(config => {

            config.callbacks.notify = options => new Promise((resolve, reject) => {
                this.onClose = resolve
                const {type, message} = options
                this.setState({message, type, open: true})
            })

            return config;
        })
    }

    render(): React.ReactNode {

        const {classes, autoHideDuration = 2000} = this.props;
        const {message, type, action} = this.state;

        return <Snackbar autoHideDuration={autoHideDuration} open={!!this.state.open} onClose={() => {
            this.setState({
                open: false,
            })
            this.onClose()
        }}>
            <SnackbarContent
                classes={{
                    root: classNames(type === "success" ? classes.success : type === "error" ? classes.error : "")
                }}
                message={message}
                action={action}
            />
        </Snackbar>
    }
}