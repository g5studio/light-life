(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/0IE":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-logo"]],decls:2,vars:0,consts:[[1,"Logo"],["src","assets/images/logo.png","alt",""]],template:function(e,t){1&e&&(c.Pb(0,"div",0),c.Nb(1,"img",1),c.Ob())},styles:[".Logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem}"]}),e})()},lT2u:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var c=r("xci3"),s=r("IzEk"),n=r("pLZG"),a=r("lJxs"),i=r("fXoL"),o=r("kmKP");let l=(()=>{class e{constructor(e){this.$user=e,this.trainingProject$=this.$user.user$.pipe(Object(s.a)(1),Object(n.a)(e=>e.isProjectInfoCompleted),Object(a.a)(e=>this.settingProject(e.profile))),this.tdee$=this.$user.user$.pipe(Object(s.a)(1),Object(n.a)(e=>e.isTDEEInfoCompleted),Object(a.a)(e=>this.calculateTDEE(e.profile)))}settingProject(e){if(e.age>60)switch(e.level){case c.d.Level1:return"6\u500b\u52d5\u4f5c\u90781\u500b";case c.d.Level2:return"6\u500b\u52d5\u4f5c\u90782\u500b"}else switch(e.level){case c.d.Level1:return"cardio 45 mins";case c.d.Level2:return"cardio 30 mins or EW"}}calculateTDEE(e){let t=0;switch(e.gender){case c.b.Female:t=655+9.6*e.weight+1.8*e.height-4.7*e.age;break;case c.b.Male:t=66+13.7*e.weight+5*e.height-6.8*e.age}return this.getActivityFactor(e.activityLevel)*t}getActivityFactor(e){switch(e){case c.a.Secentary:return 1.2;case c.a.Lightly:return 1.375;case c.a.Moderately:return 1.55;case c.a.Very:return 1.725;case c.a.Extremely:return 1.9}}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(o.a))},e.\u0275prov=i.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);