(this["webpackJsonpspotify-lyrics"]=this["webpackJsonpspotify-lyrics"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(17),i=n.n(a),r=(n(24),n(25),n(9)),o=n(4),h=n(0);var l=function(){var e=Object(s.useState)(navigator.onLine),t=Object(r.a)(e,2),n=t[0];return t[1],n?(window.location.href="https://accounts.spotify.com/authorize?"+b.stringify({response_type:"code",client_id:d,scope:m,redirect_uri:j}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"trackInfo",children:Object(h.jsx)("div",{className:"trackHead",children:Object(h.jsx)("h2",{className:"title",children:"Authorizing ..."})})})})):Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"trackInfo",children:[Object(h.jsx)("div",{className:"trackHead",children:Object(h.jsx)("h2",{className:"title",children:"Oops!"})}),Object(h.jsx)("div",{className:"lyricsContainer",children:Object(h.jsx)("p",{children:"It looks like you're not not online."})}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsx)("div",{className:"buttonContainer refreshButton",children:Object(h.jsx)("div",{className:"buttonText",children:"Refresh"})})})]})})},d="7cbf9eb28a4e4c10b9faedb31c1344a0",j="https://lyricme.herokuapp.com/lyrics",m="user-read-private user-read-email user-read-currently-playing",b=n(32),u=(n(35),n.p+"static/media/playCard.139289e8.png"),y=n.p+"static/media/Spotify-logo.a05ad32d.png";var O=function(){return Object(h.jsxs)("div",{className:"",children:[Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{className:"cardContainer",children:[Object(h.jsx)("div",{className:"lyricsWrapper",children:Object(h.jsx)("div",{className:"homeLyrics",children:"I get my peaches out in Georgia\r\nI get my weed from California\r\nI took\u2005my chick up to the North\r\nI get my light right from the source\r\nAnd I see you (Oh), the way I breathe you in\n\nIt's the texture of your skin\n\nI wanna wrap my arms around you, baby\n\nNever let you go, oh\n\nAnd I see you\n\nThere's nothing like your touch\n\nIt\u2019s the way you lift me up, yeah\n\nAnd I'll be right here with you 'til the end\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\n\n\nYou enjoy it, but I'm for your\n\nAll I can want, all I can wish for\n\nNights alone that we wished for\n\nAnd days we savin' souvenirs\n\nThere's no time, I wanna make more time\n\nAnd give you my whole life\n\nI left my girl, I\u2019m in my Yorker\n\nHate to leave, call it torture\n\nRemember when I couldn\u2019t hold her\n\nLeft the baggage from her over\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that\u2019s it\n\n\n\nI get the feeling, so I'm sure\n\nHand in my hand because I'm yours\n\nI can't, I can\u2019t pretend, I can't ignore you're right for me\n\nDon't think you wanna know just where I stand, oh\n\nGirl, you got me distracted\n\nThe one I need is right in my arms\n\nIf this is the sweetest of mind\n\nAnd I'll be right here with you 'til end of time\n\n\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it\n\nI get my peaches out in Georgia, ooh, yeah\n\nI get my weed from California\n\nI took my chick up to the North, yeah\n\nI get my light right from the source, yeah, yeah, that's it".split("\n").map((function(e,t){return Object(h.jsx)("p",{children:e},t)}))})}),Object(h.jsx)("img",{src:u,className:"playCard"})]}),Object(h.jsxs)("div",{className:"rerouteContainer",children:[Object(h.jsx)("p",{className:"contentText",children:"LyricMe is the easiest way to display the lyrics to all your favorite songs."}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsxs)("div",{className:"buttonContainer",children:[Object(h.jsx)("div",{className:"buttonText",children:"Log in with Spotify"}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"spotify",src:y})})]})})]})]}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"})]})},x=n(15),f=n.n(x),g=n(19),p=function(){var e,t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),d=l[0],j=l[1],m=Object(s.useState)(""),b=Object(r.a)(m,2),u=b[0],y=b[1],O=Object(s.useState)(""),x=Object(r.a)(O,2),p=x[0],N=x[1],v=new URLSearchParams(window.location.search);e=v.get("code");var I={method:"POST",body:JSON.stringify({code:e})},k=null;function w(){return(w=Object(g.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/lyrics?code="+e,I);case 2:return n=t.sent,t.next=5,n.json();case 5:k=t.sent,console.log(k),a(!1),j(k.lyrics),N(k.track),y(k.artist);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){w.apply(this,arguments)}()})),c?Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"trackInfo",children:Object(h.jsx)("div",{className:"trackHead",children:Object(h.jsx)("h2",{className:"title",children:"Loading ..."})})}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsx)("div",{className:"buttonContainer refreshButton",children:Object(h.jsx)("div",{className:"buttonText",children:"Refresh"})})})]}):p.length<2?Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"trackInfo",children:[Object(h.jsx)("div",{className:"trackHead",children:Object(h.jsx)("h2",{className:"title",children:"Oops!"})}),Object(h.jsxs)("div",{className:"lyricsContainer",children:[Object(h.jsx)("p",{children:"It looks like you're not playing a song."}),Object(h.jsx)("p",{}),Object(h.jsx)("p",{})]}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsx)("div",{className:"buttonContainer refreshButton",children:Object(h.jsx)("div",{className:"buttonText",children:"Refresh"})})})]})}):d.length<10?Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"trackInfo",children:[Object(h.jsx)("div",{className:"trackHead",children:Object(h.jsx)("h2",{className:"title",children:"Oops!"})}),Object(h.jsxs)("div",{className:"lyricsContainer",children:[Object(h.jsxs)("p",{children:["We couldn't find any lyrics for ",p," by ",u,"."]}),Object(h.jsx)("p",{}),Object(h.jsx)("p",{children:"This sometimes happens on less-popular songs or specific remixes."}),Object(h.jsx)("p",{children:"Try another song!"})]}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsx)("div",{className:"buttonContainer refreshButton",children:Object(h.jsx)("div",{className:"buttonText",children:"Refresh"})})})]})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"trackInfo",children:[Object(h.jsxs)("div",{className:"trackHead",children:[Object(h.jsx)("h2",{className:"title",children:p}),Object(h.jsx)("h4",{className:"title",children:u})]}),Object(h.jsx)("div",{className:"lyricsContainer",children:d.split("\n").map((function(e,t){return Object(h.jsx)("p",{children:e},t)}))}),Object(h.jsx)(o.b,{to:"/auth",className:"button",children:Object(h.jsx)("div",{className:"buttonContainer refreshButton",children:Object(h.jsx)("div",{className:"buttonText",children:"Refresh"})})})]}),Object(h.jsx)("div",{className:"recommendedTracks"})]})},N=n.p+"static/media/ColorFull.a6fb890c.png",v=n(2);var I=function(){return document.title="Lyric Me",Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("div",{className:"logoContainer",children:Object(h.jsx)(o.b,{to:"/",children:Object(h.jsx)("img",{src:N,className:"logo"})})})})}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/",component:O,exact:!0}),Object(h.jsx)(v.a,{path:"/auth",component:l}),Object(h.jsx)(v.a,{path:"/lyrics",component:p})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.df96115e.chunk.js.map