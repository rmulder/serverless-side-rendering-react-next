_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"4vki":function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),c=n("o0o1"),a=n.n(c),i=n("HaE+"),o=n("1OyB"),s=n("vuIU"),u=n("JX7q"),f=n("Ji7U"),l=n("md7G"),h=n("foSv"),d=n("q1tI"),p=n.n(d),v=n("vDqi"),j=n.n(v),b=n("X+Rt");function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O={title:"Dogs title",description:"Dogs description"},w=function(t){Object(f.a)(n,t);var e=g(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).state={loading:!0,dogs:[]},r.fetchData=r.fetchData.bind(Object(u.a)(r)),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchData",value:function(){var t=Object(i.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,j.a.get("https://api.thedogapi.com/v1/images/search?size=thumb&limit=10");case 3:e=t.sent,n=e.data,this.setState({dogs:n,loading:!1});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"renderDogList",value:function(){return Object(r.jsx)("ul",{children:this.state.dogs.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:t.url,alt:""})},e)}))})}},{key:"render",value:function(){return Object(r.jsx)(b.a,{meta:O,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Here you have all dogs."}),this.renderDogList()]})})}}]),n}(p.a.Component);e.default=w},lPUq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dogs",function(){return n("4vki")}])}},[["lPUq",0,2,1,3]]]);