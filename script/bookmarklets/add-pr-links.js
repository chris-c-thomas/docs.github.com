javascript:void%20function(){!async%20function(){function%20a(a,b,c){var%20d=document.createElement(%22A%22);return%20d.innerHTML=b,d.href=c,d.target=%22_blank%22,a.appendChild(d),a}const%20b=/https:\/\/github.com\/github\/([^\/]*)\/pull\/\d*\/files/;if(!window.location.href.match(b))return%20void%20window.alert(%22You're%20not%20on%20a%20PR%20'Files%20changed'%20page.%20\uD83D\uDE43%22);let%20c=window.location.href.replace(/files.*/g,%22%22),d=await%20fetch(c).then(function(a){return%20a.text()}).then(function(a){for(var%20b=new%20DOMParser,c=b.parseFromString(a,%22text/html%22),d=c.getElementsByClassName(%22TimelineItem%22),e=0;e%3Cd.length;e++)for(var%20f,g=d[e],h=g.getElementsByTagName(%22a%22),k=0;k%3Ch.length;k++)if(f=h[k],f.innerText.match(/View%20deployment/))var%20l=f.getAttribute(%22href%22);return%20l});if(null==d)return%20void%20window.alert(%22No%20preview%20deployment%20found!%20\uD83D\uDE2D%22);d=d.replace(/\/$/,%22%22);var%20e=d+%22/en%22,f=d+%22/en/enterprise-cloud%40latest%22,g=d+%22/en/enterprise-server%40latest%22,h=d+%22/en/github-ae%40latest%22;const%20j=document.querySelectorAll(%22div.file-info%22);for(var%20k,l=0;l%3Cj.length;l++)if(k=j[l].querySelector(%22a%22).title,0===k.search(%22data/%22))continue;else{var%20m=/\.md$/,n=0%3C=k.search(m);if(n){console.log(%22link:%20%22+k),k=k.replace(m,%22%22),k=k.replace(/^content/,%22%22),k=k.replace(/\/index/,%22%22);var%20o=document.createElement(%22SPAN%22);o.style.fontFamily=%22-apple-system,BlinkMacSystemFont,Segoe%20UI,Helvetica,Arial,sans-serif%22,o.innerHTML=%22%26nbsp;%20View:%20%22,o=a(o,%22FPT%22,e+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22GHEC%22,f+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22GHES%22,g+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22AE%22,h+k),j[l].appendChild(o)}}}()}();