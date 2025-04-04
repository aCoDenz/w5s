const WORKER_URLS = ["https://mirror.ayptv.workers.dev", "https://mirror.ipeetv.workers.dev", "https://mirror.ipteev.workers.dev", "https://mirror.iptvee.workers.dev"];
const _0x48818d = {
  width: "100%",
  height: "100%",
  stretching: "uniform",
  controls: true,
  autostart: true,
  mute: false
};
class PlayerManager {
  constructor() {
    this.player = null;
    this.currentChannel = null;
    this.container = document.getElementById("jwplayer");
    this.overlay = document.getElementById("playerOverlay");
  }
  async ["initialize"]() {
    await new Promise(_0x2623e6 => setTimeout(_0x2623e6, 100));
    if (!this.player && typeof jwplayer === "function") {
      this.player = jwplayer("jwplayer");
    }
  }
  ["setupPlayer"](_0x25687f) {
    if (!this.player) {
      return;
    }
    const _0x49266d = {
      ..._0x48818d,
      ..._0x25687f
    };
    this.player.setup(_0x49266d);
    this.setupEventHandlers();
    this.hideOverlay();
  }
  ["setupEventHandlers"]() {
    const _0x5e04ec = {
      agQwh: ".channel-item",
      qJChZ: function (_0x3bf212, _0x10c6e5) {
        return _0x3bf212 !== _0x10c6e5;
      },
      tiiRh: "SCPBX",
      PzIBR: "oFbTD"
    };
    _0x5e04ec.EEjfQ = "Player error:";
    _0x5e04ec.ndJdk = function (_0xe60a2e, _0xc7d2d2) {
      return _0xe60a2e === _0xc7d2d2;
    };
    _0x5e04ec.rnOcz = "plYat";
    _0x5e04ec.jhIcn = "black";
    _0x5e04ec.gQasF = "myhqp";
    _0x5e04ec.nZKww = "WdbRm";
    _0x5e04ec.OHysf = "YTxjJ";
    _0x5e04ec.jggFj = "[18+]";
    _0x5e04ec.WVuyN = "<span class=\"channel-tag adult\">18+</span>";
    _0x5e04ec.LAucy = "nwVhS";
    _0x5e04ec.LJzGN = "YfrfC";
    _0x5e04ec.kPNKk = "Lqfbk";
    _0x5e04ec.iRwrT = "lvrkX";
    _0x5e04ec.GgbPZ = "error";
    _0x5e04ec.WFhZg = "ready";
    _0x5e04ec.mNWSv = "play";
    if (!this.player) {
      return;
    }
    this.player.on(_0x5e04ec.GgbPZ, _0x1e9fce => {
      console.error(_0x5e04ec.EEjfQ, _0x1e9fce);
      if (this.container) {
        if (_0x5e04ec.ndJdk(_0x5e04ec.rnOcz, _0x5e04ec.rnOcz)) {
          this.container.style.backgroundColor = _0x5e04ec.jhIcn;
        }
      }
    });
    this.player.on(_0x5e04ec.WFhZg, () => {
      if (_0x5e04ec.ndJdk(_0x5e04ec.gQasF, _0x5e04ec.gQasF)) {
        this.hideOverlay();
        if (this.container) {
          if (_0x5e04ec.ndJdk(_0x5e04ec.nZKww, _0x5e04ec.OHysf)) {
            const _0x1a7a20 = _0x1e1cfd.target.value.toLowerCase().trim();
            this.filteredChannels = this.channels.filter(_0x2cc0ec => _0x2cc0ec.name.toLowerCase().includes(_0x1a7a20));
            this.renderChannels();
          } else {
            this.container.style.backgroundColor = '';
          }
        }
      } else {
        _0x537bf0 = _0x22e86b;
      }
    });
    this.player.on(_0x5e04ec.mNWSv, () => {
      if (_0x5e04ec.ndJdk(_0x5e04ec.LAucy, _0x5e04ec.LJzGN)) {
        _0x5e8c9d.destroy();
      } else {
        this.hideOverlay();
        if (this.container) {
          if (_0x5e04ec.ndJdk(_0x5e04ec.kPNKk, _0x5e04ec.iRwrT)) {
            const _0x542463 = _0x11555d.name.replace(_0x5e04ec.jggFj, _0x5e04ec.WVuyN);
            return "\n                    <div class=\"channel-item\" data-channel-name=\"" + _0x51443d.name + "\">\n                        <div class=\"channel-name\">" + _0x542463 + "</div>\n                    </div>\n                ";
          } else {
            this.container.style.backgroundColor = '';
          }
        }
      }
    });
  }
  ["hideOverlay"]() {
    if (this.overlay) {
      this.overlay.classList.add("hidden");
    }
  }
  ["attemptPlayback"]() {
    return new Promise((_0x27d3fb, _0x5a8541) => {
      const _0x2120e6 = () => {
        _0x375bee();
        _0x27d3fb();
      };
      const _0xa51a14 = _0x2c80a6 => {
        _0x375bee();
        _0x5a8541(_0x2c80a6);
      };
      const _0x375bee = () => {
        this.player.off("play", _0x2120e6);
        this.player.off("error", _0xa51a14);
      };
      this.player.on("play", _0x2120e6);
      this.player.on("error", _0xa51a14);
    });
  }
  async ["destroy"]() {
    const _0x2a2780 = {
      UbLIX: function (_0x2147bd, _0x1ad1fd) {
        return _0x2147bd * _0x1ad1fd;
      }
    };
    _0x2a2780.CIbuO = function (_0xb2c2c5, _0x38baa6) {
      return _0xb2c2c5 === _0x38baa6;
    };
    _0x2a2780.QYQDP = "ovLtm";
    await new Promise(_0x286f47 => setTimeout(_0x286f47, 100));
    if (this.player) {
      if (_0x2a2780.CIbuO(_0x2a2780.QYQDP, _0x2a2780.QYQDP)) {
        this.player.remove();
        this.player = null;
        this.currentChannel = null;
      } else {
        return _0x60ee9c[_0x2baf9c.floor(_0x5d5784.random() * _0x325c1a.length)];
      }
    }
  }
}
class ChannelManager {
  constructor() {
    const _0x27be51 = {
      TSbRb: "active",
      ogXMv: "_blank",
      YFLtG: function (_0x103349, _0xc64d77) {
        return _0x103349 !== _0xc64d77;
      },
      MzZxu: "bbbcX",
      bYPXg: ".channel-item",
      cvDtu: function (_0x11921e, _0x10216f) {
        return _0x11921e !== _0x10216f;
      },
      GONhk: "ALuWS",
      EHcSr: function (_0x58a407, _0x2e2c32) {
        return _0x58a407 === _0x2e2c32;
      },
      VvssD: "fSwGJ",
      tKhVe: "channelsList",
      SRwhA: "channelSearch"
    };
    _0x27be51.VMLPn = "converge";
    _0x27be51.QSoRM = "click";
    this.channelsList = document.getElementById("channelsList");
    this.searchInput = document.getElementById("channelSearch");
    this.channels = [];
    this.filteredChannels = [];
    this.currentCategory = _0x27be51.VMLPn;
    this.playerManager = null;
    this.isRefreshing = false;
    this.channelsList.addEventListener(_0x27be51.QSoRM, async _0x409c8e => {
      const _0x52be05 = {
        sJPXA: "active"
      };
      _0x52be05.AjUpw = "_blank";
      const _0x136951 = _0x409c8e.target.closest(".channel-item");
      if (_0x136951) {
        this.clearActiveChannels();
        _0x136951.classList.add("active");
        const _0x1b2900 = _0x136951.dataset.channelName;
        const _0x182ed9 = this.filteredChannels.find(_0x8a64e5 => _0x8a64e5.name === _0x1b2900);
        if (_0x182ed9) {
          await this.playChannel(_0x182ed9);
        }
      }
    });
  }
  ["clearActiveChannels"]() {
    const _0x2cb2a4 = this.channelsList.querySelectorAll(".channel-item");
    _0x2cb2a4.forEach(_0xed69cb => _0xed69cb.classList.remove("active"));
  }
  ["setPlayerManager"](_0x37fc22) {
    this.playerManager = _0x37fc22;
  }
  async ["initialize"]() {
    this.setupSearch();
    await this.loadChannels();
  }
  ["setupSearch"]() {
    if (!this.searchInput) {
      return;
    }
    this.searchInput.addEventListener("input", _0x1d9908 => {
      const _0x361e95 = _0x1d9908.target.value.toLowerCase().trim();
      this.filteredChannels = this.channels.filter(_0xa7f58 => _0xa7f58.name.toLowerCase().includes(_0x361e95));
      this.renderChannels();
    });
  }
  ["showLoading"]() {
    if (this.channelsList) {
      this.channelsList.innerHTML = "\n                <div class=\"channel-loading\">\n                    <div class=\"loading-spinner\"></div>\n                    <p>Loading channels...</p>\n                </div>\n            ";
    }
  }
  ["showError"](_0x61eb0f) {
    if (this.channelsList) {
      this.channelsList.innerHTML = "\n                <div class=\"channel-error\">\n                    <i data-feather=\"alert-circle\"></i>\n                    <p>" + _0x61eb0f + "</p>\n                </div>\n            ";
      feather.replace();
    }
  }
  async ["loadChannels"]() {
    try {
      this.showLoading();
      const _0x572821 = "channels_" + this.currentCategory;
      const _0x55476a = sessionStorage.getItem(_0x572821);
      if (_0x55476a && !this.isRefreshing) {
        this.channels = JSON.parse(_0x55476a);
        this.filteredChannels = [...this.channels];
        this.renderChannels();
        return;
      }
      let _0x346156 = false;
      let _0x1547dd;
      for (let _0x4246df = 0; _0x4246df < WORKER_URLS.length && !_0x346156; _0x4246df++) {
        try {
          const _0x459f58 = await fetch(WORKER_URLS[_0x4246df] + "/channels?category=" + this.currentCategory);
          if (_0x459f58.ok) {
            this.channels = await _0x459f58.json();
            this.filteredChannels = [...this.channels];
            sessionStorage.setItem(_0x572821, JSON.stringify(this.channels));
            this.renderChannels();
            _0x346156 = true;
          }
        } catch (_0xc31238) {
          _0x1547dd = _0xc31238;
          console.warn("Worker " + WORKER_URLS[_0x4246df] + " failed:", _0xc31238);
        }
      }
      if (!_0x346156) {
        throw _0x1547dd || new Error("All workers failed");
      }
    } catch (_0x2ae47c) {
      this.showError("Failed to load channels");
    }
  }
  ["renderChannels"]() {
    const _0x238230 = {
      TxJSN: function (_0x15eb39, _0x131be5) {
        return _0x15eb39 !== _0x131be5;
      }
    };
    _0x238230.fCUrN = "vOoUE";
    _0x238230.fBUWv = "[18+]";
    _0x238230.CxWOv = "<span class=\"channel-tag adult\">18+</span>";
    _0x238230.Snuut = function (_0x1c6831, _0x333099) {
      return _0x1c6831 !== _0x333099;
    };
    _0x238230.NZJHg = "Cnvbi";
    if (!this.filteredChannels.length) {
      if (_0x238230.Snuut(_0x238230.NZJHg, _0x238230.NZJHg)) {
        _0x504f98.location.href = _0x354089;
      } else {
        this.channelsList.innerHTML = "\n                <div class=\"channel-error\">\n                    <i data-feather=\"search\"></i>\n                    <p>No channels found</p>\n                </div>\n            ";
        feather.replace();
        return;
      }
    }
    this.channelsList.innerHTML = this.filteredChannels.map(_0x575e62 => {
      if (_0x238230.fCUrN !== _0x238230.fCUrN) {
        this.hideOverlay();
        if (this.container) {
          this.container.style.backgroundColor = '';
        }
      } else {
        const _0x33696b = _0x575e62.name.replace(_0x238230.fBUWv, _0x238230.CxWOv);
        return "\n                    <div class=\"channel-item\" data-channel-name=\"" + _0x575e62.name + "\">\n                        <div class=\"channel-name\">" + _0x33696b + "</div>\n                    </div>\n                ";
      }
    }).join('');
    feather.replace();
  }
  async ["playChannel"](_0x101dae) {
    await new Promise(_0xa8462c => setTimeout(_0xa8462c, 100));
    try {
      if (this.playerManager) {
        await this.playerManager.destroy();
        await this.playerManager.initialize();
      }
      const _0x1315b0 = await this.fetchStreamData(_0x101dae.name);
      const _0x4c3f0e = Array.isArray(_0x1315b0.streams) && _0x1315b0.streams.length ? _0x1315b0.streams : [_0x1315b0.url];
      for (const _0x59131f of _0x4c3f0e) {
		  var mpdname = _0x59131f.split('t/');
		  var newmpdlink = 'http://143.44.136.110:6910/001/2/ch0000009099000000' + mpdname[1] + '?virtualDomain=001.live_hls.zte.com';
        if (newmpdlink.includes("fbvideos.co")) {
          window.open(newmpdlink, "_blank");
          return;
        }
        try {
          const _0x14cdab = {
            url: newmpdlink
          };
          const _0x200e5e = this.getPlayerConfig(Object.assign({}, _0x1315b0, _0x14cdab));
          this.playerManager.setupPlayer(_0x200e5e);
          await this.playerManager.attemptPlayback();
          this.playerManager.currentChannel = _0x101dae.name;
          return;
        } catch (_0x4ee1ea) {
          console.warn("Candidate stream failed:", newmpdlink, _0x4ee1ea);
        }
      }
    } catch (_0x18e27e) {
      console.error("Play channel error:", _0x18e27e);
    }
  }
  ["getPlayerConfig"](_0x4ca986) {
    const _0x6209e3 = {
      yzlKa: "Key decryption failed:"
    };
    _0x6209e3.dFBZr = "Failed to get stream data";
    _0x6209e3.dHFBm = ".m3u8";
    _0x6209e3.Sialh = function (_0x8c4c9e, _0x1971ea) {
      return _0x8c4c9e === _0x1971ea;
    };
    _0x6209e3.oLWVa = "eJtoq";
    _0x6209e3.HOlLQ = "uqgyd";
    _0x6209e3.KOIpB = "hls";
    _0x6209e3.BUJmV = ".mpd";
    _0x6209e3.EtvsN = function (_0x5b0b86, _0x16ad33) {
      return _0x5b0b86 === _0x16ad33;
    };
    _0x6209e3.NHyJN = "aTmgw";
    _0x6209e3.yTzTk = function (_0x2b2347, _0x1b7ace) {
      return _0x2b2347 !== _0x1b7ace;
    };
    _0x6209e3.fdVHP = "dW5kZWZpbmVkOnVuZGVmaW5lZA==";
    _0x6209e3.KfVSv = function (_0x34c4e5, _0x2245f5) {
      return _0x34c4e5 !== _0x2245f5;
    };
    _0x6209e3.VurOb = "Afmuy";
    _0x6209e3.PAjVy = function (_0x2de4ce, _0x238257) {
      return _0x2de4ce === _0x238257;
    };
    _0x6209e3.jSrNm = "undefined";
    _0x6209e3.rNxCS = "wARgh";
    _0x6209e3.bzWFk = "dash";
    _0x6209e3.ckKOi = "VXAqs";
    if (_0x4ca986.url.includes(_0x6209e3.dHFBm)) {
      if (_0x6209e3.Sialh(_0x6209e3.oLWVa, _0x6209e3.HOlLQ)) {
        _0x36e714.error("Key decryption failed:", _0x38c6e7);
        throw _0x4e8fb8;
      } else {
        const _0x21dfe3 = {
          file: _0x4ca986.url,
          type: _0x6209e3.KOIpB
        };
        return _0x21dfe3;
      }
    }
    if (_0x4ca986.url.includes(_0x6209e3.BUJmV)) {
      if (_0x6209e3.EtvsN(_0x6209e3.NHyJN, _0x6209e3.NHyJN)) {
        if (_0x4ca986.keys && _0x6209e3.yTzTk(_0x4ca986.keys, _0x6209e3.fdVHP)) {
          if (_0x6209e3.KfVSv(_0x6209e3.VurOb, _0x6209e3.VurOb)) {
            if (this.channelsList) {
              this.channelsList.innerHTML = "\n                <div class=\"channel-error\">\n                    <i data-feather=\"alert-circle\"></i>\n                    <p>" + _0x5e4fba + "</p>\n                </div>\n            ";
              _0x2f29c3.replace();
            }
          } else {
            const _0x4d7fec = this.decryptKeys(_0x4ca986.keys);
            if (_0x6209e3.PAjVy(_0x4d7fec.keyId, _0x6209e3.jSrNm) || _0x6209e3.PAjVy(_0x4d7fec.key, _0x6209e3.jSrNm)) {
              if (_0x6209e3.Sialh(_0x6209e3.rNxCS, _0x6209e3.rNxCS)) {
                const _0x2bd25b = {
                  file: _0x4ca986.url,
                  type: _0x6209e3.bzWFk
                };
                return _0x2bd25b;
              } else {
                throw new _0x26f500(_0x6209e3.dFBZr);
              }
            }
            const _0x9c0978 = {
              keyId: _0x4d7fec.keyId,
              key: _0x4d7fec.key
            };
            const _0x2428b5 = {
              clearkey: _0x9c0978
            };
            const _0x209ab2 = {
              file: _0x4ca986.url,
              type: _0x6209e3.bzWFk,
              drm: _0x2428b5
            };
            return _0x209ab2;
          }
        }
        const _0x5ea0bb = {
          file: _0x4ca986.url,
          type: _0x6209e3.bzWFk
        };
        return _0x5ea0bb;
      } else {
        if (_0x5ebf6c) {
          const _0x18c6c6 = _0x366086.apply(_0x20fa7e, arguments);
          _0x48e5a1 = null;
          return _0x18c6c6;
        }
      }
    }
    if (_0x4ca986.keys) {
      if (_0x6209e3.KfVSv(_0x6209e3.ckKOi, _0x6209e3.ckKOi)) {
        const _0xda7dde = _0xd24a15 ? function () {
          if (_0xfcca1b) {
            const _0x1aec47 = _0x299525.apply(_0x1e408d, arguments);
            _0x13c588 = null;
            return _0x1aec47;
          }
        } : function () {};
        _0x28d8bc = false;
        return _0xda7dde;
      } else {
        const _0xebf547 = this.decryptKeys(_0x4ca986.keys);
        const _0x22583a = {
          keyId: _0xebf547.keyId,
          key: _0xebf547.key
        };
        const _0x40883a = {
          clearkey: _0x22583a
        };
        const _0x39456b = {
          file: _0x4ca986.url,
          type: _0x6209e3.bzWFk,
          drm: _0x40883a
        };
        return _0x39456b;
      }
    }
    const _0x644216 = {
      file: _0x4ca986.url
    };
    return _0x644216;
  }
  async ["fetchStreamData"](_0xab3175) {
    const _0x51c793 = encodeURIComponent(_0xab3175);
    const _0x479b9e = WORKER_URLS[Math.floor(Math.random() * WORKER_URLS.length)] + "/stream/" + this.currentCategory + '/' + _0x51c793;
    const _0x1208d4 = await fetch(_0x479b9e);
    if (!_0x1208d4.ok) {
      throw new Error("Failed to get stream data");
    }
    return _0x1208d4.json();
  }
  ["decryptKeys"](_0x23954d) {
    try {
      const _0x44dc96 = atob(_0x23954d);
      const [_0x5996d8, _0x425a6b] = _0x44dc96.split(':');
      const _0x3087b0 = {
        keyId: _0x5996d8,
        key: _0x425a6b
      };
      return _0x3087b0;
    } catch (_0xccd8c1) {
      console.error("Key decryption failed:", _0xccd8c1);
      throw _0xccd8c1;
    }
  }
}
document.addEventListener("DOMContentLoaded", async () => {
  const _0x116ce4 = new PlayerManager();
  const _0x3350b5 = new ChannelManager();
  _0x3350b5.setPlayerManager(_0x116ce4);
  await _0x3350b5.initialize();
  window.addEventListener("beforeunload", () => {
    _0x116ce4.destroy();
  });
});
