(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{PJNv:function(t,e,i){"use strict";var a=i("Z2pp"),s=i("jyii"),n=i("xNSq"),r=i("1pIC"),l=i("GpHn"),o=i("cyg/"),m=i("3OW0"),u=i("SGmW"),p=i("s3Vi"),c=i("A/xw"),d=i("cIDo"),h=i("B/kB"),g=i("s+sb"),T=a.a.extend({name:s.cb,mixins:[n.a,r.a,l.a,u.a,c.a,p.a,g.a,h.a,d.a,o.a,m.a]}),v=i("6IRw");const b={components:{BTableLite:T},inheritAttrs:!1};const S=i.n(v)()({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-table-lite",t._g(t._b({staticClass:"gl-table",scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),(function(e){return{key:e,fn:function(i){return[t._t(e,null,null,i)]}}}))],null,!0)},"b-table-lite",t.$attrs,!1),t.$listeners))},staticRenderFns:[]},void 0,b,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=S},t26s:function(t,e,i){"use strict";var a=i("H8gz"),s=i("u1ru"),n=i("lT7T"),r=i("cuRJ"),l=i("zLBL"),o=i("qINL"),m=i("mpzd"),u=i("t9l/"),p=i("5ee2"),c=i("cBN0"),d=i("ly/8"),h={name:"TimeTrackingCollapsedState",components:{GlIcon:a.a},directives:{GlTooltip:d.a},props:{showComparisonState:{type:Boolean,required:!0},showSpentOnlyState:{type:Boolean,required:!0},showEstimateOnlyState:{type:Boolean,required:!0},showNoTimeTrackingState:{type:Boolean,required:!0},timeSpentHumanReadable:{type:String,required:!1,default:""},timeEstimateHumanReadable:{type:String,required:!1,default:""}},computed:{divClass(){return this.showComparisonState?"compare":this.showEstimateOnlyState?"estimate-only":this.showSpentOnlyState?"spend-only":this.showNoTimeTrackingState?"no-tracking":""},spanClass(){return this.showComparisonState?"":this.showEstimateOnlyState||this.showSpentOnlyState?"bold":this.showNoTimeTrackingState?"no-value":""},text(){return this.showComparisonState?`${this.timeSpentHumanReadable} / ${this.timeEstimateHumanReadable}`:this.showEstimateOnlyState?`-- / ${this.timeEstimateHumanReadable}`:this.showSpentOnlyState?`${this.timeSpentHumanReadable} / --`:this.showNoTimeTrackingState?Object(u.a)("None"):""},timeTrackedTooltipText(){let t;return this.showComparisonState?t=Object(u.a)("Time remaining"):this.showEstimateOnlyState?t=Object(u.a)("Estimated"):this.showSpentOnlyState&&(t=Object(u.a)("Time spent")),Object(u.h)("%{title}: %{text}",{title:t,text:this.text})},tooltipText(){return this.showNoTimeTrackingState?Object(u.a)("Time tracking"):this.timeTrackedTooltipText}}},g=i("bPvS"),T=Object(g.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip:body.viewport.left",arg:"body",modifiers:{viewport:!0,left:!0}}],staticClass:"sidebar-collapsed-icon",attrs:{title:this.tooltipText,"data-testid":"collapsedState"}},[e("gl-icon",{attrs:{name:"timer"}}),this._v(" "),e("div",{staticClass:"time-tracking-collapsed-summary"},[e("div",{class:this.divClass},[e("span",{class:this.spanClass},[this._v(" "+this._s(this.text)+" ")])])])],1)}),[],!1,null,null,null).exports,v=i("z7LP"),b=i("U1Ws"),S={name:"TimeTrackingComparisonPane",components:{GlProgressBar:v.a},directives:{GlTooltip:d.a},props:{timeSpent:{type:Number,required:!0},timeEstimate:{type:Number,required:!0},timeSpentHumanReadable:{type:String,required:!0},timeEstimateHumanReadable:{type:String,required:!0},limitToHours:{type:Boolean,required:!1,default:!1}},computed:{parsedTimeRemaining(){const t=this.timeEstimate-this.timeSpent;return Object(b.U)(t,{limitToHours:this.limitToHours})},timeRemainingHumanReadable(){return Object(b.Z)(this.parsedTimeRemaining)},timeRemainingTooltip(){const{timeRemainingHumanReadable:t,timeRemainingMinutes:e}=this;return e<0?Object(u.h)(Object(u.g)("TimeTracking|Over by %{timeRemainingHumanReadable}"),{timeRemainingHumanReadable:t}):Object(u.h)(Object(u.g)("TimeTracking|Time remaining: %{timeRemainingHumanReadable}"),{timeRemainingHumanReadable:t})},timeRemainingMinutes(){return this.timeEstimate-this.timeSpent},timeRemainingPercent(){return Math.floor(this.timeSpent/this.timeEstimate*100)},timeRemainingStatusClass(){return this.timeEstimate>=this.timeSpent?"within_estimate":"over_estimate"},progressBarVariant(){return this.timeRemainingPercent>100?"danger":"primary"}}},y=Object(g.a)(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gl-mt-2",attrs:{"data-testid":"timeTrackingComparisonPane"}},[i("div",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"compare-meter",class:t.timeRemainingStatusClass,attrs:{"data-testid":"compareMeter",title:t.timeRemainingTooltip}},[i("gl-progress-bar",{attrs:{"data-testid":"timeRemainingProgress",value:t.timeRemainingPercent,variant:t.progressBarVariant}}),t._v(" "),i("div",{staticClass:"compare-display-container gl-display-flex gl-justify-content-space-between gl-mt-2"},[i("div",{staticClass:"gl-float-left"},[i("span",{staticClass:"gl-text-gray-400"},[t._v(t._s(t.s__("TimeTracking|Spent")))]),t._v(" "),i("span",{staticClass:"compare-value spent"},[t._v(t._s(t.timeSpentHumanReadable))])]),t._v(" "),i("div",{staticClass:"estimated gl-float-right"},[i("span",{staticClass:"gl-text-gray-400"},[t._v(t._s(t.s__("TimeTrackingEstimated|Est")))]),t._v(" "),i("span",{staticClass:"compare-value"},[t._v(t._s(t.timeEstimateHumanReadable))])])])],1)])}),[],!1,null,null,null).exports,_=i("9LGn"),f=i("yYHy"),k={name:"TimeTrackingHelpState",components:{GlButton:r.a},directives:{SafeHtml:_.a},computed:{href:()=>Object(f.y)(gon.relative_url_root||"","/help/user/project/time_tracking.md"),estimateText:()=>Object(u.h)(Object(u.g)("estimateCommand|%{slash_command} overwrites the total estimated time."),{slash_command:"<code>/estimate</code>"},!1),spendText:()=>Object(u.h)(Object(u.g)("spendCommand|%{slash_command} adds or subtracts time already spent."),{slash_command:"<code>/spend</code>"},!1)}},w=Object(g.a)(k,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-help-state gl-bg-white gl-border-gray-100 gl-border-t-solid gl-border-b-solid gl-border-1",attrs:{"data-testid":"helpPane"}},[i("div",{staticClass:"time-tracking-info"},[i("h4",[t._v(t._s(t.__("Track time with quick actions")))]),t._v(" "),i("p",[t._v(t._s(t.__("Quick actions can be used in description and comment boxes.")))]),t._v(" "),i("p",{directives:[{name:"safe-html",rawName:"v-safe-html",value:t.estimateText,expression:"estimateText"}]}),t._v(" "),i("p",{directives:[{name:"safe-html",rawName:"v-safe-html",value:t.spendText,expression:"spendText"}]}),t._v(" "),i("gl-button",{attrs:{href:t.href}},[t._v(t._s(t.__("Learn more")))])],1)])}),[],!1,null,null,null).exports,O=i("PJNv"),C=i("teVv"),H=i("LkRf"),x=i("+lve");var E={components:{GlLoadingIcon:l.a,GlTableLite:O.a},inject:["issuableType"],props:{limitToHours:{type:Boolean,default:!1,required:!1},issuableId:{type:String,required:!0}},data:()=>({report:[],isLoading:!0}),apollo:{report:{query(){return p.u[this.issuableType].query},variables(){return{id:Object(x.c)(this.getGraphQLEntityType(),this.issuableId)}},update(t){return this.isLoading=!1,this.extractTimelogs(t)},error(){Object(C.f)({message:Object(u.a)("Something went wrong. Please try again.")})}}},methods:{isIssue(){return"issue"===this.issuableType},getGraphQLEntityType(){return this.isIssue()?H.g:H.j},extractTimelogs(t){var e,i;return((null==t?void 0:null===(e=t.issuable)||void 0===e?void 0:null===(i=e.timelogs)||void 0===i?void 0:i.nodes)||[]).slice().sort((function(t,e){return new Date(t.spentAt)-new Date(e.spentAt)}))},formatDate:t=>Object(b.o)(t,'mmmm d, yyyy, HH:MM ("UTC:" o)'),getSummary:(t,e)=>null!=t?t:null==e?void 0:e.body,getTotalTimeSpent(){const t=this.report.reduce((function(t,e){return t+e.timeSpent}),0);return this.formatTimeSpent(t)},formatTimeSpent(t){return(t<0?"- ":"")+Object(b.Z)(Object(b.U)(t,{limitToHours:this.limitToHours}))}},fields:[{key:"spentAt",label:Object(u.a)("Spent At"),sortable:!0},{key:"user",label:Object(u.a)("User"),sortable:!0},{key:"timeSpent",label:Object(u.a)("Time Spent"),sortable:!0},{key:"summary",label:Object(u.a)("Summary / Note"),sortable:!0}]},j=Object(g.a)(E,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading?i("div",[i("gl-loading-icon",{attrs:{size:"md"}})],1):i("gl-table-lite",{attrs:{items:t.report,fields:t.$options.fields,"foot-clone":""},scopedSlots:t._u([{key:"cell(spentAt)",fn:function(e){var a=e.item.spentAt;return[i("div",[t._v(t._s(t.formatDate(a)))])]}},{key:"foot(spentAt)",fn:function(){return[t._v(" ")]},proxy:!0},{key:"cell(user)",fn:function(e){var a=e.item.user;return[i("div",[t._v(t._s(a.name))])]}},{key:"foot(user)",fn:function(){return[t._v(" ")]},proxy:!0},{key:"cell(timeSpent)",fn:function(e){var a=e.item.timeSpent;return[i("div",[t._v(t._s(t.formatTimeSpent(a)))])]}},{key:"foot(timeSpent)",fn:function(){return[i("div",[t._v(t._s(t.getTotalTimeSpent()))])]},proxy:!0},{key:"cell(summary)",fn:function(e){var a=e.item,s=a.summary,n=a.note;return[i("div",[t._v(t._s(t.getSummary(s,n)))])]}},{key:"foot(note)",fn:function(){return[t._v(" ")]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,R=i("nPFI");var q={name:"TimeTrackingSpentOnlyPane",timeSpent:Object(u.g)("TimeTracking|%{spentStart}Spent: %{spentEnd}"),components:{GlSprintf:R.a},props:{timeSpentHumanReadable:{type:String,required:!0}}},I=Object(g.a)(q,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"data-testid":"spentOnlyPane"}},[i("gl-sprintf",{attrs:{message:t.$options.timeSpent},scopedSlots:t._u([{key:"spent",fn:function(e){var a=e.content;return[i("span",{staticClass:"gl-font-weight-bold"},[t._v(t._s(a))]),t._v(t._s(t.timeSpentHumanReadable)+"\n    ")]}}])})],1)}),[],!1,null,null,null).exports,P={name:"IssuableTimeTracker",i18n:{noTimeTrackingText:Object(u.a)("No estimate or time spent"),estimatedOnlyText:Object(u.g)("TimeTracking|Estimated:")},components:{GlIcon:a.a,GlLink:s.a,GlModal:n.a,GlButton:r.a,GlLoadingIcon:l.a,TimeTrackingCollapsedState:T,TimeTrackingSpentOnlyPane:I,TimeTrackingComparisonPane:y,TimeTrackingHelpState:w,TimeTrackingReport:j},directives:{GlModal:o.a},inject:{issuableType:{default:null}},props:{limitToHours:{type:Boolean,default:!1,required:!1},fullPath:{type:String,required:!1,default:""},issuableId:{type:String,required:!1,default:""},issuableIid:{type:String,required:!1,default:""},initialTimeTracking:{type:Object,required:!1,default:null},showCollapsed:{type:Boolean,default:!0,required:!1}},data(){return{showHelp:!1,timeTracking:{...this.initialTimeTracking}}},apollo:{issuableTimeTracking:{query(){return p.t[this.issuableType].query},skip(){return!this.issuableType||!p.t[this.issuableType]||(!!this.initialTimeTracking||(!this.issuableIid||!this.fullPath))},variables(){return{iid:this.issuableIid,fullPath:this.fullPath}},update(t){var e;this.timeTracking={...null===(e=t.workspace)||void 0===e?void 0:e.issuable}}}},computed:{isTimeTrackingInfoLoading(){var t,e,i;return null!==(t=null===(e=this.$apollo)||void 0===e?void 0:null===(i=e.queries.issuableTimeTracking)||void 0===i?void 0:i.loading)&&void 0!==t&&t},timeEstimate(){var t;return(null===(t=this.timeTracking)||void 0===t?void 0:t.timeEstimate)||0},totalTimeSpent(){var t;return(null===(t=this.timeTracking)||void 0===t?void 0:t.totalTimeSpent)||0},humanTimeEstimate(){var t;return(null===(t=this.timeTracking)||void 0===t?void 0:t.humanTimeEstimate)||""},humanTotalTimeSpent(){var t;return(null===(t=this.timeTracking)||void 0===t?void 0:t.humanTotalTimeSpent)||""},hasTotalTimeSpent(){return Boolean(this.totalTimeSpent)},hasTimeEstimate(){return Boolean(this.timeEstimate)},showComparisonState(){return this.hasTimeEstimate&&this.hasTotalTimeSpent},showEstimateOnlyState(){return this.hasTimeEstimate&&!this.hasTotalTimeSpent},showSpentOnlyState(){return this.hasTotalTimeSpent&&!this.hasTimeEstimate},showNoTimeTrackingState(){return!this.hasTimeEstimate&&!this.hasTotalTimeSpent},showHelpState(){return Boolean(this.showHelp)},isTimeReportSupported(){return[m.c.Issue,m.c.MergeRequest].includes(this.issuableType)&&this.issuableId}},watch:{initialTimeTracking(t){this.timeTracking=t}},created(){c.a.$on("timeTracker:refresh",this.refresh)},methods:{toggleHelpState(t){this.showHelp=t},refresh(){this.$apollo.queries.issuableTimeTracking.refetch()}}},B=Object(g.a)(P,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"time-tracker time-tracking-component-wrap sidebar-help-wrap",attrs:{"data-testid":"time-tracker"}},[t.showCollapsed?i("time-tracking-collapsed-state",{attrs:{"show-comparison-state":t.showComparisonState,"show-no-time-tracking-state":t.showNoTimeTrackingState,"show-help-state":t.showHelpState,"show-spent-only-state":t.showSpentOnlyState,"show-estimate-only-state":t.showEstimateOnlyState,"time-spent-human-readable":t.humanTotalTimeSpent,"time-estimate-human-readable":t.humanTimeEstimate}}):t._e(),t._v(" "),i("div",{staticClass:"hide-collapsed gl-line-height-20 gl-text-gray-900 gl-display-flex gl-align-items-center"},[t._v("\n    "+t._s(t.__("Time tracking"))+"\n    "),t.isTimeTrackingInfoLoading?i("gl-loading-icon",{attrs:{size:"sm",inline:""}}):t._e(),t._v(" "),i("gl-button",{staticClass:"gl-ml-auto",attrs:{"data-testid":t.showHelpState?"closeHelpButton":"helpButton",category:"tertiary",size:"small",variant:"link"},on:{click:function(e){return t.toggleHelpState(!t.showHelpState)}}},[i("gl-icon",{staticClass:"gl-text-gray-900!",attrs:{name:t.showHelpState?"close":"question-o"}})],1)],1),t._v(" "),t.isTimeTrackingInfoLoading?t._e():i("div",{staticClass:"hide-collapsed"},[t.showEstimateOnlyState?i("div",{attrs:{"data-testid":"estimateOnlyPane"}},[i("span",{staticClass:"gl-font-weight-bold"},[t._v(t._s(t.$options.i18n.estimatedOnlyText)+" ")]),t._v(t._s(t.humanTimeEstimate)+"\n    ")]):t._e(),t._v(" "),t.showSpentOnlyState?i("time-tracking-spent-only-pane",{attrs:{"time-spent-human-readable":t.humanTotalTimeSpent}}):t._e(),t._v(" "),t.showNoTimeTrackingState?i("div",{attrs:{"data-testid":"noTrackingPane"}},[i("span",{staticClass:"gl-text-gray-500"},[t._v(t._s(t.$options.i18n.noTimeTrackingText))])]):t._e(),t._v(" "),t.showComparisonState?i("time-tracking-comparison-pane",{attrs:{"time-estimate":t.timeEstimate,"time-spent":t.totalTimeSpent,"time-spent-human-readable":t.humanTotalTimeSpent,"time-estimate-human-readable":t.humanTimeEstimate,"limit-to-hours":t.limitToHours}}):t._e(),t._v(" "),t.isTimeReportSupported?[t.hasTotalTimeSpent?i("gl-link",{directives:[{name:"gl-modal",rawName:"v-gl-modal",value:"time-tracking-report",expression:"'time-tracking-report'"}],attrs:{"data-testid":"reportLink",href:"#"}},[t._v("\n        "+t._s(t.__("Time tracking report"))+"\n      ")]):t._e(),t._v(" "),i("gl-modal",{attrs:{"modal-id":"time-tracking-report",title:t.__("Time tracking report"),"hide-footer":!0}},[i("time-tracking-report",{attrs:{"limit-to-hours":t.limitToHours,"issuable-id":t.issuableId}})],1)]:t._e(),t._v(" "),i("transition",{attrs:{name:"help-state-toggle"}},[t.showHelpState?i("time-tracking-help-state"):t._e()],1)],2)],1)}),[],!1,null,null,null);e.a=B.exports}}]);
//# sourceMappingURL=19.73691972.chunk.js.map