import{q as C,o as m,c as T,L as r,P as i,u as p,Q as w,a as u,S as g,J as de,r as L,w as R,f as j,T as ce,M as B,b3 as _e,b2 as ue,aK as fe,I as me,V as S,R as D,H as J,Y as se,ad as P,a8 as pe,ah as he}from"./@vue-db218992.js";import{E as W,a as ge,b as we,c as ee,d as ye,e as ve,f as be,g as $e,h as Fe,i as Ie,j as ke,k as Te,l as ae,v as ne}from"./element-plus-10897561.js";import{p as M,H as ie,o as ze,a as Le,D as Se}from"./@lark-base-open-c2afdc6b.js";import{m as Ne,p as xe,t as Ve,i as O,g as De,q as Ce,w as Me,r as Be}from"./@element-plus-1e314fb2.js";import{F as Ee}from"./file-saver-f4091ce1.js";import{J as Pe}from"./jszip-f4b7e1d9.js";import{a as Ae}from"./axios-23217866.js";import{c as Ue}from"./vue-i18n-23535bf7.js";import{t as Q}from"./await-to-js-94a677b8.js";import{d as Ke}from"./vuedraggable-765fd565.js";import"./lodash-es-c98ff853.js";import"./async-validator-604317c1.js";import"./@vueuse-51b2a259.js";import"./@ctrl-aa1b1e70.js";import"./@popperjs-535f1f87.js";import"./escape-html-7294f491.js";import"./normalize-wheel-es-5e9aec41.js";import"./dayjs-81338e0f.js";import"./@intlify-f1f31afd.js";import"./vue-1995df43.js";import"./sortablejs-9437a160.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};Oe();const Re=(a,t)=>{let l;return(...o)=>{clearTimeout(l),l=setTimeout(()=>{a(...o)},t)}},oe=a=>a>=1073741824?(a/1073741824).toFixed(2)+"G":a>=1048576?(a/1048576).toFixed(2)+"M":a>=1024?(a/1024).toFixed(2)+"K":a.toFixed(2)+"B",X=a=>a.replace(/[\n\t\r]/g,"").replace(/\//g,"-"),qe=a=>{var t,l;return a?Array.isArray(a)&&a.length?((t=a[0])==null?void 0:t.text)||((l=a[0])==null?void 0:l.name):typeof a=="object"?a.text||a.name:a:""},je=(a,t,l="")=>{const o=a.split(".").pop();return t?`${t}.${o}`:`${l}.${o}`},Ge=(a,t)=>{const l=[];for(a.sort((o,e)=>e.size-o.size);a.length>0;){const o=[];let e=0;for(let s=0;s<a.length;s++)e+a[s].size<=t&&(o.push(a[s]),e+=a[s].size,a.splice(s,1),s--);l.push(o)}return l},K="___HEADER___",te="___FILE_ORIGINAL_NAME___";const G=(a,t)=>{const l=a.__vccOpts||a;for(const[o,e]of t)l[o]=e;return l},He={__name:"SelectValue",props:{name:{type:String,default:""},isHeader:{type:Boolean,default:!1},isDrag:{type:Boolean,default:!1}},setup(a){const t=a,l=C(()=>t.name.includes(K)),o=C(()=>t.name===te);return(e,s)=>{const n=W;return m(),T("div",{class:de(["values",{drag:t.isDrag}])},[r(n,null,{default:i(()=>[p(l)?(m(),w(p(Ne),{key:0,style:{color:"red"}})):p(o)?(m(),w(p(xe),{key:1,style:{color:"green"}})):(m(),w(p(Ve),{key:2,style:{color:"blue"}}))]),_:1}),u("span",null,g(p(o)?"\u9644\u4EF6\u539F\u59CB\u540D\u79F0":t.name.replace(p(K),"")),1)],2)}}},Ze=G(He,[["__scopeId","data-v-163ad53e"]]);const le=a=>(_e("data-v-2f309e18"),a=a(),ue(),a),Je={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",style:{display:"none"}},Qe=fe('<symbol id="wave" data-v-2f309e18><path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" data-v-2f309e18></path><path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" data-v-2f309e18></path><path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" data-v-2f309e18></path><path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" data-v-2f309e18></path></symbol>',1),Xe=[Qe],Ye={class:"box"},We={class:"percent"},et={class:"percentNum",id:"count"},tt=le(()=>u("div",{class:"percentB"},"%",-1)),lt=le(()=>u("svg",{viewBox:"0 0 560 20",class:"water_wave water_wave_back"},[u("use",{"xlink:href":"#wave"})],-1)),ot=le(()=>u("svg",{viewBox:"0 0 560 20",class:"water_wave water_wave_front"},[u("use",{"xlink:href":"#wave"})],-1)),st=[lt,ot],at={__name:"ProgressCircle",props:{percent:{type:Number,default:0}},setup(a){const t=a,l=L(0);R(()=>t.percent,e=>{l.value=e,l.value>=100?l.value=100:l.value});const o=C(()=>({transform:`translate(0, ${100-l.value}%)`}));return j(()=>{l.value=t.percent}),(e,s)=>(m(),T(B,null,[(m(),T("svg",Je,Xe)),u("div",Ye,[u("div",We,[u("div",et,g(l.value),1),tt]),u("div",{id:"water",class:"water",style:ce(p(o))},st,4)])],64))}},nt=G(at,[["__scopeId","data-v-2f309e18"]]),it="Usage Instructions",rt="It is recommended to use Chrome browser to download, as downloading from other browsers may encounter some abnormal issues",dt="Call the browser's native download function. If the browser prompts to download multiple files, please select 'Allow'",ct="To download attachments, ensure that you have permission to do so",_t="When downloading files as a zip, if the attachments are too large, they will be downloaded separately to prevent browser crashes",ut="The download path is the browser's default download path. During download, the original file name of the attachment will be used. If there are duplicate names, the browser will automatically add a suffix for differentiation",ft="When adding data tables, views, or fields to multidimensional tables, please rerun this tool",mt="The Zip packaging function uses the JSZip plugin. The experience with large data responses is slow. Currently, it is only used for code communication and learning. For large files, please use the individual download mode.",pt="Refresh Form",ht="Data Table Column",gt="View Column",wt="Attachment Fields",yt="File Naming Method",vt="File Name Field",bt="Download Method",$t="First Directory",Ft="Second Directory",It="Download",kt="File Download",Tt="Download Progress",zt="Download Details",Lt="Complete",St="Select Data Table",Nt="Select View",xt="Select Attachment Fields",Vt="Select File Naming Method",Dt="Select File Name Field",Ct="Select Download Method",Mt="Folder Classification",Bt="You can download by folder classification based on the selected field",Et="Original File Name",Pt="Select from Table Fields",At="Download Individual Files",Ut="Zip Download",Kt="Yes",Ot="No",Rt="Select First Directory",qt="Select Second Directory",jt="Fetching file information...",Gt="There are no files to download currently. Please confirm.",Ht="There are fileQty files pending download.",Zt="Calculating the number of files to download... fileQty files. If it's slow, please refresh the page and try again.",Jt="Preparing to download files",Qt="Total file size",Xt="File packing in progress: percentage% completed.",Yt="Failed to download file_name, error message: error_message",Wt="Downloading file index, current progress percentage%",el="The current file size is about to exceed max_size GB. To avoid plugin crashes, we will first download it to your local storage before proceeding with subsequent downloads...",tl="unclassified",ll={usage_instructions:it,notice_1:rt,notice_2:dt,notice_3:ct,notice_4:_t,notice_5:ut,notice_6:ft,notice_7:mt,refresh_form:pt,data_table_column:ht,view_column:gt,attachment_fields:wt,file_naming_method:yt,file_name_field:vt,download_method:bt,first_directory:$t,second_directory:Ft,download:It,file_download:kt,download_progress:Tt,download_details:zt,complete:Lt,select_data_table:St,select_view:Nt,select_attachment_fields:xt,select_file_naming_method:Vt,select_file_name_field:Dt,select_download_method:Ct,folder_classification:Mt,folder_classification_hint:Bt,original_file_name:Et,select_from_table_fields:Pt,download_individual_files:At,zip_download:Ut,yes:Kt,no:Ot,select_first_directory:Rt,select_second_directory:qt,fetching_file_info_message:jt,no_files_to_download_message:Gt,files_pending_download_message:Ht,calculating_files_message:Zt,preparing_to_download_files_message:Jt,total_file_size_message:Qt,file_packing_progress_message:Xt,file_download_failed_message:Yt,downloading_file_progress:Wt,file_size_warning_message:el,uncategorized:tl,undefined:"undefined"},ol="\u4F7F\u7528\u987B\u77E5",sl="\u63A8\u8350\u4F7F\u7528chrome\u6D4F\u89C8\u5668\u4E0B\u8F7D\uFF0C\u5176\u4ED6\u6D4F\u89C8\u5668\u4E0B\u8F7D\u4F1A\u51FA\u73B0\u4E00\u4E9B\u5F02\u5E38\u95EE\u9898",al="\u8C03\u7528\u6D4F\u89C8\u5668\u539F\u751F\u4E0B\u8F7D\u529F\u80FD\uFF0C\u82E5\u6D4F\u89C8\u5668\u63D0\u793A\u4E0B\u8F7D\u591A\u4E2A\u6587\u4EF6\u65F6\uFF0C\u8BF7\u9009\u62E9\u300C\u5141\u8BB8\u300D",nl="\u8981\u6709\u9644\u4EF6\u4E0B\u8F7D\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u8BF7\u786E\u4FDD\u62E5\u6709\u6743\u9650",il="\u6587\u4EF6\u4E0B\u8F7D\u65B9\u5F0F\u4E3Azip\u65F6\uFF0C\u82E5\u9644\u4EF6\u8FC7\u5927\uFF0C\u5219\u4F1A\u9ED8\u8BA4\u5206\u5F00\u4E0B\u8F7D\uFF0C\u907F\u514D\u6D4F\u89C8\u5668\u5D29\u6E83",rl="\u4E0B\u8F7D\u8DEF\u5F84\u4E3A\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0B\u8F7D\u8DEF\u5F84\uFF1B\u4E0B\u8F7D\u65F6\uFF0C\u4F7F\u7528\u9644\u4EF6\u7684\u539F\u59CB\u6587\u4EF6\u540D\uFF0C\u82E5\u51FA\u73B0\u91CD\u540D\uFF0C\u6D4F\u89C8\u5668\u5C06\u81EA\u52A8\u6DFB\u52A0\u540E\u7F00\u505A\u533A\u5206",dl="\u591A\u7EF4\u8868\u683C\u65B0\u589E\u6570\u636E\u8868\u3001\u89C6\u56FE\u6216\u5B57\u6BB5\u65F6\uFF0C\u8BF7\u91CD\u65B0\u8FD0\u884C\u672C\u5DE5\u5177",cl="Zip\u6253\u5305\u529F\u80FD\u4F7F\u7528\u4E86JSZip\u63D2\u4EF6\uFF0C\u5927\u6570\u636E\u54CD\u5E94\u4F53\u9A8C\u8F83\u6162\uFF0C\u5F53\u524D\u4EC5\u4F5C\u4EE3\u7801\u4EA4\u6D41\u5B66\u4E60\u7528\u3002\u5927\u6587\u4EF6\u65F6\uFF0C\u8BF7\u4F7F\u7528\u9010\u4E2A\u4E0B\u8F7D\u6A21\u5F0F\u3002",_l="\u5237\u65B0\u8868\u5355",ul="\u6570\u636E\u8868\u5217",fl="\u89C6\u56FE\u5217",ml="\u9644\u4EF6\u5B57\u6BB5",pl="\u6587\u4EF6\u547D\u540D\u65B9\u5F0F",hl="\u5B57\u6BB5\u5217",gl="\u4E0B\u8F7D\u65B9\u5F0F",wl="\u4E00\u7EA7\u76EE\u5F55",yl="\u4E8C\u7EA7\u76EE\u5F55",vl="\u4E0B\u8F7D",bl="\u6587\u4EF6\u4E0B\u8F7D",$l="\u4E0B\u8F7D\u603B\u8FDB\u5EA6",Fl="\u4E0B\u8F7D\u8BE6\u60C5",Il="\u5B8C\u6210",kl="\u8BF7\u9009\u62E9\u6570\u636E\u8868",Tl="\u8BF7\u9009\u62E9\u6570\u636E\u8868",zl="\u8BF7\u9009\u62E9\u9644\u4EF6\u5B57\u6BB5",Ll="\u8BF7\u9009\u62E9\u9644\u4EF6\u5B57\u6BB5",Sl="\u8BF7\u9009\u62E9\u6587\u4EF6\u547D\u540D\u5B57\u6BB5",Nl="\u8BF7\u9009\u62E9\u4E0B\u8F7D\u65B9\u5F0F",xl="\u6587\u4EF6\u5939\u5206\u7C7B",Vl="\u53EF\u6839\u636E\u6240\u9009\u5B57\u6BB5\u8FDB\u884C\u4E00\u7EA7\u3001\u4E8C\u7EA7\u6587\u4EF6\u5939\u5206\u7C7B\u4E0B\u8F7D",Dl="\u539F\u6587\u4EF6\u540D\u79F0",Cl="\u4ECE\u8868\u5B57\u6BB5\u9009\u62E9",Ml="\u9010\u4E2A\u6587\u4EF6\u4E0B\u8F7D",Bl="zip\u6253\u5305\u4E0B\u8F7D",El="\u662F",Pl="\u5426",Al="\u8BF7\u9009\u62E9\u4E00\u7EA7\u76EE\u5F55",Ul="\u8BF7\u9009\u62E9\u4E8C\u7EA7\u76EE\u5F55",Kl="\u65E0\u7C7B\u522B",Ol="\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25",Rl="\u9519\u8BEF\u4FE1\u606F",ql="\u6B63\u5728\u4E0B\u8F7D\u7B2C index \u4E2A\u6587\u4EF6\uFF0C\u5F53\u524D\u6587\u4EF6\u4E0B\u8F7D\u8FDB\u5EA6percentage%",jl="file_name \u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1Aerror_message",Gl="\u6253\u5305\u6587\u4EF6\u751F\u6210\u4E2D\uFF1Apercentage%\u5DF2\u5B8C\u6210\u3002",Hl="\u5F53\u524D\u6587\u4EF6\u5927\u5C0F\u5373\u5C06\u8D85\u8FC7 max_size GB\uFF0C\u907F\u514D\u63D2\u4EF6\u5D29\u6E83\uFF0C\u51C6\u5907\u5148\u4E0B\u8F7D\u5230\u60A8\u672C\u5730\uFF0C\u518D\u8FDB\u884C\u540E\u7EED\u4E0B\u8F7D...",Zl="\u8BA1\u7B97\u5F85\u4E0B\u8F7D\u6587\u4EF6\u6570\u91CF\u2026\u2026 fileQty \u4E2A\u3002\u82E5\u8F83\u6162\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u65B0\u5C1D\u8BD5\u3002",Jl="\u5171\u8BA1\u6709 fileQty \u4E2A\u6587\u4EF6\u5F85\u4E0B\u8F7D\u3002",Ql="\u5F53\u524D\u65E0\u6587\u4EF6\u9700\u8981\u4E0B\u8F7D\uFF0C\u8BF7\u786E\u8BA4\u3002",Xl="\u6B63\u5728\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F...",Yl="\u5F53\u524D\u6587\u4EF6\u603B\u5927\u5C0F",Wl="\u51C6\u5907\u4E0B\u8F7D\u6587\u4EF6",eo={usage_instructions:ol,notice_1:sl,notice_2:al,notice_3:nl,notice_4:il,notice_5:rl,notice_6:dl,notice_7:cl,refresh_form:_l,data_table_column:ul,view_column:fl,attachment_fields:ml,file_naming_method:pl,file_name_field:hl,download_method:gl,first_directory:wl,second_directory:yl,download:vl,file_download:bl,download_progress:$l,download_details:Fl,complete:Il,select_data_table:kl,select_view:Tl,select_attachment_fields:zl,select_file_naming_method:Ll,select_file_name_field:Sl,select_download_method:Nl,folder_classification:xl,folder_classification_hint:Vl,original_file_name:Dl,select_from_table_fields:Cl,download_individual_files:Ml,zip_download:Bl,yes:El,no:Pl,select_first_directory:Al,select_second_directory:Ul,uncategorized:Kl,undefined:"\u672A\u5B9A\u4E49",file_download_failed:Ol,error_message:Rl,downloading_file_progress:ql,file_download_failed_message:jl,file_packing_progress_message:Gl,file_size_warning_message:Hl,calculating_files_message:Zl,files_pending_download_message:Jl,no_files_to_download_message:Ql,fetching_file_info_message:Xl,total_file_size_message:Yl,preparing_to_download_files_message:Wl},H=Ue({locale:"zh",allowComposition:!0,messages:{en:ll,zh:eo}});M.bridge.getLanguage().then(a=>{H.global.locale=a});class to{constructor(t=5){this.parallelCount=t,this.tasks=[],this.runningCount=0,this.resolveFinished=null,this.rejectFinished=null,this.errors=[]}add(t){return new Promise((l,o)=>{this.tasks.push({task:t,resolve:l,reject:o}),this._run()})}setTasks(t){t.forEach(l=>this.add(l))}finished(){return new Promise((t,l)=>{this.tasks.length===0&&this.runningCount===0?this.errors.length>0?l(this.errors):t():(this.resolveFinished=t,this.rejectFinished=l)})}_run(){for(;this.runningCount<this.parallelCount&&this.tasks.length>0;){const{task:t,resolve:l,reject:o}=this.tasks.shift();this.runningCount++,t().then(l).catch(e=>{this.errors.push(e),l()}).finally(()=>{this.runningCount--,this._checkFinished(),this._run()})}}_checkFinished(){this.tasks.length===0&&this.runningCount===0&&(this.errors.length>0?this.rejectFinished&&this.rejectFinished(this.errors):this.resolveFinished&&this.resolveFinished())}}const Y=H.global.t,lo=1,oo=lo*1024*1024*1024;class so{constructor(t){Object.keys(t).map(l=>{this[l]=t[l]}),this.oTable=null,this.currentTotalSize=0,this.nameSpace=new Set,this.zip=null,this.cellList=[]}async loopGetRecordIdList(t,l,o){const e={pageSize:200};o&&(e.pageToken=o);const[s,n]=await Q(t.getVisibleRecordIdListByPage(e));if(s)console.log(s);else{const{hasMore:f,recordIds:F,pageToken:h}=n;l.push(...F),f&&h&&await this.loopGetRecordIdList(t,l,h)}return l}async getCellsList(){const t=await this.oTable.getViewById(this.viewId),l=await this.loopGetRecordIdList(t,[]);let o=[];for(const e of this.attachmentFileds)for(const s of l){let n=await this.oTable.getCellValue(e,s);n?(n=n.map(f=>({...f,name:X(f.name),recordId:s,fieldId:e,path:"",fileUrl:""})),o.push(...n),this.emit("preding",n)):this.emit("preding")}return o=o.map((e,s)=>({...e,order:s+1})),o}on(t,l){return this[t+"Listeners"]||(this[t+"Listeners"]=[]),this[t+"Listeners"].push(l),this}emit(t,l){var o;(o=this[t+"Listeners"])==null||o.forEach(e=>{e(l)})}async setFileNames(){if(this.fileNameType!==1)return;const t=this.fileNameByField,l=async(n,f)=>(await Promise.all(f.map(h=>h.includes(K)?h.replace(K,""):h===te?n.name.split(".")[0]:this.oTable.getCellString(h,n.recordId)))).filter(h=>h).join(this.nameMark),o=(n,f)=>{if(f!==n.name){const F=je(n.name,f,Y("undefined"));n.name=X(F)}},e=this.cellList.map(n=>l(n,t));(await Promise.all(e)).forEach((n,f)=>{o(this.cellList[f],n)})}async setFolderPath(){if(this.downloadType!==1||!this.downloadTypeByFolders)return;const t=async(o,e)=>{const s=await this.oTable.getCellString(o,e);return X(qe(s))||Y("uncategorized")},l=async(o,e,s)=>{let n="";e&&(n+=`${await t(e,o.recordId)}/`),s&&(n+=`${await t(s,o.recordId)}/`),o.path=n};await Promise.all(this.cellList.map(o=>l(o,this.firstFolderKey,this.secondFolderKey)))}getUniqueFileName(t,l){const o=t.substring(t.lastIndexOf(".")),e=t.substring(0,t.lastIndexOf("."));let s=1;for(;this.nameSpace.has(l+t);)t=`${e}_${s}${o}`,s++;return this.nameSpace.add(l+t),t}async zipDownLoad(){const t=Ge(this.cellList,oo);for(const l of t){this.zip=new Pe,this.currentTotalSize=0;const o=new to(5),e=l.map(f=>async()=>await this.processFile(f));o.setTasks(e),await o.finished().catch(f=>{});const[s,n]=await Q(this.zip.generateAsync({type:"blob"},f=>{const F=f.percent.toFixed(2);this.emit("zip_progress",F)}));s?this.emit("max_size_warning"):(Ee.exports.saveAs(n,`${this.zipName}.zip`),this.zip=null)}}async getAttachmentUrl(t){const{token:l,fieldId:o,recordId:e,path:s,name:n}=t;t.name=this.getUniqueFileName(n,s),t.fileUrl=await this.oTable.getAttachmentUrl(l,o,e)}async processFile(t){await this.getAttachmentUrl(t);const l=await this.downloadFile(t);l&&this.zip.file(`${t.path}${t.name}`,l)}async sigleDownLoad(t){const l=t?[t]:this.cellList,o=async e=>{const s=await this.downloadFile(e);if(s){const n=URL.createObjectURL(s),f=document.createElement("a");f.setAttribute("href",n),f.setAttribute("download",e.name),f.click(),URL.revokeObjectURL(n)}};for(let e=0;e<l.length;e++){const s=l[e];await this.getAttachmentUrl(s),await o(s)}}async downloadFile(t){const{fileUrl:l,name:o,order:e,size:s}=t;let n=!1;this.emit("progress",{index:e,name:o,size:s,percentage:0});const[f,F]=await Q(Ae({method:"get",responseType:"blob",url:l,onDownloadProgress:h=>{if(h.lengthComputable&&!n){const A=Math.round(h.loaded*100/h.total);this.emit("progress",{index:e,percentage:A})}}}));return n||(this.emit("progress",{index:e,percentage:100}),n=!0),f?(this.emit("error",{message:f.message,index:e}),null):F.data}async startDownload(){if(this.oTable=await M.base.getTableById(this.tableId),this.cellList=await this.getCellsList(),await this.setFileNames(),await this.setFolderPath(),!this.cellList.length)return this.emit("info",Y("no_files_to_download_message")),this.emit("finshed"),"";this.downloadType===2?await this.sigleDownLoad():await this.zipDownLoad(),this.emit("finshed")}}const ao={class:"dialog-process"},no={class:"dialog-circle"},io={class:"prompt"},ro={key:0,style:{color:"var(--el-color-warning)","line-height":"1.5"}},co={key:1,style:{color:"red"}},_o=D("\u4E0B\u8F7D\u4E2D"),uo=D("\u4E0B\u8F7D\u6210\u529F"),fo=D("\u4E0B\u8F7D\u5931\u8D25"),mo={__name:"DownModel",props:{zipName:{type:String,default:""},formData:{type:Object,default:()=>{}}},emits:["finsh"],setup(a,{emit:t}){const l=a,o=H.global.t,e=1073741824*1,s=L(new Set),n=L(!1),f=L(0),F=L(0),h=L([]),A=L(""),E=L(0),q=L(""),c=C(()=>s.value.size),_=C(()=>(c.value/F.value*100).toFixed(2)-0||0),I=Re(()=>{const v={loading:1,error:2,default:3};h.value.length>20&&(h.value=h.value.filter(b=>b.type!=="success")),h.value.sort((b,$)=>(v[b.type]||v.default)-(v[$.type]||v.default))},200),{formData:k,zipName:x}=me(l);return j(async()=>{const v=new so({...k.value,zipName:x.value});v.on("preding",b=>{E.value+=1,b&&(F.value+=b.length,b.forEach($=>{f.value+=$.size}))}),v.on("error",b=>{const{index:$,message:N}=b,V=h.value.findIndex(z=>z.index===$);V!==-1&&(h.value[V].type="error",h.value[V].percentage=N,I())}),v.on("max_size_warning",b=>{n.value=!0}),v.on("progress",b=>{const{index:$,percentage:N,name:V,size:z}=b;if(s.value.has($))return;const U=h.value.findIndex(Z=>Z.index===$);U===-1?h.value.unshift({index:$,percentage:N,name:V,size:z,type:"loading"}):(h.value[U].percentage=N,N>=100?(h.value[U].type="success",s.value.add($),I()):h.value[U].type="loading")}),v.on("finshed",b=>{t("finsh")}),v.on("zip_progress",b=>{A.value="";const $=o("file_packing_progress_message").replace("percentage",b);q.value=$}),await v.startDownload()}),(v,b)=>{const $=ge,N=ee,V=we;return m(),T("div",ao,[u("h4",null,g(p(o)("download_progress")),1),u("div",no,[r(nt,{percent:p(_)},null,8,["percent"])]),u("h4",null,g(p(o)("download_details")),1),u("div",io,[f.value>e?(m(),T("p",ro,"\u5F53\u524D\u4E0B\u8F7D\u9644\u4EF6\u8FC7\u5927\uFF0C\u63A8\u8350\u8FDB\u884C\u89C6\u56FE\u7B5B\u9009\uFF0C\u5982\u60A8\u4E0B\u8F7D\u5954\u6E83\u6216\u8005\u65E0\u53CD\u5E94\uFF0C\u8BF7\u4F7F\u7528chrome\u6D4F\u89C8\u5668\u4E0B\u8F7D")):S("",!0),u("p",null,"\u5171\u8BA1\u6709 "+g(F.value)+" \u4E2A\u6587\u4EF6\u5F85\u4E0B\u8F7D\u3002",1),u("p",null,"\u5F53\u524D\u6587\u4EF6\u603B\u5927\u5C0F"+g(p(oe)(f.value)),1),u("p",null,"\u5DF2\u4E0B\u8F7D\u6587\u4EF6\u6570\u91CF"+g(p(c))+"\u4E2A",1),u("p",null,g(A.value),1),u("p",null,g(q.value),1),n.value?(m(),T("p",co,g("\u6587\u4EF6\u6253\u5305\u5931\u8D25\uFF0C\u8BF7\u4F7F\u7528chrome\u6D4F\u89C8\u5668\u8FDB\u884C\u6253\u5305"))):S("",!0),r(V,{data:h.value,style:{width:"100%"},"show-overflow-tooltip":"",size:"small"},{default:i(()=>[r($,{type:"index",width:"50"}),r($,{prop:"name",label:"\u6587\u4EF6\u540D",width:""}),r($,{prop:"percentage",label:"\u4E0B\u8F7D\u8FDB\u5EA6"},{default:i(z=>[D(g(z.row.percentage)+g(z.row.type==="error"?"":"%"),1)]),_:1}),r($,{prop:"size",label:"\u6587\u4EF6\u5927\u5C0F"},{default:i(z=>[D(g(p(oe)(z.row.size)),1)]),_:1}),r($,{prop:"status",label:"\u72B6\u6001"},{default:i(z=>[z.row.type==="loading"?(m(),w(N,{key:0,type:"primary",size:"small",link:""},{default:i(()=>[_o]),_:1})):S("",!0),z.row.type==="success"?(m(),w(N,{key:1,type:"success",link:"",size:"small"},{default:i(()=>[uo]),_:1})):S("",!0),z.row.type==="error"?(m(),w(N,{key:2,type:"danger",link:"",size:"small"},{default:i(()=>[fo]),_:1})):S("",!0)]),_:1})]),_:1},8,["data"])])])}}},po=G(mo,[["__scopeId","data-v-40a2eb60"]]),ho=["Formula","AutoNumber","Barcode","CreatedTime","SingleSelect","CreatedUser","DateTime","Location","ModifiedTime","ModifiedUser","Number","Phone","Text","Url","User"],go=ho.map(a=>ie[a]);async function wo(a){const t=[];return await Promise.all(a.map(async l=>{const o=l.id,e=l.name,s=await M.base.getTableById(o),n=await s.getFieldMetaList(),f=await s.getViewMetaList();console.log(s.getViewMetaList),t.push({tableId:o,tableName:e,fieldMetaList:n,viewMetaList:f})})),t}function yo(a,t){const l=new Map(t.map((o,e)=>[o.id,e]));return a.sort((o,e)=>{const s=l.has(o.id)?l.get(o.id):1/0,n=l.has(e.id)?l.get(e.id):1/0;return s-n})}const vo={class:"form-container"},bo={style:{display:"flex","align-items":"center"}},$o={style:{"margin-right":"2px"}},Fo={style:{display:"flex","align-items":"center"}},Io={style:{"margin-right":"2px"}},ko={style:{display:"flex","align-items":"center"}},To=u("span",{style:{"margin-right":"2px"}},g("\u547D\u540D\u6392\u5E8F"),-1),zo={style:{display:"flex","align-items":"center"}},Lo=u("span",{style:{"margin-right":"2px"}},g("\u95F4\u9694\u6587\u5B57"),-1),So={style:{display:"flex"}},No={style:{display:"flex","align-items":"center"}},xo={style:{"margin-right":"2px"}},Vo={class:"btns"},Do={class:"dialog-footer"},Co={__name:"Form",setup(a){const t=L(null),l=L(!0),o=L(!1),e=J({tableId:"",attachmentFileds:[],fileNameType:0,fileNameByField:[],nameMark:"-",viewId:"",downloadType:1,downloadTypeByFolders:!1,firstFolderKey:"",secondFolderKey:""}),s=J({tableId:[{required:!0,message:"\u8BF7\u9009\u62E9\u6570\u636E\u8868",trigger:"change"}],attachmentFileds:[{required:!0,message:"\u8BF7\u9009\u62E9\u9644\u4EF6\u5B57\u6BB5",trigger:"change"}],viewId:[{required:!0,message:"\u8BF7\u9009\u62E9\u89C6\u56FE",trigger:"change"}],fileNameType:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6\u540D\u547D\u540D\u65B9\u5F0F",trigger:"change"}],fileNameByField:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6\u547D\u540D\u5B57\u6BB5",trigger:"change"}],nameMark:[{required:!0,message:"\u8BF7\u9009\u62E9\u8F93\u5165\u95F4\u9694\u6587\u5B57",trigger:"change"},{pattern:/^[^\/\.<>!@#$%^&*()=\[\]{}|\\:;"'?,~`]*$/,message:"\u5305\u542B\u4E00\u4E9B\u7279\u6B8A\u5B57\u7B26\uFF0C\u6682\u4E0D\u652F\u6301",trigger:"change"}],downloadType:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6\u4E0B\u8F7D\u65B9\u5F0F",trigger:"change"}],secondFolderKey:[{validator:(c,_,y)=>{!_&&!e.firstFolderKey?y():e.firstFolderKey?_===e.firstFolderKey?y(new Error("\u4E8C\u7EA7\u76EE\u5F55\u4E0D\u80FD\u4E0E\u4E00\u7EA7\u76EE\u5F55\u76F8\u540C")):y():y(new Error("\u8BF7\u5148\u9009\u62E9\u4E00\u7EA7\u76EE\u5F55"))},trigger:"change"}]}),n=J({allInfo:[],finshDownload:!1}),f=C(()=>n.allInfo.find(_=>_.tableId===e.tableId)||null),F=C(()=>f.value?f.value.viewMetaList:[]),h=C(()=>f.value?f.value.fieldMetaList.filter(c=>c.type===ie.Attachment):[]);R(()=>e.viewId,async c=>{if(c&&f.value){const I=await(await(await M.base.getTableById(e.tableId)).getViewById(e.viewId)).getFieldMetaList(),k=n.allInfo.find(x=>x.tableId===e.tableId);k.fieldMetaList=yo(k.fieldMetaList,I)}});const A=c=>{const _=E.value.find(y=>y.id===c);return _?_.name:""},E=C(()=>f.value?f.value.fieldMetaList.filter(c=>go.includes(c.type)):[]);setTimeout(()=>{console.log(E)},3e3),R(()=>e.tableId,()=>{F.value.find(_=>_.id===e.viewId)||(e.viewId=F.value.length?F.value[0].id:""),e.fileNameByField=[],e.attachmentFileds=h.value.map(_=>_.id),e.firstFolderKey="",e.secondFolderKey=""}),R(()=>e.firstFolderKey,()=>{t.value.clearValidate("secondFolderKey")}),R(()=>e.secondFolderKey,c=>{!c&&e.firstFolderKey&&t.value.validateField("secondFolderKey")});const q=async()=>{if(!await ze.getPermission({entity:Le.Base,type:Se.Printable})){await M.ui.showToast({toastType:"warning",message:"\u60A8\u65E0\u6743\u9650\u4E0B\u8F7D\u9644\u4EF6\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"});return}!t.value||await t.value.validate(async _=>{_&&(n.finshDownload=!1,o.value=!0)})};return j(async()=>{let c=await M.base.getTableMetaList();c=c.filter(I=>!!I.name),console.log("tableMetaList",c),n.allInfo=await wo(c),console.log("allInfo",n.allInfo);const{tableId:_,viewId:y}=await M.base.getSelection();e.tableId=_,e.viewId=y,e.attachmentFileds=h.value.map(I=>I.id),l.value=!1}),(c,_)=>{const y=ye,I=ve,k=be,x=W,v=ae,b=$e,$=Fe,N=Ie,V=ee,z=ke,U=Te,Z=ne;return se((m(),T("div",vo,[l.value?S("",!0):(m(),w(z,{key:0,ref_key:"elform",ref:t,class:"form",model:e,rules:s,"label-width":"auto","scroll-into-view-options":!0,"label-position":"left"},{default:i(()=>[r(k,{label:c.$t("data_table_column"),prop:"tableId"},{default:i(()=>[r(I,{modelValue:e.tableId,"onUpdate:modelValue":_[0]||(_[0]=d=>e.tableId=d),placeholder:c.$t("select_data_table"),style:{width:"100%"}},{default:i(()=>[(m(!0),T(B,null,P(n.allInfo,d=>(m(),w(y,{key:d.tableId,label:d.tableName,value:d.tableId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(k,{label:c.$t("view_column"),prop:"viewId"},{label:i(()=>[u("p",bo,[u("span",$o,g(c.$t("view_column")),1),r(v,{placement:"top-start",trigger:"hover",content:"\u53EF\u7B5B\u9009\uFF0C\u4E0B\u8F7D\u89C6\u56FE\u7B5B\u9009\u4E4B\u540E\u7684\u6570\u636E"},{reference:i(()=>[r(x,null,{default:i(()=>[r(p(O))]),_:1})]),_:1})])]),default:i(()=>[r(I,{modelValue:e.viewId,"onUpdate:modelValue":_[1]||(_[1]=d=>e.viewId=d),placeholder:c.$t("select_view"),style:{width:"100%"}},{default:i(()=>[(m(!0),T(B,null,P(p(F),d=>(m(),w(y,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(k,{label:c.$t("attachment_fields"),prop:"attachmentFileds"},{default:i(()=>[r(I,{modelValue:e.attachmentFileds,"onUpdate:modelValue":_[2]||(_[2]=d=>e.attachmentFileds=d),multiple:"",placeholder:c.$t("select_attachment_fields"),style:{width:"100%"}},{default:i(()=>[(m(!0),T(B,null,P(p(h),d=>(m(),w(y,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(k,{label:c.$t("file_naming_method"),prop:"fileNameType"},{default:i(()=>[r(I,{modelValue:e.fileNameType,"onUpdate:modelValue":_[3]||(_[3]=d=>e.fileNameType=d),placeholder:c.$t("select_file_naming_method"),style:{width:"100%"}},{default:i(()=>[r(y,{label:c.$t("original_file_name"),value:0},null,8,["label"]),r(y,{label:c.$t("select_from_table_fields"),value:1},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e.fileNameType===1?(m(),w(k,{key:0,label:c.$t("file_name_field"),prop:"fileNameByField"},{label:i(()=>[u("p",Fo,[u("span",Io,g(c.$t("file_name_field")),1),r(v,{placement:"top-start",trigger:"hover",content:"\u652F\u6301\u591A\u9009\u7EC4\u5408\u547D\u540D"},{reference:i(()=>[r(x,null,{default:i(()=>[r(p(O))]),_:1})]),_:1})])]),default:i(()=>[r(I,{modelValue:e.fileNameByField,"onUpdate:modelValue":_[4]||(_[4]=d=>e.fileNameByField=d),placeholder:c.$t("select_file_name_field"),style:{width:"100%"},filterable:"",multiple:""},{default:i(()=>[(m(),w(b,{key:1,label:"\u9644\u4EF6\u539F\u59CB\u540D\u79F0"},{default:i(()=>[r(y,{label:"\u9644\u4EF6\u539F\u59CB\u540D\u79F0",value:p(te)},null,8,["value"])]),_:1})),(m(),w(b,{key:2,label:"\u5B57\u6BB5\u503C"},{default:i(()=>[(m(!0),T(B,null,P(p(E),(d,re)=>(m(),w(y,{label:d.name,value:d.id,key:d.id},null,8,["label","value"]))),128))]),_:1})),(m(),w(b,{key:3,label:"\u8868\u5934\u540D\u79F0"},{default:i(()=>[(m(!0),T(B,null,P(p(f).fieldMetaList,(d,re)=>(m(),w(y,{label:d.name,value:d.name+p(K),key:d.name+p(K)},null,8,["label","value"]))),128))]),_:1}))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):S("",!0),e.fileNameType===1&&e.fileNameByField.length>1?(m(),w(k,{key:1,label:"\u547D\u540D\u6392\u5E8F",prop:"fileNameByField"},{label:i(()=>[u("p",ko,[To,r(v,{placement:"top-start",trigger:"hover",content:"\u62D6\u52A8\u6392\u5E8F\uFF0Cxx-xx-xx\u65B9\u5F0F\u547D\u540D"},{reference:i(()=>[r(x,null,{default:i(()=>[r(p(O))]),_:1})]),_:1})])]),default:i(()=>[r(p(Ke),{list:e.fileNameByField,animation:"300"},{item:i(({element:d})=>[r(Ze,{name:A(d)||d,isDrag:!0},null,8,["name"])]),_:1},8,["list"])]),_:1})):S("",!0),e.fileNameType===1&&e.fileNameByField.length>1?(m(),w(k,{key:2,label:"\u95F4\u9694\u6587\u5B57",prop:"nameMark"},{label:i(()=>[u("p",zo,[Lo,r(v,{placement:"top-start",trigger:"hover",content:"\u7EC4\u5408\u547D\u540D\u95F4\u9694\u7B26\uFF0C\u56E0\u7279\u6B8A\u539F\u56E0\uFF0C\u4E0D\u652F\u6301(/  . \u7B49\u7279\u6B8A\u5B57\u7B26)"},{reference:i(()=>[r(x,null,{default:i(()=>[r(p(O))]),_:1})]),_:1},8,["content"])])]),default:i(()=>[r($,{modelValue:e.nameMark,"onUpdate:modelValue":_[5]||(_[5]=d=>e.nameMark=d)},null,8,["modelValue"])]),_:1})):S("",!0),r(k,{label:c.$t("download_method"),prop:"downloadType"},{default:i(()=>[r(I,{modelValue:e.downloadType,"onUpdate:modelValue":_[6]||(_[6]=d=>e.downloadType=d),placeholder:c.$t("select_download_method"),style:{width:"100%"}},{default:i(()=>[r(y,{label:c.$t("download_individual_files"),value:2},null,8,["label"]),r(y,{label:c.$t("zip_download"),value:1},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),u("div",So,[e.downloadType===1?(m(),w(k,{key:0,prop:"downloadTypeByFolders"},{label:i(()=>[u("p",No,[u("span",xo,g(c.$t("folder_classification")),1),r(v,{placement:"top-start",trigger:"hover",content:c.$t("folder_classification_hint")},{reference:i(()=>[r(x,null,{default:i(()=>[r(p(O))]),_:1})]),_:1},8,["content"])])]),default:i(()=>[r(N,{modelValue:e.downloadTypeByFolders,"onUpdate:modelValue":_[7]||(_[7]=d=>e.downloadTypeByFolders=d),"active-text":c.$t("yes"),"inactive-text":c.$t("no")},null,8,["modelValue","active-text","inactive-text"])]),_:1})):S("",!0)]),e.downloadType===1&&e.downloadTypeByFolders?(m(),w(k,{key:3,label:c.$t("first_directory"),prop:"firstFolderKey"},{default:i(()=>[r(I,{modelValue:e.firstFolderKey,"onUpdate:modelValue":_[8]||(_[8]=d=>e.firstFolderKey=d),placeholder:c.$t("select_first_directory"),style:{width:"100%"},clearable:""},{default:i(()=>[(m(!0),T(B,null,P(p(E),d=>(m(),w(y,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):S("",!0),e.downloadType===1&&e.downloadTypeByFolders?(m(),w(k,{key:4,label:c.$t("second_directory"),prop:"secondFolderKey"},{default:i(()=>[r(I,{clearable:"",modelValue:e.secondFolderKey,"onUpdate:modelValue":_[9]||(_[9]=d=>e.secondFolderKey=d),placeholder:c.$t("select_second_directory"),style:{width:"100%"}},{default:i(()=>[(m(!0),T(B,null,P(p(E),d=>(m(),w(y,{key:d.id,label:d.name,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):S("",!0),u("div",Vo,[r(V,{type:"primary",onClick:q},{default:i(()=>[D(g(c.$t("download"))+" ",1),r(x,null,{default:i(()=>[r(p(De))]),_:1})]),_:1})])]),_:1},8,["model","rules"])),r(U,{modelValue:o.value,"onUpdate:modelValue":_[12]||(_[12]=d=>o.value=d),title:c.$t("file_download"),width:"80%","close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":!0},pe({default:i(()=>[o.value?(m(),w(po,{key:0,formData:e,onFinsh:_[10]||(_[10]=d=>n.finshDownload=!0),zipName:p(f).tableName},null,8,["formData","zipName"])):S("",!0)]),_:2},[n.finshDownload?{name:"footer",fn:i(()=>[u("span",Do,[r(V,{onClick:_[11]||(_[11]=d=>o.value=!1)},{default:i(()=>[D(g(c.$t("complete")),1)]),_:1})])])}:void 0]),1032,["modelValue","title"])])),[[Z,l.value]])}}},Mo=()=>{const a=L(""),t=()=>{const l=document.documentElement,e={LIGHT:{"--el-color-primary":"rgb(20, 86, 240)","--el-bg-color":"#fff","--el-border-color-lighter":"#dee0e3"},DARK:{"color-scheme":"dark","--el-color-primary":"#4571e1","--el-bg-color":"#252525","--el-border-color-lighter":"#434343"}}[a.value];a.value==="DARK"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),Object.entries(e).forEach(([s,n])=>{l.style.setProperty(s,n)})};return j(async()=>{a.value=await M.bridge.getTheme(),t()}),M.bridge.onThemeChange(l=>{a.value=l.data.theme,t()}),{theme:a}};const Bo={class:"help"},Eo={target:"_blank",href:"https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=68dqfd50-145d-4cb0-ac18-53af1f73cad8"},Po=D("\u5E2E\u52A9 "),Ao={class:"hd"},Uo={class:"forms"},Ko={__name:"App",setup(a){Mo();const t=L(!0),l=()=>{t.value=!1,setTimeout(()=>{t.value=!0},300)};return(o,e)=>{const s=W,n=ee,f=ae,F=ne;return m(),T("main",null,[u("div",Bo,[u("a",Eo,[Po,r(s,{class:"el-icon--right"},{default:i(()=>[r(p(Ce),{size:"small"})]),_:1})])]),u("div",Ao,[r(f,{placement:"top-start",width:"80%",trigger:"click"},{reference:i(()=>[r(n,{type:"primary"},{default:i(()=>[D(g(o.$t("usage_instructions")),1),r(s,{class:"el-icon--right"},{default:i(()=>[r(p(Me))]),_:1})]),_:1})]),default:i(()=>[u("ol",null,[u("li",null,g(o.$t("notice_1")),1),u("li",null,g(o.$t("notice_2")),1),u("li",null,g(o.$t("notice_3")),1),u("li",null,g(o.$t("notice_4")),1),u("li",null,g(o.$t("notice_5")),1),u("li",null,g(o.$t("notice_6")),1),u("li",null,g(o.$t("notice_7")),1)])]),_:1}),r(n,{type:"primary",onClick:l},{default:i(()=>[D(g(o.$t("refresh_form")),1),r(s,{class:"el-icon--right"},{default:i(()=>[r(p(Be))]),_:1})]),_:1})]),se((m(),T("div",Uo,[t.value?(m(),w(Co,{key:0})):S("",!0)])),[[F,!t.value]])])}}},Oo=G(Ko,[["__scopeId","data-v-bf9f87ef"]]);he(Oo).use(H).mount("#app");