(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sR8Y:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectModule",(function(){return w}));var r=n("ofXK"),o=n("tyNb"),i=n("AKkv"),s=n("oYZ5"),c=n("fXoL"),a=n("kmKP"),l=n("/0IE");function g(e,t){1&e&&(c.Pb(0,"p"),c.nc(1,"10 reps for 4 sets"),c.Ob())}function f(e,t){1&e&&(c.Pb(0,"p"),c.nc(1,"45 minutes for 4 sets"),c.Ob())}function d(e,t){if(1&e&&(c.Pb(0,"p"),c.nc(1),c.ac(2,"number"),c.Ob()),2&e){const e=c.Zb().ngIf,t=c.Zb();c.Cb(1),c.pc(" suggested weight: ",c.cc(2,1,t.getSuggestedWeight(e),".0-0")," (kg) ")}}function u(e,t){if(1&e){const e=c.Qb();c.Pb(0,"div",1),c.Pb(1,"span",2),c.Nb(2,"app-logo"),c.Ob(),c.Pb(3,"h1"),c.Pb(4,"em",3),c.Xb("click",(function(){return c.jc(e),c.Zb().router.navigate(["/user/project"])})),c.Ob(),c.nc(5),c.Ob(),c.Pb(6,"div",4),c.Pb(7,"div",5),c.Nb(8,"img",6),c.Ob(),c.Pb(9,"div",7),c.mc(10,g,2,0,"p",8),c.mc(11,f,2,0,"p",8),c.mc(12,d,3,4,"p",8),c.Ob(),c.Ob(),c.Ob()}if(2&e){const e=c.Zb();c.Cb(5),c.pc(" ",e.name," "),c.Cb(3),c.fc("src",e.url,c.kc),c.Cb(2),c.fc("ngIf",!e.isCardio),c.Cb(1),c.fc("ngIf",e.isCardio),c.Cb(1),c.fc("ngIf",e.isEw)}}let p=(()=>{class e extends i.a{constructor(e,t,n){super(),this.activeRouter=e,this.router=t,this.$user=n}get exercise(){return this.activeRouter.snapshot.paramMap.get("name")}get name(){return this.exercise.replace(/_/g," ")}get url(){return`assets/images/examples/example_${this.exercise}.png`}get isCardio(){return this.cardios.findIndex(e=>e===this.exercise)>-1}get isEw(){return this.ews.findIndex(e=>e===this.exercise)>-1}ngOnInit(){}getSuggestedWeight(e){switch(this.exercise){case s.e.ChestPress:return.25*e.profile.weight;case s.e.LegPress:return.5*e.profile.weight;case s.e.ShoulderPressMachine:return.2*e.profile.weight}}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(o.a),c.Mb(o.b),c.Mb(a.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-exercise"]],features:[c.zb],decls:2,vars:3,consts:[["class","Exercise",4,"ngIf"],[1,"Exercise"],[1,"Exercise__Logo"],[1,"icon-back","g5-font-dark-gray-blue-xxl",3,"click"],[1,"Exercise__Container"],[1,"Exercise__Image"],["alt","",3,"src"],[1,"Exercise__Introduction"],[4,"ngIf"]],template:function(e,t){1&e&&(c.mc(0,u,13,5,"div",0),c.ac(1,"async")),2&e&&c.fc("ngIf",c.bc(1,1,t.$user.user$))},directives:[r.k,l.a],pipes:[r.b,r.e],styles:[".Exercise[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding:5rem 2.5rem}.Exercise[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:center;font-size:2.75rem}.Exercise[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{margin-right:2rem;font-size:1.875rem}.Exercise__Container[_ngcontent-%COMP%]{margin-top:3rem;width:100%;display:flex;flex-direction:row;align-items:center;overflow:auto}.Exercise__Logo[_ngcontent-%COMP%]{position:absolute;bottom:3rem;right:3rem}.Exercise__Image[_ngcontent-%COMP%]{flex:1}.Exercise__Image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:25rem}.Exercise__Introduction[_ngcontent-%COMP%]{flex:1}.Exercise__Introduction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.875rem}@media screen and (max-width:767px){.Exercise[_ngcontent-%COMP%]{padding:10rem 2.5rem 2.5rem}.Exercise[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:1.875rem}.Exercise[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{margin-right:1rem;font-size:1.5rem}.Exercise__Logo[_ngcontent-%COMP%]{position:absolute;bottom:auto;right:auto;top:3rem;left:50%;transform:translate(-50%)}.Exercise__Container[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.Exercise__Introduction[_ngcontent-%COMP%]{margin-top:.5rem;width:100%}.Exercise__Introduction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.5rem}}"]}),e})();var m=n("lT2u");let b=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}get url(){return`assets/images/examples/example_${this.exercise}.png`}get name(){var e;return null===(e=this.exercise)||void 0===e?void 0:e.replace(/_/g," ")}navigate(){this.router.navigate(["/user/project/exercise",this.exercise])}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(o.b))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-exercise-card"]],inputs:{last:"last",exercise:"exercise"},decls:4,vars:4,consts:[[1,"Exercise",3,"click"],["alt","",3,"src"]],template:function(e,t){1&e&&(c.Pb(0,"div",0),c.Xb("click",(function(){return t.navigate()})),c.Pb(1,"h1"),c.nc(2),c.Ob(),c.Nb(3,"img",1),c.Ob()),2&e&&(c.Eb("last",t.last),c.Cb(2),c.oc(t.name),c.Cb(1),c.fc("src",t.url,c.kc))},styles:[".Exercise[_ngcontent-%COMP%]{cursor:pointer;border-radius:3px;background-color:#fff;box-shadow:0 0 3px 1px #fff;padding:1.5rem;background-color:rgba(0,0,0,.3);border:none;width:18rem;height:20rem}.Exercise[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;font-weight:300;opacity:.8;text-align:center;white-space:pre-wrap;margin-bottom:.5rem}.Exercise[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{opacity:.5;width:15rem;height:15rem}.Exercise[_ngcontent-%COMP%]:hover > h1[_ngcontent-%COMP%], .Exercise[_ngcontent-%COMP%]:hover > img[_ngcontent-%COMP%]{opacity:1;transition:.5s}.last[_ngcontent-%COMP%]{margin:0}@media screen and (max-width:767px){.Exercise[_ngcontent-%COMP%]{width:100%}.Exercise[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:calc(100% - 2.5rem)}}"]}),e})();function h(e,t){if(1&e){const e=c.Qb();c.Pb(0,"li"),c.Nb(1,"input",5),c.Pb(2,"label",6),c.Xb("click",(function(){c.jc(e);const n=t.index;return c.Zb().slide(n)})),c.Ob(),c.Ob()}if(2&e){const e=t.$implicit,n=t.index,r=c.Zb();c.Cb(1),c.fc("checked",n===r.current)("name",e),c.Cb(1),c.fc("for",e)}}let _=(()=>{class e{constructor(){this.exercises=[],this.current=0,this.sliding=!1}get next(){const e=void 0===this.specify?this.current+1:this.specify;return e>this.exercises.length-1?0:e}onMouseIn(){clearInterval(this.interval)}onMouseLeave(){this.initial()}ngOnInit(){this.initial()}slide(e){this.exercises.length>1&&(void 0!==e&&(this.specify=e),this.sliding=!0,setTimeout(t=>{this.sliding=!1,void 0===e?this.current=this.current+1>this.exercises.length-1?0:this.current+1:(this.current=this.specify,this.specify=void 0)},1e3))}initial(){this.exercises.length>1&&(this.interval=setInterval(e=>this.slide(),3e3))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-carousel"]],hostBindings:function(e,t){1&e&&c.Xb("mouseenter",(function(){return t.onMouseIn()}))("mouseleave",(function(){return t.onMouseLeave()}))},inputs:{exercises:"exercises"},decls:9,vars:7,consts:[[1,"Carousel"],[1,"Carousel__Container"],[3,"exercise"],[1,"Carousel__Controller"],[4,"ngFor","ngForOf"],["type","radio",3,"checked","name"],[3,"for","click"]],template:function(e,t){1&e&&(c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div"),c.Nb(3,"app-exercise-card",2),c.Ob(),c.Pb(4,"div"),c.Nb(5,"app-exercise-card",2),c.Ob(),c.Ob(),c.Pb(6,"div",3),c.Pb(7,"ul"),c.mc(8,h,3,3,"li",4),c.Ob(),c.Ob(),c.Ob()),2&e&&(c.Cb(2),c.Eb("slide",t.sliding),c.Cb(1),c.fc("exercise",t.exercises[t.current]),c.Cb(1),c.Eb("slide",t.sliding),c.Cb(1),c.fc("exercise",t.exercises[t.next]),c.Cb(3),c.fc("ngForOf",t.exercises))},directives:[b,r.j],styles:["@-webkit-keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@keyframes text-slide{0%{top:50%;transform:translateY(-50%);left:50%;opacity:0}to{top:50%;transform:translateY(-50%);left:100%;opacity:1%}}@-webkit-keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@keyframes popup{0%{opacity:0;transform:scale(.3)}to{opacity:1;transform:scale(1)}}@-webkit-keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@keyframes landing-logo-rotate{0%{transform:rotate(0deg)}50%{transform:rotate(1turn)}to{transform:translateX(-130%)}}@-webkit-keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes showup{0%{opacity:0}to{opacity:1}}@keyframes showup{0%{opacity:0}to{opacity:1}}@-webkit-keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@keyframes border-cycle{0%{width:0;height:0}25%{width:100%;height:0}50%{width:100%;height:100%}to{width:100%;height:100%}}@-webkit-keyframes carousel-slide-left-out{0%{transform:translate(0)}to{opacity:0;transform:translate(-80%)}}@keyframes carousel-slide-left-out{0%{transform:translate(0)}to{opacity:0;transform:translate(-80%)}}@-webkit-keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(80%)}to{opacity:1;transform:translate(0)}}@keyframes carousel-slide-left-in{0%{opacity:0;transform:translate(80%)}to{opacity:1;transform:translate(0)}}@-webkit-keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(4rem)}}@keyframes carousel-slide-down-out{0%{transform:translateY(0)}to{opacity:0;transform:translateY(4rem)}}@-webkit-keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-4rem)}to{opacity:1;transform:translateY(0)}}@keyframes carousel-slide-down-in{0%{opacity:0;transform:translateY(-4rem)}to{opacity:1;transform:translateY(0)}}.Carousel__Container[_ngcontent-%COMP%]{border-radius:3px;background-color:#fff;box-shadow:0 0 3px 1px #fff;background-color:inherit;border:none;position:relative;width:18rem;height:20rem;overflow:hidden;display:flex;flex-direction:row}.Carousel__Container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:absolute;top:0;left:0}.Carousel__Container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){visibility:hidden;left:18rem}.Carousel__Controller[_ngcontent-%COMP%]{margin-top:1.5rem}.Carousel__Controller[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.Carousel__Controller[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{cursor:pointer;box-shadow:0 0 3px 1px #fff;display:block;width:1rem;height:1rem;border-radius:100%;background-color:inherit}.Carousel__Controller[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.Carousel__Controller[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked ~ label[_ngcontent-%COMP%]{background-color:#fff}.Carousel__Controller[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}.slide[_ngcontent-%COMP%]{visibility:visible!important;transform:translate(-18rem);transition:1s}@media screen and (max-width:767px){.Carousel__Container[_ngcontent-%COMP%]{width:calc(100vw - 5rem)}}"]}),e})();function C(e,t){if(1&e&&(c.Pb(0,"div",1),c.Pb(1,"div",2),c.Pb(2,"span",3),c.Nb(3,"app-logo"),c.Ob(),c.Pb(4,"h1"),c.nc(5,"Training Project"),c.Ob(),c.Pb(6,"div",4),c.Nb(7,"app-carousel",5),c.Ob(),c.Ob(),c.Ob()),2&e){const e=t.ngIf;c.Cb(7),c.fc("exercises",e)}}let P=(()=>{class e{constructor(e){this.$project=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(m.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-project"]],decls:2,vars:3,consts:[["class","Project",4,"ngIf"],[1,"Project"],[1,"Project__Container"],[1,"Project__Logo"],[1,"Project__Exercises"],[3,"exercises"]],template:function(e,t){1&e&&(c.mc(0,C,8,1,"div",0),c.ac(1,"async")),2&e&&c.fc("ngIf",c.bc(1,1,t.$project.trainingProject$))},directives:[r.k,l.a,_],pipes:[r.b],styles:['.Project[_ngcontent-%COMP%]{height:100%;background-image:url(project_bg.29d87c8d6024a1d94d45.png);background-repeat:no-repeat;background-size:cover;background-position:50%;position:relative}.Project[_ngcontent-%COMP%]:before{content:"";z-index:2;background-color:rgba(0,0,0,.3)}.Project[_ngcontent-%COMP%]:before, .Project__Container[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute}.Project__Container[_ngcontent-%COMP%]{top:0;left:0;z-index:3;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;flex-direction:column;align-items:center;padding-top:3rem}.Project__Container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2.75rem;width:100%;text-align:center}.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:3rem;right:3rem}.Project__Exercises[_ngcontent-%COMP%]{width:100%;display:flex;height:100%;justify-content:center;align-items:center}@media screen and (max-width:767px){.Project__Logo[_ngcontent-%COMP%]{position:absolute;bottom:auto;right:auto;top:3rem;left:50%;transform:translate(-50%)}.Project__Container[_ngcontent-%COMP%]{align-items:flex-start;padding:10rem 2.5rem 2.5rem}.Project__Container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:1.875rem}}']}),e})();var x=n("lJxs");const O=[{path:"",canActivate:[(()=>{class e{constructor(e,t){this.$user=e,this.router=t}canActivate(e,t){return this.$user.user$.pipe(Object(x.a)(e=>!!e.isProjectInfoCompleted||(this.router.navigate(["/user/home"]),!1)))}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(a.a),c.Tb(o.b))},e.\u0275prov=c.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],children:[{path:"",component:P},{path:"exercise/:name",component:p}]}];let M=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[o.c.forChild(O)],o.c]}),e})();var y=n("PCNd");let w=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[y.a,r.c,M]]}),e})()}}]);