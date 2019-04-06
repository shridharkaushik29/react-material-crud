import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {CrudRequest} from "@crud/core";
import {CrudContext} from "@crud/react";

export default class ConfirmDialog extends React.Component {

    context: CrudRequest

    static contextType = CrudContext

    state: any = {}

    onCancel: () => void
    onConfirm: () => void

    componentDidMount(): void {
        const $crud = this.context;
        $crud.config(config => {

            config.callbacks.confirm = (options = {}) => new Promise((resolve, reject) => {
                this.onConfirm = resolve
                this.onCancel = reject
                const {textContent, title, options: otherOptions = {}} = options
                const {cancel, ok} = otherOptions
                this.setState({textContent, title, open: true, cancel, ok})
            })

            return config;
        })
    }

    cancel() {
        this.setState({
            open: false
        })
        this.onCancel();
    }

    confirm() {
        this.setState({
            open: false
        })
        this.onConfirm();
    }

    render(): React.ReactNode {

        const {title = "Are you sure?", textContent = "This action may not be reversible", cancel = "No, I'm Not", ok = "Yes! Sure"} = this.state;

        return <Dialog
            fullWidth
            maxWidth="xs"
            open={!!this.state.open}
            onClose={() => this.setState({open: false})}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{textContent}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.cancel()} color="primary">
                    {cancel}
                </Button>
                <Button onClick={() => this.confirm()} color="primary" autoFocus>
                    {ok}
                </Button>
            </DialogActions>
        </Dialog>
    }
}
