function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sR8Y:function(t,e,n){"use strict";n.r(e),n.d(e,"ProjectModule",(function(){return P}));var o,r,c,i,a=n("ofXK"),s=n("tyNb"),l=n("fXoL"),u=n("zSYW"),p=n("/0IE"),f=((o=function(){function t(e){_classCallCheck(this,t),this.$project=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.$project.trainingProject$.subscribe((function(t){console.log(t)}))}}]),t}()).\u0275fac=function(t){return new(t||o)(l.Mb(u.a))},o.\u0275cmp=l.Gb({type:o,selectors:[["app-project"]],decls:4,vars:0,consts:[[1,"Project"],[1,"Project__Container"],[1,"Project__Logo"]],template:function(t,e){1&t&&(l.Pb(0,"div",0),l.Pb(1,"div",1),l.Pb(2,"span",2),l.Nb(3,"app-logo"),l.Ob(),l.Ob(),l.Ob())},directives:[p.a],styles:['.Project[_ngcontent-%COMP%]{height:100%;background-image:url(project_bg.29d87c8d6024a1d94d45.png);background-repeat:no-repeat;background-size:cover;background-position:50%;position:relative}.Project[_ngcontent-%COMP%]:before{content:"";z-index:2;background-color:rgba(0,0,0,.3)}.Project[_ngcontent-%COMP%]:before, .Project__Container[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute}.Project__Container[_ngcontent-%COMP%]{top:0;left:0;z-index:3;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;flex-direction:column;align-items:center}.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:3rem;right:3rem}@media screen and (max-width:767px){.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:auto;right:auto;top:3rem;left:50%;transform:translate(-50%)}.Project__Container[_ngcontent-%COMP%]{padding:0 2.5rem;align-items:flex-start}}']}),o),b=n("lJxs"),d=n("kmKP"),g=[{path:"",canActivate:[(r=function(){function t(e,n){_classCallCheck(this,t),this.$user=e,this.router=n}return _createClass(t,[{key:"canActivate",value:function(t,e){var n=this;return this.$user.user$.pipe(Object(b.a)((function(t){return!!t.isProjectInfoCompleted||(n.router.navigate(["/user/home"]),!1)})))}}]),t}(),r.\u0275fac=function(t){return new(t||r)(l.Tb(d.a),l.Tb(s.a))},r.\u0275prov=l.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r)],children:[{path:"",component:f}]}],_=((c=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:c}),c.\u0275inj=l.Jb({factory:function(t){return new(t||c)},imports:[[s.b.forChild(g)],s.b]}),c),h=n("PCNd"),P=((i=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:i}),i.\u0275inj=l.Jb({factory:function(t){return new(t||i)},imports:[[h.a,a.c,_]]}),i)}}]);