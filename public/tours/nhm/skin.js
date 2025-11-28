// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: HollandPark_DW v2.ggsk
// Generated 2025-11-27T03:00:45

function pano2vrSkin(player,base) {
	player.addVariable('01_Drone', 1, 0, { ignoreInState: 0  });
	player.addVariable('02_Walk', 1, 1, { ignoreInState: 0  });
	player.addVariable('03_ToggleWalk', 1, 0, { ignoreInState: 0  });
	player.addVariable('04_ToggleDrone', 1, 0, { ignoreInState: 0  });
	player.addVariable('05_MapVis', 1, 1, { ignoreInState: 0  });
	player.addVariable('06_TourMap', 1, 0, { ignoreInState: 0  });
	player.addVariable('07_Bottom_menu_background', 1, 1, { ignoreInState: 0  });
	player.addVariable('08_MapLocation', 1, 0, { ignoreInState: 0  });
	player.addVariable('09_PopUp', 1, 0, { ignoreInState: 0  });
	player.addVariable('10_VTtitle', 1, 1, { ignoreInState: 0  });
	player.addVariable('11_ht_ani', 2, false, { ignoreInState: 0  });
	player.addVariable('12_PA_Logo', 1, 1, { ignoreInState: 0  });
	player.addVariable('13_Map_drone', 1, 0, { ignoreInState: 0  });
	player.addVariable('13_Animation', 2, true, { ignoreInState: 0  });
	player.addVariable('14_Map_walk', 1, 0, { ignoreInState: 0  });
	player.addVariable('password', 0, "", { ignoreInState: 0  });
	player.addVariable('password_lock_code', 0, "", { ignoreInState: 1  });
	player.addVariable('start_pano', 0, "node1", { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._a01_thumbnail_subway=document.createElement('div');
		els=me._a01_thumbnail_subway__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._a01_thumbnail_subway.ggScrollByX = function(diffX) {
			if(!me._a01_thumbnail_subway.ggHorScrollVisible || diffX == 0 || me._a01_thumbnail_subway.ggHPercentVisible >= 1.0) return;
			me._a01_thumbnail_subway.ggScrollPosX = (me._a01_thumbnail_subway__horScrollFg.offsetLeft + diffX);
			me._a01_thumbnail_subway.ggScrollPosX = Math.max(me._a01_thumbnail_subway.ggScrollPosX, 0);
			me._a01_thumbnail_subway.ggScrollPosX = Math.min(me._a01_thumbnail_subway.ggScrollPosX, me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
			me._a01_thumbnail_subway__horScrollFg.style.left = me._a01_thumbnail_subway.ggScrollPosX + 'px';
			let percentScrolled = me._a01_thumbnail_subway.ggScrollPosX / (me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
			me._a01_thumbnail_subway__content.style.left = -(Math.round((me._a01_thumbnail_subway.ggContentWidth * (1.0 - me._a01_thumbnail_subway.ggHPercentVisible)) * percentScrolled)) + me._a01_thumbnail_subway.ggContentLeftOffset + 'px';
			me._a01_thumbnail_subway.ggScrollPosXPercent = (me._a01_thumbnail_subway__horScrollFg.offsetLeft / me._a01_thumbnail_subway__horScrollBg.offsetWidth);
		}
		me._a01_thumbnail_subway.ggScrollByXSmooth = function(diffX) {
			if(!me._a01_thumbnail_subway.ggHorScrollVisible || diffX == 0 || me._a01_thumbnail_subway.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._a01_thumbnail_subway.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._a01_thumbnail_subway.ggScrollPosX >= me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth)) {
					me._a01_thumbnail_subway.ggScrollPosX = Math.min(me._a01_thumbnail_subway.ggScrollPosX, me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._a01_thumbnail_subway.ggScrollPosX <= 0)) {
					me._a01_thumbnail_subway.ggScrollPosX = Math.max(me._a01_thumbnail_subway.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._a01_thumbnail_subway__horScrollFg.style.left = me._a01_thumbnail_subway.ggScrollPosX + 'px';
			let percentScrolled = me._a01_thumbnail_subway.ggScrollPosX / (me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
			me._a01_thumbnail_subway__content.style.left = -(Math.round((me._a01_thumbnail_subway.ggContentWidth * (1.0 - me._a01_thumbnail_subway.ggHPercentVisible)) * percentScrolled)) + me._a01_thumbnail_subway.ggContentLeftOffset + 'px';
			me._a01_thumbnail_subway.ggScrollPosXPercent = (me._a01_thumbnail_subway__horScrollFg.offsetLeft / me._a01_thumbnail_subway__horScrollBg.offsetWidth);
			}, 10);
		}
		me._a01_thumbnail_subway.ggScrollByY = function(diffY) {
			if(!me._a01_thumbnail_subway.ggVertScrollVisible || diffY == 0 || me._a01_thumbnail_subway.ggVPercentVisible >= 1.0) return;
			me._a01_thumbnail_subway.ggScrollPosY = (me._a01_thumbnail_subway__vertScrollFg.offsetTop + diffY);
			me._a01_thumbnail_subway.ggScrollPosY = Math.max(me._a01_thumbnail_subway.ggScrollPosY, 0);
			me._a01_thumbnail_subway.ggScrollPosY = Math.min(me._a01_thumbnail_subway.ggScrollPosY, me._a01_thumbnail_subway__vertScrollBg.offsetHeight - me._a01_thumbnail_subway__vertScrollFg.offsetHeight);
			me._a01_thumbnail_subway__vertScrollFg.style.top = me._a01_thumbnail_subway.ggScrollPosY + 'px';
			let percentScrolled = me._a01_thumbnail_subway.ggScrollPosY / (me._a01_thumbnail_subway__vertScrollBg.offsetHeight - me._a01_thumbnail_subway__vertScrollFg.offsetHeight);
			me._a01_thumbnail_subway__content.style.top = -(Math.round((me._a01_thumbnail_subway.ggContentHeight * (1.0 - me._a01_thumbnail_subway.ggVPercentVisible)) * percentScrolled)) + me._a01_thumbnail_subway.ggContentTopOffset + 'px';
			me._a01_thumbnail_subway.ggScrollPosYPercent = (me._a01_thumbnail_subway__vertScrollFg.offsetTop / me._a01_thumbnail_subway__vertScrollBg.offsetHeight);
		}
		me._a01_thumbnail_subway.ggScrollByYSmooth = function(diffY) {
			if(!me._a01_thumbnail_subway.ggVertScrollVisible || diffY == 0 || me._a01_thumbnail_subway.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._a01_thumbnail_subway.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._a01_thumbnail_subway.ggScrollPosY >= me._a01_thumbnail_subway__vertScrollBg.offsetHeight - me._a01_thumbnail_subway__vertScrollFg.offsetHeight)) {
					me._a01_thumbnail_subway.ggScrollPosY = Math.min(me._a01_thumbnail_subway.ggScrollPosY, me._a01_thumbnail_subway__vertScrollBg.offsetHeight - me._a01_thumbnail_subway__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._a01_thumbnail_subway.ggScrollPosY <= 0)) {
					me._a01_thumbnail_subway.ggScrollPosY = Math.max(me._a01_thumbnail_subway.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._a01_thumbnail_subway__vertScrollFg.style.top = me._a01_thumbnail_subway.ggScrollPosY + 'px';
			let percentScrolled = me._a01_thumbnail_subway.ggScrollPosY / (me._a01_thumbnail_subway__vertScrollBg.offsetHeight - me._a01_thumbnail_subway__vertScrollFg.offsetHeight);
			me._a01_thumbnail_subway__content.style.top = -(Math.round((me._a01_thumbnail_subway.ggContentHeight * (1.0 - me._a01_thumbnail_subway.ggVPercentVisible)) * percentScrolled)) + me._a01_thumbnail_subway.ggContentTopOffset + 'px';
			me._a01_thumbnail_subway.ggScrollPosYPercent = (me._a01_thumbnail_subway__vertScrollFg.offsetTop / me._a01_thumbnail_subway__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._a01_thumbnail_subway.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._a01_thumbnail_subway.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._a01_thumbnail_subway.ggHPercentVisible);
					me._a01_thumbnail_subway.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._a01_thumbnail_subway.clientWidth - (me._a01_thumbnail_subway.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._a01_thumbnail_subway.clientWidth - (me._a01_thumbnail_subway.ggVertScrollVisible ? 15 : 0))) * me._a01_thumbnail_subway.ggHPercentVisible);
					me._a01_thumbnail_subway.ggScrollByXSmooth(diffX);
				}
			}
			if (me._a01_thumbnail_subway.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._a01_thumbnail_subway.ggVPercentVisible);
					me._a01_thumbnail_subway.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._a01_thumbnail_subway.clientHeight - (me._a01_thumbnail_subway.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._a01_thumbnail_subway.clientHeight - (me._a01_thumbnail_subway.ggHorScrollVisible ? 15 : 0))) * me._a01_thumbnail_subway.ggVPercentVisible);
					me._a01_thumbnail_subway.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._a01_thumbnail_subway__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._a01_thumbnail_subway.ggDragInertiaX *= 0.96;
				me._a01_thumbnail_subway.ggDragInertiaY *= 0.96;
				me._a01_thumbnail_subway.ggScrollByX(me._a01_thumbnail_subway.ggDragInertiaX);
				me._a01_thumbnail_subway.ggScrollByY(me._a01_thumbnail_subway.ggDragInertiaY);
				if (Math.abs(me._a01_thumbnail_subway.ggDragInertiaX) < 1.0 && Math.abs(me._a01_thumbnail_subway.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._a01_thumbnail_subway__content.onmouseup = null;
			me._a01_thumbnail_subway__content.onmousemove = null;
			me._a01_thumbnail_subway__content.ontouchend = null;
			me._a01_thumbnail_subway__content.ontouchmove = null;
			me._a01_thumbnail_subway__content.onpointerup = null;
			me._a01_thumbnail_subway__content.onpointermove = null;
			setTimeout(function() { me._a01_thumbnail_subway.ggIsDragging = false; }, 100);
		}
		me._a01_thumbnail_subway__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._a01_thumbnail_subway.ggDragStartX) > 10 || Math.abs(eventY - me._a01_thumbnail_subway.ggDragStartY) > 10) me._a01_thumbnail_subway.ggIsDragging = true;
			var diffX = (eventX - me._a01_thumbnail_subway.ggDragLastX) * me._a01_thumbnail_subway.ggHPercentVisible;
			var diffY = (eventY - me._a01_thumbnail_subway.ggDragLastY) * me._a01_thumbnail_subway.ggVPercentVisible;
			me._a01_thumbnail_subway.ggDragInertiaX = -diffX;
			me._a01_thumbnail_subway.ggDragInertiaY = -diffY;
			me._a01_thumbnail_subway.ggDragLastX = eventX;
			me._a01_thumbnail_subway.ggDragLastY = eventY;
			me._a01_thumbnail_subway.ggScrollByX(-diffX);
			me._a01_thumbnail_subway.ggScrollByY(-diffY);
		}
		me._a01_thumbnail_subway__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._a01_thumbnail_subway.ggDragLastX = me._a01_thumbnail_subway.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._a01_thumbnail_subway.ggDragLastY = me._a01_thumbnail_subway.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._a01_thumbnail_subway__content.onmouseup = me._a01_thumbnail_subway__content.mousetouchend;
			me._a01_thumbnail_subway__content.ontouchend = me._a01_thumbnail_subway__content.mousetouchend;
			me._a01_thumbnail_subway__content.onmousemove = me._a01_thumbnail_subway__content.mousetouchmove;
			me._a01_thumbnail_subway__content.ontouchmove = me._a01_thumbnail_subway__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._a01_thumbnail_subway__content.onpointerup = me._a01_thumbnail_subway__content.ontouchend;
				me._a01_thumbnail_subway__content.onpointermove = me._a01_thumbnail_subway__content.ontouchmove;
			}
		}
		els.onmousedown = me._a01_thumbnail_subway__content.mousetouchstart;
		els.ontouchstart = me._a01_thumbnail_subway__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._a01_thumbnail_subway__content.mousetouchstart;
		}
		elHorScrollBg = me._a01_thumbnail_subway__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._a01_thumbnail_subway__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._a01_thumbnail_subway.ggScrollPosX = 0;
		me._a01_thumbnail_subway.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._a01_thumbnail_subway.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._a01_thumbnail_subway.ggDragInertiaX *= 0.96;
					me._a01_thumbnail_subway.ggScrollByX(me._a01_thumbnail_subway.ggDragInertiaX);
					if (Math.abs(me._a01_thumbnail_subway.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._a01_thumbnail_subway.ggDragLastX;
				me._a01_thumbnail_subway.ggDragInertiaX = diffX;
				me._a01_thumbnail_subway.ggDragLastX = e.clientX;
				me._a01_thumbnail_subway.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._a01_thumbnail_subway.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._a01_thumbnail_subway.ggDragInertiaX *= 0.96;
					me._a01_thumbnail_subway.ggScrollByX(me._a01_thumbnail_subway.ggDragInertiaX);
					if (Math.abs(me._a01_thumbnail_subway.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._a01_thumbnail_subway.ggDragLastX;
				me._a01_thumbnail_subway.ggDragInertiaX = diffX;
				me._a01_thumbnail_subway.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._a01_thumbnail_subway.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._a01_thumbnail_subway.ggScrollWidth;
			if (e.offsetX < me._a01_thumbnail_subway.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._a01_thumbnail_subway.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._a01_thumbnail_subway__horScrollBg.getBoundingClientRect();
			var diffX = me._a01_thumbnail_subway.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._a01_thumbnail_subway.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._a01_thumbnail_subway.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._a01_thumbnail_subway.ggScrollByXSmooth(30 * me._a01_thumbnail_subway.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._a01_thumbnail_subway__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="A01_thumbnail_subway";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='height : 84px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a01_thumbnail_subway.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._a01_thumbnail_subway.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._a01_thumbnail_subway.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._a01_thumbnail_subway.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._a01_thumbnail_subway.style.transition='opacity 0s';
				if (me._a01_thumbnail_subway.ggCurrentLogicStateVisible == 0) {
					me._a01_thumbnail_subway.style.visibility=(Number(me._a01_thumbnail_subway.style.opacity)>0||!me._a01_thumbnail_subway.style.opacity)?'inherit':'hidden';
					me._a01_thumbnail_subway.ggVisible=true;
				}
				else if (me._a01_thumbnail_subway.ggCurrentLogicStateVisible == 1) {
					me._a01_thumbnail_subway.style.visibility="hidden";
					me._a01_thumbnail_subway.ggVisible=false;
				}
				else {
					me._a01_thumbnail_subway.style.visibility="hidden";
					me._a01_thumbnail_subway.ggVisible=false;
				}
			}
		}
		me._a01_thumbnail_subway.logicBlock_visible();
		me._a01_thumbnail_subway.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("2")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("0"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("3"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("4")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a01_thumbnail_subway.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a01_thumbnail_subway.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a01_thumbnail_subway.style.transition='opacity 0s';
				if (me._a01_thumbnail_subway.ggCurrentLogicStateAlpha == 0) {
					me._a01_thumbnail_subway.style.visibility=me._a01_thumbnail_subway.ggVisible?'inherit':'hidden';
					me._a01_thumbnail_subway.style.opacity=1;
				}
				else if (me._a01_thumbnail_subway.ggCurrentLogicStateAlpha == 1) {
					me._a01_thumbnail_subway.style.visibility="hidden";
					me._a01_thumbnail_subway.style.opacity=0;
				}
				else {
					me._a01_thumbnail_subway.style.visibility="hidden";
					me._a01_thumbnail_subway.style.opacity=0;
				}
			}
		}
		me._a01_thumbnail_subway.logicBlock_alpha();
		me._a01_thumbnail_subway.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._a01_thumbnail_subway__horScrollBg.style.visibility = 'inherit';
					me._a01_thumbnail_subway__horScrollFg.style.visibility = 'inherit';
					me._a01_thumbnail_subway.ggHorScrollVisible = true;
				} else {
					me._a01_thumbnail_subway__horScrollBg.style.visibility = 'hidden';
					me._a01_thumbnail_subway__horScrollFg.style.visibility = 'hidden';
					me._a01_thumbnail_subway.ggHorScrollVisible = false;
				}
				if(me._a01_thumbnail_subway.ggHorScrollVisible) {
					me._a01_thumbnail_subway.ggAvailableHeight = me._a01_thumbnail_subway.clientHeight - 15;
					if (me._a01_thumbnail_subway.ggVertScrollVisible) {
						me._a01_thumbnail_subway.ggAvailableWidth = me._a01_thumbnail_subway.clientWidth - 15;
						me._a01_thumbnail_subway.ggAvailableWidthWithScale = me._a01_thumbnail_subway.getBoundingClientRect().width - me._a01_thumbnail_subway__horScrollBg.getBoundingClientRect().height;
					} else {
						me._a01_thumbnail_subway.ggAvailableWidth = me._a01_thumbnail_subway.clientWidth;
						me._a01_thumbnail_subway.ggAvailableWidthWithScale = me._a01_thumbnail_subway.getBoundingClientRect().width;
					}
					me._a01_thumbnail_subway__horScrollBg.style.width = me._a01_thumbnail_subway.ggAvailableWidth + 'px';
					me._a01_thumbnail_subway.ggHPercentVisible = contentWidth != 0 ? me._a01_thumbnail_subway.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._a01_thumbnail_subway.ggHPercentVisible > 1.0) me._a01_thumbnail_subway.ggHPercentVisible = 1.0;
					me._a01_thumbnail_subway.ggScrollWidth = Math.round(me._a01_thumbnail_subway__horScrollBg.offsetWidth * me._a01_thumbnail_subway.ggHPercentVisible);
					me._a01_thumbnail_subway__horScrollFg.style.width = me._a01_thumbnail_subway.ggScrollWidth + 'px';
					me._a01_thumbnail_subway.ggScrollPosX = me._a01_thumbnail_subway.ggScrollPosXPercent * me._a01_thumbnail_subway.ggAvailableWidth;
					me._a01_thumbnail_subway.ggScrollPosX = Math.min(me._a01_thumbnail_subway.ggScrollPosX, me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
					me._a01_thumbnail_subway__horScrollFg.style.left = me._a01_thumbnail_subway.ggScrollPosX + 'px';
					if (me._a01_thumbnail_subway.ggHPercentVisible < 1.0) {
						let percentScrolled = me._a01_thumbnail_subway.ggScrollPosX / (me._a01_thumbnail_subway__horScrollBg.offsetWidth - me._a01_thumbnail_subway__horScrollFg.offsetWidth);
						me._a01_thumbnail_subway__content.style.left = -(Math.round((me._a01_thumbnail_subway.ggContentWidth * (1.0 - me._a01_thumbnail_subway.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._a01_thumbnail_subway.ggAvailableHeight = me._a01_thumbnail_subway.clientHeight;
					me._a01_thumbnail_subway.ggScrollPosX = 0;
					me._a01_thumbnail_subway.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._a01_thumbnail_subway.ggHorScrollVisible || vertScrollWasVisible != me._a01_thumbnail_subway.ggVertScrollVisible) {
					skin.updateSize(me._a01_thumbnail_subway);
					me._a01_thumbnail_subway.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner2.ggUpdating == true) return;
			me._thumbnail_cloner2.ggUpdating = true;
			var el=me._thumbnail_cloner2;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner2.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner2.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner2.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner2.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner2.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner2.ggNodeCount = me._thumbnail_cloner2.ggNumFilterPassed;
			me._thumbnail_cloner2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner2.parentNode && me._thumbnail_cloner2.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "01_Subway";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner2.childNodes.length; i++) {
				var child=me._thumbnail_cloner2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner2.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner2.ggUpdate();
		}
		me._a01_thumbnail_subway__content.appendChild(me._thumbnail_cloner2);
		me.divSkin.appendChild(me._a01_thumbnail_subway);
		el=me._a02_thumbnail_groundlevel=document.createElement('div');
		els=me._a02_thumbnail_groundlevel__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._a02_thumbnail_groundlevel.ggScrollByX = function(diffX) {
			if(!me._a02_thumbnail_groundlevel.ggHorScrollVisible || diffX == 0 || me._a02_thumbnail_groundlevel.ggHPercentVisible >= 1.0) return;
			me._a02_thumbnail_groundlevel.ggScrollPosX = (me._a02_thumbnail_groundlevel__horScrollFg.offsetLeft + diffX);
			me._a02_thumbnail_groundlevel.ggScrollPosX = Math.max(me._a02_thumbnail_groundlevel.ggScrollPosX, 0);
			me._a02_thumbnail_groundlevel.ggScrollPosX = Math.min(me._a02_thumbnail_groundlevel.ggScrollPosX, me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
			me._a02_thumbnail_groundlevel__horScrollFg.style.left = me._a02_thumbnail_groundlevel.ggScrollPosX + 'px';
			let percentScrolled = me._a02_thumbnail_groundlevel.ggScrollPosX / (me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
			me._a02_thumbnail_groundlevel__content.style.left = -(Math.round((me._a02_thumbnail_groundlevel.ggContentWidth * (1.0 - me._a02_thumbnail_groundlevel.ggHPercentVisible)) * percentScrolled)) + me._a02_thumbnail_groundlevel.ggContentLeftOffset + 'px';
			me._a02_thumbnail_groundlevel.ggScrollPosXPercent = (me._a02_thumbnail_groundlevel__horScrollFg.offsetLeft / me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth);
		}
		me._a02_thumbnail_groundlevel.ggScrollByXSmooth = function(diffX) {
			if(!me._a02_thumbnail_groundlevel.ggHorScrollVisible || diffX == 0 || me._a02_thumbnail_groundlevel.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._a02_thumbnail_groundlevel.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._a02_thumbnail_groundlevel.ggScrollPosX >= me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth)) {
					me._a02_thumbnail_groundlevel.ggScrollPosX = Math.min(me._a02_thumbnail_groundlevel.ggScrollPosX, me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._a02_thumbnail_groundlevel.ggScrollPosX <= 0)) {
					me._a02_thumbnail_groundlevel.ggScrollPosX = Math.max(me._a02_thumbnail_groundlevel.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._a02_thumbnail_groundlevel__horScrollFg.style.left = me._a02_thumbnail_groundlevel.ggScrollPosX + 'px';
			let percentScrolled = me._a02_thumbnail_groundlevel.ggScrollPosX / (me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
			me._a02_thumbnail_groundlevel__content.style.left = -(Math.round((me._a02_thumbnail_groundlevel.ggContentWidth * (1.0 - me._a02_thumbnail_groundlevel.ggHPercentVisible)) * percentScrolled)) + me._a02_thumbnail_groundlevel.ggContentLeftOffset + 'px';
			me._a02_thumbnail_groundlevel.ggScrollPosXPercent = (me._a02_thumbnail_groundlevel__horScrollFg.offsetLeft / me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth);
			}, 10);
		}
		me._a02_thumbnail_groundlevel.ggScrollByY = function(diffY) {
			if(!me._a02_thumbnail_groundlevel.ggVertScrollVisible || diffY == 0 || me._a02_thumbnail_groundlevel.ggVPercentVisible >= 1.0) return;
			me._a02_thumbnail_groundlevel.ggScrollPosY = (me._a02_thumbnail_groundlevel__vertScrollFg.offsetTop + diffY);
			me._a02_thumbnail_groundlevel.ggScrollPosY = Math.max(me._a02_thumbnail_groundlevel.ggScrollPosY, 0);
			me._a02_thumbnail_groundlevel.ggScrollPosY = Math.min(me._a02_thumbnail_groundlevel.ggScrollPosY, me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight - me._a02_thumbnail_groundlevel__vertScrollFg.offsetHeight);
			me._a02_thumbnail_groundlevel__vertScrollFg.style.top = me._a02_thumbnail_groundlevel.ggScrollPosY + 'px';
			let percentScrolled = me._a02_thumbnail_groundlevel.ggScrollPosY / (me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight - me._a02_thumbnail_groundlevel__vertScrollFg.offsetHeight);
			me._a02_thumbnail_groundlevel__content.style.top = -(Math.round((me._a02_thumbnail_groundlevel.ggContentHeight * (1.0 - me._a02_thumbnail_groundlevel.ggVPercentVisible)) * percentScrolled)) + me._a02_thumbnail_groundlevel.ggContentTopOffset + 'px';
			me._a02_thumbnail_groundlevel.ggScrollPosYPercent = (me._a02_thumbnail_groundlevel__vertScrollFg.offsetTop / me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight);
		}
		me._a02_thumbnail_groundlevel.ggScrollByYSmooth = function(diffY) {
			if(!me._a02_thumbnail_groundlevel.ggVertScrollVisible || diffY == 0 || me._a02_thumbnail_groundlevel.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._a02_thumbnail_groundlevel.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._a02_thumbnail_groundlevel.ggScrollPosY >= me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight - me._a02_thumbnail_groundlevel__vertScrollFg.offsetHeight)) {
					me._a02_thumbnail_groundlevel.ggScrollPosY = Math.min(me._a02_thumbnail_groundlevel.ggScrollPosY, me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight - me._a02_thumbnail_groundlevel__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._a02_thumbnail_groundlevel.ggScrollPosY <= 0)) {
					me._a02_thumbnail_groundlevel.ggScrollPosY = Math.max(me._a02_thumbnail_groundlevel.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._a02_thumbnail_groundlevel__vertScrollFg.style.top = me._a02_thumbnail_groundlevel.ggScrollPosY + 'px';
			let percentScrolled = me._a02_thumbnail_groundlevel.ggScrollPosY / (me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight - me._a02_thumbnail_groundlevel__vertScrollFg.offsetHeight);
			me._a02_thumbnail_groundlevel__content.style.top = -(Math.round((me._a02_thumbnail_groundlevel.ggContentHeight * (1.0 - me._a02_thumbnail_groundlevel.ggVPercentVisible)) * percentScrolled)) + me._a02_thumbnail_groundlevel.ggContentTopOffset + 'px';
			me._a02_thumbnail_groundlevel.ggScrollPosYPercent = (me._a02_thumbnail_groundlevel__vertScrollFg.offsetTop / me._a02_thumbnail_groundlevel__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._a02_thumbnail_groundlevel.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._a02_thumbnail_groundlevel.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._a02_thumbnail_groundlevel.ggHPercentVisible);
					me._a02_thumbnail_groundlevel.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._a02_thumbnail_groundlevel.clientWidth - (me._a02_thumbnail_groundlevel.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._a02_thumbnail_groundlevel.clientWidth - (me._a02_thumbnail_groundlevel.ggVertScrollVisible ? 15 : 0))) * me._a02_thumbnail_groundlevel.ggHPercentVisible);
					me._a02_thumbnail_groundlevel.ggScrollByXSmooth(diffX);
				}
			}
			if (me._a02_thumbnail_groundlevel.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._a02_thumbnail_groundlevel.ggVPercentVisible);
					me._a02_thumbnail_groundlevel.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._a02_thumbnail_groundlevel.clientHeight - (me._a02_thumbnail_groundlevel.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._a02_thumbnail_groundlevel.clientHeight - (me._a02_thumbnail_groundlevel.ggHorScrollVisible ? 15 : 0))) * me._a02_thumbnail_groundlevel.ggVPercentVisible);
					me._a02_thumbnail_groundlevel.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._a02_thumbnail_groundlevel__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._a02_thumbnail_groundlevel.ggDragInertiaX *= 0.96;
				me._a02_thumbnail_groundlevel.ggDragInertiaY *= 0.96;
				me._a02_thumbnail_groundlevel.ggScrollByX(me._a02_thumbnail_groundlevel.ggDragInertiaX);
				me._a02_thumbnail_groundlevel.ggScrollByY(me._a02_thumbnail_groundlevel.ggDragInertiaY);
				if (Math.abs(me._a02_thumbnail_groundlevel.ggDragInertiaX) < 1.0 && Math.abs(me._a02_thumbnail_groundlevel.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._a02_thumbnail_groundlevel__content.onmouseup = null;
			me._a02_thumbnail_groundlevel__content.onmousemove = null;
			me._a02_thumbnail_groundlevel__content.ontouchend = null;
			me._a02_thumbnail_groundlevel__content.ontouchmove = null;
			me._a02_thumbnail_groundlevel__content.onpointerup = null;
			me._a02_thumbnail_groundlevel__content.onpointermove = null;
			setTimeout(function() { me._a02_thumbnail_groundlevel.ggIsDragging = false; }, 100);
		}
		me._a02_thumbnail_groundlevel__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._a02_thumbnail_groundlevel.ggDragStartX) > 10 || Math.abs(eventY - me._a02_thumbnail_groundlevel.ggDragStartY) > 10) me._a02_thumbnail_groundlevel.ggIsDragging = true;
			var diffX = (eventX - me._a02_thumbnail_groundlevel.ggDragLastX) * me._a02_thumbnail_groundlevel.ggHPercentVisible;
			var diffY = (eventY - me._a02_thumbnail_groundlevel.ggDragLastY) * me._a02_thumbnail_groundlevel.ggVPercentVisible;
			me._a02_thumbnail_groundlevel.ggDragInertiaX = -diffX;
			me._a02_thumbnail_groundlevel.ggDragInertiaY = -diffY;
			me._a02_thumbnail_groundlevel.ggDragLastX = eventX;
			me._a02_thumbnail_groundlevel.ggDragLastY = eventY;
			me._a02_thumbnail_groundlevel.ggScrollByX(-diffX);
			me._a02_thumbnail_groundlevel.ggScrollByY(-diffY);
		}
		me._a02_thumbnail_groundlevel__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._a02_thumbnail_groundlevel.ggDragLastX = me._a02_thumbnail_groundlevel.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._a02_thumbnail_groundlevel.ggDragLastY = me._a02_thumbnail_groundlevel.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._a02_thumbnail_groundlevel__content.onmouseup = me._a02_thumbnail_groundlevel__content.mousetouchend;
			me._a02_thumbnail_groundlevel__content.ontouchend = me._a02_thumbnail_groundlevel__content.mousetouchend;
			me._a02_thumbnail_groundlevel__content.onmousemove = me._a02_thumbnail_groundlevel__content.mousetouchmove;
			me._a02_thumbnail_groundlevel__content.ontouchmove = me._a02_thumbnail_groundlevel__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._a02_thumbnail_groundlevel__content.onpointerup = me._a02_thumbnail_groundlevel__content.ontouchend;
				me._a02_thumbnail_groundlevel__content.onpointermove = me._a02_thumbnail_groundlevel__content.ontouchmove;
			}
		}
		els.onmousedown = me._a02_thumbnail_groundlevel__content.mousetouchstart;
		els.ontouchstart = me._a02_thumbnail_groundlevel__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._a02_thumbnail_groundlevel__content.mousetouchstart;
		}
		elHorScrollBg = me._a02_thumbnail_groundlevel__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._a02_thumbnail_groundlevel__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._a02_thumbnail_groundlevel.ggScrollPosX = 0;
		me._a02_thumbnail_groundlevel.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._a02_thumbnail_groundlevel.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._a02_thumbnail_groundlevel.ggDragInertiaX *= 0.96;
					me._a02_thumbnail_groundlevel.ggScrollByX(me._a02_thumbnail_groundlevel.ggDragInertiaX);
					if (Math.abs(me._a02_thumbnail_groundlevel.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._a02_thumbnail_groundlevel.ggDragLastX;
				me._a02_thumbnail_groundlevel.ggDragInertiaX = diffX;
				me._a02_thumbnail_groundlevel.ggDragLastX = e.clientX;
				me._a02_thumbnail_groundlevel.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._a02_thumbnail_groundlevel.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._a02_thumbnail_groundlevel.ggDragInertiaX *= 0.96;
					me._a02_thumbnail_groundlevel.ggScrollByX(me._a02_thumbnail_groundlevel.ggDragInertiaX);
					if (Math.abs(me._a02_thumbnail_groundlevel.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._a02_thumbnail_groundlevel.ggDragLastX;
				me._a02_thumbnail_groundlevel.ggDragInertiaX = diffX;
				me._a02_thumbnail_groundlevel.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._a02_thumbnail_groundlevel.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._a02_thumbnail_groundlevel.ggScrollWidth;
			if (e.offsetX < me._a02_thumbnail_groundlevel.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._a02_thumbnail_groundlevel.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._a02_thumbnail_groundlevel__horScrollBg.getBoundingClientRect();
			var diffX = me._a02_thumbnail_groundlevel.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._a02_thumbnail_groundlevel.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._a02_thumbnail_groundlevel.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._a02_thumbnail_groundlevel.ggScrollByXSmooth(30 * me._a02_thumbnail_groundlevel.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._a02_thumbnail_groundlevel__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="A02_thumbnail_groundlevel";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='height : 84px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0%);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a02_thumbnail_groundlevel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._a02_thumbnail_groundlevel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._a02_thumbnail_groundlevel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._a02_thumbnail_groundlevel.style.transition='opacity 0s';
				if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateVisible == 0) {
					me._a02_thumbnail_groundlevel.style.visibility=(Number(me._a02_thumbnail_groundlevel.style.opacity)>0||!me._a02_thumbnail_groundlevel.style.opacity)?'inherit':'hidden';
					me._a02_thumbnail_groundlevel.ggVisible=true;
				}
				else if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateVisible == 1) {
					me._a02_thumbnail_groundlevel.style.visibility="hidden";
					me._a02_thumbnail_groundlevel.ggVisible=false;
				}
				else {
					me._a02_thumbnail_groundlevel.style.visibility="hidden";
					me._a02_thumbnail_groundlevel.ggVisible=false;
				}
			}
		}
		me._a02_thumbnail_groundlevel.logicBlock_visible();
		me._a02_thumbnail_groundlevel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('03_ToggleWalk') == Number("0"))) || 
				((player.getVariableValue('03_ToggleWalk') == Number("2")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a02_thumbnail_groundlevel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a02_thumbnail_groundlevel.style.transition='opacity 0s';
				if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateAlpha == 0) {
					me._a02_thumbnail_groundlevel.style.visibility=me._a02_thumbnail_groundlevel.ggVisible?'inherit':'hidden';
					me._a02_thumbnail_groundlevel.style.opacity=1;
				}
				else if (me._a02_thumbnail_groundlevel.ggCurrentLogicStateAlpha == 1) {
					me._a02_thumbnail_groundlevel.style.visibility="hidden";
					me._a02_thumbnail_groundlevel.style.opacity=0;
				}
				else {
					me._a02_thumbnail_groundlevel.style.visibility="hidden";
					me._a02_thumbnail_groundlevel.style.opacity=0;
				}
			}
		}
		me._a02_thumbnail_groundlevel.logicBlock_alpha();
		me._a02_thumbnail_groundlevel.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._a02_thumbnail_groundlevel__horScrollBg.style.visibility = 'inherit';
				me._a02_thumbnail_groundlevel__horScrollFg.style.visibility = 'inherit';
				me._a02_thumbnail_groundlevel.ggHorScrollVisible = true;
				if(me._a02_thumbnail_groundlevel.ggHorScrollVisible) {
					me._a02_thumbnail_groundlevel.ggAvailableHeight = me._a02_thumbnail_groundlevel.clientHeight - 15;
					if (me._a02_thumbnail_groundlevel.ggVertScrollVisible) {
						me._a02_thumbnail_groundlevel.ggAvailableWidth = me._a02_thumbnail_groundlevel.clientWidth - 15;
						me._a02_thumbnail_groundlevel.ggAvailableWidthWithScale = me._a02_thumbnail_groundlevel.getBoundingClientRect().width - me._a02_thumbnail_groundlevel__horScrollBg.getBoundingClientRect().height;
					} else {
						me._a02_thumbnail_groundlevel.ggAvailableWidth = me._a02_thumbnail_groundlevel.clientWidth;
						me._a02_thumbnail_groundlevel.ggAvailableWidthWithScale = me._a02_thumbnail_groundlevel.getBoundingClientRect().width;
					}
					me._a02_thumbnail_groundlevel__horScrollBg.style.width = me._a02_thumbnail_groundlevel.ggAvailableWidth + 'px';
					me._a02_thumbnail_groundlevel.ggHPercentVisible = contentWidth != 0 ? me._a02_thumbnail_groundlevel.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._a02_thumbnail_groundlevel.ggHPercentVisible > 1.0) me._a02_thumbnail_groundlevel.ggHPercentVisible = 1.0;
					me._a02_thumbnail_groundlevel.ggScrollWidth = Math.round(me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth * me._a02_thumbnail_groundlevel.ggHPercentVisible);
					me._a02_thumbnail_groundlevel__horScrollFg.style.width = me._a02_thumbnail_groundlevel.ggScrollWidth + 'px';
					me._a02_thumbnail_groundlevel.ggScrollPosX = me._a02_thumbnail_groundlevel.ggScrollPosXPercent * me._a02_thumbnail_groundlevel.ggAvailableWidth;
					me._a02_thumbnail_groundlevel.ggScrollPosX = Math.min(me._a02_thumbnail_groundlevel.ggScrollPosX, me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
					me._a02_thumbnail_groundlevel__horScrollFg.style.left = me._a02_thumbnail_groundlevel.ggScrollPosX + 'px';
					if (me._a02_thumbnail_groundlevel.ggHPercentVisible < 1.0) {
						let percentScrolled = me._a02_thumbnail_groundlevel.ggScrollPosX / (me._a02_thumbnail_groundlevel__horScrollBg.offsetWidth - me._a02_thumbnail_groundlevel__horScrollFg.offsetWidth);
						me._a02_thumbnail_groundlevel__content.style.left = -(Math.round((me._a02_thumbnail_groundlevel.ggContentWidth * (1.0 - me._a02_thumbnail_groundlevel.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._a02_thumbnail_groundlevel.ggAvailableHeight = me._a02_thumbnail_groundlevel.clientHeight;
					me._a02_thumbnail_groundlevel.ggScrollPosX = 0;
					me._a02_thumbnail_groundlevel.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._a02_thumbnail_groundlevel.ggHorScrollVisible || vertScrollWasVisible != me._a02_thumbnail_groundlevel.ggVertScrollVisible) {
					skin.updateSize(me._a02_thumbnail_groundlevel);
					me._a02_thumbnail_groundlevel.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner1.ggUpdating == true) return;
			me._thumbnail_cloner1.ggUpdating = true;
			var el=me._thumbnail_cloner1;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner1.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner1.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner1.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner1.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner1.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner1.ggNodeCount = me._thumbnail_cloner1.ggNumFilterPassed;
			me._thumbnail_cloner1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner1.parentNode && me._thumbnail_cloner1.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "02GroundLevel";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner1.childNodes.length; i++) {
				var child=me._thumbnail_cloner1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner1.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner1.ggUpdate();
		}
		me._a02_thumbnail_groundlevel__content.appendChild(me._thumbnail_cloner1);
		me.divSkin.appendChild(me._a02_thumbnail_groundlevel);
		el=me._a03_thumbnail_subway_mob=document.createElement('div');
		els=me._a03_thumbnail_subway_mob__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._a03_thumbnail_subway_mob.ggScrollByX = function(diffX) {
			if(!me._a03_thumbnail_subway_mob.ggHorScrollVisible || diffX == 0 || me._a03_thumbnail_subway_mob.ggHPercentVisible >= 1.0) return;
			me._a03_thumbnail_subway_mob.ggScrollPosX = (me._a03_thumbnail_subway_mob__horScrollFg.offsetLeft + diffX);
			me._a03_thumbnail_subway_mob.ggScrollPosX = Math.max(me._a03_thumbnail_subway_mob.ggScrollPosX, 0);
			me._a03_thumbnail_subway_mob.ggScrollPosX = Math.min(me._a03_thumbnail_subway_mob.ggScrollPosX, me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth - me._a03_thumbnail_subway_mob__horScrollFg.offsetWidth);
			me._a03_thumbnail_subway_mob__horScrollFg.style.left = me._a03_thumbnail_subway_mob.ggScrollPosX + 'px';
			let percentScrolled = me._a03_thumbnail_subway_mob.ggScrollPosX / (me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth - me._a03_thumbnail_subway_mob__horScrollFg.offsetWidth);
			me._a03_thumbnail_subway_mob__content.style.left = -(Math.round((me._a03_thumbnail_subway_mob.ggContentWidth * (1.0 - me._a03_thumbnail_subway_mob.ggHPercentVisible)) * percentScrolled)) + me._a03_thumbnail_subway_mob.ggContentLeftOffset + 'px';
			me._a03_thumbnail_subway_mob.ggScrollPosXPercent = (me._a03_thumbnail_subway_mob__horScrollFg.offsetLeft / me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth);
		}
		me._a03_thumbnail_subway_mob.ggScrollByXSmooth = function(diffX) {
			if(!me._a03_thumbnail_subway_mob.ggHorScrollVisible || diffX == 0 || me._a03_thumbnail_subway_mob.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._a03_thumbnail_subway_mob.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._a03_thumbnail_subway_mob.ggScrollPosX >= me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth - me._a03_thumbnail_subway_mob__horScrollFg.offsetWidth)) {
					me._a03_thumbnail_subway_mob.ggScrollPosX = Math.min(me._a03_thumbnail_subway_mob.ggScrollPosX, me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth - me._a03_thumbnail_subway_mob__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._a03_thumbnail_subway_mob.ggScrollPosX <= 0)) {
					me._a03_thumbnail_subway_mob.ggScrollPosX = Math.max(me._a03_thumbnail_subway_mob.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._a03_thumbnail_subway_mob__horScrollFg.style.left = me._a03_thumbnail_subway_mob.ggScrollPosX + 'px';
			let percentScrolled = me._a03_thumbnail_subway_mob.ggScrollPosX / (me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth - me._a03_thumbnail_subway_mob__horScrollFg.offsetWidth);
			me._a03_thumbnail_subway_mob__content.style.left = -(Math.round((me._a03_thumbnail_subway_mob.ggContentWidth * (1.0 - me._a03_thumbnail_subway_mob.ggHPercentVisible)) * percentScrolled)) + me._a03_thumbnail_subway_mob.ggContentLeftOffset + 'px';
			me._a03_thumbnail_subway_mob.ggScrollPosXPercent = (me._a03_thumbnail_subway_mob__horScrollFg.offsetLeft / me._a03_thumbnail_subway_mob__horScrollBg.offsetWidth);
			}, 10);
		}
		me._a03_thumbnail_subway_mob.ggScrollByY = function(diffY) {
			if(!me._a03_thumbnail_subway_mob.ggVertScrollVisible || diffY == 0 || me._a03_thumbnail_subway_mob.ggVPercentVisible >= 1.0) return;
			me._a03_thumbnail_subway_mob.ggScrollPosY = (me._a03_thumbnail_subway_mob__vertScrollFg.offsetTop + diffY);
			me._a03_thumbnail_subway_mob.ggScrollPosY = Math.max(me._a03_thumbnail_subway_mob.ggScrollPosY, 0);
			me._a03_thumbnail_subway_mob.ggScrollPosY = Math.min(me._a03_thumbnail_subway_mob.ggScrollPosY, me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
			me._a03_thumbnail_subway_mob__vertScrollFg.style.top = me._a03_thumbnail_subway_mob.ggScrollPosY + 'px';
			let percentScrolled = me._a03_thumbnail_subway_mob.ggScrollPosY / (me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
			me._a03_thumbnail_subway_mob__content.style.top = -(Math.round((me._a03_thumbnail_subway_mob.ggContentHeight * (1.0 - me._a03_thumbnail_subway_mob.ggVPercentVisible)) * percentScrolled)) + me._a03_thumbnail_subway_mob.ggContentTopOffset + 'px';
			me._a03_thumbnail_subway_mob.ggScrollPosYPercent = (me._a03_thumbnail_subway_mob__vertScrollFg.offsetTop / me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight);
		}
		me._a03_thumbnail_subway_mob.ggScrollByYSmooth = function(diffY) {
			if(!me._a03_thumbnail_subway_mob.ggVertScrollVisible || diffY == 0 || me._a03_thumbnail_subway_mob.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._a03_thumbnail_subway_mob.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._a03_thumbnail_subway_mob.ggScrollPosY >= me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight)) {
					me._a03_thumbnail_subway_mob.ggScrollPosY = Math.min(me._a03_thumbnail_subway_mob.ggScrollPosY, me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._a03_thumbnail_subway_mob.ggScrollPosY <= 0)) {
					me._a03_thumbnail_subway_mob.ggScrollPosY = Math.max(me._a03_thumbnail_subway_mob.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._a03_thumbnail_subway_mob__vertScrollFg.style.top = me._a03_thumbnail_subway_mob.ggScrollPosY + 'px';
			let percentScrolled = me._a03_thumbnail_subway_mob.ggScrollPosY / (me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
			me._a03_thumbnail_subway_mob__content.style.top = -(Math.round((me._a03_thumbnail_subway_mob.ggContentHeight * (1.0 - me._a03_thumbnail_subway_mob.ggVPercentVisible)) * percentScrolled)) + me._a03_thumbnail_subway_mob.ggContentTopOffset + 'px';
			me._a03_thumbnail_subway_mob.ggScrollPosYPercent = (me._a03_thumbnail_subway_mob__vertScrollFg.offsetTop / me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._a03_thumbnail_subway_mob.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._a03_thumbnail_subway_mob.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._a03_thumbnail_subway_mob.ggHPercentVisible);
					me._a03_thumbnail_subway_mob.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._a03_thumbnail_subway_mob.clientWidth - (me._a03_thumbnail_subway_mob.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._a03_thumbnail_subway_mob.clientWidth - (me._a03_thumbnail_subway_mob.ggVertScrollVisible ? 15 : 0))) * me._a03_thumbnail_subway_mob.ggHPercentVisible);
					me._a03_thumbnail_subway_mob.ggScrollByXSmooth(diffX);
				}
			}
			if (me._a03_thumbnail_subway_mob.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._a03_thumbnail_subway_mob.ggVPercentVisible);
					me._a03_thumbnail_subway_mob.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._a03_thumbnail_subway_mob.clientHeight - (me._a03_thumbnail_subway_mob.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._a03_thumbnail_subway_mob.clientHeight - (me._a03_thumbnail_subway_mob.ggHorScrollVisible ? 15 : 0))) * me._a03_thumbnail_subway_mob.ggVPercentVisible);
					me._a03_thumbnail_subway_mob.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._a03_thumbnail_subway_mob__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._a03_thumbnail_subway_mob.ggDragInertiaX *= 0.96;
				me._a03_thumbnail_subway_mob.ggDragInertiaY *= 0.96;
				me._a03_thumbnail_subway_mob.ggScrollByX(me._a03_thumbnail_subway_mob.ggDragInertiaX);
				me._a03_thumbnail_subway_mob.ggScrollByY(me._a03_thumbnail_subway_mob.ggDragInertiaY);
				if (Math.abs(me._a03_thumbnail_subway_mob.ggDragInertiaX) < 1.0 && Math.abs(me._a03_thumbnail_subway_mob.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._a03_thumbnail_subway_mob__content.onmouseup = null;
			me._a03_thumbnail_subway_mob__content.onmousemove = null;
			me._a03_thumbnail_subway_mob__content.ontouchend = null;
			me._a03_thumbnail_subway_mob__content.ontouchmove = null;
			me._a03_thumbnail_subway_mob__content.onpointerup = null;
			me._a03_thumbnail_subway_mob__content.onpointermove = null;
			setTimeout(function() { me._a03_thumbnail_subway_mob.ggIsDragging = false; }, 100);
		}
		me._a03_thumbnail_subway_mob__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._a03_thumbnail_subway_mob.ggDragStartX) > 10 || Math.abs(eventY - me._a03_thumbnail_subway_mob.ggDragStartY) > 10) me._a03_thumbnail_subway_mob.ggIsDragging = true;
			var diffX = (eventX - me._a03_thumbnail_subway_mob.ggDragLastX) * me._a03_thumbnail_subway_mob.ggHPercentVisible;
			var diffY = (eventY - me._a03_thumbnail_subway_mob.ggDragLastY) * me._a03_thumbnail_subway_mob.ggVPercentVisible;
			me._a03_thumbnail_subway_mob.ggDragInertiaX = -diffX;
			me._a03_thumbnail_subway_mob.ggDragInertiaY = -diffY;
			me._a03_thumbnail_subway_mob.ggDragLastX = eventX;
			me._a03_thumbnail_subway_mob.ggDragLastY = eventY;
			me._a03_thumbnail_subway_mob.ggScrollByX(-diffX);
			me._a03_thumbnail_subway_mob.ggScrollByY(-diffY);
		}
		me._a03_thumbnail_subway_mob__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._a03_thumbnail_subway_mob.ggDragLastX = me._a03_thumbnail_subway_mob.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._a03_thumbnail_subway_mob.ggDragLastY = me._a03_thumbnail_subway_mob.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._a03_thumbnail_subway_mob__content.onmouseup = me._a03_thumbnail_subway_mob__content.mousetouchend;
			me._a03_thumbnail_subway_mob__content.ontouchend = me._a03_thumbnail_subway_mob__content.mousetouchend;
			me._a03_thumbnail_subway_mob__content.onmousemove = me._a03_thumbnail_subway_mob__content.mousetouchmove;
			me._a03_thumbnail_subway_mob__content.ontouchmove = me._a03_thumbnail_subway_mob__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._a03_thumbnail_subway_mob__content.onpointerup = me._a03_thumbnail_subway_mob__content.ontouchend;
				me._a03_thumbnail_subway_mob__content.onpointermove = me._a03_thumbnail_subway_mob__content.ontouchmove;
			}
		}
		els.onmousedown = me._a03_thumbnail_subway_mob__content.mousetouchstart;
		els.ontouchstart = me._a03_thumbnail_subway_mob__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._a03_thumbnail_subway_mob__content.mousetouchstart;
		}
		elVertScrollBg = me._a03_thumbnail_subway_mob__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 805px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._a03_thumbnail_subway_mob__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 805px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._a03_thumbnail_subway_mob.ggScrollPosY = 0;
		me._a03_thumbnail_subway_mob.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._a03_thumbnail_subway_mob.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._a03_thumbnail_subway_mob.ggDragInertiaY *= 0.96;
					me._a03_thumbnail_subway_mob.ggScrollByY(me._a03_thumbnail_subway_mob.ggDragInertiaY);
					if (Math.abs(me._a03_thumbnail_subway_mob.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._a03_thumbnail_subway_mob.ggDragLastY;
				me._a03_thumbnail_subway_mob.ggDragInertiaY = diffY;
				me._a03_thumbnail_subway_mob.ggDragLastY = e.clientY;
				me._a03_thumbnail_subway_mob.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._a03_thumbnail_subway_mob.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._a03_thumbnail_subway_mob.ggDragInertiaY *= 0.96;
					me._a03_thumbnail_subway_mob.ggScrollByY(me._a03_thumbnail_subway_mob.ggDragInertiaY);
					if (Math.abs(me._a03_thumbnail_subway_mob.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._a03_thumbnail_subway_mob.ggDragLastY;
				me._a03_thumbnail_subway_mob.ggDragInertiaY = diffY;
				me._a03_thumbnail_subway_mob.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._a03_thumbnail_subway_mob.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._a03_thumbnail_subway_mob.ggScrollHeight;
			if (e.offsetY < me._a03_thumbnail_subway_mob.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._a03_thumbnail_subway_mob.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._a03_thumbnail_subway_mob__vertScrollBg.getBoundingClientRect();
			var diffY = me._a03_thumbnail_subway_mob.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._a03_thumbnail_subway_mob.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._a03_thumbnail_subway_mob.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._a03_thumbnail_subway_mob.ggScrollByYSmooth(30 * me._a03_thumbnail_subway_mob.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._a03_thumbnail_subway_mob__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="A03_thumbnail_subway_MOB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 16%;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a03_thumbnail_subway_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._a03_thumbnail_subway_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 900))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._a03_thumbnail_subway_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._a03_thumbnail_subway_mob.style.transition='opacity 0s';
				if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateVisible == 0) {
					me._a03_thumbnail_subway_mob.style.visibility=(Number(me._a03_thumbnail_subway_mob.style.opacity)>0||!me._a03_thumbnail_subway_mob.style.opacity)?'inherit':'hidden';
					me._a03_thumbnail_subway_mob.ggVisible=true;
				}
				else if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateVisible == 1) {
					me._a03_thumbnail_subway_mob.style.visibility="hidden";
					me._a03_thumbnail_subway_mob.ggVisible=false;
				}
				else {
					me._a03_thumbnail_subway_mob.style.visibility="hidden";
					me._a03_thumbnail_subway_mob.ggVisible=false;
				}
			}
		}
		me._a03_thumbnail_subway_mob.logicBlock_visible();
		me._a03_thumbnail_subway_mob.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("2")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("0"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("3"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("4")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a03_thumbnail_subway_mob.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a03_thumbnail_subway_mob.style.transition='opacity 0s';
				if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateAlpha == 0) {
					me._a03_thumbnail_subway_mob.style.visibility=me._a03_thumbnail_subway_mob.ggVisible?'inherit':'hidden';
					me._a03_thumbnail_subway_mob.style.opacity=1;
				}
				else if (me._a03_thumbnail_subway_mob.ggCurrentLogicStateAlpha == 1) {
					me._a03_thumbnail_subway_mob.style.visibility="hidden";
					me._a03_thumbnail_subway_mob.style.opacity=0;
				}
				else {
					me._a03_thumbnail_subway_mob.style.visibility="hidden";
					me._a03_thumbnail_subway_mob.style.opacity=0;
				}
			}
		}
		me._a03_thumbnail_subway_mob.logicBlock_alpha();
		me._a03_thumbnail_subway_mob.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._a03_thumbnail_subway_mob.ggScrollPosY / me._a03_thumbnail_subway_mob.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._a03_thumbnail_subway_mob__vertScrollBg.style.visibility = 'inherit';
				me._a03_thumbnail_subway_mob__vertScrollFg.style.visibility = 'inherit';
				me._a03_thumbnail_subway_mob.ggVertScrollVisible = true;
				if(me._a03_thumbnail_subway_mob.ggVertScrollVisible) {
					me._a03_thumbnail_subway_mob.ggAvailableWidth = me._a03_thumbnail_subway_mob.clientWidth - 15;
					if (me._a03_thumbnail_subway_mob.ggHorScrollVisible) {
						me._a03_thumbnail_subway_mob.ggAvailableHeight = me._a03_thumbnail_subway_mob.clientHeight - 15;
						me._a03_thumbnail_subway_mob.ggAvailableHeightWithScale = me._a03_thumbnail_subway_mob.getBoundingClientRect().height - me._a03_thumbnail_subway_mob__vertScrollBg.getBoundingClientRect().width;
						me._a03_thumbnail_subway_mob__cornerBg.style.visibility = 'inherit';
					} else {
						me._a03_thumbnail_subway_mob.ggAvailableHeight = me._a03_thumbnail_subway_mob.clientHeight;
						me._a03_thumbnail_subway_mob.ggAvailableHeightWithScale = me._a03_thumbnail_subway_mob.getBoundingClientRect().height;
						me._a03_thumbnail_subway_mob__cornerBg.style.visibility = 'hidden';
					}
					me._a03_thumbnail_subway_mob__vertScrollBg.style.height = me._a03_thumbnail_subway_mob.ggAvailableHeight + 'px';
					me._a03_thumbnail_subway_mob.ggVPercentVisible = contentHeight != 0 ? me._a03_thumbnail_subway_mob.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._a03_thumbnail_subway_mob.ggVPercentVisible > 1.0) me._a03_thumbnail_subway_mob.ggVPercentVisible = 1.0;
					me._a03_thumbnail_subway_mob.ggScrollHeight =  Math.round(me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight * me._a03_thumbnail_subway_mob.ggVPercentVisible);
					me._a03_thumbnail_subway_mob__vertScrollFg.style.height = me._a03_thumbnail_subway_mob.ggScrollHeight + 'px';
					me._a03_thumbnail_subway_mob.ggScrollPosY = me._a03_thumbnail_subway_mob.ggScrollPosYPercent * me._a03_thumbnail_subway_mob.ggAvailableHeight;
					me._a03_thumbnail_subway_mob.ggScrollPosY = Math.min(me._a03_thumbnail_subway_mob.ggScrollPosY, me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
					me._a03_thumbnail_subway_mob__vertScrollFg.style.top = me._a03_thumbnail_subway_mob.ggScrollPosY + 'px';
					if (me._a03_thumbnail_subway_mob.ggVPercentVisible < 1.0) {
						let percentScrolled = me._a03_thumbnail_subway_mob.ggScrollPosY / (me._a03_thumbnail_subway_mob__vertScrollBg.offsetHeight - me._a03_thumbnail_subway_mob__vertScrollFg.offsetHeight);
						me._a03_thumbnail_subway_mob__content.style.top = -(Math.round((me._a03_thumbnail_subway_mob.ggContentHeight * (1.0 - me._a03_thumbnail_subway_mob.ggVPercentVisible)) * percentScrolled)) + me._a03_thumbnail_subway_mob.ggContentTopOffset + 'px';
					}
				} else {
					me._a03_thumbnail_subway_mob.ggAvailableWidth = me._a03_thumbnail_subway_mob.clientWidth;
					me._a03_thumbnail_subway_mob.ggScrollPosY = 0;
					me._a03_thumbnail_subway_mob.ggScrollPosYPercent = 0.0;
					me._a03_thumbnail_subway_mob__content.style.top = this.ggContentTopOffset + 'px';
					me._a03_thumbnail_subway_mob__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._a03_thumbnail_subway_mob.ggHorScrollVisible || vertScrollWasVisible != me._a03_thumbnail_subway_mob.ggVertScrollVisible) {
					skin.updateSize(me._a03_thumbnail_subway_mob);
					me._a03_thumbnail_subway_mob.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner0.ggUpdating == true) return;
			me._thumbnail_cloner0.ggUpdating = true;
			var el=me._thumbnail_cloner0;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner0.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner0.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner0.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner0.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner0.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner0.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnail_cloner0.ggNodeCount = me._thumbnail_cloner0.ggNumFilterPassed;
			me._thumbnail_cloner0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner0.parentNode && me._thumbnail_cloner0.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "01_Subway";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner0.childNodes.length; i++) {
				var child=me._thumbnail_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner0.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner0.ggUpdate();
		}
		me._a03_thumbnail_subway_mob__content.appendChild(me._thumbnail_cloner0);
		me.divSkin.appendChild(me._a03_thumbnail_subway_mob);
		el=me._a04_thumbnail_groundlevel_mob=document.createElement('div');
		els=me._a04_thumbnail_groundlevel_mob__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._a04_thumbnail_groundlevel_mob.ggScrollByX = function(diffX) {
			if(!me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible || diffX == 0 || me._a04_thumbnail_groundlevel_mob.ggHPercentVisible >= 1.0) return;
			me._a04_thumbnail_groundlevel_mob.ggScrollPosX = (me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetLeft + diffX);
			me._a04_thumbnail_groundlevel_mob.ggScrollPosX = Math.max(me._a04_thumbnail_groundlevel_mob.ggScrollPosX, 0);
			me._a04_thumbnail_groundlevel_mob.ggScrollPosX = Math.min(me._a04_thumbnail_groundlevel_mob.ggScrollPosX, me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth - me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetWidth);
			me._a04_thumbnail_groundlevel_mob__horScrollFg.style.left = me._a04_thumbnail_groundlevel_mob.ggScrollPosX + 'px';
			let percentScrolled = me._a04_thumbnail_groundlevel_mob.ggScrollPosX / (me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth - me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetWidth);
			me._a04_thumbnail_groundlevel_mob__content.style.left = -(Math.round((me._a04_thumbnail_groundlevel_mob.ggContentWidth * (1.0 - me._a04_thumbnail_groundlevel_mob.ggHPercentVisible)) * percentScrolled)) + me._a04_thumbnail_groundlevel_mob.ggContentLeftOffset + 'px';
			me._a04_thumbnail_groundlevel_mob.ggScrollPosXPercent = (me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetLeft / me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth);
		}
		me._a04_thumbnail_groundlevel_mob.ggScrollByXSmooth = function(diffX) {
			if(!me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible || diffX == 0 || me._a04_thumbnail_groundlevel_mob.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._a04_thumbnail_groundlevel_mob.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._a04_thumbnail_groundlevel_mob.ggScrollPosX >= me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth - me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetWidth)) {
					me._a04_thumbnail_groundlevel_mob.ggScrollPosX = Math.min(me._a04_thumbnail_groundlevel_mob.ggScrollPosX, me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth - me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._a04_thumbnail_groundlevel_mob.ggScrollPosX <= 0)) {
					me._a04_thumbnail_groundlevel_mob.ggScrollPosX = Math.max(me._a04_thumbnail_groundlevel_mob.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._a04_thumbnail_groundlevel_mob__horScrollFg.style.left = me._a04_thumbnail_groundlevel_mob.ggScrollPosX + 'px';
			let percentScrolled = me._a04_thumbnail_groundlevel_mob.ggScrollPosX / (me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth - me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetWidth);
			me._a04_thumbnail_groundlevel_mob__content.style.left = -(Math.round((me._a04_thumbnail_groundlevel_mob.ggContentWidth * (1.0 - me._a04_thumbnail_groundlevel_mob.ggHPercentVisible)) * percentScrolled)) + me._a04_thumbnail_groundlevel_mob.ggContentLeftOffset + 'px';
			me._a04_thumbnail_groundlevel_mob.ggScrollPosXPercent = (me._a04_thumbnail_groundlevel_mob__horScrollFg.offsetLeft / me._a04_thumbnail_groundlevel_mob__horScrollBg.offsetWidth);
			}, 10);
		}
		me._a04_thumbnail_groundlevel_mob.ggScrollByY = function(diffY) {
			if(!me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible || diffY == 0 || me._a04_thumbnail_groundlevel_mob.ggVPercentVisible >= 1.0) return;
			me._a04_thumbnail_groundlevel_mob.ggScrollPosY = (me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetTop + diffY);
			me._a04_thumbnail_groundlevel_mob.ggScrollPosY = Math.max(me._a04_thumbnail_groundlevel_mob.ggScrollPosY, 0);
			me._a04_thumbnail_groundlevel_mob.ggScrollPosY = Math.min(me._a04_thumbnail_groundlevel_mob.ggScrollPosY, me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
			me._a04_thumbnail_groundlevel_mob__vertScrollFg.style.top = me._a04_thumbnail_groundlevel_mob.ggScrollPosY + 'px';
			let percentScrolled = me._a04_thumbnail_groundlevel_mob.ggScrollPosY / (me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
			me._a04_thumbnail_groundlevel_mob__content.style.top = -(Math.round((me._a04_thumbnail_groundlevel_mob.ggContentHeight * (1.0 - me._a04_thumbnail_groundlevel_mob.ggVPercentVisible)) * percentScrolled)) + me._a04_thumbnail_groundlevel_mob.ggContentTopOffset + 'px';
			me._a04_thumbnail_groundlevel_mob.ggScrollPosYPercent = (me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetTop / me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight);
		}
		me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth = function(diffY) {
			if(!me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible || diffY == 0 || me._a04_thumbnail_groundlevel_mob.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._a04_thumbnail_groundlevel_mob.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._a04_thumbnail_groundlevel_mob.ggScrollPosY >= me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight)) {
					me._a04_thumbnail_groundlevel_mob.ggScrollPosY = Math.min(me._a04_thumbnail_groundlevel_mob.ggScrollPosY, me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._a04_thumbnail_groundlevel_mob.ggScrollPosY <= 0)) {
					me._a04_thumbnail_groundlevel_mob.ggScrollPosY = Math.max(me._a04_thumbnail_groundlevel_mob.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._a04_thumbnail_groundlevel_mob__vertScrollFg.style.top = me._a04_thumbnail_groundlevel_mob.ggScrollPosY + 'px';
			let percentScrolled = me._a04_thumbnail_groundlevel_mob.ggScrollPosY / (me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
			me._a04_thumbnail_groundlevel_mob__content.style.top = -(Math.round((me._a04_thumbnail_groundlevel_mob.ggContentHeight * (1.0 - me._a04_thumbnail_groundlevel_mob.ggVPercentVisible)) * percentScrolled)) + me._a04_thumbnail_groundlevel_mob.ggContentTopOffset + 'px';
			me._a04_thumbnail_groundlevel_mob.ggScrollPosYPercent = (me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetTop / me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._a04_thumbnail_groundlevel_mob.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._a04_thumbnail_groundlevel_mob.ggHPercentVisible);
					me._a04_thumbnail_groundlevel_mob.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._a04_thumbnail_groundlevel_mob.clientWidth - (me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible ? 10 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._a04_thumbnail_groundlevel_mob.clientWidth - (me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible ? 10 : 0))) * me._a04_thumbnail_groundlevel_mob.ggHPercentVisible);
					me._a04_thumbnail_groundlevel_mob.ggScrollByXSmooth(diffX);
				}
			}
			if (me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._a04_thumbnail_groundlevel_mob.ggVPercentVisible);
					me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._a04_thumbnail_groundlevel_mob.clientHeight - (me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible ? 10 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._a04_thumbnail_groundlevel_mob.clientHeight - (me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible ? 10 : 0))) * me._a04_thumbnail_groundlevel_mob.ggVPercentVisible);
					me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._a04_thumbnail_groundlevel_mob__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._a04_thumbnail_groundlevel_mob.ggDragInertiaX *= 0.96;
				me._a04_thumbnail_groundlevel_mob.ggDragInertiaY *= 0.96;
				me._a04_thumbnail_groundlevel_mob.ggScrollByX(me._a04_thumbnail_groundlevel_mob.ggDragInertiaX);
				me._a04_thumbnail_groundlevel_mob.ggScrollByY(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY);
				if (Math.abs(me._a04_thumbnail_groundlevel_mob.ggDragInertiaX) < 1.0 && Math.abs(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._a04_thumbnail_groundlevel_mob__content.onmouseup = null;
			me._a04_thumbnail_groundlevel_mob__content.onmousemove = null;
			me._a04_thumbnail_groundlevel_mob__content.ontouchend = null;
			me._a04_thumbnail_groundlevel_mob__content.ontouchmove = null;
			me._a04_thumbnail_groundlevel_mob__content.onpointerup = null;
			me._a04_thumbnail_groundlevel_mob__content.onpointermove = null;
			setTimeout(function() { me._a04_thumbnail_groundlevel_mob.ggIsDragging = false; }, 100);
		}
		me._a04_thumbnail_groundlevel_mob__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._a04_thumbnail_groundlevel_mob.ggDragStartX) > 10 || Math.abs(eventY - me._a04_thumbnail_groundlevel_mob.ggDragStartY) > 10) me._a04_thumbnail_groundlevel_mob.ggIsDragging = true;
			var diffX = (eventX - me._a04_thumbnail_groundlevel_mob.ggDragLastX) * me._a04_thumbnail_groundlevel_mob.ggHPercentVisible;
			var diffY = (eventY - me._a04_thumbnail_groundlevel_mob.ggDragLastY) * me._a04_thumbnail_groundlevel_mob.ggVPercentVisible;
			me._a04_thumbnail_groundlevel_mob.ggDragInertiaX = -diffX;
			me._a04_thumbnail_groundlevel_mob.ggDragInertiaY = -diffY;
			me._a04_thumbnail_groundlevel_mob.ggDragLastX = eventX;
			me._a04_thumbnail_groundlevel_mob.ggDragLastY = eventY;
			me._a04_thumbnail_groundlevel_mob.ggScrollByX(-diffX);
			me._a04_thumbnail_groundlevel_mob.ggScrollByY(-diffY);
		}
		me._a04_thumbnail_groundlevel_mob__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._a04_thumbnail_groundlevel_mob.ggDragLastX = me._a04_thumbnail_groundlevel_mob.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._a04_thumbnail_groundlevel_mob.ggDragLastY = me._a04_thumbnail_groundlevel_mob.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._a04_thumbnail_groundlevel_mob__content.onmouseup = me._a04_thumbnail_groundlevel_mob__content.mousetouchend;
			me._a04_thumbnail_groundlevel_mob__content.ontouchend = me._a04_thumbnail_groundlevel_mob__content.mousetouchend;
			me._a04_thumbnail_groundlevel_mob__content.onmousemove = me._a04_thumbnail_groundlevel_mob__content.mousetouchmove;
			me._a04_thumbnail_groundlevel_mob__content.ontouchmove = me._a04_thumbnail_groundlevel_mob__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._a04_thumbnail_groundlevel_mob__content.onpointerup = me._a04_thumbnail_groundlevel_mob__content.ontouchend;
				me._a04_thumbnail_groundlevel_mob__content.onpointermove = me._a04_thumbnail_groundlevel_mob__content.ontouchmove;
			}
		}
		els.onmousedown = me._a04_thumbnail_groundlevel_mob__content.mousetouchstart;
		els.ontouchstart = me._a04_thumbnail_groundlevel_mob__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._a04_thumbnail_groundlevel_mob__content.mousetouchstart;
		}
		elVertScrollBg = me._a04_thumbnail_groundlevel_mob__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 10px; height: 805px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._a04_thumbnail_groundlevel_mob__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 10px; height: 805px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._a04_thumbnail_groundlevel_mob.ggScrollPosY = 0;
		me._a04_thumbnail_groundlevel_mob.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._a04_thumbnail_groundlevel_mob.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._a04_thumbnail_groundlevel_mob.ggDragInertiaY *= 0.96;
					me._a04_thumbnail_groundlevel_mob.ggScrollByY(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY);
					if (Math.abs(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._a04_thumbnail_groundlevel_mob.ggDragLastY;
				me._a04_thumbnail_groundlevel_mob.ggDragInertiaY = diffY;
				me._a04_thumbnail_groundlevel_mob.ggDragLastY = e.clientY;
				me._a04_thumbnail_groundlevel_mob.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._a04_thumbnail_groundlevel_mob.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._a04_thumbnail_groundlevel_mob.ggDragInertiaY *= 0.96;
					me._a04_thumbnail_groundlevel_mob.ggScrollByY(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY);
					if (Math.abs(me._a04_thumbnail_groundlevel_mob.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._a04_thumbnail_groundlevel_mob.ggDragLastY;
				me._a04_thumbnail_groundlevel_mob.ggDragInertiaY = diffY;
				me._a04_thumbnail_groundlevel_mob.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._a04_thumbnail_groundlevel_mob.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._a04_thumbnail_groundlevel_mob.ggScrollHeight;
			if (e.offsetY < me._a04_thumbnail_groundlevel_mob.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._a04_thumbnail_groundlevel_mob__vertScrollBg.getBoundingClientRect();
			var diffY = me._a04_thumbnail_groundlevel_mob.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._a04_thumbnail_groundlevel_mob.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._a04_thumbnail_groundlevel_mob.ggScrollByYSmooth(30 * me._a04_thumbnail_groundlevel_mob.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._a04_thumbnail_groundlevel_mob__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 10px; height: 10px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="A04_thumbnail_groundLevel_MOB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 16%;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a04_thumbnail_groundlevel_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._a04_thumbnail_groundlevel_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 900))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._a04_thumbnail_groundlevel_mob.style.transition='opacity 0s';
				if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateVisible == 0) {
					me._a04_thumbnail_groundlevel_mob.style.visibility=(Number(me._a04_thumbnail_groundlevel_mob.style.opacity)>0||!me._a04_thumbnail_groundlevel_mob.style.opacity)?'inherit':'hidden';
					me._a04_thumbnail_groundlevel_mob.ggVisible=true;
				}
				else if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateVisible == 1) {
					me._a04_thumbnail_groundlevel_mob.style.visibility="hidden";
					me._a04_thumbnail_groundlevel_mob.ggVisible=false;
				}
				else {
					me._a04_thumbnail_groundlevel_mob.style.visibility="hidden";
					me._a04_thumbnail_groundlevel_mob.ggVisible=false;
				}
			}
		}
		me._a04_thumbnail_groundlevel_mob.logicBlock_visible();
		me._a04_thumbnail_groundlevel_mob.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('03_ToggleWalk') == Number("0"))) || 
				((player.getVariableValue('03_ToggleWalk') == Number("2")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a04_thumbnail_groundlevel_mob.style.transition='opacity 0s';
				if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateAlpha == 0) {
					me._a04_thumbnail_groundlevel_mob.style.visibility=me._a04_thumbnail_groundlevel_mob.ggVisible?'inherit':'hidden';
					me._a04_thumbnail_groundlevel_mob.style.opacity=1;
				}
				else if (me._a04_thumbnail_groundlevel_mob.ggCurrentLogicStateAlpha == 1) {
					me._a04_thumbnail_groundlevel_mob.style.visibility="hidden";
					me._a04_thumbnail_groundlevel_mob.style.opacity=0;
				}
				else {
					me._a04_thumbnail_groundlevel_mob.style.visibility="hidden";
					me._a04_thumbnail_groundlevel_mob.style.opacity=0;
				}
			}
		}
		me._a04_thumbnail_groundlevel_mob.logicBlock_alpha();
		me._a04_thumbnail_groundlevel_mob.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 10;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (10/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._a04_thumbnail_groundlevel_mob.ggScrollPosY / me._a04_thumbnail_groundlevel_mob.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._a04_thumbnail_groundlevel_mob__vertScrollBg.style.visibility = 'inherit';
				me._a04_thumbnail_groundlevel_mob__vertScrollFg.style.visibility = 'inherit';
				me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible = true;
				if(me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible) {
					me._a04_thumbnail_groundlevel_mob.ggAvailableWidth = me._a04_thumbnail_groundlevel_mob.clientWidth - 10;
					if (me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible) {
						me._a04_thumbnail_groundlevel_mob.ggAvailableHeight = me._a04_thumbnail_groundlevel_mob.clientHeight - 10;
						me._a04_thumbnail_groundlevel_mob.ggAvailableHeightWithScale = me._a04_thumbnail_groundlevel_mob.getBoundingClientRect().height - me._a04_thumbnail_groundlevel_mob__vertScrollBg.getBoundingClientRect().width;
						me._a04_thumbnail_groundlevel_mob__cornerBg.style.visibility = 'inherit';
					} else {
						me._a04_thumbnail_groundlevel_mob.ggAvailableHeight = me._a04_thumbnail_groundlevel_mob.clientHeight;
						me._a04_thumbnail_groundlevel_mob.ggAvailableHeightWithScale = me._a04_thumbnail_groundlevel_mob.getBoundingClientRect().height;
						me._a04_thumbnail_groundlevel_mob__cornerBg.style.visibility = 'hidden';
					}
					me._a04_thumbnail_groundlevel_mob__vertScrollBg.style.height = me._a04_thumbnail_groundlevel_mob.ggAvailableHeight + 'px';
					me._a04_thumbnail_groundlevel_mob.ggVPercentVisible = contentHeight != 0 ? me._a04_thumbnail_groundlevel_mob.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._a04_thumbnail_groundlevel_mob.ggVPercentVisible > 1.0) me._a04_thumbnail_groundlevel_mob.ggVPercentVisible = 1.0;
					me._a04_thumbnail_groundlevel_mob.ggScrollHeight =  Math.round(me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight * me._a04_thumbnail_groundlevel_mob.ggVPercentVisible);
					me._a04_thumbnail_groundlevel_mob__vertScrollFg.style.height = me._a04_thumbnail_groundlevel_mob.ggScrollHeight + 'px';
					me._a04_thumbnail_groundlevel_mob.ggScrollPosY = me._a04_thumbnail_groundlevel_mob.ggScrollPosYPercent * me._a04_thumbnail_groundlevel_mob.ggAvailableHeight;
					me._a04_thumbnail_groundlevel_mob.ggScrollPosY = Math.min(me._a04_thumbnail_groundlevel_mob.ggScrollPosY, me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
					me._a04_thumbnail_groundlevel_mob__vertScrollFg.style.top = me._a04_thumbnail_groundlevel_mob.ggScrollPosY + 'px';
					if (me._a04_thumbnail_groundlevel_mob.ggVPercentVisible < 1.0) {
						let percentScrolled = me._a04_thumbnail_groundlevel_mob.ggScrollPosY / (me._a04_thumbnail_groundlevel_mob__vertScrollBg.offsetHeight - me._a04_thumbnail_groundlevel_mob__vertScrollFg.offsetHeight);
						me._a04_thumbnail_groundlevel_mob__content.style.top = -(Math.round((me._a04_thumbnail_groundlevel_mob.ggContentHeight * (1.0 - me._a04_thumbnail_groundlevel_mob.ggVPercentVisible)) * percentScrolled)) + me._a04_thumbnail_groundlevel_mob.ggContentTopOffset + 'px';
					}
				} else {
					me._a04_thumbnail_groundlevel_mob.ggAvailableWidth = me._a04_thumbnail_groundlevel_mob.clientWidth;
					me._a04_thumbnail_groundlevel_mob.ggScrollPosY = 0;
					me._a04_thumbnail_groundlevel_mob.ggScrollPosYPercent = 0.0;
					me._a04_thumbnail_groundlevel_mob__content.style.top = this.ggContentTopOffset + 'px';
					me._a04_thumbnail_groundlevel_mob__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._a04_thumbnail_groundlevel_mob.ggHorScrollVisible || vertScrollWasVisible != me._a04_thumbnail_groundlevel_mob.ggVertScrollVisible) {
					skin.updateSize(me._a04_thumbnail_groundlevel_mob);
					me._a04_thumbnail_groundlevel_mob.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnail_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "02GroundLevel";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._a04_thumbnail_groundlevel_mob__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._a04_thumbnail_groundlevel_mob);
		el=me._a07_timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="A07_Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a07_timer_1.ggIsActive=function() {
			return (me._a07_timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._a07_timer_1.ggTimestamp) / me._a07_timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._a07_timer_1.ggActivate=function () {
			player.setVariableValue('11_ht_ani', true);
		}
		me._a07_timer_1.ggDeactivate=function () {
			player.setVariableValue('11_ht_ani', false);
		}
		me._a07_timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._a07_timer_1);
		el=me.__01_bottom_btn=document.createElement('div');
		el.ggId="01_bottom_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__01_bottom_btn.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__01_bottom_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__01_bottom_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__01_bottom_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__01_bottom_btn.style.transition='';
				if (me.__01_bottom_btn.ggCurrentLogicStateVisible == 0) {
					me.__01_bottom_btn.style.visibility=(Number(me.__01_bottom_btn.style.opacity)>0||!me.__01_bottom_btn.style.opacity)?'inherit':'hidden';
					me.__01_bottom_btn.ggVisible=true;
				}
				else if (me.__01_bottom_btn.ggCurrentLogicStateVisible == 1) {
					me.__01_bottom_btn.style.visibility="hidden";
					me.__01_bottom_btn.ggVisible=false;
				}
				else {
					me.__01_bottom_btn.style.visibility=(Number(me.__01_bottom_btn.style.opacity)>0||!me.__01_bottom_btn.style.opacity)?'inherit':'hidden';
					me.__01_bottom_btn.ggVisible=true;
				}
			}
		}
		me.__01_bottom_btn.logicBlock_visible();
		me.__01_bottom_btn.ggUpdatePosition=function (useTransition) {
		}
		el=me.__011_background=document.createElement('div');
		el.ggId="01.1_background";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		hs+='background: black; border-top-left-radius: 5px; border-top-right-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__011_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__011_background.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__011_background.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__011_background.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__011_background.style.transition='';
				if (me.__011_background.ggCurrentLogicStateVisible == 0) {
					me.__011_background.style.visibility=(Number(me.__011_background.style.opacity)>0||!me.__011_background.style.opacity)?'inherit':'hidden';
					me.__011_background.ggVisible=true;
				}
				else if (me.__011_background.ggCurrentLogicStateVisible == 1) {
					me.__011_background.style.visibility="hidden";
					me.__011_background.ggVisible=false;
				}
				else {
					me.__011_background.style.visibility=(Number(me.__011_background.style.opacity)>0||!me.__011_background.style.opacity)?'inherit':'hidden';
					me.__011_background.ggVisible=true;
				}
			}
		}
		me.__011_background.logicBlock_visible();
		me.__011_background.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__011_background);
		el=me.__012_thumbnail_btn=document.createElement('div');
		els=me.__012_thumbnail_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iR2FsbGVyeSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSI+CiA8ZyBpZD0iR2FsbGVyeS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBkYXRhLW5hbWU9IkdhbGxlcnkiPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTU5OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTU5OCIgd2lkdGg9IjkiIHJ4PSIyIiBoZWlnaHQ9IjkiIGZpbGw9IiNmZmYiLz4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE1OTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKD'+
			'EyIDApIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNTk5IiB3aWR0aD0iOSIgcng9IjIiIGhlaWdodD0iOSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTYwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgMTIpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNjAwIiB3aWR0aD0iOSIgcng9IjIiIGhlaWdodD0iOSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTYwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMikiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE2MDEiIHdpZHRoPSI5IiByeD0iMiIgaGVpZ2h0PSI5IiBmaWxsPSIjZmZmIi8+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me.__012_thumbnail_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__012_thumbnail_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iR2FsbGVyeV9Ib3ZlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjEgMjEiIGRhdGEtbmFtZT0iR2FsbGVyeSBIb3ZlciIgd2lkdGg9IjIxIiBoZWlnaHQ9IjIxIj4KIDxnIGlkPSJHYWxsZXJ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE1OTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE1OTgiIHdpZHRoPSI5IiByeD0iMiIgaGVpZ2h0PSI5IiBmaWxsPSIjMjY5OWZiIi8+CiAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNTk5IiB0cmFuc2Zvcm'+
			'09InRyYW5zbGF0ZSgxMiAwKSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTU5OSIgd2lkdGg9IjkiIHJ4PSIyIiBoZWlnaHQ9IjkiIGZpbGw9IiMyNjk5ZmIiLz4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE2MDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIDEyKSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTYwMCIgd2lkdGg9IjkiIHJ4PSIyIiBoZWlnaHQ9IjkiIGZpbGw9IiMyNjk5ZmIiLz4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE2MDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTIpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNjAxIiB3aWR0aD0iOSIgcng9IjIiIGhlaWdodD0iOSIgZmlsbD0i'+
			'IzI2OTlmYiIvPgogPC9nPgo8L3N2Zz4K';
		me.__012_thumbnail_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="01.2_thumbnail_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__012_thumbnail_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__012_thumbnail_btn.onclick=function (e) {
			me.__012_thumbnail_btn.style.transition='none';
			me.__012_thumbnail_btn.style.visibility='hidden';
			me.__012_thumbnail_btn.ggVisible=false;
			if (
				(
					((player.getVariableValue('01_Drone') == Number("1")))
				)
			) {
				player.setVariableValue('01_Drone', Number("2"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("2")))
				)
			) {
				player.setVariableValue('02_Walk', Number("3"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("1")))
				)
			) {
				player.setVariableValue('02_Walk', Number("0"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("0")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("3")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("2"));
			}
			if (
				(
					((player.getVariableValue('03_ToggleWalk') == Number("2")))
				)
			) {
				player.setVariableValue('03_ToggleWalk', Number("1"));
			}
			player.setVariableValue('05_MapVis', Number("0"));
			player.setVariableValue('07_Bottom_menu_background', Number("0"));
			me.__021_thumbnail_close.style.transition='none';
			me.__021_thumbnail_close.style.opacity='1';
			me.__021_thumbnail_close.style.visibility=me.__021_thumbnail_close.ggVisible?'inherit':'hidden';
			player.setVariableValue('06_TourMap', Number("0"));
			player.setVariableValue('12_PA_Logo', Number("1"));
		}
		me.__012_thumbnail_btn.onmouseenter=function (e) {
			me.__012_thumbnail_btn__img.style.visibility='hidden';
			me.__012_thumbnail_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['_012_thumbnail_btn']=true;
		}
		me.__012_thumbnail_btn.onmouseleave=function (e) {
			me.__012_thumbnail_btn__img.style.visibility='inherit';
			me.__012_thumbnail_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['_012_thumbnail_btn']=false;
		}
		me.__012_thumbnail_btn.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__012_thumbnail_btn);
		el=me.__013_subway=document.createElement('div');
		els=me.__013_subway__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDExMCAxMzUiIGhlaWdodD0iMTAwJSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9Im'+
			'ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgd2lkdGg9IjEwMCUiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDUsMTApIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik02NS42MjUsNC42ODhMMzQuMzc1LDQuNjg4QzE4LDQuNjg4IDQuNjg3LDE3Ljk5OSA0LjY4NywzNC4zNzZMNC42ODcsOTMuNzUxQzQuNjg3LDk0LjYxIDUuMzksOTUuMzEzIDYuMjUsOTUuMzEzTDkzLjc0OSw5NS4zMTNDOTQuNjA5LDk1LjMxMyA5NS4z'+
			'MTIsOTQuNjEgOTUuMzEyLDkzLjc1MUw5NS4zMTIsMzQuMzc2Qzk1LjMxMiwxOC4wMDEgODIsNC42ODggNjUuNjI0LDQuNjg4TDY1LjYyNSw0LjY4OFpNNTEuNTYzLDcuODEyTDY1LjYyNSw3LjgxMkM3Mi4zOTEsNy44MTIgNzguNTQ3LDEwLjM3NSA4My4yMzQsMTQuNTQ3TDc4LjgyOCwxOC45NjlDNzUuMjY1LDE1LjkyMiA3MC42NTYsMTQuMDYzIDY1LjYyNSwxNC4wNjNMNTEuNTYzLDE0LjA2M0w1MS41NjMsNy44MTJaTTYwLjkzOCw0Mi4xODhMNjAuOTM4LDYwLjkzOEwzOS4wNjMsNjAuOTM4TDM5LjA2Myw0Mi4xODhDMzkuMDYzLDM5LjYwOSA0MS4xNzIsMzcuNSA0My43NTEsMzcuNUw1Ni4yNT'+
			'EsMzcuNUM1OC44MjksMzcuNSA2MC45MzgsMzkuNjA5IDYwLjkzOCw0Mi4xODhaTTM0LjM3Niw3LjgxMkw0OC40MzgsNy44MTJMNDguNDM4LDE0LjA2MkwzNC4zNzYsMTQuMDYyQzI5LjM0NSwxNC4wNjIgMjQuNzM1LDE1LjkyMiAyMS4xNzMsMTguOTY5TDE2Ljc2NywxNC41NDdDMjEuNDU0LDEwLjM3NSAyNy42MTEsNy44MTIgMzQuMzc2LDcuODEyTDM0LjM3Niw3LjgxMlpNMTQuMDY0LDkyLjE4OEw3LjgxNCw5Mi4xODhMNy44MTQsNzAuMzEyTDE0LjA2NCw3MC4zMTJMMTQuMDY0LDkyLjE4OFpNMTQuMDY0LDY3LjE4OEw3LjgxNCw2Ny4xODhMNy44MTQsNDUuMzEyTDE0LjA2NCw0NS4zMTJMMTQu'+
			'MDY0LDY3LjE4OFpNMTQuMDY0LDQyLjE4OEw3LjgxNCw0Mi4xODhMNy44MTQsMzQuMzc1QzcuODE0LDI3LjYwOSAxMC4zNzcsMjEuNDUzIDE0LjU0OCwxNi43NjZMMTguOTcsMjEuMTcyQzE1LjkyMywyNC43MzUgMTQuMDY0LDI5LjM0NCAxNC4wNjQsMzQuMzc1TDE0LjA2NCw0Mi4xODhaTTE4LjYyNyw5Mi4xODhMMzguMzE1LDY0LjA2Mkw2MS42OSw2NC4wNjJMODEuMzc3LDkyLjE4OEwxOC42MjcsOTIuMTg4Wk05Mi4xODksOTIuMTg4TDg1LjkzOSw5Mi4xODhMODUuOTM5LDcwLjMxMkw5Mi4xODksNzAuMzEyTDkyLjE4OSw5Mi4xODhaTTkyLjE4OSw2Ny4xODhMODUuOTM5LDY3LjE4OEw4NS45Mz'+
			'ksNDUuMzEyTDkyLjE4OSw0NS4zMTJMOTIuMTg5LDY3LjE4OFpNOTIuMTg5LDQyLjE4OEw4NS45MzksNDIuMTg4TDg1LjkzOSwzNC4zNzVDODUuOTM5LDI5LjM0NCA4NC4wNzksMjQuNzM0IDgxLjAzMiwyMS4xNzJMODUuNDU0LDE2Ljc2NkM4OS42MjYsMjEuNDUzIDkyLjE4OSwyNy42MSA5Mi4xODksMzQuMzc1TDkyLjE4OSw0Mi4xODhaIi8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDUsMTApIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik01MCw3My40MzhDNDkuMTQxLDczLjQzOCA0OC40MzgsNzQuMTQxIDQ4LjQzOCw3NS4w'+
			'MDFMNDguNDM4LDc2LjU2M0M0OC40MzgsNzcuNDIyIDQ5LjE0MSw3OC4xMjYgNTAsNzguMTI2QzUwLjg1OSw3OC4xMjYgNTEuNTYyLDc3LjQyMiA1MS41NjIsNzYuNTYzTDUxLjU2Miw3NS4wMDFDNTEuNTYyLDc0LjE0MSA1MC44NTksNzMuNDM4IDUwLDczLjQzOFoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNSwxMCkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvOyIgZD0iTTUwLDgxLjI1QzQ5LjE0MSw4MS4yNSA0OC40MzgsODEuOTUzIDQ4LjQzOCw4Mi44MTJMNDguNDM4LDg3LjVDNDguNDM4LDg4LjM1OSA0OS4xNDEsODkuMDYyID'+
			'UwLDg5LjA2MkM1MC44NTksODkuMDYyIDUxLjU2Miw4OC4zNTkgNTEuNTYyLDg3LjVMNTEuNTYyLDgyLjgxMkM1MS41NjIsODEuOTUzIDUwLjg1OSw4MS4yNSA1MCw4MS4yNVoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNSwxMCkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvOyIgZD0iTTUxLjU2Miw2OC43NUM1MS41NjIsNzAuODMyIDQ4LjQzNyw3MC44MzIgNDguNDM3LDY4Ljc1QzQ4LjQzNyw2Ni42NjggNTEuNTYyLDY2LjY2OCA1MS41NjIsNjguNzUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__013_subway__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__013_subway__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDExMCAxMzUiIGhlaWdodD0iMTAwJSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9Im'+
			'ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgd2lkdGg9IjEwMCUiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDUsMTApIj4KICA8cGF0aCBzdHlsZT0iZmlsbDpyZ2IoMzgsMTUzLDI1MSk7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNNjUuNjI1LDQuNjg4TDM0LjM3NSw0LjY4OEMxOCw0LjY4OCA0LjY4NywxNy45OTkgNC42ODcsMzQuMzc2TDQuNjg3LDkzLjc1MUM0LjY4Nyw5NC42MSA1LjM5LDk1LjMxMyA2LjI1LDk1LjMxM0w5My43NDksOTUuMzEzQzk0LjYwOSw5'+
			'NS4zMTMgOTUuMzEyLDk0LjYxIDk1LjMxMiw5My43NTFMOTUuMzEyLDM0LjM3NkM5NS4zMTIsMTguMDAxIDgyLDQuNjg4IDY1LjYyNCw0LjY4OEw2NS42MjUsNC42ODhaTTUxLjU2Myw3LjgxMkw2NS42MjUsNy44MTJDNzIuMzkxLDcuODEyIDc4LjU0NywxMC4zNzUgODMuMjM0LDE0LjU0N0w3OC44MjgsMTguOTY5Qzc1LjI2NSwxNS45MjIgNzAuNjU2LDE0LjA2MyA2NS42MjUsMTQuMDYzTDUxLjU2MywxNC4wNjNMNTEuNTYzLDcuODEyWk02MC45MzgsNDIuMTg4TDYwLjkzOCw2MC45MzhMMzkuMDYzLDYwLjkzOEwzOS4wNjMsNDIuMTg4QzM5LjA2MywzOS42MDkgNDEuMTcyLDM3LjUgNDMuNzUxLD'+
			'M3LjVMNTYuMjUxLDM3LjVDNTguODI5LDM3LjUgNjAuOTM4LDM5LjYwOSA2MC45MzgsNDIuMTg4Wk0zNC4zNzYsNy44MTJMNDguNDM4LDcuODEyTDQ4LjQzOCwxNC4wNjJMMzQuMzc2LDE0LjA2MkMyOS4zNDUsMTQuMDYyIDI0LjczNSwxNS45MjIgMjEuMTczLDE4Ljk2OUwxNi43NjcsMTQuNTQ3QzIxLjQ1NCwxMC4zNzUgMjcuNjExLDcuODEyIDM0LjM3Niw3LjgxMkwzNC4zNzYsNy44MTJaTTE0LjA2NCw5Mi4xODhMNy44MTQsOTIuMTg4TDcuODE0LDcwLjMxMkwxNC4wNjQsNzAuMzEyTDE0LjA2NCw5Mi4xODhaTTE0LjA2NCw2Ny4xODhMNy44MTQsNjcuMTg4TDcuODE0LDQ1LjMxMkwxNC4wNjQs'+
			'NDUuMzEyTDE0LjA2NCw2Ny4xODhaTTE0LjA2NCw0Mi4xODhMNy44MTQsNDIuMTg4TDcuODE0LDM0LjM3NUM3LjgxNCwyNy42MDkgMTAuMzc3LDIxLjQ1MyAxNC41NDgsMTYuNzY2TDE4Ljk3LDIxLjE3MkMxNS45MjMsMjQuNzM1IDE0LjA2NCwyOS4zNDQgMTQuMDY0LDM0LjM3NUwxNC4wNjQsNDIuMTg4Wk0xOC42MjcsOTIuMTg4TDM4LjMxNSw2NC4wNjJMNjEuNjksNjQuMDYyTDgxLjM3Nyw5Mi4xODhMMTguNjI3LDkyLjE4OFpNOTIuMTg5LDkyLjE4OEw4NS45MzksOTIuMTg4TDg1LjkzOSw3MC4zMTJMOTIuMTg5LDcwLjMxMkw5Mi4xODksOTIuMTg4Wk05Mi4xODksNjcuMTg4TDg1LjkzOSw2Ny'+
			'4xODhMODUuOTM5LDQ1LjMxMkw5Mi4xODksNDUuMzEyTDkyLjE4OSw2Ny4xODhaTTkyLjE4OSw0Mi4xODhMODUuOTM5LDQyLjE4OEw4NS45MzksMzQuMzc1Qzg1LjkzOSwyOS4zNDQgODQuMDc5LDI0LjczNCA4MS4wMzIsMjEuMTcyTDg1LjQ1NCwxNi43NjZDODkuNjI2LDIxLjQ1MyA5Mi4xODksMjcuNjEgOTIuMTg5LDM0LjM3NUw5Mi4xODksNDIuMTg4WiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw1LDEwKSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6cmdiKDM4LDE1MywyNTEpO2ZpbGwtcnVsZTpub256ZXJvOyIgZD0iTTUwLDczLjQzOEM0OS4xNDEsNzMuNDM4IDQ4LjQz'+
			'OCw3NC4xNDEgNDguNDM4LDc1LjAwMUw0OC40MzgsNzYuNTYzQzQ4LjQzOCw3Ny40MjIgNDkuMTQxLDc4LjEyNiA1MCw3OC4xMjZDNTAuODU5LDc4LjEyNiA1MS41NjIsNzcuNDIyIDUxLjU2Miw3Ni41NjNMNTEuNTYyLDc1LjAwMUM1MS41NjIsNzQuMTQxIDUwLjg1OSw3My40MzggNTAsNzMuNDM4WiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSw1LDEwKSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6cmdiKDM4LDE1MywyNTEpO2ZpbGwtcnVsZTpub256ZXJvOyIgZD0iTTUwLDgxLjI1QzQ5LjE0MSw4MS4yNSA0OC40MzgsODEuOTUzIDQ4LjQzOCw4Mi44MTJMNDguNDM4LDg3Lj'+
			'VDNDguNDM4LDg4LjM1OSA0OS4xNDEsODkuMDYyIDUwLDg5LjA2MkM1MC44NTksODkuMDYyIDUxLjU2Miw4OC4zNTkgNTEuNTYyLDg3LjVMNTEuNTYyLDgyLjgxMkM1MS41NjIsODEuOTUzIDUwLjg1OSw4MS4yNSA1MCw4MS4yNVoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNSwxMCkiPgogIDxwYXRoIHN0eWxlPSJmaWxsOnJnYigzOCwxNTMsMjUxKTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik01MS41NjIsNjguNzVDNTEuNTYyLDcwLjgzMiA0OC40MzcsNzAuODMyIDQ4LjQzNyw2OC43NUM0OC40MzcsNjYuNjY4IDUxLjU2Miw2Ni42NjggNTEuNTYyLDY4Ljc1Ii8+CiA8'+
			'L2c+Cjwvc3ZnPgo=';
		me.__013_subway__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="01.3_subway";
		el.ggDx=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) - 32px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__013_subway.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__013_subway.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("2"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("4"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getVariableValue('01_Drone') == Number("1")))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getVariableValue('01_Drone') == Number("0"))) || 
				((player.getVariableValue('01_Drone') == Number("2")))
			)
			{
				newLogicStateVisible = 4;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__013_subway.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__013_subway.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__013_subway.style.transition='';
				if (me.__013_subway.ggCurrentLogicStateVisible == 0) {
					me.__013_subway.style.visibility="hidden";
					me.__013_subway.ggVisible=false;
				}
				else if (me.__013_subway.ggCurrentLogicStateVisible == 1) {
					me.__013_subway.style.visibility="hidden";
					me.__013_subway.ggVisible=false;
				}
				else if (me.__013_subway.ggCurrentLogicStateVisible == 2) {
					me.__013_subway.style.visibility="hidden";
					me.__013_subway.ggVisible=false;
				}
				else if (me.__013_subway.ggCurrentLogicStateVisible == 3) {
					me.__013_subway.style.visibility=(Number(me.__013_subway.style.opacity)>0||!me.__013_subway.style.opacity)?'inherit':'hidden';
					me.__013_subway.ggVisible=true;
				}
				else if (me.__013_subway.ggCurrentLogicStateVisible == 4) {
					me.__013_subway.style.visibility="hidden";
					me.__013_subway.ggVisible=false;
				}
				else {
					me.__013_subway.style.visibility=(Number(me.__013_subway.style.opacity)>0||!me.__013_subway.style.opacity)?'inherit':'hidden';
					me.__013_subway.ggVisible=true;
				}
			}
		}
		me.__013_subway.logicBlock_visible();
		me.__013_subway.onclick=function (e) {
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("2"));
			player.openNext("{node1}","");
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me.__013_subway.onmouseenter=function (e) {
			me.__013_subway__img.style.visibility='hidden';
			me.__013_subway__imgo.style.visibility='inherit';
			me.elementMouseOver['_013_subway']=true;
		}
		me.__013_subway.onmouseleave=function (e) {
			me.__013_subway__img.style.visibility='inherit';
			me.__013_subway__imgo.style.visibility='hidden';
			me.elementMouseOver['_013_subway']=false;
		}
		me.__013_subway.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__013_subway);
		el=me.__014_groundlevel=document.createElement('div');
		els=me.__014_groundlevel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtQnVpbGRpbmciPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkJ1aWxkaW5nIiBjbGlwLXBhdGg9InVybCgjY2xpcC1CdWlsZGluZykiPgogIDxnIGlkPSJCdWlsZGluZy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguOTcxIC0xMS43NTkpIiBkYX'+
			'RhLW5hbWU9IkJ1aWxkaW5nIj4KICAgPHBhdGggaWQ9IlBhdGhfNTU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzYuODg4IC0wLjI0MSkiIGRhdGEtbmFtZT0iUGF0aCA1NTciIGQ9Ik0xNjYuNDI2LDM0Ljg2NGgtLjZWMjMuMzQzYS42NDguNjQ4LDAsMCwwLS42NDktLjY0OWgtMS41M1YxNC42NDlhLjY0OC42NDgsMCwwLDAtLjY0OS0uNjQ5aC00LjY4M2EuNjQ4LjY0OCwwLDAsMC0uNjQ5LjY0OVYzNC44NDFoLS43ODhWMTcuMDZhLjU1LjU1LDAsMCwwLS43LS41MzNsLTQuODkxLDEuNDE0YS41NDkuNTQ5LDAsMCwwLS4zOTQuNTMzdjE2LjM5aC0uNmEuMjA4LjIwOCwwLDAsMC0uMjA5LjIwOXYu'+
			'NzE5YS4yMDguMjA4LDAsMCwwLC4yMDkuMjA5aDE2LjEzNWEuMjA4LjIwOCwwLDAsMCwuMjA5LS4yMDl2LS43MTlhLjIwOC4yMDgsMCwwLDAtLjIwOS0uMjA5Wk0xNTIuMjYxLDE5LjU0MWEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNmEuMTEuMTEsMCwwLDEtLjExNi4xMTZoLTMuMDZhLjExLjExLDAsMCwxLS4xMTYtLjExNnYtLjZabTAsMS45YS4xMS4xMSwwLDAsMSwuMTE2LS4xMTZoMy4wMzdhLjExLjExLDAsMCwxLC4xMTYuMTE2di42YS4xMS4xMSwwLDAsMS0uMTE2LjExNmgtMy4wNmEuMTEuMTEsMCwwLDEtLjExNi0uMTE2di0uNlptMCwxLj'+
			'lhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjZhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMTE2LS4xMTZ2LS42Wm0wLDEuOWEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNmEuMTEuMTEsMCwwLDEtLjExNi4xMTZoLTMuMDZhLjExLjExLDAsMCwxLS4xMTYtLjExNnYtLjZabTAsMS45YS4xMS4xMSwwLDAsMSwuMTE2LS4xMTZoMy4wMzdhLjExLjExLDAsMCwxLC4xMTYuMTE2di42YS4xMS4xMSwwLDAsMS0uMTE2LjExNmgtMy4wNmEuMTEuMTEsMCwwLDEtLjExNi0uMTE2'+
			'di0uNlptMCwxLjkyNGEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNThhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMTE2LS4xMTZ2LS41OFptMCwxLjlhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjZhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMTE2LS4xMTZ2LS42Wm0wLDEuOWEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNmEuMTEuMTEsMCwwLDEtLjExNi4xMTZoLTMuMDZhLjExLjExLD'+
			'AsMCwxLS4xMTYtLjExNnYtLjZabTExLjEtOC42YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5VjI3LjFhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIw'+
			'OC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0tLjIwOSwxLjk0N2EuMjA4LjIwOCwwLDAsMSwuMjA5LjIwOXYxLjg3OGgtMS40MTR2LTIuMTFoMS4yMDVaTTE2MS4yMSwxNS41NzZhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLj'+
			'Y0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDlWMTguNGEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2'+
			'LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNTZhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDlWMjcuMWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMj'+
			'A5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabS0yLjE3OS0xNS4yMzFhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5'+
			'LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDlWMTguNGEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMj'+
			'A5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNTZhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDlWMjcuMWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEs'+
			'LjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTAsMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aC42NDlhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2LjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LjIwOWgtLjY0OWEuMjA4LjIwOCwwLDAsMS0uMjA5LS4yMDlabTEuMDksMi4xNzlhLjIwOC4yMDgsMCwwLDEsLjIwOS0uMjA5aDEuMjA2djIuMTFIMTYwLjEyWiIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__014_groundlevel__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__014_groundlevel__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtQnVpbGRpbmdIb3ZlciI+CiAgIDxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iQnVpbGRpbmdIb3ZlciIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtQnVpbGRpbmdIb3ZlcikiPgogIDxnIGlkPSJCdWlsZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY4Ljk3MS'+
			'AtMTEuNzU5KSI+CiAgIDxwYXRoIGlkPSJQYXRoXzU1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc2Ljg4OCAtMC4yNDEpIiBkYXRhLW5hbWU9IlBhdGggNTU3IiBkPSJNMTY2LjQyNiwzNC44NjRoLS42VjIzLjM0M2EuNjQ4LjY0OCwwLDAsMC0uNjQ5LS42NDloLTEuNTNWMTQuNjQ5YS42NDguNjQ4LDAsMCwwLS42NDktLjY0OWgtNC42ODNhLjY0OC42NDgsMCwwLDAtLjY0OS42NDlWMzQuODQxaC0uNzg4VjE3LjA2YS41NS41NSwwLDAsMC0uNy0uNTMzbC00Ljg5MSwxLjQxNGEuNTQ5LjU0OSwwLDAsMC0uMzk0LjUzM3YxNi4zOWgtLjZhLjIwOC4yMDgsMCwwLDAtLjIwOS4yMDl2LjcxOWEuMjA4'+
			'LjIwOCwwLDAsMCwuMjA5LjIwOWgxNi4xMzVhLjIwOC4yMDgsMCwwLDAsLjIwOS0uMjA5di0uNzE5YS4yMDguMjA4LDAsMCwwLS4yMDktLjIwOVpNMTUyLjI2MSwxOS41NDFhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjZhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMTE2LS4xMTZ2LS42Wm0wLDEuOWEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNmEuMTEuMTEsMCwwLDEtLjExNi4xMTZoLTMuMDZhLjExLjExLDAsMCwxLS4xMTYtLjExNnYtLjZabTAsMS45YS4xMS4xMS'+
			'wwLDAsMSwuMTE2LS4xMTZoMy4wMzdhLjExLjExLDAsMCwxLC4xMTYuMTE2di42YS4xMS4xMSwwLDAsMS0uMTE2LjExNmgtMy4wNmEuMTEuMTEsMCwwLDEtLjExNi0uMTE2di0uNlptMCwxLjlhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjZhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMTE2LS4xMTZ2LS42Wm0wLDEuOWEuMTEuMTEsMCwwLDEsLjExNi0uMTE2aDMuMDM3YS4xMS4xMSwwLDAsMSwuMTE2LjExNnYuNmEuMTEuMTEsMCwwLDEtLjExNi4xMTZoLTMuMDZhLjExLjExLDAsMCwxLS4xMTYtLjExNnYtLjZabTAs'+
			'MS45MjRhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjU4YS4xMS4xMSwwLDAsMS0uMTE2LjExNmgtMy4wNmEuMTEuMTEsMCwwLDEtLjExNi0uMTE2di0uNThabTAsMS45YS4xMS4xMSwwLDAsMSwuMTE2LS4xMTZoMy4wMzdhLjExLjExLDAsMCwxLC4xMTYuMTE2di42YS4xMS4xMSwwLDAsMS0uMTE2LjExNmgtMy4wNmEuMTEuMTEsMCwwLDEtLjExNi0uMTE2di0uNlptMCwxLjlhLjExLjExLDAsMCwxLC4xMTYtLjExNmgzLjAzN2EuMTEuMTEsMCwwLDEsLjExNi4xMTZ2LjZhLjExLjExLDAsMCwxLS4xMTYuMTE2aC0zLjA2YS4xMS4xMSwwLDAsMS0uMT'+
			'E2LS4xMTZ2LS42Wm0xMS4xLTguNmEuMjA4LjIwOCwwLDAsMSwuMjA5LS4yMDloLjY0OWEuMjA4LjIwOCwwLDAsMSwuMjA5LjIwOXYuNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDkuMjA5aC0uNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDktLjIwOVptMCwyLjE3OWEuMjA4LjIwOCwwLDAsMSwuMjA5LS4yMDloLjY0OWEuMjA4LjIwOCwwLDAsMSwuMjA5LjIwOVYyNy4xYS4yMDguMjA4LDAsMCwxLS4yMDkuMjA5aC0uNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDktLjIwOVptMCwyLjE3OWEuMjA4LjIwOCwwLDAsMSwuMjA5LS4yMDloLjY0OWEuMjA4LjIwOCwwLDAsMSwuMjA5LjIwOXYuNjQ5YS4yMDguMjA4LDAs'+
			'MCwxLS4yMDkuMjA5aC0uNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDktLjIwOVptMCwyLjE3OWEuMjA4LjIwOCwwLDAsMSwuMjA5LS4yMDloLjY0OWEuMjA4LjIwOCwwLDAsMSwuMjA5LjIwOXYuNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDkuMjA5aC0uNjQ5YS4yMDguMjA4LDAsMCwxLS4yMDktLjIwOVptLS4yMDksMS45NDdhLjIwOC4yMDgsMCwwLDEsLjIwOS4yMDl2MS44NzhoLTEuNDE0di0yLjExaDEuMjA1Wk0xNjEuMjEsMTUuNTc2YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC'+
			'4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5VjE4LjRhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIw'+
			'OC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTU2YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5VjI3LjFhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS'+
			'4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0tMi4xNzktMTUuMjMxYS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0w'+
			'LDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5VjE4LjRhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS'+
			'42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTU2YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5VjI3LjFhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5'+
			'di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0wLDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWguNjQ5YS4yMDguMjA4LDAsMCwxLC4yMDkuMjA5di42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS4yMDloLS42NDlhLjIwOC4yMDgsMCwwLDEtLjIwOS0uMjA5Wm0xLjA5LDIuMTc5YS4yMDguMjA4LDAsMCwxLC4yMDktLjIwOWgxLjIwNnYyLjExSDE2MC4xMloiIGZpbGw9IiMyNjk5ZmIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__014_groundlevel__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="01.4_groundLevel";
		el.ggDx=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) - 32px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__014_groundlevel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__014_groundlevel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("2"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("4"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getVariableValue('02_Walk') == Number("1"))) || 
				((player.getVariableValue('02_Walk') == Number("2")))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getVariableValue('02_Walk') == Number("0"))) || 
				((player.getVariableValue('02_Walk') == Number("3"))) || 
				((player.getVariableValue('02_Walk') == Number("4")))
			)
			{
				newLogicStateVisible = 4;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__014_groundlevel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__014_groundlevel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__014_groundlevel.style.transition='';
				if (me.__014_groundlevel.ggCurrentLogicStateVisible == 0) {
					me.__014_groundlevel.style.visibility="hidden";
					me.__014_groundlevel.ggVisible=false;
				}
				else if (me.__014_groundlevel.ggCurrentLogicStateVisible == 1) {
					me.__014_groundlevel.style.visibility="hidden";
					me.__014_groundlevel.ggVisible=false;
				}
				else if (me.__014_groundlevel.ggCurrentLogicStateVisible == 2) {
					me.__014_groundlevel.style.visibility="hidden";
					me.__014_groundlevel.ggVisible=false;
				}
				else if (me.__014_groundlevel.ggCurrentLogicStateVisible == 3) {
					me.__014_groundlevel.style.visibility=(Number(me.__014_groundlevel.style.opacity)>0||!me.__014_groundlevel.style.opacity)?'inherit':'hidden';
					me.__014_groundlevel.ggVisible=true;
				}
				else if (me.__014_groundlevel.ggCurrentLogicStateVisible == 4) {
					me.__014_groundlevel.style.visibility="hidden";
					me.__014_groundlevel.ggVisible=false;
				}
				else {
					me.__014_groundlevel.style.visibility=(Number(me.__014_groundlevel.style.opacity)>0||!me.__014_groundlevel.style.opacity)?'inherit':'hidden';
					me.__014_groundlevel.ggVisible=true;
				}
			}
		}
		me.__014_groundlevel.logicBlock_visible();
		me.__014_groundlevel.onclick=function (e) {
			player.setVariableValue('01_Drone', Number("1"));
			player.setVariableValue('02_Walk', Number("4"));
			player.openNext("{node28}","");
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me.__014_groundlevel.onmouseenter=function (e) {
			me.__014_groundlevel__img.style.visibility='hidden';
			me.__014_groundlevel__imgo.style.visibility='inherit';
			me.elementMouseOver['_014_groundlevel']=true;
		}
		me.__014_groundlevel.onmouseleave=function (e) {
			me.__014_groundlevel__img.style.visibility='inherit';
			me.__014_groundlevel__imgo.style.visibility='hidden';
			me.elementMouseOver['_014_groundlevel']=false;
		}
		me.__014_groundlevel.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__014_groundlevel);
		el=me.__015_map_hidden=document.createElement('div');
		els=me.__015_map_hidden__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNi4xMjEgMjYuMTIxIiB3aWR0aD0iMjYuMTIxIiBoZWlnaHQ9IjI2LjEyMSI+CiA8ZyBpZD0iTWFwX2hpZGRlbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wNjEgMS4wNjEpIiBkYXRhLW5hbWU9Ik1hcCBoaWRkZW4iPgogIDxnIGlkPSJNYXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTc4IDAuOTcyKSI+CiAgIDxwYXRoIGlkPSJQYXRoXzUzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjU0IC0yMS40MykiIGRhdGEtbmFtZT0iUGF0aCA1MzkiIGQ9Ik05OC44OSwyOC4xOTJWMjEuNDNIOTEuNT'+
			'R2Ny45NzZaIiBmaWxsPSIjZmZmIi8+CiAgIDxwYXRoIGlkPSJQYXRoXzU0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjU0IC0xODMuMjAzKSIgZGF0YS1uYW1lPSJQYXRoIDU0MCIgZD0iTTEwMS44MzEsMTkwLjQxbC0xMC4yOTEsMS43djEzLjE0OGg1LjQxWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzcuMTYxIC0yMS40MjkpIiBkYXRhLW5hbWU9IlBhdGggNTQxIiBkPSJNMjg1LjQzLDI4LjAzOWwxMy43NzctMi4yNzZWMjEuNDI5SDI4NS40M1oiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBhdGhfNTQyIiB0cmFu'+
			'c2Zvcm09InRyYW5zbGF0ZSgtNDAwLjgzMyAtMjQ1LjE1MykiIGRhdGEtbmFtZT0iUGF0aCA1NDIiIGQ9Ik00MTYuNDQ5LDI1NS4xMmExLjgzOSwxLjgzOSwwLDEsMCwxLjg0MiwxLjg0MkExLjg0NCwxLjg0NCwwLDAsMCw0MTYuNDQ5LDI1NS4xMloiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBhdGhfNTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM0LjY3NCAtMTM5LjYwNSkiIGRhdGEtbmFtZT0iUGF0aCA1NDMiIGQ9Ik0yNDUuOTg3LDE0Ni42NDMsMjQxLjA1LDE2MS42NmgxNS42NjlWMTQ0Ljg3Wm03LjY2LDQuNzhjLS4zNzcsMS45LTIuODM4LDYuOTEyLTIuOTQ0LDcuMTI4bC0uND'+
			'EzLjgzNi0uNDA5LS44MzZjLS4xMDYtLjIxNi0yLjU2Ny01LjIzMS0yLjk0NC03LjEyOGEyLjU3NCwyLjU3NCwwLDAsMSwuNTc5LTIuMTYzLDMuNjIzLDMuNjIzLDAsMCwxLDUuNTUzLDBBMi41NzQsMi41NzQsMCwwLDEsMjUzLjY0NiwxNTEuNDIzWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NzIiIHN0cm9rZT0iI2ZiNWE1MCIgc3Ryb2tlLXdpZHRoPSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC45NzggLTAuOTcyKSIgZGF0YS1uYW1lPSJQYXRoIDU3MiIgZD0iTTAsMEgwTDI0LDI0IiBmaWxsPSJub25lIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me.__015_map_hidden__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__015_map_hidden__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNi4xMjEgMjYuMTIxIiB3aWR0aD0iMjYuMTIxIiBoZWlnaHQ9IjI2LjEyMSI+CiA8ZyBpZD0iTWFwX2hpZGRlbl9Ib3ZlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wNjEgMS4wNjEpIiBkYXRhLW5hbWU9Ik1hcCBoaWRkZW4gSG92ZXIiPgogIDxnIGlkPSJNYXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTc4IDAuOTcyKSI+CiAgIDxwYXRoIGlkPSJQYXRoXzUzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjU0IC0yMS40MykiIGRhdGEtbmFtZT0iUGF0aCA1MzkiIGQ9Ik05OC44OSwyOC4xOT'+
			'JWMjEuNDNIOTEuNTR2Ny45NzZaIiBmaWxsPSIjMjY5OWZiIi8+CiAgIDxwYXRoIGlkPSJQYXRoXzU0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjU0IC0xODMuMjAzKSIgZGF0YS1uYW1lPSJQYXRoIDU0MCIgZD0iTTEwMS44MzEsMTkwLjQxbC0xMC4yOTEsMS43djEzLjE0OGg1LjQxWiIgZmlsbD0iIzI2OTlmYiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzcuMTYxIC0yMS40MjkpIiBkYXRhLW5hbWU9IlBhdGggNTQxIiBkPSJNMjg1LjQzLDI4LjAzOWwxMy43NzctMi4yNzZWMjEuNDI5SDI4NS40M1oiIGZpbGw9IiMyNjk5ZmIiLz4KICAgPHBh'+
			'dGggaWQ9IlBhdGhfNTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAwLjgzMyAtMjQ1LjE1MykiIGRhdGEtbmFtZT0iUGF0aCA1NDIiIGQ9Ik00MTYuNDQ5LDI1NS4xMmExLjgzOSwxLjgzOSwwLDEsMCwxLjg0MiwxLjg0MkExLjg0NCwxLjg0NCwwLDAsMCw0MTYuNDQ5LDI1NS4xMloiIGZpbGw9IiMyNjk5ZmIiLz4KICAgPHBhdGggaWQ9IlBhdGhfNTQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM0LjY3NCAtMTM5LjYwNSkiIGRhdGEtbmFtZT0iUGF0aCA1NDMiIGQ9Ik0yNDUuOTg3LDE0Ni42NDMsMjQxLjA1LDE2MS42NmgxNS42NjlWMTQ0Ljg3Wm03LjY2LDQuNzhjLS4zNzcsMS45LTIuOD'+
			'M4LDYuOTEyLTIuOTQ0LDcuMTI4bC0uNDEzLjgzNi0uNDA5LS44MzZjLS4xMDYtLjIxNi0yLjU2Ny01LjIzMS0yLjk0NC03LjEyOGEyLjU3NCwyLjU3NCwwLDAsMSwuNTc5LTIuMTYzLDMuNjIzLDMuNjIzLDAsMCwxLDUuNTUzLDBBMi41NzQsMi41NzQsMCwwLDEsMjUzLjY0NiwxNTEuNDIzWiIgZmlsbD0iIzI2OTlmYiIvPgogICA8cGF0aCBpZD0iUGF0aF81NzIiIHN0cm9rZT0iI2ZiNWE1MCIgc3Ryb2tlLXdpZHRoPSIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC45NzggLTAuOTcyKSIgZGF0YS1uYW1lPSJQYXRoIDU3MiIgZD0iTTAsMEgwTDI0LDI0IiBmaWxsPSJub25lIi8+CiAgPC9nPgog'+
			'PC9nPgo8L3N2Zz4K';
		me.__015_map_hidden__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="01.5_map_hidden";
		el.ggDx=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 34px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__015_map_hidden.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__015_map_hidden.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('05_MapVis') == Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('05_MapVis') == Number("0"))) || 
				((player.getVariableValue('05_MapVis') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__015_map_hidden.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__015_map_hidden.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__015_map_hidden.style.transition='';
				if (me.__015_map_hidden.ggCurrentLogicStateVisible == 0) {
					me.__015_map_hidden.style.visibility=(Number(me.__015_map_hidden.style.opacity)>0||!me.__015_map_hidden.style.opacity)?'inherit':'hidden';
					me.__015_map_hidden.ggVisible=true;
				}
				else if (me.__015_map_hidden.ggCurrentLogicStateVisible == 1) {
					me.__015_map_hidden.style.visibility="hidden";
					me.__015_map_hidden.ggVisible=false;
				}
				else {
					me.__015_map_hidden.style.visibility=(Number(me.__015_map_hidden.style.opacity)>0||!me.__015_map_hidden.style.opacity)?'inherit':'hidden';
					me.__015_map_hidden.ggVisible=true;
				}
			}
		}
		me.__015_map_hidden.logicBlock_visible();
		me.__015_map_hidden.onclick=function (e) {
			player.setVariableValue('06_TourMap', Number("0"));
			player.setVariableValue('05_MapVis', Number("1"));
		}
		me.__015_map_hidden.onmouseenter=function (e) {
			me.__015_map_hidden__img.style.visibility='hidden';
			me.__015_map_hidden__imgo.style.visibility='inherit';
			me.elementMouseOver['_015_map_hidden']=true;
		}
		me.__015_map_hidden.onmouseleave=function (e) {
			me.__015_map_hidden__img.style.visibility='inherit';
			me.__015_map_hidden__imgo.style.visibility='hidden';
			me.elementMouseOver['_015_map_hidden']=false;
		}
		me.__015_map_hidden.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__015_map_hidden);
		el=me.__016_map_visible=document.createElement('div');
		els=me.__016_map_visible__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtTWFwX3Zpc2JsZSI+CiAgIDxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iTWFwX3Zpc2JsZSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtTWFwX3Zpc2JsZSkiIGRhdGEtbmFtZT0iTWFwIHZpc2JsZSI+CiAgPGcgaWQ9Ikdyb3VwXzMxNyIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoMC45MzkgMC45NCkiIGRhdGEtbmFtZT0iR3JvdXAgMzE3Ij4KICAgPHBhdGggaWQ9IlBhdGhfNTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEuMDY2IC0yMC45NjIpIiBkYXRhLW5hbWU9IlBhdGggNTM5IiBkPSJNOTguOTM0LDI4LjIzMnYtNi44SDkxLjU0djguMDIzWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MS4wNjYgLTE4Mi42OTMpIiBkYXRhLW5hbWU9IlBhdGggNTQwIiBkPSJNMTAxLjg5MiwxOTAuNDEsOTEuNTQsMTkyLjEydjEzLjIyNWg1LjQ0MloiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBh'+
			'dGhfNTQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjYzOSAtMjAuOTYxKSIgZGF0YS1uYW1lPSJQYXRoIDU0MSIgZD0iTTI4NS40MywyOC4wNzhsMTMuODU3LTIuMjlWMjEuNDI5SDI4NS40M1oiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBhdGhfNTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAwLjI3OSAtMjQ0LjYyNykiIGRhdGEtbmFtZT0iUGF0aCA1NDIiIGQ9Ik00MTYuNDYsMjU1LjEyYTEuODUsMS44NSwwLDEsMCwxLjg1MywxLjg1MkExLjg1NCwxLjg1NCwwLDAsMCw0MTYuNDYsMjU1LjEyWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDMiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0yMzQuMTYzIC0xMzkuMTA3KSIgZGF0YS1uYW1lPSJQYXRoIDU0MyIgZD0iTTI0Ni4wMTYsMTQ2LjY1NGwtNC45NjYsMTUuMTA1aDE1Ljc2MVYxNDQuODdabTcuNyw0LjgwOGMtLjM3OSwxLjkwOC0yLjg1NSw2Ljk1My0yLjk2MSw3LjE3bC0uNDE2Ljg0MS0uNDExLS44NDFjLS4xMDYtLjIxNy0yLjU4Mi01LjI2Mi0yLjk2MS03LjE3YTIuNTg5LDIuNTg5LDAsMCwxLC41ODItMi4xNzYsMy42NDUsMy42NDUsMCwwLDEsNS41ODUsMEEyLjU4OSwyLjU4OSwwLDAsMSwyNTMuNzIsMTUxLjQ2MVoiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__016_map_visible__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__016_map_visible__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9ImEiIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC45MzkgMC45NCkiPgogICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEuMDY2IC0yMC45NjIpIiBkPSJNOT'+
			'guOTM0LDI4LjIzMnYtNi44SDkxLjU0djguMDIzWiIgZmlsbD0iIzI2OTlmYiIvPgogICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEuMDY2IC0xODIuNjkzKSIgZD0iTTEwMS44OTIsMTkwLjQxLDkxLjU0LDE5Mi4xMnYxMy4yMjVoNS40NDJaIiBmaWxsPSIjMjY5OWZiIi8+CiAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzYuNjM5IC0yMC45NjEpIiBkPSJNMjg1LjQzLDI4LjA3OGwxMy44NTctMi4yOVYyMS40MjlIMjg1LjQzWiIgZmlsbD0iIzI2OTlmYiIvPgogICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAwLjI3OSAtMjQ0LjYyNykiIGQ9Ik00MTYuNDYsMjU1'+
			'LjEyYTEuODUsMS44NSwwLDEsMCwxLjg1MywxLjg1MkExLjg1NCwxLjg1NCwwLDAsMCw0MTYuNDYsMjU1LjEyWiIgZmlsbD0iIzI2OTlmYiIvPgogICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM0LjE2MyAtMTM5LjEwNykiIGQ9Ik0yNDYuMDE2LDE0Ni42NTRsLTQuOTY2LDE1LjEwNWgxNS43NjFWMTQ0Ljg3Wm03LjcsNC44MDhjLS4zNzksMS45MDgtMi44NTUsNi45NTMtMi45NjEsNy4xN2wtLjQxNi44NDEtLjQxMS0uODQxYy0uMTA2LS4yMTctMi41ODItNS4yNjItMi45NjEtNy4xN2EyLjU4OSwyLjU4OSwwLDAsMSwuNTgyLTIuMTc2LDMuNjQ1LDMuNjQ1LDAsMCwxLDUuNTg1LDBBMi'+
			'41ODksMi41ODksMCwwLDEsMjUzLjcyLDE1MS40NjFaIiBmaWxsPSIjMjY5OWZiIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me.__016_map_visible__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="01.6_map_visible";
		el.ggDx=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 34px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__016_map_visible.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__016_map_visible.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('05_MapVis') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('05_MapVis') == Number("0"))) || 
				((player.getVariableValue('05_MapVis') == Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__016_map_visible.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__016_map_visible.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__016_map_visible.style.transition='';
				if (me.__016_map_visible.ggCurrentLogicStateVisible == 0) {
					me.__016_map_visible.style.visibility=(Number(me.__016_map_visible.style.opacity)>0||!me.__016_map_visible.style.opacity)?'inherit':'hidden';
					me.__016_map_visible.ggVisible=true;
				}
				else if (me.__016_map_visible.ggCurrentLogicStateVisible == 1) {
					me.__016_map_visible.style.visibility="hidden";
					me.__016_map_visible.ggVisible=false;
				}
				else {
					me.__016_map_visible.style.visibility=(Number(me.__016_map_visible.style.opacity)>0||!me.__016_map_visible.style.opacity)?'inherit':'hidden';
					me.__016_map_visible.ggVisible=true;
				}
			}
		}
		me.__016_map_visible.logicBlock_visible();
		me.__016_map_visible.onclick=function (e) {
			player.setVariableValue('06_TourMap', Number("1"));
			player.setVariableValue('05_MapVis', Number("2"));
			if (
				(
					((player.getVariableValue('02_Walk') == Number("1")))
				)
			) {
				player.setVariableValue('13_Map_drone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('01_Drone') == Number("1")))
				)
			) {
				player.setVariableValue('14_Map_walk', Number("1"));
			}
			player.setVariableValue('12_PA_Logo', Number("1"));
		}
		me.__016_map_visible.onmouseenter=function (e) {
			me.__016_map_visible__img.style.visibility='hidden';
			me.__016_map_visible__imgo.style.visibility='inherit';
			me.elementMouseOver['_016_map_visible']=true;
		}
		me.__016_map_visible.onmouseleave=function (e) {
			me.__016_map_visible__img.style.visibility='inherit';
			me.__016_map_visible__imgo.style.visibility='hidden';
			me.elementMouseOver['_016_map_visible']=false;
		}
		me.__016_map_visible.ggUpdatePosition=function (useTransition) {
		}
		me.__01_bottom_btn.appendChild(me.__016_map_visible);
		me.divSkin.appendChild(me.__01_bottom_btn);
		el=me.__02_thumbnailbtn=document.createElement('div');
		el.ggId="02_thumbnail-btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__02_thumbnailbtn.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__02_thumbnailbtn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__02_thumbnailbtn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__02_thumbnailbtn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__02_thumbnailbtn.style.transition='';
				if (me.__02_thumbnailbtn.ggCurrentLogicStateVisible == 0) {
					me.__02_thumbnailbtn.style.visibility=(Number(me.__02_thumbnailbtn.style.opacity)>0||!me.__02_thumbnailbtn.style.opacity)?'inherit':'hidden';
					me.__02_thumbnailbtn.ggVisible=true;
				}
				else if (me.__02_thumbnailbtn.ggCurrentLogicStateVisible == 1) {
					me.__02_thumbnailbtn.style.visibility="hidden";
					me.__02_thumbnailbtn.ggVisible=false;
				}
				else {
					me.__02_thumbnailbtn.style.visibility=(Number(me.__02_thumbnailbtn.style.opacity)>0||!me.__02_thumbnailbtn.style.opacity)?'inherit':'hidden';
					me.__02_thumbnailbtn.ggVisible=true;
				}
			}
		}
		me.__02_thumbnailbtn.logicBlock_visible();
		me.__02_thumbnailbtn.ggUpdatePosition=function (useTransition) {
		}
		el=me.__021_thumbnail_close=document.createElement('div');
		els=me.__021_thumbnail_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtQ2xvc2UiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkNsb3NlIiBjbGlwLXBhdGg9InVybCgjY2xpcC1DbG9zZSkiPgogIDxnIGlkPSJDbG9zZS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNiAtNykiIGRhdGEtbmFtZT0iQ2xvc2UiPgogICA8Y2'+
			'lyY2xlIGlkPSJFbGxpcHNlXzEiIGN5PSIxMSIgY3g9IjExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDkpIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgcj0iMTEiLz4KICAgPGcgaWQ9Ikdyb3VwXzI2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDM0IDE1LjAzNCkiIGRhdGEtbmFtZT0iR3JvdXAgMjY3Ij4KICAgIDxsaW5lIGlkPSJMaW5lXzEiIHkxPSI5Ljg3NSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGRhdGEtbmFtZT0iTGluZSAxIiB4MT0iOS44NzUiIGZpbGw9Im5vbmUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzIiIHgyPSI5Ljg3NSIgeTE9IjkuODc1IiBzdHJva2U9IiNm'+
			'ZmYiIHN0cm9rZS13aWR0aD0iMiIgZGF0YS1uYW1lPSJMaW5lIDIiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__021_thumbnail_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="02.1_thumbnail_close";
		el.ggDx=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 41px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -75px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__021_thumbnail_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__021_thumbnail_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('01_Drone') == Number("2")))
				)
			) {
				player.setVariableValue('01_Drone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("3")))
				)
			) {
				player.setVariableValue('02_Walk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("0")))
				)
			) {
				player.setVariableValue('02_Walk', Number("1"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("1")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("0"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("2")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("3"));
			}
			if (
				(
					((player.getVariableValue('03_ToggleWalk') == Number("1")))
				)
			) {
				player.setVariableValue('03_ToggleWalk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("0")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("1"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("3")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("2"));
			}
			player.setVariableValue('07_Bottom_menu_background', Number("1"));
			me.__012_thumbnail_btn.style.transition='none';
			me.__012_thumbnail_btn.style.visibility=(Number(me.__012_thumbnail_btn.style.opacity)>0||!me.__012_thumbnail_btn.style.opacity)?'inherit':'hidden';
			me.__012_thumbnail_btn.ggVisible=true;
			me.__021_thumbnail_close.style.transition='none';
			me.__021_thumbnail_close.style.opacity='0';
			me.__021_thumbnail_close.style.visibility='hidden';
		}
		me.__021_thumbnail_close.ggUpdatePosition=function (useTransition) {
		}
		me.__02_thumbnailbtn.appendChild(me.__021_thumbnail_close);
		el=me.__022_toggle_groundlevel=document.createElement('div');
		els=me.__022_toggle_groundlevel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me.__022_toggle_groundlevel__img.setAttribute('src',basePath + 'images/_022_toggle_groundlevel.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="02.2_toggle_groundLevel";
		el.ggDx=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) - 12px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__022_toggle_groundlevel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__022_toggle_groundlevel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('03_ToggleWalk') == Number("0"))) || 
				((player.getVariableValue('03_ToggleWalk') == Number("2")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__022_toggle_groundlevel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__022_toggle_groundlevel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__022_toggle_groundlevel.style.transition='opacity 0s';
				if (me.__022_toggle_groundlevel.ggCurrentLogicStateAlpha == 0) {
					me.__022_toggle_groundlevel.style.visibility=me.__022_toggle_groundlevel.ggVisible?'inherit':'hidden';
					me.__022_toggle_groundlevel.style.opacity=1;
				}
				else if (me.__022_toggle_groundlevel.ggCurrentLogicStateAlpha == 1) {
					me.__022_toggle_groundlevel.style.visibility="hidden";
					me.__022_toggle_groundlevel.style.opacity=0;
				}
				else {
					me.__022_toggle_groundlevel.style.visibility="hidden";
					me.__022_toggle_groundlevel.style.opacity=0;
				}
			}
		}
		me.__022_toggle_groundlevel.logicBlock_alpha();
		me.__022_toggle_groundlevel.onclick=function (e) {
			player.setVariableValue('03_ToggleWalk', Number("0"));
			player.setVariableValue('04_ToggleDrone', Number("2"));
		}
		me.__022_toggle_groundlevel.ggUpdatePosition=function (useTransition) {
		}
		me.__02_thumbnailbtn.appendChild(me.__022_toggle_groundlevel);
		el=me.__023_toggle_subway=document.createElement('div');
		els=me.__023_toggle_subway__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me.__023_toggle_subway__img.setAttribute('src',basePath + 'images/_023_toggle_subway.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="02.3_toggle_subway";
		el.ggDx=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) - 12px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__023_toggle_subway.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__023_toggle_subway.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("2")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("0"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("3"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("4")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__023_toggle_subway.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__023_toggle_subway.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__023_toggle_subway.style.transition='opacity 0s';
				if (me.__023_toggle_subway.ggCurrentLogicStateAlpha == 0) {
					me.__023_toggle_subway.style.visibility=me.__023_toggle_subway.ggVisible?'inherit':'hidden';
					me.__023_toggle_subway.style.opacity=1;
				}
				else if (me.__023_toggle_subway.ggCurrentLogicStateAlpha == 1) {
					me.__023_toggle_subway.style.visibility="hidden";
					me.__023_toggle_subway.style.opacity=0;
				}
				else {
					me.__023_toggle_subway.style.visibility="hidden";
					me.__023_toggle_subway.style.opacity=0;
				}
			}
		}
		me.__023_toggle_subway.logicBlock_alpha();
		me.__023_toggle_subway.onclick=function (e) {
			player.setVariableValue('03_ToggleWalk', Number("1"));
			player.setVariableValue('04_ToggleDrone', Number("4"));
		}
		me.__023_toggle_subway.ggUpdatePosition=function (useTransition) {
		}
		me.__02_thumbnailbtn.appendChild(me.__023_toggle_subway);
		me.divSkin.appendChild(me.__02_thumbnailbtn);
		el=me.__03_bottom_btn_mob=document.createElement('div');
		el.ggId="03_bottom_btn_MOB";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__03_bottom_btn_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__03_bottom_btn_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__03_bottom_btn_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__03_bottom_btn_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__03_bottom_btn_mob.style.transition='';
				if (me.__03_bottom_btn_mob.ggCurrentLogicStateVisible == 0) {
					me.__03_bottom_btn_mob.style.visibility=(Number(me.__03_bottom_btn_mob.style.opacity)>0||!me.__03_bottom_btn_mob.style.opacity)?'inherit':'hidden';
					me.__03_bottom_btn_mob.ggVisible=true;
				}
				else if (me.__03_bottom_btn_mob.ggCurrentLogicStateVisible == 1) {
					me.__03_bottom_btn_mob.style.visibility="hidden";
					me.__03_bottom_btn_mob.ggVisible=false;
				}
				else {
					me.__03_bottom_btn_mob.style.visibility=(Number(me.__03_bottom_btn_mob.style.opacity)>0||!me.__03_bottom_btn_mob.style.opacity)?'inherit':'hidden';
					me.__03_bottom_btn_mob.ggVisible=true;
				}
			}
		}
		me.__03_bottom_btn_mob.logicBlock_visible();
		me.__03_bottom_btn_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__031_bottom_menu_background=document.createElement('div');
		el.ggId="03.1_bottom_menu_background";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((65px + 2px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='background: black; border-top-left-radius: 5px; border-top-right-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__031_bottom_menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__031_bottom_menu_background.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__031_bottom_menu_background.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__031_bottom_menu_background.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__031_bottom_menu_background.style.transition='';
				if (me.__031_bottom_menu_background.ggCurrentLogicStateVisible == 0) {
					me.__031_bottom_menu_background.style.visibility=(Number(me.__031_bottom_menu_background.style.opacity)>0||!me.__031_bottom_menu_background.style.opacity)?'inherit':'hidden';
					me.__031_bottom_menu_background.ggVisible=true;
				}
				else if (me.__031_bottom_menu_background.ggCurrentLogicStateVisible == 1) {
					me.__031_bottom_menu_background.style.visibility="hidden";
					me.__031_bottom_menu_background.ggVisible=false;
				}
				else {
					me.__031_bottom_menu_background.style.visibility=(Number(me.__031_bottom_menu_background.style.opacity)>0||!me.__031_bottom_menu_background.style.opacity)?'inherit':'hidden';
					me.__031_bottom_menu_background.ggVisible=true;
				}
			}
		}
		me.__031_bottom_menu_background.logicBlock_visible();
		me.__031_bottom_menu_background.ggUpdatePosition=function (useTransition) {
		}
		me.__03_bottom_btn_mob.appendChild(me.__031_bottom_menu_background);
		el=me.__032_walk=document.createElement('div');
		els=me.__032_walk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtV2F0ZXJmb3VudGFpbiI+CiAgIDxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iV2F0ZXJmb3VudGFpbiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtV2F0ZXJmb3VudGFpbikiPgogIDxwYXRoIGlkPSJ3YXRlci1mb3VudGFpbi1zdmdyZXBvLWNvbSIgdHJhbnNmb3'+
			'JtPSJ0cmFuc2xhdGUoLTE0LjYwOCAtMTMuODM3KSIgZD0iTTI1Ljc0MywxNmE2LjA2Miw2LjA2MiwwLDAsMSwuODA5LDIuNDE1Yy0uNzg0LTEuMjM1LTEuNjEyLTEuNzU3LTIuNDM0LTEuNzQ4LTMuMy4wMzUtNi41LDguNjQtNi4zMzcsMTMuOTEzYS41MzIuNTMyLDAsMCwwLS4xLjA0OGMtLjI2Ny4xNTktLjExOC42MTUtLjIzOS45LS4xNDcuMzQ0LS41MzMuNTg5LS41ODIuOTZhMS45NjQsMS45NjQsMCwwLDAsLjAyNy42NzRoNy40NzFhMy4yOTEsMy4yOTEsMCwwLDAtMS4yMjctMS42OGMtLjE3Ny0uMTIzLS40NjcuMDg4LS42NDctLjAzMS0uMzcyLS4yNDUtLjE3NS0xLjAyOS0uNTg2LTEuMmEu'+
			'OTg1Ljk4NSwwLDAsMC0uODA3LjA1OWMtLjIyMi01LjQxLDEuMzQxLTEzLjIsNC44NDEtMTEuNjU2LTEuMTYuMjc5LTEuNjcxLjY5NS0xLjk0NywyLjI2NS4zNi0uNy42NjItMS4yNTcsMS43NjQtMS4wODdsMy4wODIsMHMxLjYsMS44NDEsMS44MzQsMi4yNTdjLjI1LjQzOS0uNzA2LTMuMDgxLTEuNTU0LTMuNTI0LDIuOTcyLjEsNC4yNzIsOC4xMTUsNC4wNjYsMTMuMTI4LS4yNzEtLjExOS0xLjA1Ny0xLjQ2NC0xLjMyNC0xLjM1MWExLjMwNiwxLjMwNiwwLDAsMC0uNzU1LjdjLS4wODQuMi0uMDM3Ljk5NC0uMjE0LDEuMTE3YTIuNTQyLDIuNTQyLDAsMCwwLS45NjIsMS4wMWg3LjU3M2ExMC42Mz'+
			'gsMTAuNjM4LDAsMCwwLS41MDktMS41NDFjLS4xMjItLjI4NiwxLjQtMS44NzEsMC0xLjA4OWEyLjM0MSwyLjM0MSwwLDAsMS0uNDY2LjA0OGMuMTY1LTUuMjczLTMuMDM0LTEzLjg3OC02LjMzNy0xMy45MTMtLjgzNC0uMDA5LTEuNjc1LjUyOS0yLjQ3LDEuOGE1LjAzMSw1LjAzMSwwLDAsMSwxLjIxNi0yLjA1NWMtMS4wODYuMjcxLTEuNTEuMTY5LTEuNzc1LDEuMjcxLS40MDUtLjYzMy0uNjE5LTEuNDEyLTEuNC0xLjY4N1ptLjI4NSw0LjYwOS0uNTYxLDEuNjgyLjUyLDEuMDRoMi4zMjFsLjUyLTEuMDQtLjU2LTEuNjgyaC0yLjI0Wk0yMi45NywyNC4xMmwuODc4LDEuMzE3aDYuNmwuODc4LTEu'+
			'MzE3Wm0zLjA0MSwyLjEwNy0xLjI2NCwzLjE2LjYyOSwzLjc3NUgyOC45MmwuNjI5LTMuNzc1LTEuMjY0LTMuMTZIMjYuMDFaTTIyLjI2MiwyOC44MWEuMjQ5LjI0OSwwLDAsMC0uMDYyLjAwNWMtLjQzNS4wOTEtLjUxOSwxLjEtLjEzOSwxLjMyNS4yMjIuMTM0LjU4Ny0uMTc5LjY0Ny0uNDMyQzIyLjc4MywyOS40LDIyLjU2NiwyOC44MjMsMjIuMjYyLDI4LjgxWk0zMi42LDI5LjNjLS4zLjAxMy0uMjczLjI3Ni0uMi41ODkuMDYuMjUyLjE0Ny42NjQuMzY5LjUzLjI3Ni0uMi4zMzEtLjk1OC0uMTcxLTEuMTE4Wm0tMTUuNjI3LjI3NWMtLjgwNy4wMTguMSwxLjY4Ni4zNDcsMS41NzktLjI4Mi0uOT'+
			'g4LjU0LTEuNS0uMzA3LTEuNTc5Wk0yMy4zLDMwLjJhLjE1LjE1LDAsMCwwLS4wMzIsMGMtLjA3Ni4zNC0uNTQ4LjQ5Mi0uNC42OTQuMTY0LjE5NC42MzktLjAzNC43MDktLjI3N0EuMzc5LjM3OSwwLDAsMCwyMy4zLDMwLjJabTcuMzY0LjEzOWMtLjE2MS4wMDktLjE3MS4zOTEtLjEyNi41NDcuMDcuMjQ0LjI1Ni40LjQyLjIwNy4wODktLjEzOS0uMjQ0LS4zNjgtLjI5NC0uNzU0Wm0tMTMuNjUsMy42MTJ2LjYxNEgzNy4yODd2LS42MTRabTEuMDQ1LDEuNC44NzgsMS4zMTdIMzUuMzYzbC44NzgtMS4zMTdaIiBmaWxsPSIjZmZmIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__032_walk__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="03.2_walk";
		el.ggDx=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) - 12px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__032_walk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__032_walk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("2"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("4"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getVariableValue('02_Walk') == Number("1"))) || 
				((player.getVariableValue('02_Walk') == Number("2")))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getVariableValue('02_Walk') == Number("0"))) || 
				((player.getVariableValue('02_Walk') == Number("3"))) || 
				((player.getVariableValue('02_Walk') == Number("4")))
			)
			{
				newLogicStateVisible = 4;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__032_walk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__032_walk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__032_walk.style.transition='';
				if (me.__032_walk.ggCurrentLogicStateVisible == 0) {
					me.__032_walk.style.visibility="hidden";
					me.__032_walk.ggVisible=false;
				}
				else if (me.__032_walk.ggCurrentLogicStateVisible == 1) {
					me.__032_walk.style.visibility="hidden";
					me.__032_walk.ggVisible=false;
				}
				else if (me.__032_walk.ggCurrentLogicStateVisible == 2) {
					me.__032_walk.style.visibility="hidden";
					me.__032_walk.ggVisible=false;
				}
				else if (me.__032_walk.ggCurrentLogicStateVisible == 3) {
					me.__032_walk.style.visibility=(Number(me.__032_walk.style.opacity)>0||!me.__032_walk.style.opacity)?'inherit':'hidden';
					me.__032_walk.ggVisible=true;
				}
				else if (me.__032_walk.ggCurrentLogicStateVisible == 4) {
					me.__032_walk.style.visibility="hidden";
					me.__032_walk.ggVisible=false;
				}
				else {
					me.__032_walk.style.visibility=(Number(me.__032_walk.style.opacity)>0||!me.__032_walk.style.opacity)?'inherit':'hidden';
					me.__032_walk.ggVisible=true;
				}
			}
		}
		me.__032_walk.logicBlock_visible();
		me.__032_walk.onclick=function (e) {
			player.setVariableValue('01_Drone', Number("1"));
			player.setVariableValue('02_Walk', Number("4"));
			player.openNext("{node33}","");
		}
		me.__032_walk.ggUpdatePosition=function (useTransition) {
		}
		me.__03_bottom_btn_mob.appendChild(me.__032_walk);
		el=me.__033_drone=document.createElement('div');
		els=me.__033_drone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtV2F0ZXJmYWxsIj4KICAgPHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJXYXRlcmZhbGwiIGNsaXAtcGF0aD0idXJsKCNjbGlwLVdhdGVyZmFsbCkiPgogIDxwYXRoIGlkPSJXYXRlcmZhbGwtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ljg2OSAtMjYuMT'+
			'E1KSIgZGF0YS1uYW1lPSJXYXRlcmZhbGwiIGQ9Ik0zNi4xOCwyOC42NmEyLjU2NywyLjU2NywwLDAsMC0xLjc3My44NzVjLS4xNzUuMTczLS4zNDIuMzUzLS41MDguNTMxYTIuOSwyLjksMCwwLDEsLjMzNy44MDhjLjI0NS0uMjY5LjQ4Ni0uNTQzLjcyMy0uNzc4LjQ0Mi0uNDM3LjgzNi0uNjgzLDEuMTc4LS42NDJhMS45LDEuOSwwLDAsMSwxLjMuNTYxLDcuNTQxLDcuNTQxLDAsMCwxLC43MTgsMS4xbC42NjYtLjQyYTYuOTQ0LDYuOTQ0LDAsMCwwLS44MS0xLjIyN0EyLjkyNywyLjkyNywwLDAsMCwzNi4xOCwyOC42NlpNMjIuMjI5LDI5LjRhNS4yNDcsNS4yNDcsMCwwLDAtNC4xODksMS41NzFs'+
			'LjU2My41NTJjLjc2My0uNzc4LDEuNTM0LTEuMzksMy45NDEtMS4zMjhsMS41MTEsMS40MjRoLjY1N2ExLjcsMS43LDAsMCwwLS41NTItLjk4NUMyMy41MDgsMjkuOTMsMjMuMSwyOS40LDIyLjIyOSwyOS40Wm02LjQyNC40MjljLS40NDIsMC0uODg1LjAwOS0xLjMuMDI1YTMuOTExLDMuOTExLDAsMCwxLC4yODksMS4wODljLjA0NC41MS0uNjgzLjU0LS43NzkuMTA2YTMuMTEsMy4xMSwwLDAsMC0uMzktMS4xNDljLS42NjYuMDQ0LTEuMjY2LjEtMS43NjUuMTYzLjMyLjM5Mi43ODguOTU1Ljc4OCwxLjM1OHEuMDMzLDUuODkxLS40MjUsMTEuODYyYy4wNy0uMDc0LjE0LS4xNDkuMjE1LS4yMTVBMS'+
			'44MjgsMS44MjgsMCwwLDEsMjYuNiw0Mi41aDBhMS42MTMsMS42MTMsMCwwLDEsLjMyOC4wNjFjLjAwOS0uNzI3LjAyNi0xLjM1MywwLTEuOTQ0LjIzMi4yNDUuNDY5LjQzOC43ODgtLjAyNi4wMzEuNzcxLDAsMS41NTUtLjAxMywyLjQ5Mi4wNDguMDQ4LjA4OC4xLjEzMS4xNDVhNS45NTcsNS45NTcsMCwwLDEsLjgwNiwxLjNjLjA3OS4xNjYuMTQ5LjMyOC4yMTUuNDg2cS4wODUtMy43MTEtLjEtNy40MThjLjM3Ny40OTUuNTgyLjMwNy43ODgtLjAzNXEuMTc3LDMuNzE4LjEsNy40NGEyLjY5NCwyLjY5NCwwLDAsMSwxLjgyMi0uOTksMS4yNzcsMS4yNzcsMCwwLDEsLjQ5LjEwOWwwLTEuMDQ3Yy4z'+
			'NDYuMzkuNTg3LjMuNzg4LDBsLS4wMDksMS42NzNhNS43ODQsNS43ODQsMCwwLDEsLjQyOS41MTJjLjE3MS0uMDg4LjM5LS4xOTMuNjUyLS4zMDdsLS4yNS0zLjIzNmMuMjYzLjI0MS41MjUuNDM4Ljc4OC0uMDYxbC4yMzIsM2E0LjIyNSw0LjIyNSwwLDAsMSwuODkzLS4yMTljLS40OS00LjA5LTEuMS04LjQwOC0xLjk0LTEyLjk3OWgwQTMuMjksMy4yOSwwLDAsMCwzMy4zLDMwLjZhLjU2MS41NjEsMCwwLDAtLjM4MS0uMzUzLDE2Ljg4NCwxNi44ODQsMCwwLDAtMi41MDktLjM1Miw0Ljc2Nyw0Ljc2NywwLDAsMSwuMzc3LDIuMTc1LjQuNCwwLDEsMS0uNzg4LjAwOSwzLjIwNywzLjIwNywwLDAsMC'+
			'0uNTU2LTIuMjMyQzI5LjE4MywyOS44MzYsMjguOTIsMjkuODMyLDI4LjY1MywyOS44MzJabTMuOTc2LDEuMzhjLjUsMS45MTYuOSw1LjIzMSwxLjE4Nyw3LjE4NC0uMDM5Ljc3MS0uNjIyLjU4Ny0uNzc5LjExNC0uMjg1LTEuOTcxLS43MDUtNS4zLTEuMTY5LTcuMUMzMi4zLDMxLjc0OSwzMi41NjgsMzEuNzE0LDMyLjYyOSwzMS4yMTJabS01LjU3Ljg3OGE1OC4zOTEsNTguMzkxLDAsMCwxLS4wMzEsNy4xMTZjLjAwOS40ODItLjY3LjYxNy0uNzg4LS4wNDRhNTYuODQ1LDU2Ljg0NSwwLDAsMCwuMDMxLTcuMDE5QzI2LjY2LDMyLjcyNSwyNi44OTIsMzIuNTUsMjcuMDU5LDMyLjA5Wm0yLjI1NS45'+
			'ODVhMTcuNzc0LDE3Ljc3NCwwLDAsMSwuMTcxLDIuNjIzYy0uMjguNDE2LS41MzkuMzQ2LS43ODgtLjAxOGExNy43ODQsMTcuNzg0LDAsMCwwLS4xNjItMi41MThjLjMwNy4zNzcuNTYxLjI4OS43NzktLjA4OFptMi4yOSwxLjE5MWMuMTQ5LDIuMjIuMTg4LDMuOTQxLjI0NSw2Ljc3OS0uMjE5LjIzNi0uNDI5LjUxMi0uNzg4LjAxOC0uMDU3LTIuODM4LS4xLTQuNTQxLS4yNDUtNi43NDRDMzEuMTQ0LDM0LjcyNywzMS4zOSwzNC41ODIsMzEuNiwzNC4yNjdaTTIwLjgzMiw0Mi4xODRjLS40Ny0uMDEzLS43MDguODI4LS41ODYsMS4yODMuMTYxLjYsMS41MjMsMS4wODYsMS41MjMsMS4wODZTMjEuNj'+
			'gyLDQyLjIwNiwyMC44MzIsNDIuMTg0Wm0yLjA3Ni0uMDE4YS4yNDMuMjQzLDAsMCwwLS4wNzQuMWMtLjE4NC40MzQuOTksMS4wMTIuOTksMS4wMTJzLjI1OC0uNzYyLjAyNi0xYS44MjIuODIyLDAsMCwwLS45NDEtLjExNFpNMzYuOSw0MmEuMjMyLjIzMiwwLDAsMC0uMDU3LDBjLS41MTIuMS0uNjA5LDEuMDQyLS4zNjMsMS41MjgsMCwwLC44MjMtLjQuODY3LS43ODhDMzcuMzgsNDIuNDY4LDM3LjE3LDQyLjAwOSwzNi45LDQyWm0xLjMuOWMtLjg4OS4wNDgtLjczNiwyLjU2Ni0uNzM2LDIuNTY2czEuMjEzLS40NiwxLjM2Ni0xUzM4Ljc2NCw0Mi44NjcsMzguMiw0Mi45Wm0tMTIuMzg0Ljc1OEE1'+
			'LjI4OCw1LjI4OCwwLDAsMCwyNSw0NC42ODRhMTIuMTQ0LDEyLjE0NCwwLDAsMC0uODIzLDEuNTc2bC0uMTU4LjM4MWE1LjY1NCw1LjY1NCwwLDAsMC0yLjUzMi0uNzcxLDEuMywxLjMsMCwwLDAtMS4yLjk4MSwxLjMxNCwxLjMxNCwwLDAsMCwuNCwxLjEyMWM1LjI3OS42NDgsMTMuNjEyLjkyNCwxOCwuMDE4YTEuNjQzLDEuNjQzLDAsMCwwLS41NjktMS42Niw1LjMxMyw1LjMxMywwLDAsMC0xLjk3MS0xLjA3MywzLjQzNywzLjQzNywwLDAsMC0xLjcyNS4zLDEwLjM4OCwxMC4zODgsMCwwLDAtMS4xNTYuNTQ3bC0uMzI0LjE4NC0uMi0uMzA3YTUuNjY4LDUuNjY4LDAsMCwwLS40OTUtLjYzMSwyLj'+
			'A0LDIuMDQsMCwwLDAtLjc3NS0uNTU2LDIuODI4LDIuODI4LDAsMCwwLTEuMzc5Ljg4OSw5LjA4Nyw5LjA4NywwLDAsMC0uODE0Ljk3MmwtLjQ4Mi42NzktLjIyMy0uOGExMS40OTQsMTEuNDk0LDAsMCwwLS42MzEtMS42NjgsNS4yMyw1LjIzLDAsMCwwLS42ODctMS4xMjVDMjYuNyw0My4xNTYsMjYuMzYzLDQzLjE3MywyNS44Miw0My42NTVabS03LjAxMi41NjVhLjQ1MS40NTEsMCwwLDAtLjQzMS4yYy0uMzYyLjYzMSwxLjM0OCwxLjcyMSwxLjM0OCwxLjcyMXMuMy0xLjE2LS4wNDMtMS41NDZBMS4zNCwxLjM0LDAsMCwwLDE4LjgwOCw0NC4yMloiIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+'+
			'Cg==';
		me.__033_drone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="03.3_drone";
		el.ggDx=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) - 12px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__033_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__033_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("2"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("4"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) && 
				((player.getVariableValue('03_ToggleWalk') == Number("0")))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getVariableValue('01_Drone') == Number("1")))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getVariableValue('01_Drone') == Number("0"))) || 
				((player.getVariableValue('01_Drone') == Number("2")))
			)
			{
				newLogicStateVisible = 4;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__033_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__033_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__033_drone.style.transition='';
				if (me.__033_drone.ggCurrentLogicStateVisible == 0) {
					me.__033_drone.style.visibility="hidden";
					me.__033_drone.ggVisible=false;
				}
				else if (me.__033_drone.ggCurrentLogicStateVisible == 1) {
					me.__033_drone.style.visibility="hidden";
					me.__033_drone.ggVisible=false;
				}
				else if (me.__033_drone.ggCurrentLogicStateVisible == 2) {
					me.__033_drone.style.visibility="hidden";
					me.__033_drone.ggVisible=false;
				}
				else if (me.__033_drone.ggCurrentLogicStateVisible == 3) {
					me.__033_drone.style.visibility=(Number(me.__033_drone.style.opacity)>0||!me.__033_drone.style.opacity)?'inherit':'hidden';
					me.__033_drone.ggVisible=true;
				}
				else if (me.__033_drone.ggCurrentLogicStateVisible == 4) {
					me.__033_drone.style.visibility="hidden";
					me.__033_drone.ggVisible=false;
				}
				else {
					me.__033_drone.style.visibility=(Number(me.__033_drone.style.opacity)>0||!me.__033_drone.style.opacity)?'inherit':'hidden';
					me.__033_drone.ggVisible=true;
				}
			}
		}
		me.__033_drone.logicBlock_visible();
		me.__033_drone.onclick=function (e) {
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("2"));
			player.openNext("{node12}","115.75\/-6.7\/70");
		}
		me.__033_drone.ggUpdatePosition=function (useTransition) {
		}
		me.__03_bottom_btn_mob.appendChild(me.__033_drone);
		el=me.__034_map_visible=document.createElement('div');
		els=me.__034_map_visible__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtTWFwX3Zpc2JsZSI+CiAgIDxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iTWFwX3Zpc2JsZSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtTWFwX3Zpc2JsZSkiIGRhdGEtbmFtZT0iTWFwIHZpc2JsZSI+CiAgPGcgaWQ9Ikdyb3VwXzMxNyIgdHJhbnNmb3JtPSJ0cm'+
			'Fuc2xhdGUoMC45MzkgMC45NCkiIGRhdGEtbmFtZT0iR3JvdXAgMzE3Ij4KICAgPHBhdGggaWQ9IlBhdGhfNTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEuMDY2IC0yMC45NjIpIiBkYXRhLW5hbWU9IlBhdGggNTM5IiBkPSJNOTguOTM0LDI4LjIzMnYtNi44SDkxLjU0djguMDIzWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MS4wNjYgLTE4Mi42OTMpIiBkYXRhLW5hbWU9IlBhdGggNTQwIiBkPSJNMTAxLjg5MiwxOTAuNDEsOTEuNTQsMTkyLjEydjEzLjIyNWg1LjQ0MloiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBh'+
			'dGhfNTQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjYzOSAtMjAuOTYxKSIgZGF0YS1uYW1lPSJQYXRoIDU0MSIgZD0iTTI4NS40MywyOC4wNzhsMTMuODU3LTIuMjlWMjEuNDI5SDI4NS40M1oiIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IlBhdGhfNTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDAwLjI3OSAtMjQ0LjYyNykiIGRhdGEtbmFtZT0iUGF0aCA1NDIiIGQ9Ik00MTYuNDYsMjU1LjEyYTEuODUsMS44NSwwLDEsMCwxLjg1MywxLjg1MkExLjg1NCwxLjg1NCwwLDAsMCw0MTYuNDYsMjU1LjEyWiIgZmlsbD0iI2ZmZiIvPgogICA8cGF0aCBpZD0iUGF0aF81NDMiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0yMzQuMTYzIC0xMzkuMTA3KSIgZGF0YS1uYW1lPSJQYXRoIDU0MyIgZD0iTTI0Ni4wMTYsMTQ2LjY1NGwtNC45NjYsMTUuMTA1aDE1Ljc2MVYxNDQuODdabTcuNyw0LjgwOGMtLjM3OSwxLjkwOC0yLjg1NSw2Ljk1My0yLjk2MSw3LjE3bC0uNDE2Ljg0MS0uNDExLS44NDFjLS4xMDYtLjIxNy0yLjU4Mi01LjI2Mi0yLjk2MS03LjE3YTIuNTg5LDIuNTg5LDAsMCwxLC41ODItMi4xNzYsMy42NDUsMy42NDUsMCwwLDEsNS41ODUsMEEyLjU4OSwyLjU4OSwwLDAsMSwyNTMuNzIsMTUxLjQ2MVoiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__034_map_visible__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="03.4_map_visible";
		el.ggDx=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 18px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__034_map_visible.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__034_map_visible.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('05_MapVis') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('05_MapVis') == Number("0"))) || 
				((player.getVariableValue('05_MapVis') == Number("3")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__034_map_visible.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__034_map_visible.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__034_map_visible.style.transition='';
				if (me.__034_map_visible.ggCurrentLogicStateVisible == 0) {
					me.__034_map_visible.style.visibility=(Number(me.__034_map_visible.style.opacity)>0||!me.__034_map_visible.style.opacity)?'inherit':'hidden';
					me.__034_map_visible.ggVisible=true;
				}
				else if (me.__034_map_visible.ggCurrentLogicStateVisible == 1) {
					me.__034_map_visible.style.visibility="hidden";
					me.__034_map_visible.ggVisible=false;
				}
				else {
					me.__034_map_visible.style.visibility=(Number(me.__034_map_visible.style.opacity)>0||!me.__034_map_visible.style.opacity)?'inherit':'hidden';
					me.__034_map_visible.ggVisible=true;
				}
			}
		}
		me.__034_map_visible.logicBlock_visible();
		me.__034_map_visible.onclick=function (e) {
			player.setVariableValue('06_TourMap', Number("1"));
			player.setVariableValue('12_PA_Logo', Number("0"));
			player.setVariableValue('10_VTtitle', Number("0"));
			if (
				(
					((player.getVariableValue('02_Walk') == Number("1")))
				)
			) {
				player.setVariableValue('13_Map_drone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('01_Drone') == Number("1")))
				)
			) {
				player.setVariableValue('14_Map_walk', Number("1"));
			}
		}
		me.__034_map_visible.ggUpdatePosition=function (useTransition) {
		}
		me.__03_bottom_btn_mob.appendChild(me.__034_map_visible);
		me.divSkin.appendChild(me.__03_bottom_btn_mob);
		el=me.__04_right_thumbnail_mob=document.createElement('div');
		el.ggId="04_right_thumbnail_MOB";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__04_right_thumbnail_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__04_right_thumbnail_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__04_right_thumbnail_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__04_right_thumbnail_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__04_right_thumbnail_mob.style.transition='';
				if (me.__04_right_thumbnail_mob.ggCurrentLogicStateVisible == 0) {
					me.__04_right_thumbnail_mob.style.visibility=(Number(me.__04_right_thumbnail_mob.style.opacity)>0||!me.__04_right_thumbnail_mob.style.opacity)?'inherit':'hidden';
					me.__04_right_thumbnail_mob.ggVisible=true;
				}
				else if (me.__04_right_thumbnail_mob.ggCurrentLogicStateVisible == 1) {
					me.__04_right_thumbnail_mob.style.visibility="hidden";
					me.__04_right_thumbnail_mob.ggVisible=false;
				}
				else {
					me.__04_right_thumbnail_mob.style.visibility=(Number(me.__04_right_thumbnail_mob.style.opacity)>0||!me.__04_right_thumbnail_mob.style.opacity)?'inherit':'hidden';
					me.__04_right_thumbnail_mob.ggVisible=true;
				}
			}
		}
		me.__04_right_thumbnail_mob.logicBlock_visible();
		me.__04_right_thumbnail_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__041_background=document.createElement('div');
		el.ggId="04.1_background";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='background: black; border-top-left-radius: 5px; border-bottom-left-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__041_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__041_background.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('07_Bottom_menu_background') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__041_background.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__041_background.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__041_background.style.transition='';
				if (me.__041_background.ggCurrentLogicStateVisible == 0) {
					me.__041_background.style.visibility=(Number(me.__041_background.style.opacity)>0||!me.__041_background.style.opacity)?'inherit':'hidden';
					me.__041_background.ggVisible=true;
				}
				else if (me.__041_background.ggCurrentLogicStateVisible == 1) {
					me.__041_background.style.visibility="hidden";
					me.__041_background.ggVisible=false;
				}
				else {
					me.__041_background.style.visibility=(Number(me.__041_background.style.opacity)>0||!me.__041_background.style.opacity)?'inherit':'hidden';
					me.__041_background.ggVisible=true;
				}
			}
		}
		me.__041_background.logicBlock_visible();
		me.__041_background.ggUpdatePosition=function (useTransition) {
		}
		me.__04_right_thumbnail_mob.appendChild(me.__041_background);
		el=me.__042_thumbnail_btn=document.createElement('div');
		els=me.__042_thumbnail_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iR2FsbGVyeSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSI+CiA8ZyBpZD0iR2FsbGVyeS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBkYXRhLW5hbWU9IkdhbGxlcnkiPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTU5OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTU5OCIgd2lkdGg9IjkiIHJ4PSIyIiBoZWlnaHQ9IjkiIGZpbGw9IiNmZmYiLz4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE1OTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKD'+
			'EyIDApIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNTk5IiB3aWR0aD0iOSIgcng9IjIiIGhlaWdodD0iOSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTYwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgMTIpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNjAwIiB3aWR0aD0iOSIgcng9IjIiIGhlaWdodD0iOSIgZmlsbD0iI2ZmZiIvPgogIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTYwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMikiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE2MDEiIHdpZHRoPSI5IiByeD0iMiIgaGVpZ2h0PSI5IiBmaWxsPSIjZmZmIi8+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me.__042_thumbnail_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="04.2_thumbnail_btn";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__042_thumbnail_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__042_thumbnail_btn.onclick=function (e) {
			me.__042_thumbnail_btn.style.transition='none';
			me.__042_thumbnail_btn.style.visibility='hidden';
			me.__042_thumbnail_btn.ggVisible=false;
			if (
				(
					((player.getVariableValue('01_Drone') == Number("1")))
				)
			) {
				player.setVariableValue('01_Drone', Number("2"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("2")))
				)
			) {
				player.setVariableValue('02_Walk', Number("3"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("1")))
				)
			) {
				player.setVariableValue('02_Walk', Number("0"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("0")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("3")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("2"));
			}
			if (
				(
					((player.getVariableValue('03_ToggleWalk') == Number("2")))
				)
			) {
				player.setVariableValue('03_ToggleWalk', Number("1"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("1")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("0"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("2")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("3"));
			}
			player.setVariableValue('07_Bottom_menu_background', Number("0"));
			me.__051_thumbnail_close.style.transition='none';
			me.__051_thumbnail_close.style.opacity='1';
			me.__051_thumbnail_close.style.visibility=me.__051_thumbnail_close.ggVisible?'inherit':'hidden';
		}
		me.__042_thumbnail_btn.ggUpdatePosition=function (useTransition) {
		}
		me.__04_right_thumbnail_mob.appendChild(me.__042_thumbnail_btn);
		me.divSkin.appendChild(me.__04_right_thumbnail_mob);
		el=me.__05_right_thumbnail_donewalk_mob=document.createElement('div');
		el.ggId="05_right_thumbnail_DoneWalk_MOB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 11%;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__05_right_thumbnail_donewalk_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__05_right_thumbnail_donewalk_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__05_right_thumbnail_donewalk_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__05_right_thumbnail_donewalk_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__05_right_thumbnail_donewalk_mob.style.transition='';
				if (me.__05_right_thumbnail_donewalk_mob.ggCurrentLogicStateVisible == 0) {
					me.__05_right_thumbnail_donewalk_mob.style.visibility=(Number(me.__05_right_thumbnail_donewalk_mob.style.opacity)>0||!me.__05_right_thumbnail_donewalk_mob.style.opacity)?'inherit':'hidden';
					me.__05_right_thumbnail_donewalk_mob.ggVisible=true;
				}
				else if (me.__05_right_thumbnail_donewalk_mob.ggCurrentLogicStateVisible == 1) {
					me.__05_right_thumbnail_donewalk_mob.style.visibility="hidden";
					me.__05_right_thumbnail_donewalk_mob.ggVisible=false;
				}
				else {
					me.__05_right_thumbnail_donewalk_mob.style.visibility=(Number(me.__05_right_thumbnail_donewalk_mob.style.opacity)>0||!me.__05_right_thumbnail_donewalk_mob.style.opacity)?'inherit':'hidden';
					me.__05_right_thumbnail_donewalk_mob.ggVisible=true;
				}
			}
		}
		me.__05_right_thumbnail_donewalk_mob.logicBlock_visible();
		me.__05_right_thumbnail_donewalk_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__051_thumbnail_close=document.createElement('div');
		els=me.__051_thumbnail_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtQ2xvc2UiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkNsb3NlIiBjbGlwLXBhdGg9InVybCgjY2xpcC1DbG9zZSkiPgogIDxnIGlkPSJDbG9zZS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNiAtNykiIGRhdGEtbmFtZT0iQ2xvc2UiPgogICA8Y2'+
			'lyY2xlIGlkPSJFbGxpcHNlXzEiIGN5PSIxMSIgY3g9IjExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDkpIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgcj0iMTEiLz4KICAgPGcgaWQ9Ikdyb3VwXzI2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDM0IDE1LjAzNCkiIGRhdGEtbmFtZT0iR3JvdXAgMjY3Ij4KICAgIDxsaW5lIGlkPSJMaW5lXzEiIHkxPSI5Ljg3NSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGRhdGEtbmFtZT0iTGluZSAxIiB4MT0iOS44NzUiIGZpbGw9Im5vbmUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzIiIHgyPSI5Ljg3NSIgeTE9IjkuODc1IiBzdHJva2U9IiNm'+
			'ZmYiIHN0cm9rZS13aWR0aD0iMiIgZGF0YS1uYW1lPSJMaW5lIDIiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__051_thumbnail_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="05.1_thumbnail_close";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__051_thumbnail_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__051_thumbnail_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('01_Drone') == Number("2")))
				)
			) {
				player.setVariableValue('01_Drone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("3")))
				)
			) {
				player.setVariableValue('02_Walk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("0")))
				)
			) {
				player.setVariableValue('02_Walk', Number("1"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("1")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("0"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("2")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("3"));
			}
			if (
				(
					((player.getVariableValue('03_ToggleWalk') == Number("1")))
				)
			) {
				player.setVariableValue('03_ToggleWalk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("0")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("1"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("3")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("2"));
			}
			player.setVariableValue('07_Bottom_menu_background', Number("1"));
			me.__042_thumbnail_btn.style.transition='none';
			me.__042_thumbnail_btn.style.visibility=(Number(me.__042_thumbnail_btn.style.opacity)>0||!me.__042_thumbnail_btn.style.opacity)?'inherit':'hidden';
			me.__042_thumbnail_btn.ggVisible=true;
			me.__051_thumbnail_close.style.transition='none';
			me.__051_thumbnail_close.style.opacity='0';
			me.__051_thumbnail_close.style.visibility='hidden';
		}
		me.__051_thumbnail_close.ggUpdatePosition=function (useTransition) {
		}
		me.__05_right_thumbnail_donewalk_mob.appendChild(me.__051_thumbnail_close);
		el=me.__052_toggle_walk=document.createElement('div');
		els=me.__052_toggle_walk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAgMzIiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtVG9nZ2xlX1dhdGVyX0ZvdW50YWluIj4KICAgPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjMyIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJUb2dnbGVfV2F0ZXJfRm91bnRhaW4iIGNsaXAtcGF0aD0idXJsKCNjbGlwLVRvZ2dsZV9XYXRlcl9Gb3VudGFpbikiIGRhdGEtbmFtZT0iVG9nZ2xlIOKAkyBXYX'+
			'RlciBGb3VudGFpbiI+CiAgPHJlY3QgaWQ9IlJlY3RhbmdsZV82MDUiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDYwNSIgd2lkdGg9IjcwIiByeD0iMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzI2OTlmYiIvPgogIDxnIGlkPSJXYXRlcmZhbGwiPgogICA8cGF0aCBpZD0id2F0ZXJmYWxsLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMjQyIC0yMy44MzkpIiBkPSJNMzguNDEsMjguNjZhMi44ODIsMi44ODIsMCwwLDAtMS45OTIuOTgyYy0uMi4xOTQtLjM4NC40LS41Ny42YTMuMjUzLDMuMjUzLDAsMCwxLC4zNzkuOTA4Yy4yNzUtLjMuNTQ2LS42MS44MTEtLjg3My41LS40OTEuOTM5'+
			'LS43NjcsMS4zMjMtLjcyMWEyLjEzLDIuMTMsMCwwLDEsMS40NTYuNjMsOC40NjgsOC40NjgsMCwwLDEsLjgwNiwxLjIzOGwuNzQ3LS40NzFhNy44LDcuOCwwLDAsMC0uOTEtMS4zNzdBMy4yODcsMy4yODcsMCwwLDAsMzguNDEsMjguNjZabS0xNS42NjcuODM0YTUuODkyLDUuODkyLDAsMCwwLTQuNywxLjc2NGwuNjMyLjYyYy44NTctLjg3NCwxLjcyMy0xLjU2MSw0LjQyNi0xLjQ5MWwxLjcsMS42aC43MzhhMS45LDEuOSwwLDAsMC0uNjItMS4xMDZDMjQuMTgsMzAuMDg3LDIzLjcyNywyOS40OTIsMjIuNzQ0LDI5LjQ5NFptNy4yMTQuNDgxYy0uNSwwLS45OTMuMDEtMS40NTYuMDI4YTQuMzkyLD'+
			'QuMzkyLDAsMCwxLC4zMjUsMS4yMjNjLjA0OS41NzItLjc2Ny42MDctLjg3NS4xMTlhMy40OTIsMy40OTIsMCwwLDAtLjQzOC0xLjI5Yy0uNzQ3LjA0OS0xLjQyMS4xMTYtMS45ODIuMTgzLjM1OS40NC44ODUsMS4wNzIuODg1LDEuNTI1cS4wMzcsNi42MTYtLjQ3NywxMy4zMjFjLjA3OS0uMDg0LjE1Ny0uMTY3LjI0MS0uMjQxYTIuMDUzLDIuMDUzLDAsMCwxLDEuNDc1LS42MzloMGExLjgxMSwxLjgxMSwwLDAsMSwuMzY5LjA2OWMuMDEtLjgxNi4wMy0xLjUxOSwwLTIuMTgzLjI2MS4yNzUuNTI2LjQ5Mi44ODUtLjAzLjAzNC44NjUsMCwxLjc0Ni0uMDE1LDIuOC4wNTQuMDU0LjEuMTA4LjE0OC4x'+
			'NjJhNi42OSw2LjY5LDAsMCwxLC45LDEuNDU2Yy4wODkuMTg3LjE2Ny4zNjkuMjQxLjU0NnEuMS00LjE2Ny0uMTA4LTguMzNjLjQyMy41NTYuNjU0LjM0NC44ODUtLjAzOXEuMiw0LjE3NS4xMDgsOC4zNTVBMy4wMjUsMy4wMjUsMCwwLDEsMzMuMTI5LDQ1LjlhMS40MzQsMS40MzQsMCwwLDEsLjU1MS4xMjNsMC0xLjE3NWMuMzg4LjQzOC42NTkuMzM5Ljg4NSwwbC0uMDEsMS44NzhhNi41LDYuNSwwLDAsMSwuNDgyLjU3NWMuMTkyLS4xLjQzOC0uMjE2LjczMy0uMzQ0bC0uMjgtMy42MzRjLjMuMjcuNTkuNDkyLjg4NS0uMDY5bC4yNjEsMy4zNjhhNC43NDQsNC43NDQsMCwwLDEsMS0uMjQ2Yy0uNT'+
			'UxLTQuNTkzLTEuMjM5LTkuNDQxLTIuMTc4LTE0LjU3NGgwYTMuNywzLjcsMCwwLDAtLjI5LS45NjIuNjMuNjMsMCwwLDAtLjQyOC0uNCwxOC45NiwxOC45NiwwLDAsMC0yLjgxOC0uNCw1LjM1Myw1LjM1MywwLDAsMSwuNDIzLDIuNDQyLjQ0Ny40NDcsMCwxLDEtLjg4NS4wMSwzLjYsMy42LDAsMCwwLS42MjUtMi41MDdDMzAuNTUzLDI5Ljk4MSwzMC4yNTgsMjkuOTc2LDI5Ljk1OCwyOS45NzZabTQuNDY1LDEuNTVjLjU2MSwyLjE1MiwxLjAxMyw1Ljg3NCwxLjMzMyw4LjA2Ny0uMDQ0Ljg2NS0uNy42NTktLjg3NS4xMjgtLjMyLTIuMjEzLS43OTItNS45NTUtMS4zMTMtNy45N0MzNC4wNTQsMzIu'+
			'MTI5LDM0LjM1NCwzMi4wOSwzNC40MjMsMzEuNTI2Wm0tNi4yNTUuOTg2YTY1LjU3LDY1LjU3LDAsMCwxLS4wMzQsNy45OTFjLjAxLjU0MS0uNzUyLjY5My0uODg1LS4wNDlhNjMuODM0LDYzLjgzNCwwLDAsMCwuMDM0LTcuODgyQzI3LjcyLDMzLjIyNSwyNy45ODEsMzMuMDI5LDI4LjE2OCwzMi41MTJaTTMwLjcsMzMuNjE5YTE5Ljk2LDE5Ljk2LDAsMCwxLC4xOTIsMi45NDVjLS4zMTUuNDY3LS42LjM4OC0uODg1LS4wMmExOS45NywxOS45NywwLDAsMC0uMTgyLTIuODI3Yy4zNDQuNDIzLjYyOS4zMjUuODc1LS4xWm0yLjU3MiwxLjMzOGMuMTY3LDIuNDkzLjIxMSw0LjQyNi4yNzUsNy42MTItLj'+
			'I0Ni4yNjYtLjQ4Mi41NzUtLjg4NS4wMi0uMDY0LTMuMTg2LS4xMDgtNS4xLS4yNzUtNy41NzNDMzIuNzU2LDM1LjQ3MiwzMy4wMzEsMzUuMzEsMzMuMjcyLDM0Ljk1NlptLTEyLjEsOC44OTFjLS41MjgtLjAxNS0uNzk1LjkyOS0uNjU4LDEuNDQxLjE4MS42NzksMS43MSwxLjIxOSwxLjcxLDEuMjE5UzIyLjEyOSw0My44NzEsMjEuMTc1LDQzLjg0N1ptMi4zMzEtLjAyYS4yNzMuMjczLDAsMCwwLS4wODQuMTEzYy0uMjA3LjQ4NywxLjExMSwxLjEzNiwxLjExMSwxLjEzNnMuMjktLjg1Ni4wMy0xLjEyMWEuOTIzLjkyMywwLDAsMC0xLjA1Ny0uMTI4Wm0xNS43MTEtLjE4N2EuMjYuMjYsMCwwLDAt'+
			'LjA2NCwwYy0uNTc1LjEwOC0uNjg0LDEuMTctLjQwOCwxLjcxNiwwLDAsLjkyNC0uNDQ3Ljk3NC0uODg1QzM5Ljc1OCw0NC4xNjYsMzkuNTIyLDQzLjY1LDM5LjIxNyw0My42NFptMS40NjUsMS4wMDhjLTEsLjA1NC0uODI2LDIuODgyLS44MjYsMi44ODJzMS4zNjItLjUxNiwxLjUzNC0xLjEyNlM0MS4zMTIsNDQuNjE0LDQwLjY4Miw0NC42NDhaTTI2Ljc3Niw0NS41YTUuOTM4LDUuOTM4LDAsMCwwLS45MiwxLjE1NiwxMy42MzcsMTMuNjM3LDAsMCwwLS45MjQsMS43N2wtLjE3Ny40MjhhNi4zNDksNi4zNDksMCwwLDAtMi44NDMtLjg2NSwxLjQ1OSwxLjQ1OSwwLDAsMC0xLjM0OSwxLjEsMS40Nz'+
			'UsMS40NzUsMCwwLDAsLjQ0NywxLjI1OWM1LjkyOC43MjgsMTUuMjg2LDEuMDM4LDIwLjIxMy4wMmExLjg0NSwxLjg0NSwwLDAsMC0uNjM5LTEuODY0LDUuOTY2LDUuOTY2LDAsMCwwLTIuMjEzLTEuMiwzLjg2LDMuODYsMCwwLDAtMS45MzcuMzM5LDExLjY2NSwxMS42NjUsMCwwLDAtMS4zLjYxNWwtLjM2NC4yMDctLjIyNi0uMzQ0YTYuMzY1LDYuMzY1LDAsMCwwLS41NTYtLjcwOCwyLjI5MSwyLjI5MSwwLDAsMC0uODctLjYyNCwzLjE3NiwzLjE3NiwwLDAsMC0xLjU0OSwxLDEwLjIsMTAuMiwwLDAsMC0uOTE1LDEuMDkybC0uNTQxLjc2Mi0uMjUxLS45YTEyLjkwOCwxMi45MDgsMCwwLDAtLjcw'+
			'OC0xLjg3Myw1Ljg3NCw1Ljg3NCwwLDAsMC0uNzcyLTEuMjY0QzI3Ljc2LDQ0LjkzOCwyNy4zODYsNDQuOTU4LDI2Ljc3Niw0NS41Wm0tNy44NzQuNjM0YS41MDcuNTA3LDAsMCwwLS40ODQuMjIxYy0uNDA3LjcwOCwxLjUxNCwxLjkzMywxLjUxNCwxLjkzM3MuMzM4LTEuMy0uMDQ5LTEuNzM2QTEuNSwxLjUsMCwwLDAsMTguOSw0Ni4xMzNaIiBmaWxsPSIjZmZmIi8+CiAgPC9nPgogIDxnIGlkPSJXYXRlcmZvdW50YWluIj4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV82MDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5IDMpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDciIHdpZHRoPSIyNyIgcng9Ij'+
			'IiIGhlaWdodD0iMjciIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IndhdGVyLWZvdW50YWluLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4zOTIgLTEwLjMzNykiIGQ9Ik0yNS43NDMsMTZhNi4wNjIsNi4wNjIsMCwwLDEsLjgwOSwyLjQxNWMtLjc4NC0xLjIzNS0xLjYxMi0xLjc1Ny0yLjQzNC0xLjc0OC0zLjMuMDM1LTYuNSw4LjY0LTYuMzM3LDEzLjkxM2EuNTMyLjUzMiwwLDAsMC0uMS4wNDhjLS4yNjcuMTU5LS4xMTguNjE1LS4yMzkuOS0uMTQ3LjM0NC0uNTMzLjU4OS0uNTgyLjk2YTEuOTY0LDEuOTY0LDAsMCwwLC4wMjcuNjc0aDcuNDcxYTMuMjkxLDMuMjkxLDAs'+
			'MCwwLTEuMjI3LTEuNjhjLS4xNzctLjEyMy0uNDY3LjA4OC0uNjQ3LS4wMzEtLjM3Mi0uMjQ1LS4xNzUtMS4wMjktLjU4Ni0xLjJhLjk4NS45ODUsMCwwLDAtLjgwNy4wNTljLS4yMjItNS40MSwxLjM0MS0xMy4yLDQuODQxLTExLjY1Ni0xLjE2LjI3OS0xLjY3MS42OTUtMS45NDcsMi4yNjUuMzYtLjcuNjYyLTEuMjU3LDEuNzY0LTEuMDg3bDMuMDgyLDBzMS42LDEuODQxLDEuODM0LDIuMjU3Yy4yNS40MzktLjcwNi0zLjA4MS0xLjU1NC0zLjUyNCwyLjk3Mi4xLDQuMjcyLDguMTE1LDQuMDY2LDEzLjEyOC0uMjcxLS4xMTktMS4wNTctMS40NjQtMS4zMjQtMS4zNTFhMS4zMDYsMS4zMDYsMCwwLD'+
			'AtLjc1NS43Yy0uMDg0LjItLjAzNy45OTQtLjIxNCwxLjExN2EyLjU0MiwyLjU0MiwwLDAsMC0uOTYyLDEuMDFoNy41NzNhMTAuNjM4LDEwLjYzOCwwLDAsMC0uNTA5LTEuNTQxYy0uMTIyLS4yODYsMS40LTEuODcxLDAtMS4wODlhMi4zNDEsMi4zNDEsMCwwLDEtLjQ2Ni4wNDhjLjE2NS01LjI3My0zLjAzNC0xMy44NzgtNi4zMzctMTMuOTEzLS44MzQtLjAwOS0xLjY3NS41MjktMi40NywxLjhhNS4wMzEsNS4wMzEsMCwwLDEsMS4yMTYtMi4wNTVjLTEuMDg2LjI3MS0xLjUxLjE2OS0xLjc3NSwxLjI3MS0uNDA1LS42MzMtLjYxOS0xLjQxMi0xLjQtMS42ODdabS4yODUsNC42MDktLjU2MSwxLjY4'+
			'Mi41MiwxLjA0aDIuMzIxbC41Mi0xLjA0LS41Ni0xLjY4MmgtMi4yNFpNMjIuOTcsMjQuMTJsLjg3OCwxLjMxN2g2LjZsLjg3OC0xLjMxN1ptMy4wNDEsMi4xMDctMS4yNjQsMy4xNi42MjksMy43NzVIMjguOTJsLjYyOS0zLjc3NS0xLjI2NC0zLjE2SDI2LjAxWk0yMi4yNjIsMjguODFhLjI0OS4yNDksMCwwLDAtLjA2Mi4wMDVjLS40MzUuMDkxLS41MTksMS4xLS4xMzksMS4zMjUuMjIyLjEzNC41ODctLjE3OS42NDctLjQzMkMyMi43ODMsMjkuNCwyMi41NjYsMjguODIzLDIyLjI2MiwyOC44MVpNMzIuNiwyOS4zYy0uMy4wMTMtLjI3My4yNzYtLjIuNTg5LjA2LjI1Mi4xNDcuNjY0LjM2OS41My'+
			'4yNzYtLjIuMzMxLS45NTgtLjE3MS0xLjExOFptLTE1LjYyNy4yNzVjLS44MDcuMDE4LjEsMS42ODYuMzQ3LDEuNTc5LS4yODItLjk4OC41NC0xLjUtLjMwNy0xLjU3OVpNMjMuMywzMC4yYS4xNS4xNSwwLDAsMC0uMDMyLDBjLS4wNzYuMzQtLjU0OC40OTItLjQuNjk0LjE2NC4xOTQuNjM5LS4wMzQuNzA5LS4yNzdBLjM3OS4zNzksMCwwLDAsMjMuMywzMC4yWm03LjM2NC4xMzljLS4xNjEuMDA5LS4xNzEuMzkxLS4xMjYuNTQ3LjA3LjI0NC4yNTYuNC40Mi4yMDcuMDg5LS4xMzktLjI0NC0uMzY4LS4yOTQtLjc1NFptLTEzLjY1LDMuNjEydi42MTRIMzcuMjg3di0uNjE0Wm0xLjA0NSwxLjQuODc4'+
			'LDEuMzE3SDM1LjM2M2wuODc4LTEuMzE3WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__052_toggle_walk__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="05.2_toggle_walk";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__052_toggle_walk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__052_toggle_walk.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('03_ToggleWalk') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('03_ToggleWalk') == Number("0"))) || 
				((player.getViewerSize(true).width == 2))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__052_toggle_walk.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__052_toggle_walk.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__052_toggle_walk.style.transition='opacity 0s';
				if (me.__052_toggle_walk.ggCurrentLogicStateAlpha == 0) {
					me.__052_toggle_walk.style.visibility=me.__052_toggle_walk.ggVisible?'inherit':'hidden';
					me.__052_toggle_walk.style.opacity=1;
				}
				else if (me.__052_toggle_walk.ggCurrentLogicStateAlpha == 1) {
					me.__052_toggle_walk.style.visibility="hidden";
					me.__052_toggle_walk.style.opacity=0;
				}
				else {
					me.__052_toggle_walk.style.visibility="hidden";
					me.__052_toggle_walk.style.opacity=0;
				}
			}
		}
		me.__052_toggle_walk.logicBlock_alpha();
		me.__052_toggle_walk.onclick=function (e) {
			player.setVariableValue('03_ToggleWalk', Number("0"));
			player.setVariableValue('04_ToggleDrone', Number("2"));
		}
		me.__052_toggle_walk.ggUpdatePosition=function (useTransition) {
		}
		me.__05_right_thumbnail_donewalk_mob.appendChild(me.__052_toggle_walk);
		el=me.__053_toggle_drone=document.createElement('div');
		els=me.__053_toggle_drone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAgMzIiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtVG9nZ2xlX1dhdGVyZmFsbCI+CiAgIDxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iVG9nZ2xlX1dhdGVyZmFsbCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtVG9nZ2xlX1dhdGVyZmFsbCkiIGRhdGEtbmFtZT0iVG9nZ2xlIOKAkyBXYXRlcmZhbGwiPgogIDxyZW'+
			'N0IGlkPSJSZWN0YW5nbGVfNjA1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDUiIHdpZHRoPSI3MCIgcng9IjIiIGhlaWdodD0iMzIiIGZpbGw9IiMyNjk5ZmIiLz4KICA8ZyBpZD0iV2F0ZXJmYWxsIj4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNjA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDMpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNjA5IiB3aWR0aD0iMjciIHJ4PSIyIiBoZWlnaHQ9IjI3IiBmaWxsPSIjZmZmIi8+CiAgIDxwYXRoIGlkPSJ3YXRlcmZhbGwtc3ZncmVwby1jb20iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4yNDIgLTIzLjgzOSkiIGQ9Ik0zOC40MSwyOC42NmEyLjg4'+
			'MiwyLjg4MiwwLDAsMC0xLjk5Mi45ODJjLS4yLjE5NC0uMzg0LjQtLjU3LjZhMy4yNTMsMy4yNTMsMCwwLDEsLjM3OS45MDhjLjI3NS0uMy41NDYtLjYxLjgxMS0uODczLjUtLjQ5MS45MzktLjc2NywxLjMyMy0uNzIxYTIuMTMsMi4xMywwLDAsMSwxLjQ1Ni42Myw4LjQ2OCw4LjQ2OCwwLDAsMSwuODA2LDEuMjM4bC43NDctLjQ3MWE3LjgsNy44LDAsMCwwLS45MS0xLjM3N0EzLjI4NywzLjI4NywwLDAsMCwzOC40MSwyOC42NlptLTE1LjY2Ny44MzRhNS44OTIsNS44OTIsMCwwLDAtNC43LDEuNzY0bC42MzIuNjJjLjg1Ny0uODc0LDEuNzIzLTEuNTYxLDQuNDI2LTEuNDkxbDEuNywxLjZoLjczOG'+
			'ExLjksMS45LDAsMCwwLS42Mi0xLjEwNkMyNC4xOCwzMC4wODcsMjMuNzI3LDI5LjQ5MiwyMi43NDQsMjkuNDk0Wm03LjIxNC40ODFjLS41LDAtLjk5My4wMS0xLjQ1Ni4wMjhhNC4zOTIsNC4zOTIsMCwwLDEsLjMyNSwxLjIyM2MuMDQ5LjU3Mi0uNzY3LjYwNy0uODc1LjExOWEzLjQ5MiwzLjQ5MiwwLDAsMC0uNDM4LTEuMjljLS43NDcuMDQ5LTEuNDIxLjExNi0xLjk4Mi4xODMuMzU5LjQ0Ljg4NSwxLjA3Mi44ODUsMS41MjVxLjAzNyw2LjYxNi0uNDc3LDEzLjMyMWMuMDc5LS4wODQuMTU3LS4xNjcuMjQxLS4yNDFhMi4wNTMsMi4wNTMsMCwwLDEsMS40NzUtLjYzOWgwYTEuODExLDEuODExLDAs'+
			'MCwxLC4zNjkuMDY5Yy4wMS0uODE2LjAzLTEuNTE5LDAtMi4xODMuMjYxLjI3NS41MjYuNDkyLjg4NS0uMDMuMDM0Ljg2NSwwLDEuNzQ2LS4wMTUsMi44LjA1NC4wNTQuMS4xMDguMTQ4LjE2MmE2LjY5LDYuNjksMCwwLDEsLjksMS40NTZjLjA4OS4xODcuMTY3LjM2OS4yNDEuNTQ2cS4xLTQuMTY3LS4xMDgtOC4zM2MuNDIzLjU1Ni42NTQuMzQ0Ljg4NS0uMDM5cS4yLDQuMTc1LjEwOCw4LjM1NUEzLjAyNSwzLjAyNSwwLDAsMSwzMy4xMjksNDUuOWExLjQzNCwxLjQzNCwwLDAsMSwuNTUxLjEyM2wwLTEuMTc1Yy4zODguNDM4LjY1OS4zMzkuODg1LDBsLS4wMSwxLjg3OGE2LjUsNi41LDAsMCwxLC'+
			'40ODIuNTc1Yy4xOTItLjEuNDM4LS4yMTYuNzMzLS4zNDRsLS4yOC0zLjYzNGMuMy4yNy41OS40OTIuODg1LS4wNjlsLjI2MSwzLjM2OGE0Ljc0NCw0Ljc0NCwwLDAsMSwxLS4yNDZjLS41NTEtNC41OTMtMS4yMzktOS40NDEtMi4xNzgtMTQuNTc0aDBhMy43LDMuNywwLDAsMC0uMjktLjk2Mi42My42MywwLDAsMC0uNDI4LS40LDE4Ljk2LDE4Ljk2LDAsMCwwLTIuODE4LS40LDUuMzUzLDUuMzUzLDAsMCwxLC40MjMsMi40NDIuNDQ3LjQ0NywwLDEsMS0uODg1LjAxLDMuNiwzLjYsMCwwLDAtLjYyNS0yLjUwN0MzMC41NTMsMjkuOTgxLDMwLjI1OCwyOS45NzYsMjkuOTU4LDI5Ljk3NlptNC40NjUs'+
			'MS41NWMuNTYxLDIuMTUyLDEuMDEzLDUuODc0LDEuMzMzLDguMDY3LS4wNDQuODY1LS43LjY1OS0uODc1LjEyOC0uMzItMi4yMTMtLjc5Mi01Ljk1NS0xLjMxMy03Ljk3QzM0LjA1NCwzMi4xMjksMzQuMzU0LDMyLjA5LDM0LjQyMywzMS41MjZabS02LjI1NS45ODZhNjUuNTcsNjUuNTcsMCwwLDEtLjAzNCw3Ljk5MWMuMDEuNTQxLS43NTIuNjkzLS44ODUtLjA0OWE2My44MzQsNjMuODM0LDAsMCwwLC4wMzQtNy44ODJDMjcuNzIsMzMuMjI1LDI3Ljk4MSwzMy4wMjksMjguMTY4LDMyLjUxMlpNMzAuNywzMy42MTlhMTkuOTYsMTkuOTYsMCwwLDEsLjE5MiwyLjk0NWMtLjMxNS40NjctLjYuMzg4LS'+
			'44ODUtLjAyYTE5Ljk3LDE5Ljk3LDAsMCwwLS4xODItMi44MjdjLjM0NC40MjMuNjI5LjMyNS44NzUtLjFabTIuNTcyLDEuMzM4Yy4xNjcsMi40OTMuMjExLDQuNDI2LjI3NSw3LjYxMi0uMjQ2LjI2Ni0uNDgyLjU3NS0uODg1LjAyLS4wNjQtMy4xODYtLjEwOC01LjEtLjI3NS03LjU3M0MzMi43NTYsMzUuNDcyLDMzLjAzMSwzNS4zMSwzMy4yNzIsMzQuOTU2Wm0tMTIuMSw4Ljg5MWMtLjUyOC0uMDE1LS43OTUuOTI5LS42NTgsMS40NDEuMTgxLjY3OSwxLjcxLDEuMjE5LDEuNzEsMS4yMTlTMjIuMTI5LDQzLjg3MSwyMS4xNzUsNDMuODQ3Wm0yLjMzMS0uMDJhLjI3My4yNzMsMCwwLDAtLjA4NC4x'+
			'MTNjLS4yMDcuNDg3LDEuMTExLDEuMTM2LDEuMTExLDEuMTM2cy4yOS0uODU2LjAzLTEuMTIxYS45MjMuOTIzLDAsMCwwLTEuMDU3LS4xMjhabTE1LjcxMS0uMTg3YS4yNi4yNiwwLDAsMC0uMDY0LDBjLS41NzUuMTA4LS42ODQsMS4xNy0uNDA4LDEuNzE2LDAsMCwuOTI0LS40NDcuOTc0LS44ODVDMzkuNzU4LDQ0LjE2NiwzOS41MjIsNDMuNjUsMzkuMjE3LDQzLjY0Wm0xLjQ2NSwxLjAwOGMtMSwuMDU0LS44MjYsMi44ODItLjgyNiwyLjg4MnMxLjM2Mi0uNTE2LDEuNTM0LTEuMTI2UzQxLjMxMiw0NC42MTQsNDAuNjgyLDQ0LjY0OFpNMjYuNzc2LDQ1LjVhNS45MzgsNS45MzgsMCwwLDAtLjkyLD'+
			'EuMTU2LDEzLjYzNywxMy42MzcsMCwwLDAtLjkyNCwxLjc3bC0uMTc3LjQyOGE2LjM0OSw2LjM0OSwwLDAsMC0yLjg0My0uODY1LDEuNDU5LDEuNDU5LDAsMCwwLTEuMzQ5LDEuMSwxLjQ3NSwxLjQ3NSwwLDAsMCwuNDQ3LDEuMjU5YzUuOTI4LjcyOCwxNS4yODYsMS4wMzgsMjAuMjEzLjAyYTEuODQ1LDEuODQ1LDAsMCwwLS42MzktMS44NjQsNS45NjYsNS45NjYsMCwwLDAtMi4yMTMtMS4yLDMuODYsMy44NiwwLDAsMC0xLjkzNy4zMzksMTEuNjY1LDExLjY2NSwwLDAsMC0xLjMuNjE1bC0uMzY0LjIwNy0uMjI2LS4zNDRhNi4zNjUsNi4zNjUsMCwwLDAtLjU1Ni0uNzA4LDIuMjkxLDIuMjkxLDAs'+
			'MCwwLS44Ny0uNjI0LDMuMTc2LDMuMTc2LDAsMCwwLTEuNTQ5LDEsMTAuMiwxMC4yLDAsMCwwLS45MTUsMS4wOTJsLS41NDEuNzYyLS4yNTEtLjlhMTIuOTA4LDEyLjkwOCwwLDAsMC0uNzA4LTEuODczLDUuODc0LDUuODc0LDAsMCwwLS43NzItMS4yNjRDMjcuNzYsNDQuOTM4LDI3LjM4Niw0NC45NTgsMjYuNzc2LDQ1LjVabS03Ljg3NC42MzRhLjUwNy41MDcsMCwwLDAtLjQ4NC4yMjFjLS40MDcuNzA4LDEuNTE0LDEuOTMzLDEuNTE0LDEuOTMzcy4zMzgtMS4zLS4wNDktMS43MzZBMS41LDEuNSwwLDAsMCwxOC45LDQ2LjEzM1oiLz4KICA8L2c+CiAgPGcgaWQ9IldhdGVyZm91bnRhaW4iPgogIC'+
			'A8cGF0aCBpZD0id2F0ZXItZm91bnRhaW4tc3ZncmVwby1jb20iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MiAtMTAuMzM3KSIgZD0iTTI1Ljc0MywxNmE2LjA2Miw2LjA2MiwwLDAsMSwuODA5LDIuNDE1Yy0uNzg0LTEuMjM1LTEuNjEyLTEuNzU3LTIuNDM0LTEuNzQ4LTMuMy4wMzUtNi41LDguNjQtNi4zMzcsMTMuOTEzYS41MzIuNTMyLDAsMCwwLS4xLjA0OGMtLjI2Ny4xNTktLjExOC42MTUtLjIzOS45LS4xNDcuMzQ0LS41MzMuNTg5LS41ODIuOTZhMS45NjQsMS45NjQsMCwwLDAsLjAyNy42NzRoNy40NzFhMy4yOTEsMy4yOTEsMCwwLDAtMS4yMjctMS42OGMtLjE3Ny0uMTIzLS40Njcu'+
			'MDg4LS42NDctLjAzMS0uMzcyLS4yNDUtLjE3NS0xLjAyOS0uNTg2LTEuMmEuOTg1Ljk4NSwwLDAsMC0uODA3LjA1OWMtLjIyMi01LjQxLDEuMzQxLTEzLjIsNC44NDEtMTEuNjU2LTEuMTYuMjc5LTEuNjcxLjY5NS0xLjk0NywyLjI2NS4zNi0uNy42NjItMS4yNTcsMS43NjQtMS4wODdsMy4wODIsMHMxLjYsMS44NDEsMS44MzQsMi4yNTdjLjI1LjQzOS0uNzA2LTMuMDgxLTEuNTU0LTMuNTI0LDIuOTcyLjEsNC4yNzIsOC4xMTUsNC4wNjYsMTMuMTI4LS4yNzEtLjExOS0xLjA1Ny0xLjQ2NC0xLjMyNC0xLjM1MWExLjMwNiwxLjMwNiwwLDAsMC0uNzU1LjdjLS4wODQuMi0uMDM3Ljk5NC0uMjE0LD'+
			'EuMTE3YTIuNTQyLDIuNTQyLDAsMCwwLS45NjIsMS4wMWg3LjU3M2ExMC42MzgsMTAuNjM4LDAsMCwwLS41MDktMS41NDFjLS4xMjItLjI4NiwxLjQtMS44NzEsMC0xLjA4OWEyLjM0MSwyLjM0MSwwLDAsMS0uNDY2LjA0OGMuMTY1LTUuMjczLTMuMDM0LTEzLjg3OC02LjMzNy0xMy45MTMtLjgzNC0uMDA5LTEuNjc1LjUyOS0yLjQ3LDEuOGE1LjAzMSw1LjAzMSwwLDAsMSwxLjIxNi0yLjA1NWMtMS4wODYuMjcxLTEuNTEuMTY5LTEuNzc1LDEuMjcxLS40MDUtLjYzMy0uNjE5LTEuNDEyLTEuNC0xLjY4N1ptLjI4NSw0LjYwOS0uNTYxLDEuNjgyLjUyLDEuMDRoMi4zMjFsLjUyLTEuMDQtLjU2LTEu'+
			'NjgyaC0yLjI0Wk0yMi45NywyNC4xMmwuODc4LDEuMzE3aDYuNmwuODc4LTEuMzE3Wm0zLjA0MSwyLjEwNy0xLjI2NCwzLjE2LjYyOSwzLjc3NUgyOC45MmwuNjI5LTMuNzc1LTEuMjY0LTMuMTZIMjYuMDFaTTIyLjI2MiwyOC44MWEuMjQ5LjI0OSwwLDAsMC0uMDYyLjAwNWMtLjQzNS4wOTEtLjUxOSwxLjEtLjEzOSwxLjMyNS4yMjIuMTM0LjU4Ny0uMTc5LjY0Ny0uNDMyQzIyLjc4MywyOS40LDIyLjU2NiwyOC44MjMsMjIuMjYyLDI4LjgxWk0zMi42LDI5LjNjLS4zLjAxMy0uMjczLjI3Ni0uMi41ODkuMDYuMjUyLjE0Ny42NjQuMzY5LjUzLjI3Ni0uMi4zMzEtLjk1OC0uMTcxLTEuMTE4Wm0tMT'+
			'UuNjI3LjI3NWMtLjgwNy4wMTguMSwxLjY4Ni4zNDcsMS41NzktLjI4Mi0uOTg4LjU0LTEuNS0uMzA3LTEuNTc5Wk0yMy4zLDMwLjJhLjE1LjE1LDAsMCwwLS4wMzIsMGMtLjA3Ni4zNC0uNTQ4LjQ5Mi0uNC42OTQuMTY0LjE5NC42MzktLjAzNC43MDktLjI3N0EuMzc5LjM3OSwwLDAsMCwyMy4zLDMwLjJabTcuMzY0LjEzOWMtLjE2MS4wMDktLjE3MS4zOTEtLjEyNi41NDcuMDcuMjQ0LjI1Ni40LjQyLjIwNy4wODktLjEzOS0uMjQ0LS4zNjgtLjI5NC0uNzU0Wm0tMTMuNjUsMy42MTJ2LjYxNEgzNy4yODd2LS42MTRabTEuMDQ1LDEuNC44NzgsMS4zMTdIMzUuMzYzbC44NzgtMS4zMTdaIiBmaWxs'+
			'PSIjZmZmIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me.__053_toggle_drone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="05.3_toggle_drone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0%);';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__053_toggle_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__053_toggle_drone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('04_ToggleDrone') == Number("1"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("2")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('04_ToggleDrone') == Number("0"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("3"))) || 
				((player.getVariableValue('04_ToggleDrone') == Number("4")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__053_toggle_drone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__053_toggle_drone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__053_toggle_drone.style.transition='opacity 0s';
				if (me.__053_toggle_drone.ggCurrentLogicStateAlpha == 0) {
					me.__053_toggle_drone.style.visibility=me.__053_toggle_drone.ggVisible?'inherit':'hidden';
					me.__053_toggle_drone.style.opacity=1;
				}
				else if (me.__053_toggle_drone.ggCurrentLogicStateAlpha == 1) {
					me.__053_toggle_drone.style.visibility="hidden";
					me.__053_toggle_drone.style.opacity=0;
				}
				else {
					me.__053_toggle_drone.style.visibility="hidden";
					me.__053_toggle_drone.style.opacity=0;
				}
			}
		}
		me.__053_toggle_drone.logicBlock_alpha();
		me.__053_toggle_drone.onclick=function (e) {
			player.setVariableValue('03_ToggleWalk', Number("1"));
			player.setVariableValue('04_ToggleDrone', Number("4"));
		}
		me.__053_toggle_drone.ggUpdatePosition=function (useTransition) {
		}
		me.__05_right_thumbnail_donewalk_mob.appendChild(me.__053_toggle_drone);
		me.divSkin.appendChild(me.__05_right_thumbnail_donewalk_mob);
		el=me.__06_left_menu_large=document.createElement('div');
		el.ggId="06_left_menu_large";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 145px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((145px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__06_left_menu_large.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__06_left_menu_large.ggUpdatePosition=function (useTransition) {
		}
		el=me.__061_left_menu_large_background=document.createElement('div');
		el.ggId="06.1_left_menu_large_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 141px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		hs+='background: black; border-top-right-radius: 5px; border-bottom-right-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__061_left_menu_large_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__061_left_menu_large_background.ggUpdatePosition=function (useTransition) {
		}
		me.__06_left_menu_large.appendChild(me.__061_left_menu_large_background);
		el=me.__062_information=document.createElement('div');
		els=me.__062_information__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iSW5mb3JtYXRpb25fMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjIuODkzIDIyLjg5MyIgZGF0YS1uYW1lPSJJbmZvcm1hdGlvbiAjMSIgd2lkdGg9IjIyLjg5MyIgaGVpZ2h0PSIyMi44OTMiPgogPHBhdGggaWQ9ImluZm9ybWF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiIGQ9Ik0xMy40NDcsMkExMS40NDcsMTEuNDQ3LDAsMSwwLDI0Ljg5MywxMy40NDcsMTEuNDY1LDExLjQ2NSwwLDAsMCwxMy40NDcsMlptMCwxNi4xMTdhLjg1OC44NTgsMCwxLDEsLjg1OC0uODU4QS44NTcuODU3LDAsMCwxLDEzLjQ0NywxOC4xMT'+
			'dabS44NTgtNC4wMDZhLjg1OC44NTgsMCwwLDEtMS43MTcsMFY4Ljc3NmEuODU4Ljg1OCwwLDAsMSwxLjcxNywwWiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K';
		me.__062_information__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__062_information__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iSW5mb3JtYXRpb25fSG92ZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIyLjg5MyAyMi44OTMiIGRhdGEtbmFtZT0iSW5mb3JtYXRpb24gSG92ZXIiIHdpZHRoPSIyMi44OTMiIGhlaWdodD0iMjIuODkzIj4KIDxwYXRoIGlkPSJpbmZvcm1hdGlvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBkPSJNMTMuNDQ3LDJBMTEuNDQ3LDExLjQ0NywwLDEsMCwyNC44OTMsMTMuNDQ3LDExLjQ2NSwxMS40NjUsMCwwLDAsMTMuNDQ3LDJabTAsMTYuMTE3YS44NTguODU4LDAsMSwxLC44NTgtLjg1OEEuODU3Ljg1NywwLDAsMSwxMy40ND'+
			'csMTguMTE3Wm0uODU4LTQuMDA2YS44NTguODU4LDAsMCwxLTEuNzE3LDBWOC43NzZhLjg1OC44NTgsMCwwLDEsMS43MTcsMFoiIGZpbGw9IiMyNjk5ZmIiLz4KPC9zdmc+Cg==';
		me.__062_information__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="06.2_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__062_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__062_information.onclick=function (e) {
			if (
				(
					((player.getViewerSize(true).width <= 950))
				)
			) {
			}
			if (
				(
					((player.getViewerSize(true).width >= 951))
				)
			) {
			}
			player.setVariableValue('12_PA_Logo', Number("0"));
			player.setVariableValue('10_VTtitle', Number("0"));
			if (
				(
					((player.getVariableValue('01_Drone') == Number("2")))
				)
			) {
				player.setVariableValue('01_Drone', Number("1"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("3")))
				)
			) {
				player.setVariableValue('02_Walk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('02_Walk') == Number("0")))
				)
			) {
				player.setVariableValue('02_Walk', Number("1"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("1")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("0"));
			}
			if (
				(
					((player.getVariableValue('04_ToggleDrone') == Number("2")))
				)
			) {
				player.setVariableValue('04_ToggleDrone', Number("3"));
			}
			if (
				(
					((player.getVariableValue('03_ToggleWalk') == Number("1")))
				)
			) {
				player.setVariableValue('03_ToggleWalk', Number("2"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("0")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("1"));
			}
			if (
				(
					((player.getVariableValue('05_MapVis') == Number("3")))
				)
			) {
				player.setVariableValue('05_MapVis', Number("2"));
			}
			player.setVariableValue('07_Bottom_menu_background', Number("1"));
			me.__042_thumbnail_btn.style.transition='none';
			me.__042_thumbnail_btn.style.visibility=(Number(me.__042_thumbnail_btn.style.opacity)>0||!me.__042_thumbnail_btn.style.opacity)?'inherit':'hidden';
			me.__042_thumbnail_btn.ggVisible=true;
			me.__012_thumbnail_btn.style.transition='none';
			me.__012_thumbnail_btn.style.visibility=(Number(me.__012_thumbnail_btn.style.opacity)>0||!me.__012_thumbnail_btn.style.opacity)?'inherit':'hidden';
			me.__012_thumbnail_btn.ggVisible=true;
			me.__051_thumbnail_close.style.transition='none';
			me.__051_thumbnail_close.style.opacity='0';
			me.__051_thumbnail_close.style.visibility='hidden';
			me.__021_thumbnail_close.style.transition='none';
			me.__021_thumbnail_close.style.opacity='0';
			me.__021_thumbnail_close.style.visibility='hidden';
			player.setVariableValue('06_TourMap', Number("0"));
			player.setVariableValue('05_MapVis', Number("1"));
		}
		me.__062_information.onmouseenter=function (e) {
			me.__062_information__img.style.visibility='hidden';
			me.__062_information__imgo.style.visibility='inherit';
			me.elementMouseOver['_062_information']=true;
		}
		me.__062_information.onmouseleave=function (e) {
			me.__062_information__img.style.visibility='inherit';
			me.__062_information__imgo.style.visibility='hidden';
			me.elementMouseOver['_062_information']=false;
		}
		me.__062_information.ggUpdatePosition=function (useTransition) {
		}
		me.__06_left_menu_large.appendChild(me.__062_information);
		el=me.__063_photo=document.createElement('div');
		els=me.__063_photo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtUGhvdG8iPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IlBob3RvIiBjbGlwLXBhdGg9InVybCgjY2xpcC1QaG90bykiPgogIDxnIGlkPSJHcm91cF8zMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjE2NiAtMC4xMzMpIiBkYXRhLW5hbWU9Ikdyb3'+
			'VwIDMxOSI+CiAgIDxnIGlkPSJwaG90by1jYW1lcmEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMTY2IDIuNjMzKSI+CiAgICA8cGF0aCBpZD0iUGF0aF80NjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ3LjEwNCkiIGRhdGEtbmFtZT0iUGF0aCA0NjkiIGQ9Ik0yMi4wMTEsNTAuNTgySDE5LjRsLTEuNDQtMi4xNzRhMi45OTMsMi45OTMsMCwwLDAtMi40NzMtMS4zSDkuNTExYTIuOTkzLDIuOTkzLDAsMCwwLTIuNDczLDEuM0w1LjYsNTAuNTgySDIuOTg5QTIuOTgxLDIuOTgxLDAsMCwwLDAsNTMuNTcxVjY0LjExNUEyLjk4MSwyLjk4MSwwLDAsMCwyLjk4OSw2Ny4xSDIyLjAxMUEyLjk4MSwy'+
			'Ljk4MSwwLDAsMCwyNSw2NC4xMTVWNTMuNTcxQTIuOTgxLDIuOTgxLDAsMCwwLDIyLjAxMSw1MC41ODJaTTEyLjUsNjQuNjU4YTYuNzI2LDYuNzI2LDAsMSwxLDYuNzM5LTYuNzEyQTYuNzM4LDYuNzM4LDAsMCwxLDEyLjUsNjQuNjU4Wm05LjEzLTkuODY0aC0xLjJhLjg4NC44ODQsMCwwLDEsMC0xLjc2NmgxLjA4N2EuODgyLjg4MiwwLDAsMSwuOTI0Ljg0MkEuODYuODYsMCwwLDEsMjEuNjMsNTQuNzk0WiIgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGggaWQ9IlBhdGhfNDcwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2LjExNCAtMTczLjY0NCkiIGRhdGEtbmFtZT0iUGF0aCA0NzAiIGQ9Ik0xNj'+
			'guNjE0LDE4MC43MzZhMy43MzYsMy43MzYsMCwxLDAsMy43NSwzLjcyM0EzLjc1OCwzLjc1OCwwLDAsMCwxNjguNjE0LDE4MC43MzZaIiBmaWxsPSIjZmZmIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__063_photo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__063_photo__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9ImEiIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTY2IC0wLjEzMykiPgogICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjE2NiAyLjYzMykiPgogICAgPHBhdG'+
			'ggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDcuMTA0KSIgZD0iTTIyLjAxMSw1MC41ODJIMTkuNGwtMS40NC0yLjE3NGEyLjk5MywyLjk5MywwLDAsMC0yLjQ3My0xLjNIOS41MTFhMi45OTMsMi45OTMsMCwwLDAtMi40NzMsMS4zTDUuNiw1MC41ODJIMi45ODlBMi45ODEsMi45ODEsMCwwLDAsMCw1My41NzFWNjQuMTE1QTIuOTgxLDIuOTgxLDAsMCwwLDIuOTg5LDY3LjFIMjIuMDExQTIuOTgxLDIuOTgxLDAsMCwwLDI1LDY0LjExNVY1My41NzFBMi45ODEsMi45ODEsMCwwLDAsMjIuMDExLDUwLjU4MlpNMTIuNSw2NC42NThhNi43MjYsNi43MjYsMCwxLDEsNi43MzktNi43MTJBNi43MzgsNi43'+
			'MzgsMCwwLDEsMTIuNSw2NC42NThabTkuMTMtOS44NjRoLTEuMmEuODg0Ljg4NCwwLDAsMSwwLTEuNzY2aDEuMDg3YS44ODIuODgyLDAsMCwxLC45MjQuODQyQS44Ni44NiwwLDAsMSwyMS42Myw1NC43OTRaIiBmaWxsPSIjMjY5OWZiIi8+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2LjExNCAtMTczLjY0NCkiIGQ9Ik0xNjguNjE0LDE4MC43MzZhMy43MzYsMy43MzYsMCwxLDAsMy43NSwzLjcyM0EzLjc1OCwzLjc1OCwwLDAsMCwxNjguNjE0LDE4MC43MzZaIiBmaWxsPSIjMjY5OWZiIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__063_photo__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="06.3_photo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 41px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__063_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__063_photo.onclick=function (e) {
			player.setVariableValue('12_PA_Logo', Number("0"));
			player.setVariableValue('10_VTtitle', Number("0"));
		}
		me.__063_photo.onmouseenter=function (e) {
			me.__063_photo__img.style.visibility='hidden';
			me.__063_photo__imgo.style.visibility='inherit';
			me.elementMouseOver['_063_photo']=true;
		}
		me.__063_photo.onmouseleave=function (e) {
			me.__063_photo__img.style.visibility='inherit';
			me.__063_photo__imgo.style.visibility='hidden';
			me.elementMouseOver['_063_photo']=false;
		}
		me.__063_photo.ggUpdatePosition=function (useTransition) {
		}
		me.__06_left_menu_large.appendChild(me.__063_photo);
		el=me.__066_maplocation=document.createElement('div');
		els=me.__066_maplocation__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTWFwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi45NjEgMjAuNDgyIiB3aWR0aD0iMjIuOTYxIiBoZWlnaHQ9IjIwLjQ4MiI+CiA8cGF0aCBpZD0ibWFwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0zLjA4KSIgZGF0YS1uYW1lPSJtYXAiIGQ9Ik0yMS43MzUsNS4zMTlIMTguMmEuODY3Ljg2NywwLDAsMC0uODYxLjg2MVY4Ljg1NUgxMi42NjZhNS4wNTMsNS4wNTMsMCwwLDAsLjQ5NC0xLjk2MywzLjgxMiwzLjgxMiwwLDEsMC03LjYyMywwLDQuOTI4LDQuOTI4LDAsMCwwLC41MDUsMS45NjNINS4yMjZBMy4yMjksMy4yMjksMC'+
			'wwLDAsMiwxMi4wODF2OC4yNTVhMy4yMjksMy4yMjksMCwwLDAsMy4yMjYsMy4yMjZIMjEuNzM1YTMuMjI5LDMuMjI5LDAsMCwwLDMuMjI2LTMuMjI2VjguNTQ1QTMuMjI5LDMuMjI5LDAsMCwwLDIxLjczNSw1LjMxOVpNOS4zNDgsNS45NzNhMS4wMTYsMS4wMTYsMCwxLDEsMCwyLjAzMiwxLjAxNiwxLjAxNiwwLDAsMSwwLTIuMDMyWm0yLjA4OSwxNS44NjZINS4yMjZhMS41MDksMS41MDksMCwwLDEtMS41LTEuNVYxNi40NzhINy41OGMuMjA3LDAsLjMyMS4xMTUuMzIxLjE2MUExLjk3MywxLjk3MywwLDAsMCw5Ljk0NSwxOC41MWgxLjE3MWMuMjE4LDAsLjMyMS4xMTUuMzIxLjE0OVptMTAuMyww'+
			'SDEzLjE1OXYtMy4xOGExLjk2NiwxLjk2NiwwLDAsMC0yLjA0NC0xLjg3MUg5Ljk0NWMtLjIwNywwLS4zMjEtLjExNS0uMzIxLS4xNDlBMS45NzUsMS45NzUsMCwwLDAsNy41OCwxNC43NTZIMy43MjJWMTIuMDgxYTEuNTA5LDEuNTA5LDAsMCwxLDEuNS0xLjVINi45OTRhMTcuMywxNy4zLDAsMCwwLDEuNTI3LDIsMS4xMjcsMS4xMjcsMCwwLDAsMS42NjUsMCwxOC43NiwxOC43NiwwLDAsMCwxLjUyNy0yaDUuNjI2djcuNDA1YS44NjcuODY3LDAsMCwwLC44NjEuODYxaDMuNTM2YTEuNSwxLjUsMCwxLDEsMCwzWiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K';
		me.__066_maplocation__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__066_maplocation__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTWFwX0hvdmVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi45NjEgMjAuNDgyIiBkYXRhLW5hbWU9Ik1hcCBIb3ZlciIgd2lkdGg9IjIyLjk2MSIgaGVpZ2h0PSIyMC40ODIiPgogPHBhdGggaWQ9Im1hcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMuMDgpIiBkPSJNMjEuNzM1LDUuMzE5SDE4LjJhLjg2Ny44NjcsMCwwLDAtLjg2MS44NjFWOC44NTVIMTIuNjY2YTUuMDUzLDUuMDUzLDAsMCwwLC40OTQtMS45NjMsMy44MTIsMy44MTIsMCwxLDAtNy42MjMsMCw0LjkyOCw0LjkyOCwwLDAsMCwuNTA1LDEuOTYzSDUuMjI2QTMuMj'+
			'I5LDMuMjI5LDAsMCwwLDIsMTIuMDgxdjguMjU1YTMuMjI5LDMuMjI5LDAsMCwwLDMuMjI2LDMuMjI2SDIxLjczNWEzLjIyOSwzLjIyOSwwLDAsMCwzLjIyNi0zLjIyNlY4LjU0NUEzLjIyOSwzLjIyOSwwLDAsMCwyMS43MzUsNS4zMTlaTTkuMzQ4LDUuOTczYTEuMDE2LDEuMDE2LDAsMSwxLDAsMi4wMzIsMS4wMTYsMS4wMTYsMCwwLDEsMC0yLjAzMlptMi4wODksMTUuODY2SDUuMjI2YTEuNTA5LDEuNTA5LDAsMCwxLTEuNS0xLjVWMTYuNDc4SDcuNThjLjIwNywwLC4zMjEuMTE1LjMyMS4xNjFBMS45NzMsMS45NzMsMCwwLDAsOS45NDUsMTguNTFoMS4xNzFjLjIxOCwwLC4zMjEuMTE1LjMyMS4x'+
			'NDlabTEwLjMsMEgxMy4xNTl2LTMuMThhMS45NjYsMS45NjYsMCwwLDAtMi4wNDQtMS44NzFIOS45NDVjLS4yMDcsMC0uMzIxLS4xMTUtLjMyMS0uMTQ5QTEuOTc1LDEuOTc1LDAsMCwwLDcuNTgsMTQuNzU2SDMuNzIyVjEyLjA4MWExLjUwOSwxLjUwOSwwLDAsMSwxLjUtMS41SDYuOTk0YTE3LjMsMTcuMywwLDAsMCwxLjUyNywyLDEuMTI3LDEuMTI3LDAsMCwwLDEuNjY1LDAsMTguNzYsMTguNzYsMCwwLDAsMS41MjctMmg1LjYyNnY3LjQwNWEuODY3Ljg2NywwLDAsMCwuODYxLjg2MWgzLjUzNmExLjUsMS41LDAsMSwxLDAsM1oiIGZpbGw9IiMyNjk5ZmIiLz4KPC9zdmc+Cg==';
		me.__066_maplocation__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="06.6_MapLocation";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__066_maplocation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__066_maplocation.onclick=function (e) {
			if (
				(
					((player.getViewerSize(true).width >= 951))
				)
			) {
			}
			if (
				(
					((player.getViewerSize(true).width <= 950))
				)
			) {
			}
			player.setVariableValue('12_PA_Logo', Number("0"));
			player.setVariableValue('10_VTtitle', Number("0"));
		}
		me.__066_maplocation.onmouseenter=function (e) {
			me.__066_maplocation__img.style.visibility='hidden';
			me.__066_maplocation__imgo.style.visibility='inherit';
			me.elementMouseOver['_066_maplocation']=true;
		}
		me.__066_maplocation.onmouseleave=function (e) {
			me.__066_maplocation__img.style.visibility='inherit';
			me.__066_maplocation__imgo.style.visibility='hidden';
			me.elementMouseOver['_066_maplocation']=false;
		}
		me.__066_maplocation.ggUpdatePosition=function (useTransition) {
		}
		me.__06_left_menu_large.appendChild(me.__066_maplocation);
		el=me.__067_backarrow=document.createElement('div');
		els=me.__067_backarrow__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIzIj4KIDxwYXRoIGlkPSJMZWZ0X2Fycm93XzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIDI1KSByb3RhdGUoLTkwKSIgZGF0YS1uYW1lPSJMZWZ0IGFycm93ICM2IiBkPSJNMTMuNjQ5LDJoLS4zQTExLjM2MiwxMS4zNjIsMCwwLDAsMiwxMy4zNXYuM0ExMS4zNjIsMTEuMzYyLDAsMCwwLDEzLjM1LDI1aC4zQTExLjM2MiwxMS4zNjIsMCwwLDAsMjUsMTMuNjQ5di0uM0ExMS4zNjIsMTEuMzYyLDAsMCwwLDEzLjY0OSwyWm0zLjMsMTEuMzg1YS44NTEuOD'+
			'UxLDAsMCwxLS42MS4yNTMuODE3LjgxNywwLDAsMS0uNjA5LS4yNTNsLTEuMzY5LTEuMzY4djUuMDM3YS44NjMuODYzLDAsMCwxLTEuNzI1LDBWMTIuMDE2bC0xLjM2OCwxLjM2OGEuODE3LjgxNywwLDAsMS0uNjEuMjUzLjg1MS44NTEsMCwwLDEtLjYwOS0uMjUzLjg2Mi44NjIsMCwwLDEsMC0xLjIxOUwxMi44OSw5LjMzNmEuODUxLjg1MSwwLDAsMSwxLjIxOSwwbDIuODQxLDIuODI5YS44NjMuODYzLDAsMCwxLDAsMS4yMTlaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=';
		me.__067_backarrow__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__067_backarrow__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iTGVmdF9hcnJvd182IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMi44NDUgMjIuODQ1IiBkYXRhLW5hbWU9IkxlZnQgYXJyb3cgIzYiIHdpZHRoPSIyMi44NDUiIGhlaWdodD0iMjIuODQ1Ij4KIDxwYXRoIGlkPSJhcnJvdy1sZWZ0LjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIgZD0iTTEzLjU3MSwyaC0uM0ExMS4yOSwxMS4yOSwwLDAsMCwyLDEzLjI3NHYuM0ExMS4yOSwxMS4yOSwwLDAsMCwxMy4yNzQsMjQuODQ1aC4zQTExLjI5LDExLjI5LDAsMCwwLDI0Ljg0NSwxMy41NzF2LS4zQTExLjI5LDExLjI5LDAsMCwwLDEzLj'+
			'U3MSwyWm0zLjM4MSwxMi4yNzlIMTEuOTYxbDEuMzQ4LDEuMzU5YS44NDIuODQyLDAsMCwxLDAsMS4yMTEuODU2Ljg1NiwwLDAsMS0uNjA1LjI1MS45LjksMCwwLDEtLjYwNS0uMjUxbC0yLjgxLTIuODIxYS44NjIuODYyLDAsMCwxLDAtMS4yMTFMMTIuMSwxMGEuODYyLjg2MiwwLDAsMSwxLjIxMSwwLC44NDIuODQyLDAsMCwxLDAsMS4yMTFsLTEuMzQ4LDEuMzU5aDQuOTkyYS44NTcuODU3LDAsMSwxLDAsMS43MTNaIiBmaWxsPSIjMjY5OWZiIi8+Cjwvc3ZnPgo=';
		me.__067_backarrow__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="06.7_BackArrow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__067_backarrow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__067_backarrow.onclick=function (e) {
			if (player.transitionsDisabled) {
				me.__06_left_menu_large.style.transition='none';
			} else {
				me.__06_left_menu_large.style.transition='all 300ms ease-out 0ms';
			}
			me.__06_left_menu_large.ggParameter.rx=-55;me.__06_left_menu_large.ggParameter.ry=0;
			me.__06_left_menu_large.style.transform=parameterToTransform(me.__06_left_menu_large.ggParameter);
			if (player.transitionsDisabled) {
				me.__07_left_menu_small.style.transition='none';
			} else {
				me.__07_left_menu_small.style.transition='all 300ms ease-out 0ms';
			}
			me.__07_left_menu_small.ggParameter.rx=0;me.__07_left_menu_small.ggParameter.ry=0;
			me.__07_left_menu_small.style.transform=parameterToTransform(me.__07_left_menu_small.ggParameter);
		}
		me.__067_backarrow.onmouseenter=function (e) {
			me.__067_backarrow__img.style.visibility='hidden';
			me.__067_backarrow__imgo.style.visibility='inherit';
			me.elementMouseOver['_067_backarrow']=true;
		}
		me.__067_backarrow.onmouseleave=function (e) {
			me.__067_backarrow__img.style.visibility='inherit';
			me.__067_backarrow__imgo.style.visibility='hidden';
			me.elementMouseOver['_067_backarrow']=false;
		}
		me.__067_backarrow.ggUpdatePosition=function (useTransition) {
		}
		me.__06_left_menu_large.appendChild(me.__067_backarrow);
		me.divSkin.appendChild(me.__06_left_menu_large);
		el=me.__07_left_menu_small=document.createElement('div');
		el.ggId="07_left_menu_small";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__07_left_menu_small.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__07_left_menu_small.ggUpdatePosition=function (useTransition) {
		}
		el=me.__071_left_menu_small_background=document.createElement('div');
		el.ggId="07.1_left_menu_small_background";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='background: black; border-top-right-radius: 5px; border-bottom-right-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__071_left_menu_small_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__071_left_menu_small_background.ggUpdatePosition=function (useTransition) {
		}
		me.__07_left_menu_small.appendChild(me.__071_left_menu_small_background);
		el=me.__072_left_panel_menu_btn=document.createElement('div');
		els=me.__072_left_panel_menu_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtTGVmdF9QYW5lbF9NZW51Ij4KICAgPHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjI1Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJMZWZ0X1BhbmVsX01lbnUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLUxlZnRfUGFuZWxfTWVudSkiIGRhdGEtbmFtZT0iTGVmdCBQYW5lbCBNZW51Ij4KICA8ZyBpZD0iTGVmdF'+
			'9wYW5lbF9tZW51LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGRhdGEtbmFtZT0iTGVmdCBwYW5lbCBtZW51Ij4KICAgPGcgaWQ9IlJlY3RhbmdsZV8xNTg3IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTU4NyIgZmlsbD0ibm9uZSI+CiAgICA8cmVjdCBzdHJva2U9Im5vbmUiIHdpZHRoPSIyMiIgcng9IjIiIGhlaWdodD0iMjIiLz4KICAgIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSIyMCIgeT0iMSIgeD0iMSIgaGVpZ2h0PSIyMCIgcng9IjEiLz4KICAgPC9nPgogICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzE1ODgiIGRhdGEtbmFtZT0i'+
			'UmVjdGFuZ2xlIDE1ODgiIGQ9Ik0yLDBIN0EwLDAsMCwwLDEsNywwVjIyYTAsMCwwLDAsMSwwLDBIMmEyLDIsMCwwLDEtMi0yVjJBMiwyLDAsMCwxLDIsMFoiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__072_left_panel_menu_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__072_left_panel_menu_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImIiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9ImEiIGNsaXAtcGF0aD0idXJsKCNiKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSI+CiAgIDxnIHN0cm9rZT0iIzI2OTlmYiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj4KICAgIDxyZW'+
			'N0IHN0cm9rZT0ibm9uZSIgd2lkdGg9IjIyIiByeD0iMiIgaGVpZ2h0PSIyMiIvPgogICAgPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjIwIiB5PSIxIiB4PSIxIiBoZWlnaHQ9IjIwIiByeD0iMSIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yLDBIN0EwLDAsMCwwLDEsNywwVjIyYTAsMCwwLDAsMSwwLDBIMmEyLDIsMCwwLDEtMi0yVjJBMiwyLDAsMCwxLDIsMFoiIGZpbGw9IiMyNjk5ZmIiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me.__072_left_panel_menu_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="07.2_left_panel_menu_btn";
		el.ggDx=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) - 9px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__072_left_panel_menu_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__072_left_panel_menu_btn.onclick=function (e) {
			if (player.transitionsDisabled) {
				me.__06_left_menu_large.style.transition='none';
			} else {
				me.__06_left_menu_large.style.transition='all 300ms ease-out 0ms';
			}
			me.__06_left_menu_large.ggParameter.rx=54;me.__06_left_menu_large.ggParameter.ry=0;
			me.__06_left_menu_large.style.transform=parameterToTransform(me.__06_left_menu_large.ggParameter);
			if (player.transitionsDisabled) {
				me.__07_left_menu_small.style.transition='none';
			} else {
				me.__07_left_menu_small.style.transition='all 300ms ease-out 0ms';
			}
			me.__07_left_menu_small.ggParameter.rx=-55;me.__07_left_menu_small.ggParameter.ry=0;
			me.__07_left_menu_small.style.transform=parameterToTransform(me.__07_left_menu_small.ggParameter);
		}
		me.__072_left_panel_menu_btn.onmouseenter=function (e) {
			me.__072_left_panel_menu_btn__img.style.visibility='hidden';
			me.__072_left_panel_menu_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['_072_left_panel_menu_btn']=true;
		}
		me.__072_left_panel_menu_btn.onmouseleave=function (e) {
			me.__072_left_panel_menu_btn__img.style.visibility='inherit';
			me.__072_left_panel_menu_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['_072_left_panel_menu_btn']=false;
		}
		me.__072_left_panel_menu_btn.ggUpdatePosition=function (useTransition) {
		}
		me.__07_left_menu_small.appendChild(me.__072_left_panel_menu_btn);
		me.divSkin.appendChild(me.__07_left_menu_small);
		el=me.__15_tour_map=document.createElement('div');
		el.ggId="15_tour_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__15_tour_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__15_tour_map.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).height > 1000)) && 
				((player.getViewerSize(true).width <= 1050))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__15_tour_map.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__15_tour_map.ggCurrentLogicStateSize = newLogicStateSize;
				me.__15_tour_map.style.transition='width 0s, height 0s, transform 300ms ease 0ms';
				if (me.__15_tour_map.ggCurrentLogicStateSize == 0) {
					me.__15_tour_map.style.width='60%';
					me.__15_tour_map.style.height='25%';
					skin.updateSize(me.__15_tour_map);
				}
				else {
					me.__15_tour_map.style.width='40%';
					me.__15_tour_map.style.height='40%';
					skin.updateSize(me.__15_tour_map);
				}
			}
		}
		me.__15_tour_map.logicBlock_size();
		me.__15_tour_map.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('06_TourMap') == Number("1")))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('06_TourMap') == Number("0")))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__15_tour_map.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__15_tour_map.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__15_tour_map.style.transition='width 0s, height 0s, transform 300ms ease 0ms';
				if (me.__15_tour_map.ggCurrentLogicStateScaling == 0) {
					me.__15_tour_map.ggParameter.sx = 1;
					me.__15_tour_map.ggParameter.sy = 1;
					me.__15_tour_map.style.transform=parameterToTransform(me.__15_tour_map.ggParameter);
					setTimeout(function() {skin.updateSize(me.__15_tour_map);}, 350);
				}
				else if (me.__15_tour_map.ggCurrentLogicStateScaling == 1) {
					me.__15_tour_map.ggParameter.sx = 0;
					me.__15_tour_map.ggParameter.sy = 0;
					me.__15_tour_map.style.transform=parameterToTransform(me.__15_tour_map.ggParameter);
					setTimeout(function() {skin.updateSize(me.__15_tour_map);}, 350);
				}
				else {
					me.__15_tour_map.ggParameter.sx = 0;
					me.__15_tour_map.ggParameter.sy = 0;
					me.__15_tour_map.style.transform=parameterToTransform(me.__15_tour_map.ggParameter);
					setTimeout(function() {skin.updateSize(me.__15_tour_map);}, 350);
				}
			}
		}
		me.__15_tour_map.logicBlock_scaling();
		me.__15_tour_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15_tour_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15_tour_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15_tour_map.style.transition='width 0s, height 0s, transform 300ms ease 0ms';
				if (me.__15_tour_map.ggCurrentLogicStateVisible == 0) {
					me.__15_tour_map.style.visibility=(Number(me.__15_tour_map.style.opacity)>0||!me.__15_tour_map.style.opacity)?'inherit':'hidden';
					me.__15_tour_map.ggVisible=true;
				}
				else if (me.__15_tour_map.ggCurrentLogicStateVisible == 1) {
					me.__15_tour_map.style.visibility="hidden";
					me.__15_tour_map.ggVisible=false;
				}
				else {
					me.__15_tour_map.style.visibility=(Number(me.__15_tour_map.style.opacity)>0||!me.__15_tour_map.style.opacity)?'inherit':'hidden';
					me.__15_tour_map.ggVisible=true;
				}
			}
		}
		me.__15_tour_map.logicBlock_visible();
		me.__15_tour_map.ggUpdatePosition=function (useTransition) {
		}
		el=me.__151_background=document.createElement('div');
		el.ggId="15.1_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); background-clip: padding-box; box-shadow: 2px 0px 2px rgba(45, 55, 68, 0.10); border-bottom-left-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__151_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__151_background.ggUpdatePosition=function (useTransition) {
		}
		me.__15_tour_map.appendChild(me.__151_background);
		el=me.__152_tour_map_subway=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'Subway_Plan';
		el.ggId="15.2_tour_map_subway";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__152_tour_map_subway.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__152_tour_map_subway.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('13_Map_drone') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('13_Map_drone') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__152_tour_map_subway.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__152_tour_map_subway.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__152_tour_map_subway.style.transition='';
				if (me.__152_tour_map_subway.ggCurrentLogicStateVisible == 0) {
					me.__152_tour_map_subway.style.visibility=(Number(me.__152_tour_map_subway.style.opacity)>0||!me.__152_tour_map_subway.style.opacity)?'inherit':'hidden';
					if (me.__152_tour_map_subway.ggMapNotLoaded && me.__152_tour_map_subway.ggInitMap) {
						me.__152_tour_map_subway.ggInitMap(false);
						me.__152_tour_map_subway.ggInitMapMarkers(true);
					}
					me.__152_tour_map_subway.ggVisible=true;
				}
				else if (me.__152_tour_map_subway.ggCurrentLogicStateVisible == 1) {
					me.__152_tour_map_subway.style.visibility="hidden";
					if (me.__152_tour_map_subway.ggClearMap) me.__152_tour_map_subway.ggClearMap();
					me.__152_tour_map_subway.ggVisible=false;
				}
				else {
					me.__152_tour_map_subway.style.visibility=(Number(me.__152_tour_map_subway.style.opacity)>0||!me.__152_tour_map_subway.style.opacity)?'inherit':'hidden';
					if (me.__152_tour_map_subway.ggMapNotLoaded && me.__152_tour_map_subway.ggInitMap) {
						me.__152_tour_map_subway.ggInitMap(false);
						me.__152_tour_map_subway.ggInitMapMarkers(true);
					}
					me.__152_tour_map_subway.ggVisible=true;
				}
			}
		}
		me.__152_tour_map_subway.logicBlock_visible();
		me.__152_tour_map_subway.ggUpdatePosition=function (useTransition) {
		}
		me.__15_tour_map.appendChild(me.__152_tour_map_subway);
		el=me.__153_tour_map_groundlevel=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'groundLevel';
		el.ggId="15.3_tour_map_groundLevel";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__153_tour_map_groundlevel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__153_tour_map_groundlevel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('14_Map_walk') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('14_Map_walk') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__153_tour_map_groundlevel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__153_tour_map_groundlevel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__153_tour_map_groundlevel.style.transition='';
				if (me.__153_tour_map_groundlevel.ggCurrentLogicStateVisible == 0) {
					me.__153_tour_map_groundlevel.style.visibility=(Number(me.__153_tour_map_groundlevel.style.opacity)>0||!me.__153_tour_map_groundlevel.style.opacity)?'inherit':'hidden';
					if (me.__153_tour_map_groundlevel.ggMapNotLoaded && me.__153_tour_map_groundlevel.ggInitMap) {
						me.__153_tour_map_groundlevel.ggInitMap(false);
						me.__153_tour_map_groundlevel.ggInitMapMarkers(true);
					}
					me.__153_tour_map_groundlevel.ggVisible=true;
				}
				else if (me.__153_tour_map_groundlevel.ggCurrentLogicStateVisible == 1) {
					me.__153_tour_map_groundlevel.style.visibility="hidden";
					if (me.__153_tour_map_groundlevel.ggClearMap) me.__153_tour_map_groundlevel.ggClearMap();
					me.__153_tour_map_groundlevel.ggVisible=false;
				}
				else {
					me.__153_tour_map_groundlevel.style.visibility=(Number(me.__153_tour_map_groundlevel.style.opacity)>0||!me.__153_tour_map_groundlevel.style.opacity)?'inherit':'hidden';
					if (me.__153_tour_map_groundlevel.ggMapNotLoaded && me.__153_tour_map_groundlevel.ggInitMap) {
						me.__153_tour_map_groundlevel.ggInitMap(false);
						me.__153_tour_map_groundlevel.ggInitMapMarkers(true);
					}
					me.__153_tour_map_groundlevel.ggVisible=true;
				}
			}
		}
		me.__153_tour_map_groundlevel.logicBlock_visible();
		me.__153_tour_map_groundlevel.ggUpdatePosition=function (useTransition) {
		}
		me.__15_tour_map.appendChild(me.__153_tour_map_groundlevel);
		el=me.__154_toggle_subway=document.createElement('div');
		els=me.__154_toggle_subway__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me.__154_toggle_subway__img.setAttribute('src',basePath + 'images/_154_toggle_subway.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="15.4_toggle_subway";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3%;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__154_toggle_subway.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__154_toggle_subway.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('13_Map_drone') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('13_Map_drone') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__154_toggle_subway.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__154_toggle_subway.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__154_toggle_subway.style.transition='';
				if (me.__154_toggle_subway.ggCurrentLogicStateVisible == 0) {
					me.__154_toggle_subway.style.visibility=(Number(me.__154_toggle_subway.style.opacity)>0||!me.__154_toggle_subway.style.opacity)?'inherit':'hidden';
					me.__154_toggle_subway.ggVisible=true;
				}
				else if (me.__154_toggle_subway.ggCurrentLogicStateVisible == 1) {
					me.__154_toggle_subway.style.visibility="hidden";
					me.__154_toggle_subway.ggVisible=false;
				}
				else {
					me.__154_toggle_subway.style.visibility=(Number(me.__154_toggle_subway.style.opacity)>0||!me.__154_toggle_subway.style.opacity)?'inherit':'hidden';
					me.__154_toggle_subway.ggVisible=true;
				}
			}
		}
		me.__154_toggle_subway.logicBlock_visible();
		me.__154_toggle_subway.onclick=function (e) {
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me.__154_toggle_subway.ggUpdatePosition=function (useTransition) {
		}
		me.__15_tour_map.appendChild(me.__154_toggle_subway);
		el=me.__155_toggle_groundlevel=document.createElement('div');
		els=me.__155_toggle_groundlevel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me.__155_toggle_groundlevel__img.setAttribute('src',basePath + 'images/_155_toggle_groundlevel.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="15.5_toggle_groundLevel";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3%;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__155_toggle_groundlevel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__155_toggle_groundlevel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('14_Map_walk') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('14_Map_walk') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__155_toggle_groundlevel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__155_toggle_groundlevel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__155_toggle_groundlevel.style.transition='';
				if (me.__155_toggle_groundlevel.ggCurrentLogicStateVisible == 0) {
					me.__155_toggle_groundlevel.style.visibility=(Number(me.__155_toggle_groundlevel.style.opacity)>0||!me.__155_toggle_groundlevel.style.opacity)?'inherit':'hidden';
					me.__155_toggle_groundlevel.ggVisible=true;
				}
				else if (me.__155_toggle_groundlevel.ggCurrentLogicStateVisible == 1) {
					me.__155_toggle_groundlevel.style.visibility="hidden";
					me.__155_toggle_groundlevel.ggVisible=false;
				}
				else {
					me.__155_toggle_groundlevel.style.visibility=(Number(me.__155_toggle_groundlevel.style.opacity)>0||!me.__155_toggle_groundlevel.style.opacity)?'inherit':'hidden';
					me.__155_toggle_groundlevel.ggVisible=true;
				}
			}
		}
		me.__155_toggle_groundlevel.logicBlock_visible();
		me.__155_toggle_groundlevel.onclick=function (e) {
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me.__155_toggle_groundlevel.ggUpdatePosition=function (useTransition) {
		}
		me.__15_tour_map.appendChild(me.__155_toggle_groundlevel);
		me.divSkin.appendChild(me.__15_tour_map);
		el=me.__16_tour_map_mob=document.createElement('div');
		el.ggId="16_tour_map_MOB";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16_tour_map_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16_tour_map_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16_tour_map_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16_tour_map_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16_tour_map_mob.style.transition='opacity 0s';
				if (me.__16_tour_map_mob.ggCurrentLogicStateVisible == 0) {
					me.__16_tour_map_mob.style.visibility=(Number(me.__16_tour_map_mob.style.opacity)>0||!me.__16_tour_map_mob.style.opacity)?'inherit':'hidden';
					me.__16_tour_map_mob.ggVisible=true;
				}
				else if (me.__16_tour_map_mob.ggCurrentLogicStateVisible == 1) {
					me.__16_tour_map_mob.style.visibility="hidden";
					me.__16_tour_map_mob.ggVisible=false;
				}
				else {
					me.__16_tour_map_mob.style.visibility=(Number(me.__16_tour_map_mob.style.opacity)>0||!me.__16_tour_map_mob.style.opacity)?'inherit':'hidden';
					me.__16_tour_map_mob.ggVisible=true;
				}
			}
		}
		me.__16_tour_map_mob.logicBlock_visible();
		me.__16_tour_map_mob.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('06_TourMap') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('06_TourMap') == Number("0")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__16_tour_map_mob.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__16_tour_map_mob.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__16_tour_map_mob.style.transition='opacity 0s';
				if (me.__16_tour_map_mob.ggCurrentLogicStateAlpha == 0) {
					me.__16_tour_map_mob.style.visibility=me.__16_tour_map_mob.ggVisible?'inherit':'hidden';
					me.__16_tour_map_mob.style.opacity=1;
				}
				else if (me.__16_tour_map_mob.ggCurrentLogicStateAlpha == 1) {
					me.__16_tour_map_mob.style.visibility="hidden";
					me.__16_tour_map_mob.style.opacity=0;
				}
				else {
					me.__16_tour_map_mob.style.visibility="hidden";
					me.__16_tour_map_mob.style.opacity=0;
				}
			}
		}
		me.__16_tour_map_mob.logicBlock_alpha();
		me.__16_tour_map_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__161_background=document.createElement('div');
		el.ggId="16.1_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(255,255,255,0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); background-clip: padding-box; box-shadow: 2px 0px 2px rgba(45, 55, 68, 0.10); border-bottom-left-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__161_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__161_background.ggUpdatePosition=function (useTransition) {
		}
		me.__16_tour_map_mob.appendChild(me.__161_background);
		el=me.__162_close_btn=document.createElement('div');
		els=me.__162_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtQ2xvc2UiPgogICA8cmVjdCB3aWR0aD0iMjUiIGhlaWdodD0iMjUiLz4KICA8L2NsaXBQYXRoPgogPC9kZWZzPgogPGcgaWQ9IkNsb3NlIiBjbGlwLXBhdGg9InVybCgjY2xpcC1DbG9zZSkiPgogIDxnIGlkPSJDbG9zZS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNiAtNykiIGRhdGEtbmFtZT0iQ2xvc2UiPgogICA8Y2'+
			'lyY2xlIGlkPSJFbGxpcHNlXzEiIGN5PSIxMSIgY3g9IjExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDkpIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgcj0iMTEiLz4KICAgPGcgaWQ9Ikdyb3VwXzI2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDM0IDE1LjAzNCkiIGRhdGEtbmFtZT0iR3JvdXAgMjY3Ij4KICAgIDxsaW5lIGlkPSJMaW5lXzEiIHkxPSI5Ljg3NSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGRhdGEtbmFtZT0iTGluZSAxIiB4MT0iOS44NzUiIGZpbGw9Im5vbmUiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzIiIHgyPSI5Ljg3NSIgeTE9IjkuODc1IiBzdHJva2U9IiNm'+
			'ZmYiIHN0cm9rZS13aWR0aD0iMiIgZGF0YS1uYW1lPSJMaW5lIDIiIGZpbGw9Im5vbmUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__162_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="16.2_close_btn";
		el.ggDx=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3.5%;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__162_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__162_close_btn.onclick=function (e) {
			player.setVariableValue('06_TourMap', Number("0"));
			player.setVariableValue('12_PA_Logo', Number("1"));
		}
		me.__162_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me.__16_tour_map_mob.appendChild(me.__162_close_btn);
		el=me.__163_tour_map_drone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'Water_Fall';
		el.ggId="16.3_tour_map_drone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__163_tour_map_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__163_tour_map_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('13_Map_drone') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('13_Map_drone') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__163_tour_map_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__163_tour_map_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__163_tour_map_drone.style.transition='';
				if (me.__163_tour_map_drone.ggCurrentLogicStateVisible == 0) {
					me.__163_tour_map_drone.style.visibility=(Number(me.__163_tour_map_drone.style.opacity)>0||!me.__163_tour_map_drone.style.opacity)?'inherit':'hidden';
					if (me.__163_tour_map_drone.ggMapNotLoaded && me.__163_tour_map_drone.ggInitMap) {
						me.__163_tour_map_drone.ggInitMap(false);
						me.__163_tour_map_drone.ggInitMapMarkers(true);
					}
					me.__163_tour_map_drone.ggVisible=true;
				}
				else if (me.__163_tour_map_drone.ggCurrentLogicStateVisible == 1) {
					me.__163_tour_map_drone.style.visibility="hidden";
					if (me.__163_tour_map_drone.ggClearMap) me.__163_tour_map_drone.ggClearMap();
					me.__163_tour_map_drone.ggVisible=false;
				}
				else {
					me.__163_tour_map_drone.style.visibility=(Number(me.__163_tour_map_drone.style.opacity)>0||!me.__163_tour_map_drone.style.opacity)?'inherit':'hidden';
					if (me.__163_tour_map_drone.ggMapNotLoaded && me.__163_tour_map_drone.ggInitMap) {
						me.__163_tour_map_drone.ggInitMap(false);
						me.__163_tour_map_drone.ggInitMapMarkers(true);
					}
					me.__163_tour_map_drone.ggVisible=true;
				}
			}
		}
		me.__163_tour_map_drone.logicBlock_visible();
		me.__163_tour_map_drone.ggUpdatePosition=function (useTransition) {
			if (me.__163_tour_map_drone.ggMapNotLoaded == false) {
				me.__163_tour_map_drone.ggMap.invalidateSize(false);
			}
		}
		me.__16_tour_map_mob.appendChild(me.__163_tour_map_drone);
		el=me.__164_tour_map_walk=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'Water_fountain';
		el.ggId="16.4_tour_map_walk";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__164_tour_map_walk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__164_tour_map_walk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('14_Map_walk') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('14_Map_walk') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__164_tour_map_walk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__164_tour_map_walk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__164_tour_map_walk.style.transition='';
				if (me.__164_tour_map_walk.ggCurrentLogicStateVisible == 0) {
					me.__164_tour_map_walk.style.visibility=(Number(me.__164_tour_map_walk.style.opacity)>0||!me.__164_tour_map_walk.style.opacity)?'inherit':'hidden';
					if (me.__164_tour_map_walk.ggMapNotLoaded && me.__164_tour_map_walk.ggInitMap) {
						me.__164_tour_map_walk.ggInitMap(false);
						me.__164_tour_map_walk.ggInitMapMarkers(true);
					}
					me.__164_tour_map_walk.ggVisible=true;
				}
				else if (me.__164_tour_map_walk.ggCurrentLogicStateVisible == 1) {
					me.__164_tour_map_walk.style.visibility="hidden";
					if (me.__164_tour_map_walk.ggClearMap) me.__164_tour_map_walk.ggClearMap();
					me.__164_tour_map_walk.ggVisible=false;
				}
				else {
					me.__164_tour_map_walk.style.visibility=(Number(me.__164_tour_map_walk.style.opacity)>0||!me.__164_tour_map_walk.style.opacity)?'inherit':'hidden';
					if (me.__164_tour_map_walk.ggMapNotLoaded && me.__164_tour_map_walk.ggInitMap) {
						me.__164_tour_map_walk.ggInitMap(false);
						me.__164_tour_map_walk.ggInitMapMarkers(true);
					}
					me.__164_tour_map_walk.ggVisible=true;
				}
			}
		}
		me.__164_tour_map_walk.logicBlock_visible();
		me.__164_tour_map_walk.ggUpdatePosition=function (useTransition) {
			if (me.__164_tour_map_walk.ggMapNotLoaded == false) {
				me.__164_tour_map_walk.ggMap.invalidateSize(false);
			}
		}
		me.__16_tour_map_mob.appendChild(me.__164_tour_map_walk);
		el=me.__165_toggle_drone=document.createElement('div');
		els=me.__165_toggle_drone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAgMzIiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtVG9nZ2xlX1dhdGVyZmFsbCI+CiAgIDxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8ZyBpZD0iVG9nZ2xlX1dhdGVyZmFsbCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtVG9nZ2xlX1dhdGVyZmFsbCkiIGRhdGEtbmFtZT0iVG9nZ2xlIOKAkyBXYXRlcmZhbGwiPgogIDxyZW'+
			'N0IGlkPSJSZWN0YW5nbGVfNjA1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDUiIHdpZHRoPSI3MCIgcng9IjIiIGhlaWdodD0iMzIiIGZpbGw9IiMyNjk5ZmIiLz4KICA8ZyBpZD0iV2F0ZXJmYWxsIj4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNjA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDMpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNjA5IiB3aWR0aD0iMjciIHJ4PSIyIiBoZWlnaHQ9IjI3IiBmaWxsPSIjZmZmIi8+CiAgIDxwYXRoIGlkPSJ3YXRlcmZhbGwtc3ZncmVwby1jb20iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4yNDIgLTIzLjgzOSkiIGQ9Ik0zOC40MSwyOC42NmEyLjg4'+
			'MiwyLjg4MiwwLDAsMC0xLjk5Mi45ODJjLS4yLjE5NC0uMzg0LjQtLjU3LjZhMy4yNTMsMy4yNTMsMCwwLDEsLjM3OS45MDhjLjI3NS0uMy41NDYtLjYxLjgxMS0uODczLjUtLjQ5MS45MzktLjc2NywxLjMyMy0uNzIxYTIuMTMsMi4xMywwLDAsMSwxLjQ1Ni42Myw4LjQ2OCw4LjQ2OCwwLDAsMSwuODA2LDEuMjM4bC43NDctLjQ3MWE3LjgsNy44LDAsMCwwLS45MS0xLjM3N0EzLjI4NywzLjI4NywwLDAsMCwzOC40MSwyOC42NlptLTE1LjY2Ny44MzRhNS44OTIsNS44OTIsMCwwLDAtNC43LDEuNzY0bC42MzIuNjJjLjg1Ny0uODc0LDEuNzIzLTEuNTYxLDQuNDI2LTEuNDkxbDEuNywxLjZoLjczOG'+
			'ExLjksMS45LDAsMCwwLS42Mi0xLjEwNkMyNC4xOCwzMC4wODcsMjMuNzI3LDI5LjQ5MiwyMi43NDQsMjkuNDk0Wm03LjIxNC40ODFjLS41LDAtLjk5My4wMS0xLjQ1Ni4wMjhhNC4zOTIsNC4zOTIsMCwwLDEsLjMyNSwxLjIyM2MuMDQ5LjU3Mi0uNzY3LjYwNy0uODc1LjExOWEzLjQ5MiwzLjQ5MiwwLDAsMC0uNDM4LTEuMjljLS43NDcuMDQ5LTEuNDIxLjExNi0xLjk4Mi4xODMuMzU5LjQ0Ljg4NSwxLjA3Mi44ODUsMS41MjVxLjAzNyw2LjYxNi0uNDc3LDEzLjMyMWMuMDc5LS4wODQuMTU3LS4xNjcuMjQxLS4yNDFhMi4wNTMsMi4wNTMsMCwwLDEsMS40NzUtLjYzOWgwYTEuODExLDEuODExLDAs'+
			'MCwxLC4zNjkuMDY5Yy4wMS0uODE2LjAzLTEuNTE5LDAtMi4xODMuMjYxLjI3NS41MjYuNDkyLjg4NS0uMDMuMDM0Ljg2NSwwLDEuNzQ2LS4wMTUsMi44LjA1NC4wNTQuMS4xMDguMTQ4LjE2MmE2LjY5LDYuNjksMCwwLDEsLjksMS40NTZjLjA4OS4xODcuMTY3LjM2OS4yNDEuNTQ2cS4xLTQuMTY3LS4xMDgtOC4zM2MuNDIzLjU1Ni42NTQuMzQ0Ljg4NS0uMDM5cS4yLDQuMTc1LjEwOCw4LjM1NUEzLjAyNSwzLjAyNSwwLDAsMSwzMy4xMjksNDUuOWExLjQzNCwxLjQzNCwwLDAsMSwuNTUxLjEyM2wwLTEuMTc1Yy4zODguNDM4LjY1OS4zMzkuODg1LDBsLS4wMSwxLjg3OGE2LjUsNi41LDAsMCwxLC'+
			'40ODIuNTc1Yy4xOTItLjEuNDM4LS4yMTYuNzMzLS4zNDRsLS4yOC0zLjYzNGMuMy4yNy41OS40OTIuODg1LS4wNjlsLjI2MSwzLjM2OGE0Ljc0NCw0Ljc0NCwwLDAsMSwxLS4yNDZjLS41NTEtNC41OTMtMS4yMzktOS40NDEtMi4xNzgtMTQuNTc0aDBhMy43LDMuNywwLDAsMC0uMjktLjk2Mi42My42MywwLDAsMC0uNDI4LS40LDE4Ljk2LDE4Ljk2LDAsMCwwLTIuODE4LS40LDUuMzUzLDUuMzUzLDAsMCwxLC40MjMsMi40NDIuNDQ3LjQ0NywwLDEsMS0uODg1LjAxLDMuNiwzLjYsMCwwLDAtLjYyNS0yLjUwN0MzMC41NTMsMjkuOTgxLDMwLjI1OCwyOS45NzYsMjkuOTU4LDI5Ljk3NlptNC40NjUs'+
			'MS41NWMuNTYxLDIuMTUyLDEuMDEzLDUuODc0LDEuMzMzLDguMDY3LS4wNDQuODY1LS43LjY1OS0uODc1LjEyOC0uMzItMi4yMTMtLjc5Mi01Ljk1NS0xLjMxMy03Ljk3QzM0LjA1NCwzMi4xMjksMzQuMzU0LDMyLjA5LDM0LjQyMywzMS41MjZabS02LjI1NS45ODZhNjUuNTcsNjUuNTcsMCwwLDEtLjAzNCw3Ljk5MWMuMDEuNTQxLS43NTIuNjkzLS44ODUtLjA0OWE2My44MzQsNjMuODM0LDAsMCwwLC4wMzQtNy44ODJDMjcuNzIsMzMuMjI1LDI3Ljk4MSwzMy4wMjksMjguMTY4LDMyLjUxMlpNMzAuNywzMy42MTlhMTkuOTYsMTkuOTYsMCwwLDEsLjE5MiwyLjk0NWMtLjMxNS40NjctLjYuMzg4LS'+
			'44ODUtLjAyYTE5Ljk3LDE5Ljk3LDAsMCwwLS4xODItMi44MjdjLjM0NC40MjMuNjI5LjMyNS44NzUtLjFabTIuNTcyLDEuMzM4Yy4xNjcsMi40OTMuMjExLDQuNDI2LjI3NSw3LjYxMi0uMjQ2LjI2Ni0uNDgyLjU3NS0uODg1LjAyLS4wNjQtMy4xODYtLjEwOC01LjEtLjI3NS03LjU3M0MzMi43NTYsMzUuNDcyLDMzLjAzMSwzNS4zMSwzMy4yNzIsMzQuOTU2Wm0tMTIuMSw4Ljg5MWMtLjUyOC0uMDE1LS43OTUuOTI5LS42NTgsMS40NDEuMTgxLjY3OSwxLjcxLDEuMjE5LDEuNzEsMS4yMTlTMjIuMTI5LDQzLjg3MSwyMS4xNzUsNDMuODQ3Wm0yLjMzMS0uMDJhLjI3My4yNzMsMCwwLDAtLjA4NC4x'+
			'MTNjLS4yMDcuNDg3LDEuMTExLDEuMTM2LDEuMTExLDEuMTM2cy4yOS0uODU2LjAzLTEuMTIxYS45MjMuOTIzLDAsMCwwLTEuMDU3LS4xMjhabTE1LjcxMS0uMTg3YS4yNi4yNiwwLDAsMC0uMDY0LDBjLS41NzUuMTA4LS42ODQsMS4xNy0uNDA4LDEuNzE2LDAsMCwuOTI0LS40NDcuOTc0LS44ODVDMzkuNzU4LDQ0LjE2NiwzOS41MjIsNDMuNjUsMzkuMjE3LDQzLjY0Wm0xLjQ2NSwxLjAwOGMtMSwuMDU0LS44MjYsMi44ODItLjgyNiwyLjg4MnMxLjM2Mi0uNTE2LDEuNTM0LTEuMTI2UzQxLjMxMiw0NC42MTQsNDAuNjgyLDQ0LjY0OFpNMjYuNzc2LDQ1LjVhNS45MzgsNS45MzgsMCwwLDAtLjkyLD'+
			'EuMTU2LDEzLjYzNywxMy42MzcsMCwwLDAtLjkyNCwxLjc3bC0uMTc3LjQyOGE2LjM0OSw2LjM0OSwwLDAsMC0yLjg0My0uODY1LDEuNDU5LDEuNDU5LDAsMCwwLTEuMzQ5LDEuMSwxLjQ3NSwxLjQ3NSwwLDAsMCwuNDQ3LDEuMjU5YzUuOTI4LjcyOCwxNS4yODYsMS4wMzgsMjAuMjEzLjAyYTEuODQ1LDEuODQ1LDAsMCwwLS42MzktMS44NjQsNS45NjYsNS45NjYsMCwwLDAtMi4yMTMtMS4yLDMuODYsMy44NiwwLDAsMC0xLjkzNy4zMzksMTEuNjY1LDExLjY2NSwwLDAsMC0xLjMuNjE1bC0uMzY0LjIwNy0uMjI2LS4zNDRhNi4zNjUsNi4zNjUsMCwwLDAtLjU1Ni0uNzA4LDIuMjkxLDIuMjkxLDAs'+
			'MCwwLS44Ny0uNjI0LDMuMTc2LDMuMTc2LDAsMCwwLTEuNTQ5LDEsMTAuMiwxMC4yLDAsMCwwLS45MTUsMS4wOTJsLS41NDEuNzYyLS4yNTEtLjlhMTIuOTA4LDEyLjkwOCwwLDAsMC0uNzA4LTEuODczLDUuODc0LDUuODc0LDAsMCwwLS43NzItMS4yNjRDMjcuNzYsNDQuOTM4LDI3LjM4Niw0NC45NTgsMjYuNzc2LDQ1LjVabS03Ljg3NC42MzRhLjUwNy41MDcsMCwwLDAtLjQ4NC4yMjFjLS40MDcuNzA4LDEuNTE0LDEuOTMzLDEuNTE0LDEuOTMzcy4zMzgtMS4zLS4wNDktMS43MzZBMS41LDEuNSwwLDAsMCwxOC45LDQ2LjEzM1oiLz4KICA8L2c+CiAgPGcgaWQ9IldhdGVyZm91bnRhaW4iPgogIC'+
			'A8cGF0aCBpZD0id2F0ZXItZm91bnRhaW4tc3ZncmVwby1jb20iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjM5MiAtMTAuMzM3KSIgZD0iTTI1Ljc0MywxNmE2LjA2Miw2LjA2MiwwLDAsMSwuODA5LDIuNDE1Yy0uNzg0LTEuMjM1LTEuNjEyLTEuNzU3LTIuNDM0LTEuNzQ4LTMuMy4wMzUtNi41LDguNjQtNi4zMzcsMTMuOTEzYS41MzIuNTMyLDAsMCwwLS4xLjA0OGMtLjI2Ny4xNTktLjExOC42MTUtLjIzOS45LS4xNDcuMzQ0LS41MzMuNTg5LS41ODIuOTZhMS45NjQsMS45NjQsMCwwLDAsLjAyNy42NzRoNy40NzFhMy4yOTEsMy4yOTEsMCwwLDAtMS4yMjctMS42OGMtLjE3Ny0uMTIzLS40Njcu'+
			'MDg4LS42NDctLjAzMS0uMzcyLS4yNDUtLjE3NS0xLjAyOS0uNTg2LTEuMmEuOTg1Ljk4NSwwLDAsMC0uODA3LjA1OWMtLjIyMi01LjQxLDEuMzQxLTEzLjIsNC44NDEtMTEuNjU2LTEuMTYuMjc5LTEuNjcxLjY5NS0xLjk0NywyLjI2NS4zNi0uNy42NjItMS4yNTcsMS43NjQtMS4wODdsMy4wODIsMHMxLjYsMS44NDEsMS44MzQsMi4yNTdjLjI1LjQzOS0uNzA2LTMuMDgxLTEuNTU0LTMuNTI0LDIuOTcyLjEsNC4yNzIsOC4xMTUsNC4wNjYsMTMuMTI4LS4yNzEtLjExOS0xLjA1Ny0xLjQ2NC0xLjMyNC0xLjM1MWExLjMwNiwxLjMwNiwwLDAsMC0uNzU1LjdjLS4wODQuMi0uMDM3Ljk5NC0uMjE0LD'+
			'EuMTE3YTIuNTQyLDIuNTQyLDAsMCwwLS45NjIsMS4wMWg3LjU3M2ExMC42MzgsMTAuNjM4LDAsMCwwLS41MDktMS41NDFjLS4xMjItLjI4NiwxLjQtMS44NzEsMC0xLjA4OWEyLjM0MSwyLjM0MSwwLDAsMS0uNDY2LjA0OGMuMTY1LTUuMjczLTMuMDM0LTEzLjg3OC02LjMzNy0xMy45MTMtLjgzNC0uMDA5LTEuNjc1LjUyOS0yLjQ3LDEuOGE1LjAzMSw1LjAzMSwwLDAsMSwxLjIxNi0yLjA1NWMtMS4wODYuMjcxLTEuNTEuMTY5LTEuNzc1LDEuMjcxLS40MDUtLjYzMy0uNjE5LTEuNDEyLTEuNC0xLjY4N1ptLjI4NSw0LjYwOS0uNTYxLDEuNjgyLjUyLDEuMDRoMi4zMjFsLjUyLTEuMDQtLjU2LTEu'+
			'NjgyaC0yLjI0Wk0yMi45NywyNC4xMmwuODc4LDEuMzE3aDYuNmwuODc4LTEuMzE3Wm0zLjA0MSwyLjEwNy0xLjI2NCwzLjE2LjYyOSwzLjc3NUgyOC45MmwuNjI5LTMuNzc1LTEuMjY0LTMuMTZIMjYuMDFaTTIyLjI2MiwyOC44MWEuMjQ5LjI0OSwwLDAsMC0uMDYyLjAwNWMtLjQzNS4wOTEtLjUxOSwxLjEtLjEzOSwxLjMyNS4yMjIuMTM0LjU4Ny0uMTc5LjY0Ny0uNDMyQzIyLjc4MywyOS40LDIyLjU2NiwyOC44MjMsMjIuMjYyLDI4LjgxWk0zMi42LDI5LjNjLS4zLjAxMy0uMjczLjI3Ni0uMi41ODkuMDYuMjUyLjE0Ny42NjQuMzY5LjUzLjI3Ni0uMi4zMzEtLjk1OC0uMTcxLTEuMTE4Wm0tMT'+
			'UuNjI3LjI3NWMtLjgwNy4wMTguMSwxLjY4Ni4zNDcsMS41NzktLjI4Mi0uOTg4LjU0LTEuNS0uMzA3LTEuNTc5Wk0yMy4zLDMwLjJhLjE1LjE1LDAsMCwwLS4wMzIsMGMtLjA3Ni4zNC0uNTQ4LjQ5Mi0uNC42OTQuMTY0LjE5NC42MzktLjAzNC43MDktLjI3N0EuMzc5LjM3OSwwLDAsMCwyMy4zLDMwLjJabTcuMzY0LjEzOWMtLjE2MS4wMDktLjE3MS4zOTEtLjEyNi41NDcuMDcuMjQ0LjI1Ni40LjQyLjIwNy4wODktLjEzOS0uMjQ0LS4zNjgtLjI5NC0uNzU0Wm0tMTMuNjUsMy42MTJ2LjYxNEgzNy4yODd2LS42MTRabTEuMDQ1LDEuNC44NzgsMS4zMTdIMzUuMzYzbC44NzgtMS4zMTdaIiBmaWxs'+
			'PSIjZmZmIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me.__165_toggle_drone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="16.5_toggle_drone";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3.5%;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) - 30px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__165_toggle_drone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__165_toggle_drone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('13_Map_drone') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('13_Map_drone') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__165_toggle_drone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__165_toggle_drone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__165_toggle_drone.style.transition='';
				if (me.__165_toggle_drone.ggCurrentLogicStateVisible == 0) {
					me.__165_toggle_drone.style.visibility=(Number(me.__165_toggle_drone.style.opacity)>0||!me.__165_toggle_drone.style.opacity)?'inherit':'hidden';
					me.__165_toggle_drone.ggVisible=true;
				}
				else if (me.__165_toggle_drone.ggCurrentLogicStateVisible == 1) {
					me.__165_toggle_drone.style.visibility="hidden";
					me.__165_toggle_drone.ggVisible=false;
				}
				else {
					me.__165_toggle_drone.style.visibility=(Number(me.__165_toggle_drone.style.opacity)>0||!me.__165_toggle_drone.style.opacity)?'inherit':'hidden';
					me.__165_toggle_drone.ggVisible=true;
				}
			}
		}
		me.__165_toggle_drone.logicBlock_visible();
		me.__165_toggle_drone.onclick=function (e) {
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me.__165_toggle_drone.ggUpdatePosition=function (useTransition) {
		}
		me.__16_tour_map_mob.appendChild(me.__165_toggle_drone);
		el=me.__166_toggle_walk=document.createElement('div');
		els=me.__166_toggle_walk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAgMzIiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzMiI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImNsaXAtVG9nZ2xlX1dhdGVyX0ZvdW50YWluIj4KICAgPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjMyIi8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGlkPSJUb2dnbGVfV2F0ZXJfRm91bnRhaW4iIGNsaXAtcGF0aD0idXJsKCNjbGlwLVRvZ2dsZV9XYXRlcl9Gb3VudGFpbikiIGRhdGEtbmFtZT0iVG9nZ2xlIOKAkyBXYX'+
			'RlciBGb3VudGFpbiI+CiAgPHJlY3QgaWQ9IlJlY3RhbmdsZV82MDUiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDYwNSIgd2lkdGg9IjcwIiByeD0iMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzI2OTlmYiIvPgogIDxnIGlkPSJXYXRlcmZhbGwiPgogICA8cGF0aCBpZD0id2F0ZXJmYWxsLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMjQyIC0yMy44MzkpIiBkPSJNMzguNDEsMjguNjZhMi44ODIsMi44ODIsMCwwLDAtMS45OTIuOTgyYy0uMi4xOTQtLjM4NC40LS41Ny42YTMuMjUzLDMuMjUzLDAsMCwxLC4zNzkuOTA4Yy4yNzUtLjMuNTQ2LS42MS44MTEtLjg3My41LS40OTEuOTM5'+
			'LS43NjcsMS4zMjMtLjcyMWEyLjEzLDIuMTMsMCwwLDEsMS40NTYuNjMsOC40NjgsOC40NjgsMCwwLDEsLjgwNiwxLjIzOGwuNzQ3LS40NzFhNy44LDcuOCwwLDAsMC0uOTEtMS4zNzdBMy4yODcsMy4yODcsMCwwLDAsMzguNDEsMjguNjZabS0xNS42NjcuODM0YTUuODkyLDUuODkyLDAsMCwwLTQuNywxLjc2NGwuNjMyLjYyYy44NTctLjg3NCwxLjcyMy0xLjU2MSw0LjQyNi0xLjQ5MWwxLjcsMS42aC43MzhhMS45LDEuOSwwLDAsMC0uNjItMS4xMDZDMjQuMTgsMzAuMDg3LDIzLjcyNywyOS40OTIsMjIuNzQ0LDI5LjQ5NFptNy4yMTQuNDgxYy0uNSwwLS45OTMuMDEtMS40NTYuMDI4YTQuMzkyLD'+
			'QuMzkyLDAsMCwxLC4zMjUsMS4yMjNjLjA0OS41NzItLjc2Ny42MDctLjg3NS4xMTlhMy40OTIsMy40OTIsMCwwLDAtLjQzOC0xLjI5Yy0uNzQ3LjA0OS0xLjQyMS4xMTYtMS45ODIuMTgzLjM1OS40NC44ODUsMS4wNzIuODg1LDEuNTI1cS4wMzcsNi42MTYtLjQ3NywxMy4zMjFjLjA3OS0uMDg0LjE1Ny0uMTY3LjI0MS0uMjQxYTIuMDUzLDIuMDUzLDAsMCwxLDEuNDc1LS42MzloMGExLjgxMSwxLjgxMSwwLDAsMSwuMzY5LjA2OWMuMDEtLjgxNi4wMy0xLjUxOSwwLTIuMTgzLjI2MS4yNzUuNTI2LjQ5Mi44ODUtLjAzLjAzNC44NjUsMCwxLjc0Ni0uMDE1LDIuOC4wNTQuMDU0LjEuMTA4LjE0OC4x'+
			'NjJhNi42OSw2LjY5LDAsMCwxLC45LDEuNDU2Yy4wODkuMTg3LjE2Ny4zNjkuMjQxLjU0NnEuMS00LjE2Ny0uMTA4LTguMzNjLjQyMy41NTYuNjU0LjM0NC44ODUtLjAzOXEuMiw0LjE3NS4xMDgsOC4zNTVBMy4wMjUsMy4wMjUsMCwwLDEsMzMuMTI5LDQ1LjlhMS40MzQsMS40MzQsMCwwLDEsLjU1MS4xMjNsMC0xLjE3NWMuMzg4LjQzOC42NTkuMzM5Ljg4NSwwbC0uMDEsMS44NzhhNi41LDYuNSwwLDAsMSwuNDgyLjU3NWMuMTkyLS4xLjQzOC0uMjE2LjczMy0uMzQ0bC0uMjgtMy42MzRjLjMuMjcuNTkuNDkyLjg4NS0uMDY5bC4yNjEsMy4zNjhhNC43NDQsNC43NDQsMCwwLDEsMS0uMjQ2Yy0uNT'+
			'UxLTQuNTkzLTEuMjM5LTkuNDQxLTIuMTc4LTE0LjU3NGgwYTMuNywzLjcsMCwwLDAtLjI5LS45NjIuNjMuNjMsMCwwLDAtLjQyOC0uNCwxOC45NiwxOC45NiwwLDAsMC0yLjgxOC0uNCw1LjM1Myw1LjM1MywwLDAsMSwuNDIzLDIuNDQyLjQ0Ny40NDcsMCwxLDEtLjg4NS4wMSwzLjYsMy42LDAsMCwwLS42MjUtMi41MDdDMzAuNTUzLDI5Ljk4MSwzMC4yNTgsMjkuOTc2LDI5Ljk1OCwyOS45NzZabTQuNDY1LDEuNTVjLjU2MSwyLjE1MiwxLjAxMyw1Ljg3NCwxLjMzMyw4LjA2Ny0uMDQ0Ljg2NS0uNy42NTktLjg3NS4xMjgtLjMyLTIuMjEzLS43OTItNS45NTUtMS4zMTMtNy45N0MzNC4wNTQsMzIu'+
			'MTI5LDM0LjM1NCwzMi4wOSwzNC40MjMsMzEuNTI2Wm0tNi4yNTUuOTg2YTY1LjU3LDY1LjU3LDAsMCwxLS4wMzQsNy45OTFjLjAxLjU0MS0uNzUyLjY5My0uODg1LS4wNDlhNjMuODM0LDYzLjgzNCwwLDAsMCwuMDM0LTcuODgyQzI3LjcyLDMzLjIyNSwyNy45ODEsMzMuMDI5LDI4LjE2OCwzMi41MTJaTTMwLjcsMzMuNjE5YTE5Ljk2LDE5Ljk2LDAsMCwxLC4xOTIsMi45NDVjLS4zMTUuNDY3LS42LjM4OC0uODg1LS4wMmExOS45NywxOS45NywwLDAsMC0uMTgyLTIuODI3Yy4zNDQuNDIzLjYyOS4zMjUuODc1LS4xWm0yLjU3MiwxLjMzOGMuMTY3LDIuNDkzLjIxMSw0LjQyNi4yNzUsNy42MTItLj'+
			'I0Ni4yNjYtLjQ4Mi41NzUtLjg4NS4wMi0uMDY0LTMuMTg2LS4xMDgtNS4xLS4yNzUtNy41NzNDMzIuNzU2LDM1LjQ3MiwzMy4wMzEsMzUuMzEsMzMuMjcyLDM0Ljk1NlptLTEyLjEsOC44OTFjLS41MjgtLjAxNS0uNzk1LjkyOS0uNjU4LDEuNDQxLjE4MS42NzksMS43MSwxLjIxOSwxLjcxLDEuMjE5UzIyLjEyOSw0My44NzEsMjEuMTc1LDQzLjg0N1ptMi4zMzEtLjAyYS4yNzMuMjczLDAsMCwwLS4wODQuMTEzYy0uMjA3LjQ4NywxLjExMSwxLjEzNiwxLjExMSwxLjEzNnMuMjktLjg1Ni4wMy0xLjEyMWEuOTIzLjkyMywwLDAsMC0xLjA1Ny0uMTI4Wm0xNS43MTEtLjE4N2EuMjYuMjYsMCwwLDAt'+
			'LjA2NCwwYy0uNTc1LjEwOC0uNjg0LDEuMTctLjQwOCwxLjcxNiwwLDAsLjkyNC0uNDQ3Ljk3NC0uODg1QzM5Ljc1OCw0NC4xNjYsMzkuNTIyLDQzLjY1LDM5LjIxNyw0My42NFptMS40NjUsMS4wMDhjLTEsLjA1NC0uODI2LDIuODgyLS44MjYsMi44ODJzMS4zNjItLjUxNiwxLjUzNC0xLjEyNlM0MS4zMTIsNDQuNjE0LDQwLjY4Miw0NC42NDhaTTI2Ljc3Niw0NS41YTUuOTM4LDUuOTM4LDAsMCwwLS45MiwxLjE1NiwxMy42MzcsMTMuNjM3LDAsMCwwLS45MjQsMS43N2wtLjE3Ny40MjhhNi4zNDksNi4zNDksMCwwLDAtMi44NDMtLjg2NSwxLjQ1OSwxLjQ1OSwwLDAsMC0xLjM0OSwxLjEsMS40Nz'+
			'UsMS40NzUsMCwwLDAsLjQ0NywxLjI1OWM1LjkyOC43MjgsMTUuMjg2LDEuMDM4LDIwLjIxMy4wMmExLjg0NSwxLjg0NSwwLDAsMC0uNjM5LTEuODY0LDUuOTY2LDUuOTY2LDAsMCwwLTIuMjEzLTEuMiwzLjg2LDMuODYsMCwwLDAtMS45MzcuMzM5LDExLjY2NSwxMS42NjUsMCwwLDAtMS4zLjYxNWwtLjM2NC4yMDctLjIyNi0uMzQ0YTYuMzY1LDYuMzY1LDAsMCwwLS41NTYtLjcwOCwyLjI5MSwyLjI5MSwwLDAsMC0uODctLjYyNCwzLjE3NiwzLjE3NiwwLDAsMC0xLjU0OSwxLDEwLjIsMTAuMiwwLDAsMC0uOTE1LDEuMDkybC0uNTQxLjc2Mi0uMjUxLS45YTEyLjkwOCwxMi45MDgsMCwwLDAtLjcw'+
			'OC0xLjg3Myw1Ljg3NCw1Ljg3NCwwLDAsMC0uNzcyLTEuMjY0QzI3Ljc2LDQ0LjkzOCwyNy4zODYsNDQuOTU4LDI2Ljc3Niw0NS41Wm0tNy44NzQuNjM0YS41MDcuNTA3LDAsMCwwLS40ODQuMjIxYy0uNDA3LjcwOCwxLjUxNCwxLjkzMywxLjUxNCwxLjkzM3MuMzM4LTEuMy0uMDQ5LTEuNzM2QTEuNSwxLjUsMCwwLDAsMTguOSw0Ni4xMzNaIiBmaWxsPSIjZmZmIi8+CiAgPC9nPgogIDxnIGlkPSJXYXRlcmZvdW50YWluIj4KICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV82MDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5IDMpIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA2MDciIHdpZHRoPSIyNyIgcng9Ij'+
			'IiIGhlaWdodD0iMjciIGZpbGw9IiNmZmYiLz4KICAgPHBhdGggaWQ9IndhdGVyLWZvdW50YWluLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4zOTIgLTEwLjMzNykiIGQ9Ik0yNS43NDMsMTZhNi4wNjIsNi4wNjIsMCwwLDEsLjgwOSwyLjQxNWMtLjc4NC0xLjIzNS0xLjYxMi0xLjc1Ny0yLjQzNC0xLjc0OC0zLjMuMDM1LTYuNSw4LjY0LTYuMzM3LDEzLjkxM2EuNTMyLjUzMiwwLDAsMC0uMS4wNDhjLS4yNjcuMTU5LS4xMTguNjE1LS4yMzkuOS0uMTQ3LjM0NC0uNTMzLjU4OS0uNTgyLjk2YTEuOTY0LDEuOTY0LDAsMCwwLC4wMjcuNjc0aDcuNDcxYTMuMjkxLDMuMjkxLDAs'+
			'MCwwLTEuMjI3LTEuNjhjLS4xNzctLjEyMy0uNDY3LjA4OC0uNjQ3LS4wMzEtLjM3Mi0uMjQ1LS4xNzUtMS4wMjktLjU4Ni0xLjJhLjk4NS45ODUsMCwwLDAtLjgwNy4wNTljLS4yMjItNS40MSwxLjM0MS0xMy4yLDQuODQxLTExLjY1Ni0xLjE2LjI3OS0xLjY3MS42OTUtMS45NDcsMi4yNjUuMzYtLjcuNjYyLTEuMjU3LDEuNzY0LTEuMDg3bDMuMDgyLDBzMS42LDEuODQxLDEuODM0LDIuMjU3Yy4yNS40MzktLjcwNi0zLjA4MS0xLjU1NC0zLjUyNCwyLjk3Mi4xLDQuMjcyLDguMTE1LDQuMDY2LDEzLjEyOC0uMjcxLS4xMTktMS4wNTctMS40NjQtMS4zMjQtMS4zNTFhMS4zMDYsMS4zMDYsMCwwLD'+
			'AtLjc1NS43Yy0uMDg0LjItLjAzNy45OTQtLjIxNCwxLjExN2EyLjU0MiwyLjU0MiwwLDAsMC0uOTYyLDEuMDFoNy41NzNhMTAuNjM4LDEwLjYzOCwwLDAsMC0uNTA5LTEuNTQxYy0uMTIyLS4yODYsMS40LTEuODcxLDAtMS4wODlhMi4zNDEsMi4zNDEsMCwwLDEtLjQ2Ni4wNDhjLjE2NS01LjI3My0zLjAzNC0xMy44NzgtNi4zMzctMTMuOTEzLS44MzQtLjAwOS0xLjY3NS41MjktMi40NywxLjhhNS4wMzEsNS4wMzEsMCwwLDEsMS4yMTYtMi4wNTVjLTEuMDg2LjI3MS0xLjUxLjE2OS0xLjc3NSwxLjI3MS0uNDA1LS42MzMtLjYxOS0xLjQxMi0xLjQtMS42ODdabS4yODUsNC42MDktLjU2MSwxLjY4'+
			'Mi41MiwxLjA0aDIuMzIxbC41Mi0xLjA0LS41Ni0xLjY4MmgtMi4yNFpNMjIuOTcsMjQuMTJsLjg3OCwxLjMxN2g2LjZsLjg3OC0xLjMxN1ptMy4wNDEsMi4xMDctMS4yNjQsMy4xNi42MjksMy43NzVIMjguOTJsLjYyOS0zLjc3NS0xLjI2NC0zLjE2SDI2LjAxWk0yMi4yNjIsMjguODFhLjI0OS4yNDksMCwwLDAtLjA2Mi4wMDVjLS40MzUuMDkxLS41MTksMS4xLS4xMzksMS4zMjUuMjIyLjEzNC41ODctLjE3OS42NDctLjQzMkMyMi43ODMsMjkuNCwyMi41NjYsMjguODIzLDIyLjI2MiwyOC44MVpNMzIuNiwyOS4zYy0uMy4wMTMtLjI3My4yNzYtLjIuNTg5LjA2LjI1Mi4xNDcuNjY0LjM2OS41My'+
			'4yNzYtLjIuMzMxLS45NTgtLjE3MS0xLjExOFptLTE1LjYyNy4yNzVjLS44MDcuMDE4LjEsMS42ODYuMzQ3LDEuNTc5LS4yODItLjk4OC41NC0xLjUtLjMwNy0xLjU3OVpNMjMuMywzMC4yYS4xNS4xNSwwLDAsMC0uMDMyLDBjLS4wNzYuMzQtLjU0OC40OTItLjQuNjk0LjE2NC4xOTQuNjM5LS4wMzQuNzA5LS4yNzdBLjM3OS4zNzksMCwwLDAsMjMuMywzMC4yWm03LjM2NC4xMzljLS4xNjEuMDA5LS4xNzEuMzkxLS4xMjYuNTQ3LjA3LjI0NC4yNTYuNC40Mi4yMDcuMDg5LS4xMzktLjI0NC0uMzY4LS4yOTQtLjc1NFptLTEzLjY1LDMuNjEydi42MTRIMzcuMjg3di0uNjE0Wm0xLjA0NSwxLjQuODc4'+
			'LDEuMzE3SDM1LjM2M2wuODc4LTEuMzE3WiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me.__166_toggle_walk__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="16.6_toggle_walk";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3.5%;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((70px + 0px) / 2) - 30px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__166_toggle_walk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__166_toggle_walk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('14_Map_walk') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('14_Map_walk') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__166_toggle_walk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__166_toggle_walk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__166_toggle_walk.style.transition='';
				if (me.__166_toggle_walk.ggCurrentLogicStateVisible == 0) {
					me.__166_toggle_walk.style.visibility=(Number(me.__166_toggle_walk.style.opacity)>0||!me.__166_toggle_walk.style.opacity)?'inherit':'hidden';
					me.__166_toggle_walk.ggVisible=true;
				}
				else if (me.__166_toggle_walk.ggCurrentLogicStateVisible == 1) {
					me.__166_toggle_walk.style.visibility="hidden";
					me.__166_toggle_walk.ggVisible=false;
				}
				else {
					me.__166_toggle_walk.style.visibility=(Number(me.__166_toggle_walk.style.opacity)>0||!me.__166_toggle_walk.style.opacity)?'inherit':'hidden';
					me.__166_toggle_walk.ggVisible=true;
				}
			}
		}
		me.__166_toggle_walk.logicBlock_visible();
		me.__166_toggle_walk.onclick=function (e) {
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me.__166_toggle_walk.ggUpdatePosition=function (useTransition) {
		}
		me.__16_tour_map_mob.appendChild(me.__166_toggle_walk);
		me.divSkin.appendChild(me.__16_tour_map_mob);
		el=me.__19_vt_title=document.createElement('div');
		el.ggId="19_vt_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19_vt_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__19_vt_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('13_Animation') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('13_Animation') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__19_vt_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__19_vt_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__19_vt_title.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__19_vt_title.ggCurrentLogicStateScaling == 0) {
					me.__19_vt_title.ggParameter.sx = 2;
					me.__19_vt_title.ggParameter.sy = 2;
					me.__19_vt_title.style.transform=parameterToTransform(me.__19_vt_title.ggParameter);
					setTimeout(function() {skin.updateSize(me.__19_vt_title);}, 1050);
				}
				else if (me.__19_vt_title.ggCurrentLogicStateScaling == 1) {
					me.__19_vt_title.ggParameter.sx = 1;
					me.__19_vt_title.ggParameter.sy = 1;
					me.__19_vt_title.style.transform=parameterToTransform(me.__19_vt_title.ggParameter);
					setTimeout(function() {skin.updateSize(me.__19_vt_title);}, 1050);
				}
				else {
					me.__19_vt_title.ggParameter.sx = 1;
					me.__19_vt_title.ggParameter.sy = 1;
					me.__19_vt_title.style.transform=parameterToTransform(me.__19_vt_title.ggParameter);
					setTimeout(function() {skin.updateSize(me.__19_vt_title);}, 1050);
				}
			}
		}
		me.__19_vt_title.logicBlock_scaling();
		me.__19_vt_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__19_vt_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19_vt_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19_vt_title.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__19_vt_title.ggCurrentLogicStateVisible == 0) {
					me.__19_vt_title.style.visibility="hidden";
					me.__19_vt_title.ggVisible=false;
				}
				else if (me.__19_vt_title.ggCurrentLogicStateVisible == 1) {
					me.__19_vt_title.style.visibility=(Number(me.__19_vt_title.style.opacity)>0||!me.__19_vt_title.style.opacity)?'inherit':'hidden';
					me.__19_vt_title.ggVisible=true;
				}
				else {
					me.__19_vt_title.style.visibility=(Number(me.__19_vt_title.style.opacity)>0||!me.__19_vt_title.style.opacity)?'inherit':'hidden';
					me.__19_vt_title.ggVisible=true;
				}
			}
		}
		me.__19_vt_title.logicBlock_visible();
		me.__19_vt_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('10_VTtitle') == Number("0"))) || 
				((player.getVariableValue('13_Animation') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('13_Animation') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__19_vt_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__19_vt_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__19_vt_title.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__19_vt_title.ggCurrentLogicStateAlpha == 0) {
					me.__19_vt_title.style.visibility="hidden";
					me.__19_vt_title.style.opacity=0;
				}
				else if (me.__19_vt_title.ggCurrentLogicStateAlpha == 1) {
					me.__19_vt_title.style.visibility=me.__19_vt_title.ggVisible?'inherit':'hidden';
					me.__19_vt_title.style.opacity=1;
				}
				else {
					me.__19_vt_title.style.visibility=me.__19_vt_title.ggVisible?'inherit':'hidden';
					me.__19_vt_title.style.opacity=1;
				}
			}
		}
		me.__19_vt_title.logicBlock_alpha();
		me.__19_vt_title.ggUpdatePosition=function (useTransition) {
		}
		el=me.__191_vertical_line=document.createElement('div');
		el.ggId="19.1_vertical_line";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 3px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__191_vertical_line.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__191_vertical_line.ggUpdatePosition=function (useTransition) {
		}
		me.__19_vt_title.appendChild(me.__191_vertical_line);
		el=me.__192_vt_title=document.createElement('div');
		els=me.__192_vt_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="19.2_vt_title";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Poppins\", sans-serif; font-weight: 500; font-size: 1.8em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__192_vt_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("Holland Park", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__192_vt_title.ggUpdateText();
		el.appendChild(els);
		me.__192_vt_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__192_vt_title.ggUpdatePosition=function (useTransition) {
		}
		me.__19_vt_title.appendChild(me.__192_vt_title);
		me.divSkin.appendChild(me.__19_vt_title);
		el=me.__20_vt_title_mob=document.createElement('div');
		el.ggId="20_vt_title_MOB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20_vt_title_mob.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__20_vt_title_mob.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('13_Animation') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('13_Animation') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__20_vt_title_mob.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__20_vt_title_mob.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__20_vt_title_mob.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__20_vt_title_mob.ggCurrentLogicStateScaling == 0) {
					me.__20_vt_title_mob.ggParameter.sx = 2;
					me.__20_vt_title_mob.ggParameter.sy = 2;
					me.__20_vt_title_mob.style.transform=parameterToTransform(me.__20_vt_title_mob.ggParameter);
					setTimeout(function() {skin.updateSize(me.__20_vt_title_mob);}, 1050);
				}
				else if (me.__20_vt_title_mob.ggCurrentLogicStateScaling == 1) {
					me.__20_vt_title_mob.ggParameter.sx = 1;
					me.__20_vt_title_mob.ggParameter.sy = 1;
					me.__20_vt_title_mob.style.transform=parameterToTransform(me.__20_vt_title_mob.ggParameter);
					setTimeout(function() {skin.updateSize(me.__20_vt_title_mob);}, 1050);
				}
				else {
					me.__20_vt_title_mob.ggParameter.sx = 1;
					me.__20_vt_title_mob.ggParameter.sy = 1;
					me.__20_vt_title_mob.style.transform=parameterToTransform(me.__20_vt_title_mob.ggParameter);
					setTimeout(function() {skin.updateSize(me.__20_vt_title_mob);}, 1050);
				}
			}
		}
		me.__20_vt_title_mob.logicBlock_scaling();
		me.__20_vt_title_mob.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 951))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 950))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__20_vt_title_mob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20_vt_title_mob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20_vt_title_mob.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__20_vt_title_mob.ggCurrentLogicStateVisible == 0) {
					me.__20_vt_title_mob.style.visibility=(Number(me.__20_vt_title_mob.style.opacity)>0||!me.__20_vt_title_mob.style.opacity)?'inherit':'hidden';
					me.__20_vt_title_mob.ggVisible=true;
				}
				else if (me.__20_vt_title_mob.ggCurrentLogicStateVisible == 1) {
					me.__20_vt_title_mob.style.visibility="hidden";
					me.__20_vt_title_mob.ggVisible=false;
				}
				else {
					me.__20_vt_title_mob.style.visibility=(Number(me.__20_vt_title_mob.style.opacity)>0||!me.__20_vt_title_mob.style.opacity)?'inherit':'hidden';
					me.__20_vt_title_mob.ggVisible=true;
				}
			}
		}
		me.__20_vt_title_mob.logicBlock_visible();
		me.__20_vt_title_mob.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('10_VTtitle') == Number("0"))) || 
				((player.getVariableValue('13_Animation') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('13_Animation') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20_vt_title_mob.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20_vt_title_mob.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20_vt_title_mob.style.transition='transform 1000ms ease 0ms, opacity 0s';
				if (me.__20_vt_title_mob.ggCurrentLogicStateAlpha == 0) {
					me.__20_vt_title_mob.style.visibility="hidden";
					me.__20_vt_title_mob.style.opacity=0;
				}
				else if (me.__20_vt_title_mob.ggCurrentLogicStateAlpha == 1) {
					me.__20_vt_title_mob.style.visibility=me.__20_vt_title_mob.ggVisible?'inherit':'hidden';
					me.__20_vt_title_mob.style.opacity=1;
				}
				else {
					me.__20_vt_title_mob.style.visibility=me.__20_vt_title_mob.ggVisible?'inherit':'hidden';
					me.__20_vt_title_mob.style.opacity=1;
				}
			}
		}
		me.__20_vt_title_mob.logicBlock_alpha();
		me.__20_vt_title_mob.ggUpdatePosition=function (useTransition) {
		}
		el=me.__201_vt_title=document.createElement('div');
		els=me.__201_vt_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="20.1_vt_title";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Poppins\", sans-serif; font-weight: 500; font-size: 1.5em;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__201_vt_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("Holland Park", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__201_vt_title.ggUpdateText();
		el.appendChild(els);
		me.__201_vt_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__201_vt_title.ggUpdatePosition=function (useTransition) {
		}
		me.__20_vt_title_mob.appendChild(me.__201_vt_title);
		me.divSkin.appendChild(me.__20_vt_title_mob);
		el=me.__21_lac_logo=document.createElement('div');
		el.ggId="21_LAC_logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21_lac_logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__21_lac_logo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 700))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('12_PA_Logo') == Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('12_PA_Logo') == Number("0")))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__21_lac_logo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__21_lac_logo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__21_lac_logo.style.transition='';
				if (me.__21_lac_logo.ggCurrentLogicStateVisible == 0) {
					me.__21_lac_logo.style.visibility="hidden";
					me.__21_lac_logo.ggVisible=false;
				}
				else if (me.__21_lac_logo.ggCurrentLogicStateVisible == 1) {
					me.__21_lac_logo.style.visibility=(Number(me.__21_lac_logo.style.opacity)>0||!me.__21_lac_logo.style.opacity)?'inherit':'hidden';
					me.__21_lac_logo.ggVisible=true;
				}
				else if (me.__21_lac_logo.ggCurrentLogicStateVisible == 2) {
					me.__21_lac_logo.style.visibility="hidden";
					me.__21_lac_logo.ggVisible=false;
				}
				else {
					me.__21_lac_logo.style.visibility=(Number(me.__21_lac_logo.style.opacity)>0||!me.__21_lac_logo.style.opacity)?'inherit':'hidden';
					me.__21_lac_logo.ggVisible=true;
				}
			}
		}
		me.__21_lac_logo.logicBlock_visible();
		me.__21_lac_logo.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211_lac_logo=document.createElement('div');
		els=me.__211_lac_logo__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me.__211_lac_logo.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me.__211_lac_logo.ggSubElement.setAttribute('alt', player._(me.__211_lac_logo.ggAltText));
			me.__211_lac_logo.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me.__211_lac_logo.ggText_untranslated = img;
			me.__211_lac_logo.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me.__211_lac_logo.ggSubElement.style.width = '0px';
			me.__211_lac_logo.ggSubElement.style.height = '0px';
			me.__211_lac_logo.ggSubElement.src='';
			me.__211_lac_logo.ggSubElement.src=me.__211_lac_logo.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me.__211_lac_logo.ggText != player._(me.__211_lac_logo.ggText_untranslated)) {
				me.__211_lac_logo.ggText = player._(me.__211_lac_logo.ggText_untranslated);
				me.__211_lac_logo.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "gallery/alemara.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="21.1_LAC_logo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__211_lac_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211_lac_logo.onclick=function (e) {
			player.openUrl("https:\/\/alemara.co.uk\/","_blank");
		}
		me.__211_lac_logo.ggUpdatePosition=function (useTransition) {
			var parentWidth = me.__211_lac_logo.clientWidth;
			var parentHeight = me.__211_lac_logo.clientHeight;
			var img = me.__211_lac_logo__img;
			var aspectRatioDiv = me.__211_lac_logo.clientWidth / me.__211_lac_logo.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			} else {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			};
			if (!me.__211_lac_logo.ggScrollbars || currentWidth < me.__211_lac_logo.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me.__211_lac_logo.scrollLeft=currentWidth / 2 - me.__211_lac_logo.clientWidth / 2;
			}
			if (!me.__211_lac_logo.ggScrollbars || currentHeight < me.__211_lac_logo.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me.__211_lac_logo.scrollTop=currentHeight / 2 - me.__211_lac_logo.clientHeight / 2;
			}
		}
		me.__21_lac_logo.appendChild(me.__211_lac_logo);
		me.divSkin.appendChild(me.__21_lac_logo);
		el=me.__23_stop_autorotate=document.createElement('div');
		el.ggId="23_stop_autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23_stop_autorotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23_stop_autorotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('13_Animation') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23_stop_autorotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23_stop_autorotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23_stop_autorotate.style.transition='';
				if (me.__23_stop_autorotate.ggCurrentLogicStateVisible == 0) {
					me.__23_stop_autorotate.style.visibility="hidden";
					me.__23_stop_autorotate.ggVisible=false;
				}
				else {
					me.__23_stop_autorotate.style.visibility="hidden";
					me.__23_stop_autorotate.ggVisible=false;
				}
			}
		}
		me.__23_stop_autorotate.logicBlock_visible();
		me.__23_stop_autorotate.onclick=function (e) {
			player.stopAutorotate();
			me.__23_stop_autorotate.style.transition='none';
			me.__23_stop_autorotate.style.visibility='hidden';
			me.__23_stop_autorotate.ggVisible=false;
			player.setVariableValue('13_Animation', false);
		}
		me.__23_stop_autorotate.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__23_stop_autorotate);
		me._a01_thumbnail_subway.logicBlock_visible();
		me._a01_thumbnail_subway.logicBlock_alpha();
		me._a02_thumbnail_groundlevel.logicBlock_visible();
		me._a02_thumbnail_groundlevel.logicBlock_alpha();
		me._a03_thumbnail_subway_mob.logicBlock_visible();
		me._a03_thumbnail_subway_mob.logicBlock_alpha();
		me._a04_thumbnail_groundlevel_mob.logicBlock_visible();
		me._a04_thumbnail_groundlevel_mob.logicBlock_alpha();
		me.__01_bottom_btn.logicBlock_visible();
		me.__011_background.logicBlock_visible();
		me.elementMouseOver['_012_thumbnail_btn']=false;
		me.__013_subway.logicBlock_visible();
		me.elementMouseOver['_013_subway']=false;
		me.__014_groundlevel.logicBlock_visible();
		me.elementMouseOver['_014_groundlevel']=false;
		me.__015_map_hidden.logicBlock_visible();
		me.elementMouseOver['_015_map_hidden']=false;
		me.__016_map_visible.logicBlock_visible();
		me.elementMouseOver['_016_map_visible']=false;
		me.__02_thumbnailbtn.logicBlock_visible();
		me.__022_toggle_groundlevel.logicBlock_alpha();
		me.__023_toggle_subway.logicBlock_alpha();
		me.__03_bottom_btn_mob.logicBlock_visible();
		me.__031_bottom_menu_background.logicBlock_visible();
		me.__032_walk.logicBlock_visible();
		me.__033_drone.logicBlock_visible();
		me.__034_map_visible.logicBlock_visible();
		me.__04_right_thumbnail_mob.logicBlock_visible();
		me.__041_background.logicBlock_visible();
		me.__05_right_thumbnail_donewalk_mob.logicBlock_visible();
		me.__052_toggle_walk.logicBlock_alpha();
		me.__053_toggle_drone.logicBlock_alpha();
		me.elementMouseOver['_062_information']=false;
		me.elementMouseOver['_063_photo']=false;
		me.elementMouseOver['_066_maplocation']=false;
		me.elementMouseOver['_067_backarrow']=false;
		me.elementMouseOver['_072_left_panel_menu_btn']=false;
		me.__15_tour_map.logicBlock_size();
		me.__15_tour_map.logicBlock_scaling();
		me.__15_tour_map.logicBlock_visible();
		me.__152_tour_map_subway.ggMarkerInstances=[];
		me.__152_tour_map_subway.ggLastNodeId=null;
		me.__152_tour_map_subway.ggMarkerArray=[];
		me.__152_tour_map_subway.ggGoogleMarkerArray=[];
		me.__152_tour_map_subway.ggLastZoom = -1;
		me.__152_tour_map_subway.ggLastLat = 0.0;
		me.__152_tour_map_subway.ggLastLng = 0.0;
		me.__152_tour_map_subway.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me.__152_tour_map_subway.ggRadar.update=function() {
			var radar=me.__152_tour_map_subway.ggRadar;
			var map=me.__152_tour_map_subway.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me.__152_tour_map_subway.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__152_tour_map_subway.ggMapId);
				pan -= me.__152_tour_map_subway.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__152_tour_map_subway.ggFilteredIds.length > 0 && me.__152_tour_map_subway.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.15625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#0055ff',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#0055ff',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me.__152_tour_map_subway.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me.__152_tour_map_subway.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me.__152_tour_map_subway.ggSetLayer=function(layerIndex) {
			if (typeof me.__152_tour_map_subway.ggMapLayers === 'object' && me.__152_tour_map_subway.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me.__152_tour_map_subway.ggMapLayers).length) {
				me.__152_tour_map_subway.ggMap.removeLayer(me.__152_tour_map_subway.ggCurMap);
				me.__152_tour_map_subway.ggCurMap = me.__152_tour_map_subway.ggMapLayers[Object.keys(me.__152_tour_map_subway.ggMapLayers)[layerIndex]];
				me.__152_tour_map_subway.ggMap.addLayer(me.__152_tour_map_subway.ggCurMap);
			}
		}
		me.__152_tour_map_subway.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me.__152_tour_map_subway.ggMapId);
			var mapDetails = player.getMapDetails(me.__152_tour_map_subway.ggMapId);
			if (!me.__152_tour_map_subway.ggMapId) return;
			if (!me.__152_tour_map_subway.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me.__152_tour_map_subway.style.backgroundColor = mapDetails['bgcolor'];
				me.__152_tour_map_subway.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me.__152_tour_map_subway.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me.__152_tour_map_subway.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__152_tour_map_subway.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me.__152_tour_map_subway.ggLastLat, me.__152_tour_map_subway.ggLastLng);
			}
			if (mapType == 'web') {
				if (me.__152_tour_map_subway.ggLastZoom == -1) me.__152_tour_map_subway.ggLastZoom = 14;
				var initZoom = keepZoom ? me.__152_tour_map_subway.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me.__152_tour_map_subway.ggMap = L.map(me.__152_tour_map_subway, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me.__152_tour_map_subway.ggMap.setMaxBounds(maxBounds);
					me.__152_tour_map_subway.ggMap.setMinZoom(me.__152_tour_map_subway.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me.__152_tour_map_subway.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me.__152_tour_map_subway.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me.__152_tour_map_subway.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me.__152_tour_map_subway.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__152_tour_map_subway.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__152_tour_map_subway.ggMapLayers, overlayMaps).addTo(me.__152_tour_map_subway.ggMap);
						me.__152_tour_map_subway.ggCurMap.addTo(me.__152_tour_map_subway.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me.__152_tour_map_subway.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me.__152_tour_map_subway.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me.__152_tour_map_subway.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__152_tour_map_subway.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__152_tour_map_subway.ggMapLayers, overlayMaps).addTo(me.__152_tour_map_subway.ggMap);
						me.__152_tour_map_subway.ggCurMap.addTo(me.__152_tour_map_subway.ggMap);
						me.__152_tour_map_subway.ggMap.on('baselayerchange', function(event) {
							me.__152_tour_map_subway.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me.__152_tour_map_subway.ggMap);
					}
				}
				me.__152_tour_map_subway.ggMap.on('zoom', function() {
					me.__152_tour_map_subway.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me.__152_tour_map_subway.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me.__152_tour_map_subway.mapHeightInDeg / 2;
					mapCenter.lng = me.__152_tour_map_subway.mapWidthInDeg / 2;
				}
				if (me.__152_tour_map_subway.ggLastZoom == -1) me.__152_tour_map_subway.ggLastZoom = 7;
				var initZoom = keepZoom ? me.__152_tour_map_subway.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me.__152_tour_map_subway.ggMap = L.map(me.__152_tour_map_subway, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me.__152_tour_map_subway.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me.__152_tour_map_subway.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me.__152_tour_map_subway.ggMap);
				me.__152_tour_map_subway.ggMap.on('move zoom', function() {
					me.__152_tour_map_subway.ggCheckBounds(mapDetails);
					me.__152_tour_map_subway.ggRadar.update();
				});
				me.__152_tour_map_subway.ggCheckBounds(mapDetails);
			}
			me.__152_tour_map_subway.ggMapNotLoaded = false;
		}
		me.__152_tour_map_subway.ggClearMap=function() {
		me.__152_tour_map_subway.ggClearMapMarkers();
		if (me.__152_tour_map_subway.ggMap) me.__152_tour_map_subway.ggMap.remove();
		me.__152_tour_map_subway.ggMap = null;
		me.__152_tour_map_subway.ggMapNotLoaded = true;
		}
		me.__152_tour_map_subway.ggClearMapMarkers=function() {
			me.__152_tour_map_subway.ggLastActivMarker = null;
			var id,marker;
			var markers=me.__152_tour_map_subway.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me.__152_tour_map_subway.ggMap);
				}
			}
			me.__152_tour_map_subway.ggMarkerArray=[];
			me.__152_tour_map_subway.ggMarkerInstances=[];
			me.__152_tour_map_subway.ggLastActivMarker = null;
		}
		me.__152_tour_map_subway.ggCenterNode=function(nodeId) {
			if (!me.__152_tour_map_subway.ggMap) return;
			var gps;
			if (player.getMapType(me.__152_tour_map_subway.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me.__152_tour_map_subway.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me.__152_tour_map_subway.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me.__152_tour_map_subway.ggFitBounds=function(force) {
			if (me.__152_tour_map_subway.ggMapNotLoaded) return;
			if (!me.__152_tour_map_subway.ggMap) return;
			if (me.__152_tour_map_subway.ggMarkerBounds.isValid()) {
				if (me.__152_tour_map_subway.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me.__152_tour_map_subway.ggGoogleMarkerArray).length > 1) {
					me.__152_tour_map_subway.ggMap.zoomOut(1, {animate: false});
					me.__152_tour_map_subway.ggMap.fitBounds(me.__152_tour_map_subway.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me.__152_tour_map_subway.ggMap.setView(me.__152_tour_map_subway.ggMarkerBounds.getCenter(), me.__152_tour_map_subway.ggMap.getZoom());
					if (player.getMapType(me.__152_tour_map_subway.ggMapId) == 'web') {
						me.__152_tour_map_subway.ggMap.setZoom(18);
					} else {
						me.__152_tour_map_subway.ggMap.setZoom(7);
					}
				}
			}
		}
		me.__152_tour_map_subway.ggInitMapMarkers=function(updateMapBounds) {
			if (!me.__152_tour_map_subway.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me.__152_tour_map_subway.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__152_tour_map_subway.ggFilteredIds = [];
			if (me.__152_tour_map_subway.ggFilter != '') {
				var filter = me.__152_tour_map_subway.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__152_tour_map_subway.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__152_tour_map_subway.ggFilteredIds.length > 0) ids = me.__152_tour_map_subway.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me.__152_tour_map_subway.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me.__152_tour_map_subway.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me.__152_tour_map_subway.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement__22_map_pin_drone_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div.__22_map_pin_drone,markerLocation);
					marker.addTo(me.__152_tour_map_subway.ggMap);
					me.__152_tour_map_subway.ggMarkerArray[id]=marker;
					me.__152_tour_map_subway.ggMarkerInstances.push(div);
					me.__152_tour_map_subway.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me.__152_tour_map_subway.ggMarkerBounds.isValid() && updateMapBounds) {
				me.__152_tour_map_subway.ggFitBounds(false);
			}
			skin.updateSize(me.__152_tour_map_subway);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me.__152_tour_map_subway.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__152_tour_map_subway.ggMapId = mapId;
			if (!me.__152_tour_map_subway.ggMapNotLoaded) {
				me.__152_tour_map_subway.ggLastZoom = me.__152_tour_map_subway.ggMap.getZoom();
				me.__152_tour_map_subway.ggLastLat = me.__152_tour_map_subway.ggMap.getCenter().lat;
				me.__152_tour_map_subway.ggLastLng = me.__152_tour_map_subway.ggMap.getCenter().lng;
				me.__152_tour_map_subway.ggClearMap();
				me.__152_tour_map_subway.ggInitMap(true);
				me.__152_tour_map_subway.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me.__152_tour_map_subway.ggMapId);
				me.__152_tour_map_subway.ggCalculateFloorplanDimInDeg(mapDetails);
				me.__152_tour_map_subway.ggCheckBounds(mapDetails);
			}
		}
		me.__152_tour_map_subway.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me.__152_tour_map_subway.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me.__152_tour_map_subway.mapHeightInDeg = me.__152_tour_map_subway.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me.__152_tour_map_subway.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me.__152_tour_map_subway.mapWidthInDeg = me.__152_tour_map_subway.mapHeightInDeg * mapAR;
			}
		}
		me.__152_tour_map_subway.ggInCheckBounds=false;
		me.__152_tour_map_subway.ggCheckBounds=function(mapDetails) {
			if (me.__152_tour_map_subway.ggInCheckBounds) return;
			me.__152_tour_map_subway.ggInCheckBounds = true;
			var mapCenter = me.__152_tour_map_subway.ggMap.getCenter();
			var currentZoom = me.__152_tour_map_subway.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me.__152_tour_map_subway.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me.__152_tour_map_subway.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me.__152_tour_map_subway.mapWidthInDeg < me.__152_tour_map_subway.clientWidth * pixelInDeg) {
				var xMargin = (me.__152_tour_map_subway.clientWidth * pixelInDeg - me.__152_tour_map_subway.mapWidthInDeg) / 2;
				if (x < me.__152_tour_map_subway.mapWidthInDeg / 2 - xMargin) x = me.__152_tour_map_subway.mapWidthInDeg / 2 - xMargin;
				if (x > me.__152_tour_map_subway.mapWidthInDeg / 2 + xMargin) x = me.__152_tour_map_subway.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me.__152_tour_map_subway.mapWidthInDeg - xOffset) x = me.__152_tour_map_subway.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me.__152_tour_map_subway.mapHeightInDeg < me.__152_tour_map_subway.clientHeight * pixelInDeg) {
				var yMargin = (me.__152_tour_map_subway.clientHeight * pixelInDeg - me.__152_tour_map_subway.mapHeightInDeg) / 2;
				if (y < -me.__152_tour_map_subway.mapHeightInDeg / 2 - yMargin) y = -me.__152_tour_map_subway.mapHeightInDeg / 2 - yMargin;
				if (y > -me.__152_tour_map_subway.mapHeightInDeg / 2 + yMargin) y = -me.__152_tour_map_subway.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me.__152_tour_map_subway.mapHeightInDeg + yOffset) y = -me.__152_tour_map_subway.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me.__152_tour_map_subway.ggMap.setView(newCenter, me.__152_tour_map_subway.ggMap.getZoom(), {animate: false});
			}
			me.__152_tour_map_subway.ggInCheckBounds = false;
		}
		me.__152_tour_map_subway.logicBlock_visible();
		me.__153_tour_map_groundlevel.ggMarkerInstances=[];
		me.__153_tour_map_groundlevel.ggLastNodeId=null;
		me.__153_tour_map_groundlevel.ggMarkerArray=[];
		me.__153_tour_map_groundlevel.ggGoogleMarkerArray=[];
		me.__153_tour_map_groundlevel.ggLastZoom = -1;
		me.__153_tour_map_groundlevel.ggLastLat = 0.0;
		me.__153_tour_map_groundlevel.ggLastLng = 0.0;
		me.__153_tour_map_groundlevel.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me.__153_tour_map_groundlevel.ggRadar.update=function() {
			var radar=me.__153_tour_map_groundlevel.ggRadar;
			var map=me.__153_tour_map_groundlevel.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me.__153_tour_map_groundlevel.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__153_tour_map_groundlevel.ggMapId);
				pan -= me.__153_tour_map_groundlevel.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__153_tour_map_groundlevel.ggFilteredIds.length > 0 && me.__153_tour_map_groundlevel.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.15625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#0055ff',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#0055ff',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me.__153_tour_map_groundlevel.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me.__153_tour_map_groundlevel.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me.__153_tour_map_groundlevel.ggSetLayer=function(layerIndex) {
			if (typeof me.__153_tour_map_groundlevel.ggMapLayers === 'object' && me.__153_tour_map_groundlevel.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me.__153_tour_map_groundlevel.ggMapLayers).length) {
				me.__153_tour_map_groundlevel.ggMap.removeLayer(me.__153_tour_map_groundlevel.ggCurMap);
				me.__153_tour_map_groundlevel.ggCurMap = me.__153_tour_map_groundlevel.ggMapLayers[Object.keys(me.__153_tour_map_groundlevel.ggMapLayers)[layerIndex]];
				me.__153_tour_map_groundlevel.ggMap.addLayer(me.__153_tour_map_groundlevel.ggCurMap);
			}
		}
		me.__153_tour_map_groundlevel.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me.__153_tour_map_groundlevel.ggMapId);
			var mapDetails = player.getMapDetails(me.__153_tour_map_groundlevel.ggMapId);
			if (!me.__153_tour_map_groundlevel.ggMapId) return;
			if (!me.__153_tour_map_groundlevel.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me.__153_tour_map_groundlevel.style.backgroundColor = mapDetails['bgcolor'];
				me.__153_tour_map_groundlevel.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me.__153_tour_map_groundlevel.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me.__153_tour_map_groundlevel.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__153_tour_map_groundlevel.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me.__153_tour_map_groundlevel.ggLastLat, me.__153_tour_map_groundlevel.ggLastLng);
			}
			if (mapType == 'web') {
				if (me.__153_tour_map_groundlevel.ggLastZoom == -1) me.__153_tour_map_groundlevel.ggLastZoom = 14;
				var initZoom = keepZoom ? me.__153_tour_map_groundlevel.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me.__153_tour_map_groundlevel.ggMap = L.map(me.__153_tour_map_groundlevel, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me.__153_tour_map_groundlevel.ggMap.setMaxBounds(maxBounds);
					me.__153_tour_map_groundlevel.ggMap.setMinZoom(me.__153_tour_map_groundlevel.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me.__153_tour_map_groundlevel.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me.__153_tour_map_groundlevel.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me.__153_tour_map_groundlevel.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me.__153_tour_map_groundlevel.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__153_tour_map_groundlevel.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__153_tour_map_groundlevel.ggMapLayers, overlayMaps).addTo(me.__153_tour_map_groundlevel.ggMap);
						me.__153_tour_map_groundlevel.ggCurMap.addTo(me.__153_tour_map_groundlevel.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me.__153_tour_map_groundlevel.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me.__153_tour_map_groundlevel.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me.__153_tour_map_groundlevel.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__153_tour_map_groundlevel.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__153_tour_map_groundlevel.ggMapLayers, overlayMaps).addTo(me.__153_tour_map_groundlevel.ggMap);
						me.__153_tour_map_groundlevel.ggCurMap.addTo(me.__153_tour_map_groundlevel.ggMap);
						me.__153_tour_map_groundlevel.ggMap.on('baselayerchange', function(event) {
							me.__153_tour_map_groundlevel.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me.__153_tour_map_groundlevel.ggMap);
					}
				}
				me.__153_tour_map_groundlevel.ggMap.on('zoom', function() {
					me.__153_tour_map_groundlevel.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me.__153_tour_map_groundlevel.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me.__153_tour_map_groundlevel.mapHeightInDeg / 2;
					mapCenter.lng = me.__153_tour_map_groundlevel.mapWidthInDeg / 2;
				}
				if (me.__153_tour_map_groundlevel.ggLastZoom == -1) me.__153_tour_map_groundlevel.ggLastZoom = 7;
				var initZoom = keepZoom ? me.__153_tour_map_groundlevel.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me.__153_tour_map_groundlevel.ggMap = L.map(me.__153_tour_map_groundlevel, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me.__153_tour_map_groundlevel.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me.__153_tour_map_groundlevel.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me.__153_tour_map_groundlevel.ggMap);
				me.__153_tour_map_groundlevel.ggMap.on('move zoom', function() {
					me.__153_tour_map_groundlevel.ggCheckBounds(mapDetails);
					me.__153_tour_map_groundlevel.ggRadar.update();
				});
				me.__153_tour_map_groundlevel.ggCheckBounds(mapDetails);
			}
			me.__153_tour_map_groundlevel.ggMapNotLoaded = false;
		}
		me.__153_tour_map_groundlevel.ggClearMap=function() {
		me.__153_tour_map_groundlevel.ggClearMapMarkers();
		if (me.__153_tour_map_groundlevel.ggMap) me.__153_tour_map_groundlevel.ggMap.remove();
		me.__153_tour_map_groundlevel.ggMap = null;
		me.__153_tour_map_groundlevel.ggMapNotLoaded = true;
		}
		me.__153_tour_map_groundlevel.ggClearMapMarkers=function() {
			me.__153_tour_map_groundlevel.ggLastActivMarker = null;
			var id,marker;
			var markers=me.__153_tour_map_groundlevel.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me.__153_tour_map_groundlevel.ggMap);
				}
			}
			me.__153_tour_map_groundlevel.ggMarkerArray=[];
			me.__153_tour_map_groundlevel.ggMarkerInstances=[];
			me.__153_tour_map_groundlevel.ggLastActivMarker = null;
		}
		me.__153_tour_map_groundlevel.ggCenterNode=function(nodeId) {
			if (!me.__153_tour_map_groundlevel.ggMap) return;
			var gps;
			if (player.getMapType(me.__153_tour_map_groundlevel.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me.__153_tour_map_groundlevel.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me.__153_tour_map_groundlevel.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me.__153_tour_map_groundlevel.ggFitBounds=function(force) {
			if (me.__153_tour_map_groundlevel.ggMapNotLoaded) return;
			if (!me.__153_tour_map_groundlevel.ggMap) return;
			if (me.__153_tour_map_groundlevel.ggMarkerBounds.isValid()) {
				if (me.__153_tour_map_groundlevel.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me.__153_tour_map_groundlevel.ggGoogleMarkerArray).length > 1) {
					me.__153_tour_map_groundlevel.ggMap.zoomOut(1, {animate: false});
					me.__153_tour_map_groundlevel.ggMap.fitBounds(me.__153_tour_map_groundlevel.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me.__153_tour_map_groundlevel.ggMap.setView(me.__153_tour_map_groundlevel.ggMarkerBounds.getCenter(), me.__153_tour_map_groundlevel.ggMap.getZoom());
					if (player.getMapType(me.__153_tour_map_groundlevel.ggMapId) == 'web') {
						me.__153_tour_map_groundlevel.ggMap.setZoom(18);
					} else {
						me.__153_tour_map_groundlevel.ggMap.setZoom(7);
					}
				}
			}
		}
		me.__153_tour_map_groundlevel.ggInitMapMarkers=function(updateMapBounds) {
			if (!me.__153_tour_map_groundlevel.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me.__153_tour_map_groundlevel.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__153_tour_map_groundlevel.ggFilteredIds = [];
			if (me.__153_tour_map_groundlevel.ggFilter != '') {
				var filter = me.__153_tour_map_groundlevel.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__153_tour_map_groundlevel.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__153_tour_map_groundlevel.ggFilteredIds.length > 0) ids = me.__153_tour_map_groundlevel.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me.__153_tour_map_groundlevel.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me.__153_tour_map_groundlevel.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me.__153_tour_map_groundlevel.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement__22_map_pin_walk_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div.__22_map_pin_walk,markerLocation);
					marker.addTo(me.__153_tour_map_groundlevel.ggMap);
					me.__153_tour_map_groundlevel.ggMarkerArray[id]=marker;
					me.__153_tour_map_groundlevel.ggMarkerInstances.push(div);
					me.__153_tour_map_groundlevel.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me.__153_tour_map_groundlevel.ggMarkerBounds.isValid() && updateMapBounds) {
				me.__153_tour_map_groundlevel.ggFitBounds(false);
			}
			skin.updateSize(me.__153_tour_map_groundlevel);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me.__153_tour_map_groundlevel.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__153_tour_map_groundlevel.ggMapId = mapId;
			if (!me.__153_tour_map_groundlevel.ggMapNotLoaded) {
				me.__153_tour_map_groundlevel.ggLastZoom = me.__153_tour_map_groundlevel.ggMap.getZoom();
				me.__153_tour_map_groundlevel.ggLastLat = me.__153_tour_map_groundlevel.ggMap.getCenter().lat;
				me.__153_tour_map_groundlevel.ggLastLng = me.__153_tour_map_groundlevel.ggMap.getCenter().lng;
				me.__153_tour_map_groundlevel.ggClearMap();
				me.__153_tour_map_groundlevel.ggInitMap(true);
				me.__153_tour_map_groundlevel.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me.__153_tour_map_groundlevel.ggMapId);
				me.__153_tour_map_groundlevel.ggCalculateFloorplanDimInDeg(mapDetails);
				me.__153_tour_map_groundlevel.ggCheckBounds(mapDetails);
			}
		}
		me.__153_tour_map_groundlevel.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me.__153_tour_map_groundlevel.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me.__153_tour_map_groundlevel.mapHeightInDeg = me.__153_tour_map_groundlevel.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me.__153_tour_map_groundlevel.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me.__153_tour_map_groundlevel.mapWidthInDeg = me.__153_tour_map_groundlevel.mapHeightInDeg * mapAR;
			}
		}
		me.__153_tour_map_groundlevel.ggInCheckBounds=false;
		me.__153_tour_map_groundlevel.ggCheckBounds=function(mapDetails) {
			if (me.__153_tour_map_groundlevel.ggInCheckBounds) return;
			me.__153_tour_map_groundlevel.ggInCheckBounds = true;
			var mapCenter = me.__153_tour_map_groundlevel.ggMap.getCenter();
			var currentZoom = me.__153_tour_map_groundlevel.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me.__153_tour_map_groundlevel.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me.__153_tour_map_groundlevel.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me.__153_tour_map_groundlevel.mapWidthInDeg < me.__153_tour_map_groundlevel.clientWidth * pixelInDeg) {
				var xMargin = (me.__153_tour_map_groundlevel.clientWidth * pixelInDeg - me.__153_tour_map_groundlevel.mapWidthInDeg) / 2;
				if (x < me.__153_tour_map_groundlevel.mapWidthInDeg / 2 - xMargin) x = me.__153_tour_map_groundlevel.mapWidthInDeg / 2 - xMargin;
				if (x > me.__153_tour_map_groundlevel.mapWidthInDeg / 2 + xMargin) x = me.__153_tour_map_groundlevel.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me.__153_tour_map_groundlevel.mapWidthInDeg - xOffset) x = me.__153_tour_map_groundlevel.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me.__153_tour_map_groundlevel.mapHeightInDeg < me.__153_tour_map_groundlevel.clientHeight * pixelInDeg) {
				var yMargin = (me.__153_tour_map_groundlevel.clientHeight * pixelInDeg - me.__153_tour_map_groundlevel.mapHeightInDeg) / 2;
				if (y < -me.__153_tour_map_groundlevel.mapHeightInDeg / 2 - yMargin) y = -me.__153_tour_map_groundlevel.mapHeightInDeg / 2 - yMargin;
				if (y > -me.__153_tour_map_groundlevel.mapHeightInDeg / 2 + yMargin) y = -me.__153_tour_map_groundlevel.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me.__153_tour_map_groundlevel.mapHeightInDeg + yOffset) y = -me.__153_tour_map_groundlevel.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me.__153_tour_map_groundlevel.ggMap.setView(newCenter, me.__153_tour_map_groundlevel.ggMap.getZoom(), {animate: false});
			}
			me.__153_tour_map_groundlevel.ggInCheckBounds = false;
		}
		me.__153_tour_map_groundlevel.logicBlock_visible();
		me.__154_toggle_subway.logicBlock_visible();
		me.__155_toggle_groundlevel.logicBlock_visible();
		me.__16_tour_map_mob.logicBlock_visible();
		me.__16_tour_map_mob.logicBlock_alpha();
		me.__163_tour_map_drone.ggMarkerInstances=[];
		me.__163_tour_map_drone.ggLastNodeId=null;
		me.__163_tour_map_drone.ggMarkerArray=[];
		me.__163_tour_map_drone.ggGoogleMarkerArray=[];
		me.__163_tour_map_drone.ggLastZoom = -1;
		me.__163_tour_map_drone.ggLastLat = 0.0;
		me.__163_tour_map_drone.ggLastLng = 0.0;
		me.__163_tour_map_drone.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me.__163_tour_map_drone.ggRadar.update=function() {
			var radar=me.__163_tour_map_drone.ggRadar;
			var map=me.__163_tour_map_drone.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me.__163_tour_map_drone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__163_tour_map_drone.ggMapId);
				pan -= me.__163_tour_map_drone.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__163_tour_map_drone.ggFilteredIds.length > 0 && me.__163_tour_map_drone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.15625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#0055ff',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#0055ff',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me.__163_tour_map_drone.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me.__163_tour_map_drone.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me.__163_tour_map_drone.ggSetLayer=function(layerIndex) {
			if (typeof me.__163_tour_map_drone.ggMapLayers === 'object' && me.__163_tour_map_drone.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me.__163_tour_map_drone.ggMapLayers).length) {
				me.__163_tour_map_drone.ggMap.removeLayer(me.__163_tour_map_drone.ggCurMap);
				me.__163_tour_map_drone.ggCurMap = me.__163_tour_map_drone.ggMapLayers[Object.keys(me.__163_tour_map_drone.ggMapLayers)[layerIndex]];
				me.__163_tour_map_drone.ggMap.addLayer(me.__163_tour_map_drone.ggCurMap);
			}
		}
		me.__163_tour_map_drone.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me.__163_tour_map_drone.ggMapId);
			var mapDetails = player.getMapDetails(me.__163_tour_map_drone.ggMapId);
			if (!me.__163_tour_map_drone.ggMapId) return;
			if (!me.__163_tour_map_drone.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me.__163_tour_map_drone.style.backgroundColor = mapDetails['bgcolor'];
				me.__163_tour_map_drone.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me.__163_tour_map_drone.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me.__163_tour_map_drone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__163_tour_map_drone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me.__163_tour_map_drone.ggLastLat, me.__163_tour_map_drone.ggLastLng);
			}
			if (mapType == 'web') {
				if (me.__163_tour_map_drone.ggLastZoom == -1) me.__163_tour_map_drone.ggLastZoom = 14;
				var initZoom = keepZoom ? me.__163_tour_map_drone.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me.__163_tour_map_drone.ggMap = L.map(me.__163_tour_map_drone, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me.__163_tour_map_drone.ggMap.setMaxBounds(maxBounds);
					me.__163_tour_map_drone.ggMap.setMinZoom(me.__163_tour_map_drone.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me.__163_tour_map_drone.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me.__163_tour_map_drone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me.__163_tour_map_drone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me.__163_tour_map_drone.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__163_tour_map_drone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__163_tour_map_drone.ggMapLayers, overlayMaps).addTo(me.__163_tour_map_drone.ggMap);
						me.__163_tour_map_drone.ggCurMap.addTo(me.__163_tour_map_drone.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me.__163_tour_map_drone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me.__163_tour_map_drone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me.__163_tour_map_drone.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__163_tour_map_drone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__163_tour_map_drone.ggMapLayers, overlayMaps).addTo(me.__163_tour_map_drone.ggMap);
						me.__163_tour_map_drone.ggCurMap.addTo(me.__163_tour_map_drone.ggMap);
						me.__163_tour_map_drone.ggMap.on('baselayerchange', function(event) {
							me.__163_tour_map_drone.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me.__163_tour_map_drone.ggMap);
					}
				}
				me.__163_tour_map_drone.ggMap.on('zoom', function() {
					me.__163_tour_map_drone.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me.__163_tour_map_drone.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me.__163_tour_map_drone.mapHeightInDeg / 2;
					mapCenter.lng = me.__163_tour_map_drone.mapWidthInDeg / 2;
				}
				if (me.__163_tour_map_drone.ggLastZoom == -1) me.__163_tour_map_drone.ggLastZoom = 7;
				var initZoom = keepZoom ? me.__163_tour_map_drone.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me.__163_tour_map_drone.ggMap = L.map(me.__163_tour_map_drone, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me.__163_tour_map_drone.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me.__163_tour_map_drone.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me.__163_tour_map_drone.ggMap);
				me.__163_tour_map_drone.ggMap.on('move zoom', function() {
					me.__163_tour_map_drone.ggCheckBounds(mapDetails);
					me.__163_tour_map_drone.ggRadar.update();
				});
				me.__163_tour_map_drone.ggCheckBounds(mapDetails);
			}
			me.__163_tour_map_drone.ggMapNotLoaded = false;
		}
		me.__163_tour_map_drone.ggClearMap=function() {
		me.__163_tour_map_drone.ggClearMapMarkers();
		if (me.__163_tour_map_drone.ggMap) me.__163_tour_map_drone.ggMap.remove();
		me.__163_tour_map_drone.ggMap = null;
		me.__163_tour_map_drone.ggMapNotLoaded = true;
		}
		me.__163_tour_map_drone.ggClearMapMarkers=function() {
			me.__163_tour_map_drone.ggLastActivMarker = null;
			var id,marker;
			var markers=me.__163_tour_map_drone.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me.__163_tour_map_drone.ggMap);
				}
			}
			me.__163_tour_map_drone.ggMarkerArray=[];
			me.__163_tour_map_drone.ggMarkerInstances=[];
			me.__163_tour_map_drone.ggLastActivMarker = null;
		}
		me.__163_tour_map_drone.ggCenterNode=function(nodeId) {
			if (!me.__163_tour_map_drone.ggMap) return;
			var gps;
			if (player.getMapType(me.__163_tour_map_drone.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me.__163_tour_map_drone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me.__163_tour_map_drone.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me.__163_tour_map_drone.ggFitBounds=function(force) {
			if (me.__163_tour_map_drone.ggMapNotLoaded) return;
			if (!me.__163_tour_map_drone.ggMap) return;
			if (me.__163_tour_map_drone.ggMarkerBounds.isValid()) {
				if (me.__163_tour_map_drone.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me.__163_tour_map_drone.ggGoogleMarkerArray).length > 1) {
					me.__163_tour_map_drone.ggMap.zoomOut(1, {animate: false});
					me.__163_tour_map_drone.ggMap.fitBounds(me.__163_tour_map_drone.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me.__163_tour_map_drone.ggMap.setView(me.__163_tour_map_drone.ggMarkerBounds.getCenter(), me.__163_tour_map_drone.ggMap.getZoom());
					if (player.getMapType(me.__163_tour_map_drone.ggMapId) == 'web') {
						me.__163_tour_map_drone.ggMap.setZoom(18);
					} else {
						me.__163_tour_map_drone.ggMap.setZoom(7);
					}
				}
			}
		}
		me.__163_tour_map_drone.ggInitMapMarkers=function(updateMapBounds) {
			if (!me.__163_tour_map_drone.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me.__163_tour_map_drone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__163_tour_map_drone.ggFilteredIds = [];
			if (me.__163_tour_map_drone.ggFilter != '') {
				var filter = me.__163_tour_map_drone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__163_tour_map_drone.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__163_tour_map_drone.ggFilteredIds.length > 0) ids = me.__163_tour_map_drone.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me.__163_tour_map_drone.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me.__163_tour_map_drone.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me.__163_tour_map_drone.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement__22_map_pin_drone_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div.__22_map_pin_drone,markerLocation);
					marker.addTo(me.__163_tour_map_drone.ggMap);
					me.__163_tour_map_drone.ggMarkerArray[id]=marker;
					me.__163_tour_map_drone.ggMarkerInstances.push(div);
					me.__163_tour_map_drone.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me.__163_tour_map_drone.ggMarkerBounds.isValid() && updateMapBounds) {
				me.__163_tour_map_drone.ggFitBounds(false);
			}
			skin.updateSize(me.__163_tour_map_drone);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me.__163_tour_map_drone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__163_tour_map_drone.ggMapId = mapId;
			if (!me.__163_tour_map_drone.ggMapNotLoaded) {
				me.__163_tour_map_drone.ggLastZoom = me.__163_tour_map_drone.ggMap.getZoom();
				me.__163_tour_map_drone.ggLastLat = me.__163_tour_map_drone.ggMap.getCenter().lat;
				me.__163_tour_map_drone.ggLastLng = me.__163_tour_map_drone.ggMap.getCenter().lng;
				me.__163_tour_map_drone.ggClearMap();
				me.__163_tour_map_drone.ggInitMap(true);
				me.__163_tour_map_drone.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me.__163_tour_map_drone.ggMapId);
				me.__163_tour_map_drone.ggCalculateFloorplanDimInDeg(mapDetails);
				me.__163_tour_map_drone.ggCheckBounds(mapDetails);
			}
		}
		me.__163_tour_map_drone.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me.__163_tour_map_drone.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me.__163_tour_map_drone.mapHeightInDeg = me.__163_tour_map_drone.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me.__163_tour_map_drone.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me.__163_tour_map_drone.mapWidthInDeg = me.__163_tour_map_drone.mapHeightInDeg * mapAR;
			}
		}
		me.__163_tour_map_drone.ggInCheckBounds=false;
		me.__163_tour_map_drone.ggCheckBounds=function(mapDetails) {
			if (me.__163_tour_map_drone.ggInCheckBounds) return;
			me.__163_tour_map_drone.ggInCheckBounds = true;
			var mapCenter = me.__163_tour_map_drone.ggMap.getCenter();
			var currentZoom = me.__163_tour_map_drone.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me.__163_tour_map_drone.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me.__163_tour_map_drone.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me.__163_tour_map_drone.mapWidthInDeg < me.__163_tour_map_drone.clientWidth * pixelInDeg) {
				var xMargin = (me.__163_tour_map_drone.clientWidth * pixelInDeg - me.__163_tour_map_drone.mapWidthInDeg) / 2;
				if (x < me.__163_tour_map_drone.mapWidthInDeg / 2 - xMargin) x = me.__163_tour_map_drone.mapWidthInDeg / 2 - xMargin;
				if (x > me.__163_tour_map_drone.mapWidthInDeg / 2 + xMargin) x = me.__163_tour_map_drone.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me.__163_tour_map_drone.mapWidthInDeg - xOffset) x = me.__163_tour_map_drone.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me.__163_tour_map_drone.mapHeightInDeg < me.__163_tour_map_drone.clientHeight * pixelInDeg) {
				var yMargin = (me.__163_tour_map_drone.clientHeight * pixelInDeg - me.__163_tour_map_drone.mapHeightInDeg) / 2;
				if (y < -me.__163_tour_map_drone.mapHeightInDeg / 2 - yMargin) y = -me.__163_tour_map_drone.mapHeightInDeg / 2 - yMargin;
				if (y > -me.__163_tour_map_drone.mapHeightInDeg / 2 + yMargin) y = -me.__163_tour_map_drone.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me.__163_tour_map_drone.mapHeightInDeg + yOffset) y = -me.__163_tour_map_drone.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me.__163_tour_map_drone.ggMap.setView(newCenter, me.__163_tour_map_drone.ggMap.getZoom(), {animate: false});
			}
			me.__163_tour_map_drone.ggInCheckBounds = false;
		}
		me.__163_tour_map_drone.logicBlock_visible();
		me.__164_tour_map_walk.ggMarkerInstances=[];
		me.__164_tour_map_walk.ggLastNodeId=null;
		me.__164_tour_map_walk.ggMarkerArray=[];
		me.__164_tour_map_walk.ggGoogleMarkerArray=[];
		me.__164_tour_map_walk.ggLastZoom = -1;
		me.__164_tour_map_walk.ggLastLat = 0.0;
		me.__164_tour_map_walk.ggLastLng = 0.0;
		me.__164_tour_map_walk.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me.__164_tour_map_walk.ggRadar.update=function() {
			var radar=me.__164_tour_map_walk.ggRadar;
			var map=me.__164_tour_map_walk.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me.__164_tour_map_walk.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__164_tour_map_walk.ggMapId);
				pan -= me.__164_tour_map_walk.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me.__164_tour_map_walk.ggFilteredIds.length > 0 && me.__164_tour_map_walk.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.15625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#0055ff',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#0055ff',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me.__164_tour_map_walk.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me.__164_tour_map_walk.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me.__164_tour_map_walk.ggSetLayer=function(layerIndex) {
			if (typeof me.__164_tour_map_walk.ggMapLayers === 'object' && me.__164_tour_map_walk.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me.__164_tour_map_walk.ggMapLayers).length) {
				me.__164_tour_map_walk.ggMap.removeLayer(me.__164_tour_map_walk.ggCurMap);
				me.__164_tour_map_walk.ggCurMap = me.__164_tour_map_walk.ggMapLayers[Object.keys(me.__164_tour_map_walk.ggMapLayers)[layerIndex]];
				me.__164_tour_map_walk.ggMap.addLayer(me.__164_tour_map_walk.ggCurMap);
			}
		}
		me.__164_tour_map_walk.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me.__164_tour_map_walk.ggMapId);
			var mapDetails = player.getMapDetails(me.__164_tour_map_walk.ggMapId);
			if (!me.__164_tour_map_walk.ggMapId) return;
			if (!me.__164_tour_map_walk.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me.__164_tour_map_walk.style.backgroundColor = mapDetails['bgcolor'];
				me.__164_tour_map_walk.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me.__164_tour_map_walk.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me.__164_tour_map_walk.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me.__164_tour_map_walk.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me.__164_tour_map_walk.ggLastLat, me.__164_tour_map_walk.ggLastLng);
			}
			if (mapType == 'web') {
				if (me.__164_tour_map_walk.ggLastZoom == -1) me.__164_tour_map_walk.ggLastZoom = 14;
				var initZoom = keepZoom ? me.__164_tour_map_walk.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me.__164_tour_map_walk.ggMap = L.map(me.__164_tour_map_walk, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me.__164_tour_map_walk.ggMap.setMaxBounds(maxBounds);
					me.__164_tour_map_walk.ggMap.setMinZoom(me.__164_tour_map_walk.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me.__164_tour_map_walk.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me.__164_tour_map_walk.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me.__164_tour_map_walk.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me.__164_tour_map_walk.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__164_tour_map_walk.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__164_tour_map_walk.ggMapLayers, overlayMaps).addTo(me.__164_tour_map_walk.ggMap);
						me.__164_tour_map_walk.ggCurMap.addTo(me.__164_tour_map_walk.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me.__164_tour_map_walk.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me.__164_tour_map_walk.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me.__164_tour_map_walk.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me.__164_tour_map_walk.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me.__164_tour_map_walk.ggMapLayers, overlayMaps).addTo(me.__164_tour_map_walk.ggMap);
						me.__164_tour_map_walk.ggCurMap.addTo(me.__164_tour_map_walk.ggMap);
						me.__164_tour_map_walk.ggMap.on('baselayerchange', function(event) {
							me.__164_tour_map_walk.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me.__164_tour_map_walk.ggMap);
					}
				}
				me.__164_tour_map_walk.ggMap.on('zoom', function() {
					me.__164_tour_map_walk.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me.__164_tour_map_walk.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me.__164_tour_map_walk.mapHeightInDeg / 2;
					mapCenter.lng = me.__164_tour_map_walk.mapWidthInDeg / 2;
				}
				if (me.__164_tour_map_walk.ggLastZoom == -1) me.__164_tour_map_walk.ggLastZoom = 7;
				var initZoom = keepZoom ? me.__164_tour_map_walk.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me.__164_tour_map_walk.ggMap = L.map(me.__164_tour_map_walk, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me.__164_tour_map_walk.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me.__164_tour_map_walk.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me.__164_tour_map_walk.ggMap);
				me.__164_tour_map_walk.ggMap.on('move zoom', function() {
					me.__164_tour_map_walk.ggCheckBounds(mapDetails);
					me.__164_tour_map_walk.ggRadar.update();
				});
				me.__164_tour_map_walk.ggCheckBounds(mapDetails);
			}
			me.__164_tour_map_walk.ggMapNotLoaded = false;
		}
		me.__164_tour_map_walk.ggClearMap=function() {
		me.__164_tour_map_walk.ggClearMapMarkers();
		if (me.__164_tour_map_walk.ggMap) me.__164_tour_map_walk.ggMap.remove();
		me.__164_tour_map_walk.ggMap = null;
		me.__164_tour_map_walk.ggMapNotLoaded = true;
		}
		me.__164_tour_map_walk.ggClearMapMarkers=function() {
			me.__164_tour_map_walk.ggLastActivMarker = null;
			var id,marker;
			var markers=me.__164_tour_map_walk.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me.__164_tour_map_walk.ggMap);
				}
			}
			me.__164_tour_map_walk.ggMarkerArray=[];
			me.__164_tour_map_walk.ggMarkerInstances=[];
			me.__164_tour_map_walk.ggLastActivMarker = null;
		}
		me.__164_tour_map_walk.ggCenterNode=function(nodeId) {
			if (!me.__164_tour_map_walk.ggMap) return;
			var gps;
			if (player.getMapType(me.__164_tour_map_walk.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me.__164_tour_map_walk.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me.__164_tour_map_walk.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me.__164_tour_map_walk.ggFitBounds=function(force) {
			if (me.__164_tour_map_walk.ggMapNotLoaded) return;
			if (!me.__164_tour_map_walk.ggMap) return;
			if (me.__164_tour_map_walk.ggMarkerBounds.isValid()) {
				if (me.__164_tour_map_walk.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me.__164_tour_map_walk.ggGoogleMarkerArray).length > 1) {
					me.__164_tour_map_walk.ggMap.zoomOut(1, {animate: false});
					me.__164_tour_map_walk.ggMap.fitBounds(me.__164_tour_map_walk.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me.__164_tour_map_walk.ggMap.setView(me.__164_tour_map_walk.ggMarkerBounds.getCenter(), me.__164_tour_map_walk.ggMap.getZoom());
					if (player.getMapType(me.__164_tour_map_walk.ggMapId) == 'web') {
						me.__164_tour_map_walk.ggMap.setZoom(18);
					} else {
						me.__164_tour_map_walk.ggMap.setZoom(7);
					}
				}
			}
		}
		me.__164_tour_map_walk.ggInitMapMarkers=function(updateMapBounds) {
			if (!me.__164_tour_map_walk.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me.__164_tour_map_walk.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me.__164_tour_map_walk.ggFilteredIds = [];
			if (me.__164_tour_map_walk.ggFilter != '') {
				var filter = me.__164_tour_map_walk.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me.__164_tour_map_walk.ggFilteredIds.push(nodeId);
					}
				}
				if (me.__164_tour_map_walk.ggFilteredIds.length > 0) ids = me.__164_tour_map_walk.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me.__164_tour_map_walk.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me.__164_tour_map_walk.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me.__164_tour_map_walk.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement__22_map_pin_walk_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div.__22_map_pin_walk,markerLocation);
					marker.addTo(me.__164_tour_map_walk.ggMap);
					me.__164_tour_map_walk.ggMarkerArray[id]=marker;
					me.__164_tour_map_walk.ggMarkerInstances.push(div);
					me.__164_tour_map_walk.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me.__164_tour_map_walk.ggMarkerBounds.isValid() && updateMapBounds) {
				me.__164_tour_map_walk.ggFitBounds(false);
			}
			skin.updateSize(me.__164_tour_map_walk);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me.__164_tour_map_walk.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me.__164_tour_map_walk.ggMapId = mapId;
			if (!me.__164_tour_map_walk.ggMapNotLoaded) {
				me.__164_tour_map_walk.ggLastZoom = me.__164_tour_map_walk.ggMap.getZoom();
				me.__164_tour_map_walk.ggLastLat = me.__164_tour_map_walk.ggMap.getCenter().lat;
				me.__164_tour_map_walk.ggLastLng = me.__164_tour_map_walk.ggMap.getCenter().lng;
				me.__164_tour_map_walk.ggClearMap();
				me.__164_tour_map_walk.ggInitMap(true);
				me.__164_tour_map_walk.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me.__164_tour_map_walk.ggMapId);
				me.__164_tour_map_walk.ggCalculateFloorplanDimInDeg(mapDetails);
				me.__164_tour_map_walk.ggCheckBounds(mapDetails);
			}
		}
		me.__164_tour_map_walk.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me.__164_tour_map_walk.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me.__164_tour_map_walk.mapHeightInDeg = me.__164_tour_map_walk.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me.__164_tour_map_walk.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me.__164_tour_map_walk.mapWidthInDeg = me.__164_tour_map_walk.mapHeightInDeg * mapAR;
			}
		}
		me.__164_tour_map_walk.ggInCheckBounds=false;
		me.__164_tour_map_walk.ggCheckBounds=function(mapDetails) {
			if (me.__164_tour_map_walk.ggInCheckBounds) return;
			me.__164_tour_map_walk.ggInCheckBounds = true;
			var mapCenter = me.__164_tour_map_walk.ggMap.getCenter();
			var currentZoom = me.__164_tour_map_walk.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me.__164_tour_map_walk.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me.__164_tour_map_walk.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me.__164_tour_map_walk.mapWidthInDeg < me.__164_tour_map_walk.clientWidth * pixelInDeg) {
				var xMargin = (me.__164_tour_map_walk.clientWidth * pixelInDeg - me.__164_tour_map_walk.mapWidthInDeg) / 2;
				if (x < me.__164_tour_map_walk.mapWidthInDeg / 2 - xMargin) x = me.__164_tour_map_walk.mapWidthInDeg / 2 - xMargin;
				if (x > me.__164_tour_map_walk.mapWidthInDeg / 2 + xMargin) x = me.__164_tour_map_walk.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me.__164_tour_map_walk.mapWidthInDeg - xOffset) x = me.__164_tour_map_walk.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me.__164_tour_map_walk.mapHeightInDeg < me.__164_tour_map_walk.clientHeight * pixelInDeg) {
				var yMargin = (me.__164_tour_map_walk.clientHeight * pixelInDeg - me.__164_tour_map_walk.mapHeightInDeg) / 2;
				if (y < -me.__164_tour_map_walk.mapHeightInDeg / 2 - yMargin) y = -me.__164_tour_map_walk.mapHeightInDeg / 2 - yMargin;
				if (y > -me.__164_tour_map_walk.mapHeightInDeg / 2 + yMargin) y = -me.__164_tour_map_walk.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me.__164_tour_map_walk.mapHeightInDeg + yOffset) y = -me.__164_tour_map_walk.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me.__164_tour_map_walk.ggMap.setView(newCenter, me.__164_tour_map_walk.ggMap.getZoom(), {animate: false});
			}
			me.__164_tour_map_walk.ggInCheckBounds = false;
		}
		me.__164_tour_map_walk.logicBlock_visible();
		me.__165_toggle_drone.logicBlock_visible();
		me.__166_toggle_walk.logicBlock_visible();
		me.__19_vt_title.logicBlock_scaling();
		me.__19_vt_title.logicBlock_visible();
		me.__19_vt_title.logicBlock_alpha();
		me.__20_vt_title_mob.logicBlock_scaling();
		me.__20_vt_title_mob.logicBlock_visible();
		me.__20_vt_title_mob.logicBlock_alpha();
		me.__21_lac_logo.logicBlock_visible();
		me.__23_stop_autorotate.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
				me._thumbnail_cloner0.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
				me._thumbnail_cloner1.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
				me._thumbnail_cloner2.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
				me._thumbnail_cloner0.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
				me._thumbnail_cloner1.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
				me._thumbnail_cloner2.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('A05_ht_node_subway')) {
				for(var i = 0; i < hotspotTemplates['A05_ht_node_subway'].length; i++) {
					hotspotTemplates['A05_ht_node_subway'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('A06_ht_node_groundLevel')) {
				for(var i = 0; i < hotspotTemplates['A06_ht_node_groundLevel'].length; i++) {
					hotspotTemplates['A06_ht_node_groundLevel'][i].ggEvent_changenode();
				}
			}
			me._a01_thumbnail_subway.logicBlock_alpha();
			me._thumbnail_cloner2.ggUpdateConditionNodeChange();
			me._a02_thumbnail_groundlevel.logicBlock_alpha();
			me._thumbnail_cloner1.ggUpdateConditionNodeChange();
			me._a03_thumbnail_subway_mob.logicBlock_alpha();
			me._thumbnail_cloner0.ggUpdateConditionNodeChange();
			me._a04_thumbnail_groundlevel_mob.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me.__011_background.logicBlock_visible();
			me.__013_subway.logicBlock_visible();
			me.__014_groundlevel.logicBlock_visible();
			me.__015_map_hidden.logicBlock_visible();
			me.__016_map_visible.logicBlock_visible();
			me.__022_toggle_groundlevel.logicBlock_alpha();
			me.__023_toggle_subway.logicBlock_alpha();
			me.__031_bottom_menu_background.logicBlock_visible();
			me.__032_walk.logicBlock_visible();
			me.__033_drone.logicBlock_visible();
			me.__034_map_visible.logicBlock_visible();
			me.__041_background.logicBlock_visible();
			me.__052_toggle_walk.logicBlock_alpha();
			me.__053_toggle_drone.logicBlock_alpha();
			me.__15_tour_map.logicBlock_scaling();
			me.__152_tour_map_subway.logicBlock_visible();
			for (var i=0; i < me.__152_tour_map_subway.ggMarkerInstances.length; i++) {
				me.__152_tour_map_subway.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me.__152_tour_map_subway.ggLastActivMarker) {
				if (me.__152_tour_map_subway.ggLastActivMarker._div.ggDeactivate) me.__152_tour_map_subway.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me.__152_tour_map_subway.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me.__152_tour_map_subway.ggLastActivMarker=marker;
			}
			if (!me.__152_tour_map_subway.ggMapNotLoaded) {
				me.__152_tour_map_subway.ggCenterNode();
			}
			me.__152_tour_map_subway.ggLastNodeId = id;
			me.__152_tour_map_subway.ggRadar.update();
			me.__153_tour_map_groundlevel.logicBlock_visible();
			for (var i=0; i < me.__153_tour_map_groundlevel.ggMarkerInstances.length; i++) {
				me.__153_tour_map_groundlevel.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me.__153_tour_map_groundlevel.ggLastActivMarker) {
				if (me.__153_tour_map_groundlevel.ggLastActivMarker._div.ggDeactivate) me.__153_tour_map_groundlevel.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me.__153_tour_map_groundlevel.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me.__153_tour_map_groundlevel.ggLastActivMarker=marker;
			}
			if (!me.__153_tour_map_groundlevel.ggMapNotLoaded) {
				me.__153_tour_map_groundlevel.ggCenterNode();
			}
			me.__153_tour_map_groundlevel.ggLastNodeId = id;
			me.__153_tour_map_groundlevel.ggRadar.update();
			me.__154_toggle_subway.logicBlock_visible();
			me.__155_toggle_groundlevel.logicBlock_visible();
			me.__16_tour_map_mob.logicBlock_alpha();
			me.__163_tour_map_drone.logicBlock_visible();
			for (var i=0; i < me.__163_tour_map_drone.ggMarkerInstances.length; i++) {
				me.__163_tour_map_drone.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me.__163_tour_map_drone.ggLastActivMarker) {
				if (me.__163_tour_map_drone.ggLastActivMarker._div.ggDeactivate) me.__163_tour_map_drone.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me.__163_tour_map_drone.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me.__163_tour_map_drone.ggLastActivMarker=marker;
			}
			me.__163_tour_map_drone.ggLastNodeId = id;
			me.__163_tour_map_drone.ggRadar.update();
			me.__164_tour_map_walk.logicBlock_visible();
			for (var i=0; i < me.__164_tour_map_walk.ggMarkerInstances.length; i++) {
				me.__164_tour_map_walk.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me.__164_tour_map_walk.ggLastActivMarker) {
				if (me.__164_tour_map_walk.ggLastActivMarker._div.ggDeactivate) me.__164_tour_map_walk.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me.__164_tour_map_walk.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me.__164_tour_map_walk.ggLastActivMarker=marker;
			}
			me.__164_tour_map_walk.ggLastNodeId = id;
			me.__164_tour_map_walk.ggRadar.update();
			me.__165_toggle_drone.logicBlock_visible();
			me.__166_toggle_walk.logicBlock_visible();
			me.__19_vt_title.logicBlock_scaling();
			me.__19_vt_title.logicBlock_alpha();
			me.__20_vt_title_mob.logicBlock_scaling();
			me.__20_vt_title_mob.logicBlock_alpha();
			me.__21_lac_logo.logicBlock_visible();
			me.__23_stop_autorotate.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
				me._thumbnail_cloner0.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
				me._thumbnail_cloner1.ggInstances[i].ggEvent_configloaded(event);
			}
			for(var i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
				me._thumbnail_cloner2.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('A05_ht_node_subway')) {
				for(var i = 0; i < hotspotTemplates['A05_ht_node_subway'].length; i++) {
					hotspotTemplates['A05_ht_node_subway'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('A06_ht_node_groundLevel')) {
				for(var i = 0; i < hotspotTemplates['A06_ht_node_groundLevel'].length; i++) {
					hotspotTemplates['A06_ht_node_groundLevel'][i].ggEvent_configloaded();
				}
			}
			me._a01_thumbnail_subway.ggUpdatePosition();
			me._a01_thumbnail_subway.logicBlock_alpha();
			me._a02_thumbnail_groundlevel.ggUpdatePosition();
			me._a02_thumbnail_groundlevel.logicBlock_alpha();
			me._a03_thumbnail_subway_mob.ggUpdatePosition();
			me._a03_thumbnail_subway_mob.logicBlock_alpha();
			me._a04_thumbnail_groundlevel_mob.ggUpdatePosition();
			me._a04_thumbnail_groundlevel_mob.logicBlock_alpha();
			me._a07_timer_1.ggTimestamp=skin.ggCurrentTime;
			me._a07_timer_1.ggTimeout=500;
			me.__011_background.logicBlock_visible();
			me.__013_subway.logicBlock_visible();
			me.__014_groundlevel.logicBlock_visible();
			me.__015_map_hidden.logicBlock_visible();
			me.__016_map_visible.logicBlock_visible();
			me.__022_toggle_groundlevel.logicBlock_alpha();
			me.__023_toggle_subway.logicBlock_alpha();
			me.__031_bottom_menu_background.logicBlock_visible();
			me.__032_walk.logicBlock_visible();
			me.__033_drone.logicBlock_visible();
			me.__034_map_visible.logicBlock_visible();
			me.__041_background.logicBlock_visible();
			me.__052_toggle_walk.logicBlock_alpha();
			me.__053_toggle_drone.logicBlock_alpha();
			me.__15_tour_map.logicBlock_scaling();
			me.__152_tour_map_subway.logicBlock_visible();
			me.__152_tour_map_subway.ggClearMap();
			me.__152_tour_map_subway.ggInitMap(false);
			me.__152_tour_map_subway.ggInitMapMarkers(true);
			me.__153_tour_map_groundlevel.logicBlock_visible();
			me.__153_tour_map_groundlevel.ggClearMap();
			me.__153_tour_map_groundlevel.ggInitMap(false);
			me.__153_tour_map_groundlevel.ggInitMapMarkers(true);
			me.__154_toggle_subway.logicBlock_visible();
			me.__155_toggle_groundlevel.logicBlock_visible();
			me.__16_tour_map_mob.logicBlock_alpha();
			me.__163_tour_map_drone.logicBlock_visible();
			me.__163_tour_map_drone.ggClearMap();
			me.__163_tour_map_drone.ggInitMap(false);
			me.__163_tour_map_drone.ggInitMapMarkers(true);
			me.__164_tour_map_walk.logicBlock_visible();
			me.__164_tour_map_walk.ggClearMap();
			me.__164_tour_map_walk.ggInitMap(false);
			me.__164_tour_map_walk.ggInitMapMarkers(true);
			me.__165_toggle_drone.logicBlock_visible();
			me.__166_toggle_walk.logicBlock_visible();
			me.__19_vt_title.logicBlock_scaling();
			me.__19_vt_title.logicBlock_alpha();
			me.__20_vt_title_mob.logicBlock_scaling();
			me.__20_vt_title_mob.logicBlock_alpha();
			me.__21_lac_logo.logicBlock_visible();
			me.__23_stop_autorotate.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me.__152_tour_map_subway.ggRadar.update();
			me.__153_tour_map_groundlevel.ggRadar.update();
			me.__163_tour_map_drone.ggRadar.update();
			me.__164_tour_map_walk.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
				me._thumbnail_cloner0.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
				me._thumbnail_cloner1.ggInstances[i].ggEvent_sizechanged(event);
			}
			for(var i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
				me._thumbnail_cloner2.ggInstances[i].ggEvent_sizechanged(event);
			}
			me._a01_thumbnail_subway.logicBlock_visible();
			me._a02_thumbnail_groundlevel.logicBlock_visible();
			me._a03_thumbnail_subway_mob.logicBlock_visible();
			me._a04_thumbnail_groundlevel_mob.logicBlock_visible();
			me.__01_bottom_btn.logicBlock_visible();
			me.__02_thumbnailbtn.logicBlock_visible();
			me.__03_bottom_btn_mob.logicBlock_visible();
			me.__04_right_thumbnail_mob.logicBlock_visible();
			me.__05_right_thumbnail_donewalk_mob.logicBlock_visible();
			me.__052_toggle_walk.logicBlock_alpha();
			me.__15_tour_map.logicBlock_size();
			me.__15_tour_map.logicBlock_visible();
			me.__16_tour_map_mob.logicBlock_visible();
			me.__19_vt_title.logicBlock_visible();
			me.__20_vt_title_mob.logicBlock_visible();
			me.__21_lac_logo.logicBlock_visible();
		});
		player.addListener('varchanged_01_Drone', function(event) {
			me.__013_subway.logicBlock_visible();
			me.__033_drone.logicBlock_visible();
		});
		player.addListener('varchanged_02_Walk', function(event) {
			me.__014_groundlevel.logicBlock_visible();
			me.__032_walk.logicBlock_visible();
		});
		player.addListener('varchanged_03_ToggleWalk', function(event) {
			me._a02_thumbnail_groundlevel.logicBlock_alpha();
			me._a04_thumbnail_groundlevel_mob.logicBlock_alpha();
			me.__013_subway.logicBlock_visible();
			me.__014_groundlevel.logicBlock_visible();
			me.__022_toggle_groundlevel.logicBlock_alpha();
			me.__032_walk.logicBlock_visible();
			me.__033_drone.logicBlock_visible();
			me.__052_toggle_walk.logicBlock_alpha();
		});
		player.addListener('varchanged_04_ToggleDrone', function(event) {
			me._a01_thumbnail_subway.logicBlock_alpha();
			me._a03_thumbnail_subway_mob.logicBlock_alpha();
			me.__013_subway.logicBlock_visible();
			me.__014_groundlevel.logicBlock_visible();
			me.__023_toggle_subway.logicBlock_alpha();
			me.__032_walk.logicBlock_visible();
			me.__033_drone.logicBlock_visible();
			me.__053_toggle_drone.logicBlock_alpha();
		});
		player.addListener('varchanged_05_MapVis', function(event) {
			me.__015_map_hidden.logicBlock_visible();
			me.__016_map_visible.logicBlock_visible();
			me.__034_map_visible.logicBlock_visible();
		});
		player.addListener('varchanged_06_TourMap', function(event) {
			me.__15_tour_map.logicBlock_scaling();
			me.__16_tour_map_mob.logicBlock_alpha();
		});
		player.addListener('varchanged_07_Bottom_menu_background', function(event) {
			me.__011_background.logicBlock_visible();
			me.__031_bottom_menu_background.logicBlock_visible();
			me.__041_background.logicBlock_visible();
		});
		player.addListener('varchanged_10_VTtitle', function(event) {
			me.__19_vt_title.logicBlock_alpha();
			me.__20_vt_title_mob.logicBlock_alpha();
		});
		player.addListener('varchanged_11_ht_ani', function(event) {
			if (hotspotTemplates.hasOwnProperty('A05_ht_node_subway')) {
				for(var i = 0; i < hotspotTemplates['A05_ht_node_subway'].length; i++) {
					hotspotTemplates['A05_ht_node_subway'][i].ggEvent_varchanged_11_ht_ani();
				}
			}
			if (hotspotTemplates.hasOwnProperty('A06_ht_node_groundLevel')) {
				for(var i = 0; i < hotspotTemplates['A06_ht_node_groundLevel'].length; i++) {
					hotspotTemplates['A06_ht_node_groundLevel'][i].ggEvent_varchanged_11_ht_ani();
				}
			}
		});
		player.addListener('varchanged_12_PA_Logo', function(event) {
			me.__21_lac_logo.logicBlock_visible();
		});
		player.addListener('varchanged_13_Animation', function(event) {
			me.__19_vt_title.logicBlock_scaling();
			me.__19_vt_title.logicBlock_alpha();
			me.__20_vt_title_mob.logicBlock_scaling();
			me.__20_vt_title_mob.logicBlock_alpha();
			player.stopAutorotate();
			if (
				(
					((player.getViewerSize(true).width <= 950))
				)
			) {
				player.stopAutorotate();
			}
			me.__23_stop_autorotate.logicBlock_visible();
		});
		player.addListener('varchanged_13_Map_drone', function(event) {
			me.__152_tour_map_subway.logicBlock_visible();
			me.__154_toggle_subway.logicBlock_visible();
			me.__163_tour_map_drone.logicBlock_visible();
			me.__165_toggle_drone.logicBlock_visible();
		});
		player.addListener('varchanged_14_Map_walk', function(event) {
			me.__153_tour_map_groundlevel.logicBlock_visible();
			me.__155_toggle_groundlevel.logicBlock_visible();
			me.__164_tour_map_walk.logicBlock_visible();
			me.__166_toggle_walk.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner2.ggUpdate();
			me._thumbnail_cloner1.ggUpdate();
			me._thumbnail_cloner0.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
		});
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 5px;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(26,148,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.onclick=function (e) {
			if (me._thumbnail_active.isDragging()) return;
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("2"));
			player.setVariableValue('02_Walk', Number("4"));
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me._thumbnail_active.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMT'+
			'MwOyIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 305);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha();
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
		me._thumbnail_active.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active.logicBlock_bordercolor();
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_visible();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title.logicBlock_alpha();
				me._checkmark_tick.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function(event) {
				me._thumbnail_title.logicBlock_alpha();
			};
	};
	function SkinCloner_thumbnail_cloner0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 5px;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage0);
		el=me._thumbnail_active0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active0.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active0'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active0.style.transition='border-color 0s';
				if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active0.style.borderColor="rgba(26,148,255,1)";
				}
				else if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active0.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_active0.logicBlock_bordercolor();
		me._thumbnail_active0.onclick=function (e) {
			if (me._thumbnail_active0.isDragging()) return;
			if (
				(
					((me._thumbnail_active0.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("3"));
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me._thumbnail_active0.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active0']=true;
			me._thumbnail_title0.logicBlock_alpha();
			me._checkmark_tick0.logicBlock_alpha();
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._thumbnail_title0.logicBlock_alpha();
			me._checkmark_tick0.logicBlock_alpha();
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active0'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title0.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title0.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title0.style.visibility=me._thumbnail_title0.ggVisible?'inherit':'hidden';
					me._thumbnail_title0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title0.style.opacity == 0.0) { me._thumbnail_title0.style.visibility="hidden"; } }, 505);
					me._thumbnail_title0.style.opacity=0;
				}
			}
		}
		me._thumbnail_title0.logicBlock_alpha();
		me._thumbnail_title0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active0.appendChild(me._thumbnail_title0);
		el=me._checkmark_tick0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMT'+
			'MwOyIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick0.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._checkmark_tick0.ggVisible=true;
				}
				else {
					me._checkmark_tick0.style.visibility="hidden";
					me._checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._checkmark_tick0.logicBlock_visible();
		me._checkmark_tick0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active0'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick0.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick0.style.opacity == 0.0) { me._checkmark_tick0.style.visibility="hidden"; } }, 305);
					me._checkmark_tick0.style.opacity=0;
				}
				else {
					me._checkmark_tick0.style.visibility=me._checkmark_tick0.ggVisible?'inherit':'hidden';
					me._checkmark_tick0.style.opacity=1;
				}
			}
		}
		me._checkmark_tick0.logicBlock_alpha();
		me._checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active0.appendChild(me._checkmark_tick0);
		me.__div.appendChild(me._thumbnail_active0);
		me._thumbnail_active0.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active0']=false;
		me._thumbnail_title0.logicBlock_alpha();
		me._checkmark_tick0.logicBlock_visible();
		me._checkmark_tick0.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title0.logicBlock_alpha();
				me._checkmark_tick0.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active0.logicBlock_bordercolor();
				me._thumbnail_title0.logicBlock_alpha();
				me._checkmark_tick0.logicBlock_visible();
				me._checkmark_tick0.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title0.logicBlock_alpha();
				me._checkmark_tick0.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function(event) {
				me._thumbnail_title0.logicBlock_alpha();
			};
	};
	function SkinCloner_thumbnail_cloner1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 5px;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage1);
		el=me._thumbnail_active1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active1.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active1'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active1.style.transition='border-color 0s';
				if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active1.style.borderColor="rgba(26,148,255,1)";
				}
				else if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active1.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_active1.logicBlock_bordercolor();
		me._thumbnail_active1.onclick=function (e) {
			if (me._thumbnail_active1.isDragging()) return;
			if (
				(
					((me._thumbnail_active1.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("2"));
			player.setVariableValue('02_Walk', Number("4"));
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me._thumbnail_active1.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active1']=true;
			me._thumbnail_title1.logicBlock_alpha();
			me._checkmark_tick1.logicBlock_alpha();
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._thumbnail_title1.logicBlock_alpha();
			me._checkmark_tick1.logicBlock_alpha();
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title1.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title1.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active1'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title1.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title1.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title1.style.visibility=me._thumbnail_title1.ggVisible?'inherit':'hidden';
					me._thumbnail_title1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title1.style.opacity == 0.0) { me._thumbnail_title1.style.visibility="hidden"; } }, 505);
					me._thumbnail_title1.style.opacity=0;
				}
			}
		}
		me._thumbnail_title1.logicBlock_alpha();
		me._thumbnail_title1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active1.appendChild(me._thumbnail_title1);
		el=me._checkmark_tick1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMT'+
			'MwOyIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checkmark_tick1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick1.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick1.style.visibility=(Number(me._checkmark_tick1.style.opacity)>0||!me._checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._checkmark_tick1.ggVisible=true;
				}
				else {
					me._checkmark_tick1.style.visibility="hidden";
					me._checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._checkmark_tick1.logicBlock_visible();
		me._checkmark_tick1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active1'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick1.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick1.style.opacity == 0.0) { me._checkmark_tick1.style.visibility="hidden"; } }, 305);
					me._checkmark_tick1.style.opacity=0;
				}
				else {
					me._checkmark_tick1.style.visibility=me._checkmark_tick1.ggVisible?'inherit':'hidden';
					me._checkmark_tick1.style.opacity=1;
				}
			}
		}
		me._checkmark_tick1.logicBlock_alpha();
		me._checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active1.appendChild(me._checkmark_tick1);
		me.__div.appendChild(me._thumbnail_active1);
		me._thumbnail_active1.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active1']=false;
		me._thumbnail_title1.logicBlock_alpha();
		me._checkmark_tick1.logicBlock_visible();
		me._checkmark_tick1.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title1.logicBlock_alpha();
				me._checkmark_tick1.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active1.logicBlock_bordercolor();
				me._thumbnail_title1.logicBlock_alpha();
				me._checkmark_tick1.logicBlock_visible();
				me._checkmark_tick1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title1.logicBlock_alpha();
				me._checkmark_tick1.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function(event) {
				me._thumbnail_title1.logicBlock_alpha();
			};
	};
	function SkinCloner_thumbnail_cloner2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_nodeimage2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_nodeimage2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_nodeimage2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 5px;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage2);
		el=me._thumbnail_active2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 2px solid rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active2.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active2'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active2.style.transition='border-color 0s';
				if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active2.style.borderColor="rgba(26,148,255,1)";
				}
				else if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active2.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_active2.logicBlock_bordercolor();
		me._thumbnail_active2.onclick=function (e) {
			if (me._thumbnail_active2.isDragging()) return;
			if (
				(
					((me._thumbnail_active2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("3"));
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me._thumbnail_active2.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_active2']=true;
			me._thumbnail_title2.logicBlock_alpha();
			me._checkmark_tick2.logicBlock_alpha();
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_active2']=false;
			me._thumbnail_title2.logicBlock_alpha();
			me._checkmark_tick2.logicBlock_alpha();
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_title2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title2.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title2.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active2'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title2.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_title2.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title2.style.visibility=me._thumbnail_title2.ggVisible?'inherit':'hidden';
					me._thumbnail_title2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title2.style.opacity == 0.0) { me._thumbnail_title2.style.visibility="hidden"; } }, 505);
					me._thumbnail_title2.style.opacity=0;
				}
			}
		}
		me._thumbnail_title2.logicBlock_alpha();
		me._thumbnail_title2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active2.appendChild(me._thumbnail_title2);
		el=me._checkmark_tick2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._checkmark_tick2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._checkmark_tick2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMT'+
			'MwOyIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._checkmark_tick2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick2.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick2.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick2.style.visibility=(Number(me._checkmark_tick2.style.opacity)>0||!me._checkmark_tick2.style.opacity)?'inherit':'hidden';
					me._checkmark_tick2.ggVisible=true;
				}
				else {
					me._checkmark_tick2.style.visibility="hidden";
					me._checkmark_tick2.ggVisible=false;
				}
			}
		}
		me._checkmark_tick2.logicBlock_visible();
		me._checkmark_tick2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active2'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick2.style.transition='opacity 300ms ease 0ms';
				if (me._checkmark_tick2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick2.style.opacity == 0.0) { me._checkmark_tick2.style.visibility="hidden"; } }, 305);
					me._checkmark_tick2.style.opacity=0;
				}
				else {
					me._checkmark_tick2.style.visibility=me._checkmark_tick2.ggVisible?'inherit':'hidden';
					me._checkmark_tick2.style.opacity=1;
				}
			}
		}
		me._checkmark_tick2.logicBlock_alpha();
		me._checkmark_tick2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active2.appendChild(me._checkmark_tick2);
		me.__div.appendChild(me._thumbnail_active2);
		me._thumbnail_active2.logicBlock_bordercolor();
		me.elementMouseOver['thumbnail_active2']=false;
		me._thumbnail_title2.logicBlock_alpha();
		me._checkmark_tick2.logicBlock_visible();
		me._checkmark_tick2.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function(event) {
				me._thumbnail_title2.logicBlock_alpha();
				me._checkmark_tick2.logicBlock_alpha();
			};
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active2.logicBlock_bordercolor();
				me._thumbnail_title2.logicBlock_alpha();
				me._checkmark_tick2.logicBlock_visible();
				me._checkmark_tick2.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_title2.logicBlock_alpha();
				me._checkmark_tick2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function(event) {
				me._thumbnail_title2.logicBlock_alpha();
			};
	};
	function SkinElement__22_map_pin_walk_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__22_map_pin_walk=document.createElement('div');
		el.ggId="22_map_pin_walk";
		el.ggDx=-308;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 308px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22_map_pin_walk.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__22_map_pin_walk.onclick=function (e) {
			if (
				(
					((me.__22_map_pin_walk.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("1"));
			player.setVariableValue('02_Walk', Number("4"));
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
		}
		me.__22_map_pin_walk.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAC30lEQVRIid2WQWsUWRDHf/WmO4IXWcFlBw8KmQyyp0xLYBXEzzAg8wkW03OU6Aqe97SgSw6S6QT0FhSE+B1kN7BDejyJZJKDIgwo6C1B+/UrD+nu6ZmM4ygsC1u3+ndV/bpe13uv4f9iMktQrWOvGTQAGsBiltlz0EOltxd6T74bUt9IrqhjU2DbQYzQS8V7DmBS26hAA6GhymVnaO1f9//+JshClKyiLB56XvPNr/J+aqcP9Iz5ZLdU6PaX/RvTYoeAjn04HyUrMwWX89aS3+qR3RjXj3WyECWrzvF6v+3fLevzUbJilBZw4UjRl4o83gv9e+W42npy2zh+3A394iVHIPWN5Iqm/N4P/auFtqZnMbbrlFNGOFmOd8qBET58xFt6tSyDIidK/nLKzb'+
			'3Q3wYw5SR1snnoec0yQI3tAtVxAECmnT2B3Tl/X3/K9dR5TYNuFnFFmx17TdDtkY9sbFegOl58glV9L+3mzn5b3ioS19dtcwRi0MBBnPvzUbLi4NQMAABU9XQtSoeTJcTqNBiBcDTzvQKqtAzHl+hLZoSToq6V+04kFjgGWcw3WmYXZgWU7OchpBIzAfKv2RAi9ExqG6VnL7+j3ouisKYB2TcuIA56laMDMGPy2MHBrNWdcgj6aAjRQMchqPSQIWQ39O8Z+DArRETe9cO51WE9LorIzghkL/SeqHK59kDP5NpHvCWFAV8xhYFzlaXcPxdpVUSD3WXv6WgngDO0zCe7lfuvlmWQWC9Q5M2kpXNwoMhr57zF/ba8zfU57BaOYpwnHZB/4hj02/4fZb0WpTeyfZCP6QuMedS/Xlktx9Wj5I4qP/RD/9bU9muR3ah1kttT'+
			'gybmJXcWOnZtXP/ipVXvJHcRfkmd1ywvxSQ7F2l1DruF8mxSB1Ov31onuWRENlU1RoidSJztZIymgVENjqZIAxyt3fbcP5PqzPQjUV+3TXUaZGdRkMmxQiwiO/kU/af2GcBpMSSj2zU9AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me.__22_map_pin_walk.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABe0lEQVRIibWV3XHCMBCEV24g6gA6QB3EJaiDJBXhDuxUEKUD0oGoQKICiwo2D/ZpNGAbh8DN3IPHo+9+pNtTWDCSFsArAAOgLn4dAHgAB6XU9xJjClqTDFxngWQ9xVET4A7AGwCcTic45+C9z26MyW6txWazkaOdUupjKWMn6TRNQ601Acy61ppN05RVfM2BO5JMKdFauwi9dGstU0oSoJ3qMUn+GVwGKKwu4VFacQ9YvGhRELAlyRjjzR7fcq01Y4y5CRXG9+ucQ0pp7q5XWUoJzjn5rCsMAwLv/b/AYgXHQGowxvyrJeLGGEH2iiQBQKmrebrbRiSqXIMxDwEXnHMF4OdJcF9hULenwPM7DyE85J2HkMXUAnjchHZdJ+CYS3mqtowBOpLs+/4uVe'+
			'z7Pqv15GWUer7f71fpedu2Zcau5C1uohhj3kTH4zFvot1ulzfRdruVo59KqffJrC8C1HLJKyxe9Xgu84sgFoNqmtFfAJwxzIZsfzd3/hfRwVls8e3P5AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me.__22_map_pin_walk.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me.elementMouseOver['map_pin_active']=false;
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal']=false;
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
	};
	function SkinElement__22_map_pin_drone_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me.__22_map_pin_drone=document.createElement('div');
		el.ggId="22_map_pin_drone";
		el.ggDx=-308;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 308px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22_map_pin_drone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me.__22_map_pin_drone.onclick=function (e) {
			if (
				(
					((me.__22_map_pin_drone.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("2"));
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
		}
		me.__22_map_pin_drone.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active0=document.createElement('div');
		els=me._map_pin_active0__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAC30lEQVRIid2WQWsUWRDHf/WmO4IXWcFlBw8KmQyyp0xLYBXEzzAg8wkW03OU6Aqe97SgSw6S6QT0FhSE+B1kN7BDejyJZJKDIgwo6C1B+/UrD+nu6ZmM4ygsC1u3+ndV/bpe13uv4f9iMktQrWOvGTQAGsBiltlz0EOltxd6T74bUt9IrqhjU2DbQYzQS8V7DmBS26hAA6GhymVnaO1f9//+JshClKyiLB56XvPNr/J+aqcP9Iz5ZLdU6PaX/RvTYoeAjn04HyUrMwWX89aS3+qR3RjXj3WyECWrzvF6v+3fLevzUbJilBZw4UjRl4o83gv9e+W42npy2zh+3A394iVHIPWN5Iqm/N4P/auFtqZnMbbrlFNGOFmOd8qBET58xFt6tSyDIidK/nLKzb'+
			'3Q3wYw5SR1snnoec0yQI3tAtVxAECmnT2B3Tl/X3/K9dR5TYNuFnFFmx17TdDtkY9sbFegOl58glV9L+3mzn5b3ioS19dtcwRi0MBBnPvzUbLi4NQMAABU9XQtSoeTJcTqNBiBcDTzvQKqtAzHl+hLZoSToq6V+04kFjgGWcw3WmYXZgWU7OchpBIzAfKv2RAi9ExqG6VnL7+j3ouisKYB2TcuIA56laMDMGPy2MHBrNWdcgj6aAjRQMchqPSQIWQ39O8Z+DArRETe9cO51WE9LorIzghkL/SeqHK59kDP5NpHvCWFAV8xhYFzlaXcPxdpVUSD3WXv6WgngDO0zCe7lfuvlmWQWC9Q5M2kpXNwoMhr57zF/ba8zfU57BaOYpwnHZB/4hj02/4fZb0WpTeyfZCP6QuMedS/Xlktx9Wj5I4qP/RD/9bU9muR3ah1kttT'+
			'gybmJXcWOnZtXP/ipVXvJHcRfkmd1ywvxSQ7F2l1DruF8mxSB1Ov31onuWRENlU1RoidSJztZIymgVENjqZIAxyt3fbcP5PqzPQjUV+3TXUaZGdRkMmxQiwiO/kU/af2GcBpMSSj2zU9AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active0.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active0.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active0.ggParameter.sx = 1.1;
					me._map_pin_active0.ggParameter.sy = 1.1;
					me._map_pin_active0.style.transform=parameterToTransform(me._map_pin_active0.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active0);}, 250);
				}
				else {
					me._map_pin_active0.ggParameter.sx = 1;
					me._map_pin_active0.ggParameter.sy = 1;
					me._map_pin_active0.style.transform=parameterToTransform(me._map_pin_active0.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active0);}, 250);
				}
			}
		}
		me._map_pin_active0.logicBlock_scaling();
		me._map_pin_active0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active0.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active0.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active0.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active0.style.visibility=me._map_pin_active0.ggVisible?'inherit':'hidden';
					me._map_pin_active0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active0.style.opacity == 0.0) { me._map_pin_active0.style.visibility="hidden"; } }, 505);
					me._map_pin_active0.style.opacity=0;
				}
			}
		}
		me._map_pin_active0.logicBlock_alpha();
		me._map_pin_active0.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_active0']=true;
			me._map_pin_active0.logicBlock_scaling();
		}
		me._map_pin_active0.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_active0']=false;
			me._map_pin_active0.logicBlock_scaling();
		}
		me._map_pin_active0.ggUpdatePosition=function (useTransition) {
		}
		me.__22_map_pin_drone.appendChild(me._map_pin_active0);
		el=me._map_pin_normal0=document.createElement('div');
		els=me._map_pin_normal0__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABe0lEQVRIibWV3XHCMBCEV24g6gA6QB3EJaiDJBXhDuxUEKUD0oGoQKICiwo2D/ZpNGAbh8DN3IPHo+9+pNtTWDCSFsArAAOgLn4dAHgAB6XU9xJjClqTDFxngWQ9xVET4A7AGwCcTic45+C9z26MyW6txWazkaOdUupjKWMn6TRNQ601Acy61ppN05RVfM2BO5JMKdFauwi9dGstU0oSoJ3qMUn+GVwGKKwu4VFacQ9YvGhRELAlyRjjzR7fcq01Y4y5CRXG9+ucQ0pp7q5XWUoJzjn5rCsMAwLv/b/AYgXHQGowxvyrJeLGGEH2iiQBQKmrebrbRiSqXIMxDwEXnHMF4OdJcF9hULenwPM7DyE85J2HkMXUAnjchHZdJ+CYS3mqtowBOpLs+/4uVe'+
			'z7Pqv15GWUer7f71fpedu2Zcau5C1uohhj3kTH4zFvot1ulzfRdruVo59KqffJrC8C1HLJKyxe9Xgu84sgFoNqmtFfAJwxzIZsfzd3/hfRwVls8e3P5AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal0.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal0.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal0.ggParameter.sx = 1.1;
					me._map_pin_normal0.ggParameter.sy = 1.1;
					me._map_pin_normal0.style.transform=parameterToTransform(me._map_pin_normal0.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal0);}, 250);
				}
				else {
					me._map_pin_normal0.ggParameter.sx = 1;
					me._map_pin_normal0.ggParameter.sy = 1;
					me._map_pin_normal0.style.transform=parameterToTransform(me._map_pin_normal0.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal0);}, 250);
				}
			}
		}
		me._map_pin_normal0.logicBlock_scaling();
		me._map_pin_normal0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal0.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal0.style.transition='transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal0.style.opacity == 0.0) { me._map_pin_normal0.style.visibility="hidden"; } }, 505);
					me._map_pin_normal0.style.opacity=0;
				}
				else {
					me._map_pin_normal0.style.visibility=me._map_pin_normal0.ggVisible?'inherit':'hidden';
					me._map_pin_normal0.style.opacity=1;
				}
			}
		}
		me._map_pin_normal0.logicBlock_alpha();
		me._map_pin_normal0.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal0']=true;
			me._map_pin_normal0.logicBlock_scaling();
		}
		me._map_pin_normal0.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal0']=false;
			me._map_pin_normal0.logicBlock_scaling();
		}
		me._map_pin_normal0.ggUpdatePosition=function (useTransition) {
		}
		me.__22_map_pin_drone.appendChild(me._map_pin_normal0);
		me._map_pin_active0.logicBlock_scaling();
		me._map_pin_active0.logicBlock_alpha();
		me.elementMouseOver['map_pin_active0']=false;
		me._map_pin_normal0.logicBlock_scaling();
		me._map_pin_normal0.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal0']=false;
			me.ggEvent_changenode=function() {
				me._map_pin_active0.logicBlock_alpha();
				me._map_pin_normal0.logicBlock_alpha();
			};
	};
	function SkinHotspotClass_a06_ht_node_groundlevel(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._a06_ht_node_groundlevel=document.createElement('div');
		el.ggId="A06_ht_node_groundLevel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 332px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a06_ht_node_groundlevel.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._a06_ht_node_groundlevel.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("1"));
			player.setVariableValue('02_Walk', Number("4"));
			player.setVariableValue('13_Map_drone', Number("0"));
			player.setVariableValue('14_Map_walk', Number("1"));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a06_ht_node_groundlevel.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a06_ht_node_groundlevel.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['a06_ht_node_groundlevel']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a06_ht_node_groundlevel.onmouseleave=function (e) {
			me.elementMouseOver['a06_ht_node_groundlevel']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._a06_ht_node_groundlevel.ggUpdatePosition=function (useTransition) {
		}
		el=me._a061_rectangle_1=document.createElement('div');
		el.ggId="A06.1_Rectangle 1";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle mainone";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 5px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 10px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='mainone:hover { color: red; }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._a061_rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._a061_rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('11_ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._a061_rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._a061_rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._a061_rectangle_1.style.transition='transform 500ms ease 0ms, opacity 450ms ease 0ms';
				if (me._a061_rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._a061_rectangle_1.ggParameter.sx = 0.8;
					me._a061_rectangle_1.ggParameter.sy = 0.8;
					me._a061_rectangle_1.style.transform=parameterToTransform(me._a061_rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._a061_rectangle_1);}, 550);
				}
				else {
					me._a061_rectangle_1.ggParameter.sx = 0.5;
					me._a061_rectangle_1.ggParameter.sy = 0.5;
					me._a061_rectangle_1.style.transform=parameterToTransform(me._a061_rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._a061_rectangle_1);}, 550);
				}
			}
		}
		me._a061_rectangle_1.logicBlock_scaling();
		me._a061_rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('11_ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a061_rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a061_rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a061_rectangle_1.style.transition='transform 500ms ease 0ms, opacity 450ms ease 0ms';
				if (me._a061_rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._a061_rectangle_1.style.opacity == 0.0) { me._a061_rectangle_1.style.visibility="hidden"; } }, 455);
					me._a061_rectangle_1.style.opacity=0;
				}
				else {
					me._a061_rectangle_1.style.visibility=me._a061_rectangle_1.ggVisible?'inherit':'hidden';
					me._a061_rectangle_1.style.opacity=1;
				}
			}
		}
		me._a061_rectangle_1.logicBlock_alpha();
		me._a061_rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._a06_ht_node_groundlevel.appendChild(me._a061_rectangle_1);
		me.elementMouseOver['a06_ht_node_groundlevel']=false;
		me._a061_rectangle_1.logicBlock_scaling();
		me._a061_rectangle_1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._a061_rectangle_1.logicBlock_scaling();
				me._a061_rectangle_1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._a061_rectangle_1.logicBlock_scaling();
				me._a061_rectangle_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_11_ht_ani=function() {
				me._a061_rectangle_1.logicBlock_scaling();
				me._a061_rectangle_1.logicBlock_alpha();
			};
			me.__div = me._a06_ht_node_groundlevel;
	};
	function SkinHotspotClass_a05_ht_node_subway(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._a05_ht_node_subway=document.createElement('div');
		el.ggId="A05_ht_node_subway";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 332px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._a05_ht_node_subway.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._a05_ht_node_subway.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.setVariableValue('10_VTtitle', Number("0"));
			player.setVariableValue('01_Drone', Number("0"));
			player.setVariableValue('02_Walk', Number("2"));
			player.setVariableValue('13_Map_drone', Number("1"));
			player.setVariableValue('14_Map_walk', Number("0"));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a05_ht_node_subway.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a05_ht_node_subway.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['a05_ht_node_subway']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._a05_ht_node_subway.onmouseleave=function (e) {
			me.elementMouseOver['a05_ht_node_subway']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._a05_ht_node_subway.ggUpdatePosition=function (useTransition) {
		}
		el=me._a051_rectangle_1=document.createElement('div');
		el.ggId="A05.1_Rectangle 1";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle mainone";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 5px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 10px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='mainone:hover { color: red; }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._a051_rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._a051_rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('11_ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._a051_rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._a051_rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._a051_rectangle_1.style.transition='transform 500ms ease 0ms, opacity 450ms ease 0ms';
				if (me._a051_rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._a051_rectangle_1.ggParameter.sx = 0.8;
					me._a051_rectangle_1.ggParameter.sy = 0.8;
					me._a051_rectangle_1.style.transform=parameterToTransform(me._a051_rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._a051_rectangle_1);}, 550);
				}
				else {
					me._a051_rectangle_1.ggParameter.sx = 0.5;
					me._a051_rectangle_1.ggParameter.sy = 0.5;
					me._a051_rectangle_1.style.transform=parameterToTransform(me._a051_rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._a051_rectangle_1);}, 550);
				}
			}
		}
		me._a051_rectangle_1.logicBlock_scaling();
		me._a051_rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('11_ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._a051_rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._a051_rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._a051_rectangle_1.style.transition='transform 500ms ease 0ms, opacity 450ms ease 0ms';
				if (me._a051_rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._a051_rectangle_1.style.opacity == 0.0) { me._a051_rectangle_1.style.visibility="hidden"; } }, 455);
					me._a051_rectangle_1.style.opacity=0;
				}
				else {
					me._a051_rectangle_1.style.visibility=me._a051_rectangle_1.ggVisible?'inherit':'hidden';
					me._a051_rectangle_1.style.opacity=1;
				}
			}
		}
		me._a051_rectangle_1.logicBlock_alpha();
		me._a051_rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._a05_ht_node_subway.appendChild(me._a051_rectangle_1);
		me.elementMouseOver['a05_ht_node_subway']=false;
		me._a051_rectangle_1.logicBlock_scaling();
		me._a051_rectangle_1.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._a051_rectangle_1.logicBlock_scaling();
				me._a051_rectangle_1.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._a051_rectangle_1.logicBlock_scaling();
				me._a051_rectangle_1.logicBlock_alpha();
			};
			me.ggEvent_varchanged_11_ht_ani=function() {
				me._a051_rectangle_1.logicBlock_scaling();
				me._a051_rectangle_1.logicBlock_alpha();
			};
			me.__div = me._a05_ht_node_subway;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='A05_ht_node_subway') {
				hotspot.skinid = 'A05_ht_node_subway';
				hsinst = new SkinHotspotClass_a05_ht_node_subway(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'A06_ht_node_groundLevel';
				hsinst = new SkinHotspotClass_a06_ht_node_groundlevel(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._a07_timer_1.ggLastIsActive!=me._a07_timer_1.ggIsActive()) {
			me._a07_timer_1.ggLastIsActive=me._a07_timer_1.ggIsActive();
			if (me._a07_timer_1.ggLastIsActive) {
				player.setVariableValue('11_ht_ani', true);
			} else {
				player.setVariableValue('11_ht_ani', false);
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};