import './polyfills.server.mjs';
import{l as a}from"./chunk-Q7XZOZQH.mjs";import{Rb as d,T as n,Ta as s,Ua as m,aa as r,ab as p,ba as i}from"./chunk-XWHZHEVB.mjs";import"./chunk-5XUXGTUW.mjs";var c=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-matricula-students"]],decls:2,vars:0,template:function(e,g){e&1&&(s(0,"p"),p(1,"matricula-students works!"),m())}})}return t})();var f=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-resgister-students"]],decls:2,vars:0,template:function(e,g){e&1&&(s(0,"p"),p(1,"resgister-students works!"),m())}})}return t})();var M=[{path:"",children:[{path:"matricula",component:c},{path:"register-students",component:f},{path:"**",redirectTo:"register-students"}]}],l=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=i({type:t});static \u0275inj=n({imports:[a.forChild(M),a]})}return t})();var T=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=i({type:t});static \u0275inj=n({imports:[d,l]})}return t})();export{T as StudentsModule};