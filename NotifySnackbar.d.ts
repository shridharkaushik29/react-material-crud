import { SnackbarProps } from "@material-ui/core/Snackbar";
import { SnackbarContentProps } from "@material-ui/core/SnackbarContent";
interface NotifySnackbarProps extends Partial<SnackbarProps> {
    contentProps?: SnackbarContentProps;
    closeText?: any;
    open?: boolean;
}
export default function NotifySnackbar(props: NotifySnackbarProps): JSX.Element;
export {};
