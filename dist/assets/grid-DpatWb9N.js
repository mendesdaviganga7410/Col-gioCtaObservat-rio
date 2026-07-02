function o(i){if(!i)return"";const r=i.split("-");if(r.length!==3)return"";const[s,e,a]=r;if(!s||!e||!a)return"";const n=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],t=parseInt(e,10)-1;return t<0||t>11?"":`${a} ${n[t]}. ${s}`}function l(i,r,s){const e=[...i].sort((a,n)=>new Date(n.data).getTime()-new Date(a.data).getTime());if(s.textContent=e.length?`${e.length} publicaç${e.length===1?"ão":"ões"}`:"",!e.length){r.innerHTML=`
        <div class="grid-empty">
            <p>Nenhuma publicação ainda.<br>
            Adicione entradas no array <strong>POSTS</strong> dentro deste arquivo.</p>
        </div>`;return}r.innerHTML=e.map(a=>{const n=a.thumbnail?`<img class="thumb-img" src="${a.thumbnail}" alt="${a.titulo}" loading="lazy"
               onerror="this.outerHTML='<div class=thumb-placeholder><svg width=48 height=48 viewBox=\\'0 0 24 24\\' fill=none><circle cx=12 cy=12 r=10 stroke=#8fa3bf stroke-width=1.5/><path d=\\'M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4\\' stroke=#8fa3bf stroke-width=1.5 stroke-linecap=round/><circle cx=12 cy=17 r=.5 fill=#8fa3bf stroke=#8fa3bf stroke-width=1/></svg><span>Imagem pendente</span></div>'">`:`<div class="thumb-placeholder">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                   <circle cx="12" cy="12" r="10" stroke="#8fa3bf" stroke-width="1.5"/>
                   <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4"
                         stroke="#8fa3bf" stroke-width="1.5" stroke-linecap="round"/>
                   <circle cx="12" cy="17" r="0.5" fill="#8fa3bf" stroke="#8fa3bf" stroke-width="1"/>
               </svg>
               <span>Imagem pendente</span>
           </div>`,t=!a.link||a.link==="#",c=t?'<span class="card-link-btn" style="background:#aaa;cursor:default;">Em breve</span>':`<a href="${a.link}" class="card-link-btn" onclick="event.stopPropagation()">Leia mais →</a>`;return`
        <article class="news-card"
            onclick="${t?"":`window.location.href='${a.link}'`}">
            <div class="card-thumb">
                ${n}
                <span class="card-categoria">${a.categoria||"Geral"}</span>
            </div>
            <div class="card-body">
                <div class="card-data">${o(a.data)}</div>
                <div class="card-titulo">${a.titulo}</div>
                ${a.resumo?`<div class="card-resumo">${a.resumo}</div>`:""}
                ${c}
            </div>
        </article>`}).join("")}export{l as r};
