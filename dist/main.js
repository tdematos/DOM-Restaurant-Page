(() => {
  "use strict";
  const e = function () {
      const e = document.querySelector("body"),
        n = document.createElement("nav"),
        a = document.createElement("div"),
        i = document.createElement("h1"),
        l = document.createElement("div"),
        s = document.createElement("ul"),
        c = document.createElement("li"),
        o = document.createElement("li"),
        r = document.createElement("li"),
        m = document.createElement("a"),
        p = document.createElement("a"),
        u = document.createElement("a");
      n.classList.add("about-navbar"),
        a.classList.add("headingdiv"),
        i.classList.add("about-logo"),
        l.classList.add("listdiv"),
        s.classList.add("navlist"),
        c.classList.add("about-aboutme"),
        o.classList.add("about-menu"),
        r.classList.add("about-contact"),
        e.appendChild(n),
        n.appendChild(a),
        a.appendChild(i),
        n.appendChild(l),
        l.appendChild(s),
        s.appendChild(m),
        s.appendChild(p),
        s.appendChild(u),
        m.appendChild(c),
        p.appendChild(o),
        u.appendChild(r),
        (i.innerText = "Blue Jeans"),
        (c.innerText = "About Me"),
        (o.innerText = "Menu"),
        (r.innerText = "Contact"),
        console.log(e);
      const h = document.createElement("section"),
        C = document.createElement("h2"),
        E = document.createElement("p"),
        L = document.createElement("div"),
        b = document.createElement("div"),
        v = document.createElement("div"),
        f = document.createElement("div"),
        x = document.createElement("div"),
        T = document.createElement("div"),
        g = document.createElement("div"),
        z = document.createElement("div"),
        y = document.createElement("h3"),
        k = document.createElement("p"),
        M = document.createElement("p"),
        A = document.createElement("h3"),
        w = document.createElement("p"),
        S = document.createElement("p");
      h.classList.add("about"),
        C.classList.add("about-title"),
        E.classList.add("about-subtitle"),
        L.classList.add("about-img-container"),
        e.appendChild(h),
        h.appendChild(C),
        h.appendChild(E),
        h.appendChild(b),
        b.appendChild(v),
        b.appendChild(f),
        v.appendChild(x),
        v.appendChild(T),
        f.appendChild(g),
        f.appendChild(z),
        x.appendChild(y),
        x.appendChild(k),
        T.appendChild(M),
        g.appendChild(A),
        g.appendChild(w),
        z.appendChild(S),
        v.classList.add("inner-container-one"),
        f.classList.add("inner-container-two"),
        x.classList.add("sub-menu"),
        T.classList.add("sub-menu"),
        g.classList.add("sub-menu"),
        z.classList.add("sub-menu"),
        (C.innerText = "Menu"),
        (E.innerText =
          "Check out our assortment of the most tastiest pizzas on the planet!"),
        (y.innerText = "Pepperoni Pizza"),
        (k.innerText = "Pepperoni, mozzeralla, red pepper, EVOO"),
        (M.innerText = "$18.89"),
        (A.innerText = "Cheese Pizza"),
        (w.innerText = "Mozzeralla, parmasean, garlic, EVOO"),
        (S.innerText = 17.89);
      const B = document.createElement("footer"),
        P = document.createElement("div"),
        R = document.createElement("div"),
        J = document.createElement("div"),
        O = document.createElement("a"),
        q = document.createElement("a"),
        G = document.createElement("p"),
        H = document.createElement("p"),
        N = document.createElement("p");
      e.appendChild(B),
        B.appendChild(P),
        B.appendChild(R),
        B.appendChild(J),
        P.appendChild(O),
        R.appendChild(q),
        J.appendChild(G),
        J.appendChild(H),
        J.appendChild(N),
        B.classList.add("footer"),
        O.classList.add("image-link"),
        q.classList.add("github-link"),
        J.classList.add("menuselect-container"),
        G.classList.add("small-aboutme"),
        N.classList.add("small-contact"),
        H.classList.add("small-menu"),
        (O.innerText = "image by Rene Strgar"),
        (q.innerText = "My GitHub"),
        (G.innerText = "About Me"),
        (H.innerText = "Menu"),
        (N.innerText = "contact"),
        q.setAttribute("href", "https://github.com/tdematos"),
        O.setAttribute(
          "href",
          "https://www.pexels.com/photo/italian-style-pizza-13814644/"
        ),
        c.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          t();
        }),
        i.addEventListener("click", () => {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          d();
        });
    },
    t = function () {
      const t = document.querySelector("body"),
        n = document.createElement("nav"),
        a = document.createElement("div"),
        i = document.createElement("h1"),
        l = document.createElement("div"),
        s = document.createElement("ul"),
        c = document.createElement("li"),
        o = document.createElement("li"),
        r = document.createElement("li"),
        m = document.createElement("a"),
        p = document.createElement("a"),
        u = document.createElement("a");
      n.classList.add("about-navbar"),
        a.classList.add("headingdiv"),
        i.classList.add("about-logo"),
        l.classList.add("listdiv"),
        s.classList.add("navlist"),
        c.classList.add("about-aboutme"),
        o.classList.add("about-menu"),
        r.classList.add("about-contact"),
        t.appendChild(n),
        n.appendChild(a),
        a.appendChild(i),
        n.appendChild(l),
        l.appendChild(s),
        s.appendChild(m),
        s.appendChild(p),
        s.appendChild(u),
        m.appendChild(c),
        p.appendChild(o),
        u.appendChild(r),
        (i.innerText = "Blue Jeans"),
        (c.innerText = "About Me"),
        (o.innerText = "Menu"),
        (r.innerText = "Contact"),
        console.log(t);
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
        t.appendChild(h),
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
      t.appendChild(v),
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
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          e();
        }),
        i.addEventListener("click", () => {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          d();
        });
    };
  function n() {
    const d = document.querySelector("body"),
      a = document.createElement("nav"),
      i = document.createElement("div"),
      l = document.createElement("h1"),
      s = document.createElement("div"),
      c = document.createElement("ul"),
      o = document.createElement("li"),
      r = document.createElement("li"),
      m = document.createElement("li");
    a.classList.add("navbar"),
      i.classList.add("headingdiv"),
      l.classList.add("title"),
      s.classList.add("listdiv"),
      c.classList.add("navlist"),
      o.classList.add("aboutme"),
      r.classList.add("menu"),
      m.classList.add("contact"),
      d.appendChild(a),
      a.appendChild(i),
      i.appendChild(l),
      a.appendChild(s),
      s.appendChild(c),
      c.appendChild(o),
      c.appendChild(r),
      c.appendChild(m),
      (l.innerText = "Blue Jeans"),
      (o.innerText = "About Me"),
      (r.innerText = "Menu"),
      (m.innerText = "Contact");
    const p = document.createElement("section"),
      u = document.createElement("h2"),
      h = document.createElement("p"),
      C = document.createElement("button");
    p.classList.add("hero"),
      u.classList.add("hero-title"),
      h.classList.add("hero-subtitle"),
      C.classList.add("hero-button"),
      d.appendChild(p),
      p.appendChild(u),
      p.appendChild(h),
      p.appendChild(C),
      (u.innerText = "Super Fast Delicious Pizza"),
      (h.innerText = "Check out our BRAND-NEW Webpage!"),
      (C.innerText = "See Menu");
    const E = document.createElement("footer"),
      L = document.createElement("div"),
      b = document.createElement("div"),
      v = document.createElement("div"),
      f = document.createElement("a"),
      x = document.createElement("a"),
      T = document.createElement("p"),
      g = document.createElement("p"),
      z = document.createElement("p");
    d.appendChild(E),
      E.appendChild(L),
      E.appendChild(b),
      E.appendChild(v),
      L.appendChild(f),
      b.appendChild(x),
      v.appendChild(T),
      v.appendChild(g),
      v.appendChild(z),
      E.classList.add("footer"),
      f.classList.add("image-link"),
      x.classList.add("github-link"),
      v.classList.add("menuselect-container"),
      T.classList.add("small-aboutme"),
      z.classList.add("small-contact"),
      g.classList.add("small-menu"),
      (f.innerText = "image by Rene Strgar"),
      (x.innerText = "My GitHub"),
      (T.innerText = "About Me"),
      (g.innerText = "Menu"),
      (z.innerText = "contact"),
      x.setAttribute("href", "https://github.com/tdematos"),
      f.setAttribute(
        "href",
        "https://www.pexels.com/photo/italian-style-pizza-13814644/"
      ),
      l.addEventListener("click", () => {
        for (; d.firstChild; ) d.removeChild(d.firstChild);
        n();
      }),
      o.addEventListener("click", () => {
        for (; d.firstChild; ) d.removeChild(d.firstChild);
        t();
      }),
      r.addEventListener("click", () => {
        for (; d.firstChild; ) d.removeChild(d.firstChild);
        e();
      }),
      C.addEventListener("click", () => {
        for (; d.firstChild; ) d.removeChild(d.firstChild);
        e();
      });
  }
  n();
  const d = n;
})();