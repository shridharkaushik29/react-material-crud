import * as React from "react";
import {useContext, useEffect, useRef, useState} from "react";
import {SnackbarProps} from "@material-ui/core/Snackbar";
import {Button, makeStyles, Snackbar, SnackbarContent} from "@material-ui/core";
import {SnackbarContentProps} from "@material-ui/core/SnackbarContent";
import classNames from "classnames";
import {CrudRequest} from "@crud/core";
import CrudContext from "@crud/react/CrudContext";

const useStyles = makeStyles({
    error: {
        backgroundColor: "#a90000"
    },
    success: {
        backgroundColor: "#009f00"
    }
});

interface NotifySnackbarProps extends Partial<SnackbarProps> {
    contentProps?: SnackbarContentProps,
    closeText?: any,
    open?: boolean
}

export default function NotifySnackbar(props: NotifySnackbarProps) {
    const {contentProps = {}, closeText = "Hide", ...snackbarProps} = props;
    const $crud: CrudRequest = useContext(CrudContext);
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [action, setAction] = useState<any>(null);
    const [type, setType] = useState<"success" | "error" | "warning">(null);
    const onClose = useRef(null);
    const classes = useStyles(props);

    useEffect(() => {
        $crud.config(config => {

            config.callbacks.notify = options => new Promise((resolve) => {
                const {
                    type, message, options: {
                        action = <Button color="inherit" onClick={close}>{closeText}</Button>
                    } = {}
                } = options;
                setType(type);
                setAction(action);
                setMessage(message);
                setOpen(true);
                onClose.current = resolve;
            });

            return config;
        })
    }, []);

    const close = () => {
        onClose.current();
        setOpen(false);
    };

    return <Snackbar {...snackbarProps} open={open} onClose={close}>
        <SnackbarContent
            {...contentProps}
            classes={{
                ...contentProps.classes,
                root: classNames(type === "success" ? classes.success : type === "error" ? classes.error : ""),
            }}
            message={message}
            action={action}
        />
    </Snackbar>
}
