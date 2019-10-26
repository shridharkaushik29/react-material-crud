import { DialogProps } from "@material-ui/core/Dialog";
interface ConfirmDialogProps extends Partial<DialogProps> {
    open?: boolean;
}
export default function ConfirmDialog(props: ConfirmDialogProps): JSX.Element;
export {};
