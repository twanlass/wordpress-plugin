;var SGEmbed=SGEmbed||{init:function(){if(this.isMobile()||this.isIE()<9)return;this.injectLoader(),this.injectCSS(),this.attachClickHandlers(),this.attachMessageReceiver()},getEnv:function(e){if(typeof e=="undefined")return"";if(typeof e.href!="undefined")n=e.toString();else var t=e.currentTarget?e.currentTarget:e.srcElement,n=t.toString();if(n.indexOf("localhost:3000")!=-1)return{env:"http://localhost:3000",cdn:"http://localhost:3000"};if(n.indexOf("staging")!=-1)return{env:"http://staging.simplegoods.co",cdn:"https://d1rcyly7o15euj.cloudfront.net"};if(n.indexOf("simplegoods.co")!=-1)return{env:"https://www.simplegoods.co",cdn:"https://d3cir4unl8h07a.cloudfront.net"}},getAttr:function(e,t){return typeof e.attributes[t]=="undefined"?e.getAttribute(t):e.attributes[t].nodeValue},isMobile:function(){var e=navigator.userAgent||navigator.vendor||window.opera,t=/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|silk|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4));return t},isIE:function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e},parseEmbeds:function(){var e=document.getElementsByTagName("a"),t=[];for(var n=0;n<e.length;n++)link=e[n].toString().split("/").splice(-2,2),(link[0]=="embed"||link[0]=="i")&&t.push(e[n]);return t},attachClickHandlers:function(){var e=this,t=this.parseEmbeds(),n=document.body;if(n.addEventListener)for(var r=0;r<t.length;r++)t[r].addEventListener("click",function(t){e.insert(t)},!0);else if(n.attachEvent)for(var r=0;r<t.length;r++)t[r].attachEvent("onclick",function(t){e.insert(t)})},attachMessageReceiver:function(){var e=this,t=document.body;t.addEventListener?addEventListener("message",function(t){e.dispatcher(t)},!1):t.attachEvent&&attachEvent("onmessage",function(t){e.dispatcher(t)})},messageSender:function(e,t){var n=document.getElementById("SGEmbed_"+t);n.contentWindow.postMessage(e,"*")},dispatcher:function(e){var t=e.data.split("_");t[0]=="hide"&&this.hide(t[1]),t[0]=="show"&&this.show(t[1]),t[0]=="success"&&this.eventer("success",{transaction_id:t[1],email:t[2],product_name:t[3],price:t[4]})},eventer:function(e,t){if(this.isIE())return;var n=new CustomEvent(e,{detail:t,bubbles:!0});document.getElementById("SGEmbed").dispatchEvent(n)},injectCSS:function(){var e=this.getEnv(this.parseEmbeds()[0]);if(e){var t=document.createElement("link");t.href=e.cdn+"/assets/simple-goods.css",t.type="text/css",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)}},injectLoader:function(){var e=document.createElement("div");e.setAttribute("id","SGEmbed"),e.setAttribute("style",'display: none; visibility: visible !important; z-index: 99999 !important; width: 32px !important; top: 50% !important; position: fixed !important; padding: 10px !important; margin: -26px !important; left: 50% !important; height: 32px !important; border-radius: 8px 8px 8px 8px !important; border: 3px solid rgba(0, 0, 0, 0.05) !important; background: url("https://d3cir4unl8h07a.cloudfront.net/assets/ajax_loader_sm.gif") no-repeat scroll center center rgb(255, 255, 255) !important; box-shadow: 0 0 15px rgba(0,0,0,.3) !important;'),document.body.appendChild(e)},create:function(e){var t=this,n=this.token(e),r=document.createElement("iframe");r.setAttribute("id","SGEmbed_"+n),r.setAttribute("frameborder","0"),r.setAttribute("allowtransparency","true"),r.setAttribute("scrolling","auto"),r.setAttribute("style","background-color: transparent !important; border: none !important; overflow: auto !important; margin: 0px !important; padding: 0px !important; position: fixed !important; left: 0px !important; top: 0px !important; width: 100% !important; height: 100% !important; z-index: 99999 !important; visibility: visible !important; display: block !important;");var i=document.createElement("div");return i.setAttribute("id","SGEmbed_DIV_"+n),i.setAttribute("style","display: none; width: 100%; height: 100%;"),{div:i,iframe:r}},insert:function(e){e&&e.preventDefault?e.preventDefault():e.returnValue=!1;var t=this,n=e.currentTarget?e.currentTarget:e.srcElement,r=document.getElementById("SGEmbed_DIV_"+this.token(e));if(this.getAttr(n,"target")=="_blank")return window.open(n,"_blank"),!1;if(!r){this.loading(!0);var i=this.create(e),s=this.getEnv(e);document.body.appendChild(i.div),document.getElementById("SGEmbed_DIV_"+this.token(e)).appendChild(i.iframe),document.getElementById("SGEmbed_"+this.token(e)).src=s.env+"/embed/"+this.token(e)}else this.show(this.token(e))},show:function(e){document.getElementById("SGEmbed_DIV_"+e).style.display="block",this.messageSender("show",e),this.loading(!1),this.eventer("show",{})},hide:function(e){document.getElementById("SGEmbed_DIV_"+e).style.display="none",this.messageSender("hide",e),this.eventer("hide",{})},loading:function(e){e?document.getElementById("SGEmbed").style.display="block":document.getElementById("SGEmbed").style.display="none"},token:function(e){var t=e.currentTarget?e.currentTarget:e.srcElement;return t.toString().split("/").splice(-2,2)[1]}};(function(){function o(){if(!i){i=!0;if(s){for(var e=0;e<s.length;e++)s[e].call(window,[]);s=[]}}}function u(e){var t=window.onload;typeof window.onload!="function"?window.onload=e:window.onload=function(){t&&t(),e()}}function a(){if(r)return;r=!0,document.addEventListener&&!n.opera&&document.addEventListener("DOMContentLoaded",o,!1),n.msie&&window==top&&function(){if(i)return;try{document.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}o()}(),n.opera&&document.addEventListener("DOMContentLoaded",function(){if(i)return;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].disabled){setTimeout(arguments.callee,0);return}o()},!1);if(n.safari){var e;(function(){if(i)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return}if(e===undefined){var t=document.getElementsByTagName("link");for(var n=0;n<t.length;n++)t[n].getAttribute("rel")=="stylesheet"&&e++;var r=document.getElementsByTagName("style");e+=r.length}if(document.styleSheets.length!=e){setTimeout(arguments.callee,0);return}o()})()}u(o)}var e=window.DomReady={},t=navigator.userAgent.toLowerCase(),n={version:(t.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(t),opera:/opera/.test(t),msie:/msie/.test(t)&&!/opera/.test(t),mozilla:/mozilla/.test(t)&&!/(compatible|webkit)/.test(t)},r=!1,i=!1,s=[];e.ready=function(e,t){a(),i?e.call(window,[]):s.push(function(){return e.call(window,[])})},a()})(),DomReady.ready(function(){SGEmbed.init()});