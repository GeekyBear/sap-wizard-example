/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comproy/ejemplo_wizard/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
