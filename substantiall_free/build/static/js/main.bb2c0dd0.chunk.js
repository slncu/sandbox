(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(15),n(3)),l=n(4),u=n(7),s=n(5),h=n(8),d=n(6),m=n.n(d),p=(n(16),function(e){return 30*e}),f=function(e){return 365*e},v=function(e){return parseInt(e,10)},w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={cost:0,year:0,month:0,day:0,result:"",height:"",width:""},n.calculate=function(){var e=n.state,t=e.cost,a=e.year,r=e.month,c=e.day,o=v(f(a))+v(p(r))+v(c);n.setState({result:t/o})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,t=this.state,n=t.result,a=t.width,c=t.height;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-header"},"\u3042\u306a\u305f\u306e\u8cb7\u3044\u305f\u3044\u3082\u306e\u306f\u3001\uffe5",r.a.createElement("input",{type:"text",defaultValue:0,onChange:function(t){return e.setState({cost:t.target.value})}}),"\u306a\u306e\u3067\u3001"),r.a.createElement("div",{className:"content-body"},r.a.createElement("input",{type:"text",defaultValue:0,onChange:function(t){return e.setState({year:t.target.value})}}),"\u5e74",r.a.createElement("input",{type:"text",defaultValue:0,onChange:function(t){return e.setState({month:t.target.value})}}),"\u30f6\u6708",r.a.createElement("input",{type:"text",defaultValue:0,onChange:function(t){return e.setState({day:t.target.value})}}),"\u65e5\u4f7f\u3063\u305f\u3089\u3001"),r.a.createElement("button",{onClick:this.calculate},"\u7d50\u679c\u3092\u8868\u793a"),""!==n&&r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"result ".concat(""!==n?"":"hidden")},"1\u65e5\u3042\u305f\u308a\u3001\uffe5",n,"\u306a\u306e\u3067\u3001",r.a.createElement("h1",null,"\u5b9f\u8cea\u7121\u6599\uff01\uff01")),""!==n&&r.a.createElement(m.a,{width:a,height:c}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bb2c0dd0.chunk.js.map