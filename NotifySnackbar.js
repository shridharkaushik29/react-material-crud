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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
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
var classnames_1 = __importDefault(require("classnames"));
var CrudContext_1 = __importDefault(require("@crud/react/CrudContext"));
var useStyles = core_1.makeStyles({
    error: {
        backgroundColor: "#a90000"
    },
    success: {
        backgroundColor: "#009f00"
    }
});
function NotifySnackbar(props) {
    var $crud = react_1.useContext(CrudContext_1.default);
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_1.useState(""), message = _b[0], setMessage = _b[1];
    var _c = react_1.useState(null), action = _c[0], setAction = _c[1];
    var _d = react_1.useState(null), type = _d[0], setType = _d[1];
    var onClose = react_1.useRef(null);
    var _e = props.contentProps, contentProps = _e === void 0 ? {} : _e, snackbarProps = __rest(props, ["contentProps"]);
    var classes = useStyles(props);
    react_1.useEffect(function () {
        $crud.config(function (config) {
            config.callbacks.notify = function (options) { return new Promise(function (resolve) {
                var type = options.type, message = options.message, _a = options.options, _b = (_a === void 0 ? {} : _a).action, action = _b === void 0 ? React.createElement(core_1.Button, { color: "inherit", onClick: close }, props.closeText ?? "Hide" ) : _b;
                setType(type);
                setAction(action);
                setMessage(message);
                setOpen(true);
                onClose.current = resolve;
            }); };
            return config;
        });
    }, []);
    var close = function () {
        onClose.current();
        setOpen(false);
    };
    return React.createElement(core_1.Snackbar, __assign({}, snackbarProps, { open: open, onClose: close }),
        React.createElement(core_1.SnackbarContent, __assign({}, contentProps, { classes: __assign({}, contentProps.classes, { root: classnames_1.default(type === "success" ? classes.success : type === "error" ? classes.error : "") }), message: message, action: action })));
}
exports.default = NotifySnackbar;
