function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sR8Y:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectModule",(function(){return P}));var o,r,c,i,a=n("ofXK"),s=n("tyNb"),l=n("fXoL"),u=n("zSYW"),p=n("/0IE"),f=((o=function(){function e(t){_classCallCheck(this,e),this.$project=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.$project.trainingProject$.subscribe((function(e){console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||o)(l.Mb(u.a))},o.\u0275cmp=l.Gb({type:o,selectors:[["app-project"]],decls:4,vars:0,consts:[[1,"Project"],[1,"Project__Container"],[1,"Project__Logo"]],template:function(e,t){1&e&&(l.Pb(0,"div",0),l.Pb(1,"div",1),l.Pb(2,"span",2),l.Nb(3,"app-logo"),l.Ob(),l.Ob(),l.Ob())},directives:[p.a],styles:['.Project[_ngcontent-%COMP%]{height:100%;background-image:url(project_bg.29d87c8d6024a1d94d45.png);background-repeat:no-repeat;background-size:cover;background-position:50%;position:relative}.Project[_ngcontent-%COMP%]:before{content:"";z-index:2;background-color:rgba(0,0,0,.3)}.Project[_ngcontent-%COMP%]:before, .Project__Container[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute}.Project__Container[_ngcontent-%COMP%]{top:0;left:0;z-index:3;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;flex-direction:column;align-items:center}.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:3rem;right:3rem}@media screen and (max-width:767px){.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:auto;right:auto;top:3rem;left:50%;transform:translate(-50%)}.Project__Container[_ngcontent-%COMP%]{padding:0 2.5rem;align-items:flex-start}}']}),o),b=n("lJxs"),d=n("kmKP"),g=[{path:"",canActivate:[(r=function(){function e(t,n){_classCallCheck(this,e),this.$user=t,this.router=n}return _createClass(e,[{key:"canActivate",value:function(e,t){var n=this;return this.$user.user$.pipe(Object(b.a)((function(e){return!!e.profile.age||(n.router.navigate(["/user/home"]),!1)})))}}]),e}(),r.\u0275fac=function(e){return new(e||r)(l.Tb(d.a),l.Tb(s.a))},r.\u0275prov=l.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r)],children:[{path:"",component:f}]}],_=((c=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:c}),c.\u0275inj=l.Jb({factory:function(e){return new(e||c)},imports:[[s.b.forChild(g)],s.b]}),c),h=n("PCNd"),P=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:i}),i.\u0275inj=l.Jb({factory:function(e){return new(e||i)},imports:[[h.a,a.c,_]]}),i)}}]);