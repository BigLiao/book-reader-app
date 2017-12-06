webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat_list_chat_list_component__ = __webpack_require__("../../../../../src/app/chat/chat-list/chat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discover_discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover/discover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__me_me_me_component__ = __webpack_require__("../../../../../src/app/me/me/me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_guard_service__ = __webpack_require__("../../../../../src/app/login/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_8__login_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_login_guard_service__["a" /* LoginGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
        children: [
            {
                path: 'index',
                component: __WEBPACK_IMPORTED_MODULE_3__chat_chat_list_chat_list_component__["a" /* ChatListComponent */],
            },
            {
                path: 'dialog/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_dialog_component__["a" /* DialogComponent */]
            },
            {
                path: 'contacts',
                component: __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_contacts_component__["a" /* ContactsComponent */]
            }, {
                path: 'discover',
                component: __WEBPACK_IMPORTED_MODULE_5__discover_discover_discover_component__["a" /* DiscoverComponent */]
            }, {
                path: 'me',
                component: __WEBPACK_IMPORTED_MODULE_6__me_me_me_component__["a" /* MeComponent */]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'main/index',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_module__ = __webpack_require__("../../../../../src/app/contacts/contacts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover_module__ = __webpack_require__("../../../../../src/app/discover/discover.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__me_me_module__ = __webpack_require__("../../../../../src/app/me/me.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_guard_service__ = __webpack_require__("../../../../../src/app/login/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__chat_chat_module__["a" /* ChatModule */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_module__["a" /* ContactsModule */],
                __WEBPACK_IMPORTED_MODULE_6__discover_discover_module__["a" /* DiscoverModule */],
                __WEBPACK_IMPORTED_MODULE_7__me_me_module__["a" /* MeModule */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_11__service_me_service__["a" /* MeService */], __WEBPACK_IMPORTED_MODULE_13__login_login_guard_service__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_16__service_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-item/chat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-item\" (click)=\"clickItem()\">\r\n  <div class=\"avatar\" [style.background]=\"dialog.user.avatar\">\r\n    <img [src]=\"dialog.user.avatar\" alt=\"\">\r\n  </div>\r\n  <div class=\"box\">\r\n    <div class=\"name\">{{dialog.user.name}}</div>\r\n    <div class=\"text\">{{dialog.msg}}</div>\r\n  </div>\r\n  <div class=\"time\">\r\n    7:00 PM\r\n  </div>\r\n  <div class=\"clock\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat-item/chat-item.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-item {\n  position: relative;\n  width: 100%;\n  height: 64px;\n  box-sizing: border-box;\n  padding: 8px 15px;\n  background: #fff;\n  position: relative;\n  line-height: 1.2em;\n}\n.chat-item::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-bottom: 1px solid #d9d9d9;\n  content: ' ';\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-radio: 1.5) {\n  .chat-item::after {\n    -webkit-transform: scaleY(0.7);\n    transform: scaleY(0.7);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-radio: 2) {\n  .chat-item::after {\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-radio: 3) {\n  .chat-item::after {\n    -webkit-transform: scaleY(0.3);\n    transform: scaleY(0.3);\n  }\n}\n.chat-item:active {\n  background: #d9d9d9;\n}\n.chat-item .avatar {\n  width: 48px;\n  height: 48px;\n  background: #e45469;\n  float: left;\n}\n.chat-item .box {\n  float: left;\n  width: calc(100% - 88px);\n  height: 100%;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding-left: 12px;\n}\n.chat-item .box .name {\n  font-size: 16px;\n  color: #353535;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-item .box .text {\n  font-size: 12px;\n  color: #999;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chat-item .time {\n  position: absolute;\n  right: 15px;\n  top: 14px;\n  font-size: 10px;\n  color: #999;\n}\n.chat-item .clock {\n  float: right;\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 40px;\n          flex: 0 0 40px;\n  width: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-item/chat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatItemComponent; });
/* unused harmony export Dialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatItemComponent = (function () {
    function ChatItemComponent(router) {
        this.router = router;
    }
    ChatItemComponent.prototype.ngOnInit = function () {
    };
    ChatItemComponent.prototype.clickItem = function () {
        this.router.navigate(['/dialog/' + this.dialog.user.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Dialog)
    ], ChatItemComponent.prototype, "dialog", void 0);
    ChatItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-item',
            template: __webpack_require__("../../../../../src/app/chat/chat-item/chat-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat-item/chat-item.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ChatItemComponent);
    return ChatItemComponent;
}());

var Dialog = (function () {
    function Dialog() {
    }
    return Dialog;
}());

var auser = {
    name: 'xiaoming',
    id: 12345,
    avatar: ''
};
var newDialog = {
    user: auser,
    msg: 'hello, what are you doing?',
    time: '12:00'
};


/***/ }),

/***/ "../../../../../src/app/chat/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"chat-list\">\r\n  <li class=\"item\" *ngFor=\"let item of dialogList\">\r\n    <app-chat-item [dialog]=item></app-chat-item>\r\n  </li>\r\n</ul>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/chat/chat-list/chat-list.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-list/chat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatListComponent = (function () {
    function ChatListComponent(store) {
        var _this = this;
        this.store = store;
        this.dialogList = this._geneDialogList(this.store.msgStore);
        this.store.msgStoreChange.subscribe(function (msgStore) {
            _this.dialogList = _this._geneDialogList(msgStore);
        });
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    // sendMsg(msg: string) {
    //   this.store.sendMsg(msg);
    // }
    ChatListComponent.prototype._geneDialogList = function (msgStore) {
        // Object.keys(this.store.msgStore)
        var list = [];
        for (var _i = 0, _a = Object.keys(msgStore); _i < _a.length; _i++) {
            var key = _a[_i];
            var user = this.store.getUser(key);
            var msgList = msgStore[key];
            var msgObj = msgList[msgList.length - 1];
            var msg = msgObj.msg;
            var time = msgObj.time;
            var hasNew = false;
            var dialog = new Dialog(user, msg, time, hasNew);
            list.push(dialog);
        }
        return list.sort(function (a, b) {
            return a.time - b.time;
        });
    };
    ChatListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-list',
            template: __webpack_require__("../../../../../src/app/chat/chat-list/chat-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat-list/chat-list.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */]])
    ], ChatListComponent);
    return ChatListComponent;
}());

var Dialog = (function () {
    function Dialog(user, msg, time, hasNew) {
        this.user = user;
        this.msg = msg;
        this.time = time;
        this.hasNew = hasNew;
    }
    return Dialog;
}());


/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_item_chat_item_component__ = __webpack_require__("../../../../../src/app/chat/chat-item/chat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_list_chat_list_component__ = __webpack_require__("../../../../../src/app/chat/chat-list/chat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_module__ = __webpack_require__("../../../../../src/app/dialog/dialog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_module__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]
                // ChatRoutingModule
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat_item_chat_item_component__["a" /* ChatItemComponent */],
                __WEBPACK_IMPORTED_MODULE_3__chat_list_chat_list_component__["a" /* ChatListComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_item_chat_item_component__["a" /* ChatItemComponent */],
                __WEBPACK_IMPORTED_MODULE_3__chat_list_chat_list_component__["a" /* ChatListComponent */]
            ],
            providers: []
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts-item/contacts-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-item\" [routerLink]=\"'/dialog/'+user.id\">\r\n  <div class=\"content\">\r\n    <div class=\"avatar\" [style.background]=\"user.avatar\">\r\n      <img [src]=\"user.avatar\" alt=\"\">\r\n    </div>\r\n    <div class=\"name\">{{user.name}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts-item/contacts-item.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contacts-item {\n  width: 100%;\n  box-sizing: border-box;\n  height: 52px;\n  padding: 0 12px;\n  background: #fff;\n}\n.contacts-item:active {\n  background: #d9d9d9;\n}\n.contacts-item .content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.contacts-item .content::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  border-bottom: 1px solid #d9d9d9;\n  content: ' ';\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-radio: 1.5) {\n  .contacts-item .content::after {\n    -webkit-transform: scaleY(0.7);\n    transform: scaleY(0.7);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-radio: 2) {\n  .contacts-item .content::after {\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-radio: 3) {\n  .contacts-item .content::after {\n    -webkit-transform: scaleY(0.3);\n    transform: scaleY(0.3);\n  }\n}\n.contacts-item .avatar {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 36px;\n          flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  background: #233459;\n}\n.contacts-item .name {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 36px;\n  line-height: 36px;\n  font-size: 16px;\n  padding-left: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts-item/contacts-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsItemComponent = (function () {
    function ContactsItemComponent() {
    }
    ContactsItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__service_me_service__["b" /* User */])
    ], ContactsItemComponent.prototype, "user", void 0);
    ContactsItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts-item',
            template: __webpack_require__("../../../../../src/app/contacts/contacts-item/contacts-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts-item/contacts-item.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsItemComponent);
    return ContactsItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_item_contacts_item_component__ = __webpack_require__("../../../../../src/app/contacts/contacts-item/contacts-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */], __WEBPACK_IMPORTED_MODULE_3__contacts_item_contacts_item_component__["a" /* ContactsItemComponent */]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\">\r\n  <ul class=\"list\">\r\n    <li class=\"item\" *ngFor=\"let user of onlineUserList\">\r\n      <app-contacts-item [user]=\"user\"></app-contacts-item>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts/contacts.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contacts {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #ebebeb;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = (function () {
    function ContactsComponent(store) {
        this.store = store;
        this.user = {
            name: '小明',
            id: 'q2w21',
            avatar: ''
        };
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('contacts');
        this.onlineUserList = this.store.userList;
        this.store.userListChange.subscribe(function (userList) {
            _this.onlineUserList = userList;
        });
        console.log(this.onlineUserList);
    };
    ContactsComponent.prototype._getUserList = function () {
        // this.store.getUserList();
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts/contacts.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog-box/dialog-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-box\">\r\n  <div class=\"container\" #container>\r\n    <ul #scroll>\r\n      <li class=\"item\" *ngFor=\"let item of msgList\">\r\n          <app-dialog-item [isLeft]=\"!(item.from===me.id)\" [text]=\"item.msg\" [avatar]=\"item.from===me.id?me.avatar:user.avatar\"></app-dialog-item>        \r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog-box/dialog-box.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-box {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding: 0 8px;\n  overflow: hidden;\n}\n.dialog-box .container {\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n}\n.dialog-box .container .item {\n  padding-bottom: 12px;\n}\n.dialog-box .container .item:first-child {\n  padding-top: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog-box/dialog-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogBoxComponent = (function () {
    function DialogBoxComponent(store) {
        this.store = store;
        this.me = this.store.me;
    }
    DialogBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recieveMsg.subscribe(function (e) {
            // this.scrollToBottom()
            setTimeout(function () {
                _this.scrollToBottom();
            }, 20);
            console.log(_this.store.msgStore);
            console.log(_this.msgList);
            console.log('reciveemsg:' + e);
        });
    };
    DialogBoxComponent.prototype.scrollToBottom = function () {
        var containerHeight = this.containerEL.nativeElement.clientHeight;
        var cscrollTop = this.containerEL.nativeElement.scrollTop;
        var scrollHeight = this.scrollEl.nativeElement.scrollHeight;
        var scrollTop = this.scrollEl.nativeElement.scrollTop;
        if (scrollHeight > containerHeight) {
            this.containerEL.nativeElement.scrollTop = scrollHeight - containerHeight;
        }
        console.log(scrollHeight + ':' + containerHeight + '-' + scrollTop + '*' + cscrollTop);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DialogBoxComponent.prototype, "scrollEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DialogBoxComponent.prototype, "containerEL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DialogBoxComponent.prototype, "msgList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"])
    ], DialogBoxComponent.prototype, "recieveMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__service_me_service__["b" /* User */])
    ], DialogBoxComponent.prototype, "user", void 0);
    DialogBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-box',
            template: __webpack_require__("../../../../../src/app/dialog/dialog-box/dialog-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog-box/dialog-box.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */]])
    ], DialogBoxComponent);
    return DialogBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog-item/dialog-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-item\" [ngClass]=\"isLeft?'left':'right'\">\r\n  <div class=\"avatar\" [style.background]=\"avatar\">\r\n    <img [src]=\"avatar\" alt=\"\">\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"sharp\"></div>\r\n    <div class=\"text\">{{text}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog-item/dialog-item.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-item {\n  position: relative;\n  width: 100%;\n  overflow: auto;\n}\n.dialog-item .avatar {\n  width: 40px;\n  height: 40px;\n  background: #2aa346;\n}\n.dialog-item .content {\n  position: relative;\n}\n.dialog-item .content .text {\n  white-space: pre-line;\n  max-width: 220px;\n  padding: 12px;\n  font-size: 16px;\n  line-height: 22px;\n  border-radius: 4px;\n  color: #353535;\n}\n.dialog-item .content .sharp {\n  position: absolute;\n  top: 15px;\n  width: 0;\n  height: 0;\n  border: 5px solid #fff;\n  border-top-color: transparent;\n  border-bottom-color: transparent;\n}\n.dialog-item.left .avatar {\n  float: left;\n}\n.dialog-item.left .content {\n  float: left;\n  margin-left: 10px;\n}\n.dialog-item.left .content .text {\n  background: #fff;\n}\n.dialog-item.left .content .sharp {\n  left: -10px;\n  border-right-color: #fff;\n  border-left-color: transparent;\n}\n.dialog-item.right .avatar {\n  float: right;\n}\n.dialog-item.right .content {\n  float: right;\n  margin-right: 10px;\n}\n.dialog-item.right .content .text {\n  background: #a0e75a;\n}\n.dialog-item.right .content .sharp {\n  right: -10px;\n  border-left-color: #a0e75a;\n  border-right-color: transparent;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog-item/dialog-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogItemComponent = (function () {
    function DialogItemComponent() {
        this.isLeft = true;
    }
    DialogItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DialogItemComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DialogItemComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogItemComponent.prototype, "isLeft", void 0);
    DialogItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-item',
            template: __webpack_require__("../../../../../src/app/dialog/dialog-item/dialog-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog-item/dialog-item.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogItemComponent);
    return DialogItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_bar_input_bar_component__ = __webpack_require__("../../../../../src/app/dialog/input-bar/input-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/dialog/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("../../../../../src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_box_dialog_box_component__ = __webpack_require__("../../../../../src/app/dialog/dialog-box/dialog-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_item_dialog_item_component__ = __webpack_require__("../../../../../src/app/dialog/dialog-item/dialog-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogModule = (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__input_bar_input_bar_component__["a" /* InputBarComponent */], __WEBPACK_IMPORTED_MODULE_3__top_bar_top_bar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_5__dialog_box_dialog_box_component__["a" /* DialogBoxComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__input_bar_input_bar_component__["a" /* InputBarComponent */], __WEBPACK_IMPORTED_MODULE_3__top_bar_top_bar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_5__dialog_box_dialog_box_component__["a" /* DialogBoxComponent */], __WEBPACK_IMPORTED_MODULE_7__dialog_item_dialog_item_component__["a" /* DialogItemComponent */]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n  <div class=\"top-bar-wrapper\">\r\n      <app-top-bar [backUrl]=\"'/index'\" [name]=\"user.name\"></app-top-bar>\r\n  </div>\r\n  <div class=\"dialog-box-wrapper\">\r\n      <app-dialog-box [recieveMsg]=\"msgChange\" [msgList]=\"msgList\" [user]=\"user\"></app-dialog-box>      \r\n  </div>\r\n  <div class=\"input-bar-wrapper\">\r\n      <app-input-bar (sendNewMsg)=\"sendMsg($event)\"></app-input-bar>      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialog/dialog/dialog.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 100;\n  background: #ebebeb;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dialog .top-bar-wrapper {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.dialog .dialog-box-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: hidden;\n}\n.dialog .input-bar {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = (function () {
    function DialogComponent(store, route) {
        this.store = store;
        this.route = route;
        this.msgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactId = this.route.snapshot.paramMap.get('id');
        this.user = this.store.userList.find(function (item) {
            return item.id === _this.contactId;
        });
        this.msgList = this.store.msgStore[this.contactId];
        this.store.msgStoreChange.subscribe(function (msgStore) {
            _this.msgList = msgStore[_this.contactId];
            _this.msgChange.emit(true);
            console.log(msgStore);
        });
    };
    DialogComponent.prototype.sendMsg = function (msg) {
        this.store.sendMsg(msg, this.contactId);
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/dialog/dialog/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/dialog/dialog.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/input-bar/input-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-bar\">\r\n  <div class=\"vioce-btn btn\"><i class=\"iconfont icon-vioce\"></i></div>\r\n  <div class=\"input-wrapper\" [class.active]=\"focus\">\r\n    <textarea (blur)=\"inputBlur()\" (focus)=\"inputFocus()\" #area rows=\"1\" [style.height.px]=\"inputHeight\" (ngModelChange)=\"ipnut(area, $event)\" cols=\"20\" class=\"input\" type=\"text\" name=\"input\" [(ngModel)]=\"inputText\"></textarea>\r\n  </div>\r\n  <div class=\"face-btn btn\"><i class=\"iconfont icon-face\"></i></div>\r\n  <div class=\"add-btn btn\" [hidden]=\"buttonShow\"><i class=\"iconfont icon-add1\"></i></div>\r\n  <div class=\"send-btn btn\" [hidden]=\"!buttonShow\">\r\n    <button type=\"button\" class=\"text\" (click)=\"sendMsg()\">Send</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dialog/input-bar/input-bar.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-bar {\n  width: 100%;\n  padding: 0 0 0 12px;\n  box-sizing: border-box;\n  border-top: 1px solid #d9d9d9;\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  background: #f4f4f4;\n  color: #6f7378;\n}\n.input-bar .input-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  height: auto;\n  padding-bottom: 6px;\n  margin: 12px 8px 8px;\n  overflow: hidden;\n  font-size: 0;\n  word-break: break-all;\n  white-space: nowrap;\n  border-bottom: 1px solid #d9d9d9;\n}\n.input-bar .input-wrapper.active {\n  border-bottom: 1px solid #46c01b;\n}\n.input-bar .input-wrapper .input {\n  display: inline-block;\n  box-sizing: border-box;\n  background: transparent;\n  border: 0;\n  padding: 0px 8px;\n  min-height: 20px;\n  max-height: 80px;\n  overflow-x: auto;\n  overflow-y: scroll;\n  font-size: 16px;\n  line-height: 20px;\n  color: #000;\n  word-break: break-word;\n  white-space: normal;\n  outline: none;\n  resize: none;\n}\n.input-bar .btn {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-bottom: 8px;\n}\n.input-bar .btn .iconfont {\n  font-size: 34px;\n}\n.input-bar .add-btn {\n  padding: 0 12px;\n}\n.input-bar .send-btn {\n  padding: 0 9px;\n}\n.input-bar .send-btn .text {\n  padding: 0;\n  width: 40px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border: 1px solid #179e16;\n  background: #1aad19;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 3px;\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/input-bar/input-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBarComponent = (function () {
    function InputBarComponent() {
        this.inputText = '';
        this.focus = false;
        this.buttonShow = false;
        this.sendNewMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    InputBarComponent.prototype.ngOnInit = function () {
    };
    InputBarComponent.prototype.ipnut = function (ele, value) {
        this.inputHeight = ele.scrollHeight;
        if (value.length > 0) {
            this.buttonShow = true;
        }
        else {
            this.buttonShow = false;
        }
    };
    InputBarComponent.prototype.inputFocus = function () {
        this.focus = true;
    };
    InputBarComponent.prototype.inputBlur = function () {
        this.focus = false;
    };
    InputBarComponent.prototype.sendMsg = function () {
        this.sendNewMsg.emit(this.inputText);
        this.clearInput();
        this.setFocus();
    };
    InputBarComponent.prototype.setFocus = function () {
        this.inputEle.nativeElement.focus();
    };
    InputBarComponent.prototype.clearInput = function () {
        this.inputText = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('area'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], InputBarComponent.prototype, "inputEle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], InputBarComponent.prototype, "sendNewMsg", void 0);
    InputBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-bar',
            template: __webpack_require__("../../../../../src/app/dialog/input-bar/input-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/input-bar/input-bar.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], InputBarComponent);
    return InputBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialog/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\r\n  <div class=\"back-btn btn\" (click)=\"goback()\">\r\n    <div class=\"icon-wrapper\">\r\n      <i class=\"iconfont icon-arrow\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"title\">{{name}}</div>\r\n  <div class=\"man-btn btn\"><i class=\"iconfont icon-me1\"></i></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialog/top-bar/top-bar.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-bar {\n  height: 48px;\n  padding: 0 0 0 0;\n  background: #393a3f;\n  color: #fff;\n}\n.top-bar .title {\n  float: left;\n  line-height: 48px;\n  font-size: 18px;\n  font-weight: 300;\n  padding-left: 12px;\n}\n.top-bar .btn {\n  height: 48px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 100;\n}\n.top-bar .btn:active {\n  background: #2e2e32;\n}\n.top-bar .btn .iconfont {\n  font-size: 18px;\n}\n.top-bar .back-btn {\n  float: left;\n  width: 48px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.top-bar .back-btn .icon-wrapper {\n  display: inline-block;\n  width: 100%;\n  box-sizing: border-box;\n  border-right: 1px solid #2e2e32;\n}\n.top-bar .man-btn {\n  float: right;\n  line-height: 48px;\n  padding: 0 10px;\n}\n.top-bar .man-btn .iconfont {\n  font-size: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialog/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopBarComponent = (function () {
    function TopBarComponent(router) {
        this.router = router;
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.goback = function () {
        this.router.navigateByUrl(this.backUrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TopBarComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TopBarComponent.prototype, "backUrl", void 0);
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-top-bar',
            template: __webpack_require__("../../../../../src/app/dialog/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialog/top-bar/top-bar.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discover/discover.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover_component__ = __webpack_require__("../../../../../src/app/discover/discover/discover.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiscoverModule = (function () {
    function DiscoverModule() {
    }
    DiscoverModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__discover_discover_component__["a" /* DiscoverComponent */]]
        })
    ], DiscoverModule);
    return DiscoverModule;
}());



/***/ }),

/***/ "../../../../../src/app/discover/discover/discover.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  正在建设\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/discover/discover/discover.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discover/discover/discover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscoverComponent = (function () {
    function DiscoverComponent() {
    }
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-discover',
            template: __webpack_require__("../../../../../src/app/discover/discover/discover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discover/discover/discover.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"title\">{{title}}</div>\r\n  <div class=\"add-btn btn\">\r\n    <i class=\"iconfont icon-add\"></i>\r\n  </div>\r\n  <div class=\"search-btn btn\">\r\n    <i class=\"iconfont icon-search\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 48px;\n  padding: 0 0 0 15px;\n  background: #393a3f;\n  color: #fff;\n}\n.header .title {\n  float: left;\n  line-height: 48px;\n  font-size: 24px;\n  font-weight: bold;\n}\n.header .btn {\n  float: right;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-size: 26px;\n}\n.header .btn:active {\n  background: #2e2e32;\n}\n.header .btn .iconfont {\n  font-size: 22px;\n}\n.header .add-btn {\n  width: 70px;\n}\n.header .search-btn {\n  width: 52px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'uChat';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginGuard = (function () {
    function LoginGuard(me, store, router, loginService) {
        this.me = me;
        this.store = store;
        this.router = router;
        this.loginService = loginService;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (this.loginService.isLoggedIn) {
            return true;
        }
        else {
            var url = state.url;
            this.loginService.redirectUrl = url;
            this.router.navigate(['/login']);
            return false;
        }
        // if (this.me.hasMe()) {
        //   this.loginService.login();
        //   return true;
        // } else {
        //   const url = state.url;
        //   this.loginService.redirectUrl = url;
        //   this.router.navigate(['/login']);
        //   return false;
        // }
        // if (this.me.hasMe()) {
        //   this.me.getMe();
        //   this.store.login().subscribe(() => {
        //     console.log('long in succcc');
        //     this.store.hasLogin = true;
        //     return true;
        //   });
        // } else {
        //   console.log('to');
        //   this.router.navigate(['/login']);
        //   return false;
        // }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_me_service__["a" /* MeService */], __WEBPACK_IMPORTED_MODULE_2__service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" (click)=\"hideList()\">\r\n  <div class=\"avatar\" (click)=\"toogleShow($event)\" [style.background]=\"avatar\">\r\n    <img src=\"\" alt=\"\">\r\n  </div>\r\n  <div class=\"username\">\r\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"name\" autofocus placeholder=\"请输入名字\">\r\n  </div>\r\n  <div class=\"info\">{{info}}</div>  \r\n  <div class=\"button\">\r\n    <button class=\"btn\" type=\"button\" (click)=\"submit()\">登录</button>\r\n  </div>\r\n  <div class=\"avatar-list\" *ngIf=\"showList\">\r\n    <ul class=\"list\">\r\n      <li class=\"item\" *ngFor=\"let item of avatarList\" [style.background]=\"item\" (click)=\"chooseAvatar(item)\"></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n}\n.login .avatar {\n  margin: 50px auto 0;\n  width: 60px;\n  height: 60px;\n  background: #949;\n}\n.login .username {\n  margin: 40px 0 0;\n  text-align: center;\n}\n.login .username .input {\n  border: 0;\n  border-bottom: 1px solid #d9d9d9;\n  outline: none;\n  font-size: 18px;\n  padding: 5px 10px;\n  width: 200px;\n}\n.login .username .input:focus {\n  border-bottom-color: #46c01b;\n}\n.login .info {\n  margin: 5px auto 0;\n  width: 220px;\n  height: 20px;\n  font-size: 12px;\n  color: #f06318;\n}\n.login .button {\n  margin: 20px auto 0;\n  text-align: center;\n}\n.login .button .btn {\n  display: inline-block;\n  width: 160px;\n  height: 36px;\n  font-size: 18px;\n  line-height: 36px;\n  background: #179e16;\n  color: #fff;\n  outline: none;\n  border: 0;\n  border-radius: 5px;\n}\n.login .avatar-list {\n  margin: 60px 0;\n}\n.login .avatar-list .list {\n  margin: 20px;\n  font-size: 0;\n  text-align: center;\n}\n.login .avatar-list .list .item {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 50px;\n  height: 50px;\n  border: 1px solid #efefef;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(me, loginService, router) {
        this.me = me;
        this.loginService = loginService;
        this.router = router;
        this.avatarList = [
            '#F0F8FF', '#7FFFD4', '#FF7F50', '#90EE90', '#F0E68C',
            '#DC143C', '#00CED1', '#00CED1', '#FF1493', '#FFD700',
            '#7CFC00', '#D3D3D3', '#0C4DE2', '#FFC0CB', '#FFFF00',
            '#FF4500', '#FFFFE0', '#F0E68C', '#DCDCDC', '#00BFFF',
            '#556B2F', '#4682B4', '#A0522D'
        ];
        this.showList = false;
        this.name = '';
        this.info = '';
        this.avatar = '#456789';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._randomAvatar();
    };
    LoginComponent.prototype._randomAvatar = function () {
        var length = this.avatarList.length;
        var randomNo = Math.floor(Math.random() * length);
        this.avatar = this.avatarList[randomNo];
    };
    LoginComponent.prototype.submit = function () {
        if (this.name.length < 2) {
            this.info = '请输入2个以上字符';
            return;
        }
        // if (this.me.hasMe()) {
        //   this.me.updateMe(this.name, '');
        //   this.loginService.update();
        // } else {
        //   this.me.initMe(this.name, '');
        //   this.loginService.login();
        // }
        this.me.initMe(this.name, this.avatar);
        this.loginService.login();
    };
    LoginComponent.prototype.chooseAvatar = function (item) {
        this.avatar = item;
    };
    LoginComponent.prototype.toogleShow = function (e) {
        this.showList = !this.showList;
        e.stopPropagation();
    };
    LoginComponent.prototype.hideList = function () {
        this.showList = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login/login.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_me_service__["a" /* MeService */], __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"header-wrapper\">\n    <app-header></app-header>\n  </div>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"tabs-wrapper\">\n    <app-tabs></app-tabs>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.main .header-wrapper {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.main .tabs-wrapper {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.main .content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/me/me.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__me_me_component__ = __webpack_require__("../../../../../src/app/me/me/me.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeModule = (function () {
    function MeModule() {
    }
    MeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__me_me_component__["a" /* MeComponent */]]
        })
    ], MeModule);
    return MeModule;
}());



/***/ }),

/***/ "../../../../../src/app/me/me/me.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  敬请期待！\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/me/me/me.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/me/me/me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeComponent = (function () {
    function MeComponent() {
    }
    MeComponent.prototype.ngOnInit = function () {
    };
    MeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-me',
            template: __webpack_require__("../../../../../src/app/me/me/me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/me/me/me.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], MeComponent);
    return MeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_service__ = __webpack_require__("../../../../../src/app/service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(store, router) {
        this.store = store;
        this.router = router;
        this.isLoggedIn = false;
    }
    LoginService.prototype.login = function () {
        var _this = this;
        return this.store.login().subscribe(function () {
            _this.isLoggedIn = true;
            if (_this.redirectUrl) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
            else {
                _this.router.navigateByUrl('/index');
            }
        });
    };
    LoginService.prototype.update = function () {
        this.store.updateMe();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/service/me.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var STORE_NAME = 'uchatuserinfo';
var MeService = (function () {
    function MeService() {
        if (this.hasMe()) {
            this.getMe();
        }
    }
    MeService.prototype.initMe = function (name, avatar) {
        var id = 'test@' + getDate() + randomStr(4);
        this.me = new User(id, name, avatar);
        this.storeMe();
        return this.me;
    };
    MeService.prototype.storeMe = function () {
        localStorage.setItem(STORE_NAME, JSON.stringify(this.me));
    };
    MeService.prototype.hasMe = function () {
        return !!localStorage.getItem(STORE_NAME);
    };
    MeService.prototype.getMe = function () {
        var localMe = JSON.parse(localStorage.getItem(STORE_NAME));
        this.me = localMe;
        console.log(this.me);
    };
    MeService.prototype.updateMe = function (name, avatar) {
        var oldId = this.me.id;
        this.me = new User(oldId, name, avatar);
        this.storeMe();
    };
    MeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MeService);
    return MeService;
}());

function format(num) {
    return num < 10 ? '0' + num : '' + num;
}
function getDate() {
    var date = new Date();
    var year = format(date.getFullYear());
    var month = format(date.getMonth() + 1);
    var day = format(date.getDate());
    var hour = format(date.getHours());
    var min = format(date.getMinutes());
    return year + month + day + hour + min;
}
function randomStr(n) {
    var str = '';
    while (n > 0) {
        str += Math.floor(Math.random() * 10);
        n--;
    }
    return str;
}
var User = (function () {
    function User(id, name, avatar) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/service/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* unused harmony export Msg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__me_service__ = __webpack_require__("../../../../../src/app/service/me.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'ws://0.0.0.0:8081';
var StoreService = (function () {
    function StoreService(meService) {
        var _this = this;
        this.meService = meService;
        this.msgStore = {};
        // 获取数据的接口
        this.userListChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.msgStoreChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.currentMsgList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default()(URL);
        this.socket.on('init userList', function (userList) {
            _this.userList = decode(userList);
            _this.userListChange.emit(_this.userList);
            console.log(_this.userList);
        });
        this.socket.on('add user', function (newUser) {
            var userObj = decode(newUser);
            _this.userList.push(userObj);
            _this.userListChange.emit(_this.userList);
        });
        this.socket.on('msg', function (msg) {
            var msgObj = decode(msg);
            console.log(msgObj);
            var fromId = msgObj.from;
            if (fromId === _this.me.id) {
                fromId = msgObj.to;
            }
            if (_this.msgStore[fromId]) {
                _this.msgStore[fromId].push(msgObj);
            }
            else {
                _this.msgStore[fromId] = [msgObj];
            }
            _this.msgStoreChange.emit(_this.msgStore);
        });
        this.socket.on('disconnect', function (reason) {
            console.log('disconnect: ' + reason);
        });
        this.socket.on('user leave', function (user) {
            var userObj = decode(user);
            for (var i = 0; i < _this.userList.length; i++) {
                if (_this.userList[i].id === userObj.id) {
                    _this.userList.splice(i, 1);
                    break;
                }
            }
        });
    }
    StoreService.prototype.login = function () {
        this.me = this.meService.me;
        this.socket.emit('login', encode(this.me));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(this.socket, 'login success');
    };
    StoreService.prototype.sendMsg = function (msg, to) {
        var msgObj = new Msg(this.me.id, to, msg, 12312321);
        this.socket.emit('msg', encode(msgObj));
    };
    StoreService.prototype.updateMe = function () {
        this.me = this.meService.me;
        this.socket.emit('update user', this.me);
    };
    StoreService.prototype.getUserList = function () {
        this.socket.emit('get userList');
    };
    StoreService.prototype.getUser = function (id) {
        return this.userList.find(function (user) {
            return user.id === id;
        });
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__me_service__["a" /* MeService */]])
    ], StoreService);
    return StoreService;
}());

var Msg = (function () {
    function Msg(from, to, msg, time) {
        this.from = from;
        this.to = to;
        this.msg = msg;
        this.time = time;
    }
    return Msg;
}());

function encode(obj) {
    return encodeURI(JSON.stringify(obj));
}
function decode(str) {
    return JSON.parse(decodeURI(str));
}


/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\r\n  <ul class=\"list\">\r\n    <li [routerLink]=\"item.url\" routerLinkActive=\"active\" #link=\"routerLinkActive\" class=\"item\" *ngFor=\"let item of list; let i=index\">\r\n      <i class=\"iconfont\" [ngClass]=\"link.isActive?item.activeIconClass:item.iconClass\"></i>\r\n      <div class=\"text\">{{item.name}}</div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabs {\n  background-color: #fcfcfc;\n  color: #999;\n}\n.tabs .list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  height: 54px;\n  border-top: 1px solid #d6d6d6;\n}\n.tabs .list .item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  outline: none;\n}\n.tabs .list .item .iconfont {\n  font-size: 24px;\n}\n.tabs .list .item .text {\n  margin-top: 5px;\n  font-size: 10px;\n}\n.tabs .list .item.active {\n  color: #46c01b;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent(router) {
        this.router = router;
        this.list = tabList;
        this.activeIndex = 0;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.clickItem = function (index, item) {
        this.activeIndex = index;
        this.router.navigateByUrl(item.url);
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/tabs.component.styl")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TabsComponent);
    return TabsComponent;
}());

var tabList = [
    {
        name: 'Chat',
        iconClass: 'icon-chat',
        activeIconClass: 'icon-chat-a',
        url: '/index'
    },
    {
        name: 'Contacts',
        iconClass: 'icon-contacts',
        activeIconClass: 'icon-contacts-a',
        url: '/contacts'
    },
    {
        name: 'Discover',
        iconClass: 'icon-discover',
        activeIconClass: 'icon-discover-a',
        url: '/discover'
    },
    {
        name: 'Me',
        iconClass: 'icon-me',
        activeIconClass: 'icon-me-a',
        url: '/me'
    }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map