import * as React from "react";
import {CrudRequest} from "@crud/core";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import {CrudContext} from "@crud/react/CrudContext";

export interface PromptOptions {
    title?: string,
    textContent?: string,
    initialValue?: any,
    placeholder?: string,
    ok?: string
    cancel?: string,
    dialogProps?: any
}

export default class PromptDialog extends React.Component {

    context: CrudRequest

    static contextType = CrudContext

    state: any = {}

    onConfirm: (value: string) => void
    onCancel: () => void

    componentDidMount(): void {
        const $crud = this.context;
        $crud.config(config => {

            config.callbacks.prompt = (options = {}) => new Promise((resolve, reject) => {
                this.onConfirm = resolve
                this.onCancel = reject
                const {textContent, title, placeholder, initialValue = ""} = options
                this.setState({textContent, title, placeholder, show: true, value: initialValue})
            })

            return config;
        })
    }

    cancel() {
        this.setState({
            show: false
        })
        this.onCancel();
    }

    confirm() {
        this.setState({
            show: false
        })
        this.onConfirm(String(this.state.value));
    }

    render(): React.ReactNode {
        const {textContent = "", title = "", inputType = "text", placeholder = "Type here...", label = "", cancel = "Cancel", ok = "Submit"} = this.state
        return <Dialog maxWidth="xs" fullWidth open={!!this.state.show} onClose={() => this.setState({show: false})}>
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <Typography variant="h6">{textContent}</Typography>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={label}
                    placeholder={placeholder}
                    type={inputType}
                    value={this.state.value}
                    onChange={event => {
                        const value = event.target.value;
                        this.setState(({...state}: any) => {
                            state.value = value
                            return state;
                        })
                    }}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => this.cancel()} color="primary">
                    {cancel}
                </Button>
                <Button onClick={() => this.confirm()} color="primary">
                    {ok}
                </Button>
            </DialogActions>
        </Dialog>
    }
}
