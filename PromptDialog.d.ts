import { DialogProps } from "@material-ui/core/Dialog";
interface PromptDialogProps extends Partial<DialogProps> {
    open?: boolean;
}
export default function PromptDialog(props: PromptDialogProps): JSX.Element;
export {};
