(function (o, c) {
    var r = function (h) {
            var e = c.endpoint,
                m = "?",
                a, i, f, b;
            f = [];
            b = [];
            var j = {},
                g = o.createElement("IFRAME"),
                q = h.getAttribute(c.att.count) || false,
                n = h.getAttribute(c.att.layout) || "horizontal";
            f = h.href.split("?")[1].split("#")[0].split("&");
            a = 0;
            for (i = f.length; a < i; a += 1) {
                b = f[a].split("=");
                j[b[0]] = b[1]
            }
            a = f = 0;
            for (i = c.vars.req.length; a < i; a += 1) {
                b = c.vars.req[a];
                if (j[b]) {
                    e = e + m + b + "=" + j[b];
                    m = "&"
                }
                f += 1
            }
            if (j.media && j.media.indexOf("http") !== 0) f = 0;
            if (f === i) {
                a = 0;
                for (i = c.vars.opt.length; a < i; a += 1) {
                    b = c.vars.opt[a];
                    if (j[b]) e = e + m + b + "=" + j[b]
                }
                e = e + "&layout=" + n;
                if (q !== false) e += "&count=1";
                g.setAttribute("src", e);
                g.setAttribute("scrolling", "no");
                g.allowTransparency = true;
                g.frameBorder = 0;
                g.style.border = "none";
                g.style.width = c.layout[n].width + "px";
                g.style.height = c.layout[n].height + "px";
                h.parentNode.replaceChild(g, h)
            } else h.parentNode.removeChild(h)
        },
        p = o.getElementsByTagName("A"),
        l, d, k = [];
    d = 0;
    for (l = p.length; d < l; d += 1) k.push(p[d]);
    d = 0;
    for (l = k.length; d < l; d += 1) k[d].href && k[d].href.indexOf(c.button) !== -1 && r(k[d])
})(document, {
    att: {
        layout: "count-layout",
        count: "always-show-count"
    },
    endpoint: "//d3io1k5o0zdpqr.cloudfront.net/pinit.html",
    button: "//pinterest.com/pin/create/button/?",
    vars: {
        req: ["url", "media"],
        opt: ["title", "description"]
    },
    layout: {
        none: {
            width: 43,
            height: 20
        },
        vertical: {
            width: 43,
            height: 58
        },
        horizontal: {
            width: 90,
            height: 20
        }
    }
});
