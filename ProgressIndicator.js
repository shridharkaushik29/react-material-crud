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
var useStyles = core_1.makeStyles({
    root: {
        position: "absolute",
        top: 0,
        width: '100%',
        zIndex: 1301
    }
});
function ProgressIndicator(props) {
    var _a = react_1.useState(false), show = _a[0], setVisibility = _a[1];
    var classes = useStyles(props);
    var $crud = react_1.useContext(CrudContext_1.default);
    react_1.useEffect(function () {
        $crud.config(function (config) {
            config.callbacks.loading = function (value) { return setVisibility(value); };
            return config;
        });
    }, []);
    return show ? React.createElement(core_1.LinearProgress, __assign({ classes: classes }, props)) : null;
}
exports.default = ProgressIndicator;
