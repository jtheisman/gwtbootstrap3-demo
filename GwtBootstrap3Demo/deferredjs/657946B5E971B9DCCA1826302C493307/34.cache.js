function _bc(){}
function Qbc(a,b,c){Wdb.call(this,a,b,c,(_Sb(),$Sb))}
function icc(a){var b;if(!a.i){b=new Zbc(new _bc);a.i=b}return a.i}
function hcc(a){var b;if(!a.g){b=new Qbc(ddb(Aeb(a.b)),icc(a),gcc(a));vdb((Beb(a.b),b),Meb(Beb(a.b)));a.g=b}return a.g}
function Zbc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;oeb(this,(a=new Myb,Wrb(a,(b=new wub(eqc),Wrb(b,(c=new Hxb,c.b='Project Setup',Gxb(c),c.c='basic setup and using custom themes',Gxb(c),c)),Wrb(b,(d=new Pxb,Wrb(d,(g=new _xb,$xb(g,(i=new rvb(3),lzb(i.d,fqc),i)),g)),Wrb(d,(j=new Sxb,Wrb(j,(k=new ewb,dwb(k,(n=new Ckb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new KT(n.b.b)).b),k)),Wrb(j,(o=new bhc,Dyb(o,(p=new Ckb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new KT(p.b.b)).b),fW(o.ab,iqc,true),o)),j)),d)),Wrb(b,(e=new Pxb,Wrb(e,(q=new _xb,$xb(q,(r=new rvb(3),lzb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Wrb(e,(s=new Sxb,Wrb(s,(t=new ewb,dwb(t,(u=new Ckb,u.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new KT(u.b.b)).b),t)),Wrb(s,(v=new bhc,Dyb(v,(w=new Ckb,w.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new KT(w.b.b)).b),fW(v.ab,iqc,true),v)),s)),e)),Wrb(b,(f=new Pxb,Wrb(f,(x=new _xb,$xb(x,(y=new rvb(3),lzb(y.d,'Custom Theme'),y)),x)),Wrb(f,(z=new Sxb,Wrb(z,(A=new ewb,dwb(A,(B=new Ckb,B.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new KT(B.b.b)).b),A)),Wrb(z,(C=new bhc,Dyb(C,(D=new Ckb,D.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new KT(D.b.b)).b),fW(C.ab,iqc,true),C)),z)),f)),b)),a))}
GS(1238,520,Bkc,Qbc);GS(1241,525,Ckc,Zbc);GS(1242,1,{},_bc);GS(1249,1,Vkc);_.Ab=function ycc(){dgb(this.c,hcc(this.b.b))};var aP=Xib(Apc,'SetupPresenter',1238),cP=Xib(Apc,'SetupView',1241),bP=Xib(Apc,'SetupView_BinderImpl',1242);Zkc(wj)(34);