import React, {useContext, useEffect, useRef, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import {CrudRequest} from "@crud/core";
import CrudContext from "@crud/react/CrudContext";
import {DialogProps} from "@material-ui/core/Dialog";

interface PromptDialogProps extends Partial<DialogProps> {
    open?: boolean
}

export default function PromptDialog(props: PromptDialogProps) {

    const $crud: CrudRequest = useContext(CrudContext);

    const [title, setTitle] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [label, setLabel] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("");
    const [textContent, setTextContent] = useState<string>("");
    const [okButtonText, setOkButtonContent] = useState<string>("");
    const [cancelButtonText, setCancelButtonContent] = useState<string>("");
    const onClose = useRef(null);
    const onConfirm = useRef(null);

    useEffect(() => {
        $crud.config(config => {
            config.callbacks.prompt = (options = {}) => new Promise((resolve, reject) => {
                const {textContent = "", title = "", cancelButtonText = "Cancel", confirmButtonText = "Submit", options: {value = "", label = "", placeholder = "Type here...", type = "text"} = {}} = options;
                setOkButtonContent(confirmButtonText);
                setCancelButtonContent(cancelButtonText);
                setValue(value);
                setLabel(label);
                setType(type);
                setPlaceholder(placeholder);
                setTitle(title);
                setTextContent(textContent);
                onConfirm.current = resolve;
                onClose.current = reject;
                setOpen(true);
            });

            return config;
        });
    }, []);

    const confirm = () => {
        onClose.current = onConfirm.current;
        close();
    };

    const close = () => {
        setOpen(false);
        onClose.current();
    };

    return <Dialog maxWidth="xs" fullWidth {...props} open={open} onClose={close}>
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <Typography variant="h6">{textContent}</Typography>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label={label}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={close} color="primary">
                {cancelButtonText}
            </Button>
            <Button onClick={confirm} color="primary">
                {okButtonText}
            </Button>
        </DialogActions>
    </Dialog>
}
