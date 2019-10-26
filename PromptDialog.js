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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var CrudContext_1 = __importDefault(require("@crud/react/CrudContext"));
function PromptDialog(props) {
    var $crud = react_1.useContext(CrudContext_1.default);
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(""), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(""), type = _d[0], setType = _d[1];
    var _e = react_1.useState(""), label = _e[0], setLabel = _e[1];
    var _f = react_1.useState(""), placeholder = _f[0], setPlaceholder = _f[1];
    var _g = react_1.useState(""), textContent = _g[0], setTextContent = _g[1];
    var _h = react_1.useState(""), okButtonText = _h[0], setOkButtonContent = _h[1];
    var _j = react_1.useState(""), cancelButtonText = _j[0], setCancelButtonContent = _j[1];
    var onClose = react_1.useRef(null);
    var onConfirm = react_1.useRef(null);
    react_1.useEffect(function () {
        $crud.config(function (config) {
            config.callbacks.prompt = function (options) {
                if (options === void 0) { options = {}; }
                return new Promise(function (resolve, reject) {
                    var _a = options.textContent, textContent = _a === void 0 ? "" : _a, _b = options.title, title = _b === void 0 ? "" : _b, _c = options.cancelButtonText, cancelButtonText = _c === void 0 ? "Cancel" : _c, _d = options.confirmButtonText, confirmButtonText = _d === void 0 ? "Submit" : _d, _e = options.options, _f = _e === void 0 ? {} : _e, _g = _f.value, value = _g === void 0 ? "" : _g, _h = _f.label, label = _h === void 0 ? "" : _h, _j = _f.placeholder, placeholder = _j === void 0 ? "Type here..." : _j, _k = _f.type, type = _k === void 0 ? "text" : _k;
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
    return react_1.default.createElement(core_1.Dialog, __assign({ maxWidth: "xs", fullWidth: true }, props, { open: open, onClose: close }),
        react_1.default.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, title),
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.Typography, { variant: "h6" }, textContent),
            react_1.default.createElement(core_1.TextField, { autoFocus: true, margin: "dense", id: "name", label: label, placeholder: placeholder, type: type, value: value, onChange: function (e) { return setValue(e.target.value); }, fullWidth: true })),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { onClick: close, color: "primary" }, cancelButtonText),
            react_1.default.createElement(core_1.Button, { onClick: confirm, color: "primary" }, okButtonText)));
}
exports.default = PromptDialog;
