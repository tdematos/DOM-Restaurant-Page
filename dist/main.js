(() => {
  "use strict";
  const e = function () {
      const e = document.querySelector("body"),
        n = document.createElement("nav"),
        i = document.createElement("div"),
        l = document.createElement("h1"),
        c = document.createElement("div"),
        s = document.createElement("ul"),
        o = document.createElement("li"),
        r = document.createElement("li"),
        m = document.createElement("li"),
        p = document.createElement("a"),
        u = document.createElement("a"),
        h = document.createElement("a");
      n.classList.add("about-navbar"),
        i.classList.add("headingdiv"),
        l.classList.add("about-logo"),
        c.classList.add("listdiv"),
        s.classList.add("navlist"),
        o.classList.add("about-aboutme"),
        r.classList.add("about-menu"),
        m.classList.add("about-contact"),
        e.appendChild(n),
        n.appendChild(i),
        i.appendChild(l),
        n.appendChild(c),
        c.appendChild(s),
        s.appendChild(p),
        s.appendChild(u),
        s.appendChild(h),
        p.appendChild(o),
        u.appendChild(r),
        h.appendChild(m),
        (l.innerText = "Blue Jeans"),
        (o.innerText = "About Me"),
        (r.innerText = "Menu"),
        (m.innerText = "Contact"),
        console.log(e);
      const C = document.createElement("section"),
        E = document.createElement("div"),
        L = document.createElement("h3"),
        b = document.createElement("form"),
        v = document.createElement("label"),
        f = document.createElement("input"),
        x = document.createElement("label"),
        T = document.createElement("textarea"),
        g = document.createElement("button");
      e.appendChild(C),
        C.appendChild(E),
        E.appendChild(L),
        E.appendChild(b),
        b.appendChild(v),
        b.appendChild(f),
        b.appendChild(x),
        b.appendChild(T),
        b.appendChild(g),
        C.classList.add("contact-section"),
        b.classList.add("form"),
        E.classList.add("form-container"),
        L.classList.add("form-header"),
        g.classList.add("contact-button"),
        f.classList.add("email-field"),
        T.classList.add("text-area"),
        v.classList.add("email-label"),
        x.classList.add("text-label"),
        f.setAttribute("type", "email"),
        f.setAttribute("name", "email"),
        f.setAttribute("placeholder", "john@email.com"),
        T.setAttribute("placeholder", "text..."),
        (L.innerText = "Contact Us"),
        (g.innerText = "Submit"),
        (v.innerText = "Email"),
        (x.innerText = "Message"),
        g.addEventListener("click", (e) => {
          e.preventDefault(), alert("Nice Try!");
        });
      const z = document.createElement("footer"),
        y = document.createElement("div"),
        k = document.createElement("div"),
        M = document.createElement("div"),
        A = document.createElement("a"),
        w = document.createElement("a"),
        S = document.createElement("p"),
        B = document.createElement("p"),
        R = document.createElement("p");
      e.appendChild(z),
        z.appendChild(y),
        z.appendChild(k),
        z.appendChild(M),
        y.appendChild(A),
        k.appendChild(w),
        M.appendChild(S),
        M.appendChild(B),
        M.appendChild(R),
        z.classList.add("footer"),
        A.classList.add("image-link"),
        w.classList.add("github-link"),
        M.classList.add("menuselect-container"),
        S.classList.add("small-aboutme"),
        R.classList.add("small-contact"),
        B.classList.add("small-menu"),
        (A.innerText = "image by Rene Strgar"),
        (w.innerText = "My GitHub"),
        (S.innerText = "About Me"),
        (B.innerText = "Menu"),
        (R.innerText = "contact"),
        w.setAttribute("href", "https://github.com/tdematos"),
        A.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        r.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          t();
        }),
        l.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          a();
        }),
        o.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          d();
        });
    },
    t = function () {
      const t = document.querySelector("body"),
        n = document.createElement("nav"),
        i = document.createElement("div"),
        l = document.createElement("h1"),
        c = document.createElement("div"),
        s = document.createElement("ul"),
        o = document.createElement("li"),
        r = document.createElement("li"),
        m = document.createElement("li"),
        p = document.createElement("a"),
        u = document.createElement("a"),
        h = document.createElement("a");
      n.classList.add("about-navbar"),
        i.classList.add("headingdiv"),
        l.classList.add("about-logo"),
        c.classList.add("listdiv"),
        s.classList.add("navlist"),
        o.classList.add("about-aboutme"),
        r.classList.add("about-menu"),
        m.classList.add("about-contact"),
        t.appendChild(n),
        n.appendChild(i),
        i.appendChild(l),
        n.appendChild(c),
        c.appendChild(s),
        s.appendChild(p),
        s.appendChild(u),
        s.appendChild(h),
        p.appendChild(o),
        u.appendChild(r),
        h.appendChild(m),
        (l.innerText = "Blue Jeans"),
        (o.innerText = "About Me"),
        (r.innerText = "Menu"),
        (m.innerText = "Contact"),
        console.log(t);
      const C = document.createElement("section"),
        E = document.createElement("h2"),
        L = document.createElement("p"),
        b = document.createElement("div"),
        v = document.createElement("div"),
        f = document.createElement("div"),
        x = document.createElement("div"),
        T = document.createElement("div"),
        g = document.createElement("div"),
        z = document.createElement("div"),
        y = document.createElement("div"),
        k = document.createElement("h3"),
        M = document.createElement("p"),
        A = document.createElement("p"),
        w = document.createElement("h3"),
        S = document.createElement("p"),
        B = document.createElement("p");
      C.classList.add("about"),
        E.classList.add("about-title"),
        L.classList.add("about-subtitle"),
        b.classList.add("about-img-container"),
        t.appendChild(C),
        C.appendChild(E),
        C.appendChild(L),
        C.appendChild(v),
        v.appendChild(f),
        v.appendChild(x),
        f.appendChild(T),
        f.appendChild(g),
        x.appendChild(z),
        x.appendChild(y),
        T.appendChild(k),
        T.appendChild(M),
        g.appendChild(A),
        z.appendChild(w),
        z.appendChild(S),
        y.appendChild(B),
        f.classList.add("inner-container-one"),
        x.classList.add("inner-container-two"),
        T.classList.add("sub-menu"),
        g.classList.add("sub-menu"),
        z.classList.add("sub-menu"),
        y.classList.add("sub-menu"),
        (E.innerText = "Menu"),
        (L.innerText =
          "Check out our assortment of the most tastiest pizzas on the planet!"),
        (k.innerText = "Pepperoni Pizza"),
        (M.innerText = "Pepperoni, mozzeralla, red pepper, EVOO"),
        (A.innerText = "$18.89"),
        (w.innerText = "Cheese Pizza"),
        (S.innerText = "Mozzeralla, parmasean, garlic, EVOO"),
        (B.innerText = 17.89);
      const R = document.createElement("footer"),
        J = document.createElement("div"),
        P = document.createElement("div"),
        q = document.createElement("div"),
        G = document.createElement("a"),
        H = document.createElement("a"),
        N = document.createElement("p"),
        O = document.createElement("p"),
        D = document.createElement("p");
      t.appendChild(R),
        R.appendChild(J),
        R.appendChild(P),
        R.appendChild(q),
        J.appendChild(G),
        P.appendChild(H),
        q.appendChild(N),
        q.appendChild(O),
        q.appendChild(D),
        R.classList.add("footer"),
        G.classList.add("image-link"),
        H.classList.add("github-link"),
        q.classList.add("menuselect-container"),
        N.classList.add("small-aboutme"),
        D.classList.add("small-contact"),
        O.classList.add("small-menu"),
        (G.innerText = "image by Rene Strgar"),
        (H.innerText = "My GitHub"),
        (N.innerText = "About Me"),
        (O.innerText = "Menu"),
        (D.innerText = "contact"),
        H.setAttribute("href", "https://github.com/tdematos"),
        G.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        o.addEventListener("click", () => {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          d();
        }),
        l.addEventListener("click", () => {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          a();
        }),
        m.addEventListener("click", () => {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          e();
        });
    },
    d = function () {
      const e = document.querySelector("body"),
        d = document.createElement("nav"),
        n = document.createElement("div"),
        i = document.createElement("h1"),
        l = document.createElement("div"),
        c = document.createElement("ul"),
        s = document.createElement("li"),
        o = document.createElement("li"),
        r = document.createElement("li"),
        m = document.createElement("a"),
        p = document.createElement("a"),
        u = document.createElement("a");
      d.classList.add("about-navbar"),
        n.classList.add("headingdiv"),
        i.classList.add("about-logo"),
        l.classList.add("listdiv"),
        c.classList.add("navlist"),
        s.classList.add("about-aboutme"),
        o.classList.add("about-menu"),
        r.classList.add("about-contact"),
        e.appendChild(d),
        d.appendChild(n),
        n.appendChild(i),
        d.appendChild(l),
        l.appendChild(c),
        c.appendChild(m),
        c.appendChild(p),
        c.appendChild(u),
        m.appendChild(s),
        p.appendChild(o),
        u.appendChild(r),
        (i.innerText = "Blue Jeans"),
        (s.innerText = "About Me"),
        (o.innerText = "Menu"),
        (r.innerText = "Contact"),
        console.log(e);
      const h = document.createElement("section"),
        C = document.createElement("h2"),
        E = document.createElement("p"),
        L = document.createElement("div"),
        b = document.createElement("img");
      h.classList.add("about"),
        C.classList.add("about-title"),
        E.classList.add("about-subtitle"),
        L.classList.add("about-img-container"),
        b.classList.add("about-img"),
        e.appendChild(h),
        h.appendChild(C),
        h.appendChild(E),
        h.appendChild(L),
        L.appendChild(b),
        b.setAttribute("src", "/src/assets/pexels-rene-strgar-13814644.jpg"),
        b.setAttribute("alt", "picture of neopolitan styled pizza"),
        (C.innerText = "Italian-Style, Thin Crust Pizzas"),
        (E.innerText =
          "Blue Jeans prepares its traditional Italian-style pizza \n(with roots in Boston’s North End) by hand-tossing dough \nladling our sweet, chunky sauce and blanketing it with a \nthree-cheese blend of mozzarella, cheddar and Romano. Blue Jeans’ \ndeep dish is our homage to the famous 1940s’ Chicago deep \ndish pies: pastry-like pie crust, layered, blended mozzarella, \ncheddar and Romano cheeses, tomato filets sauce.");
      const v = document.createElement("footer"),
        f = document.createElement("div"),
        x = document.createElement("div"),
        T = document.createElement("div"),
        g = document.createElement("a"),
        z = document.createElement("a"),
        y = document.createElement("p"),
        k = document.createElement("p"),
        M = document.createElement("p");
      e.appendChild(v),
        v.appendChild(f),
        v.appendChild(x),
        v.appendChild(T),
        f.appendChild(g),
        x.appendChild(z),
        T.appendChild(y),
        T.appendChild(k),
        T.appendChild(M),
        v.classList.add("footer"),
        g.classList.add("image-link"),
        z.classList.add("github-link"),
        T.classList.add("menuselect-container"),
        y.classList.add("small-aboutme"),
        M.classList.add("small-contact"),
        k.classList.add("small-menu"),
        (g.innerText = "image by Rene Strgar"),
        (z.innerText = "My GitHub"),
        (y.innerText = "About Me"),
        (k.innerText = "Menu"),
        (M.innerText = "contact"),
        z.setAttribute("href", "https://github.com/tdematos"),
        g.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        o.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          t();
        }),
        i.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          a();
        });
    };
  function n() {
    const a = document.querySelector("body"),
      i = document.createElement("nav"),
      l = document.createElement("div"),
      c = document.createElement("h1"),
      s = document.createElement("div"),
      o = document.createElement("ul"),
      r = document.createElement("li"),
      m = document.createElement("li"),
      p = document.createElement("li");
    i.classList.add("navbar"),
      l.classList.add("headingdiv"),
      c.classList.add("title"),
      s.classList.add("listdiv"),
      o.classList.add("navlist"),
      r.classList.add("aboutme"),
      m.classList.add("menu"),
      p.classList.add("contact"),
      a.appendChild(i),
      i.appendChild(l),
      l.appendChild(c),
      i.appendChild(s),
      s.appendChild(o),
      o.appendChild(r),
      o.appendChild(m),
      o.appendChild(p),
      (c.innerText = "Blue Jeans"),
      (r.innerText = "About Me"),
      (m.innerText = "Menu"),
      (p.innerText = "Contact");
    const u = document.createElement("section"),
      h = document.createElement("h2"),
      C = document.createElement("p"),
      E = document.createElement("button");
    u.classList.add("hero"),
      h.classList.add("hero-title"),
      C.classList.add("hero-subtitle"),
      E.classList.add("hero-button"),
      a.appendChild(u),
      u.appendChild(h),
      u.appendChild(C),
      u.appendChild(E),
      (h.innerText = "Super Fast Delicious Pizza"),
      (C.innerText = "Check out our BRAND-NEW Webpage!"),
      (E.innerText = "See Menu");
    const L = document.createElement("footer"),
      b = document.createElement("div"),
      v = document.createElement("div"),
      f = document.createElement("div"),
      x = document.createElement("a"),
      T = document.createElement("a"),
      g = document.createElement("p"),
      z = document.createElement("p"),
      y = document.createElement("p");
    a.appendChild(L),
      L.appendChild(b),
      L.appendChild(v),
      L.appendChild(f),
      b.appendChild(x),
      v.appendChild(T),
      f.appendChild(g),
      f.appendChild(z),
      f.appendChild(y),
      L.classList.add("footer"),
      x.classList.add("image-link"),
      T.classList.add("github-link"),
      f.classList.add("menuselect-container"),
      g.classList.add("small-aboutme"),
      y.classList.add("small-contact"),
      z.classList.add("small-menu"),
      (x.innerText = "image by Rene Strgar"),
      (T.innerText = "My GitHub"),
      (g.innerText = "About Me"),
      (z.innerText = "Menu"),
      (y.innerText = "contact"),
      T.setAttribute("href", "https://github.com/tdematos"),
      x.setAttribute(
        "href",
        "https://www.pexels.com/photo/italian-style-pizza-13814644/"
      ),
      c.addEventListener("click", () => {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
        n();
      }),
      r.addEventListener("click", () => {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
        d();
      }),
      m.addEventListener("click", () => {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
        t();
      }),
      p.addEventListener("click", () => {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
        e();
      }),
      E.addEventListener("click", () => {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
        t();
      });
  }
  n();
  const a = n;
})();
