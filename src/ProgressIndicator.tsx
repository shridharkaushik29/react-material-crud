import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {CrudRequest} from "@crud/core";
import {LinearProgress, makeStyles} from "@material-ui/core";
import CrudContext from "@crud/react/CrudContext";
import {LinearProgressProps} from "@material-ui/core/LinearProgress";

interface ProgressIndicatorProps extends Partial<LinearProgressProps> {

}

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: 0,
        width: '100%',
        zIndex: 1301
    }
});

export default function ProgressIndicator(props: ProgressIndicatorProps) {

    const [show, setVisibility] = useState<boolean>(false);

    const classes = useStyles(props);

    const $crud: CrudRequest = useContext(CrudContext);

    useEffect(() => {
        $crud.config(config => {
            config.callbacks.loading = value => setVisibility(value);
            return config;
        })
    }, []);

    return show ? <LinearProgress classes={classes} {...props}/> : null
}
