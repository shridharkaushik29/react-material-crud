import * as React from "react";
import {CrudRequest} from "@crud/core";
import {LinearProgress} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {CrudContext} from "@crud/react/CrudContext";


// @ts-ignore
@withStyles({
    root: {
        position: "absolute",
        top: 0,
        width: '100%',
        zIndex: 1301
    }
})
export class ProgressIndicator extends React.Component {

    context: CrudRequest

    props: any

    static contextType = CrudContext

    state: any = {}

    onClose: () => void

    componentDidMount(): void {
        const $crud = this.context;
        $crud.config(config => {
            config.callbacks.loading = value => this.setState({show: value})
            return config;
        })
    }

    render(): React.ReactNode {

        const {color = "secondary", variant = "indeterminate", classes, ...props} = this.props;
        const {show} = this.state;

        return show ? <LinearProgress
            classes={{
                root: classes.root
            }}
            color={color}
            variant={variant}
            {...props}
        /> : null
    }
}
