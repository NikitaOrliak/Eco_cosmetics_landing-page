function a(a,t){(null==t||t>a.length)&&(t=a.length);for(var i=0,n=Array(t);i<t;i++)n[i]=a[i];return n}function t(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(t)||function(t,i){if(t){if("string"==typeof t)return a(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,i)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=document.querySelector(".root"),n=i.querySelectorAll(".animation__main__choose"),o=i.querySelectorAll(".animation__main__about-product"),e=i.querySelectorAll(".animation__main__shop"),s=i.querySelectorAll(".main__shop--products--item"),c=i.querySelectorAll(".main__shop--products--item"),r=i.querySelectorAll(".main__shop--products--card"),_=i.querySelector(".main__shop"),d="",m=i.querySelectorAll(".animation__main__about-creators"),l=i.querySelector(".main__ingredients__wrapper"),u=i.querySelectorAll(".animation__main__ingredients"),p=i.querySelectorAll(".main__ingredients__content--item"),h=i.querySelectorAll(".main__benefits__content--item"),f=i.querySelector(".main__contact__content--form"),L=i.querySelectorAll(".animation__main__contact"),g=i.querySelectorAll(".main__contact__content--form--input"),y=i.querySelectorAll(".animation__footer"),b=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.clientWidth;function S(){switch(_.classList.toggle("container",document.documentElement.clientWidth>=1280),t(r).forEach(function(a){return a.classList.remove("main__shop--products--card--active")}),t(r).forEach(function(a){a.classList.remove("main__shop--products--card--active"),a.children[0].children[0].classList.remove("animation__main__shop--products--card--image")}),c[0].classList.add("main__shop--products--item--active"),d=v>=1280?"desktop":v>=768?"tablet":"mobile"){case"mobile":r[0].classList.add("main__shop--products--card--active"),r[0].children[0].children[0].classList.add("animation__main__shop--products--card--image");break;case"tablet":case"desktop":r[0].classList.add("main__shop--products--card--active"),r[1].classList.add("main__shop--products--card--active"),r[0].children[0].children[0].classList.add("animation__main__shop--products--card--image"),r[1].children[0].children[0].classList.add("animation__main__shop--products--card--image")}}function A(){(b<=1200&&v>=1280||b>=200&&b<=1200&&v>=768||v<768&&b>=50)&&(n[0].classList.add("animation__main__choose--left"),n[1].classList.add("animation__main__choose--left"),n[2].classList.add("animation__main__choose--right"),n[3].classList.add("animation__main__choose--right"))}function E(){(b>=400&&b<=2e3||v<768&&b>=150&&b<=1200)&&(o[0].classList.add("animation__main__about-product--side-info"),o[1].classList.add("animation__main__about-product--text-info"),o[2].classList.add("animation__main__about-product--image-info--huge"),o[3].classList.add("animation__main__about-product--image-info--small"))}function q(){(b>=1150&&b<=3e3&&v>=1280||b>=800&&b<=2400&&v>=768&&v<1280||b>=500&&b<=1900&&v<768)&&(e[0].classList.add("animation__main__shop--side-info"),e[1].classList.add("animation__main__shop--title"),e[2].classList.add("animation__main__shop--products--cards"),e[3].classList.add("animation__main__shop--button"),s.forEach(function(a){a.classList.add("animation__main__shop--item")}))}function w(){(b>=2200&&b<=3800&&v>=1280||v>=768&&v<1280&&b>=1600&&b<=2900||v<768&&b>=1200&&b<=2400)&&(m[0].classList.add("animation__main__about-creators--side-info"),m[1].classList.add("animation__main__about-creators--text-info"),m[2].classList.add("animation__main__about-creators--image-info"))}function k(){l.classList.toggle("container",document.documentElement.clientWidth>=1280),(b>=3e3&&b<=4350&&v>=1280||v>=768&&v<1280&&b>=2200&&b<=3400||v<768&&b>=1700&&b<=3e3)&&(u[0].classList.add("animation__main__ingredients--side-info"),u[1].classList.add("animation__main__ingredients--text-info"),u[2].classList.add("animation__main__ingredients--image-info"),u[3].classList.add("animation__main__ingredients--text-info"),p.forEach(function(a){a.classList.add("animation__main__ingredients__content--item")}))}function x(){(b>=3600&&b<=4800&&v>=1280||v>=768&&v<1280&&b>=2700&&b<=3650||v<768&&b>=2350&&b<=3550)&&h.forEach(function(a){return a.classList.add("animation__main__benefits--item")})}function W(){(b>=3950&&v>=1280||v>=768&&v<1280&&b>=3e3||v<768&&b>=2900)&&(L[0].classList.add("animation__main__contact--side-info"),L[1].classList.add("animation__main__contact--text-info"),L[2].classList.add("animation__main__contact--image-info"),g.forEach(function(a){a.classList.add("animation__main__contact--form")}))}function j(){(b>=4700&&v>=1280||v>=768&&v<1280&&b>=3550||v<768&&b>=3450)&&(y[0].classList.add("animation__footer--navigation"),y[1].classList.add("animation__footer--social"),y[2].classList.add("animation__footer--contact"),y[3].classList.add("animation__footer--copyright"))}f.addEventListener("submit",function(a){a.preventDefault(),f.reset()}),t(c).forEach(function(a){return a.addEventListener("click",function(i){t(c).forEach(function(a){return a.classList.remove("main__shop--products--item--active")}),t(r).forEach(function(a){a.classList.remove("main__shop--products--card--active"),a.children[0].children[0].classList.remove("animation__main__shop--products--card--image")});var n=t(c).indexOf(i.target);switch(a.classList.add("main__shop--products--item--active"),d){case"mobile":t(r)[n].classList.add("main__shop--products--card--active"),t(r)[n].children[0].children[0].classList.add("animation__main__shop--products--card--image");break;case"tablet":case"desktop":t(r)[n].classList.add("main__shop--products--card--active"),t(r)[n].children[0].children[0].classList.add("animation__main__shop--products--card--image"),t(r)[n+1]?(t(r)[n+1].classList.add("main__shop--products--card--active"),t(r)[n+1].children[0].children[0].classList.add("animation__main__shop--products--card--image")):(t(r)[0].classList.add("main__shop--products--card--active"),t(r)[0].children[0].children[0].classList.add("animation__main__shop--products--card--image"))}})}),document.addEventListener("scroll",function(){b=window.scrollY||document.documentElement.scrollTop,A(),E(),q(),w(),k(),x(),W(),j(),document.documentElement.clientWidth!==v&&(v=document.documentElement.clientWidth,S())}),A(),E(),q(),S(),w(),k(),x(),W(),j();
//# sourceMappingURL=index.f17746df.js.map