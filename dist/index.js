var axios = require('axios');
var rxjs = require('rxjs');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var AppService = /** @class */ (function () {
    function AppService() {
        this._appConfig$ = new rxjs.BehaviorSubject(null);
        this._authKey$ = new rxjs.BehaviorSubject('');
        this._userHeaders$ = new rxjs.BehaviorSubject(null);
    }
    Object.defineProperty(AppService, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    AppService.prototype.getConfig$ = function () {
        return this._appConfig$;
    };
    AppService.prototype.setConfig = function (config) {
        this._appConfig$.next(config);
    };
    AppService.prototype.getAuthKey$ = function () {
        return this._authKey$;
    };
    AppService.prototype.setAuthKey = function (authKey) {
        this._authKey$.next(authKey);
    };
    AppService.prototype.getUserHeaders$ = function () {
        return this._userHeaders$;
    };
    AppService.prototype.setUserHeaders = function (headers) {
        this._userHeaders$.next(headers);
    };
    return AppService;
}());
var _AppService = AppService.Instance;

var MODE_VALUES = {
    development: 'development',
    staging: 'staging',
    production: 'production',
};
var API_DOMAIN = {
    production: 'https://protocol.deviceuni.com/api/',
    staging: 'https:/dev-protocol.deviceuni.com/api/',
    development: 'http://localhost:5164/api/',
};

exports.CALL_TYPE = void 0;
(function (CALL_TYPE) {
    CALL_TYPE[CALL_TYPE["INCOMING"] = 0] = "INCOMING";
    CALL_TYPE[CALL_TYPE["OUTGOING"] = 1] = "OUTGOING";
    CALL_TYPE[CALL_TYPE["MISSED"] = 2] = "MISSED";
    CALL_TYPE[CALL_TYPE["VOICE_MAIL"] = 3] = "VOICE_MAIL";
    CALL_TYPE[CALL_TYPE["REJECTED"] = 4] = "REJECTED";
    CALL_TYPE[CALL_TYPE["BLOCKED"] = 5] = "BLOCKED";
    CALL_TYPE[CALL_TYPE["ANSWERED_EXTERNALLY"] = 6] = "ANSWERED_EXTERNALLY";
    CALL_TYPE[CALL_TYPE["UNKNOWN"] = 7] = "UNKNOWN";
    CALL_TYPE[CALL_TYPE["WIFI_INCOMING"] = 8] = "WIFI_INCOMING";
    CALL_TYPE[CALL_TYPE["WIFI_OUTGOING"] = 9] = "WIFI_OUTGOING";
})(exports.CALL_TYPE || (exports.CALL_TYPE = {}));
exports.CALL_TYPE_STRING = void 0;
(function (CALL_TYPE_STRING) {
    CALL_TYPE_STRING["INCOMING"] = "INCOMING";
    CALL_TYPE_STRING["OUTGOING"] = "OUTGOING";
    CALL_TYPE_STRING["MISSED"] = "MISSED";
    CALL_TYPE_STRING["VOICE_MAIL"] = "VOICE_MAIL";
    CALL_TYPE_STRING["REJECTED"] = "REJECTED";
    CALL_TYPE_STRING["BLOCKED"] = "BLOCKED";
    CALL_TYPE_STRING["ANSWERED_EXTERNALLY"] = "ANSWERED_EXTERNALLY";
    CALL_TYPE_STRING["UNKNOWN"] = "UNKNOWN";
    CALL_TYPE_STRING["WIFI_INCOMING"] = "WIFI_INCOMING";
    CALL_TYPE_STRING["WIFI_OUTGOING"] = "WIFI_OUTGOING";
})(exports.CALL_TYPE_STRING || (exports.CALL_TYPE_STRING = {}));
exports.DIRECTION = void 0;
(function (DIRECTION) {
    DIRECTION[DIRECTION["INCOMING"] = 0] = "INCOMING";
    DIRECTION[DIRECTION["OUTGOING"] = 1] = "OUTGOING";
})(exports.DIRECTION || (exports.DIRECTION = {}));
exports.DIRECTION_STRING = void 0;
(function (DIRECTION_STRING) {
    DIRECTION_STRING["INCOMING"] = "INCOMING";
    DIRECTION_STRING["OUTGOING"] = "OUTGOING";
})(exports.DIRECTION_STRING || (exports.DIRECTION_STRING = {}));

exports.DEVICE_ROLE = void 0;
(function (DEVICE_ROLE) {
    DEVICE_ROLE["DEVICE_MANAGER"] = "DEVICE_MANAGER";
    DEVICE_ROLE["DEVICE_MEMBER"] = "DEVICE_MEMBER";
})(exports.DEVICE_ROLE || (exports.DEVICE_ROLE = {}));
exports.DEVICE_OS = void 0;
(function (DEVICE_OS) {
    DEVICE_OS["IOS"] = "ios";
    DEVICE_OS["ANDROID"] = "android";
})(exports.DEVICE_OS || (exports.DEVICE_OS = {}));
exports.DEVICE_STATUS = void 0;
(function (DEVICE_STATUS) {
    DEVICE_STATUS["ACTIVE"] = "ACTIVE";
    DEVICE_STATUS["INACTIVE"] = "INACTIVE";
})(exports.DEVICE_STATUS || (exports.DEVICE_STATUS = {}));
exports.DEVICE_TYPE = void 0;
(function (DEVICE_TYPE) {
    DEVICE_TYPE[DEVICE_TYPE["WebApp"] = 0] = "WebApp";
    DEVICE_TYPE[DEVICE_TYPE["MobileApp"] = 1] = "MobileApp";
    DEVICE_TYPE[DEVICE_TYPE["DesktopApp"] = 2] = "DesktopApp";
})(exports.DEVICE_TYPE || (exports.DEVICE_TYPE = {}));

exports.FEATURE_CODE = void 0;
(function (FEATURE_CODE) {
    FEATURE_CODE["CONTACT"] = "CONTACT";
    FEATURE_CODE["PHONE_CALL_HISTORY"] = "PHONE-CALL-HISTORY";
    FEATURE_CODE["MESSAGE"] = "MESSAGE";
    FEATURE_CODE["PHOTO"] = "PHOTO";
    FEATURE_CODE["LOCATION"] = "LOCATION";
    FEATURE_CODE["CALENDAR"] = "CALENDAR";
    FEATURE_CODE["PHONE_CALL_RECORDING"] = "PHONE-CALL-RECORDING";
    FEATURE_CODE["FILE"] = "FILE";
    FEATURE_CODE["NOTIFICATION_HISTORY"] = "NOTIFICATION-HISTORY";
    FEATURE_CODE["KEY_LOGGER"] = "KEY-LOGGER";
    FEATURE_CODE["URL"] = "URL";
    FEATURE_CODE["CLIPBOARD"] = "CLIPBOARD";
    FEATURE_CODE["UNKNOWN"] = "UNKNOWN";
})(exports.FEATURE_CODE || (exports.FEATURE_CODE = {}));

var axiosInstanceDun;
var brandUrl = '';
var authKey = '';
var userHeaders = {};
// Get config, then set values to baseUrl and brandUrl
var config$ = _AppService.getConfig$();
config$.subscribe(function (config) {
    if (config) {
        var baseUrl = API_DOMAIN[config.mode];
        brandUrl = config.brandUrl;
        axiosInstanceDun = axiosInstance(baseUrl);
    }
});
// Get authKey, then set value to authKey
var authKey$ = _AppService.getAuthKey$();
authKey$.subscribe(function (key) {
    authKey = key;
});
// Get userHeaders, then set value to userHeaders
var userHeaders$ = _AppService.getUserHeaders$();
userHeaders$.subscribe(function (headers) {
    userHeaders = headers;
});
// Create axios instance
var axiosInstance = function (baseUrl) {
    var axiosClient = axios.create({
        baseURL: baseUrl,
        headers: {
            'content-type': 'application/json',
        },
    });
    axiosClient.interceptors.request.use(function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var header;
        return __generator(this, function (_a) {
            config.headers['BrandUrl'] = brandUrl;
            if (authKey) {
                config.headers['AuthKey'] = authKey;
            }
            for (header in userHeaders) {
                config.headers[header] = userHeaders[header];
            }
            return [2 /*return*/, config];
        });
    }); });
    axiosClient.interceptors.response.use(function (response) {
        if (response && response.data) {
            return response.data;
        }
        if (typeof response.data === 'boolean') {
            return response.data;
        }
        return response;
    }, function (error) {
        // Handle errors
        throw error;
    });
    return axiosClient;
};

// Format string by object
// Example: "Hello {friendName} I'm {myName}" with object {friendName: "Alice", myName: "Bob"} to "Hello Alice I'm Bob"
function formatStringByObj(str, obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str = str.replace("{".concat(key, "}"), obj[key].toString());
        }
    }
    return str;
}

var REST$e = 'calendars';
var resetPath$b = "".concat(REST$e, "/reset/{deviceId}");
var lastClientTimePath$b = "".concat(REST$e, "/last-client-time");
var getListCalendarAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var calendar, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                calendar = "".concat(REST$e);
                return [4 /*yield*/, axiosInstanceDun.get(calendar, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var resetCalendarAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$b, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeCalendarAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$b, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$d = 'calls';
var resetPath$a = "".concat(REST$d, "/reset/{deviceId}");
var lastClientTimePath$a = "".concat(REST$d, "/last-client-time");
var getListCallAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$d);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetCallAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$a, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteCallAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$d, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeCallAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$a, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$c = 'clipboards';
var resetPath$9 = "".concat(REST$c, "/reset/{deviceId}");
var lastClientTimePath$9 = "".concat(REST$c, "/last-client-time");
var getListClipboardAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var clipboard, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                clipboard = "".concat(REST$c);
                return [4 /*yield*/, axiosInstanceDun.get(clipboard, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetClipboardAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$9, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteClipboardAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$c, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeClipboardAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$9, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$b = 'contacts';
var resetPath$8 = "".concat(REST$b, "/reset/{deviceId}");
var lastClientTimePath$8 = "".concat(REST$b, "/last-client-time");
var getListContactAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$b);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetContactAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$8, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteContactAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$b, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeContactAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$8, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$a = 'devices/data-sync';
var getOrCreatePath$1 = "".concat(REST$a, "/get-or-create");
var createOrUpdatePath$1 = "".concat(REST$a, "/create-or-update");
var getOrCreateDeviceDataSync = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.get(getOrCreatePath$1, {
                    params: params,
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createOrUpdateDeviceDataSync = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.get(createOrUpdatePath$1, {
                    params: params,
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$9 = 'devices';
var GET_ALL_AGGREGATE_DEVICES_PATH = "".concat(REST$9, "/owner");
var getAllAggregateDevicesAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.get(GET_ALL_AGGREGATE_DEVICES_PATH, {
                    params: params,
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var deleteDeviceAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var id, url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = params.id;
                url = "".concat(REST$9, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(url)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateDeviceAPI = function (params, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var id, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = params.id;
                url = "".concat(REST$9, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.patch(url, payload)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$8 = 'devices/setting-sync';
var getOrCreatePath = "".concat(REST$8, "/get-or-create");
var createOrUpdatePath = "".concat(REST$8, "/create-or-update");
var getDeviceSettingSync = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.get(getOrCreatePath, {
                    params: params,
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var createOrUpdateDeviceSettingSync = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(createOrUpdatePath, params)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };

var REST$7 = 'files';
var resetPath$7 = "".concat(REST$7, "/reset/{deviceId}");
var lastClientTimePath$7 = "".concat(REST$7, "/last-client-time");
var getListFileAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var file, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                file = "".concat(REST$7);
                return [4 /*yield*/, axiosInstanceDun.get(file, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var resetFileAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$7, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteFileAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$7, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeFileAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$7, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$6 = 'gps';
var resetPath$6 = "".concat(REST$6, "/reset/{deviceId}");
var lastClientTimePath$6 = "".concat(REST$6, "/last-client-time");
var getListGPSAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var gps, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                gps = "".concat(REST$6);
                return [4 /*yield*/, axiosInstanceDun.get(gps, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetGPSAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$6, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteGPSAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$6, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeGPSAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$6, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };
var getLastGPSAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var gps, response, result;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                gps = "".concat(REST$6);
                return [4 /*yield*/, axiosInstanceDun.get(gps, {
                        params: {
                            deviceId: params === null || params === void 0 ? void 0 : params.deviceId,
                            limit: 1,
                            sort: 'GPS_Date',
                            order: 'DESC',
                        },
                    })];
            case 1:
                response = _c.sent();
                result = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0];
                if (!result)
                    return [2 /*return*/, null];
                return [2 /*return*/, result];
        }
    });
}); };

var REST$5 = 'keyloggers';
var resetPath$5 = "".concat(REST$5, "/reset/{deviceId}");
var lastClientTimePath$5 = "".concat(REST$5, "/last-client-time");
var getListKeyloggerAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var keylogger, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                keylogger = "".concat(REST$5);
                return [4 /*yield*/, axiosInstanceDun.get(keylogger, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetKeyloggerAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$5, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteKeyloggerAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$5, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeKeyloggerAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$5, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$4 = 'notifications';
var resetPath$4 = "".concat(REST$4, "/reset/{deviceId}");
var lastClientTimePath$4 = "".concat(REST$4, "/last-client-time");
var getListNotificationAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$4);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetNotificationAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$4, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteNotificationAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$4, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeNotificationAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$4, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$3 = 'phone-call-recordings';
var resetPath$3 = "".concat(REST$3, "/reset/{deviceId}");
var lastClientTimePath$3 = "".concat(REST$3, "/last-client-time");
var getListPhoneCallRecordingAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$3);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetPhoneCallRecordingAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$3, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deletePhoneCallRecordingAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$3, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimePhoneCallRecordingAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$3, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$2 = 'photos';
var resetPath$2 = "".concat(REST$2, "/reset/{deviceId}");
var lastClientTimePath$2 = "".concat(REST$2, "/last-client-time");
var getListPhotoAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var photo, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                photo = "".concat(REST$2);
                return [4 /*yield*/, axiosInstanceDun.get(photo, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data];
        }
    });
}); };
var resetPhotoAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$2, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deletePhotoAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$2, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimePhotoAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$2, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST$1 = 'SMS';
var resetPath$1 = "".concat(REST$1, "/reset/{deviceId}");
var lastClientTimePath$1 = "".concat(REST$1, "/last-client-time");
var getListSMSAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST$1);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetSMSAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath$1, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteSMSAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST$1, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeSMSAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath$1, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var REST = 'urls';
var resetPath = "".concat(REST, "/reset/{deviceId}");
var lastClientTimePath = "".concat(REST, "/last-client-time");
var getListURLAPI = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, _a, items, rest;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "".concat(REST);
                return [4 /*yield*/, axiosInstanceDun.get(url, {
                        params: params,
                    })];
            case 1:
                response = _b.sent();
                _a = response.data, items = _a.items, rest = __rest(_a, ["items"]);
                return [2 /*return*/, {
                        items: items,
                        pagination: rest,
                    }];
        }
    });
}); };
var resetURLAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axiosInstanceDun.post(formatStringByObj(resetPath, {
                    deviceId: deviceId,
                }))];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var deleteURLAPI = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var api, response, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                api = "".concat(REST, "/").concat(id);
                return [4 /*yield*/, axiosInstanceDun.delete(api)];
            case 1:
                response = _a.sent();
                isSuccess = response.data;
                return [2 /*return*/, isSuccess];
        }
    });
}); };
var getLastSyncTimeURLAPI = function (deviceId) { return __awaiter(void 0, void 0, void 0, function () {
    var params, response, lastSyncTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    deviceId: deviceId,
                };
                return [4 /*yield*/, axiosInstanceDun.get(lastClientTimePath, {
                        params: params,
                    })];
            case 1:
                response = _a.sent();
                lastSyncTime = response.data;
                return [2 /*return*/, lastSyncTime];
        }
    });
}); };

var AuthClient = /** @class */ (function () {
    function AuthClient(config) {
        _AppService.setConfig(config);
    }
    AuthClient.prototype.setAuthKey = function (authKey) {
        _AppService.setAuthKey(authKey);
    };
    AuthClient.prototype.setHeaders = function (headers) {
        _AppService.setUserHeaders(headers);
    };
    return AuthClient;
}());

exports.API_DOMAIN = API_DOMAIN;
exports.AuthClient = AuthClient;
exports.MODE_VALUES = MODE_VALUES;
exports.createOrUpdateDeviceDataSync = createOrUpdateDeviceDataSync;
exports.createOrUpdateDeviceSettingSync = createOrUpdateDeviceSettingSync;
exports.deleteCallAPI = deleteCallAPI;
exports.deleteClipboardAPI = deleteClipboardAPI;
exports.deleteContactAPI = deleteContactAPI;
exports.deleteDeviceAPI = deleteDeviceAPI;
exports.deleteFileAPI = deleteFileAPI;
exports.deleteGPSAPI = deleteGPSAPI;
exports.deleteKeyloggerAPI = deleteKeyloggerAPI;
exports.deleteNotificationAPI = deleteNotificationAPI;
exports.deletePhoneCallRecordingAPI = deletePhoneCallRecordingAPI;
exports.deletePhotoAPI = deletePhotoAPI;
exports.deleteSMSAPI = deleteSMSAPI;
exports.deleteURLAPI = deleteURLAPI;
exports.getAllAggregateDevicesAPI = getAllAggregateDevicesAPI;
exports.getDeviceSettingSync = getDeviceSettingSync;
exports.getLastGPSAPI = getLastGPSAPI;
exports.getLastSyncTimeCalendarAPI = getLastSyncTimeCalendarAPI;
exports.getLastSyncTimeCallAPI = getLastSyncTimeCallAPI;
exports.getLastSyncTimeClipboardAPI = getLastSyncTimeClipboardAPI;
exports.getLastSyncTimeContactAPI = getLastSyncTimeContactAPI;
exports.getLastSyncTimeFileAPI = getLastSyncTimeFileAPI;
exports.getLastSyncTimeGPSAPI = getLastSyncTimeGPSAPI;
exports.getLastSyncTimeKeyloggerAPI = getLastSyncTimeKeyloggerAPI;
exports.getLastSyncTimeNotificationAPI = getLastSyncTimeNotificationAPI;
exports.getLastSyncTimePhoneCallRecordingAPI = getLastSyncTimePhoneCallRecordingAPI;
exports.getLastSyncTimePhotoAPI = getLastSyncTimePhotoAPI;
exports.getLastSyncTimeSMSAPI = getLastSyncTimeSMSAPI;
exports.getLastSyncTimeURLAPI = getLastSyncTimeURLAPI;
exports.getListCalendarAPI = getListCalendarAPI;
exports.getListCallAPI = getListCallAPI;
exports.getListClipboardAPI = getListClipboardAPI;
exports.getListContactAPI = getListContactAPI;
exports.getListFileAPI = getListFileAPI;
exports.getListGPSAPI = getListGPSAPI;
exports.getListKeyloggerAPI = getListKeyloggerAPI;
exports.getListNotificationAPI = getListNotificationAPI;
exports.getListPhoneCallRecordingAPI = getListPhoneCallRecordingAPI;
exports.getListPhotoAPI = getListPhotoAPI;
exports.getListSMSAPI = getListSMSAPI;
exports.getListURLAPI = getListURLAPI;
exports.getOrCreateDeviceDataSync = getOrCreateDeviceDataSync;
exports.resetCalendarAPI = resetCalendarAPI;
exports.resetCallAPI = resetCallAPI;
exports.resetClipboardAPI = resetClipboardAPI;
exports.resetContactAPI = resetContactAPI;
exports.resetFileAPI = resetFileAPI;
exports.resetGPSAPI = resetGPSAPI;
exports.resetKeyloggerAPI = resetKeyloggerAPI;
exports.resetNotificationAPI = resetNotificationAPI;
exports.resetPhoneCallRecordingAPI = resetPhoneCallRecordingAPI;
exports.resetPhotoAPI = resetPhotoAPI;
exports.resetSMSAPI = resetSMSAPI;
exports.resetURLAPI = resetURLAPI;
exports.updateDeviceAPI = updateDeviceAPI;
//# sourceMappingURL=index.js.map
