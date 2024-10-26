(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="167",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Op=0,Ru=1,Fp=2,Pd=1,Ld=2,li=3,mi=0,Qt=1,Hn=2,zi=0,es=1,Cu=2,Pu=3,Lu=4,Bp=5,lr=100,kp=101,zp=102,Hp=103,Vp=104,Gp=200,Wp=201,Xp=202,jp=203,Il=204,Dl=205,Yp=206,qp=207,Kp=208,$p=209,Zp=210,Jp=211,Qp=212,em=213,tm=214,nm=0,im=1,rm=2,la=3,sm=4,om=5,am=6,lm=7,Id=0,cm=1,um=2,Hi=0,hm=1,dm=2,fm=3,Dd=4,pm=5,mm=6,gm=7,Iu="attached",_m="detached",Nd=300,ls=301,cs=302,ca=303,Nl=304,Aa=306,us=1e3,Wn=1001,ua=1002,qt=1003,Ud=1004,Gs=1005,Lt=1006,Jo=1007,Xn=1008,gi=1009,Od=1010,Fd=1011,eo=1012,Nc=1013,vr=1014,Jt=1015,fi=1016,Uc=1017,Oc=1018,hs=1020,Bd=35902,kd=1021,zd=1022,yn=1023,Hd=1024,Vd=1025,ts=1026,ds=1027,Fc=1028,Bc=1029,Gd=1030,kc=1031,zc=1033,Qo=33776,ea=33777,ta=33778,na=33779,Ul=35840,Ol=35841,Fl=35842,Bl=35843,kl=36196,zl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,jl=37812,Yl=37813,ql=37814,Kl=37815,$l=37816,Zl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,ia=36492,nc=36494,ic=36495,Wd=36283,rc=36284,sc=36285,oc=36286,to=2300,no=2301,Ba=2302,Du=2400,Nu=2401,Uu=2402,vm=2500,xm=0,Xd=1,ac=2,ym=3200,wa=3201,jd=0,Mm=1,Ui="",Ot="srgb",Tt="srgb-linear",Hc="display-p3",Ra="display-p3-linear",ha="linear",at="srgb",da="rec709",fa="p3",wr=7680,Ou=519,Sm=512,bm=513,Em=514,Yd=515,Tm=516,Am=517,wm=518,Rm=519,lc=35044,Fu="300 es",pi=2e3,pa=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const Ys=Math.PI/180,fs=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Vc(s,e){return(s%e+e)%e}function Cm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pm(s,e,t){return s!==e?(t-s)/(e-s):0}function qs(s,e,t){return(1-t)*s+t*e}function Lm(s,e,t,n){return qs(s,e,1-Math.exp(-t*n))}function Im(s,e=1){return e-Math.abs(Vc(s,e*2)-e)}function Dm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Um(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Om(s,e){return s+Math.random()*(e-s)}function Fm(s){return s*(.5-Math.random())}function Bm(s){s!==void 0&&(Bu=s);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(s){return s*Ys}function zm(s){return s*fs}function Hm(s){return(s&s-1)===0&&s!==0}function Vm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*v,l*m,a*c);break;case"YXY":s.set(l*m,a*u,l*v,a*c);break;case"ZYZ":s.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Gc={DEG2RAD:Ys,RAD2DEG:fs,generateUUID:On,clamp:Ct,euclideanModulo:Vc,mapLinear:Cm,inverseLerp:Pm,lerp:qs,damp:Lm,pingpong:Im,smoothstep:Dm,smootherstep:Nm,randInt:Um,randFloat:Om,randFloatSpread:Fm,seededRandom:Bm,degToRad:km,radToDeg:zm,isPowerOfTwo:Hm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Wm,normalize:tt,denormalize:Un};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],v=n[8],g=i[0],f=i[3],p=i[6],S=i[1],M=i[4],b=i[7],P=i[2],E=i[5],T=i[8];return r[0]=o*g+a*S+l*P,r[3]=o*f+a*M+l*E,r[6]=o*p+a*b+l*T,r[1]=c*g+u*S+h*P,r[4]=c*f+u*M+h*E,r[7]=c*p+u*b+h*T,r[2]=d*g+m*S+v*P,r[5]=d*f+m*M+v*E,r[8]=d*p+m*b+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,v=t*h+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new We;function qd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xm(){const s=io("canvas");return s.style.display="block",s}const ku={};function ns(s){s in ku||(ku[s]=!0,console.warn(s))}function jm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const zu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ps={[Tt]:{transfer:ha,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ot]:{transfer:at,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ra]:{transfer:ha,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hu),fromReference:s=>s.applyMatrix3(zu)},[Hc]:{transfer:at,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hu),fromReference:s=>s.applyMatrix3(zu).convertLinearToSRGB()}},Ym=new Set([Tt,Ra]),$e={enabled:!0,_workingColorSpace:Tt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ym.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ps[e].toReference,i=Ps[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ps[s].primaries},getTransfer:function(s){return s===Ui?ha:Ps[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ps[e].luminanceCoefficients)}};function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function za(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rr;class qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=io("canvas")),Rr.width=e.width,Rr.height=e.height;const n=Rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Km=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ha(i[o].image)):r.push(Ha(i[o]))}else r=Ha(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $m=0;class It extends Sr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Wn,i=Wn,r=Lt,o=Xn,a=yn,l=gi,c=It.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=On(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Nd;It.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],v=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(m+1)/2,P=(p+1)/2,E=(u+d)/4,T=(h+g)/4,y=(v+f)/4;return M>b&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=T/n):b>P?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=y/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=y/r),this.set(n,i,r,t),this}let S=Math.sqrt((f-v)*(f-v)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zm extends Sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $d extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jm extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==d||c!==m||u!==v){let f=1-a;const p=l*d+c*m+u*v+h*g,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),E=Math.atan2(P,p*S);f=Math.sin(f*E)/P,a=Math.sin(a*E)/P}const b=a*S;if(l=l*f+d*b,c=c*f+m*b,u=u*f+v*b,h=h*f+g*b,f===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+u*h+l*m-c*d,e[t+1]=l*v+u*d+c*h-a*m,e[t+2]=c*v+u*m+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),m=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"YZX":this._x=d*u*h+c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h-d*m*v;break;case"XZY":this._x=d*u*h-c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new z,Vu=new Kn;class Mi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Mo.subVectors(this.max,Ls),Cr.subVectors(e.a,Ls),Pr.subVectors(e.b,Ls),Lr.subVectors(e.c,Ls),Ei.subVectors(Pr,Cr),Ti.subVectors(Lr,Pr),Zi.subVectors(Cr,Lr);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!Ga(t,Cr,Pr,Lr,Mo)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Cr,Pr,Lr,Mo))?!1:(So.crossVectors(Ei,Ti),t=[So.x,So.y,So.z],Ga(t,Cr,Pr,Lr,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new z,new z,new z,new z,new z,new z,new z,new z],wn=new z,yo=new Mi,Cr=new z,Pr=new z,Lr=new z,Ei=new z,Ti=new z,Zi=new z,Ls=new z,Mo=new z,So=new z,Ji=new z;function Ga(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);const a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qm=new Mi,Is=new z,Wa=new z;class Qn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Wa)),this.expandByPoint(Is.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new z,Xa=new z,bo=new z,Ai=new z,ja=new z,Eo=new z,Ya=new z;class po{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xa.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Xa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Ai.dot(this.direction),l=-Ai.dot(bo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,d,m,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const g=1/u;h*=g,d*=g,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xa).addScaledVector(bo,d),m}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,r){ja.subVectors(t,e),Eo.subVectors(n,e),Ya.crossVectors(ja,Eo);let o=this.direction.dot(Ya),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Eo.crossVectors(Ai,Eo));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,l,c,u,h,d,m,v,g,f){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,m,v,g,f)}set(e,t,n,i,r,o,a,l,c,u,h,d,m,v,g,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=v,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ir.setFromMatrixColumn(e,0).length(),r=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,v=c*u,g=c*h;t[0]=d+g*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,v=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=v*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+v,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),wi.crossVectors(n,ln),wi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),wi.crossVectors(n,ln)),wi.normalize(),To.crossVectors(ln,wi),i[0]=wi.x,i[4]=To.x,i[8]=ln.x,i[1]=wi.y,i[5]=To.y,i[9]=ln.y,i[2]=wi.z,i[6]=To.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],v=n[2],g=n[6],f=n[10],p=n[14],S=n[3],M=n[7],b=n[11],P=n[15],E=i[0],T=i[4],y=i[8],x=i[12],_=i[1],A=i[5],I=i[9],F=i[13],B=i[2],H=i[6],O=i[10],V=i[14],X=i[3],ne=i[7],ee=i[11],de=i[15];return r[0]=o*E+a*_+l*B+c*X,r[4]=o*T+a*A+l*H+c*ne,r[8]=o*y+a*I+l*O+c*ee,r[12]=o*x+a*F+l*V+c*de,r[1]=u*E+h*_+d*B+m*X,r[5]=u*T+h*A+d*H+m*ne,r[9]=u*y+h*I+d*O+m*ee,r[13]=u*x+h*F+d*V+m*de,r[2]=v*E+g*_+f*B+p*X,r[6]=v*T+g*A+f*H+p*ne,r[10]=v*y+g*I+f*O+p*ee,r[14]=v*x+g*F+f*V+p*de,r[3]=S*E+M*_+b*B+P*X,r[7]=S*T+M*A+b*H+P*ne,r[11]=S*y+M*I+b*O+P*ee,r[15]=S*x+M*F+b*V+P*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],v=e[3],g=e[7],f=e[11],p=e[15];return v*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*m-n*l*m)+g*(+t*l*m-t*c*d+r*o*d-i*o*m+i*c*u-r*l*u)+f*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],v=e[12],g=e[13],f=e[14],p=e[15],S=h*f*c-g*d*c+g*l*m-a*f*m-h*l*p+a*d*p,M=v*d*c-u*f*c-v*l*m+o*f*m+u*l*p-o*d*p,b=u*g*c-v*h*c+v*a*m-o*g*m-u*a*p+o*h*p,P=v*h*l-u*g*l-v*a*d+o*g*d+u*a*f-o*h*f,E=t*S+n*M+i*b+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(g*d*r-h*f*r-g*i*m+n*f*m+h*i*p-n*d*p)*T,e[2]=(a*f*r-g*l*r+g*i*c-n*f*c-a*i*p+n*l*p)*T,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*m-n*l*m)*T,e[4]=M*T,e[5]=(u*f*r-v*d*r+v*i*m-t*f*m-u*i*p+t*d*p)*T,e[6]=(v*l*r-o*f*r-v*i*c+t*f*c+o*i*p-t*l*p)*T,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*m+t*l*m)*T,e[8]=b*T,e[9]=(v*h*r-u*g*r-v*n*m+t*g*m+u*n*p-t*h*p)*T,e[10]=(o*g*r-v*a*r+v*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*T,e[12]=P*T,e[13]=(u*g*i-v*h*i+v*n*d-t*g*d-u*n*f+t*h*f)*T,e[14]=(v*a*i-o*g*i-v*n*l+t*g*l+o*n*f-t*a*f)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,v=r*h,g=o*u,f=o*h,p=a*h,S=l*c,M=l*u,b=l*h,P=n.x,E=n.y,T=n.z;return i[0]=(1-(g+p))*P,i[1]=(m+b)*P,i[2]=(v-M)*P,i[3]=0,i[4]=(m-b)*E,i[5]=(1-(d+p))*E,i[6]=(f+S)*E,i[7]=0,i[8]=(v+M)*T,i[9]=(f-S)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ir.set(i[0],i[1],i[2]).length();const o=Ir.set(i[4],i[5],i[6]).length(),a=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/r,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=pi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,v;if(a===pi)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===pa)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=pi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,m=(n+i)*u;let v,g;if(a===pi)v=(o+r)*h,g=-2*h;else if(a===pa)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new z,Rn=new Xe,eg=new z(0,0,0),tg=new z(1,1,1),wi=new z,To=new z,ln=new z,Gu=new Xe,Wu=new Kn;class $n{constructor(e=0,t=0,n=0,i=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ng=0;const Xu=new z,Dr=new Kn,ri=new Xe,Ao=new z,Ds=new z,ig=new z,rg=new Kn,ju=new z(1,0,0),Yu=new z(0,1,0),qu=new z(0,0,1),Ku={type:"added"},sg={type:"removed"},Nr={type:"childadded",child:null},qa={type:"childremoved",child:null};class ft extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new z,t=new $n,n=new Kn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ds,Ao,this.up):ri.lookAt(Ao,Ds,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(ri),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sg),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new z(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new z,si=new z,Ka=new z,oi=new z,Ur=new z,Or=new z,$u=new z,$a=new z,Za=new z,Ja=new z;class Vn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),si.subVectors(n,t),Ka.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(si),l=Cn.dot(Ka),c=si.dot(si),u=si.dot(Ka),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),si.subVectors(e,t),Cn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Cn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ur.subVectors(i,n),Or.subVectors(r,n),$a.subVectors(e,n);const l=Ur.dot($a),c=Or.dot($a);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,i);const u=Ur.dot(Za),h=Or.dot(Za);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ur,o);Ja.subVectors(e,r);const m=Ur.dot(Ja),v=Or.dot(Ja);if(v>=0&&m<=v)return t.copy(r);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Or,a);const f=u*v-m*h;if(f<=0&&h-u>=0&&m-v>=0)return $u.subVectors(r,i),a=(h-u)/(h-u+(m-v)),t.copy(i).addScaledVector($u,a);const p=1/(f+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Ur,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Qa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Vc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qa(o,r,e+1/3),this.g=Qa(o,r,e),this.b=Qa(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return $e.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ct(kt.r*255,0,255))*65536+Math.round(Ct(kt.g*255,0,255))*256+Math.round(Ct(kt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ot){$e.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(wo);const n=qs(Ri.h,wo.h,t),i=qs(Ri.s,wo.s,t),r=qs(Ri.l,wo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ie;Ie.NAMES=Jd;let og=0;class Fn extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=On(),this.name="",this.type="Material",this.blending=es,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class hr extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const di=ag();function ag(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function lg(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ct(s,-65504,65504),di.floatView[0]=s;const e=di.uint32View[0],t=e>>23&511;return di.baseTable[t]+((e&8388607)>>di.shiftTable[t])}function cg(s){const e=s>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[e]+(s&1023)]+di.exponentTable[e],di.floatView[0]}const Ro={toHalfFloat:lg,fromHalfFloat:cg},Mt=new z,Co=new Pe;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ns("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class Qd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ef extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ug=0;const _n=new Xe,el=new ft,Fr=new z,cn=new Mi,Ns=new Mi,Rt=new z;class Tn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qd(e)?ef:Qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(cn.min,Ns.min),cn.expandByPoint(Rt),Rt.addVectors(cn.max,Ns.max),cn.expandByPoint(Rt)):(cn.expandByPoint(Ns.min),cn.expandByPoint(Ns.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Rt.add(Fr)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new z,l[y]=new z;const c=new z,u=new z,h=new z,d=new Pe,m=new Pe,v=new Pe,g=new z,f=new z;function p(y,x,_){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,x),v.fromBufferAttribute(r,_),u.sub(c),h.sub(c),m.sub(d),v.sub(d);const A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(A),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(A),a[y].add(g),a[x].add(g),a[_].add(g),l[y].add(f),l[x].add(f),l[_].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,x=S.length;y<x;++y){const _=S[y],A=_.start,I=_.count;for(let F=A,B=A+I;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new z,b=new z,P=new z,E=new z;function T(y){P.fromBufferAttribute(i,y),E.copy(P);const x=a[y];M.copy(x),M.sub(P.multiplyScalar(P.dot(x))).normalize(),b.crossVectors(E,x);const A=b.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,A)}for(let y=0,x=S.length;y<x;++y){const _=S[y],A=_.start,I=_.count;for(let F=A,B=A+I;F<B;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let p=0;p<u;p++)d[v++]=c[m++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new Xe,Qi=new po,Po=new Qn,Ju=new z,Br=new z,kr=new z,zr=new z,tl=new z,Lo=new z,Io=new Pe,Do=new Pe,No=new Pe,Qu=new z,eh=new z,th=new z,Uo=new z,Oo=new z;class Ht extends ft{constructor(e=new Tn,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(tl.fromBufferAttribute(h,e),o?Lo.addScaledVector(tl,u):Lo.addScaledVector(tl.sub(t),u))}t.add(Lo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Po.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Po,Ju)===null||Qi.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=o[f.materialIndex],S=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,P=M;b<P;b+=3){const E=a.getX(b),T=a.getX(b+1),y=a.getX(b+2);i=Fo(this,p,e,n,c,u,h,E,T,y),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const S=a.getX(f),M=a.getX(f+1),b=a.getX(f+2);i=Fo(this,o,e,n,c,u,h,S,M,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const f=d[v],p=o[f.materialIndex],S=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,P=M;b<P;b+=3){const E=b,T=b+1,y=b+2;i=Fo(this,p,e,n,c,u,h,E,T,y),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=v,p=g;f<p;f+=3){const S=f,M=f+1,b=f+2;i=Fo(this,o,e,n,c,u,h,S,M,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function hg(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===mi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:s}}function Fo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Br),s.getVertexPosition(l,kr),s.getVertexPosition(c,zr);const u=hg(s,e,t,n,Br,kr,zr,Uo);if(u){i&&(Io.fromBufferAttribute(i,a),Do.fromBufferAttribute(i,l),No.fromBufferAttribute(i,c),u.uv=Vn.getInterpolation(Uo,Br,kr,zr,Io,Do,No,new Pe)),r&&(Io.fromBufferAttribute(r,a),Do.fromBufferAttribute(r,l),No.fromBufferAttribute(r,c),u.uv1=Vn.getInterpolation(Uo,Br,kr,zr,Io,Do,No,new Pe)),o&&(Qu.fromBufferAttribute(o,a),eh.fromBufferAttribute(o,l),th.fromBufferAttribute(o,c),u.normal=Vn.getInterpolation(Uo,Br,kr,zr,Qu,eh,th,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Vn.getNormal(Br,kr,zr,h.normal),u.face=h}return u}class mo extends Tn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(h,2));function v(g,f,p,S,M,b,P,E,T,y,x){const _=b/T,A=P/y,I=b/2,F=P/2,B=E/2,H=T+1,O=y+1;let V=0,X=0;const ne=new z;for(let ee=0;ee<O;ee++){const de=ee*A-F;for(let Te=0;Te<H;Te++){const De=Te*_-I;ne[g]=De*S,ne[f]=de*M,ne[p]=B,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[f]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Te/T),h.push(1-ee/y),V+=1}}for(let ee=0;ee<y;ee++)for(let de=0;de<T;de++){const Te=d+de+H*ee,De=d+de+H*(ee+1),J=d+(de+1)+H*(ee+1),oe=d+(de+1)+H*ee;l.push(Te,De,oe),l.push(De,J,oe),X+=6}a.addGroup(m,X,x),m+=X,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=ps(s[t]);for(const i in n)e[i]=n[i]}return e}function dg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const fg={clone:ps,merge:Xt};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new z,nh=new Pe,ih=new Pe;class jt extends nf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hr=-90,Vr=1;class gg extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(Hr,Vr,e,t);i.layers=this.layers,this.add(i);const r=new jt(Hr,Vr,e,t);r.layers=this.layers,this.add(r);const o=new jt(Hr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new jt(Hr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new jt(Hr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new jt(Hr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class rf extends It{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _g extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mo(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:zi});r.uniforms.tEquirect.value=t;const o=new Ht(i,r),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Lt),new gg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const nl=new z,vg=new z,xg=new We;class Ii{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nl.subVectors(n,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xg.getNormalMatrix(e),i=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Qn,Bo=new z;class Wc{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],m=i[8],v=i[9],g=i[10],f=i[11],p=i[12],S=i[13],M=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,f-m,b-p).normalize(),n[1].setComponents(l+r,d+c,f+m,b+p).normalize(),n[2].setComponents(l+o,d+u,f+v,b+S).normalize(),n[3].setComponents(l-o,d-u,f-v,b-S).normalize(),n[4].setComponents(l-a,d-h,f-g,b-M).normalize(),t===pi)n[5].setComponents(l+a,d+h,f+g,b+M).normalize();else if(t===pa)n[5].setComponents(a,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bo.x=i.normal.x>0?e.max.x:e.min.x,Bo.y=i.normal.y>0?e.max.y:e.min.y,Bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yg(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let m=0,v=d.length;m<v;m++){const g=d[m];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Es extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,m=[],v=[],g=[],f=[];for(let p=0;p<u;p++){const S=p*d-o;for(let M=0;M<c;M++){const b=M*h-r;v.push(b,-S,0),g.push(0,0,1),f.push(M/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+c*p,b=S+c*(p+1),P=S+1+c*(p+1),E=S+1+c*p;m.push(M,b,E),m.push(b,P,E)}this.setIndex(m),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,J0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Mg,alphahash_pars_fragment:Sg,alphamap_fragment:bg,alphamap_pars_fragment:Eg,alphatest_fragment:Tg,alphatest_pars_fragment:Ag,aomap_fragment:wg,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Pg,begin_vertex:Lg,beginnormal_vertex:Ig,bsdfs:Dg,iridescence_fragment:Ng,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Bg,clipping_planes_vertex:kg,color_fragment:zg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Yg,displacementmap_vertex:qg,emissivemap_fragment:Kg,emissivemap_pars_fragment:$g,colorspace_fragment:Zg,colorspace_pars_fragment:Jg,envmap_fragment:Qg,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:f_,envmap_vertex:i_,fog_vertex:r_,fog_pars_vertex:s_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:l_,lightmap_pars_fragment:c_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:h_,lights_pars_begin:d_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:__,lights_physical_fragment:v_,lights_physical_pars_fragment:x_,lights_fragment_begin:y_,lights_fragment_maps:M_,lights_fragment_end:S_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:A_,map_fragment:w_,map_pars_fragment:R_,map_particle_fragment:C_,map_particle_pars_fragment:P_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:I_,morphinstance_vertex:D_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:O_,morphtarget_vertex:F_,normal_fragment_begin:B_,normal_fragment_maps:k_,normal_pars_fragment:z_,normal_pars_vertex:H_,normal_vertex:V_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:W_,clearcoat_normal_fragment_maps:X_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Y_,opaque_fragment:q_,packing:K_,premultiplied_alpha_fragment:$_,project_vertex:Z_,dithering_fragment:J_,dithering_pars_fragment:Q_,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:s0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:u0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:v0,worldpos_vertex:x0,background_vert:y0,background_frag:M0,backgroundCube_vert:S0,backgroundCube_frag:b0,cube_vert:E0,cube_frag:T0,depth_vert:A0,depth_frag:w0,distanceRGBA_vert:R0,distanceRGBA_frag:C0,equirect_vert:P0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:D0,meshbasic_vert:N0,meshbasic_frag:U0,meshlambert_vert:O0,meshlambert_frag:F0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:z0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:j0,meshtoon_frag:Y0,points_vert:q0,points_frag:K0,shadow_vert:$0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:Q0},pe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},zn={basic:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Xt([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Xt([pe.lights,pe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};zn.physical={uniforms:Xt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ko={r:0,b:0,g:0},tr=new $n,ev=new Xe;function tv(s,e,t,n,i,r,o){const a=new Ie(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function v(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function g(S){let M=!1;const b=v(S);b===null?p(a,l):b&&b.isColor&&(p(b,1),M=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(S,M){const b=v(M);b&&(b.isCubeTexture||b.mapping===Aa)?(u===void 0&&(u=new Ht(new mo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ps(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),tr.copy(M.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(tr)),u.material.toneMapped=$e.getTransfer(b.colorSpace)!==at,(h!==b||d!==b.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,m=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ht(new Es(2,2),new _i({name:"BackgroundMaterial",uniforms:ps(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,m=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(ko,tf(s)),n.buffers.color.setClear(ko.r,ko.g,ko.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:f}}function nv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,A,I,F,B){let H=!1;const O=h(F,I,A);r!==O&&(r=O,c(r.object)),H=m(_,F,I,B),H&&v(_,F,I,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(_,A,I,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,A,I){const F=I.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let H=B[A.id];H===void 0&&(H={},B[A.id]=H);let O=H[F];return O===void 0&&(O=d(l()),H[F]=O),O}function d(_){const A=[],I=[],F=[];for(let B=0;B<t;B++)A[B]=0,I[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:F,object:_,attributes:{},index:null}}function m(_,A,I,F){const B=r.attributes,H=A.attributes;let O=0;const V=I.getAttributes();for(const X in V)if(V[X].location>=0){const ee=B[X];let de=H[X];if(de===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function v(_,A,I,F){const B={},H=A.attributes;let O=0;const V=I.getAttributes();for(const X in V)if(V[X].location>=0){let ee=H[X];ee===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),B[X]=de,O++}r.attributes=B,r.attributesNum=O,r.index=F}function g(){const _=r.newAttributes;for(let A=0,I=_.length;A<I;A++)_[A]=0}function f(_){p(_,0)}function p(_,A){const I=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;I[_]=1,F[_]===0&&(s.enableVertexAttribArray(_),F[_]=1),B[_]!==A&&(s.vertexAttribDivisor(_,A),B[_]=A)}function S(){const _=r.newAttributes,A=r.enabledAttributes;for(let I=0,F=A.length;I<F;I++)A[I]!==_[I]&&(s.disableVertexAttribArray(I),A[I]=0)}function M(_,A,I,F,B,H,O){O===!0?s.vertexAttribIPointer(_,A,I,B,H):s.vertexAttribPointer(_,A,I,F,B,H)}function b(_,A,I,F){g();const B=F.attributes,H=I.getAttributes(),O=A.defaultAttributeValues;for(const V in H){const X=H[V];if(X.location>=0){let ne=B[V];if(ne===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),ne!==void 0){const ee=ne.normalized,de=ne.itemSize,Te=e.get(ne);if(Te===void 0)continue;const De=Te.buffer,J=Te.type,oe=Te.bytesPerElement,xe=J===s.INT||J===s.UNSIGNED_INT||ne.gpuType===Nc;if(ne.isInterleavedBufferAttribute){const me=ne.data,Q=me.stride,C=ne.offset;if(me.isInstancedInterleavedBuffer){for(let N=0;N<X.locationSize;N++)p(X.location+N,me.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let N=0;N<X.locationSize;N++)f(X.location+N);s.bindBuffer(s.ARRAY_BUFFER,De);for(let N=0;N<X.locationSize;N++)M(X.location+N,de/X.locationSize,J,ee,Q*oe,(C+de/X.locationSize*N)*oe,xe)}else{if(ne.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,ne.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<X.locationSize;me++)f(X.location+me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let me=0;me<X.locationSize;me++)M(X.location+me,de/X.locationSize,J,ee,de*oe,de/X.locationSize*me*oe,xe)}}else if(O!==void 0){const ee=O[V];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(X.location,ee);break;case 3:s.vertexAttrib3fv(X.location,ee);break;case 4:s.vertexAttrib4fv(X.location,ee);break;default:s.vertexAttrib1fv(X.location,ee)}}}}S()}function P(){y();for(const _ in n){const A=n[_];for(const I in A){const F=A[I];for(const B in F)u(F[B].object),delete F[B];delete A[I]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const A=n[_.id];for(const I in A){const F=A[I];for(const B in F)u(F[B].object),delete F[B];delete A[I]}delete n[_.id]}function T(_){for(const A in n){const I=n[A];if(I[_.id]===void 0)continue;const F=I[_.id];for(const B in F)u(F[B].object),delete F[B];delete I[_.id]}}function y(){x(),o=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:y,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:f,disableUnusedAttributes:S}}function iv(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];t.update(m,n,1)}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g];for(let g=0;g<d.length;g++)t.update(v,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Jt&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:b,maxSamples:P}}function sv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ii,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||v===null||v.length===0||r&&!f)r?u(null):c();else{const S=r?0:n,M=S*4;let b=p.clippingState||null;l.value=b,b=u(v,d,M,m);for(let P=0;P!==M;++P)b[P]=t[P];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,v){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,v!==!0||f===null){const p=m+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=m;M!==g;++M,b+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function ov(s){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=ls:a===Nl&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===Nl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _g(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xc extends nf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zr=4,rh=[.125,.215,.35,.446,.526,.582],cr=20,il=new Xc,sh=new Ie;let rl=null,sl=0,ol=0,al=!1;const or=(1+Math.sqrt(5))/2,Gr=1/or,oh=[new z(-or,Gr,0),new z(or,Gr,0),new z(-Gr,0,or),new z(Gr,0,or),new z(0,or,-Gr),new z(0,or,Gr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,ol),this._renderer.xr.enabled=al,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:fi,format:yn,colorSpace:Tt,depthBuffer:!1},i=lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(r)),this._blurMaterial=lv(r,e,t)}return i}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i){const a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sh),u.toneMapping=Hi,u.autoClear=!1;const m=new hr({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Ht(new mo,m);let g=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(sh),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;zo(i,S*M,p>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(i-r-1)%oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),g=r/v,f=isFinite(r)?1+Math.floor(u*g):cr;f>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${cr}`);const p=[];let S=0;for(let T=0;T<cr;++T){const y=T/g,x=Math.exp(-y*y/2);p.push(x),T===0?S+=x:T<f&&(S+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=v,d.mipInt.value=M-n;const b=this._sizeLods[i],P=3*b*(i>M-Zr?i-M+Zr:0),E=4*(this._cubeSize-b);zo(t,P,E,3*b,2*b),l.setRenderTarget(t),l.render(h,il)}}function av(s){const e=[],t=[],n=[];let i=s;const r=s-Zr+1+rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zr?l=rh[o-s+Zr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,g=3,f=2,p=1,S=new Float32Array(g*v*m),M=new Float32Array(f*v*m),b=new Float32Array(p*v*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,y=E>2?0:-1,x=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];S.set(x,g*v*E),M.set(d,f*v*E);const _=[E,E,E,E,E,E];b.set(_,p*v*E)}const P=new Tn;P.setAttribute("position",new Ft(S,g)),P.setAttribute("uv",new Ft(M,f)),P.setAttribute("faceIndex",new Ft(b,p)),e.push(P),i>Zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lh(s,e,t){const n=new xr(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function lv(s,e,t){const n=new Float32Array(cr),i=new z(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ch(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function uh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===Nl,u=l===ls||l===cs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ah(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new ah(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hv(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let f=0,p=g.length;f<p;f++)e.remove(g[f])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const g=m[v];for(let f=0,p=g.length;f<p;f++)e.update(g[f],s.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let M=0,b=S.length;M<b;M+=3){const P=S[M+0],E=S[M+1],T=S[M+2];d.push(P,E,E,T,T,P)}}else if(v!==void 0){const S=v.array;g=v.version;for(let M=0,b=S.length/3-1;M<b;M+=3){const P=M+0,E=M+1,T=M+2;d.push(P,E,E,T,T,P)}}else return;const f=new(qd(d)?ef:Qd)(d,1);f.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dv(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){s.drawElements(n,m,r,d*o),t.update(m,n,1)}function c(d,m,v){v!==0&&(s.drawElementsInstanced(n,m,r,d*o,v),t.update(m,n,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];t.update(f,n,1)}function h(d,m,v,g){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,v);let p=0;for(let S=0;S<v;S++)p+=m[S];for(let S=0;S<g.length;S++)t.update(p,n,g[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pv(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let _=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),g===!0&&(b=2),f===!0&&(b=3);let P=a.attributes.position.count*b,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*E*4*h),y=new $d(T,P,E,h);y.type=Jt,y.needsUpdate=!0;const x=b*4;for(let A=0;A<h;A++){const I=p[A],F=S[A],B=M[A],H=P*E*4*A;for(let O=0;O<I.count;O++){const V=O*x;v===!0&&(i.fromBufferAttribute(I,O),T[H+V+0]=i.x,T[H+V+1]=i.y,T[H+V+2]=i.z,T[H+V+3]=0),g===!0&&(i.fromBufferAttribute(F,O),T[H+V+4]=i.x,T[H+V+5]=i.y,T[H+V+6]=i.z,T[H+V+7]=0),f===!0&&(i.fromBufferAttribute(B,O),T[H+V+8]=i.x,T[H+V+9]=i.y,T[H+V+10]=i.z,T[H+V+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:y,size:new Pe(P,E)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class of extends It{constructor(e,t,n,i,r,o,a,l,c,u=ts){if(u!==ts&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=vr),n===void 0&&u===ds&&(n=hs),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const af=new It,hh=new of(1,1),lf=new $d,cf=new Jm,uf=new rf,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=dh[i];if(r===void 0&&(r=new Float32Array(i),dh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ca(s,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),wt(t,e)}}function vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),wt(t,e)}}function xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),wt(t,e)}}function yv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;gh.set(n),s.uniformMatrix2fv(this.addr,!1,gh),wt(t,n)}}function Mv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;mh.set(n),s.uniformMatrix3fv(this.addr,!1,mh),wt(t,n)}}function Sv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;ph.set(n),s.uniformMatrix4fv(this.addr,!1,ph),wt(t,n)}}function bv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),wt(t,e)}}function Tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),wt(t,e)}}function Av(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),wt(t,e)}}function wv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),wt(t,e)}}function Cv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),wt(t,e)}}function Pv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),wt(t,e)}}function Lv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hh.compareFunction=Yd,r=hh):r=af,t.setTexture2D(e||r,i)}function Iv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cf,i)}function Dv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function Nv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function Uv(s){switch(s){case 5126:return gv;case 35664:return _v;case 35665:return vv;case 35666:return xv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return bv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return wv;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Ov(s,e){s.uniform1fv(this.addr,e)}function Fv(s,e){const t=Ts(e,this.size,2);s.uniform2fv(this.addr,t)}function Bv(s,e){const t=Ts(e,this.size,3);s.uniform3fv(this.addr,t)}function kv(s,e){const t=Ts(e,this.size,4);s.uniform4fv(this.addr,t)}function zv(s,e){const t=Ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hv(s,e){const t=Ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Vv(s,e){const t=Ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gv(s,e){s.uniform1iv(this.addr,e)}function Wv(s,e){s.uniform2iv(this.addr,e)}function Xv(s,e){s.uniform3iv(this.addr,e)}function jv(s,e){s.uniform4iv(this.addr,e)}function Yv(s,e){s.uniform1uiv(this.addr,e)}function qv(s,e){s.uniform2uiv(this.addr,e)}function Kv(s,e){s.uniform3uiv(this.addr,e)}function $v(s,e){s.uniform4uiv(this.addr,e)}function Zv(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);At(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||af,r[o])}function Jv(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);At(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||cf,r[o])}function Qv(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);At(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uf,r[o])}function ex(s,e,t){const n=this.cache,i=e.length,r=Ca(t,i);At(n,r)||(s.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lf,r[o])}function tx(s){switch(s){case 5126:return Ov;case 35664:return Fv;case 35665:return Bv;case 35666:return kv;case 35674:return zv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return jv;case 5125:return Yv;case 36294:return qv;case 36295:return Kv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ex}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tx(t.type)}}class rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function _h(s,e){s.seq.push(e),s.map[e.id]=e}function sx(s,e,t){const n=s.name,i=n.length;for(ll.lastIndex=0;;){const r=ll.exec(n),o=ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_h(t,c===void 0?new nx(a,s,e):new ix(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new rx(a),_h(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);sx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ox=37297;let ax=0;function lx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function cx(s){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(s);let n;switch(e===t?n="":e===fa&&t===da?n="LinearDisplayP3ToLinearSRGB":e===da&&t===fa&&(n="LinearSRGBToLinearDisplayP3"),s){case Tt:case Ra:return[n,"LinearTransferOETF"];case Ot:case Hc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+lx(s.getShaderSource(e),o)}else return i}function ux(s,e){const t=cx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hx(s,e){let t;switch(e){case hm:t="Linear";break;case dm:t="Reinhard";break;case fm:t="OptimizedCineon";break;case Dd:t="ACESFilmic";break;case mm:t="AgX";break;case gm:t="Neutral";break;case pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new z;function dx(){$e.getLuminanceCoefficients(Ho);const s=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function px(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ws(s){return s!==""}function yh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(s){return s.replace(gx,vx)}const _x=new Map;function vx(s,e){let t=Ge[e];if(t===void 0){const n=_x.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(s){return s.replace(xx,yx)}function yx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ex(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case cm:e="ENVMAP_BLENDING_MIX";break;case um:e="ENVMAP_BLENDING_ADD";break}return e}function Tx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ax(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Mx(t),c=Sx(t),u=bx(t),h=Ex(t),d=Tx(t),m=fx(t),v=px(r),g=i.createProgram();let f,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ws).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(f=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Hi?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),o=cc(o),o=yh(o,t),o=Mh(o,t),a=cc(a),a=yh(a,t),a=Mh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+f+o,b=S+p+a,P=vh(i,i.VERTEX_SHADER,M),E=vh(i,i.FRAGMENT_SHADER,b);i.attachShader(g,P),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(A){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(P).trim(),B=i.getShaderInfoLog(E).trim();let H=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,P,E);else{const V=xh(i,P,"vertex"),X=xh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+V+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||B==="")&&(O=!1);O&&(A.diagnostics={runnable:H,programLog:I,vertexShader:{log:F,prefix:f},fragmentShader:{log:B,prefix:p}})}i.deleteShader(P),i.deleteShader(E),y=new ra(i,g),x=mx(i,g)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(g,ox)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=E,this}let wx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cx(e),t.set(e,n)),n}}class Cx{constructor(e){this.id=wx++,this.code=e,this.usedTimes=0}}function Px(s,e,t,n,i,r,o){const a=new Zd,l=new Rx,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,_,A,I,F){const B=I.fog,H=F.geometry,O=x.isMeshStandardMaterial?I.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),X=V&&V.mapping===Aa?V.image.height:null,ne=v[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ee!==void 0?ee.length:0;let Te=0;H.morphAttributes.position!==void 0&&(Te=1),H.morphAttributes.normal!==void 0&&(Te=2),H.morphAttributes.color!==void 0&&(Te=3);let De,J,oe,xe;if(ne){const Ke=zn[ne];De=Ke.vertexShader,J=Ke.fragmentShader}else De=x.vertexShader,J=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),xe=l.getFragmentShaderID(x);const me=s.getRenderTarget(),Q=F.isInstancedMesh===!0,C=F.isBatchedMesh===!0,N=!!x.map,k=!!x.matcap,D=!!V,te=!!x.aoMap,ie=!!x.lightMap,ye=!!x.bumpMap,he=!!x.normalMap,Ve=!!x.displacementMap,Ae=!!x.emissiveMap,Ee=!!x.metalnessMap,U=!!x.roughnessMap,R=x.anisotropy>0,j=x.clearcoat>0,re=x.dispersion>0,ae=x.iridescence>0,se=x.sheen>0,Ce=x.transmission>0,fe=R&&!!x.anisotropyMap,_e=j&&!!x.clearcoatMap,He=j&&!!x.clearcoatNormalMap,ce=j&&!!x.clearcoatRoughnessMap,ve=ae&&!!x.iridescenceMap,Ye=ae&&!!x.iridescenceThicknessMap,Ne=se&&!!x.sheenColorMap,Me=se&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,ze=!!x.specularColorMap,lt=!!x.specularIntensityMap,w=Ce&&!!x.transmissionMap,Y=Ce&&!!x.thicknessMap,q=!!x.gradientMap,Z=!!x.alphaMap,le=x.alphaTest>0,we=!!x.alphaHash,Fe=!!x.extensions;let _t=Hi;x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_t=s.toneMapping);const bt={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:J,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:C,batchingColor:C&&F._colorsTexture!==null,instancing:Q,instancingColor:Q&&F.instanceColor!==null,instancingMorph:Q&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Tt,alphaToCoverage:!!x.alphaToCoverage,map:N,matcap:k,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:ie,bumpMap:ye,normalMap:he,displacementMap:d&&Ve,emissiveMap:Ae,normalMapObjectSpace:he&&x.normalMapType===Mm,normalMapTangentSpace:he&&x.normalMapType===jd,metalnessMap:Ee,roughnessMap:U,anisotropy:R,anisotropyMap:fe,clearcoat:j,clearcoatMap:_e,clearcoatNormalMap:He,clearcoatRoughnessMap:ce,dispersion:re,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Ye,sheen:se,sheenColorMap:Ne,sheenRoughnessMap:Me,specularMap:Oe,specularColorMap:ze,specularIntensityMap:lt,transmission:Ce,transmissionMap:w,thicknessMap:Y,gradientMap:q,opaque:x.transparent===!1&&x.blending===es&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:we,combine:x.combine,mapUv:N&&g(x.map.channel),aoMapUv:te&&g(x.aoMap.channel),lightMapUv:ie&&g(x.lightMap.channel),bumpMapUv:ye&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:Ve&&g(x.displacementMap.channel),emissiveMapUv:Ae&&g(x.emissiveMap.channel),metalnessMapUv:Ee&&g(x.metalnessMap.channel),roughnessMapUv:U&&g(x.roughnessMap.channel),anisotropyMapUv:fe&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:Oe&&g(x.specularMap.channel),specularColorMapUv:ze&&g(x.specularColorMap.channel),specularIntensityMapUv:lt&&g(x.specularIntensityMap.channel),transmissionMapUv:w&&g(x.transmissionMap.channel),thicknessMapUv:Y&&g(x.thicknessMap.channel),alphaMapUv:Z&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||R),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(N||Z),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Te,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,decodeVideoTexture:N&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||C)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(x){const _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)_.push(A),_.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(S(_,x),M(_,x),_.push(s.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function S(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function M(x,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.doubleSided&&a.enable(10),_.flipSided&&a.enable(11),_.useDepthPacking&&a.enable(12),_.dithering&&a.enable(13),_.transmission&&a.enable(14),_.sheen&&a.enable(15),_.opaque&&a.enable(16),_.pointsUvs&&a.enable(17),_.decodeVideoTexture&&a.enable(18),_.alphaToCoverage&&a.enable(19),x.push(a.mask)}function b(x){const _=v[x.type];let A;if(_){const I=zn[_];A=fg.clone(I.uniforms)}else A=x.uniforms;return A}function P(x,_){let A;for(let I=0,F=u.length;I<F;I++){const B=u[I];if(B.cacheKey===_){A=B,++A.usedTimes;break}}return A===void 0&&(A=new Ax(s,_,x,r),u.push(A)),A}function E(x){if(--x.usedTimes===0){const _=u.indexOf(x);u[_]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function y(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:y}}function Lx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ix(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Th(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,v,g,f){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:g,group:f},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=f),e++,p}function a(h,d,m,v,g,f){const p=o(h,d,m,v,g,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,d,m,v,g,f){const p=o(h,d,m,v,g,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Ix),n.length>1&&n.sort(d||Eh),i.length>1&&i.sort(d||Eh)}function u(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Dx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Th,s.set(n,[o])):i>=r.length?(o=new Th,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Nx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ie};break;case"SpotLight":t={position:new z,direction:new z,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function Ux(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ox=0;function Fx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bx(s){const e=new Nx,t=Ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new Xe,o=new Xe;function a(c){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,v=0,g=0,f=0,p=0,S=0,M=0,b=0,P=0,E=0,T=0;c.sort(Fx);for(let x=0,_=c.length;x<_;x++){const A=c[x],I=A.color,F=A.intensity,B=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],F);T++}else if(A.isDirectionalLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const V=A.shadow,X=t.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=A.shadow.matrix,S++}n.directional[m]=O,m++}else if(A.isSpotLight){const O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(I).multiplyScalar(F),O.distance=B,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[g]=O;const V=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,V.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[g]=V.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=H,b++}g++}else if(A.isRectAreaLight){const O=e.get(A);O.color.copy(I).multiplyScalar(F),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[f]=O,f++}else if(A.isPointLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const V=A.shadow,X=t.get(A);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=A.shadow.matrix,M++}n.point[v]=O,v++}else if(A.isHemisphereLight){const O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(F),O.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==g||y.rectAreaLength!==f||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==M||y.numSpotShadows!==b||y.numSpotMaps!==P||y.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,y.directionalLength=m,y.pointLength=v,y.spotLength=g,y.rectAreaLength=f,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=M,y.numSpotShadows=b,y.numSpotMaps=P,y.numLightProbes=T,n.version=Ox++)}function l(c,u){let h=0,d=0,m=0,v=0,g=0;const f=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),h++}else if(M.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:n}}function Ah(s){const e=new Bx(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function kx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ah(s),e.set(i,[a])):r>=o.length?(a=new Ah(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Pa extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(s,e,t){let n=new Wc;const i=new Pe,r=new Pe,o=new rt,a=new Pa({depthPacking:wa}),l=new zx,c={},u=t.maxTextureSize,h={[mi]:Qt,[Qt]:mi,[Hn]:Hn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Hx,fragmentShader:Vx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Tn;v.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(E,T,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const x=s.getRenderTarget(),_=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),I=s.state;I.setBlending(zi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==li&&this.type===li,B=p===li&&this.type!==li;for(let H=0,O=E.length;H<O;H++){const V=E[H],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ne=X.getFrameExtents();if(i.multiply(ne),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ne.x),i.x=r.x*ne.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ne.y),i.y=r.y*ne.y,X.mapSize.y=r.y)),X.map===null||F===!0||B===!0){const de=this.type!==li?{minFilter:qt,magFilter:qt}:{};X.map!==null&&X.map.dispose(),X.map=new xr(i.x,i.y,de),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const ee=X.getViewportCount();for(let de=0;de<ee;de++){const Te=X.getViewport(de);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),I.viewport(o),X.updateMatrices(V,de),n=X.getFrustum(),b(T,y,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===li&&S(X,y),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(x,_,A)};function S(E,T){const y=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xr(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,y,d,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,y,m,g,null)}function M(E,T,y,x){let _=null;const A=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)_=A;else if(_=y.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=_.uuid,F=T.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let H=B[F];H===void 0&&(H=_.clone(),B[F]=H,T.addEventListener("dispose",P)),_=H}if(_.visible=T.visible,_.wireframe=T.wireframe,x===li?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,y.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=s.properties.get(_);I.light=y}return _}function b(E,T,y,x,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const F=e.update(E),B=E.material;if(Array.isArray(B)){const H=F.groups;for(let O=0,V=H.length;O<V;O++){const X=H[O],ne=B[X.materialIndex];if(ne&&ne.visible){const ee=M(E,ne,x,_);E.onBeforeShadow(s,E,T,y,F,ee,X),s.renderBufferDirect(y,null,F,ee,E,X),E.onAfterShadow(s,E,T,y,F,ee,X)}}}else if(B.visible){const H=M(E,B,x,_);E.onBeforeShadow(s,E,T,y,F,H,null),s.renderBufferDirect(y,null,F,H,E,null),E.onAfterShadow(s,E,T,y,F,H,null)}}const I=E.children;for(let F=0,B=I.length;F<B;F++)b(I[F],T,y,x,_)}function P(E){E.target.removeEventListener("dispose",P);for(const y in c){const x=c[y],_=E.target.uuid;_ in x&&(x[_].dispose(),delete x[_])}}}function Wx(s){function e(){let w=!1;const Y=new rt;let q=null;const Z=new rt(0,0,0,0);return{setMask:function(le){q!==le&&!w&&(s.colorMask(le,le,le,le),q=le)},setLocked:function(le){w=le},setClear:function(le,we,Fe,_t,bt){bt===!0&&(le*=_t,we*=_t,Fe*=_t),Y.set(le,we,Fe,_t),Z.equals(Y)===!1&&(s.clearColor(le,we,Fe,_t),Z.copy(Y))},reset:function(){w=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let w=!1,Y=null,q=null,Z=null;return{setTest:function(le){le?xe(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(le){Y!==le&&!w&&(s.depthMask(le),Y=le)},setFunc:function(le){if(q!==le){switch(le){case nm:s.depthFunc(s.NEVER);break;case im:s.depthFunc(s.ALWAYS);break;case rm:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case sm:s.depthFunc(s.EQUAL);break;case om:s.depthFunc(s.GEQUAL);break;case am:s.depthFunc(s.GREATER);break;case lm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=le}},setLocked:function(le){w=le},setClear:function(le){Z!==le&&(s.clearDepth(le),Z=le)},reset:function(){w=!1,Y=null,q=null,Z=null}}}function n(){let w=!1,Y=null,q=null,Z=null,le=null,we=null,Fe=null,_t=null,bt=null;return{setTest:function(Ke){w||(Ke?xe(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(Ke){Y!==Ke&&!w&&(s.stencilMask(Ke),Y=Ke)},setFunc:function(Ke,Et,xt){(q!==Ke||Z!==Et||le!==xt)&&(s.stencilFunc(Ke,Et,xt),q=Ke,Z=Et,le=xt)},setOp:function(Ke,Et,xt){(we!==Ke||Fe!==Et||_t!==xt)&&(s.stencilOp(Ke,Et,xt),we=Ke,Fe=Et,_t=xt)},setLocked:function(Ke){w=Ke},setClear:function(Ke){bt!==Ke&&(s.clearStencil(Ke),bt=Ke)},reset:function(){w=!1,Y=null,q=null,Z=null,le=null,we=null,Fe=null,_t=null,bt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,v=!1,g=null,f=null,p=null,S=null,M=null,b=null,P=null,E=new Ie(0,0,0),T=0,y=!1,x=null,_=null,A=null,I=null,F=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=O>=2);let X=null,ne={};const ee=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Te=new rt().fromArray(ee),De=new rt().fromArray(de);function J(w,Y,q,Z){const le=new Uint8Array(4),we=s.createTexture();s.bindTexture(w,we),s.texParameteri(w,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(w,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<q;Fe++)w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY?s.texImage3D(Y,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(Y+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return we}const oe={};oe[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xe(s.DEPTH_TEST),r.setFunc(la),ye(!1),he(Ru),xe(s.CULL_FACE),te(zi);function xe(w){c[w]!==!0&&(s.enable(w),c[w]=!0)}function me(w){c[w]!==!1&&(s.disable(w),c[w]=!1)}function Q(w,Y){return u[w]!==Y?(s.bindFramebuffer(w,Y),u[w]=Y,w===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Y),w===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Y),!0):!1}function C(w,Y){let q=d,Z=!1;if(w){q=h.get(Y),q===void 0&&(q=[],h.set(Y,q));const le=w.textures;if(q.length!==le.length||q[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Fe=le.length;we<Fe;we++)q[we]=s.COLOR_ATTACHMENT0+we;q.length=le.length,Z=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Z=!0);Z&&s.drawBuffers(q)}function N(w){return m!==w?(s.useProgram(w),m=w,!0):!1}const k={[lr]:s.FUNC_ADD,[kp]:s.FUNC_SUBTRACT,[zp]:s.FUNC_REVERSE_SUBTRACT};k[Hp]=s.MIN,k[Vp]=s.MAX;const D={[Gp]:s.ZERO,[Wp]:s.ONE,[Xp]:s.SRC_COLOR,[Il]:s.SRC_ALPHA,[Zp]:s.SRC_ALPHA_SATURATE,[Kp]:s.DST_COLOR,[Yp]:s.DST_ALPHA,[jp]:s.ONE_MINUS_SRC_COLOR,[Dl]:s.ONE_MINUS_SRC_ALPHA,[$p]:s.ONE_MINUS_DST_COLOR,[qp]:s.ONE_MINUS_DST_ALPHA,[Jp]:s.CONSTANT_COLOR,[Qp]:s.ONE_MINUS_CONSTANT_COLOR,[em]:s.CONSTANT_ALPHA,[tm]:s.ONE_MINUS_CONSTANT_ALPHA};function te(w,Y,q,Z,le,we,Fe,_t,bt,Ke){if(w===zi){v===!0&&(me(s.BLEND),v=!1);return}if(v===!1&&(xe(s.BLEND),v=!0),w!==Bp){if(w!==g||Ke!==y){if((f!==lr||M!==lr)&&(s.blendEquation(s.FUNC_ADD),f=lr,M=lr),Ke)switch(w){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cu:s.blendFunc(s.ONE,s.ONE);break;case Pu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}p=null,S=null,b=null,P=null,E.set(0,0,0),T=0,g=w,y=Ke}return}le=le||Y,we=we||q,Fe=Fe||Z,(Y!==f||le!==M)&&(s.blendEquationSeparate(k[Y],k[le]),f=Y,M=le),(q!==p||Z!==S||we!==b||Fe!==P)&&(s.blendFuncSeparate(D[q],D[Z],D[we],D[Fe]),p=q,S=Z,b=we,P=Fe),(_t.equals(E)===!1||bt!==T)&&(s.blendColor(_t.r,_t.g,_t.b,bt),E.copy(_t),T=bt),g=w,y=!1}function ie(w,Y){w.side===Hn?me(s.CULL_FACE):xe(s.CULL_FACE);let q=w.side===Qt;Y&&(q=!q),ye(q),w.blending===es&&w.transparent===!1?te(zi):te(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),i.setMask(w.colorWrite);const Z=w.stencilWrite;o.setTest(Z),Z&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ae(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ye(w){x!==w&&(w?s.frontFace(s.CW):s.frontFace(s.CCW),x=w)}function he(w){w!==Op?(xe(s.CULL_FACE),w!==_&&(w===Ru?s.cullFace(s.BACK):w===Fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),_=w}function Ve(w){w!==A&&(H&&s.lineWidth(w),A=w)}function Ae(w,Y,q){w?(xe(s.POLYGON_OFFSET_FILL),(I!==Y||F!==q)&&(s.polygonOffset(Y,q),I=Y,F=q)):me(s.POLYGON_OFFSET_FILL)}function Ee(w){w?xe(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function U(w){w===void 0&&(w=s.TEXTURE0+B-1),X!==w&&(s.activeTexture(w),X=w)}function R(w,Y,q){q===void 0&&(X===null?q=s.TEXTURE0+B-1:q=X);let Z=ne[q];Z===void 0&&(Z={type:void 0,texture:void 0},ne[q]=Z),(Z.type!==w||Z.texture!==Y)&&(X!==q&&(s.activeTexture(q),X=q),s.bindTexture(w,Y||oe[w]),Z.type=w,Z.texture=Y)}function j(){const w=ne[X];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ye(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(w){Te.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),Te.copy(w))}function Me(w){De.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),De.copy(w))}function Oe(w,Y){let q=l.get(Y);q===void 0&&(q=new WeakMap,l.set(Y,q));let Z=q.get(w);Z===void 0&&(Z=s.getUniformBlockIndex(Y,w.name),q.set(w,Z))}function ze(w,Y){const Z=l.get(Y).get(w);a.get(Y)!==Z&&(s.uniformBlockBinding(Y,Z,w.__bindingPointIndex),a.set(Y,Z))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,ne={},u={},h=new WeakMap,d=[],m=null,v=!1,g=null,f=null,p=null,S=null,M=null,b=null,P=null,E=new Ie(0,0,0),T=0,y=!1,x=null,_=null,A=null,I=null,F=null,Te.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:xe,disable:me,bindFramebuffer:Q,drawBuffers:C,useProgram:N,setBlending:te,setMaterial:ie,setFlipSided:ye,setCullFace:he,setLineWidth:Ve,setPolygonOffset:Ae,setScissorTest:Ee,activeTexture:U,bindTexture:R,unbindTexture:j,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Ye,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:He,texStorage3D:ce,texSubImage2D:se,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ne,viewport:Me,reset:lt}}function wh(s,e,t,n){const i=Xx(n);switch(t){case kd:return s*e;case Hd:return s*e;case Vd:return s*e*2;case Fc:return s*e/i.components*i.byteLength;case Bc:return s*e/i.components*i.byteLength;case Gd:return s*e*2/i.components*i.byteLength;case kc:return s*e*2/i.components*i.byteLength;case zd:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case zc:return s*e*4/i.components*i.byteLength;case Qo:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(s,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(s,8)*Math.max(e,8)/2;case kl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ia:case nc:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wd:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sc:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xx(s){switch(s){case gi:case Od:return{byteLength:1,components:1};case eo:case Fd:case fi:return{byteLength:2,components:1};case Uc:case Oc:return{byteLength:2,components:4};case vr:case Nc:case Jt:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,R){return m?new OffscreenCanvas(U,R):io("canvas")}function g(U,R,j){let re=1;const ae=Ee(U);if((ae.width>j||ae.height>j)&&(re=j/Math.max(ae.width,ae.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const se=Math.floor(re*ae.width),Ce=Math.floor(re*ae.height);h===void 0&&(h=v(se,Ce));const fe=R?v(se,Ce):h;return fe.width=se,fe.height=Ce,fe.getContext("2d").drawImage(U,0,0,se,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+se+"x"+Ce+")."),fe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function f(U){return U.generateMipmaps&&U.minFilter!==qt&&U.minFilter!==Lt}function p(U){s.generateMipmap(U)}function S(U,R,j,re,ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let se=R;if(R===s.RED&&(j===s.FLOAT&&(se=s.R32F),j===s.HALF_FLOAT&&(se=s.R16F),j===s.UNSIGNED_BYTE&&(se=s.R8)),R===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(se=s.R8UI),j===s.UNSIGNED_SHORT&&(se=s.R16UI),j===s.UNSIGNED_INT&&(se=s.R32UI),j===s.BYTE&&(se=s.R8I),j===s.SHORT&&(se=s.R16I),j===s.INT&&(se=s.R32I)),R===s.RG&&(j===s.FLOAT&&(se=s.RG32F),j===s.HALF_FLOAT&&(se=s.RG16F),j===s.UNSIGNED_BYTE&&(se=s.RG8)),R===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(se=s.RG8UI),j===s.UNSIGNED_SHORT&&(se=s.RG16UI),j===s.UNSIGNED_INT&&(se=s.RG32UI),j===s.BYTE&&(se=s.RG8I),j===s.SHORT&&(se=s.RG16I),j===s.INT&&(se=s.RG32I)),R===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),R===s.RGBA){const Ce=ae?ha:$e.getTransfer(re);j===s.FLOAT&&(se=s.RGBA32F),j===s.HALF_FLOAT&&(se=s.RGBA16F),j===s.UNSIGNED_BYTE&&(se=Ce===at?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function M(U,R){let j;return U?R===null||R===vr||R===hs?j=s.DEPTH24_STENCIL8:R===Jt?j=s.DEPTH32F_STENCIL8:R===eo&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===vr||R===hs?j=s.DEPTH_COMPONENT24:R===Jt?j=s.DEPTH_COMPONENT32F:R===eo&&(j=s.DEPTH_COMPONENT16),j}function b(U,R){return f(U)===!0||U.isFramebufferTexture&&U.minFilter!==qt&&U.minFilter!==Lt?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function P(U){const R=U.target;R.removeEventListener("dispose",P),T(R),R.isVideoTexture&&u.delete(R)}function E(U){const R=U.target;R.removeEventListener("dispose",E),x(R)}function T(U){const R=n.get(U);if(R.__webglInit===void 0)return;const j=U.source,re=d.get(j);if(re){const ae=re[R.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(U),Object.keys(re).length===0&&d.delete(j)}n.remove(U)}function y(U){const R=n.get(U);s.deleteTexture(R.__webglTexture);const j=U.source,re=d.get(j);delete re[R.__cacheKey],o.memory.textures--}function x(U){const R=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(R.__webglFramebuffer[re]))for(let ae=0;ae<R.__webglFramebuffer[re].length;ae++)s.deleteFramebuffer(R.__webglFramebuffer[re][ae]);else s.deleteFramebuffer(R.__webglFramebuffer[re]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[re])}else{if(Array.isArray(R.__webglFramebuffer))for(let re=0;re<R.__webglFramebuffer.length;re++)s.deleteFramebuffer(R.__webglFramebuffer[re]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let re=0;re<R.__webglColorRenderbuffer.length;re++)R.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[re]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const j=U.textures;for(let re=0,ae=j.length;re<ae;re++){const se=n.get(j[re]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(j[re])}n.remove(U)}let _=0;function A(){_=0}function I(){const U=_;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),_+=1,U}function F(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function B(U,R){const j=n.get(U);if(U.isVideoTexture&&Ve(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){const re=U.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(j,U,R);return}}t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+R)}function H(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){De(j,U,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+R)}function O(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){De(j,U,R);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+R)}function V(U,R){const j=n.get(U);if(U.version>0&&j.__version!==U.version){J(j,U,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+R)}const X={[us]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},ne={[qt]:s.NEAREST,[Ud]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Jo]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},ee={[Sm]:s.NEVER,[Rm]:s.ALWAYS,[bm]:s.LESS,[Yd]:s.LEQUAL,[Em]:s.EQUAL,[wm]:s.GEQUAL,[Tm]:s.GREATER,[Am]:s.NOTEQUAL};function de(U,R){if(R.type===Jt&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Lt||R.magFilter===Jo||R.magFilter===Gs||R.magFilter===Xn||R.minFilter===Lt||R.minFilter===Jo||R.minFilter===Gs||R.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,X[R.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,X[R.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,X[R.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ne[R.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ne[R.minFilter]),R.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===qt||R.minFilter!==Gs&&R.minFilter!==Xn||R.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Te(U,R){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",P));const re=R.source;let ae=d.get(re);ae===void 0&&(ae={},d.set(re,ae));const se=F(R);if(se!==U.__cacheKey){ae[se]===void 0&&(ae[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[se].usedTimes++;const Ce=ae[U.__cacheKey];Ce!==void 0&&(ae[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(R)),U.__cacheKey=se,U.__webglTexture=ae[se].texture}return j}function De(U,R,j){let re=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(re=s.TEXTURE_3D);const ae=Te(U,R),se=R.source;t.bindTexture(re,U.__webglTexture,s.TEXTURE0+j);const Ce=n.get(se);if(se.version!==Ce.__version||ae===!0){t.activeTexture(s.TEXTURE0+j);const fe=$e.getPrimaries($e.workingColorSpace),_e=R.colorSpace===Ui?null:$e.getPrimaries(R.colorSpace),He=R.colorSpace===Ui||fe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ce=g(R.image,!1,i.maxTextureSize);ce=Ae(R,ce);const ve=r.convert(R.format,R.colorSpace),Ye=r.convert(R.type);let Ne=S(R.internalFormat,ve,Ye,R.colorSpace,R.isVideoTexture);de(re,R);let Me;const Oe=R.mipmaps,ze=R.isVideoTexture!==!0,lt=Ce.__version===void 0||ae===!0,w=se.dataReady,Y=b(R,ce);if(R.isDepthTexture)Ne=M(R.format===ds,R.type),lt&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Ne,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ce.width,ce.height,0,ve,Ye,null));else if(R.isDataTexture)if(Oe.length>0){ze&&lt&&t.texStorage2D(s.TEXTURE_2D,Y,Ne,Oe[0].width,Oe[0].height);for(let q=0,Z=Oe.length;q<Z;q++)Me=Oe[q],ze?w&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Me.width,Me.height,ve,Ye,Me.data):t.texImage2D(s.TEXTURE_2D,q,Ne,Me.width,Me.height,0,ve,Ye,Me.data);R.generateMipmaps=!1}else ze?(lt&&t.texStorage2D(s.TEXTURE_2D,Y,Ne,ce.width,ce.height),w&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Ye,ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,ce.width,ce.height,0,ve,Ye,ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ze&&lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Ne,Oe[0].width,Oe[0].height,ce.depth);for(let q=0,Z=Oe.length;q<Z;q++)if(Me=Oe[q],R.format!==yn)if(ve!==null)if(ze){if(w)if(R.layerUpdates.size>0){const le=wh(Me.width,Me.height,R.format,R.type);for(const we of R.layerUpdates){const Fe=Me.data.subarray(we*le/Me.data.BYTES_PER_ELEMENT,(we+1)*le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,we,Me.width,Me.height,1,ve,Fe,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,ve,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ne,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?w&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,ve,Ye,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ne,Me.width,Me.height,ce.depth,0,ve,Ye,Me.data)}else{ze&&lt&&t.texStorage2D(s.TEXTURE_2D,Y,Ne,Oe[0].width,Oe[0].height);for(let q=0,Z=Oe.length;q<Z;q++)Me=Oe[q],R.format!==yn?ve!==null?ze?w&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ne,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?w&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Me.width,Me.height,ve,Ye,Me.data):t.texImage2D(s.TEXTURE_2D,q,Ne,Me.width,Me.height,0,ve,Ye,Me.data)}else if(R.isDataArrayTexture)if(ze){if(lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Y,Ne,ce.width,ce.height,ce.depth),w)if(R.layerUpdates.size>0){const q=wh(ce.width,ce.height,R.format,R.type);for(const Z of R.layerUpdates){const le=ce.data.subarray(Z*q/ce.data.BYTES_PER_ELEMENT,(Z+1)*q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ce.width,ce.height,1,ve,Ye,le)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ye,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ce.width,ce.height,ce.depth,0,ve,Ye,ce.data);else if(R.isData3DTexture)ze?(lt&&t.texStorage3D(s.TEXTURE_3D,Y,Ne,ce.width,ce.height,ce.depth),w&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ye,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ce.width,ce.height,ce.depth,0,ve,Ye,ce.data);else if(R.isFramebufferTexture){if(lt)if(ze)t.texStorage2D(s.TEXTURE_2D,Y,Ne,ce.width,ce.height);else{let q=ce.width,Z=ce.height;for(let le=0;le<Y;le++)t.texImage2D(s.TEXTURE_2D,le,Ne,q,Z,0,ve,Ye,null),q>>=1,Z>>=1}}else if(Oe.length>0){if(ze&&lt){const q=Ee(Oe[0]);t.texStorage2D(s.TEXTURE_2D,Y,Ne,q.width,q.height)}for(let q=0,Z=Oe.length;q<Z;q++)Me=Oe[q],ze?w&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,ve,Ye,Me):t.texImage2D(s.TEXTURE_2D,q,Ne,ve,Ye,Me);R.generateMipmaps=!1}else if(ze){if(lt){const q=Ee(ce);t.texStorage2D(s.TEXTURE_2D,Y,Ne,q.width,q.height)}w&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ye,ce)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ve,Ye,ce);f(R)&&p(re),Ce.__version=se.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function J(U,R,j){if(R.image.length!==6)return;const re=Te(U,R),ae=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);const se=n.get(ae);if(ae.version!==se.__version||re===!0){t.activeTexture(s.TEXTURE0+j);const Ce=$e.getPrimaries($e.workingColorSpace),fe=R.colorSpace===Ui?null:$e.getPrimaries(R.colorSpace),_e=R.colorSpace===Ui||Ce===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=R.isCompressedTexture||R.image[0].isCompressedTexture,ce=R.image[0]&&R.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!He&&!ce?ve[Z]=g(R.image[Z],!0,i.maxCubemapSize):ve[Z]=ce?R.image[Z].image:R.image[Z],ve[Z]=Ae(R,ve[Z]);const Ye=ve[0],Ne=r.convert(R.format,R.colorSpace),Me=r.convert(R.type),Oe=S(R.internalFormat,Ne,Me,R.colorSpace),ze=R.isVideoTexture!==!0,lt=se.__version===void 0||re===!0,w=ae.dataReady;let Y=b(R,Ye);de(s.TEXTURE_CUBE_MAP,R);let q;if(He){ze&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Oe,Ye.width,Ye.height);for(let Z=0;Z<6;Z++){q=ve[Z].mipmaps;for(let le=0;le<q.length;le++){const we=q[le];R.format!==yn?Ne!==null?ze?w&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,we.width,we.height,Ne,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,we.width,we.height,Ne,Me,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Oe,we.width,we.height,0,Ne,Me,we.data)}}}else{if(q=R.mipmaps,ze&&lt){q.length>0&&Y++;const Z=Ee(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Y,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){ze?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Ne,Me,ve[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ve[Z].width,ve[Z].height,0,Ne,Me,ve[Z].data);for(let le=0;le<q.length;le++){const Fe=q[le].image[Z].image;ze?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Fe.width,Fe.height,Ne,Me,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Oe,Fe.width,Fe.height,0,Ne,Me,Fe.data)}}else{ze?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ne,Me,ve[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Ne,Me,ve[Z]);for(let le=0;le<q.length;le++){const we=q[le];ze?w&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ne,Me,we.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Oe,Ne,Me,we.image[Z])}}}f(R)&&p(s.TEXTURE_CUBE_MAP),se.__version=ae.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function oe(U,R,j,re,ae,se){const Ce=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),_e=S(j.internalFormat,Ce,fe,j.colorSpace);if(!n.get(R).__hasExternalTextures){const ce=Math.max(1,R.width>>se),ve=Math.max(1,R.height>>se);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,se,_e,ce,ve,R.depth,0,Ce,fe,null):t.texImage2D(ae,se,_e,ce,ve,0,Ce,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),he(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ae,n.get(j).__webglTexture,0,ye(R)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ae,n.get(j).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(U,R,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),R.depthBuffer){const re=R.depthTexture,ae=re&&re.isDepthTexture?re.type:null,se=M(R.stencilBuffer,ae),Ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=ye(R);he(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,se,R.width,R.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,se,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,se,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,U)}else{const re=R.textures;for(let ae=0;ae<re.length;ae++){const se=re[ae],Ce=r.convert(se.format,se.colorSpace),fe=r.convert(se.type),_e=S(se.internalFormat,Ce,fe,se.colorSpace),He=ye(R);j&&he(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,_e,R.width,R.height):he(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,_e,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,_e,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const re=n.get(R.depthTexture).__webglTexture,ae=ye(R);if(R.depthTexture.format===ts)he(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(R.depthTexture.format===ds)he(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Q(U){const R=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");me(R.__webglFramebuffer,U)}else if(j){R.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[re]),R.__webglDepthbuffer[re]=s.createRenderbuffer(),xe(R.__webglDepthbuffer[re],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),xe(R.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function C(U,R,j){const re=n.get(U);R!==void 0&&oe(re.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&Q(U)}function N(U){const R=U.texture,j=n.get(U),re=n.get(R);U.addEventListener("dispose",E);const ae=U.textures,se=U.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=R.version,o.memory.textures++),se){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let _e=0;_e<R.mipmaps.length;_e++)j.__webglFramebuffer[fe][_e]=s.createFramebuffer()}else j.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<R.mipmaps.length;fe++)j.__webglFramebuffer[fe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let fe=0,_e=ae.length;fe<_e;fe++){const He=n.get(ae[fe]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&he(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){const _e=ae[fe];j.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const He=r.convert(_e.format,_e.colorSpace),ce=r.convert(_e.type),ve=S(_e.internalFormat,He,ce,_e.colorSpace,U.isXRRenderTarget===!0),Ye=ye(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ve,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),de(s.TEXTURE_CUBE_MAP,R);for(let fe=0;fe<6;fe++)if(R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)oe(j.__webglFramebuffer[fe][_e],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else oe(j.__webglFramebuffer[fe],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);f(R)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,_e=ae.length;fe<_e;fe++){const He=ae[fe],ce=n.get(He);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),de(s.TEXTURE_2D,He),oe(j.__webglFramebuffer,U,He,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),f(He)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,re.__webglTexture),de(fe,R),R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)oe(j.__webglFramebuffer[_e],U,R,s.COLOR_ATTACHMENT0,fe,_e);else oe(j.__webglFramebuffer,U,R,s.COLOR_ATTACHMENT0,fe,0);f(R)&&p(fe),t.unbindTexture()}U.depthBuffer&&Q(U)}function k(U){const R=U.textures;for(let j=0,re=R.length;j<re;j++){const ae=R[j];if(f(ae)){const se=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ce=n.get(ae).__webglTexture;t.bindTexture(se,Ce),p(se),t.unbindTexture()}}}const D=[],te=[];function ie(U){if(U.samples>0){if(he(U)===!1){const R=U.textures,j=U.width,re=U.height;let ae=s.COLOR_BUFFER_BIT;const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(U),fe=R.length>1;if(fe)for(let _e=0;_e<R.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<R.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(R[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,ae,s.NEAREST),l===!0&&(D.length=0,te.length=0,D.push(s.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(D.push(se),te.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<R.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const He=n.get(R[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const R=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ye(U){return Math.min(i.maxSamples,U.samples)}function he(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ve(U){const R=o.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function Ae(U,R){const j=U.colorSpace,re=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==Tt&&j!==Ui&&($e.getTransfer(j)===at?(re!==yn||ae!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),R}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=C,this.setupRenderTarget=N,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=he}function Yx(s,e){function t(n,i=Ui){let r;const o=$e.getTransfer(i);if(n===gi)return s.UNSIGNED_BYTE;if(n===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return s.BYTE;if(n===Fd)return s.SHORT;if(n===eo)return s.UNSIGNED_SHORT;if(n===Nc)return s.INT;if(n===vr)return s.UNSIGNED_INT;if(n===Jt)return s.FLOAT;if(n===fi)return s.HALF_FLOAT;if(n===kd)return s.ALPHA;if(n===zd)return s.RGB;if(n===yn)return s.RGBA;if(n===Hd)return s.LUMINANCE;if(n===Vd)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===Fc)return s.RED;if(n===Bc)return s.RED_INTEGER;if(n===Gd)return s.RG;if(n===kc)return s.RG_INTEGER;if(n===zc)return s.RGBA_INTEGER;if(n===Qo||n===ea||n===ta||n===na)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Ol||n===Fl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===zl)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl||n===jl||n===Yl||n===ql||n===Kl||n===$l||n===Zl||n===Jl||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===rc||n===sc||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class qx extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:$x,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Sr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,v=null;const g=new Jx,f=t.getContextAttributes();let p=null,S=null;const M=[],b=[],P=new Pe;let E=null;const T=new jt;T.layers.enable(1),T.viewport=new rt;const y=new jt;y.layers.enable(2),y.viewport=new rt;const x=[T,y],_=new qx;_.layers.enable(1),_.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=M[J];return oe===void 0&&(oe=new cl,M[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=M[J];return oe===void 0&&(oe=new cl,M[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=M[J];return oe===void 0&&(oe=new cl,M[J]=oe),oe.getHandSpace()};function F(J){const oe=b.indexOf(J.inputSource);if(oe===-1)return;const xe=M[oe];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||o),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let J=0;J<M.length;J++){const oe=b[J];oe!==null&&(b[J]=null,M[J].disconnect(oe))}A=null,I=null,g.reset(),e.setRenderTarget(p),m=null,d=null,h=null,i=null,S=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const oe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new xr(m.framebufferWidth,m.framebufferHeight,{format:yn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let oe=null,xe=null,me=null;f.depth&&(me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=f.stencil?ds:ts,xe=f.stencil?hs:vr);const Q={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Q),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new xr(d.textureWidth,d.textureHeight,{format:yn,type:gi,depthTexture:new of(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(J){for(let oe=0;oe<J.removed.length;oe++){const xe=J.removed[oe],me=b.indexOf(xe);me>=0&&(b[me]=null,M[me].disconnect(xe))}for(let oe=0;oe<J.added.length;oe++){const xe=J.added[oe];let me=b.indexOf(xe);if(me===-1){for(let C=0;C<M.length;C++)if(C>=b.length){b.push(xe),me=C;break}else if(b[C]===null){b[C]=xe,me=C;break}if(me===-1)break}const Q=M[me];Q&&Q.connect(xe)}}const O=new z,V=new z;function X(J,oe,xe){O.setFromMatrixPosition(oe.matrixWorld),V.setFromMatrixPosition(xe.matrixWorld);const me=O.distanceTo(V),Q=oe.projectionMatrix.elements,C=xe.projectionMatrix.elements,N=Q[14]/(Q[10]-1),k=Q[14]/(Q[10]+1),D=(Q[9]+1)/Q[5],te=(Q[9]-1)/Q[5],ie=(Q[8]-1)/Q[0],ye=(C[8]+1)/C[0],he=N*ie,Ve=N*ye,Ae=me/(-ie+ye),Ee=Ae*-ie;oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ee),J.translateZ(Ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const U=N+Ae,R=k+Ae,j=he-Ee,re=Ve+(me-Ee),ae=D*k/R*U,se=te*k/R*U;J.projectionMatrix.makePerspective(j,re,ae,se,U,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ne(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),_.near=y.near=T.near=J.near,_.far=y.far=T.far=J.far,(A!==_.near||I!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,I=_.far,T.near=A,T.far=I,y.near=A,y.far=I,T.updateProjectionMatrix(),y.updateProjectionMatrix(),J.updateProjectionMatrix());const oe=J.parent,xe=_.cameras;ne(_,oe);for(let me=0;me<xe.length;me++)ne(xe[me],oe);xe.length===2?X(_,T,y):_.projectionMatrix.copy(T.projectionMatrix),ee(J,_,oe)};function ee(J,oe,xe){xe===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let de=null;function Te(J,oe){if(u=oe.getViewerPose(c||o),v=oe,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let me=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,me=!0);for(let C=0;C<xe.length;C++){const N=xe[C];let k=null;if(m!==null)k=m.getViewport(N);else{const te=h.getViewSubImage(d,N);k=te.viewport,C===0&&(e.setRenderTargetTextures(S,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(S))}let D=x[C];D===void 0&&(D=new jt,D.layers.enable(C),D.viewport=new rt,x[C]=D),D.matrix.fromArray(N.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(N.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(k.x,k.y,k.width,k.height),C===0&&(_.matrix.copy(D.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),me===!0&&_.cameras.push(D)}const Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const C=h.getDepthInformation(xe[0]);C&&C.isValid&&C.texture&&g.init(e,C,i.renderState)}}for(let xe=0;xe<M.length;xe++){const me=b[xe],Q=M[xe];me!==null&&Q!==void 0&&Q.update(me,oe,c||o)}de&&de(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const De=new sf;De.setAnimationLoop(Te),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}const nr=new $n,ey=new Xe;function ty(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,tf(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,S,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),v(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),g(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,S,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Qt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Qt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,b=S.envMapRotation;M&&(f.envMap.value=M,nr.copy(b),nr.x*=-1,nr.y*=-1,nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),f.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(nr)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=M*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ny(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const b=M.program;n.uniformBlockBinding(S,b)}function c(S,M){let b=i[S.id];b===void 0&&(v(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",f));const P=M.program;n.updateUBOMapping(S,P);const E=e.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function u(S){const M=h();S.__bindingPointIndex=M;const b=s.createBuffer(),P=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],b=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,T=b.length;E<T;E++){const y=Array.isArray(b[E])?b[E]:[b[E]];for(let x=0,_=y.length;x<_;x++){const A=y[x];if(m(A,E,x,P)===!0){const I=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let H=0;H<F.length;H++){const O=F[H],V=g(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,I+B,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,B),B+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,M,b,P){const E=S.value,T=M+"_"+b;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{const y=P[T];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return P[T]=E,!0}else if(y.equals(E)===!1)return y.copy(E),!0}return!1}function v(S){const M=S.uniforms;let b=0;const P=16;for(let T=0,y=M.length;T<y;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,A=x.length;_<A;_++){const I=x[_],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,H=F.length;B<H;B++){const O=F[B],V=g(O),X=b%P,ne=X%V.boundary,ee=X+ne;b+=ne,ee!==0&&P-ee<V.storage&&(b+=P-ee),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=V.storage}}}const E=b%P;return E>0&&(b+=P-E),S.__size=b,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){const M=S.target;M.removeEventListener("dispose",f);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class iy{constructor(e={}){const{canvas:t=Xm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Hi,this.toneMappingExposure=1;const M=this;let b=!1,P=0,E=0,T=null,y=-1,x=null;const _=new rt,A=new rt;let I=null;const F=new Ie(0);let B=0,H=t.width,O=t.height,V=1,X=null,ne=null;const ee=new rt(0,0,H,O),de=new rt(0,0,H,O);let Te=!1;const De=new Wc;let J=!1,oe=!1;const xe=new Xe,me=new z,Q=new rt,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function k(){return T===null?V:1}let D=n;function te(L,G){return t.getContext(L,G)}try{const L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const G="webgl2";if(D=te(G,L),D===null)throw te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ie,ye,he,Ve,Ae,Ee,U,R,j,re,ae,se,Ce,fe,_e,He,ce,ve,Ye,Ne,Me,Oe,ze,lt;function w(){ie=new uv(D),ie.init(),Oe=new Yx(D,ie),ye=new rv(D,ie,e,Oe),he=new Wx(D),Ve=new fv(D),Ae=new Lx,Ee=new jx(D,ie,he,Ae,ye,Oe,Ve),U=new ov(M),R=new cv(M),j=new yg(D),ze=new nv(D,j),re=new hv(D,j,Ve,ze),ae=new mv(D,re,j,Ve),Ye=new pv(D,ye,Ee),He=new sv(Ae),se=new Px(M,U,R,ie,ye,ze,He),Ce=new ty(M,Ae),fe=new Dx,_e=new kx(ie),ve=new tv(M,U,R,he,ae,d,l),ce=new Gx(M,ae,ye),lt=new ny(D,Ve,ye,he),Ne=new iv(D,ie,Ve),Me=new dv(D,ie,Ve),Ve.programs=se.programs,M.capabilities=ye,M.extensions=ie,M.properties=Ae,M.renderLists=fe,M.shadowMap=ce,M.state=he,M.info=Ve}w();const Y=new Qx(M,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const L=ie.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ie.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(H,O,!1))},this.getSize=function(L){return L.set(H,O)},this.setSize=function(L,G,K=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,O=G,t.width=Math.floor(L*V),t.height=Math.floor(G*V),K===!0&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(H*V,O*V).floor()},this.setDrawingBufferSize=function(L,G,K){H=L,O=G,V=K,t.width=Math.floor(L*K),t.height=Math.floor(G*K),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(_)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,G,K,$){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,G,K,$),he.viewport(_.copy(ee).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,G,K,$){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,G,K,$),he.scissor(A.copy(de).multiplyScalar(V).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(L){he.setScissorTest(Te=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(L=!0,G=!0,K=!0){let $=0;if(L){let W=!1;if(T!==null){const ue=T.texture.format;W=ue===zc||ue===kc||ue===Bc}if(W){const ue=T.texture.type,ge=ue===gi||ue===vr||ue===eo||ue===hs||ue===Uc||ue===Oc,Se=ve.getClearColor(),be=ve.getClearAlpha(),Ue=Se.r,Be=Se.g,Le=Se.b;ge?(m[0]=Ue,m[1]=Be,m[2]=Le,m[3]=be,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Ue,v[1]=Be,v[2]=Le,v[3]=be,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}G&&($|=D.DEPTH_BUFFER_BIT),K&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),_e.dispose(),Ae.dispose(),U.dispose(),R.dispose(),ae.dispose(),ze.dispose(),lt.dispose(),se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xt),Y.removeEventListener("sessionend",Si),Nt.stop()};function q(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=Ve.autoReset,G=ce.enabled,K=ce.autoUpdate,$=ce.needsUpdate,W=ce.type;w(),Ve.autoReset=L,ce.enabled=G,ce.autoUpdate=K,ce.needsUpdate=$,ce.type=W}function le(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const G=L.target;G.removeEventListener("dispose",we),Fe(G)}function Fe(L){_t(L),Ae.remove(L)}function _t(L){const G=Ae.get(L).programs;G!==void 0&&(G.forEach(function(K){se.releaseProgram(K)}),L.isShaderMaterial&&se.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,K,$,W,ue){G===null&&(G=C);const ge=W.isMesh&&W.matrixWorld.determinant()<0,Se=Ip(L,G,K,$,W);he.setMaterial($,ge);let be=K.index,Ue=1;if($.wireframe===!0){if(be=re.getWireframeAttribute(K),be===void 0)return;Ue=2}const Be=K.drawRange,Le=K.attributes.position;let Ze=Be.start*Ue,pt=(Be.start+Be.count)*Ue;ue!==null&&(Ze=Math.max(Ze,ue.start*Ue),pt=Math.min(pt,(ue.start+ue.count)*Ue)),be!==null?(Ze=Math.max(Ze,0),pt=Math.min(pt,be.count)):Le!=null&&(Ze=Math.max(Ze,0),pt=Math.min(pt,Le.count));const mt=pt-Ze;if(mt<0||mt===1/0)return;ze.setup(W,$,Se,K,be);let on,Je=Ne;if(be!==null&&(on=j.get(be),Je=Me,Je.setIndex(on)),W.isMesh)$.wireframe===!0?(he.setLineWidth($.wireframeLinewidth*k()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(W.isLine){let Re=$.linewidth;Re===void 0&&(Re=1),he.setLineWidth(Re*k()),W.isLineSegments?Je.setMode(D.LINES):W.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else W.isPoints?Je.setMode(D.POINTS):W.isSprite&&Je.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Re=W._multiDrawStarts,Ut=W._multiDrawCounts,Qe=W._multiDrawCount,An=be?j.get(be).bytesPerElement:1,Er=Ae.get($).currentProgram.getUniforms();for(let an=0;an<Qe;an++)Er.setValue(D,"_gl_DrawID",an),Je.render(Re[an]/An,Ut[an])}else if(W.isInstancedMesh)Je.renderInstances(Ze,mt,W.count);else if(K.isInstancedBufferGeometry){const Re=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ut=Math.min(K.instanceCount,Re);Je.renderInstances(Ze,mt,Ut)}else Je.render(Ze,mt)};function bt(L,G,K){L.transparent===!0&&L.side===Hn&&L.forceSinglePass===!1?(L.side=Qt,L.needsUpdate=!0,xo(L,G,K),L.side=mi,L.needsUpdate=!0,xo(L,G,K),L.side=Hn):xo(L,G,K)}this.compile=function(L,G,K=null){K===null&&(K=L),f=_e.get(K),f.init(G),S.push(f),K.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),L!==K&&L.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights();const $=new Set;return L.traverse(function(W){const ue=W.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Se=ue[ge];bt(Se,K,W),$.add(Se)}else bt(ue,K,W),$.add(ue)}),S.pop(),f=null,$},this.compileAsync=function(L,G,K=null){const $=this.compile(L,G,K);return new Promise(W=>{function ue(){if($.forEach(function(ge){Ae.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){W(L);return}setTimeout(ue,10)}ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ke=null;function Et(L){Ke&&Ke(L)}function xt(){Nt.stop()}function Si(){Nt.start()}const Nt=new sf;Nt.setAnimationLoop(Et),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(L){Ke=L,Y.setAnimationLoop(L),L===null?Nt.stop():Nt.start()},Y.addEventListener("sessionstart",xt),Y.addEventListener("sessionend",Si),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(G),G=Y.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,G,T),f=_e.get(L,S.length),f.init(G),S.push(f),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(xe),oe=this.localClippingEnabled,J=He.init(this.clippingPlanes,oe),g=fe.get(L,p.length),g.init(),p.push(g),Y.enabled===!0&&Y.isPresenting===!0){const ue=M.xr.getDepthSensingMesh();ue!==null&&ti(ue,G,-1/0,M.sortObjects)}ti(L,G,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(X,ne),N=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,N&&ve.addToRenderList(g,L),this.info.render.frame++,J===!0&&He.beginShadows();const K=f.state.shadowsArray;ce.render(K,L,G),J===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,W=g.transmissive;if(f.setupLights(),G.isArrayCamera){const ue=G.cameras;if(W.length>0)for(let ge=0,Se=ue.length;ge<Se;ge++){const be=ue[ge];Cs($,W,L,be)}N&&ve.render(L);for(let ge=0,Se=ue.length;ge<Se;ge++){const be=ue[ge];$i(g,L,be,be.viewport)}}else W.length>0&&Cs($,W,L,G),N&&ve.render(L),$i(g,L,G);T!==null&&(Ee.updateMultisampleRenderTarget(T),Ee.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(M,L,G),ze.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(f=S[S.length-1],J===!0&&He.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ti(L,G,K,$){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||De.intersectsSprite(L)){$&&Q.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);const ge=ae.update(L),Se=L.material;Se.visible&&g.push(L,ge,Se,K,Q.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||De.intersectsObject(L))){const ge=ae.update(L),Se=L.material;if($&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Q.copy(L.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Q.copy(ge.boundingSphere.center)),Q.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(Se)){const be=ge.groups;for(let Ue=0,Be=be.length;Ue<Be;Ue++){const Le=be[Ue],Ze=Se[Le.materialIndex];Ze&&Ze.visible&&g.push(L,ge,Ze,K,Q.z,Le)}}else Se.visible&&g.push(L,ge,Se,K,Q.z,null)}}const ue=L.children;for(let ge=0,Se=ue.length;ge<Se;ge++)ti(ue[ge],G,K,$)}function $i(L,G,K,$){const W=L.opaque,ue=L.transmissive,ge=L.transparent;f.setupLightsView(K),J===!0&&He.setGlobalState(M.clippingPlanes,K),$&&he.viewport(_.copy($)),W.length>0&&vo(W,G,K),ue.length>0&&vo(ue,G,K),ge.length>0&&vo(ge,G,K),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Cs(L,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new xr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?fi:gi,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ue=f.state.transmissionRenderTarget[$.id],ge=$.viewport||_;ue.setSize(ge.z,ge.w);const Se=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor(F),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),N&&ve.render(K);const be=M.toneMapping;M.toneMapping=Hi;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),J===!0&&He.setGlobalState(M.clippingPlanes,$),vo(L,K,$),Ee.updateMultisampleRenderTarget(ue),Ee.updateRenderTargetMipmap(ue),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,Ze=G.length;Le<Ze;Le++){const pt=G[Le],mt=pt.object,on=pt.geometry,Je=pt.material,Re=pt.group;if(Je.side===Hn&&mt.layers.test($.layers)){const Ut=Je.side;Je.side=Qt,Je.needsUpdate=!0,Eu(mt,K,$,on,Je,Re),Je.side=Ut,Je.needsUpdate=!0,Be=!0}}Be===!0&&(Ee.updateMultisampleRenderTarget(ue),Ee.updateRenderTargetMipmap(ue))}M.setRenderTarget(Se),M.setClearColor(F,B),Ue!==void 0&&($.viewport=Ue),M.toneMapping=be}function vo(L,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ue=L.length;W<ue;W++){const ge=L[W],Se=ge.object,be=ge.geometry,Ue=$===null?ge.material:$,Be=ge.group;Se.layers.test(K.layers)&&Eu(Se,G,K,be,Ue,Be)}}function Eu(L,G,K,$,W,ue){L.onBeforeRender(M,G,K,$,W,ue),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=Qt,W.needsUpdate=!0,M.renderBufferDirect(K,G,$,W,L,ue),W.side=mi,W.needsUpdate=!0,M.renderBufferDirect(K,G,$,W,L,ue),W.side=Hn):M.renderBufferDirect(K,G,$,W,L,ue),L.onAfterRender(M,G,K,$,W,ue)}function xo(L,G,K){G.isScene!==!0&&(G=C);const $=Ae.get(L),W=f.state.lights,ue=f.state.shadowsArray,ge=W.state.version,Se=se.getParameters(L,W.state,ue,G,K),be=se.getProgramCacheKey(Se);let Ue=$.programs;$.environment=L.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(L.isMeshStandardMaterial?R:U).get(L.envMap||$.environment),$.envMapRotation=$.environment!==null&&L.envMap===null?G.environmentRotation:L.envMapRotation,Ue===void 0&&(L.addEventListener("dispose",we),Ue=new Map,$.programs=Ue);let Be=Ue.get(be);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===ge)return Au(L,Se),Be}else Se.uniforms=se.getUniforms(L),L.onBeforeCompile(Se,M),Be=se.acquireProgram(Se,be),Ue.set(be,Be),$.uniforms=Se.uniforms;const Le=$.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Le.clippingPlanes=He.uniform),Au(L,Se),$.needsLights=Np(L),$.lightsStateVersion=ge,$.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function Tu(L){if(L.uniformsList===null){const G=L.currentProgram.getUniforms();L.uniformsList=ra.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function Au(L,G){const K=Ae.get(L);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ip(L,G,K,$,W){G.isScene!==!0&&(G=C),Ee.resetTextureUnits();const ue=G.fog,ge=$.isMeshStandardMaterial?G.environment:null,Se=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Tt,be=($.isMeshStandardMaterial?R:U).get($.envMap||ge),Ue=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Be=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!K.morphAttributes.position,Ze=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color;let mt=Hi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=M.toneMapping);const on=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Je=on!==void 0?on.length:0,Re=Ae.get($),Ut=f.state.lights;if(J===!0&&(oe===!0||L!==x)){const gn=L===x&&$.id===y;He.setState($,L,gn)}let Qe=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ut.state.version||Re.outputColorSpace!==Se||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==be||$.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==He.numPlanes||Re.numIntersection!==He.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==Be||Re.morphTargets!==Le||Re.morphNormals!==Ze||Re.morphColors!==pt||Re.toneMapping!==mt||Re.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Re.__version=$.version);let An=Re.currentProgram;Qe===!0&&(An=xo($,G,W));let Er=!1,an=!1,Ua=!1;const yt=An.getUniforms(),bi=Re.uniforms;if(he.useProgram(An.program)&&(Er=!0,an=!0,Ua=!0),$.id!==y&&(y=$.id,an=!0),Er||x!==L){yt.setValue(D,"projectionMatrix",L.projectionMatrix),yt.setValue(D,"viewMatrix",L.matrixWorldInverse);const gn=yt.map.cameraPosition;gn!==void 0&&gn.setValue(D,me.setFromMatrixPosition(L.matrixWorld)),ye.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(D,"isOrthographic",L.isOrthographicCamera===!0),x!==L&&(x=L,an=!0,Ua=!0)}if(W.isSkinnedMesh){yt.setOptional(D,W,"bindMatrix"),yt.setOptional(D,W,"bindMatrixInverse");const gn=W.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),yt.setValue(D,"boneTexture",gn.boneTexture,Ee))}W.isBatchedMesh&&(yt.setOptional(D,W,"batchingTexture"),yt.setValue(D,"batchingTexture",W._matricesTexture,Ee),yt.setOptional(D,W,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",W._indirectTexture,Ee),yt.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",W._colorsTexture,Ee));const Oa=K.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0)&&Ye.update(W,K,An),(an||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,yt.setValue(D,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bi.envMap.value=be,bi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(bi.envMapIntensity.value=G.environmentIntensity),an&&(yt.setValue(D,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&Dp(bi,Ua),ue&&$.fog===!0&&Ce.refreshFogUniforms(bi,ue),Ce.refreshMaterialUniforms(bi,$,V,O,f.state.transmissionRenderTarget[L.id]),ra.upload(D,Tu(Re),bi,Ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ra.upload(D,Tu(Re),bi,Ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(D,"center",W.center),yt.setValue(D,"modelViewMatrix",W.modelViewMatrix),yt.setValue(D,"normalMatrix",W.normalMatrix),yt.setValue(D,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const gn=$.uniformsGroups;for(let Fa=0,Up=gn.length;Fa<Up;Fa++){const wu=gn[Fa];lt.update(wu,An),lt.bind(wu,An)}}return An}function Dp(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function Np(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,G,K){Ae.get(L.texture).__webglTexture=G,Ae.get(L.depthTexture).__webglTexture=K;const $=Ae.get(L);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,G){const K=Ae.get(L);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,K=0){T=L,P=G,E=K;let $=!0,W=null,ue=!1,ge=!1;if(L){const be=Ae.get(L);be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(D.FRAMEBUFFER,null),$=!1):be.__webglFramebuffer===void 0?Ee.setupRenderTarget(L):be.__hasExternalTextures&&Ee.rebindTextures(L,Ae.get(L.texture).__webglTexture,Ae.get(L.depthTexture).__webglTexture);const Ue=L.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Be=Ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Be[G])?W=Be[G][K]:W=Be[G],ue=!0):L.samples>0&&Ee.useMultisampledRTT(L)===!1?W=Ae.get(L).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[K]:W=Be,_.copy(L.viewport),A.copy(L.scissor),I=L.scissorTest}else _.copy(ee).multiplyScalar(V).floor(),A.copy(de).multiplyScalar(V).floor(),I=Te;if(he.bindFramebuffer(D.FRAMEBUFFER,W)&&$&&he.drawBuffers(L,W),he.viewport(_),he.scissor(A),he.setScissorTest(I),ue){const be=Ae.get(L.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,be.__webglTexture,K)}else if(ge){const be=Ae.get(L.texture),Ue=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,K||0,Ue)}y=-1},this.readRenderTargetPixels=function(L,G,K,$,W,ue,ge){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){he.bindFramebuffer(D.FRAMEBUFFER,Se);try{const be=L.texture,Ue=be.format,Be=be.type;if(!ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-$&&K>=0&&K<=L.height-W&&D.readPixels(G,K,$,W,Oe.convert(Ue),Oe.convert(Be),ue)}finally{const be=T!==null?Ae.get(T).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(L,G,K,$,W,ue,ge){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){he.bindFramebuffer(D.FRAMEBUFFER,Se);try{const be=L.texture,Ue=be.format,Be=be.type;if(!ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=L.width-$&&K>=0&&K<=L.height-W){const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(G,K,$,W,Oe.convert(Ue),Oe.convert(Be),0),D.flush();const Ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await jm(D,Ze,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Le),D.deleteSync(Ze)}return ue}}finally{const be=T!==null?Ae.get(T).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(L,G=null,K=0){L.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,L=arguments[1]);const $=Math.pow(2,-K),W=Math.floor(L.image.width*$),ue=Math.floor(L.image.height*$),ge=G!==null?G.x:0,Se=G!==null?G.y:0;Ee.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,ge,Se,W,ue),he.unbindTexture()},this.copyTextureToTexture=function(L,G,K=null,$=null,W=0){L.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,L=arguments[1],G=arguments[2],W=arguments[3]||0,K=null);let ue,ge,Se,be,Ue,Be;K!==null?(ue=K.max.x-K.min.x,ge=K.max.y-K.min.y,Se=K.min.x,be=K.min.y):(ue=L.image.width,ge=L.image.height,Se=0,be=0),$!==null?(Ue=$.x,Be=$.y):(Ue=0,Be=0);const Le=Oe.convert(G.format),Ze=Oe.convert(G.type);Ee.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const pt=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=L.isCompressedTexture?L.mipmaps[W]:L.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Ue,Be,ue,ge,Le,Ze,Ut.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Ue,Be,Ut.width,Ut.height,Le,Ut.data):D.texSubImage2D(D.TEXTURE_2D,W,Ue,Be,ue,ge,Le,Ze,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),W===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(L,G,K=null,$=null,W=0){L.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,L=arguments[2],G=arguments[3],W=arguments[4]||0);let ue,ge,Se,be,Ue,Be,Le,Ze,pt;const mt=L.isCompressedTexture?L.mipmaps[W]:L.image;K!==null?(ue=K.max.x-K.min.x,ge=K.max.y-K.min.y,Se=K.max.z-K.min.z,be=K.min.x,Ue=K.min.y,Be=K.min.z):(ue=mt.width,ge=mt.height,Se=mt.depth,be=0,Ue=0,Be=0),$!==null?(Le=$.x,Ze=$.y,pt=$.z):(Le=0,Ze=0,pt=0);const on=Oe.convert(G.format),Je=Oe.convert(G.type);let Re;if(G.isData3DTexture)Ee.setTexture3D(G,0),Re=D.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Ee.setTexture2DArray(G,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),An=D.getParameter(D.UNPACK_SKIP_PIXELS),Er=D.getParameter(D.UNPACK_SKIP_ROWS),an=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),L.isDataTexture||L.isData3DTexture?D.texSubImage3D(Re,W,Le,Ze,pt,ue,ge,Se,on,Je,mt.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,W,Le,Ze,pt,ue,ge,Se,on,mt.data):D.texSubImage3D(Re,W,Le,Ze,pt,ue,ge,Se,on,Je,mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,An),D.pixelStorei(D.UNPACK_SKIP_ROWS,Er),D.pixelStorei(D.UNPACK_SKIP_IMAGES,an),W===0&&G.generateMipmaps&&D.generateMipmap(Re),he.unbindTexture()},this.initRenderTarget=function(L){Ae.get(L).__webglFramebuffer===void 0&&Ee.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Ee.setTextureCube(L,0):L.isData3DTexture?Ee.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ee.setTexture2DArray(L,0):Ee.setTexture2D(L,0),he.unbindTexture()},this.resetState=function(){P=0,E=0,T=null,he.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hc?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Ra?"display-p3":"srgb"}}class ry extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ns("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new z;class Yc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rh=new z,Ch=new rt,Ph=new rt,oy=new z,Lh=new Xe,Vo=new z,ul=new Qn,Ih=new Xe,hl=new po;class ay extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),e.ray.intersectsSphere(ul)!==!1&&(Ih.copy(i).invert(),hl.copy(e.ray).applyMatrix4(Ih),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_m?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ch.fromBufferAttribute(i.attributes.skinIndex,e),Ph.fromBufferAttribute(i.attributes.skinWeight,e),Rh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ph.getComponent(r);if(o!==0){const a=Ch.getComponent(r);Lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oy.copy(Rh).applyMatrix4(Lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hf extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qc extends It{constructor(e=null,t=1,n=1,i,r,o,a,l,c=qt,u=qt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new Xe,ly=new Xe;class Kc{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ly;Dh.multiplyMatrices(a,t[r]),Dh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qc(t,e,e,yn,Jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new hf),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class uc extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wr=new Xe,Nh=new Xe,Go=[],Uh=new Mi,cy=new Xe,Us=new Ht,Os=new Qn;class uy extends Ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Uh.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Os.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wr),Nh.multiplyMatrices(n,Wr),Us.matrixWorld=Nh,Us.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){const l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(i*this.count),i,this.count,Fc,Jt));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class df extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new z,ga=new z,Oh=new Xe,Fs=new po,Wo=new Qn,dl=new z,Fh=new z;class $c extends ft{constructor(e=new Tn,t=new df){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ma.fromBufferAttribute(t,i-1),ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Oh.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(Oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let g=m,f=v-1;g<f;g+=c){const p=u.getX(g),S=u.getX(g+1),M=Xo(this,e,Fs,l,p,S);M&&t.push(M)}if(this.isLineLoop){const g=u.getX(v-1),f=u.getX(m),p=Xo(this,e,Fs,l,g,f);p&&t.push(p)}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=m,f=v-1;g<f;g+=c){const p=Xo(this,e,Fs,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Xo(this,e,Fs,l,v-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ma.fromBufferAttribute(o,i),ga.fromBufferAttribute(o,r),t.distanceSqToSegment(ma,ga,dl,Fh)>n)return;dl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(dl);if(!(l<e.near||l>e.far))return{distance:l,point:Fh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Bh=new z,kh=new z;class hy extends $c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Bh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bh.distanceTo(kh);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dy extends $c{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ff extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zh=new Xe,hc=new po,jo=new Qn,Yo=new z;class fy extends ft{constructor(e=new Tn,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;zh.copy(i).invert(),hc.copy(e.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,g=m;v<g;v++){const f=c.getX(v);Yo.fromBufferAttribute(h,f),Hh(Yo,f,l,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,g=m;v<g;v++)Yo.fromBufferAttribute(h,v),Hh(Yo,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hh(s,e,t,n,i,r,o){const a=hc.distanceSqToPoint(s);if(a<t){const l=new z;hc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zc extends Tn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new bn(r,3)),this.setAttribute("normal",new bn(r.slice(),3)),this.setAttribute("uv",new bn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new z,b=new z,P=new z;for(let E=0;E<t.length;E+=3)m(t[E+0],M),m(t[E+1],b),m(t[E+2],P),l(M,b,P,S)}function l(S,M,b,P){const E=P+1,T=[];for(let y=0;y<=E;y++){T[y]=[];const x=S.clone().lerp(b,y/E),_=M.clone().lerp(b,y/E),A=E-y;for(let I=0;I<=A;I++)I===0&&y===E?T[y][I]=x:T[y][I]=x.clone().lerp(_,I/A)}for(let y=0;y<E;y++)for(let x=0;x<2*(E-y)-1;x++){const _=Math.floor(x/2);x%2===0?(d(T[y][_+1]),d(T[y+1][_]),d(T[y][_])):(d(T[y][_+1]),d(T[y+1][_+1]),d(T[y+1][_]))}}function c(S){const M=new z;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(S),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function u(){const S=new z;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const b=f(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;o.push(b,1-P)}v(),h()}function h(){for(let S=0;S<o.length;S+=6){const M=o[S+0],b=o[S+2],P=o[S+4],E=Math.max(M,b,P),T=Math.min(M,b,P);E>.9&&T<.1&&(M<.2&&(o[S+0]+=1),b<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,M){const b=S*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function v(){const S=new z,M=new z,b=new z,P=new z,E=new Pe,T=new Pe,y=new Pe;for(let x=0,_=0;x<r.length;x+=9,_+=6){S.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),b.set(r[x+6],r[x+7],r[x+8]),E.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),y.set(o[_+4],o[_+5]),P.copy(S).add(M).add(b).divideScalar(3);const A=f(P);g(E,_+0,S,A),g(T,_+2,M,A),g(y,_+4,b,A)}}function g(S,M,b,P){P<0&&S.x===1&&(o[M]=S.x-1),b.x===0&&b.z===0&&(o[M]=P/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.vertices,e.indices,e.radius,e.details)}}class Jc extends Zc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jc(e.radius,e.detail)}}class Qc extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kt extends Qc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function py(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function my(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function pf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class go{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gy extends go{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:r=e,a=2*t-n;break;case Uu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:o=e,l=2*n-t;break;case Uu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-t)/(i-t),g=v*v,f=g*v,p=-d*f+2*d*g-d*v,S=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*v+1,M=(-1-m)*f+(1.5+m)*g+.5*v,b=m*f-m*g;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+S*o[c+P]+M*o[l+P]+b*o[h+P];return r}}class _y extends go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class vy extends go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _y(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&py(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,m=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[d+v]||g!==t[m+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=no;class As extends ei{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=to;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class mf extends ei{}mf.prototype.ValueTypeName="color";class ms extends ei{}ms.prototype.ValueTypeName="number";class xy extends go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class gs extends ei{InterpolantFactoryMethodLinear(e){return new xy(this.times,this.values,this.getValueSize(),e)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends ei{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=to;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends ei{}_s.prototype.ValueTypeName="vector";class yy{constructor(e="",t=-1,n=[],i=vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=my(l);l=Vh(l,1,u),c=Vh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,v,g){if(m.length!==0){const f=[],p=[];pf(m,f,p,v),f.length!==0&&g.push(new h(d,f,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)m[d[v].morphTargets[g]]=-1;for(const g in m){const f=[],p=[];for(let S=0;S!==d[v].morphTargets.length;++S){const M=d[v];f.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new ms(".morphTargetInfluence["+g+"]",f,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(_s,m+".position",d,"pos",i),n(gs,m+".quaternion",d,"rot",i),n(_s,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function My(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return mf;case"quaternion":return gs;case"bool":case"boolean":return As;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=My(s.type);if(s.times===void 0){const t=[],n=[];pf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class gf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const by=new gf;class Yi{constructor(e){this.manager=e!==void 0?e:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class Ey extends Error{constructor(e,t){super(e),this.response=t}}class ro extends Yi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:i});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,v=m!==0;let g=0;const f=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:b})=>{if(M)p.close();else{g+=b.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:m});for(let E=0,T=u.length;E<T;E++){const y=u[E];y.onProgress&&y.onProgress(P)}p.enqueue(b),S()}},M=>{p.error(M)})}}});return new Response(f)}else throw new Ey(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{Oi.add(e,c);const u=ai[e];delete ai[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends Yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=io("img");function l(){u(),Oi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ay extends Yi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new qc,a=new ro(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Wn,o.wrapT=c.wrapT!==void 0?c.wrapT:Wn,o.magFilter=c.magFilter!==void 0?c.magFilter:Lt,o.minFilter=c.minFilter!==void 0?c.minFilter:Lt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Xn),c.mipmapCount===1&&(o.minFilter=Lt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class wy extends Yi{constructor(e){super(e)}load(e,t,n,i){const r=new It,o=new Ty(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class eu extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const fl=new Xe,Gh=new z,Wh=new z;class tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends tu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cy extends eu{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xh=new Xe,Bs=new z,pl=new z;class Py extends tu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),pl.copy(n.position),pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pl),n.updateMatrixWorld(),i.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}}class Ly extends eu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Py}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Iy extends tu{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Iy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ks{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dy extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Oi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(e,l),r.manager.itemStart(e)}}class Ny{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jh(){return(typeof performance>"u"?Date:performance).now()}const nu="\\[\\]\\.:\\/",Uy=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Oy="[^"+nu.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",iu),By=/(WCOD+)?/.source.replace("WCOD",Oy),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Hy=new RegExp("^"+Fy+By+ky+zy+"$"),Vy=["material","materials","bones","map"];class Gy{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){const t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Gy;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class et{constructor(e){this.value=e}clone(){return new et(this.value.clone===void 0?this.value:this.value.clone())}}class Yh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);const qh={type:"change"},ml={type:"start"},Kh={type:"end"},Ko=new po,$h=new Ii,Wy=Math.cos(70*Gc.DEG2RAD);class Xy extends Sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",_e),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qh),n.update(),r=i.NONE},this.update=function(){const w=new z,Y=new Kn().setFromUnitVectors(e.up,new z(0,1,0)),q=Y.clone().invert(),Z=new z,le=new Kn,we=new z,Fe=2*Math.PI;return function(bt=null){const Ke=n.object.position;w.copy(Ke).sub(n.target),w.applyQuaternion(Y),a.setFromVector3(w),n.autoRotate&&r===i.NONE&&I(_(bt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Et=n.minAzimuthAngle,xt=n.maxAzimuthAngle;isFinite(Et)&&isFinite(xt)&&(Et<-Math.PI?Et+=Fe:Et>Math.PI&&(Et-=Fe),xt<-Math.PI?xt+=Fe:xt>Math.PI&&(xt-=Fe),Et<=xt?a.theta=Math.max(Et,Math.min(xt,a.theta)):a.theta=a.theta>(Et+xt)/2?Math.max(Et,a.theta):Math.min(xt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Si=!1;if(n.zoomToCursor&&E||n.object.isOrthographicCamera)a.radius=ee(a.radius);else{const Nt=a.radius;a.radius=ee(a.radius*c),Si=Nt!=a.radius}if(w.setFromSpherical(a),w.applyQuaternion(q),Ke.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&E){let Nt=null;if(n.object.isPerspectiveCamera){const ti=w.length();Nt=ee(ti*c);const $i=ti-Nt;n.object.position.addScaledVector(b,$i),n.object.updateMatrixWorld(),Si=!!$i}else if(n.object.isOrthographicCamera){const ti=new z(P.x,P.y,0);ti.unproject(n.object);const $i=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Si=$i!==n.object.zoom;const Cs=new z(P.x,P.y,0);Cs.unproject(n.object),n.object.position.sub(Cs).add(ti),n.object.updateMatrixWorld(),Nt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Nt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Nt).add(n.object.position):(Ko.origin.copy(n.object.position),Ko.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ko.direction))<Wy?e.lookAt(n.target):($h.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ko.intersectPlane($h,n.target))))}else if(n.object.isOrthographicCamera){const Nt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Nt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Si=!0)}return c=1,E=!1,Si||Z.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o||we.distanceToSquared(n.target)>o?(n.dispatchEvent(qh),Z.copy(n.object.position),le.copy(n.object.quaternion),we.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Yh,l=new Yh;let c=1;const u=new z,h=new Pe,d=new Pe,m=new Pe,v=new Pe,g=new Pe,f=new Pe,p=new Pe,S=new Pe,M=new Pe,b=new z,P=new Pe;let E=!1;const T=[],y={};let x=!1;function _(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function A(w){const Y=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*Y)}function I(w){l.theta-=w}function F(w){l.phi-=w}const B=function(){const w=new z;return function(q,Z){w.setFromMatrixColumn(Z,0),w.multiplyScalar(-q),u.add(w)}}(),H=function(){const w=new z;return function(q,Z){n.screenSpacePanning===!0?w.setFromMatrixColumn(Z,1):(w.setFromMatrixColumn(Z,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(q),u.add(w)}}(),O=function(){const w=new z;return function(q,Z){const le=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;w.copy(we).sub(n.target);let Fe=w.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*q*Fe/le.clientHeight,n.object.matrix),H(2*Z*Fe/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(q*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),H(Z*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(w,Y){if(!n.zoomToCursor)return;E=!0;const q=n.domElement.getBoundingClientRect(),Z=w-q.left,le=Y-q.top,we=q.width,Fe=q.height;P.x=Z/we*2-1,P.y=-(le/Fe)*2+1,b.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function de(w){h.set(w.clientX,w.clientY)}function Te(w){ne(w.clientX,w.clientX),p.set(w.clientX,w.clientY)}function De(w){v.set(w.clientX,w.clientY)}function J(w){d.set(w.clientX,w.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;I(2*Math.PI*m.x/Y.clientHeight),F(2*Math.PI*m.y/Y.clientHeight),h.copy(d),n.update()}function oe(w){S.set(w.clientX,w.clientY),M.subVectors(S,p),M.y>0?V(A(M.y)):M.y<0&&X(A(M.y)),p.copy(S),n.update()}function xe(w){g.set(w.clientX,w.clientY),f.subVectors(g,v).multiplyScalar(n.panSpeed),O(f.x,f.y),v.copy(g),n.update()}function me(w){ne(w.clientX,w.clientY),w.deltaY<0?X(A(w.deltaY)):w.deltaY>0&&V(A(w.deltaY)),n.update()}function Q(w){let Y=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),Y=!0;break}Y&&(w.preventDefault(),n.update())}function C(w){if(T.length===1)h.set(w.pageX,w.pageY);else{const Y=ze(w),q=.5*(w.pageX+Y.x),Z=.5*(w.pageY+Y.y);h.set(q,Z)}}function N(w){if(T.length===1)v.set(w.pageX,w.pageY);else{const Y=ze(w),q=.5*(w.pageX+Y.x),Z=.5*(w.pageY+Y.y);v.set(q,Z)}}function k(w){const Y=ze(w),q=w.pageX-Y.x,Z=w.pageY-Y.y,le=Math.sqrt(q*q+Z*Z);p.set(0,le)}function D(w){n.enableZoom&&k(w),n.enablePan&&N(w)}function te(w){n.enableZoom&&k(w),n.enableRotate&&C(w)}function ie(w){if(T.length==1)d.set(w.pageX,w.pageY);else{const q=ze(w),Z=.5*(w.pageX+q.x),le=.5*(w.pageY+q.y);d.set(Z,le)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;I(2*Math.PI*m.x/Y.clientHeight),F(2*Math.PI*m.y/Y.clientHeight),h.copy(d)}function ye(w){if(T.length===1)g.set(w.pageX,w.pageY);else{const Y=ze(w),q=.5*(w.pageX+Y.x),Z=.5*(w.pageY+Y.y);g.set(q,Z)}f.subVectors(g,v).multiplyScalar(n.panSpeed),O(f.x,f.y),v.copy(g)}function he(w){const Y=ze(w),q=w.pageX-Y.x,Z=w.pageY-Y.y,le=Math.sqrt(q*q+Z*Z);S.set(0,le),M.set(0,Math.pow(S.y/p.y,n.zoomSpeed)),V(M.y),p.copy(S);const we=(w.pageX+Y.x)*.5,Fe=(w.pageY+Y.y)*.5;ne(we,Fe)}function Ve(w){n.enableZoom&&he(w),n.enablePan&&ye(w)}function Ae(w){n.enableZoom&&he(w),n.enableRotate&&ie(w)}function Ee(w){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",R)),!Me(w)&&(Ye(w),w.pointerType==="touch"?He(w):j(w)))}function U(w){n.enabled!==!1&&(w.pointerType==="touch"?ce(w):re(w))}function R(w){switch(Ne(w),T.length){case 0:n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(Kh),r=i.NONE;break;case 1:const Y=T[0],q=y[Y];He({pointerId:Y,pageX:q.x,pageY:q.y});break}}function j(w){let Y;switch(w.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Tr.DOLLY:if(n.enableZoom===!1)return;Te(w),r=i.DOLLY;break;case Tr.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;De(w),r=i.PAN}else{if(n.enableRotate===!1)return;de(w),r=i.ROTATE}break;case Tr.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;de(w),r=i.ROTATE}else{if(n.enablePan===!1)return;De(w),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ml)}function re(w){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(w);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(w);break;case i.PAN:if(n.enablePan===!1)return;xe(w);break}}function ae(w){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(w.preventDefault(),n.dispatchEvent(ml),me(se(w)),n.dispatchEvent(Kh))}function se(w){const Y=w.deltaMode,q={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(Y){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return w.ctrlKey&&!x&&(q.deltaY*=10),q}function Ce(w){w.key==="Control"&&(x=!0,n.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(w){w.key==="Control"&&(x=!1,n.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function _e(w){n.enabled===!1||n.enablePan===!1||Q(w)}function He(w){switch(Oe(w),T.length){case 1:switch(n.touches.ONE){case Ar.ROTATE:if(n.enableRotate===!1)return;C(w),r=i.TOUCH_ROTATE;break;case Ar.PAN:if(n.enablePan===!1)return;N(w),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ar.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(w),r=i.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(w),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ml)}function ce(w){switch(Oe(w),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ie(w),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ye(w),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(w),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(w),n.update();break;default:r=i.NONE}}function ve(w){n.enabled!==!1&&w.preventDefault()}function Ye(w){T.push(w.pointerId)}function Ne(w){delete y[w.pointerId];for(let Y=0;Y<T.length;Y++)if(T[Y]==w.pointerId){T.splice(Y,1);return}}function Me(w){for(let Y=0;Y<T.length;Y++)if(T[Y]==w.pointerId)return!0;return!1}function Oe(w){let Y=y[w.pointerId];Y===void 0&&(Y=new Pe,y[w.pointerId]=Y),Y.set(w.pageX,w.pageY)}function ze(w){const Y=w.pointerId===T[0]?T[1]:T[0];return y[Y]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}class jy extends Ay{constructor(e){super(e),this.type=fi}parse(e){const o=function(y,x){switch(y){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},u=`
`,h=function(y,x,_){x=x||1024;let I=y.pos,F=-1,B=0,H="",O=String.fromCharCode.apply(null,new Uint16Array(y.subarray(I,I+128)));for(;0>(F=O.indexOf(u))&&B<x&&I<y.byteLength;)H+=O,B+=O.length,I+=128,O+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(I,I+128)));return-1<F?(y.pos+=B+F+1,H+O.slice(0,F)):!1},d=function(y){const x=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,O;for((y.pos>=y.byteLength||!(H=h(y)))&&o(1,"no header found"),(O=H.match(x))||o(3,"bad initial token"),B.valid|=1,B.programtype=O[1],B.string+=H+`
`;H=h(y),H!==!1;){if(B.string+=H+`
`,H.charAt(0)==="#"){B.comments+=H+`
`;continue}if((O=H.match(_))&&(B.gamma=parseFloat(O[1])),(O=H.match(A))&&(B.exposure=parseFloat(O[1])),(O=H.match(I))&&(B.valid|=2,B.format=O[1]),(O=H.match(F))&&(B.valid|=4,B.height=parseInt(O[1],10),B.width=parseInt(O[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||o(3,"missing format specifier"),B.valid&4||o(3,"missing image size specifier"),B},m=function(y,x,_){const A=x;if(A<8||A>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);A!==(y[2]<<8|y[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*x*_);I.length||o(4,"unable to allocate buffer space");let F=0,B=0;const H=4*A,O=new Uint8Array(4),V=new Uint8Array(H);let X=_;for(;X>0&&B<y.byteLength;){B+4>y.byteLength&&o(1),O[0]=y[B++],O[1]=y[B++],O[2]=y[B++],O[3]=y[B++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=A)&&o(3,"bad rgbe scanline format");let ne=0,ee;for(;ne<H&&B<y.byteLength;){ee=y[B++];const Te=ee>128;if(Te&&(ee-=128),(ee===0||ne+ee>H)&&o(3,"bad scanline data"),Te){const De=y[B++];for(let J=0;J<ee;J++)V[ne++]=De}else V.set(y.subarray(B,B+ee),ne),ne+=ee,B+=ee}const de=A;for(let Te=0;Te<de;Te++){let De=0;I[F]=V[Te+De],De+=A,I[F+1]=V[Te+De],De+=A,I[F+2]=V[Te+De],De+=A,I[F+3]=V[Te+De],F+=4}X--}return I},v=function(y,x,_,A){const I=y[x+3],F=Math.pow(2,I-128)/255;_[A+0]=y[x+0]*F,_[A+1]=y[x+1]*F,_[A+2]=y[x+2]*F,_[A+3]=1},g=function(y,x,_,A){const I=y[x+3],F=Math.pow(2,I-128)/255;_[A+0]=Ro.toHalfFloat(Math.min(y[x+0]*F,65504)),_[A+1]=Ro.toHalfFloat(Math.min(y[x+1]*F,65504)),_[A+2]=Ro.toHalfFloat(Math.min(y[x+2]*F,65504)),_[A+3]=Ro.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const p=d(f),S=p.width,M=p.height,b=m(f.subarray(f.pos),S,M);let P,E,T;switch(this.type){case Jt:T=b.length/4;const y=new Float32Array(T*4);for(let _=0;_<T;_++)v(b,_*4,y,_*4);P=y,E=Jt;break;case fi:T=b.length/4;const x=new Uint16Array(T*4);for(let _=0;_<T;_++)g(b,_*4,x,_*4);P=x,E=fi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:M,data:P,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Jt:case fi:o.colorSpace=Tt,o.minFilter=Lt,o.magFilter=Lt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}function Yy(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let S=0,M=a.length;S<M;S++){const b=a[S],P=s.attributes[b];l[b]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const E=s.morphAttributes[b];E&&(c[b]||(c[b]=[]),E.forEach((T,y)=>{const x=new T.array.constructor(T.count*T.itemSize);c[b][y]=new T.constructor(x,T.itemSize,T.normalized)}))}const m=e*.5,v=Math.log10(1/e),g=Math.pow(10,v),f=m*g;for(let S=0;S<r;S++){const M=n?n.getX(S):S;let b="";for(let P=0,E=a.length;P<E;P++){const T=a[P],y=s.getAttribute(T),x=y.itemSize;for(let _=0;_<x;_++)b+=`${~~(y[h[_]](M)*g+f)},`}if(b in t)u.push(t[b]);else{for(let P=0,E=a.length;P<E;P++){const T=a[P],y=s.getAttribute(T),x=s.morphAttributes[T],_=y.itemSize,A=l[T],I=c[T];for(let F=0;F<_;F++){const B=h[F],H=d[F];if(A[H](o,y[B](M)),x)for(let O=0,V=x.length;O<V;O++)I[O][H](o,x[O][B](M))}}t[b]=o,u.push(o),o++}}const p=s.clone();for(const S in s.attributes){const M=l[S];if(p.setAttribute(S,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),S in c)for(let b=0;b<c[S].length;b++){const P=c[S][b];p.morphAttributes[S][b]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(u),p}function Zh(s,e){if(e===xm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ac||e===Xd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ac)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class qy extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ks.extractUrlBase(e);o=Ks.resolveURL(c,this.path)}else o=Ks.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ro(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vf){try{o[je.KHR_BINARY_GLTF]=new pM(e)}catch(h){i&&i(h);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new Zy;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new mM(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new gM;break;case je.KHR_MESH_QUANTIZATION:o[h]=new _M;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ky(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $y{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _f(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ly(u),c.distance=h;break;case"spot":c=new Cy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Zy{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return hr}extendParams(e,t,n){const i=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(i)}}class Jy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],Tt),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class oM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],Tt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dM{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}}class fM{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(const v of h){const g=new Xe,f=new z,p=new Kn,S=new z(1,1,1),M=new uy(v.geometry,v.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),M.setMatrixAt(b,g.compose(f,p,S));for(const b in l)if(b==="_COLOR_0"){const P=l[b];M.instanceColor=new uc(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&v.geometry.setAttribute(b,l[b]);ft.prototype.copy.call(M,v),this.parser.assignFinalMaterial(M),m.push(M)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const vf="glTF",ks=12,Jh={JSON:1313821514,BIN:5130562};class pM{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ks,r=new DataView(e,ks);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Jh.JSON){const c=new Uint8Array(e,ks+o,a);this.content=n.decode(c)}else if(l===Jh.BIN){const c=ks+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=dc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=dc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],m=rs[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(const v in m.attributes){const g=m.attributes[v],f=l[v];f!==void 0&&(g.normalized=f)}h(m)},a,c,Tt,d)})})}}class gM{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _M{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class xf extends go{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,v=e*c,g=v-c,f=-2*m+3*d,p=m-d,S=1-f,M=p-d+h;for(let b=0;b!==a;b++){const P=o[g+b+a],E=o[g+b+l]*u,T=o[v+b+a],y=o[v+b]*u;r[b]=S*P+M*E+f*T+p*y}return r}}const vM=new Kn;class xM extends xf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vM.fromArray(r).normalize().toArray(r),r}}const xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qh={9728:qt,9729:Lt,9984:Ud,9985:Jo,9986:Gs,9987:Xn},ed={33071:Wn,33648:ua,10497:us},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:no,STEP:to},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),s.DefaultMaterial}function ir(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function bM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vl(t.attributes):e=s.indices+":"+vl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+vl(s.targets[n]);return e}function vl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const AM=new Xe;class wM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new wy(this.options.manager):this.textureLoader=new Dy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ir(r,a,i),ci(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ks.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=gl[i.type],a=rs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ft(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=gl[i.type],c=rs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,f;if(m&&m!==h){const p=Math.floor(d/m),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(S);M||(g=new c(a,p*m,i.count*m/u),M=new sy(g,m/u),t.cache.add(S,M)),f=new Yc(M,l,d%m/u,v)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),f=new Ft(g,l,v);if(i.sparse!==void 0){const p=gl.SCALAR,S=rs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,P=new S(o[1],M,i.sparse.count*p),E=new c(o[2],b,i.sparse.count*l);a!==null&&(f=new Ft(f.array.slice(),f.itemSize,f.normalized));for(let T=0,y=P.length;T<y;T++){const x=P[T];if(f.setX(x,E[T*l]),l>=2&&f.setY(x,E[T*l+1]),l>=3&&f.setZ(x,E[T*l+2]),l>=4&&f.setW(x,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Qh[d.magFilter]||Lt,u.minFilter=Qh[d.minFilter]||Xn,u.wrapS=ed[d.wrapS]||us,u.wrapT=ed[d.wrapT]||us,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const f=new It(g);f.needsUpdate=!0,d(f)}),t.load(Ks.resolveURL(h,r.path),v,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ci(h,o),h.userData.mimeType=o.mimeType||TM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ff,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new df,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Hn);const u=r.alphaMode||_l.OPAQUE;if(u===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==hr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hr){const h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],Tt)}return r.emissiveTexture!==void 0&&o!==hr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&ir(i,h,r),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return td(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=EM(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=td(new Tn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?MM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,v=u.length;m<v;m++){const g=u[m],f=o[m];let p;const S=c[m];if(f.mode===xn.TRIANGLES||f.mode===xn.TRIANGLE_STRIP||f.mode===xn.TRIANGLE_FAN||f.mode===void 0)p=r.isSkinnedMesh===!0?new ay(g,S):new Ht(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===xn.TRIANGLE_STRIP?p.geometry=Zh(p.geometry,Xd):f.mode===xn.TRIANGLE_FAN&&(p.geometry=Zh(p.geometry,ac));else if(f.mode===xn.LINES)p=new hy(g,S);else if(f.mode===xn.LINE_STRIP)p=new $c(g,S);else if(f.mode===xn.LINE_LOOP)p=new dy(g,S);else if(f.mode===xn.POINTS)p=new fy(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&bM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),f.extensions&&ir(i,p,f),t.assignFinalMaterial(p),h.push(p)}for(let m=0,v=h.length;m<v;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&ir(i,h[0],r),h[0];const d=new dr;r.extensions&&ir(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,v=h.length;m<v;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Gc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const m=i.channels[h],v=i.samplers[m.sampler],g=m.target,f=g.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,S=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(v),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],v=h[2],g=h[3],f=h[4],p=[];for(let S=0,M=d.length;S<M;S++){const b=d[S],P=m[S],E=v[S],T=g[S],y=f[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const x=n._createAnimationTracks(b,P,E,T,y);if(x)for(let _=0;_<x.length;_++)p.push(x[_])}return new yy(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,AM)});for(let m=0,v=h.length;m<v;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new hf:c.length>1?u=new dr:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ci(u,r),r.extensions&&ir(n,u,r),r.matrix!==void 0){const h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new dr;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&ir(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,m]of i.associations)(d instanceof Fn||d instanceof It)&&h.set(d,m);return u.traverse(d=>{const m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Pi[r.path]===Pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Pi[r.path]){case Pi.weights:c=ms;break;case Pi.rotation:c=gs;break;case Pi.position:case Pi.scale:c=_s;break;default:switch(n.itemSize){case 1:c=ms;break;case 2:case 3:default:c=_s;break}break}const u=i.interpolation!==void 0?yM[i.interpolation]:no,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){const v=new c(l[d]+"."+Pi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof gs?xM:xf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RM(s,e,t){const n=e.attributes,i=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=fc(rs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,v=d.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),d.normalized){const g=fc(rs[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function td(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=dc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==Tt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),ci(s,e),RM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SM(s,e.targets,t):s})}const xl=new WeakMap;class CM extends Yi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ro(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ot,n).catch(n)}decodeDracoFile(e,t,n,i,r=Tt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(xl.has(e)){const l=xl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),xl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Tn;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Ft(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ot)return;const n=new Ie;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ro(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=PM.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function PM(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const m=t(h,d,new Int8Array(l),c),v=m.attributes.map(g=>g.array.buffer);m.index&&v.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},v)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,m;const v=a.GetEncodedGeometryType(l);if(v===o.TRIANGULAR_MESH)d=new o.Mesh,m=a.DecodeArrayToMesh(l,l.byteLength,d);else if(v===o.POINT_CLOUD)d=new o.PointCloud,m=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const g={index:null,attributes:[]};for(const f in u){const p=self[h[f]];let S,M;if(c.useUniqueIDs)M=u[f],S=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,o[u[f]]),M===-1)continue;S=a.GetAttribute(d,M)}const b=i(o,a,d,f,p,S);f==="color"&&(b.vertexColorSpace=c.vertexColorSpace),g.attributes.push(b)}return v===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const m=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:m,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),v=l.num_points()*d,g=v*u.BYTES_PER_ELEMENT,f=r(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,f,g,p);const S=new u(o.HEAPF32.buffer,p,v).slice();return o._free(p),{name:c,array:S,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function La(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function $o(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yf={exports:{}};(function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(c,u){if(!i[c]){if(!n[c]){var h=typeof $o=="function"&&$o;if(!u&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=i[c]={exports:{}},n[c][0].call(u.exports,function(d){var m=n[c][1][d];return o(m||d)},u,u.exports,t,n,i,r)}return i[c].exports}for(var a=typeof $o=="function"&&$o,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){var v=t("crypto");function g(E,T){T=S(E,T);var y;return(y=T.algorithm!=="passthrough"?v.createHash(T.algorithm):new P).write===void 0&&(y.write=y.update,y.end=y.update),b(T,y).dispatch(E),y.update||y.end(""),y.digest?y.digest(T.encoding==="buffer"?void 0:T.encoding):(E=y.read(),T.encoding!=="buffer"?E.toString(T.encoding):E)}(i=n.exports=g).sha1=function(E){return g(E)},i.keys=function(E){return g(E,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(E){return g(E,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(E){return g(E,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=v.getHashes?v.getHashes().slice():["sha1","md5"],p=(f.push("passthrough"),["buffer","hex","binary","base64"]);function S(E,T){var y={};if(y.algorithm=(T=T||{}).algorithm||"sha1",y.encoding=T.encoding||"hex",y.excludeValues=!!T.excludeValues,y.algorithm=y.algorithm.toLowerCase(),y.encoding=y.encoding.toLowerCase(),y.ignoreUnknown=T.ignoreUnknown===!0,y.respectType=T.respectType!==!1,y.respectFunctionNames=T.respectFunctionNames!==!1,y.respectFunctionProperties=T.respectFunctionProperties!==!1,y.unorderedArrays=T.unorderedArrays===!0,y.unorderedSets=T.unorderedSets!==!1,y.unorderedObjects=T.unorderedObjects!==!1,y.replacer=T.replacer||void 0,y.excludeKeys=T.excludeKeys||void 0,E===void 0)throw new Error("Object argument required.");for(var x=0;x<f.length;++x)f[x].toLowerCase()===y.algorithm.toLowerCase()&&(y.algorithm=f[x]);if(f.indexOf(y.algorithm)===-1)throw new Error('Algorithm "'+y.algorithm+'"  not supported. supported values: '+f.join(", "));if(p.indexOf(y.encoding)===-1&&y.algorithm!=="passthrough")throw new Error('Encoding "'+y.encoding+'"  not supported. supported values: '+p.join(", "));return y}function M(E){if(typeof E=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(E))!=null}function b(E,T,y){y=y||[];function x(_){return T.update?T.update(_,"utf8"):T.write(_,"utf8")}return{dispatch:function(_){return this["_"+((_=E.replacer?E.replacer(_):_)===null?"null":typeof _)](_)},_object:function(_){var A,I=Object.prototype.toString.call(_),F=/\[object (.*)\]/i.exec(I);if(F=(F=F?F[1]:"unknown:["+I+"]").toLowerCase(),0<=(I=y.indexOf(_)))return this.dispatch("[CIRCULAR:"+I+"]");if(y.push(_),a!==void 0&&a.isBuffer&&a.isBuffer(_))return x("buffer:"),x(_);if(F==="object"||F==="function"||F==="asyncfunction")return I=Object.keys(_),E.unorderedObjects&&(I=I.sort()),E.respectType===!1||M(_)||I.splice(0,0,"prototype","__proto__","constructor"),E.excludeKeys&&(I=I.filter(function(B){return!E.excludeKeys(B)})),x("object:"+I.length+":"),A=this,I.forEach(function(B){A.dispatch(B),x(":"),E.excludeValues||A.dispatch(_[B]),x(",")});if(!this["_"+F]){if(E.ignoreUnknown)return x("["+F+"]");throw new Error('Unknown object type "'+F+'"')}this["_"+F](_)},_array:function(_,B){B=B!==void 0?B:E.unorderedArrays!==!1;var I=this;if(x("array:"+_.length+":"),!B||_.length<=1)return _.forEach(function(H){return I.dispatch(H)});var F=[],B=_.map(function(H){var O=new P,V=y.slice();return b(E,O,V).dispatch(H),F=F.concat(V.slice(y.length)),O.read().toString()});return y=y.concat(F),B.sort(),this._array(B,!1)},_date:function(_){return x("date:"+_.toJSON())},_symbol:function(_){return x("symbol:"+_.toString())},_error:function(_){return x("error:"+_.toString())},_boolean:function(_){return x("bool:"+_.toString())},_string:function(_){x("string:"+_.length+":"),x(_.toString())},_function:function(_){x("fn:"),M(_)?this.dispatch("[native]"):this.dispatch(_.toString()),E.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(_.name)),E.respectFunctionProperties&&this._object(_)},_number:function(_){return x("number:"+_.toString())},_xml:function(_){return x("xml:"+_.toString())},_null:function(){return x("Null")},_undefined:function(){return x("Undefined")},_regexp:function(_){return x("regex:"+_.toString())},_uint8array:function(_){return x("uint8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint8clampedarray:function(_){return x("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(_))},_int8array:function(_){return x("int8array:"),this.dispatch(Array.prototype.slice.call(_))},_uint16array:function(_){return x("uint16array:"),this.dispatch(Array.prototype.slice.call(_))},_int16array:function(_){return x("int16array:"),this.dispatch(Array.prototype.slice.call(_))},_uint32array:function(_){return x("uint32array:"),this.dispatch(Array.prototype.slice.call(_))},_int32array:function(_){return x("int32array:"),this.dispatch(Array.prototype.slice.call(_))},_float32array:function(_){return x("float32array:"),this.dispatch(Array.prototype.slice.call(_))},_float64array:function(_){return x("float64array:"),this.dispatch(Array.prototype.slice.call(_))},_arraybuffer:function(_){return x("arraybuffer:"),this.dispatch(new Uint8Array(_))},_url:function(_){return x("url:"+_.toString())},_map:function(_){return x("map:"),_=Array.from(_),this._array(_,E.unorderedSets!==!1)},_set:function(_){return x("set:"),_=Array.from(_),this._array(_,E.unorderedSets!==!1)},_file:function(_){return x("file:"),this.dispatch([_.name,_.size,_.type,_.lastModfied])},_blob:function(){if(E.ignoreUnknown)return x("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return x("domwindow")},_bigint:function(_){return x("bigint:"+_.toString())},_process:function(){return x("process")},_timer:function(){return x("timer")},_pipe:function(){return x("pipe")},_tcp:function(){return x("tcp")},_udp:function(){return x("udp")},_tty:function(){return x("tty")},_statwatcher:function(){return x("statwatcher")},_securecontext:function(){return x("securecontext")},_connection:function(){return x("connection")},_zlib:function(){return x("zlib")},_context:function(){return x("context")},_nodescript:function(){return x("nodescript")},_httpparser:function(){return x("httpparser")},_dataview:function(){return x("dataview")},_signal:function(){return x("signal")},_fsevent:function(){return x("fsevent")},_tlswrap:function(){return x("tlswrap")}}}function P(){return{buf:"",write:function(E){this.buf+=E},end:function(E){this.buf+=E},read:function(){return this.buf}}}i.writeToStream=function(E,T,y){return y===void 0&&(y=T,T={}),b(T=S(E,T),y).dispatch(E)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){(function(v){var g=typeof Uint8Array<"u"?Uint8Array:Array,f=43,p=47,S=48,M=97,b=65,P=45,E=95;function T(y){return y=y.charCodeAt(0),y===f||y===P?62:y===p||y===E?63:y<S?-1:y<S+10?y-S+26+26:y<b+26?y-b:y<M+26?y-M+26:void 0}v.toByteArray=function(y){var x,_;if(0<y.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=y.length,A=y.charAt(A-2)==="="?2:y.charAt(A-1)==="="?1:0,I=new g(3*y.length/4-A),F=0<A?y.length-4:y.length,B=0;function H(O){I[B++]=O}for(x=0;x<F;x+=4,0)H((16711680&(_=T(y.charAt(x))<<18|T(y.charAt(x+1))<<12|T(y.charAt(x+2))<<6|T(y.charAt(x+3))))>>16),H((65280&_)>>8),H(255&_);return A==2?H(255&(_=T(y.charAt(x))<<2|T(y.charAt(x+1))>>4)):A==1&&(H((_=T(y.charAt(x))<<10|T(y.charAt(x+1))<<4|T(y.charAt(x+2))>>2)>>8&255),H(255&_)),I},v.fromByteArray=function(y){var x,_,A,I,F=y.length%3,B="";function H(O){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(O)}for(x=0,A=y.length-F;x<A;x+=3)_=(y[x]<<16)+(y[x+1]<<8)+y[x+2],B+=H((I=_)>>18&63)+H(I>>12&63)+H(I>>6&63)+H(63&I);switch(F){case 1:B=(B+=H((_=y[y.length-1])>>2))+H(_<<4&63)+"==";break;case 2:B=(B=(B+=H((_=(y[y.length-2]<<8)+y[y.length-1])>>10))+H(_>>4&63))+H(_<<2&63)+"="}return B}})(i===void 0?this.base64js={}:i)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,i){(function(r,o,f,l,c,u,h,d,m){var v=t("base64-js"),g=t("ieee754");function f(C,N,k){if(!(this instanceof f))return new f(C,N,k);var D,te,ie,ye,he=typeof C;if(N==="base64"&&he=="string")for(C=(ye=C).trim?ye.trim():ye.replace(/^\s+|\s+$/g,"");C.length%4!=0;)C+="=";if(he=="number")D=X(C);else if(he=="string")D=f.byteLength(C,N);else{if(he!="object")throw new Error("First argument needs to be a number, array or string.");D=X(C.length)}if(f._useTypedArrays?te=f._augment(new Uint8Array(D)):((te=this).length=D,te._isBuffer=!0),f._useTypedArrays&&typeof C.byteLength=="number")te._set(C);else if(ne(ye=C)||f.isBuffer(ye)||ye&&typeof ye=="object"&&typeof ye.length=="number")for(ie=0;ie<D;ie++)f.isBuffer(C)?te[ie]=C.readUInt8(ie):te[ie]=C[ie];else if(he=="string")te.write(C,0,N);else if(he=="number"&&!f._useTypedArrays&&!k)for(ie=0;ie<D;ie++)te[ie]=0;return te}function p(C,N,k,D){return f._charsWritten=De(function(te){for(var ie=[],ye=0;ye<te.length;ye++)ie.push(255&te.charCodeAt(ye));return ie}(N),C,k,D)}function S(C,N,k,D){return f._charsWritten=De(function(te){for(var ie,ye,he=[],Ve=0;Ve<te.length;Ve++)ye=te.charCodeAt(Ve),ie=ye>>8,ye=ye%256,he.push(ye),he.push(ie);return he}(N),C,k,D)}function M(C,N,k){var D="";k=Math.min(C.length,k);for(var te=N;te<k;te++)D+=String.fromCharCode(C[te]);return D}function b(C,N,k,ie){ie||(Q(typeof k=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+1<C.length,"Trying to read beyond buffer length"));var te,ie=C.length;if(!(ie<=N))return k?(te=C[N],N+1<ie&&(te|=C[N+1]<<8)):(te=C[N]<<8,N+1<ie&&(te|=C[N+1])),te}function P(C,N,k,ie){ie||(Q(typeof k=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+3<C.length,"Trying to read beyond buffer length"));var te,ie=C.length;if(!(ie<=N))return k?(N+2<ie&&(te=C[N+2]<<16),N+1<ie&&(te|=C[N+1]<<8),te|=C[N],N+3<ie&&(te+=C[N+3]<<24>>>0)):(N+1<ie&&(te=C[N+1]<<16),N+2<ie&&(te|=C[N+2]<<8),N+3<ie&&(te|=C[N+3]),te+=C[N]<<24>>>0),te}function E(C,N,k,D){if(D||(Q(typeof k=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+1<C.length,"Trying to read beyond buffer length")),!(C.length<=N))return D=b(C,N,k,!0),32768&D?-1*(65535-D+1):D}function T(C,N,k,D){if(D||(Q(typeof k=="boolean","missing or invalid endian"),Q(N!=null,"missing offset"),Q(N+3<C.length,"Trying to read beyond buffer length")),!(C.length<=N))return D=P(C,N,k,!0),2147483648&D?-1*(4294967295-D+1):D}function y(C,N,k,D){return D||(Q(typeof k=="boolean","missing or invalid endian"),Q(N+3<C.length,"Trying to read beyond buffer length")),g.read(C,N,k,23,4)}function x(C,N,k,D){return D||(Q(typeof k=="boolean","missing or invalid endian"),Q(N+7<C.length,"Trying to read beyond buffer length")),g.read(C,N,k,52,8)}function _(C,N,k,D,te){if(te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+1<C.length,"trying to write beyond buffer length"),oe(N,65535)),te=C.length,!(te<=k))for(var ie=0,ye=Math.min(te-k,2);ie<ye;ie++)C[k+ie]=(N&255<<8*(D?ie:1-ie))>>>8*(D?ie:1-ie)}function A(C,N,k,D,te){if(te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<C.length,"trying to write beyond buffer length"),oe(N,4294967295)),te=C.length,!(te<=k))for(var ie=0,ye=Math.min(te-k,4);ie<ye;ie++)C[k+ie]=N>>>8*(D?ie:3-ie)&255}function I(C,N,k,D,te){te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+1<C.length,"Trying to write beyond buffer length"),xe(N,32767,-32768)),C.length<=k||_(C,0<=N?N:65535+N+1,k,D,te)}function F(C,N,k,D,te){te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<C.length,"Trying to write beyond buffer length"),xe(N,2147483647,-2147483648)),C.length<=k||A(C,0<=N?N:4294967295+N+1,k,D,te)}function B(C,N,k,D,te){te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<C.length,"Trying to write beyond buffer length"),me(N,34028234663852886e22,-34028234663852886e22)),C.length<=k||g.write(C,N,k,D,23,4)}function H(C,N,k,D,te){te||(Q(N!=null,"missing value"),Q(typeof D=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+7<C.length,"Trying to write beyond buffer length"),me(N,17976931348623157e292,-17976931348623157e292)),C.length<=k||g.write(C,N,k,D,52,8)}i.Buffer=f,i.SlowBuffer=f,i.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var C=new ArrayBuffer(0),N=new Uint8Array(C);return N.foo=function(){return 42},N.foo()===42&&typeof N.subarray=="function"}catch{return!1}}(),f.isEncoding=function(C){switch(String(C).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.isBuffer=function(C){return!(C==null||!C._isBuffer)},f.byteLength=function(C,N){var k;switch(C+="",N||"utf8"){case"hex":k=C.length/2;break;case"utf8":case"utf-8":k=de(C).length;break;case"ascii":case"binary":case"raw":k=C.length;break;case"base64":k=Te(C).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":k=2*C.length;break;default:throw new Error("Unknown encoding")}return k},f.concat=function(C,N){if(Q(ne(C),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),C.length===0)return new f(0);if(C.length===1)return C[0];if(typeof N!="number")for(te=N=0;te<C.length;te++)N+=C[te].length;for(var k=new f(N),D=0,te=0;te<C.length;te++){var ie=C[te];ie.copy(k,D),D+=ie.length}return k},f.prototype.write=function(C,N,k,D){isFinite(N)?isFinite(k)||(D=k,k=void 0):(Ve=D,D=N,N=k,k=Ve),N=Number(N)||0;var te,ie,ye,he,Ve=this.length-N;switch((!k||Ve<(k=Number(k)))&&(k=Ve),D=String(D||"utf8").toLowerCase()){case"hex":te=function(Ae,Ee,U,R){U=Number(U)||0;var j=Ae.length-U;(!R||j<(R=Number(R)))&&(R=j),Q((j=Ee.length)%2==0,"Invalid hex string"),j/2<R&&(R=j/2);for(var re=0;re<R;re++){var ae=parseInt(Ee.substr(2*re,2),16);Q(!isNaN(ae),"Invalid hex string"),Ae[U+re]=ae}return f._charsWritten=2*re,re}(this,C,N,k);break;case"utf8":case"utf-8":ie=this,ye=N,he=k,te=f._charsWritten=De(de(C),ie,ye,he);break;case"ascii":case"binary":te=p(this,C,N,k);break;case"base64":ie=this,ye=N,he=k,te=f._charsWritten=De(Te(C),ie,ye,he);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":te=S(this,C,N,k);break;default:throw new Error("Unknown encoding")}return te},f.prototype.toString=function(C,N,k){var D,te,ie,ye,he=this;if(C=String(C||"utf8").toLowerCase(),N=Number(N)||0,(k=k!==void 0?Number(k):he.length)===N)return"";switch(C){case"hex":D=function(Ve,Ae,Ee){var U=Ve.length;(!Ae||Ae<0)&&(Ae=0),(!Ee||Ee<0||U<Ee)&&(Ee=U);for(var R="",j=Ae;j<Ee;j++)R+=ee(Ve[j]);return R}(he,N,k);break;case"utf8":case"utf-8":D=function(Ve,Ae,Ee){var U="",R="";Ee=Math.min(Ve.length,Ee);for(var j=Ae;j<Ee;j++)Ve[j]<=127?(U+=J(R)+String.fromCharCode(Ve[j]),R=""):R+="%"+Ve[j].toString(16);return U+J(R)}(he,N,k);break;case"ascii":case"binary":D=M(he,N,k);break;case"base64":te=he,ye=k,D=(ie=N)===0&&ye===te.length?v.fromByteArray(te):v.fromByteArray(te.slice(ie,ye));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":D=function(Ve,Ae,Ee){for(var U=Ve.slice(Ae,Ee),R="",j=0;j<U.length;j+=2)R+=String.fromCharCode(U[j]+256*U[j+1]);return R}(he,N,k);break;default:throw new Error("Unknown encoding")}return D},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(C,N,k,D){if(N=N||0,(D=D||D===0?D:this.length)!==(k=k||0)&&C.length!==0&&this.length!==0){Q(k<=D,"sourceEnd < sourceStart"),Q(0<=N&&N<C.length,"targetStart out of bounds"),Q(0<=k&&k<this.length,"sourceStart out of bounds"),Q(0<=D&&D<=this.length,"sourceEnd out of bounds"),D>this.length&&(D=this.length);var te=(D=C.length-N<D-k?C.length-N+k:D)-k;if(te<100||!f._useTypedArrays)for(var ie=0;ie<te;ie++)C[ie+N]=this[ie+k];else C._set(this.subarray(k,k+te),N)}},f.prototype.slice=function(C,N){var k=this.length;if(C=V(C,k,0),N=V(N,k,k),f._useTypedArrays)return f._augment(this.subarray(C,N));for(var D=N-C,te=new f(D,void 0,!0),ie=0;ie<D;ie++)te[ie]=this[ie+C];return te},f.prototype.get=function(C){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(C)},f.prototype.set=function(C,N){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(C,N)},f.prototype.readUInt8=function(C,N){if(N||(Q(C!=null,"missing offset"),Q(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return this[C]},f.prototype.readUInt16LE=function(C,N){return b(this,C,!0,N)},f.prototype.readUInt16BE=function(C,N){return b(this,C,!1,N)},f.prototype.readUInt32LE=function(C,N){return P(this,C,!0,N)},f.prototype.readUInt32BE=function(C,N){return P(this,C,!1,N)},f.prototype.readInt8=function(C,N){if(N||(Q(C!=null,"missing offset"),Q(C<this.length,"Trying to read beyond buffer length")),!(C>=this.length))return 128&this[C]?-1*(255-this[C]+1):this[C]},f.prototype.readInt16LE=function(C,N){return E(this,C,!0,N)},f.prototype.readInt16BE=function(C,N){return E(this,C,!1,N)},f.prototype.readInt32LE=function(C,N){return T(this,C,!0,N)},f.prototype.readInt32BE=function(C,N){return T(this,C,!1,N)},f.prototype.readFloatLE=function(C,N){return y(this,C,!0,N)},f.prototype.readFloatBE=function(C,N){return y(this,C,!1,N)},f.prototype.readDoubleLE=function(C,N){return x(this,C,!0,N)},f.prototype.readDoubleBE=function(C,N){return x(this,C,!1,N)},f.prototype.writeUInt8=function(C,N,k){k||(Q(C!=null,"missing value"),Q(N!=null,"missing offset"),Q(N<this.length,"trying to write beyond buffer length"),oe(C,255)),N>=this.length||(this[N]=C)},f.prototype.writeUInt16LE=function(C,N,k){_(this,C,N,!0,k)},f.prototype.writeUInt16BE=function(C,N,k){_(this,C,N,!1,k)},f.prototype.writeUInt32LE=function(C,N,k){A(this,C,N,!0,k)},f.prototype.writeUInt32BE=function(C,N,k){A(this,C,N,!1,k)},f.prototype.writeInt8=function(C,N,k){k||(Q(C!=null,"missing value"),Q(N!=null,"missing offset"),Q(N<this.length,"Trying to write beyond buffer length"),xe(C,127,-128)),N>=this.length||(0<=C?this.writeUInt8(C,N,k):this.writeUInt8(255+C+1,N,k))},f.prototype.writeInt16LE=function(C,N,k){I(this,C,N,!0,k)},f.prototype.writeInt16BE=function(C,N,k){I(this,C,N,!1,k)},f.prototype.writeInt32LE=function(C,N,k){F(this,C,N,!0,k)},f.prototype.writeInt32BE=function(C,N,k){F(this,C,N,!1,k)},f.prototype.writeFloatLE=function(C,N,k){B(this,C,N,!0,k)},f.prototype.writeFloatBE=function(C,N,k){B(this,C,N,!1,k)},f.prototype.writeDoubleLE=function(C,N,k){H(this,C,N,!0,k)},f.prototype.writeDoubleBE=function(C,N,k){H(this,C,N,!1,k)},f.prototype.fill=function(C,N,k){if(N=N||0,k=k||this.length,Q(typeof(C=typeof(C=C||0)=="string"?C.charCodeAt(0):C)=="number"&&!isNaN(C),"value is not a number"),Q(N<=k,"end < start"),k!==N&&this.length!==0){Q(0<=N&&N<this.length,"start out of bounds"),Q(0<=k&&k<=this.length,"end out of bounds");for(var D=N;D<k;D++)this[D]=C}},f.prototype.inspect=function(){for(var C=[],N=this.length,k=0;k<N;k++)if(C[k]=ee(this[k]),k===i.INSPECT_MAX_BYTES){C[k+1]="...";break}return"<Buffer "+C.join(" ")+">"},f.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var C=new Uint8Array(this.length),N=0,k=C.length;N<k;N+=1)C[N]=this[N];return C.buffer};var O=f.prototype;function V(C,N,k){return typeof C!="number"?k:N<=(C=~~C)?N:0<=C||0<=(C+=N)?C:0}function X(C){return(C=~~Math.ceil(+C))<0?0:C}function ne(C){return(Array.isArray||function(N){return Object.prototype.toString.call(N)==="[object Array]"})(C)}function ee(C){return C<16?"0"+C.toString(16):C.toString(16)}function de(C){for(var N=[],k=0;k<C.length;k++){var D=C.charCodeAt(k);if(D<=127)N.push(C.charCodeAt(k));else for(var te=k,ie=(55296<=D&&D<=57343&&k++,encodeURIComponent(C.slice(te,k+1)).substr(1).split("%")),ye=0;ye<ie.length;ye++)N.push(parseInt(ie[ye],16))}return N}function Te(C){return v.toByteArray(C)}function De(C,N,k,D){for(var te=0;te<D&&!(te+k>=N.length||te>=C.length);te++)N[te+k]=C[te];return te}function J(C){try{return decodeURIComponent(C)}catch{return"�"}}function oe(C,N){Q(typeof C=="number","cannot write a non-number as a number"),Q(0<=C,"specified a negative value for writing an unsigned value"),Q(C<=N,"value is larger than maximum value for type"),Q(Math.floor(C)===C,"value has a fractional component")}function xe(C,N,k){Q(typeof C=="number","cannot write a non-number as a number"),Q(C<=N,"value larger than maximum allowed value"),Q(k<=C,"value smaller than minimum allowed value"),Q(Math.floor(C)===C,"value has a fractional component")}function me(C,N,k){Q(typeof C=="number","cannot write a non-number as a number"),Q(C<=N,"value larger than maximum allowed value"),Q(k<=C,"value smaller than minimum allowed value")}function Q(C,N){if(!C)throw new Error(N||"Failed assertion")}f._augment=function(C){return C._isBuffer=!0,C._get=C.get,C._set=C.set,C.get=O.get,C.set=O.set,C.write=O.write,C.toString=O.toString,C.toLocaleString=O.toString,C.toJSON=O.toJSON,C.copy=O.copy,C.slice=O.slice,C.readUInt8=O.readUInt8,C.readUInt16LE=O.readUInt16LE,C.readUInt16BE=O.readUInt16BE,C.readUInt32LE=O.readUInt32LE,C.readUInt32BE=O.readUInt32BE,C.readInt8=O.readInt8,C.readInt16LE=O.readInt16LE,C.readInt16BE=O.readInt16BE,C.readInt32LE=O.readInt32LE,C.readInt32BE=O.readInt32BE,C.readFloatLE=O.readFloatLE,C.readFloatBE=O.readFloatBE,C.readDoubleLE=O.readDoubleLE,C.readDoubleBE=O.readDoubleBE,C.writeUInt8=O.writeUInt8,C.writeUInt16LE=O.writeUInt16LE,C.writeUInt16BE=O.writeUInt16BE,C.writeUInt32LE=O.writeUInt32LE,C.writeUInt32BE=O.writeUInt32BE,C.writeInt8=O.writeInt8,C.writeInt16LE=O.writeInt16LE,C.writeInt16BE=O.writeInt16BE,C.writeInt32LE=O.writeInt32LE,C.writeInt32BE=O.writeInt32BE,C.writeFloatLE=O.writeFloatLE,C.writeFloatBE=O.writeFloatBE,C.writeDoubleLE=O.writeDoubleLE,C.writeDoubleBE=O.writeDoubleBE,C.fill=O.fill,C.inspect=O.inspect,C.toArrayBuffer=O.toArrayBuffer,C}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,i){(function(r,o,v,l,c,u,h,d,m){var v=t("buffer").Buffer,g=4,f=new v(g);f.fill(0),n.exports={hash:function(p,S,M,b){for(var P=S(function(_,A){_.length%g!=0&&(I=_.length+(g-_.length%g),_=v.concat([_,f],I));for(var I,F=[],B=A?_.readInt32BE:_.readInt32LE,H=0;H<_.length;H+=g)F.push(B.call(_,H));return F}(p=v.isBuffer(p)?p:new v(p),b),8*p.length),S=b,E=new v(M),T=S?E.writeInt32BE:E.writeInt32LE,y=0;y<P.length;y++)T.call(E,P[y],4*y,!0);return E}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,i){(function(r,o,v,l,c,u,h,d,m){var v=t("buffer").Buffer,g=t("./sha"),f=t("./sha256"),p=t("./rng"),S={sha1:g,sha256:f,md5:t("./md5")},M=64,b=new v(M);function P(_,A){var I=S[_=_||"sha1"],F=[];return I||E("algorithm:",_,"is not yet supported"),{update:function(B){return v.isBuffer(B)||(B=new v(B)),F.push(B),B.length,this},digest:function(B){var H=v.concat(F),H=A?function(O,V,X){v.isBuffer(V)||(V=new v(V)),v.isBuffer(X)||(X=new v(X)),V.length>M?V=O(V):V.length<M&&(V=v.concat([V,b],M));for(var ne=new v(M),ee=new v(M),de=0;de<M;de++)ne[de]=54^V[de],ee[de]=92^V[de];return X=O(v.concat([ne,X])),O(v.concat([ee,X]))}(I,A,H):I(H);return F=null,B?H.toString(B):H}}}function E(){var _=[].slice.call(arguments).join(" ");throw new Error([_,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}b.fill(0),i.createHash=function(_){return P(_)},i.createHmac=P,i.randomBytes=function(_,A){if(!A||!A.call)return new v(p(_));try{A.call(this,void 0,new v(p(_)))}catch(I){A(I)}};var T,y=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(_){i[_]=function(){E("sorry,",_,"is not implemented yet")}};for(T in y)x(y[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){var v=t("./helpers");function g(E,T){E[T>>5]|=128<<T%32,E[14+(T+64>>>9<<4)]=T;for(var y=1732584193,x=-271733879,_=-1732584194,A=271733878,I=0;I<E.length;I+=16){var F=y,B=x,H=_,O=A,y=p(y,x,_,A,E[I+0],7,-680876936),A=p(A,y,x,_,E[I+1],12,-389564586),_=p(_,A,y,x,E[I+2],17,606105819),x=p(x,_,A,y,E[I+3],22,-1044525330);y=p(y,x,_,A,E[I+4],7,-176418897),A=p(A,y,x,_,E[I+5],12,1200080426),_=p(_,A,y,x,E[I+6],17,-1473231341),x=p(x,_,A,y,E[I+7],22,-45705983),y=p(y,x,_,A,E[I+8],7,1770035416),A=p(A,y,x,_,E[I+9],12,-1958414417),_=p(_,A,y,x,E[I+10],17,-42063),x=p(x,_,A,y,E[I+11],22,-1990404162),y=p(y,x,_,A,E[I+12],7,1804603682),A=p(A,y,x,_,E[I+13],12,-40341101),_=p(_,A,y,x,E[I+14],17,-1502002290),y=S(y,x=p(x,_,A,y,E[I+15],22,1236535329),_,A,E[I+1],5,-165796510),A=S(A,y,x,_,E[I+6],9,-1069501632),_=S(_,A,y,x,E[I+11],14,643717713),x=S(x,_,A,y,E[I+0],20,-373897302),y=S(y,x,_,A,E[I+5],5,-701558691),A=S(A,y,x,_,E[I+10],9,38016083),_=S(_,A,y,x,E[I+15],14,-660478335),x=S(x,_,A,y,E[I+4],20,-405537848),y=S(y,x,_,A,E[I+9],5,568446438),A=S(A,y,x,_,E[I+14],9,-1019803690),_=S(_,A,y,x,E[I+3],14,-187363961),x=S(x,_,A,y,E[I+8],20,1163531501),y=S(y,x,_,A,E[I+13],5,-1444681467),A=S(A,y,x,_,E[I+2],9,-51403784),_=S(_,A,y,x,E[I+7],14,1735328473),y=M(y,x=S(x,_,A,y,E[I+12],20,-1926607734),_,A,E[I+5],4,-378558),A=M(A,y,x,_,E[I+8],11,-2022574463),_=M(_,A,y,x,E[I+11],16,1839030562),x=M(x,_,A,y,E[I+14],23,-35309556),y=M(y,x,_,A,E[I+1],4,-1530992060),A=M(A,y,x,_,E[I+4],11,1272893353),_=M(_,A,y,x,E[I+7],16,-155497632),x=M(x,_,A,y,E[I+10],23,-1094730640),y=M(y,x,_,A,E[I+13],4,681279174),A=M(A,y,x,_,E[I+0],11,-358537222),_=M(_,A,y,x,E[I+3],16,-722521979),x=M(x,_,A,y,E[I+6],23,76029189),y=M(y,x,_,A,E[I+9],4,-640364487),A=M(A,y,x,_,E[I+12],11,-421815835),_=M(_,A,y,x,E[I+15],16,530742520),y=b(y,x=M(x,_,A,y,E[I+2],23,-995338651),_,A,E[I+0],6,-198630844),A=b(A,y,x,_,E[I+7],10,1126891415),_=b(_,A,y,x,E[I+14],15,-1416354905),x=b(x,_,A,y,E[I+5],21,-57434055),y=b(y,x,_,A,E[I+12],6,1700485571),A=b(A,y,x,_,E[I+3],10,-1894986606),_=b(_,A,y,x,E[I+10],15,-1051523),x=b(x,_,A,y,E[I+1],21,-2054922799),y=b(y,x,_,A,E[I+8],6,1873313359),A=b(A,y,x,_,E[I+15],10,-30611744),_=b(_,A,y,x,E[I+6],15,-1560198380),x=b(x,_,A,y,E[I+13],21,1309151649),y=b(y,x,_,A,E[I+4],6,-145523070),A=b(A,y,x,_,E[I+11],10,-1120210379),_=b(_,A,y,x,E[I+2],15,718787259),x=b(x,_,A,y,E[I+9],21,-343485551),y=P(y,F),x=P(x,B),_=P(_,H),A=P(A,O)}return Array(y,x,_,A)}function f(E,T,y,x,_,A){return P((T=P(P(T,E),P(x,A)))<<_|T>>>32-_,y)}function p(E,T,y,x,_,A,I){return f(T&y|~T&x,E,T,_,A,I)}function S(E,T,y,x,_,A,I){return f(T&x|y&~x,E,T,_,A,I)}function M(E,T,y,x,_,A,I){return f(T^y^x,E,T,_,A,I)}function b(E,T,y,x,_,A,I){return f(y^(T|~x),E,T,_,A,I)}function P(E,T){var y=(65535&E)+(65535&T);return(E>>16)+(T>>16)+(y>>16)<<16|65535&y}n.exports=function(E){return v.hash(E,g,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){n.exports=function(v){for(var g,f=new Array(v),p=0;p<v;p++)!(3&p)&&(g=4294967296*Math.random()),f[p]=g>>>((3&p)<<3)&255;return f}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){var v=t("./helpers");function g(S,M){S[M>>5]|=128<<24-M%32,S[15+(M+64>>9<<4)]=M;for(var b,P,E,T=Array(80),y=1732584193,x=-271733879,_=-1732584194,A=271733878,I=-1009589776,F=0;F<S.length;F+=16){for(var B=y,H=x,O=_,V=A,X=I,ne=0;ne<80;ne++){T[ne]=ne<16?S[F+ne]:p(T[ne-3]^T[ne-8]^T[ne-14]^T[ne-16],1);var ee=f(f(p(y,5),(ee=x,P=_,E=A,(b=ne)<20?ee&P|~ee&E:!(b<40)&&b<60?ee&P|ee&E|P&E:ee^P^E)),f(f(I,T[ne]),(b=ne)<20?1518500249:b<40?1859775393:b<60?-1894007588:-899497514)),I=A,A=_,_=p(x,30),x=y,y=ee}y=f(y,B),x=f(x,H),_=f(_,O),A=f(A,V),I=f(I,X)}return Array(y,x,_,A,I)}function f(S,M){var b=(65535&S)+(65535&M);return(S>>16)+(M>>16)+(b>>16)<<16|65535&b}function p(S,M){return S<<M|S>>>32-M}n.exports=function(S){return v.hash(S,g,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){function v(M,b){var P=(65535&M)+(65535&b);return(M>>16)+(b>>16)+(P>>16)<<16|65535&P}function g(M,b){var P,E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),y=new Array(64);M[b>>5]|=128<<24-b%32,M[15+(b+64>>9<<4)]=b;for(var x,_,A=0;A<M.length;A+=16){for(var I=T[0],F=T[1],B=T[2],H=T[3],O=T[4],V=T[5],X=T[6],ne=T[7],ee=0;ee<64;ee++)y[ee]=ee<16?M[ee+A]:v(v(v((_=y[ee-2],p(_,17)^p(_,19)^S(_,10)),y[ee-7]),(_=y[ee-15],p(_,7)^p(_,18)^S(_,3))),y[ee-16]),P=v(v(v(v(ne,p(_=O,6)^p(_,11)^p(_,25)),O&V^~O&X),E[ee]),y[ee]),x=v(p(x=I,2)^p(x,13)^p(x,22),I&F^I&B^F&B),ne=X,X=V,V=O,O=v(H,P),H=B,B=F,F=I,I=v(P,x);T[0]=v(I,T[0]),T[1]=v(F,T[1]),T[2]=v(B,T[2]),T[3]=v(H,T[3]),T[4]=v(O,T[4]),T[5]=v(V,T[5]),T[6]=v(X,T[6]),T[7]=v(ne,T[7])}return T}var f=t("./helpers"),p=function(M,b){return M>>>b|M<<32-b},S=function(M,b){return M>>>b};n.exports=function(M){return f.hash(M,g,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){i.read=function(v,g,f,p,A){var M,b,P=8*A-p-1,E=(1<<P)-1,T=E>>1,y=-7,x=f?A-1:0,_=f?-1:1,A=v[g+x];for(x+=_,M=A&(1<<-y)-1,A>>=-y,y+=P;0<y;M=256*M+v[g+x],x+=_,y-=8);for(b=M&(1<<-y)-1,M>>=-y,y+=p;0<y;b=256*b+v[g+x],x+=_,y-=8);if(M===0)M=1-T;else{if(M===E)return b?NaN:1/0*(A?-1:1);b+=Math.pow(2,p),M-=T}return(A?-1:1)*b*Math.pow(2,M-p)},i.write=function(v,g,f,p,S,I){var b,P,E=8*I-S-1,T=(1<<E)-1,y=T>>1,x=S===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=p?0:I-1,A=p?1:-1,I=g<0||g===0&&1/g<0?1:0;for(g=Math.abs(g),isNaN(g)||g===1/0?(P=isNaN(g)?1:0,b=T):(b=Math.floor(Math.log(g)/Math.LN2),g*(p=Math.pow(2,-b))<1&&(b--,p*=2),2<=(g+=1<=b+y?x/p:x*Math.pow(2,1-y))*p&&(b++,p/=2),T<=b+y?(P=0,b=T):1<=b+y?(P=(g*p-1)*Math.pow(2,S),b+=y):(P=g*Math.pow(2,y-1)*Math.pow(2,S),b=0));8<=S;v[f+_]=255&P,_+=A,P/=256,S-=8);for(b=b<<S|P,E+=S;0<E;v[f+_]=255&b,_+=A,b/=256,E-=8);v[f+_-A]|=128*I}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,i){(function(r,o,a,l,c,u,h,d,m){var v,g,f;function p(){}(r=n.exports={}).nextTick=(g=typeof window<"u"&&window.setImmediate,f=typeof window<"u"&&window.postMessage&&window.addEventListener,g?function(S){return window.setImmediate(S)}:f?(v=[],window.addEventListener("message",function(S){var M=S.source;M!==window&&M!==null||S.data!=="process-tick"||(S.stopPropagation(),0<v.length&&v.shift()())},!0),function(S){v.push(S),window.postMessage("process-tick","*")}):function(S){setTimeout(S,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.binding=function(S){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(S){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(yf);var LM=yf.exports;const IM=La(LM);var Mf=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],DM=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Sf=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],NM=Mf,UM=NM.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),pc=Sf;pc=pc.slice().filter(function(s){return!/^(gl\_|texture)/.test(s)});var OM=pc.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),FM=YM,BM=Mf,nd=DM,kM=Sf,zM=UM,HM=OM,Pn=999,id=9999,yl=0,Ml=1,rd=2,sd=3,od=4,zs=5,VM=6,GM=7,WM=8,ad=9,XM=10,ld=11,jM=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function YM(s){var e=0,t=0,n=Pn,i,r,o=[],a=[],l=1,c=0,u=0,h=!1,d=!1,m="",v;s=s||{};var g=kM,f=BM;s.version==="300 es"&&(g=HM,f=zM);for(var p={},S={},e=0;e<g.length;e++)p[g[e]]=!0;for(var e=0;e<f.length;e++)S[f[e]]=!0;return function(V){return a=[],V!==null?b(V):P()};function M(V){V.length&&a.push({type:jM[n],data:V,position:u,line:l,column:c})}function b(V){e=0,V.toString&&(V=V.toString()),m+=V.replace(/\r\n/g,`
`),v=m.length;for(var X;i=m[e],e<v;){switch(X=e,n){case yl:e=_();break;case Ml:e=x();break;case rd:e=y();break;case sd:e=A();break;case od:e=B();break;case ld:e=F();break;case zs:e=H();break;case id:e=O();break;case ad:e=T();break;case Pn:e=E();break}if(X!==e)switch(m[X]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,m=m.slice(e),a}function P(V){return o.length&&M(o.join("")),n=XM,M("(eof)"),a}function E(){return o=o.length?[]:o,r==="/"&&i==="*"?(u=t+e-1,n=yl,r=i,e+1):r==="/"&&i==="/"?(u=t+e-1,n=Ml,r=i,e+1):i==="#"?(n=rd,u=t+e,e):/\s/.test(i)?(n=ad,u=t+e,e):(h=/\d/.test(i),d=/[^\w_]/.test(i),u=t+e,n=h?od:d?sd:id,e)}function T(){return/[^\s]/g.test(i)?(M(o.join("")),n=Pn,e):(o.push(i),r=i,e+1)}function y(){return(i==="\r"||i===`
`)&&r!=="\\"?(M(o.join("")),n=Pn,e):(o.push(i),r=i,e+1)}function x(){return y()}function _(){return i==="/"&&r==="*"?(o.push(i),M(o.join("")),n=Pn,e+1):(o.push(i),r=i,e+1)}function A(){if(r==="."&&/\d/.test(i))return n=zs,e;if(r==="/"&&i==="*")return n=yl,e;if(r==="/"&&i==="/")return n=Ml,e;if(i==="."&&o.length){for(;I(o););return n=zs,e}if(i===";"||i===")"||i==="("){if(o.length)for(;I(o););return M(i),n=Pn,e+1}var V=o.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||V){for(;I(o););return n=Pn,e}return o.push(i),r=i,e+1}function I(V){var X=0,ne,ee;do{if(ne=nd.indexOf(V.slice(0,V.length+X).join("")),ee=nd[ne],ne===-1){if(X--+V.length>0)continue;ee=V.slice(0,1).join("")}return M(ee),u+=ee.length,o=o.slice(ee.length),o.length}while(!0)}function F(){return/[^a-fA-F0-9]/.test(i)?(M(o.join("")),n=Pn,e):(o.push(i),r=i,e+1)}function B(){return i==="."||/[eE]/.test(i)?(o.push(i),n=zs,r=i,e+1):i==="x"&&o.length===1&&o[0]==="0"?(n=ld,o.push(i),r=i,e+1):/[^\d]/.test(i)?(M(o.join("")),n=Pn,e):(o.push(i),r=i,e+1)}function H(){return i==="f"&&(o.push(i),r=i,e+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(r)?(o.push(i),r=i,e+1):/[^\d]/.test(i)?(M(o.join("")),n=Pn,e):(o.push(i),r=i,e+1)}function O(){if(/[^\d\w_]/.test(i)){var V=o.join("");return S[V]?n=WM:p[V]?n=GM:n=VM,M(o.join("")),n=Pn,e}return o.push(i),r=i,e+1}}var qM=FM,KM=$M;function $M(s,e){var t=qM(e),n=[];return n=n.concat(t(s)),n=n.concat(t(null)),n}const ZM=La(KM);var JM=QM;function QM(s){for(var e=[],t=0;t<s.length;t++)s[t].type!=="eof"&&e.push(s[t].data);return e.join("")}const cd=La(JM);var eS=tS;function tS(s){var e=null,t=null,n=0,i=0,r=0,o=0,a=0,l=[],c,u,h;for(c=0,u;c<s.length;c++)if(h=s[c],h.data==="{"){if(n&&n++||(u=m(c,Li(")"),Li()),u<0)||(o=u,u=m(u,Li("("),Li(")")),u<0)||(a=u,u=m(u,Hs),u<0)||s[u].type!=="ident"||(t=s[u].data,u=m(u,Hs),u<0))continue;n=1,i=c,e=s[u].data,r=u;var d=m(u,Hs);switch(s[d]&&s[d].data){case"lowp":case"highp":case"mediump":r=d}}else if(n&&h.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[i+1,c],args:[a,o+1],outer:[r,c+1]})}for(c=0;c<s.length;c++)if(h=s[c],h.data===";"){if(u=m(c,Li(")"),Li()),u<0||(o=u,u=m(u,Li("("),Li(")")),u<0)||(a=u,u=m(u,Hs),u<0)||s[u].type!=="ident"||(t=s[u].data,u=m(u,Hs),u<0)||s[u].type==="operator"||s[u].data==="return")continue;e=s[u].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(v,g){return v.outer[0]-g.outer[0]});function m(v,g,f){for(var p=v-1;p>=0;p--){if(g(s[p]))return p;if(f&&f(s[p]))return-1}return-1}}function Li(s){return function(e){return e.type==="operator"&&(!s||e.data===s)}}function Hs(s){return s.type!=="whitespace"}const nS=La(eS);function iS(s,e){if(typeof s!="object"||s===null)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function bf(s){var e=iS(s,"string");return typeof e=="symbol"?e:String(e)}function it(s,e,t){return e=bf(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function ud(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function Xr(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ud(Object(t),!0).forEach(function(n){it(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):ud(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function rS(s,e){if(s==null)return{};var t={},n=Object.keys(s),i,r;for(r=0;r<n.length;r++)i=n[r],!(e.indexOf(i)>=0)&&(t[i]=s[i]);return t}function sS(s,e){if(s==null)return{};var t=rS(s,e),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(s,n)&&(t[n]=s[n])}return t}function oS(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function aS(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,bf(n.key),n)}}function lS(s,e,t){return e&&aS(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Ef(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function mc(s,e){return mc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},mc(s,e)}function cS(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&mc(s,e)}function _a(s){return _a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_a(s)}function uS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hS(s,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ef(s)}function dS(s){var e=uS();return function(){var n=_a(s),i;if(e){var r=_a(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return hS(this,i)}}var ke={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},$t,jr,fS=($t={},it($t,"".concat(ke.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(ke.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),it($t,"".concat(ke.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(ke.position,`;
  `)}),it($t,"".concat(ke.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(ke.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),it($t,"".concat(ke.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(ke.pointSize,`;
    `)}),it($t,"".concat(ke.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(ke.diffuseColor,`;
  `)}),it($t,"".concat(ke.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(ke.fragColor,`;
  `)}),it($t,"".concat(ke.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(ke.emissive,`;
    `)}),it($t,"".concat(ke.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(ke.roughness,`;
    `)}),it($t,"".concat(ke.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(ke.metalness,`;
    `)}),it($t,"".concat(ke.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(ke.ao,`;
    `)}),it($t,"".concat(ke.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(ke.bump," - (dot(").concat(ke.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),it($t,"".concat(ke.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(ke.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(ke.depthAlpha,`;
    `)}),$t),pS=(jr={},it(jr,"".concat(ke.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(ke.position,`, 1.0 );
  `)}),it(jr,"".concat(ke.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(ke.position,`;
  `)}),it(jr,"".concat(ke.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(ke.diffuseColor,`;
  `)}),it(jr,"".concat(ke.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(ke.fragColor,`;
  `)}),jr),mS=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,gS=`
    varying mat4 csm_internal_vModelViewMatrix;
`,_S=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,vS=`
    varying mat4 csm_internal_vModelViewMatrix;
`,xS=`
    
`,Zt,yS=(Zt={},it(Zt,"".concat(ke.position),"*"),it(Zt,"".concat(ke.positionRaw),"*"),it(Zt,"".concat(ke.normal),"*"),it(Zt,"".concat(ke.pointSize),["PointsMaterial"]),it(Zt,"".concat(ke.diffuseColor),"*"),it(Zt,"".concat(ke.fragColor),"*"),it(Zt,"".concat(ke.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),it(Zt,"".concat(ke.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),it(Zt,"".concat(ke.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),it(Zt,"".concat(ke.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),it(Zt,"".concat(ke.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),it(Zt,"".concat(ke.depthAlpha),"*"),Zt),MS=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],SS=function(e,t,n){return e.split(t).join(n)},bS=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},ES=function(e,t){return new RegExp("\\b".concat(bS(t),"\\b")).test(e)};function TS(s){try{new s}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function AS(s,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(s,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(i){var r=typeof i[1].get=="function",o=typeof i[1].set=="function",a=typeof i[1].value=="function",l=i[0]==="constructor";return(r||o||a)&&!l}).forEach(function(i){if(typeof s[i[0]]=="function"){t||console.warn("Function ".concat(i[0]," already exists on CSM, renaming to base_").concat(i[0]));var r="base_".concat(i[0]);s[r]=i[1].value.bind(s);return}Object.defineProperty(s,i[0],i[1])})}function wS(s){var e=s.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function hd(s){return s.replace(/\s/g,"")}function RS(s,e,t){var n=s.lastIndexOf(e);return n===-1?s:s.substring(0,n)+t+s.substring(n+e.length)}var Rs=function(s){cS(t,s);var e=dS(t);function t(n){var i,r=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,h=n.silent,d=sS(n,MS);oS(this,t);var m;if(TS(r)?m=new r(d):(m=r,Object.assign(m,d)),m.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");i=e.call(this),AS(Ef(i),m,h),i.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:u,baseMaterial:r,instanceID:Gc.generateUUID(),type:m.type,isAlreadyExtended:!wS(m.onBeforeCompile),cacheHash:"",silent:h},i.uniforms=Xr(Xr({},i.uniforms||{}),l||{});{var v=i.__csm,g=v.fragmentShader,f=v.vertexShader,p=i.uniforms;i.__csm.cacheHash=i.getCacheHash(),i.generateMaterial(g,f,p)}return i}return lS(t,[{key:"update",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=i.uniforms||this.uniforms,Object.assign(this.__csm,i);var r=this.__csm,o=r.fragmentShader,a=r.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var i={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},r=new this.constructor(i);return Object.assign(this,r),r}},{key:"getCacheHash",value:function(){var i=this.__csm,r=i.fragmentShader,o=i.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(u,h){var d=h.value;return u+JSON.stringify(d)},""),c=hd(r)+hd(o)+l;return c.trim().length>0?IM(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(i,r,o){var a=this,l=this.parseShader(i),c=this.parseShader(r);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var u=function(m){try{if(l){var v=a.patchShader(l,m.fragmentShader,!0);m.fragmentShader=a.getMaterialDefine()+v}if(c){var g=a.patchShader(c,m.vertexShader);m.vertexShader=`#define IS_VERTEX;
`+g,m.vertexShader=a.getMaterialDefine()+m.vertexShader}m.uniforms=Xr(Xr({},m.uniforms),a.uniforms),a.uniforms=m.uniforms}catch(f){console.error(f)}};if(this.__csm.isAlreadyExtended){var h=this.onBeforeCompile;this.onBeforeCompile=function(d,m){h(d,m),u(d)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(i,r,o){var a=this,l=r,c=Xr(Xr({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(d){Object.keys(c[d]).forEach(function(m){var v=yS[d],g=a.__csm.type;if(d==="*"||ES(i.main,d))if(!v||Array.isArray(v)&&v.includes(g)||v==="*")l=SS(l,m,c[d][m]);else throw new Error("CSM: ".concat(d," is not available in ").concat(g,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?vS:gS,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(i.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(mS,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?xS:_S,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,h=l.includes("// CSM_END");return u&&h?l=RS(l,"// CSM_END",`
          // CSM_END
          `.concat(i.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(i.main,`
        // CSM_END
          `)),l=i.defines+l,l}},{key:"parseShader",value:function(i){if(i){var r=i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=ZM(r),a=nS(o),l=a.map(function(h){return h.name}).indexOf("main"),c=cd(o.slice(0,l>=0?a[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var i=this.__csm.type;return i?"#define IS_".concat(i.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return pS;default:return fS}}},{key:"getShaderFromIndex",value:function(i,r){return cd(i.slice(r[0],r[1]))}}]),t}(Fn);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Yn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Yn.nextNameID=Yn.nextNameID||0,this.$name.id=`lil-gui-name-${++Yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class CS extends Yn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function gc(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const PS={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:gc,toHexString:gc},so={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},LS={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=so.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return so.toHexString(i)}},IS={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=so.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return so.toHexString(i)}},DS=[PS,so,LS,IS];function NS(s){return DS.find(e=>e.match(s))}class US extends Yn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=NS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=gc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Sl extends Yn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class OS extends Yn{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+S),this.$input.value=this.getValue())},i=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},r=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let o=!1,a,l,c,u,h;const d=5,m=S=>{a=S.clientX,l=c=S.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=S=>{if(o){const M=S.clientX-a,b=S.clientY-l;Math.abs(b)>d?(S.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>d&&g()}if(!o){const M=S.clientY-c;h-=M*this._step*this._arrowKeyMultiplier(S),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=S.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,S,M,b,P)=>(p-S)/(M-S)*(P-b)+b,t=p=>{const S=this.$slider.getBoundingClientRect();let M=e(p,S.left,S.right,this._min,this._max);this._snapClampSetValue(M)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const S=p.touches[0].clientX-a,M=p.touches[0].clientY-l;Math.abs(S)>Math.abs(M)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),v=400;let g;const f=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const M=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class FS extends Yn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class BS extends Yn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const kS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function zS(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let dd=!1;class ru{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!dd&&a&&(zS(kS),dd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new FS(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new OS(this,e,t,n,i,r);case"boolean":return new CS(this,e,t);case"string":return new BS(this,e,t);case"function":return new Sl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new US(this,e,t,n)}addFolder(e){const t=new ru({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Sl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Sl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function ui(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Tf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},su,Vt,ut,Mn=1e8,ot=1/Mn,_c=Math.PI*2,HS=_c/4,VS=0,Af=Math.sqrt,GS=Math.cos,WS=Math.sin,Dt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},ou=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},en=function(e){return e!==!1},au=function(){return typeof window<"u"},Zo=function(e){return gt(e)||Dt(e)},wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,vc=/(?:-?\.?\d|\.)+/gi,Rf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cf=/[+-]=-?[.\d]+/,Pf=/[^,'"\[\]\s]+/gi,XS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,kn,xc,lu,mn={},va={},Lf,If=function(e){return(va=yr(e,mn))&&sn},cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oo=function(e,t){return!t&&console.warn(e)},Df=function(e,t){return e&&(mn[e]=t)&&va&&(va[e]=t)||mn},ao=function(){return 0},jS={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},YS={suppressEvents:!0},uu={},Vi=[],yc={},Nf,hn={},El={},fd=30,oa=[],hu="",du=function(e){var t=e[0],n,i;if(Zn(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oa.length;i--&&!oa[i].targetTest(t););n=oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rp(e[i],n)))||e.splice(i,1);return e},pr=function(e){return e._gsap||du(Sn(e))[0]._gsap},Uf=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():ou(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},ss=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},qS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},xa=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(yc={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Of=function(e,t,n,i){Vi.length&&!Vt&&xa(),e.render(t,n,Vt&&t<0&&(e._initted||e._startAt)),Vi.length&&!Vt&&xa()},Ff=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pf).length<2?t:Dt(e)?e.trim():e},Bf=function(e){return e},En=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},KS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},yr=function(e,t){for(var n in t)e[n]=t[n];return e},pd=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ya=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$s=function(e){var t=e.parent||ht,n=e.keyframes?KS(Gt(e.keyframes)):En;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$S=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},kf=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ia=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ZS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mc=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},JS=function s(e){return!e||e._ts&&s(e.parent)},md=function(e){return e._repeat?xs(e._tTime,e=e.duration()+e._rDelay)*e:0},xs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ma=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Da=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Na=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Da(e),n._dirty||mr(n,e)),e},zf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ma(e.rawTime(),t),(!t._dur||_o(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},Gn=function(e,t,n,i){return t.parent&&Wi(t),t._start=Pt((vi(n)?n:n||e!==ht?vn(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kf(e,t,"_first","_last",e._sort?"_start":0),Sc(t)||(e._recent=t),i||zf(e,t),e._ts<0&&Na(e,e._tTime),e},Hf=function(e,t){return(mn.ScrollTrigger||cu("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},Vf=function(e,t,n,i,r){if(pu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nf!==dn.frame)return Vi.push(e),e._lazy=[r,i],1},QS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Sc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eb=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&QS(e)&&!(!e._initted&&Sc(e))||(e._ts<0||e._dp._ts<0)&&!Sc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=_o(0,e._tDur,t),u=xs(l,a),e._yoyo&&u&1&&(o=1-o),u!==xs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Vt||i||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Vf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Mc(e,t,n,!0),e._onUpdate&&!n&&fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wi(e,1),!n&&!Vt&&(fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ys=function(e,t,n,i){var r=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Pt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Na(e,e._tTime=e._tDur*a),e.parent&&Da(e),n||mr(e.parent,e),e},gd=function(e){return e instanceof Yt?mr(e):ys(e,e._dur)},nb={_start:0,endTime:ao,totalDuration:ao},vn=function s(e,t,n){var i=e.labels,r=e._recent||nb,o=e.duration()>=Mn?r.endTime(!1):e._dur,a,l,c;return Dt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zs=function(e,t,n){var i=vi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;o.immediateRender=en(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new St(t[0],o,t[r+1])},qi=function(e,t){return e||e===0?t(e):t},_o=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Dt(e)||!(t=XS.exec(e))?"":t[1]},ib=function(e,t,n){return qi(n,function(i){return _o(e,t,i)})},bc=[].slice,Gf=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==kn},rb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Dt(i)&&!t||Gf(i,1)?(r=n).push.apply(r,Sn(i)):n.push(i)})||n},Sn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Dt(e)&&!n&&(xc||!Ms())?bc.call((t||lu).querySelectorAll(e),0):Gt(e)?rb(e,n):Gf(e)?bc.call(e,0):e?[e]:[]},Ec=function(e){return e=Sn(e)[0]||oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sn(t,n.querySelectorAll?n:n===e?oo("Invalid scope")||lu.createElement("div"):e)}},Wf=function(e){return e.sort(function(){return .5-Math.random()})},Xf=function(e){if(gt(e))return e;var t=Zn(e)?e:{each:e},n=gr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Dt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,m,v){var g=(v||t).length,f=o[g],p,S,M,b,P,E,T,y,x;if(!f){if(x=t.grid==="auto"?0:(t.grid||[1,Mn])[1],!x){for(T=-Mn;T<(T=v[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(f=o[g]=[],p=l?Math.min(x,g)*u-.5:i%x,S=x===Mn?0:l?g*h/x-.5:i/x|0,T=0,y=Mn,E=0;E<g;E++)M=E%x-p,b=S-(E/x|0),f[E]=P=c?Math.abs(c==="y"?b:M):Af(M*M+b*b),P>T&&(T=P),P<y&&(y=P);i==="random"&&Wf(f),f.max=T-y,f.min=y,f.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),f.b=g<0?r-g:r,f.u=zt(t.amount||t.each)||0,n=n&&g<0?tp(n):n}return g=(f[d]-f.min)/f.max||0,Pt(f.b+(n?n(g):g)*f.v)+f.u}},Tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(vi(n)?0:zt(n))}},jf=function(e,t){var n=Gt(e),i,r;return!n&&Zn(e)&&(i=n=e.radius||Mn,e.values?(e=Sn(e.values),(r=!vi(e[0]))&&(i*=i)):e=Tc(e.increment)),qi(t,n?gt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Mn,u=0,h=e.length,d,m;h--;)r?(d=e[h].x-a,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,r||u===o||vi(o)?u:u+zt(o)}:Tc(e))},Yf=function(e,t,n,i){return qi(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},ob=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},ab=function(e,t,n){return Kf(e,t,0,1,n)},qf=function(e,t,n){return qi(n,function(i){return e[~~t(i)]})},lb=function s(e,t,n){var i=t-e;return Gt(e)?qf(e,s(0,e.length),t):qi(n,function(r){return(i+(r-e)%i)%i+e})},cb=function s(e,t,n){var i=t-e,r=i*2;return Gt(e)?qf(e,s(0,e.length-1),t):qi(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},lo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Pf:vc),n+=e.substr(t,i-t)+Yf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Kf=function(e,t,n,i,r){var o=t-e,a=i-n;return qi(r,function(l){return n+((l-e)/o*a||0)})},ub=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=Dt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(v){v*=h;var g=Math.min(d,~~v);return u[g](v-g)},n=t}else i||(e=yr(Gt(e)?[]:{},e));if(!u){for(l in t)fu.call(a,e,l,"get",t[l]);r=function(v){return _u(v,a)||(o?e.p:e)}}}return qi(n,r)},_d=function(e,t,n){var i=e.labels,r=Mn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},fn=function(e,t,n){var i=e.vars,r=i[t],o=ut,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vi.length&&xa(),a&&(ut=a),u=l?r.apply(c,l):r.call(c),ut=o,u},Xs=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&fn(e,"onInterrupt"),e},Qr,$f=[],Zf=function(e){if(e)if(e=!e.name&&e.default||e,au()||e.headless){var t=e.name,n=gt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ao,render:_u,add:fu,kill:Ab,modifier:Tb,rawVars:0},o={targetTest:0,get:0,getSetter:gu,aliases:{},register:0};if(Ms(),e!==i){if(hn[t])return;En(i,En(ya(e,r),o)),yr(i.prototype,yr(r,ya(e,o))),hn[i.prop=t]=i,e.targetTest&&(oa.push(i),uu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Df(t,i),e.register&&e.register(sn,i,nn)}else $f.push(e)},st=255,js={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},Tl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*st+.5|0},Jf=function(e,t,n){var i=e?vi(e)?[e>>16,e>>8&st,e&st]:0:js.black,r,o,a,l,c,u,h,d,m,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])i=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&st,i&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(vc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Tl(l+1/3,r,o),i[1]=Tl(l,r,o),i[2]=Tl(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Rf),n&&i.length<4&&(i[3]=1),i}else i=e.match(vc)||js.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/st,o=i[1]/st,a=i[2]/st,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===r?(o-a)/m+(o<a?6:0):h===o?(a-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Qf=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(r){var o=r.match(Jr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},vd=function(e,t,n){var i="",r=(e+i).match(Gi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Jf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Qf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gi,"1").split(Jr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Gi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),hb=/hsl[a]?\(/,ep=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=hb.test(t),e[1]=vd(e[1],n),e[0]=vd(e[0],n,Qf(e[1])),!0},co,dn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,m,v=function g(f){var p=s()-i,S=f===!0,M,b,P,E;if((p>e||p<0)&&(n+=p-t),i+=p,P=i-n,M=P-o,(M>0||S)&&(E=++h.frame,d=P-h.time*1e3,h.time=P=P/1e3,o+=M+(M>=r?4:r-M),b=1),S||(l=c(g)),b)for(m=0;m<a.length;m++)a[m](P,d,E,f)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){Lf&&(!xc&&au()&&(kn=xc=window,lu=kn.document||{},mn.gsap=sn,(kn.gsapVersions||(kn.gsapVersions=[])).push(sn.version),If(va||kn.GreenSockGlobals||!kn.gsap&&kn||{}),$f.forEach(Zf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(f){return setTimeout(f,o-h.time*1e3+1|0)},co=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),co=0,c=ao},lagSmoothing:function(f,p){e=f||1/0,t=Math.min(p||33,e)},fps:function(f){r=1e3/(f||240),o=h.time*1e3+r},add:function(f,p,S){var M=p?function(b,P,E,T){f(b,P,E,T),h.remove(M)}:f;return h.remove(f),a[S?"unshift":"push"](M),Ms(),M},remove:function(f,p){~(p=a.indexOf(f))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},h}(),Ms=function(){return!co&&dn.wake()},qe={},db=/^[\d.\-M][\d.\-,\s]/,fb=/["']/g,pb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(fb,"").trim():+c,i=l.substr(a+1).trim();return t},mb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gb=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[pb(t[1])]:mb(e).split(",").map(Ff)):qe._CE&&db.test(e)?qe._CE("",e):n},tp=function(e){return function(t){return 1-e(1-t)}},np=function s(e,t){for(var n=e._first,i;n;)n instanceof Yt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(gt(e)?e:qe[e]||gb(e))||t},br=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return tn(e,function(a){qe[a]=mn[a]=r,qe[o=a.toLowerCase()]=n;for(var l in r)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},ip=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Al=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/_c*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*WS((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ip(a);return r=_c/r,l.config=function(c,u){return s(e,c,u)},l},wl=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:ip(n);return i.config=function(r){return s(e,r)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;br(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;br("Elastic",Al("in"),Al("out"),Al());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};br("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);br("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});br("Circ",function(s){return-(Af(1-s*s)-1)});br("Sine",function(s){return s===1?1:-GS(s*HS)+1});br("Back",wl("in"),wl("out"),wl());qe.SteppedEase=qe.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-ot;return function(a){return((i*_o(0,o,a)|0)+r)*n}}};vs.ease=qe["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return hu+=s+","+s+"Params,"});var rp=function(e,t){this.id=VS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Uf,this.set=t?t.getSetter:gu},uo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ys(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),co||dn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ms(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Na(this,n),!r._dp||r.parent||zf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Of(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+md(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+md(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?xs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(_o(-Math.abs(this._delay),this._tDur,r),i!==!1),Da(this),ZS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YS);var i=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ot)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=gt(n)?n:Bf,a=function(){var c=i.then;i.then=null,gt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Xs(this)},s}();En(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var Yt=function(s){Tf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=en(n.sortChildren),ht&&Gn(n.parent||ht,ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Hf(ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Zs(0,arguments,this),this},t.from=function(i,r,o){return Zs(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Zs(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,$s(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new St(i,r,vn(this,o),1),this},t.call=function(i,r,o){return Gn(this,St.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new St(i,o,vn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,$s(o).immediateRender=en(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,$s(a).immediateRender=en(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,v,g,f,p,S,M,b,P,E,T;if(this!==ht&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,b=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,f=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(f*100+i,r,o);if(d=Pt(u%f),u===l?(g=this._repeat,d=c):(g=~~(u/f),g&&g===u/f&&(d=c,g--),d>c&&(d=c)),P=xs(this._tTime,f),!a&&this._tTime&&P!==g&&this._tTime-P*f-this._dur<=0&&(P=g),E&&g&1&&(d=c-d,T=1),g!==P&&!this._lock){var y=E&&P&1,x=y===(E&&g&1);if(g<P&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Pt(g*f)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;np(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=tb(this,Pt(a),Pt(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(fn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(v=m._next,(m._act||d>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,o),d!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=-ot);break}}m=v}else{m=this._last;for(var _=i<0?i:d;m;){if(v=m._prev,(m._act||_<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(_-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(_-m._start)*m._ts,r,o||Vt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=_?-ot:ot);break}}m=v}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-ot)._zTime=d>=a?1:-1,this._ts))return this._start=b,Da(this),this.render(i,r,o);this._onUpdate&&!r&&fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(vi(r)||(r=vn(this,r,i)),!(i instanceof uo)){if(Gt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Dt(i))return this.addLabel(i,r);if(gt(i))i=St.delayedCall(0,i);else return this}return this!==i?Gn(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof St?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Dt(i)?this.removeLabel(i):gt(i)?this.killTweensOf(i):(Ia(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(dn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=vn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=St.delayedCall(0,r||ao,o);return a.data="isPause",this._hasPause=1,Gn(this,a,vn(this,i))},t.removePause=function(i){var r=this._first;for(i=vn(this,i);r;)r._start===i&&r.data==="isPause"&&Wi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Sn(i),l=this._first,c=vi(r),u;l;)l instanceof St?qS(l._targets,a)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=vn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,v=St.to(o,En({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ot,onStart:function(){if(o.pause(),!m){var f=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==f&&ys(v,f,0,1).render(v._time,!0,!0),m=1}u&&u.apply(v,h||[])}},r));return d?v.render(0):v},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,En({startAt:{time:vn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_d(this,vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_d(this,vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return mr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Mn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ys(o,o===ht&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ht._ts&&(Of(ht,Ma(i,ht)),Nf=dn.frame),dn.frame>=fd){fd+=pn.autoSleep||120;var r=ht._first;if((!r||!r._ts)&&pn.autoSleep&&dn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||dn.sleep()}}},e}(uo);En(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var _b=function(e,t,n,i,r,o,a){var l=new nn(this._pt,e,t,0,1,up,null,r),c=0,u=0,h,d,m,v,g,f,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=lo(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(bl)||[];h=bl.exec(i);)v=h[0],g=i.substring(c,h.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),v!==d[u++]&&(f=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:f,c:v.charAt(1)==="="?ss(f,v)-f:parseFloat(v)-f,m:m&&m<4?Math.round:0},c=bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Cf.test(i)||p)&&(l.e=0),this._pt=l,l},fu=function(e,t,n,i,r,o,a,l,c,u){gt(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:gt(h)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=gt(h)?c?Sb:lp:mu,v;if(Dt(i)&&(~i.indexOf("random(")&&(i=lo(i)),i.charAt(1)==="="&&(v=ss(d,i)+(zt(d)||0),(v||v===0)&&(i=v))),!u||d!==i||Ac)return!isNaN(d*i)&&i!==""?(v=new nn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Eb:cp,0,m),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!h&&!(t in e)&&cu(t,i),_b.call(this,e,t,d,i,m,l||pn.stringFilter,c))},vb=function(e,t,n,i,r){if(gt(e)&&(e=Js(e,r,t,n,i)),!Zn(e)||e.style&&e.nodeType||Gt(e)||wf(e))return Dt(e)?Js(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Js(e[a],r,t,n,i);return o},sp=function(e,t,n,i,r,o){var a,l,c,u;if(hn[e]&&(a=new hn[e]).init(r,a.rawVars?t[e]:vb(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new nn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Qr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fi,Ac,pu=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,v=e._dur,g=e._startAt,f=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:f,M=e._overwrite==="auto"&&!su,b=e.timeline,P,E,T,y,x,_,A,I,F,B,H,O,V;if(b&&(!d||!r)&&(r="none"),e._ease=gr(r,vs.ease),e._yEase=h?tp(gr(h===!0?r:h,vs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!b&&!!i.runBackwards,!b||d&&!i.stagger){if(I=f[0]?pr(f[0]).harness:0,O=I&&i[I.prop],P=ya(i,uu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!m?g.render(-1,!0):g.revert(u&&v?sa:jS),g._lazy=0),o){if(Wi(e._startAt=St.set(f,En({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&en(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!m)&&e._startAt.revert(sa),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),T=En({overwrite:!1,data:"isFromStart",lazy:a&&!g&&en(l),immediateRender:a,stagger:0,parent:p},P),O&&(T[I.prop]=O),Wi(e._startAt=St.set(f,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(sa):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&en(l)||l&&!v,E=0;E<f.length;E++){if(x=f[E],A=x._gsap||du(f)[E]._gsap,e._ptLookup[E]=B={},yc[A.id]&&Vi.length&&xa(),H=S===f?E:S.indexOf(x),I&&(F=new I).init(x,O||P,e,H,S)!==!1&&(e._pt=y=new nn(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(X){B[X]=y}),F.priority&&(_=1)),!I||O)for(T in P)hn[T]&&(F=sp(T,P,e,H,x,S))?F.priority&&(_=1):B[T]=y=fu.call(e,x,T,"get",P[T],H,S,0,i.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),M&&e._pt&&(Fi=e,ht.killTweensOf(x,B,e.globalTime(t)),V=!e.parent,Fi=0),e._pt&&l&&(yc[A.id]=1)}_&&hp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&b.render(Mn,!0,!0)},xb=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,m;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,m=e._targets.length;m--;){if(u=d[m][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ac=1,e.vars[t]="+=0",pu(e,a),Ac=0,l?oo(t+" not eligible for reset"):1;c.push(u)}for(m=c.length;m--;)h=c[m],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=vt(n)+zt(h.e)),h.b&&(h.b=u.s+zt(h.b))},yb=function(e,t){var n=e[0]?pr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=yr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Mb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Gt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Js=function(e,t,n,i,r){return gt(e)?e.call(t,n,i,r):Dt(e)&&~e.indexOf("random(")?lo(e):e},op=hu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ap={};tn(op+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ap[s]=1});var St=function(s){Tf(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:$s(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,v=l.keyframes,g=l.defaults,f=l.scrollTrigger,p=l.yoyoEase,S=i.parent||ht,M=(Gt(n)||wf(n)?vi(n[0]):"length"in i)?[n]:Sn(n),b,P,E,T,y,x,_,A;if(a._targets=M.length?du(M):oo("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,v||d||Zo(c)||Zo(u)){if(i=a.vars,b=a.timeline=new Yt({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:M}),b.kill(),b.parent=b._dp=ui(a),b._start=0,d||Zo(c)||Zo(u)){if(T=M.length,_=d&&Xf(d),Zn(d))for(y in d)~op.indexOf(y)&&(A||(A={}),A[y]=d[y]);for(P=0;P<T;P++)E=ya(i,ap),E.stagger=0,p&&(E.yoyoEase=p),A&&yr(E,A),x=M[P],E.duration=+Js(c,ui(a),P,x,M),E.delay=(+Js(u,ui(a),P,x,M)||0)-a._delay,!d&&T===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),b.to(x,E,_?_(P,x,M):0),b._ease=qe.none;b.duration()?c=u=0:a.timeline=0}else if(v){$s(En(b.vars.defaults,{ease:"none"})),b._ease=gr(v.ease||i.ease||"none");var I=0,F,B,H;if(Gt(v))v.forEach(function(O){return b.to(M,O,">")}),b.duration();else{E={};for(y in v)y==="ease"||y==="easeEach"||Mb(y,v[y],E,v.easeEach);for(y in E)for(F=E[y].sort(function(O,V){return O.t-V.t}),I=0,P=0;P<F.length;P++)B=F[P],H={ease:B.e,duration:(B.t-(P?F[P-1].t:0))/100*c},H[y]=B.v,b.to(M,H,I),I+=H.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return m===!0&&!su&&(Fi=ui(a),ht.killTweensOf(M),Fi=0),Gn(S,ui(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!v&&a._start===Pt(S._time)&&en(h)&&JS(ui(a))&&S.data!=="nested")&&(a._tTime=-ot,a.render(Math.max(0,-u)||0)),f&&Hf(ui(a),f),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ot&&!u?l:i<ot?0:i,d,m,v,g,f,p,S,M,b;if(!c)eb(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(d=Pt(h%g),h===l?(v=this._repeat,d=c):(v=~~(h/g),v&&v===Pt(h/g)&&(d=c,v--),d>c&&(d=c)),p=this._yoyo&&v&1,p&&(b=this._yEase,d=c-d),f=xs(this._tTime,g),d===a&&!o&&this._initted&&v===f)return this._tTime=h,this;v!==f&&(M&&this._yEase&&np(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Pt(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(Vf(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==f))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!r&&!v&&(fn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Mc(this,i,r,o),fn(this,"onUpdate")),this._repeat&&v!==f&&this.vars.onRepeat&&!r&&this.parent&&fn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Mc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!r&&!(u&&!a)&&(h||a||p)&&(fn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){co||dn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||pu(this,c),u=this._ease(c/this._dur),xb(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Na(this,0),this.parent||kf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fi&&Fi.vars.overwrite!==!0)._first||Xs(this),this.parent&&o!==this.timeline.totalDuration()&&ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Sn(i):a,c=this._ptLookup,u=this._pt,h,d,m,v,g,f,p;if((!r||r==="all")&&$S(a,l))return r==="all"&&(this._pt=0),Xs(this);for(h=this._op=this._op||[],r!=="all"&&(Dt(r)&&(g={},tn(r,function(S){return g[S]=1}),r=g),r=yb(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(h[p]=r,v=d,m={}):(m=h[p]=h[p]||{},v=r);for(g in v)f=d&&d[g],f&&((!("kill"in f.d)||f.d.kill(g)===!0)&&Ia(this,f,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&Xs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Zs(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Zs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return ht.killTweensOf(i,r,o)},e}(uo);En(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(s){St[s]=function(){var e=new Yt,t=bc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var mu=function(e,t,n){return e[t]=n},lp=function(e,t,n){return e[t](n)},Sb=function(e,t,n,i){return e[t](i.fp,n)},bb=function(e,t,n){return e.setAttribute(t,n)},gu=function(e,t){return gt(e[t])?lp:ou(e[t])&&e.setAttribute?bb:mu},cp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Eb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},up=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_u=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Tb=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Ab=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},nn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||cp,this.d=l||this,this.set=c||mu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=wb,this.m=n,this.mt=r,this.tween=i},s}();tn(hu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return uu[s]=1});mn.TweenMax=mn.TweenLite=St;mn.TimelineLite=mn.TimelineMax=Yt;ht=new Yt({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=ep;var _r=[],aa={},Rb=[],xd=0,Cb=0,Rl=function(e){return(aa[e]||Rb).map(function(t){return t()})},wc=function(){var e=Date.now(),t=[];e-xd>2&&(Rl("matchMediaInit"),_r.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=kn.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),xd=e,Rl("matchMedia"))},dp=function(){function s(t,n){this.selector=n&&Ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cb++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){gt(n)&&(r=i,i=n,n=gt);var o=this,a=function(){var c=ut,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ec(r)),ut=o,h=i.apply(o,arguments),gt(h)&&o._r.push(h),ut=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof St&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof St)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=_r.length;o--;)_r[o].id===this.id&&_r.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),Pb=function(){function s(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Zn(n)||(n={matches:n});var o=new dp(0,r||this.scope),a=o.conditions={},l,c,u;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=kn.matchMedia(n[c]),l&&(_r.indexOf(o)<0&&_r.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(wc):l.addEventListener("change",wc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Sa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Zf(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=Sn(e)[0]);var r=pr(e||{}).get,o=n?Bf:Ff;return n==="native"&&(n=""),e&&(t?o((hn[t]&&hn[t].get||r)(e,t,n,i)):function(a,l,c){return o((hn[a]&&hn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Sn(e),e.length>1){var i=e.map(function(u){return sn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=hn[t],a=pr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Qr._pt=0,h.init(e,n?u+n:u,Qr,0,[e]),h.render(1,h),Qr._pt&&_u(1,Qr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=sn.to(e,yr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,vs.ease)),pd(vs,e||{})},config:function(e){return pd(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hn[a]&&!mn[a]&&oo(t+" effect requires "+a+" plugin.")}),El[t]=function(a,l,c){return n(Sn(a),En(l||{},r),c)},o&&(Yt.prototype[t]=function(a,l,c){return this.add(El[t](a,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):qe},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),i,r;for(n.smoothChildTiming=en(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)r=i._next,(t||!(!i._dur&&i instanceof St&&i.vars.onComplete===i._targets[0]))&&Gn(n,i,i._start-i._delay),i=r;return Gn(ht,n,0),n},context:function(e,t){return e?new dp(e,t):ut},matchMedia:function(e){return new Pb(e)},matchMediaRefresh:function(){return _r.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||wc()},addEventListener:function(e,t){var n=aa[e]||(aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=aa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lb,wrapYoyo:cb,distribute:Xf,random:Yf,snap:jf,normalize:ab,getUnit:zt,clamp:ib,splitColor:Jf,toArray:Sn,selector:Ec,mapRange:Kf,pipe:sb,unitize:ob,interpolate:ub,shuffle:Wf},install:If,effects:El,ticker:dn,updateRoot:Yt.updateRoot,plugins:hn,globalTimeline:ht,core:{PropTween:nn,globals:Df,Tween:St,Timeline:Yt,Animation:uo,getCache:pr,_removeLinkedListItem:Ia,reverting:function(){return Vt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return su=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Sa[s]=St[s]});dn.add(Yt.updateRoot);Qr=Sa.to({},{duration:0});var Lb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ib=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Lb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Cl=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Dt(r)&&(l={},tn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ib(a,r)}}}},sn=Sa.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cl("roundProps",Tc),Cl("modifiers"),Cl("snap",jf))||Sa;St.version=Yt.version=sn.version="3.12.5";Lf=1;au()&&Ms();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yd,Bi,os,vu,fr,Md,xu,Db=function(){return typeof window<"u"},xi={},ar=180/Math.PI,as=Math.PI/180,Yr=Math.atan2,Sd=1e8,yu=/([A-Z])/g,Nb=/(left|right|width|margin|padding|x)/i,Ub=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kb=function(e,t,n){return e.style[t]=n},zb=function(e,t,n){return e.style.setProperty(t,n)},Hb=function(e,t,n){return e._gsap[t]=n},Vb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Wb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},dt="transform",rn=dt+"Origin",Xb=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in xi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hi(i,a)}):this.tfm[e]=o.x?o[e]:hi(i,e),e===rn&&(this.tfm.zOrigin=o.zOrigin);else return jn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(dt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(rn,t,"")),e=dt}(r||t)&&this.props.push(e,t,r[e])},mp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xu(),(!r||!r.isStart)&&!n[dt]&&(mp(n),i.zOrigin&&n[rn]&&(n[rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gp=function(e,t){var n={target:e,props:[],revert:jb,save:Xb};return e._gsap||sn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},_p,Cc=function(e,t){var n=Bi.createElementNS?Bi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bi.createElement(e);return n&&n.style?n:Bi.createElement(e)},qn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ss(t)||t,1)||""},bd="O,Moz,ms,Ms,Webkit".split(","),Ss=function(e,t,n){var i=t||fr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(bd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?bd[o]:"")+e},Pc=function(){Db()&&window.document&&(yd=window,Bi=yd.document,os=Bi.documentElement,fr=Cc("div")||{style:{}},Cc("div"),dt=Ss(dt),rn=dt+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_p=!!Ss("perspective"),xu=sn.core.reverting,vu=1)},Pl=function s(e){var t=Cc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(os.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),os.removeChild(t),this.style.cssText=r,o},Ed=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vp=function(e){var t;try{t=e.getBBox()}catch{t=Pl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Pl||(t=Pl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ed(e,["x","cx","x1"])||0,y:+Ed(e,["y","cy","y1"])||0,width:0,height:0}:t},xp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vp(e))},Mr=function(e,t){if(t){var n=e.style,i;t in xi&&t!==rn&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(yu,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,r,o){var a=new nn(e._pt,t,n,0,1,o?pp:fp);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Td={deg:1,rad:1,turn:1},Yb={grid:1,flex:1},Xi=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=fr.style,l=Nb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",v,g,f,p;if(i===o||!r||Td[i]||Td[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&xp(e),(m||o==="%")&&(xi[t]||~t.indexOf("adius")))return v=p?e.getBBox()[l?"width":"height"]:e[u],vt(m?r/v*h:r/100*v);if(a[l?"width":"height"]=h+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Bi||!g.appendChild)&&(g=Bi.body),f=g._gsap,f&&m&&f.width&&l&&f.time===dn.time&&!f.uncache)return vt(r/f.width*h);if(m&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,v=e[u],S?e.style[t]=S:Mr(e,t)}else(m||o==="%")&&!Yb[qn(g,"display")]&&(a.position=qn(e,"position")),g===e&&(a.position="static"),g.appendChild(fr),v=fr[u],g.removeChild(fr),a.position="absolute";return l&&m&&(f=pr(g),f.time=dn.time,f.width=g[u]),vt(d?v*r/h:v&&r?h/v*r:0)},hi=function(e,t,n,i){var r;return vu||Pc(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),xi[t]&&t!=="transform"?(r=fo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ea(qn(e,rn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ba[t]&&ba[t](e,t,n)||qn(e,t)||Uf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Xi(e,t,r,n)+n:r},qb=function(e,t,n,i){if(!n||n==="none"){var r=Ss(t,e,1),o=r&&qn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,up),l=0,c=0,u,h,d,m,v,g,f,p,S,M,b,P;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=qn(e,t)||i,g?e.style[t]=g:Mr(e,t)),u=[n,i],ep(u),n=u[0],i=u[1],d=n.match(Jr)||[],P=i.match(Jr)||[],P.length){for(;h=Jr.exec(i);)f=h[0],S=i.substring(l,h.index),v?v=(v+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(v=1),f!==(g=d[c++]||"")&&(m=parseFloat(g)||0,b=g.substr((m+"").length),f.charAt(1)==="="&&(f=ss(m,f)+b),p=parseFloat(f),M=f.substr((p+"").length),l=Jr.lastIndex-M.length,M||(M=M||pn.units[t]||b,l===i.length&&(i+=M,a.e+=M)),b!==M&&(m=Xi(e,t,g,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:p-m,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?pp:fp;return Cf.test(i)&&(a.e=0),this._pt=a,a},Ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ad[n]||n,t[1]=Ad[i]||i,t.join(" ")},$b=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],xi[a]&&(l=1,a=a==="transformOrigin"?rn:dt),Mr(n,a);l&&(Mr(n,dt),o&&(o.svg&&n.removeAttribute("transform"),fo(n,1),o.uncache=1,mp(i)))}},ba={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,n,0,0,$b);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ho=[1,0,0,1,0,0],yp={},Mp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wd=function(e){var t=qn(e,dt);return Mp(t)?ho:t.substr(7).match(Rf).map(vt)},Mu=function(e,t){var n=e._gsap||pr(e),i=e.style,r=wd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ho:r):(r===ho&&!e.offsetParent&&e!==os&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,os.appendChild(e)),r=wd(e),l?i.display=l:Mr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):os.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Lc=function(e,t,n,i,r,o){var a=e._gsap,l=r||Mu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=l[0],v=l[1],g=l[2],f=l[3],p=l[4],S=l[5],M=t.split(" "),b=parseFloat(M[0])||0,P=parseFloat(M[1])||0,E,T,y,x;n?l!==ho&&(T=m*f-v*g)&&(y=b*(f/T)+P*(-g/T)+(g*S-f*p)/T,x=b*(-v/T)+P*(m/T)-(m*S-v*p)/T,b=y,P=x):(E=vp(e),b=E.x+(~M[0].indexOf("%")?b/100*E.width:b),P=E.y+(~(M[1]||M[0]).indexOf("%")?P/100*E.height:P)),i||i!==!1&&a.smooth?(p=b-c,S=P-u,a.xOffset=h+(p*m+S*g)-p,a.yOffset=d+(p*v+S*f)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=P,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[rn]="0px 0px",o&&(ki(o,a,"xOrigin",c,b),ki(o,a,"yOrigin",u,P),ki(o,a,"xOffset",h,a.xOffset),ki(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+P)},fo=function(e,t){var n=e._gsap||new rp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qn(e,rn)||"0",u,h,d,m,v,g,f,p,S,M,b,P,E,T,y,x,_,A,I,F,B,H,O,V,X,ne,ee,de,Te,De,J,oe;return u=h=d=g=f=p=S=M=b=0,m=v=1,n.svg=!!(e.getCTM&&xp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),i.scale=i.rotate=i.translate="none"),T=Mu(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Lc(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,T)),P=n.xOrigin||0,E=n.yOrigin||0,T!==ho&&(A=T[0],I=T[1],F=T[2],B=T[3],u=H=T[4],h=O=T[5],T.length===6?(m=Math.sqrt(A*A+I*I),v=Math.sqrt(B*B+F*F),g=A||I?Yr(I,A)*ar:0,S=F||B?Yr(F,B)*ar+g:0,S&&(v*=Math.abs(Math.cos(S*as))),n.svg&&(u-=P-(P*A+E*F),h-=E-(P*I+E*B))):(oe=T[6],De=T[7],ee=T[8],de=T[9],Te=T[10],J=T[11],u=T[12],h=T[13],d=T[14],y=Yr(oe,Te),f=y*ar,y&&(x=Math.cos(-y),_=Math.sin(-y),V=H*x+ee*_,X=O*x+de*_,ne=oe*x+Te*_,ee=H*-_+ee*x,de=O*-_+de*x,Te=oe*-_+Te*x,J=De*-_+J*x,H=V,O=X,oe=ne),y=Yr(-F,Te),p=y*ar,y&&(x=Math.cos(-y),_=Math.sin(-y),V=A*x-ee*_,X=I*x-de*_,ne=F*x-Te*_,J=B*_+J*x,A=V,I=X,F=ne),y=Yr(I,A),g=y*ar,y&&(x=Math.cos(y),_=Math.sin(y),V=A*x+I*_,X=H*x+O*_,I=I*x-A*_,O=O*x-H*_,A=V,H=X),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,p=180-p),m=vt(Math.sqrt(A*A+I*I+F*F)),v=vt(Math.sqrt(O*O+oe*oe)),y=Yr(H,O),S=Math.abs(y)>2e-4?y*ar:0,b=J?1/(J<0?-J:J):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Mp(qn(e,dt)),V&&e.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=vt(m),n.scaleY=vt(v),n.rotation=vt(g)+a,n.rotationX=vt(f)+a,n.rotationY=vt(p)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[rn]=Ea(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Jb:_p?Sp:Zb,n.uncache=0,n},Ea=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ll=function(e,t,n){var i=zt(t);return vt(parseFloat(t)+parseFloat(Xi(e,"x",n+"px",i)))+i},Zb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sp(e,t)},rr="0deg",Vs="0px",sr=") ",Sp=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,v=n.scaleX,g=n.scaleY,f=n.transformPerspective,p=n.force3D,S=n.target,M=n.zOrigin,b="",P=p==="auto"&&e&&e!==1||p===!0;if(M&&(h!==rr||u!==rr)){var E=parseFloat(u)*as,T=Math.sin(E),y=Math.cos(E),x;E=parseFloat(h)*as,x=Math.cos(E),o=Ll(S,o,T*x*-M),a=Ll(S,a,-Math.sin(E)*-M),l=Ll(S,l,y*x*-M+M)}f!==Vs&&(b+="perspective("+f+sr),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(P||o!==Vs||a!==Vs||l!==Vs)&&(b+=l!==Vs||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+sr),c!==rr&&(b+="rotate("+c+sr),u!==rr&&(b+="rotateY("+u+sr),h!==rr&&(b+="rotateX("+h+sr),(d!==rr||m!==rr)&&(b+="skew("+d+", "+m+sr),(v!==1||g!==1)&&(b+="scale("+v+", "+g+sr),S.style[dt]=b||"translate(0, 0)"},Jb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,v=n.xOrigin,g=n.yOrigin,f=n.xOffset,p=n.yOffset,S=n.forceCSS,M=parseFloat(o),b=parseFloat(a),P,E,T,y,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=as,c*=as,P=Math.cos(l)*h,E=Math.sin(l)*h,T=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=as,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,y*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),P*=x,E*=x)),P=vt(P),E=vt(E),T=vt(T),y=vt(y)):(P=h,y=d,E=T=0),(M&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(M=Xi(m,"x",o,"px"),b=Xi(m,"y",a,"px")),(v||g||f||p)&&(M=vt(M+v-(v*P+g*T)+f),b=vt(b+g-(v*E+g*y)+p)),(i||r)&&(x=m.getBBox(),M=vt(M+i/100*x.width),b=vt(b+r/100*x.height)),x="matrix("+P+","+E+","+T+","+y+","+M+","+b+")",m.setAttribute("transform",x),S&&(m.style[dt]=x)},Qb=function(e,t,n,i,r){var o=360,a=Dt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ar:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Sd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Sd)%o-~~(c/o)*o)),e._pt=d=new nn(e._pt,t,n,i,c,Ob),d.e=u,d.u="deg",e._props.push(n),d},Rd=function(e,t){for(var n in t)e[n]=t[n];return e},eE=function(e,t,n){var i=Rd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,m,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[dt]=t,a=fo(n,1),Mr(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],o[dt]=t,a=fo(n,1),o[dt]=c);for(l in xi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(m=zt(c),v=zt(u),h=m!==v?Xi(n,l,c,v):parseFloat(c),d=parseFloat(u),e._pt=new nn(e._pt,a,l,h,d-h,Rc),e._pt.u=v||0,e._props.push(l));Rd(a,i)};tn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ba[e>1?"border"+s:s]=function(a,l,c,u,h){var d,m;if(arguments.length<4)return d=o.map(function(v){return hi(a,v,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(v,g){return m[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,m,h)}});var bp={name:"css",register:Pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,m,v,g,f,p,S,M,b,P,E,T,y;vu||Pc(),this.styles=this.styles||gp(e),y=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(hn[g]&&sp(g,t,n,i,e,r)))){if(m=typeof u,v=ba[g],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=lo(u)),v)v(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(f=zt(c),p=zt(u)),p?f!==p&&(c=Xi(e,g,c,p)+p):f&&(u+=f),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),y.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Dt(c)&&~c.indexOf("random(")&&(c=lo(c)),zt(c+"")||c==="auto"||(c+=pn.units[g]||zt(hi(e,g))||""),(c+"").charAt(1)==="="&&(c=hi(e,g))):c=hi(e,g),d=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in jn&&(g==="autoAlpha"&&(d===1&&hi(e,"visibility")==="hidden"&&h&&(d=0),y.push("visibility",0,a.visibility),ki(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=jn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in xi,M){if(this.styles.save(g),b||(P=e._gsap,P.renderTransform&&!t.parseTransform||fo(e,t.parseTransform),E=t.smoothOrigin!==!1&&P.smooth,b=this._pt=new nn(this._pt,a,dt,0,1,P.renderTransform,P,0,-1),b.dep=1),g==="scale")this._pt=new nn(this._pt,P,"scaleY",P.scaleY,(S?ss(P.scaleY,S+h):h)-P.scaleY||0,Rc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){y.push(rn,0,a[rn]),u=Kb(u),P.svg?Lc(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==P.zOrigin&&ki(this,P,"zOrigin",P.zOrigin,p),ki(this,a,g,Ea(c),Ea(u)));continue}else if(g==="svgOrigin"){Lc(e,u,1,E,0,this);continue}else if(g in yp){Qb(this,P,g,d,S?ss(d,S+u):u);continue}else if(g==="smoothOrigin"){ki(this,P,"smooth",P.smooth,u);continue}else if(g==="force3D"){P[g]=u;continue}else if(g==="transform"){eE(this,u,e);continue}}else g in a||(g=Ss(g)||g);if(M||(h||h===0)&&(d||d===0)&&!Ub.test(u)&&g in a)f=(c+"").substr((d+"").length),h||(h=0),p=zt(u)||(g in pn.units?pn.units[g]:f),f!==p&&(d=Xi(e,g,c,p)),this._pt=new nn(this._pt,M?P:a,g,d,(S?ss(d,S+h):h)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Bb:Rc),this._pt.u=p||0,f!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Fb);else if(g in a)qb.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){cu(g,u);continue}M||(g in a?y.push(g,0,a[g]):y.push(g,1,c||e[g])),o.push(g)}}T&&hp(this)},render:function(e,t){if(t.tween._time||!xu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hi,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in xi&&t!==rn&&(e._gsap.x||hi(e,"x"))?n&&Md===n?t==="scale"?Vb:Hb:(Md=n||{})&&(t==="scale"?Gb:Wb):e.style&&!ou(e.style[t])?kb:~t.indexOf("-")?zb:gu(e,t)},core:{_removeProperty:Mr,_getMatrix:Mu}};sn.utils.checkPrefix=Ss;sn.core.getStyleSaver=gp;(function(s,e,t,n){var i=tn(s+","+e+","+t,function(r){xi[r]=1});tn(e,function(r){pn.units[r]="deg",yp[r]=1}),jn[i[13]]=s+","+e,tn(n,function(r){var o=r.split(":");jn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){pn.units[s]="px"});sn.registerPlugin(bp);var Ic=sn.registerPlugin(bp)||sn;Ic.core.Tween;var Ep=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v){\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getWobble(vec3 position) {\r
    vec3 warpedPosition = position;\r
    warpedPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency\r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency,   
        uTime * uTimeFrequency           
    )) * uStrength;\r
}

void main() {\r
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float wobble = getWobble(csm_Position);\r
    csm_Position += wobble * normal;\r
    positionA += getWobble(positionA) * normal;\r
    positionB += getWobble(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    vWobble = wobble / uStrength;\r
}`,tE=`uniform vec3 uColorA;\r
uniform vec3 uColorB;

varying float vWobble;

void main() {\r
    \r
    float colorMix = smoothstep(- 1.0, 1.0, vWobble);\r
    csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

    
    
    

    
    csm_Roughness = 0.5 - colorMix;\r
}`,Tp=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v){\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getWobble(vec3 position) {\r
    vec3 warpedPosition = position;\r
    warpedPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency\r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency,   
        uTime * uTimeFrequency           
    )) * uStrength;\r
}

void main() {\r
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float wobble = getWobble(csm_Position);\r
    csm_Position += wobble * normal;\r
    positionA += getWobble(positionA) * normal;\r
    positionB += getWobble(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    vWobble = wobble / uStrength;\r
}`,nE=`uniform vec3 uColorC;\r
uniform vec3 uColorD;

varying float vWobble;

void main() {\r
    \r
    float colorMix = smoothstep(- 1.0, 1.0, vWobble);\r
    csm_DiffuseColor.rgb = mix(uColorC, uColorD, colorMix);\r

    
    csm_Roughness = 1.0 - colorMix;\r
}`,Ap=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;\r
}

float simplexNoise4d(vec4 v){\r
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );\r
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );\r
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );\r
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); \r
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute( permute( permute( permute (\r
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getWobble(vec3 position) {\r
    vec3 warpedPosition = position;\r
    warpedPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency\r
    )) * uWarpStrength;

    return simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency,   
        uTime * uTimeFrequency           
    )) * uStrength;\r
}

void main() {\r
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent * shift;

    
    float wobble = getWobble(csm_Position);\r
    csm_Position += wobble * normal;\r
    positionA += getWobble(positionA) * normal;\r
    positionB += getWobble(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    vWobble = wobble / uStrength;\r
}`,iE=`uniform vec3 uColorE;\r
uniform vec3 uColorF;

varying float vWobble;

void main() {\r
    \r
    float colorMix = smoothstep(- 1.0, 1.0, vWobble);\r
    csm_DiffuseColor.rgb = mix(uColorE, uColorF, colorMix);

    
    csm_Metalness = step(0.15, vWobble);\r
    csm_Roughness = 0.2 - colorMix;

    
    
}`,rE=`void main()\r
{\r
    gl_Position = vec4(position, 1.0);\r
}`,sE=`uniform float uAlpha;

void main()\r
{\r
    gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha); \r
}`;const Cd=document.querySelector(".loading"),Su=new gf(()=>{Ic.delayedCall(1,()=>{Cd.style.display="none",Ic.to(Cp.uniforms.uAlpha,{duration:1.5,value:0,delay:.5}),window.setTimeout(()=>{dE()},2e3),window.setTimeout(()=>{Ni&&(Ni.visible=!0),Qs&&(Qs.visible=!0),ur&&(ur.visible=!0),Bn&&(Bn.visible=!0),ji&&(ji.visible=!0)},500)})},(s,e,t)=>{Cd.style.display="block"}),oE=new jy(Su),wp=new CM(Su);wp.setDecoderPath("./draco/");const bu=new qy(Su);bu.setDRACOLoader(wp);const ct={},Rp=document.querySelector("canvas.webgl"),Jn=new ry,aE=new Es(2,2,1,1),Cp=new _i({vertexShader:rE,fragmentShader:sE,uniforms:{uAlpha:new et(1)},transparent:!0,depthWrite:!1}),lE=new Ht(aE,Cp);Jn.add(lE);oE.load("./Environment/artist_workshop_2k.hdr",s=>{s.mapping=ca,Jn.background=s,Jn.environment=s});ct.colorA="#00ffee";ct.colorB="#00457a";const Ln={uTime:new et(0),uPositionFrequency:new et(.382),uTimeFrequency:new et(.382),uStrength:new et(.496),uWarpPositionFrequency:new et(.691),uWarpTimeFrequency:new et(.496),uWarpStrength:new et(1.048),uColorA:new et(new Ie(ct.colorA)),uColorB:new et(new Ie(ct.colorB))},qr=new Rs({baseMaterial:Kt,vertexShader:Ep,fragmentShader:tE,uniforms:Ln,silent:!0,metalness:1,roughness:.5,color:"#ffffff",transmission:0,ior:1.5,thickness:1.5,transparent:!0,wireframe:!1}),Di=new Kt({metalness:1,roughness:0,color:"#ffffff",transmission:0,ior:1.5,thickness:1.3,transparent:!0,wireframe:!1}),cE=new Rs({baseMaterial:Pa,vertexShader:Ep,uniforms:Ln,silent:!0,depthPacking:wa});ct.colorC="#a30000";ct.colorD="#a600ff";const In={uTime:new et(0),uPositionFrequency:new et(.804),uTimeFrequency:new et(1.177),uStrength:new et(.577),uWarpPositionFrequency:new et(.626),uWarpTimeFrequency:new et(1.388),uWarpStrength:new et(.707),uColorC:new et(new Ie(ct.colorC)),uColorD:new et(new Ie(ct.colorD))},Kr=new Rs({baseMaterial:Kt,vertexShader:Tp,fragmentShader:nE,uniforms:In,silent:!0,metalness:0,roughness:1,color:"#ffffff",transmission:0,ior:1.5,thickness:1.5,transparent:!0,wireframe:!1}),uE=new Rs({baseMaterial:Pa,vertexShader:Tp,uniforms:In,silent:!0,depthPacking:wa});ct.colorE="#fae500";ct.colorF="#ff0033";const Dn={uTime:new et(0),uPositionFrequency:new et(.528),uTimeFrequency:new et(.82),uStrength:new et(.253),uWarpPositionFrequency:new et(.35),uWarpTimeFrequency:new et(.577),uWarpStrength:new et(.853),uColorE:new et(new Ie(ct.colorE)),uColorF:new et(new Ie(ct.colorF))},$r=new Rs({baseMaterial:Kt,vertexShader:Ap,fragmentShader:iE,uniforms:Dn,silent:!0,metalness:0,roughness:0,color:"#ffffff",transmission:.418,ior:10,thickness:3.778,transparent:!0,wireframe:!1}),hE=new Rs({baseMaterial:Pa,vertexShader:Ap,uniforms:Dn,silent:!0,depthPacking:wa});let Ta=new Jc(2.5,50);Ta=Yy(Ta);Ta.computeTangents();const ji=new Ht(Ta,Kr);ji.customDepthMaterial=uE;ji.receiveShadow=!0;ji.castShadow=!0;ji.position.set(1,.5,0);ji.visible=!1;Jn.add(ji);let Ni,Qs,ur;bu.load("./Model/tv.glb",s=>{const e=s.scene;e.position.set(9,-2,0),Jn.add(e),Ni=e.children.find(t=>t.name==="TV"),Ni.receiveShadow=!0,Ni.castShadow=!0,Ni.material=qr,Ni.customDepthMaterial=cE,Ni.visible=!1,Qs=e.children.find(t=>t.name==="Screen"),Qs.material=Di,Qs.visible=!1,ur=e.children.find(t=>t.name==="Snickers"),ur.receiveShadow=!0,ur.castShadow=!0,ur.material=Di,ur.visible=!1});let Bn;bu.load("./Model/monkey.glb",s=>{Bn=s.scene.children[0],Bn.receiveShadow=!0,Bn.castShadow=!0,Bn.material=$r,Bn.customDepthMaterial=hE,Bn.visible=!1,Bn.position.set(-8.5,-.5,0),Jn.add(Bn)});const Nn=new Ht(new Es(25,25,25),new Kt({metalness:.286,roughness:0,color:"#ffffff",transmission:.188,ior:1.3,thickness:3.282,transparent:!0,wireframe:!1}));Nn.receiveShadow=!0;Nn.rotation.y=Math.PI;Nn.position.y=-3.5;Nn.position.z=6.5;Jn.add(Nn);const Ki=new _f("#ffffff",5);Ki.castShadow=!0;Ki.shadow.mapSize.set(1024,1024);Ki.shadow.camera.far=20;Ki.shadow.camera.left=-12;Ki.shadow.camera.right=12;Ki.shadow.normalBias=.05;Ki.position.set(.25,2,-3.75);Jn.add(Ki);function dE(){const s=new ru({width:325}),e=s.addFolder("Plane");e.close(),e.add(Nn.material,"metalness",0,1,.001),e.add(Nn.material,"roughness",0,1,.001),e.add(Nn.material,"transmission",0,1,.001),e.add(Nn.material,"ior",0,2,.001),e.add(Nn.material,"thickness",0,10,.001),e.addColor(Nn.material,"color");const t=s.addFolder("TV");t.addColor(ct,"colorA").onChange(()=>Ln.uColorA.value.set(ct.colorA)),t.addColor(ct,"colorB").onChange(()=>Ln.uColorB.value.set(ct.colorB)),t.add(qr,"metalness",0,1,.001),t.add(qr,"roughness",0,1,.001),t.add(qr,"transmission",0,1,.001),t.add(qr,"ior",0,10,.001),t.add(qr,"thickness",0,10,.001),t.add(Ln.uPositionFrequency,"value",0,2,.001).name("Position Frequency"),t.add(Ln.uTimeFrequency,"value",0,2,.001).name("Time Frequency"),t.add(Ln.uStrength,"value",0,2,.001).name("Strength"),t.add(Ln.uWarpPositionFrequency,"value",0,2,.001).name("WarpPosition Frequency"),t.add(Ln.uWarpTimeFrequency,"value",0,2,.001).name("WarpTime Frequency"),t.add(Ln.uWarpStrength,"value",0,2,.001).name("Warp Strength");const n=t.addFolder("Base TV");n.add(Di,"metalness",0,1,.001),n.add(Di,"roughness",0,1,.001),n.add(Di,"transmission",0,1,.001),n.add(Di,"ior",0,10,.001),n.add(Di,"thickness",0,10,.001),n.addColor(Di,"color"),n.close();const i=s.addFolder("Sphere");i.close(),i.addColor(ct,"colorC").onChange(()=>In.uColorC.value.set(ct.colorC)).name("ColorA"),i.addColor(ct,"colorD").onChange(()=>In.uColorD.value.set(ct.colorD)).name("ColorB"),i.add(Kr,"metalness",0,1,.001),i.add(Kr,"roughness",0,1,.001),i.add(Kr,"transmission",0,1,.001),i.add(Kr,"ior",0,10,.001),i.add(Kr,"thickness",0,10,.001),i.add(In.uPositionFrequency,"value",0,2,.001).name("Position Frequency"),i.add(In.uTimeFrequency,"value",0,2,.001).name("Time Frequency"),i.add(In.uStrength,"value",0,2,.001).name("Strength"),i.add(In.uWarpPositionFrequency,"value",0,2,.001).name("WarpPosition Frequency"),i.add(In.uWarpTimeFrequency,"value",0,2,.001).name("WarpTime Frequency"),i.add(In.uWarpStrength,"value",0,2,.001).name("Warp Strength");const r=s.addFolder("Monkey");r.close(),r.addColor(ct,"colorE").onChange(()=>Dn.uColorE.value.set(ct.colorE)).name("ColorA"),r.addColor(ct,"colorF").onChange(()=>Dn.uColorF.value.set(ct.colorF)).name("ColorA"),r.add($r,"metalness",0,1,.001),r.add($r,"roughness",0,1,.001),r.add($r,"transmission",0,1,.001),r.add($r,"ior",0,10,.001),r.add($r,"thickness",0,10,.001),r.add(Dn.uPositionFrequency,"value",0,2,.001).name("Position Frequency"),r.add(Dn.uTimeFrequency,"value",0,2,.001).name("Time Frequency"),r.add(Dn.uStrength,"value",0,2,.001).name("Strength"),r.add(Dn.uWarpPositionFrequency,"value",0,2,.001).name("WarpPosition Frequency"),r.add(Dn.uWarpTimeFrequency,"value",0,2,.001).name("WarpTime Frequency"),r.add(Dn.uWarpStrength,"value",0,2,.001).name("Warp Strength")}const un={width:window.innerWidth,height:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,2)};window.addEventListener("resize",()=>{un.width=window.innerWidth,un.height=window.innerHeight,un.pixelRatio=Math.min(window.devicePixelRatio,2),bs.aspect=un.width/un.height,bs.updateProjectionMatrix(),yi.setSize(un.width,un.height),yi.setPixelRatio(un.pixelRatio)});const bs=new jt(35,un.width/un.height,.1,100);bs.position.set(25,-3,-22);Jn.add(bs);const Pp=new Xy(bs,Rp);Pp.enableDamping=!0;const yi=new iy({canvas:Rp,antialias:!0});yi.shadowMap.enabled=!0;yi.shadowMap.type=Ld;yi.toneMapping=Dd;yi.toneMappingExposure=1;yi.setSize(un.width,un.height);yi.setPixelRatio(un.pixelRatio);const fE=new Ny,Lp=()=>{const s=fE.getElapsedTime();Ln.uTime.value=s,In.uTime.value=s,Dn.uTime.value=s,Pp.update(),yi.render(Jn,bs),window.requestAnimationFrame(Lp)};Lp();
//# sourceMappingURL=index-BMg2Gi4J.js.map
