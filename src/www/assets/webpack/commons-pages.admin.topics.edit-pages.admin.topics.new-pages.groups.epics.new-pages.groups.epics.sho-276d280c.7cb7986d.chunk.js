(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{F87h:function(e,t,a){"use strict";var i=a("mphk"),s=a("MG03");t.a=new class extends s.a{constructor(){super(),this.pendingRequests={}}override(e,t){this.internalStorage[e]=t}retrieve(e,t){var a=this;if(this.hasData(e)&&!t)return Promise.resolve(this.get(e));let s=this.pendingRequests[e];return s||(s=i.a.get(e).then((function(t){let{data:i}=t;a.internalStorage[e]=i,delete a.pendingRequests[e]})).catch((function(t){const i=new Error(`${e}: ${t.message}`);throw i.textStatus=t.message,delete a.pendingRequests[e],i})),this.pendingRequests[e]=s),s.then((function(){return a.get(e)}))}}},YI2X:function(e,t,a){"use strict";var i=a("6oy4"),s=a.n(i),n=(a("gadi"),a("xhFg"));function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"b",(function(){return n.b}));t.a=class extends n.a{constructor(){super(...arguments),l(this,"setupAutoCompleteEpics",(function(e,t){e.atwho({at:"&",alias:"epics",searchKey:"search",displayTpl(e){let t=n.a.Loading.template;return null!=e.title&&(t=n.a.Issues.templateFunction(e)),t},data:n.a.defaultLoadingData,insertTpl:n.a.Issues.insertTemplateFunction,skipSpecialCharacterTest:!0,callbacks:{...t,beforeSave:e=>s.a.map(e,(function(e){return null==e.title?e:{id:e.iid,reference:e.reference,title:e.title,search:`${e.iid} ${e.title}`}}))}})})),l(this,"setupAutoCompleteVulnerabilities",(function(e,t){e.atwho({at:"[vulnerability:",suffix:"]",alias:"vulnerabilities",searchKey:"search",displayTpl(e){let t=n.a.Loading.template;return null!=e.title&&(t=n.a.Issues.templateFunction(e)),t},data:n.a.defaultLoadingData,insertTpl:n.a.Issues.insertTemplateFunction,skipSpecialCharacterTest:!0,callbacks:{...t,beforeSave:e=>e.map((function(e){return null==e.title?e:{id:e.id,title:e.title,reference:e.reference,search:`${e.id} ${e.title}`}}))}})}))}setupAtWho(e){this.enableMap.epics&&this.setupAutoCompleteEpics(e,this.getDefaultCallbacks()),this.enableMap.vulnerabilities&&this.setupAutoCompleteVulnerabilities(e,this.getDefaultCallbacks()),super.setupAtWho(e)}}},gadi:function(e,t,a){"use strict";a("6oy4"),a("y7PY"),a("NApX")},xhFg:function(e,t,a){"use strict";a.d(t,"b",(function(){return E}));a("AfGZ"),a("/vEX");var i=a("Hoxe"),s=a.n(i),n=a("lb6a"),l=a.n(n),r=a("ZMwX"),o=a.n(r),c=a("A1CF"),u=a.n(c),p=a("6oy4"),h=a.n(p),d=(a("gadi"),a("8GQU")),g=a("mphk"),m=a("t9l/"),f=a("Daar"),b=a("P8Ze"),$=a("F87h"),v=a("oj/M"),T=a("U1Ws"),y=a("K/OF");function D(e){return u()(e).replace(/\$/g,"&dollar;")}function w(e){return`${e.name.replace(/ /g,"")} ${e.username}`}function L(e){return e.map((function(e){let t="";if(null==e.username)return e;t=e.name,e.count&&!e.mentionsDisabled&&(t+=` (${e.count})`);const a=e.avatar_url||e.username.charAt(0).toUpperCase(),i="Group"===e.type?"rect-avatar":"",s=`<img src="${e.avatar_url}" alt="${e.username}" class="avatar ${i} avatar-inline center s26"/>`,n=`<div class="avatar ${i} center avatar-inline s26">${a}</div>`,l=e.mentionsDisabled?Object(v.Q)("notifications-off","s16 vertical-align-middle gl-ml-2"):"";return{username:e.username,avatarTag:1===a.length?n:s,title:t,search:w(e),icon:l,availability:null==e?void 0:e.availability}}))}const k=function(e,t){if(!t)return e;const a=s()(t),i=new RegExp(`>\\s*([^<]*?)(${a})([^<]*)\\s*<`,"ig");return e.replace(i,(function(e,t,a,i){return`> ${t}<strong>${a}</strong>${i} <`}))},E={emojis:!0,members:!0,issues:!0,mergeRequests:!0,epics:!0,milestones:!0,labels:!0,snippets:!0,vulnerabilities:!0,contacts:!0};class S{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSources=e,this.cachedData={},this.isLoadingData={},this.previousQuery=""}setup(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;this.input=e||h()(".js-gfm-input"),this.enableMap=t,this.setupLifecycle()}setupLifecycle(){var e=this;this.input.each((function(t,a){const i=h()(a);i.hasClass("js-gfm-input-initialized")||(i.off("focus.setupAtWho").on("focus.setupAtWho",e.setupAtWho.bind(e,i)),i.on("change.atwho",(function(){return a.dispatchEvent(new Event("input"))})),i.on("inserted-commands.atwho",i.trigger.bind(i,"keyup")),i.on("clear-commands-cache.atwho",(function(){return e.clearCache()})),i.addClass("js-gfm-input-initialized"))}))}setupAtWho(e){this.enableMap.emojis&&this.setupEmoji(e),this.enableMap.members&&this.setupMembers(e),this.enableMap.issues&&this.setupIssues(e),this.enableMap.milestones&&this.setupMilestones(e),this.enableMap.mergeRequests&&this.setupMergeRequests(e),this.enableMap.labels&&this.setupLabels(e),this.enableMap.snippets&&this.setupSnippets(e),this.enableMap.contacts&&this.setupContacts(e),e.filter('[data-supports-quick-actions="true"]').atwho({at:"/",alias:"commands",searchKey:"search",limit:100,skipSpecialCharacterTest:!0,skipMarkdownCharacterTest:!0,data:S.defaultLoadingData,displayTpl(e){const t=[];if(S.isLoading(e))return S.Loading.template;let a='<li class="<%- className %>"><span class="name">/${name}</span>';return e.aliases.length>0&&(a+=' <small class="aliases">(or /<%- aliases.join(", /") %>)</small>'),e.params.length>0&&(a+=' <small class="params"><%- params.join(" ") %></small>'),e.warning&&e.icon&&"confidential"===e.icon?a+=`<small class="description gl-display-flex gl-align-items-center">${Object(v.Q)("eye-slash","s16 gl-mr-2")}<em><%- warning %></em></small>`:e.warning?a+='<small class="description"><em><%- warning %></em></small>':""!==e.description&&(a+='<small class="description"><em><%- description %></em></small>'),a+="</li>",e.warning&&t.push("has-warning"),l()(a)({...e,className:t.join(" ")})},insertTpl(e){let t="/${name} ",a=null;if(e.params.length>0){const i=/\[[a-z]+:/.exec(e.params);i?([a]=i,t+="<%- referencePrefix %>"):([[a]]=e.params,/^[@%~]/.test(a)&&(t+="<%- referencePrefix %>"))}return l()(t,{interpolate:/<%=([\s\S]+?)%>/g})({referencePrefix:a})},suffix:"",callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>S.isLoading(e)?e:h.a.map(e,(function(e){let t=e.name;return e.aliases.length>0&&(t=`${t} ${e.aliases.join(" ")}`),{name:e.name,aliases:e.aliases,params:e.params,description:e.description,warning:e.warning,icon:e.icon,search:t}})),matcher(e,t){const a=/(?:^|\n)\/([A-Za-z_]*)$/gi.exec(t);return a?a[1]:null}}})}setupEmoji(e){const t=this.fetchData.bind(this);e.atwho({at:":",displayTpl:S.Emoji.templateFunction,insertTpl:S.Emoji.insertTemplateFunction,skipSpecialCharacterTest:!0,data:S.defaultLoadingData,callbacks:{...this.getDefaultCallbacks(),matcher(e,t){const a=new RegExp(`(?:[^${y.b.unicodeLetters}0-9:]|\n|^):([^:]*)$`,"gi").exec(t);return a&&a.length?a[1]:null},filter(e,a){return S.isLoading(a)?(t(this.$inputor,this.at),a):S.Emoji.filter(e)},sorter(e,t){return this.setting.highlightFirst=this.setting.alwaysHighlightFirst||e.length>0,S.isLoading(t)?(this.setting.highlightFirst=!1,t):0===e.length?t:S.Emoji.sorter(t)}}})}setupMembers(e){const t=this.fetchData.bind(this),a={ASSIGN:"/assign",UNASSIGN:"/unassign",ASSIGN_REVIEWER:"/assign_reviewer",UNASSIGN_REVIEWER:"/unassign_reviewer",REASSIGN:"/reassign",CC:"/cc",ATTENTION:"/attention",REMOVE_ATTENTION:"/remove_attention"};let i=[],s=[],n="";e.atwho({at:"@",alias:"users",displayTpl(e){let t=S.Loading.template;const{avatarTag:a,username:i,title:s,icon:n,availability:l}=e;return null!=i&&(t=S.Members.templateFunction({avatarTag:a,username:i,title:s,icon:n,availabilityStatus:l&&Object(f.a)(l)?`<span class="gl-text-gray-500"> ${Object(m.g)("UserAvailability|(Busy)")}</span>`:""})),t},insertTpl:"${atwho-at}${username}",limit:10,searchKey:"search",alwaysHighlightFirst:!0,skipSpecialCharacterTest:!0,data:S.defaultLoadingData,callbacks:{...this.getDefaultCallbacks(),beforeSave:L,matcher(e,t){var l,r,o,c,u,p;const h=t.split(/\n+/g).pop().split(S.regexSubtext);n=h.find((function(e){return Object.values(a).includes(e)?e:null})),i=(null===(l=b.a.singleton)||void 0===l?void 0:null===(r=l.store)||void 0===r?void 0:null===(o=r.assignees)||void 0===o?void 0:o.map(w))||[],s=(null===(c=b.a.singleton)||void 0===c?void 0:null===(u=c.store)||void 0===u?void 0:null===(p=u.reviewers)||void 0===p?void 0:p.map(w))||[];const d=S.defaultMatcher(e,t,this.app.controllers);return d&&d.length?d[1]:null},filter(e,l,r){if(S.isLoading(l))return t(this.$inputor,this.at),l;if(l===S.defaultLoadingData)return h.a.fn.atwho.default.callbacks.filter(e,l,r);if(n===a.ASSIGN)return l.filter((function(e){return!i.includes(e.search)}));if(n===a.UNASSIGN)return l.filter((function(e){return i.includes(e.search)}));if(n===a.ASSIGN_REVIEWER)return l.filter((function(e){return!s.includes(e.search)}));if(n===a.UNASSIGN_REVIEWER)return l.filter((function(e){return s.includes(e.search)}));if(n===a.ATTENTION||n===a.REMOVE_ATTENTION){var o,c,u,p;const e=[...(null===(o=b.a.singleton)||void 0===o?void 0:null===(c=o.store)||void 0===c?void 0:c.assignees)||[],...(null===(u=b.a.singleton)||void 0===u?void 0:null===(p=u.store)||void 0===p?void 0:p.reviewers)||[]],t=n===a.REMOVE_ATTENTION;return l.filter((function(a){return e.find((function(e){return w(e).includes(a.search)&&e.attention_requested===t}))}))}return l},sorter(e,t){return this.setting.highlightFirst=this.setting.alwaysHighlightFirst,S.isLoading(t)?(this.setting.highlightFirst=!1,t):e?S.Members.sort(e,t):t}}})}setupIssues(e){e.atwho({at:"#",alias:"issues",searchKey:"search",displayTpl(e){let t=S.Loading.template;return null!=e.title&&(t=S.Issues.templateFunction(e)),t},data:S.defaultLoadingData,insertTpl:S.Issues.insertTemplateFunction,skipSpecialCharacterTest:!0,callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>h.a.map(e,(function(e){return null==e.title?e:{id:e.iid,title:e.title,reference:e.reference,search:`${e.iid} ${e.title}`}}))}})}setupMilestones(e){e.atwho({at:"%",alias:"milestones",searchKey:"search",insertTpl:"${atwho-at}${title}",displayTpl(e){let t=S.Loading.template;return null!=e.title&&(t=S.Milestones.templateFunction(e.title,e.expired)),t},data:S.defaultLoadingData,callbacks:{...this.getDefaultCallbacks(),beforeSave(e){const t=h.a.map(e,(function(e){if(null==e.title)return e;const t=e.due_date?Object(T.T)(e.due_date):null,a=!!t&&Date.now()>t.getTime();return{id:e.iid,title:e.title,search:e.title,expired:a,dueDate:t}}));return"object"==typeof t[0]?t.sort((function(e,t){return e.expired?1:t.expired?-1:e.dueDate?t.dueDate?e.dueDate-t.dueDate:-1:1})):t}}})}setupMergeRequests(e){e.atwho({at:"!",alias:"mergerequests",searchKey:"search",displayTpl(e){let t=S.Loading.template;return null!=e.title&&(t=S.Issues.templateFunction(e)),t},data:S.defaultLoadingData,insertTpl:S.Issues.insertTemplateFunction,skipSpecialCharacterTest:!0,callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>h.a.map(e,(function(e){return null==e.title?e:{id:e.iid,title:e.title,reference:e.reference,search:`${e.iid} ${e.title}`}}))}})}setupLabels(e){const t=this,a=this.fetchData.bind(this),i="/label",s="/unlabel",n="/relabel";let l="";e.atwho({at:"~",alias:"labels",searchKey:"search",data:S.defaultLoadingData,displayTpl(e){let t=S.Labels.templateFunction(e.color,e.title);return S.isLoading(e)&&(t=S.Loading.template),t},insertTpl:"${atwho-at}${title}",limit:20,callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>S.isLoading(e)?e:h.a.map(e,(function(e){return{title:e.title,color:e.color,search:e.title,set:e.set}})),matcher(e,r){const o=r.split(/\n+/g).pop().split(S.regexSubtext);l=o.find((function(e){return e===i||e===n||e===s?e:null}));const c=t.cachedData[e];if(c){if(!r.includes(e))return null;const t=r.split(e).pop();if(c.find((function(e){return e.title.startsWith(t)})))return t}else a(this.$inputor,this.at);const u=S.defaultMatcher(e,r,this.app.controllers);return u&&u.length?u[1]:null},filter(e,t,n){return S.isLoading(t)?(a(this.$inputor,this.at),t):t===S.defaultLoadingData?h.a.fn.atwho.default.callbacks.filter(e,t,n):l===i?t.filter((function(e){return!e.set})):l===s?t.filter((function(e){return e.set})):t}}})}setupSnippets(e){e.atwho({at:"$",alias:"snippets",searchKey:"search",displayTpl(e){let t=S.Loading.template;return null!=e.title&&(t=S.Issues.templateFunction(e)),t},data:S.defaultLoadingData,insertTpl:"${atwho-at}${id}",callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>h.a.map(e,(function(e){return null==e.title?e:{id:e.id,title:e.title,search:`${e.id} ${e.title}`}}))}})}setupContacts(e){e.atwho({at:"[contact:",suffix:"]",alias:"contacts",searchKey:"search",displayTpl(e){let t=S.Loading.template;return null!=e.email&&(t=S.Contacts.templateFunction(e)),t},data:S.defaultLoadingData,insertTpl:"${atwho-at}${email}",callbacks:{...this.getDefaultCallbacks(),beforeSave:e=>h.a.map(e,(function(e){return null==e.email?e:{id:e.id,email:e.email,firstName:e.first_name,lastName:e.last_name,search:`${e.email}`}}))}})}getDefaultCallbacks(){const e=this;return{sorter(e,t,a){return this.setting.highlightFirst=this.setting.alwaysHighlightFirst||e.length>0,S.isLoading(t)?(this.setting.highlightFirst=!1,t):h.a.fn.atwho.default.callbacks.sorter(e,t,a)},filter(t,a,i){return S.isLoading(a)?(e.fetchData(this.$inputor,this.at),a):S.isTypeWithBackendFiltering(this.at)&&e.previousQuery!==t?(e.fetchData(this.$inputor,this.at,t),e.previousQuery=t,a):h.a.fn.atwho.default.callbacks.filter(t,a,i)},beforeInsert(e){let t=e.substring(1);const a=e.charAt();if(e&&!this.setting.skipSpecialCharacterTest){const e="~"===a?/\W|^\d+$/:/\W/;t&&e.test(t)&&(t=`"${t}"`)}return this.setting.skipMarkdownCharacterTest||(t=t.replace(/(~~|`|\*)/g,"\\$1").replace(/(\b)(_+)/g,"$1\\$2").replace(/(_+)(\b)/g,"\\$1$2")),`${a}${t}`},matcher(e,t){const a=S.defaultMatcher(e,t,this.app.controllers);return a?a[1]:null},highlighter:k}}fetchData(e,t,a){var i=this;if(this.isLoadingData[t])return;this.isLoadingData[t]=!0;const s=this.dataSources[S.atTypeMap[t]];S.isTypeWithBackendFiltering(t)?g.a.get(s,{params:{search:a}}).then((function(a){let{data:s}=a;i.loadData(e,t,s)})).catch((function(){i.isLoadingData[t]=!1})):this.cachedData[t]?this.loadData(e,t,this.cachedData[t]):"emojis"===S.atTypeMap[t]?this.loadEmojiData(e,t).catch((function(){})):s?$.a.retrieve(s,!0).then((function(a){i.loadData(e,t,a)})).catch((function(){i.isLoadingData[t]=!1})):this.isLoadingData[t]=!1}loadData(e,t,a){return this.isLoadingData[t]=!1,this.cachedData[t]=a,e.atwho("load",t,a),e.trigger("keyup")}async loadEmojiData(e,t){await d.initEmojiMap(),this.loadData(e,t,["loaded"]),S.glEmojiTag=d.glEmojiTag}clearCache(){this.cachedData={}}destroy(){this.input.each((function(e,t){h()(t).atwho("destroy")}))}static isLoading(e){let t=e;e&&e.length>0&&([t]=e);const a=S.defaultLoadingData[0];return t&&(t===a||t.name===a)}static defaultMatcher(e,t,a){const i=Object.keys(a).join("|").replace(/[$]/,"\\$&").replace(/([[\]:])/g,"\\$1"),s=Object.keys(a).join(""),n=t.split(S.regexSubtext).pop(),l=e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),r=decodeURI("%C3%80"),o=decodeURI("%C3%BF");return new RegExp(`^(?:\\B|[^a-zA-Z0-9_\`${s}]|\\s)${l}(?!${i})((?:[A-Za-z${r}-${o}0-9_'.+-:]|[^\\x00-\\x7a])*)$`,"gi").exec(n)}}S.regexSubtext=new RegExp(/\s+/g),S.defaultLoadingData=["loading"],S.atTypeMap={":":"emojis","@":"members","#":"issues","!":"mergeRequests","&":"epics","~":"labels","%":"milestones","/":"commands","[vulnerability:":"vulnerabilities",$:"snippets","[contact:":"contacts"},S.typesWithBackendFiltering=["vulnerabilities"],S.isTypeWithBackendFiltering=function(e){return S.typesWithBackendFiltering.includes(S.atTypeMap[e])},S.glEmojiTag=null,S.Emoji={insertTemplateFunction:e=>`:${e.emoji.name}:`,templateFunction(e){if(S.isLoading(e))return S.Loading.template;const t=D(e.fieldValue);return S.glEmojiTag?`<li>${t} ${S.glEmojiTag(e.emoji.name)}</li>`:`<li>${t}</li>`},filter:e=>0===e.length?Object.values(d.getAllEmoji()).map((function(e){return{emoji:e,fieldValue:e.name}})).slice(0,20):d.searchEmoji(e),sorter:e=>d.sortEmoji(e)},S.Members={templateFunction(e){let{avatarTag:t,username:a,title:i,icon:s,availabilityStatus:n}=e;return`<li>${t} ${a} <small>${D(i)}${n}</small> ${s}</li>`},nameOrUsernameStartsWith:(e,t)=>e.search.split(" ").some((function(e){return e.toLowerCase().startsWith(t)})),nameOrUsernameIncludes:(e,t)=>e.search.toLowerCase().includes(t),sort(e,t){const a=e.toLowerCase(),{nameOrUsernameStartsWith:i,nameOrUsernameIncludes:s}=S.Members;return o()(t.filter((function(e){return s(e,a)})),(function(e){return i(e,a)?-1:0}))}},S.Labels={templateFunction:(e,t)=>`<li><span class="dropdown-label-box" style="background: ${D(e)}"></span> ${D(t)}</li>`},S.Issues={insertTemplateFunction:e=>e.reference||"${atwho-at}${id}",templateFunction(e){let{id:t,title:a,reference:i}=e;return`<li><small>${i||t}</small> ${D(a)}</li>`}},S.Milestones={templateFunction:(e,t)=>t?`<li>${Object(m.h)(Object(m.a)("%{milestone} (expired)"),{milestone:D(e)})}</li>`:`<li>${D(e)}</li>`},S.Contacts={templateFunction(e){let{email:t,firstName:a,lastName:i}=e;return`<li><small>${a} ${i}</small> ${D(t)}</li>`}},S.Loading={template:'<li style="pointer-events: none;"><span class="spinner align-text-bottom mr-1"></span>Loading...</li>'},t.a=S}}]);
//# sourceMappingURL=commons-pages.admin.topics.edit-pages.admin.topics.new-pages.groups.epics.new-pages.groups.epics.sho-276d280c.7cb7986d.chunk.js.map