(() => {
  "use strict";
  const e = function () {
      const e = document.querySelector("body"),
        n = document.createElement("nav"),
        d = document.createElement("div"),
        a = document.createElement("h1"),
        i = document.createElement("div"),
        l = document.createElement("ul"),
        s = document.createElement("li"),
        c = document.createElement("li"),
        o = document.createElement("li"),
        m = document.createElement("a"),
        r = document.createElement("a"),
        p = document.createElement("a");
      n.classList.add("about-navbar"),
        d.classList.add("headingdiv"),
        a.classList.add("about-logo"),
        i.classList.add("listdiv"),
        l.classList.add("navlist"),
        s.classList.add("about-aboutme"),
        c.classList.add("about-menu"),
        o.classList.add("about-contact"),
        e.appendChild(n),
        n.appendChild(d),
        d.appendChild(a),
        n.appendChild(i),
        i.appendChild(l),
        l.appendChild(m),
        l.appendChild(r),
        l.appendChild(p),
        m.appendChild(s),
        r.appendChild(c),
        p.appendChild(o),
        (a.innerText = "Blue Jeans"),
        (s.innerText = "About Me"),
        (c.innerText = "Menu"),
        (o.innerText = "Contact"),
        console.log(e);
      const u = document.createElement("section"),
        h = document.createElement("h2"),
        C = document.createElement("p"),
        E = document.createElement("div"),
        b = document.createElement("div"),
        L = document.createElement("div"),
        v = document.createElement("div"),
        x = document.createElement("div"),
        T = document.createElement("div"),
        g = document.createElement("div"),
        f = document.createElement("div"),
        z = document.createElement("h3"),
        y = document.createElement("p"),
        M = document.createElement("p"),
        k = document.createElement("h3"),
        A = document.createElement("p"),
        w = document.createElement("p");
      u.classList.add("about"),
        h.classList.add("about-title"),
        C.classList.add("about-subtitle"),
        E.classList.add("about-img-container"),
        e.appendChild(u),
        u.appendChild(h),
        u.appendChild(C),
        u.appendChild(b),
        b.appendChild(L),
        b.appendChild(v),
        L.appendChild(x),
        L.appendChild(T),
        v.appendChild(g),
        v.appendChild(f),
        x.appendChild(z),
        x.appendChild(y),
        T.appendChild(M),
        g.appendChild(k),
        g.appendChild(A),
        f.appendChild(w),
        L.classList.add("inner-container-one"),
        v.classList.add("inner-container-two"),
        x.classList.add("sub-menu"),
        T.classList.add("sub-menu"),
        g.classList.add("sub-menu"),
        f.classList.add("sub-menu"),
        (h.innerText = "Menu"),
        (C.innerText =
          "Check out our assortment of the most tastiest pizzas on the planet!"),
        (z.innerText = "Pepperoni Pizza"),
        (y.innerText = "Pepperoni, mozzeralla, red pepper, EVOO"),
        (M.innerText = "$18.89"),
        (k.innerText = "Cheese Pizza"),
        (A.innerText = "Mozzeralla, parmasean, garlic, EVOO"),
        (w.innerText = 17.89);
      const S = document.createElement("footer"),
        B = document.createElement("div"),
        P = document.createElement("div"),
        R = document.createElement("div"),
        J = document.createElement("a"),
        O = document.createElement("a"),
        q = document.createElement("p"),
        G = document.createElement("p"),
        H = document.createElement("p");
      e.appendChild(S),
        S.appendChild(B),
        S.appendChild(P),
        S.appendChild(R),
        B.appendChild(J),
        P.appendChild(O),
        R.appendChild(q),
        R.appendChild(G),
        R.appendChild(H),
        S.classList.add("footer"),
        J.classList.add("image-link"),
        O.classList.add("github-link"),
        R.classList.add("menuselect-container"),
        q.classList.add("small-aboutme"),
        H.classList.add("small-contact"),
        G.classList.add("small-menu"),
        (J.innerText = "image by Rene Strgar"),
        (O.innerText = "My GitHub"),
        (q.innerText = "About Me"),
        (G.innerText = "Menu"),
        (H.innerText = "contact"),
        O.setAttribute("href", "https://github.com/tdematos"),
        J.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        s.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          t();
        });
    },
    t = function () {
      const t = document.querySelector("body"),
        n = document.createElement("nav"),
        d = document.createElement("div"),
        a = document.createElement("h1"),
        i = document.createElement("div"),
        l = document.createElement("ul"),
        s = document.createElement("li"),
        c = document.createElement("li"),
        o = document.createElement("li"),
        m = document.createElement("a"),
        r = document.createElement("a"),
        p = document.createElement("a");
      n.classList.add("about-navbar"),
        d.classList.add("headingdiv"),
        a.classList.add("about-logo"),
        i.classList.add("listdiv"),
        l.classList.add("navlist"),
        s.classList.add("about-aboutme"),
        c.classList.add("about-menu"),
        o.classList.add("about-contact"),
        t.appendChild(n),
        n.appendChild(d),
        d.appendChild(a),
        n.appendChild(i),
        i.appendChild(l),
        l.appendChild(m),
        l.appendChild(r),
        l.appendChild(p),
        m.appendChild(s),
        r.appendChild(c),
        p.appendChild(o),
        (a.innerText = "Blue Jeans"),
        (s.innerText = "About Me"),
        (c.innerText = "Menu"),
        (o.innerText = "Contact"),
        console.log(t);
      const u = document.createElement("section"),
        h = document.createElement("h2"),
        C = document.createElement("p"),
        E = document.createElement("div"),
        b = document.createElement("img");
      u.classList.add("about"),
        h.classList.add("about-title"),
        C.classList.add("about-subtitle"),
        E.classList.add("about-img-container"),
        b.classList.add("about-img"),
        t.appendChild(u),
        u.appendChild(h),
        u.appendChild(C),
        u.appendChild(E),
        E.appendChild(b),
        b.setAttribute("src", "/src/assets/pexels-rene-strgar-13814644.jpg"),
        b.setAttribute("alt", "picture of neopolitan styled pizza"),
        (h.innerText = "Italian-Style, Thin Crust Pizzas"),
        (C.innerText =
          "Blue Jeans prepares its traditional Italian-style pizza \n(with roots in Boston’s North End) by hand-tossing dough \nladling our sweet, chunky sauce and blanketing it with a \nthree-cheese blend of mozzarella, cheddar and Romano. Blue Jeans’ \ndeep dish is our homage to the famous 1940s’ Chicago deep \ndish pies: pastry-like pie crust, layered, blended mozzarella, \ncheddar and Romano cheeses, tomato filets sauce.");
      const L = document.createElement("footer"),
        v = document.createElement("div"),
        x = document.createElement("div"),
        T = document.createElement("div"),
        g = document.createElement("a"),
        f = document.createElement("a"),
        z = document.createElement("p"),
        y = document.createElement("p"),
        M = document.createElement("p");
      t.appendChild(L),
        L.appendChild(v),
        L.appendChild(x),
        L.appendChild(T),
        v.appendChild(g),
        x.appendChild(f),
        T.appendChild(z),
        T.appendChild(y),
        T.appendChild(M),
        L.classList.add("footer"),
        g.classList.add("image-link"),
        f.classList.add("github-link"),
        T.classList.add("menuselect-container"),
        z.classList.add("small-aboutme"),
        M.classList.add("small-contact"),
        y.classList.add("small-menu"),
        (g.innerText = "image by Rene Strgar"),
        (f.innerText = "My GitHub"),
        (z.innerText = "About Me"),
        (y.innerText = "Menu"),
        (M.innerText = "contact"),
        f.setAttribute("href", "https://github.com/tdematos"),
        g.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        c.addEventListener("click", () => {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          e();
        });
    };
  !(function () {
    const n = document.querySelector("body"),
      d = document.createElement("nav"),
      a = document.createElement("div"),
      i = document.createElement("h1"),
      l = document.createElement("div"),
      s = document.createElement("ul"),
      c = document.createElement("li"),
      o = document.createElement("li"),
      m = document.createElement("li");
    d.classList.add("navbar"),
      a.classList.add("headingdiv"),
      i.classList.add("title"),
      l.classList.add("listdiv"),
      s.classList.add("navlist"),
      c.classList.add("aboutme"),
      o.classList.add("menu"),
      m.classList.add("contact"),
      n.appendChild(d),
      d.appendChild(a),
      a.appendChild(i),
      d.appendChild(l),
      l.appendChild(s),
      s.appendChild(c),
      s.appendChild(o),
      s.appendChild(m),
      (i.innerText = "Blue Jeans"),
      (c.innerText = "About Me"),
      (o.innerText = "Menu"),
      (m.innerText = "Contact");
    const r = document.createElement("section"),
      p = document.createElement("h2"),
      u = document.createElement("p"),
      h = document.createElement("button");
    r.classList.add("hero"),
      p.classList.add("hero-title"),
      u.classList.add("hero-subtitle"),
      h.classList.add("hero-button"),
      n.appendChild(r),
      r.appendChild(p),
      r.appendChild(u),
      r.appendChild(h),
      (p.innerText = "Super Fast Delicious Pizza"),
      (u.innerText = "Check out our BRAND-NEW Webpage!"),
      (h.innerText = "See Menu");
    const C = document.createElement("footer"),
      E = document.createElement("div"),
      b = document.createElement("div"),
      L = document.createElement("div"),
      v = document.createElement("a"),
      x = document.createElement("a"),
      T = document.createElement("p"),
      g = document.createElement("p"),
      f = document.createElement("p");
    n.appendChild(C),
      C.appendChild(E),
      C.appendChild(b),
      C.appendChild(L),
      E.appendChild(v),
      b.appendChild(x),
      L.appendChild(T),
      L.appendChild(g),
      L.appendChild(f),
      C.classList.add("footer"),
      v.classList.add("image-link"),
      x.classList.add("github-link"),
      L.classList.add("menuselect-container"),
      T.classList.add("small-aboutme"),
      f.classList.add("small-contact"),
      g.classList.add("small-menu"),
      (v.innerText = "image by Rene Strgar"),
      (x.innerText = "My GitHub"),
      (T.innerText = "About Me"),
      (g.innerText = "Menu"),
      (f.innerText = "contact"),
      x.setAttribute("href", "https://github.com/tdematos"),
      v.setAttribute(
        "href",
        "https://www.pexels.com/photo/italian-style-pizza-13814644/"
      ),
      c.addEventListener("click", () => {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        t();
      }),
      o.addEventListener("click", () => {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
        e();
      });
  })();
})();