( function() {
#include "../dist/aeq.js"; // jshint ignore:line

var comp = aeq.comp.create({});
var layer = comp.layers.addShape();
for ( var i = 0; i < 5; i++ ) {
	var newLayer = layer.duplicate();
	newLayer.name = "layerName " + i;
}

var select4 = aeq( "layer:not(name=['layerName 0', 'layerName 2'])");
if ( select4.length !== 4 ) {
	alert( "select4 did not select 4" );
}

var select2 = aeq( "layer[name=['layerName 0', 'layerName 2']]");
if ( select2.length !== 2 ) {
	alert( "select2 did not select 2" );
}
comp.remove();
alert( "Done checking select.js" );
}() );