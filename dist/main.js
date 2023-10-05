(() => {
  "use strict";
  var e = {
      426: (e, n, t) => {
        t.d(n, { Z: () => p });
        var a = t(81),
          i = t.n(a),
          d = t(645),
          o = t.n(d),
          l = t(667),
          r = t.n(l),
          c = new URL(t(591), t.b),
          s = o()(i());
        s.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Alatsi&family=Londrina+Sketch&display=swap);",
        ]);
        var m = r()(c);
        s.push([
          e.id,
          `:root {\n  --yellow-background-color: rgb(255, 225, 0);\n  --title-font-family: "Londrina Sketch", cursive;\n  --body-font-family: "Alatsi", sans-serif;\n}\n\n.navbar {\n  width: 100vw;\n  background-color: var(--yellow-background-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  cursor: pointer;\n  font-size: 5rem;\n  font-family: var(--title-font-family);\n  margin: 5px;\n}\n\n.navlist {\n  margin: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  font-family: var(--body-font-family);\n  list-style-type: none;\n}\n\nli {\n  cursor: pointer;\n  padding: 10px;\n  color: black;\n}\n\nli:hover {\n  color: white;\n}\n\na {\n  text-decoration: none;\n}\n\n.hero {\n  height: 100vh;\n  background-image: url(${m});\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n}\n\n.hero-title {\n  font-family: var(--body-font-family);\n  color: white;\n  font-size: 6rem;\n  margin: 5px;\n}\n\n.hero-subtitle {\n  font-family: var(--body-font-family);\n  color: white;\n  font-size: 1.5rem;\n  margin: 5px;\n  margin-bottom: 15px;\n}\n\n.hero-button {\n  cursor: pointer;\n  font-family: var(--body-font-family);\n  padding: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-size: 1rem;\n  color: yellow;\n  background-color: transparent;\n  border: solid yellow 0.2rem;\n  transition-property: background-color;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-out;\n  transition-delay: 0.15s;\n}\n\n.hero-button:hover {\n  font-family: var(--body-font-family);\n  background-color: yellow;\n  color: black;\n}\n\n/* section for styling footer*/\n.footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: black;\n  color: var(--yellow-background-color);\n  font-family: var(--body-font-family);\n  width: 100%;\n  height: 40px;\n}\n\n.menuselect-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.small-aboutme,\n.small-contact,\n.small-menu {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.github-link,\n.image-link {\n  text-decoration: none;\n  color: var(--yellow-background-color);\n}\n\n.github-link:hover,\n.image-link:hover {\n  color: white;\n}\n\n/* about me section styling */\n.about-navbar {\n  width: 100vw;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.about-logo {\n  font-size: 5rem;\n  font-family: var(--title-font-family);\n  margin: 5px;\n  color: var(--yellow-background-color);\n}\n\n.about {\n  background-color: var(--yellow-background-color);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n}\n.about-title {\n  font-family: var(--body-font-family);\n  color: black;\n  font-size: 4rem;\n  margin: 0px;\n}\n\n.about-img {\n  height: 400px;\n  width: 300px;\n}\n\n.about-aboutme,\n.about-contact,\n.about-menu {\n  color: var(--yellow-background-color);\n}\n\n/* Style menu page*/\n.inner-container-one,\n.inner-container-two {\n  font-family: var(--body-font-family);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.sub-menu {\n  margin: 25px;\n  margin-right: 50px;\n}\n\n/*style the contact page here*/\n.contact-section {\n  background-color: var(--yellow-background-color);\n  height: 80vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-header {\n  font-family: var(--title-font-family);\n  font-size: 4rem;\n  margin: 30px;\n}\n\n.form {\n  padding: 60px;\n  border: 1px solid black;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-button {\n  cursor: pointer;\n  margin: 10px;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-family: var(--body-font-family);\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  transition-property: background-color;\n  transition-duration: 0.25s;\n  transition-timing-function: ease-out;\n  transition-delay: 0.15s;\n}\n\n.contact-button:hover {\n  background-color: rgb(65, 65, 65);\n  color: var(--yellow-background-color);\n}\n\n.email-field {\n  margin: 10px;\n  width: 170px;\n}\n\n.text-area {\n  margin: 10px;\n}\n\n.text-label {\n  font-family: var(--body-font-family);\n  position: relative;\n  right: 60px;\n}\n\n.email-label {\n  font-family: var(--body-font-family);\n  position: relative;\n  right: 70px;\n}\n`,
          "",
        ]);
        const p = s;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  a = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  a &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  a && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, a, i, d) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var o = {};
              if (a)
                for (var l = 0; l < this.length; l++) {
                  var r = this[l][0];
                  null != r && (o[r] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (a && o[s[0]]) ||
                  (void 0 !== d &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = d)),
                  t &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = t))
                      : (s[2] = t)),
                  i &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = i))
                      : (s[4] = "".concat(i))),
                  n.push(s));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, a = 0; a < n.length; a++)
            if (n[a].identifier === e) {
              t = a;
              break;
            }
          return t;
        }
        function a(e, a) {
          for (var d = {}, o = [], l = 0; l < e.length; l++) {
            var r = e[l],
              c = a.base ? r[0] + a.base : r[0],
              s = d[c] || 0,
              m = "".concat(c, " ").concat(s);
            d[c] = s + 1;
            var p = t(m),
              u = {
                css: r[1],
                media: r[2],
                sourceMap: r[3],
                supports: r[4],
                layer: r[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(u);
            else {
              var h = i(u, a);
              (a.byIndex = l),
                n.splice(l, 0, { identifier: m, updater: h, references: 1 });
            }
            o.push(m);
          }
          return o;
        }
        function i(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, i) {
          var d = a((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var o = 0; o < d.length; o++) {
              var l = t(d[o]);
              n[l].references--;
            }
            for (var r = a(e, i), c = 0; c < d.length; c++) {
              var s = t(d[c]);
              0 === n[s].references && (n[s].updater(), n.splice(s, 1));
            }
            d = r;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var a = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var a = "";
                t.supports && (a += "@supports (".concat(t.supports, ") {")),
                  t.media && (a += "@media ".concat(t.media, " {"));
                var i = void 0 !== t.layer;
                i &&
                  (a += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (a += t.css),
                  i && (a += "}"),
                  t.media && (a += "}"),
                  t.supports && (a += "}");
                var d = t.sourceMap;
                d &&
                  "undefined" != typeof btoa &&
                  (a +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(d)))),
                      " */"
                    )),
                  n.styleTagTransform(a, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      591: (e, n, t) => {
        e.exports = t.p + "50f93b741ede234c3d05.jpg";
      },
    },
    n = {};
  function t(a) {
    var i = n[a];
    if (void 0 !== i) return i.exports;
    var d = (n[a] = { id: a, exports: {} });
    return e[a](d, d.exports, t), d.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var a in n)
        t.o(n, a) &&
          !t.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var a = n.getElementsByTagName("script");
        if (a.length) for (var i = a.length - 1; i > -1 && !e; ) e = a[i--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      const e = function () {
          const e = document.querySelector("body"),
            t = document.createElement("nav"),
            i = document.createElement("div"),
            o = document.createElement("h1"),
            l = document.createElement("div"),
            r = document.createElement("ul"),
            c = document.createElement("li"),
            s = document.createElement("li"),
            m = document.createElement("li"),
            p = document.createElement("a"),
            u = document.createElement("a"),
            h = document.createElement("a");
          t.classList.add("about-navbar"),
            i.classList.add("headingdiv"),
            o.classList.add("about-logo"),
            l.classList.add("listdiv"),
            r.classList.add("navlist"),
            c.classList.add("about-aboutme"),
            s.classList.add("about-menu"),
            m.classList.add("about-contact"),
            e.appendChild(t),
            t.appendChild(i),
            i.appendChild(o),
            t.appendChild(l),
            l.appendChild(r),
            r.appendChild(p),
            r.appendChild(u),
            r.appendChild(h),
            p.appendChild(c),
            u.appendChild(s),
            h.appendChild(m),
            (o.innerText = "Blue Jeans"),
            (c.innerText = "About Me"),
            (s.innerText = "Menu"),
            (m.innerText = "Contact"),
            console.log(e);
          const f = document.createElement("section"),
            b = document.createElement("div"),
            v = document.createElement("h3"),
            C = document.createElement("form"),
            g = document.createElement("label"),
            y = document.createElement("input"),
            E = document.createElement("label"),
            x = document.createElement("textarea"),
            L = document.createElement("button");
          e.appendChild(f),
            f.appendChild(b),
            b.appendChild(v),
            b.appendChild(C),
            C.appendChild(g),
            C.appendChild(y),
            C.appendChild(E),
            C.appendChild(x),
            C.appendChild(L),
            f.classList.add("contact-section"),
            C.classList.add("form"),
            b.classList.add("form-container"),
            v.classList.add("form-header"),
            L.classList.add("contact-button"),
            y.classList.add("email-field"),
            x.classList.add("text-area"),
            g.classList.add("email-label"),
            E.classList.add("text-label"),
            y.setAttribute("type", "email"),
            y.setAttribute("name", "email"),
            y.setAttribute("placeholder", "john@email.com"),
            x.setAttribute("placeholder", "text..."),
            (v.innerText = "Contact Us"),
            (L.innerText = "Submit"),
            (g.innerText = "Email"),
            (E.innerText = "Message"),
            L.addEventListener("click", (e) => {
              e.preventDefault(), alert("Nice Try!");
            });
          const w = document.createElement("footer"),
            T = document.createElement("div"),
            k = document.createElement("div"),
            z = document.createElement("div"),
            M = document.createElement("a"),
            A = document.createElement("a"),
            S = document.createElement("p"),
            j = document.createElement("p"),
            P = document.createElement("p");
          e.appendChild(w),
            w.appendChild(T),
            w.appendChild(k),
            w.appendChild(z),
            T.appendChild(M),
            k.appendChild(A),
            z.appendChild(S),
            z.appendChild(j),
            z.appendChild(P),
            w.classList.add("footer"),
            M.classList.add("image-link"),
            A.classList.add("github-link"),
            z.classList.add("menuselect-container"),
            S.classList.add("small-aboutme"),
            P.classList.add("small-contact"),
            j.classList.add("small-menu"),
            (M.innerText = "image by Rene Strgar"),
            (A.innerText = "My GitHub"),
            (S.innerText = "About Me"),
            (j.innerText = "Menu"),
            (P.innerText = "contact"),
            A.setAttribute("href", "https://github.com/tdematos"),
            M.setAttribute(
              "href",
              "https://www.pexels.com/photo/italian-style-pizza-13814644/"
            ),
            s.addEventListener("click", () => {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              n();
            }),
            o.addEventListener("click", () => {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              d();
            }),
            c.addEventListener("click", () => {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              a();
            });
        },
        n = function () {
          const n = document.querySelector("body"),
            t = document.createElement("nav"),
            i = document.createElement("div"),
            o = document.createElement("h1"),
            l = document.createElement("div"),
            r = document.createElement("ul"),
            c = document.createElement("li"),
            s = document.createElement("li"),
            m = document.createElement("li"),
            p = document.createElement("a"),
            u = document.createElement("a"),
            h = document.createElement("a");
          t.classList.add("about-navbar"),
            i.classList.add("headingdiv"),
            o.classList.add("about-logo"),
            l.classList.add("listdiv"),
            r.classList.add("navlist"),
            c.classList.add("about-aboutme"),
            s.classList.add("about-menu"),
            m.classList.add("about-contact"),
            n.appendChild(t),
            t.appendChild(i),
            i.appendChild(o),
            t.appendChild(l),
            l.appendChild(r),
            r.appendChild(p),
            r.appendChild(u),
            r.appendChild(h),
            p.appendChild(c),
            u.appendChild(s),
            h.appendChild(m),
            (o.innerText = "Blue Jeans"),
            (c.innerText = "About Me"),
            (s.innerText = "Menu"),
            (m.innerText = "Contact"),
            console.log(n);
          const f = document.createElement("section"),
            b = document.createElement("h2"),
            v = document.createElement("p"),
            C = document.createElement("div"),
            g = document.createElement("div"),
            y = document.createElement("div"),
            E = document.createElement("div"),
            x = document.createElement("div"),
            L = document.createElement("div"),
            w = document.createElement("div"),
            T = document.createElement("div"),
            k = document.createElement("h3"),
            z = document.createElement("p"),
            M = document.createElement("p"),
            A = document.createElement("h3"),
            S = document.createElement("p"),
            j = document.createElement("p");
          f.classList.add("about"),
            b.classList.add("about-title"),
            v.classList.add("about-subtitle"),
            C.classList.add("about-img-container"),
            n.appendChild(f),
            f.appendChild(b),
            f.appendChild(v),
            f.appendChild(g),
            g.appendChild(y),
            g.appendChild(E),
            y.appendChild(x),
            y.appendChild(L),
            E.appendChild(w),
            E.appendChild(T),
            x.appendChild(k),
            x.appendChild(z),
            L.appendChild(M),
            w.appendChild(A),
            w.appendChild(S),
            T.appendChild(j),
            y.classList.add("inner-container-one"),
            E.classList.add("inner-container-two"),
            x.classList.add("sub-menu"),
            L.classList.add("sub-menu"),
            w.classList.add("sub-menu"),
            T.classList.add("sub-menu"),
            (b.innerText = "Menu"),
            (v.innerText =
              "Check out our assortment of the most tastiest pizzas on the planet!"),
            (k.innerText = "Pepperoni Pizza"),
            (z.innerText = "Pepperoni, mozzeralla, red pepper, EVOO"),
            (M.innerText = "$18.89"),
            (A.innerText = "Cheese Pizza"),
            (S.innerText = "Mozzeralla, parmasean, garlic, EVOO"),
            (j.innerText = 17.89);
          const P = document.createElement("footer"),
            R = document.createElement("div"),
            B = document.createElement("div"),
            I = document.createElement("div"),
            N = document.createElement("a"),
            O = document.createElement("a"),
            J = document.createElement("p"),
            H = document.createElement("p"),
            $ = document.createElement("p");
          n.appendChild(P),
            P.appendChild(R),
            P.appendChild(B),
            P.appendChild(I),
            R.appendChild(N),
            B.appendChild(O),
            I.appendChild(J),
            I.appendChild(H),
            I.appendChild($),
            P.classList.add("footer"),
            N.classList.add("image-link"),
            O.classList.add("github-link"),
            I.classList.add("menuselect-container"),
            J.classList.add("small-aboutme"),
            $.classList.add("small-contact"),
            H.classList.add("small-menu"),
            (N.innerText = "image by Rene Strgar"),
            (O.innerText = "My GitHub"),
            (J.innerText = "About Me"),
            (H.innerText = "Menu"),
            ($.innerText = "contact"),
            O.setAttribute("href", "https://github.com/tdematos"),
            N.setAttribute(
              "href",
              "https://www.pexels.com/photo/italian-style-pizza-13814644/"
            ),
            c.addEventListener("click", () => {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              a();
            }),
            o.addEventListener("click", () => {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              d();
            }),
            m.addEventListener("click", () => {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              e();
            });
        },
        a = function () {
          const e = document.querySelector("body"),
            t = document.createElement("nav"),
            a = document.createElement("div"),
            i = document.createElement("h1"),
            o = document.createElement("div"),
            l = document.createElement("ul"),
            r = document.createElement("li"),
            c = document.createElement("li"),
            s = document.createElement("li"),
            m = document.createElement("a"),
            p = document.createElement("a"),
            u = document.createElement("a");
          t.classList.add("about-navbar"),
            a.classList.add("headingdiv"),
            i.classList.add("about-logo"),
            o.classList.add("listdiv"),
            l.classList.add("navlist"),
            r.classList.add("about-aboutme"),
            c.classList.add("about-menu"),
            s.classList.add("about-contact"),
            e.appendChild(t),
            t.appendChild(a),
            a.appendChild(i),
            t.appendChild(o),
            o.appendChild(l),
            l.appendChild(m),
            l.appendChild(p),
            l.appendChild(u),
            m.appendChild(r),
            p.appendChild(c),
            u.appendChild(s),
            (i.innerText = "Blue Jeans"),
            (r.innerText = "About Me"),
            (c.innerText = "Menu"),
            (s.innerText = "Contact"),
            console.log(e);
          const h = document.createElement("section"),
            f = document.createElement("h2"),
            b = document.createElement("p"),
            v = document.createElement("div"),
            C = document.createElement("img");
          h.classList.add("about"),
            f.classList.add("about-title"),
            b.classList.add("about-subtitle"),
            v.classList.add("about-img-container"),
            C.classList.add("about-img"),
            e.appendChild(h),
            h.appendChild(f),
            h.appendChild(b),
            h.appendChild(v),
            v.appendChild(C),
            C.setAttribute(
              "src",
              "/src/assets/pexels-rene-strgar-13814644.jpg"
            ),
            C.setAttribute("alt", "picture of neopolitan styled pizza"),
            (f.innerText = "Italian-Style, Thin Crust Pizzas"),
            (b.innerText =
              "Blue Jeans prepares its traditional Italian-style pizza \n(with roots in Boston’s North End) by hand-tossing dough \nladling our sweet, chunky sauce and blanketing it with a \nthree-cheese blend of mozzarella, cheddar and Romano. Blue Jeans’ \ndeep dish is our homage to the famous 1940s’ Chicago deep \ndish pies: pastry-like pie crust, layered, blended mozzarella, \ncheddar and Romano cheeses, tomato filets sauce.");
          const g = document.createElement("footer"),
            y = document.createElement("div"),
            E = document.createElement("div"),
            x = document.createElement("div"),
            L = document.createElement("a"),
            w = document.createElement("a"),
            T = document.createElement("p"),
            k = document.createElement("p"),
            z = document.createElement("p");
          e.appendChild(g),
            g.appendChild(y),
            g.appendChild(E),
            g.appendChild(x),
            y.appendChild(L),
            E.appendChild(w),
            x.appendChild(T),
            x.appendChild(k),
            x.appendChild(z),
            g.classList.add("footer"),
            L.classList.add("image-link"),
            w.classList.add("github-link"),
            x.classList.add("menuselect-container"),
            T.classList.add("small-aboutme"),
            z.classList.add("small-contact"),
            k.classList.add("small-menu"),
            (L.innerText = "image by Rene Strgar"),
            (w.innerText = "My GitHub"),
            (T.innerText = "About Me"),
            (k.innerText = "Menu"),
            (z.innerText = "contact"),
            w.setAttribute("href", "https://github.com/tdematos"),
            L.setAttribute(
              "href",
              "https://www.pexels.com/photo/italian-style-pizza-13814644/"
            ),
            c.addEventListener("click", () => {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              n();
            }),
            i.addEventListener("click", () => {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              d();
            });
        };
      function i() {
        const t = document.querySelector("body"),
          d = document.createElement("nav"),
          o = document.createElement("div"),
          l = document.createElement("h1"),
          r = document.createElement("div"),
          c = document.createElement("ul"),
          s = document.createElement("li"),
          m = document.createElement("li"),
          p = document.createElement("li");
        d.classList.add("navbar"),
          o.classList.add("headingdiv"),
          l.classList.add("title"),
          r.classList.add("listdiv"),
          c.classList.add("navlist"),
          s.classList.add("aboutme"),
          m.classList.add("menu"),
          p.classList.add("contact"),
          t.appendChild(d),
          d.appendChild(o),
          o.appendChild(l),
          d.appendChild(r),
          r.appendChild(c),
          c.appendChild(s),
          c.appendChild(m),
          c.appendChild(p),
          (l.innerText = "Blue Jeans"),
          (s.innerText = "About Me"),
          (m.innerText = "Menu"),
          (p.innerText = "Contact");
        const u = document.createElement("section"),
          h = document.createElement("h2"),
          f = document.createElement("p"),
          b = document.createElement("button");
        u.classList.add("hero"),
          h.classList.add("hero-title"),
          f.classList.add("hero-subtitle"),
          b.classList.add("hero-button"),
          t.appendChild(u),
          u.appendChild(h),
          u.appendChild(f),
          u.appendChild(b),
          (h.innerText = "Super Fast Delicious Pizza"),
          (f.innerText = "Check out our BRAND-NEW Webpage!"),
          (b.innerText = "See Menu");
        const v = document.createElement("footer"),
          C = document.createElement("div"),
          g = document.createElement("div"),
          y = document.createElement("div"),
          E = document.createElement("a"),
          x = document.createElement("a"),
          L = document.createElement("p"),
          w = document.createElement("p"),
          T = document.createElement("p");
        t.appendChild(v),
          v.appendChild(C),
          v.appendChild(g),
          v.appendChild(y),
          C.appendChild(E),
          g.appendChild(x),
          y.appendChild(L),
          y.appendChild(w),
          y.appendChild(T),
          v.classList.add("footer"),
          E.classList.add("image-link"),
          x.classList.add("github-link"),
          y.classList.add("menuselect-container"),
          L.classList.add("small-aboutme"),
          T.classList.add("small-contact"),
          w.classList.add("small-menu"),
          (E.innerText = "image by Rene Strgar"),
          (x.innerText = "My GitHub"),
          (L.innerText = "About Me"),
          (w.innerText = "Menu"),
          (T.innerText = "contact"),
          x.setAttribute("href", "https://github.com/tdematos"),
          E.setAttribute(
            "href",
            "https://www.pexels.com/photo/italian-style-pizza-13814644/"
          ),
          l.addEventListener("click", () => {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            i();
          }),
          s.addEventListener("click", () => {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            a();
          }),
          m.addEventListener("click", () => {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            n();
          }),
          p.addEventListener("click", () => {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            e();
          }),
          b.addEventListener("click", () => {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            n();
          });
      }
      i();
      const d = i;
      var o = t(379),
        l = t.n(o),
        r = t(795),
        c = t.n(r),
        s = t(569),
        m = t.n(s),
        p = t(565),
        u = t.n(p),
        h = t(216),
        f = t.n(h),
        b = t(589),
        v = t.n(b),
        C = t(426),
        g = {};
      (g.styleTagTransform = v()),
        (g.setAttributes = u()),
        (g.insert = m().bind(null, "head")),
        (g.domAPI = c()),
        (g.insertStyleElement = f()),
        l()(C.Z, g),
        C.Z && C.Z.locals && C.Z.locals;
    })();
})();
