import { importShared as l } from "./__federation_fn_import-c58daf25.mjs";
const { useEffect: m, useCallback: d, useState: g } = await l("react"), u = {
  wrapper: ".humberger__menu__wrapper",
  overlay: ".humberger__menu__overlay",
  openBtn: ".humberger__open"
}, y = () => {
  const [s, n] = g(!1), t = d((o) => {
    const c = document.querySelector(u.wrapper), a = document.querySelector(u.overlay);
    c?.classList.toggle("show__humberger__menu__wrapper", o), a?.classList.toggle("active", o), n(o);
  }, []), e = d(() => t(!0), [t]), r = d(() => t(!1), [t]);
  return m(() => {
    const o = (i) => {
      i.key === "Escape" && r();
    }, c = document.querySelector(u.openBtn), a = document.querySelector(u.overlay);
    return c?.addEventListener("click", e), a?.addEventListener("click", r), window.addEventListener("keydown", o), () => {
      c?.removeEventListener("click", e), a?.removeEventListener("click", r), window.removeEventListener("keydown", o);
    };
  }, [e, r]), { isMenuOpen: s, openMenu: e, closeMenu: r };
}, { useEffect: p } = await l("react"), w = () => {
  p(() => {
    const s = () => ({
      loader: document.querySelector(".loader"),
      preloader: document.getElementById("preloder")
    }), n = () => {
      const { loader: t, preloader: e } = s(), r = 500;
      t && t.classList.add("fade-out"), e && setTimeout(() => {
        e.classList.add("fade-out"), e.style.display = "none";
      }, r);
    };
    return window.addEventListener("load", n), document.readyState === "complete" && n(), () => {
      window.removeEventListener("load", n);
    };
  }, []);
}, { useEffect: v } = await l("react"), f = (s) => {
  const n = () => document.querySelectorAll(s), t = () => {
    try {
      n().forEach((r) => {
        const o = r.dataset.setbg;
        o && (r.style.backgroundImage = `url(${o})`);
      });
    } catch (e) {
      console.error("Error setting background images:", e);
    }
  };
  return v(() => {
    t();
    const e = new MutationObserver(t);
    return e.observe(document.body, {
      subtree: !0,
      childList: !0,
      attributes: !0
    }), () => {
      e.disconnect();
    };
  }, [s]), {
    setBgImages: t,
    getElements: n
  };
}, { useState: E } = await l("react"), _ = (s) => {
  const [n, t] = E(s);
  return {
    activeTab: n,
    handleTabClick: (r) => {
      t(r);
    }
  };
};
export {
  y as useHamburgerMenu,
  w as usePreloader,
  f as useSetBgImages,
  _ as useTabs
};
