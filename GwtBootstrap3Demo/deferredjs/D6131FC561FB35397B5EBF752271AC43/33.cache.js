function X6b(){}
function M6b(a,b,c){sbb.call(this,a,b,c,(cPb(),bPb))}
function e7b(a){var b;if(!a.g){b=new V6b(new X6b);a.g=b}return a.g}
function d7b(a){var b;if(!a.f){b=new M6b(Bab(Ybb(a.a)),e7b(a),c7b(a));Tab((Zbb(a.a),b),icb(Zbb(a.a)));a.f=b}return a.f}
function V6b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Mbb(this,(a=new zvb,epb(a,(b=new xub,b.a='Project Setup',wub(b),b.b='basic setup and using custom themes',wub(b),b)),epb(a,(c=new Fub,epb(c,(d=new Nub,Mub(d,(o=new ksb(3),Ivb(o.c,xic),o)),d)),epb(c,(e=new Iub,epb(e,(p=new Zsb,Ysb(p,(q=new Zhb,Cj(q.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new UQ(Hj(q.a))).a),p)),epb(e,(r=new qvb,pvb(r,(s=new Zhb,Cj(s.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new UQ(Hj(s.a))).a),pT(r._,Aic,true),pT(r._,Bic,true),r)),e)),c)),epb(a,(f=new Fub,epb(f,(g=new Nub,Mub(g,(t=new ksb(3),Ivb(t.c,'Bootstrap2 Look-a-like Setup'),t)),g)),epb(f,(i=new Iub,epb(i,(u=new Zsb,Ysb(u,(v=new Zhb,Cj(v.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new UQ(Hj(v.a))).a),u)),epb(i,(w=new qvb,pvb(w,(x=new Zhb,Cj(x.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new UQ(Hj(x.a))).a),pT(w._,Aic,true),pT(w._,Bic,true),w)),i)),f)),epb(a,(j=new Fub,epb(j,(k=new Nub,Mub(k,(y=new ksb(3),Ivb(y.c,'Custom Theme'),y)),k)),epb(j,(n=new Iub,epb(n,(z=new Zsb,Ysb(z,(A=new Zhb,Cj(A.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new UQ(Hj(A.a))).a),z)),epb(n,(B=new qvb,pvb(B,(C=new Zhb,Cj(C.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new UQ(Hj(C.a))).a),pT(B._,Aic,true),pT(B._,Bic,true),B)),n)),j)),a))}
LP(1200,520,gdc,M6b);LP(1203,525,hdc,V6b);LP(1204,1,{},X6b);LP(1211,1,Adc);_.vb=function u7b(){Bdb(this.b,d7b(this.a.a))};var HM=tgb(Uhc,'SetupPresenter',1200),JM=tgb(Uhc,'SetupView',1203),IM=tgb(Uhc,'SetupView_BinderImpl',1204);Edc(ji)(33);