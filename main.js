(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" [style.backgroundImage]=\"IMG\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/me_blurry.png\" alt=\"Circle Image\"\n                        class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Miguel Á. Rozalén\n                        <br />\n                    </h4>\n                    <h6 class=\"description\">Full Stack Developer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Madrid. 10 de Marzo de 1993.\n                        <br />Ingenierio en Informática por la Universidad Carlos III de Madrid</p>\n                    <br />\n                    <a class=\"btn btn-outline-default btn-round\" href=\"./assets/downloables/CV ES Miguel_19.pdf\"\n                        download=\"CV ES Miguel_19\"><i class=\"fa fa-download\"></i> Curriculum ES</a>\n                    <a style=\"margin: 5px;\" class=\"btn btn-outline-default btn-round\"\n                        href=\"./assets/downloables/CV EN Miguel_19.pdf\" download=\"CV EN Miguel_19\"><i\n                            class=\"fa fa-download\"></i> Curriculum EN</a>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"isBingWallpaper\"\n            style=\"position: absolute; top: -30px; right: 0; font-size: smaller; padding-right: 25px;  padding-bottom: 25px; color:#d9d9d9\">\n            <i>Background powered by <a target=\"_newtab\" href=\"https://miguelrozalen.github.io/bing-wallpaper/\"><span\n                        style=\"color: #ffffff;\">Bing Wallpaper<span></span></span></a></i>\n        </div>\n    </div>\n\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <h2 class=\"title\">Sobre mí</h2>\n                    <br />\n                    <p class=\"description\">\n                        Me defino como un\n                        <b>apasionado de la tecnología</b>. Adoro investigar y\n                        <i>cacharrear</i> tanto con el software como con el hardware.\n                        <br>\n                        <br> Estoy especializado en la\n                        <b>arquitectura de computadores</b>. No obstante, me gustan otras áreas de conocimiento como la\n                        <b>computación ubicua</b>, el\n                        <b>diseño web</b> y el\n                        <b>desarrollo de aplicaciones móviles o distribuidas</b>.\n                        <br>\n                        <br> También tengo conocimientos de\n                        <b>\n                            <i>Big Data</i>\n                        </b>,\n                        <b>\n                            <i>Bussiness Inteligence</i>\n                        </b>,\n                        <b>inteligencia artificial</b>, legislación aplicada a datos y estándares de procesos de\n                        auditoría y\n                        certificación.\n                        <br>\n                        <br>\n                    </p>\n                </div>\n                <div class=\"col-lg-6 col-md-12 ml-auto mr-auto\" style=\"background-image: url('./assets/img/Technology-Track.png'); \n                background-size: contain;\n                background-repeat: no-repeat;\n                background-position: center; min-height: 300px;\"></div>\n                <!-- <div class=\"col-lg-6 col-md-12 ml-auto mr-auto\">\n                    <img style=\"max-height: 380px; max-width: 100%;\" src=\"./assets/img/Technology-Track.png\"\n                        class=\"img-no-padding img-responsive\">\n                </div> -->\n            </div>\n        </div>\n    </div>\n    <div class=\"section\" style=\"background-color: #fafafa\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                    <h2 class=\"title\">Carrera Profesional</h2>\n                    <br />\n                    <div id=\"timeline\">\n                        <!-- Timeline Item, copy from here to create various boxes -->\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle\">\n                                    <i class=\"fa fa-briefcase\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content right\">\n                                <h4>Full Stack Developer</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>The Reuse Company</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Marzo 2019 - Actualidad\n                                </div>\n                                <p>\n                                    Participación en multiples proyectos de I+D+i relacionados con el\n                                    <b>análisis semántico</b> del leguaje natural y\n                                    <b>detección de patrones</b>.\n                                    <i>Proyecto Narange, Proyecto Europeo Imola II, POC Acciona</i>, entre otros.\n                                </p>\n                                <p>\n                                    Liderazgo y participación en el diseño y desarrollo de los productos\n                                    <b>\n                                        <i>Skylability Platform</i>\n                                    </b> y\n                                    <b>\n                                        <i>Kwoledge Manager Online</i>\n                                    </b>.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle\">\n                                    <i class=\"fa fa-briefcase\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content left\">\n                                <h4>Técnico de Apoyo a la Investigación</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Universidad Carlos III de Madrid</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Marzo 2017 - Marzo 2019\n                                </div>\n                                <p>\n                                    Participación en diferentes proyectos de investigación relacionados con el\n                                    <b>procesamiento del leguaje natural</b>:\n                                </p>\n                                <ul style=\"font-size: 15px\">\n                                    <li>\n                                        <b>Cátedra SMART-RTVE</b>, para el seguimiento de perfiles de personajes famosos\n                                        en\n                                        las redes sociales.\n                                    </li>\n                                    <li style=\"margin-top: 5px;\">\n                                        <b>Social Media Radar I, II y III</b>, para la detección temprana de eventos a\n                                        través\n                                        de las redes sociales.\n                                    </li>\n                                    <li style=\"margin-top: 5px;\">\n                                        <b>POC Orange</b>, para la clasificación automática de encuestas de satisfacción\n                                        de\n                                        usuarios.\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle\">\n                                    <i class=\"fa fa-briefcase\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content right\">\n                                <h4>Becario Cátedra SMART-RTVE</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Universidad Carlos III de Madrid</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Julio 2016 - Marzo 2017\n                                </div>\n                                <p>\n                                    Departamento de informática.\n                                    <b>Grupo Knowledge Reuse</b>. Becario colaborador en la cátedra\n                                    <b>SMART-RTVE</b> entre la Universidad Carlos III de Madrid y Radio Televisión\n                                    Española,\n                                    para la monitorización y seguimiento de perfiles de personajes famosos en las redes\n                                    sociales.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle\">\n                                    <i class=\"fa fa-briefcase\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content left\">\n                                <h4>Becario Programador</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>ISD Ibérica/Philips España</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Agosto 2014 - Octubre 2014\n                                </div>\n                                <p>\n                                    Participación en diferentes proyectos relacionados con la domótica arquitectural y\n                                    el alumbrado inteligente. Destaca el proyecto\n                                    para la\n                                    <b>\n                                        <i>Torre CEPSA</i>\n                                    </b>, consistiendo en la programación del entorno y dispositivos encargados de la\n                                    iluminación\n                                    exterior del edificio.\n                                </p>\n                                <p>\n                                    Otros proyectos insteresantes:\n                                    <i>BBVA Santa Bárbara</i>,\n                                    <i>Tribunal Constitucional</i>,\n                                    <i>Indra</i> y\n                                    <i>Bricodepot Gaia en Oporto (Portugal)</i> .\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-12 ml-auto mr-auto\">\n                    <h2 class=\"title\">Habilidades</h2>\n                    <br />\n                    <p>\n                        Capacidad para el desarrollo de\n                        <b>sistemas semánticos de análisis</b> basados en ontologías y\n                        <b>NLP</b> para la gestión de información extraída desde Facebook, Twitter, demás redes sociales\n                        y otros\n                        sistemas masivos de información.\n                    </p>\n                    <p>\n                        Experiencia en el desarrollo de\n                        <b>sistemas gráficos</b> basados web utilizando tecnologías como Angular.js, Node.js, Epress.js\n                        etc.,\n                        en sistemas de control de versiones como Github, Git y Tortoise SVN y en entornos de desarrollo\n                        como\n                        Eclipse y Visual Studio.\n                    </p>\n                    <p>\n                        Conocimientos para el desarrollo, gestión e implantación de\n                        <b>sistemas de análisis Big Data y Linked Data</b>.\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-12 ml-auto mr-auto\" style=\"background-image: url('./assets/img/Skills.png'); \n                background-size: contain;\n                background-repeat: no-repeat;\n                background-position: center; min-height: 300px;\">\n                </div>\n            </div>\n            <div style=\"margin-top: 30px;\" class=\"row\">\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"net\"></div>\n                    <h4 style=\"margin:0\">.NET (C#/VB)</h4>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"android\"></div>\n                    <h4 style=\"margin:0\">Android</h4>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"aql\"></div>\n                    <h4 style=\"margin:0\">AQL</h4>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"html5\"></div>\n                    <h4 style=\"margin:0\">HTML5</h4>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"js\"></div>\n                    <h4 style=\"margin:0\">Javascript</h4>\n                </div>\n                <div class=\"col-lg-2 col-md-3 col-sm-6 ml-auto mr-auto text-center\">\n                    <div class=\"row\" id=\"css\"></div>\n                    <h4 style=\"margin:0\">CSS/SCSS</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\" style=\"background-color: #fafafa\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                    <h2 class=\"title\">Educación</h2>\n                    <br />\n                    <div id=\"timeline\">\n                        <!-- Timeline Item, copy from here to create various boxes -->\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle timeline-icon-circle-cap\">\n                                    <i class=\"fa fa-graduation-cap\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content right\">\n                                <h4>PhD en Ciencia y Tecnología Informática</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Universidad Carlos III</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Marzo 2019 - Actualidad\n                                </div>\n                                <p>\n                                    Generación automática de ontologías mediante el procesamiento del lenguaje natural\n                                    a través de inteligencia artificial.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle timeline-icon-circle-cap\">\n                                    <i class=\"fa fa-graduation-cap\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content left\">\n                                <h4>Máster en Ingeniería Informática</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Universidad Carlos III</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Septiembre 2015 - Marzo 2017\n                                </div>\n                                <p>\n                                    Auditoria y Certificación, Integración de sistemas, Computación Grafica, Diseño y\n                                    Evaluación de Arquitecturas de Computación,\n                                    Dirección de proyectos de I+D+i, Computación de Altas Prestaciones, Sistemas de\n                                    Apoyo\n                                    a la Toma de Decisiones.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle timeline-icon-circle-cap\">\n                                    <i class=\"fa fa-graduation-cap\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content right\">\n                                <h4>Grado en Ingeniería Informática</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Universidad Carlos III</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Septiembre 2011 - Junio 2015\n                                </div>\n                                <p>\n                                    Mención en Ingeniería de Computadores: Teoría de Autómatas y Lenguajes Formales,\n                                    Ficheros y Bases de Datos, Criptografía\n                                    y Seguridad informática, Ingeniería Software, Redes de Ordenadores, Diseño de\n                                    Sistemas\n                                    Operativos, Computación Ubícua, Sistemas Distribuidos.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"timeline-item\">\n                            <!--Icon inside the circle-->\n                            <div class=\"timeline-icon\">\n                                <!-- <span class=\"timeline-icon-circle\"><i class=\"fa fa-graduation-cap\"></i></span> -->\n                                <span class=\"timeline-icon-circle timeline-icon-circle-cap\">\n                                    <i class=\"fa fa-graduation-cap\"></i>\n                                </span>\n                            </div>\n                            <!-- Content from timeline box and position (right or left)-->\n                            <div class=\"timeline-content left\">\n                                <h4>Bachillerato de Ciencias</h4>\n                                <h5 style=\"margin-top:10px;\">\n                                    <b>\n                                        <i>Colegio Mater Purissima</i>\n                                    </b>\n                                </h5>\n                                <div style=\"font-size: 16px; margin-bottom: 10px;\">\n                                    Septiembre 2009 - Junio 2011\n                                </div>\n                                <p>\n                                    Bachillerato de Ciencias Tecnológicas: Tecnología, Física, Química y Dibujo Técnico.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-dark text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mr-auto ml-auto\">\n                    <h2 class=\"title\">Media</h2>\n                    <h5 class=\"description\">T3CHFEST 2017: Una charla en la que repasamos como es posible influenciar a\n                        la población\n                        mediante la monitorización de individuos famosos y la interacción entre ellos realizando Big\n                        Data sobre\n                        las redes sociales. Esta charla se enmarca dentro de una cátedra de investigación entre la UC3M\n                        y RTVE.</h5>\n                    <br>\n                    <br>\n                    <iframe style=\"max-width:100%; border: 0px;\" width=\"640\" height=\"360\"\n                        src=\"https://www.youtube.com/embed/GQrW0mWFPTg\">\n                    </iframe>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Aficiones</h2>\n                    <h5 class=\"description\">A parte de programar, en mi tiempo libre:</h5>\n                    <br>\n                </div>\n            </div>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <fa-icon [icon]=\"video\"></fa-icon>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Cine y Series</h4>\n                            <p class=\"description\">De todo tipo, desde las pelis palomiteras de acción, a las comedias\n                                románticas. Pero sobre todo,\n                                me gustan las de suspense e intriga.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <fa-icon [icon]=\"futbol\"></fa-icon>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Deportes</h4>\n                            <p class=\"description\">Juego semanalmente a futbol sala con Los de Siempre, el equipo de los\n                                amigos de toda la vida.\n                                También practico otros deportes como tenis, baloncesto y ping pong</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <fa-icon [icon]=\"gamepad\"></fa-icon>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Videjuegos</h4>\n                            <p class=\"description\">Principalmente los de un jugador con una buena historia que\n                                disfrutar como Uncharted o God of War. También me gusta jugar\n                                a Fifa con los amigos.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger\">\n                            <!-- <i class=\"fa fa-drafting-compass\"></i> -->\n                            <fa-icon [icon]=\"draftingCompass\"></fa-icon>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Diseño</h4>\n                            <p class=\"description\">Me gusta diseñar marcas, iconos, logos e imágenes corporativas.\n                                También modificar\n                                imágenes con photoshop para\n                                sacarles su máximo potencial.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-4\">\n                    <h2 class=\"title\">Contacto</h2>\n                    <table style=\"color:rgba(255, 255, 255, 0.7);margin-bottom: 20px;\">\n                        <tr style=\"margin-bottom: 10px;\">\n                            <td style=\"min-width: 35px; text-align: center;padding: 5px;\">\n                                <fa-icon [icon]=\"user\"></fa-icon>\n                            </td>\n                            <td>Miguel Ángel Rozalen Soriano</td>\n                        </tr>\n                        <tr style=\"margin-bottom: 10px;\">\n                            <td style=\"min-width: 35px; text-align: center;padding: 5px;\">\n                                <fa-icon [icon]=\"map\"></fa-icon>\n                            </td>\n                            <td> Calle Dodge Número 3, <br>\n                                28041 Madrid (España)</td>\n                        </tr>\n                        <tr style=\"margin-bottom: 10px;\">\n                            <td style=\"min-width: 35px; text-align: center;padding: 5px;\">\n                                <fa-icon [icon]=\"mobile\"></fa-icon>\n                            </td>\n                            <td>(+34) 664 14 27 24</td>\n                        </tr>\n                        <tr style=\"margin-bottom: 10px;\">\n                            <td style=\"min-width: 35px; text-align: center;padding: 5px;\">\n                                <fa-icon [icon]=\"envelope\"></fa-icon>\n                            </td>\n                            <td>mikelangel1993@gmail.com</td>\n                        </tr>\n                    </table>\n\n                </div>\n                <div class=\"col-lg-8 col-md-8 ml-auto mr-auto\">\n                    <iframe\n                        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5112.588842468583!2d-3.712659563427481!3d40.36533336859415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422704387682fd%3A0x77c825671153af89!2sCalle+Dodge%2C+28041+Madrid!5e0!3m2!1ses!2ses!4v1555582132931!5m2!1ses!2ses\"\n                        width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header.page-header-xs {\n  min-height: 60vh !important; }\n\n.img-circle {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08); }\n\n.timeline-icon-circle {\n  font-size: 25px;\n  color: white;\n  position: absolute;\n  top: 14px;\n  left: 12px; }\n\n.timeline-icon-circle-cap {\n  left: 10px; }\n\n.description {\n  margin-top: 10px; }\n\n#timeline .timeline-item .timeline-content h4 {\n  padding: 15px;\n  background: #f5593d;\n  color: #fff;\n  margin: -20px -20px 0 -20px;\n  font-weight: 500;\n  border-radius: 3px 3px 0 0; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent, CopyObject, HighChartsOptionsCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyObject", function() { return CopyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighChartsOptionsCircle", function() { return HighChartsOptionsCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Highcharts = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_sanitizer, http) {
        var _this = this;
        this._sanitizer = _sanitizer;
        this.http = http;
        this.draftingCompass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDraftingCompass"];
        this.video = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVideo"];
        this.futbol = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFutbol"];
        this.gamepad = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGamepad"];
        this.user = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserTie"];
        this.map = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"];
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMobile"];
        this.envelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        //URL:string = "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US"
        this.URL = "https://cors.io/?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
        this.IMG = this._sanitizer.bypassSecurityTrustStyle("url('./assets/img/madrid.jpg')");
        this.http.get(this.URL).subscribe(function (res) {
            //console.log(res.images)
            _this.IMG = _this._sanitizer.bypassSecurityTrustStyle("url('" + ("https://www.bing.com/" + res.images[0].url) + "')");
            _this.isBingWallpaper = true;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var optionsNet = CopyObject(HighChartsOptionsCircle);
        var optionsAndroid = CopyObject(HighChartsOptionsCircle);
        var optionsAql = CopyObject(HighChartsOptionsCircle);
        var optionsHtml5 = CopyObject(HighChartsOptionsCircle);
        var optionsJs = CopyObject(HighChartsOptionsCircle);
        var optionsCss = CopyObject(HighChartsOptionsCircle);
        optionsNet.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [
                    {
                        y: 10,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    },
                    {
                        y: 90,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('net', optionsNet);
        optionsAndroid.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [
                    {
                        y: 25,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    },
                    {
                        y: 75,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('android', optionsAndroid);
        optionsAql.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [
                    {
                        y: 5,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    }, {
                        y: 95,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('aql', optionsAql);
        optionsHtml5.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [
                    {
                        y: 0,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    },
                    {
                        name: '',
                        y: 100,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('html5', optionsHtml5);
        optionsJs.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [{
                        y: 0,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    },
                    {
                        name: '',
                        y: 100,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('js', optionsJs);
        optionsCss.series = [{
                type: 'pie',
                name: '.NET',
                innerSize: '80%',
                cursor: 'pointer',
                data: [{
                        name: '',
                        y: 15,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#fafafa'
                    },
                    {
                        name: '',
                        y: 85,
                        dataLabels: {
                            enabled: false
                        },
                        color: '#f5593d'
                    }
                ]
            }];
        Highcharts.chart('css', optionsCss);
    };
    ProfileComponent.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
        }
        // return an ErrorObservable with a user-facing error message
        console.error('Something bad happened; please try again later.');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ;
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());

function CopyObject(objectToCopy) {
    return JSON.parse(JSON.stringify(objectToCopy));
}
var HighChartsOptionsCircle = {
    exporting: {
        enabled: false,
        allowHTML: true,
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 160,
    },
    title: {
        text: ' '
    },
    tooltip: {
        enabled: false,
        headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
};


/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.linkedin.com/in/miguel-a-rozalen-soriano-560408126\" target=\"_blank\">Linkedin</a></li>\n                    <li><a  href=\"https://github.com/MiguelRozalen\" target=\"_blank\">Github</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\" target=\"_blank\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{date | date: 'yyyy'}}, made with <a style=\"color:#f5593d\" href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" target=\"_blank\">Paper Kit 2 Angular</a> by Miguel Á. Rozalén\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer .copyright {\n  font-size: 1em; }\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <img *ngIf=\"nav?.className?.includes('navbar-transparent')==false\" src=\"./assets/img/faces/me_blurry.png\" alt=\"Circle Image\" class=\"me-image img-circle img-no-padding img-responsive\">\n            <a class=\"navbar-brand\" href=\"#\">Miguel Á. Rozalén</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow me on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/MKLR93\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like me on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/miguelangel.rozalen.9\" target=\"_blank\">\n                        <i class=\"fa fa-facebook\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li> -->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Connect me on Linkedin\" data-placement=\"bottom\" href=\"https://www.linkedin.com/in/miguel-a-rozalen-soriano-560408126/\" target=\"_blank\">\n                        <i class=\"fa fa-linkedin\"></i>\n                        <p class=\"d-lg-none\">Linkedin</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://github.com/MiguelRozalen\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".me-image {\n  width: 35px;\n  margin-bottom: 0px;\n  margin-left: 20px; }\n  @media screen and (min-width: 900px) {\n    .me-image {\n      margin-left: 0px; } }\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mikel\Desktop\Github\me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map