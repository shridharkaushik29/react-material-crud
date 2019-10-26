import { DialogProps } from "@material-ui/core/Dialog";
interface AlertDialogProps extends Partial<DialogProps> {
    open?: boolean;
}
export default function AlertDialog(props: AlertDialogProps): JSX.Element;
export {};
