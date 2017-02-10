var app={
	inicio: function(){
		this.inicialosBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},
	
	inicialosBotones: function(){
		var botonClaro = document.querySelector('#claro');
		var botonOscuro = document.querySelector('#oscuro');
		
		botonClaro.addEventListener('click',this.ponloClaro,false);
		botonOscuro.addEventListener('click',this.ponloOscuro,false);
	},
	
	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},
	
	iniciaHammer: function() {
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);
		
		hammertime.get('pinch').set({ enable: true });
		hammertime.get('rotate').set({ enable: true });
		
		zona.addEventListener('webkitAnimationEnd', function(e){
			zona.className= '';
		});
		
		hammertime.on('tap', function(ev) { 
		  zona.className = 'tap';
		  document.querySelector('#info').innerHTML=ev.type+' !';
		});
		
		hammertime.on('doubletap', function(ev) { 
		  zona.className = 'doubletap';
		  document.querySelector('#info').innerHTML=ev.type+' !';
		});
		
		hammertime.on('press', function(ev) { 
		  zona.className = 'press';
		  document.querySelector('#info').innerHTML=ev.type+' !';
		});
		
		hammertime.on('swipe', function(ev) { 
			var clase=undefined;
			direccion=ev.direction;
			
			if (direccion==4) clase='swipe-derecha';
			if (direccion==2) clase='swipe-izquierda';
			
		  zona.className=clase;
		  document.querySelector('#info').innerHTML=ev.type+' !';
		});		
		
		hammertime.on('rotate', function(ev) { 
			var umbral = 15;
			if (ev.distance > umbral){
				document.querySelector('#info').innerHTML=ev.type+' !';
				zona.className = 'rotate';						
			}
		});		
	},
	
	ponloClaro: function(){
		document.body.className = 'claro';
	},
	
	ponloOscuro: function(){
		document.body.className = 'oscuro';
	},
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
}