import * as React from "react";
import {CrudRequest} from "@crud/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import withStyles from "@material-ui/core/styles/withStyles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {CrudContext} from "@crud/react/CrudContext";
import classNames = require("classnames");

// @ts-ignore
@withStyles({
    error: {
        backgroundColor: "#a90000"
    },
    success: {
        backgroundColor: "#009f00"
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
            this.setState({open: false})
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
