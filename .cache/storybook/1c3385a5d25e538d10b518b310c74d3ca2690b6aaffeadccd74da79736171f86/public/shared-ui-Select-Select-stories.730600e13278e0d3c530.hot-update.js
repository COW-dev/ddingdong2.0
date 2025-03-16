"use strict";
self["webpackHotUpdateddingdong2_0"]("shared-ui-Select-Select-stories",{

/***/ "./src/shared/ui/Select/Select.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Select/Select.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/shared/ui/Icon/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();
'use client';


function Select({ contents, size }) {
    _s();
    const [selectedContent, setSelectedContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(contents[0]);
    const [openSelect, setOpenSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${openSelect ? 'rounded-lg' : 'rounded-lg border border-gray-100'} text-b'${size === 'md' ? 'md:w-26 w-24' : 'md:w-66 w-60'} cursor-pointer border border-gray-200 bg-white text-start text-base font-semibold text-gray-400 md:text-lg`,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: `${openSelect ? 'border-b-2 border-gray-100 hover:rounded-lg hover:rounded-b-none' : 'border-0'} flex justify-between ${size === 'md' ? 'items-center py-1 pl-3 pr-2 text-sm' : 'px-5 py-2 md:py-3'} hover:rounded-md hover:bg-gray-50`,
                onClick: ()=>setOpenSelect(!openSelect),
                children: [
                    selectedContent,
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                        name: "arrowDown",
                        className: `transform transition-transform duration-300 ${openSelect ? 'rotate-180' : ''} ${size === 'md' ? 'w-5' : ''} }`
                    }, void 0, false, {
                        fileName: "/Users/sim-yujin/Desktop/ddingdong2.0/src/shared/ui/Select/Select.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/sim-yujin/Desktop/ddingdong2.0/src/shared/ui/Select/Select.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            openSelect && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-col",
                children: contents.map((item, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        onClick: ()=>{
                            setSelectedContent(contents[key]);
                            setOpenSelect(!openSelect);
                        },
                        className: `cursor-pointer border-gray-100 ${size === 'md' ? 'px-3 py-1 text-sm' : 'px-5 py-2 md:py-3'} last:border-none hover:bg-gray-50 hover:last:rounded-b-md`,
                        children: item
                    }, key, false, {
                        fileName: "/Users/sim-yujin/Desktop/ddingdong2.0/src/shared/ui/Select/Select.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "/Users/sim-yujin/Desktop/ddingdong2.0/src/shared/ui/Select/Select.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/sim-yujin/Desktop/ddingdong2.0/src/shared/ui/Select/Select.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Select, "fYg3YqbPggyoE0phMrAs7mPjJfk=");
_c = Select;
Select.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Select",
    "props": {
        "contents": {
            "required": true,
            "tsType": {
                "name": "Array",
                "elements": [
                    {
                        "name": "string"
                    }
                ],
                "raw": "string[]"
            },
            "description": ""
        },
        "size": {
            "required": false,
            "tsType": {
                "name": "union",
                "raw": "'md' | 'lg'",
                "elements": [
                    {
                        "name": "literal",
                        "value": "'md'"
                    },
                    {
                        "name": "literal",
                        "value": "'lg'"
                    }
                ]
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Select");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});
//# sourceMappingURL=shared-ui-Select-Select-stories.730600e13278e0d3c530.hot-update.js.map