this._s = this._s || {};
(function(_) {
    var window = this;
    try {
        _.yub = function(a) {
            this.Nl = a
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var zub = function(a) {
            _.Qn.call(this, a.Ka);
            var b = this;
            this.window = a.service.window.get();
            this.Ba = this.Nl();
            this.Aa = window.orientation;
            this.oa = function() {
                var c = b.Nl(),
                    d = b.XWb() && Math.abs(window.orientation) === 90 && b.Aa === -1 * window.orientation;
                b.Aa = window.orientation;
                if (c !== b.Ba || d) {
                    b.Ba = c;
                    d = _.n(b.Ke);
                    for (var e = d.next(); !e.done; e = d.next()) {
                        e = e.value;
                        var f = new _.yub(c);
                        try {
                            e(f)
                        } catch (g) {
                            _.da(g)
                        }
                    }
                }
            };
            this.Ke = new Set;
            this.window.addEventListener("resize", this.oa);
            this.XWb() && this.window.addEventListener("orientationchange",
                this.oa)
        };
        _.G(zub, _.Qn);
        zub.Ha = function() {
            return {
                service: {
                    window: _.Rn
                }
            }
        };
        zub.prototype.addListener = function(a) {
            this.Ke.add(a)
        };
        zub.prototype.removeListener = function(a) {
            this.Ke.delete(a)
        };
        zub.prototype.Nl = function() {
            if (Aub()) {
                var a = _.Hl(this.window);
                a = new _.wl(a.width, Math.round(a.width * this.window.innerHeight / this.window.innerWidth))
            } else a = this.xc() || (_.ka() ? Aub() : this.window.visualViewport) ? _.Hl(this.window) : new _.wl(this.window.innerWidth, this.window.innerHeight);
            return a.height < a.width
        };
        zub.prototype.destroy = function() {
            this.window.removeEventListener("resize", this.oa);
            this.window.removeEventListener("orientationchange", this.oa)
        };
        var Aub = function() {
            return _.ka() && _.$e.sH() && !navigator.userAgent.includes("GSA")
        };
        zub.prototype.xc = function() {
            return _.Bub
        };
        zub.prototype.XWb = function() {
            return "orientation" in window
        };
        _.Bub = !1;
        _.Vn(_.uVa, zub);
        _.Bub = !0;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.x("aLUfP");

        _.y();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.x("wQlYve");
        _.Dt = new _.Pd(_.fq);
        _.y();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.EDu = function(a, b) {
            _.Bd(a, b, _.ca.parentWindow ? _.ca.parentWindow : _.ca)
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Psu = function(a) {
                this.src = a;
                this.Aa = !1;
                this.Da = []
            },
            Qsu = function(a) {
                if (!a.Aa) {
                    a.Aa = !0;
                    a = _.n(a.Da);
                    for (var b = a.next(); !b.done; b = a.next()) b = b.value, b()
                }
            };
        Psu.prototype.isLoaded = function() {
            return this.Aa
        };
        var Rsu, Ssu, Tsu;
        Rsu = _.ea();
        Ssu = Rsu.includes("iPad") || Rsu.includes("iPhone") || Rsu.includes("iPod");
        _.BY = function(a, b) {
            this.Da = a;
            this.aha = b;
            this.Ba = this.Aa = this.oa = null;
            this.Ca = !1
        };
        _.BY.prototype.init = function(a) {
            var b = this;
            if (!Tsu) return !1;
            if (this.oa) return !0;
            this.oa = new(_.ca.AudioContext || _.ca.webkitAudioContext);
            this.Aa = this.oa.createGain();
            this.Aa.connect(this.oa.destination);
            for (var c = _.n(Object.values(this.Da)), d = c.next(); !d.done; d = c.next()) d.value.init(this.oa);
            c = _.n(Object.values(this.aha));
            for (d = c.next(); !d.done; d = c.next()) d.value.init(this.oa, this.Aa);
            Ssu && (Usu(this), _.um(a, "touchend", function() {
                Usu(b)
            }));
            return !0
        };
        var Vsu = function(a) {
                a.Ca || (a.Ba = a.oa.createBufferSource(), a.Ba.buffer = a.oa.createBuffer(1, 1, 22050), a.Ba.connect(a.oa.destination), _.um(a.Ba, "ended", function() {
                    a.Ca = !0
                }), a.Ba.start(0))
            },
            Usu = function(a) {
                a.oa && !a.Ca && (a.Ba !== null && a.Ca || Vsu(a))
            };
        _.BY.prototype.isInitialized = function() {
            return !!this.oa
        };
        _.BY.prototype.getContext = function() {
            return this.oa
        };
        _.BY.prototype.destroy = function() {
            this.oa.close();
            this.oa = null
        };
        _.BY.prototype.reset = function() {
            for (var a = _.n(Object.values(this.Da)), b = a.next(); !b.done; b = a.next()) b.value.Da = [];
            a = _.n(Object.values(this.aha));
            for (b = a.next(); !b.done; b = a.next()) b.value.stop()
        };
        _.Wsu = function(a) {
            a.Aa && (a.Aa.gain.value = 0)
        };
        _.Xsu = function(a) {
            a.Aa && (a.Aa.gain.value = 1)
        };
        Tsu = !(!_.ca.AudioContext && !_.ca.webkitAudioContext) && !!_.ca.GainNode;
        _.CY = function(a, b, c) {
            this.oa = a;
            this.name = b;
            this.duration = c;
            this.Ba = {};
            this.Ca = this.Aa = this.Da = null;
            this.Fa = 0
        };
        _.CY.prototype.init = function(a, b) {
            this.Aa = a;
            this.Ca = b;
            this.Aa.createGain && (this.Da = this.Aa.createGain())
        };
        var Ysu = function(a) {
            if (a.Aa)
                for (var b = a.Aa.currentTime * 1E3, c = _.n(Object.keys(a.Ba)), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = a.Ba[d];
                    !e.DWc && e.playTime + a.duration < b && delete a.Ba[d]
                }
        };
        _.CY.prototype.play = function(a, b) {
            a = a === void 0 ? 0 : a;
            b = b === void 0 ? !1 : b;
            if (!this.Aa || !this.Ca) return -1;
            Ysu(this);
            a = this.Aa.currentTime + a / 1E3;
            var c = this.Aa.createBufferSource();
            this.Da ? (c.connect(this.Da), this.Da.connect(this.Ca)) : c.connect(this.Ca);
            c.loop = b;
            try {
                c.buffer = this.oa.Ca[this.name]
            } catch (e) {
                return -1
            }
            c.playbackRate.value = 1;
            c.start(a, 0);
            var d = this.Fa++;
            this.Ba[String(d)] = {
                node: c,
                playTime: a * 1E3,
                DWc: b
            };
            return d
        };
        _.CY.prototype.stop = function(a) {
            Ysu(this);
            if (a !== void 0) {
                if (this.Ba[a]) {
                    try {
                        this.Ba[a].node.stop(0)
                    } catch (c) {}
                    delete this.Ba[a]
                }
            } else {
                a = _.n(Object.keys(this.Ba));
                for (var b = a.next(); !b.done; b = a.next()) this.stop(b.value)
            }
        };
        _.Zsu = function(a, b, c, d) {
            d = d === void 0 ? 314 : d;
            Psu.call(this, "https://www.google.com" + a + b + ".bin");
            this.index = c;
            this.Ba = d;
            this.oa = null;
            this.Ca = {};
            this.status = 0
        };
        _.G(_.Zsu, Psu);
        _.Zsu.prototype.getStatus = function() {
            return this.status
        };
        _.Zsu.prototype.init = function(a) {
            this.oa = a
        };
        _.Zsu.prototype.preload = function(a) {
            var b = this;
            if ((this.status === 0 || (a === void 0 ? 0 : a)) && this.oa) {
                var c = new _.Cq;
                c.setResponseType("arraybuffer");
                c.listen("complete", function() {
                    $su(b, c)
                });
                c.send(this.src);
                this.status = 1
            }
        };
        var $su = function(a, b) {
                b = b.getResponse();
                var c = atu(a, new Uint8Array(b)),
                    d = Object.keys(c);
                a.status = 2;
                var e = function(f, g) {
                    g && f && (a.Ca[f] = g);
                    d.length === 0 ? (a.status = 3, Qsu(a)) : (f = d.shift(), a.oa.decodeAudioData(c[f], function(h) {
                        e(f, h)
                    }))
                };
                e(null, null)
            },
            atu = function(a, b) {
                var c = {},
                    d = {},
                    e = {},
                    f = 0,
                    g = !1;
                b[0] === 0 && (g = !0);
                Object.entries(a.index).forEach(function(m) {
                    var p = _.n(m);
                    m = p.next().value;
                    p = p.next().value;
                    d[m] = [];
                    e[m] = [];
                    var q = b[p];
                    g && (q |= b[++p] << 8);
                    f += q;
                    for (var v = 0; v < q; v++) g ? (d[m].push(b[p + 1] | b[p + 2] << 8),
                        p += 2) : d[m].push(b[++p]);
                    for (v = 0; v < q; v++) g ? (e[m].push(b[p + 1] | b[p + 2] << 8), p += 2) : e[m].push(b[++p])
                });
                var h = f * 2 + Object.keys(a.index).length;
                g && (h *= 2, h += 2);
                var l = b[h];
                ++h;
                g && (l |= b[h] << 8, ++h);
                Object.entries(a.index).forEach(function(m) {
                    var p = _.n(m);
                    m = p.next().value;
                    p.next();
                    var q = 0;
                    _.Pa(d[m], function(O) {
                        q += a.Ba - (b[h + O * 32 + 2] & 2 ? 0 : 1)
                    }, a);
                    c[m] = new ArrayBuffer(q);
                    p = new Uint8Array(c[m]);
                    for (var v = 0, z = 0; z < d[m].length; z++) {
                        var A = h + d[m][z] * 32,
                            E = a.Ba - (b[A + 2] & 2 ? 0 : 1),
                            L = h + l * 32 + e[m][z] * (a.Ba - 32);
                        p.set(b.subarray(A, A +
                            32), v);
                        v += 32;
                        p.set(b.subarray(L, L + E - 32), v);
                        v += E - 32
                    }
                });
                return c
            };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.xEs = _.B("pKhWu", [_.fq]);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.t7e = function(a) {
            return Array.prototype.map.call(a, function(b) {
                b = b.toString(16);
                return b.length > 1 ? b : "0" + b
            }).join("")
        };
        _.u7e = function() {
            this.blockSize = -1
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var zLr = function(a, b) {
                this.blockSize = -1;
                this.blockSize = 64;
                this.Ba = _.ca.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
                this.Ca = this.Aa = 0;
                this.oa = [];
                this.Fa = a;
                this.Da = b;
                this.Ia = _.ca.Int32Array ? new Int32Array(64) : Array(64);
                xLr === void 0 && (_.ca.Int32Array ? xLr = new Int32Array(yLr) : xLr = yLr);
                this.reset()
            },
            xLr;
        _.Xg(zLr, _.u7e);
        var ALr = [].concat(128, _.kba(0, 63));
        zLr.prototype.reset = function() {
            this.Ca = this.Aa = 0;
            this.oa = _.ca.Int32Array ? new Int32Array(this.Da) : _.Ha(this.Da)
        };
        var BLr = function(a) {
            for (var b = a.Ba, c = a.Ia, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = d * 4;
            for (b = 16; b < 64; b++) {
                e = c[b - 15] | 0;
                d = c[b - 2] | 0;
                var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                    g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
                c[b] = f + g | 0
            }
            d = a.oa[0] | 0;
            e = a.oa[1] | 0;
            var h = a.oa[2] | 0,
                l = a.oa[3] | 0,
                m = a.oa[4] | 0,
                p = a.oa[5] | 0,
                q = a.oa[6] | 0;
            f = a.oa[7] | 0;
            for (b = 0; b < 64; b++) {
                var v = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
                g = m & p ^ ~m & q;
                f = f + ((m >>> 6 | m << 26) ^ (m >>> 11 | m <<
                    21) ^ (m >>> 25 | m << 7)) | 0;
                g = g + (xLr[b] | 0) | 0;
                g = f + (g + (c[b] | 0) | 0) | 0;
                f = q;
                q = p;
                p = m;
                m = l + g | 0;
                l = h;
                h = e;
                e = d;
                d = g + v | 0
            }
            a.oa[0] = a.oa[0] + d | 0;
            a.oa[1] = a.oa[1] + e | 0;
            a.oa[2] = a.oa[2] + h | 0;
            a.oa[3] = a.oa[3] + l | 0;
            a.oa[4] = a.oa[4] + m | 0;
            a.oa[5] = a.oa[5] + p | 0;
            a.oa[6] = a.oa[6] + q | 0;
            a.oa[7] = a.oa[7] + f | 0
        };
        zLr.prototype.update = function(a, b) {
            b === void 0 && (b = a.length);
            var c = 0,
                d = this.Aa;
            if (typeof a === "string")
                for (; c < b;) this.Ba[d++] = a.charCodeAt(c++), d == this.blockSize && (BLr(this), d = 0);
            else if (_.Ja(a))
                for (; c < b;) {
                    var e = a[c++];
                    if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("qk");
                    this.Ba[d++] = e;
                    d == this.blockSize && (BLr(this), d = 0)
                } else throw Error("rk");
            this.Aa = d;
            this.Ca += b
        };
        zLr.prototype.digest = function() {
            var a = [],
                b = this.Ca * 8;
            this.Aa < 56 ? this.update(ALr, 56 - this.Aa) : this.update(ALr, this.blockSize - (this.Aa - 56));
            for (var c = 63; c >= 56; c--) this.Ba[c] = b & 255, b /= 256;
            BLr(this);
            for (c = b = 0; c < this.Fa; c++)
                for (var d = 24; d >= 0; d -= 8) a[b++] = this.oa[c] >> d & 255;
            return a
        };
        var yLr = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
            4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ];
        _.DLr = function() {
            zLr.call(this, 8, CLr)
        };
        _.Xg(_.DLr, zLr);
        var CLr = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var X0c = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        var Y0c, f1c, i1c, a1c, k1c, c1c;
        _.Z0c = function(a) {
            var b = Y0c(a);
            if (!b) throw Error("Zh`" + a);
            return b
        };
        Y0c = function(a) {
            var b = {};
            a = String(a);
            var c = _.$0c(a);
            if (a1c.test(c)) return b.gea = _.b1c(c), b.type = "hex", b;
            c = c1c(a);
            return c.length ? (b.gea = _.LC(c), b.type = "rgb", b) : X0c && (a = X0c[a.toLowerCase()]) ? (b.gea = a, b.type = "named", b) : null
        };
        _.d1c = function(a) {
            return !!(a1c.test(_.$0c(a)) || c1c(a).length || X0c && X0c[a.toLowerCase()])
        };
        _.e1c = function(a) {
            var b = c1c(a);
            if (!b.length) throw Error("$h`" + a);
            return b
        };
        f1c = /#(.)(.)(.)/;
        _.b1c = function(a) {
            if (!a1c.test(a)) throw Error("ai`" + a);
            a.length == 4 && (a = a.replace(f1c, "#$1$1$2$2$3$3"));
            return a.toLowerCase()
        };
        _.MC = function(a) {
            a = _.b1c(a);
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        };
        _.g1c = function(a, b, c) {
            a = Number(a);
            b = Number(b);
            c = Number(c);
            if (a != (a & 255) || b != (b & 255) || c != (c & 255)) throw Error("bi`" + a + "`" + b + "`" + c);
            b = a << 16 | b << 8 | c;
            return a < 16 ? "#" + (16777216 | b).toString(16).slice(1) : "#" + b.toString(16)
        };
        _.LC = function(a) {
            return _.g1c(a[0], a[1], a[2])
        };
        _.h1c = function(a, b, c) {
            a /= 255;
            b /= 255;
            c /= 255;
            var d = Math.max(a, b, c),
                e = Math.min(a, b, c),
                f = 0,
                g = 0,
                h = .5 * (d + e);
            d != e && (d == a ? f = 60 * (b - c) / (d - e) : d == b ? f = 60 * (c - a) / (d - e) + 120 : d == c && (f = 60 * (a - b) / (d - e) + 240), g = 0 < h && h <= .5 ? (d - e) / (2 * h) : (d - e) / (2 - 2 * h));
            return [Math.round(f + 360) % 360, g, h]
        };
        i1c = function(a, b, c) {
            c < 0 ? c += 1 : c > 1 && --c;
            return 6 * c < 1 ? a + (b - a) * 6 * c : 2 * c < 1 ? b : 3 * c < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
        };
        _.j1c = function(a, b, c) {
            a /= 360;
            if (b == 0) c = b = a = c * 255;
            else {
                var d = c < .5 ? c * (1 + b) : c + b - b * c;
                var e = 2 * c - d;
                c = 255 * i1c(e, d, a + 1 / 3);
                b = 255 * i1c(e, d, a);
                a = 255 * i1c(e, d, a - 1 / 3)
            }
            return [Math.round(c), Math.round(b), Math.round(a)]
        };
        a1c = /^#(?:[0-9a-f]{3}){1,2}$/i;
        k1c = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
        c1c = function(a) {
            var b = a.match(k1c);
            if (b) {
                a = Number(b[1]);
                var c = Number(b[2]);
                b = Number(b[3]);
                if (a >= 0 && a <= 255 && c >= 0 && c <= 255 && b >= 0 && b <= 255) return [a, c, b]
            }
            return []
        };
        _.$0c = function(a) {
            return a.charAt(0) == "#" ? a : "#" + a
        };
        _.l1c = function(a) {
            a = _.MC(a);
            return _.h1c(a[0], a[1], a[2])
        };
        _.NC = function(a, b, c) {
            c = _.kl(c, 0, 1);
            return [Math.round(b[0] + c * (a[0] - b[0])), Math.round(b[1] + c * (a[1] - b[1])), Math.round(b[2] + c * (a[2] - b[2]))]
        };
        _.m1c = function(a, b) {
            return _.NC([0, 0, 0], a, b)
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Sv;
        _.WJb = function(a) {
            return a ? _.Xc(a) || _.Xc(a.querySelector("[data-ved]")) : ""
        };
        Sv = new Map;
        Sv.set("abuse_dropdown", _.jo("FLsy8"));
        _.XJb = _.jo("baGTZc");
        Sv.set("ac_ar", _.XJb);
        Sv.set("ac_bc", _.jo("bh3Zn"));
        Sv.set("ac_be", _.jo("M3Mlu"));
        Sv.set("ac_bt", _.jo("jnvnaf"));
        Sv.set("ac_cs", _.jo("sQFYsc"));
        Sv.set("ac_fc", _.jo("bkL5dc"));
        Sv.set("ac_fe", _.jo("T973lb"));
        _.YJb = _.jo("uwoEDe");
        Sv.set("ac_ir", _.YJb);
        Sv.set("ac_lvs", _.jo("lgrA4c"));
        Sv.set("ac_rc", _.jo("u16dZe"));
        Sv.set("accept", _.jo("ZcZT7"));
        Sv.set("acex", _.jo("QRorz"));
        Sv.set("actn_lch", _.jo("XsfZhc"));
        Sv.set("actn_lcl", _.jo("HRlsE"));
        Sv.set("actn_rdp", _.jo("euqYIe"));
        Sv.set("actn_sch", _.jo("VotO5e"));
        Sv.set("actn_scl", _.jo("CXIWfd"));
        Sv.set("actn_srt", _.jo("Fre9gc"));
        Sv.set("add_related_product_click", _.jo("xok12c"));
        Sv.set("add_to_home_screen_action", _.jo("DkkcUc"));
        Sv.set("addphoto", _.jo("gmWxtb"));
        Sv.set("addvideo", _.jo("ASLTGc"));
        Sv.set("aj_bck", _.jo("z70VDd"));
        Sv.set("aj_dcp", _.jo("H5cAG"));
        Sv.set("aj_ecp", _.jo("MTDbVc"));
        Sv.set("aj_ficlk", _.jo("lHwYG"));
        Sv.set("aj_mbclk", _.jo("NIrDeb"));
        Sv.set("aj_qliclk", _.jo("a61FBe"));
        Sv.set("aj_rcclk", _.jo("Kqqsbb"));
        Sv.set("aj_sbclk", _.jo("Nvt4Cf"));
        Sv.set("aj_vcclk", _.jo("pLNu0c"));
        Sv.set("aj_wvcl", _.jo("LRV2xe"));
        Sv.set("ampclosed", _.jo("imAz2c"));
        Sv.set("ampview", _.jo("T6x6xf"));
        Sv.set("ampvis", _.jo("xfBPd"));
        Sv.set("answer", _.jo("xJr8Ff"));
        Sv.set("answerListClose", _.jo("FToVDf"));
        Sv.set("answer_button_clicked", _.jo("XqrqAb"));
        Sv.set("app_dl", _.jo("GSRtwb"));
        Sv.set("apply", _.jo("rKRqBc"));
        Sv.set("apply_feedback_style", _.jo("RPnKAb"));
        Sv.set("asyncComplete", _.jo("F7mjVb"));
        Sv.set("asyncError", _.jo("xBaS2c"));
        Sv.set("asyncFilled", _.jo("wUVKEf"));
        Sv.set("asyncLoading", _.jo("sW77Jf"));
        Sv.set("asyncReset", _.jo("pob4qc"));
        Sv.set("attributionClicked", _.jo("zVy2Zd"));
        Sv.set("audg_upgrade", _.jo("GIaasc"));
        Sv.set("auto_expand", _.jo("STNFMd"));
        _.ZJb = _.jo("u6JqG");
        Sv.set("b_cs", _.ZJb);
        Sv.set("ba_el", _.jo("pOKbc"));
        Sv.set("ba_ls", _.jo("XUvoxf"));
        Sv.set("back_action", _.jo("w3YEEc"));
        Sv.set("bd_cancel_business", _.jo("hD9DJb"));
        Sv.set("bd_redirect_to_GMB", _.jo("Qc1oQ"));
        Sv.set("before_collapse", _.jo("San1hb"));
        Sv.set("before_expand", _.jo("JyxW2d"));
        Sv.set("blank", _.jo("IVUAVd"));
        Sv.set("bs_close", _.jo("OoU6Je"));
        Sv.set("bs_closed", _.jo("u3CCGe"));
        Sv.set("bs_open", _.jo("womQne"));
        Sv.set("bs_opened", _.jo("RJHW"));
        Sv.set("buttonClick", _.jo("N8p5be"));
        Sv.set("cal_enter_day", _.jo("SIz2E"));
        Sv.set("cal_leave_day", _.jo("Es1Dad"));
        _.$Jb = _.jo("cO7eI");
        Sv.set("cal_select_day", _.$Jb);
        Sv.set("calculator_switch_to_home_budget", _.jo("Tfq1Fd"));
        Sv.set("calculator_switch_to_monthly_payment", _.jo("Ftrhz"));
        Sv.set("cancel", _.jo("Dfidg"));
        Sv.set("cancelQuestion", _.jo("LeYGHd"));
        Sv.set("cancel_discard", _.jo("elVNVc"));
        Sv.set("cancel_form", _.jo("mCPMIf"));
        Sv.set("canvas_change", _.jo("I0oyDf"));
        Sv.set("carousel_scrolled", _.jo("ssGjLd"));
        Sv.set("categorySelect", _.jo("cn69xf"));
        Sv.set("cc_input_value_change", _.jo("Wtqxqe"));
        Sv.set("cc_selected_value_change", _.jo("eoysHf"));
        Sv.set("cc_swap", _.jo("hKgkec"));
        Sv.set("change_active_index", _.jo("J9CM2d"));
        Sv.set("change_associated_topic", _.jo("RQkP6b"));
        Sv.set("change_loc", _.jo("SJKe6b"));
        Sv.set("change_sort", _.jo("W3WT0c"));
        Sv.set("change_source", _.jo("tRMLve"));
        Sv.set("chart_touch", _.jo("M2DtDd"));
        Sv.set("checkin", _.jo("AKIwde"));
        Sv.set("checkout", _.jo("nCYvoe"));
        Sv.set("chip", _.jo("ZXzOJd"));
        Sv.set("chip_selected", _.jo("QxCCNc"));
        Sv.set("ci", _.jo("PFy8sf"));
        Sv.set("ci_if", _.jo("ZAPqle"));
        Sv.set("ci_pi", _.jo("YIQI0c"));
        Sv.set("cl", _.jo("Rrdfj"));
        Sv.set("cl_mi", _.jo("wxLm"));
        Sv.set("clearText", _.jo("r7r31"));
        Sv.set("clear_fil", _.jo("Cpljcb"));
        Sv.set("clear_filter", _.jo("TbY9Lc"));
        Sv.set("clear_filters", _.jo("xiGls"));
        Sv.set("clear_menu_item", _.jo("hmb6Ye"));
        Sv.set("Click", _.jo("RPeSGc"));
        Sv.set("clickChip", _.jo("wjdXse"));
        Sv.set("clickFollow", _.jo("DUaFse"));
        Sv.set("clickMic", _.jo("jqFClf"));
        Sv.set("clickMobileOverviewTile", _.jo("xvdpvd"));
        Sv.set("clickNumAnswers", _.jo("NNgXy"));
        Sv.set("clickOverviewCategory", _.jo("Bk6Ofd"));
        Sv.set("clickOverviewTile", _.jo("rNIyee"));
        Sv.set("clickPost", _.jo("dfZ86b"));
        Sv.set("clickReplace", _.jo("fHVUcb"));
        Sv.set("clickThankYouPage", _.jo("u29aGd"));
        Sv.set("clickUndo", _.jo("ScNsG"));
        Sv.set("clickViewAll", _.jo("QTy97"));
        Sv.set("click_answer", _.jo("DWTZ7c"));
        Sv.set("click_answer_button", _.jo("YRcfKf"));
        Sv.set("click_change_fact", _.jo("Iv5xjd"));
        Sv.set("click_close_button", _.jo("khnv9e"));
        Sv.set("click_follow_deeplink", _.jo("nrSNlf"));
        Sv.set("click_missing_fact", _.jo("cI5FGd"));
        Sv.set("click_more_button", _.jo("TilCCd"));
        Sv.set("click_question", _.jo("kX7O9c"));
        Sv.set("click_reaction", _.jo("gMSTqb"));
        Sv.set("click_row", _.jo("MWKZJd"));
        Sv.set("click_share_button", _.jo("kLurm"));
        Sv.set("click_suggested_fact", _.jo("SIjSfe"));
        Sv.set("click_view_all_questions", _.jo("rhVEn"));
        Sv.set("click_view_answer", _.jo("On0jHb"));
        Sv.set("click_vote_button", _.jo("lxXtyd"));
        Sv.set("closeCompImmersive", _.jo("Sdjjec"));
        Sv.set("closeDialog", _.jo("Cp5AA"));
        Sv.set("closeFpState", _.jo("WFKY7c"));
        Sv.set("closeGifSelector", _.jo("CTPuBe"));
        Sv.set("closeIV", _.jo("VWIDGc"));
        Sv.set("closeModal", _.jo("bHlLW"));
        Sv.set("closePage", _.jo("GR2IZb"));
        Sv.set("closePresto", _.jo("uDhGee"));
        Sv.set("closeRIV", _.jo("Fo0Zmd"));
        Sv.set("closeTicketsDialog", _.jo("LCPY0d"));
        Sv.set("closeTryOn", _.jo("EkG9Kc"));
        Sv.set("close_button_action", _.jo("I6Hk5"));
        Sv.set("close_button_clicked", _.jo("mLJ4Tb"));
        Sv.set("close_click", _.jo("yO1Xhe"));
        Sv.set("close_clicked", _.jo("C7nb9c"));
        Sv.set("close_dialog", _.jo("OFAOeb"));
        Sv.set("close_expandable_content", _.jo("JEmxj"));
        Sv.set("close_feedback", _.jo("mTqD2"));
        Sv.set("close_feedback_starter_dialog", _.jo("o2W8Ec"));
        Sv.set("close_fpv", _.jo("ojWJW"));
        Sv.set("close_fullpage", _.jo("sBnhle"));
        Sv.set("close_immersive", _.jo("TPhhUb"));
        Sv.set("close_language_picker", _.jo("A2ljuf"));
        Sv.set("close_lightbox", _.jo("zJrr8e"));
        Sv.set("close_onboardingBanner", _.jo("E2DPGe"));
        Sv.set("close_popup", _.jo("j6elkf"));
        Sv.set("close_promo", _.jo("SDholc"));
        Sv.set("close_reviews_dialog", _.jo("WfCwMc"));
        Sv.set("close_thank_you_dialog", _.jo("R3WvEf"));
        Sv.set("close_view", _.jo("xh7EKb"));
        Sv.set("close_why_this_result_dialog", _.jo("hMTL1d"));
        Sv.set("closed", _.jo("J4x5Zb"));
        Sv.set("closing_cross_click", _.jo("AGP3D"));
        Sv.set("cls_dg", _.jo("AJnhzf"));
        Sv.set("co", _.jo("KsPF8c"));
        Sv.set("compare_filter_update", _.jo("E7WQoe"));
        Sv.set("complex_click", _.jo("PqpN0e"));
        Sv.set("complex_exit", _.jo("PAgvYd"));
        Sv.set("compose_question", _.jo("vd8hte"));
        Sv.set("composer_cancel", _.jo("vvjigf"));
        Sv.set("conf_sl", _.jo("HaYcCc"));
        Sv.set("confirm_discard", _.jo("iT1goe"));
        Sv.set("contestant_click", _.jo("SoGc2c"));
        Sv.set("contestant_score_change", _.jo("fH3a5c"));
        Sv.set("continue_to_site", _.jo("v3gned"));
        Sv.set("copy_code", _.jo("gWtsbd"));
        Sv.set("createSite", _.jo("uJqyff"));
        Sv.set("csoff", _.jo("SjYL9d"));
        Sv.set("cson", _.jo("H3cfOc"));
        _.aKb = _.jo("EormBc");
        Sv.set("ct_ia", _.aKb);
        _.bKb = _.jo("gEKQDb");
        Sv.set("ct_ic", _.bKb);
        Sv.set("cu_open_dialog", _.jo("dOwrvc"));
        Sv.set("custom_dialog_send", _.jo("bC8xSc"));
        Sv.set("custom_dialog_show", _.jo("FqZ93"));
        Sv.set("d3bn_up", _.jo("hQXqwd"));
        Sv.set("date_step", _.jo("JRx8oe"));
        Sv.set("dates_changed", _.jo("Lpp5Ab"));
        Sv.set("dcu", _.jo("IoCZ2"));
        Sv.set("dd_cancel_delete", _.jo("qOIWId"));
        Sv.set("dd_confirm_delete", _.jo("m3zqKe"));
        Sv.set("dd_dismissed", _.jo("JPZ0Pe"));
        Sv.set("dd_ok", _.jo("ERBpD"));
        Sv.set("debugDocButtonPress", _.jo("Z8J2Ob"));
        Sv.set("dec", _.jo("tPak1b"));
        Sv.set("delete_chip", _.jo("LjVEJd"));
        Sv.set("desclink", _.jo("SKAaMe"));
        Sv.set("description1_input_change", _.jo("A8nJ6b"));
        Sv.set("description2_input_change", _.jo("sczChb"));
        Sv.set("destination_overlay_clicked", _.jo("AsnBmb"));
        Sv.set("destination_overlay_mouseenter", _.jo("kXTKoe"));
        Sv.set("destination_overlay_mouseleave", _.jo("Evbz4"));
        Sv.set("destination_selected", _.jo("EWuz5d"));
        Sv.set("dg_display_content", _.jo("tg9G5c"));
        Sv.set("dialog_cancel", _.jo("orHqSd"));
        Sv.set("dialog_cancel_button_clicked", _.jo("RPNbBd"));
        Sv.set("dialog_closed", _.jo("Vkia7b"));
        Sv.set("dialog_ok_button_clicked", _.jo("VWfVjc"));
        Sv.set("dialog_rates_update", _.jo("aftQmf"));
        Sv.set("directions_state_push", _.jo("uV5She"));
        Sv.set("disable_send_button", _.jo("vQVDrf"));
        Sv.set("dismiss", _.jo("jQAnd"));
        Sv.set("dismiss_form", _.jo("qmzh0d"));
        Sv.set("dismiss_warmup", _.jo("NiU3ee"));
        Sv.set("dismissed", _.jo("TgMM6"));
        Sv.set("displayClearButton", _.jo("lvNy4b"));
        Sv.set("dkp", _.jo("DxtH2b"));
        Sv.set("dlt_md", _.jo("JxehRb"));
        Sv.set("dmp_expand_more_item", _.jo("AA80Ke"));
        Sv.set("done", _.jo("CrxsIb"));
        Sv.set("dp_menu_reg_caption", _.jo("kNOP9c"));
        Sv.set("dp_resolve", _.jo("V4hLle"));
        Sv.set("dst_close_kp", _.jo("SCQ4Hd"));
        Sv.set("dt5_dismiss", _.jo("L3XzFc"));
        Sv.set("dt5_more_info", _.jo("uTJIk"));
        Sv.set("duf_eekp", _.jo("YCyyCf"));
        Sv.set("duf_init", _.jo("CpItae"));
        Sv.set("duf_sekp", _.jo("YuhXef"));
        Sv.set("duffyClose", _.jo("NmE0xf"));
        Sv.set("duffyReady", _.jo("P12Uf"));
        Sv.set("dum1", _.jo("welXHc"));
        Sv.set("dum2", _.jo("RGzmzc"));
        Sv.set("dum3", _.jo("dRyxqe"));
        Sv.set("dum4", _.jo("n9owOb"));
        Sv.set("ed_AllEvents", _.jo("XqLU4b"));
        Sv.set("ed_HomePage", _.jo("YI5p9d"));
        Sv.set("ed_Progressbar", _.jo("kEHEgb"));
        Sv.set("ed_ResultsPage", _.jo("jjNZnb"));
        Sv.set("ed_SavedPage", _.jo("XXaZKd"));
        Sv.set("ed_filled", _.jo("h21E7b"));
        Sv.set("ed_loading", _.jo("wYmjnf"));
        Sv.set("ed_menuClick", _.jo("oVHaYc"));
        Sv.set("edit", _.jo("Rbj2J"));
        Sv.set("edit_arrival", _.jo("Iu9urb"));
        Sv.set("edit_date", _.jo("qm6LG"));
        Sv.set("edit_departure", _.jo("NSJpVd"));
        Sv.set("edu_b", _.jo("kpPysf"));
        Sv.set("edu_u", _.jo("C0jIpc"));
        Sv.set("eh_retry", _.jo("PQ1OU"));
        Sv.set("email_input_validated", _.jo("IGuefc"));
        Sv.set("enable_send_button", _.jo("YVwGCc"));
        Sv.set("ended", _.jo("a8roX"));
        Sv.set("enter_gallery_view", _.jo("oCVaib"));
        Sv.set("enter_immersive", _.jo("XwT0l"));
        Sv.set("enter_immersive_view", _.jo("FvAg6e"));
        Sv.set("eob_sb_ra", _.jo("T0cLR"));
        Sv.set("ep_close", _.jo("AEWXLc"));
        Sv.set("ep_idback", _.jo("yVOZ7d"));
        _.cKb = _.jo("ZW0ne");
        Sv.set("ep_idopen", _.cKb);
        Sv.set("ep_o", _.jo("Vmvuuc"));
        Sv.set("ercs_hide", _.jo("kxhOy"));
        Sv.set("ercs_show", _.jo("OaXUlc"));
        Sv.set("errorRetry", _.jo("AKXI3e"));
        Sv.set("esb_as", _.jo("C9oCse"));
        Sv.set("exit_view", _.jo("xKag5d"));
        Sv.set("expand", _.jo("OXD6tc"));
        Sv.set("expand_click", _.jo("F2wUFc"));
        Sv.set("f_f", _.jo("u0Mvte"));
        Sv.set("f_mis", _.jo("zCBidc"));
        Sv.set("fc_ftn", _.jo("GZOiOb"));
        Sv.set("fc_ftp", _.jo("qJ508e"));
        Sv.set("fc_hmc", _.jo("XQFOyc"));
        _.dKb = _.jo("EKXOFe");
        Sv.set("fc_if", _.dKb);
        _.eKb = _.jo("EEZOrb");
        Sv.set("fc_sm", _.eKb);
        Sv.set("fcd_cls", _.jo("WlVt1"));
        Sv.set("fce", _.jo("K55ecc"));
        Sv.set("feedback", _.jo("jUyrtc"));
        Sv.set("fetch_offers", _.jo("QOgKb"));
        Sv.set("fever_open", _.jo("jIVsxf"));
        Sv.set("filter_button_register", _.jo("tFVAV"));
        Sv.set("filter_buttons_change", _.jo("EctIRc"));
        Sv.set("fin-atw", _.jo("VjBphb"));
        Sv.set("fl_ap", _.jo("DPzf8"));
        Sv.set("flights_filled", _.jo("dMeVOd"));
        Sv.set("flp_sbsbs_clrs", _.jo("tctIJf"));
        Sv.set("flt_fo_updated", _.jo("FCirM"));
        Sv.set("focus", _.jo("Ky6Rkd"));
        Sv.set("focusDestination", _.jo("f2om9"));
        Sv.set("focusMoreButton", _.jo("gqcBzb"));
        Sv.set("focusOnNextCard", _.jo("AVjhmb"));
        Sv.set("focusOnReactButton", _.jo("cJ6dfc"));
        Sv.set("focusOrigin", _.jo("SQvVZc"));
        Sv.set("focus_begin_sentinel", _.jo("zh5SId"));
        Sv.set("focus_end_sentinel", _.jo("D6s9Lb"));
        Sv.set("follow", _.jo("ie7Cfd"));
        Sv.set("fp_s", _.jo("t3L5Dd"));
        Sv.set("fpml_open", _.jo("GlWk7e"));
        Sv.set("fpv_ac", _.jo("spTdzd"));
        _.fKb = _.jo("kGTzi");
        Sv.set("fpv_back", _.fKb);
        _.gKb = _.jo("GK8ajb");
        Sv.set("fpv_close", _.gKb);
        Sv.set("fpv_fg", _.jo("RlhuIc"));
        _.hKb = _.jo("B206Ve");
        Sv.set("fpv_fl", _.hKb);
        Sv.set("fpv_open", _.jo("Zmznff"));
        Sv.set("fpv_st", _.jo("Ms5Ldd"));
        Sv.set("fpv_tc", _.jo("AgAWmc"));
        Sv.set("full_review_snippet", _.jo("nNRzZb"));
        Sv.set("fullscreen_expander_click", _.jo("Cysts"));
        Sv.set("fw_atw_cl", _.jo("KJg4v"));
        Sv.set("fw_atw_open", _.jo("gBBazc"));
        Sv.set("fw_change_tab", _.jo("LuGk5"));
        Sv.set("fw_chart_filled", _.jo("xDEzyf"));
        Sv.set("fw_chart_update_error", _.jo("vAfRge"));
        Sv.set("fw_clear_comparison", _.jo("ukYEA"));
        Sv.set("fw_close_searchbox", _.jo("ziwzFb"));
        Sv.set("fw_compare", _.jo("wwLXJe"));
        Sv.set("fw_ctap", _.jo("vLU9fb"));
        Sv.set("fw_flw_clk", _.jo("ZEkUSe"));
        Sv.set("fw_forced_retry", _.jo("zJhEab"));
        Sv.set("fw_period", _.jo("BLb79e"));
        Sv.set("fw_pvu", _.jo("bHJcAf"));
        Sv.set("fw_retry", _.jo("Yb9zf"));
        Sv.set("fw_unflw_clk", _.jo("nDqH6b"));
        Sv.set("fw_vcu", _.jo("YP69Ee"));
        _.iKb = _.jo("ayHzMd");
        Sv.set("g_dropdown_hide", _.iKb);
        _.jKb = _.jo("k2B5Ae");
        Sv.set("g_dropdown_show", _.jKb);
        Sv.set("gci_hidden", _.jo("QNVdCc"));
        Sv.set("gci_shown", _.jo("JDhVeb"));
        Sv.set("getSelectedDateTime", _.jo("Kfk0ae"));
        Sv.set("getTickets", _.jo("yQeBBb"));
        Sv.set("get_started_click", _.jo("rfXfvb"));
        Sv.set("ghs_open_profile", _.jo("h6pGz"));
        Sv.set("ghs_profile_render_reviews", _.jo("DTdsTb"));
        Sv.set("glass_pane_clicked", _.jo("gnVgJ"));
        Sv.set("go", _.jo("gBMYof"));
        Sv.set("go_back", _.jo("moyYcd"));
        Sv.set("go_back_click", _.jo("ymDEcd"));
        Sv.set("go_next", _.jo("IoXUrb"));
        Sv.set("go_previous", _.jo("qAEft"));
        Sv.set("gws_travel_header_date_change", _.jo("Iet60b"));
        Sv.set("gws_travel_header_date_selector_init", _.jo("pe2SBf"));
        Sv.set("gws_travel_header_destination_change", _.jo("LlCLOc"));
        Sv.set("gws_travel_header_destination_selector_init", _.jo("RRj9gb"));
        Sv.set("gws_travel_header_origin_change", _.jo("gpjJc"));
        Sv.set("gws_travel_header_origin_selector_init", _.jo("UvuFvb"));
        Sv.set("gws_travel_radio_item_selected", _.jo("laYkg"));
        Sv.set("handleDepartureTimeAnchor", _.jo("MB0gs"));
        Sv.set("handleGridAsync", _.jo("ZxdNge"));
        Sv.set("handleHelpLinkClick", _.jo("ldwWoc"));
        Sv.set("handle_retry", _.jo("TenKae"));
        Sv.set("handlelog", _.jo("w9jYwf"));
        Sv.set("hc", _.jo("QA7M0e"));
        Sv.set("hcu", _.jo("HFmTs"));
        Sv.set("headerBackClick", _.jo("ax8kmd"));
        Sv.set("headerButtonClick", _.jo("mGmCM"));
        Sv.set("headline1_input_change", _.jo("T5iJ3d"));
        Sv.set("headline2_input_change", _.jo("L6Q9tc"));
        Sv.set("headline3_input_change", _.jo("jW3Yr"));
        Sv.set("hero_carousel_call_to_action_card_hidden", _.jo("LUhmId"));
        Sv.set("hero_carousel_call_to_action_card_shown", _.jo("L2VP2d"));
        Sv.set("hide", _.jo("fLWhif"));
        Sv.set("hidePostsContainer", _.jo("exxHnc"));
        Sv.set("hide_feedback_style", _.jo("cAdRff"));
        Sv.set("hide_popup", _.jo("ZvRO4b"));
        Sv.set("hide_progress_bar", _.jo("DHmRgd"));
        Sv.set("highlight_differences_click", _.jo("q8xDqd"));
        Sv.set("hlcreg", _.jo("Ms7ZL"));
        Sv.set("hlthumbloaded", _.jo("nG1cab"));
        Sv.set("hlthumbreg", _.jo("BX65Y"));
        Sv.set("hrkc_filled", _.jo("hCFzwb"));
        Sv.set("hsel", _.jo("CcRSe"));
        Sv.set("hybhd_no", _.jo("topvzf"));
        Sv.set("hybhd_yes", _.jo("xUUlfb"));
        Sv.set("hz_save", _.jo("i4g41"));
        Sv.set("hz_save_desktop", _.jo("QvSnAb"));
        Sv.set("ica_bc", _.jo("taFxMb"));
        Sv.set("ikp_kpheightchange", _.jo("N8puvd"));
        Sv.set("ikpd_resetAllFilters", _.jo("o6tN2e"));
        Sv.set("im_bbar_foryou", _.jo("QuxpZe"));
        Sv.set("im_close", _.jo("i88Qob"));
        Sv.set("im_goto_browse", _.jo("cdqQpb"));
        Sv.set("im_sethome", _.jo("nsU21c"));
        Sv.set("im_update_pp", _.jo("fm0Gjb"));
        Sv.set("inc", _.jo("m0JTmc"));
        Sv.set("initUserAnswer", _.jo("CGa7Z"));
        Sv.set("init_selection_menu", _.jo("FeOxMd"));
        Sv.set("input_url_changed_event", _.jo("D3Bqie"));
        Sv.set("iq_click", _.jo("Dv3che"));
        Sv.set("iq_open", _.jo("sYd32b"));
        Sv.set("iqci", _.jo("TqYNVe"));
        Sv.set("iqco", _.jo("UwNLdb"));
        Sv.set("iqi", _.jo("lknOzc"));
        Sv.set("iqo", _.jo("EAzaEf"));
        Sv.set("issueQuery", _.jo("qC6MLc"));
        Sv.set("issueQueryOnEnter", _.jo("yu5ICf"));
        Sv.set("item_impression", _.jo("u9GSyd"));
        Sv.set("item_selection", _.jo("O6xCud"));
        _.kKb = _.jo("PdWSXe");
        Sv.set("ivg_o", _.kKb);
        Sv.set("ivlbx_c", _.jo("FcZxxd"));
        Sv.set("jackpotCollapse", _.jo("L2bEUd"));
        Sv.set("join_click", _.jo("KqdRxe"));
        Sv.set("keep_subscriptions_button_action", _.jo("bvfVp"));
        Sv.set("kercs_hide", _.jo("Jj4R5e"));
        Sv.set("kercs_show", _.jo("rCNWAd"));
        Sv.set("keyword_change", _.jo("MdD72e"));
        Sv.set("kno_shr_close_button_clicked", _.jo("AVrwU"));
        Sv.set("kp_display", _.jo("g2CGSd"));
        Sv.set("kp_expand", _.jo("vAWO1"));
        Sv.set("kx_c", _.jo("q993ff"));
        Sv.set("kx_e", _.jo("GXyQvf"));
        Sv.set("kx_lum_tc", _.jo("AP0axe"));
        Sv.set("kx_t", _.jo("AnP30d"));
        _.lKb = _.jo("KbF57e");
        Sv.set("lcm_close_lightbox", _.lKb);
        Sv.set("lcm_lightbox_closed", _.jo("YJMZUb"));
        Sv.set("lcm_load_close_lightbox", _.jo("QFR3de"));
        _.mKb = _.jo("klllfd");
        Sv.set("lcm_load_lightbox", _.mKb);
        _.nKb = _.jo("pD9K6e");
        Sv.set("lcm_open_lightbox", _.nKb);
        Sv.set("lhd_close", _.jo("Z4HFie"));
        Sv.set("lhd_open_timeline", _.jo("bXV9df"));
        Sv.set("lhd_remove", _.jo("Jmd3pd"));
        Sv.set("lightbox_back_arrow_click", _.jo("hI0W5d"));
        Sv.set("lightbox_closed", _.jo("jvp1jd"));
        Sv.set("lightbox_rendered", _.jo("BOB9X"));
        Sv.set("list_collapse", _.jo("CEYmub"));
        Sv.set("list_expand", _.jo("xZxrDc"));
        Sv.set("load_answers", _.jo("Yd9lhc"));
        Sv.set("load_mini_app_evt", _.jo("nlsrAf"));
        Sv.set("location_changed", _.jo("UTq3ib"));
        Sv.set("logInteraction", _.jo("DJ3tH"));
        Sv.set("log_interaction", _.jo("v9u8eb"));
        Sv.set("lpi_hide", _.jo("p54dce"));
        Sv.set("lpi_show", _.jo("gVmWPe"));
        Sv.set("lpvt_a", _.jo("YNdIHd"));
        Sv.set("lpvt_ofp", _.jo("sWia1d"));
        Sv.set("lr_ml_rl", _.jo("jB8N3b"));
        Sv.set("lrl_flt", _.jo("fUTM9c"));
        Sv.set("lrl_lfpfp", _.jo("cvECUb"));
        Sv.set("lrl_mldc", _.jo("sQ8SYe"));
        Sv.set("lrl_mlwo", _.jo("clInec"));
        Sv.set("lrl_ub", _.jo("beWcs"));
        Sv.set("lrl_ufp", _.jo("qffiL"));
        Sv.set("lrl_umap", _.jo("mHkyle"));
        Sv.set("lrlh_mlt", _.jo("gPCGOe"));
        Sv.set("ltc_ct", _.jo("qlXvkd"));
        Sv.set("ltc_hf", _.jo("ixBNRb"));
        Sv.set("ltc_hnf", _.jo("NGQSXb"));
        Sv.set("ltc_umh", _.jo("SGIGO"));
        Sv.set("ltd_dts_o", _.jo("OXNLkd"));
        Sv.set("ltd_dts_select", _.jo("b8aFIc"));
        Sv.set("ltdl_o", _.jo("EAc3"));
        Sv.set("ltdl_u", _.jo("DEI5gd"));
        Sv.set("ltssc", _.jo("KDfox"));
        Sv.set("lud_hp", _.jo("SZjTS"));
        Sv.set("lud_sp", _.jo("fFbcn"));
        _.oKb = _.jo("DGy2Ae");
        Sv.set("luh_new_dates", _.oKb);
        _.pKb = _.jo("Lj6oJf");
        Sv.set("luh_new_occupancy", _.pKb);
        Sv.set("lupqa_rc", _.jo("UkbUbc"));
        Sv.set("lur_ac", _.jo("kwM37c"));
        Sv.set("lur_dc", _.jo("la4CRe"));
        Sv.set("lur_hbh", _.jo("UldYre"));
        Sv.set("lur_ht", _.jo("RLVNwc"));
        Sv.set("lur_ipc", _.jo("QZiNOb"));
        Sv.set("lur_mca", _.jo("gYZ0mc"));
        Sv.set("lur_mca_mo", _.jo("cKneUb"));
        Sv.set("lur_mo_redirect", _.jo("RP4Mxb"));
        Sv.set("lur_mo_show", _.jo("BafACc"));
        Sv.set("lur_mo_skip", _.jo("LzWDg"));
        Sv.set("lur_moa", _.jo("b6GAud"));
        Sv.set("lur_mob", _.jo("zIokse"));
        _.qKb = _.jo("ckbVEf");
        Sv.set("lur_more", _.qKb);
        Sv.set("lur_pca", _.jo("tOn8sc"));
        Sv.set("lur_pcp", _.jo("kU2sh"));
        Sv.set("lur_ql", _.jo("K1Nfie"));
        Sv.set("lur_roa", _.jo("hTVxh"));
        Sv.set("managePhotos", _.jo("Z3Wu3b"));
        Sv.set("mapResultClicked", _.jo("DeSC5d"));
        Sv.set("mapResultFocused", _.jo("lfOIbd"));
        Sv.set("mapResultUnfocused", _.jo("Ld1Dp"));
        Sv.set("map_measle_clicked", _.jo("tDwp1b"));
        Sv.set("mapslite_collapse", _.jo("QFF3mc"));
        Sv.set("mapslite_expand", _.jo("LfvHXc"));
        Sv.set("maybe_close_dialog", _.jo("BpaUgb"));
        Sv.set("menu_item_hover", _.jo("qsFgoc"));
        Sv.set("menu_item_select", _.jo("D8Lb9b"));
        Sv.set("mic_c", _.jo("hoI9Hf"));
        Sv.set("mic_q", _.jo("TsIQQ"));
        Sv.set("minesweeper_closed", _.jo("n3GEde"));
        Sv.set("minesweeper_closed_really", _.jo("SQnxSb"));
        Sv.set("missingFacts_submit", _.jo("FDLTB"));
        Sv.set("mlzc_in", _.jo("DmdsEb"));
        Sv.set("mlzc_out", _.jo("K4BaX"));
        Sv.set("more_details_expand", _.jo("vWynKd"));
        Sv.set("more_editorial_reviews_expand", _.jo("fp6Yzc"));
        Sv.set("more_reviews_expand", _.jo("MS0zad"));
        Sv.set("more_sellers_expand", _.jo("zyOHAe"));
        Sv.set("mortgage_journey_switch_card_variant", _.jo("oE9Gyb"));
        Sv.set("mtl_no", _.jo("Y8TfYb"));
        Sv.set("mtl_open_timeline", _.jo("t2LXyc"));
        Sv.set("mtl_open_visit_in_timeline", _.jo("LVD4fb"));
        Sv.set("mtl_yes", _.jo("duBRkc"));
        Sv.set("navigateToList", _.jo("nhkWAc"));
        Sv.set("nearby_data_cancelled", _.jo("VBCV5b"));
        Sv.set("nearby_data_changed", _.jo("t6Uln"));
        Sv.set("nearby_focus_changed", _.jo("ayyJzc"));
        Sv.set("nearby_reset", _.jo("qCDGAc"));
        Sv.set("nearby_selection_changed", _.jo("V5CTde"));
        Sv.set("nearby_visible", _.jo("k4JWkb"));
        Sv.set("newListClick", _.jo("bbzv8c"));
        Sv.set("new_list_name_input", _.jo("ppr9Le"));
        Sv.set("new_sheet_name_input", _.jo("fh760e"));
        Sv.set("newslisbonampvis", _.jo("B7bCbf"));
        Sv.set("next_round_button_action", _.jo("FStrbe"));
        Sv.set("nhh_hh", _.jo("x3sULc"));
        Sv.set("nhh_sh", _.jo("Dv9UPe"));
        Sv.set("no", _.jo("JRj7b"));
        Sv.set("no_vote", _.jo("C5K7id"));
        Sv.set("not_sure_vote", _.jo("sYARUb"));
        Sv.set("nothing", _.jo("IfmYKc"));
        Sv.set("oae", _.jo("zfGbX"));
        Sv.set("occupancyItemSelect", _.jo("tqVnZd"));
        Sv.set("occupancyTipSelect", _.jo("YWdESc"));
        Sv.set("ol_sce", _.jo("JrFnu"));
        Sv.set("oli_ise", _.jo("NPm9of"));
        Sv.set("onDepartureChange", _.jo("osF6Sb"));
        Sv.set("onDepartureClick", _.jo("uaI3Fc"));
        Sv.set("onDepartureKeydown", _.jo("NnIfpb"));
        Sv.set("onKeyup", _.jo("tv1okb"));
        Sv.set("onReturnChange", _.jo("l7aB3"));
        Sv.set("onReturnClick", _.jo("fSTfjb"));
        Sv.set("onReturnKeydown", _.jo("CRlef"));
        Sv.set("onSubmit", _.jo("bqYzze"));
        Sv.set("onTextAreaBlur", _.jo("WeX5A"));
        Sv.set("onTextAreaFocus", _.jo("cC51fd"));
        Sv.set("onUndoDelete", _.jo("udkv9c"));
        Sv.set("onUndoPost", _.jo("JNdFab"));
        Sv.set("on_click", _.jo("x6CN9d"));
        Sv.set("openAgencyFullPageView", _.jo("qWM9Pb"));
        Sv.set("openAsyncIV", _.jo("ZEj6Fc"));
        Sv.set("openBilling", _.jo("njhMke"));
        Sv.set("openCompImmersive", _.jo("d3pwf"));
        Sv.set("openEditPageIframe", _.jo("w8LuGb"));
        Sv.set("openExistencePageIframe", _.jo("i4fbAe"));
        Sv.set("openFpState", _.jo("M2p4Ud"));
        Sv.set("openIV", _.jo("g1WpEf"));
        Sv.set("openLocationErrorLearnMore", _.jo("qGkuTc"));
        Sv.set("openModalOnEnter", _.jo("CAYlA"));
        Sv.set("openOpeningDatePageIframe", _.jo("zpnX8"));
        Sv.set("openRIV", _.jo("qoT2hd"));
        Sv.set("openReviews", _.jo("SftXQb"));
        Sv.set("openReviewsPage", _.jo("aaxfFc"));
        Sv.set("open_browse", _.jo("hzIcyc"));
        Sv.set("open_contestant_dialog", _.jo("Tas91"));
        Sv.set("open_country_menu", _.jo("G05OQb"));
        Sv.set("open_currency_menu", _.jo("GMvR9"));
        Sv.set("open_dialog", _.jo("BEyJ0b"));
        Sv.set("open_ep", _.jo("E4Ft5e"));
        Sv.set("open_feedback", _.jo("qldGJd"));
        _.rKb = _.jo("nAOxvc");
        Sv.set("open_focus_state", _.rKb);
        Sv.set("open_immersive_from_footer", _.jo("KX6Cpb"));
        Sv.set("open_immersive_from_see_more", _.jo("zNJ2Wc"));
        Sv.set("open_immersive_from_view_more_footer", _.jo("CUBNXd"));
        Sv.set("open_immersive_list", _.jo("zLIbed"));
        Sv.set("open_language_menu", _.jo("w24fLd"));
        Sv.set("open_link", _.jo("D2c0je"));
        Sv.set("open_loyalty_card_dialog", _.jo("VAsF9c"));
        Sv.set("open_price_finder_airports_tab", _.jo("ODRgl"));
        Sv.set("open_price_finder_dates_tab", _.jo("LCRkI"));
        Sv.set("open_price_finder_trends_tab", _.jo("Ygrzle"));
        Sv.set("open_sharing", _.jo("dgvzRd"));
        Sv.set("open_why_this_result_dialog", _.jo("l6nHgf"));
        Sv.set("opened", _.jo("UrUWBe"));
        Sv.set("openvideo", _.jo("uounjb"));
        Sv.set("ort", _.jo("y8cm6"));
        Sv.set("page_close", _.jo("A6SDQe"));
        Sv.set("pagination", _.jo("jrGCTe"));
        Sv.set("pagination_click", _.jo("ne5Qjc"));
        Sv.set("pathways_cd", _.jo("fYTN6"));
        Sv.set("pathways_mj", _.jo("muBpVb"));
        Sv.set("pause", _.jo("Nd0FU"));
        Sv.set("pg_as", _.jo("lqrOab"));
        Sv.set("pg_init", _.jo("X1tkp"));
        Sv.set("pg_reset", _.jo("dalsm"));
        Sv.set("pg_resize", _.jo("SbKtme"));
        Sv.set("pg_rs", _.jo("MT827e"));
        Sv.set("pg_scroll_by", _.jo("rR6zNc"));
        Sv.set("pg_select", _.jo("cxBrFd"));
        Sv.set("pg_visible", _.jo("ahRH5d"));
        Sv.set("pg_wd", _.jo("X7mqGf"));
        Sv.set("phone_number_input_change", _.jo("muwdcb"));
        Sv.set("plab_filled", _.jo("kJCxac"));
        Sv.set("place_impression", _.jo("PpjOQb"));
        Sv.set("place_list_impression", _.jo("CXcSbf"));
        Sv.set("place_list_selection", _.jo("Q3M3p"));
        Sv.set("place_selection", _.jo("BNI0te"));
        Sv.set("play", _.jo("PXEikf"));
        Sv.set("post", _.jo("XVSVJ"));
        Sv.set("postQuestion", _.jo("r3B9od"));
        Sv.set("post_review", _.jo("s7h7Kb"));
        Sv.set("pp_apply", _.jo("GzuROd"));
        Sv.set("pp_cr", _.jo("iGJiGc"));
        Sv.set("pp_transit", _.jo("qsUVWb"));
        Sv.set("ppl_new_list_save", _.jo("EOqIqc"));
        Sv.set("ppldc_cancel", _.jo("xpg2td"));
        _.sKb = _.jo("gQ3Inb");
        Sv.set("ppldc_submit", _.sKb);
        Sv.set("ppli_validity_change", _.jo("E5OIPb"));
        Sv.set("pqa_refr", _.jo("UigYZc"));
        Sv.set("pqa_rld", _.jo("MC2Qub"));
        Sv.set("pqapq", _.jo("f1dLTd"));
        Sv.set("prevreg", _.jo("HygsKf"));
        Sv.set("privacy_reminder_ack", _.jo("Zan0xb"));
        Sv.set("product_viewer_close", _.jo("pw7lrc"));
        Sv.set("promo_hidden", _.jo("VV2w3e"));
        Sv.set("prs_btn", _.jo("SA8Q7d"));
        Sv.set("prs_dltb", _.jo("EOZdIf"));
        Sv.set("prs_drc", _.jo("qhAyde"));
        Sv.set("prs_eqb", _.jo("i5o9xd"));
        Sv.set("prs_invb", _.jo("eUCYd"));
        Sv.set("pt_visible", _.jo("YQoRed"));
        Sv.set("pt_wd", _.jo("wMw2zc"));
        Sv.set("pv_open", _.jo("oLMRYb"));
        Sv.set("pw_close_help_bubble", _.jo("BXPIfc"));
        Sv.set("pw_expand_list", _.jo("lra9Sd"));
        Sv.set("q_fltr", _.jo("QMCQsb"));
        Sv.set("qmp_accepted", _.jo("q2SOuc"));
        Sv.set("qmp_closed_external_interaction", _.jo("GlVBXd"));
        Sv.set("qmp_dismissed", _.jo("Cyuxg"));
        Sv.set("qmp_impression", _.jo("SCaxHe"));
        Sv.set("r_dropdown", _.jo("bFyHQc"));
        Sv.set("r_fetch", _.jo("MCXmXe"));
        Sv.set("r_less", _.jo("lQsRMe"));
        Sv.set("r_more", _.jo("M7VP"));
        Sv.set("radio_button_select", _.jo("oYr6mb"));
        Sv.set("rates_tab_date_updated", _.jo("lhF2hf"));
        Sv.set("rating_reviews_filter_changed", _.jo("FRbR6d"));
        Sv.set("rb_sel", _.jo("DyJeWe"));
        Sv.set("redirect", _.jo("PoXwOe"));
        Sv.set("refinement_click", _.jo("PQUfAc"));
        Sv.set("refresh", _.jo("n5SQrd"));
        Sv.set("reload", _.jo("S9gw3"));
        Sv.set("reloadBegin", _.jo("pFaOI"));
        Sv.set("reloadComplete", _.jo("okdFEf"));
        Sv.set("removeValue", _.jo("rIIBSe"));
        Sv.set("remove_category", _.jo("EdIMhb"));
        Sv.set("remove_related_product_click", _.jo("A7ipdf"));
        Sv.set("remove_slice", _.jo("r1uOxc"));
        Sv.set("rendered", _.jo("Yana2b"));
        Sv.set("repeatLastToggle", _.jo("XxQQme"));
        Sv.set("reportAbuse", _.jo("JytXBd"));
        Sv.set("reportAbuseClosed", _.jo("llPG6b"));
        Sv.set("reportAbuseCompleted", _.jo("C0JUmb"));
        Sv.set("reset", _.jo("lWnQEd"));
        Sv.set("resetAnswerEltVisibility", _.jo("wzFgbd"));
        Sv.set("reset_filter", _.jo("UU7nXc"));
        Sv.set("reset_filters", _.jo("PIP8ge"));
        Sv.set("reset_prefs", _.jo("rVPsYc"));
        Sv.set("resizeDialog", _.jo("V2d4ic"));
        Sv.set("retry", _.jo("E3Bvbc"));
        Sv.set("retryCreate", _.jo("BCnupb"));
        Sv.set("review_change", _.jo("fGuDhf"));
        Sv.set("rftd_cancel", _.jo("LrFTB"));
        Sv.set("rftd_confirm", _.jo("o5MxI"));
        Sv.set("ri", _.jo("jSgCSb"));
        Sv.set("rivReport", _.jo("b4yxXb"));
        Sv.set("rivReportClose", _.jo("rCL7Md"));
        Sv.set("rre_filled", _.jo("KEb0yd"));
        Sv.set("rre_loading", _.jo("Ksyfkc"));
        Sv.set("rs_change", _.jo("FXEfUe"));
        Sv.set("rs_drag", _.jo("FcJH6e"));
        Sv.set("rvc_loaded", _.jo("W6SIHd"));
        Sv.set("s_mis", _.jo("CdB9wc"));
        Sv.set("sae_attribute_value_changed", _.jo("TrLn7d"));
        Sv.set("sae_enum_entrypoint_clicked", _.jo("e5ZAhf"));
        Sv.set("sae_enum_value_changed", _.jo("gRTnvf"));
        Sv.set("sae_finished", _.jo("QRz83c"));
        Sv.set("sae_send", _.jo("QPZbod"));
        Sv.set("saveAndCloseDialog", _.jo("y3Vdjc"));
        Sv.set("saveAndClosePage", _.jo("XxoD9c"));
        Sv.set("save_fil", _.jo("fWdoHc"));
        Sv.set("save_loc", _.jo("EbYrh"));
        Sv.set("sb_apply_new_query", _.jo("sjI0bd"));
        Sv.set("sb_clear_query", _.jo("oPMgqe"));
        Sv.set("sb_dismiss_sb_promo", _.jo("w0nFNe"));
        Sv.set("sb_openOverlay", _.jo("TPvldc"));
        Sv.set("sbc_init", _.jo("kBBtlf"));
        Sv.set("sbc_rb", _.jo("EMVgtd"));
        Sv.set("sbc_rr", _.jo("y92Jg"));
        Sv.set("sbc_rs", _.jo("aywrDf"));
        Sv.set("sbc_ry", _.jo("T4QYIb"));
        Sv.set("sbc_sc", _.jo("GpyWd"));
        Sv.set("sbc_su", _.jo("gkAnmb"));
        Sv.set("sc", _.jo("L5jysd"));
        Sv.set("sc_dm", _.jo("qVN0Rc"));
        Sv.set("sc_em", _.jo("OaAmdd"));
        Sv.set("sc_f", _.jo("J5Sgjd"));
        Sv.set("sc_nf", _.jo("sEZ0nb"));
        _.tKb = _.jo("JnGzAc");
        Sv.set("sc_rfir", _.tKb);
        Sv.set("sc_sc", _.jo("OW9R3e"));
        Sv.set("scc_ir", _.jo("A8F2wc"));
        Sv.set("scc_iu", _.jo("NdNKIc"));
        Sv.set("scc_ou", _.jo("nUQosc"));
        Sv.set("scs_change", _.jo("ItCYyf"));
        Sv.set("scs_changed", _.jo("QaMsec"));
        Sv.set("searchResultSelect", _.jo("aFgeo"));
        Sv.set("seating_class_selected", _.jo("VTonCc"));
        Sv.set("see_full_definition", _.jo("Lesnae"));
        Sv.set("select", _.jo("CLdVjd"));
        Sv.set("selectDate", _.jo("DUAVQd"));
        Sv.set("select_date", _.jo("h4aKNc"));
        Sv.set("select_filter", _.jo("nDReve"));
        Sv.set("select_icon", _.jo("Mdwgte"));
        Sv.set("select_tab", _.jo("DbzZ8e"));
        Sv.set("select_time", _.jo("ifokhb"));
        Sv.set("select_variant", _.jo("y255Sd"));
        Sv.set("selected_day_more_info", _.jo("WrmHw"));
        Sv.set("send_button", _.jo("l5VQod"));
        Sv.set("seniority_checkbox_change", _.jo("YK0zEb"));
        Sv.set("set_active_index", _.jo("WaQAqf"));
        Sv.set("set_value", _.jo("XnhSNc"));
        Sv.set("sfod", _.jo("WD8Fbd"));
        Sv.set("sfsd", _.jo("FcFZBc"));
        Sv.set("sg_destroy", _.jo("ukC0xf"));
        Sv.set("sg_enter", _.jo("yyIcWe"));
        Sv.set("sg_force_render", _.jo("O4Yjgc"));
        Sv.set("sg_init", _.jo("QXXTBc"));
        Sv.set("sg_leave", _.jo("wlSX1b"));
        Sv.set("sg_render", _.jo("lOZbfb"));
        Sv.set("sg_request_scroll", _.jo("qveIt"));
        Sv.set("sg_reset", _.jo("UNgbke"));
        Sv.set("sg_resize", _.jo("IDmUHc"));
        Sv.set("sg_scroll", _.jo("TYcwNe"));
        Sv.set("sg_scroll_end", _.jo("OkdfC"));
        Sv.set("sg_scroll_to", _.jo("nHNlJd"));
        Sv.set("sg_select", _.jo("xPYrhf"));
        Sv.set("short_review_snippet", _.jo("jKkd5b"));
        Sv.set("show", _.jo("ipJzUe"));
        Sv.set("showPostsContainer", _.jo("zGBrwf"));
        Sv.set("showPriceTrackerCallout", _.jo("LaICie"));
        Sv.set("showQuestions", _.jo("eCQ7Lc"));
        Sv.set("showReportAbuse", _.jo("Cmatge"));
        Sv.set("showSingleQuestion", _.jo("xfiuue"));
        Sv.set("showWhereToWatchContent", _.jo("fi6QFc"));
        Sv.set("showWriteAnswer", _.jo("uu6Def"));
        Sv.set("showWriteQuestion", _.jo("C21qod"));
        Sv.set("show_and_focus", _.jo("fIfKLd"));
        Sv.set("show_category", _.jo("xWNAmb"));
        Sv.set("show_date_picker", _.jo("wpyVFd"));
        Sv.set("show_default_price_link", _.jo("nh2V6b"));
        Sv.set("show_first_page", _.jo("RAnfQd"));
        Sv.set("show_fullpage", _.jo("BN90pb"));
        Sv.set("show_more_courses_click", _.jo("M8pjge"));
        Sv.set("show_progress_bar", _.jo("ApAeid"));
        Sv.set("show_spinner", _.jo("Zly1te"));
        Sv.set("sht_d", _.jo("d9VaKb"));
        Sv.set("sign_in_button_clicked", _.jo("d4FDpc"));
        Sv.set("skip_action", _.jo("fzC9Oc"));
        Sv.set("slider_c", _.jo("MFH1Re"));
        Sv.set("slider_change", _.jo("t2wa1b"));
        Sv.set("slider_f", _.jo("Ji8xae"));
        Sv.set("slider_s", _.jo("etIODb"));
        Sv.set("smartanswersIframeLoaded", _.jo("OO5L0"));
        Sv.set("smr_close", _.jo("JyZjwc"));
        Sv.set("smr_less", _.jo("eFzeOd"));
        Sv.set("smr_more", _.jo("xeWuLc"));
        Sv.set("snackbar_action", _.jo("af4Kse"));
        Sv.set("snake_closed", _.jo("phr6yd"));
        Sv.set("snake_closed_really", _.jo("syKPke"));
        Sv.set("snfwos", _.jo("Lyezge"));
        Sv.set("sngtp", _.jo("seM7Qe"));
        Sv.set("sp_ir", _.jo("svO1Hc"));
        Sv.set("sponsored_click", _.jo("EocvOb"));
        _.uKb = _.jo("hcY69");
        Sv.set("srp_hd", _.uKb);
        _.vKb = _.jo("ABuafc");
        Sv.set("srp_uhd", _.vKb);
        Sv.set("ssaw", _.jo("MLk1mc"));
        Sv.set("ssdc", _.jo("ESIHdd"));
        Sv.set("ssdo", _.jo("XbaL7c"));
        Sv.set("ssx_async", _.jo("cyt5gd"));
        Sv.set("start_feedback_dialog", _.jo("KBmTfe"));
        Sv.set("stopPropagation", _.jo("yAKDfb"));
        Sv.set("stream_close_signin_bubble", _.jo("W2IkFd"));
        Sv.set("stream_create_account", _.jo("TT63Ef"));
        Sv.set("stream_filter_click", _.jo("mwGkq"));
        Sv.set("stream_signin", _.jo("BFix0d"));
        Sv.set("submit_form", _.jo("z1jogd"));
        Sv.set("submit_votes", _.jo("n5ep2"));
        Sv.set("subscription_dialog_ok", _.jo("t07jE"));
        Sv.set("subscription_success", _.jo("EOrO7b"));
        Sv.set("subscription_undo", _.jo("l1XcXe"));
        Sv.set("sv_dismiss_efy_promo", _.jo("EJBECc"));
        Sv.set("sv_dismiss_ye_promo", _.jo("dHWdfe"));
        Sv.set("switch_to_list", _.jo("cXPm6d"));
        Sv.set("switch_to_map", _.jo("LRrrGf"));
        Sv.set("ta_is", _.jo("jeZwFd"));
        Sv.set("ta_isc", _.jo("fdgmid"));
        Sv.set("ta_rc", _.jo("wGAPfc"));
        Sv.set("ta_suhs", _.jo("VC04sf"));
        Sv.set("ta_tch", _.jo("rk4YD"));
        Sv.set("ta_ti", _.jo("SONxme"));
        Sv.set("ta_ts", _.jo("DuGcz"));
        Sv.set("ta_tsr", _.jo("wjeEFe"));
        Sv.set("taft_u", _.jo("HjaMx"));
        Sv.set("tag_click", _.jo("bBurvb"));
        Sv.set("tb_hs", _.jo("QMGRvd"));
        _.wKb = _.jo("D2wIvb");
        Sv.set("tb_ts", _.wKb);
        Sv.set("tbh_b", _.jo("wSjSEf"));
        Sv.set("tbh_bp", _.jo("OaodZ"));
        Sv.set("tbh_br", _.jo("DRQMhe"));
        Sv.set("tbh_dl", _.jo("ECJeN"));
        Sv.set("tbh_fb", _.jo("kbUJpd"));
        Sv.set("tbh_hardReload", _.jo("xx7Gwf"));
        Sv.set("tbh_navPay", _.jo("WFQo0e"));
        Sv.set("tbh_sc", _.jo("pTUmNc"));
        Sv.set("tbh_softReload", _.jo("I6yAZd"));
        Sv.set("tbh_sr", _.jo("xuweOe"));
        Sv.set("tbh_te", _.jo("wkco4c"));
        Sv.set("tc", _.jo("YDImOb"));
        _.xKb = _.jo("MpH3lc");
        Sv.set("tc_gr", _.xKb);
        Sv.set("tc_is", _.jo("RQMtR"));
        Sv.set("tc_lzbsa", _.jo("OjRMeb"));
        Sv.set("tc_tmf", _.jo("PHrifd"));
        Sv.set("test_url_event", _.jo("RRnHid"));
        Sv.set("text_updated", _.jo("ihAaH"));
        Sv.set("textareaInput", _.jo("Kno7lb"));
        Sv.set("textarea_change", _.jo("Su5uq"));
        Sv.set("textarea_click", _.jo("qU4wyb"));
        Sv.set("th_cr", _.jo("ilyIyb"));
        Sv.set("thank_you_closed", _.jo("DycXF"));
        Sv.set("thank_you_got_it", _.jo("va4bCb"));
        Sv.set("thank_you_got_it_internal", _.jo("zE9j8b"));
        Sv.set("ticket_type_selected", _.jo("k1uud"));
        Sv.set("tl_ListViewUp", _.jo("r4uG5c"));
        Sv.set("tl_alertDeleteFailure", _.jo("X412Db"));
        Sv.set("tl_alert_header_click", _.jo("J2jBAe"));
        Sv.set("tl_ap_direct_clk", _.jo("GoJgKc"));
        Sv.set("tl_applyFacetChangeFilter", _.jo("y0uiWe"));
        Sv.set("tl_applyfilter", _.jo("qMFwVd"));
        Sv.set("tl_chipChanges", _.jo("bCEElf"));
        Sv.set("tl_clearFilters", _.jo("olB8Lb"));
        Sv.set("tl_closeFilters", _.jo("ESBbkb"));
        Sv.set("tl_close_dialog", _.jo("zmUFSd"));
        Sv.set("tl_create_account", _.jo("QHacHd"));
        Sv.set("tl_detailSetHome", _.jo("O8cgKb"));
        Sv.set("tl_detailSetHomeExternal", _.jo("ezYxZe"));
        Sv.set("tl_detailSetHomeInternal", _.jo("liTr7e"));
        Sv.set("tl_detail_page_selected", _.jo("Cbynxd"));
        Sv.set("tl_doWebSearch", _.jo("kRYx6d"));
        Sv.set("tl_edit_alert", _.jo("zGIBSc"));
        Sv.set("tl_eventsFeedback", _.jo("XM2p3e"));
        Sv.set("tl_exploreOnBackUp", _.jo("YxTZ7b"));
        Sv.set("tl_fileInternalBug", _.jo("VuAzs"));
        Sv.set("tl_fulllist", _.jo("DY1qXb"));
        Sv.set("tl_hideFilters", _.jo("Y31HZc"));
        Sv.set("tl_hide_new_alert_bubble", _.jo("LJVKFd"));
        Sv.set("tl_hide_sign_in_bubble", _.jo("z75bhf"));
        Sv.set("tl_id_b", _.jo("doiGD"));
        Sv.set("tl_id_s", _.jo("Mphmuf"));
        Sv.set("tl_itemDetailUp", _.jo("Wubo7b"));
        Sv.set("tl_listScroll", _.jo("wK3DS"));
        Sv.set("tl_new_query_from_spelling", _.jo("OvkIef"));
        Sv.set("tl_open_ibp_detail_page", _.jo("AQGPWe"));
        Sv.set("tl_open_my_events", _.jo("vXKRcf"));
        Sv.set("tl_open_remove_alert_dialog", _.jo("x0Nlee"));
        Sv.set("tl_openim", _.jo("AXaEjd"));
        Sv.set("tl_openim_events", _.jo("eOj1F"));
        Sv.set("tl_openim_on_pivot_pill", _.jo("SkM3cd"));
        Sv.set("tl_recommendationClick", _.jo("dhb9N"));
        Sv.set("tl_redirect_to_pathways", _.jo("vOB2D"));
        Sv.set("tl_refresh", _.jo("metMte"));
        Sv.set("tl_refreshFilters", _.jo("eVdcac"));
        Sv.set("tl_reloadPage", _.jo("itYAhe"));
        Sv.set("tl_remove_alert", _.jo("iS7L4d"));
        Sv.set("tl_save_change", _.jo("RbV3pd"));
        Sv.set("tl_save_fp_open", _.jo("O5Ojlf"));
        Sv.set("tl_sblogin", _.jo("U4t0ef"));
        Sv.set("tl_searchJobsNearMe", _.jo("kv4Bi"));
        Sv.set("tl_searchOverlayUp", _.jo("hLhP4d"));
        Sv.set("tl_sign_in", _.jo("h4JHk"));
        _.yKb = _.jo("xIDvG");
        Sv.set("tl_tab_change", _.yKb);
        Sv.set("tl_unsave", _.jo("h7qVpd"));
        Sv.set("tlspl_admissionsTabLink", _.jo("NcjH2b"));
        Sv.set("tlspl_costTabLink", _.jo("MhSDjf"));
        Sv.set("tlspl_majorsTabLink", _.jo("FPiITb"));
        Sv.set("tlspl_outcomesTabLink", _.jo("kHaGtd"));
        Sv.set("tlspl_rankingsTabLink", _.jo("LWrIBf"));
        Sv.set("tlspl_studentsTabLink", _.jo("qqjP9c"));
        Sv.set("toggle", _.jo("x6Ur6c"));
        Sv.set("toggleReport", _.jo("CDABkf"));
        Sv.set("toggle_dialog", _.jo("AAEOVc"));
        Sv.set("toggle_filters", _.jo("Q6E6pd"));
        Sv.set("toggle_result", _.jo("VhD3Je"));
        Sv.set("tooltip_clicked", _.jo("euNvlf"));
        Sv.set("tooltip_clk", _.jo("VTwOjf"));
        Sv.set("tp_btn", _.jo("Iigoee"));
        Sv.set("tr_update_source_language", _.jo("uQxhTd"));
        Sv.set("tr_update_target_language", _.jo("lWUBqb"));
        Sv.set("track_price_tab_selected", _.jo("Vkiw8b"));
        Sv.set("trh_md", _.jo("AqPvyf"));
        Sv.set("trh_rl", _.jo("NO1mPe"));
        Sv.set("trh_tr", _.jo("tSqP7d"));
        Sv.set("trigger_review", _.jo("e3pB5e"));
        Sv.set("trivia_load_new_questions", _.jo("ZWi99"));
        Sv.set("try_update_booking_module_again", _.jo("pRcZtd"));
        Sv.set("tsp_af", _.jo("vQsond"));
        _.zKb = _.jo("dUtpAb");
        Sv.set("tsp_caf", _.zKb);
        _.AKb = _.jo("NwhgCd");
        Sv.set("tsp_taf", _.AKb);
        Sv.set("tt_item_clicked", _.jo("pu37M"));
        Sv.set("tts", _.jo("E9iXr"));
        Sv.set("udc_os", _.jo("Wt6FZb"));
        Sv.set("ugcpe_hide", _.jo("vanyv"));
        Sv.set("ugcpe_show", _.jo("C35vr"));
        Sv.set("ugcpes_hide", _.jo("BjjpIb"));
        Sv.set("ugcpes_show", _.jo("rR1xdf"));
        Sv.set("ugcum_current", _.jo("PhP6Hb"));
        Sv.set("ugcum_suggested", _.jo("OXIkx"));
        Sv.set("undoFollow", _.jo("KIWqmd"));
        Sv.set("undoLess", _.jo("ZgiJMe"));
        Sv.set("undoMore", _.jo("p1TRoe"));
        Sv.set("undoUnfollow", _.jo("wgBkwe"));
        Sv.set("undo_remove", _.jo("qd9w8b"));
        Sv.set("unfollow", _.jo("hWOCUc"));
        Sv.set("unsubscription_dialog_ok", _.jo("RFvGYb"));
        Sv.set("unsubscription_success", _.jo("ppnaM"));
        Sv.set("updateDatetimepickerUI", _.jo("pWewhb"));
        Sv.set("update_dates", _.jo("YKS1lf"));
        Sv.set("update_filters", _.jo("WkLI3d"));
        Sv.set("update_refinements", _.jo("ALJOGd"));
        Sv.set("update_ui", _.jo("etj8Wb"));
        Sv.set("va_ch_ac", _.jo("VJLV1b"));
        Sv.set("va_cp_ps", _.jo("P1QkRd"));
        Sv.set("vh_add", _.jo("OPzWc"));
        Sv.set("vh_hc", _.jo("NdLu7e"));
        Sv.set("vh_remove", _.jo("oH6Yu"));
        Sv.set("view_selected_destination_flights", _.jo("W0NJqf"));
        Sv.set("visible", _.jo("z0tx3"));
        Sv.set("visit_feed", _.jo("tUSYcd"));
        Sv.set("visit_settings", _.jo("Bcfvyc"));
        Sv.set("vlb_c", _.jo("zHbw5e"));
        Sv.set("vote_current", _.jo("qEa63c"));
        Sv.set("vote_dont_know", _.jo("zR8YH"));
        Sv.set("vote_none", _.jo("qH6Zmd"));
        Sv.set("vote_suggested", _.jo("lW2ddd"));
        Sv.set("vpl_c", _.jo("lAN9Ad"));
        Sv.set("wcc_ia", _.jo("gmenb"));
        Sv.set("wcc_x", _.jo("GflfK"));
        Sv.set("wcr_ei", _.jo("j6Puic"));
        Sv.set("website_input_change", _.jo("iJXDmc"));
        Sv.set("why_these_results_expand", _.jo("fSrBvc"));
        Sv.set("wo_move_tab", _.jo("IOWeBc"));
        Sv.set("wo_return_focus", _.jo("QRB2tf"));
        Sv.set("x", _.jo("eBdsGd"));
        Sv.set("xpd_a", _.jo("C7xow"));
        Sv.set("xpd_c", _.jo("V5K74e"));
        Sv.set("xpd_e", _.jo("s3zb5e"));
        _.BKb = _.jo("xNpQtd");
        Sv.set("xpd_r", _.BKb);
        _.CKb = _.jo("Ep2Mgc");
        Sv.set("xpd_rm", _.CKb);
        _.DKb = _.jo("U6VCqe");
        Sv.set("xpd_rt", _.DKb);
        Sv.set("xpd_t", _.jo("YUNlzf"));
        Sv.set("xpl", _.jo("QJfxib"));
        Sv.set("yes", _.jo("YWWULd"));
        Sv.set("yes_vote", _.jo("dzRIIf"));
        _.Tv = function(a) {
            return Sv.get(a)
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var gzb;
        gzb = function(a) {
            var b = b || 0;
            return function() {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };
        _.hzb = function(a, b, c) {
            _.gl.call(this);
            this.Vl = null;
            this.Aa = !1;
            this.YS = a;
            this.Ba = c;
            this.oa = b || window;
            this.fB = (0, _.Sg)(this.ped, this)
        };
        _.Xg(_.hzb, _.gl);
        _.k = _.hzb.prototype;
        _.k.start = function() {
            this.stop();
            this.Aa = !1;
            var a = izb(this),
                b = jzb(this);
            a && !b && this.oa.mozRequestAnimationFrame ? (this.Vl = _.ce(this.oa, "MozBeforePaint", this.fB), this.oa.mozRequestAnimationFrame(null), this.Aa = !0) : this.Vl = a && b ? a.call(this.oa, this.fB) : this.oa.setTimeout(gzb(this.fB), 20)
        };
        _.k.stop = function() {
            if (this.isActive()) {
                var a = izb(this),
                    b = jzb(this);
                a && !b && this.oa.mozRequestAnimationFrame ? _.wm(this.Vl) : a && b ? b.call(this.oa, this.Vl) : this.oa.clearTimeout(this.Vl)
            }
            this.Vl = null
        };
        _.k.fire = function() {
            this.stop();
            this.ped()
        };
        _.k.isActive = function() {
            return this.Vl != null
        };
        _.k.ped = function() {
            this.Aa && this.Vl && _.wm(this.Vl);
            this.Vl = null;
            this.YS.call(this.Ba, _.Wg())
        };
        _.k.Pc = function() {
            this.stop();
            _.hzb.Pe.Pc.call(this)
        };
        var izb = function(a) {
                a = a.oa;
                return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
            },
            jzb = function(a) {
                a = a.oa;
                return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
            };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Pq = function(a, b, c) {
            _.gl.call(this);
            this.YS = a;
            this.Ba = b || 0;
            this.Aa = c;
            this.fB = (0, _.Sg)(this.oa, this)
        };
        _.Xg(_.Pq, _.gl);
        _.Pq.prototype.Vl = 0;
        _.Pq.prototype.Pc = function() {
            _.Pq.Pe.Pc.call(this);
            this.stop();
            delete this.YS;
            delete this.Aa
        };
        _.Pq.prototype.start = function(a) {
            this.stop();
            this.Vl = _.Jm(this.fB, a !== void 0 ? a : this.Ba)
        };
        _.Zab = function(a) {
            a.isActive() || a.start(void 0)
        };
        _.Pq.prototype.stop = function() {
            this.isActive() && _.Lm(this.Vl);
            this.Vl = 0
        };
        _.Pq.prototype.fire = function() {
            this.stop();
            this.oa()
        };
        _.Pq.prototype.isActive = function() {
            return this.Vl != 0
        };
        _.Pq.prototype.oa = function() {
            this.Vl = 0;
            this.YS && this.YS.call(this.Aa)
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var kzb, ozb;
        kzb = {};
        _.lzb = null;
        _.mzb = null;
        _.ku = function(a) {
            var b = _.Ma(a);
            b in kzb || (kzb[b] = a);
            _.nzb()
        };
        _.lu = function(a) {
            a = _.Ma(a);
            delete kzb[a];
            _.jc(kzb) && _.mzb && _.mzb.stop()
        };
        _.nzb = function() {
            _.mzb || (_.lzb ? _.mzb = new _.hzb(function(b) {
                ozb(b)
            }, _.lzb) : _.mzb = new _.Pq(function() {
                ozb(_.Wg())
            }, 20));
            var a = _.mzb;
            a.isActive() || a.start()
        };
        ozb = function(a) {
            _.fc(kzb, function(b) {
                b.Rv(a)
            });
            _.jc(kzb) || _.nzb()
        };
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.x("pKhWu");
        var FDu = function(a) {
                a = Math.floor(a);
                if (a <= 0) return "00:00:000";
                var b = Math.floor(a / 6E4);
                if (b >= 600) return "9:59:59:999";
                var c = Math.floor(b / 60);
                return (c === 0 ? "" : c.toString() + ":") + (b % 60).toString().padStart(2, "0") + ":" + (Math.floor(a / 1E3) % 60).toString().padStart(2, "0") + ":" + (a % 1E3).toString().padStart(3, "0")
            },
            GDu = function(a) {
                return a.x << 16 | a.y
            },
            cZ = function(a) {
                switch (a) {
                    case "LEFT":
                        return "RIGHT";
                    case "RIGHT":
                        return "LEFT";
                    case "UP":
                        return "DOWN";
                    case "DOWN":
                        return "UP";
                    default:
                        return "NONE"
                }
            },
            HDu = function(a, b, c,
                d) {
                return Math.max(Math.abs(a - c), Math.abs(b - d))
            },
            IDu = function(a) {
                return a === 0 || a === 1 ? 0 : -a * Math.log2(a) - (1 - a) * Math.log2(1 - a)
            },
            JDu = function(a) {
                var b = Math.PI / 2;
                return Math.round(a / b) * b
            },
            MDu = function(a, b, c, d, e, f) {
                if (dZ(f)) {
                    switch (f.Da) {
                        case 1:
                            f = c * .5;
                            break;
                        case 2:
                            f = c * 1.25;
                            break;
                        default:
                            f = c
                    }
                    for (var g = 0, h = Math.abs(f - KDu[g]), l = 0; l < KDu.length; l++) {
                        var m = Math.abs(f - KDu[l]);
                        m < h && (g = l, h = m)
                    }
                    f = g;
                    c *= 320 / LDu[f];
                    d.drawImage(e, 0, 320 * f, 320, 320, a - c, b - c, c * 2, c * 2)
                } else d.beginPath(), d.arc(a, b, c, 0, Math.PI * 2), d.fill()
            },
            ODu =
            function(a, b, c) {
                if (c && a === 4) switch (b) {
                    default:
                    case 0:
                        return "snake_arcade/halloween/default_jackolantern.png";
                    case 1:
                        return "snake_arcade/halloween/px_jackolantern.png";
                    case 2:
                        return "snake_arcade/halloween/real_jackolantern.png"
                }
                a = NDu(a);
                switch (b) {
                    default:
                    case 0:
                        return "snake_arcade/v17/apple_" + a + ".png";
                    case 1:
                        return "snake_arcade/pixel/v17/px_apple_" + a + ".png";
                    case 2:
                        return "snake_arcade/real/apple_" + a + ".png"
                }
            },
            PDu = function(a) {
                return a < -1 ? 1 : a > 1 ? -1 : a
            },
            NDu = function(a) {
                return (a < 10 ? "0" : "") + a
            },
            QDu = function(a,
                b) {
                b !== a.src && (a.src = b)
            },
            RDu = function() {
                var a = new Date;
                a.setUTCHours(a.getUTCHours() + -5);
                return a
            },
            SDu = function(a) {
                a = a === void 0 ? 0 : a;
                var b = RDu();
                a > 0 && b.setUTCDate(b.getUTCDate() - a);
                return b.toISOString().split("T")[0]
            },
            TDu = function(a, b, c, d) {
                return function() {
                    a |= 0;
                    b |= 0;
                    c |= 0;
                    d |= 0;
                    var e = (a + b | 0) + d | 0;
                    d = d + 1 | 0;
                    a = b ^ b >>> 9;
                    b = c + (c << 3) | 0;
                    c = c << 21 | c >>> 11;
                    c = c + e | 0;
                    return (e >>> 0) / 4294967296
                }
            },
            UDu = {
                name: "snakefbx"
            };
        var VDu = new _.ql(15, 30),
            WDu = [145, 145, 145],
            XDu = [100, 100, 100],
            YDu = [
                ["#4E7CF6", "#17439F"],
                ["#19D8E6", "#15B5C1"],
                ["#B648F2", "#910FD7"],
                ["#ED44B5", "#C31388"],
                ["#F53D40", "#D00B0E"],
                ["#F69C3C", "#EA7E0B"],
                ["#ECD613", "#D9C512"],
                ["#35B63E", "#298E30"],
                ["#6B6B6B", "#404040"],
                ["#F2F2F2", "#D9D9D9"],
                ["#000000", "#FFFFFF"],
                ["#3888F8", "#E4425E"],
                ["#B749EC", "#EF8826"],
                ["#F53AA2", "#F5D40E"],
                ["#F9B202", "#4CBD1E"],
                ["#39C14C", "#3A79F2"],
                ["#6B6B6B", "#F2F2F2"],
                ["#F2F2F2", "#6B6B6B"]
            ],
            ZDu = [5, 4, 7, 7, 1, 2, 0, 3, 9, 8, 0, 14, 15, 15, 11,
                12, 17, 16
            ],
            $Du = [{
                base: "#e7471d",
                target: "#808080",
                threshold: 10
            }, {
                base: "#eaca23",
                target: "#909090",
                threshold: 10
            }, {
                base: "#ea7f00",
                target: "#909090",
                threshold: 10
            }, {
                base: "#9823af",
                target: "#808080",
                threshold: 10
            }, {
                base: "#ef8d15",
                target: "#909090",
                threshold: 10
            }, {
                base: "#49c527",
                target: "#7a7a7a",
                threshold: 360
            }, {
                base: "#9823af",
                target: "#808080",
                threshold: 10
            }, {
                base: "#f40000",
                target: "#808080",
                threshold: 10
            }, {
                base: "#e7471d",
                target: "#808080",
                threshold: 10
            }, {
                base: "#ff9900",
                target: "#909090",
                threshold: 10
            }, {
                base: "#f26e4d",
                target: "#858585",
                threshold: 10
            }, {
                base: "#009900",
                target: "#858585",
                threshold: 10
            }, {
                base: "#e7471d",
                target: "#909090",
                threshold: 10
            }, {
                base: "#00a10d",
                target: "#808080",
                threshold: 1
            }, {
                base: "#00c919",
                target: "#858585",
                threshold: 360
            }, {
                base: "#efce13",
                target: "#909090",
                threshold: 10
            }, {
                base: "#fe8a00",
                target: "#858585",
                threshold: 10
            }, {
                base: "#ff886c",
                target: "#909090",
                threshold: 15
            }, {
                base: "#ca953e",
                target: "#909090",
                threshold: 10
            }, {
                base: "#ff4040",
                target: "#858585",
                threshold: 10
            }, {
                base: "#fc2d00",
                target: "#808080",
                threshold: 10
            }, {
                base: "#0070b4",
                target: "#808080",
                threshold: 10
            }],
            aEu = [.2, .35, .25, .15, .3, .35, .15, .2, .25, .3, .25, .2, .25, .25, .25, .4, .3, .3, .25, .2, .2, .2],
            bEu = [0, 0, 0, 0, 0, .075, .15, 0, 0, .125, 0, 0, .05, .075, .1, 0, .1, .1],
            cEu = "#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60".split(" "),
            dEu = ["#808080", "#9E9E9E", "#808080", "#616161"],
            eEu = ["#aad751 #a2d149 #94bd46 #578a34 #38640e #4a752c #4dc1f9".split(" "), "#494351 #443e4c #3d3644 #2c2730 #453d4d #262428 #2a2640".split(" "), "#deeced #d1e4e6 #b9d4d5 #879fa1 #506486 #75898a #8cbfd9".split(" "),
                "#6e3535 #673232 #633131 #a33e3e #642b2b #762d2d #292e4c".split(" "), "#f2d78c #eccd79 #e6c770 #977b26 #594d26 #725e1d #5fb7e3".split(" "), "#3f5543 #3b4f3f #334737 #253227 #354b38 #202822 #2b375a".split(" "), "#b4d0f9 #a3c5f5 #94baf0 #275ba5 #11325f #1d457c #42a5f0".split(" "), "#432c68 #3d285d #3a2956 #604096 #3f305a #432a6f #32224f".split(" ")
            ],
            fEu = new _.ql(15, -30),
            gEu = new _.ql(18, -15),
            hEu = new _.ql(15, -16),
            iEu = new _.ql(15, -10),
            jEu = "#f4c20d #db3236 #4885ed #ed44b5 #b648f2 #48e6f1 #f4840d #008744".split(" "),
            kEu = 1 / 3,
            LDu = [16, 32, 56, 80, 112, 160, 224, 304],
            KDu = [4, 8, 14, 20, 28, 40, 56, 76],
            lEu = new Set([8, 9]);
        var fZ = function(a, b, c, d, e, f) {
            var g = this;
            this.settings = a;
            this.Oa = c;
            this.context = d;
            this.oa = 1;
            this.Ca = this.Ba = "";
            this.Ia = -1;
            a = function() {
                g.oa--;
                g.oa > 0 || (mEu(g), g.Ba !== "" && g.Ca !== "" && (eZ(g, g.Ba, g.Ca, g.Ia), g.Ba = "", g.Ca = "", g.Ia = 0), g.Qa && g.Qa())
            };
            this.Aa = new nEu(b, a);
            e !== void 0 && (this.oa++, this.Da = new nEu(e, a));
            f !== void 0 && (this.oa++, this.Fa = new nEu(f, a))
        };
        fZ.prototype.onLoad = function(a) {
            this.Qa = a
        };
        var mEu = function(a) {
                if (!(a.oa > 0)) {
                    oEu(a.Aa);
                    var b;
                    (b = a.Da) == null || oEu(b);
                    var c;
                    (c = a.Fa) == null || oEu(c)
                }
            },
            eZ = function(a, b, c, d) {
                d = d === void 0 ? -1 : d;
                if (a.oa > 0) a.Ba = b, a.Ca = c, a.Ia = d;
                else {
                    mEu(a);
                    pEu(a.Aa, b, c, d);
                    var e;
                    (e = a.Da) == null || pEu(e, b, c, d);
                    var f;
                    (f = a.Fa) == null || pEu(f, b, c, -1)
                }
            };
        _.k = fZ.prototype;
        _.k.render = function(a, b, c, d, e, f) {
            if (!(this.oa > 0)) {
                var g = c ? c.x : 0;
                c = c ? c.y : 0;
                this.context.save();
                this.context.translate(b.x, b.y);
                this.context.rotate(d);
                b = qEu(this, f).oa.canvas;
                d = this.getWidth(f);
                f = this.getHeight(f);
                this.context.drawImage(b, 0, f * a, d, f, g * e, c * e, d * e, f * e);
                this.context.restore()
            }
        };
        _.k.getLength = function() {
            return this.Oa
        };
        _.k.getWidth = function(a) {
            return qEu(this, a).ev.width
        };
        _.k.getHeight = function(a) {
            return qEu(this, a).ev.height / this.Oa
        };
        _.k.nF = function(a) {
            return qEu(this, a).nF()
        };
        var qEu = function(a, b) {
                switch (b !== void 0 ? b : a.settings.Ua) {
                    default:
                    case 0:
                        return a.Aa;
                    case 1:
                        return a.Da ? a.Da : a.Aa;
                    case 2:
                        return a.Fa ? a.Fa : a.Aa
                }
            },
            nEu = function(a, b) {
                this.path = a;
                this.loaded = !1;
                this.ev = new Image;
                this.ev.crossOrigin = "Anonymous";
                this.Aa = document.createElement("canvas").getContext("2d");
                this.oa = document.createElement("canvas").getContext("2d");
                rEu(this, b)
            },
            rEu = function(a, b) {
                a.ev.src = "https://www.google.com/logos/fnbx/" + a.path;
                _.um(a.ev, "load", function() {
                    a.loaded = !0;
                    b()
                })
            },
            oEu = function(a) {
                a.loaded &&
                    (a.Aa.canvas.width = a.ev.width, a.Aa.canvas.height = a.ev.height, a.Aa.clearRect(0, 0, a.Aa.canvas.width, a.Aa.canvas.height), a.Aa.drawImage(a.ev, 0, 0), a.oa.canvas.width = a.ev.width, a.oa.canvas.height = a.ev.height, a.oa.clearRect(0, 0, a.oa.canvas.width, a.oa.canvas.height), a.oa.drawImage(a.ev, 0, 0))
            },
            pEu = function(a, b, c, d) {
                b = _.l1c(b);
                c = _.l1c(c);
                for (var e = b[2] === 0 ? 1 : c[2] / b[2], f = a.Aa.getImageData(0, 0, a.Aa.canvas.width, a.Aa.canvas.height), g = f.data, h = 0; h < g.length; h += 4)
                    if (g[h + 3] > 0) {
                        var l = _.h1c(g[h], g[h + 1], g[h + 2]),
                            m = Math.abs(l[0] -
                                b[0]);
                        m > 180 && (m = 360 - m);
                        m = d >= 0 && m >= d;
                        l[2] < 1 && !m && (l[0] = c[0], l[1] = c[1], l[2] *= e);
                        l = _.j1c(l[0], l[1], l[2]);
                        g[h] = l[0];
                        g[h + 1] = l[1];
                        g[h + 2] = l[2]
                    } a.oa.putImageData(f, 0, 0)
            };
        nEu.prototype.nF = function() {
            return this.Aa.canvas
        };
        var sEu = function(a, b, c, d, e) {
            this.Aa = a;
            this.settings = b;
            this.oa = c;
            this.Ca = d;
            this.Da = e;
            this.Ba = [];
            for (a = 0; a < 22; a++) b = new fZ(this.settings, ODu(a, 0, this.settings.Ec), 1, this.oa, ODu(a, 1, this.settings.Ec), ODu(a, 2, this.settings.Ec)), c = $Du[a], eZ(b, c.base, c.target, c.threshold), this.Ba.push(b)
        };
        sEu.prototype.render = function(a, b) {
            var c = b.pos.clone();
            c.x = c.x * this.Aa.oa.oa + this.Aa.oa.oa / 2;
            c.y = c.y * this.Aa.oa.oa + this.Aa.oa.oa / 2;
            if (gZ(this.settings) && !b.vp && !this.Aa.hm) {
                var d = b.pos.clone();
                d.x += b.IH.x > 0 ? b.Zd.x : 0;
                d.y += b.IH.y > 0 ? b.Zd.y : 0;
                d.x = d.x * this.Aa.oa.oa + this.Aa.oa.oa / 2;
                d.y = d.y * this.Aa.oa.oa + this.Aa.oa.oa / 2;
                c.x = c.x * (1 - a) + d.x * a;
                c.y = c.y * (1 - a) + d.y * a;
                d = this.Aa.oa.oa / 10 * (2 * Math.abs(2 * (a + .25 - Math.floor(a + .75))) - 1);
                b.IH.x === 0 && (c.x += d * Math.sign(b.Zd.x));
                b.IH.y === 0 && (c.y += d * Math.sign(b.Zd.y))
            }
            d = this.Aa.Kl(b,
                a);
            var e = b.type > 0 && b.type < this.Ba.length ? b.type : 0,
                f = b.ffa ? qEu(this.Ba[e], b.oya).oa.canvas : this.Ba[e].nF(b.oya);
            hZ(this.settings, 11) && (this.oa.globalAlpha = tEu(this.Aa, a, b.Qi, {
                zHa: b.ffa || uEu(this.settings) ? .2 : aEu[e],
                E7: !1
            }));
            hZ(this.settings, 15) && b.z6 && vEu(this, c, b.z6, b.vp ? a : 1);
            var g = dZ(this.settings) || b.oya === 1;
            this.oa.save();
            this.oa.translate(c.x, c.y);
            var h = 0;
            hZ(this.settings, 18) && b.d8c !== void 0 && (h = b.d8c, Math.abs(h - b.kQ) >= Math.PI && (h = h > 0 ? h - Math.PI * 2 : h + Math.PI * 2), b.Qi && (b.kQ = .9 * b.kQ + .1 * h, b.kQ > Math.PI ?
                b.kQ -= 2 * Math.PI : b.kQ < -Math.PI && (b.kQ += 2 * Math.PI)), h = g ? JDu(b.kQ) : b.kQ, this.oa.rotate(h));
            g = g ? 170 : 128;
            this.oa.drawImage(f, 0, 0, g, g, -d / 2, -d / 2, d, d);
            this.oa.restore();
            wEu(this.settings) && (c = new _.ql(this.Aa.oa.Aa.width * this.Aa.oa.oa - c.x, this.Aa.oa.Aa.height * this.Aa.oa.oa - c.y), hZ(this.settings, 15) && b.z6 && vEu(this, c, b.z6, b.vp ? a : 1, !0), this.oa.save(), this.oa.translate(c.x, c.y), this.oa.rotate(h + Math.PI), e === 18 && this.oa.scale(-1, 1), this.oa.drawImage(f, 0, 0, g, g, -(d / 2), -(d / 2), d, d), this.oa.restore());
            this.oa.globalAlpha =
                1
        };
        var vEu = function(a, b, c, d, e) {
            e = e === void 0 ? !1 : e;
            var f = Math.round(a.Aa.oa.oa / 5);
            f % 2 !== 0 && (f += 1);
            a.oa.lineWidth = f;
            a.oa.lineCap = "butt";
            a.oa.fillStyle = iZ(a.settings, a.settings.oa, 3);
            a.oa.strokeStyle = a.oa.fillStyle;
            a.oa.save();
            a.oa.translate(b.x, b.y);
            var g = Array.from(c);
            d *= a.Aa.oa.oa / 2;
            b = f / 2;
            g = _.n(g);
            for (var h = g.next(); !h.done; h = g.next()) {
                h = h.value;
                h = e ? cZ(h) : h;
                a.oa.beginPath();
                switch (h) {
                    case "UP":
                        a.oa.moveTo(-d + b, -d);
                        a.oa.lineTo(d - b, -d);
                        break;
                    case "DOWN":
                        a.oa.moveTo(-d + b, d);
                        a.oa.lineTo(d - b, d);
                        break;
                    case "LEFT":
                        a.oa.moveTo(-d, -d +
                            b);
                        a.oa.lineTo(-d, d - b);
                        break;
                    case "RIGHT":
                        a.oa.moveTo(d, -d + b), a.oa.lineTo(d, d - b)
                }
                a.oa.stroke()
            }
            g = new Set;
            c.has(e ? "RIGHT" : "LEFT") && (g.add("top_left"), g.add("bottom_left"));
            c.has(e ? "LEFT" : "RIGHT") && (g.add("top_right"), g.add("bottom_right"));
            c.has(e ? "DOWN" : "UP") && (g.add("top_left"), g.add("top_right"));
            c.has(e ? "UP" : "DOWN") && (g.add("bottom_left"), g.add("bottom_right"));
            g.has("top_left") && a.oa.fillRect(-d - b, -d - b, f, f);
            g.has("bottom_left") && a.oa.fillRect(-d - b, d - b, f, f);
            g.has("top_right") && a.oa.fillRect(d -
                b, -d - b, f, f);
            g.has("bottom_right") && a.oa.fillRect(d - b, d - b, f, f);
            a.oa.restore()
        };
        var xEu = new Map([
                ["LEFT", new _.ql(-1, 0)],
                ["RIGHT", new _.ql(1, 0)],
                ["UP", new _.ql(0, -1)],
                ["DOWN", new _.ql(0, 1)]
            ]),
            yEu = function(a, b, c, d, e) {
                this.settings = a;
                this.Aa = b;
                this.Ba = c;
                this.Ca = d;
                this.Da = e;
                this.oa = []
            };
        yEu.prototype.reset = function() {
            this.oa = [];
            var a = zEu(this.settings),
                b = this.settings.Aa === 0 || this.settings.Aa === 3;
            if (a) {
                if (this.oa.push(jZ(this, -1, -2)), this.oa.push(jZ(this, -1, 2)), !b)
                    if (this.settings.Da !== 1) {
                        this.oa.push(jZ(this, -3, -3));
                        this.oa.push(jZ(this, -3, 3));
                        this.oa.push(jZ(this, -5, -4));
                        this.oa.push(jZ(this, -5, 4));
                        this.settings.Aa === 2 && (this.oa.push(jZ(this, -7, -5)), this.oa.push(jZ(this, -7, 5)), this.oa.push(jZ(this, 1, -1)), this.oa.push(jZ(this, 1, 1)));
                        b = _.n(this.oa);
                        for (var c = b.next(); !c.done; c = b.next()) c.value.pos.x +=
                            (this.settings.Aa === 1 ? 2 : 1) - (this.settings.isMobile ? 1 : 0)
                    } else {
                        this.oa[0].pos.x += 2;
                        this.oa[0].pos.y += 1;
                        this.oa[1].pos.x += 2;
                        --this.oa[1].pos.y;
                        this.oa.push(jZ(this, 0, -3));
                        this.oa.push(jZ(this, 0, 3));
                        this.oa.push(jZ(this, -2, -3));
                        this.oa.push(jZ(this, -2, 3));
                        if (this.settings.isMobile)
                            for (b = _.n(this.oa), c = b.next(); !c.done; c = b.next()) --c.value.pos.x;
                        this.settings.Aa === 2 && (this.settings.isMobile ? (this.oa.push(jZ(this, -2, -5)), this.oa.push(jZ(this, -2, 5)), this.oa.push(jZ(this, -4, -5)), this.oa.push(jZ(this, -4, 5))) :
                            (this.oa.push(jZ(this, -4, -3)), this.oa.push(jZ(this, -4, 3)), this.oa.push(jZ(this, -6, -3)), this.oa.push(jZ(this, -6, 3))))
                    }
            } else if (this.oa.push(jZ(this, 0, 0)), !b && (this.oa.push(jZ(this, -2, -2)), this.oa.push(jZ(this, -2, 2)), this.settings.Aa === 2))
                for (this.oa.push(jZ(this, 2, -2)), this.oa.push(jZ(this, 2, 2)), b = _.n(this.oa), c = b.next(); !c.done; c = b.next()) c.value.pos.x -= this.settings.Da === 2 ? 2 : 1;
            c = Math.floor((this.Ba.oa[0].x + kZ(this.Ba, 0).x) / 2);
            b = this.Aa.Aa.width % 2 === 1;
            if (hZ(this.settings, 7)) {
                c = this.oa[0].pos.x - c;
                var d = this.Aa.Aa.height % 2 === 1;
                d = this.settings.isMobile && b && !d;
                var e = hZ(this.settings, 7) && a;
                !b || d || e || (c += 1);
                this.settings.isMobile || this.settings.Da === 1 || (c += 1);
                d = _.n(this.oa);
                for (e = d.next(); !e.done; e = d.next()) e.value.pos.x -= c;
                if (a) {
                    a = 0;
                    c = _.n(this.oa);
                    for (d = c.next(); !d.done; d = c.next()) a = Math.min(a, d.value.pos.x);
                    if (a < 0)
                        for (c = _.n(this.oa), d = c.next(); !d.done; d = c.next()) d.value.pos.x -= a
                }
                a = hZ(this.settings, 2) && !hZ(this.settings, 8) && !hZ(this.settings, 9);
                if (!this.settings.isMobile && this.settings.Aa === 0 &&
                    a)
                    for (a = _.n(this.oa), c = a.next(); !c.done; c = a.next()) --c.value.pos.x;
                if (wEu(this.settings) && b && this.settings.Aa !== 0) {
                    b = !1;
                    a = _.n(this.oa);
                    for (c = a.next(); !c.done; c = a.next()) c.value.pos.x === Math.floor(this.Aa.Aa.width / 2) && (b = !0);
                    if (b)
                        for (b = _.n(this.oa), a = b.next(); !a.done; a = b.next()) --a.value.pos.x
                }
            }
            if (hZ(this.settings, 11))
                for (b = this.oa.length, a = 0; a < b; a++) c = jZ(this, 0, 0), c.pos.x = this.oa[a].pos.x, c.pos.y = this.oa[a].pos.y + 1, --this.oa[a].pos.y, zEu(this.settings) && (this.settings.Da !== 1 && this.settings.Aa === 2 ?
                    hZ(this.settings, 7) ? this.settings.Da === 2 ? c.pos.x -= 2 : (--c.pos.x, c.pos.y += 1) : --c.pos.x : this.settings.Da === 1 && this.settings.Aa !== 0 && (hZ(this.settings, 7) ? this.settings.Aa === 1 ? (--c.pos.x, --c.pos.y) : (c.pos.x += 2, this.oa[a].pos.y += 1) : (--c.pos.x, this.oa[a].pos.x += 1))), c.Qi = !1, this.oa.push(c);
            if (hZ(this.settings, 2))
                for (b = Math.floor(44 / this.oa.length), a = 0; a < this.oa.length; a += 2) this.oa[a].type = AEu(this), this.oa[a + 1].type = this.oa[a].type, a > 0 && this.settings.Oa !== 22 && (this.oa[a].type = (this.oa[a].type + a * b) % 22, this.oa[a +
                    1].type = this.oa[a].type);
            else
                for (b = _.n(this.oa), a = b.next(); !a.done; a = b.next()) a.value.type = AEu(this);
            for (b = 0; b < this.oa.length; b++) {
                a = this.oa[b];
                c = !1;
                lZ(this.Aa, a.pos) || (c = !0);
                d = hZ(this.settings, 7) && hZ(this.settings, 8);
                if (a.pos.equals(this.Ba.oa[0]) || (wEu(this.settings) || d) && mZ(this.Aa, a.pos).equals(this.Ba.oa[0])) hZ(this.settings, 20) || this.settings.Ta ? c = !0 : a.pos.x += 1;
                for (d = 1; d < this.Ba.oa.length; d++)
                    if (a.pos.equals(this.Ba.oa[d]) || hZ(this.settings, 7) && mZ(this.Aa, a.pos).equals(this.Ba.oa[d])) c = !0;
                d = hZ(this.settings, 7) && hZ(this.settings, 8);
                e = wEu(this.settings) || d;
                for (var f = b + 1; f < this.oa.length; f++) {
                    var g = this.oa[f];
                    if (a.pos.equals(g.pos) || e && mZ(this.Aa, a.pos).equals(g.pos)) c = !0
                }
                c && (c = this.Aa.Da(null, d ? 6 : 2)) && (a.pos = c)
            }
            if (gZ(this.settings))
                for (b = _.n(this.oa), a = b.next(); !a.done; a = b.next()) BEu(this, a.value, new Map, [], new Set);
            if (hZ(this.settings, 15))
                for (b = _.n(this.oa), a = b.next(); !a.done; a = b.next()) a = a.value, a.z6 = CEu(this, a.pos)
        };
        yEu.prototype.update = function() {
            for (var a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b = b.value, b.vp || (b.bI = (b.bI + 1) % 6, gZ(this.settings) && (b.IH.x && (b.pos.x += b.Zd.x), b.IH.y && (b.pos.y += b.Zd.y), hZ(this.settings, 4) && (b.pos.x < 0 ? b.pos.x += this.Aa.Aa.width : b.pos.x >= this.Aa.Aa.width && (b.pos.x -= this.Aa.Aa.width), b.pos.y < 0 ? b.pos.y += this.Aa.Aa.height : b.pos.y >= this.Aa.Aa.height && (b.pos.y -= this.Aa.Aa.height))))
        };
        var jZ = function(a, b, c) {
                b = new _.ql(Math.floor(3 * a.Aa.Aa.width / 4) + b, Math.floor(a.Aa.Aa.height / 2) + c);
                a = {
                    pos: b,
                    bI: 0,
                    type: -1,
                    vp: !1,
                    Zd: hZ(a.settings, 6) ? DEu(a) : new _.ql(0, 0),
                    Ytb: new _.ql(0, 0),
                    IH: new _.ql(1, 1),
                    ffa: !1,
                    Qi: !0,
                    light: hZ(a.settings, 14) ? 1.5 : 0,
                    oya: a.settings.Ua === 3 ? EEu() : void 0,
                    z6: hZ(a.settings, 15) ? CEu(a, b) : void 0,
                    kQ: 0
                };
                a.Ytb = a.Zd.clone();
                return a
            },
            EEu = function() {
                var a = [0, 1, 2];
                return a[Math.floor(Math.random() * a.length)]
            },
            CEu = function(a, b) {
                var c = new Set;
                if (!hZ(a.settings, 19)) {
                    hZ(a.settings, 4) || (b.x ===
                        0 ? c.add("LEFT") : b.x === a.Aa.Aa.width - 1 && c.add("RIGHT"), b.y === 0 ? c.add("UP") : b.y === a.Aa.Aa.height - 1 && c.add("DOWN"));
                    for (var d = a.Aa.Ia(b, 2), e = _.n(xEu.entries()), f = e.next(); !f.done; f = e.next()) {
                        var g = _.n(f.value);
                        f = g.next().value;
                        var h = g = g.next().value,
                            l = a;
                        g = d;
                        h = new _.ql(b.x + h.x, b.y + h.y);
                        l = hZ(l.settings, 4) ? nZ(l.Aa, h) : h;
                        g.has(l.x << 16 | l.y) && c.add(f)
                    }
                    a.settings.Aa !== 3 || hZ(a.settings, 4) || (b.x !== 0 && b.x !== a.Aa.Aa.width - 1 || c.add(Math.random() < .5 ? "UP" : "DOWN"), b.y !== 0 && b.y !== a.Aa.Aa.height - 1 || c.add(Math.random() <
                        .5 ? "LEFT" : "RIGHT"))
                }
                b = new Set;
                c = Array.from(c);
                d = FEu(c);
                if (d === null) return b;
                b.add(d);
                c.push(d);
                if (!gZ(a.settings) && Math.random() < .75) {
                    a = FEu(c);
                    if (a === null) return b;
                    b.add(a);
                    c.push(a);
                    if (Math.random() < .33) {
                        a = FEu(c);
                        if (a === null) return b;
                        b.add(a)
                    }
                }
                return b
            },
            FEu = function(a) {
                var b = new Set(["LEFT", "RIGHT", "UP", "DOWN"]);
                a = _.n(a);
                for (var c = a.next(); !c.done; c = a.next()) b.delete(c.value);
                return b.size <= 1 ? null : Array.from(b)[Math.floor(Math.random() * b.size)]
            },
            GEu = function(a, b) {
                for (var c = _.n(xEu.entries()), d = c.next(); !d.done; d =
                    c.next()) {
                    var e = _.n(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    e = new _.ql(b.pos.x + e.x, b.pos.y + e.y);
                    hZ(a.settings, 4) && (e = nZ(a.Aa, e));
                    for (var f = _.n(a.oa), g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        if (g.pos.equals(e)) {
                            var h = void 0;
                            (h = g.z6) == null || h.delete(cZ(d))
                        }
                        hZ(a.settings, 7) && mZ(a.Aa, g.pos).equals(e) && (h = void 0, (h = g.z6) == null || h.delete(d))
                    }
                }
            },
            HEu = function(a, b, c) {
                a.oa[b].pos = c;
                a.oa[b].bI = 0;
                a.oa[b].vp = !0;
                a.oa[b].kQ = 0;
                a.oa[b].d8c = void 0;
                a.settings.Ua === 3 && (a.oa[b].oya = EEu());
                hZ(a.settings, 6) && (a.oa[b].Zd =
                    DEu(a), a.oa[b].Ytb = a.oa[b].Zd.clone());
                hZ(a.settings, 15) && (a.oa[b].z6 = CEu(a, c));
                hZ(a.settings, 14) && (a.oa[b].light = hZ(a.settings, 11) && a.oa[b].Qi ? 0 : 1.5);
                hZ(a.settings, 16) && oZ(a.Ca, c, !1)
            },
            JEu = function(a, b, c, d) {
                var e = a.oa.length;
                a.oa.push(jZ(a, 0, 0));
                a.oa[a.oa.length - 1].pos.x = b.x;
                a.oa[a.oa.length - 1].pos.y = b.y;
                a.oa[a.oa.length - 1].vp = !0;
                a.oa[a.oa.length - 1].LPa = c;
                a.oa[a.oa.length - 1].Qi = d;
                var f = AEu(a);
                a.oa[a.oa.length - 1].type = f;
                hZ(a.settings, 2) ? (b = hZ(a.settings, 7) ? mZ(a.Aa, b) : null, (b = a.Aa.Da(b, 2)) ? (a.oa.push(jZ(a,
                    0, 0)), a.oa[a.oa.length - 1].pos.x = b.x, a.oa[a.oa.length - 1].pos.y = b.y, a.oa[a.oa.length - 1].vp = !0, a.oa[a.oa.length - 1].LPa = c, a.oa[a.oa.length - 1].type = f, a.oa[a.oa.length - 1].Qi = d, hZ(a.settings, 10) && (c = Math.random() < .5, a.oa[a.oa.length - 1].ffa = c, a.oa[a.oa.length - 2].ffa = !c)) : a.oa.pop()) : hZ(a.settings, 10) && IEu(a) && (hZ(a.settings, 11) && (a.oa[a.oa.length - 1].Qi = d), (hZ(a.settings, 8) || hZ(a.settings, 9)) && Math.random() < .5 && (c = a.oa[a.oa.length - 1].pos.clone(), a.oa[a.oa.length - 1].pos = a.oa[a.oa.length - 2].pos.clone(), a.oa[a.oa.length -
                    2].pos = c));
                e = a.oa.length - e;
                if (hZ(a.settings, 15))
                    for (c = 0; c < e; c++) d = a.oa[a.oa.length - 1 - c], d.z6 = CEu(a, d.pos);
                if (hZ(a.settings, 16))
                    for (c = 0; c < e; c++) oZ(a.Ca, a.oa[a.oa.length - 1 - c].pos, !1)
            },
            IEu = function(a) {
                var b = a.Aa.Da(null, 4);
                if (b) {
                    var c = jZ(a, 0, 0);
                    c.pos = b;
                    c.ffa = !0;
                    c.vp = !0;
                    c.type = AEu(a);
                    a.oa.push(c);
                    return !0
                }
                return !1
            },
            MEu = function(a, b, c, d) {
                if (c) KEu(a.Ba);
                else if (!hZ(a.settings, 2)) {
                    c = [];
                    for (var e = 0, f = _.n(a.oa), g = f.next(); !g.done; g = f.next()) g = g.value, g.Qi && (e++, g.ffa && c.push(g));
                    if (c.length === 0) return !1;
                    if (c.length >=
                        e / 2 || a.Aa.Da(null, 2) === null)
                        for (e = gZ(a.settings) ? c.sort(function(h, l) {
                                return LEu(a.Aa, h.pos, a.Ba.oa[0]) - LEu(a.Aa, l.pos, a.Ba.oa[0])
                            })[0] : c[Math.floor(Math.random() * c.length)], c = 0; c < a.oa.length; c++)
                            if (a.oa[c].pos.equals(e.pos) && a.oa[c].ffa) {
                                d = d(a.oa[c], 0) / a.Aa.oa;
                                e = a.settings.Ua === 3 ? a.oa[c].oya : a.settings.Ua;
                                a.Da.particles.push({
                                    pos: new _.ql(a.oa[c].pos.x * a.Aa.oa, a.oa[c].pos.y * a.Aa.oa),
                                    Zd: new _.ql(0, 0),
                                    angle: 0,
                                    nV: 0,
                                    size: d,
                                    lO: a.oa[c].type,
                                    type: 1,
                                    oya: e
                                });
                                hZ(a.settings, 7) && (f = mZ(a.Aa, a.oa[c].pos), a.Da.particles.push({
                                    pos: new _.ql(f.x *
                                        a.Aa.oa, f.y * a.Aa.oa),
                                    Zd: new _.ql(0, 0),
                                    angle: 180,
                                    nV: 0,
                                    size: d,
                                    lO: a.oa[c].type,
                                    type: 1,
                                    oya: e
                                }));
                                a.oa.splice(c, 1);
                                if (c <= b) return !0;
                                break
                            }
                }
                return !1
            },
            AEu = function(a) {
                if (a.settings.Oa === 22) {
                    for (var b = new Set, c = 0; c < 22; c++) b.add(c);
                    a = _.n(a.oa);
                    for (c = a.next(); !c.done; c = a.next()) b.delete(c.value.type);
                    return b.size > 0 ? Array.from(b)[Math.floor(Math.random() * b.size)] : 0
                }
                if (hZ(a.settings, 2) && (hZ(a.settings, 8) || hZ(a.settings, 9))) {
                    b = new Set;
                    c = _.n(a.oa);
                    for (var d = c.next(); !d.done; d = c.next()) b.add(d.value.type);
                    for (a =
                        a.settings.Oa; b.has(a);) a = (a + 1) % 22;
                    return a
                }
                return a.settings.Oa
            },
            DEu = function(a) {
                var b = new _.ql(Math.random() < .5 ? -.5 : .5, Math.random() < .5 ? -.5 : .5);
                Math.random() < .25 && (Math.random() < .5 ? b.x = 0 : b.y = 0);
                hZ(a.settings, 18) && NEu(a, b);
                return b
            },
            OEu = function(a, b, c) {
                b && a.Zd.x !== 0 && (a.Ytb.x = a.Zd.x, a.Zd.x = 0);
                c && a.Zd.y !== 0 && (a.Ytb.y = a.Zd.y, a.Zd.y = 0)
            },
            PEu = function(a, b, c, d) {
                for (var e = _.n(a.oa), f = e.next(); !f.done; f = e.next()) f = f.value, f.vp || BEu(a, f, b, c, d)
            },
            BEu = function(a, b, c, d, e) {
                c = QEu(a, b, c, d, e);
                b.IH.x = 1;
                b.IH.y = 1;
                if (hZ(a.settings,
                        16) && b.pos.x % 1 === 0 && b.pos.y % 1 === 0 && b.Qi === REu(a.Ca, b.pos)) {
                    switch (SEu(a.Ca, b.pos)) {
                        default:
                        case "NONE":
                            break;
                        case "LEFT":
                            b.Zd.x = -.5;
                            break;
                        case "RIGHT":
                            b.Zd.x = .5;
                            break;
                        case "UP":
                            b.Zd.y = -.5;
                            break;
                        case "DOWN":
                            b.Zd.y = .5
                    }
                    oZ(a.Ca, b.pos, !0)
                }
                for (d = 0; d < 2; d++) {
                    e = d === 0;
                    var f = b.Zd.x < 0,
                        g = b.Zd.x > 0,
                        h = b.Zd.y < 0,
                        l = b.Zd.y > 0;
                    if (f && c.left || g && c.right) hZ(a.settings, 18) ? OEu(b, !0, !1) : e ? b.Zd.x *= -1 : b.IH.x = 0;
                    if (h && c.top || l && c.bottom) hZ(a.settings, 18) ? OEu(b, !1, !0) : e ? b.Zd.y *= -1 : b.IH.y = 0;
                    if (f && h && c.topLeft && !c.top && !c.left || g &&
                        h && c.topRight && !c.top && !c.right || g && l && c.bottomRight && !c.bottom && !c.right || f && l && c.bottomLeft && !c.bottom && !c.left) hZ(a.settings, 18) ? Math.random() < .5 ? OEu(b, !0, !1) : OEu(b, !1, !0) : e ? (b.Zd.x *= -1, b.Zd.y *= -1) : (b.IH.x = 0, b.IH.y = 0)
                }
            },
            QEu = function(a, b, c, d, e) {
                var f = {};
                hZ(a.settings, 4) || (b.pos.x <= 0 ? f.left = !0 : b.pos.x >= a.Aa.Aa.width - 1 && (f.right = !0), b.pos.y <= 0 ? f.top = !0 : b.pos.y >= a.Aa.Aa.height - 1 && (f.bottom = !0));
                var g = b.pos.y % 1 === 0;
                if (b.pos.x % 1 === 0 || g) {
                    g = [];
                    for (var h = 1; h < a.Ba.oa.length; h++) {
                        var l = a.Ba.oa[h];
                        hZ(a.settings,
                            11) && b.Qi !== a.Ba.Ba[h] || (hZ(a.settings, 3) && (l.x + l.y) % 2 !== 1 || g.push(a.Ba.oa[h]), hZ(a.settings, 7) && (hZ(a.settings, 3) && (l.x + l.y) % 2 !== 1 || g.push(kZ(a.Ba, h))))
                    }
                    hZ(a.settings, 15) && b.Qi && (h = function(m) {
                        var p, q, v, z;
                        return b.Zd.x < 0 && ((p = b.z6) == null ? void 0 : p.has("LEFT")) && m.x < b.pos.x && Math.abs(m.y - b.pos.y) < 1 || b.Zd.x > 0 && ((q = b.z6) == null ? void 0 : q.has("RIGHT")) && m.x > b.pos.x && Math.abs(m.y - b.pos.y) < 1 || b.Zd.y < 0 && ((v = b.z6) == null ? void 0 : v.has("UP")) && m.y < b.pos.y && Math.abs(m.x - b.pos.x) < 1 || b.Zd.y > 0 && ((z = b.z6) == null ? void 0 :
                            z.has("DOWN")) && m.y > b.pos.y && Math.abs(m.x - b.pos.x) < 1
                    }, l = a.Ba.oa[0], h(l) && g.push(l), hZ(a.settings, 7) && (l = kZ(a.Ba, 0), h(l) && g.push(l)));
                    c = _.n(c.values());
                    for (h = c.next(); !h.done; h = c.next()) h = h.value, hZ(a.settings, 11) && b.Qi !== h.Qi || (l = void 0, hZ(a.settings, 17) && ((l = h.qx) == null ? void 0 : l.L9) === 0 || h.HQ || g.push(h.pos));
                    d = _.n(d);
                    for (c = d.next(); !c.done; c = d.next()) c = c.value, hZ(a.settings, 11) && b.Qi !== c.Qi || (g.push(c.pos), hZ(a.settings, 7) && g.push(mZ(a.Aa, c.pos)));
                    e = _.n(e);
                    for (d = e.next(); !d.done; d = e.next()) d = d.value,
                        hZ(a.settings, 11) && b.Qi !== d.Qi || (g.push(d.pos), hZ(a.settings, 7) && g.push(mZ(a.Aa, d.pos)));
                    g = _.n(g);
                    for (e = g.next(); !e.done; e = g.next()) e = e.value, TEu(e, b, f), hZ(a.settings, 4) && (e.x === 0 ? TEu(new _.ql(e.x + a.Aa.Aa.width, e.y), b, f) : e.x === a.Aa.Aa.width - 1 && TEu(new _.ql(e.x - a.Aa.Aa.width, e.y), b, f), e.y === 0 ? TEu(new _.ql(e.x, e.y + a.Aa.Aa.height), b, f) : e.y === a.Aa.Aa.height - 1 && TEu(new _.ql(e.x, e.y - a.Aa.Aa.height), b, f), e.x === 0 && e.y === 0 ? TEu(new _.ql(e.x + a.Aa.Aa.width, e.y + a.Aa.Aa.height), b, f) : e.x === a.Aa.Aa.width - 1 && e.y ===
                        0 && TEu(new _.ql(e.x - a.Aa.Aa.width, e.y + a.Aa.Aa.height), b, f), e.x === 0 && e.y === a.Aa.Aa.height - 1 ? TEu(new _.ql(e.x + a.Aa.Aa.width, e.y - a.Aa.Aa.height), b, f) : e.x === a.Aa.Aa.width - 1 && e.y === a.Aa.Aa.height - 1 && TEu(new _.ql(e.x - a.Aa.Aa.width, e.y - a.Aa.Aa.height), b, f))
                }
                if (a.oa.length > 1 || wEu(a.settings)) {
                    g = [];
                    e = _.n(a.oa);
                    for (d = e.next(); !d.done; d = e.next()) d = d.value, hZ(a.settings, 11) && b.Qi !== d.Qi || (g.push(d), wEu(a.settings) && g.push({
                        pos: mZ(a.Aa, d.pos),
                        bI: 0,
                        type: -1,
                        vp: !1,
                        Zd: new _.ql(-d.Zd.x, -d.Zd.y),
                        IH: d.IH.clone()
                    }));
                    if (hZ(a.settings, 4)) {
                        e = [];
                        g = _.n(g);
                        for (d = g.next(); !d.done; d = g.next()) d = d.value, e.push(d), e.push({
                            pos: new _.ql(d.pos.x - a.Aa.Aa.width, d.pos.y - a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x, d.pos.y - a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x + a.Aa.Aa.width, d.pos.y - a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x - a.Aa.Aa.width, d.pos.y),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x + a.Aa.Aa.width, d.pos.y),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x - a.Aa.Aa.width, d.pos.y + a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x, d.pos.y + a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        }), e.push({
                            pos: new _.ql(d.pos.x + a.Aa.Aa.width, d.pos.y + a.Aa.Aa.height),
                            bI: 0,
                            type: -1,
                            vp: !1,
                            Zd: d.Zd.clone(),
                            IH: d.IH.clone()
                        });
                        g = e
                    }
                    a = _.n(g);
                    for (g =
                        a.next(); !g.done; g = a.next()) g = g.value, g.pos.equals(b.pos) || (e = Math.abs(g.pos.x - b.pos.x) < 1, h = Math.abs(g.pos.x - b.pos.x) <= 1, c = Math.abs(g.pos.y - b.pos.y) <= 1, d = h && g.pos.x < b.pos.x, h = h && g.pos.x > b.pos.x, l = c && g.pos.y < b.pos.y, c = c && g.pos.y > b.pos.y, Math.abs(g.pos.y - b.pos.y) < 1 && (d ? f.left = !0 : h && (f.right = !0)), e && (l ? f.top = !0 : c && (f.bottom = !0)), d && l ? f.topLeft = !0 : h && l ? f.topRight = !0 : h && c ? f.bottomRight = !0 : d && c && (f.bottomLeft = !0))
                }
                return f
            },
            TEu = function(a, b, c) {
                var d = b.pos.x % 1 === 0,
                    e = b.pos.y % 1 === 0,
                    f = a.x === Math.floor(b.pos.x) ||
                    a.x === Math.ceil(b.pos.x),
                    g = Math.abs(a.x - b.pos.x) <= 1,
                    h = Math.abs(a.y - b.pos.y) <= 1,
                    l = g && a.x < b.pos.x;
                g = g && a.x > b.pos.x;
                var m = h && a.y < b.pos.y;
                h = h && a.y > b.pos.y;
                if (a.y === Math.floor(b.pos.y) || a.y === Math.ceil(b.pos.y)) l ? c.left = !0 : g && (c.right = !0);
                f && (m ? c.top = !0 : h && (c.bottom = !0));
                d && e && (l && m ? c.topLeft = !0 : g && m ? c.topRight = !0 : g && h ? c.bottomRight = !0 : l && h && (c.bottomLeft = !0))
            },
            NEu = function(a, b) {
                switch (a.Ba.direction) {
                    case "LEFT":
                        b.x = .5;
                        break;
                    case "NONE":
                    case "RIGHT":
                        b.x = -.5;
                        break;
                    case "UP":
                        b.y = .5;
                        break;
                    case "DOWN":
                        b.y = -.5
                }
            };
        yEu.prototype.shuffle = function(a) {
            for (var b = this.oa.length - 1; b > 0; b--) {
                var c = Math.floor(Math.random() * (b + 1));
                if (a) {
                    var d = this.oa[b].Qi;
                    this.oa[b].Qi = this.oa[c].Qi;
                    this.oa[c].Qi = d
                }
                d = this.oa[b];
                this.oa[b] = this.oa[c];
                this.oa[c] = d
            }
        };
        yEu.prototype.clear = function() {
            this.oa = []
        };
        yEu.prototype.refresh = function() {
            for (var a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b.value.vp = !1
        };
        yEu.prototype.flip = function() {
            for (var a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi = !b.Qi;
            if (hZ(this.settings, 14))
                for (a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi && (b.light = 1.5);
            if (hZ(this.settings, 16))
                for (a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi && b.pos.x % 1 === 0 && b.pos.y % 1 === 0 && oZ(this.Ca, b.pos, !1)
        };
        var UEu = {
                MZb: new _.Zsu("/logos/fnbx/snake_arcade/", "arrow_audio", {
                    DOWN: 0,
                    LEFT: 23,
                    RIGHT: 46,
                    UP: 69
                }, 418)
            },
            VEu = {
                DOWN: new _.CY(UEu.MZb, "DOWN", 287.347),
                LEFT: new _.CY(UEu.MZb, "LEFT", 287.347),
                RIGHT: new _.CY(UEu.MZb, "RIGHT", 287.347),
                UP: new _.CY(UEu.MZb, "UP", 287.347)
            },
            WEu = function() {
                _.BY.call(this, UEu, VEu)
            };
        _.G(WEu, _.BY);
        var XEu = function(a, b, c, d) {
            this.Aa = a;
            this.settings = b;
            this.oa = c;
            this.Ba = d
        };
        XEu.prototype.render = function(a) {
            var b = this.Aa.oa.oa;
            this.oa.lineWidth = b / 8;
            this.oa.lineCap = "butt";
            this.oa.setLineDash([]);
            for (var c = b / 2, d = c * .6, e = Math.sqrt(3 * Math.pow(d, 2) / 4), f = this.Aa.Oa.oa, g = 0; g < this.Aa.oa.Aa.height; g++)
                for (var h = 0; h < this.Aa.oa.Aa.width; h++) {
                    var l = f[g][h];
                    if (l.direction !== "NONE" && (YEu(this, l, a, h * b, g * b, c, d, e), hZ(this.settings, 4)))
                        for (var m = _.n(this.Aa.Nb), p = m.next(); !p.done; p = m.next()) p = p.value, YEu(this, l, a, h * b + p.x, g * b + p.y, c, d, e)
                }
        };
        var YEu = function(a, b, c, d, e, f, g, h) {
            a.oa.save();
            a.oa.translate(d + f, e + f);
            d = b.direction;
            d === "UP" ? a.oa.rotate(-Math.PI / 2) : d === "DOWN" ? a.oa.rotate(Math.PI / 2) : d === "LEFT" && a.oa.rotate(Math.PI);
            d = b.vp ? c : 1;
            hZ(a.settings, 11) && (a.oa.globalAlpha = tEu(a.Aa, c, b.Qi, {
                zHa: .3,
                E7: !1
            }));
            if (dZ(a.settings))
                for (a.oa.fillStyle = b.color, h = g / 2 * d, b = h / 2, c = h * 3 / 2, g = 0; g < 3; g++) a.oa.fillRect(c - b - g * h, -b - g * h, h, h), g > 0 && a.oa.fillRect(c - b - g * h, -b + g * h, h, h);
            else a.oa.strokeStyle = b.color, b = g * d, h *= d, a.oa.beginPath(), a.oa.moveTo(-h, -b), a.oa.lineTo(h,
                0), a.oa.lineTo(-h, b), a.oa.stroke();
            a.oa.restore();
            a.oa.globalAlpha = 1
        };
        var ZEu = function(a, b, c) {
            this.settings = a;
            this.Aa = b;
            this.Ba = c;
            this.oa = []
        };
        ZEu.prototype.reset = function() {
            this.oa = [];
            for (var a = 0; a < this.Aa.Aa.height; a++) {
                this.oa.push([]);
                for (var b = 0; b < this.Aa.Aa.width; b++) this.oa[a].push({
                    direction: "NONE",
                    vp: !1,
                    color: "",
                    Qi: !0
                })
            }
        };
        ZEu.prototype.refresh = function() {
            for (var a = 0; a < this.Aa.Aa.height; a++)
                for (var b = 0; b < this.Aa.Aa.width; b++) this.oa[a][b].vp = !1
        };
        var $Eu = function(a, b, c) {
                var d = a.oa[c.y][c.x];
                d.direction = b;
                d.vp = !0;
                d.Qi = !0;
                var e = a.settings.Ca === 10,
                    f = e ? 1 : 0;
                e = e ? Math.floor(Math.random() * cEu.length) : 0;
                d.color = a.Ba(f, e, 0, !1, !1);
                hZ(a.settings, 7) && (c = mZ(a.Aa, c), c = a.oa[c.y][c.x], c.direction = cZ(b), c.vp = !0, c.Qi = !0, c.color = a.Ba(f, e, 0, !0, !1))
            },
            SEu = function(a, b) {
                return lZ(a.Aa, b) ? a.oa[b.y][b.x].direction : "NONE"
            },
            oZ = function(a, b, c) {
                var d = a.oa[b.y][b.x];
                if (c) switch (d.direction) {
                    case "DOWN":
                        VEu.DOWN.play();
                        break;
                    case "UP":
                        VEu.UP.play();
                        break;
                    case "LEFT":
                        VEu.LEFT.play();
                        break;
                    case "RIGHT":
                        VEu.RIGHT.play()
                }
                d.direction = "NONE";
                d.vp = !1;
                hZ(a.settings, 7) && (b = mZ(a.Aa, b), a = a.oa[b.y][b.x], a.direction = "NONE", a.vp = !1)
            },
            REu = function(a, b) {
                return lZ(a.Aa, b) ? a.oa[b.y][b.x].Qi : !1
            };
        ZEu.prototype.flip = function() {
            for (var a = 0; a < this.Aa.Aa.height; a++)
                for (var b = 0; b < this.Aa.Aa.width; b++) this.oa[a][b].Qi = !this.oa[a][b].Qi
        };
        var aFu = function(a, b, c, d) {
                this.oa = a;
                this.settings = b;
                this.context = c;
                this.Aa = d
            },
            bFu = function(a) {
                a.Aa.fillStyle = iZ(a.settings, a.settings.oa, 0);
                a.Aa.fillRect(0, 0, a.Aa.canvas.width, a.Aa.canvas.height);
                for (var b = 0; b < a.oa.oa.Aa.width; b++)
                    for (var c = 0; c < a.oa.oa.Aa.height; c++)(b + c) % 2 !== 0 && (a.Aa.fillStyle = iZ(a.settings, a.settings.oa, 1), a.Aa.fillRect(b * a.oa.oa.oa, c * a.oa.oa.oa, a.oa.oa.oa, a.oa.oa.oa))
            };
        var cFu = function(a, b, c) {
            this.settings = a;
            this.Da = b;
            this.Ia = c;
            this.Aa = new _.wl(0, 0);
            this.oa = 0;
            this.Ca = new _.ql(0, 0);
            this.Ba = [];
            this.Fa = 0
        };
        cFu.prototype.reset = function() {
            this.Ca = new _.ql(0, 0);
            hZ(this.settings, 3) && hZ(this.settings, 4) && (this.Aa.width % 2 === 1 && (this.Aa.width += 1, this.Ca.x += 1), this.Aa.height % 2 === 1 && (this.Aa.height += 1, this.Ca.y += 1));
            this.Ba = [];
            for (var a = 0; a < this.Aa.height; a++) {
                this.Ba.push([]);
                for (var b = 0; b < this.Aa.width; b++) this.Ba[a].push(0)
            }
            this.Fa = 0
        };
        var dFu = function(a, b) {
                a = a.Ba[b.y][b.x];
                return a !== 0 && a !== 3
            },
            lZ = function(a, b) {
                return b.x >= 0 && b.x < a.Aa.width && b.y >= 0 && b.y < a.Aa.height
            },
            eFu = function(a, b) {
                for (b = b.clone(); b.x < 0;) b.x += a.Aa.width;
                for (; b.x >= a.Aa.width;) b.x -= a.Aa.width;
                for (; b.y < 0;) b.y += a.Aa.height;
                for (; b.y >= a.Aa.height;) b.y -= a.Aa.height;
                return b
            },
            LEu = function(a, b, c) {
                return hZ(a.settings, 4) ? Math.min(Math.abs(b.x - c.x) + Math.abs(b.y - c.y), Math.abs(b.x + a.Aa.width - c.x) + Math.abs(b.y - c.y), Math.abs(b.x - a.Aa.width - c.x) + Math.abs(b.y - c.y), Math.abs(b.x -
                    c.x) + Math.abs(b.y + a.Aa.height - c.y), Math.abs(b.x - c.x) + Math.abs(b.y - a.Aa.height - c.y), Math.abs(b.x + a.Aa.width - c.x) + Math.abs(b.y + a.Aa.height - c.y), Math.abs(b.x + a.Aa.width - c.x) + Math.abs(b.y - a.Aa.height - c.y), Math.abs(b.x - a.Aa.width - c.x) + Math.abs(b.y + a.Aa.height - c.y), Math.abs(b.x - a.Aa.width - c.x) + Math.abs(b.y - a.Aa.height - c.y)) : Math.abs(b.x - c.x) + Math.abs(b.y - c.y)
            },
            fFu = function(a, b, c) {
                return hZ(a.settings, 4) ? Math.min(_.ul(b, c), _.ul(b, new _.ql(c.x - a.Aa.width, c.y - a.Aa.height)), _.ul(b, new _.ql(c.x, c.y - a.Aa.height)),
                    _.ul(b, new _.ql(c.x + a.Aa.width, c.y - a.Aa.height)), _.ul(b, new _.ql(c.x - a.Aa.width, c.y)), _.ul(b, new _.ql(c.x + a.Aa.width, c.y)), _.ul(b, new _.ql(c.x - a.Aa.width, c.y + a.Aa.height)), _.ul(b, new _.ql(c.x, c.y + a.Aa.height)), _.ul(b, new _.ql(c.x + a.Aa.width, c.y + a.Aa.height))) : _.ul(b, c)
            },
            gFu = function(a) {
                return a.Aa.width % 2 === 1 && a.Aa.height % 2 === 1
            },
            mZ = function(a, b) {
                return new _.ql(a.Aa.width - 1 - b.x, a.Aa.height - 1 - b.y)
            },
            nZ = function(a, b) {
                b.x > a.Aa.width - 1 ? b.x -= a.Aa.width : b.x < 0 && (b.x += a.Aa.width);
                b.y > a.Aa.height - 1 ? b.y -= a.Aa.height :
                    b.y < 0 && (b.y += a.Aa.height);
                return b
            },
            hFu = function(a) {
                a.Fa = (a.Fa + 1) % 2
            };
        var iFu = function(a, b, c, d, e, f) {
                this.oa = a;
                this.settings = b;
                this.Da = c;
                this.Ba = d;
                this.Fa = e;
                this.Ca = f;
                this.Aa = new fZ(this.settings, "snake_arcade/v4/box.png", 8, this.Ba, "snake_arcade/pixel/px_box.png")
            },
            jFu = function(a, b, c, d) {
                b = gFu(a.oa.oa) && b.pos.x === Math.floor(a.oa.oa.Aa.width / 2) && b.pos.y === Math.floor(a.oa.oa.Aa.height / 2);
                hZ(a.settings, 7) && !b && (b = new _.ql(a.oa.oa.Aa.width * a.oa.oa.oa - d.x, a.oa.oa.Aa.height * a.oa.oa.oa - d.y), a.Ba.drawImage(qEu(a.Aa).oa.canvas, 128, 0, 128, 128, b.x - c / 2, b.y - c / 2, c, c));
                a.Ba.drawImage(qEu(a.Aa).oa.canvas,
                    0, 0, 128, 128, d.x - c / 2, d.y - c / 2, c, c)
            },
            kFu = function(a, b, c, d) {
                a.Da.fillStyle = (b.x + b.y) % 2 === 0 ? iZ(a.settings, a.settings.oa, 0) : iZ(a.settings, a.settings.oa, 1);
                var e = b.x === -1 || b.x === a.oa.oa.Aa.width ? d : 1;
                d = b.y === -1 || b.y === a.oa.oa.Aa.height ? d : 1;
                a.Da.fillRect((b.x === -1 ? a.oa.oa.oa * (1 - e) : 0) + c.x + b.x * a.oa.oa.oa, (b.y === -1 ? a.oa.oa.oa * (1 - d) : 0) + c.y + b.y * a.oa.oa.oa, e * a.oa.oa.oa, d * a.oa.oa.oa);
                if (hZ(a.settings, 7)) {
                    var f = mZ(a.oa.oa, b);
                    a.Da.fillRect((b.x === -1 ? 0 : a.oa.oa.oa * (1 - e)) + c.x + f.x * a.oa.oa.oa, (b.y === -1 ? 0 : a.oa.oa.oa * (1 -
                        d)) + c.y + f.y * a.oa.oa.oa, e * a.oa.oa.oa, d * a.oa.oa.oa)
                }
            },
            mFu = function(a) {
                for (var b = _.n(a.oa.Ca.kX), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    c = d.clone();
                    c.x = c.x * a.oa.oa.oa + a.oa.oa.oa / 2;
                    c.y = c.y * a.oa.oa.oa + a.oa.oa.oa / 2;
                    d = 2 + (d.x + d.y) % 2 + (a.settings.Da === 2 || uEu(a.settings) ? 2 : 0);
                    lFu(a, d, c, 0, 0);
                    if (hZ(a.settings, 4))
                        for (var e = _.n(a.oa.Nb), f = e.next(); !f.done; f = e.next()) f = f.value, lFu(a, d, c, f.x, f.y)
                }
            },
            lFu = function(a, b, c, d, e) {
                a.Fa.drawImage(qEu(a.Aa).oa.canvas, b * 128, 0, 128, 128, c.x - a.oa.oa.oa / 2 + d, c.y - a.oa.oa.oa / 2 +
                    e, a.oa.oa.oa, a.oa.oa.oa)
            };
        var nFu = {
                cq: new _.Zsu("/logos/fnbx/snake_arcade/", "game_audio.6", {
                    BOX: 0,
                    DICE: 59,
                    DOWN: 102,
                    EAT: 121,
                    FLIP: 144,
                    KEY: 185,
                    LEFT: 216,
                    PORTAL: 235,
                    REVERSE: 296,
                    RIGHT: 357,
                    UP: 376
                }, 418)
            },
            oFu = {
                BOX: new _.CY(nFu.cq, "BOX", 757.551),
                lne: new _.CY(nFu.cq, "DICE", 548.571),
                DOWN: new _.CY(nFu.cq, "DOWN", 235.102),
                One: new _.CY(nFu.cq, "EAT", 287.347),
                voe: new _.CY(nFu.cq, "FLIP", 522.449),
                KEY: new _.CY(nFu.cq, "KEY", 391.837),
                LEFT: new _.CY(nFu.cq, "LEFT", 235.102),
                e5e: new _.CY(nFu.cq, "PORTAL", 783.673),
                A5e: new _.CY(nFu.cq, "REVERSE", 783.673),
                RIGHT: new _.CY(nFu.cq, "RIGHT", 235.102),
                UP: new _.CY(nFu.cq, "UP", 235.102)
            },
            pFu = function() {
                _.BY.call(this, nFu, oFu)
            };
        _.G(pFu, _.BY);
        var qFu = function(a, b, c, d, e, f) {
            this.settings = a;
            this.oa = b;
            this.Ba = c;
            this.Fa = d;
            this.Ca = e;
            this.Da = f;
            this.Aa = new Set;
            this.kX = new Set
        };
        qFu.prototype.reset = function() {
            this.Aa = new Set;
            this.kX = new Set;
            if (hZ(this.settings, 9) && !hZ(this.settings, 8)) {
                for (var a = 0; a + 1 < this.Fa.oa.length; a += 2) {
                    var b = this.Fa.oa[a].pos.clone(),
                        c = this.Fa.oa[a + 1].pos.clone(),
                        d = hZ(this.settings, 11) ? a < this.Fa.oa.length / 2 : !0;
                    this.Aa.add({
                        pos: b,
                        prev: null,
                        vp: !1,
                        Qi: d
                    });
                    rFu(this, c, 0)
                }
                this.Fa.clear()
            }
        };
        var tFu = function(a, b) {
                var c = b ? a.Ba.Da : a.Ba.Ca;
                c.Qta = !1;
                var d = b ? kZ(a.Ba, 0) : a.Ba.oa[0];
                b = b ? cZ(a.Ba.Oa) : a.Ba.Oa;
                for (var e = _.n(a.Aa), f = e.next(); !f.done; f = e.next()) f = f.value, f.Qi && f.prev === null && d.equals(f.pos) && sFu(a, f, b, c)
            },
            sFu = function(a, b, c, d, e) {
                e = e === void 0 ? !1 : e;
                b.prev = b.pos.clone();
                switch (c) {
                    case "RIGHT":
                        b.pos.x += 1;
                        break;
                    case "LEFT":
                        --b.pos.x;
                        break;
                    case "DOWN":
                        b.pos.y += 1;
                        break;
                    case "UP":
                        --b.pos.y
                }
                hZ(a.settings, 7) && gFu(a.oa) && b.pos.x === Math.floor(a.oa.Aa.width / 2) && b.pos.y === Math.floor(a.oa.Aa.height /
                    2) && (c = mZ(a.oa, b.prev), a.Da.particles.push({
                    pos: new _.ql(c.x * a.oa.oa, c.y * a.oa.oa),
                    Zd: new _.ql((b.prev.x - b.pos.x) * 12, (b.prev.y - b.pos.y) * 12),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 1,
                    type: 3
                }));
                c = !1;
                (hZ(a.settings, 19) || e) && b.pos.y >= 0 && b.pos.y < a.oa.Ba.length && b.pos.x >= 0 && b.pos.x < a.oa.Ba[b.pos.y].length && dFu(a.oa, b.pos) && (c = !0);
                gZ(a.settings) && b.pos.x >= 0 && b.pos.x < a.oa.Aa.width && b.pos.y >= 0 && b.pos.y < a.oa.Aa.height && a.oa.Ba[b.pos.y][b.pos.x] === 3 && (c = !0);
                if (b.pos.x < 0 || b.pos.x >= a.oa.Aa.width || b.pos.y < 0 || b.pos.y >=
                    a.oa.Aa.height || c)
                    if (hZ(a.settings, 4) && !c) b.pos.x < 0 ? (b.pos.x += a.oa.Aa.width, b.prev = b.pos.clone(), b.prev.x += 1) : b.pos.x >= a.oa.Aa.width && (b.pos.x -= a.oa.Aa.width, b.prev = b.pos.clone(), --b.prev.x), b.pos.y < 0 ? (b.pos.y += a.oa.Aa.height, b.prev = b.pos.clone(), b.prev.y += 1) : b.pos.y >= a.oa.Aa.height && (b.pos.y -= a.oa.Aa.height, b.prev = b.pos.clone(), --b.prev.y);
                    else if (c = !0, e = uFu(a)) b.pos = e, b.vp = !0, hZ(a.settings, 16) && oZ(a.Ca, e, !1);
                else {
                    a.Aa.delete(b);
                    return
                }!c && d && (d.Qta = !0, d.jwa = 0, d.fJa = 0, d.T5 = !1, d.ZX = 0);
                e = _.n(a.kX);
                for (c = e.next(); !c.done; c = e.next())
                    if (c = c.value, b.pos.equals(c)) {
                        vFu(a, b);
                        a.kX.delete(c);
                        if (hZ(a.settings, 7))
                            for (b = mZ(a.oa, c), e = _.n(a.kX), c = e.next(); !c.done; c = e.next())
                                if (c = c.value, c.equals(b)) {
                                    a.kX.delete(c);
                                    break
                                } d && (d.Qta = !1, d.T5 = !0, d.ZX = 10);
                        break
                    }
            },
            wFu = function(a, b, c, d) {
                b = c ? mZ(a.oa, b) : b;
                c = c ? cZ(a.Ba.direction) : a.Ba.direction;
                for (var e = _.n(a.Aa), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, f.Qi && f.pos.equals(b)) {
                        var g = f.pos.clone();
                        switch (c) {
                            case "RIGHT":
                                g.x += 1;
                                break;
                            case "LEFT":
                                --g.x;
                                break;
                            case "DOWN":
                                g.y +=
                                    1;
                                break;
                            case "UP":
                                --g.y
                        }
                        hZ(a.settings, 4) && nZ(a.oa, g);
                        if (lZ(a.oa, g) && dFu(a.oa, g)) {
                            var h = hZ(a.settings, 7) && gFu(a.oa) && f.pos.x === Math.floor(a.oa.Aa.width / 2) && f.pos.y === Math.floor(a.oa.Aa.height / 2);
                            if (a.oa.Ba[g.y][g.x] !== 5 && a.oa.Ba[g.y][g.x] !== 7 && !h) switch (f.prev = f.pos.clone(), g = 1 / 3, a.Ba.direction) {
                                case "RIGHT":
                                    f.pos.x += g;
                                    break;
                                case "LEFT":
                                    f.pos.x -= g;
                                    break;
                                case "DOWN":
                                    f.pos.y += g;
                                    break;
                                case "UP":
                                    f.pos.y -= g
                            }
                            d()
                        } else hZ(a.settings, 16) && SEu(a.Ca, g) === cZ(c) && REu(a.Ca, g) && d()
                    }
            },
            vFu = function(a, b) {
                oFu.BOX.play();
                var c = b.pos,
                    d = hZ(a.settings, 2),
                    e = hZ(a.settings, 10),
                    f = hZ(a.settings, 15),
                    g = gZ(a.settings);
                if (d || e || f || g)
                    if (e = a.oa.Da(null, e ? 4 : 2), e !== null || d) c = e;
                c && JEu(a.Fa, c, b.LPa, b.Qi);
                d = b.prev ? b.prev : b.pos;
                c = new _.ql((b.pos.x + d.x) * a.oa.oa / 2, (b.pos.y + d.y) * a.oa.oa / 2);
                d = new _.ql((b.pos.x - d.x) * 12, (b.pos.y - d.y) * 12);
                e = a.oa.oa / 2;
                a.Da.particles.push({
                    pos: c.clone(),
                    Zd: d.clone(),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 6,
                    type: 3
                });
                a.Da.particles.push({
                    pos: new _.ql(c.x, c.y - e),
                    Zd: d.clone(),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 7,
                    type: 3
                });
                a.Da.particles.push({
                    pos: new _.ql(c.x, c.y + e),
                    Zd: d.clone(),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 7,
                    type: 3
                });
                a.Da.particles.push({
                    pos: new _.ql(c.x - e, c.y),
                    Zd: d.clone(),
                    angle: 90,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 7,
                    type: 3
                });
                a.Da.particles.push({
                    pos: new _.ql(c.x + e, c.y),
                    Zd: d.clone(),
                    angle: 90,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: 7,
                    type: 3
                });
                hZ(a.settings, 7) && (c = mZ(a.oa, b.prev !== null ? b.prev : b.pos), a.Da.particles.push({
                    pos: new _.ql(c.x * a.oa.oa, c.y * a.oa.oa),
                    Zd: new _.ql(-d.x, -d.y),
                    angle: 0,
                    nV: Math.random() *
                        20 - 10,
                    size: 1,
                    lO: 1,
                    type: 3
                }));
                a.Aa.delete(b)
            },
            uFu = function(a, b) {
                var c = (b === void 0 ? 0 : b) && !hZ(a.settings, 19) ? xFu(a) : null;
                b = a.oa.Da(c, 7);
                if (!b) return null;
                if (a.settings.Aa === 3 && hZ(a.settings, 11) || pZ(a.settings)) return b;
                var d = b.clone();
                d.x === 0 && a.oa.Ba[d.y][d.x + 1] === 0 && (d.x += 1);
                d.x === a.oa.Aa.width - 1 && a.oa.Ba[d.y][d.x - 1] === 0 && --d.x;
                d.y === 0 && a.oa.Ba[d.y + 1][d.x] === 0 && (d.y += 1);
                d.y === a.oa.Aa.height - 1 && a.oa.Ba[d.y - 1][d.x] === 0 && --d.y;
                if (c == null ? 0 : c.some(function(f) {
                        return d.equals(f)
                    })) return b;
                c = _.n(a.kX);
                for (var e =
                        c.next(); !e.done; e = c.next())
                    if (d.equals(e.value)) return b;
                return LEu(a.oa, a.Ba.oa[0], d) <= 3 ? b : d
            },
            xFu = function(a) {
                for (var b = function(p) {
                        return p === 7 || p === 5
                    }, c = [], d = 0; d < a.oa.Aa.height; d++)
                    for (var e = 0; e < a.oa.Aa.width; e++)
                        if (b(a.oa.Ba[d][e])) {
                            var f = [new _.ql(e, d - 1), new _.ql(e + 1, d), new _.ql(e, d + 1), new _.ql(e - 1, d)];
                            hZ(a.settings, 4) && f.forEach(function(p) {
                                nZ(a.oa, p)
                            });
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g],
                                    l = f[(g + 1) % f.length];
                                if (lZ(a.oa, h) && lZ(a.oa, l)) {
                                    var m = a.oa.Ba[l.y][l.x];
                                    b(a.oa.Ba[h.y][h.x]) && b(m) &&
                                        c.push(new _.ql(e === h.x ? l.x : h.x, d === h.y ? l.y : h.y))
                                }
                            }
                        } return c
            },
            zFu = function(a, b, c, d) {
                d = uFu(a, d === void 0 ? !1 : d);
                var e = a.oa.Da(d, 8);
                d && e && (yFu(a, {
                    pos: d,
                    prev: null,
                    vp: !0,
                    Qi: c
                }), rFu(a, e, b))
            },
            yFu = function(a, b) {
                a.Aa.add(b);
                hZ(a.settings, 16) && oZ(a.Ca, b.pos, !1)
            },
            rFu = function(a, b, c) {
                c = (a.Aa.size + c) * (hZ(a.settings, 7) ? 2 : 1);
                a.kX.size >= c || (a.kX.add(b), hZ(a.settings, 7) && a.kX.add(mZ(a.oa, b)), hZ(a.settings, 16) && oZ(a.Ca, b, !1))
            };
        qFu.prototype.refresh = function() {
            for (var a = _.n(this.Aa), b = a.next(); !b.done; b = a.next()) b.value.vp = !1
        };
        qFu.prototype.flip = function() {
            for (var a = _.n(this.Aa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi = !b.Qi
        };
        var AFu = {
                Ucd: new _.Zsu("/logos/fnbx/snake_arcade/", "end_audio", {
                    DEATH: 0,
                    WIN: 49
                }, 418)
            },
            BFu = {
                Zqc: new _.CY(AFu.Ucd, "DEATH", 626.939),
                WIN: new _.CY(AFu.Ucd, "WIN", 914.286)
            },
            CFu = function() {
                _.BY.call(this, AFu, BFu)
            };
        _.G(CFu, _.BY);
        var DFu = function(a, b, c, d, e) {
            this.oa = a;
            this.settings = b;
            this.Aa = c;
            this.Ba = d;
            this.Ca = e;
            this.Da = new fZ(this.settings, "snake_arcade/v17/key_types.png", 5, this.Aa, "snake_arcade/pixel/v17/px_key_types.png")
        };
        DFu.prototype.render = function(a) {
            for (var b = _.n(this.oa.Fa.keys), c = b.next(); !c.done; c = b.next()) {
                var d = a;
                c = c.value;
                var e = c.pos.clone();
                e.x = e.x * this.oa.oa.oa + this.oa.oa.oa / 2;
                e.y = e.y * this.oa.oa.oa + this.oa.oa.oa / 2;
                var f = dZ(this.settings),
                    g = this.oa.oa.oa * (f ? 1.5 : 1.2) * (c.vp && !this.oa.hm ? d : 1);
                if (!c.vp && (this.oa.Aa.direction !== "NONE" || EFu(this.oa.Aa))) {
                    var h = (c.bI + (this.oa.hm ? 0 : d)) / (f ? 16 : 6),
                        l = IDu(h);
                    h === 0 && (l = 0);
                    f && (l = l >= .75 ? .6 : 0);
                    g = Math.round(g * (1 + l * .25))
                }
                hZ(this.settings, 11) && (this.Aa.globalAlpha = tEu(this.oa,
                    d, c.Qi, {
                        zHa: .3,
                        E7: !1
                    }));
                this.Aa.drawImage(this.Da.nF(), 128 * c.type, 0, 128, 128, e.x - g / 2, e.y - g / 2, g, g);
                hZ(this.settings, 7) && (d = new _.ql(this.oa.oa.Aa.width * this.oa.oa.oa - e.x, this.oa.oa.Aa.height * this.oa.oa.oa - e.y), this.Aa.save(), this.Aa.translate(d.x, d.y), this.Aa.rotate(Math.PI), this.Aa.drawImage(this.Da.nF(), 128 * c.type, 0, 128, 128, -(g / 2), -(g / 2), g, g), this.Aa.restore());
                this.Aa.globalAlpha = 1
            }
        };
        var FFu = function(a, b, c, d, e) {
                this.oa = a;
                this.settings = b;
                this.Ba = c;
                this.Aa = d;
                this.Da = e;
                this.Ca = new fZ(this.settings, "snake_arcade/mine.png", 10, this.Ba, "snake_arcade/pixel/px_mine.png")
            },
            JFu = function(a, b) {
                for (var c = _.n(a.oa.Qa.Ca), d = c.next(); !d.done; d = c.next()) {
                    var e = a;
                    d = d.value;
                    e.Aa.globalAlpha = Math.max(0, (d.ticks - b) / 4) * .75;
                    GFu(e, d, d.pos, 0, 0);
                    if (hZ(e.settings, 4))
                        for (var f = _.n(e.oa.Nb), g = f.next(); !g.done; g = f.next()) g = g.value, GFu(e, d, d.pos, g.x, g.y);
                    e.Aa.globalAlpha = 1
                }
                c = _.n(a.oa.Qa.Aa);
                for (d = c.next(); !d.done; d =
                    c.next()) {
                    e = a;
                    g = b;
                    var h = d.value;
                    d = new _.ql(h.pos.x * e.oa.oa.oa, h.pos.y * e.oa.oa.oa);
                    var l = e.oa.oa.oa * 3;
                    f = 1;
                    hZ(e.settings, 11) && (f = tEu(e.oa, g, h.Qi, {
                        zHa: .3,
                        E7: !1
                    }));
                    e.Aa.globalAlpha = Math.min(1, (h.bI + g) / 2) * f;
                    e.Aa.strokeStyle = "#f23606";
                    e.Aa.lineWidth = e.oa.oa.oa / 12;
                    e.Aa.lineDashOffset = e.oa.oa.oa / 8;
                    e.Aa.setLineDash([e.oa.oa.oa / 4, e.oa.oa.oa / 4]);
                    HFu(e, d, 0, 0, l);
                    if (hZ(e.settings, 4))
                        for (var m = _.n(e.oa.Nb), p = m.next(); !p.done; p = m.next()) p = p.value, HFu(e, d, p.x, p.y, l);
                    e.Aa.globalAlpha = 1;
                    if (h.XVa > 0 && !e.oa.hm) {
                        h = (3 - (h.XVa -
                            g)) / 3;
                        g = l * h;
                        e.Aa.globalAlpha = IDu(h) * .15 * f;
                        e.Aa.fillStyle = "#f23606";
                        IFu(e, d, 0, 0, g);
                        if (hZ(e.settings, 4))
                            for (f = _.n(e.oa.Nb), l = f.next(); !l.done; l = f.next()) l = l.value, IFu(e, d, l.x, l.y, g);
                        e.Aa.globalAlpha = 1
                    }
                }
            },
            HFu = function(a, b, c, d, e) {
                a.Aa.beginPath();
                a.Aa.rect(b.x + a.oa.oa.oa / 2 - e / 2 + c, b.y + a.oa.oa.oa / 2 - e / 2 + d, e, e);
                a.Aa.stroke()
            },
            IFu = function(a, b, c, d, e) {
                a.Aa.fillRect(b.x + a.oa.oa.oa / 2 - e / 2 + c, b.y + a.oa.oa.oa / 2 - e / 2 + d, e, e)
            },
            GFu = function(a, b, c, d, e) {
                a.Aa.fillStyle = b.Z8f;
                a.Aa.fillRect(c.x + d, c.y + e, a.oa.oa.oa, a.oa.oa.oa);
                a.Aa.fillStyle = b.darkColor;
                b = a.oa.oa.oa / 4;
                dZ(a.settings) ? a.Aa.fillRect(c.x + a.oa.oa.oa / 2 + d - b, c.y + a.oa.oa.oa / 2 + e - b, 2 * b, 2 * b) : (a.Aa.beginPath(), a.Aa.arc(c.x + a.oa.oa.oa / 2 + d, c.y + a.oa.oa.oa / 2 + e, b, 0, 2 * Math.PI), a.Aa.fill())
            };
        var KFu = function(a, b, c, d, e) {
            this.oa = a;
            this.settings = b;
            this.Aa = c;
            this.Ba = d;
            this.Da = e;
            this.Ca = new fZ(this.settings, "snake_arcade/v17/key_types_dark.png", 5, this.Aa, "snake_arcade/pixel/v17/px_key_types_dark.png")
        };
        KFu.prototype.render = function(a) {
            for (var b = _.n(this.oa.Da.Ca.values()), c = b.next(); !c.done; c = b.next()) {
                var d = void 0,
                    e = void 0,
                    f = void 0,
                    g = void 0,
                    h = a;
                c = c.value;
                if (!c.HQ && !c.nO) {
                    var l = new _.ql(c.pos.x * this.oa.oa.oa + this.oa.oa.oa / 2, c.pos.y * this.oa.oa.oa + this.oa.oa.oa / 2),
                        m = this.oa.oa.oa * (c.vp && c.qx === void 0 ? h : 1);
                    hZ(this.settings, 11) && (this.Aa.globalAlpha = tEu(this.oa, h, c.Qi, {
                        zHa: (c.pos.x + c.pos.y) % 2 === 0 ? .365 : .265,
                        E7: (f = (g = c.qx) == null ? void 0 : g.E7) != null ? f : !1
                    }));
                    this.Aa.fillStyle = (d = (e = c.qx) == null ? void 0 : e.color) !=
                        null ? d : iZ(this.settings, this.settings.oa, 3);
                    e = d = m;
                    f = l.x - m / 2;
                    g = l.y - m / 2;
                    if (c.qx && (c.vp || c.qx.L9 === 0)) {
                        var p = c.vp ? h : 1 - h;
                        switch (c.vp ? c.qx.mvb : c.qx.ELa) {
                            case "UP":
                                e *= p;
                                c.vp && (g += m - e);
                                break;
                            case "DOWN":
                                e *= p;
                                c.vp || (g += m - e);
                                break;
                            case "LEFT":
                                d *= p;
                                c.vp && (f += m - d);
                                break;
                            case "RIGHT":
                                d *= p, c.vp || (f += m - d)
                        }
                    }
                    this.Aa.fillRect(f, g, d, e);
                    c.LPa !== void 0 && c.LPa >= 0 && (hZ(this.settings, 11) && (this.Aa.globalAlpha = tEu(this.oa, h, c.Qi)), this.Aa.drawImage(qEu(this.Ca).oa.canvas, c.LPa * 128, 0, 128, 128, l.x - m / 2, l.y - m / 2, m, m));
                    this.Aa.globalAlpha =
                        1
                }
            }
        };
        var LFu = function(a, b, c, d, e, f, g, h) {
            this.oa = a;
            this.settings = b;
            this.Aa = c;
            this.Ba = d;
            this.Fa = e;
            this.Ca = f;
            this.Da = g;
            this.Ia = h
        };
        LFu.prototype.render = function() {
            for (var a = _.n(this.oa.Xa.particles), b = a.next(); !b.done; b = a.next()) {
                var c = b.value,
                    d = Math.round(c.pos.x + this.oa.oa.oa / 2),
                    e = Math.round(c.pos.y + this.oa.oa.oa / 2),
                    f = c.angle * Math.PI / 180;
                dZ(this.settings) && (f = JDu(f));
                b = c.type === 1 ? c.size : Math.min(1, c.size);
                c.type === 4 && c.nO ? MFu(this.Ia, b, new _.ql(d, e), f, c.nO) : (this.Aa.save(), this.Aa.translate(d, e), this.Aa.rotate(f), c.type === 0 && (this.Aa.fillStyle = iZ(this.settings, this.settings.oa, 3), this.Aa.fillRect(-(this.oa.oa.oa / 2) * b, -(this.oa.oa.oa /
                    2) * b, this.oa.oa.oa * b, this.oa.oa.oa * b)), c.type === 1 ? (d = c.oya === 1 ? 170 : 128, this.Aa.drawImage(qEu(this.Ba.Ba[c.lO], c.oya).oa.canvas, 0, 0, d, d, -(this.oa.oa.oa / 2) * b, -(this.oa.oa.oa / 2) * b, this.oa.oa.oa * b, this.oa.oa.oa * b)) : c.type === 2 ? (c = this.Da.Ca, this.Aa.drawImage(c.nF(), 0, (c.getLength() - 1) * c.getHeight(), c.getWidth(), c.getHeight(), -(this.oa.oa.oa / 2) * b, -(this.oa.oa.oa / 2) * b, this.oa.oa.oa * b, this.oa.oa.oa * b)) : c.lO !== void 0 && c.lO >= 0 && this.Aa.drawImage(c.type === 0 ? qEu(this.Fa.Ca).oa.canvas : qEu(this.Ca.Aa).oa.canvas,
                    c.lO * 128, 0, 128, 128, -(this.oa.oa.oa / 2) * b, -(this.oa.oa.oa / 2) * b, this.oa.oa.oa * b, this.oa.oa.oa * b), this.Aa.restore())
            }
            a = _.n(this.oa.Xa.O1);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = Math.round(b.pos.x + this.oa.oa.oa / 6), d = Math.round(b.pos.y + this.oa.oa.oa / 9), e = b.Zd.x * .025, dZ(this.settings) && (e = JDu(e)), this.Aa.save(), this.Aa.translate(c, d), this.Aa.rotate(e), c = Math.min(1, b.size), this.Aa.fillStyle = b.color, this.Aa.fillRect(-(this.oa.oa.oa / 6) * c, -(this.oa.oa.oa / 9) * c, this.oa.oa.oa / 3 * c, this.oa.oa.oa / 4.5 * c), this.Aa.restore()
        };
        var NFu = function(a, b, c, d, e) {
            this.oa = a;
            this.settings = b;
            this.Ba = c;
            this.Ca = d;
            this.Aa = e
        };
        NFu.prototype.render = function(a) {
            for (var b = _.n(this.oa.Sa.Aa), c = b.next(); !c.done; c = b.next()) {
                var d = a,
                    e = c.value;
                c = new _.ql(e.pos.x * this.oa.oa.oa + this.oa.oa.oa / 2, e.pos.y * this.oa.oa.oa + this.oa.oa.oa / 2);
                var f = this.oa.hm ? 0 : d,
                    g = (e.bI + f) / 6,
                    h = (Math.sin(g * Math.PI * 2) + 1) / 2;
                g === 0 && (h = 0);
                var l = this.oa.oa.oa * .5 * (e.sHa ? Math.sqrt(1 - d) : 1) * (e.vp && !this.oa.hm ? .3 + d * .7 : 1);
                l = Math.round(l * (1 + h * .4));
                f = Math.max(0, e.hHa - 1 + f);
                f = e.Qsb ? f : f + 1;
                f = this.oa.Ia(f / (this.oa.Aa.oa.length - 1), f, this.oa.Aa.Ab ? d : 0, e.kdb, !1);
                f = _.MC(f);
                var m =
                    _.LC(_.m1c(f, h * .15));
                f = _.LC(_.m1c(f, (1 - h) * .05));
                var p = hZ(this.settings, 4) ? this.Ba : this.Ca;
                hZ(this.settings, 11) && (p.globalAlpha = tEu(this.oa, d, e.Qi));
                p.fillStyle = m;
                dZ(this.settings) ? p.fillRect(c.x - l, c.y - l, l * 2, l * 2) : (p.beginPath(), p.arc(c.x, c.y, l, 0, 2 * Math.PI), p.fill());
                d = l / 8 * h;
                d = new _.ql(d * Math.cos(g * 2 * Math.PI), d * Math.sin(g * 2 * Math.PI));
                h = l * (.5 + h * .25);
                p.fillStyle = f;
                dZ(this.settings) ? p.fillRect(c.x + d.x - h, c.y + d.y - h, h * 2, h * 2) : (p.beginPath(), p.arc(c.x + d.x, c.y + d.y, h, 0, 2 * Math.PI), p.fill());
                p.globalAlpha = 1
            }
        };
        var OFu = function(a, b, c, d, e) {
            this.oa = a;
            this.settings = b;
            this.Aa = c;
            this.Ab = d;
            this.Eb = e;
            this.Ba = new fZ(this.settings, "snake_arcade/v19/blink.png", 9, this.Aa, "snake_arcade/pixel/px_blink.png");
            this.Da = new fZ(this.settings, "snake_arcade/eat.png", 15, this.Aa, "snake_arcade/pixel/px_eat.png");
            this.Fa = new fZ(this.settings, "snake_arcade/v19/die.png", 37, this.Aa, "snake_arcade/pixel/px_die.png");
            this.Ca = new fZ(this.settings, "snake_arcade/tongue.png", 21, this.Aa, "snake_arcade/pixel/px_tongue.png");
            this.Ia = new fZ(this.settings,
                "snake_arcade/effect.png", 21, this.Aa, "snake_arcade/pixel/px_effect.png");
            this.Oa = new fZ(this.settings, "snake_arcade/v19/blink.png", 9, this.Aa, "snake_arcade/pixel/px_blink.png");
            this.Ta = new fZ(this.settings, "snake_arcade/eat.png", 15, this.Aa, "snake_arcade/pixel/px_eat.png");
            this.Sa = new fZ(this.settings, "snake_arcade/v19/die.png", 37, this.Aa, "snake_arcade/pixel/px_die.png");
            this.Ua = new fZ(this.settings, "snake_arcade/tongue.png", 21, this.Aa, "snake_arcade/pixel/px_tongue.png");
            this.Qa = new fZ(this.settings,
                "snake_arcade/v19/blink.png", 9, this.Aa, "snake_arcade/pixel/px_blink.png");
            this.rb = new fZ(this.settings, "snake_arcade/eat.png", 15, this.Aa, "snake_arcade/pixel/px_eat.png");
            this.Xa = new fZ(this.settings, "snake_arcade/v19/die.png", 37, this.Aa, "snake_arcade/pixel/px_die.png");
            eZ(this.Qa, "#5282F2", "#909090");
            eZ(this.rb, "#5282F2", "#909090");
            eZ(this.Xa, "#5282F2", "#909090")
        };
        OFu.prototype.render = function(a, b, c) {
            var d = a,
                e = Math.pow(d, .2);
            this.oa.hm && (a = this.oa.Aa.Qa === 3 ? 1 : this.oa.Aa.Qa === 2 ? 1 - a : this.oa.Aa.Qa === 1 ? 1 - Math.pow(a, .5) / 2 : .5);
            if (this.oa.Aa.direction === "NONE" || this.oa.Aa.Ta) a = 0;
            for (var f = new _.ql(this.oa.Aa.oa[0].x * this.oa.oa.oa + this.oa.oa.oa / 2, this.oa.Aa.oa[0].y * this.oa.oa.oa + this.oa.oa.oa / 2), g = this.oa.Aa.oa.length - 1; g >= 0; g--) {
                var h = (this.oa.Aa.oa[g].x + this.oa.Aa.oa[g].y) % 2,
                    l = hZ(this.settings, 3) && g > 0 && h === 0,
                    m = hZ(this.settings, 13) && !hZ(this.settings, 11) && !hZ(this.settings,
                        12) && !this.oa.hm && g > 0 && g < this.oa.Aa.Xa.length && this.oa.Aa.Xa[g] === 0,
                    p = l || m;
                this.Aa.lineCap = g === this.oa.Aa.oa.length - 1 || (this.oa.ticks <= 1 || this.oa.Aa.Qa > 0) && g === this.oa.Aa.oa.length - 2 || this.oa.hm && g === 0 || this.oa.hm && g === this.oa.Aa.oa.length - 2 && this.oa.Aa.oa[this.oa.Aa.oa.length - 2].equals(this.oa.Aa.oa[this.oa.Aa.oa.length - 1]) || this.oa.hm && g === this.oa.Aa.oa.length - 2 && hZ(this.settings, 7) ? "round" : "butt";
                if (hZ(this.settings, 3) || hZ(this.settings, 11)) this.Aa.lineCap = this.oa.hm && g === 0 ? "round" : "butt";
                var q =
                    void 0;
                g === 0 ? (q = this.oa.Aa.oa[0].clone(), this.oa.Aa.direction === "LEFT" ? (--q.x, q.x < 0 && (q.x = this.oa.oa.Aa.width - 1)) : this.oa.Aa.direction === "RIGHT" ? (q.x += 1, q.x >= this.oa.oa.Aa.width && (q.x = 0)) : this.oa.Aa.direction === "UP" ? (--q.y, q.y < 0 && (q.y = this.oa.oa.Aa.height - 1)) : this.oa.Aa.direction === "DOWN" && (q.y += 1, q.y >= this.oa.oa.Aa.height && (q.y = 0))) : q = this.oa.Aa.oa[g - 1].clone();
                var v = this.oa.Aa.oa[g].clone(),
                    z = void 0;
                z = g === this.oa.Aa.oa.length - 1 ? this.oa.Aa.rb.clone() : this.oa.Aa.oa[g + 1].clone();
                for (var A = void 0, E =
                        _.n(this.oa.Sa.Aa), L = E.next(); !L.done; L = E.next()) {
                    var O = L.value;
                    if (v.equals(O.pos) && (this.oa.hm || g >= O.hHa)) {
                        A = O;
                        O.Qsb ? q = v.clone() : z = v.clone();
                        break
                    }
                }
                if (hZ(this.settings, 5) && !hZ(this.settings, 19)) {
                    for (var U = 0, X = _.n(this.oa.Sa.Aa), ba = X.next(); !ba.done; ba = X.next()) v.equals(ba.value.pos) && U++;
                    if (U > 1) continue
                }
                var na = v.clone(),
                    qa = v.clone();
                na.x *= this.oa.oa.oa;
                na.y *= this.oa.oa.oa;
                qa.x *= this.oa.oa.oa;
                qa.y *= this.oa.oa.oa;
                v.x - z.x === -1 || v.x - z.x > 1 ? (qa.x += this.oa.oa.oa, qa.y += this.oa.oa.oa / 2) : v.x - z.x === 1 || v.x -
                    z.x < -1 ? qa.y += this.oa.oa.oa / 2 : v.y - z.y === -1 || v.y - z.y > 1 ? (qa.y += this.oa.oa.oa, qa.x += this.oa.oa.oa / 2) : v.y - z.y === 1 || v.y - z.y < -1 ? qa.x += this.oa.oa.oa / 2 : (qa.x += this.oa.oa.oa / 2, qa.y += this.oa.oa.oa / 2);
                v.x - q.x === -1 || v.x - q.x > 1 ? (na.x += this.oa.oa.oa, na.y += this.oa.oa.oa / 2) : v.x - q.x === 1 || v.x - q.x < -1 ? na.y += this.oa.oa.oa / 2 : v.y - q.y === -1 || v.y - q.y > 1 ? (na.y += this.oa.oa.oa, na.x += this.oa.oa.oa / 2) : v.y - q.y === 1 || v.y - q.y < -1 ? na.x += this.oa.oa.oa / 2 : (na.x += this.oa.oa.oa / 2, na.y += this.oa.oa.oa / 2);
                if (g === 0) {
                    var wa = a,
                        ra = !pZ(this.settings) &&
                        (this.oa.Aa.oa[0].x === 0 && this.oa.Aa.direction === "LEFT" || this.oa.Aa.oa[0].x === this.oa.oa.Aa.width - 1 && this.oa.Aa.direction === "RIGHT" || this.oa.Aa.oa[0].y === 0 && this.oa.Aa.direction === "UP" || this.oa.Aa.oa[0].y === this.oa.oa.Aa.height - 1 && this.oa.Aa.direction === "DOWN"),
                        ta = this.oa.Aa.oa[0].clone(),
                        Za = this.oa.Aa.oa[0].clone();
                    switch (this.oa.Aa.direction) {
                        case "RIGHT":
                            ta.x += 1;
                            Za.x += 2;
                            break;
                        case "LEFT":
                            --ta.x;
                            Za.x -= 2;
                            break;
                        case "DOWN":
                            ta.y += 1;
                            Za.y += 2;
                            break;
                        case "UP":
                            --ta.y, Za.y -= 2
                    }
                    hZ(this.settings, 4) && (nZ(this.oa.oa,
                        ta), nZ(this.oa.oa, Za));
                    if (!hZ(this.settings, 19)) {
                        if (hZ(this.settings, 1) || hZ(this.settings, 8) || hZ(this.settings, 13) || hZ(this.settings, 17)) {
                            var Xa = this.oa.Da.Fa(ta);
                            ra = ra || lZ(this.oa.oa, ta) && PFu(Xa) && !Xa.HQ
                        }
                        hZ(this.settings, 9) && lZ(this.oa.oa, ta) && lZ(this.oa.oa, Za) && this.oa.oa.Ba[ta.y][ta.x] === 7 && dFu(this.oa.oa, Za) && (ra = !0);
                        if (hZ(this.settings, 7)) {
                            var nb = kZ(this.oa.Aa, 0);
                            ra = ra || ta.equals(nb)
                        }
                        if (hZ(this.settings, 15))
                            for (var db = cZ(this.oa.Aa.direction), Lb = _.n(this.oa.Ba.oa), Zb = Lb.next(); !Zb.done; Zb = Lb.next()) {
                                var Bb =
                                    Zb.value;
                                if (Bb.Qi) {
                                    var Nb = void 0;
                                    ta.equals(Bb.pos) && ((Nb = Bb.z6) == null ? 0 : Nb.has(db)) && (ra = !0);
                                    if (hZ(this.settings, 7)) {
                                        var Wb = void 0;
                                        mZ(this.oa.oa, ta).equals(Bb.pos) && ((Wb = Bb.z6) == null ? 0 : Wb.has(this.oa.Aa.direction)) && (ra = !0)
                                    }
                                }
                            }
                        if (hZ(this.settings, 16)) {
                            var Bc = REu(this.oa.Oa, ta);
                            SEu(this.oa.Oa, ta) === cZ(this.oa.Aa.direction) && Bc && (ra = !0)
                        }
                        dZ(this.settings) && lZ(this.oa.oa, ta) && this.oa.oa.Ba[ta.y][ta.x] === 1 && !ta.equals(this.oa.Aa.oa[this.oa.Aa.oa.length - 1]) && (ra = !0)
                    }
                    ra && (wa = Math.min(a, .5));
                    na.x = na.x * wa +
                        qa.x * (1 - wa);
                    na.y = na.y * wa + qa.y * (1 - wa);
                    this.oa.Aa.direction === this.oa.Aa.Oa || b ? (this.oa.Aa.Nc = na.clone(), this.oa.Aa.Kw = a) : this.oa.hm || (wa = (a - this.oa.Aa.Kw) / (1 - this.oa.Aa.Kw), na.x = na.x * wa + this.oa.Aa.Nc.x * (1 - wa), na.y = na.y * wa + this.oa.Aa.Nc.y * (1 - wa));
                    f = na.clone()
                } else if (g === this.oa.Aa.oa.length - 1) {
                    var Ac = a;
                    this.oa.Aa.Ua > 0 && (Ac = this.oa.Aa.oa.length === 2 ? .5 - a / 2 : 0);
                    qa.x = qa.x * (1 - Ac) + na.x * Ac;
                    qa.y = qa.y * (1 - Ac) + na.y * Ac;
                    hZ(this.settings, 14) && hZ(this.settings, 5) && (this.oa.Aa.Xc = qa.clone())
                }
                hZ(this.settings, 5) && (g !==
                    this.oa.Aa.oa.length - 1 || this.oa.Aa.Ta ? g === 0 && this.oa.Aa.Ta && (pZ(this.settings) || hZ(this.settings, 2) || (na.x = this.oa.Aa.kd.x * (1 - e) + na.x * e, na.y = this.oa.Aa.kd.y * (1 - e) + na.y * e), f = na.clone()) : this.oa.Aa.kd = qa.clone());
                var hd = this.Aa.createLinearGradient(na.x, na.y, qa.x, qa.y),
                    Cc = 0,
                    Kc = 0;
                g === 0 ? (Cc = 0, Kc = a / (this.oa.Aa.oa.length - 1)) : g === this.oa.Aa.oa.length - 1 ? (Cc = a / (this.oa.Aa.oa.length - 1) + (g - 1) / (this.oa.Aa.oa.length - 1), Kc = 1) : (Cc = a / (this.oa.Aa.oa.length - 1) + (g - 1) / (this.oa.Aa.oa.length - 1), Kc = a / (this.oa.Aa.oa.length -
                    1) + g / (this.oa.Aa.oa.length - 1));
                var Wc = Math.max(0, g - 1 + a);
                hd.addColorStop(0, this.oa.Ia(Cc, Wc, d, !1));
                hd.addColorStop(1, this.oa.Ia(Kc, Wc + 1, d, !1));
                this.Aa.strokeStyle = hd;
                var Cd = Math.min(1, (this.oa.Aa.oa.length - 4) / 12),
                    De = g / this.oa.Aa.oa.length * Cd;
                this.oa.Aa.Ta && (De = De * d + (1 - g / this.oa.Aa.oa.length) * Cd * (1 - d));
                var Zd = this.oa.oa.oa * .4;
                this.Aa.lineWidth = this.oa.oa.oa * .8 * (1 - De) + Zd * De;
                if (hZ(this.settings, 3))
                    for (var fe = 0; fe < this.oa.Aa.Sa.length; fe++)
                        if (!this.oa.Aa.Sa[fe].Mmc && Math.abs(this.oa.Aa.Sa[fe].Bga - g) < 4) {
                            var Ze =
                                1 + (1 - Math.abs((4 - (g - this.oa.Aa.Sa[fe].Bga) + a) / 8 - .5) * 2);
                            this.oa.hm && (Ze = this.oa.Aa.Qa === 3 ? Ze * (.5 + (1 - d) / 2) : this.oa.Aa.Qa === 2 ? (1 - d) / 2 * Ze : 1, Ze = Math.max(1, Ze));
                            Ze = 1 + (Ze - 1) * (this.oa.oa.oa / this.Aa.lineWidth - 1);
                            Ze = 1 + (Ze - 1) * (1 - g / this.oa.Aa.oa.length);
                            this.Aa.lineWidth *= Ze;
                            break
                        } var Ed = v.clone(),
                    kg = !p && !(hZ(this.settings, 3) && g === 0 && h === 0 && !this.oa.hm),
                    Mf = v.y - q.y + (v.y - z.y),
                    Kf = v.x - q.x + (v.x - z.x) !== 0 && Mf !== 0 || this.oa.Aa.Ta && g === 0,
                    Le = hZ(this.settings, 11) && !hZ(this.settings, 3);
                if (Kf)
                    if (v.x = v.x * this.oa.oa.oa + this.oa.oa.oa /
                        2, v.y = v.y * this.oa.oa.oa + this.oa.oa.oa / 2, g === this.oa.Aa.oa.length - 1 && this.oa.Aa.Ua === 0) {
                        var zf = Le && this.oa.Aa.Ba[g];
                        if (hZ(this.settings, 3) || Le) {
                            var xe = new _.ql(v.x + (v.x - na.x), v.y + (v.y - na.y)),
                                Sf = Math.pow(a, zf ? 1 : 1 / 3);
                            qa.x = qa.x * (1 - Sf) + xe.x * Sf;
                            qa.y = qa.y * (1 - Sf) + xe.y * Sf;
                            qa.x = qa.x * (1 - a) + na.x * a;
                            qa.y = qa.y * (1 - a) + na.y * a
                        }
                        var sf = Math.pow(a, zf ? 2 : 1);
                        v.x = v.x * (1 - sf) + (na.x + qa.x) / 2 * sf;
                        v.y = v.y * (1 - sf) + (na.y + qa.y) / 2 * sf
                    } else if (g === 0) {
                    var zg = this.oa.Aa.Ta ? 1 - d : a;
                    v.x = v.x * zg + (na.x + qa.x) / 2 * (1 - zg);
                    v.y = v.y * zg + (na.y + qa.y) / 2 * (1 -
                        zg)
                }
                if (kg) {
                    if (hZ(this.settings, 11)) {
                        var Ee = (hZ(this.settings, 3) ? .125 : .2) + (hZ(this.settings, 7) || uEu(this.settings) ? 0 : bEu[this.settings.Ca]);
                        this.Aa.globalAlpha = tEu(this.oa, d, this.oa.Aa.Ba[g], {
                            zHa: Ee,
                            E7: !1
                        })
                    }
                    if (dZ(this.settings)) {
                        var ze = g,
                            tf = q,
                            of = Ed,
                            hh = z,
                            vg = c,
                            Af = Cc,
                            Wd = Wc,
                            Pg = a,
                            Yc = of.clone();
                        Yc.x *= this.oa.oa.oa;
                        Yc.y *= this.oa.oa.oa;
                        var Hg = this.oa.oa.oa,
                            ag = this.oa.oa.oa;
                        if (ze === this.oa.Aa.oa.length - 1 && this.oa.Aa.Ua === 0) {
                            var Yf = tf.x - of.x,
                                nf = tf.y - of.y;
                            pZ(this.settings) && (Yf = PDu(Yf), nf = PDu(nf));
                            Yf > 0 ? (Hg *=
                                1 - Pg, Yc.x += this.oa.oa.oa - Hg) : Yf < 0 ? Hg *= 1 - Pg : nf > 0 ? (ag *= 1 - Pg, Yc.y += this.oa.oa.oa - ag) : nf < 0 && (ag *= 1 - Pg)
                        } else if (ze === 0) {
                            var ed = hh.x - of.x,
                                Gi = hh.y - of.y;
                            pZ(this.settings) && (ed = PDu(ed), Gi = PDu(Gi));
                            ed > 0 ? (Hg *= Pg, Yc.x += this.oa.oa.oa - Hg) : ed < 0 ? Hg *= Pg : Gi > 0 ? (ag *= Pg, Yc.y += this.oa.oa.oa - ag) : Gi < 0 && (ag *= Pg)
                        }
                        this.Aa.fillStyle = this.oa.Ia(Af, Wd, d, !1);
                        this.Aa.fillRect(Yc.x, Yc.y, Hg, ag);
                        hZ(this.settings, 7) && (this.Aa.fillStyle = this.oa.Ia(Af, Wd, d, !0), this.Aa.save(), this.Aa.translate(vg.width / 2, vg.height / 2), this.Aa.rotate(Math.PI),
                            this.Aa.translate(-vg.width / 2, -vg.height / 2), this.Aa.fillRect(Yc.x, Yc.y, Hg, ag), this.Aa.restore())
                    } else {
                        var Tg = void 0,
                            Dg = g,
                            vi = q,
                            Ug = v,
                            Nh = Ed,
                            ie = na,
                            Dh = qa,
                            jd = z,
                            md = c,
                            Gd = Kf,
                            pe = Le,
                            pf = Cc,
                            Gf = Kc,
                            If = Wc,
                            Eg = a,
                            wg = d,
                            Ye = A;
                        this.Aa.beginPath();
                        this.Aa.moveTo(ie.x, ie.y);
                        Gd ? this.Aa.quadraticCurveTo(Ug.x, Ug.y, Dh.x, Dh.y) : this.Aa.lineTo(Dh.x, Dh.y);
                        this.Aa.stroke();
                        var Qg = 0,
                            oh = !1,
                            wi = this.oa.Aa.direction === "NONE" && this.oa.Dh === 0;
                        if (pe && Dg === this.oa.Aa.oa.length - 1) {
                            this.Aa.fillStyle = this.oa.Ia(Gf - (wi ? .35 : 0), Dg - (wi ? 1 : 0), wg, !1);
                            this.Aa.beginPath();
                            if (!this.oa.Aa.Ba[Dg] || this.oa.Ta && !hZ(this.settings, 2)) {
                                if (Gd) {
                                    Tg = Nh.x !== jd.x ? Nh.x < jd.x ? Math.PI * 3 / 2 : Math.PI / 2 : Nh.y < jd.y ? 0 : Math.PI;
                                    var Ai = Tg - (this.oa.Aa.Ua > 0 ? Tg : Nh.x !== vi.x ? Nh.x < vi.x ? Math.PI * 3 / 2 : Math.PI / 2 : Nh.y < vi.y ? 0 : Math.PI);
                                    Ai > Math.PI ? Ai -= 2 * Math.PI : Ai < -Math.PI && (Ai += 2 * Math.PI);
                                    Qg = Tg + Ai * Math.pow(Eg, .36)
                                } else if (Ye && Ye.Qsb) switch (Ye.L7a) {
                                    default:
                                    case "UP":
                                        Qg = 0;
                                        break;
                                    case "RIGHT":
                                        Qg = Math.PI / 2;
                                        break;
                                    case "DOWN":
                                        Qg = Math.PI;
                                        break;
                                    case "LEFT":
                                        Qg = Math.PI * 3 / 2
                                } else if (Nh.equals(vi)) {
                                    var Ti =
                                        this.oa.Aa.oa[Dg - 2].clone();
                                    Qg = Nh.x !== Ti.x ? Nh.x < Ti.x ? Math.PI / 2 : Math.PI * 3 / 2 : Nh.y < Ti.y ? Math.PI : 0
                                } else Qg = Nh.x !== vi.x ? Nh.x < vi.x ? Math.PI / 2 : Math.PI * 3 / 2 : Nh.y < vi.y ? Math.PI : 0;
                                this.Aa.arc(Dh.x, Dh.y, this.Aa.lineWidth / 2, Qg, Qg + Math.PI)
                            } else this.Aa.arc(Dh.x, Dh.y, this.Aa.lineWidth / 2, 0, 2 * Math.PI), oh = !0;
                            this.Aa.fill()
                        }
                        if (hZ(this.settings, 7)) {
                            var $i = new _.ql(md.width - ie.x, md.height - ie.y),
                                Sh = new _.ql(md.width - Dh.x, md.height - Dh.y),
                                Bi = this.Aa.createLinearGradient($i.x, $i.y, Sh.x, Sh.y);
                            Bi.addColorStop(0, this.oa.Ia(pf,
                                If, wg, !0));
                            Bi.addColorStop(1, this.oa.Ia(Gf, If + 1, wg, !0));
                            this.Aa.strokeStyle = Bi;
                            this.Aa.beginPath();
                            this.Aa.moveTo($i.x, $i.y);
                            if (Gd) {
                                var Th = new _.ql(md.width - Ug.x, md.height - Ug.y);
                                this.Aa.quadraticCurveTo(Th.x, Th.y, Sh.x, Sh.y)
                            } else this.Aa.lineTo(Sh.x, Sh.y);
                            this.Aa.stroke();
                            if (pe && Dg === this.oa.Aa.oa.length - 1) {
                                this.Aa.fillStyle = this.oa.Ia(Gf - (wi ? .35 : 0), Dg - (wi ? 1 : 0), wg, !0);
                                this.Aa.beginPath();
                                if (oh) this.Aa.arc(Sh.x, Sh.y, this.Aa.lineWidth / 2, 0, 2 * Math.PI);
                                else {
                                    var Hi = Qg + Math.PI;
                                    this.Aa.arc(Sh.x, Sh.y, this.Aa.lineWidth /
                                        2, Hi, Hi + Math.PI)
                                }
                                this.Aa.fill()
                            }
                        }
                    }
                }
                for (var ei = this.settings, hi = !hZ(ei, 5) && !hZ(ei, 2) && !hZ(ei, 3) && !hZ(ei, 11) && !hZ(ei, 13) && !hZ(ei, 17) && !dZ(this.settings), xi = _.n(this.oa.Aa.Sa), ej = xi.next(); !ej.done; ej = xi.next()) {
                    var wd = ej.value;
                    if (wd.Bga === g) {
                        var tj = new _.ql(na.x * (1 - a) + qa.x * a, na.y * (1 - a) + qa.y * a);
                        if (Kf) {
                            var oj = (1 - Math.abs(a - .5) / .5) * .5;
                            tj.x = tj.x * (1 - oj) + v.x * oj;
                            tj.y = tj.y * (1 - oj) + v.y * oj
                        }
                        var Oi = this.oa.Ia(Cc * a + Kc * (1 - a), Wc, this.oa.Aa.Ab ? d : 0, !1);
                        wd.kdb && (tj.x = c.width - tj.x, tj.y = c.height - tj.y, Oi = this.oa.Ia(Cc * a +
                            Kc * (1 - a), Wc, this.oa.Aa.Ab ? d : 0, !0));
                        wd.N6a.x = tj.x;
                        wd.N6a.y = tj.y;
                        if (hi) {
                            var Ij = Math.max(0, (1 - (wd.Bga + a * 2) / (wd.Qgb + 6)) * this.oa.oa.oa * .7);
                            wd.Bga + a * 2 < 1 && (Ij *= wd.Bga + a * 2);
                            this.oa.hm && (Ij = this.oa.Aa.Qa === 3 ? Ij * (.5 + (1 - d) / 2) : this.oa.Aa.Qa === 2 ? (1 - d) / 2 * Ij : 0);
                            Ij < Zd * .75 || (this.Aa.fillStyle = Oi, this.Aa.beginPath(), this.Aa.arc(tj.x, tj.y, Ij, 0, 2 * Math.PI), this.Aa.fill())
                        }
                    }
                }
            }
            hZ(this.settings, 11) && (this.Aa.globalAlpha = 1);
            if (hZ(this.settings, 4) || hZ(this.settings, 14)) this.oa.Aa.Nb = f;
            hZ(this.settings, 7) && QFu(this, new _.ql(this.oa.oa.Aa.width *
                this.oa.oa.oa - f.x, this.oa.oa.Aa.height * this.oa.oa.oa - f.y), d, !1, !0);
            QFu(this, f, d)
        };
        var QFu = function(a, b, c, d, e) {
                d = d === void 0 ? !1 : d;
                var f = (e = e === void 0 ? !1 : e) ? a.oa.Aa.Da : a.oa.Aa.Ca,
                    g = b.clone(),
                    h = b.clone();
                if (pZ(a.settings) && !d) {
                    d = !1;
                    var l = b.clone(),
                        m = e ? cZ(a.oa.Aa.direction) : a.oa.Aa.direction,
                        p = m === "LEFT" || m === "RIGHT";
                    m = m === "UP" || m === "DOWN";
                    l.x < a.oa.oa.oa / 2 && p ? (d = !0, l.x += a.oa.oa.Aa.width * a.oa.oa.oa) : l.x > a.oa.oa.Aa.width * a.oa.oa.oa - a.oa.oa.oa / 2 && p ? (d = !0, l.x -= a.oa.oa.Aa.width * a.oa.oa.oa) : l.y < a.oa.oa.oa / 2 && m ? (d = !0, l.y += a.oa.oa.Aa.height * a.oa.oa.oa) : l.y > a.oa.oa.Aa.height * a.oa.oa.oa - a.oa.oa.oa /
                        2 && m && (d = !0, l.y -= a.oa.oa.Aa.height * a.oa.oa.oa);
                    d && QFu(a, l, c, !0, e)
                }
                if ((d = dZ(a.settings)) || !a.oa.hm || a.oa.Aa.direction === "NONE" || a.oa.Ta || hZ(a.settings, 11) && !a.oa.Aa.Ba[0]) a.Aa.fillStyle = e ? a.oa.Ia(0, 0, c, !0) : a.oa.Ia(0, 0, c, !1), d ? a.Aa.fillRect(b.x - a.oa.oa.oa / 2, b.y - a.oa.oa.oa / 2, a.oa.oa.oa, a.oa.oa.oa) : (a.Aa.beginPath(), a.Aa.arc(b.x, b.y, hZ(a.settings, 3) ? a.oa.oa.oa * .4 : a.Aa.lineWidth / 2, 0, 2 * Math.PI), a.Aa.fill());
                l = a.oa.oa.oa / 30 * (a.oa.Aa.Ta ? c : 1);
                p = m = 0;
                switch (a.oa.Aa.Oa) {
                    case "UP":
                        p = -Math.PI / 2;
                        break;
                    case "DOWN":
                        p =
                            Math.PI / 2;
                        break;
                    case "LEFT":
                        p = Math.PI;
                        break;
                    case "NONE":
                    case "RIGHT":
                        p = 0
                }
                if (a.oa.Aa.Ta) m = p;
                else switch (a.oa.Aa.Fa !== "NONE" ? a.oa.Aa.Fa : a.oa.Aa.direction) {
                    case "UP":
                        m = -Math.PI / 2;
                        break;
                    case "DOWN":
                        m = Math.PI / 2;
                        break;
                    case "LEFT":
                        m = Math.PI;
                        break;
                    case "NONE":
                    case "RIGHT":
                        m = 0
                }
                Math.abs(m - p) >= Math.PI && (m > 0 ? p += Math.PI * 2 : m += Math.PI * 2);
                p = m * c + p * (1 - c);
                a.oa.Aa.direction !== a.oa.Aa.Oa && a.oa.Aa.Qa > 1 && (p = m);
                e && (p += Math.PI);
                d && (p = JDu(p));
                m = a.oa.Aa.Ia > 1 && !a.oa.Aa.Ab;
                var q = f.Qta && !a.oa.hm;
                if (a.oa.hm && !a.oa.Ab || q) q ? f = 0 :
                    a.oa.Aa.Qa === 3 ? f = Math.floor(c * 4 / 2) : a.oa.Aa.Qa === 2 ? f = Math.floor(2 + c * 4 / 2) : a.oa.Aa.Qa === 1 ? f = 4 + Math.floor(c * 16) : (f = (8 - a.oa.Aa.Ec + c) / 8, g = a.Fa.getLength() - 20, f = Math.floor(20 + g * f % g)), g = new _.ql((q ? -6.25 : -5) * a.Fa.getWidth() / 8, -a.Fa.getHeight() / 2), h = q ? .875 : 1, d ? (h *= q ? .5 : .4, g.x += q ? -1 : 4) : h *= .5, m || (e ? a.Sa : a.Fa).render(f, b, g, p, l * h), a.oa.Aa.Ia > 0 && (a.oa.Aa.Ia === 1 ? a.Aa.globalAlpha = 1 - c : a.oa.Aa.Ab && (a.Aa.globalAlpha = c), a.Xa.render(f, b, g, p, l * h), a.Aa.globalAlpha = 1);
                else {
                    var v = a.oa.oa.oa / 2,
                        z = 4 * Math.PI / 5;
                    g.x += Math.cos(p +
                        z) * v;
                    g.y += Math.sin(p + z) * v;
                    h.x += Math.cos(p - z) * v;
                    h.y += Math.sin(p - z) * v;
                    v = f.jwa > 0 ? Math.floor((4 - f.jwa + c) / 4 * a.Ba.getLength()) % a.Ba.getLength() : 0;
                    z = e ? Math.PI : 0;
                    if (a.oa.Ab && !a.oa.Jc) z = Math.random() * 2 * Math.PI;
                    else if (a.oa.Aa.Ia > 1) z = p - Math.PI / 2;
                    else if (a.oa.Aa.direction !== "NONE") {
                        var A = RFu(a.oa.Aa, a.oa.Ba.oa, e, wEu(a.settings));
                        a.oa.Ba.oa.length > 0 && (z = SFu(a, A, b));
                        if (a.oa.Fa.keys.length > 0) {
                            var E = RFu(a.oa.Aa, a.oa.Fa.keys, e, hZ(a.settings, 7));
                            if (_.ul(a.oa.Aa.oa[0], E) < _.ul(a.oa.Aa.oa[0], A) || a.oa.Ba.oa.length ===
                                0) z = SFu(a, E, b)
                        }
                        a.oa.Ca.Aa.size > 0 && (E = RFu(a.oa.Aa, a.oa.Ca.Aa, e, hZ(a.settings, 7)), _.ul(a.oa.Aa.oa[0], E) < _.ul(a.oa.Aa.oa[0], A) || a.oa.Ba.oa.length === 0) && (z = SFu(a, E, b))
                    }
                    Math.abs(z - f.E$) >= Math.PI && (z = z > 0 ? z - Math.PI * 2 : z + Math.PI * 2);
                    f.E$ = .9 * f.E$ + .1 * z;
                    f.E$ > Math.PI ? f.E$ -= 2 * Math.PI : f.E$ < -Math.PI && (f.E$ += 2 * Math.PI);
                    z = new _.ql(-a.Ba.getWidth() / 2, -a.Ba.getHeight() / 2);
                    var L = f.E$;
                    a.oa.Aa.Ia > 0 && (A = 2 * p - f.E$, a.oa.Aa.Ia > 1 ? L = A : (A -= L, A > Math.PI ? A -= 2 * Math.PI : A < -Math.PI && (A += 2 * Math.PI), L += A * (1 - c)));
                    A = d ? .3 : kEu;
                    E = d ? JDu(f.E$) :
                        f.E$;
                    L = d ? JDu(L) : L;
                    m || ((e ? a.Oa : a.Ba).render(v, g, z, E, l * A), (e ? a.Oa : a.Ba).render(v, h, z, L, l * A));
                    (f.T5 || a.oa.Aa.Ia > 0) && !q ? f.ZX = f.ZX >= 10 ? 10 : f.ZX + .6 : f.ZX !== 0 && (f.ZX < 10 && (f.ZX = 10), f.ZX += .3, f.ZX >= a.Da.getLength() && (f.ZX = 0));
                    var O = new _.ql(-a.Da.getWidth() / 4, -a.Da.getHeight() / 2);
                    O.x += d ? 15 : 0;
                    var U = d ? .25 : 1;
                    m || (e ? a.Ta : a.Da).render(Math.floor(f.ZX), b, O, p, l * U);
                    a.oa.Aa.Ia > 0 && (a.oa.Aa.Ia === 1 ? a.Aa.globalAlpha = 1 - c : a.oa.Aa.Ab && (a.Aa.globalAlpha = c), a.Qa.render(v, g, z, E, l * A), a.Qa.render(v, h, z, L, l * A), a.rb.render(Math.floor(f.ZX),
                        b, O, p, l * U), a.Aa.globalAlpha = 1);
                    !f.T5 && f.ZX === 0 && f.fJa > 0 && !q && (c = Math.floor((7 - f.fJa + c) / 7 * a.Ca.getLength()) % a.Ca.getLength(), f = new _.ql(a.Ca.getWidth() / 7, -a.Ca.getHeight() / 2), f.x += d ? 4 : 0, (e ? a.Ua : a.Ca).render(c, b, f, p, l))
                }
            },
            SFu = function(a, b, c) {
                return Math.atan2(b.y * a.oa.oa.oa + a.oa.oa.oa / 2 - c.y, b.x * a.oa.oa.oa + a.oa.oa.oa / 2 - c.x)
            },
            UFu = function(a, b, c, d) {
                TFu(a, b, c, d);
                if (pZ(a.settings)) {
                    var e = a.oa.oa.Aa.width * a.oa.oa.oa,
                        f = a.oa.oa.Aa.height * a.oa.oa.oa,
                        g = b + d > e,
                        h = b - d < 0,
                        l = c - d < 0;
                    c + d > f && (TFu(a, b, c - f, d), g && TFu(a, b -
                        e, c - f, d), h && TFu(a, b + e, c - f, d));
                    g && TFu(a, b - e, c, d);
                    h && TFu(a, b + e, c, d);
                    l && (TFu(a, b, c + f, d), g && TFu(a, b - e, c + f, d), h && TFu(a, b + e, c + f, d))
                }
            },
            TFu = function(a, b, c, d) {
                MDu(b, c, d, a.Ab, a.Eb.nF(), a.settings)
            };
        var VFu = function(a, b, c, d) {
            this.Aa = a;
            this.settings = b;
            this.oa = c;
            this.Ba = d;
            this.Ca = new fZ(this.settings, "snake_arcade/cracks.png", 4, this.oa, "snake_arcade/pixel/px_cracks.png")
        };
        VFu.prototype.render = function(a) {
            for (var b = _.n(this.Aa.Ua.Aa.values()), c = b.next(); !c.done; c = b.next()) {
                var d = a;
                c = c.value;
                if (c.nO) {
                    var e = new _.ql(c.pos.x * this.Aa.oa.oa + this.Aa.oa.oa / 2, c.pos.y * this.Aa.oa.oa + this.Aa.oa.oa / 2),
                        f = c.vp ? d : 1;
                    hZ(this.settings, 11) && (this.oa.globalAlpha = tEu(this.Aa, d, c.Qi, {
                        zHa: (c.pos.x + c.pos.y) % 2 === 0 ? .365 : .265,
                        E7: !1
                    }));
                    MFu(this, f, e, c.nO.angle, c.nO);
                    this.oa.globalAlpha = 1
                }
            }
        };
        var MFu = function(a, b, c, d, e) {
            a.oa.save();
            a.oa.translate(c.x, c.y);
            a.oa.rotate(d);
            a.oa.scale(b, b);
            a.oa.fillStyle = e.color;
            b = a.Aa.oa.oa;
            c = b / 2;
            switch (e.type) {
                default:
                case 1:
                    a.oa.fillRect(-c, -c, b, b);
                    break;
                case 2:
                    a.oa.beginPath();
                    a.oa.moveTo(-c, c);
                    a.oa.lineTo(-c, 0);
                    a.oa.quadraticCurveTo(-c, -c, 0, -c);
                    a.oa.lineTo(c, -c);
                    a.oa.lineTo(c, c);
                    a.oa.lineTo(-c, c);
                    a.oa.fill();
                    break;
                case 0:
                    a.oa.beginPath(), a.oa.moveTo(-c, c), a.oa.lineTo(-c, 0), a.oa.arc(0, 0, c, Math.PI, 0), a.oa.moveTo(c, 0), a.oa.lineTo(c, c), a.oa.lineTo(-c, c),
                        a.oa.fill()
            }
            e.p7a && (c = a.oa.globalAlpha, a.oa.globalAlpha = c * .25, d = dZ(a.settings) ? 160 : 128, a.oa.rotate(e.VDc), a.oa.drawImage(a.Ca.nF(), e.WDc * d, 0, d, d, -b / 2, -b / 2, b, b), a.oa.globalAlpha = c);
            a.oa.restore()
        };
        var XFu = function(a, b, c) {
                this.oa = a;
                this.settings = b;
                this.canvas = c;
                this.Jb = new _.wl(0, 0);
                this.context = c.getContext("2d");
                this.Aa = WFu();
                this.Ca = WFu();
                this.Ua = WFu();
                this.Ia = WFu();
                this.Ba = WFu();
                this.Ba.fillStyle = "#000";
                this.Da = WFu();
                this.Xa = new fZ(this.settings, "snake_arcade/pixel/px_circles.png", 8, this.Ba, "snake_arcade/pixel/px_circles.png");
                this.rb = new aFu(this.oa, this.settings, this.context, this.Ua);
                this.Oa = new OFu(this.oa, this.settings, this.Aa, this.Ba, this.Xa);
                this.Ta = new sEu(this.oa, this.settings, this.Aa,
                    this.Ba, this.Xa);
                this.Sa = new KFu(this.oa, this.settings, this.Aa, this.Ba, this.Xa);
                this.Mb = new NFu(this.oa, this.settings, this.Aa, this.Ca, this.Ba);
                this.Nb = new DFu(this.oa, this.settings, this.Aa, this.Ba, this.Xa);
                this.Fa = new iFu(this.oa, this.settings, this.context, this.Aa, this.Ca, this.Ba);
                this.Qa = new FFu(this.oa, this.settings, this.Aa, this.Ca, this.Ba);
                this.Ab = new VFu(this.oa, this.settings, this.Aa, this.Ba);
                this.Eb = new XEu(this.oa, this.settings, this.Ca, this.Ba);
                this.Sb = new LFu(this.oa, this.settings, this.Aa,
                    this.Ta, this.Sa, this.Fa, this.Qa, this.Ab)
            },
            YFu = function(a) {
                return [a.Oa.Ba, a.Oa.Da, a.Ta.Ba[0]]
            },
            WFu = function() {
                return document.createElement("canvas").getContext("2d")
            };
        XFu.prototype.nF = function() {
            return this.canvas
        };
        var ZFu = function(a) {
            return new _.wl(a.Aa.canvas.width - (hZ(a.settings, 4) ? a.oa.oa.oa * (4 - a.oa.oa.Ca.x) : 0), a.Aa.canvas.height - (hZ(a.settings, 4) ? a.oa.oa.oa * (4 - a.oa.oa.Ca.y) : 0))
        };
        XFu.prototype.render = function(a, b) {
            this.oa.hm && this.oa.Ab && (a = 0);
            this.Aa.clearRect(0, 0, this.Aa.canvas.width, this.Aa.canvas.height);
            this.Ca.clearRect(0, 0, this.Ca.canvas.width, this.Ca.canvas.height);
            this.Ba.clearRect(0, 0, this.Ba.canvas.width, this.Ba.canvas.height);
            this.context.fillStyle = iZ(this.settings, this.settings.oa, 3);
            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            hZ(this.settings, 4) && (this.Aa.save(), this.Aa.translate(this.oa.oa.oa * 2, this.oa.oa.oa * 2), this.Mb.render(a));
            this.Oa.render(a, b, ZFu(this));
            for (var c = _.n(this.oa.Ba.oa), d = c.next(); !d.done; d = c.next()) this.Ta.render(a, d.value);
            this.Nb.render(a);
            for (var e = this.Fa, f = a, g = _.n(e.oa.Ca.Aa), h = g.next(); !h.done; h = g.next()) {
                var l = e,
                    m = f,
                    p = h.value,
                    q = p.pos.clone();
                if (p.prev) {
                    var v = p.prev.clone();
                    q.x = q.x * m + v.x * (1 - m);
                    q.y = q.y * m + v.y * (1 - m)
                }
                q.x = q.x * l.oa.oa.oa + l.oa.oa.oa / 2;
                q.y = q.y * l.oa.oa.oa + l.oa.oa.oa / 2;
                var z = l.oa.oa.oa * (p.vp && !l.oa.hm ? m : 1);
                hZ(l.settings, 11) && (l.Ba.globalAlpha = tEu(l.oa, m, p.Qi, {
                    zHa: (p.pos.x + p.pos.y) % 2 === 0 ? .365 : .265,
                    E7: !1
                }));
                jFu(l, p, z, q);
                if (hZ(l.settings, 4) && p.prev !== null) {
                    var A = l.oa.oa.oa * l.oa.oa.Aa.width,
                        E = l.oa.oa.oa * l.oa.oa.Aa.height;
                    p.pos.x === 0 && p.prev.x < 0 ? jFu(l, p, z, new _.ql(q.x + A, q.y)) : p.pos.x === l.oa.oa.Aa.width - 1 && p.prev.x > l.oa.oa.Aa.width - 1 && jFu(l, p, z, new _.ql(q.x - A, q.y));
                    p.pos.y === 0 && p.prev.y < 0 ? jFu(l, p, z, new _.ql(q.x, q.y + E)) : p.pos.y === l.oa.oa.Aa.height - 1 && p.prev.y > l.oa.oa.Aa.height - 1 && jFu(l, p, z, new _.ql(q.x, q.y - E))
                }
                l.Ba.globalAlpha = 1
            }
            hZ(this.settings, 4) || $Fu(this);
            for (var L = this.Qa, O = a, U = _.n(L.oa.Qa.Aa),
                    X = U.next(); !X.done; X = U.next()) {
                var ba = L,
                    na = O,
                    qa = X.value,
                    wa = new _.ql(qa.pos.x * ba.oa.oa.oa, qa.pos.y * ba.oa.oa.oa);
                hZ(ba.settings, 11) && (ba.Ba.globalAlpha = tEu(ba.oa, na, qa.Qi, {
                    zHa: .3,
                    E7: !1
                }));
                var ra = (qa.bI + na) / 2,
                    ta = Math.min(ba.Ca.getLength() - 1, Math.floor(ra * ba.Ca.getLength())),
                    Za = ba.oa.oa.oa / ba.Ca.getWidth();
                ba.Ca.render(ta, wa, null, 0, Za);
                ba.Ba.globalAlpha = 1
            }
            for (var Xa = _.n(L.oa.Qa.Ba), nb = Xa.next(); !nb.done; nb = Xa.next()) {
                var db = nb.value;
                if (db.pFg) {
                    var Lb = L;
                    Lb.Ba.globalAlpha = (db.ticks - O) / 3 * .8;
                    Lb.Ba.fillStyle =
                        db.color;
                    var Zb = Lb.oa.oa.oa * 3;
                    Lb.Ba.fillRect(db.pos.x - Zb / 2, db.pos.y - Zb / 2, Zb, Zb);
                    Lb.Ba.globalAlpha = 1
                }
            }!hZ(this.settings, 4) && hZ(this.settings, 12) && JFu(this.Qa, a);
            !hZ(this.settings, 4) && hZ(this.settings, 9) && mFu(this.Fa);
            !hZ(this.settings, 4) && hZ(this.settings, 16) && this.Eb.render(a);
            hZ(this.settings, 4) || this.Mb.render(a);
            this.Sa.render(a);
            this.Ab.render(a);
            hZ(this.settings, 13);
            var Bb = this.Oa,
                Nb = a,
                Wb = ZFu(this);
            if (Bb.oa.Aa.Jc > 0) {
                var Bc = Bb.oa.oa.oa / 30,
                    Ac = Math.floor((6 - Bb.oa.Aa.Jc + Nb) / 6 * Bb.Ia.getLength()) %
                    Bb.Ia.getLength(),
                    hd = new _.ql(Bb.oa.Aa.Eb.x * Bb.oa.oa.oa + Bb.oa.oa.oa / 2, Bb.oa.Aa.Eb.y * Bb.oa.oa.oa + Bb.oa.oa.oa / 2),
                    Cc = new _.ql(-Bb.Ia.getWidth(), -Bb.Ia.getHeight() / 2),
                    Kc = Bc * (dZ(Bb.settings) ? .8 : 1);
                Bb.Ia.render(Ac, hd, Cc, Bb.oa.Aa.uc, Kc);
                hZ(Bb.settings, 7) && Bb.Ia.render(Ac, new _.ql(Wb.width - hd.x, Wb.height - hd.y), Cc, Bb.oa.Aa.uc + Math.PI, Kc)
            }
            this.Sb.render();
            if (hZ(this.settings, 14)) {
                var Wc = a;
                hZ(this.settings, 4) && (this.Ba.save(), this.Ba.translate(this.oa.oa.oa * 2, this.oa.oa.oa * 2));
                var Cd = this.Oa,
                    De = Cd.oa.hm ? 1 : Wc;
                UFu(Cd, Cd.oa.Aa.Nb.x, Cd.oa.Aa.Nb.y, Math.max(2, Cd.oa.Aa.Ca.light - De * aGu(Cd.oa.Aa.Ca.light)) * Cd.oa.oa.oa);
                hZ(Cd.settings, 7) && UFu(Cd, Cd.oa.oa.Aa.width * Cd.oa.oa.oa - Cd.oa.Aa.Nb.x, Cd.oa.oa.Aa.height * Cd.oa.oa.oa - Cd.oa.Aa.Nb.y, Math.max(2, Cd.oa.Aa.Da.light - De * aGu(Cd.oa.Aa.Da.light)) * Cd.oa.oa.oa);
                hZ(Cd.settings, 5) && (TFu(Cd, Cd.oa.Aa.Xc.x, Cd.oa.Aa.Xc.y, .75 * Cd.oa.oa.oa), hZ(Cd.settings, 7) && TFu(Cd, Cd.oa.oa.Aa.width * Cd.oa.oa.oa - Cd.oa.Aa.Xc.x, Cd.oa.oa.Aa.height * Cd.oa.oa.oa - Cd.oa.Aa.Xc.y, .75 * Cd.oa.oa.oa));
                if (!hZ(Cd.settings,
                        13))
                    for (var Zd = _.n(Cd.oa.Aa.Sa), fe = Zd.next(); !fe.done; fe = Zd.next()) {
                        var Ze = fe.value;
                        TFu(Cd, Ze.N6a.x, Ze.N6a.y, Cd.oa.oa.oa * .8 * (Math.pow(Math.max(0, 1 - (Ze.Bga + De * 2) / (Ze.Qgb - (Ze.Qgb % 2 === 0 ? 0 : 1))) - 1, 3) + 1) * (Cd.oa.hm && !Cd.oa.Ab ? Cd.oa.Aa.Qa === 3 ? 1 - Wc : 0 : 1))
                    }
                for (var Ed = this.Ta, kg = Ed.Aa.hm ? 1 : Wc, Mf = _.n(Ed.Aa.Ba.oa), Kf = Mf.next(); !Kf.done; Kf = Mf.next()) {
                    var Le = Kf.value,
                        zf = Math.max(0, Le.light - kg * .1) * Ed.Aa.oa.oa * (Le.vp ? kg : 1),
                        xe = Le.pos.clone();
                    !gZ(Ed.settings) || Le.vp || Ed.Aa.hm || (xe.x += (Le.IH.x > 0 ? Le.Zd.x : 0) * kg, xe.y += (Le.IH.y >
                        0 ? Le.Zd.y : 0) * kg);
                    MDu(xe.x * Ed.Aa.oa.oa + Ed.Aa.oa.oa / 2, xe.y * Ed.Aa.oa.oa + Ed.Aa.oa.oa / 2, zf, Ed.Ca, Ed.Da.nF(), Ed.settings);
                    if (hZ(Ed.settings, 7) && wEu(Ed.settings)) {
                        var Sf = mZ(Ed.Aa.oa, xe);
                        MDu(Sf.x * Ed.Aa.oa.oa + Ed.Aa.oa.oa / 2, Sf.y * Ed.Aa.oa.oa + Ed.Aa.oa.oa / 2, zf, Ed.Ca, Ed.Da.nF(), Ed.settings)
                    }
                }
                for (var sf = this.Sa, zg = _.n(sf.oa.Da.Ca.values()), Ee = zg.next(); !Ee.done; Ee = zg.next()) {
                    var ze = Ee.value;
                    if (!(ze.HQ || ze.nO || ze.qx)) {
                        var tf = ze.pos.x * sf.oa.oa.oa + sf.oa.oa.oa / 2,
                            of = ze.pos.y * sf.oa.oa.oa + sf.oa.oa.oa / 2,
                            hh = sf.oa.oa.oa *
                            (ze.vp ? Wc : 1);
                        if (dZ(sf.settings)) {
                            var vg = 320 / 120 * hh * 1.4;
                            sf.Ba.drawImage(sf.Da.nF(), 0, 2560, 320, 320, tf - vg, of - vg, vg * 2, vg * 2)
                        } else sf.Ba.save(), sf.Ba.translate(tf, of), sf.Ba.rotate(Math.PI / 4), sf.Ba.fillRect(-hh, -hh, hh * 2, hh * 2), sf.Ba.restore()
                    }
                }
                for (var Af = this.Nb, Wd = Af.oa.hm ? 0 : Wc, Pg = dZ(Af.settings), Yc = _.n(Af.oa.Fa.keys), Hg = Yc.next(); !Hg.done; Hg = Yc.next()) {
                    var ag = Hg.value,
                        Yf = (ag.bI + Wd) / (Pg ? 16 : 6),
                        nf = Yf === 0 ? 0 : IDu(Yf);
                    Pg && (nf = nf >= .75 ? .6 : 0);
                    var ed = Af.oa.oa.oa * (ag.vp ? Wc : 1) * (1 + nf * .25);
                    MDu(ag.pos.x * Af.oa.oa.oa + Af.oa.oa.oa /
                        2, ag.pos.y * Af.oa.oa.oa + Af.oa.oa.oa / 2, ed, Af.Ba, Af.Ca.nF(), Af.settings);
                    if (hZ(Af.settings, 7)) {
                        var Gi = mZ(Af.oa.oa, ag.pos);
                        MDu(Gi.x * Af.oa.oa.oa + Af.oa.oa.oa / 2, Gi.y * Af.oa.oa.oa + Af.oa.oa.oa / 2, ed, Af.Ba, Af.Ca.nF(), Af.settings)
                    }
                }
                for (var Tg = this.Fa, Dg = _.n(Tg.oa.Ca.Aa), vi = Dg.next(); !vi.done; vi = Dg.next()) {
                    var Ug = vi.value,
                        Nh = Ug.prev ? new _.ql(Ug.pos.x * Wc + Ug.prev.x * (1 - Wc), Ug.pos.y * Wc + Ug.prev.y * (1 - Wc)) : Ug.pos,
                        ie = Tg.oa.oa.oa * (Ug.vp ? Wc : 1);
                    Tg.Ca.fillRect(Nh.x * Tg.oa.oa.oa + Tg.oa.oa.oa / 2 - ie, Nh.y * Tg.oa.oa.oa + Tg.oa.oa.oa /
                        2 - ie, ie * 2, ie * 2);
                    if (hZ(Tg.settings, 7)) {
                        var Dh = mZ(Tg.oa.oa, Nh);
                        Tg.Ca.fillRect(Dh.x * Tg.oa.oa.oa + Tg.oa.oa.oa / 2 - ie, Dh.y * Tg.oa.oa.oa + Tg.oa.oa.oa / 2 - ie, ie * 2, ie * 2)
                    }
                }
                for (var jd = _.n(Tg.oa.Ca.kX), md = jd.next(); !md.done; md = jd.next()) {
                    var Gd = md.value,
                        pe = Tg.oa.oa.oa / 2;
                    Tg.Ca.fillRect(Gd.x * Tg.oa.oa.oa + Tg.oa.oa.oa / 2 - pe, Gd.y * Tg.oa.oa.oa + Tg.oa.oa.oa / 2 - pe, pe * 2, pe * 2)
                }
                for (var pf = this.Mb, Gf = _.n(pf.oa.Sa.Aa), If = Gf.next(); !If.done; If = Gf.next()) {
                    var Eg = If.value,
                        wg = pf.oa.oa.oa * (Eg.sHa ? 1 - Wc : 1),
                        Ye = Eg.pos.x * pf.oa.oa.oa + pf.oa.oa.oa /
                        2,
                        Qg = Eg.pos.y * pf.oa.oa.oa + pf.oa.oa.oa / 2;
                    dZ(pf.settings) ? pf.Aa.fillRect(Ye - wg, Qg - wg, wg * 2, wg * 2) : (pf.Aa.beginPath(), pf.Aa.arc(Ye, Qg, wg, 0, Math.PI * 2), pf.Aa.fill())
                }
                for (var oh = this.Qa, wi = oh.oa.oa.oa * 3, Ai = _.n(oh.oa.Qa.Aa), Ti = Ai.next(); !Ti.done; Ti = Ai.next()) {
                    var $i = Ti.value,
                        Sh = wi * Math.min(1, ($i.bI + Wc) / 2);
                    oh.Da.fillRect($i.pos.x * oh.oa.oa.oa + oh.oa.oa.oa / 2 - Sh / 2, $i.pos.y * oh.oa.oa.oa + oh.oa.oa.oa / 2 - Sh / 2, Sh, Sh)
                }
                for (var Bi = _.n(oh.oa.Qa.Ba), Th = Bi.next(); !Th.done; Th = Bi.next()) {
                    var Hi = Th.value,
                        ei = Math.max(0, (Hi.ticks -
                            Wc) / 3),
                        hi = wi * (1 + IDu(1 - ei)) * ei;
                    oh.Da.fillRect(Hi.pos.x - hi / 2, Hi.pos.y - hi / 2, hi, hi)
                }
                for (var xi = this.Ab, ej = _.n(xi.Aa.Ua.Aa.values()), wd = ej.next(); !wd.done; wd = ej.next()) {
                    var tj = wd.value,
                        oj = xi.Aa.oa.oa * (tj.vp ? Wc : 1);
                    xi.Ba.fillRect(tj.pos.x * xi.Aa.oa.oa + xi.Aa.oa.oa / 2 - oj, tj.pos.y * xi.Aa.oa.oa + xi.Aa.oa.oa / 2 - oj, oj * 2, oj * 2)
                }
                for (var Oi = this.Eb, Ij = Oi.Aa.oa.oa, bk = 0; bk < Oi.Aa.oa.Aa.height; bk++)
                    for (var hk = 0; hk < Oi.Aa.oa.Aa.width; hk++) Oi.Aa.Oa.oa[bk][hk].direction !== "NONE" && Oi.Ba.fillRect(hk * Ij, bk * Ij, Ij, Ij);
                hZ(this.settings,
                    4) ? this.Ba.restore() : (this.Aa.globalCompositeOperation = "destination-in", this.Aa.drawImage(this.Ba.canvas, 0, 0), this.Aa.globalCompositeOperation = "source-over", this.Ca.globalCompositeOperation = "destination-in", this.Ca.drawImage(this.Ba.canvas, 0, 0), this.Ca.globalCompositeOperation = "source-over", this.Ba.globalCompositeOperation = "source-out", this.Ba.fillRect(0, 0, this.Ba.canvas.width, this.Ba.canvas.height), this.Ba.globalCompositeOperation = "source-over", this.Ca.globalCompositeOperation = "source-over", this.Ca.globalAlpha =
                    .5, this.Ca.drawImage(this.Ba.canvas, 0, 0), this.Ca.globalAlpha = 1)
            }
            var Ak = 0,
                Wj = 0;
            this.oa.Aa.Qa > 1 && (Ak = Math.random() * 8 - 4, Wj = Math.random() * 8 - 4);
            if (hZ(this.settings, 4)) {
                var ik = Ak,
                    rl = Wj,
                    fl = a,
                    Oj = this.rb;
                Oj.context.fillStyle = iZ(Oj.settings, Oj.settings.oa, 0);
                Oj.context.fillRect(0, 0, Oj.context.canvas.width, Oj.context.canvas.height);
                Oj.context.fillStyle = iZ(Oj.settings, Oj.settings.oa, 1);
                var pj = new _.ql(Oj.context.canvas.width / 2 % Oj.oa.oa.oa, Oj.context.canvas.height / 2 % Oj.oa.oa.oa),
                    Pi = !1;
                fl !== 0 || Oj.oa.hm || Oj.oa.Aa.direction !==
                    "LEFT" && Oj.oa.Aa.direction !== "UP" ? !Oj.oa.Sb || Oj.oa.Aa.direction !== "RIGHT" && Oj.oa.Aa.direction !== "DOWN" || (Pi = !0) : Pi = !0;
                for (var sl = new _.ql(Oj.oa.Aa.Nb.x % Oj.oa.oa.oa, Oj.oa.Aa.Nb.y % Oj.oa.oa.oa), pm = -1; pm < Oj.oa.oa.Aa.width + 3; pm++)
                    for (var km = -1; km < Oj.oa.oa.Aa.height + 3; km++) Math.abs((pm + km) % 2) !== (Oj.oa.oa.Fa + (Pi ? 1 : 0)) % 2 && Oj.context.fillRect(pm * Oj.oa.oa.oa - sl.x + pj.x, km * Oj.oa.oa.oa - sl.y + pj.y, Oj.oa.oa.oa, Oj.oa.oa.oa);
                this.Aa.restore();
                this.Da.clearRect(0, 0, this.Da.canvas.width, this.Da.canvas.height);
                this.Da.drawImage(this.Aa.canvas,
                    0, 0);
                this.Aa.clearRect(0, 0, this.Aa.canvas.width, this.Aa.canvas.height);
                var yh = Math.round(this.Aa.canvas.width / 2 - this.oa.Aa.Nb.x - this.oa.oa.oa * 2),
                    Yk = Math.round(this.Aa.canvas.height / 2 - this.oa.Aa.Nb.y - this.oa.oa.oa * 2),
                    Sk = 2 * this.oa.oa.oa,
                    ll = yh >= -Sk,
                    Ym = yh <= Sk,
                    vk = Yk >= -Sk,
                    Tl = Yk <= Sk,
                    Jk = this.oa.oa.Aa.width * this.oa.oa.oa,
                    ck = this.oa.oa.Aa.height * this.oa.oa.oa;
                vk && (ll && this.Aa.drawImage(this.Da.canvas, yh - Jk, Yk - ck), Ym && this.Aa.drawImage(this.Da.canvas, yh + Jk, Yk - ck), this.Aa.drawImage(this.Da.canvas, yh, Yk - ck));
                ll && this.Aa.drawImage(this.Da.canvas, yh - Jk, Yk);
                Ym && this.Aa.drawImage(this.Da.canvas, yh + Jk, Yk);
                Tl && (ll && this.Aa.drawImage(this.Da.canvas, yh - Jk, Yk + ck), Ym && this.Aa.drawImage(this.Da.canvas, yh + Jk, Yk + ck), this.Aa.drawImage(this.Da.canvas, yh, Yk + ck));
                this.Aa.drawImage(this.Da.canvas, yh, Yk);
                $Fu(this);
                hZ(this.settings, 9) && (this.Ca.save(), this.Ca.translate(yh + this.oa.oa.oa * 2, Yk + this.oa.oa.oa * 2), mFu(this.Fa), this.Ca.restore());
                this.Ca.save();
                this.Ca.translate(yh + this.oa.oa.oa * 2, Yk + this.oa.oa.oa * 2);
                hZ(this.settings,
                    12) && JFu(this.Qa, fl);
                hZ(this.settings, 16) && this.Eb.render(fl);
                this.Ca.restore();
                var qo = (this.Aa.canvas.width - this.context.canvas.width) / 2,
                    Tn = (this.Aa.canvas.height - this.context.canvas.height) / 2;
                hZ(this.settings, 14) && (this.Da.clearRect(0, 0, this.Da.canvas.width, this.Da.canvas.height), vk && (ll && this.Da.drawImage(this.Ba.canvas, yh - Jk, Yk - ck), Ym && this.Da.drawImage(this.Ba.canvas, yh + Jk, Yk - ck), this.Da.drawImage(this.Ba.canvas, yh, Yk - ck)), ll && this.Da.drawImage(this.Ba.canvas, yh - Jk, Yk), Ym && this.Da.drawImage(this.Ba.canvas,
                    yh + Jk, Yk), Tl && (ll && this.Da.drawImage(this.Ba.canvas, yh - Jk, Yk + ck), Ym && this.Da.drawImage(this.Ba.canvas, yh + Jk, Yk + ck), this.Da.drawImage(this.Ba.canvas, yh, Yk + ck)), this.Da.drawImage(this.Ba.canvas, yh, Yk), this.Ca.globalCompositeOperation = "destination-in", this.Ca.drawImage(this.Da.canvas, 0, 0), this.Ca.globalCompositeOperation = "source-over", this.Aa.globalCompositeOperation = "destination-in", this.Aa.drawImage(this.Da.canvas, 0, 0), this.Aa.globalCompositeOperation = "source-over", this.Ba.fillRect(0, 0, this.Ba.canvas.width,
                    this.Ba.canvas.height), this.Ba.globalCompositeOperation = "destination-out", this.Ba.drawImage(this.Da.canvas, 0, 0), this.Ba.globalCompositeOperation = "source-over", this.context.globalCompositeOperation = "source-over", this.context.globalAlpha = .5, this.context.drawImage(this.Ba.canvas, ik - qo, rl - Tn), this.context.globalAlpha = 1);
                this.context.drawImage(this.Ca.canvas, ik - qo, rl - Tn);
                this.context.drawImage(this.Aa.canvas, ik - qo, rl - Tn)
            } else {
                var cm = Math.round((this.context.canvas.width - this.Ia.canvas.width) / 2),
                    Un = Math.round((this.context.canvas.height -
                        this.Ia.canvas.height) / 2);
                this.Ia.drawImage(this.Ua.canvas, Ak, Wj);
                this.Ia.drawImage(this.Ca.canvas, Ak, Wj);
                this.Ia.drawImage(this.Aa.canvas, Ak, Wj);
                if (hZ(this.settings, 9))
                    for (var qm = this.Fa, eo = a, Bm = new _.ql(cm + Ak, Un + Wj), pp = _.n(qm.oa.Ca.Aa), El = pp.next(); !El.done; El = pp.next()) {
                        var Km = El.value,
                            wn = Km.prev !== null || qm.oa.Ta ? eo : 1;
                        Km.Qi && (Km.pos.x === 0 ? kFu(qm, new _.ql(-1, Km.pos.y), Bm, wn) : Km.pos.x === qm.oa.oa.Aa.width - 1 && kFu(qm, new _.ql(qm.oa.oa.Aa.width, Km.pos.y), Bm, wn), Km.pos.y === 0 ? kFu(qm, new _.ql(Km.pos.x,
                            -1), Bm, wn) : Km.pos.y === qm.oa.oa.Aa.height - 1 && kFu(qm, new _.ql(Km.pos.x, qm.oa.oa.Aa.height), Bm, wn));
                        if (Km.prev !== null || !Km.Qi && qm.oa.Ta) {
                            var ep = Km.prev !== null ? Km.prev : Km.pos;
                            ep.x === 0 ? kFu(qm, new _.ql(-1, ep.y), Bm, 1 - eo) : ep.x === qm.oa.oa.Aa.width - 1 && kFu(qm, new _.ql(qm.oa.oa.Aa.width, ep.y), Bm, 1 - eo);
                            ep.y === 0 ? kFu(qm, new _.ql(ep.x, -1), Bm, 1 - eo) : ep.y === qm.oa.oa.Aa.height - 1 && kFu(qm, new _.ql(ep.x, qm.oa.oa.Aa.height), Bm, 1 - eo)
                        }
                    }
                this.context.drawImage(this.Ia.canvas, cm, Un)
            }
        };
        var $Fu = function(a) {
            a.Ca.globalCompositeOperation = "destination-atop";
            a.Ca.fillStyle = iZ(a.settings, a.settings.oa, 2);
            a.Ca.fillRect(0, 0, a.Ca.canvas.width, a.Ca.canvas.height);
            a.Ca.drawImage(a.Aa.canvas, 0, a.oa.oa.oa / 6);
            a.Ca.globalCompositeOperation = "source-over"
        };
        var bGu = function(a, b, c) {
                this.qf = a;
                this.isMobile = b;
                this.Ec = c;
                this.Sb = this.Oa = 0;
                this.Kl = "";
                this.Jb = this.Mb = 0;
                this.Nc = "";
                this.Ia = this.Ca = this.Zb = this.Xc = this.Xa = this.Da = this.Sa = this.Nb = this.Qa = this.Aa = 0;
                this.Kw = !1;
                this.Ba = this.Ua = this.uc = this.oa = this.wc = this.kd = 0;
                this.Jd = !1;
                this.Ab = void 0;
                this.FLa = new Set;
                this.rb = new Map;
                this.Qd = new Map;
                this.Ta = this.Fa = !1;
                this.Jc = "";
                this.Xd = new Set;
                this.Eb = null;
                a = _.Bl("DIV", "vuOknd", this.qf);
                b = /trophy_(.*).png/;
                for (c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d.children.length ===
                        1) {
                        var e = b.exec(d.children[0].src);
                        e && e.length >= 2 ? (e = e[1] === "" ? NaN : Number(e[1]), isNaN(e) || (this.rb.set(e, d), this.Qd.set(d, e))) : (this.rb.set(20, d), this.Qd.set(d, 20))
                    }
                }
            },
            hZ = function(a, b) {
                return a.Ta ? a.Xd.has(b) : a.Mb === 20 && a.FLa.has(b) ? !0 : a.Mb === b
            },
            gZ = function(a) {
                return hZ(a, 6) || hZ(a, 18)
            },
            iZ = function(a, b, c) {
                return cGu(a) ? a.Ab[c] : eEu[b][c]
            },
            dGu = function(a) {
                return cGu(a) ? !1 : a.oa === 1 || a.oa === 3 || a.oa === 5 || a.oa === 7 ? !0 : !1
            },
            dZ = function(a) {
                return a.Ua === 1
            },
            uEu = function(a) {
                return a.oa !== 0 || cGu(a)
            },
            cGu = function(a) {
                return a.Ab !==
                    void 0 && a.Ab.length === 7
            },
            pZ = function(a) {
                return hZ(a, 19) || hZ(a, 4)
            },
            zEu = function(a) {
                return hZ(a, 2) || hZ(a, 8) || hZ(a, 9) || hZ(a, 10)
            },
            eGu = function(a) {
                return hZ(a, 19) || gZ(a) || hZ(a, 7) || hZ(a, 11)
            },
            wEu = function(a) {
                return hZ(a, 7) ? hZ(a, 2) || hZ(a, 5) || hZ(a, 9) || hZ(a, 10) || hZ(a, 11) || hZ(a, 15) || hZ(a, 16) || hZ(a, 17) || gZ(a) && hZ(a, 12) : !1
            },
            gGu = function(a) {
                a = SDu(a === void 0 ? 0 : a);
                var b = new _.DLr;
                b.update(a, a.length);
                b = (new Uint8Array(b.digest())).buffer;
                var c = new DataView(b);
                b = c.getUint32(0);
                var d = c.getUint32(4),
                    e = c.getUint32(8);
                c = c.getUint32(12);
                b = TDu(b, d, e, c);
                d = fGu(!1, void 0, b, 4);
                e = [0, 1, 2, 3];
                e = e[Math.floor(b() * e.length)];
                c = 0;
                if ((e === 0 || e === 1) && d.size <= 3) {
                    for (var f = .5 * (e === 0 ? 1 : .5) * (d.size === 2 ? 1 : .5), g = _.n(lEu), h = g.next(); !h.done; h = g.next())
                        if (d.has(h.value)) {
                            f = 1;
                            break
                        } b() < f && (c = 1)
                }
                return {
                    inb: a,
                    FLa: d,
                    C3b: e,
                    o4b: c
                }
            },
            fGu = function(a, b, c, d) {
                d = d === void 0 ? Infinity : d;
                for (var e = new Set, f = 1; f < 19; f++) e.add(f);
                f = new Set;
                b && (f.add(b), e.delete(b));
                b = c ? c : Math.random;
                do {
                    c = Array.from(e);
                    var g = Math.floor(b() * c.length);
                    c = c[g];
                    f.add(c);
                    e.delete(c);
                    if (a) break
                } while (e.size > 0 && (b() < .3 || f.size < 2) && f.size < d);
                return f
            },
            hGu = function(a) {
                a.FLa.clear();
                var b = [];
                a.rb.forEach(function(e, f) {
                    _.hl.contains(e, "lH9Ipd") && b.push(f)
                });
                if (b.length === 0) a.FLa = fGu(!0);
                else if (b.length === 1) a.FLa = b[0] !== 20 ? fGu(!1, b[0]) : fGu(!1);
                else
                    for (var c = _.n(b), d = c.next(); !d.done; d = c.next()) a.FLa.add(d.value)
            },
            iGu = function(a) {
                var b = "c";
                a = Array.from(a.FLa).sort(function(d, e) {
                    return d - e
                });
                a = _.n(a);
                for (var c = a.next(); !c.done; c = a.next()) b += c.value;
                return b
            },
            jGu = function(a, b) {
                b = b ===
                    void 0 ? !1 : b;
                if (!b && a.Ta || a.Fa) return a.Jc;
                var c;
                hZ(a, 20) ? c = iGu(a) : c = b ? a.Jb : a.Mb;
                return c + "," + (b ? a.Qa : a.Aa) + "," + (b ? a.Sa : a.Nb) + "," + (b ? a.Xa : a.Da)
            };
        bGu.prototype.toString = function() {
            var a = this.Ta ? "dc" + this.Jc : hZ(this, 20) ? iGu(this) : "" + this.Mb;
            return "v=19,color=" + this.Xc + ",apple=" + this.Oa + ",mode=" + a + ",count=" + this.Aa + ",speed=" + this.Nb + ",size=" + this.Da + ",theme=" + this.kd + ",graphics=" + this.Ua
        };
        var kGu = function(a, b, c, d, e, f, g, h) {
            this.settings = a;
            this.oa = b;
            this.Ca = c;
            this.Aa = d;
            this.Ia = e;
            this.Ba = f;
            this.Fa = g;
            this.Da = h;
            this.keys = []
        };
        kGu.prototype.reset = function() {
            this.keys = [];
            if (hZ(this.settings, 8)) {
                for (var a = 0; a + 1 < this.Aa.oa.length; a += 2) {
                    var b = this.Aa.oa[a].pos.clone(),
                        c = this.Aa.oa[a + 1].pos.clone(),
                        d = Math.floor(a / 2);
                    d = this.settings.Oa !== 22 || hZ(this.settings, 11) ? (d + this.settings.Oa) % 5 : lGu(this);
                    var e = hZ(this.settings, 11) ? a < this.Aa.oa.length / 2 : !0;
                    mGu(this.Ba, b, {
                        pos: b,
                        vp: !1,
                        LPa: d,
                        HQ: !1,
                        Qi: e
                    });
                    if (hZ(this.settings, 7)) {
                        var f = mZ(this.oa, b);
                        mGu(this.Ba, f, {
                            pos: f,
                            vp: !1,
                            HQ: !1,
                            Qi: e
                        })
                    }
                    this.keys.push({
                        pos: c,
                        E0a: b.clone(),
                        bI: 0,
                        type: d,
                        vp: !1,
                        Qi: e
                    })
                }
                this.Aa.clear()
            }
        };
        var lGu = function(a) {
            var b = new Set([0, 1, 2, 3, 4]);
            a.settings.Aa === 3 && b.add(5);
            a = _.n(a.keys);
            for (var c = a.next(); !c.done; c = a.next()) b.delete(c.value.type);
            return b.size > 0 ? Array.from(b)[Math.floor(Math.random() * b.size)] : 0
        };
        kGu.prototype.update = function() {
            for (var a = _.n(this.keys), b = a.next(); !b.done; b = a.next()) b = b.value, b.vp || (b.bI = (b.bI + 1) % 6)
        };
        var oGu = function(a) {
                for (var b = 0; b < a.keys.length; b++) {
                    var c = a.keys[b];
                    if (c.Qi && (a.Ca.oa[0].equals(c.pos) || hZ(a.settings, 7) && kZ(a.Ca, 0).equals(c.pos))) {
                        nGu(a, c, b);
                        break
                    }
                }
                a.keys.sort(function(d, e) {
                    return d.pos.y - e.pos.y
                })
            },
            nGu = function(a, b, c) {
                oFu.KEY.play();
                pGu(a.Ba, b.E0a);
                hZ(a.settings, 7) && pGu(a.Ba, mZ(a.oa, b.E0a));
                hZ(a.settings, 9) ? yFu(a.Fa, {
                    pos: b.E0a.clone(),
                    prev: null,
                    vp: !1,
                    LPa: b.type,
                    Qi: !0
                }) : JEu(a.Aa, b.E0a, b.type, !0);
                a.Ia.particles.push({
                    pos: new _.ql(b.E0a.x * a.oa.oa, b.E0a.y * a.oa.oa),
                    Zd: new _.ql(Math.random() *
                        20 - 10, Math.random() * -20),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: b.type,
                    type: 0
                });
                hZ(a.settings, 7) && (b = mZ(a.oa, b.E0a), a.Ia.particles.push({
                    pos: new _.ql(b.x * a.oa.oa, b.y * a.oa.oa),
                    Zd: new _.ql(Math.random() * 20 - 10, Math.random() * -20),
                    angle: 0,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: -1,
                    type: 0
                }));
                a.Ca.Sa.push({
                    Bga: 0,
                    Qgb: a.Ca.oa.length + 1,
                    kdb: !1,
                    Mmc: !1,
                    N6a: new _.ql(0, 0)
                });
                hZ(a.settings, 7) && a.Ca.Sa.push({
                    Bga: 0,
                    Qgb: a.Ca.oa.length + 1,
                    kdb: !0,
                    Mmc: !1,
                    N6a: new _.ql(0, 0)
                });
                a.keys.splice(c, 1)
            },
            rGu = function(a, b, c) {
                var d = a.oa.Da(null,
                        6),
                    e = qGu(a.Ba, a.oa.Ia(d, 5));
                if (d && e) {
                    b = a.settings.Oa === 22 && !hZ(a.settings, 11) || a.settings.Aa === 3 ? lGu(a) : a.Aa.oa[b].LPa;
                    mGu(a.Ba, e, {
                        pos: e,
                        vp: !0,
                        LPa: b,
                        HQ: !1,
                        Qi: c
                    });
                    if (hZ(a.settings, 7)) {
                        var f = mZ(a.oa, e);
                        mGu(a.Ba, f, {
                            pos: f,
                            vp: !1,
                            HQ: !1,
                            Qi: c
                        })
                    }
                    a.keys.push({
                        pos: d.clone(),
                        E0a: e.clone(),
                        bI: 0,
                        type: b,
                        vp: !0,
                        Qi: c
                    });
                    hZ(a.settings, 16) && (oZ(a.Da, d, !1), oZ(a.Da, e, !1));
                    hZ(a.settings, 9) && rFu(a.Fa, d.clone(), a.keys.length)
                }
            };
        kGu.prototype.refresh = function() {
            for (var a = _.n(this.keys), b = a.next(); !b.done; b = a.next()) b.value.vp = !1
        };
        kGu.prototype.flip = function() {
            for (var a = _.n(this.keys), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi = !b.Qi
        };
        var sGu = {
                Ikb: new _.Zsu("/logos/fnbx/snake_arcade/", "minesweeper_audio", {
                    MINE_1: 0,
                    MINE_2: 73,
                    MINE_3: 142,
                    MINE_4: 209,
                    MINE_5: 272,
                    PLANT_FLAG: 357
                }, 385)
            },
            tGu = {
                Xxc: new _.CY(sGu.Ikb, "MINE_1", 864),
                Yxc: new _.CY(sGu.Ikb, "MINE_2", 816),
                Zxc: new _.CY(sGu.Ikb, "MINE_3", 792),
                ayc: new _.CY(sGu.Ikb, "MINE_4", 744),
                byc: new _.CY(sGu.Ikb, "MINE_5", 1008),
                ZCb: new _.CY(sGu.Ikb, "PLANT_FLAG", 432)
            },
            uGu = function() {
                _.BY.call(this, sGu, tGu)
            };
        _.G(uGu, _.BY);
        var vGu = function(a, b, c, d, e, f, g, h, l) {
            this.settings = a;
            this.oa = b;
            this.Fa = c;
            this.Oa = d;
            this.Ia = e;
            this.Da = f;
            this.Qa = g;
            this.Sa = h;
            this.Ta = l;
            this.Aa = new Set;
            this.Ca = new Set;
            this.Ba = new Set
        };
        vGu.prototype.reset = function() {
            this.Aa = new Set;
            this.Ca = new Set;
            this.Ba = new Set
        };
        var AGu = function(a, b, c, d) {
                for (var e = _.n(a.Aa), f = e.next(); !f.done; f = e.next()) {
                    var g = a;
                    f = f.value;
                    var h = b,
                        l = c,
                        m = d,
                        p = !1;
                    f.XVa > 0 && --f.XVa;
                    if (f.XVa === 0 || wGu(g, f, 0) !== 0) {
                        p = !0;
                        g.Aa.delete(f);
                        switch (Math.floor(Math.random() * 5)) {
                            default:
                            case 0:
                                tGu.Xxc.play();
                                break;
                            case 1:
                                tGu.Yxc.play();
                                break;
                            case 2:
                                tGu.Zxc.play();
                                break;
                            case 3:
                                tGu.ayc.play();
                                break;
                            case 4:
                                tGu.byc.play()
                        }
                        g.Ia.particles.push({
                            pos: new _.ql(f.pos.x * g.oa.oa, f.pos.y * g.oa.oa),
                            Zd: new _.ql(Math.random() * 20 - 10, Math.random() * -20),
                            angle: 0,
                            nV: Math.random() *
                                20 - 10,
                            size: 1,
                            type: 2
                        })
                    }
                    if (p && hZ(g.settings, 9))
                        for (var q = _.n(g.Da.Aa), v = q.next(); !v.done; v = q.next()) v = v.value, v.Qi === f.Qi && xGu(g, v.pos, f, 1) && vFu(g.Da, v);
                    v = wGu(g, f, 1);
                    q = !1;
                    v !== 0 && (f.XVa === -1 ? f.XVa = 3 : h || !p || v !== 1 || hZ(g.settings, 19) || (q = !0, h = g, BFu.Zqc.play(), l(), yGu(h.Fa), h.Fa.Qa = 0, m()));
                    p && hZ(g.settings, 13) && zGu(g.Ta, f.pos, 1, !0);
                    if (p) {
                        p = q;
                        m = jEu[Math.floor(Math.random() * jEu.length)];
                        q = g.Ia;
                        l = f.pos;
                        for (h = 0; h < 10; h++) {
                            v = new _.ql(l.x * q.oa.oa + Math.random() * q.oa.oa, l.y * q.oa.oa + Math.random() * q.oa.oa);
                            var z = new _.ql(Math.random() *
                                20 - 10, Math.random() * -35);
                            var A = Math.random() * .2;
                            A = _.LC(_.m1c(_.MC(m), A));
                            v = {
                                pos: v,
                                Zd: z,
                                color: A,
                                size: 2 + Math.random() * 2,
                                midpoint: 0
                            };
                            v.Zd.y > -15 && (v.Zd.y = -15);
                            Math.abs(v.Zd.x) < 5 && (v.Zd.x = 5 * (v.Zd.x > 0 ? 1 : -1));
                            v.midpoint = v.pos.x + v.Zd.x * 2;
                            q.O1.add(v)
                        }
                        g.Ca.add({
                            pos: new _.ql(f.pos.x * g.oa.oa, f.pos.y * g.oa.oa),
                            ticks: 4,
                            Z8f: m,
                            darkColor: _.LC(_.m1c(_.MC(m), .35))
                        });
                        g.Ba.add({
                            pos: new _.ql(f.pos.x * g.oa.oa + g.oa.oa / 2, f.pos.y * g.oa.oa + g.oa.oa / 2),
                            ticks: 3,
                            color: m,
                            pFg: p
                        })
                    }
                }
            },
            wGu = function(a, b, c) {
                if (b.Qi && xGu(a, a.Fa.oa[0], b, c)) return 1;
                if (gZ(a.settings))
                    for (var d = _.n(a.Oa.oa), e = d.next(); !e.done; e = d.next())
                        if (e = e.value, e.Qi === b.Qi && xGu(a, e.pos, b, c)) return 3;
                if (hZ(a.settings, 9))
                    for (d = _.n(a.Da.Aa), e = d.next(); !e.done; e = d.next())
                        if (e = e.value, e.Qi === b.Qi && e.prev !== null && xGu(a, e.pos, b, c)) return 7;
                if (hZ(a.settings, 17))
                    for (d = BGu(a.Sa), d = _.n(d), e = d.next(); !e.done; e = d.next())
                        if (e = e.value, e.Qi === b.Qi && e.qx.KXc >= 0 && xGu(a, e.pos, b, c)) return 5;
                return 0
            },
            xGu = function(a, b, c, d) {
                return CGu(a, b, c) <= d || hZ(a.settings, 7) && CGu(a, mZ(a.oa, b), c) <= d ? !0 : !1
            },
            CGu = function(a, b, c) {
                var d = HDu(b.x, b.y, c.pos.x, c.pos.y);
                hZ(a.settings, 4) && (d = Math.min(d, HDu(b.x - a.oa.Aa.width, b.y - a.oa.Aa.height, c.pos.x, c.pos.y), HDu(b.x, b.y - a.oa.Aa.height, c.pos.x, c.pos.y), HDu(b.x + a.oa.Aa.width, b.y - a.oa.Aa.height, c.pos.x, c.pos.y), HDu(b.x - a.oa.Aa.width, b.y, c.pos.x, c.pos.y), HDu(b.x + a.oa.Aa.width, b.y, c.pos.x, c.pos.y), HDu(b.x - a.oa.Aa.width, b.y + a.oa.Aa.height, c.pos.x, c.pos.y), HDu(b.x, b.y + a.oa.Aa.height, c.pos.x, c.pos.y), HDu(b.x + a.oa.Aa.width, b.y + a.oa.Aa.height, c.pos.x, c.pos.y)));
                return d
            };
        vGu.prototype.flip = function() {
            for (var a = _.n(this.Aa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi = !b.Qi
        };
        var DGu = function(a, b, c, d, e) {
            this.settings = a;
            this.oa = b;
            this.Aa = c;
            this.Da = d;
            this.Oa = e;
            this.Ca = new Map;
            this.Ba = [];
            this.Ia = 0
        };
        DGu.prototype.reset = function() {
            this.Ca = new Map;
            this.Ba = [];
            for (var a = 0; a < this.oa.Aa.height; a++) {
                this.Ba.push([]);
                for (var b = 0; b < this.oa.Aa.width; b++) {
                    var c = !hZ(this.settings, 4) && (b === 0 && (a === 1 || a === this.oa.Aa.height - 2) || b === this.oa.Aa.width - 1 && (a === 1 || a === this.oa.Aa.height - 2) || a === 0 && (b === 1 || b === this.oa.Aa.width - 2) || a === this.oa.Aa.height - 1 && (b === 1 || b === this.oa.Aa.width - 2));
                    this.Ba[a].push(c ? 1 : 0)
                }
            }
            hZ(this.settings, 7) && gFu(this.oa) && (a = new _.ql(Math.floor(this.oa.Aa.width / 2), Math.floor(this.oa.Aa.height /
                2)), mGu(this, a, {
                pos: a,
                vp: !1,
                HQ: !0,
                Qi: !0
            }));
            this.Ia = 0
        };
        var qGu = function(a, b) {
                for (var c = 0; c < a.oa.Aa.width; c++)
                    for (var d = 0; d < a.oa.Aa.height; d++) a.Ba[d][c] > 0 && b.add(c << 16 | d);
                c = [];
                for (d = 0; d < a.oa.Aa.width; d++)
                    for (var e = 0; e < a.oa.Aa.height; e++) LEu(a.oa, a.Aa.oa[0], new _.ql(d, e)) <= 3 || hZ(a.settings, 7) && LEu(a.oa, kZ(a.Aa, 0), new _.ql(d, e)) <= 3 || b.has(d << 16 | e) || c.push(new _.ql(d, e));
                return c.length > 0 ? c[Math.floor(Math.random() * c.length)] : null
            },
            mGu = function(a, b, c) {
                a.Ca.set(GDu(b), c);
                a.Ba[b.y][b.x]++
            },
            pGu = function(a, b) {
                a.Ca.delete(GDu(b));
                a.Ba[b.y][b.x]--
            };
        DGu.prototype.Fa = function(a) {
            return this.Ca.get(GDu(a))
        };
        var EGu = function(a, b) {
            mGu(a, b, {
                pos: b,
                vp: !0,
                HQ: !1,
                Qi: !hZ(a.settings, 11)
            });
            var c = [new _.ql(b.x - 1, b.y - 1), new _.ql(b.x, b.y - 1), new _.ql(b.x + 1, b.y - 1), new _.ql(b.x - 1, b.y), new _.ql(b.x + 1, b.y), new _.ql(b.x - 1, b.y + 1), new _.ql(b.x, b.y + 1), new _.ql(b.x + 1, b.y + 1)];
            if (hZ(a.settings, 4))
                for (var d = _.n(c), e = d.next(); !e.done; e = d.next()) nZ(a.oa, e.value);
            d = _.n(c);
            for (e = d.next(); !e.done; e = d.next()) e = e.value, lZ(a.oa, e) && a.Ba[e.y][e.x]++;
            if (!hZ(a.settings, 4)) {
                d = a.oa.Aa;
                if (b.x === 0 || b.x === d.width - 1) b.y - 2 >= 0 && a.Ba[b.y - 2][b.x]++,
                    b.y + 2 <= d.height - 1 && a.Ba[b.y + 2][b.x]++;
                if (b.y === 0 || b.y === d.height - 1) b.x - 2 >= 0 && a.Ba[b.y][b.x - 2]++, b.x + 2 <= d.width - 1 && a.Ba[b.y][b.x + 2]++;
                if (b.x === 0 && b.y === 2 || b.x === 2 && b.y === 0) a.Ba[2][0]++, a.Ba[0][2]++;
                if (b.x === d.width - 3 && b.y === 0 || b.x === d.width - 1 && b.y === 2) a.Ba[0][d.width - 3]++, a.Ba[2][d.width - 1]++;
                if (b.x === 0 && b.y === d.height - 3 || b.x === 2 && b.y === d.height - 1) a.Ba[d.height - 3][0]++, a.Ba[d.height - 1][2]++;
                if (b.x === d.width - 3 && b.y === d.height - 1 || b.x === d.width - 1 && b.y === d.height - 3) a.Ba[d.height - 3][d.width - 1]++, a.Ba[d.height -
                    1][d.width - 3]++
            }
            hZ(a.settings, 16) && (oZ(a.Da, b, !1), SEu(a.Da, c[1]) === "DOWN" && oZ(a.Da, c[1], !1), SEu(a.Da, c[3]) === "RIGHT" && oZ(a.Da, c[3], !1), SEu(a.Da, c[4]) === "LEFT" && oZ(a.Da, c[4], !1), SEu(a.Da, c[6]) === "UP" && oZ(a.Da, c[6], !1))
        };
        DGu.prototype.refresh = function() {
            for (var a = _.n(this.Ca.values()), b = a.next(); !b.done; b = a.next()) b = b.value, hZ(this.settings, 16) && b.qx && oZ(this.Da, b.pos, !1), b.vp = !1
        };
        DGu.prototype.flip = function() {
            for (var a = _.n(this.Ca.values()), b = a.next(); !b.done; b = a.next()) b = b.value, b.HQ || (b.Qi = !b.Qi)
        };
        var PFu = function(a) {
                return a !== void 0 && a.Qi && (a.qx === void 0 || a.qx.L9 > 0)
            },
            BGu = function(a) {
                return hZ(a.settings, 17) ? hZ(a.settings, 20) || a.settings.Ta ? Array.from(a.Ca.values()).filter(function(b) {
                    return b.qx !== void 0
                }) : Array.from(a.Ca.values()) : []
            },
            GGu = function(a, b) {
                if (!a.Aa.Ta) {
                    var c = a.Aa.wc ? 2 : 1,
                        d = a.Aa.oa[c];
                    c = hZ(a.settings, 11) ? a.Aa.Ba[c] : !0;
                    if (!hZ(a.settings, 3) || (d.x + d.y) % 2 !== 0) {
                        d = [new _.ql(d.x, d.y - 1), new _.ql(d.x + 1, d.y), new _.ql(d.x, d.y + 1), new _.ql(d.x - 1, d.y)];
                        hZ(a.settings, 4) && d.forEach(function(l) {
                            nZ(a.oa,
                                l)
                        });
                        for (var e = hZ(a.settings, 3) ? Math.ceil(a.Aa.oa.length / 2) : a.Aa.oa.length - 1 + a.Aa.Ua, f = {}, g = 0; g < d.length; f = {
                                Xza: void 0
                            }, g++) {
                            f.Xza = d[g];
                            var h = a.Fa(f.Xza);
                            if (h && h.qx && !h.pos.equals(a.Aa.oa[0])) h.qx.L9 = e, h.qx.mvb = a.Aa.direction, h.qx.ELa = a.Aa.direction, hZ(a.settings, 11) && !h.Qi && c && !a.Aa.oa.some(function(l) {
                                return function(m) {
                                    return m.equals(l.Xza)
                                }
                            }(f)) && (h.Qi = !0, h.qx.E7 = !0), hZ(a.settings, 7) && (f = a.Fa(mZ(a.oa, f.Xza))) && f.qx && (f.qx.L9 = e, f.qx.mvb = cZ(a.Aa.direction), f.qx.ELa = cZ(a.Aa.direction), f.Qi = h.Qi,
                                f.qx.E7 = h.qx.E7);
                            else if (!(!lZ(a.oa, f.Xza) || a.oa.Ba[f.Xza.y][f.Xza.x] !== 0 || (hZ(a.settings, 3) || hZ(a.settings, 11)) && a.Aa.oa.some(function(l) {
                                    return function(m) {
                                        return m.equals(l.Xza)
                                    }
                                }(f)) || hZ(a.settings, 7) && gFu(a.oa) && f.Xza.x === Math.floor(a.oa.Aa.width / 2) && f.Xza.y === Math.floor(a.oa.Aa.height / 2))) {
                                h = a.Aa.direction;
                                if (a.Aa.direction !== b)
                                    if (a.Aa.direction === "UP" || a.Aa.direction === "DOWN") {
                                        if (g === 0 || g === 2) h = b
                                    } else if (g === 1 || g === 3) h = b;
                                FGu(a, !0, f.Xza, h, a.Aa.direction, e, c)
                            }
                        }
                        b = BGu(a);
                        b = _.n(b);
                        for (c = b.next(); !c.done; c =
                            b.next()) c = c.value, c.qx.L9 > 0 && c.qx.L9--, hZ(a.settings, 12) && c.qx.KXc--;
                        a.Ia++
                    }
                }
            },
            FGu = function(a, b, c, d, e, f, g) {
                var h = a.settings.Ca === 10 ? a.Ia : 0,
                    l = {
                        pos: c,
                        vp: b,
                        HQ: !1,
                        Qi: g,
                        qx: {
                            color: a.Oa(.5, h, 0, !1, !1),
                            L9: f,
                            mvb: d,
                            ELa: e,
                            E7: !1,
                            N5d: h,
                            cUd: !1,
                            KXc: 1
                        }
                    };
                mGu(a, c, l);
                hZ(a.settings, 7) && (c = mZ(a.oa, c), b = {
                    pos: c,
                    vp: b,
                    HQ: !1,
                    Qi: g,
                    qx: {
                        color: a.Oa(.5, h, 0, !0, !1),
                        L9: f,
                        mvb: cZ(d),
                        ELa: cZ(e),
                        E7: !1,
                        N5d: h,
                        cUd: !0,
                        KXc: 1
                    }
                }, mGu(a, c, b))
            };
        var HGu = function(a, b) {
            this.settings = a;
            this.oa = b;
            this.Aa = 0;
            this.particles = [];
            this.O1 = new Set
        };
        HGu.prototype.reset = function() {
            this.particles = [];
            this.O1 = new Set
        };
        var IGu = {
                Mkb: new _.Zsu("/logos/fnbx/snake_arcade/", "poison_audio", {
                    BURP: 0,
                    DIZZY_1: 27,
                    DIZZY_2: 42,
                    DIZZY_3: 57,
                    DIZZY_4: 72,
                    SQUISH: 87
                }, 418)
            },
            JGu = {
                pme: new _.CY(IGu.Mkb, "BURP", 339.592),
                Ane: new _.CY(IGu.Mkb, "DIZZY_1", 182.857),
                Bne: new _.CY(IGu.Mkb, "DIZZY_2", 182.857),
                Cne: new _.CY(IGu.Mkb, "DIZZY_3", 182.857),
                Dne: new _.CY(IGu.Mkb, "DIZZY_4", 182.857),
                frd: new _.CY(IGu.Mkb, "SQUISH", 470.204)
            },
            KGu = function() {
                _.BY.call(this, IGu, JGu)
            };
        _.G(KGu, _.BY);
        var LGu = function(a, b, c, d, e) {
            this.settings = a;
            this.Ba = b;
            this.oa = c;
            this.Ia = d;
            this.Da = e;
            this.Aa = [];
            this.Ca = [];
            this.Fa = 0
        };
        LGu.prototype.reset = function() {
            this.Aa = [];
            this.Ca = []
        };
        LGu.prototype.update = function() {
            this.Ca = [];
            for (var a = 0; a < this.Aa.length; a++) {
                var b = this.Aa[a];
                b.sHa ? (this.Ca.push(this.Aa[a]), this.Aa.splice(a, 1), a--) : b.vp || (b.bI = (b.bI + 1) % 6)
            }
        };
        var MGu = function(a, b, c, d, e, f) {
            b = {
                pos: b,
                bI: 0,
                hHa: 0,
                sHa: !1,
                Qsb: c,
                vp: !0,
                vic: null,
                L7a: d,
                Qi: c || !hZ(a.settings, 11),
                kdb: f
            };
            hZ(a.settings, 5) && hZ(a.settings, 11) && c && (b.Qi = e[1]);
            return b
        };
        LGu.prototype.refresh = function() {
            for (var a = _.n(this.Aa), b = a.next(); !b.done; b = a.next()) b.value.vp = !1
        };
        LGu.prototype.flip = function() {
            for (var a = _.n(this.Aa), b = a.next(); !b.done; b = a.next()) b = b.value, b.Qi = !b.Qi
        };
        var NGu = function(a, b, c) {
            this.settings = a;
            this.Aa = b;
            this.Zb = c;
            this.oa = [];
            this.rb = new _.ql(0, 0);
            this.Kl = new _.ql(0, 0);
            this.Nc = new _.ql(0, 0);
            this.Kw = 0;
            this.Nb = new _.ql(0, 0);
            this.Xc = new _.ql(0, 0);
            this.Ua = 0;
            this.Sa = [];
            this.direction = "NONE";
            this.Oa = "RIGHT";
            this.Mb = "NONE";
            this.Sb = !1;
            this.Qa = 0;
            this.Eb = new _.ql;
            this.Ec = this.Jc = this.uc = 0;
            this.Jd = YDu[0][0];
            this.Qd = YDu[0][1];
            this.Ca = {
                jwa: 0,
                nLa: 0,
                E$: 0,
                ZX: 0,
                T5: !1,
                fJa: 0,
                lSa: 0,
                Qta: !1,
                light: 2
            };
            this.Da = {
                jwa: 0,
                nLa: 0,
                E$: 0,
                ZX: 0,
                T5: !1,
                fJa: 0,
                lSa: 0,
                Qta: !1,
                light: 2
            };
            this.wc = !1;
            this.Jb = [];
            this.Fa = "NONE";
            this.Ta = !1;
            this.kd = new _.ql(0, 0);
            this.Ia = 0;
            this.Ab = !1;
            this.Ba = [];
            this.Xa = []
        };
        NGu.prototype.reset = function() {
            this.Mb = "NONE";
            this.Sb = !1;
            this.direction = "NONE";
            this.Oa = "RIGHT";
            this.oa = [];
            this.oa.push(new _.ql(Math.floor(this.Aa.Aa.width / 4), Math.floor(this.Aa.Aa.height / 2)));
            this.oa.push(new _.ql(Math.floor(this.Aa.Aa.width / 4) - 1, Math.floor(this.Aa.Aa.height / 2)));
            this.oa.push(new _.ql(Math.floor(this.Aa.Aa.width / 4) - 2, Math.floor(this.Aa.Aa.height / 2)));
            this.oa.push(new _.ql(Math.floor(this.Aa.Aa.width / 4) - 3, Math.floor(this.Aa.Aa.height / 2)));
            if (this.oa[this.oa.length - 1].x < 0)
                for (var a =
                        this.oa[this.oa.length - 1].x, b = _.n(this.oa), c = b.next(); !c.done; c = b.next()) c.value.x -= a;
            if (this.settings.isMobile && hZ(this.settings, 7) && this.settings.Da === 1)
                for (a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) b.value.y = Math.floor(this.Aa.Aa.height / 5);
            if (!this.settings.isMobile && hZ(this.settings, 3) && (a = this.oa[0], (a.x + a.y) % 2 === 0))
                for (a = _.n(this.oa), b = a.next(); !b.done; b = a.next()) --b.value.x;
            this.Ba = [];
            this.Xa = [];
            for (a = 0; a < this.oa.length; a++) this.Ba.push(!0), this.Xa.push(1);
            this.rb = this.oa[2].clone();
            this.Kl =
                this.oa[2].clone();
            hZ(this.settings, 17) && (--this.rb.x, --this.Kl.x);
            this.Nc = this.oa[0];
            this.Kw = 0;
            this.Sa = [];
            this.Qa = 0;
            this.Ua = hZ(this.settings, 3) ? 2 : 0;
            this.wc = !1;
            this.Ia = 0;
            this.Ab = !1;
            this.Fa = "NONE";
            this.Ta = !1;
            this.kd = new _.ql(0, 0);
            OGu(this);
            hZ(this.settings, 14) && (this.Ca.light = 2, this.Da.light = 2);
            this.Jc = this.Ec = 0
        };
        var yGu = function(a) {
                a.Mb = "NONE";
                a.Sb = !1;
                a.Fa !== "NONE" && (a.direction = a.Fa, a.Fa = "NONE")
            },
            PGu = function(a, b) {
                a.direction = b;
                a.Sb = !0;
                a.Mb = "NONE";
                a.Fa = "NONE";
                a.wc = !1
            },
            QGu = function(a) {
                return a.direction === "NONE" ? a.Oa : a.direction
            },
            RGu = function(a) {
                switch (a.direction) {
                    case "DOWN":
                        oFu.DOWN.play();
                        break;
                    case "UP":
                        oFu.UP.play();
                        break;
                    case "LEFT":
                        oFu.LEFT.play();
                        break;
                    case "RIGHT":
                        oFu.RIGHT.play()
                }
            },
            SGu = function(a, b, c, d, e) {
                e = e === void 0 ? !1 : e;
                b.jwa === 0 ? Math.random() < b.nLa || a.Ia === 1 ? (b.jwa = 4, b.nLa = 0) : b.nLa += .005 : --b.jwa;
                if (c.length + (hZ(a.settings, 8) ? d.length : 0) === 0) b.T5 = !1;
                else {
                    var f = RFu(a, c, e, wEu(a.settings)),
                        g = e ? kZ(a, 0) : a.oa[0];
                    if (gZ(a.settings)) b.T5 = _.ul(g, f) < 3;
                    else {
                        var h = e ? cZ(a.direction) : a.direction;
                        b.T5 = _.ul(g, f) < 3 && !(h === "RIGHT" && g.x > f.x) && !(h === "LEFT" && g.x < f.x) && !(h === "UP" && g.y < f.y) && !(h === "DOWN" && g.y > f.y)
                    }
                    d.length > 0 && !b.T5 && (d = RFu(a, d, e, hZ(a.settings, 7)), b.T5 = _.ul(g, d) < 3)
                }
                b.fJa === 0 ? Math.random() < b.lSa ? (b.fJa = 7, b.lSa = 0) : (b.lSa += .0012, c.some(function(l) {
                        return l.vp
                    }) && (b.lSa += .0036)) : b.T5 || b.ZX !== 0 ? b.fJa =
                    0 : --b.fJa;
                hZ(a.settings, 18) && (b.T5 = !0)
            },
            RFu = function(a, b, c, d) {
                if (a.oa.length === 0) return new _.ql(0, 0);
                c = c ? kZ(a, 0) : a.oa[0];
                for (var e = Infinity, f = new _.ql(Infinity, Infinity), g = _.n(b), h = g.next(); !h.done; h = g.next())
                    if (h = h.value, h.Qi) {
                        var l = _.ul(h.pos, c);
                        l < e && (e = l, f = h.pos)
                    } if (d)
                    for (b = _.n(b), d = b.next(); !d.done; d = b.next()) d = d.value, d.Qi && (d = mZ(a.Aa, d.pos), g = _.ul(d, c), g < e && (e = g, f = d));
                if (hZ(a.settings, 4))
                    for (a = _.n(a.Jb), b = a.next(); !b.done; b = a.next()) b = b.value, d = _.ul(b, c), d < e && (e = d, f = b);
                return f
            },
            OGu = function(a) {
                a.Ca.jwa =
                    0;
                a.Ca.nLa = 0;
                a.Ca.T5 = !1;
                a.Ca.E$ = 0;
                a.Ca.Qta = !1;
                a.Ca.ZX = 0;
                a.Ca.fJa = 0;
                a.Ca.lSa = 0;
                a.Da.jwa = 0;
                a.Da.nLa = 0;
                a.Da.T5 = !1;
                a.Da.E$ = Math.PI;
                a.Da.Qta = !1;
                a.Da.ZX = 0;
                a.Da.fJa = 0;
                a.Da.lSa = 0
            },
            TGu = function(a) {
                return hZ(a.settings, 2) && a.wc
            },
            kZ = function(a, b) {
                return b < 0 || b >= a.oa.length ? new _.ql(-1, -1) : mZ(a.Aa, a.oa[b])
            },
            VGu = function(a, b, c, d) {
                a.Jb = [];
                b = _.n(b);
                for (var e = b.next(); !e.done; e = b.next()) e = e.value, e.Qi && (UGu(a, e.pos), wEu(a.settings) && UGu(a, mZ(a.Aa, e.pos)));
                c = _.n(c);
                for (b = c.next(); !b.done; b = c.next()) b = b.value, b.Qi &&
                    (UGu(a, b.pos), hZ(a.settings, 7) && UGu(a, mZ(a.Aa, b.pos)));
                d = _.n(d);
                for (c = d.next(); !c.done; c = d.next()) c = c.value, c.Qi && (UGu(a, c.pos), hZ(a.settings, 7) && UGu(a, mZ(a.Aa, c.pos)))
            },
            UGu = function(a, b) {
                var c = a.Aa.Aa.width,
                    d = a.Aa.Aa.height;
                a.Jb.push(new _.ql(b.x - c, b.y - d));
                a.Jb.push(new _.ql(b.x, b.y - d));
                a.Jb.push(new _.ql(b.x + c, b.y - d));
                a.Jb.push(new _.ql(b.x - c, b.y));
                a.Jb.push(new _.ql(b.x + c, b.y));
                a.Jb.push(new _.ql(b.x - c, b.y + d));
                a.Jb.push(new _.ql(b.x, b.y + d));
                a.Jb.push(new _.ql(b.x + c, b.y + d))
            },
            WGu = function(a, b, c) {
                a.oa =
                    a.oa.reverse();
                hZ(a.settings, 11) && a.Ba.reverse();
                hZ(a.settings, 13) && a.Xa.reverse();
                a.direction = "NONE";
                var d = a.oa[0].x - a.oa[1].x,
                    e = a.oa[0].y - a.oa[1].y;
                pZ(a.settings) && (d = PDu(d), e = PDu(e), lZ(a.Aa, a.oa[0]) || (a.oa[0] = eFu(a.Aa, a.oa[0])));
                d === 1 ? a.Oa = "RIGHT" : d === -1 ? a.Oa = "LEFT" : e === 1 ? a.Oa = "DOWN" : e === -1 && (a.Oa = "UP");
                a.Fa = a.Oa;
                a.Mb = "NONE";
                a.rb = a.oa[a.oa.length - 1];
                a.Kl = a.rb;
                a.Nc = a.oa[0];
                hZ(a.settings, 10) && a.Ia !== 0 || OGu(a);
                hZ(a.settings, 16) && oZ(a.Zb, a.oa[0], !1);
                if (hZ(a.settings, 17))
                    for (b = _.n(b), d = b.next(); !d.done; d =
                        b.next()) d = d.value, d.qx.mvb = cZ(d.qx.mvb), d.qx.ELa = cZ(d.qx.ELa), d.qx.L9 > 0 && (d.qx.L9 = (hZ(a.settings, 3) ? Math.ceil(a.oa.length / 2) : a.oa.length) + 2 - d.qx.L9), LEu(a.Aa, a.oa[0], d.pos) <= 1 && (d.qx.L9 = 0, d.qx.ELa = cZ(a.Fa), hZ(a.settings, 7) && (e = c(mZ(a.Aa, d.pos))) && e.qx && (e.qx.L9 = d.qx.L9, e.qx.ELa = cZ(d.qx.ELa)));
                a.Sb = !1;
                a.Ta = !0
            },
            EFu = function(a) {
                return a.Ta || a.Fa !== "NONE"
            },
            XGu = function(a) {
                a.Ta = !1;
                a.Fa !== "NONE" && (a.direction = a.Fa, a.Fa = "NONE")
            },
            KEu = function(a) {
                a.Ia === 0 && (a.Ab = !0);
                a.Ia = Math.max(8, Math.floor(a.oa.length *
                    2 / 3));
                yGu(a)
            };
        NGu.prototype.flip = function() {
            for (var a = 0; a < this.Ba.length; a++) this.Ba[a] = !this.Ba[a]
        };
        var aGu = function(a) {
            return Math.pow(a / 2, 4) * .0025 + .05
        };
        var YGu = {
                jrd: new _.Zsu("/logos/fnbx/snake_arcade/", "statues_audio", {
                    CRUMBLE: 0,
                    STATUE: 69
                }, 418)
            },
            ZGu = {
                Tqc: new _.CY(YGu.jrd, "CRUMBLE", 888.163),
                ird: new _.CY(YGu.jrd, "STATUE", 522.449)
            },
            $Gu = function() {
                _.BY.call(this, YGu, ZGu)
            };
        _.G($Gu, _.BY);
        var aHu = function(a, b, c, d, e) {
            this.settings = a;
            this.oa = b;
            this.Ba = c;
            this.Ia = d;
            this.Ca = e;
            this.Aa = new Map;
            this.Fa = new Set;
            this.Da = 0
        };
        aHu.prototype.reset = function() {
            this.Aa.clear();
            this.Fa.clear();
            this.Da = 0
        };
        var bHu = function(a, b) {
                var c = a.Aa.get(b);
                a.Aa.delete(b);
                pGu(a.Ca, c.pos);
                a.Ia.particles.push({
                    pos: new _.ql(c.pos.x * a.oa.oa, c.pos.y * a.oa.oa),
                    Zd: new _.ql(Math.random() * 16 - 8, Math.random() * -15),
                    angle: c.nO.angle * 180 / Math.PI,
                    nV: Math.random() * 20 - 10,
                    size: 1,
                    lO: -1,
                    type: 4,
                    nO: c.nO
                })
            },
            cHu = function(a, b, c) {
                a.Aa.set(GDu(b), c);
                mGu(a.Ca, b, c)
            },
            zGu = function(a, b, c, d) {
                d = d === void 0 ? !1 : d;
                for (var e = _.n(a.Aa.keys()), f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    var g = a.Aa.get(f);
                    (d ? HDu(b.x, b.y, g.pos.x, g.pos.y) : LEu(a.oa, b, g.pos)) <=
                    c && (bHu(a, f), hZ(a.settings, 7) && g.nO && g.nO.Pub !== -1 && bHu(a, g.nO.Pub))
                }
            },
            eHu = function(a, b) {
                return dHu(a, b.x, b.y)
            },
            dHu = function(a, b, c) {
                b = b << 16 | c;
                return (c = a.Aa.get(b)) && c.nO && !c.nO.p7a || c === void 0 && hZ(a.settings, 1) && a.Ca.Ca.get(b) ? !0 : !1
            },
            fHu = function(a, b, c, d, e) {
                if (!(c < 0 || d < 0 || c >= a.oa.Aa.width || d >= a.oa.Aa.height)) {
                    var f = b[d][c],
                        g = !e || f.beb <= 1;
                    f.sTd && g || (f.sTd = !0, e && f.beb > 1 && --f.beb, f.beb === 1 && (pZ(a.settings) ? (e = nZ(a.oa, new _.ql(c - 1, d)), fHu(a, b, e.x, e.y, !0), e = nZ(a.oa, new _.ql(c + 1, d)), fHu(a, b, e.x, e.y, !0),
                        e = nZ(a.oa, new _.ql(c, d - 1)), fHu(a, b, e.x, e.y, !0), c = nZ(a.oa, new _.ql(c, d + 1)), fHu(a, b, c.x, c.y, !0)) : (fHu(a, b, c - 1, d, !0), fHu(a, b, c + 1, d, !0), fHu(a, b, c, d - 1, !0), fHu(a, b, c, d + 1, !0))))
                }
            },
            gHu = function(a, b, c) {
                if (lZ(a.oa, c) && !a.Aa.get(GDu(c))) {
                    var d = b[c.y][c.x];
                    d.XEd || (d.XEd = !0, d.beb >= 1 && (d.usd = !0, a.Da++, pZ(a.settings) ? (gHu(a, b, nZ(a.oa, new _.ql(c.x - 1, c.y))), gHu(a, b, nZ(a.oa, new _.ql(c.x + 1, c.y))), gHu(a, b, nZ(a.oa, new _.ql(c.x, c.y - 1))), gHu(a, b, nZ(a.oa, new _.ql(c.x, c.y + 1)))) : (gHu(a, b, new _.ql(c.x - 1, c.y)), gHu(a, b, new _.ql(c.x +
                        1, c.y)), gHu(a, b, new _.ql(c.x, c.y - 1)), gHu(a, b, new _.ql(c.x, c.y + 1)))))
                }
            };
        var hHu = function(a, b, c) {
            this.settings = a;
            this.menu = b;
            this.header = c;
            this.Dh = this.Eb = this.ticks = this.rb = 0;
            this.Ec = new Map;
            this.hm = !1;
            this.Mb = -1;
            this.Jc = this.Ab = !1;
            this.Jb = null;
            this.Zb = 0;
            this.Sb = !1;
            this.Nb = [];
            this.Ta = !1;
            this.oa = new cFu(this.settings, this.uc.bind(this), this.wc.bind(this));
            this.Oa = new ZEu(this.settings, this.oa, this.Ia.bind(this));
            this.Xa = new HGu(this.settings, this.oa);
            this.Aa = new NGu(this.settings, this.oa, this.Oa);
            this.Ba = new yEu(this.settings, this.oa, this.Aa, this.Oa, this.Xa);
            this.Da = new DGu(this.settings,
                this.oa, this.Aa, this.Oa, this.Ia.bind(this));
            this.Sa = new LGu(this.settings, this.oa, this.Aa, this.Ba, this.Da);
            this.Ca = new qFu(this.settings, this.oa, this.Aa, this.Ba, this.Oa, this.Xa);
            this.Fa = new kGu(this.settings, this.oa, this.Aa, this.Ba, this.Xa, this.Da, this.Ca, this.Oa);
            this.Ua = new aHu(this.settings, this.oa, this.Aa, this.Xa, this.Da);
            this.Qa = new vGu(this.settings, this.oa, this.Aa, this.Ba, this.Xa, this.Ca, this.Oa, this.Da, this.Ua);
            this.localStorage = _.yd("l") ? _.de("l", UDu) : null
        };
        hHu.prototype.reset = function() {
            this.Jb = null;
            this.Xa.reset();
            this.oa.reset();
            this.Aa.reset();
            this.Da.reset();
            this.Sa.reset();
            this.Qa.reset();
            this.Ua.reset();
            this.Oa.reset();
            this.Ba.reset();
            this.Ta = !1;
            var a = hZ(this.settings, 11) && !hZ(this.settings, 2);
            (hZ(this.settings, 8) || hZ(this.settings, 9) || a) && this.Ba.shuffle(a);
            this.Fa.reset();
            this.Ca.reset();
            if (hZ(this.settings, 8) && hZ(this.settings, 9)) {
                a = _.n(this.Fa.keys);
                for (var b = a.next(); !b.done; b = a.next()) rFu(this.Ca, b.value.pos.clone(), this.Fa.keys.length)
            }
            if (hZ(this.settings,
                    10))
                for (a = this.Ba, b = 0; b + 1 < a.oa.length; b += 2) {
                    var c = Math.random() < .5;
                    a.oa[b].ffa = c;
                    a.oa[b + 1].ffa = !c
                }
            if (hZ(this.settings, 17))
                for (iHu(this), a = this.Da, b = 1; b < a.Aa.oa.length - 1; b++)
                    if (c = a.Aa.oa[b], !hZ(a.settings, 3) || (c.x + c.y) % 2 !== 0) {
                        c = _.n([new _.ql(c.x, c.y - 1), new _.ql(c.x, c.y + 1)]);
                        for (var d = c.next(); !d.done; d = c.next()) d = d.value, lZ(a.oa, d) && a.oa.Ba[d.y][d.x] === 0 && FGu(a, !1, d, "RIGHT", "RIGHT", hZ(a.settings, 3) ? Math.floor(a.Aa.oa.length / 2) : a.Aa.oa.length - 1 - b, !0);
                        a.Ia++
                    } this.hm = !1;
            this.Mb = -1;
            this.Jc = this.Ab = !1;
            this.ticks = this.Zb = this.Dh = 0;
            a = this.settings;
            a: switch (a.Nb) {
                case 1:
                    b = .66;
                    break a;
                case 2:
                    b = 1.33;
                    break a;
                default:
                    b = 1
            }
            this.Eb = (a.isMobile ? 175 : 135) * b;
            this.Sb = !1;
            hZ(this.settings, 4) && (VGu(this.Aa, this.Ba.oa, this.Fa.keys, this.Ca.Aa), jHu(this));
            a = this.Aa;
            b = this.Ba.oa;
            hZ(a.settings, 7) && b.length > 0 && (a.oa[0].x === b[0].pos.x - 1 || gZ(a.settings) && a.settings.Da === 0) && (a.Ca.T5 = !0, wEu(a.settings) && (a.Da.T5 = !0))
        };
        var jHu = function(a) {
            var b = a.oa.Aa.width * a.oa.oa,
                c = a.oa.Aa.height * a.oa.oa;
            a.Nb = [new _.ql(-b, -c), new _.ql(0, -c), new _.ql(b, -c), new _.ql(-b, 0), new _.ql(b, 0), new _.ql(-b, c), new _.ql(0, c), new _.ql(b, c)]
        };
        hHu.prototype.update = function(a) {
            for (var b = this.Xa, c = (a - b.Aa) * .0175 * (b.settings.Nb === 0 ? 1 : b.settings.Nb === 1 ? 1.33 : .66), d = 0; d < b.particles.length; d++) {
                var e = b.particles[d];
                e.type !== 1 && (e.Zd.y += 4 * c, e.pos.x += e.Zd.x * c, e.pos.y += e.Zd.y * c, e.angle += e.nV * c);
                var f = .025;
                e.type === 1 ? f = .5 : e.type === 4 ? f = .065 : hZ(b.settings, 4) && (f = .05);
                e.size = Math.max(0, e.size - c * f);
                hZ(b.settings, 4) && (f = b.oa.Aa.height * b.oa.oa, e.pos.y > f && (e.pos.y -= f), f = b.oa.Aa.width * b.oa.oa, e.pos.x < 0 ? e.pos.x += f : e.pos.x > f && (e.pos.x -= f));
                e.size <= 0 && (b.particles.splice(d,
                    1), d--)
            }
            c *= .55;
            d = _.n(b.O1);
            for (e = d.next(); !e.done; e = d.next()) e = e.value, e.Zd.y < 0 ? e.Zd.y += 4 * c : (e.Zd.x += 1.2 * c * (e.pos.x < e.midpoint ? 1 : -1), e.Zd.y = Math.abs(e.Zd.x) * .5), e.pos.x += e.Zd.x * c, e.pos.y += e.Zd.y * c, e.size = Math.max(0, e.size - c * .1), hZ(b.settings, 4) && (f = b.oa.Aa.height * b.oa.oa, e.pos.y < 0 ? e.pos.y += f : e.pos.y > f && (e.pos.y -= f), f = b.oa.Aa.width * b.oa.oa, e.pos.x < 0 ? (e.pos.x += f, e.midpoint += f) : e.pos.x > f && (e.pos.x -= f, e.midpoint -= f)), e.size <= 0 && b.O1.delete(e);
            b.Aa = a;
            b = !1;
            if (this.Aa.direction !== "NONE" || EFu(this.Aa))
                for (; a -
                    this.rb >= this.Eb;) this.rb += this.Eb, this.ticks++, this.tick(), b = !0;
            else this.rb = a, b = !0;
            return b
        };
        hHu.prototype.tick = function() {
            for (var a = this.hm, b = _.n(this.Ca.Aa), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                a && d.prev !== null && (d.pos = d.prev);
                d.prev = null
            }
            var e = this.Aa,
                f = this.hm;
            e.Ia > 0 && (e.Ia--, e.Ab = !1, e.Ia > 0 && (e.Ca.jwa = 0, e.Ca.nLa = 0, e.Da.jwa = 0, e.Da.nLa = 0), e.Ia !== 0 || f || JGu.pme.play());
            for (var g = this.Qa, h = _.n(g.Aa), l = h.next(); !l.done; l = h.next()) l.value.bI += 1;
            for (var m = _.n(g.Ca), p = m.next(); !p.done; p = m.next()) {
                var q = p.value;
                --q.ticks;
                q.ticks <= 0 && g.Ca.delete(q)
            }
            for (var v = _.n(g.Ba), z = v.next(); !z.done; z =
                v.next()) {
                var A = z.value;
                --A.ticks;
                A.ticks <= 0 && g.Ba.delete(A)
            }
            this.Ta = this.Sb = !1;
            if (this.hm || this.Ab) {
                var E = this.Aa,
                    L = this.flip.bind(this);
                if (E.Qa === 3) E.Qa = 2;
                else if (E.Qa === 2) {
                    E.Qa = 1;
                    E.oa.shift();
                    E.rb !== null && E.oa.push(E.rb);
                    hZ(E.settings, 11) && (E.Ba.shift(), E.oa.length > E.Ba.length && E.Ba.push(E.Ba[E.Ba.length - 1]), E.Ba[0] || L());
                    hFu(E.Aa);
                    E.rb = E.Kl;
                    var O = E.oa[0].x - E.oa[1].x,
                        U = E.oa[0].y - E.oa[1].y;
                    pZ(E.settings) && (O > 1 ? O = -1 : O < -1 && (O = 1), U > 1 ? U = -1 : U < -1 && (U = 1));
                    O > 0 ? E.direction = "RIGHT" : O < 0 ? E.direction = "LEFT" :
                        U > 0 ? E.direction = "DOWN" : U < 0 && (E.direction = "UP");
                    E.Oa = E.direction
                } else E.Qa === 1 && (E.Qa = 0);
                E.Ec > 0 ? E.Ec-- : E.Ec = 8;
                E.Jc > 0 && --E.Jc;
                if (this.Aa.Qa > 0) {
                    for (var X = this.Ua, ba = X.Aa.size, na = X.Ba.oa, qa = 0; qa < na.length; qa++) zGu(X, na[qa], 0), X.Ba.Xa[qa] = 1;
                    ba !== X.Aa.size && ZGu.Tqc.play()
                }
            } else a: {
                (hZ(this.settings, 9) || hZ(this.settings, 10) || dZ(this.settings)) && iHu(this);this.Ba.update();this.Fa.update();this.Sa.update();this.b5b();
                if (hZ(this.settings, 18)) {
                    var wa = this.Ba;
                    if (hZ(wa.settings, 6))
                        for (var ra = _.n(wa.oa), ta = ra.next(); !ta.done; ta =
                            ra.next()) NEu(wa, ta.value.Zd);
                    else {
                        for (var Za = _.n(wa.oa), Xa = Za.next(); !Xa.done; Xa = Za.next()) {
                            var nb = Xa.value;
                            if (hZ(wa.settings, 7)) {
                                var db = wa.Ba.oa[0],
                                    Lb = kZ(wa.Ba, 0);
                                var Zb = LEu(wa.Aa, nb.pos, db) <= LEu(wa.Aa, nb.pos, Lb) ? db.clone() : Lb
                            } else Zb = wa.Ba.oa[0].clone();
                            if (hZ(wa.settings, 4)) {
                                var Bb = nb.pos.x - Zb.x,
                                    Nb = nb.pos.y - Zb.y;
                                Math.abs(Bb) >= wa.Aa.Aa.width / 2 && (Zb.x += wa.Aa.Aa.width * Math.sign(Bb));
                                Math.abs(Nb) >= wa.Aa.Aa.height / 2 && (Zb.y += wa.Aa.Aa.height * Math.sign(Nb))
                            }
                            nb.pos.x === Zb.x ? OEu(nb, !0, !1) : nb.Zd.x = nb.pos.x <
                                Zb.x ? .5 : -.5;
                            nb.pos.y === Zb.y ? OEu(nb, !1, !0) : nb.Zd.y = nb.pos.y < Zb.y ? .5 : -.5;
                            var Wb = wa.settings.Aa !== 0 && (hZ(wa.settings, 10) && nb.ffa || hZ(wa.settings, 15) || hZ(wa.settings, 2) || hZ(wa.settings, 11) || hZ(wa.settings, 5));
                            nb.LFc = LEu(wa.Aa, new _.ql(nb.pos.x + nb.Zd.x, nb.pos.y + nb.Zd.y), Zb);
                            Wb && nb.LFc <= 4 && OEu(nb, !0, !0);
                            hZ(wa.settings, 11) && !nb.Qi && OEu(nb, !0, !0);
                            nb.d8c = Math.atan2(nb.pos.y - Zb.y, nb.pos.x - Zb.x) + Math.PI / 2
                        }
                        if (hZ(wa.settings, 2))
                            for (var Bc = 0; Bc < wa.oa.length; Bc += 2) {
                                var Ac = void 0,
                                    hd = void 0,
                                    Cc = ((Ac = wa.oa[Bc].LFc) !=
                                        null ? Ac : 0) < ((hd = wa.oa[Bc + 1].LFc) != null ? hd : 0) ? Bc : Bc + 1,
                                    Kc = wa.oa[Cc],
                                    Wc = wa.oa[Cc === Bc ? Bc + 1 : Bc];
                                Kc.Zd.x === 0 && Kc.Zd.y === 0 || Wc.Zd.x === 0 && Wc.Zd.y === 0 ? (OEu(Kc, !0, !0), OEu(Wc, !0, !0)) : (Kc.Zd.x === 0 ? OEu(Wc, !0, !1) : Wc.Zd.x = Kc.Zd.x, Kc.Zd.y === 0 ? OEu(Wc, !1, !0) : Wc.Zd.y = Kc.Zd.y)
                            }
                    }
                }
                if (hZ(this.settings, 17))
                    for (var Cd = this.Da, De = BGu(Cd), Zd = _.n(De), fe = Zd.next(); !fe.done; fe = Zd.next()) {
                        var Ze = fe.value;
                        Ze.qx.L9 === 0 && pGu(Cd, Ze.pos);
                        Ze.qx.E7 = !1
                    }
                if (hZ(this.settings, 14)) {
                    for (var Ed = _.n(this.Ba.oa), kg = Ed.next(); !kg.done; kg = Ed.next()) {
                        var Mf =
                            kg.value;
                        Mf.light = Math.max(0, Mf.light - .1)
                    }
                    var Kf = this.Aa;
                    Kf.Ca.light = Math.max(2, Kf.Ca.light - aGu(Kf.Ca.light));
                    hZ(Kf.settings, 7) && (Kf.Da.light = Math.max(2, Kf.Da.light - aGu(Kf.Da.light)))
                }
                if (EFu(this.Aa)) {
                    var Le = this.Aa;
                    Le.Ta ? (Le.Ta = !1, Le.Fa !== "NONE" || hZ(Le.settings, 2) || (Le.direction === "LEFT" && Le.Oa !== "DOWN" || Le.direction === "DOWN" && Le.Oa === "LEFT" || Le.direction === "UP" && Le.Oa !== "RIGHT" || Le.direction === "RIGHT" && Le.Oa === "UP") && hFu(Le.Aa)) : (Le.direction = Le.Fa, Le.Fa = "NONE", hZ(Le.settings, 2) || (Le.direction ===
                        "LEFT" || Le.direction === "UP") && hFu(Le.Aa));
                    gZ(this.settings) && PEu(this.Ba, this.Da.Ca, this.Fa.keys, this.Ca.Aa);
                    hZ(this.settings, 12) && AGu(this.Qa, this.hm, this.b5b.bind(this), this.uuc.bind(this))
                } else {
                    var zf = this.Aa,
                        xe = this.Oef.bind(this),
                        Sf = zf.oa[0].clone(),
                        sf = pZ(zf.settings);
                    switch (zf.direction) {
                        case "LEFT":
                            --Sf.x;
                            sf && Sf.x < 0 && (Sf.x = zf.Aa.Aa.width - 1);
                            break;
                        case "RIGHT":
                            Sf.x += 1;
                            sf && Sf.x >= zf.Aa.Aa.width && (Sf.x = 0);
                            break;
                        case "UP":
                            --Sf.y;
                            sf && Sf.y < 0 && (Sf.y = zf.Aa.Aa.height - 1);
                            break;
                        case "DOWN":
                            Sf.y += 1, sf &&
                                Sf.y >= zf.Aa.Aa.height && (Sf.y = 0)
                    }
                    if (!hZ(zf.settings, 19) && xe(Sf)) var zg = !0;
                    else {
                        zf.oa.unshift(Sf);
                        hZ(zf.settings, 11) && zf.Ba.unshift(!0);
                        if (hZ(zf.settings, 13)) {
                            zf.Xa.unshift(1);
                            for (var Ee = 0; Ee < zf.Xa.length; Ee++) zf.Xa[Ee] < 0 && (zf.Xa[Ee] = 0)
                        }
                        zg = !1
                    }
                    if (!zg) {
                        hFu(this.oa);
                        var ze = this.Aa;
                        ze.Ua === 0 ? (ze.Kl = ze.rb, ze.rb = ze.oa.pop(), hZ(ze.settings, 11) && ze.Ba.pop(), hZ(ze.settings, 13) && ze.Xa.pop()) : ze.Ua = Math.max(0, ze.Ua - 1);
                        this.Aa.direction !== this.Aa.Oa ? this.Zb++ : this.Zb = 0;
                        var tf = this.Aa.Oa;
                        this.Aa.Sb = !1;
                        this.Aa.Oa =
                            this.Aa.direction;
                        for (var of = this.Aa, hh = 0; hh < of.Sa.length; hh++) of.Sa[hh].Bga += 2, of.Sa[hh].Bga >= of.Sa[hh].Qgb && (of.Sa.splice(hh, 1), hh--);
                        hZ(this.settings, 8) && oGu(this.Fa);
                        if (hZ(this.settings, 9)) {
                            if (hZ(this.settings, 16))
                                for (var vg = this.Ca, Af = _.n(vg.Aa), Wd = Af.next(); !Wd.done; Wd = Af.next()) {
                                    var Pg = Wd.value;
                                    if (Pg.prev === null) {
                                        var Yc = SEu(vg.Ca, Pg.pos);
                                        Yc !== "NONE" && Pg.Qi === REu(vg.Ca, Pg.pos) && (oZ(vg.Ca, Pg.pos, !0), sFu(vg, Pg, Yc, void 0, !0))
                                    }
                                }
                            tFu(this.Ca, !1);
                            if (hZ(this.settings, 7)) {
                                tFu(this.Ca, !0);
                                var Hg = this.Aa;
                                Hg.Ca.Qta = Hg.Ca.Qta || Hg.Da.Qta;
                                Hg.Da.Qta = Hg.Ca.Qta
                            }
                        }
                        for (var ag = !1, Yf = this.Aa.wc = !1, nf = 0; nf < this.Ba.oa.length; nf++) {
                            var ed = this.Ba.oa[nf];
                            if (ed.Qi) {
                                var Gi = !1,
                                    Tg = !1;
                                if (gZ(this.settings)) {
                                    if (Gi = fFu(this.oa, this.Aa.oa[0], ed.pos) < 1 || fFu(this.oa, this.Aa.oa[1], ed.pos) < 1, hZ(this.settings, 7)) {
                                        var Dg = kZ(this.Aa, 1);
                                        Tg = fFu(this.oa, kZ(this.Aa, 0), ed.pos) < 1 || fFu(this.oa, Dg, ed.pos) < 1
                                    }
                                } else Gi = this.Aa.oa[0].equals(ed.pos), hZ(this.settings, 7) && (Tg = kZ(this.Aa, 0).equals(ed.pos));
                                if (Gi || Tg) {
                                    var vi = ed.ffa;
                                    Yf || (Yf = !0, vi ?
                                        JGu.frd.play() : hZ(this.settings, 2) ? oFu.e5e.play() : hZ(this.settings, 5) ? oFu.A5e.play() : hZ(this.settings, 11) ? oFu.voe.play() : oFu.One.play());
                                    hZ(this.settings, 10) && MEu(this.Ba, nf, vi, this.Kl.bind(this)) && nf--;
                                    if (!vi) {
                                        hZ(this.settings, 3) ? this.Aa.Ua += 2 : this.Aa.Ua += 1;
                                        if (hZ(this.settings, 17)) {
                                            var Ug = this.Da;
                                            if (!hZ(Ug.settings, 2))
                                                for (var Nh = BGu(Ug), ie = _.n(Nh), Dh = ie.next(); !Dh.done; Dh = ie.next()) Dh.value.qx.L9 += 1
                                        }
                                        hZ(this.settings, 14) && ((Gi ? this.Aa.Ca : this.Aa.Da).light += this.settings.Da === 0 ? 1 : this.settings.Da ===
                                            1 ? .5 : 1.25);
                                        this.Dh++;
                                        var jd = void 0,
                                            md = jGu(this.settings),
                                            Gd = this.Dh;
                                        this.settings.Ta && Gd > kHu(this, md) && ((jd = this.localStorage) == null || jd.set(md, Gd));
                                        (!lHu(this, md) || Gd > kHu(this, md)) && this.Ec.set(md, Gd);
                                        var pe = this.header,
                                            pf = this.Dh,
                                            Gf = this.ticks,
                                            If = this.Eb;
                                        if (pf === 25 || pf === 50 || pf === 100) _.Zl(pe.Ca, pf), _.Zl(pe.Da, FDu(Gf * If))
                                    }
                                    var Eg = hZ(this.settings, 3) && this.Aa.Sa.length > 0 && this.Aa.Sa[this.Aa.Sa.length - 1].Bga <= 4 && this.Aa.Sa[this.Aa.Sa.length - 1].kdb === Tg;
                                    this.Aa.Sa.push({
                                        Bga: 0,
                                        Qgb: this.Aa.oa.length + 1,
                                        kdb: hZ(this.settings, 7) ? Tg : !1,
                                        Mmc: Eg,
                                        N6a: new _.ql(0, 0)
                                    });
                                    hZ(this.settings, 7) && wEu(this.settings) && this.Aa.Sa.push({
                                        Bga: 0,
                                        Qgb: this.Aa.oa.length + 1,
                                        kdb: !Tg,
                                        Mmc: Eg,
                                        N6a: new _.ql(0, 0)
                                    });
                                    var wg = hZ(this.settings, 5) && !this.hm;
                                    wg && (ag = !0);
                                    if (hZ(this.settings, 2))
                                        if (this.Ba.oa.length % 2 !== 0) {
                                            this.Ba.oa.splice(0, this.Ba.oa.length);
                                            break
                                        } else {
                                            ag = !0;
                                            var Ye = this.Sa,
                                                Qg = nf,
                                                oh = Gi,
                                                wi = oh ? Ye.oa.direction : cZ(Ye.oa.direction);
                                            if (wg) {
                                                var Ai = Ye.oa.direction;
                                                WGu(Ye.oa, BGu(Ye.Da), Ye.Da.Fa.bind(Ye.Da));
                                                wi = oh ? Ye.oa.Fa : cZ(Ye.oa.Fa);
                                                Ye.oa.direction = Ai;
                                                Ye.oa.Oa = Ai;
                                                Ye.oa.Fa = "NONE";
                                                for (var Ti = _.n(Ye.Aa), $i = Ti.next(); !$i.done; $i = Ti.next()) {
                                                    var Sh = $i.value;
                                                    Sh.sHa || (Sh.hHa = Ye.oa.oa.length - 1 - Sh.hHa);
                                                    Sh.Qsb = !Sh.Qsb;
                                                    if (Sh.Qsb && Sh.hHa > 0) {
                                                        var Bi = Ye.oa.oa[Sh.hHa - 1],
                                                            Th = Ye.oa.oa[Sh.hHa];
                                                        Bi.x < Th.x ? Sh.L7a = "LEFT" : Bi.x > Th.x ? Sh.L7a = "RIGHT" : Bi.y < Th.y ? Sh.L7a = "UP" : Bi.y > Th.y && (Sh.L7a = "DOWN")
                                                    } else Sh.L7a = cZ(Sh.L7a)
                                                }
                                            }
                                            var Hi = Ye.Ia.oa[Qg % 2 === 0 ? Qg + 1 : Qg - 1],
                                                ei = oh ? Ye.oa.oa[0].clone() : kZ(Ye.oa, 0),
                                                hi = Hi.pos.clone();
                                            gZ(Ye.settings) && (hi.x % 1 !== 0 && (hi.x -= hZ(Ye.settings,
                                                18) && Hi.Zd.x === 0 ? Hi.Ytb.x : Hi.Zd.x), hi.y % 1 !== 0 && (hi.y -= hZ(Ye.settings, 18) && Hi.Zd.y === 0 ? Hi.Ytb.y : Hi.Zd.y), hZ(Ye.settings, 4) && (lZ(Ye.Ba, hi) || (hi = eFu(Ye.Ba, hi))));
                                            Ye.oa.oa.unshift(oh ? hi : mZ(Ye.Ba, hi));
                                            hZ(Ye.settings, 11) && Ye.oa.Ba.unshift(!1);
                                            vi ? Ye.Fa++ : Ye.oa.Ua = Math.max(0, Ye.oa.Ua - 1);
                                            var xi = MGu(Ye, ei, !0, wi, Ye.oa.Ba, !oh),
                                                ej = MGu(Ye, hi, !1, wi, Ye.oa.Ba, !oh);
                                            xi.vic = ej;
                                            ej.vic = xi;
                                            Ye.Aa.push(xi);
                                            Ye.Aa.push(ej);
                                            if (hZ(Ye.settings, 7)) {
                                                var wd = mZ(Ye.Ba, hi),
                                                    tj = cZ(wi),
                                                    oj = MGu(Ye, mZ(Ye.Ba, ei), !0, tj, Ye.oa.Ba, oh),
                                                    Oi = MGu(Ye,
                                                        wd, !1, tj, Ye.oa.Ba, oh);
                                                oj.vic = Oi;
                                                Oi.vic = oj;
                                                Ye.Aa.push(oj);
                                                Ye.Aa.push(Oi);
                                                Ye.oa.Da.ZX = 0;
                                                Ye.oa.Da.T5 = !1
                                            }
                                            Ye.oa.Ca.ZX = 0;
                                            Ye.oa.Ca.T5 = !1;
                                            Ye.oa.wc = !0
                                        } var Ij = wg && !hZ(this.settings, 2);
                                    Ij && WGu(this.Aa, BGu(this.Da), this.Da.Fa.bind(this.Da));
                                    if (hZ(this.settings, 1) && !this.hm && !vi && (this.Dh % 2 === 1 || hZ(this.settings, 11))) {
                                        var bk = qGu(this.Da, this.wc(null, 5));
                                        bk && (EGu(this.Da, bk), hZ(this.settings, 7) && EGu(this.Da, mZ(this.oa, bk)), hZ(this.settings, 9) && iHu(this))
                                    }
                                    if (hZ(this.settings, 13)) {
                                        if (Ij) {
                                            var hk = this.Ua,
                                                Ak = hk.Aa.size;
                                            zGu(hk, hk.Ba.oa[0], 3);
                                            hk.Ba.Xa[0] = 1;
                                            hk.Ba.Xa[1] = 1;
                                            hk.Ba.Xa[2] = 1;
                                            hk.Ba.Xa[3] = 1;
                                            Ak !== hk.Aa.size && ZGu.Tqc.play()
                                        }
                                        for (var Wj = this.Ua, ik = Wj.Ba.oa, rl = !1, fl = _.n(Wj.Aa.keys()), Oj = fl.next(); !Oj.done; Oj = fl.next()) {
                                            var pj = Oj.value,
                                                Pi = void 0;
                                            if ((Pi = Wj.Aa.get(pj).nO) == null ? 0 : Pi.p7a) bHu(Wj, pj), rl = !0
                                        }
                                        rl && ZGu.Tqc.play();
                                        for (var sl = Math.min(.4, ik.length / (Wj.oa.Aa.width * Wj.oa.Aa.height / 6)), pm = _.n(Wj.Aa.keys()), km = pm.next(); !km.done; km = pm.next()) {
                                            var yh = Wj.Aa.get(km.value);
                                            if (Math.random() < sl && yh.nO && yh.nO.lWb >= Wj.Ba.oa.length &&
                                                (yh.nO.p7a = !0, hZ(Wj.settings, 7))) {
                                                var Yk = Wj.Aa.get(yh.nO.Pub);
                                                Yk && Yk.nO && (Yk.nO.p7a = !0)
                                            }
                                        }
                                        for (var Sk = this.Ua, ll = this.Nc.bind(this), Ym = Sk.Ba.oa, vk = hZ(Sk.settings, 5) && !hZ(Sk.settings, 2) ? 2 : 1; vk < Ym.length; vk++) {
                                            var Tl = Ym[vk].clone();
                                            if (!(Sk.Ca.Fa(Tl) || hZ(Sk.settings, 3) && (Tl.x + Tl.y) % 2 === 0)) {
                                                Sk.Ba.Xa[vk] = -1;
                                                var Jk = void 0,
                                                    ck = 0;
                                                if (dZ(Sk.settings)) Jk = 1;
                                                else if (vk === Ym.length - 1) {
                                                    Jk = 0;
                                                    var qo = Ym[vk - 1],
                                                        Tn = Tl.x - qo.x,
                                                        cm = Tl.y - qo.y;
                                                    pZ(Sk.settings) && (Tn = PDu(Tn), cm = PDu(cm));
                                                    Tn === -1 ? ck = Math.PI * 3 / 2 : Tn === 1 ? ck = Math.PI / 2 :
                                                        cm === -1 ? ck = 0 : cm === 1 && (ck = Math.PI)
                                                } else if (hZ(Sk.settings, 2) && vk === 1) Jk = 1;
                                                else {
                                                    var Un = Ym[vk + 1],
                                                        qm = Ym[vk - 1],
                                                        eo = Tl.x - Un.x + (Tl.x - qm.x),
                                                        Bm = Tl.y - Un.y + (Tl.y - qm.y);
                                                    pZ(Sk.settings) && (eo < -1 ? eo = 1 : eo > 1 && (eo = -1), Bm < -1 ? Bm = 1 : Bm > 1 && (Bm = -1));
                                                    eo !== 0 && Bm !== 0 ? (Jk = 2, ck = eo === -1 ? Bm === -1 ? 0 : Math.PI * 3 / 2 : Bm === -1 ? Math.PI / 2 : Math.PI) : Jk = 1
                                                }
                                                var pp = ll(vk / Ym.length, vk, 0, !1),
                                                    El = {
                                                        pos: Tl,
                                                        vp: !0,
                                                        HQ: !1,
                                                        Qi: !0,
                                                        nO: {
                                                            p7a: !1,
                                                            lWb: vk,
                                                            Pub: -1,
                                                            color: pp,
                                                            type: Jk,
                                                            angle: ck,
                                                            WDc: Math.floor(Math.random() * 4),
                                                            VDc: Math.floor(Math.random() * 4) * Math.PI / 2
                                                        }
                                                    };
                                                cHu(Sk,
                                                    Tl, El);
                                                if (hZ(Sk.settings, 7)) {
                                                    var Km = mZ(Sk.oa, Tl),
                                                        wn = ck + Math.PI,
                                                        ep = ll(vk / Ym.length, vk, 0, !0);
                                                    cHu(Sk, Km, {
                                                        pos: Km,
                                                        vp: !0,
                                                        HQ: !1,
                                                        Qi: !0,
                                                        nO: {
                                                            p7a: !1,
                                                            lWb: vk,
                                                            Pub: GDu(Tl),
                                                            color: ep,
                                                            type: Jk,
                                                            angle: wn,
                                                            WDc: Math.floor(Math.random() * 4),
                                                            VDc: Math.floor(Math.random() * 4) * Math.PI / 2
                                                        }
                                                    });
                                                    El.nO.Pub = GDu(Km)
                                                }
                                            }
                                        }
                                        if (hZ(Sk.settings, 17))
                                            for (var Fn = BGu(Sk.Ca), Zq = _.n(Fn), Bo = Zq.next(); !Bo.done; Bo = Zq.next()) {
                                                var Po = Bo.value,
                                                    Nq = ll(.5, Po.qx.N5d % Sk.Ba.oa.length, 0, Po.qx.cUd),
                                                    qs = {
                                                        pos: Po.pos,
                                                        vp: !1,
                                                        HQ: !1,
                                                        Qi: !0,
                                                        nO: {
                                                            p7a: !1,
                                                            lWb: 0,
                                                            Pub: hZ(Sk.settings,
                                                                7) ? GDu(mZ(Sk.oa, Po.pos)) : -1,
                                                            color: Nq,
                                                            type: 1,
                                                            angle: 0,
                                                            WDc: Math.floor(Math.random() * 4),
                                                            VDc: Math.floor(Math.random() * 4) * Math.PI / 2
                                                        }
                                                    };
                                                pGu(Sk.Ca, Po.pos);
                                                cHu(Sk, Po.pos, qs)
                                            }
                                        ZGu.ird.play();
                                        var Cm = Sk;
                                        Cm.Fa.clear();
                                        if (!hZ(Cm.settings, 19)) {
                                            for (var Ks = [], su = 0; su < Cm.oa.Aa.height; su++) {
                                                Ks.push([]);
                                                for (var zr = 0; zr < Cm.oa.Aa.width; zr++) {
                                                    var Ls = dHu(Cm, zr, su),
                                                        ct = Ks[su],
                                                        zt = ct.push;
                                                    if (Ls) var rs = -1;
                                                    else {
                                                        var tl = Cm,
                                                            Oq = zr,
                                                            Ck = su,
                                                            ss = 0;
                                                        pZ(tl.settings) ? (eHu(tl, nZ(tl.oa, new _.ql(Oq - 1, Ck))) && ss++, eHu(tl, nZ(tl.oa, new _.ql(Oq + 1, Ck))) &&
                                                            ss++, eHu(tl, nZ(tl.oa, new _.ql(Oq, Ck - 1))) && ss++, eHu(tl, nZ(tl.oa, new _.ql(Oq, Ck + 1))) && ss++) : ((Oq === 0 || dHu(tl, Oq - 1, Ck)) && ss++, (Oq === tl.oa.Aa.width - 1 || dHu(tl, Oq + 1, Ck)) && ss++, (Ck === 0 || dHu(tl, Oq, Ck - 1)) && ss++, (Ck === tl.oa.Aa.height - 1 || dHu(tl, Oq, Ck + 1)) && ss++);
                                                        rs = 4 - ss
                                                    }
                                                    zt.call(ct, {
                                                        beb: rs,
                                                        sTd: Ls,
                                                        XEd: !1,
                                                        usd: !1
                                                    })
                                                }
                                            }
                                            for (var pq = 0; pq < Cm.oa.Aa.height; pq++)
                                                for (var TB = 0; TB < Cm.oa.Aa.width; TB++) fHu(Cm, Ks, TB, pq, !1);
                                            Cm.Da = 0;
                                            gHu(Cm, Ks, Cm.Ba.oa[0]);
                                            if (Cm.Da / (Cm.Da + (Cm.oa.Aa.width * Cm.oa.Aa.height - Cm.Da - Cm.Aa.size)) >= .25)
                                                for (var XA =
                                                        0; XA < Cm.oa.Aa.height; XA++)
                                                    for (var kr = 0; kr < Cm.oa.Aa.width; kr++) {
                                                        var Bw = Ks[XA][kr];
                                                        Bw.usd || (Bw.beb = 0)
                                                    }
                                            for (var us = 0; us < Cm.oa.Aa.height; us++)
                                                for (var At = 0; At < Cm.oa.Aa.width; At++) Ks[us][At].beb <= 1 && Cm.Fa.add(At << 16 | us)
                                        }
                                    }
                                    hZ(this.settings, 15) && (GEu(this.Ba, ed), hZ(this.settings, 2) && GEu(this.Ba, this.Ba.oa[nf % 2 === 0 ? nf + 1 : nf - 1]));
                                    var tu = !1;
                                    if (hZ(this.settings, 2)) tu = !0;
                                    else if (hZ(this.settings, 10) && ed.ffa) tu = !1;
                                    else {
                                        var YA = gZ(this.settings) || hZ(this.settings, 7);
                                        tu = this.J7d(nf, !YA, null)
                                    }
                                    if (tu)
                                        if (hZ(this.settings,
                                                2)) {
                                            var vs = nf % 2 === 0 ? nf + 1 : nf - 1;
                                            this.settings.Oa === 22 && (this.Ba.oa[nf].type = AEu(this.Ba), this.Ba.oa[vs].type = this.Ba.oa[nf].type);
                                            var Fy = this.Ba,
                                                tz = nf,
                                                YD = vs,
                                                XC = this.J7d.bind(this),
                                                uu = Fy.settings.Aa === 0 && !hZ(Fy.settings, 11),
                                                YC = XC(tz, !1, null);
                                            if (hZ(Fy.settings, 8) || hZ(Fy.settings, 9)) Fy.oa.splice(Math.min(tz, YD), 2);
                                            else {
                                                var tv = hZ(Fy.settings, 7) ? mZ(Fy.Aa, Fy.oa[tz].pos) : null,
                                                    ZD = XC(YD, uu, tv);
                                                YC && ZD || Fy.oa.splice(Math.min(tz, YD), 2)
                                            }
                                        } else this.settings.Oa === 22 && (ed.type = AEu(this.Ba));
                                    else this.Ba.oa.splice(nf,
                                        1), nf--;
                                    if (hZ(this.settings, 10) && !hZ(this.settings, 8) && !hZ(this.settings, 9) && !vi) {
                                        for (var UB = this.Ba, fA = 0, uz = _.n(UB.oa), gA = uz.next(); !gA.done; gA = uz.next()) gA.value.ffa && fA++;
                                        fA < UB.oa.length / 2 && IEu(UB)
                                    }
                                    if (hZ(this.settings, 12)) {
                                        var uv = this.Qa,
                                            Kr = uv.oa.Da(null, 9);
                                        Kr && (tGu.ZCb.play(), uv.Aa.add({
                                            pos: Kr,
                                            XVa: -1,
                                            bI: 0,
                                            Qi: !hZ(uv.settings, 11)
                                        }), hZ(uv.settings, 16) && oZ(uv.Qa, Kr, !1), hZ(uv.settings, 7) && uv.Aa.add({
                                            pos: mZ(uv.oa, Kr),
                                            XVa: -1,
                                            bI: 0,
                                            Qi: !hZ(uv.settings, 11)
                                        }))
                                    }
                                    hZ(this.settings, 11) && (this.flip(), ag = !0);
                                    if (this.settings.Aa ===
                                        3 && mHu(this) === 0 && !(eGu(this.settings) && nHu(this) <= 0)) {
                                        for (var jx = Math.ceil(Math.random() * 6), Gy = !0, Hy = 0; Hy < jx; Hy++) {
                                            if (hZ(this.settings, 8)) rGu(this.Fa, Hy, Gy);
                                            else if (hZ(this.settings, 9)) zFu(this.Ca, this.Fa.keys.length, Gy, !0);
                                            else {
                                                var ZA = this.uc(null, 2);
                                                ZA && JEu(this.Ba, ZA, void 0, Gy)
                                            }
                                            hZ(this.settings, 11) && (Gy = !Gy);
                                            iHu(this);
                                            if (eGu(this.settings) && nHu(this) <= 0) break
                                        }
                                        var dt = this.Ba.oa;
                                        if (hZ(this.settings, 2) && dt.length > 0) {
                                            dt[0].type = AEu(this.Ba);
                                            dt[1].type = dt[0].type;
                                            for (var Xx = 2; Xx < dt.length; Xx += 2) dt[Xx].type =
                                                (dt[Xx - 2].type + 1) % 22, dt[Xx + 1].type = dt[Xx].type
                                        }
                                        mHu(this) > 0 && oFu.lne.play()
                                    }
                                    if (ag) break
                                }
                            }
                        }
                        if (hZ(this.settings, 12) && (AGu(this.Qa, this.hm, this.b5b.bind(this), this.uuc.bind(this)), this.hm)) break a;
                        if (hZ(this.settings, 16)) {
                            var vz = this.Aa,
                                qI = vz.oa[0];
                            if (!hZ(vz.settings, 11) || REu(vz.Zb, qI)) {
                                var KJ = SEu(vz.Zb, qI);
                                KJ !== "NONE" && (KJ !== cZ(vz.direction) && PGu(vz, KJ), oZ(vz.Zb, qI, !0))
                            }
                        }
                        hZ(this.settings, 17) && (iHu(this), GGu(this.Da, tf));
                        for (var tN = _.n(this.Ua.Aa.values()), $D = tN.next(); !$D.done; $D = tN.next()) $D.value.nO.lWb +=
                            1;
                        var VB = this.Aa;
                        VB.Mb !== "NONE" && (hZ(VB.settings, 16) && $Eu(VB.Zb, VB.Mb, VB.oa[0]), PGu(VB, VB.Mb), RGu(VB));
                        b: {
                            var nn = this.Aa;
                            if (nn.Ia > 0 && !nn.Sb) {
                                var et = new Set,
                                    wz = nn.direction !== "NONE" ? nn.direction : nn.Fa;
                                if (wz === "LEFT" || wz === "RIGHT") et.add("UP"), et.add("DOWN");
                                else if (wz === "UP" || wz === "DOWN") et.add("LEFT"), et.add("RIGHT");
                                else break b;
                                if (!hZ(nn.settings, 19))
                                    if (hZ(nn.settings, 4)) {
                                        var LJ = new _.ql(nn.oa[0].x - 1, nn.oa[0].y),
                                            rI = new _.ql(nn.oa[0].x + 1, nn.oa[0].y),
                                            tG = new _.ql(nn.oa[0].x, nn.oa[0].y - 1),
                                            MJ = new _.ql(nn.oa[0].x,
                                                nn.oa[0].y + 1);
                                        nZ(nn.Aa, LJ);
                                        nZ(nn.Aa, rI);
                                        nZ(nn.Aa, tG);
                                        nZ(nn.Aa, MJ);
                                        dFu(nn.Aa, LJ) && et.delete("LEFT");
                                        dFu(nn.Aa, rI) && et.delete("RIGHT");
                                        dFu(nn.Aa, tG) && et.delete("UP");
                                        dFu(nn.Aa, MJ) && et.delete("DOWN")
                                    } else(nn.oa[0].x === 0 || dFu(nn.Aa, new _.ql(nn.oa[0].x - 1, nn.oa[0].y))) && et.delete("LEFT"), (nn.oa[0].x === nn.Aa.Aa.width - 1 || dFu(nn.Aa, new _.ql(nn.oa[0].x + 1, nn.oa[0].y))) && et.delete("RIGHT"), (nn.oa[0].y === 0 || dFu(nn.Aa, new _.ql(nn.oa[0].x, nn.oa[0].y - 1))) && et.delete("UP"), (nn.oa[0].y === nn.Aa.Aa.height - 1 || dFu(nn.Aa,
                                        new _.ql(nn.oa[0].x, nn.oa[0].y + 1))) && et.delete("DOWN");
                                var Iy = Array.from(et);
                                if (Iy.length > 0) {
                                    var Jy = Iy[Math.floor(Math.random() * Iy.length)];
                                    PGu(nn, Jy);
                                    switch (nn.direction) {
                                        case "DOWN":
                                            JGu.Ane.play();
                                            break;
                                        case "UP":
                                            JGu.Bne.play();
                                            break;
                                        case "LEFT":
                                            JGu.Cne.play();
                                            break;
                                        case "RIGHT":
                                            JGu.Dne.play()
                                    }
                                    hZ(nn.settings, 16) && $Eu(nn.Zb, Jy, nn.oa[0])
                                }
                            }
                        }
                        for (var Ky = this.Sa, uN = _.n(Ky.Aa), Cw = uN.next(); !Cw.done; Cw = uN.next()) {
                            for (var xz = Cw.value, fw = !1, hA = xz.hHa; hA < Ky.oa.oa.length; hA++) {
                                var sV = xz.pos.equals(Ky.oa.oa[hA]),
                                    NJ = hZ(Ky.settings, 7) && xz.pos.equals(kZ(Ky.oa, hA));
                                if (sV || NJ) {
                                    fw = !0;
                                    xz.hHa = hA;
                                    hZ(Ky.settings, 10) && Ky.Fa > 0 && hA === Ky.oa.oa.length - 1 && sV && (Ky.Fa--, Ky.oa.Kl = Ky.oa.rb, Ky.oa.rb = Ky.oa.oa.pop(), hZ(Ky.settings, 11) && Ky.oa.Ba.pop(), fw = !1);
                                    break
                                }
                            }
                            fw || (xz.sHa = !0)
                        }
                        if (mHu(this) === 0) {
                            BFu.WIN.play();
                            this.Ab = this.hm = !0;
                            oHu(this.menu, 1400, this.Dh);
                            hZ(this.settings, 5) && this.Aa.Ta && (this.Aa.Ta = !1);
                            hZ(this.settings, 11) && (this.Aa.Ba[0] || this.flip(), this.Ta = !1);
                            var sI = this.header,
                                hS = this.ticks,
                                MP = this.Eb;
                            _.Zl(sI.Ca, "ALL");
                            _.Zl(sI.Da, FDu(hS * MP));
                            var yz = String(kHu(this, jGu(this.settings)));
                            pHu(this.header, this.Dh, yz);
                            this.Mb = this.ticks
                        } else gZ(this.settings) && PEu(this.Ba, this.Da.Ca, this.Fa.keys, this.Ca.Aa);
                        var WB = this.Aa,
                            kx = this.Ba.oa,
                            ZC = this.Fa.keys;
                        SGu(WB, WB.Ca, kx, ZC);
                        hZ(WB.settings, 7) && SGu(WB, WB.Da, kx, ZC, !0);
                        hZ(this.settings, 4) && VGu(this.Aa, this.Ba.oa, this.Fa.keys, this.Ca.Aa)
                    }
                }
            }
        };
        var mHu = function(a) {
            var b = a.Ba;
            var c = 0;
            if (hZ(b.settings, 10) || hZ(b.settings, 11)) {
                b = _.n(b.oa);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, !d.ffa && d.Qi && c++
            } else c = b.oa.length;
            d = a.Fa;
            b = 0;
            if (hZ(d.settings, 8)) {
                d = _.n(d.keys);
                for (var e = d.next(); !e.done; e = d.next()) e.value.Qi && b++
            }
            d = a.Ca;
            a = 0;
            if (hZ(d.settings, 9))
                for (d = _.n(d.Aa), e = d.next(); !e.done; e = d.next()) e.value.Qi && a++;
            return c + b + a
        };
        _.k = hHu.prototype;
        _.k.b5b = function() {
            this.Ba.refresh();
            this.Da.refresh();
            this.Sa.refresh();
            this.Fa.refresh();
            this.Ca.refresh();
            this.Oa.refresh()
        };
        _.k.Oef = function(a) {
            lZ(this.oa, a) || this.DJa();
            for (var b = 1; b < this.Aa.oa.length - 1; b++) {
                var c = (this.Aa.oa[b].x + this.Aa.oa[b].y) % 2;
                c = hZ(this.settings, 3) && c === 0 || hZ(this.settings, 11) && !this.Aa.Ba[b];
                this.Aa.oa[b].equals(a) && !c && (this.DJa(), this.Sb = !0)
            }
            if (hZ(this.settings, 7))
                for (b = 0; b < this.Aa.oa.length - 1; b++) c = (this.Aa.oa[b].x + this.Aa.oa[b].y) % 2, c = hZ(this.settings, 3) && c === 0 && b !== 0 || hZ(this.settings, 11) && !this.Aa.Ba[b], kZ(this.Aa, b).equals(a) && !c && (this.DJa(), b > 0 && (this.Sb = !0));
            hZ(this.settings, 9) && !this.hm &&
                (wFu(this.Ca, a, !1, this.DJa.bind(this)), hZ(this.settings, 7) && !this.hm && wFu(this.Ca, a, !0, this.DJa.bind(this)));
            (hZ(this.settings, 1) || hZ(this.settings, 7) || hZ(this.settings, 8) || hZ(this.settings, 13) || hZ(this.settings, 17)) && !this.hm && (b = this.Da.Fa(a), PFu(b) && (this.DJa(), b.HQ && (this.Sb = !0)), hZ(this.settings, 7) && (b = this.Da.Fa(mZ(this.oa, a)), PFu(b) && this.DJa()));
            if (hZ(this.settings, 15)) {
                b = cZ(this.Aa.direction);
                c = _.n(this.Ba.oa);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value, d.Qi) {
                        var e = void 0;
                        (gZ(this.settings) ?
                            fFu(this.oa, a, d.pos) < 1 : d.pos.equals(a)) && ((e = d.z6) == null ? 0 : e.has(b)) && this.DJa();
                        if (hZ(this.settings, 7)) {
                            e = mZ(this.oa, a);
                            var f = void 0;
                            (hZ(this.settings, 6) ? fFu(this.oa, e, d.pos) < 1 : d.pos.equals(e)) && ((f = d.z6) == null ? 0 : f.has(this.Aa.direction)) && this.DJa()
                        }
                    }
            }
            hZ(this.settings, 16) && (b = REu(this.Oa, a), SEu(this.Oa, a) === cZ(this.Aa.direction) && b && this.DJa());
            return this.hm
        };
        _.k.DJa = function() {
            if (!this.hm) {
                BFu.Zqc.play();
                var a = this.Aa;
                a.Ua = 0;
                OGu(a);
                a.Ec = 0;
                a.Qa = 3;
                a.Jc = 6;
                a.Eb = a.oa[0].clone();
                a.direction === "RIGHT" ? (a.Eb.x += .5, a.uc = 0) : a.direction === "LEFT" ? (a.Eb.x -= .5, a.uc = Math.PI) : a.direction === "UP" ? (a.Eb.y -= .5, a.uc = -Math.PI / 2) : a.direction === "DOWN" ? (a.Eb.y += .5, a.uc = Math.PI / 2) : a.uc = 0;
                a = this.Sa;
                if (hZ(a.settings, 2) && a.Ca.length > 0)
                    for (var b = _.n(a.Ca), c = b.next(); !c.done; c = b.next()) c = c.value, a.Aa.push(c), c.bI = 0, c.hHa = 0, c.sHa = !1;
                this.uuc()
            }
        };
        _.k.uuc = function() {
            this.hm = !0;
            this.Mb = this.ticks;
            hZ(this.settings, 11) && (this.Ta = !1);
            hZ(this.settings, 5) && XGu(this.Aa);
            oHu(this.menu, 1400, this.Dh)
        };
        _.k.J7d = function(a, b, c) {
            var d = eGu(this.settings),
                e = nHu(this);
            return d && e <= 0 || this.settings.Aa === 3 ? !1 : hZ(this.settings, 8) ? (rGu(this.Fa, a, !0), !1) : hZ(this.settings, 9) ? (zFu(this.Ca, this.Fa.keys.length, !0), !1) : (c = this.uc(c, 2)) ? (HEu(this.Ba, a, c), b && this.Ba.oa.sort(function(f, g) {
                return f.pos.y - g.pos.y
            }), !0) : !1
        };
        var nHu = function(a) {
            var b = hZ(a.settings, 7) ? 2 : 1,
                c = a.Aa.oa.length * b,
                d = a.Ba,
                e = 0;
            if (hZ(d.settings, 10)) {
                d = _.n(d.oa);
                for (var f = d.next(); !f.done; f = d.next()) f.value.ffa || e++
            } else e = d.oa.length;
            e = (e - (a.settings.Aa === 3 ? 0 : 1)) * b;
            b = gZ(a.settings) || hZ(a.settings, 7) ? Math.max(0, a.Aa.Ua - 1) * b : 0;
            return a.oa.Aa.width * a.oa.Aa.height - (c + e + b)
        };
        hHu.prototype.Kl = function(a, b) {
            var c = dZ(this.settings) || a.oya === 1;
            var d = hZ(this.settings, 15) ? 1.2 : gZ(this.settings) ? 1.65 : c ? 1.5 : 1.2;
            d = this.oa.oa * d * (a.vp ? b : 1);
            a.vp || this.Aa.direction === "NONE" && !EFu(this.Aa) || gZ(this.settings) || hZ(this.settings, 15) || (b = (a.bI + (this.hm ? 0 : b)) / (c ? 16 : 6), this.settings.Ua === 2 || a.oya === 2 ? a = 1 + Math.sin(b * Math.PI * 2 + Math.PI * 1.5) / 2 : (a = IDu(b), b === 0 && (a = 0)), c && (a = a >= .75 ? .6 : 0), d = Math.round(d * (1 + a * .25)));
            return d
        };
        hHu.prototype.wc = function(a, b) {
            for (var c = [], d = this.Aa, e = 0; e < d.oa.length; e++) {
                var f = d.oa[e];
                hZ(d.settings, 3) && e > 0 && (f.x + f.y) % 2 === 0 || (c.push(f), hZ(d.settings, 7) && c.push(mZ(d.Aa, f)))
            }
            d = this.Ba;
            e = b === 2;
            e = hZ(d.settings, 11) && !hZ(d.settings, 2) && d.settings.Aa !== 3 && e;
            f = _.n(d.oa);
            for (var g = f.next(); !g.done; g = f.next())
                if (g = g.value, !e || g.Qi) c.push(g.pos), wEu(d.settings) && c.push(mZ(d.Aa, g.pos));
            d = _.n(this.Da.Ca.values());
            for (e = d.next(); !e.done; e = d.next()) c.push(e.value.pos);
            d = _.n(this.Sa.Aa);
            for (e = d.next(); !e.done; e =
                d.next()) c.push(e.value.pos);
            d = this.Fa;
            e = _.n(d.keys);
            for (f = e.next(); !f.done; f = e.next()) f = f.value, c.push(f.pos), hZ(d.settings, 7) && c.push(mZ(d.oa, f.pos));
            d = this.Ca;
            e = _.n(d.Aa);
            for (f = e.next(); !f.done; f = e.next()) f = f.value, c.push(f.pos), hZ(d.settings, 7) && c.push(mZ(d.oa, f.pos));
            d = _.n(d.kX);
            for (e = d.next(); !e.done; e = d.next()) c.push(e.value);
            d = _.n(this.Qa.Aa);
            for (e = d.next(); !e.done; e = d.next()) c.push(e.value.pos);
            if (b === 5 && hZ(this.settings, 1) && hZ(this.settings, 15) && !gZ(this.settings))
                for (d = this.Ba, e = _.n(d.oa),
                    f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    g = _.n(xEu.entries());
                    for (var h = g.next(); !h.done; h = g.next()) {
                        var l = _.n(h.value);
                        h = l.next().value;
                        l = l.next().value;
                        var m = void 0;
                        (m = f.z6) != null && m.has(h) || (h = new _.ql(f.pos.x + l.x, f.pos.y + l.y), hZ(d.settings, 4) && (h = nZ(d.Aa, h)), c.push(h))
                    }
                }
            if (a)
                if (a instanceof _.ql) c.push(a);
                else
                    for (a = _.n(a), d = a.next(); !d.done; d = a.next()) c.push(d.value);
            d = wEu(this.settings) && b === 2 || hZ(this.settings, 7) && b !== 2;
            a = new Set;
            c = _.n(c);
            for (e = c.next(); !e.done; e = c.next()) e = e.value, a.add(GDu(e)),
                d && a.add(GDu(mZ(this.oa, e)));
            if (hZ(this.settings, 13) && (b === 2 || b === 6 || b === 7))
                for (b = _.n(this.Ua.Fa), c = b.next(); !c.done; c = b.next()) a.add(c.value);
            return a
        };
        hHu.prototype.uc = function(a, b) {
            a = this.wc(a, b);
            var c = new Set;
            if (hZ(this.settings, 3)) {
                for (var d = 0; d < this.oa.Aa.width; d++)
                    for (var e = 0; e < this.oa.Aa.height; e++)
                        if (!a.has(d << 16 | e)) {
                            var f = 0;
                            pZ(this.settings) ? (a.has(GDu(nZ(this.oa, new _.ql(d - 1, e)))) && f++, a.has(GDu(nZ(this.oa, new _.ql(d + 1, e)))) && f++, a.has(GDu(nZ(this.oa, new _.ql(d, e - 1)))) && f++, a.has(GDu(nZ(this.oa, new _.ql(d, e + 1)))) && f++) : ((d === 0 || a.has(d - 1 << 16 | e)) && f++, (d === this.oa.Aa.width - 1 || a.has(d + 1 << 16 | e)) && f++, (e === 0 || a.has(d << 16 | e - 1)) && f++, (e === this.oa.Aa.height -
                                1 || a.has(d << 16 | e + 1)) && f++);
                            f > 2 && c.add(d << 16 | e)
                        } c = _.n(c);
                for (d = c.next(); !d.done; d = c.next()) a.add(d.value)
            }
            c = hZ(this.settings, 2) && b === 2;
            d = hZ(this.settings, 15) && b === 2;
            if (c || d || b === 7 || b === 4 || b === 9)
                for (b = 0; b < this.oa.Aa.width; b++)
                    for (c = 0; c < this.oa.Aa.height; c++) LEu(this.oa, this.Aa.oa[0], new _.ql(b, c)) <= 3 && (a.add(b << 16 | c), hZ(this.settings, 7) && a.add(GDu(mZ(this.oa, new _.ql(b, c)))));
            b = Math.floor(Math.random() * (this.oa.Aa.width * this.oa.Aa.height - a.size));
            for (d = c = 0; d < this.oa.Aa.width; d++)
                for (e = 0; e < this.oa.Aa.height; e++)
                    if (!a.has(d <<
                            16 | e) && c++ === b) return new _.ql(d, e);
            return null
        };
        var iHu = function(a) {
            var b = a.oa;
            if (b.Ba.length === b.Aa.height && b.Ba[0].length === b.Aa.width) {
                b = a.oa;
                for (var c = 0; c < b.Aa.height; c++)
                    for (var d = 0; d < b.Aa.width; d++) b.Ba[c][d] = 0;
                b = a.Aa;
                for (c = 0; c < b.oa.length - 1; c++) d = b.oa[c], hZ(b.settings, 3) && (d.x + d.y) % 2 === 0 || hZ(b.settings, 11) && !b.Ba[c] || d.x % 1 !== 0 || d.y % 1 !== 0 || d.y < 0 || d.y >= b.Aa.Ba.length || d.x < 0 || d.x >= b.Aa.Ba[0].length || (b.Aa.Ba[d.y][d.x] = 1, hZ(b.settings, 7) && (d = kZ(b, c), b.Aa.Ba[d.y][d.x] = 1));
                b = a.Ba;
                c = [];
                d = _.n(b.oa);
                for (var e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    f.Qi && (gZ(b.settings) ? (e = new _.ql(Math.floor(f.pos.x + f.Zd.x), Math.floor(f.pos.y + f.Zd.y)), f = new _.ql(Math.ceil(f.pos.x + f.Zd.x), Math.ceil(f.pos.y + f.Zd.y)), f.y >= 0 && f.y < b.Aa.Aa.height && (f.x >= 0 && f.x < b.Aa.Aa.width && c.push(f), e.x >= 0 && e.x < b.Aa.Aa.width && c.push(new _.ql(e.x, f.y))), e.y >= 0 && e.y < b.Aa.Aa.height && (f.x >= 0 && f.x < b.Aa.Aa.width && c.push(new _.ql(f.x, e.y)), e.x >= 0 && e.x < b.Aa.Aa.width && c.push(e))) : c.push(f.pos.clone()))
                }
                c = _.n(c);
                for (d = c.next(); !d.done; d = c.next()) e = d.value, d = gZ(b.settings) ? 3 : 2, b.Aa.Ba[e.y][e.x] =
                    d, wEu(b.settings) && (e = mZ(b.Aa, e), b.Aa.Ba[e.y][e.x] = d);
                b = a.Fa;
                c = _.n(b.keys);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, d.Qi && (b.oa.Ba[d.pos.y][d.pos.x] = 6, hZ(b.settings, 7) && (d = mZ(b.oa, d.pos), b.oa.Ba[d.y][d.x] = 6));
                b = a.Ca;
                c = _.n(b.Aa);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, d.Qi && (b.oa.Ba[d.pos.y][d.pos.x] = 7, hZ(b.settings, 7) && (d = mZ(b.oa, d.pos), b.oa.Ba[d.y][d.x] = 7));
                b = a.Da;
                c = _.n(b.Ca.values());
                for (d = c.next(); !d.done; d = c.next()) d = d.value, d.Qi && !d.HQ && d.Qi && (b.oa.Ba[d.pos.y][d.pos.x] = 5);
                a = a.Qa;
                b = _.n(a.Aa);
                for (c = b.next(); !c.done; c = b.next()) c = c.value, c.Qi && (a.oa.Ba[c.pos.y][c.pos.x] = 9)
            }
        };
        hHu.prototype.flip = function() {
            this.Aa.flip();
            this.Ba.flip();
            this.Da.flip();
            this.Sa.flip();
            this.Fa.flip();
            this.Ca.flip();
            this.Qa.flip();
            this.Oa.flip();
            this.Ta = !0
        };
        var tEu = function(a, b, c, d) {
            d = d === void 0 ? {
                zHa: .2,
                E7: !1
            } : d;
            a = d.E7 || a.Ta ? b : 1;
            c && (a = 1 - a);
            return 1 - (1 - d.zHa) * a
        };
        hHu.prototype.Ia = function(a, b, c, d, e) {
            (e === void 0 || e) && this.Aa.Ta && this.settings.Ca !== 10 && (a = a * c + (1 - a) * (1 - c));
            e = this.Aa.Ia > 0;
            if (this.settings.Ca === 10) {
                var f = d ? dEu : cEu;
                d = _.MC(f[Math.floor(b) % f.length]);
                var g = _.MC(f[Math.floor(b >= this.Aa.oa.length - 1 ? b : b + 1) % f.length]);
                if (this.Aa.Ta) {
                    var h = this.Aa.oa.length - 1 - b,
                        l = _.MC(f[Math.floor(h) % f.length]);
                    f = _.MC(f[Math.floor(h <= 0 ? h : h - 1) % f.length]);
                    d = _.NC(d, l, c);
                    g = _.NC(g, f, c)
                }
                e && (this.Aa.Ia === 1 ? (d = _.NC(d, WDu, c), g = _.NC(g, XDu, c)) : this.Aa.Ab ? (d = _.NC(d, WDu, 1 - c), g = _.NC(g,
                    XDu, 1 - c)) : (d[0] = WDu[0], d[1] = WDu[1], d[2] = WDu[2], g[0] = XDu[0], g[1] = XDu[1], g[2] = XDu[2]));
                return _.LC(_.m1c(_.NC(g, d, e ? 0 : b % 1), a * (dGu(this.settings) ? .075 : .15)))
            }
            g = YDu[ZDu[this.settings.Ca]];
            b = _.MC(d ? g[0] : this.Aa.Jd);
            d = _.MC(d ? g[1] : this.Aa.Qd);
            e && (this.Aa.Ia === 1 ? (b = _.NC(b, WDu, c), d = _.NC(d, XDu, c)) : this.Aa.Ab ? (b = _.NC(b, WDu, 1 - c), d = _.NC(d, XDu, 1 - c)) : (b[0] = WDu[0], b[1] = WDu[1], b[2] = WDu[2], d[0] = XDu[0], d[1] = XDu[1], d[2] = XDu[2]));
            return _.LC(_.NC(d, b, a * Math.min(1, this.Aa.oa.length / 12) * (dGu(this.settings) && this.settings.Ca <
                10 ? .5 : 1)))
        };
        hHu.prototype.Nc = function(a, b, c, d) {
            a = _.l1c(this.Ia(a, b, c, d, !1));
            b = _.l1c(iZ(this.settings, this.settings.oa, 3));
            a[2] = b[2];
            a[1] /= 2;
            return _.LC(_.j1c(a[0], a[1], a[2]))
        };
        var lHu = function(a, b) {
                var c;
                return ((c = a.localStorage) == null ? 0 : c.has(b)) ? !0 : a.Ec.has(b)
            },
            kHu = function(a, b) {
                var c;
                return a.settings.Fa && ((c = a.localStorage) == null ? 0 : c.has(b)) ? a.localStorage.get(b) : lHu(a, b) ? a.Ec.get(b) : 0
            },
            qHu = function(a) {
                var b;
                return ((b = a.localStorage) == null ? 0 : b.has("virtual_joystick_enabled")) ? a.localStorage.get("virtual_joystick_enabled") : !1
            };
        var rHu = function(a, b, c, d, e, f, g, h, l, m, p, q, v, z, A) {
                this.settings = a;
                this.iW = b;
                this.Ua = c;
                this.Sa = d;
                this.Ta = e;
                this.Fa = f;
                this.Ab = g;
                this.rb = h;
                this.Qa = l;
                this.Oa = m;
                this.Ia = p;
                this.Ba = q;
                this.Xa = v;
                this.Ca = z;
                this.Da = A;
                this.Aa = this.oa = !1
            },
            sHu = function(a) {
                _.hl.toggle(a.Ba, "LaTyvd");
                a.Aa = !_.hl.contains(a.Ba, "LaTyvd");
                _.gu([new _.yn(a.Ba, a.Aa ? "show" : "hide")])
            },
            pHu = function(a, b, c) {
                _.K.setStyle(a.Fa, "visibility", a.oa ? "visible" : "hidden");
                _.K.setStyle(a.Sa, "visibility", a.oa ? "visible" : "hidden");
                _.Zl(a.Ua, b);
                _.Zl(a.Sa, c)
            };
        rHu.prototype.toggleFullscreen = function(a) {
            this.Qa && this.Oa && ((a ? _.hl.add : _.hl.remove)(this.Qa, "LaTyvd"), (a ? _.hl.remove : _.hl.add)(this.Oa, "LaTyvd"))
        };
        var vHu = function(a, b, c, d, e, f, g, h, l, m, p, q, v, z, A, E, L, O, U, X, ba, na, qa) {
                this.settings = a;
                this.Fa = b;
                this.Jb = c;
                this.Ia = d;
                this.Sa = e;
                this.Xa = f;
                this.Kl = g;
                this.Xc = h;
                this.rb = l;
                this.Nc = m;
                this.Jc = p;
                this.Kw = q;
                this.Ba = v;
                this.wc = z;
                this.Ua = A;
                this.Eb = E;
                this.Ec = L;
                this.Xd = O;
                this.Qd = U;
                this.Jd = X;
                this.Oa = ba;
                this.kd = na;
                this.Sb = qa;
                this.visible = !0;
                this.Ta = [];
                this.Aa = "score";
                this.Da = this.Ia.getContext("2d");
                this.Ca = new fZ(this.settings, "snake_arcade/end_empty.png", 1, this.Da);
                this.Qa = new fZ(this.settings, "snake_arcade/v3/default_end.png",
                    1, this.Da, "snake_arcade/pixel/px_default_end.png");
                this.qf = new fZ(this.settings, "snake_arcade/v3/rainbow_end.png", 1, this.Da, "snake_arcade/pixel/px_rainbow_end.png");
                this.Zb = new fZ(this.settings, "snake_arcade/v3/gradient_end.png", 1, this.Da, "snake_arcade/pixel/px_gradient_end.png");
                this.Ab = new fZ(this.settings, "snake_arcade/v3/speed_01.png", 1, this.Da, "snake_arcade/pixel/px_speed_01.png");
                this.Mb = new fZ(this.settings, "snake_arcade/v3/speed_02.png", 1, this.Da, "snake_arcade/pixel/px_speed_02.png");
                this.Sa =
                    e;
                this.Xa = f;
                a = [];
                for (b = 0; b < this.Xa.children.length; b++)
                    if (c = this.Xa.children[b], c.children.length > 0)
                        for (c = _.n(c.children), d = c.next(); !d.done; d = c.next())
                            if (d = d.value, d.id !== "") {
                                a.push(d);
                                for (c = 1; c < d.children.length; c++) _.hl.add(d.children[c], "SsAred");
                                this.settings.Ec && d.id === "apple" && d.children.length >= 4 && d.children[4] instanceof HTMLImageElement && QDu(d.children[4], "https://www.google.com/logos/fnbx/snake_arcade/halloween/default_jackolantern.png");
                                break
                            } this.oa = {
                    Y6b: -1,
                    Onb: new _.ql(0, 0),
                    zWa: new _.ql(0,
                        0),
                    GRa: null,
                    q9: a.length > 0 ? a[0] : document.createElement("div"),
                    R3: -1,
                    ek: new _.ql(0, 0),
                    Gnc: new Map,
                    targetY: 45,
                    b0a: new _.ql(0, 0),
                    rows: a,
                    jR: new Map
                };
                a = _.n(this.oa.rows);
                for (b = a.next(); !b.done; b = a.next()) b = b.value, this.oa.jR.set(b.id, b);
                tHu(this, this.oa.q9);
                uHu(this, !0, !0)
            },
            wHu = function(a) {
                return [a.Ca, a.Qa]
            },
            yHu = function(a) {
                var b = _.K.F_(a.Ia);
                b.width > 0 && b.height > 0 && (a.Da.canvas.width = b.width, a.Da.canvas.height = b.height);
                xHu(a)
            };
        vHu.prototype.isVisible = function() {
            return this.visible
        };
        vHu.prototype.update = function() {
            this.isVisible() && (this.Aa === "settings" ? zHu(this) : this.Aa === "score" ? AHu(this) : this.Aa === "daily_challenge" && BHu(this))
        };
        var CHu = function(a) {
                for (var b = _.n(a.Ta), c = b.next(); !c.done; c = b.next())(0, _.Gn)(c.value);
                a.Ta = []
            },
            oHu = function(a, b, c) {
                xHu(a);
                CHu(a);
                a.Ta.push((0, _.En)(function() {
                    DHu(a, !0, c)
                }, b))
            },
            DHu = function(a, b, c) {
                CHu(a);
                b && !a.visible ? (a.settings.Fa ? EHu(a) : FHu(a), _.K.setStyle(a.Fa, "visibility", "visible"), _.K.setStyle(a.Fa, "opacity", "1"), _.gu([new _.yn(a.Fa, "show")], {
                    data: {
                        fun: "score=" + c
                    }
                })) : _.K.getStyle(a.Fa, "opacity") !== "0" && a.visible && (_.K.setStyle(a.Fa, "opacity", "0"), _.gu([new _.yn(a.Fa, "hide")]), a.Ta.push((0, _.En)(function() {
                    _.K.setStyle(a.Fa,
                        "visibility", "hidden")
                }, 300)));
                a.visible = b
            },
            GHu = function(a) {
                return a.visible && a.Aa === "settings"
            },
            HHu = function(a) {
                a.settings.uc !== 0 || a.settings.Ab ? (eZ(a.Ca, eEu[0][0], iZ(a.settings, a.settings.uc, 0)), _.K.setStyle(a.Jb, "background-color", iZ(a.settings, a.settings.uc, 6))) : (mEu(a.Ca), _.K.setStyle(a.Jb, "background-color", ""))
            },
            AHu = function(a) {
                a.settings.Kl !== "" && QDu(a.wc, a.settings.Kl);
                a.settings.Nc !== "" && QDu(a.Xd, a.settings.Nc);
                var b = a.settings.Qa === 3;
                b ? (QDu(a.Eb, a.settings.Ba === 1 ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/v17/px_count_03.png" :
                    "https://www.google.com/logos/fnbx/snake_arcade/v17/count_03.png"), _.hl.remove(a.Eb, "LaTyvd")) : _.hl.add(a.Eb, "LaTyvd");
                if (a.settings.Qa === 0 || b) _.hl.add(a.Ua, "LaTyvd"), _.K.setStyle(a.Ec, "transform", "");
                else {
                    b = a.settings.Qa === 2;
                    _.hl.remove(a.Ua, "LaTyvd");
                    _.K.setStyle(a.Ec, "transform", b ? "scale(0.8)" : "scale(0.9)");
                    for (var c = 0; c < a.Ua.children.length; c++) {
                        var d = a.Ua.children[c];
                        d instanceof HTMLImageElement && QDu(d, a.wc.src);
                        c <= 1 && (b ? _.hl.remove(d, "LaTyvd") : _.hl.add(d, "LaTyvd"))
                    }
                }
                a.settings.Jb === 20 ? _.hl.remove(a.rb,
                    "LaTyvd") : _.hl.add(a.rb, "LaTyvd");
                a.settings.Ia === 0 || a.settings.Ia === 10 ? mEu(a.Qa) : eZ(a.Qa, "#5282F2", YDu[a.settings.Ia][0]);
                if (a.settings.Ia > 10) {
                    b = YDu[a.settings.Ia][1];
                    if (a.settings.Ia === 16 || a.settings.Ia === 17) b = "#AFAFAF";
                    eZ(a.Zb, "#5282F2", b)
                }
                HHu(a);
                xHu(a)
            },
            zHu = function(a, b) {
                b = b === void 0 ? !1 : b;
                for (var c = _.K.F_(a.Sa), d = a.oa.Y6b >= 0 ? VDu : new _.ql(0, 0), e = _.n(a.oa.rows), f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    var g = _.K.getPosition(f).x,
                        h = a.oa.Gnc.get(f.id);
                    if (a.oa.b0a.x >= d.x && h !== void 0)
                        if (b) _.K.setPosition(f,
                            h, 0);
                        else {
                            g = h * .25 + g * .75;
                            h = _.K.getSize(f).width;
                            var l = c.width / 2;
                            _.K.setPosition(f, Math.max(l - h, Math.min(l, g)), 0)
                        }
                }
            },
            xHu = function(a) {
                var b = a.settings.Ba === 1;
                a.Da.clearRect(0, 0, a.Ia.width, a.Ia.height);
                var c = a.Ia.width / a.Ca.getWidth(),
                    d = new _.ql(0, a.Ia.height - a.Ca.getHeight() * c),
                    e = c * .75 * (b ? 1.5 : 1);
                a.settings.Sa === 1 ? (b = b ? iEu : gEu, b = new _.ql(a.Ia.width - (a.Ab.getWidth(a.settings.Ba) + b.x) * e, d.y - (a.Ab.getHeight(a.settings.Ba) + b.y) * e), a.Ab.render(0, b, new _.ql(0, 0), 0, e, a.settings.Ba)) : a.settings.Sa === 2 && (b = b ?
                    hEu : fEu, b = new _.ql(a.Ia.width - (a.Mb.getWidth(a.settings.Ba) + b.x) * e, d.y - (a.Mb.getHeight(a.settings.Ba) + b.y) * e), a.Mb.render(0, b, new _.ql(0, 0), 0, e, a.settings.Ba));
                if (a.settings.Xa === 1) a.Ca.render(0, d, new _.ql(0, 0), 0, c * 1.5);
                else if (a.settings.Xa === 2) {
                    e = c * .75;
                    b = 10 / 11.5;
                    var f = 2 / 3;
                    a.Ca.render(0, d, new _.ql(0, 0), 0, e);
                    a.Ca.render(0, d, new _.ql(a.Ca.getWidth() * b, 0), 0, e);
                    a.Ca.render(0, d, new _.ql(0, a.Ca.getHeight() * f), 0, e);
                    a.Ca.render(0, d, new _.ql(a.Ca.getWidth() * b, a.Ca.getHeight() * f), 0, e)
                } else a.Ca.render(0, d,
                    new _.ql(0, 0), 0, c);
                d = new _.ql(a.settings.Sa !== 0 ? -10 : 0, d.y - a.Qa.getHeight(a.settings.Ba) * c);
                a.settings.Ia === 10 ? a.qf.render(0, d, new _.ql(0, 0), 0, c, a.settings.Ba) : a.Qa.render(0, d, new _.ql(0, 0), 0, c, a.settings.Ba);
                a.settings.Ia > 10 && a.Zb.render(0, d, new _.ql(0, 0), 0, c, a.settings.Ba)
            },
            FHu = function(a) {
                a.settings.Fa = !1;
                _.hl.remove(a.Fa, "SU4xse");
                a.Aa = "score";
                IHu(a);
                yHu(a)
            },
            EHu = function(a) {
                a.settings.Fa = !0;
                _.hl.add(a.Fa, "SU4xse");
                BHu(a, !0);
                a.Aa = "daily_challenge";
                IHu(a);
                _.hu(a.Ba.n_)
            },
            BHu = function(a, b) {
                b = b === void 0 ?
                    !1 : b;
                (a.settings.Jc !== SDu() || b) && JHu(a);
                b = a.Ba.uvg;
                var c = RDu();
                var d = (60 - c.getUTCSeconds()) % 60,
                    e = (60 - c.getUTCMinutes() - (d > 0 ? 1 : 0)) % 60;
                c = (24 - c.getUTCHours() - (e > 0 ? 1 : 0)).toString().padStart(2, "0") + ":" + e.toString().padStart(2, "0") + ":" + d.toString().padStart(2, "0");
                c = (new _.aE("Time remaining: {TIMEREMAINING}")).format({
                    TIMEREMAINING: c
                });
                _.Zl(b, c);
                QDu(a.Ba.Vaf, "https://www.google.com/logos/fnbx/" + ODu(a.settings.Sb, 0, a.settings.Ec))
            },
            JHu = function(a) {
                var b = gGu();
                _.Zl(a.Ba.tmf, b.inb);
                a.settings.Jc = b.inb;
                var c =
                    a.Sb(jGu(a.settings));
                _.Zl(a.Ba.NOa, c);
                for (var d = a.Ba.KEg; d.firstChild;) d.firstChild.remove();
                KHu(b, d);
                a.Oa && a.kd(a.Oa, function(e) {
                    var f = e.tN();
                    var g = b.inb;
                    g = (new _.aE("{SCORE,plural, =0{Play the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}=1{I scored 1 point in the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}other{I scored {SCORE} points in the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}}")).format({
                        SCORE: String(c),
                        DATE: g,
                        HASHTAGGOOGLESNAKE: "#GoogleSnake"
                    });
                    f.setTitle(g);
                    e.oa(f)
                })
            },
            KHu = function(a,
                b) {
                for (var c = _.n(a.FLa), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = document.createElement("img");
                    b.appendChild(e);
                    QDu(e, "https://www.google.com/logos/fnbx/snake_arcade/v20/trophy_" + (NDu(d) + ".png"));
                    _.hl.add(e, "fbftZe")
                }
                c = document.createElement("img");
                b.appendChild(c);
                QDu(c, "https://www.google.com/logos/fnbx/snake_arcade/v17/count_" + (NDu(a.C3b) + ".png"));
                _.hl.add(c, "fbftZe");
                a.o4b === 1 && (a = document.createElement("img"), b.appendChild(a), QDu(a, "https://www.google.com/logos/fnbx/snake_arcade/v4/size_01.png"),
                    _.hl.add(a, "fbftZe"));
                if (b.children.length >= 5)
                    for (b = _.n(b.children), a = b.next(); !a.done; a = b.next()) _.hl.add(a.value, "OZ9aHc")
            },
            IHu = function(a) {
                (a.Aa === "settings" ? _.hl.remove : _.hl.add)(a.Sa, "LaTyvd");
                (a.Aa === "score" ? _.hl.remove : _.hl.add)(a.Jb, "LaTyvd");
                (a.Aa === "combo" ? _.hl.remove : _.hl.add)(a.Xc, "LaTyvd");
                var b = a.Aa === "daily_challenge" || a.Aa === "previous_daily_challenge",
                    c = a.Aa === "score" || b;
                (c ? _.hl.remove : _.hl.add)(a.Kl, "LaTyvd");
                (c ? _.hl.add : _.hl.remove)(a.Nc, "LaTyvd");
                (c ? _.hl.add : _.hl.remove)(a.Jc, "LaTyvd");
                a.Oa && (b ? _.hl.remove : _.hl.add)(a.Oa, "LaTyvd");
                a.Ba && ((a.Aa === "daily_challenge" ? _.hl.remove : _.hl.add)(a.Ba.wB, "LaTyvd"), (a.Aa === "previous_daily_challenge" ? _.hl.remove : _.hl.add)(a.Ba.Usg, "LaTyvd"), (a.Aa === "score" ? _.hl.remove : _.hl.add)(a.Ba.n_, "LaTyvd"));
                (b && a.Oa === null || a.Aa === "score" && a.Ba === null ? _.hl.remove : _.hl.add)(a.Kw, "LaTyvd");
                a.update()
            },
            LHu = function(a, b) {
                var c = a.settings.Qd.get(b);
                if (c) {
                    var d = _.hl.contains(b, "lH9Ipd");
                    _.hl.toggle(b, "lH9Ipd");
                    c !== 20 ? _.hl.remove(a.settings.rb.get(20), "lH9Ipd") :
                        c !== 20 || d || a.settings.rb.forEach(function(e, f) {
                            f !== 20 && _.hl.remove(e, "lH9Ipd")
                        })
                }
            },
            tHu = function(a, b) {
                for (var c = _.n(a.oa.rows), d = c.next(); !d.done; d = c.next()) _.hl.remove(d.value, "qfPtwe");
                a.oa.q9 = b;
                _.hl.add(a.oa.q9, "qfPtwe")
            },
            NHu = function(a, b, c) {
                if (GHu(a))
                    if (c !== 0) {
                        b = -1;
                        for (var d = 0; d < a.oa.rows.length; d++)
                            if (a.oa.q9 === a.oa.rows[d]) {
                                b = d;
                                break
                            } if (b !== -1) {
                            b += c;
                            b < 0 ? b = a.oa.rows.length - 1 : b >= a.oa.rows.length && (b = 0);
                            if (a.settings.Fa)
                                for (; b >= 1 && b <= 4;) b += c;
                            tHu(a, a.oa.rows[b])
                        }
                    } else b !== 0 && (c = MHu(a, a.oa.q9) + b,
                        c < 0 ? c = a.oa.q9.children.length - 1 : c >= a.oa.q9.children.length && (c = 0), qZ(a, a.oa.q9, !0, c))
            },
            OHu = function(a, b, c, d, e) {
                if (GHu(a)) {
                    a.oa.Y6b = Date.now();
                    b = new _.ql(b, c);
                    a.oa.Onb.x = b.x;
                    a.oa.Onb.y = b.y;
                    a.oa.zWa.x = b.x;
                    a.oa.zWa.y = b.y;
                    if (e.children.length > 0) {
                        a.oa.GRa = e;
                        e = _.n(e.children);
                        for (b = e.next(); !b.done; b = e.next())
                            if (b = b.value, b.id !== "") {
                                tHu(a, b);
                                break
                            } e = _.K.getSize(a.oa.q9).width;
                        b = _.K.getPosition(a.oa.q9).x;
                        d = (d - b) / e;
                        a.oa.R3 = d >= 0 && d < 1 ? Math.floor(d * a.oa.q9.children.length) : -1
                    }
                    a.oa.ek.x = _.K.getPosition(a.oa.q9).x;
                    a.oa.ek.y = _.K.getPosition(a.Xa).y;
                    a.oa.Gnc.set(a.oa.q9.id, a.oa.ek.x);
                    a.oa.targetY = a.oa.ek.y;
                    a.oa.b0a.x = 0;
                    a.oa.b0a.y = 0;
                    _.ce(a.settings.isMobile ? a.oa.GRa : document, a.settings.isMobile ? "touchmove" : "mousemove", a.uc, !1, a);
                    _.ce(a.settings.isMobile ? a.oa.GRa : document, a.settings.isMobile ? "touchend" : "mouseup", a.Nb, !1, a);
                    a.oa.GRa && _.hl.add(a.oa.GRa, "thso6e")
                }
            };
        vHu.prototype.uc = function(a) {
            GHu(this) && (a = new _.ql(a.clientX, a.clientY), this.oa.zWa.x = a.x, this.oa.zWa.y = a.y, a = this.oa.zWa.y - this.oa.Onb.y, this.oa.Gnc.set(this.oa.q9.id, this.oa.ek.x + (this.oa.zWa.x - this.oa.Onb.x)), this.oa.targetY = this.oa.ek.y + a, this.oa.b0a.x = Math.max(this.oa.b0a.x, Math.abs(this.oa.zWa.x - this.oa.Onb.x)), this.oa.b0a.y = Math.max(this.oa.b0a.y, Math.abs(this.oa.zWa.y - this.oa.Onb.y)), qZ(this, this.oa.q9, !1))
        };
        vHu.prototype.Nb = function() {
            if (GHu(this)) {
                _.vm(this.settings.isMobile ? this.oa.GRa : document, this.settings.isMobile ? "touchmove" : "mousemove", this.uc, !1, this);
                _.vm(this.settings.isMobile ? this.oa.GRa : document, this.settings.isMobile ? "touchend" : "mouseup", this.Nb, !1, this);
                var a = Date.now() - this.oa.Y6b,
                    b = _.Fgb(this.oa.b0a);
                a < 500 && b < 10 && this.oa.R3 !== -1 ? qZ(this, this.oa.q9, !0, this.oa.R3) : qZ(this, this.oa.q9, !0);
                this.oa.Y6b = -1;
                this.oa.GRa && _.hl.remove(this.oa.GRa, "thso6e")
            }
        };
        var MHu = function(a, b) {
                a = _.K.F_(a.Sa);
                var c = _.K.getSize(b).width,
                    d = _.K.getPosition(b).x;
                return Math.min(b.children.length - 1, Math.max(0, Math.floor((a.width / 2 - d) / c * b.children.length)))
            },
            qZ = function(a, b, c, d) {
                d = d === void 0 ? -1 : d;
                d = d !== -1 ? d : MHu(a, b);
                for (var e = 0; e < b.children.length; e++) {
                    var f = b.children[e];
                    e === d ? (_.hl.remove(f, "SsAred"), _.hl.add(f, "tuJOWd")) : (_.hl.add(f, "SsAred"), _.hl.remove(f, "tuJOWd"))
                }
                c && (c = _.K.F_(a.Sa), e = _.K.getSize(b).width / b.children.length, a.oa.Gnc.set(b.id, c.width / 2 - (d + .5) * e));
                b = b.id;
                switch (b) {
                    case "apple":
                        a.settings.Sb = d;
                        break;
                    case "trophy":
                        a.settings.Jb = d;
                        break;
                    case "count":
                        a.settings.Qa = d;
                        break;
                    case "speed":
                        a.settings.Sa = d;
                        break;
                    case "size":
                        a.settings.Xa = d;
                        break;
                    case "color":
                        a.settings.Zb = d;
                        a.settings.Ia = a.settings.Zb >= YDu.length ? Math.floor(Math.random() * YDu.length) : a.settings.Zb;
                        a.settings.Kw = !1;
                        break;
                    case "theme":
                        a.settings.wc = d;
                        a.settings.uc = a.settings.wc >= eEu.length ? Math.floor(Math.random() * eEu.length) : a.settings.wc;
                        a.settings.Jd = !1;
                        break;
                    case "graphics":
                        a.settings.Ba =
                            d
                }
                uHu(a, b === "apple" || b === "graphics", b === "trophy" || b === "graphics");
                AHu(a)
            },
            uHu = function(a, b, c) {
                b && (a.settings.Kl = "https://www.google.com/logos/fnbx/" + ODu(a.settings.Sb, a.settings.Ba, a.settings.Ec));
                c && (b = NDu(a.settings.Jb), a.settings.Nc = "https://www.google.com/logos/fnbx/" + (a.settings.Ba === 1 ? "snake_arcade/pixel/v20/px_trophy_" + b + ".png" : "snake_arcade/v20/trophy_" + b + ".png"))
            },
            PHu = function(a) {
                if (a.visible) {
                    if (a.Aa === "settings") {
                        var b = Math.floor(Math.random() * 22);
                        b += b >= a.settings.Sb ? 1 : 0;
                        var c = Math.floor(Math.random() *
                            18);
                        c += c >= a.settings.Jb ? 1 : 0;
                        var d = Math.floor(Math.random() * YDu.length);
                        d += d >= a.settings.Zb ? 1 : 0;
                        var e = Math.random() < .25 ? Math.random() < .25 ? 2 : 1 : 0,
                            f = Math.random() < .25 ? Math.random() < .25 ? 2 : 1 : 0;
                        switch (Math.floor(Math.random() * 4)) {
                            default:
                            case 0:
                                var g = 0;
                                break;
                            case 1:
                                g = 1;
                                break;
                            case 2:
                                g = 2;
                                break;
                            case 3:
                                g = 3
                        }
                        var h = Math.floor(Math.random() * eEu.length);
                        h += h >= a.settings.wc ? 1 : 0;
                        var l = Math.floor(Math.random() * 4);
                        qZ(a, a.oa.jR.get("apple"), !0, b);
                        qZ(a, a.oa.jR.get("color"), !0, d);
                        qZ(a, a.oa.jR.get("theme"), !0, h);
                        qZ(a, a.oa.jR.get("graphics"),
                            !0, l);
                        a.settings.Fa || (qZ(a, a.oa.jR.get("trophy"), !0, c), qZ(a, a.oa.jR.get("count"), !0, g), qZ(a, a.oa.jR.get("speed"), !0, e), qZ(a, a.oa.jR.get("size"), !0, f))
                    } else if (a.Aa === "combo") {
                        var m = fGu(!1);
                        a.settings.rb.forEach(function(p, q) {
                            m.has(q) ? _.hl.add(p, "lH9Ipd") : _.hl.remove(p, "lH9Ipd")
                        })
                    }
                    _.hu(a.Nc)
                }
            },
            QHu = function(a) {
                a.visible && (a.Aa === "settings" ? (qZ(a, a.oa.jR.get("apple"), !0, 0), qZ(a, a.oa.jR.get("color"), !0, 0), qZ(a, a.oa.jR.get("theme"), !0, 0), qZ(a, a.oa.jR.get("graphics"), !0, 0), a.settings.Fa || (qZ(a, a.oa.jR.get("trophy"),
                    !0, 0), qZ(a, a.oa.jR.get("count"), !0, 0), qZ(a, a.oa.jR.get("speed"), !0, 0), qZ(a, a.oa.jR.get("size"), !0, 0))) : a.Aa === "combo" && (a.settings.rb.forEach(function(b) {
                    _.hl.remove(b, "lH9Ipd")
                }), _.hl.add(a.settings.rb.get(20), "lH9Ipd")), _.hu(a.Jc))
            };
        _.rZ = function(a) {
            _.D.call(this, a.Ka);
            var b = this;
            this.muted = this.Qa = this.Ua = !1;
            this.closed = !0;
            this.Da = new pFu;
            this.Ia = new CFu;
            this.Sa = new KGu;
            this.Oa = new uGu;
            this.Ta = new $Gu;
            this.Fa = new WEu;
            this.qe = a.service.qe;
            a = this.getRoot().el();
            this.settings = new bGu(a, this.getData("isMobile").Ib(), this.getData("useHalloweenAssets").Ib());
            _.ku(this);
            this.Xa = new _.kz(document);
            _.ce(this.Xa, "key", function(h) {
                b.xY(h)
            });
            var c = this.Ea("UzWXSb").el();
            _.ce(c, "touchstart", function(h) {
                h.target === b.Ba.nF() && h.preventDefault()
            });
            _.ce(c, "touchmove", function(h) {
                a: {
                    h.preventDefault();h = h.Sf.touches[0];
                    if (b.oa.Jb) {
                        if (b.menu.isVisible() || b.oa.hm) break a;
                        var l = h.clientX - b.oa.Jb.x,
                            m = h.clientY - b.oa.Jb.y;
                        if (Math.max(Math.abs(l), Math.abs(m)) < 40 * (1 + .5 * Math.min(2, b.oa.Zb))) break a;
                        var p = QGu(b.oa.Aa),
                            q = TGu(b.oa.Aa),
                            v = "NONE";
                        Math.abs(l) > Math.abs(m) ? (l > 0 && (p !== "LEFT" || q) && (v = "RIGHT"), l < 0 && (p !== "RIGHT" || q) && (v = "LEFT")) : (m > 0 && (p !== "UP" || q) && (v = "DOWN"), m < 0 && (p !== "DOWN" || q) && (v = "UP"));
                        RHu(b, v)
                    }
                    b.oa.Jb = new _.ql(h.clientX, h.clientY)
                }
            });
            _.ce(c,
                "touchend",
                function(h) {
                    h.target === b.Ba.nF() && h.preventDefault();
                    b.oa.Jb = null
                });
            _.ce(this.getRoot().el(), "touchmove", function(h) {
                h.preventDefault()
            });
            this.qe.addListener(function() {
                if (b.settings.isMobile) {
                    var h = b.oa.Aa;
                    h.direction !== "NONE" && (h.Oa = h.direction, h.direction = "NONE");
                    b.Qa && !b.Nl() && (b.Qa = !1, b.K0b())
                }
            });
            c = null;
            this.getData("dcEnabled").Ib() && (c = {
                wB: this.Ea("JVpJxc").el(),
                n_: this.Ea("Prvkrf").el(),
                tmf: this.Ea("s6Dabc").el(),
                uvg: this.Ea("Q1mR9e").el(),
                KEg: this.Ea("TWJkNd").el(),
                kEc: this.Ea("rAEDL").el(),
                NOa: this.Ea("KtGIjc").el(),
                Vaf: this.Ea("Jesp7b").Gd(),
                Usg: this.Ea("db0Sb").el(),
                Ssg: this.Ea("jDlGJf").el(),
                Tsg: this.Ea("vIGaV").el()
            });
            this.menu = new vHu(this.settings, this.Ea("XRjYde").el(), this.Ea("Rs1rF").el(), this.Ea("kAVrAc").Gd(), this.Ea("akczce").el(), this.Ea("wXSCdb").el(), this.Ea("iyH4Cb").el(), this.Ea("VODc4e").el(), this.Ea("oUUYK").el(), this.Ea("qycu7d").el(), this.Ea("PLtcve").el(), this.Ea("OnazAc").el(), c, this.Ea("h6Ousc").Gd(), this.Ea("piGvM").el(), this.Ea("SkX2tc").Gd(), this.Ea("lFrxS").el(),
                this.Ea("LpoWPe").Gd(), this.Ea("LOtDEe").el(), this.Ea("Vp6PHf").el(), this.Va("fbtBXc").el(), this.getController.bind(this), this.yHe.bind(this));
            this.header = new rHu(this.settings, this.Ea("P0FCKc").el(), this.Ea("A0kWCf").el(), this.Ea("E5ziSe").el(), this.Ea("lh7ff").Gd(), this.Ea("UEI8qf").Gd(), this.Ea("BDBvSc").el(), this.Ea("dPr9Td").el(), this.settings.isMobile ? void 0 : this.Ea("flg6ze").el(), this.settings.isMobile ? void 0 : this.Ea("tljw1d").el(), this.Ea("p57eQc").el(), this.Ea("Fh1nkd").el(), this.Ea("yddQF").el(),
                this.Ea("DIdRlc").el(), this.Ea("lulO0b").el());
            this.oa = new hHu(this.settings, this.menu, this.header);
            this.Ba = new XFu(this.oa, this.settings, this.Ea("UzWXSb").Gd());
            if (c = this.Va("ar2wLb").el()) this.Ca = c;
            if (c = this.Va("Ycs2rd").el()) this.Aa = {
                container: c,
                width: 0,
                height: 0,
                radius: 0,
                up: this.Va("MUDVS").el(),
                x_: this.Va("rmiREc").el(),
                left: this.Va("p4rndc").el(),
                right: this.Va("dICtMc").el(),
                Ht: this.Va("k8ZH5e").el(),
                qYd: !1
            }, qHu(this.oa) && this.yge();
            var d = [];
            c = _.n(a.getElementsByTagName("img"));
            for (var e = c.next(),
                    f = {}; !e.done; f = {
                    lRc: void 0
                }, e = c.next()) f.lRc = e.value, d.push(new Promise(function(h) {
                return function(l) {
                    h.lRc.complete ? l() : _.um(h.lRc, "load", function() {
                        l()
                    })
                }
            }(f)));
            c = function(h) {
                d.push(new Promise(function(l) {
                    if (h.oa > 0) h.onLoad(l);
                    else l()
                }))
            };
            wHu(this.menu).forEach(c);
            YFu(this.Ba).forEach(c);
            var g = this.getData("waitForAssets").Ib() ? 1E4 : 0;
            c = new Promise(function(h) {
                (0, _.En)(function() {
                    h()
                }, g)
            });
            Promise.race([Promise.all(d), c]).then(function() {
                _.K.setStyle(b.Ea("y7GBZ").el(), "visibility", "hidden");
                b.Rv(Date.now())
            });
            this.settings.isMobile || _.EDu("snake.speedrun", function() {
                sHu(b.header)
            });
            !this.settings.isMobile && window.ResizeObserver && (this.rb = new window.ResizeObserver(function() {
                if (!b.settings.isMobile) {
                    var h = b.Ea("cGQipc").qb(),
                        l = b.Ea("Fh1nkd").qb();
                    h.style.transform = "";
                    l.style.transform = "";
                    l.style.display = "";
                    var m = _.Hl();
                    m = Math.min(m.width, m.height) / 650;
                    if (m < 1) {
                        var p = Math.max(.5, Math.pow(m, 1.25));
                        h.style.transform = "translateY(-50%) scale(" + p + ")";
                        l.style.transform = "translateX(-50%) scale(" +
                            p + ")";
                        l.style.display = m < .85 ? "none" : ""
                    }
                }
                b.LBb();
                b.Rv(b.oa.rb)
            }), this.rb.observe(a));
            _.EDu("snake.setCustomTheme", function(h, l, m, p, q, v, z) {
                _.d1c(h) && _.d1c(l) && _.d1c(m) && _.d1c(p) && _.d1c(q) && _.d1c(v) && _.d1c(z) && (b.settings.Ab = [h, l, m, p, q, v, z], HHu(b.menu), SHu(b), bFu(b.Ba.rb))
            });
            _.EDu("snake.clearCustomTheme", function() {
                b.settings.Ab = void 0;
                HHu(b.menu);
                SHu(b);
                bFu(b.Ba.rb)
            });
            this.getData("isStandalone").Ib() && (this.vuc(), this.K0b());
            c = _.n(a.getElementsByClassName("l3ryBd"));
            for (e = c.next(); !e.done; e = c.next())(e =
                e.value.textContent) && e.length > 20 && _.hl.add(a, "jKj29e"), e && e.length > 25 && _.hl.add(a, "KjMIn")
        };
        _.G(_.rZ, _.D);
        _.rZ.Ha = function() {
            return {
                service: {
                    qe: _.Dt
                }
            }
        };
        _.k = _.rZ.prototype;
        _.k.aBf = function() {
            return this.settings
        };
        _.k.xHe = function() {
            return this.oa
        };
        _.k.rEf = function() {
            return this.menu
        };
        _.k.hJf = function() {
            return this.menu.oa
        };
        _.k.wHe = function() {
            return this.Ba.nF()
        };
        _.k.sBf = function() {
            return _.K.getStyle(this.Ea("P0FCKc").el(), "background-color")
        };
        _.k.uIf = function() {
            return _.K.getStyle(this.Ea("Rs1rF").el(), "background-color")
        };
        _.k.Eid = function() {
            if (this.menu.isVisible() || this.oa.hm) {
                if (this.settings.Fa) {
                    var a = this.settings;
                    a.Eb === null && (a.Eb = {
                        C3b: a.Qa,
                        Hvf: a.Sa,
                        o4b: a.Xa
                    });
                    var b = gGu();
                    a.Jc = b.inb;
                    a.Xd = b.FLa;
                    a.Qa = b.C3b;
                    a.Xa = b.o4b;
                    a.Sa = 0;
                    this.settings.Ta = !0
                } else this.settings.Ta = !1;
                a = this.settings;
                a.Xc = a.Zb;
                a.Oa = a.Sb;
                a.Mb = a.Jb;
                a.Aa = a.Qa;
                a.Nb = a.Sa;
                a.Da = a.Xa;
                a.kd = a.wc;
                a.Ua = a.Ba;
                hZ(a, 20) && hGu(a);
                a.Xc >= YDu.length ? a.Kw ? a.Ca = Math.floor(Math.random() * YDu.length) : (a.Ca = a.Ia, a.Kw = !0) : (a.Ca = a.Xc, a.Kw = !1);
                a.Ia = a.Ca;
                a.kd >= eEu.length ? a.Jd ?
                    a.oa = Math.floor(Math.random() * eEu.length) : (a.oa = a.uc, a.Jd = !0) : (a.oa = a.kd, a.Jd = !1);
                a.uc = a.oa;
                a = this.header;
                hZ(a.settings, 19) ? _.hl.remove(a.Ia, "LaTyvd") : _.hl.add(a.Ia, "LaTyvd");
                a.settings.Kl !== "" && QDu(a.Ta, a.settings.Kl);
                a.settings.Ta ? QDu(a.Fa, a.settings.Ba === 1 ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/px_dc_trophy.png" : "https://www.google.com/logos/fnbx/snake_arcade/dc_trophy.png") : a.settings.Nc !== "" && QDu(a.Fa, a.settings.Nc);
                a = this.oa.Aa;
                a.settings.Ca === 0 || a.settings.Ca === 10 ? (a.Jd = YDu[0][0],
                    a.Qd = YDu[0][1]) : (b = YDu[a.settings.Ca], a.Jd = b[0], a.Qd = b[1]);
                hZ(a.settings, 7) && (a.Ia = 0, a.Ab = !1);
                a = this.Ba;
                if (a.settings.Ca === 0 || a.settings.Ca === 10) b = a.Oa, mEu(b.Ba), mEu(b.Da), mEu(b.Fa), mEu(b.Ca);
                else {
                    b = a.Oa;
                    var c = a.oa.Aa.Jd;
                    eZ(b.Ba, "#5282F2", c);
                    eZ(b.Da, "#5282F2", c);
                    eZ(b.Fa, "#5282F2", c);
                    c = _.l1c(c);
                    var d = _.l1c("#C73104");
                    d[0] = (c[0] + 180) % 360;
                    eZ(b.Ca, "#C73104", _.LC(_.j1c(d[0], d[1], d[2])))
                }
                hZ(a.settings, 7) && (b = a.oa.Ia(0, 0, 0, !0), c = a.Oa, eZ(c.Ua, "#C73104", a.settings.Ca === 10 ? cEu[0] : YDu[a.settings.Ca][0]), eZ(c.Ca,
                    "#C73104", b), eZ(c.Oa, "#5282F2", b), eZ(c.Ta, "#5282F2", b), eZ(c.Sa, "#5282F2", b));
                b = !dZ(a.settings);
                a.Aa.imageSmoothingEnabled = b;
                a.Ba.imageSmoothingEnabled = b;
                a = this.menu;
                a.Da.imageSmoothingEnabled = a.settings.Ba !== 1;
                SHu(this);
                _.hu(this.Ea("NSjDf").el(), {
                    data: {
                        fun: this.settings.toString()
                    }
                });
                this.reset()
            }
        };
        var SHu = function(a) {
            if (a.settings.oa !== 0 || a.settings.Ab) {
                _.K.setStyle(a.header.iW, "background-color", iZ(a.settings, a.settings.oa, 5));
                var b = a.Ba,
                    c = iZ(a.settings, a.settings.oa, 0);
                eZ(b.Sa.Ca, eEu[0][4], iZ(a.settings, a.settings.oa, 4));
                eZ(b.Fa.Aa, eEu[0][0], c, 5);
                _.K.setStyle(a.Ba.nF(), "background-color", iZ(a.settings, a.settings.oa, 3));
                a.Ca && _.K.setStyle(a.Ca, "background-color", iZ(a.settings, a.settings.oa, 5));
                a.Aa && _.K.setStyle(a.Aa.container, "background-color", iZ(a.settings, a.settings.oa, 3))
            } else _.K.setStyle(a.header.iW,
                "background-color", ""), b = a.Ba, mEu(b.Sa.Ca), mEu(b.Fa.Aa), _.K.setStyle(a.Ba.nF(), "background-color", ""), a.Ca && _.K.setStyle(a.Ca, "background-color", ""), a.Aa && _.K.setStyle(a.Aa.container, "background-color", "")
        };
        _.rZ.prototype.reset = function() {
            this.oa.oa.oa = 0;
            this.LBb();
            try {
                this.resetState()
            } catch (a) {}
        };
        _.rZ.prototype.resetState = function(a) {
            a = a === void 0 ? !0 : a;
            this.oa.reset(a);
            hZ(this.settings, 10) && JGu.frd.oa.preload();
            hZ(this.settings, 12) && tGu.ZCb.oa.preload();
            hZ(this.settings, 13) && ZGu.ird.oa.preload();
            hZ(this.settings, 16) && VEu.RIGHT.oa.preload();
            var b = this.settings.Mb !== 0 || lHu(this.oa, jGu(this.settings)) && !this.settings.Fa || this.settings.Ta;
            this.header.oa = b;
            b = this.header;
            _.Zl(b.Ca, "25");
            _.Zl(b.Da, "--:--:---");
            this.Aa && (b = this.Aa.container.getBoundingClientRect(), this.Aa.width = b.width, this.Aa.height =
                b.height, this.Aa.radius = b.height / 2);
            a && DHu(this.menu, !1, this.oa.Dh)
        };
        _.rZ.prototype.Nl = function() {
            return this.settings.isMobile && this.qe.Nl()
        };
        _.rZ.prototype.xY = function(a) {
            if (!this.closed) {
                var b = a.bNa ? a.Sf : void 0;
                if (!b || !b.repeat) {
                    b = QGu(this.oa.Aa);
                    var c = TGu(this.oa.Aa),
                        d = GHu(this.menu);
                    switch (a.keyCode) {
                        case 70:
                            this.Gid();
                            break;
                        case 77:
                            this.Hid();
                            break;
                        case 32:
                        case 82:
                        case 13:
                            (this.menu.isVisible() || this.oa.hm) && this.Eid();
                            break;
                        case 38:
                        case 87:
                            d ? NHu(this.menu, 0, -1) : (b !== "DOWN" || c) && RHu(this, "UP");
                            break;
                        case 40:
                        case 83:
                            d ? NHu(this.menu, 0, 1) : (b !== "UP" || c) && RHu(this, "DOWN");
                            break;
                        case 37:
                        case 65:
                            d ? NHu(this.menu, -1, 0) : (b !== "RIGHT" || c) && RHu(this,
                                "LEFT");
                            break;
                        case 39:
                        case 68:
                            d ? NHu(this.menu, 1, 0) : (b !== "LEFT" || c) && RHu(this, "RIGHT");
                            break;
                        case 27:
                            this.YOc(!0);
                            break;
                        case 84:
                            this.settings.isMobile || sHu(this.header);
                            break;
                        default:
                            return
                    }
                    a.preventDefault()
                }
            }
        };
        var RHu = function(a, b) {
            if (!(a.menu.isVisible() || a.oa.hm || a.closed)) {
                var c = a.oa.Aa,
                    d = c.Fa !== "NONE" ? c.Fa : c.direction,
                    e = d === b && c.Fa === "NONE";
                c.Ia > 0 ? (c.direction === "NONE" && c.Oa !== "NONE" && (c.direction = c.Oa), c.Ia !== 1 || e || c.Mb !== "NONE" || (c.Mb = b)) : (b === "NONE" || e || (c.Sb ? c.Mb = b : (c.Oa = d === "NONE" ? b : d, c.direction = b, c.Sb = !0, RGu(c), hZ(c.settings, 16) && $Eu(c.Zb, b, c.oa[0])), c.Ta || c.Fa === "NONE" || hZ(c.settings, 2) || (c.direction === "LEFT" || c.direction === "UP") && hFu(c.Aa), c.Fa = "NONE"), c.wc = !1);
                a.jZa();
                BFu.Zqc.oa.preload()
            }
        };
        _.k = _.rZ.prototype;
        _.k.jZa = function() {
            var a = this.Ea("IoE5Ec").el();
            _.K.setOpacity(a, 0);
            (0, _.En)(function() {
                _.K.setStyle(a, "visibility", "hidden")
            }, 200)
        };
        _.k.Rv = function(a) {
            if (this.Ua && !this.closed) {
                var b = this.oa.update(a);
                this.render((a - this.oa.rb) / this.oa.Eb, b);
                this.menu.update();
                b = this.header;
                var c = this.oa.rb,
                    d = this.oa.ticks,
                    e = this.oa.Eb;
                b.Aa && _.Zl(b.Xa, FDu(this.oa.hm && this.oa.Mb > 0 ? this.oa.Mb * e : d * e + (a - c)))
            }
        };
        _.k.vuc = function() {
            var a = this.getRoot().el();
            this.Da.init(a);
            this.Ia.init(a);
            this.Sa.init(a);
            this.Oa.init(a);
            this.Ta.init(a);
            this.Fa.init(a);
            oFu.DOWN.oa.preload()
        };
        _.k.K0b = function() {
            _.hl.add(this.getRoot().el(), "Y6tjYe");
            this.settings.isMobile && window.scrollTo(0, 0);
            this.Nl() ? this.Qa = !0 : (IHu(this.menu), this.LBb(), this.resetState(!1), this.Ua = !0, this.closed = !1)
        };
        _.k.LBb = function() {
            var a = this.Ea("JI3Aqc").el();
            _.K.setStyle(a, "width", "");
            _.K.setStyle(a, "height", "");
            var b = _.K.F_(this.Ba.nF());
            if (b.width !== 0) {
                _.K.setStyle(a, "width", b.width + "px");
                _.K.setStyle(a, "height", b.height + "px");
                a = b.width;
                var c = this.settings.isMobile ? 20 : 20 * a / 600;
                a -= c * 2;
                c = b.height - c * 2;
                a: switch (this.settings.Da) {
                    case 2:
                        var d = 512;
                        break a;
                    case 1:
                        d = 96;
                        break a;
                    default:
                        d = 256
                }
                var e = this.oa.oa;
                d = a * c / d;
                if (e.oa) e.oa = Math.min(Math.floor(a / e.Aa.width), Math.floor(c / e.Aa.height));
                else {
                    e.oa = Math.floor(Math.sqrt(d));
                    if (e.settings.isMobile) e.Aa = new _.wl(Math.floor(a / e.oa), Math.floor(c / e.oa));
                    else switch (e.settings.Da) {
                        default:
                        case 0:
                            e.Aa = new _.wl(17, 15);
                            break;
                        case 1:
                            e.Aa = new _.wl(10, 9);
                            break;
                        case 2:
                            e.Aa = new _.wl(24, 21)
                    }
                    e.Ca = new _.ql(0, 0)
                }
                a = this.Ba;
                a.Jb = b;
                a.canvas.width = a.Jb.width;
                a.canvas.height = a.Jb.height;
                a.Ua.canvas.width = a.oa.oa.Aa.width * a.oa.oa.oa;
                a.Ua.canvas.height = a.oa.oa.Aa.height * a.oa.oa.oa;
                a.Ia.canvas.width = a.oa.oa.Aa.width * a.oa.oa.oa;
                a.Ia.canvas.height = a.oa.oa.Aa.height * a.oa.oa.oa;
                b = hZ(a.settings, 4) ?
                    4 : 0;
                c = a.oa.oa.Aa.height - a.oa.oa.Ca.y + b;
                a.Aa.canvas.width = (a.oa.oa.Aa.width - a.oa.oa.Ca.x + b) * a.oa.oa.oa;
                a.Aa.canvas.height = c * a.oa.oa.oa;
                a.Ba.canvas.width = a.Aa.canvas.width;
                a.Ba.canvas.height = a.Aa.canvas.height;
                a.Da.canvas.width = a.Aa.canvas.width;
                a.Da.canvas.height = a.Aa.canvas.height;
                a.Ca.canvas.width = (a.oa.oa.Aa.width + b) * a.oa.oa.oa;
                a.Ca.canvas.height = (a.oa.oa.Aa.height + b) * a.oa.oa.oa;
                bFu(this.Ba.rb);
                yHu(this.menu);
                hZ(this.settings, 4) && jHu(this.oa)
            }
        };
        _.k.render = function(a, b) {
            this.Ba.render(a, b);
            b = kHu(this.oa, jGu(this.settings));
            a = String(b);
            this.oa.hm || b === void 0 || pHu(this.header, this.oa.Dh, a);
            var c = String(kHu(this.oa, jGu(this.settings, !0)));
            b = this.menu;
            a = this.settings.Fa ? a : c;
            _.Zl(b.settings.Fa ? b.Ba.kEc : b.Qd, this.oa.Dh);
            _.Zl(b.settings.Fa ? b.Ba.NOa : b.Jd, a)
        };
        _.k.zHe = function() {
            _.gu([new _.yn(this.getRoot().el(), "hide")]);
            this.trigger(_.Tv("snake_closed"))
        };
        _.k.Fid = function() {
            this.closed = !0;
            CHu(this.menu);
            this.YOc(!0);
            _.hl.remove(this.getRoot().el(), "Y6tjYe")
        };
        _.k.YOc = function(a) {
            a = a === void 0 ? !1 : a;
            !hZ(this.settings, 19) && !a || this.oa.hm || this.menu.isVisible() || (this.oa.Jc = !0, this.oa.hm = !0, this.oa.Ab = !0, oHu(this.menu, 0, this.oa.Dh), a = this.oa.Aa, a.direction !== "NONE" && (a.rb = a.oa[a.oa.length - 1]), hZ(this.settings, 5) && XGu(this.oa.Aa), hZ(this.settings, 11) && (this.oa.Ta = !1), this.oa.b5b(), a = this.oa.ticks === 0 && this.oa.Aa.direction === "NONE" ? 0 : (Date.now() - this.oa.rb) / this.oa.Eb, this.oa.Mb = this.oa.ticks + a)
        };
        _.k.Hid = function() {
            this.muted = !this.muted;
            var a = this.header,
                b = this.muted;
            (b ? _.hl.add : _.hl.remove)(a.Ab, "LaTyvd");
            (b ? _.hl.remove : _.hl.add)(a.rb, "LaTyvd");
            this.muted ? (_.Wsu(this.Da), _.Wsu(this.Ia), _.Wsu(this.Sa), _.Wsu(this.Oa), _.Wsu(this.Ta), _.Wsu(this.Fa)) : (_.Xsu(this.Da), _.Xsu(this.Ia), _.Xsu(this.Sa), _.Xsu(this.Oa), _.Xsu(this.Ta), _.Xsu(this.Fa))
        };
        _.k.Gid = function() {
            if (!this.settings.isMobile) {
                var a = this.getRoot().el();
                _.hl.contains(a, "DgO4x") ? (_.hl.remove(a, "DgO4x"), this.header.toggleFullscreen(!1)) : (_.hl.add(a, "DgO4x"), this.header.toggleFullscreen(!0))
            }
        };
        _.k.yge = function() {
            var a = this.getRoot().el();
            _.hl.toggle(a, "b7c3Cc");
            this.oa.oa.oa = 0;
            this.LBb();
            this.resetState(!1);
            a = _.hl.contains(a, "b7c3Cc");
            var b;
            (b = this.oa.localStorage) == null || b.set("virtual_joystick_enabled", a);
            _.hu(a ? this.Ea("fIqioc").el() : this.Ea("ZxgYgc").el())
        };
        _.k.DHe = function() {
            var a = this.menu;
            a.Aa = "settings";
            IHu(a);
            qZ(a, a.oa.jR.get("apple"), !0, a.settings.Sb);
            qZ(a, a.oa.jR.get("trophy"), !0, a.settings.Jb);
            qZ(a, a.oa.jR.get("count"), !0, a.settings.Qa);
            qZ(a, a.oa.jR.get("speed"), !0, a.settings.Sa);
            qZ(a, a.oa.jR.get("size"), !0, a.settings.Xa);
            qZ(a, a.oa.jR.get("color"), !0, a.settings.Zb);
            qZ(a, a.oa.jR.get("theme"), !0, a.settings.wc);
            qZ(a, a.oa.jR.get("graphics"), !0, a.settings.Ba);
            tHu(a, a.oa.rows[0]);
            zHu(a, !0);
            _.hu(a.Kl)
        };
        _.k.wuc = function() {
            this.settings.Fa || (this.oa.Dh = 0);
            EHu(this.menu)
        };
        _.k.BHe = function() {
            var a = this.menu;
            a.Aa = "combo";
            IHu(a);
            _.hu(a.rb)
        };
        _.k.xuc = function() {
            if (this.settings.Fa) {
                this.oa.Dh = 0;
                var a = this.settings;
                a.Eb !== null && (a.Qa = a.Eb.C3b, a.Xa = a.Eb.o4b, a.Sa = a.Eb.Hvf, a.Eb = null)
            }
            FHu(this.menu)
        };
        _.k.CHe = function() {
            for (var a = this.menu, b = a.Ba.Tsg; b.firstChild;) b.firstChild.remove();
            for (var c = 0; c < 6; c++) {
                var d = document.createElement("div");
                b.appendChild(d);
                var e = gGu(c),
                    f = document.createElement("div");
                _.Zl(f, e.inb);
                _.hl.add(f, "Nfs8lc");
                d.appendChild(f);
                f = document.createElement("div");
                d.appendChild(f);
                _.hl.add(f, "Cg6pxb");
                KHu(e, f);
                d = document.createElement("div");
                _.Zl(d, a.Sb(e.inb));
                f.appendChild(d);
                _.hl.add(d, "yUIvmb")
            }
            a.Aa = "previous_daily_challenge";
            IHu(a);
            _.hu(a.Ba.Ssg)
        };
        _.k.ZTf = function() {
            this.settings.Fa ? this.wuc() : this.xuc()
        };
        _.k.AHe = function(a) {
            LHu(this.menu, a.targetElement.el())
        };
        _.k.gcg = function(a) {
            GHu(this.menu) && (this.settings.isMobile || a.event.button !== 0 || OHu(this.menu, a.event.clientX, a.event.clientY, a.event.offsetX, a.targetElement.el()))
        };
        _.k.jcg = function(a) {
            if (GHu(this.menu)) {
                var b = a.event;
                if (this.settings.isMobile && b.touches !== void 0 && b.touches !== null && b.touches.length !== 0) {
                    a = a.targetElement.el();
                    b = b.touches[0];
                    var c = a.getBoundingClientRect();
                    OHu(this.menu, b.clientX, b.clientY, b.pageX - c.left, a)
                }
            }
        };
        _.k.XVf = function(a) {
            if (this.Aa !== void 0) {
                var b = [this.Aa.right, this.Aa.x_, this.Aa.left, this.Aa.up];
                if (a.type === "touchend" || this.oa.hm) {
                    a = _.n(b);
                    for (var c = a.next(); !c.done; c = a.next()) _.hl.remove(c.value, "gkaUEd");
                    _.K.setStyle(this.Aa.Ht, "opacity", "")
                } else if (c = a.event, this.settings.isMobile && c.touches !== void 0 && c.touches !== null && c.touches.length !== 0) {
                    a = new _.ql(0, window.innerHeight - this.Aa.height);
                    var d = new _.ql(a.x + this.Aa.width / 2, a.y + this.Aa.height / 2);
                    c = c.touches[0];
                    var e = new _.ql(c.clientX - d.x, c.clientY -
                            d.y),
                        f = _.ml(Math.atan2(e.y, e.x) * 180 / Math.PI, 360),
                        g = "NONE";
                    d = null;
                    _.Fgb(e) < this.Aa.radius * 1.25 && (f < 45 || f > 315 ? (g = "RIGHT", d = this.Aa.right) : f > 45 && f < 135 ? (g = "DOWN", d = this.Aa.x_) : f > 135 && f < 225 ? (g = "LEFT", d = this.Aa.left) : f > 225 && f < 315 && (g = "UP", d = this.Aa.up));
                    e = QGu(this.oa.Aa);
                    f = TGu(this.oa.Aa);
                    g === "NONE" || g === cZ(e) && !f || RHu(this, g);
                    d && _.hl.add(d, "gkaUEd");
                    b = _.n(b);
                    for (g = b.next(); !g.done; g = b.next()) g = g.value, g !== d && _.hl.remove(g, "gkaUEd");
                    a = new _.ql(Math.round(c.clientX - a.x), Math.round(c.clientY - a.y));
                    _.K.setStyle(this.Aa.Ht,
                        "opacity", d ? "1" : "");
                    _.K.setStyle(this.Aa.Ht, "transform", "translate(" + a.x + "px, " + a.y + "px)");
                    !this.Aa.qYd && d && (this.Aa.qYd = !0, _.hu(this.Aa.container))
                }
            }
        };
        _.k.FHe = function() {
            PHu(this.menu)
        };
        _.k.EHe = function() {
            QHu(this.menu)
        };
        _.k.yHe = function(a) {
            return kHu(this.oa, a)
        };
        _.k.sQg = function() {
            AHu(this.menu)
        };
        _.k.ZSg = function() {
            return this.Aa
        };
        _.M(_.rZ.prototype, "WMgRu", function() {
            return this.ZSg
        });
        _.M(_.rZ.prototype, "aNnDbe", function() {
            return this.sQg
        });
        _.M(_.rZ.prototype, "b7QE4d", function() {
            return this.EHe
        });
        _.M(_.rZ.prototype, "Km979c", function() {
            return this.FHe
        });
        _.M(_.rZ.prototype, "G0IZGc", function() {
            return this.XVf
        });
        _.M(_.rZ.prototype, "wGlzEb", function() {
            return this.jcg
        });
        _.M(_.rZ.prototype, "NB8Tmd", function() {
            return this.gcg
        });
        _.M(_.rZ.prototype, "oAxMnf", function() {
            return this.AHe
        });
        _.M(_.rZ.prototype, "D5KV7e", function() {
            return this.ZTf
        });
        _.M(_.rZ.prototype, "DNTNUc", function() {
            return this.CHe
        });
        _.M(_.rZ.prototype, "AFvrle", function() {
            return this.xuc
        });
        _.M(_.rZ.prototype, "siBdCd", function() {
            return this.BHe
        });
        _.M(_.rZ.prototype, "SGRdwb", function() {
            return this.wuc
        });
        _.M(_.rZ.prototype, "rxqFXd", function() {
            return this.DHe
        });
        _.M(_.rZ.prototype, "Uex1ad", function() {
            return this.yge
        });
        _.M(_.rZ.prototype, "zeJAAd", function() {
            return this.Gid
        });
        _.M(_.rZ.prototype, "DGXxE", function() {
            return this.Hid
        });
        _.M(_.rZ.prototype, "nPcntd", function() {
            return this.YOc
        });
        _.M(_.rZ.prototype, "DtamMe", function() {
            return this.Fid
        });
        _.M(_.rZ.prototype, "pRhyN", function() {
            return this.zHe
        });
        _.M(_.rZ.prototype, "N9WUh", function() {
            return this.LBb
        });
        _.M(_.rZ.prototype, "SQ1Mjf", function() {
            return this.K0b
        });
        _.M(_.rZ.prototype, "qJhGM", function() {
            return this.vuc
        });
        _.M(_.rZ.prototype, "JrrOHc", function() {
            return this.Eid
        });
        _.M(_.rZ.prototype, "FLGh5d", function() {
            return this.uIf
        });
        _.M(_.rZ.prototype, "CA8Mtd", function() {
            return this.sBf
        });
        _.M(_.rZ.prototype, "TrTq0c", function() {
            return this.wHe
        });
        _.M(_.rZ.prototype, "PJl2Ef", function() {
            return this.hJf
        });
        _.M(_.rZ.prototype, "jzB25", function() {
            return this.rEf
        });
        _.M(_.rZ.prototype, "YDgswc", function() {
            return this.xHe
        });
        _.M(_.rZ.prototype, "SDpWVc", function() {
            return this.aBf
        });
        _.qr(_.xEs, _.rZ);
        _.y();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Hkt = _.B("KvoW8", [], "j4Ca9b");
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.x("pHXghd");
        var Upt = function() {
            _.qIa.apply(this, arguments)
        };
        _.G(Upt, _.qIa);
        Upt.prototype.initialize = function() {
            _.Vpt();
            _.Wpt()
        };
        _.Wpt = function() {};
        _.Vpt = function() {};
        _.zd().Src(Upt);
        _.Vpt = function() {
            _.Mn(_.gf(_.vXa), _.Hkt);
            _.Mn(_.gf(_.zXa), _.xXa);
            _.Mn(_.gf(_.yXa), _.xXa)
        };
        _.y();
    } catch (e) {
        _._DumpException(e)
    }
})(this._s);
// Google Inc.