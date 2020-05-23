(this["webpackJsonpnew-frontend"]=this["webpackJsonpnew-frontend"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a,o,r=n(0),i=n.n(r),s=n(61),c=n.n(s),l=(n(68),n(2)),u=n(22),m=n(14),d=n(11),p=n(17),h=n(16),f=n(4),b=n(18),E=(n(69),n(25)),v=n(21);!function(e){e[e.UNTYPED_LAMBDA=0]="UNTYPED_LAMBDA",e[e.LISP=1]="LISP",e[e.MARKDOWN=2]="MARKDOWN"}(a||(a={})),function(e){e[e.MAIN=0]="MAIN",e[e.HELP=1]="HELP",e[e.MACROLIST=2]="MACROLIST",e[e.SETTINGS=3]="SETTINGS"}(o||(o={}));var x,g;!function(e){e.INIT="Type \u03bb (as \\) expression and hit enter",e.EVAL_MODE="Hit enter for next step",e.VALIDATE_MODE="Write next step and hit enter for validation",e.MACRO="Define Macro like: `NAME := [\u03bb expression]` and hit enter",e.NOTE="Type note and hit shift enter"}(x||(x={})),function(e){e.NORMAL="Normal Evaluation",e.APPLICATIVE="Applicative Evaluation",e.OPTIMISATION="Optimisation - \u03b7 Conversion",e.ABSTRACTION="Abstraction / Simplified Evaluation"}(g||(g={}));var N="UNTYPED_LAMBDA_CALCULUS",k={type:a.UNTYPED_LAMBDA,SLI:!1,expandStandalones:!1,strategy:g.NORMAL};var y=n(1),S=[a.UNTYPED_LAMBDA,a.LISP,a.MARKDOWN],O=S;var A={notebookList:[{boxList:[],activeBoxIndex:NaN,allowedBoxes:-1,__key:Date.now().toString(),settings:function(e){var t={};-2===e?e=[]:-1===e&&(e=S);var n=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){switch(i.value){case a.UNTYPED_LAMBDA:t=Object(l.a)({},t,Object(v.a)({},N,k))}}}catch(c){o=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return t}(O)}],currentNotebook:0,currentScreen:o.MAIN};function B(){for(var e=Object(v.a)({},N,{}),t=window.localStorage.getItem("global-settings"),n=null===t?e:JSON.parse(t),a=0,o=Object.entries(n);a<o.length;a++){var r=Object(E.a)(o[a],2),i=r[0],s=r[1];switch(i){case N:n[i]=Object(l.a)({},k,{},s);break;default:console.error("Settings CODE NAME is not one of known Code Names.")}}return n}function w(){var e=localStorage.getItem("AppState");if(null===e)return localStorage.setItem("AppState",JSON.stringify(A)),A;try{return function(e){var t=e.notebookList.map((function(e){var t=e.boxList.map((function(e,t,n){switch(e.type){case a.UNTYPED_LAMBDA:var o=e;if(""===o.expression)return o;var r=Object(y.decodeFast)(o.ast);if(null===r)throw"ROOT AST IS NOT DECODABLE";return o.ast=r,o.history=o.history.map((function(e,n){var a=Object(y.decodeFast)(e.ast);if(null===a)throw"CURRENT STEP IS NOT DECODABLE "+t;var o=e.lastReduction;return void 0===e.lastReduction&&(o=null),Object(l.a)({},e,{lastReduction:o,ast:a})})),o;default:return e}}));return Object(l.a)({},e,{boxList:t})}));return Object(l.a)({},e,{notebookList:t})}(JSON.parse(e))}catch(t){return A}}n(105);function L(e){var t=e.state,n=(e.onImport,e.onScreenChange),a=(e.onNotebookChange,e.onDeleteNotebook),r=t.notebookList,s=t.currentNotebook;console.log("current notebook ",s);var c=t.currentScreen,l=function(e){var t=new Blob([e],{type:"application/json"});return window.URL.createObjectURL(t)}(JSON.stringify(t));return i.a.createElement("div",{id:"menu-bar"},i.a.createElement("ul",{className:"notebooks UL"},r.map((function(t,n){return i.a.createElement("li",{className:"LI".concat(s===n?" current":""),key:t.__key},i.a.createElement("div",{className:"notebookIconWrapper"},1===r.length?null:i.a.createElement("i",{className:"removeNtb far fa-times-circle",onClick:function(){return a(n)}}),i.a.createElement("div",{className:"notebookIcon",onClick:function(){return e.onSelectNotebook(n)}},n)))})),i.a.createElement("div",{className:"addNotebook",onClick:function(){return e.onAddNotebook({boxList:[],activeBoxIndex:NaN,allowedBoxes:-1,__key:Date.now().toString(),settings:B()})}},"+")),c===o.HELP?i.a.createElement("div",{title:"Back to Notebook"},i.a.createElement("i",{className:"icon far fa-window-close fa-2x",onClick:function(){return n(o.MAIN)}}),i.a.createElement("p",{className:"iconLabel"},"Notebook")):i.a.createElement("div",{title:"Show help"},i.a.createElement("i",{className:"icon far fa-question-circle fa-2x",onClick:function(){return n(o.HELP)}}),i.a.createElement("p",{className:"iconLabel"},"Help")),c===o.SETTINGS?i.a.createElement("div",{title:"Back to Notebook"},i.a.createElement("i",{className:"icon far fa-window-close fa-2x",onClick:function(){return n(o.MAIN)}}),i.a.createElement("p",{className:"iconLabel"},"Notebook")):i.a.createElement("div",{title:"Go to Settings"},i.a.createElement("i",{className:"icon fas fa-cogs fa-2x",onClick:function(){return n(o.SETTINGS)}}),i.a.createElement("p",{className:"iconLabel"},"Settings")),i.a.createElement("div",{title:"Download this notebook"},i.a.createElement("a",{className:"export",href:l,download:"notebook_lambdulus.json"},i.a.createElement("i",{id:"download",className:"icon fas fa-cloud-download-alt fa-2x"})),i.a.createElement("p",{className:"iconLabel"},"Export")),i.a.createElement("div",{title:"Open exported notebook"},i.a.createElement("input",{type:"file",accept:"application/json",id:"input",onChange:function(e){return function(e,t){var n=e.target.files;if(null===n)return;var a=n[0],o=new FileReader;o.onload=function(e){JSON.parse(o.result)},o.readAsText(a)}(e)}}),i.a.createElement("label",{htmlFor:"input"},i.a.createElement("i",{className:"icon fas fa-cloud-upload-alt fa-2x"})),i.a.createElement("p",{className:"iconLabel"},"Import")),i.a.createElement("div",{title:"Report a bug or request new feature"},i.a.createElement("a",{href:"https://github.com/lambdulus/new-frontend/issues",target:"_blank"},i.a.createElement("i",{className:"icon fas fa-bug fa-2x"})),i.a.createElement("p",{className:"iconLabel"},"Issues")))}var j="Note in MarkDown";function R(e,t){return console.log(t),function(e){return-1===e}(t)||t.includes(e)}function C(e){e.addNew;var t=e.whiteList,n=e.settings[N];return-2===t?null:i.a.createElement("div",{className:"addBoxArea"},i.a.createElement("div",{className:"addButtons"},R(a.UNTYPED_LAMBDA,t)?i.a.createElement("p",{className:"plusBtn",title:"Create new \u03bb box",onClick:function(){return e.addNew((t=n,Object(l.a)({},t,{__key:Date.now().toString(),title:"",type:a.UNTYPED_LAMBDA,expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:5,isExercise:!1,editor:{placeholder:"placeholder",content:"",caretPosition:0,syntaxError:null}})));var t}},i.a.createElement("i",null,"+\u03bb")):null,function(t){return t?i.a.createElement("p",{className:"plusBtn",title:"Create new Lisp box",onClick:function(){return e.addNew({})}},i.a.createElement("i",null,"+ Lisp")):null}(R(a.LISP,t)),function(t){return t?i.a.createElement("p",{className:"plusBtn",title:"Create new MarkDown box",onClick:function(){return e.addNew({__key:Date.now().toString(),type:a.MARKDOWN,title:"Click Here to Change the Title",note:"",isEditing:!0,editor:{placeholder:j,content:"",caretPosition:0,syntaxError:null}})}},i.a.createElement("i",null,"+ MD")):null}(R(a.MARKDOWN,t))))}n(106);var T,I=n(62),D=function(){function e(t){Object(m.a)(this,e),this.roots=t,this.translator=new Map,this.equals=!0,this.context=void 0;var n=t,a=Object(I.a)(n);this.context=a.slice(0),this.compare()}return Object(d.a)(e,[{key:"compare",value:function(){var e=Object(E.a)(this.context,2),t=e[0],n=e[1];if(t instanceof y.Lambda&&n instanceof y.Lambda){var a=new Map(this.translator.entries());this.translator.set(t.argument.name(),n.argument.name()),this.context=[t.right,n.right],this.compare(),this.translator=a}else if(t instanceof y.Application&&n instanceof y.Application){if(this.context=[t.left,n.left],this.compare(),!this.equals)return;this.context=[t.right,n.right],this.compare()}else t instanceof y.Macro&&n instanceof y.Macro||t instanceof y.ChurchNumeral&&n instanceof y.ChurchNumeral?this.equals=t.name()===n.name():t instanceof y.Variable&&n instanceof y.Variable?this.translator.has(t.name())?this.equals=this.translator.get(t.name())===n.name():this.equals=t.name()===n.name():this.equals=!1}}]),e}();n(107);function M(e){var t=e.placeholder,n=e.content,a=e.caretPosition,o=e.syntaxError,r=e.submitOnEnter,s=e.onContent,c=e.onEnter,l=e.onExecute,u=n.split("\n").length;return i.a.createElement("div",{className:"editorContainer"},o?i.a.createElement("p",{className:"editorError"},"".concat(o)):null,i.a.createElement("div",{className:"editor"},i.a.createElement(P,{placeholder:t,content:n,lines:u,caretPosition:a,onChange:function(e){var t=e.target.value,n=e.target.selectionEnd;t=t.replace(/\\/g,"\u03bb"),s(t,n)},onKeyDown:function(e){e.shiftKey||e.ctrlKey||"Enter"!==e.key?e.ctrlKey&&"Enter"===e.key&&(e.preventDefault(),l()):r&&(e.preventDefault(),c())}})))}function P(e){var t=e.placeholder,n=e.content,a=e.lines,o=e.onChange,r=e.onKeyDown,s=e.caretPosition;return i.a.createElement("textarea",{className:"prompt",onKeyDown:r,onChange:o,value:n,placeholder:t,wrap:"hard",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,rows:Math.max(a,1),ref:function(e){null!==e&&(e.selectionStart=s,e.selectionEnd=s,e.focus())}})}function _(e){var t=e.className,n=e.isActive,a=e.editor,o=a.placeholder,r=a.content,s=a.caretPosition,c=a.syntaxError;return i.a.createElement("div",{className:"".concat(t," ").concat(n?"":" inactiveBox")},n?i.a.createElement("div",null,i.a.createElement(M,{placeholder:o,content:r,caretPosition:s,syntaxError:c,submitOnEnter:!0,onContent:e.onContent,onEnter:e.onEnter,onExecute:e.onExecute})):i.a.createElement("div",null,i.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",Math.max(0,e.history.length-1)," ",2===e.history.length?"step":"steps",". Double click to activate this box.")))}!function(e){e.ENTER_EXPRESSION="Enter Expression",e.ENTER_EXERCISE="Enter Exercise",e.NEXT_STEP="Next Step",e.RUN="Run",e.ENTER_MD="Enter MarkDown"}(T||(T={}));n(108);function F(e,t,n){try{window.ga.getAll()[0].send("event",e,t,n)}catch(a){console.log(""),console.log("PLEASE DISABLE YOUR ADBLOCKER OR ALLOW GOOGLE ANALYTICS FOR THIS SITE"),console.log(""),console.error(a)}}var U=function(e){function t(e,n,a,o){var r;return Object(m.a)(this,t),(r=Object(p.a)(this,Object(h.a)(t).call(this))).tree=e,r.onClick=n,r.reduction=a,r.breakpoints=o,r.rendered=null,r.argument=null,r.tree.visit(Object(f.a)(r)),r}return Object(b.a)(t,e),Object(d.a)(t,[{key:"printMultiLambda",value:function(e,t){var n=this;if(e.body instanceof y.Lambda){var a=e.body.argument,o="argument",r="";this.isBreakpoint(e.body.argument)&&(o+=" breakpoint",r="Will break on substitution");var s=!1;this.reduction instanceof y.Alpha&&Array.from(this.reduction.conversions).some((function(t){return t.identifier===e.body.identifier}))&&(this.argument=a,s=!0,o+=" alpha");var c=this.argument;this.argument!==e.body.argument&&null!==this.argument&&this.argument.name()===e.body.argument.name()&&(this.argument=null),this.argument&&this.argument.name()===a.name()&&(o+=" substitutedArg");var l=i.a.createElement("span",{className:"arguments"},t," "," ",i.a.createElement("span",{className:o,title:r,onClick:function(){a.identifier=Symbol(),n.onClick({type:y.ASTReductionType.BETA,context:a,broken:new Set}),F("Breakpoint added to argument","Breakpoint was added","")}},a.name()));this.printMultiLambda(e.body,l),!0===s&&(this.argument=null),this.argument=c}else{e.body.visit(this);var u=this.rendered;this.rendered=t,this.rendered=i.a.createElement("span",{className:"function"},"(",i.a.createElement("span",{className:"lambda"},"\u03bb "," "),t," . ",u,")")}}},{key:"isBreakpoint",value:function(e){var t=!0,n=!1,a=void 0;try{for(var o,r=this.breakpoints[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){if(o.value.context.identifier===e.identifier)return!0}}catch(i){n=!0,a=i}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return!1}}]),Object(d.a)(t,[{key:"print",value:function(){return this.rendered}},{key:"onApplication",value:function(e){var t="application",n="left",a="right",o=!1,r=null;if(this.reduction instanceof y.Beta&&(r=this.reduction.redex),this.reduction instanceof y.Gama&&this.reduction.args.includes(e)&&(t+=" redex abstraction argument"),null!==r&&r.identifier===e.identifier&&r===e&&(n+=" redex",a+=" redex",e.left instanceof y.Lambda&&(this.argument=e.left.argument,o=!0)),e.right instanceof y.Application){e.left.visit(this);var s=i.a.createElement("span",{className:n},this.rendered);o&&(this.argument=null),e.right.visit(this);var c=i.a.createElement("span",{className:a},"( ",this.rendered," )");this.rendered=i.a.createElement("span",{className:t},s," ",c)}else{e.left.visit(this);var l=i.a.createElement("span",{className:n},this.rendered);o&&(this.argument=null),e.right.visit(this);var u=i.a.createElement("span",{className:a},this.rendered);this.rendered=i.a.createElement("span",{className:t},l," ",u)}}},{key:"onLambda",value:function(e){var t=this,n="",a=this.argument;if(this.argument!==e.argument&&null!==this.argument&&this.argument.name()===e.argument.name()&&(this.argument=null),e.body instanceof y.Lambda){var o=e.argument,r="argument";this.isBreakpoint(e.argument)&&(r+=" breakpoint",n="Will break on substitution"),this.argument&&this.argument.name()===o.name()&&(r+=" substitutedArg");var s=i.a.createElement("span",{className:r,title:n,onClick:function(){o.identifier=Symbol(),t.onClick({type:y.ASTReductionType.BETA,context:o,broken:new Set}),F("Breakpoint added to argument","Breakpoint was added","")}},e.argument.name());this.printMultiLambda(e,s)}else{var c=e.argument;e.body.visit(this);var l=this.rendered,u="argument",m="";this.isBreakpoint(e.argument)&&(u+=" breakpoint",m="Will break on substitution"),this.argument&&this.argument.name()===c.name()&&(u+=" substitutedArg"),this.rendered=i.a.createElement("span",{className:"function"},"(",i.a.createElement("span",{className:"lambda"},"\u03bb "," "),i.a.createElement("span",{className:"arguments",onClick:function(){c.identifier=Symbol()}},i.a.createElement("span",{className:u,title:m,onClick:function(){c.identifier=Symbol(),t.onClick({type:y.ASTReductionType.BETA,context:c,broken:new Set}),F("Breakpoint added","Breakpoint was added","")}},e.argument.name())," "),". ",l,")")}this.argument=a,null!==a&&(this.argument=a)}},{key:"onChurchNumeral",value:function(e){var t=this,n="churchnumeral",a=null,o="";this.reduction instanceof y.Expansion&&(a=this.reduction.target),this.reduction instanceof y.Gama&&this.reduction.args.includes(e)&&(n+=" redex abstraction argument"),null!==a&&a.identifier===e.identifier&&a===e&&(n+=" redex"),this.isBreakpoint(e)&&(n+=" breakpoint",o="Will break on Expansion"),this.rendered=i.a.createElement("span",{className:n,title:o,onClick:function(){e.identifier=Symbol(),t.onClick({type:y.ASTReductionType.EXPANSION,context:e,broken:new Set}),F("Breakpoint added to ChurchNumeral","Breakpoint was added","")}},e.name())}},{key:"onMacro",value:function(e){var t=this,n="macro",a=null,o="";if(this.reduction instanceof y.Expansion&&(a=this.reduction.target),this.reduction instanceof y.Gama){if(this.reduction.redexes.includes(e))a=Object(E.a)(this.reduction.redexes,1)[0],n+=" redex abstraction";this.reduction.args.includes(e)&&(n+=" redex abstraction argument")}null!==a&&a.identifier===e.identifier&&a===e&&(n+=" redex"),this.isBreakpoint(e)&&(n+=" breakpoint",o="Will break on Expansion"),this.rendered=i.a.createElement("span",{className:n,title:o,onClick:function(){e.identifier=Symbol(),t.onClick({type:y.ASTReductionType.EXPANSION,context:e,broken:new Set}),F("Breakpoint added to Macro","Breakpoint was added","")}},e.name())}},{key:"onVariable",value:function(e){var t="variable";this.argument&&this.argument.name()===e.name()&&(t+=" substitutedArg",this.reduction instanceof y.Alpha&&(t+=" alpha")),this.rendered=i.a.createElement("span",{className:t},e.name())}}]),t}(y.ASTVisitor);function W(e){var t=e.lastReduction;return null===t?null:t.type===y.ASTReductionType.BETA?i.a.createElement("p",{className:"lastReduction"},"\u03b2 reduction"):t.type===y.ASTReductionType.ALPHA?i.a.createElement("p",{className:"lastReduction"},"\u03b1 conversion"):t.type===y.ASTReductionType.EXPANSION?i.a.createElement("p",{className:"lastReduction"},"Macro expansion"):t.type===y.ASTReductionType.GAMA?i.a.createElement("p",{className:"lastReduction"},"Simplified Application"):null}var Y=Object(r.memo)((function(e){var t=e.stepRecord,n=e.addBreakpoint,a=e.breakpoints,o=e.children,r=e.strategy,s=t.ast,c=t.lastReduction,l=t.step;t.message;if(null===s)return null;var u=new(H(r))(s).nextReduction,m=new U(s,n,u,a),d=0===t.message.indexOf("Incorrect step."),p=0===t.message.indexOf("Correct."),h=d||p;return i.a.createElement("span",{className:"step"},i.a.createElement(W,{lastReduction:c}),i.a.createElement("div",{className:"inlineblock"},i.a.createElement("p",{className:"stepNumber"},l," :"),m.print(),o,""===t.message?null:!1===h?i.a.createElement("p",{className:"stepMessage"},t.message):!0===d?i.a.createElement("p",{className:"stepMessage incorrect"},"Incorrect input: ",i.a.createElement("i",{className:"userInput"},"`",t.message.substr(15),"`")):i.a.createElement("p",{className:"stepMessage correct"},t.message)))}),(function(e){return!e.lastStep}));function V(e){return i.a.createElement(Y,Object.assign({},e,{strategy:g.NORMAL}))}function K(e){var t=e.className;return i.a.createElement("div",{className:t+" inactiveBox"},i.a.createElement("ul",{className:"UL"},i.a.createElement("li",{key:0,className:"activeStep LI"},i.a.createElement(V,{breakpoints:e.breakpoints,addBreakpoint:function(){},stepRecord:e.history[0],lastStep:!1}))),i.a.createElement("p",{className:"inactiveMessage"},"Collapsing ",e.history.length-1," ",2===e.history.length?"step":"steps",". Double click to activate this box."))}var G=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).addBreakpoint=n.addBreakpoint.bind(Object(f.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.isExercise,t.state,t.editor),o=a.placeholder,r=a.content,s=a.caretPosition,c=a.syntaxError;return i.a.createElement("div",{className:n},i.a.createElement("ul",{className:"UL"},function(e,t,n,a){for(var o=new Array(t-e+1),r=0,i=e;i<=t;++i)o[r++]=a(n[i],i);return o}(0,this.props.history.length-2,this.props.history,(function(t,n){return i.a.createElement("li",{key:n.toString(),className:"inactiveStep LI"},i.a.createElement(V,{breakpoints:e.props.breakpoints,addBreakpoint:function(){},stepRecord:t,lastStep:!1},i.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return e.props.addBox(e.props.createBoxFrom(t))}})))})),i.a.createElement("li",{key:this.props.history.length-1,className:"activeStep LI"},i.a.createElement(V,{breakpoints:this.props.breakpoints,addBreakpoint:this.addBreakpoint,stepRecord:this.props.history[this.props.history.length-1],lastStep:!0},i.a.createElement("i",{className:"hiddenIcon fas fa-pencil-alt",title:"Copy this to new box",onClick:function(){return e.props.addBox(e.props.createBoxFrom(e.props.history[e.props.history.length-1]))}})))),this.props.isNormalForm?null:i.a.createElement(M,{placeholder:o,content:r,caretPosition:s,syntaxError:c,submitOnEnter:!0,onContent:this.props.onContent,onEnter:this.props.onEnter,onExecute:this.props.onExecute}))}},{key:"addBreakpoint",value:function(e){var t=this.props,n=t.state;(0,t.setBoxState)(Object(l.a)({},n,{breakpoints:[].concat(Object(u.a)(n.breakpoints),[e])}))}}]),t}(r.PureComponent);function H(e){switch(e){case g.NORMAL:return y.NormalEvaluator;case g.APPLICATIVE:return y.ApplicativeEvaluator;case g.OPTIMISATION:return y.OptimizeEvaluator;case g.ABSTRACTION:return y.NormalAbstractionEvaluator}}var q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).onContent=n.onContent.bind(Object(f.a)(n)),n.onSubmitExpression=n.onSubmitExpression.bind(Object(f.a)(n)),n.parseExpression=n.parseExpression.bind(Object(f.a)(n)),n.onEnter=n.onEnter.bind(Object(f.a)(n)),n.onExerciseStep=n.onExerciseStep.bind(Object(f.a)(n)),n.onStep=n.onStep.bind(Object(f.a)(n)),n.onExecute=n.onExecute.bind(Object(f.a)(n)),n.onRun=n.onRun.bind(Object(f.a)(n)),n.onStop=n.onStop.bind(Object(f.a)(n)),n.shouldBreak=n.shouldBreak.bind(Object(f.a)(n)),n.createBoxFrom=n.createBoxFrom.bind(Object(f.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.state,n=e.isActive,a=e.addBox,o=t.history,r=t.breakpoints,s=t.isExercise,c=(t.strategy,t.expression),l=t.editor,u="box boxEval",m=(o.length?o[o.length-1]:{isNormalForm:!1}).isNormalForm;return""===c?i.a.createElement(_,{className:u,isActive:this.props.isActive,editor:l,history:o,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute}):(s&&(u+=" boxExercise"),n?i.a.createElement(G,{className:u,isExercise:s,state:t,breakpoints:r,history:o,editor:l,isNormalForm:m,createBoxFrom:this.createBoxFrom,setBoxState:this.props.setBoxState,onContent:this.onContent,onEnter:this.onEnter,onExecute:this.onExecute,addBox:a}):i.a.createElement(K,{className:u,breakpoints:r,history:o,createBoxFrom:this.createBoxFrom}))}},{key:"createBoxFrom",value:function(e){var t=this.props.state,n=t.strategy,o=t.SLI,r=t.expandStandalones,i=e.ast.toString();return{type:a.UNTYPED_LAMBDA,__key:Date.now().toString(),title:"",expression:"",ast:null,history:[],isRunning:!1,breakpoints:[],timeoutID:void 0,timeout:10,isExercise:!1,strategy:n,SLI:o,expandStandalones:r,editor:{placeholder:x.EVAL_MODE,content:i,caretPosition:i.length,syntaxError:null}}}},{key:"onContent",value:function(e,t){var n=this.props,a=n.state;(0,n.setBoxState)(Object(l.a)({},a,{editor:Object(l.a)({},a.editor,{content:e,caretPosition:t,syntaxError:null})}))}},{key:"onEnter",value:function(){var e=this.props.state,t=e.expression,n=e.isExercise,a=e.editor.content;""===t?this.onSubmitExpression():""!==a&&n?this.onExerciseStep():""!==a||n?console.log("Error: Something unexpected just happened. A"):this.onStep()}},{key:"onSubmitExpression",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.editor.content;try{var o=this.parseExpression(a);n(Object(l.a)({},t,{ast:o,expression:a,history:[{ast:o.clone(),lastReduction:new y.None,step:0,message:"",isNormalForm:!1}],editor:{content:"",caretPosition:0,placeholder:x.EVAL_MODE,syntaxError:null}})),F("Submit Expression","submit valid",a)}catch(r){n(Object(l.a)({},t,{editor:Object(l.a)({},t.editor,{syntaxError:r.toString()})})),F("Submit Expression","submit invalid",a)}}},{key:"onExerciseStep",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.strategy,o=t.history,r=t.editor.content;try{var i=this.parseExpression(r),s=o[o.length-1],c=s.isNormalForm,m=s.step,d=s.ast,p=s.lastReduction;if(d=d.clone(),c)return s.message="No more steps available. Expression is in normal form.",n(Object(l.a)({},t)),void F("Exercise Step","Step Already in normal form",r);var h=new(H(a))(d);if(p=h.nextReduction,h.nextReduction instanceof y.None)return s.isNormalForm=!0,s.message="Expression is already in normal form.",n(Object(l.a)({},t)),void F("Exercise Step","Step Already in Normal Form",r);d=h.perform();var f="";new D([i,d]).equals?(d=i,f="Correct.",F("Exercise Step","Valid Step",r)):(console.log("Incorrect step"),f="Incorrect step. ".concat(r),F("Exercise Step","Invalid Step",r)),n(Object(l.a)({},t,{history:[].concat(Object(u.a)(o),[{ast:d,lastReduction:p,step:m+1,message:f,isNormalForm:!1}]),editor:Object(l.a)({},t.editor,{content:"",caretPosition:0,placeholder:x.VALIDATE_MODE,syntaxError:null})}))}catch(b){F("Exercise Step","Syntax error in Step",r)}}},{key:"onStep",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.strategy,o=t.history,r=(t.editor.content,o[o.length-1]),i=r.isNormalForm,s=r.step,c=r.ast,m=r.lastReduction;if(c=c.clone(),!i){var d=new(H(a))(c);if(m=d.nextReduction,d.nextReduction instanceof y.None)return r.isNormalForm=!0,r.message="Expression is in normal form.",n(Object(l.a)({},t)),void F("Evaluation Step","Step Normal Form Reached",c.toString());((c=d.perform())instanceof y.Macro||c instanceof y.ChurchNumeral)&&(r.isNormalForm=!0,r.message="Expression is in normal form.",F("Evaluation Step","Step Normal Form Reached with Number or Macro",c.toString())),n(Object(l.a)({},t,{history:[].concat(Object(u.a)(o),[{ast:c,lastReduction:m,step:s+1,message:"",isNormalForm:!1}])})),F("Evaluation Step","Step",c.toString())}}},{key:"onExecute",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.isRunning;if(!t.isExercise)if(a)this.onStop();else{var o=t.timeout,r=t.history,i=r[r.length-1];if(i.isNormalForm)return;var s=i.ast,c=i.step,u=i.lastReduction,m=i.isNormalForm;i.message;r.push(r[r.length-1]),r[r.length-2]={ast:s.clone(),step:c,lastReduction:u,message:"Skipping some steps...",isNormalForm:m},n(Object(l.a)({},t,{isRunning:!0,timeoutID:window.setTimeout(this.onRun,o)})),F("Execution","Run Evaluation",s.toString())}}},{key:"onRun",value:function(){var e=this,t=this.props,n=t.state,a=t.setBoxState,o=n.strategy,r=n.history,i=n.isRunning,s=n.breakpoints,c=n.timeoutID,u=n.timeout,m=r[r.length-1],d=m.isNormalForm,p=m.step,h=m.lastReduction;if(i)if(d)a(Object(l.a)({},n,{isRunning:!1,timeoutID:void 0}));else{var f=m.ast,b=new(H(o))(f);if(h=b.nextReduction,b.nextReduction instanceof y.None)return r.pop(),r.push({ast:f,lastReduction:m.lastReduction,step:p,message:"Expression is in normal form.",isNormalForm:!0}),void a(Object(l.a)({},n,{isRunning:!1,timeoutID:void 0}));var E=s.find((function(t){return e.shouldBreak(t,b.nextReduction)}));if(void 0!==E)return b.nextReduction instanceof y.Expansion&&E.broken.add(b.nextReduction.target),b.nextReduction instanceof y.Beta&&b.nextReduction.redex.left instanceof y.Lambda&&E.broken.add(b.nextReduction.redex.left.argument),window.clearTimeout(c),F("Evaluation Run Ended","Breakpoint was reached",f.toString()),void a(Object(l.a)({},n,{isRunning:!1,timeoutID:c}));f=b.perform(),r[r.length-1]={ast:f,lastReduction:h,step:p+1,message:"",isNormalForm:d},(f instanceof y.Macro||f instanceof y.ChurchNumeral)&&(r[r.length-1]={ast:f,lastReduction:h,step:p+1,message:"Expression is in normal form.",isNormalForm:!0},F("Evaluation Run Ended","Step Normal Form Reached with Number or Macro",f.toString())),a(Object(l.a)({},n,{timeoutID:window.setTimeout(this.onRun,u)}))}}},{key:"onStop",value:function(){var e=this.props,t=e.state,n=e.setBoxState,a=t.timeoutID;window.clearTimeout(a),n(Object(l.a)({},t,{isRunning:!1,timeoutID:void 0}))}},{key:"shouldBreak",value:function(e,t){return t.type===e.type&&t instanceof y.Beta&&e.context instanceof y.Variable&&t.redex.left instanceof y.Lambda&&t.redex.left.argument.identifier===e.context.identifier&&!e.broken.has(t.redex.left.argument)||(t.type===e.type&&t instanceof y.Expansion&&e.context instanceof y.ChurchNumeral&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target)||t.type===e.type&&t instanceof y.Expansion&&e.context instanceof y.Macro&&t.target.identifier===e.context.identifier&&!e.broken.has(t.target))}},{key:"parseExpression",value:function(e){var t=this.props.state.SLI,n=Object(y.tokenize)(e,{lambdaLetters:["\u03bb"],singleLetterVars:t});return Object(y.parse)(n,{})}}]),t}(r.PureComponent),J=(n(50),n(51));function X(e){var t=e.state,n=t.note,a=t.editor,o=a.placeholder,r=a.content,s=a.caretPosition,c=a.syntaxError,u=t.isEditing,m=e.isActive,d=e.setBoxState;return u&&m?i.a.createElement("div",{className:"box boxNoteEditor"},i.a.createElement(M,{placeholder:o,content:r,caretPosition:s,syntaxError:c,submitOnEnter:!1,onContent:function(t,n){d(Object(l.a)({},e.state,{note:t,editor:Object(l.a)({},e.state.editor,{content:t,caretPosition:n,syntaxError:null})}))},onEnter:function(){},onExecute:function(){}})):i.a.createElement("div",{className:"box boxNote"},i.a.createElement(J,{className:"markdown-body",source:n}))}function z(e){var t=e.state,n=e.isActive,o=e.updateBoxState,r=e.addBox,s=t.type;return s===a.UNTYPED_LAMBDA?i.a.createElement(q,{state:t,isActive:n,setBoxState:o,addBox:r}):s===a.MARKDOWN?i.a.createElement(X,{state:t,isActive:n,setBoxState:o}):i.a.createElement("div",null,"Uknown BOX")}n(60),n(193);var $=n(43).Switch;function Q(e){var t=e.isExercise,n=e.makeExercise,a=e.endExercise;return i.a.createElement("div",{className:"controls"},i.a.createElement("div",{title:"Write the next step yourself"},i.a.createElement($,{className:"control",checked:t,onChange:function(e){return e.target.checked?n():a()},shape:"fill"},"Exercise")))}function Z(e){var t=e.state,n=(e.isActive,e.removeBox),a=e.updateBoxState,o=t.isExercise,r=(t.editor,t.expression),s=t.title;return i.a.createElement("div",{className:"boxTopBar"},i.a.createElement("div",{className:"topBarTitle",contentEditable:!0,onBlur:function(e){return a(Object(l.a)({},t,{title:e.target.textContent||""}))}},""===s?"Click Here to Change the Title":s),""===r?null:i.a.createElement(Q,{isExercise:o,makeExercise:function(){return a(Object(l.a)({},t,{isExercise:!0,editor:Object(l.a)({},t.editor,{placeholder:x.VALIDATE_MODE})}))},endExercise:function(){return a(Object(l.a)({},t,{isExercise:!1,editor:Object(l.a)({},t.editor,{placeholder:x.EVAL_MODE})}))}}),i.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:n,title:"Remove this Box"}))}n(194);var ee=n(43).Switch;function te(e){var t=e.state,n=(e.isActive,e.removeBox),a=e.updateBoxState,o=(t.note,t.isEditing),r=t.title;return i.a.createElement("div",{className:"boxTopBar"},i.a.createElement("div",{className:"topBarTitle",contentEditable:!0,onBlur:function(e){return a(Object(l.a)({},t,{title:e.target.textContent||""}))}},""===r?"Click Here to Change the Title":r),i.a.createElement("div",{className:"controls",title:"Edit as Markdown"},i.a.createElement(ee,{className:"control",checked:o,onChange:function(e){return a(Object(l.a)({},t,{isEditing:e.target.checked}))},shape:"fill"},"Editing")),i.a.createElement("i",{className:"removeBox far fa-trash-alt",onClick:n,title:"Remove this Box"}))}function ne(e){var t=e.state,n=e.isActive,o=e.updateBoxState,r=e.removeBox,s=t.type;return s===a.UNTYPED_LAMBDA?i.a.createElement(Z,{state:t,isActive:n,removeBox:r,updateBoxState:o}):s===a.MARKDOWN?i.a.createElement(te,{state:t,isActive:n,removeBox:r,updateBoxState:o}):i.a.createElement("div",null,"Uknown BOX")}function ae(e){var t=e.isActiveBox,n=e.box,o=e.makeActive,r=e.updateBoxState,s=e.insertBefore,c=e.removeBox,l=function(e){switch(e){case a.UNTYPED_LAMBDA:return"untypedLambdaBox";case a.MARKDOWN:return"markDownBox";default:return""}}(n.type);return i.a.createElement("div",{className:"boxContainer ".concat(t?"active":"inactive"," ").concat(l),onDoubleClick:function(){return o()}},i.a.createElement(ne,{state:n,isActive:t,removeBox:function(){return c()},updateBoxState:function(e){return r(e)}}),i.a.createElement(z,{state:n,isActive:t,updateBoxState:function(e){return r(e)},addBox:function(e){return s(e)}}))}var oe=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).insertBefore=n.insertBefore.bind(Object(f.a)(n)),n.removeBox=n.removeBox.bind(Object(f.a)(n)),n.updateBoxState=n.updateBoxState.bind(Object(f.a)(n)),n.makeActive=n.makeActive.bind(Object(f.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.state,a=t.settings,o=n.activeBoxIndex,r=n.boxList,s=n.allowedBoxes;return i.a.createElement("div",{className:"mainSpace"},i.a.createElement("ul",{className:"boxList UL"},r.map((function(t,n){return i.a.createElement("li",{className:"LI",key:t.__key},i.a.createElement(C,{addNew:function(t){return e.insertBefore(n,t)},whiteList:s,settings:a}),i.a.createElement(ae,{box:t,isActiveBox:o===n,insertBefore:function(t){return e.insertBefore(n,t)},makeActive:function(){return e.makeActive(n)},removeBox:function(){return e.removeBox(n)},updateBoxState:function(t){return e.updateBoxState(n,t)}}))})),i.a.createElement(C,{addNew:function(t){return e.insertBefore(n.boxList.length,t)},whiteList:s,settings:a})))}},{key:"insertBefore",value:function(e,t){var n=this.props.state.boxList;n.splice(e,0,t),this.props.updateNotebook(Object(l.a)({},this.props.state,{boxList:n,activeBoxIndex:e}))}},{key:"removeBox",value:function(e){var t,n=this.props.state,a=n.boxList,o=n.activeBoxIndex,r=(t=e)<o?o-1:t>o?o:1===a.length?NaN:0===t?t:t-1;a.splice(e,1),this.props.updateNotebook(Object(l.a)({},this.props.state,{boxList:a,activeBoxIndex:r}))}},{key:"updateBoxState",value:function(e,t){var n=this.props.state.boxList;n[e]=t,this.props.updateNotebook(Object(l.a)({},this.props.state,{boxList:n}))}},{key:"makeActive",value:function(e){var t,n=this.props.state,o=n.activeBoxIndex,r=n.boxList;switch(r[o].type){case a.UNTYPED_LAMBDA:break;case a.MARKDOWN:r[o]=(t=r[o],Object(l.a)({},t,{isEditing:!1}))}e!==o&&this.props.updateNotebook(Object(l.a)({},this.props.state,{activeBoxIndex:e,boxList:r}))}}]),t}(r.PureComponent),re=n(51);function ie(e){return i.a.createElement("div",{className:"helpSpace"},i.a.createElement(re,{className:"markdown-body",source:"# User guide\n\n## Typing expressions\n#### To write lambda expression you simply type in the prompt.\n\n## Typing \u03bb symbol\n#### If you want to write `\u03bb` symbol you simply type `\\` and Lambdulus will take care of the rest.\n\n## Multiple expressions\n#### You can also have many submitted expressions. To submit another expression you need to open new empty `expression box` by clicking on the `\u03bb` inside the `+\u03bb +Macro +MD` panel at the end of the notebook.\n\n## Single Letter Names (SLI)\n#### You can write lambda functions and omit whitespaces such as `(\u03bbabc.cba) 2 1 +`. To do that you have to check switch `Single Letter Names` at the top of the page.\n\n## Evaluation Strategies\n#### We have option to select from 3 evaluation strategies. The `Simplified` strategy is specific evaluation order which evaluates built-in macros atomicaly. The `Normal` and the `Applicative` strategies are sort of self describing.\n\n## Macros\n#### If you want to define your own macro - you can. You must first create empty `macro box` by clicking on the `+Macro` inside the `+\u03bb +Macro +MD` panel at the end of the notebook. Then you write macro name followed by symbol `:=` and then valid lambda expression.\n\n## Macro Definition\n#### Inside the macro definition you can reference any valid macro which is already defined or will be defined in the future. Yes you can reference macro you are just defining inside it's own definition - whether you should or not is up to you.\n\n## List All Macros\n#### If you want to list all defined macros - built-ins and also your macros - you simply click on the `Macro` icon at the top or on the left of the page.\n\n## Remove User Macro\n#### To remove user macros - `because you can not remove built-ins` - first show all macros and then hover your mouse over the macro you want to remove and click the `trash bin` icon.\n\n## Redefine User Macro\n#### To redefine user macro - `because you can not redefine built-ins` - just create new empty `macro box` and define the already existing macro again - this time with different macro definition.\n\n## Report a Bug or Request New Features\n#### If you want to report a bug or you need some feature - click on the `Issues` button on the left or at the top of the page. Then fill in the issue on the GitHub page of the project. Definitely don't forget to check if the corresponding issue already exist.\n"}))}var se=n(43),ce=se.Switch,le=se.Radio;function ue(e){var t=e.settings,n=e.change,a=t.SLI,o=t.expandStandalones,r=t.strategy;return i.a.createElement("div",{className:"untypedLambdaSettings"},i.a.createElement("h3",null,"Untyped Lambda Calculus"),i.a.createElement("span",{title:"Letters as names without spaces"},i.a.createElement(ce,{checked:a,disabled:!1,shape:"fill",onChange:function(e){return n(Object(l.a)({},t,{SLI:e.target.checked}))}},"Single Letter Names")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("span",{title:"Expand stand-alones"},i.a.createElement(ce,{checked:o,disabled:!1,shape:"fill",onChange:function(e){return n(Object(l.a)({},t,{expandStandalones:e.target.checked}))}},"Expand stand-alones")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"strategies inlineblock"},i.a.createElement("p",{className:"stratsLabel inlineblock"},"Evaluation Strategies:"),i.a.createElement(le,{name:"strategy",style:"fill",checked:r===g.ABSTRACTION,onChange:function(){return n(Object(l.a)({},t,{strategy:g.ABSTRACTION}))}},"Simplified"),i.a.createElement(le,{name:"strategy",style:"fill",checked:r===g.NORMAL,onChange:function(){return n(Object(l.a)({},t,{strategy:g.NORMAL}))}},"Normal"),i.a.createElement(le,{name:"strategy",style:"fill",checked:r===g.APPLICATIVE,onChange:function(){return n(Object(l.a)({},t,{strategy:g.APPLICATIVE}))}},"Applicative")))}function me(e){var t=e.settings,n=e.updateSettings,a=t[N];return i.a.createElement("div",{className:"settingsSpace"},i.a.createElement(ue,{settings:a,change:function(e){return n(Object(l.a)({},t,Object(v.a)({},N,e)))}}))}var de=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state=w(),n.setScreen=n.setScreen.bind(Object(f.a)(n)),n.updateNotebook=n.updateNotebook.bind(Object(f.a)(n)),n.changeNotebook=n.changeNotebook.bind(Object(f.a)(n)),n.removeNotebook=n.removeNotebook.bind(Object(f.a)(n)),n.updateSettings=n.updateSettings.bind(Object(f.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.notebookList,a=t.currentNotebook,r=t.currentScreen,s=n[a],c=s.settings;return i.a.createElement("div",{id:"app"},i.a.createElement(L,{state:this.state,onScreenChange:this.setScreen,onImport:function(){},onNotebookChange:this.changeNotebook,onAddNotebook:function(t){return e.setState({notebookList:[].concat(Object(u.a)(e.state.notebookList),[t]),currentNotebook:e.state.currentNotebook+1})},onSelectNotebook:function(t){return e.setState({currentNotebook:t})},onDeleteNotebook:function(t){return e.removeNotebook(t)}}),r===o.MAIN?i.a.createElement(oe,{state:s,updateNotebook:e.updateNotebook,settings:c}):r===o.HELP?i.a.createElement(ie,null):r===o.SETTINGS?i.a.createElement(me,{settings:c,updateSettings:e.updateSettings}):void 0)}},{key:"setScreen",value:function(e){this.setState({currentScreen:e})}},{key:"updateNotebook",value:function(e){var t,n=this.state,a=n.notebookList;a[n.currentNotebook]=e,this.setState({notebookList:a}),t=Object(l.a)({},this.state),localStorage.setItem("AppState",JSON.stringify(t))}},{key:"changeNotebook",value:function(e){this.setState({currentNotebook:e})}},{key:"removeNotebook",value:function(e){var t,n=this.state,a=n.notebookList,o=n.currentNotebook,r=(t=e)<o?o-1:t>o?o:1===a.length?NaN:0===t?t:t-1;Number.isNaN(r)||(a.splice(e,1),this.setState({notebookList:a,currentNotebook:r}))}},{key:"updateSettings",value:function(e){var t,n=this.state,a=n.currentNotebook,o=n.notebookList;o[a].settings=e,this.setState({notebookList:o}),t=e,window.localStorage.setItem("global-settings",JSON.stringify(t))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,n){e.exports=n(195)},68:function(e,t,n){},69:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.19d82151.chunk.js.map