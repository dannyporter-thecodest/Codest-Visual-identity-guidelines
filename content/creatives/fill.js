/* Fills a creative template with content.
   Text fields:  any element with data-field="name" gets that value as text.
   Images:       <img data-field="photo"> gets src; empty value shows the template's placeholder.
   Tone:         key "tone" sets data-tone on the artboard (light, white, pink, peach, navy).
   Lists:        key "people" = [{ name, role, photo }] fills the [data-list="people"] block.
   Sources:      window.fillCreative(data) (used by render.mjs) or URL params (?headline=...&tone=navy).
   Add ?guides=1 to show the safe area. */
(function () {
  function setField(root, key, value) {
    root.querySelectorAll('[data-field="' + key + '"]').forEach(function (el) {
      if (el.tagName === "IMG") {
        var frame = el.closest(".cr-photo");
        if (value && value !== "placeholder") { el.src = value; el.removeAttribute("data-hide"); if (frame) { frame.classList.remove("is-empty"); frame.classList.add("has-img"); } }
        else if (value === "placeholder") { el.setAttribute("data-hide", "true"); if (frame) { frame.classList.remove("is-empty", "has-img"); } }
        else { el.setAttribute("data-hide", "true"); if (frame) frame.classList.add("is-empty"); }
      } else {
        el.textContent = value == null ? "" : String(value);
      }
    });
  }
  function setPeople(root, people) {
    var list = root.querySelector('[data-list="people"]');
    if (!list || !Array.isArray(people)) return;
    var tpl = list.querySelector("[data-item]");
    if (!tpl) return;
    list.innerHTML = "";
    people.forEach(function (p) {
      var item = tpl.cloneNode(true);
      var img = item.querySelector("img"); if (img) { if (p.photo) img.src = p.photo; else img.removeAttribute("src"); }
      var n = item.querySelector("[data-sub='name']"); if (n) n.textContent = p.name || "";
      var r = item.querySelector("[data-sub='role']"); if (r) r.textContent = p.role || "";
      list.appendChild(item);
    });
  }
  window.fillCreative = function (data) {
    var root = document.querySelector(".cr");
    if (!root || !data) return;
    Object.keys(data).forEach(function (k) {
      if (k === "tone") root.setAttribute("data-tone", data[k]);
      else if (k === "people") setPeople(root, data[k]);
      else setField(root, k, data[k]);
    });
    document.dispatchEvent(new Event("creative:filled"));
  };
  var q = new URLSearchParams(location.search), d = {};
  q.forEach(function (v, k) { if (k !== "guides") d[k] = v; });
  if (q.get("guides")) document.documentElement.classList.add("cr-guides");
  if (Object.keys(d).length) document.addEventListener("DOMContentLoaded", function () { window.fillCreative(d); });
})();
