import * as React from "react";
import {CrudContext} from "@crud/react";
import {CrudRequest} from "@crud/core";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

export default class AlertDialog extends React.Component<{
    dialogProps?: any
}, any> {
    context: CrudRequest

    static contextType = CrudContext

    state: any = {}

    onConfirm: () => void

    componentDidMount(): void {
        const $crud = this.context;
        $crud.config(config => {

            config.callbacks.alert = (options = {}) => new Promise((resolve) => {
                this.onConfirm = resolve
                const {textContent, title, options: {ok, cancel}} = options
                this.setState({textContent, title, open: true, cancel, ok})
            })

            return config;
        })
    }


    confirm() {
        this.setState({
            open: false
        })
        this.onConfirm();
    }

    render(): React.ReactNode {

        const {
            state: {title, textContent, ok = "Hide"},
            props: {dialogProps}
        } = this;

        return <Dialog
            fullWidth
            maxWidth="xs"
            open={!!this.state.open}
            onClose={() => this.setState({open: false})}
            {...dialogProps}
        >
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{textContent}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.confirm()} color="primary" autoFocus>
                    {ok}
                </Button>
            </DialogActions>
        </Dialog>
    }
}
