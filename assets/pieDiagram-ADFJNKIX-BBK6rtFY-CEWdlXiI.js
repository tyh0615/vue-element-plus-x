import{Et as e,Jt as t,K as n,O as r,Pt as i,Qt as a,S as o,X as s,Xt as c,Y as l,Yt as u,an as d,k as f,q as p,s as m,u as h,y as g,z as _}from"./mermaid.core-B0WXDFZp-QBVI7Syo.js";import{h as v}from"./mermaid-parser.core-DmfvqCK5-BzC81QTs.js";import{t as y}from"./chunk-4BX2VUAB-AWtG75oi-BbbG09WQ.js";import{t as b}from"./ordinal-DSZU4PqD-wMYf7TxE.js";import{t as x}from"./arc-DKxWWLDg-DLEvAfpu.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=f(0),i=f(d),a=f(0);function o(o){var s,c=(o=h(o)).length,l,u,f=0,p=Array(c),m=Array(c),g=+r.apply(this,arguments),_=Math.min(d,Math.max(-d,i.apply(this,arguments)-g)),v,y=Math.min(Math.abs(_)/c,a.apply(this,arguments)),b=y*(_<0?-1:1),x;for(s=0;s<c;++s)(x=m[p[s]=s]=+e(o[s],s,o))>0&&(f+=x);for(t==null?n!=null&&p.sort(function(e,t){return n(o[e],o[t])}):p.sort(function(e,n){return t(m[e],m[n])}),s=0,u=f?(_-c*b)/f:0;s<c;++s,g=v)l=p[s],x=m[l],v=g+(x>0?x*u:0)+b,m[l]={data:o[l],index:s,value:x,startAngle:g,endAngle:v,padAngle:y};return m}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:f(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:f(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:f(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:f(+e),o):a},o}var T=_.pie,E={sections:new Map,showData:!1},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:m(()=>structuredClone(k),`getConfig`),clear:m(()=>{D=new Map,O=E.showData,o()},`clear`),setDiagramTitle:a,getDiagramTitle:s,setAccTitle:c,getAccTitle:p,setAccDescription:u,getAccDescription:n,addSection:m(({label:t,value:n})=>{if(n<0)throw Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(t)||(D.set(t,n),e.debug(`added new section: ${t}, with value: ${n}`))},`addSection`),getSections:m(()=>D,`getSections`),setShowData:m(e=>{O=e},`setShowData`),getShowData:m(()=>O,`getShowData`)},j=m((e,t)=>{y(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:m(async t=>{let n=await v(`pie`,t);e.debug(n),j(n,A)},`parse`)},N=m(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=m(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:m((n,a,o,s)=>{e.debug(`rendering pie chart
`+n);let c=s.db,u=l(),d=g(c.getConfig(),u.pie),f=t(a),p=f.append(`g`);p.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=u,[h]=i(m.pieOuterStrokeWidth);h??=2;let _=d.textPosition,v=x().innerRadius(0).outerRadius(185),y=x().innerRadius(185*_).outerRadius(185*_);p.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+h/2).attr(`class`,`pieOuterCircle`);let S=c.getSections(),C=P(S),w=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=b(w);p.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,v).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),p.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+y.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),p.append(`text`).text(c.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=p.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>c.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));f.attr(`viewBox`,`0 0 ${A} 450`),r(f,450,A,d.useMaxWidth)},`draw`)},styles:N};export{F as diagram};