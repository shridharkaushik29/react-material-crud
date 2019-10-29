import * as React from "react";
import {useContext, useEffect, useRef, useState} from "react";
import CrudContext from "@crud/react/CrudContext";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {AlertOptions} from "@crud/core";
import {DialogProps} from "@material-ui/core/Dialog";

interface AlertDialogProps extends Partial<DialogProps> {
    open?: boolean
}

export default function AlertDialog(props: AlertDialogProps) {

    const $crud = useContext(CrudContext);

    const [title, setTitle] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [textContent, setTextContent] = useState<string>("");
    const [okButtonText, setOkButtonContent] = useState<string>("");
    const onConfirm = useRef(null);

    useEffect(() => {
        $crud.config(config => {
            config.callbacks.alert = (alertOptions: AlertOptions = {}) => new Promise((resolve) => {
                const {textContent, title, options: {okButtonText = "Okay!"} = {}} = alertOptions;
                setTextContent(textContent);
                setTitle(title);
                setOkButtonContent(okButtonText);
                setOpen(true);
                onConfirm.current = resolve;
            });
            return config;
        })
    }, []);

    const close = () => {
        setOpen(false);
        onConfirm.current();
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
            <Button onClick={close} color="primary" autoFocus>
                {okButtonText}
            </Button>
        </DialogActions>
    </Dialog>
}
