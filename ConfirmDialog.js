"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var CrudContext_1 = __importDefault(require("@crud/react/CrudContext"));
function ConfirmDialog(props) {
    var $crud = react_1.useContext(CrudContext_1.default);
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(""), textContent = _c[0], setTextContent = _c[1];
    var _d = react_1.useState(""), okButtonText = _d[0], setOkButtonContent = _d[1];
    var _e = react_1.useState(""), cancelButtonText = _e[0], setCancelButtonContent = _e[1];
    var onClose = react_1.useRef(null);
    var onConfirm = react_1.useRef(null);
    react_1.useEffect(function () {
        $crud.config(function (config) {
            config.callbacks.confirm = function (options) {
                if (options === void 0) { options = {}; }
                return new Promise(function (resolve, reject) {
                    var _a = options.textContent, textContent = _a === void 0 ? "This action may not be reversible" : _a, _b = options.title, title = _b === void 0 ? "Are you sure?" : _b, _c = options.options, _d = _c === void 0 ? {} : _c, _e = _d.cancel, cancel = _e === void 0 ? "No, I'm Not" : _e, _f = _d.ok, ok = _f === void 0 ? "Yes! Sure" : _f;
                    setTitle(title);
                    setTextContent(textContent);
                    setCancelButtonContent(cancel);
                    setOkButtonContent(ok);
                    onClose.current = reject;
                    onConfirm.current = resolve;
                    setOpen(true);
                });
            };
            return config;
        });
    }, []);
    var confirm = function () {
        onClose.current = onConfirm.current;
        close();
    };
    var close = function () {
        setOpen(false);
        onClose.current();
    };
    return React.createElement(core_1.Dialog, __assign({ fullWidth: true, maxWidth: "xs" }, props, { open: open, onClose: close }),
        React.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, title),
        React.createElement(core_1.DialogContent, null,
            React.createElement(core_1.DialogContentText, null, textContent)),
        React.createElement(core_1.DialogActions, null,
            React.createElement(core_1.Button, { onClick: close, color: "primary" }, cancelButtonText),
            React.createElement(core_1.Button, { onClick: confirm, color: "primary", autoFocus: true }, okButtonText)));
}
exports.default = ConfirmDialog;
