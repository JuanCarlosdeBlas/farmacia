(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ANIMACIÓN CONEJO FARMACEUTICO_atlas_1", frames: [[370,314,126,63],[0,340,168,94],[370,240,139,72],[170,399,145,72],[0,0,318,181],[320,0,186,238],[0,183,185,155],[187,240,181,157],[187,183,74,24],[187,209,74,24]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Brazoderecho = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BrazoIzquierdo = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Cabeza = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Cuerpo = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Orejaderecha = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Orejaizquierda = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Piederecho = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.PieIzquierdo = function() {
	this.initialize(ss["ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Orejaderecha();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,185,155), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Orejaizquierda();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,181,157), null);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Brazoderecho();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,139,72), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.BrazoIzquierdo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,145,72), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Cuerpo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,186,238), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.PieIzquierdo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,74,24), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Piederecho();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,74,24), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Cabeza();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,318,181), null);


(lib.botondePlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(11.05,6.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,47);


// stage content:
(lib.ANIMACIÓNCONEJOFARMACEUTICO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(1);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Capa_2
	this.button_1 = new lib.botondePlay();
	this.button_1.name = "button_1";
	this.button_1.setTransform(108.05,552.6,1,1,0,0,0,42,23.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(20));

	// Esqueleto_3
	this.ikNode_1 = new lib.Símbolo1();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(390.05,189.4,0.9998,0.9998,0.4539,0,0,152.2,70.5);

	this.ikNode_2 = new lib.Símbolo2();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(357,525.4,0.9998,0.9998,-0.4268,0,0,54.1,8.2);

	this.ikNode_4 = new lib.Símbolo3();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(420.05,529.35,0.9997,0.9997,-3.529,0,0,17.3,11.3);

	this.ikNode_6 = new lib.Símbolo4();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(390.6,366.85,0.9997,0.9997,0.4522,0,0,91.2,76);

	this.ikNode_8 = new lib.Símbolo5();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(448.75,329.35,0.9996,0.9996,2.2124,0,0,45.3,51.4);

	this.ikNode_10 = new lib.Símbolo6();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(346.9,320.95,0.9996,0.9996,0.7609,0,0,114.2,45.6);

	this.ikNode_12 = new lib.Símbolo7();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(457.7,168.7,0.9997,0.9997,-8.049,0,0,30.4,138.5);

	this.ikNode_14 = new lib.Símbolo8();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(325.85,162.1,0.9998,0.9998,4.94,0,0,151,131.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_14,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.94,x:325.85,y:162.1,regX:151}},{t:this.ikNode_12,p:{regY:138.5,rotation:-8.049,y:168.7,x:457.7}},{t:this.ikNode_10,p:{rotation:0.7609,x:346.9,y:320.95,regY:45.6}},{t:this.ikNode_8,p:{regY:51.4,rotation:2.2124,x:448.75,y:329.35,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.4522,x:390.6,y:366.85}},{t:this.ikNode_4,p:{rotation:-3.529,x:420.05,y:529.35,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.1,scaleX:0.9998,scaleY:0.9998,rotation:-0.4268,x:357,y:525.4,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:0.4539,y:189.4,x:390.05}}]}).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.7419,x:325.9,y:162,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-7.564,y:168.8,x:457.7}},{t:this.ikNode_10,p:{rotation:0.3525,x:346.75,y:320.95,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:2.6598,x:448.6,y:329.45,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.488,x:390.5,y:366.85}},{t:this.ikNode_4,p:{rotation:-3.6825,x:419.95,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:0.3253,x:357.1,y:525.4,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.4898,y:189.3,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.5426,x:325.95,y:161.9,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-7.079,y:168.8,x:457.6}},{t:this.ikNode_10,p:{rotation:-0.0507,x:346.65,y:320.9,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:3.1082,x:448.35,y:329.45,regX:45.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.5248,x:390.35,y:366.85}},{t:this.ikNode_4,p:{rotation:-3.8368,x:419.8,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:1.0828,x:357,y:525.4,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.5265,y:189.35,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.3436,x:325.9,y:161.9,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-6.5945,y:168.75,x:457.6}},{t:this.ikNode_10,p:{rotation:-0.4592,x:346.6,y:320.9,regY:45.7}},{t:this.ikNode_8,p:{regY:51.5,rotation:3.556,x:448.4,y:329.55,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.5624,x:390.25,y:366.9}},{t:this.ikNode_4,p:{rotation:-3.992,x:419.7,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:1.8404,x:357,y:525.45,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.5641,y:189.35,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.1445,x:325.95,y:161.7,regX:151}},{t:this.ikNode_12,p:{regY:138.5,rotation:-6.1089,y:168.6,x:457.6}},{t:this.ikNode_10,p:{rotation:-0.8677,x:346.55,y:320.7,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:4.0039,x:448.15,y:329.55,regX:45.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.6,x:390.05,y:366.9}},{t:this.ikNode_4,p:{rotation:-4.1471,x:419.55,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:2.5975,x:357.05,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.6017,y:189.35,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.9464,x:326,y:161.65,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-5.6244,y:168.75,x:457.65}},{t:this.ikNode_10,p:{rotation:-1.2753,x:346.4,y:320.7,regY:45.6}},{t:this.ikNode_8,p:{regY:51.4,rotation:4.452,x:448.15,y:329.4,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.6376,x:389.9,y:366.85}},{t:this.ikNode_4,p:{rotation:-4.3023,x:419.45,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:3.3523,x:357.05,y:525.4,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.6393,y:189.35,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.7465,x:326.15,y:161.6,regX:151.1}},{t:this.ikNode_12,p:{regY:138.6,rotation:-5.1396,y:168.75,x:457.55}},{t:this.ikNode_10,p:{rotation:-1.6839,x:346.35,y:320.65,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:4.8987,x:448.05,y:329.5,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.6743,x:389.85,y:366.85}},{t:this.ikNode_4,p:{rotation:-4.4559,x:419.35,y:529.2,regX:17.4,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:4.1096,x:357,y:525.5,regY:8.3}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.676,y:189.35,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.5485,x:326.05,y:161.5,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-4.6533,y:168.8,x:457.6}},{t:this.ikNode_10,p:{rotation:-2.0926,x:346.25,y:320.65,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:5.3475,x:448,y:329.5,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.712,x:389.7,y:366.85}},{t:this.ikNode_4,p:{rotation:-4.6121,x:419.1,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:4.8675,x:357,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.7137,y:189.35,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.3505,x:326.1,y:161.45,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-4.1691,y:168.75,x:457.55}},{t:this.ikNode_10,p:{rotation:-2.4996,x:346.15,y:320.6,regY:45.6}},{t:this.ikNode_8,p:{regY:51.4,rotation:5.7948,x:447.85,y:329.45,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.7496,x:389.6,y:366.85}},{t:this.ikNode_4,p:{rotation:-4.7673,x:419.15,y:529.2,regX:17.4,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:5.6245,x:356.95,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.7513,y:189.35,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:3.1516,x:326.2,y:161.35,regX:151.1}},{t:this.ikNode_12,p:{regY:138.6,rotation:-3.6843,y:168.75,x:457.55}},{t:this.ikNode_10,p:{rotation:-2.9086,x:346.05,y:320.5,regY:45.6}},{t:this.ikNode_8,p:{regY:51.4,rotation:6.2432,x:447.75,y:329.45,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.7872,x:389.45,y:366.8}},{t:this.ikNode_4,p:{rotation:-4.9217,x:418.8,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:6.3809,x:357,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.788,y:189.35,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9529,x:326.1,y:161.3,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-3.199,y:168.7,x:457.55}},{t:this.ikNode_10,p:{rotation:-3.3176,x:346,y:320.5,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:6.6914,x:447.6,y:329.65,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.8239,x:389.3,y:366.8}},{t:this.ikNode_4,p:{rotation:-5.0772,x:418.85,y:529.2,regX:17.4,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9996,scaleY:0.9996,rotation:7.1383,x:357,y:525.45,regY:8.3}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.8256,y:189.25,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.7541,x:326.15,y:161.25,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-2.7147,y:168.7,x:457.5}},{t:this.ikNode_10,p:{rotation:-3.7251,x:345.85,y:320.55,regY:45.7}},{t:this.ikNode_8,p:{regY:51.5,rotation:7.138,x:447.55,y:329.65,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.8615,x:389.2,y:366.8}},{t:this.ikNode_4,p:{rotation:-5.2317,x:418.55,y:529.2,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.1,scaleX:0.9996,scaleY:0.9996,rotation:7.8952,x:356.8,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.8632,y:189.25,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.5554,x:326.1,y:161.2,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-2.2298,y:168.65,x:457.5}},{t:this.ikNode_10,p:{rotation:-4.1336,x:345.8,y:320.4,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:7.5851,x:447.45,y:329.6,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.8992,x:389.1,y:366.85}},{t:this.ikNode_4,p:{rotation:-5.3863,x:418.25,y:529.25,regX:17.2,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:8.6517,x:357,y:525.35,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.9008,y:189.3,x:390.05}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.3566,x:326.15,y:161.1,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-1.7432,y:168.75,x:457.5}},{t:this.ikNode_10,p:{rotation:-4.5415,x:345.7,y:320.35,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:8.0346,x:447.35,y:329.6,regX:45.3,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.9359,x:388.95,y:366.85}},{t:this.ikNode_4,p:{rotation:-5.5418,x:418.3,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:9.4071,x:356.95,y:525.3,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.9376,y:189.3,x:389.95}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.158,x:326.2,y:161.05,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-1.2585,y:168.7,x:457.5}},{t:this.ikNode_10,p:{rotation:-4.9497,x:345.6,y:320.35,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:8.4826,x:447.25,y:329.65,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.9735,x:388.8,y:366.85}},{t:this.ikNode_4,p:{rotation:-5.6964,x:418,y:529.25,regX:17.2,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:10.1658,x:356.95,y:525.3,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:0.9752,y:189.3,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.9593,x:326.15,y:160.95,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-0.7731,y:168.75,x:457.5}},{t:this.ikNode_10,p:{rotation:-5.3572,x:345.5,y:320.45,regY:45.7}},{t:this.ikNode_8,p:{regY:51.5,rotation:8.9296,x:447.15,y:329.65,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0111,x:388.65,y:366.85}},{t:this.ikNode_4,p:{rotation:-5.8512,x:417.95,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9997,scaleY:0.9997,rotation:10.9228,x:357,y:525.25,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.0128,y:189.3,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.7598,x:326.25,y:160.9,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:-0.2886,y:168.65,x:457.5}},{t:this.ikNode_10,p:{rotation:-5.7666,x:345.45,y:320.25,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:9.3769,x:447.05,y:329.7,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0487,x:388.5,y:366.75}},{t:this.ikNode_4,p:{rotation:-6.006,x:417.85,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9996,scaleY:0.9996,rotation:11.6785,x:357,y:525.3,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.0504,y:189.3,x:389.95}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.5612,x:326.4,y:160.8,regX:151.1}},{t:this.ikNode_12,p:{regY:138.6,rotation:0.1915,y:168.65,x:457.5}},{t:this.ikNode_10,p:{rotation:-6.1746,x:345.3,y:320.2,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:9.825,x:446.8,y:329.65,regX:45.2,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.0855,x:388.45,y:366.8}},{t:this.ikNode_4,p:{rotation:-6.1616,x:417.7,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.1,scaleX:0.9996,scaleY:0.9996,rotation:12.435,x:356.9,y:525.2,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.0871,y:189.3,x:390}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.3626,x:326.35,y:160.75,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:0.6769,y:168.7,x:457.45}},{t:this.ikNode_10,p:{rotation:-6.583,x:345.3,y:320.2,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:10.2735,x:446.8,y:329.65,regX:45.3,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.1231,x:388.3,y:366.8}},{t:this.ikNode_4,p:{rotation:-6.3164,x:417.6,y:529.25,regX:17.3,regY:11.3}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9996,scaleY:0.9996,rotation:13.1928,x:356.95,y:525.3,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.1247,y:189.3,x:389.9}}]},1).to({state:[{t:this.ikNode_14,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.1641,x:326.35,y:160.7,regX:151}},{t:this.ikNode_12,p:{regY:138.6,rotation:1.1614,y:168.65,x:457.5}},{t:this.ikNode_10,p:{rotation:-6.99,x:345.15,y:320.15,regY:45.6}},{t:this.ikNode_8,p:{regY:51.5,rotation:10.7219,x:446.8,y:329.7,regX:45.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.1607,x:388.2,y:366.8}},{t:this.ikNode_4,p:{rotation:-6.4712,x:417.4,y:529.15,regX:17.3,regY:11.2}},{t:this.ikNode_2,p:{regX:54.2,scaleX:0.9996,scaleY:0.9996,rotation:13.9505,x:356.9,y:525.2,regY:8.2}},{t:this.ikNode_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.1624,y:189.25,x:389.95}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(466.1,310.5,144.69999999999993,265.5);
// library properties:
lib.properties = {
	id: '1877A318135940488D825D96A832982A',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ANIMACIÓN CONEJO FARMACEUTICO_atlas_1.png", id:"ANIMACIÓN CONEJO FARMACEUTICO_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1877A318135940488D825D96A832982A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;