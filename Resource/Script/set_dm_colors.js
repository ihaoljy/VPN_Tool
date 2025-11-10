// 🎨 danmu-color-args.js
// Author: Yu9191

const STORE_KEY = "dm_color_config_v1";
const PanelIcon = "paintpalette.fill";
const PanelIconColor = "#ff6b6b";

// 默认五色循环
const DEFAULT_MODE = "cycle";
const DEFAULT_COLORS = [
  // —— 基础中性色（舒适护眼） ——
  11193542,  // 淡灰蓝 #A9B7C6（通用护眼背景色）
  11513775,  // 雾霾灰 #B0B0B0（中性灰，低饱和）
  14474460,  // 米白灰 #DCDCDC（柔和偏白）
  12632297,  // 浅卡其 #C0C0A9（温和自然）
  13484213,  // 莫兰迪粉 #CDB7B5（低饱和粉，文艺风）

  // —— 高亮主色（Bilibili / YouTube / Twitch 常见） ——
  16711680,  // 红色 #FF0000（热情、警示、YouTube主色）
  16753920,  // 橙色 #FFA500（活力、斗鱼主色）
  16766720,  // 金黄色 #FFD700（庆祝、B站常用礼物色）
  65280,     // 绿色 #00FF00（平静、自然、科普类）
  255,       // 蓝色 #0000FF（冷静、科技感）
  49151,     // 天蓝 #00BFFF（清爽、B站弹幕常见）
  9055202,   // 紫色 #8A2BE2（高贵、中二风）
  9719407,   // 青色 #94F0FF（冷色调、科技风）
  13467442,  // 粉紫 #CD96CD（温柔、梦幻）
  16738740,  // 粉色 #FF69B4（可爱、少女风）
  16744319,  // 淡红色 #FF7F7F（柔和强调）
  10040319,  // 品红 #9900FF（个性、强烈）
  
  // —— 特殊身份/平台标识色 ——
  9513727,   // Twitch 紫 #9146FF（官方主色）
  16724736,  // YouTube 红 #FF0000（官方标志色）
  16737792,  // 斗鱼橙 #FF7800（主播／管理员）
  3407667,   // Bilibili 蓝 #33CCFF（舰长、守护色）
  16711935,  // 玫红 #FF00FF（高亮玩梗）
  13434879,  // 珊瑚橙 #FF7F50（活泼温暖）
  8454016,   // 湖蓝 #80CED6（清新现代）
  16777215,  // 白色 #FFFFFF（默认弹幕色）
  0          // 黑色 #000000（浅色背景专用）
  
];

// 简单存储封装
const Storage = {
  read(k) {
    try { return $persistentStore.read(k); } catch { return null; }
  },
  write(k, v) {
    try { return $persistentStore.write(String(v), k); } catch { return false; }
  }
};

// 解析 #!arguments 或 argument=
function parseArgs(argString) {
  if (!argString) return {};
  const pairs = argString.split("&").map(s => s.trim()).filter(Boolean);
  const out = {};
  for (const p of pairs) {
    const i = p.indexOf("=");
    if (i === -1) continue;
    const k = p.slice(0, i);
    const v = decodeURIComponent(p.slice(i + 1));
    out[k] = v;
  }
  // 兼容 "mode:random,colors:16711680%2C65280" 格式
  if (!Object.keys(out).length && argString.includes(",")) {
    argString.split(",").forEach(pair => {
      const idx = pair.indexOf(":");
      if (idx === -1) return;
      const k = pair.slice(0, idx).trim();
      const v = decodeURIComponent(pair.slice(idx + 1).trim());
      if (k) out[k] = v;
    });
  }
  return out;
}

// 解析颜色数组
function parseColors(str) {
  if (!str) return [];
  const s = str.replace(/%2C/gi, "|");
  return s.split(/[\|,;]+/).map(x => Number(x.trim())).filter(n => !isNaN(n));
}

// 读取最终配置
function getConfig() {
  const rawArg = typeof $argument !== "undefined" ? String($argument) : "";
  let parsed = parseArgs(rawArg);

  if (!Object.keys(parsed).length) {
    try {
      const raw = Storage.read(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
  }

  const mode = parsed.mode || DEFAULT_MODE;
  const colors = parsed.colors ? parseColors(parsed.colors) : DEFAULT_COLORS;
  const cfg = { mode, colors };

  Storage.write(STORE_KEY, JSON.stringify(cfg));
  return cfg;
}

// 生成随机颜色
function randColor() {
  let n;
  do { n = Math.floor(Math.random() * 0x1000000); } while (n === 0xFFFFFF);
  return String(n);
}

function patchP(p, newColor) {
  const parts = p.split(",");
  if (parts.length >= 3) {
    parts[2] = newColor;
    return parts.join(",");
  }
  return p;
}

let ptr = 0;
function nextCycle(colors) {
  if (!colors.length) return randColor();
  const c = colors[ptr % colors.length];
  ptr = (ptr + 1) % colors.length;
  return String(c);
}

// === 面板模式 ===
if (typeof $request === "undefined") {
  const rawArg = typeof $argument !== "undefined" ? String($argument) : "";
  if (rawArg) {
    // 如果传了参数，直接覆盖存储
    Storage.write(STORE_KEY, JSON.stringify(parseArgs(rawArg)));
  }
  const cfg = getConfig();
  $done({
    title: `弹幕改色 (${cfg.mode})`,
    content: `mode: ${cfg.mode}\ncolors: ${cfg.colors.length ? cfg.colors.join("|") : "随机"}`,
    icon: PanelIcon,
    "icon-color": PanelIconColor
  });
}

// === 弹幕接口模式 ===
if ($response && $request && /^https:\/\/danmu\.dalxy\.eu\.org\/\d+\/api\/v2\/comment\//.test($request.url)) {
  try {
    const cfg = getConfig();
    const body = JSON.parse($response.body);

    function process(arr) {
      for (const it of arr) {
        if (it && typeof it.p === "string") {
          let newColor;
          if (cfg.mode === "random") newColor = randColor();
          else if (cfg.mode === "fixed" && cfg.colors.length) newColor = String(cfg.colors[0]);
          else if (cfg.mode === "cycle" && cfg.colors.length) newColor = nextCycle(cfg.colors);
          else newColor = randColor();
          it.p = patchP(it.p, newColor);
        }
      }
    }

    if (Array.isArray(body.comments)) process(body.comments);

    $done({ body: JSON.stringify(body) });
  } catch (e) {
    console.log("[danmu-color] error", e);
    $done({});
  }
}
