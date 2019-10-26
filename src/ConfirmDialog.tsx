import * as React from "react";
import {useContext, useEffect, useRef, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {CrudRequest} from "@crud/core";
import CrudContext from "@crud/react/CrudContext";
import {DialogProps} from "@material-ui/core/Dialog";

interface ConfirmDialogProps extends Partial<DialogProps> {
    open?: boolean
}

export default function ConfirmDialog(props: ConfirmDialogProps) {

    const $crud: CrudRequest = useContext(CrudContext);

    const [title, setTitle] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [textContent, setTextContent] = useState<string>("");
    const [okButtonText, setOkButtonContent] = useState<string>("");
    const [cancelButtonText, setCancelButtonContent] = useState<string>("");
    const onClose = useRef(null);
    const onConfirm = useRef(null);

    useEffect(() => {
        $crud.config(config => {
            config.callbacks.confirm = (options = {}) => new Promise((resolve, reject) => {
                const {textContent = "This action may not be reversible", title = "Are you sure?", options: {cancel = "No, I'm Not", ok = "Yes! Sure"} = {}} = options;
                setTitle(title);
                setTextContent(textContent);
                setCancelButtonContent(cancel);
                setOkButtonContent(ok);
                onClose.current = reject;
                onConfirm.current = resolve;
                setOpen(true);
            });
            return config;
        })
    }, []);

    const confirm = () => {
        onClose.current = onConfirm.current;
        close();
    };

    const close = () => {
        setOpen(false);
        onClose.current();
    };

    return <Dialog
        fullWidth
        maxWidth="xs"
        {...props}
        open={open}
        onClose={close}
    >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>{textContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={close} color="primary">
                {cancelButtonText}
            </Button>
            <Button onClick={confirm} color="primary" autoFocus>
                {okButtonText}
            </Button>
        </DialogActions>
    </Dialog>
}

