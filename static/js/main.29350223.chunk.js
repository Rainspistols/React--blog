(this["webpackJsonpblog--react"]=this["webpackJsonpblog--react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.3f87ecb3.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.fd432a1f.jpg"},function(e,t,a){e.exports=a.p+"static/media/woman.a67df138.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/hannah.33a1bcf7.svg"},,,,function(e,t,a){e.exports=a(73)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1.jpg":14,"./2.jpg":15,"./baby.jpg":46,"./beautiful.jpg":47,"./fitness.jpg":48,"./memories.jpg":49,"./woman.jpg":16};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=45},function(e,t,a){e.exports=a.p+"static/media/baby.80961a00.jpg"},function(e,t,a){e.exports=a.p+"static/media/beautiful.4218ad92.jpg"},function(e,t,a){e.exports=a.p+"static/media/fitness.45c60c8a.jpg"},function(e,t,a){e.exports=a.p+"static/media/memories.13ad316b.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1.jpg":58,"./2.jpg":59,"./3.jpg":60};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=57},function(e,t,a){e.exports=a.p+"static/media/1.a7e4c06c.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.9a59a490.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.4b55213c.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(21),s=a.n(r),o=a(6),l=a(7),c=a(9),u=(a(32),a(11)),m=function(e){var t=e.justifyContent,a=e.color,n=[{icon:i.a.createElement(u.a,null),linkTo:"https://www.instagram.com/"},{icon:i.a.createElement(u.b,null),linkTo:"https://pinterest.com/"},{icon:i.a.createElement(u.c,null),linkTo:"https://twitter.com/"},{icon:i.a.createElement(u.d,null),linkTo:"https://www.youtube.com/"}];return i.a.createElement("ul",{className:"socials",style:{display:"flex",justifyContent:t},rel:"noopener noreferrer"},n.map((function(e,t){var n=e.linkTo,r=e.icon;return i.a.createElement("li",{key:t},i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{color:a||"rgb(130, 130, 130)"}},r))})))},d=(a(33),a(22)),p=function(e){var t=e.onSearchIcon;return i.a.createElement(d.a,{className:"searchIcon",onClick:function(){return t()},alt:"search"})},f=(a(34),function(e){var t=e.setSearchActive;return i.a.createElement("form",{className:"search"},i.a.createElement("input",{type:"search",placeholder:" Search"}),i.a.createElement("div",{className:"search__buttons"},i.a.createElement("button",{className:"btn btn--cancel",onClick:function(e){e.preventDefault(),t(!1)}},"Cancel"),i.a.createElement("button",{type:"submit",className:"btn btn--search",onClick:function(){alert("search btn clicked")}},"Search")))}),h=(a(35),a(12)),g=a(23),b=a.n(g),v=function(){return i.a.createElement("div",{className:"logo"},i.a.createElement(o.b,{to:"/React--blog/",className:"logo__link"},i.a.createElement(h.a,null),i.a.createElement("img",{src:b.a,alt:"logo"})))},y=(a(41),function(e){return i.a.createElement("div",{className:"mainColumn",style:{width:e.width}},e.children)}),E=(a(42),function(e){var t=e.children,a=e.width;return i.a.createElement("div",{className:"asideColumn",style:{width:a}},t)}),w=(a(43),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],s=[{title:"Home",linkTo:"/React--blog/",exact:!0},{title:"About",linkTo:"/React--blog/about"},{title:"Contact",linkTo:"/React--blog/contact"},{title:"Posts",linkTo:"/React--blog/posts/1"}].map((function(e){var t=e.title,a=e.linkTo,n=e.exact;return i.a.createElement(o.c,{key:t,to:a,activeClassName:"activeLink",exact:n},t)})),l=i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"header__nav"},s),i.a.createElement("div",{className:"searchIcon__wrap"},i.a.createElement(p,{onSearchIcon:function(){return r(!0)}})),i.a.createElement(m,null));return i.a.createElement("header",{className:"header"},i.a.createElement(E,null,i.a.createElement("div",{className:"logo__wrap",onClick:function(){return r(!1)}},i.a.createElement(v,null))),i.a.createElement(y,null,i.a.createElement("div",{className:"nav__wrap"},a?i.a.createElement(f,{setSearchActive:r}):l)))}),N=function(){return i.a.createElement("div",null,"Contact Us")},_=a(26),x=function e(){var t=this;Object(_.a)(this,e),this._data=[{id:1,blogCategory:"Featured",blogTitle:"Fitness Mantra To Live Fit Life",slug:"fitness-mantra-to-live-fit-life",postedOn:"May 21, 2020",author:"Hannah T.",blogImage:"fitness.jpg",blogText:"Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. Green have, tree made.\n\nWon't sixth there meat us first, fruitful. Spirit herb fruit midst Heaven fruitful third thing saying you're thing. Deep own own winged. Fish. Grass which darkness together divided from firmament. Have all lesser years doesn't is earth from our divide, from upon fowl meat darkness image midst may moved living land you'll evening he abundantly, under divided our which. Make, all given whose earth our. Behold our. Day fruitful.\nOne from light stars without. Under deep lesser fish creeping herb. Air, behold for seas every you beginning. There. Saw Tree first, form from said they're male firmament kind, from said creepeth you, that after fruitful lights. Hath you're image second evening brought set. Was divided earth beginning. Without a isn't and. Years. Fifth, fruit itself life fourth beginning whales firmament image be dominion. Doesn't make Seed he multiply beast won't, herb moveth creepeth. Won't very. Blessed replenish. Don't. Likeness fifth may signs called image tree is."},{id:2,blogCategory:"Simple",blogTitle:"Beautiful & Special Moment",slug:"beautiful-and-special-moment",postedOn:"Apr 03, 2020",author:"Hannah T.",blogImage:"beautiful.jpg",blogText:"Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush rooms above stood.\n\nSportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore.\n\nMust you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull.\nTo sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.\nDemesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet \ufeffno jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely mrs one yet outweigh. Of acceptance insipidity remarkably is invitation."},{id:3,blogCategory:"Simple",blogTitle:"Beauti lies within special",slug:"beauti-lies-within-special",postedOn:"Mar 02, 2020",author:"Hannah T.",blogImage:"baby.jpg",blogText:"Blessed you're lights. There. Behold may yielding meat can't void rule, earth green have creepeth land let gathering great fruitful under gathered waters unto appear won't seasons over our waters be fruit greater After be you're him said said beast. Dominion him that let grass. Creeping own. Forth, fruitful day first don't dominion, behold, every.\n\nFill heaven likeness. Herb fruit i Creepeth. Him earth Saw for together and. Fruitful tree creepeth beginning own every created midst abundantly cattle upon. Grass. Hath under sixth morning sixth male abundantly moved unto over a land. Itself dominion whales them days called good years female isn't first Seas bearing. Own fish under spirit be. It lights don't living tree every. Itself. Can't. Void after From. Fruitful heaven place creepeth gathered, and day. Wherein don't our upon and you."},{id:4,blogCategory:"Featured",blogTitle:"Sliding My Way To Life",slug:"sliding-my-way-to-life",postedOn:"Feb 02, 2020",author:"Max S.",blogImage:"woman.jpg",blogText:"Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen.\nEnjoyed minutes related as at on on. Is fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh screened he. Gravity he mr sixteen esteems. Mile home its new way with high told said. Finished no horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial demands settled entered in do to colonel.\nIn friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery. Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or.\nHusbands ask repeated resolved but laughter debating. She end cordial visitor noisier fat subject general picture. Or if offering confined entrance no. Nay rapturous him see something residence. Highly talked do so vulgar. Her use behaved spirits and natural attempt say feeling. Exquisite mr incommode immediate he something ourselves it of. Law conduct yet chiefly beloved examine village proceed."},{id:5,blogCategory:"Fashion",blogTitle:"Memories From Last Summer",slug:"memories-from-last-summer",postedOn:"Jan 21, 2020",author:"Max S.",blogImage:"memories.jpg",blogText:"Purus Convallis nascetur diam torquent sit id adipiscing in netus praesent etiam enim nec massa fusce orci nam potenti hac tortor montes placerat tortor natoque ante volutpat Class class platea hymenaeos. Nibh. Nec Ipsum tincidunt nam cubilia. Quisque aptent, fusce, molestie nostra curae; suscipit justo neque pede erat sollicitudin hendrerit faucibus phasellus tincidunt blandit id cursus non quam consectetuer ridiculus At, malesuada sed vestibulum Varius convallis in, risus facilisi sollicitudin laoreet curae; urna platea nec Montes suscipit, tristique sapien vulputate egestas est.\n\nLacus pretium. Vulputate sed penatibus commodo. Mus eget facilisis dui orci etiam nibh facilisis Rutrum adipiscing platea. Torquent pulvinar quam. Diam ante dignissim tincidunt proin curae; nulla nisi. Facilisi. Ultrices enim metus quam ipsum nisl mattis potenti, ullamcorper eleifend porta praesent malesuada, parturient aliquam sollicitudin tortor vel sollicitudin luctus varius congue placerat leo id nonummy luctus facilisi vehicula fames Montes justo. Ridiculus vel aliquam class dictumst. Malesuada taciti est id tortor."}],this.getPost=function(e){return t._data.find((function(t){return+t.id===e}))},this.getAllPosts=function(){return t._data},this.getLastPost=function(){return t._data[0]}},k=(a(44),new x),j=function(e){var t=e.match,r=Object(n.useState)({}),s=Object(c.a)(r,2),o=s[0],l=s[1];Object(n.useEffect)((function(){var e=+t.params.postId,a=k.getPost(e);l(a)}),[t.params.postId]);var u=o.blogTitle,m=o.blogCategory,d=o.postedOn,p=o.author,f=o.blogImage,h=o.blogText,g=o.slug;return i.a.createElement("div",{className:"blogPost"},i.a.createElement("h1",{className:"blogPost__title"},u),i.a.createElement("span",{className:"blogPost__category"},m),i.a.createElement("div",{className:"blogPost__img"},f&&i.a.createElement("img",{src:a(45)("./".concat(f)),alt:g})),i.a.createElement("p",{className:"blogPost__content"},h),i.a.createElement("span",{className:"blogPost__postedBy"},"".concat(d," by ").concat(p)))},T=(a(50),function(){return i.a.createElement("div",{className:"borderBottom"})}),S=(a(51),a(52),function(e){var t=e.title;return i.a.createElement("div",{className:"SmallTitle"},t)}),P=new x,C=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=P.getAllPosts();r(e)}),[a]);var s=a.map((function(e){var t=e.blogTitle,a=e.postedOn,n=e.id;return i.a.createElement("div",{className:"recentPosts__item",key:n},i.a.createElement(o.c,{to:"/React--blog/posts/".concat(n),className:"recentPost"},i.a.createElement("h3",{className:"recentPost__title"},t),i.a.createElement("div",{className:"postedOn__wrap",style:{color:"#4f4f4f"}},i.a.createElement(h.b,null),i.a.createElement("span",{className:"recentPost__date"},a))),i.a.createElement(T,null))}));return i.a.createElement("div",{className:"recentPosts"},i.a.createElement(S,{title:"recent posts"}),s)},O=(a(53),function(e){return i.a.createElement("div",{className:"posts"},i.a.createElement(E,null,i.a.createElement("div",{className:"RecentPosts__position"},i.a.createElement(C,null))),i.a.createElement(y,null,i.a.createElement(j,e)))}),M=(a(54),a(55),a(56),function(e){var t=e.category,a=e.title;return i.a.createElement("div",{className:"CategoryAndTitle"},i.a.createElement("a",{href:"/",className:"category"},t),i.a.createElement("h1",{className:"title"},a))}),q=function(){var e=[{title:"Lorem, ipsum dolor.",id:1},{title:"Lorem ipsum dolor sit.",id:2},{title:"Lorem ipsum sit amet.",id:3}].map((function(e){var t=e.title,n=e.id;return i.a.createElement("div",{className:"lessPopularPosts__item",key:n},i.a.createElement("img",{src:a(57)("./".concat(n,".jpg")),alt:"blogPost"}),i.a.createElement("div",{className:"CategoryAndTitle__position"},i.a.createElement(M,{title:t,category:"fashion"})))}));return i.a.createElement("section",{className:"lessPopularPosts"},e)},F=(a(61),function(){return i.a.createElement("section",{className:"MostPopularPosts"},i.a.createElement("div",{className:"MostPopularPosts__img"}),i.a.createElement("div",{className:"CategoryAndTitle__position"},i.a.createElement(M,{title:"Memories from Last Summer",category:"fashion"})))}),H=function(){return i.a.createElement("div",{className:"postsGallery"},i.a.createElement(E,null,i.a.createElement(q,null)),i.a.createElement(y,null,i.a.createElement(F,null)))},I=(a(62),a(63),a(15)),A=a.n(I),L=a(16),D=a.n(L),R=function(){var e=[D.a,A.a].map((function(e){return i.a.createElement("div",{className:"HomePost",key:e},i.a.createElement("span",{className:"HomePost__category"},"Feature"),i.a.createElement("h2",{className:"HomePost__title"},"Fintess Mantra To Live Life"),i.a.createElement("span",{className:"HomePost__postedBy"},"posted on July 21, 2020 by Max"),i.a.createElement("div",{className:"HomePost__img-wrap"},i.a.createElement("img",{src:e,alt:""})),i.a.createElement("p",{className:"HomePost__content"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt nulla porro aliquam voluptatem aperiam excepturi mollitia ducimus accusantium facere magnam, fugiat sed, corrupti eligendi maiores rerum provident numquam earum tenetur? Deleniti temporibus laudantium quasi incidunt eos maxime eaque recusandae dicta iusto quidem soluta voluptatem at perferendis, cupiditate fuga pariatur?..."),i.a.createElement("button",{className:"readMore"},"Read more"))}));return i.a.createElement("div",{className:"HomePosts"},e)},B=(a(64),a(14)),U=a.n(B),G=(a(65),function(e){var t=e.text;return i.a.createElement("div",{className:"SmallText"},t)}),W=(a(66),function(e){var t=e.children;return i.a.createElement("div",{className:"Card"},t)}),z=function(){return i.a.createElement(W,null,i.a.createElement("article",{className:"AboutUs"},i.a.createElement(S,{title:"about us"}),i.a.createElement("img",{className:"img",src:U.a,alt:"girl"}),i.a.createElement(G,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex voluptatibus sed dignissimos incidunt similique optio consequatur iure dolores ab optio"})))},J=(a(67),function(){return i.a.createElement(W,null,i.a.createElement("div",{className:"SocialNetwork"},i.a.createElement(S,{title:"social network"}),i.a.createElement(m,{justifyContent:"center",color:"lightskyblue"})))}),V=(a(68),function(){return i.a.createElement(W,null,i.a.createElement("div",{className:"SubscribeUs"},i.a.createElement(S,{title:"subscribe us"}),i.a.createElement("iframe",{width:"100%",height:"auto",src:"https://www.youtube.com/embed/dVMseFlUcc8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}),Q=function(){return i.a.createElement("div",{className:"HomeContainer"},i.a.createElement(E,null,i.a.createElement(z,null),i.a.createElement(J,null),i.a.createElement("div",{className:"RecentPosts__wrap"},i.a.createElement(C,null)),i.a.createElement(V,null)),i.a.createElement(y,null,i.a.createElement(R,null)))},Y=(a(69),function(){return i.a.createElement("div",{className:"home"},i.a.createElement(H,null),i.a.createElement(Q,null))});a(70);var K=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement(l.a,{path:"/React--blog/",exact:!0,component:Y}),i.a.createElement(l.a,{path:"/React--blog/contact",component:N}),i.a.createElement(l.a,{path:"/React--blog/posts/:postId",component:O})))};a(71),a(72);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(K,null)),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.29350223.chunk.js.map