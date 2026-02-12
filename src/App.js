import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  MessageCircle, Send, X, Sparkles, Search, Plus, Mic, Brain,
  Shield, BookOpen, TrendingUp, TrendingDown, Eye, ChevronRight, Clock, Zap,
  CheckCircle, AlertTriangle, ThumbsUp, ThumbsDown, Wind, Film, ArrowRight,
  RotateCcw, DollarSign, Factory, FileText, BarChart3, Lightbulb,
  Package, CreditCard, Users, Activity, Receipt, Wrench, Boxes,
  ShoppingCart, ChevronDown, PanelLeftClose, PanelLeft, Settings, User,
  Bell, Sun, Truck, AlertCircle, ArrowUpRight, ArrowDownRight, Layers,
  Volume2, Home, Compass, Star, Coffee, Hash, Lock, Moon, Rewind, FastForward,
  History, Play, Pause, SkipBack, CalendarClock, ExternalLink,
  Presentation, Target, ArrowRightCircle, XCircle, Info
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ANIMATED SVG CHARACTERS
   ═══════════════════════════════════════════════════════════════ */

function GenieChar({ size = 64, state = "idle", whisper = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: "drop-shadow(0 4px 12px rgba(34,211,238,0.3))" }}>
      <defs>
        <linearGradient id="genieGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient>
        <radialGradient id="genieGlow" cx="50%" cy="40%" r="50%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" /><stop offset="100%" stopColor="#22d3ee" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#genieGlow)" style={{ animation: state !== "idle" ? "genieAura 2s ease-in-out infinite" : "genieAura 4s ease-in-out infinite" }} />
      <path d="M50 95 Q45 80 42 70 Q38 58 44 50 Q48 44 50 38" fill="none" stroke="url(#genieGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.4" style={{ animation: "genieTail 3s ease-in-out infinite" }} />
      <path d="M50 95 Q55 78 56 68 Q58 56 54 48 Q51 42 50 38" fill="none" stroke="url(#genieGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.25" style={{ animation: "genieTail 3s ease-in-out infinite 0.5s" }} />
      <ellipse cx="50" cy="42" rx="20" ry="22" fill="url(#genieGrad)" opacity="0.9" style={{ animation: state === "thinking" ? "geniePulse 1.2s ease-in-out infinite" : "genieFloat 3s ease-in-out infinite" }} />
      <circle cx="43" cy="38" r="2.5" fill="#08080f" opacity="0.8" /><circle cx="57" cy="38" r="2.5" fill="#08080f" opacity="0.8" />
      <circle cx="44" cy="37" r="0.8" fill="#fff" opacity="0.9" /><circle cx="58" cy="37" r="0.8" fill="#fff" opacity="0.9" />
      {state === "speaking" ? <ellipse cx="50" cy="46" rx="5" ry="3" fill="#08080f" opacity="0.6" style={{ animation: "genieTalk 0.4s ease-in-out infinite" }} /> : <path d="M44 46 Q50 51 56 46" fill="none" stroke="#08080f" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />}
      <path d="M32 32 Q38 18 50 16 Q62 18 68 32" fill="none" stroke="url(#genieGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="50" cy="17" r="3" fill="#a78bfa" opacity="0.8" style={{ animation: "genieStar 2s ease-in-out infinite" }} />
      {state !== "idle" && [{ cx: 25, cy: 30, r: 1.5, d: 0 }, { cx: 75, cy: 28, r: 1.2, d: 0.5 }, { cx: 30, cy: 55, r: 1, d: 1 }, { cx: 72, cy: 52, r: 1.3, d: 0.8 }].map((p, i) => <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="#22d3ee" opacity="0.6" style={{ animation: `genieSparkle 1.5s ease-in-out ${p.d}s infinite` }} />)}
      {whisper && <g style={{ animation: "whisperBubbleIn 0.6s cubic-bezier(.22,1,.36,1)" }}><ellipse cx="78" cy="22" rx="14" ry="10" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" strokeWidth="1" /><circle cx="66" cy="32" r="3" fill="rgba(167,139,250,0.12)" /><circle cx="62" cy="36" r="1.5" fill="rgba(167,139,250,0.1)" /><text x="78" y="24" textAnchor="middle" fontSize="7" fill="#a78bfa" fontFamily="sans-serif" fontWeight="600">psst!</text></g>}
    </svg>
  );
}

function SentinelChar({ size = 64, state = "idle" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: "drop-shadow(0 4px 12px rgba(34,197,94,0.25))" }}>
      <defs>
        <linearGradient id="sentGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22c55e" /><stop offset="100%" stopColor="#16a34a" /></linearGradient>
        <radialGradient id="sentGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" /><stop offset="100%" stopColor="#22c55e" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="50" cy="50" r="40" fill="url(#sentGlow)" style={{ animation: "sentinelScan 4s ease-in-out infinite" }} />
      <path d="M50 15 L75 30 L75 55 Q75 75 50 88 Q25 75 25 55 L25 30 Z" fill="url(#sentGrad)" opacity="0.85" style={{ animation: state !== "idle" ? "sentinelActive 1.5s ease-in-out infinite" : "sentinelBreathe 3s ease-in-out infinite" }} />
      <path d="M50 20 L70 33 L70 53 Q70 70 50 82" fill="none" stroke="#fff" strokeWidth="1" opacity="0.15" />
      <circle cx="50" cy="46" r="10" fill="none" stroke="#08080f" strokeWidth="2" opacity="0.5" />
      <circle cx="50" cy="46" r="5" fill="#08080f" opacity="0.6" style={{ animation: state === "alert" ? "sentinelEyePulse 0.8s ease-in-out infinite" : "none" }} />
      <circle cx="50" cy="46" r="2" fill="#22c55e" opacity="0.9" /><circle cx="51.5" cy="44.5" r="1" fill="#fff" opacity="0.8" />
      {state !== "idle" && <g opacity="0.3"><line x1="35" y1="55" x2="65" y2="55" stroke="#22c55e" strokeWidth="0.8" style={{ animation: "sentinelScanLine 2s ease-in-out infinite" }} /><line x1="38" y1="60" x2="62" y2="60" stroke="#22c55e" strokeWidth="0.6" style={{ animation: "sentinelScanLine 2s ease-in-out 0.3s infinite" }} /></g>}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.2" strokeDasharray="8 4" style={{ animation: "sentinelRotate 20s linear infinite" }} />
    </svg>
  );
}

function PulseChar({ size = 64, state = "idle" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: "drop-shadow(0 4px 12px rgba(249,115,22,0.25))" }}>
      <defs><linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#ea580c" /></linearGradient></defs>
      <g style={{ transformOrigin: "50px 50px", animation: state !== "idle" ? "pulseGearSpin 6s linear infinite" : "none" }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => <rect key={i} x="46" y="12" width="8" height="12" rx="2" fill="url(#pulseGrad)" opacity="0.8" transform={`rotate(${a} 50 50)`} />)}
      </g>
      <circle cx="50" cy="50" r="22" fill="url(#pulseGrad)" opacity="0.9" style={{ animation: state !== "idle" ? "pulseHeartbeat 1s ease-in-out infinite" : "pulseBreathe 3s ease-in-out infinite" }} />
      <circle cx="50" cy="50" r="16" fill="#08080f" opacity="0.4" />
      <polyline points="30,50 40,50 44,38 48,58 52,42 56,55 60,50 70,50" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" style={{ strokeDasharray: 60, animation: state !== "idle" ? "pulseTrace 1.5s linear infinite" : "pulseTrace 3s linear infinite" }} />
      <path d="M48 42 L52 48 L48 48 L52 58" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" style={{ animation: state === "active" ? "pulseBolt 0.6s ease-in-out infinite" : "none" }} />
    </svg>
  );
}

function OracleChar({ size = 64, state = "idle" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: "drop-shadow(0 4px 12px rgba(167,139,250,0.3))" }}>
      <defs>
        <linearGradient id="oracleGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#7c3aed" /></linearGradient>
        <radialGradient id="oracleInner" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.4" /><stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" /></radialGradient>
      </defs>
      <ellipse cx="50" cy="50" rx="42" ry="20" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.2" style={{ animation: "oracleOrbit1 8s linear infinite" }} />
      <ellipse cx="50" cy="50" rx="38" ry="32" fill="none" stroke="#a78bfa" strokeWidth="0.6" opacity="0.15" style={{ animation: "oracleOrbit2 12s linear infinite reverse" }} />
      <circle cx="50" cy="50" r="24" fill="url(#oracleGrad)" opacity="0.85" style={{ animation: state !== "idle" ? "oraclePulse 2s ease-in-out infinite" : "oracleFloat 4s ease-in-out infinite" }} />
      <circle cx="50" cy="50" r="18" fill="url(#oracleInner)" />
      <ellipse cx="50" cy="48" rx="8" ry="5" fill="none" stroke="#e9d5ff" strokeWidth="1.5" opacity="0.7" />
      <circle cx="50" cy="48" r="3" fill="#e9d5ff" opacity="0.9" style={{ animation: state !== "idle" ? "oracleEyeGlow 1.5s ease-in-out infinite" : "none" }} />
      <circle cx="51" cy="47" r="1" fill="#fff" opacity="0.8" />
      {state !== "idle" && [0, 60, 120, 180, 240, 300].map((a, i) => <line key={i} x1="50" y1="50" x2={50 + Math.cos(a * Math.PI / 180) * 38} y2={50 + Math.sin(a * Math.PI / 180) * 38} stroke="#a78bfa" strokeWidth="0.5" opacity="0.2" style={{ animation: `oracleRay 2s ease-in-out ${i * 0.3}s infinite` }} />)}
      {[{ x: 22, y: 30, c: "✦" }, { x: 78, y: 35, c: "◇" }, { x: 25, y: 68, c: "○" }, { x: 76, y: 65, c: "✧" }].map((r, i) => <text key={i} x={r.x} y={r.y} fontSize="8" fill="#a78bfa" opacity="0.3" textAnchor="middle" style={{ animation: `oracleRune 3s ease-in-out ${i * 0.7}s infinite` }}>{r.c}</text>)}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SMALL HELPERS
   ═══════════════════════════════════════════════════════════════ */
function AnimNum({ value, prefix = "", suffix = "", duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const end = typeof value === "number" ? value : parseFloat(value) || 0;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min((now - t0) / duration, 1);
      setDisplay(+(((1 - Math.pow(1 - p, 3)) * end)).toFixed(2));
      if (p < 1) ref.current = requestAnimationFrame(tick);
    }
    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration]);
  return <>{prefix}{display.toLocaleString("en-IN", { maximumFractionDigits: 2 })}{suffix}</>;
}

function Sparkline({ data, color = "#22d3ee", height = 32, width = 100 }) {
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * (height - 4) - 2}`).join(" ");
  const uid = useMemo(() => `sp-${Math.random().toString(36).slice(2, 7)}`, []);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs><linearGradient id={uid} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.2" /><stop offset="100%" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <polygon points={`0,${height} ${pts} ${width},${height}`} fill={`url(#${uid})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" style={{ strokeDasharray: 250, strokeDashoffset: 250, animation: "drawLine 1.2s ease-out forwards" }} />
    </svg>
  );
}

function ProgressRing({ value, max = 100, size = 38, stroke = 3, color = "#22d3ee" }) {
  const r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(128,128,128,0.08)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={circ} strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" from={circ} to={circ * (1 - Math.min(value / max, 1))} dur="1s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </circle>
    </svg>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "10px 14px", background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.07)", borderRadius: "4px 12px 12px 12px", width: "fit-content" }}>
      {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(34,211,238,0.45)", animation: `typingBounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />)}
    </div>
  );
}

/* Background particles per mode */
function ModeBgParticles({ mode, isDark }) {
  const configs = {
    dashboard: { color: "#22c55e", count: 6, shape: "shield" },
    chat: { color: "#22d3ee", count: 8, shape: "bubble" },
    operations: { color: "#f97316", count: 5, shape: "gear" },
    insights: { color: "#a78bfa", count: 7, shape: "diamond" },
  };
  const cfg = configs[mode];
  const opacity = isDark ? 0.04 : 0.09;
  const particles = useMemo(() => Array.from({ length: cfg.count }, (_, i) => ({
    x: 5 + Math.random() * 90, y: 5 + Math.random() * 90,
    size: 8 + Math.random() * 16, delay: i * 1.5, dur: 12 + Math.random() * 10,
  })), [mode]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {particles.map((p, i) => (
        <div key={`${mode}-${i}`} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
          borderRadius: cfg.shape === "diamond" ? "4px" : cfg.shape === "bubble" ? "50%" : cfg.shape === "gear" ? "3px" : "2px",
          background: cfg.color, opacity,
          transform: cfg.shape === "diamond" ? "rotate(45deg)" : "none",
          animation: `bgParticleFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
      {/* Mode-specific accent glow */}
      <div style={{
        position: "absolute", width: 300, height: 300, borderRadius: "50%",
        background: `radial-gradient(circle, ${cfg.color}${isDark ? "08" : "0a"}, transparent 70%)`,
        top: "10%", right: "-5%", animation: "bgGlow 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: 200, height: 200, borderRadius: "50%",
        background: `radial-gradient(circle, ${cfg.color}${isDark ? "06" : "08"}, transparent 70%)`,
        bottom: "15%", left: "-3%", animation: "bgGlow 10s ease-in-out 3s infinite",
      }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODE DEFINITIONS
   ═══════════════════════════════════════════════════════════════ */
const MODES = {
  dashboard: { id: "dashboard", label: "Dashboard", icon: Home, color: "#22c55e", character: "sentinel", desc: "Business Command Center" },
  chat: { id: "chat", label: "Chat", icon: MessageCircle, color: "#22d3ee", character: "genie", desc: "Ask Genie Anything" },
  operations: { id: "operations", label: "Operations", icon: Factory, color: "#f97316", character: "pulse", desc: "Production & Dispatch" },
  insights: { id: "insights", label: "Insights", icon: Brain, color: "#a78bfa", character: "oracle", desc: "AI Intelligence" },
};

/* ═══════════════════════════════════════════════════════════════
   MOCK DATA
   ═══════════════════════════════════════════════════════════════ */
const MOCK = {
  owner: "Rajesh",
  cash: { available: 1247000, receivable: 435000, payable: 218000, trend: [98, 102, 95, 110, 108, 115, 124.7] },
  sales: { today: 285000, yesterday: 324000, mtd: 4520000, lastMtd: 4180000, trend: [38, 42, 35, 45, 41, 39, 28.5] },
  dues: { total: 1850000, overdue: 620000, trend: [200, 195, 188, 192, 185, 182, 185] },
  bills: { total: 890000, dueSoon: 340000, trend: [95, 92, 88, 90, 89, 87, 89] },
  highlights: [
    "Payment received: Acme Corp ₹1.25L", "New sales order: ABC Ltd ₹10K",
    "Production completed: 200 units Product X", "Monthly target 78% achieved — 6 days remaining",
  ],
  alerts: [
    { severity: "red", title: "GST Mismatch: 3 invoices", desc: "₹2.1L exposure — GSTR-1 vs books mismatch for Dec filing", time: "2h ago", genieA: "I found 3 invoices where GSTR-1 doesn't match your books:\n\n• **INV-1832** — Acme Corp — Diff: ₹1,800\n• **INV-1847** — Metro Traders — Diff: ₹3,500\n• **INV-1851** — Rajdhani Fabrics — Missing in GSTR-1\n\nTotal exposure: **₹2.1L**. The Rajdhani invoice was missed during upload. Deadline is the 11th." },
    { severity: "orange", title: "Credit limit breach: Metro Traders", desc: "Outstanding ₹8.5L against ₹7L limit", time: "4h ago", genieA: "Metro Traders' outstanding is ₹8.5L against ₹7L limit (121% utilized). Their payment trend is improving — last 2 payments on time. I'd suggest approving with 50% advance condition." },
    { severity: "orange", title: "Raw material stock critical", desc: "Fabric-A at 12% — 3 days left", time: "1h ago", genieA: "Fabric-A: 240m remaining, ~80m/day. **3 days left.** Krishna Mills: 300m in 2 days at ₹310/m. Sai Textiles: 500m in 4 days at ₹285/m. I recommend ordering from both." },
  ],
  approvals: [
    { type: "Payment", title: "Sai Textiles", amount: "₹3.45L", by: "Accounts", time: "30m ago" },
    { type: "Sales Order", title: "Sunshine Exports", amount: "₹12.8L", by: "Priya (Sales)", time: "1h ago" },
    { type: "Credit", title: "Metro Traders ₹7L→₹10L", amount: "+₹3L", by: "Regional Mgr", time: "3h ago" },
  ],
  aiInsights: [
    { type: "prediction", icon: "🔮", title: "Cash flow dip expected", desc: "₹4.2L receivables may slip past 45 days." },
    { type: "anomaly", icon: "📈", title: "Surat sales down 12%", desc: "3 dealer orders delayed. Price sensitivity likely." },
    { type: "recommendation", icon: "💡", title: "Margin optimization", desc: "3% price hike on Product X recovers margin." },
    { type: "warning", icon: "💰", title: "Working capital squeeze", desc: "₹6.8L payables vs ₹3.1L receivables next week." },
  ],
  operations: { ordersDelayed: 3, production: 5, productionAtRisk: 2, dispatch: "On track", materialRisk: "Fabric-A critically low" },
  quickActions: [
    { icon: FileText, label: "Quotation", color: "#22d3ee" }, { icon: ShoppingCart, label: "Sales Order", color: "#a78bfa" },
    { icon: Boxes, label: "Stock", color: "#34d399" }, { icon: Factory, label: "Work Order", color: "#f97316" },
    { icon: Receipt, label: "Purchase", color: "#fb7185" }, { icon: CreditCard, label: "Expense", color: "#facc15" },
    { icon: Wrench, label: "Production", color: "#60a5fa" }, { icon: BarChart3, label: "Report", color: "#c084fc" },
  ],
  whispers: [
    "Rajesh… if today's collection pattern holds, cash will be tight by Friday.",
    "Fabric-A prices ticked up another 2%. Product X margin is at risk.",
    "Metro Traders hasn't placed their usual monthly order yet. Something may be off.",
  ],
  confidenceData: [
    { icon: "🧾", label: "GST Filing — clean", status: "safe" }, { icon: "💰", label: "Cash — safe for 8 days", status: "safe" },
    { icon: "📈", label: "Sales MTD — ahead of target", status: "safe" }, { icon: "📦", label: "Stock — 2 items low", status: "caution" },
    { icon: "🏭", label: "Production — 2 at risk", status: "caution" }, { icon: "💳", label: "Payables — ₹3.45L due today", status: "caution" },
  ],
  storySteps: [
    { emoji: "📦", title: "Orders Came In", detail: "4 new orders worth ₹8.2L. Acme Corp largest at ₹3.1L." },
    { emoji: "💸", title: "Money Moved", detail: "₹1.25L received. ₹3.45L paid out. Net outflow: ₹2.2L." },
    { emoji: "🏭", title: "Production Ran", detail: "200 units completed. 3 WOs in progress. 2 at material risk." },
    { emoji: "🛡️", title: "Risks Avoided", detail: "Auto-corrected 1 GST rate. Flagged e-way gap before dispatch." },
    { emoji: "🎯", title: "Decisions Needed", detail: "1 credit extension pending. 1 order needs capacity check." },
  ],
  chatThreads: [
    { id: 1, title: "Cash flow analysis", preview: "Available: ₹12.47L...", time: "2m ago", unread: true },
    { id: 2, title: "GST Mismatch deep dive", preview: "3 invoices flagged...", time: "1h ago", unread: false },
    { id: 3, title: "Fabric-A stock decision", preview: "Krishna Mills vs Sai...", time: "3h ago", unread: false },
    { id: 4, title: "Metro Traders credit", preview: "121% utilized...", time: "Yesterday", unread: false },
    { id: 5, title: "Monthly target review", preview: "78% achieved with 6d...", time: "Yesterday", unread: false },
    { id: 6, title: "Surat sales analysis", preview: "Down 12%, 3 dealers...", time: "2 days ago", unread: false },
  ],
  /* TIME MACHINE — historical snapshots: Days, Weeks, Months */
  timeMachine: {
    days: [
      { label: "7d ago", tag: "Jan 28", cash: 10.2, sales: 3.45, dues: 16.1, bills: 7.2, lowStock: 3, orders: 18, jobs: 8, greeting: "Business was strong. No material risks.", mood: "calm", highlights: ["Large order from Metro ₹4.5L", "All dispatches on time", "GST filing completed"], alerts: [{ severity: "orange", title: "Thread-W40 running low", desc: "5 days stock" }] },
      { label: "5d ago", tag: "Jan 30", cash: 11.8, sales: 4.12, dues: 17.3, bills: 8.1, lowStock: 4, orders: 20, jobs: 10, greeting: "Sales picking up. Cash improving.", mood: "calm", highlights: ["Sales up 18% vs last week", "2 new Surat dealer orders", "Payment received ₹2.1L"], alerts: [{ severity: "orange", title: "Fabric-A below 50%", desc: "Reorder recommended" }] },
      { label: "3d ago", tag: "Feb 1", cash: 13.1, sales: 3.80, dues: 18.0, bills: 8.5, lowStock: 5, orders: 22, jobs: 11, greeting: "Cash peaked. Fabric-A concern beginning.", mood: "caution", highlights: ["Acme Corp ₹3.2L received", "Monthly target 65%"], alerts: [{ severity: "orange", title: "Fabric-A at 30%", desc: "PO recommended" }, { severity: "orange", title: "Metro payment overdue", desc: "₹1.5L past 30 days" }] },
      { label: "Yesterday", tag: "Feb 3", cash: 12.9, sales: 3.24, dues: 18.3, bills: 8.7, lowStock: 6, orders: 22, jobs: 12, greeting: "Fabric-A critical. GST mismatch surfaced.", mood: "caution", highlights: ["200 units Product X done", "Sunshine order received"], alerts: [{ severity: "red", title: "Fabric-A at 15%", desc: "Emergency PO needed" }, { severity: "orange", title: "GST mismatch found", desc: "2 invoices flagged" }] },
      { label: "Today", tag: "Feb 4", cash: 12.47, sales: 2.85, dues: 18.5, bills: 8.9, lowStock: 7, orders: 23, jobs: 12, greeting: "Cash stable. One risk needs attention. 3 approvals waiting.", mood: "caution", highlights: ["Acme Corp ₹1.25L received", "ABC Ltd ₹10K order", "200 units completed", "Target 78% achieved"], alerts: [{ severity: "red", title: "GST Mismatch: 3 invoices", desc: "₹2.1L exposure" }, { severity: "orange", title: "Credit limit breach", desc: "Metro ₹8.5L vs ₹7L" }, { severity: "orange", title: "Fabric-A critical", desc: "3 days remaining" }] },
    ],
    weeks: [
      { label: "4w ago", tag: "Week 2", cash: 8.5, sales: 18.2, dues: 14.0, bills: 6.8, lowStock: 2, orders: 15, jobs: 6, greeting: "Quiet week. Cash was tight but stable.", mood: "calm", highlights: ["Q3 closing activities", "New dealer onboarded"], alerts: [{ severity: "orange", title: "Cash below 10L", desc: "Tight liquidity" }] },
      { label: "3w ago", tag: "Week 3", cash: 9.8, sales: 22.5, dues: 15.2, bills: 7.4, lowStock: 3, orders: 17, jobs: 7, greeting: "Sales pushed well. Cash recovered.", mood: "calm", highlights: ["₹22.5L weekly sales", "2 large export orders", "GST filed on time"], alerts: [] },
      { label: "2w ago", tag: "Week 4", cash: 11.2, sales: 19.8, dues: 16.5, bills: 7.9, lowStock: 4, orders: 19, jobs: 9, greeting: "Production ramped. Stock starting to dip.", mood: "caution", highlights: ["Production up 20%", "Surat region strong"], alerts: [{ severity: "orange", title: "Fabric-A watch", desc: "Stock declining steadily" }] },
      { label: "Last week", tag: "Week 5", cash: 12.4, sales: 24.1, dues: 17.8, bills: 8.3, lowStock: 5, orders: 21, jobs: 10, greeting: "Best sales week. But material risk emerged.", mood: "caution", highlights: ["₹24.1L — best week", "Metro large order ₹4.5L", "Export shipment cleared"], alerts: [{ severity: "orange", title: "Fabric-A at 40%", desc: "2-week supply remaining" }, { severity: "orange", title: "Metro overdue building", desc: "₹1.2L outstanding" }] },
      { label: "This week", tag: "Week 6", cash: 12.47, sales: 8.5, dues: 18.5, bills: 8.9, lowStock: 7, orders: 23, jobs: 12, greeting: "Week just started. Carrying over risks from last week.", mood: "caution", highlights: ["Acme ₹1.25L received", "3 new orders", "Target 78%"], alerts: [{ severity: "red", title: "GST Mismatch", desc: "₹2.1L exposure" }, { severity: "orange", title: "Fabric-A critical", desc: "3 days remaining" }] },
    ],
    months: [
      { label: "3m ago", tag: "Nov '25", cash: 6.2, sales: 72.0, dues: 11.0, bills: 5.8, lowStock: 1, orders: 55, jobs: 22, greeting: "Diwali season peak. Record sales.", mood: "calm", highlights: ["₹72L monthly sales — record", "Diwali orders surge", "All payments on time"], alerts: [] },
      { label: "2m ago", tag: "Dec '25", cash: 8.1, sales: 58.0, dues: 12.5, bills: 6.2, lowStock: 2, orders: 48, jobs: 18, greeting: "Post-Diwali cooldown. Cash recovering.", mood: "calm", highlights: ["GST Q3 filed", "Cash improved 30%", "New product line started"], alerts: [{ severity: "orange", title: "Post-season slowdown", desc: "Sales down 19% vs Nov" }] },
      { label: "Last month", tag: "Jan '26", cash: 10.5, sales: 65.0, dues: 16.8, bills: 7.5, lowStock: 4, orders: 62, jobs: 25, greeting: "Strong start to the year. Fabric-A concern emerged.", mood: "caution", highlights: ["₹65L sales — strong Jan", "3 new dealers added", "Export volume doubled"], alerts: [{ severity: "orange", title: "Fabric-A declining", desc: "Consumption up 25%" }, { severity: "orange", title: "Metro overdue growing", desc: "₹0.8L → ₹1.5L" }] },
      { label: "This month", tag: "Feb '26", cash: 12.47, sales: 8.5, dues: 18.5, bills: 8.9, lowStock: 7, orders: 23, jobs: 12, greeting: "Early Feb. Current state. Risks need attention.", mood: "caution", highlights: ["Acme ₹1.25L received", "GST mismatch found", "Target tracking 78%"], alerts: [{ severity: "red", title: "GST Mismatch", desc: "₹2.1L exposure" }, { severity: "orange", title: "Fabric-A critical", desc: "3 days" }] },
    ],
  },
};

/* Time filter data adjustments */
const TIME_FILTER_DATA = {
  "Today": { cash: 12.47, sales: 2.85, dues: 18.5, bills: 8.9, lowStock: 7, orders: 23, jobs: 12, subCash: "Recv ₹4.35L • Pay ₹2.18L", subSales: "-12% vs yest • MTD +8.1%", subDues: "₹6.2L overdue", subBills: "₹3.4L due this week" },
  "Yesterday": { cash: 12.9, sales: 3.24, dues: 18.3, bills: 8.7, lowStock: 6, orders: 22, jobs: 12, subCash: "Recv ₹3.80L • Pay ₹1.95L", subSales: "+4% vs prior day", subDues: "₹5.8L overdue", subBills: "₹2.9L due this week" },
  "This Week": { cash: 12.47, sales: 8.5, dues: 18.5, bills: 8.9, lowStock: 7, orders: 23, jobs: 12, subCash: "Week net: +₹0.07L", subSales: "MTD pace: ₹45.2L", subDues: "₹6.2L overdue", subBills: "₹3.4L due soon" },
  "This Month": { cash: 12.47, sales: 45.2, dues: 18.5, bills: 8.9, lowStock: 7, orders: 68, jobs: 12, subCash: "Month net: +₹1.97L", subSales: "+8.1% vs last month", subDues: "₹6.2L overdue", subBills: "₹8.9L total payable" },
};

/* ═══ LIVE SCREEN EXPLAINER — contextual deep-dive data ═══ */
const EXPLAINER_DATA = {
  cash: {
    title: "Available Cash", icon: DollarSign, color: "#22d3ee", character: "sentinel",
    summary: "Your working capital is healthy right now. Here's the full picture.",
    breakdown: [
      { label: "Bank Balance", value: "₹12.47L", note: "HDFC + ICICI combined" },
      { label: "Today's Receivables", value: "₹4.35L", note: "3 invoices expected" },
      { label: "Today's Payables", value: "₹2.18L", note: "Sai Textiles ₹3.45L pending" },
      { label: "Cash Runway", value: "8 days", note: "At current burn rate" },
    ],
    risk: "Metro Traders ₹1.5L overdue — 15 days past due. Impacts runway by 1.2 days.",
    nextSteps: [
      { label: "Follow up Metro Traders", action: "Send payment reminder for ₹1.5L overdue" },
      { label: "Review today's payables", action: "₹3.45L due — Sai Textiles payment" },
      { label: "Cash forecast this week", action: "Project cash flow for next 7 days" },
    ],
  },
  sales: {
    title: "Sales Performance", icon: TrendingUp, color: "#a78bfa", character: "sentinel",
    summary: "Today is slower than usual, but the month is tracking well overall.",
    breakdown: [
      { label: "Today", value: "₹2.85L", note: "↓12% vs yesterday's ₹3.24L" },
      { label: "MTD Total", value: "₹45.2L", note: "+8.1% vs last month same period" },
      { label: "Top Customer", value: "Acme Corp", note: "₹8.5L this month" },
      { label: "Monthly Target", value: "78%", note: "6 days remaining" },
    ],
    risk: "Surat region sales down 12% — 3 dealer orders delayed. Price sensitivity likely.",
    nextSteps: [
      { label: "Check Surat dealers", action: "Investigate why 3 orders are delayed" },
      { label: "Push to hit target", action: "₹12.8L needed in 6 days" },
      { label: "Review pricing", action: "Check if recent price hikes are affecting orders" },
    ],
  },
  dues: {
    title: "Dues to Collect", icon: Clock, color: "#f97316", character: "sentinel",
    summary: "Total outstanding is growing. Overdue portion needs immediate attention.",
    breakdown: [
      { label: "Total Outstanding", value: "₹18.5L", note: "Across 23 invoices" },
      { label: "Overdue (30+ days)", value: "₹6.2L", note: "7 invoices — needs follow-up" },
      { label: "Due This Week", value: "₹4.1L", note: "5 invoices maturing" },
      { label: "Biggest Debtor", value: "Metro Traders", note: "₹1.5L — 45 days overdue" },
    ],
    risk: "₹4.2L receivables may slip past 45 days based on collection pattern.",
    nextSteps: [
      { label: "Call Metro Traders", action: "₹1.5L overdue — escalate to relationship manager" },
      { label: "Send reminders", action: "Auto-remind 5 invoices due this week" },
      { label: "Aging analysis", action: "Generate full aging report for review" },
    ],
  },
  bills: {
    title: "Bills to Pay", icon: Receipt, color: "#fb7185", character: "sentinel",
    summary: "Payables are under control. One urgent payment needs your attention.",
    breakdown: [
      { label: "Total Payable", value: "₹8.9L", note: "18 invoices from suppliers" },
      { label: "Due This Week", value: "₹3.4L", note: "Sai Textiles is largest" },
      { label: "Overdue", value: "₹0.8L", note: "2 small vendor payments missed" },
      { label: "Approval Pending", value: "₹3.45L", note: "Sai Textiles — awaiting your OK" },
    ],
    risk: "Delayed payment to Sai Textiles may affect Fabric-A supply chain.",
    nextSteps: [
      { label: "Approve Sai Textiles", action: "₹3.45L payment — safe to approve" },
      { label: "Clear overdue", action: "Pay 2 small vendor invoices (₹0.8L)" },
      { label: "Payment schedule", action: "View this week's full payment calendar" },
    ],
  },
  lowStock: {
    title: "Low Stock Items", icon: Package, color: "#facc15", character: "sentinel",
    summary: "7 items below reorder level. 2 are critical and blocking production.",
    breakdown: [
      { label: "Fabric-A", value: "240m left", note: "🔴 3 days — CRITICAL" },
      { label: "Dye-Blue-R4", value: "15 units", note: "🔴 2 days — CRITICAL" },
      { label: "Thread-W40", value: "120 spools", note: "🟡 5 days remaining" },
      { label: "4 more items", value: "Below reorder", note: "🟡 1-2 weeks supply" },
    ],
    risk: "Fabric-A is blocking 2 active work orders. Emergency PO needed immediately.",
    nextSteps: [
      { label: "Order Fabric-A", action: "Emergency PO — Krishna Mills 2-day delivery" },
      { label: "Order Dye-Blue-R4", action: "PO to regular supplier — 3 day lead time" },
      { label: "Stock audit", action: "Full inventory health check" },
    ],
  },
  orders: {
    title: "Active Orders", icon: ShoppingCart, color: "#34d399", character: "sentinel",
    summary: "23 orders in pipeline. 3 are delayed and need production attention.",
    breakdown: [
      { label: "New (Today)", value: "3", note: "ABC Ltd, Metro, Surat dealer" },
      { label: "In Production", value: "12", note: "5 on schedule, 2 at risk" },
      { label: "Ready to Dispatch", value: "5", note: "All on track for today" },
      { label: "Delayed", value: "3", note: "WO-1201, WO-1204, WO-1209" },
    ],
    risk: "3 delayed orders risk customer relationships. Material shortage is root cause.",
    nextSteps: [
      { label: "Resolve WO-1201", action: "Needs Fabric-A — blocked on PO" },
      { label: "Dispatch today's 5", action: "Generate e-way bills and schedule pickup" },
      { label: "Order pipeline view", action: "See full order backlog and timeline" },
    ],
  },
  jobs: {
    title: "Jobs in Progress", icon: Factory, color: "#60a5fa", character: "sentinel",
    summary: "12 production jobs running. 2 at material risk.",
    breakdown: [
      { label: "On Schedule", value: "8 jobs", note: "Expected to complete on time" },
      { label: "At Risk", value: "2 jobs", note: "Fabric-A shortage blocking" },
      { label: "Completed Today", value: "2 jobs", note: "200 units Product X finished" },
      { label: "Starting Tomorrow", value: "3 jobs", note: "Pending material confirmation" },
    ],
    risk: "2 jobs will halt within 2 days without Fabric-A. Affects ₹4.5L in order value.",
    nextSteps: [
      { label: "Prioritize Fabric-A PO", action: "Unblock 2 at-risk production jobs" },
      { label: "Update customers", action: "Notify affected order customers of delay" },
      { label: "Production schedule", action: "View weekly production plan" },
    ],
  },
};

/* ═══ AMBIENT FLOATING WHISPERS — idle-triggered gentle nudges ═══ */
const AMBIENT_WHISPERS = [
  { text: "I'll keep watching. I'll only call you if something really matters.", mood: "calm", emoji: "🧘" },
  { text: "Everything looks steady right now. You're in good shape.", mood: "calm", emoji: "✨" },
  { text: "Noticed you haven't checked stock levels today. Fabric-A is worth a look.", mood: "nudge", emoji: "📦" },
  { text: "Metro Traders usually orders by now. Might be worth a call.", mood: "nudge", emoji: "📞" },
  { text: "Cash position is healthy. No urgent moves needed.", mood: "calm", emoji: "💰" },
  { text: "I ran a quick check — all GST filings are on track this month.", mood: "calm", emoji: "🧾" },
  { text: "Production is humming along. 2 jobs completed ahead of schedule today.", mood: "calm", emoji: "🏭" },
  { text: "Just a thought — reviewing margins this week could save ₹40K next month.", mood: "nudge", emoji: "💡" },
  { text: "Quiet moment. Good time to approve that pending Sai Textiles payment.", mood: "nudge", emoji: "✅" },
  { text: "All systems normal. I'm here if you need me.", mood: "calm", emoji: "🛡️" },
];

/* ═══ SCENE 3: CAUSE-EFFECT CHAINS ═══ */
const CAUSE_EFFECT_CHAINS = {
  fabric: [
    { label: "Fabric-A Cost", value: "↑ 8%", color: "#f97316", emoji: "🧵" },
    { label: "Product X Margin", value: "↓ 1.8%", color: "#ef4444", emoji: "💹" },
    { label: "Cash Runway Risk", value: "↓ 1.2 days", color: "#ef4444", emoji: "💰" },
  ],
  sales: [
    { label: "Surat Orders", value: "↓ 12%", color: "#f97316", emoji: "📉" },
    { label: "MTD Revenue", value: "Pressure", color: "#eab308", emoji: "📊" },
    { label: "Target Gap", value: "₹12.8L left", color: "#ef4444", emoji: "🎯" },
  ],
  stock: [
    { label: "Fabric-A Stock", value: "3 days", color: "#ef4444", emoji: "📦" },
    { label: "2 Work Orders", value: "Blocked", color: "#ef4444", emoji: "🏭" },
    { label: "Order Delivery", value: "At Risk", color: "#f97316", emoji: "🚚" },
  ],
};

/* ═══ SCENE 4: BEHIND-THE-SCENES STEPS ═══ */
const BEHIND_SCENES_STEPS = [
  { icon: "📋", label: "3 Payment Vouchers created", delay: 400 },
  { icon: "🔒", label: "Credit controls verified — all within limits", delay: 900 },
  { icon: "📊", label: "Audit trail logged — timestamped, role-tagged", delay: 1400 },
  { icon: "💰", label: "Cash forecast updated — runway recalculated", delay: 1900 },
  { icon: "✅", label: "ERPNext entries posted — no manual data entry", delay: 2400 },
];

/* ═══ SCENE 5: ROLE-BASED VIEWS ═══ */
const ROLE_VIEWS = {
  owner: { label: "Owner", emoji: "👔", greeting: `Good morning, ${MOCK.owner} ☀️`, desc: "Full business overview" },
  accountant: {
    label: "Accountant", emoji: "🧾", greeting: "Hey Priya — accounts are mostly clean", desc: "Compliance & financial view",
    cards: [
      { label: "GSTR-1 Status", value: "3 mismatches", color: "#f97316", detail: "₹2.1L exposure — deadline 11th" },
      { label: "GSTR-3B", value: "Filed ✓", color: "#22c55e", detail: "Auto-filed on 8th" },
      { label: "TDS Deducted", value: "₹0.82L", color: "#22d3ee", detail: "All challans ready" },
      { label: "Reconciliation", value: "94%", color: "#a78bfa", detail: "6% pending — bank statement gap" },
    ],
    tasks: [
      { done: true, text: "Bank reconciliation — 94% matched" },
      { done: true, text: "Payment vouchers posted — 12 entries today" },
      { done: false, text: "3 GSTR-1 mismatches need resolution" },
      { done: false, text: "E-way bills for 2 dispatches pending" },
    ],
  },
  factory: {
    label: "Factory", emoji: "🏭", greeting: "Suresh — production is running, 2 jobs at risk", desc: "Production & material view",
    cards: [
      { label: "Active Jobs", value: "12", color: "#60a5fa", detail: "8 on schedule, 2 at risk, 2 done today" },
      { label: "Material Status", value: "2 Critical", color: "#ef4444", detail: "Fabric-A (3d), Dye-Blue (2d)" },
      { label: "Units Produced", value: "200", color: "#22c55e", detail: "Product X — batch completed" },
      { label: "Dispatch Queue", value: "5 ready", color: "#34d399", detail: "All e-way bills generated" },
    ],
    tasks: [
      { done: true, text: "Morning batch — 200 units Product X completed" },
      { done: true, text: "Quality check passed — 0 defects" },
      { done: false, text: "Fabric-A PO — awaiting owner approval" },
      { done: false, text: "WO-1201 blocked — material not issued" },
    ],
  },
};

const CHAT_RESPONSES = {
  cash: "💰 **Cash Position**\n\nAvailable: **₹12.47L**\n• Receivable today: ₹4.35L\n• Payable today: ₹2.18L\n• Runway: 8 days at current burn\n\nBiggest risk: Metro Traders ₹1.5L overdue (15 days).",
  sales: "📈 **Sales**\n\nToday: ₹2.85L (↓12% vs yesterday)\nMTD: ₹45.2L (+8.1%)\n\nSurat region down 12% — 3 dealer orders delayed. Likely price sensitivity from raw material cost increase.",
  gst: "🧾 **Compliance**\n\n• GSTR-1: 🟡 3 mismatches (₹2.1L exposure)\n• GSTR-3B: 🟢 Filed\n• E-way: 🟡 2 missing\n• TDS: 🟢 Clear\n\nGSTR-1 mismatch is top risk. Deadline: 11th.",
  profit: "💹 **Margins**\n\nGross: 34.2% (↓1.8%)\nCause: Fabric-A cost +8%\nBest: Silk Organza (42%)\n\n3% price adjustment on Product X recovers most of the loss.",
  stock: "📦 **Inventory**\n\n🔴 Fabric-A: 240m (3 days)\n🔴 Dye-Blue-R4: 15 units (2 days)\n🟡 5 more items below reorder\n\nFabric-A is blocking 2 work orders. Emergency PO recommended.",
  approve: "📋 **3 Pending Approvals**\n\n1. 💳 Sai Textiles — ₹3.45L (safe)\n2. 📦 Sunshine Exports SO — ₹12.8L (recommend yes)\n3. 🏦 Metro Traders credit — suggest ₹9L not ₹10L\n\nWhich one should I detail?",
  hello: "Hey Rajesh! 👋\n\nBusiness looks stable. Cash is healthy, production running, sales ahead of target.\n\n⚠️ One risk: GST mismatch on 3 invoices.\n\nWhat would you like to know?",
  default: "I'd need to pull data for that. Try asking about:\n• 💰 Cash  • 📈 Sales  • 🧾 GST\n• 💹 Margins  • 📦 Stock  • ✅ Approvals",
};

function matchResp(q) {
  const l = q.toLowerCase();
  if (/hello|hi |hey|morning|up/.test(l)) return "hello";
  if (/cash|money|balance|fund/.test(l)) return "cash";
  if (/sale|revenue|order|dealer/.test(l)) return "sales";
  if (/gst|compliance|tax|filing/.test(l)) return "gst";
  if (/profit|margin|cost|pric/.test(l)) return "profit";
  if (/stock|inventory|material|fabric/.test(l)) return "stock";
  if (/approv|pending/.test(l)) return "approve";
  return "default";
}

/* ═══════════════════════════════════════════════════════════════
   MAIN APP — UNIFIED ERPSENSE
   ═══════════════════════════════════════════════════════════════ */
export default function ERPSenseUnified() {
  const [mode, setMode] = useState("dashboard");
  const [chatMsgs, setChatMsgs] = useState([{ id: 0, from: "ai", text: `Hey ${MOCK.owner}! 👋 I'm your ERPSense Genie. Ask me anything.`, time: "Now" }]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [genieState, setGenieState] = useState("idle");
  const [confidenceMode, setConfidenceMode] = useState(false);
  const [expandedAlert, setExpandedAlert] = useState(null);
  const [approvalStates, setApprovalStates] = useState({});
  const [modeTransition, setModeTransition] = useState(false);
  const [timeFilter, setTimeFilter] = useState("Today");
  const [showTimeDD, setShowTimeDD] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [timeMachineOpen, setTimeMachineOpen] = useState(false);
  const [tmZoom, setTmZoom] = useState("days"); // days | weeks | months
  const [tmIndex, setTmIndex] = useState(-1); // -1 = live / today
  const [tmAnimating, setTmAnimating] = useState(false);
  const [activeThread, setActiveThread] = useState(null);
  const [explainer, setExplainer] = useState(null); // key from EXPLAINER_DATA or null
  const [modeEntrance, setModeEntrance] = useState("dashboard"); // shows entrance animation
  const [entranceFading, setEntranceFading] = useState(false);
  const [floatingWhisper, setFloatingWhisper] = useState(null); // { text, mood, emoji, phase }
  const [wakeUpActive, setWakeUpActive] = useState(false); // Scene 1 wake-up overlay
  const [activeRole, setActiveRole] = useState("owner"); // Scene 5 role switch
  const [bulkApproved, setBulkApproved] = useState(false); // Scene 4 bulk approval
  const [behindScenes, setBehindScenes] = useState([]); // Scene 4 behind-scenes steps
  const [longPressTimer, setLongPressTimer] = useState(null); // Scene 6 long-press
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const msgId = useRef(1);
  const ambientIdx = useRef(0);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMsgs, isTyping]);

  // Auto-dismiss initial mode entrance
  useEffect(() => {
    const t1 = setTimeout(() => setEntranceFading(true), 1200);
    const t2 = setTimeout(() => setModeEntrance(null), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Open explainer panel for a metric card
  const openExplainer = useCallback((key) => {
    setExplainer(EXPLAINER_DATA[key] || null);
  }, []);

  // ═══ AMBIENT FLOATING WHISPER — periodic, fires even while user is active ═══
  useEffect(() => {
    let fadeT, removeT, nextT;
    const fireWhisper = () => {
      const w = AMBIENT_WHISPERS[ambientIdx.current % AMBIENT_WHISPERS.length];
      ambientIdx.current++;
      setFloatingWhisper({ ...w, phase: "in" });
      setGenieState("speaking");
      // Auto fade-out after 7s
      fadeT = setTimeout(() => setFloatingWhisper(prev => prev ? { ...prev, phase: "out" } : null), 7000);
      // Remove from DOM after 8s
      removeT = setTimeout(() => { setFloatingWhisper(null); setGenieState("idle"); }, 8000);
      // Schedule next whisper 25-40s after this one disappears
      nextT = setTimeout(fireWhisper, 8000 + 25000 + Math.random() * 15000);
    };
    // First whisper after 12s
    const initT = setTimeout(fireWhisper, 12000);
    return () => { clearTimeout(initT); clearTimeout(fadeT); clearTimeout(removeT); clearTimeout(nextT); };
  }, []);

  const switchMode = useCallback((newMode) => {
    if (newMode === mode) return;
    setModeTransition(true);
    setTimeout(() => {
      setMode(newMode);
      setModeTransition(false);
      setModeEntrance(newMode);
      setEntranceFading(false);
      setTimeout(() => setEntranceFading(true), 1200);
      setTimeout(() => setModeEntrance(null), 1800);
    }, 300);
  }, [mode]);

  const addMsg = useCallback((from, text, extra = {}) => {
    const id = msgId.current++;
    setChatMsgs(p => [...p, { id, from, text, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), ...extra }]);
  }, []);

  const genieReply = useCallback((text, extra = {}) => {
    setIsTyping(true); setGenieState("thinking");
    setTimeout(() => { setIsTyping(false); setGenieState("speaking"); addMsg("ai", text, extra); setTimeout(() => setGenieState("idle"), 1500); }, 800 + Math.random() * 1000);
  }, [addMsg]);

  const sendChat = useCallback((text) => {
    if (!text?.trim()) return;
    addMsg("user", text); setChatInput("");
    const key = matchResp(text);
    // Scene 1: Wake-up effect for greetings
    if (key === "hello") {
      setWakeUpActive(true); setGenieState("thinking");
      setTimeout(() => { setGenieState("speaking"); }, 800);
      setTimeout(() => { setWakeUpActive(false); genieReply(CHAT_RESPONSES[key]); }, 2200);
    } else {
      genieReply(CHAT_RESPONSES[key]);
    }
  }, [addMsg, genieReply]);

  const askGenie = useCallback((question, answer) => {
    switchMode("chat");
    setTimeout(() => { addMsg("user", question); genieReply(answer); }, 400);
  }, [switchMode, addMsg, genieReply]);

  const triggerWhisper = useCallback(() => {
    // Pick a random whisper from the original pool
    const texts = MOCK.whispers;
    const text = texts[Math.floor(Math.random() * texts.length)];
    // Dismiss any current floating whisper first
    setFloatingWhisper(null);
    setTimeout(() => {
      setFloatingWhisper({ text, mood: "nudge", emoji: "🤫", phase: "in" });
      setGenieState("speaking");
      // Auto-dismiss after 8s
      setTimeout(() => setFloatingWhisper(prev => prev ? { ...prev, phase: "out" } : null), 8000);
      setTimeout(() => { setFloatingWhisper(null); setGenieState("idle"); }, 9000);
    }, 50);
  }, []);

  const triggerConfidence = useCallback(() => {
    setConfidenceMode(true); setGenieState("thinking");
    setTimeout(() => { setConfidenceMode(false); setGenieState("idle");
      switchMode("chat");
      setTimeout(() => { addMsg("ai", "🧘 **Confidence Mode**\n\n🟢 GST — clean\n🟢 Cash — safe 8 days\n🟢 Sales — ahead of target\n\n⚠️ Fabric-A stock (3 days)\n⚠️ 2 production jobs at risk\n\n**You're in good shape.** I'll only call if something matters."); }, 400);
    }, 3500);
  }, [switchMode, addMsg]);

  const triggerStory = useCallback(() => {
    switchMode("chat");
    setTimeout(() => {
      addMsg("ai", "🎬 **Your Business Today — 60 seconds**\n\nHere's what happened:");
      MOCK.storySteps.forEach((s, i) => { setTimeout(() => addMsg("ai", `${s.emoji} **${s.title}**\n${s.detail}`, { type: "story" }), (i + 1) * 1600); });
      setTimeout(() => addMsg("ai", "📊 **Net: Positive day. 2 decisions pending.** Ask me to go deeper."), (MOCK.storySteps.length + 1) * 1600);
    }, 400);
  }, [switchMode, addMsg]);

  const renderMsgText = (text) => text.split("\n").map((line, i) => {
    let h = line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>');
    if (line.startsWith("•")) h = h.replace("•", '<span style="color:var(--accent-cyan);margin-right:4px">•</span>');
    return <div key={i} style={{ minHeight: line === "" ? 5 : "auto" }} dangerouslySetInnerHTML={{ __html: h || "&nbsp;" }} />;
  });

  // Time Machine
  const tmData = MOCK.timeMachine[tmZoom];
  const tmSnap = tmIndex >= 0 && tmIndex < tmData.length ? tmData[tmIndex] : tmData[tmData.length - 1];
  const tmIsLive = tmIndex < 0 || tmIndex === tmData.length - 1;
  const scrubTimeMachine = useCallback((newIdx) => {
    setTmAnimating(true);
    setTimeout(() => { setTmIndex(newIdx); setTmAnimating(false); }, 200);
  }, []);

  // Time filter data
  const tfData = TIME_FILTER_DATA[timeFilter];

  // Which data drives the dashboard? TM overrides filter when active
  const dashData = timeMachineOpen && !tmIsLive ? tmSnap : tfData;

  const toggleTheme = useCallback(() => { setTheme(t => t === "dark" ? "light" : "dark"); }, []);
  const isDark = theme === "dark";

  // Scene 6: Long-press helper for metric cards
  const lpRef = useRef(null);
  const makeLongPress = useCallback((eKey) => ({
    onClick: () => openExplainer(eKey),
    onMouseDown: () => { lpRef.current = setTimeout(() => openExplainer(eKey), 500); },
    onMouseUp: () => clearTimeout(lpRef.current),
    onMouseLeave: () => clearTimeout(lpRef.current),
    onTouchStart: () => { lpRef.current = setTimeout(() => openExplainer(eKey), 500); },
    onTouchEnd: () => clearTimeout(lpRef.current),
  }), [openExplainer]);

  const modeConfig = MODES[mode];
  const CharComponent = { sentinel: SentinelChar, genie: GenieChar, pulse: PulseChar, oracle: OracleChar }[modeConfig.character];

  // Theme-aware accent colors for inline use (metric cards, charts)
  const tc = isDark
    ? { cyan: "#22d3ee", purple: "#a78bfa", green: "#22c55e", orange: "#f97316", red: "#ef4444", yellow: "#eab308", pink: "#fb7185" }
    : { cyan: "#0e8c9e", purple: "#7c4dcc", green: "#16874a", orange: "#d4610f", red: "#cc3333", yellow: "#9a7c08", pink: "#c94060" };

  // Metric value → health color (green=good, orange=caution, red=bad)
  const metricColor = useCallback((key, val) => {
    const g = isDark ? "#34d399" : "#0f8a4a";
    const o = isDark ? "#fbbf24" : "#c48a08";
    const r = isDark ? "#f87171" : "#cc3333";
    switch (key) {
      case "cash": return val >= 12 ? g : val >= 8 ? o : r;
      case "sales": return val >= 3.0 ? g : val >= 2.0 ? o : r;
      case "dues": return val <= 12 ? g : val <= 18 ? o : r;  // lower is better
      case "bills": return val <= 6 ? g : val <= 9 ? o : r;   // lower is better
      case "lowStock": return val <= 3 ? g : val <= 6 ? o : r; // lower is better
      case "orders": return val >= 20 ? g : val >= 10 ? o : r;
      case "jobs": return val >= 8 ? g : val >= 4 ? o : r;
      default: return "var(--text-primary)";
    }
  }, [isDark]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Anybody:wght@700;800;900&display=swap');
        :root{
          ${isDark ? `
          --bg:#08080f;--bg-side:#0c0c18;--bg-card:rgba(255,255,255,0.025);--bg-card-h:rgba(255,255,255,0.05);
          --bdr:rgba(255,255,255,0.05);--bdr-h:rgba(255,255,255,0.1);
          --text-primary:#eeeef2;--text-secondary:#8888a0;--text-muted:#4a4a64;
          --overlay-bg:rgba(8,8,15,0.88);--modal-bg:rgba(18,18,36,0.97);
          --input-bg:rgba(255,255,255,0.03);--input-bdr:rgba(255,255,255,0.06);
          --chat-ai-bg:rgba(34,211,238,0.04);--chat-ai-bdr:rgba(34,211,238,0.08);
          --chat-user-bg:rgba(167,139,250,0.07);--chat-user-bdr:rgba(167,139,250,0.12);
          --scrollbar-thumb:rgba(255,255,255,0.06);
          --shine:rgba(255,255,255,0.015);--shadow-card:0 8px 30px rgba(0,0,0,0.25);
          ` : `
          --bg:#edeef3;--bg-side:#dfe1ea;--bg-card:rgba(255,255,255,0.85);--bg-card-h:rgba(255,255,255,0.98);
          --bg-main:#f5f6fa;
          --bdr:rgba(0,0,0,0.1);--bdr-h:rgba(0,0,0,0.18);
          --text-primary:#0d0d1a;--text-secondary:#2a2a44;--text-muted:#55556e;
          --overlay-bg:rgba(237,238,243,0.94);--modal-bg:rgba(255,255,255,0.99);
          --input-bg:rgba(255,255,255,0.95);--input-bdr:rgba(0,0,0,0.13);
          --chat-ai-bg:rgba(14,130,155,0.07);--chat-ai-bdr:rgba(14,130,155,0.16);
          --chat-user-bg:rgba(100,60,200,0.07);--chat-user-bdr:rgba(100,60,200,0.15);
          --scrollbar-thumb:rgba(0,0,0,0.15);
          --shine:rgba(255,255,255,0.7);--shadow-card:0 1px 3px rgba(0,0,0,0.04),0 6px 24px rgba(0,0,0,0.06);
          `}
          --accent-cyan:#22d3ee;--accent-purple:#a78bfa;--accent-green:#22c55e;
          --accent-orange:#f97316;--accent-red:#ef4444;--accent-yellow:#eab308;
          ${!isDark ? `
          --accent-cyan:#0e8c9e;--accent-purple:#7c4dcc;--accent-green:#16874a;
          --accent-orange:#d4610f;--accent-red:#cc3333;--accent-yellow:#b8960a;
          ` : ``}
          --r:14px;--r-sm:8px;
          --font:'DM Sans',system-ui,sans-serif;--font-display:'Anybody',system-ui,sans-serif;--font-mono:'Courier New',monospace;
        }
        *{margin:0;padding:0;box-sizing:border-box}
        body,#root{font-family:var(--font);background:var(--bg);color:var(--text-primary);height:100vh;overflow:hidden;transition:background .35s ease,color .35s ease}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:2px}

        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideInLeft{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
        @keyframes slideInRight{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:translateX(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}
        @keyframes drawLine{to{stroke-dashoffset:0}}
        @keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.5)}}
        @keyframes typingBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
        @keyframes successPop{0%{transform:scale(1)}50%{transform:scale(1.12)}100%{transform:scale(1)}}
        @keyframes cardShine{0%{left:-100%}50%,100%{left:100%}}
        @keyframes breathe{0%,100%{box-shadow:0 0 16px rgba(34,211,238,0.15)}50%{box-shadow:0 0 28px rgba(34,211,238,0.35)}}
        @keyframes modeTransOut{to{opacity:0;transform:scale(0.97) translateY(8px)}}
        @keyframes modeTransIn{from{opacity:0;transform:scale(0.97) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes bgGlow{0%,100%{opacity:.3}50%{opacity:.6}}
        @keyframes bgParticleFloat{0%,100%{transform:translate(0,0) rotate(0deg);opacity:.5}25%{transform:translate(10px,-15px) rotate(90deg);opacity:1}50%{transform:translate(-5px,-25px) rotate(180deg);opacity:.5}75%{transform:translate(-12px,-10px) rotate(270deg);opacity:.8}}
        @keyframes tmSlideIn{from{opacity:0;transform:translateY(-8px) scaleY(0.9)}to{opacity:1;transform:translateY(0) scaleY(1)}}
        @keyframes tmDataFade{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
        @keyframes tmRewindPulse{0%{box-shadow:0 0 0 0 rgba(167,139,250,0.3)}70%{box-shadow:0 0 0 10px rgba(167,139,250,0)}100%{box-shadow:0 0 0 0 rgba(167,139,250,0)}}
        @keyframes tmSpin{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes tmVHS{0%,95%,100%{opacity:1}96%{opacity:0.5}97%{opacity:1}98%{opacity:0.6}}

        @keyframes genieFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes geniePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        @keyframes genieTail{0%,100%{d:path("M50 95 Q45 80 42 70 Q38 58 44 50 Q48 44 50 38")}50%{d:path("M50 95 Q42 78 40 68 Q36 56 42 48 Q46 42 50 38")}}
        @keyframes genieStar{0%,100%{opacity:.8;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}}
        @keyframes genieSparkle{0%,100%{opacity:0;transform:scale(0)}50%{opacity:.7;transform:scale(1)}}
        @keyframes genieTalk{0%,100%{ry:2}50%{ry:4}}
        @keyframes genieAura{0%,100%{r:38;opacity:.15}50%{r:44;opacity:.3}}
        @keyframes whisperBubbleIn{from{opacity:0;transform:translate(-5px,5px) scale(0.5)}to{opacity:1;transform:translate(0,0) scale(1)}}
        @keyframes whisperFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes sentinelBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
        @keyframes sentinelActive{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.04);opacity:.95}}
        @keyframes sentinelScan{0%,100%{r:36;opacity:.15}50%{r:42;opacity:.25}}
        @keyframes sentinelScanLine{0%{transform:translateY(0);opacity:.3}50%{opacity:.6}100%{transform:translateY(-3px);opacity:.3}}
        @keyframes sentinelRotate{to{transform:rotate(360deg)}}
        @keyframes sentinelEyePulse{0%,100%{r:5}50%{r:6.5}}
        @keyframes pulseGearSpin{to{transform:rotate(360deg)}}
        @keyframes pulseHeartbeat{0%,100%{transform:scale(1)}15%{transform:scale(1.06)}30%{transform:scale(1)}}
        @keyframes pulseBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
        @keyframes pulseTrace{from{stroke-dashoffset:60}to{stroke-dashoffset:0}}
        @keyframes pulseBolt{0%,100%{opacity:.8}50%{opacity:1}}
        @keyframes oracleFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes oraclePulse{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.05);opacity:.95}}
        @keyframes oracleOrbit1{to{transform:rotateY(360deg)}}
        @keyframes oracleOrbit2{to{transform:rotateX(360deg)}}
        @keyframes oracleEyeGlow{0%,100%{r:3;opacity:.9}50%{r:4;opacity:1}}
        @keyframes oracleRay{0%,100%{opacity:.1}50%{opacity:.3}}
        @keyframes oracleRune{0%,100%{opacity:.2;transform:translateY(0)}50%{opacity:.5;transform:translateY(-4px)}}
        @keyframes whisperOverlayIn{from{opacity:0;backdrop-filter:blur(0)}to{opacity:1;backdrop-filter:blur(16px)}}
        @keyframes whisperBoxIn{from{opacity:0;transform:translateY(-20px) scale(0.9)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes confOverlayIn{from{opacity:0}to{opacity:1}}

        /* EXPLAINER PANEL */
        @keyframes explainerSlideIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
        @keyframes explainerItemIn{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)}}
        @keyframes explainerCharBounce{0%,100%{transform:scale(1) translateY(0)}50%{transform:scale(1.03) translateY(-4px)}}
        @keyframes explainerPulseRing{0%{transform:scale(0.8);opacity:0.5}50%{transform:scale(1.1);opacity:0.2}100%{transform:scale(0.8);opacity:0.5}}
        @keyframes explainerShimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}

        /* MODE ENTRANCE */
        @keyframes entranceCharIn{0%{opacity:0;transform:scale(0.3) rotate(-15deg)}50%{opacity:1;transform:scale(1.1) rotate(3deg)}100%{opacity:1;transform:scale(1) rotate(0)}}
        @keyframes entranceTitleIn{from{opacity:0;transform:translateY(20px);letter-spacing:8px}to{opacity:1;transform:translateY(0);letter-spacing:2px}}
        @keyframes entranceSubIn{from{opacity:0;transform:translateY(12px)}to{opacity:0.7;transform:translateY(0)}}
        @keyframes entranceRipple{0%{transform:scale(0);opacity:0.4}100%{transform:scale(3);opacity:0}}
        @keyframes entranceLineGrow{from{width:0}to{width:120px}}
        @keyframes entranceFadeOut{to{opacity:0;transform:scale(1.05);pointer-events:none}}

        /* FLOATING AMBIENT WHISPER */
        @keyframes floatWhisperIn{0%{opacity:0;transform:translateY(30px) scale(0.9)}60%{opacity:1;transform:translateY(-4px) scale(1.01)}100%{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes floatWhisperOut{from{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(10px) scale(0.95)}}
        @keyframes floatWhisperGlow{0%,100%{box-shadow:0 8px 30px rgba(167,139,250,0.08)}50%{box-shadow:0 8px 40px rgba(167,139,250,0.18)}}
        @keyframes floatWhisperDots{0%,20%{opacity:.2}50%{opacity:1}80%,100%{opacity:.2}}
        @keyframes floatWhisperCharIdle{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes floatWhisperCalm{0%{opacity:0.08}50%{opacity:0.14}100%{opacity:0.08}}

        /* SCENE 1: WAKE-UP */
        @keyframes wakeUpPulse{0%{transform:scale(0.5);opacity:0}40%{transform:scale(1.15);opacity:1}100%{transform:scale(1);opacity:1}}
        @keyframes wakeUpGlow{0%{box-shadow:0 0 0 rgba(34,211,238,0)}50%{box-shadow:0 0 80px rgba(34,211,238,0.3)}100%{box-shadow:0 0 40px rgba(34,211,238,0.1)}}
        @keyframes wakeUpTextIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}

        /* CHAT HERO GENIE FLOAT */
        @keyframes genieHeroFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes genieHeroGlow{0%{transform:translate(-50%,-60%) scale(1);opacity:0.6}100%{transform:translate(-50%,-60%) scale(1.15);opacity:1}}

        /* SCENE 3: CAUSE-EFFECT CHAIN */
        @keyframes chainNodeIn{from{opacity:0;transform:scale(0.5)}to{opacity:1;transform:scale(1)}}
        @keyframes chainArrowGrow{from{width:0;opacity:0}to{width:40px;opacity:1}}
        @keyframes chainPulseNode{0%,100%{box-shadow:0 0 0 rgba(167,139,250,0)}50%{box-shadow:0 0 16px rgba(167,139,250,0.4)}}

        /* SCENE 4: BEHIND-SCENES */
        @keyframes behindStepIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        @keyframes behindCheck{from{transform:scale(0) rotate(-90deg)}to{transform:scale(1) rotate(0)}}

        /* SCENE 5: ROLE TAB */
        .role-tab{padding:4px 12px;border-radius:8px;border:1px solid var(--bdr);background:transparent;cursor:pointer;font-size:11px;font-weight:500;color:var(--text-muted);transition:all .25s;font-family:var(--font)}
        .role-tab:hover{border-color:var(--bdr-h);color:var(--text-secondary)}
        .role-tab.active{background:${isDark ? `rgba(34,211,238,0.08)` : `rgba(14,140,158,0.1)`};border-color:${isDark ? `rgba(34,211,238,0.2)` : `rgba(14,140,158,0.25)`};color:var(--accent-cyan);font-weight:600}

        .glass{background:var(--bg-card);border:1px solid var(--bdr);border-radius:var(--r);transition:all .3s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden${!isDark ? `;box-shadow:0 1px 3px rgba(0,0,0,0.03),0 4px 16px rgba(0,0,0,0.04)` : ``}}
        .glass::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,var(--shine),transparent);pointer-events:none;transition:none}
        .glass:hover::after{animation:cardShine .7s ease-out forwards}
        .glass:hover{background:var(--bg-card-h);border-color:var(--bdr-h);transform:translateY(-2px);box-shadow:${isDark ? `var(--shadow-card)` : `0 2px 8px rgba(0,0,0,0.06),0 12px 36px rgba(0,0,0,0.08)`}}

        .ghost-btn{background:var(--input-bg);border:1px solid var(--input-bdr);color:var(--text-secondary);border-radius:var(--r-sm);padding:5px 12px;font-size:12px;font-family:var(--font);cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:5px}
        .ghost-btn:hover{background:var(--bg-card-h);color:var(--text-primary);transform:translateY(-1px)}
        .ghost-btn:active{transform:scale(.97)}
        .action-btn{background:${isDark ? `linear-gradient(135deg,rgba(34,211,238,0.1),rgba(167,139,250,0.1))` : `linear-gradient(135deg,rgba(14,140,158,0.1),rgba(124,77,204,0.1))`};border:1px solid ${isDark ? `rgba(34,211,238,0.15)` : `rgba(14,140,158,0.2)`};color:var(--accent-cyan);border-radius:var(--r-sm);padding:6px 14px;font-size:12px;font-weight:500;font-family:var(--font);cursor:pointer;transition:all .25s;display:inline-flex;align-items:center;gap:5px}
        .action-btn:hover{background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(167,139,250,0.2));transform:translateY(-1px);box-shadow:0 4px 14px rgba(34,211,238,0.12)}
        .approve-btn{background:${isDark ? `rgba(34,197,94,0.1)` : `rgba(22,135,74,0.08)`};border:1px solid ${isDark ? `rgba(34,197,94,0.2)` : `rgba(22,135,74,0.22)`};color:var(--accent-green);border-radius:var(--r-sm);padding:5px 12px;font-size:11px;font-weight:600;font-family:var(--font);cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:4px}
        .approve-btn:hover{background:${isDark ? `rgba(34,197,94,0.18)` : `rgba(22,135,74,0.14)`};transform:translateY(-1px)}
        .reject-btn{background:${isDark ? `rgba(239,68,68,0.06)` : `rgba(204,51,51,0.06)`};border:1px solid ${isDark ? `rgba(239,68,68,0.12)` : `rgba(204,51,51,0.16)`};color:var(--accent-red);border-radius:var(--r-sm);padding:5px 12px;font-size:11px;font-weight:600;font-family:var(--font);cursor:pointer;transition:all .2s;display:inline-flex;align-items:center;gap:4px}
        .reject-btn:hover{background:${isDark ? `rgba(239,68,68,0.12)` : `rgba(204,51,51,0.1)`}}

        .section-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.8px;color:${isDark ? `#7878a0` : `#1a1a36`};padding:8px 0 12px;display:flex;align-items:center;gap:8px;animation:fadeIn .4s ease-out;position:relative}
        .section-label::after{content:'';flex:1;height:1px;background:${isDark ? `linear-gradient(90deg, var(--bdr), transparent)` : `linear-gradient(90deg, rgba(0,0,0,0.08), transparent)`}}
        .orb{position:fixed;border-radius:50%;filter:blur(80px);pointer-events:none;animation:bgGlow 8s ease-in-out infinite}
        .mode-tab{display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 0;cursor:pointer;width:100%;transition:all .2s}
        .mode-tab:hover .tab-icon{background:var(--bg-card-h)}
        .tab-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;transition:all .25s}
        .chip{background:var(--input-bg);border:1px solid var(--input-bdr);color:${isDark ? `var(--text-muted)` : `var(--text-secondary)`};border-radius:20px;padding:4px 12px;font-size:11px;cursor:pointer;transition:all .2s;font-family:var(--font);white-space:nowrap;font-weight:${isDark ? 400 : 500}}
        .chip:hover{background:${isDark ? `rgba(34,211,238,0.06)` : `rgba(14,140,158,0.08)`};border-color:${isDark ? `rgba(34,211,238,0.12)` : `rgba(14,140,158,0.2)`};color:var(--accent-cyan)}

        .tm-bar{background:var(--bg-card);border:1px solid rgba(167,139,250,0.12);border-radius:14px;padding:14px 20px;margin-bottom:16px;animation:tmSlideIn 0.4s cubic-bezier(.22,1,.36,1)}
        .tm-bar.active{border-color:rgba(167,139,250,0.25);box-shadow:0 0 20px rgba(167,139,250,0.06)}
        .tm-track{position:relative;height:6px;background:var(--input-bg);border:1px solid var(--input-bdr);border-radius:3px;margin:10px 0 4px;cursor:pointer}
        .tm-track-fill{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#a78bfa,#22d3ee);border-radius:3px;transition:width .4s cubic-bezier(.22,1,.36,1)}
        .tm-tick{position:absolute;top:-7px;width:18px;height:18px;border-radius:50%;background:var(--accent-purple);border:3px solid var(--bg);cursor:pointer;transform:translateX(-50%);transition:all .3s cubic-bezier(.22,1,.36,1);z-index:2}
        .tm-tick:hover{transform:translateX(-50%) scale(1.25);box-shadow:0 0 10px rgba(167,139,250,0.4)}
        .tm-tick.active{animation:tmRewindPulse 1.5s infinite;background:var(--accent-cyan)}

        .theme-toggle{width:40px;height:24px;border-radius:12px;background:var(--input-bg);border:1px solid var(--input-bdr);cursor:pointer;position:relative;transition:all .3s;display:flex;align-items:center;padding:0 3px}
        .theme-toggle:hover{border-color:var(--accent-cyan)}
        .theme-toggle-knob{width:18px;height:18px;border-radius:50%;background:${isDark ? "var(--accent-cyan)" : "var(--accent-orange)"};transition:all .4s cubic-bezier(.22,1,.36,1);transform:translateX(${isDark ? "0" : "16px"});display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px ${isDark ? "rgba(34,211,238,0.3)" : "rgba(249,115,22,0.3)"}}

        .thread-item{padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .2s;border:1px solid transparent}
        .thread-item:hover{background:var(--bg-card-h);border-color:var(--bdr)}
        .thread-item.active{background:var(--bg-card);border-color:var(--accent-cyan)30}

        .explainer-step{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:10px;background:var(--bg-card);border:1px solid var(--bdr);cursor:pointer;transition:all .25s}
        .explainer-step:hover{background:var(--bg-card-h);border-color:var(--bdr-h);transform:translateX(4px)}
        .explainer-step:active{transform:scale(.98)}
      `}</style>

      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

        {/* ═══ LEFT SIDEBAR — MODE SWITCHER ═══ */}
        <div style={{
          width: 72, background: isDark ? "var(--bg-side)" : "linear-gradient(180deg, #e6e8f0, #dcdee8)", borderRight: "1px solid var(--bdr)",
          display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: 4, zIndex: 20, overflow: "visible",
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 12, marginBottom: 12,
            background: isDark ? "linear-gradient(135deg, #22d3ee, #a78bfa)" : "linear-gradient(135deg, #0e8c9e, #7c4dcc)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 16, color: "#08080f", fontFamily: "var(--font-display)",
            animation: "breathe 3s ease-in-out infinite",
          }}>E</div>

          {Object.values(MODES).map(m => {
            const Icon = m.icon;
            const isActive = mode === m.id;
            return (
              <div key={m.id} className={`mode-tab ${isActive ? "active" : ""}`} onClick={() => switchMode(m.id)} title={m.label}>
                <div className="tab-icon" style={{ background: isActive ? `${m.color}18` : "transparent", border: isActive ? `1px solid ${m.color}30` : "1px solid transparent" }}>
                  <Icon size={17} style={{ color: isActive ? m.color : "var(--text-muted)", transition: "color .25s" }} />
                </div>
                <span style={{ fontSize: 9, fontWeight: isActive ? 600 : 400, color: isActive ? m.color : "var(--text-muted)", transition: "color .25s" }}>{m.label}</span>
              </div>
            );
          })}

          <div style={{ flex: 1 }} />
          <div style={{ marginBottom: 8, animation: "fadeIn 0.5s ease-out", overflow: "visible", position: "relative", zIndex: 25 }}><CharComponent size={78} state={genieState} whisper={!!floatingWhisper} /></div>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(167,139,250,0.12))", border: "1px solid var(--bdr)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><User size={15} style={{ color: "var(--text-secondary)" }} /></div>
        </div>

        {/* ═══ CHAT THREADS SIDEBAR (only in chat mode) ═══ */}
        {mode === "chat" && (
          <div style={{
            width: 260, background: "var(--bg-side)", borderRight: "1px solid var(--bdr)",
            display: "flex", flexDirection: "column", animation: "slideInLeft 0.3s ease-out", zIndex: 15,
          }}>
            <div style={{ padding: "16px 16px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Threads</span>
              <button className="ghost-btn" style={{ padding: "4px 8px" }} onClick={() => {
                setChatMsgs([{ id: 0, from: "ai", text: `Hey ${MOCK.owner}! 👋 I'm your ERPSense Genie. Ask me anything.`, time: "Now" }]);
                setActiveThread(null); setChatInput("");
              }}><Plus size={13} /> New</button>
            </div>
            <div style={{ padding: "0 10px", marginBottom: 10 }}>
              <div style={{ position: "relative" }}>
                <Search size={13} style={{ position: "absolute", left: 10, top: 9, color: "var(--text-muted)" }} />
                <input placeholder="Search threads..." style={{ width: "100%", background: "var(--input-bg)", border: "1px solid var(--input-bdr)", borderRadius: 8, padding: "8px 10px 8px 30px", fontSize: 12, color: "var(--text-primary)", fontFamily: "var(--font)", outline: "none" }} />
              </div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "0 8px" }}>
              {MOCK.chatThreads.map(t => (
                <div key={t.id} className={`thread-item ${activeThread === t.id ? "active" : ""}`} onClick={() => setActiveThread(t.id)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                    <span style={{ fontSize: 12, fontWeight: t.unread ? 700 : 500, color: "var(--text-primary)" }}>{t.title}</span>
                    {t.unread && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent-cyan)", flexShrink: 0 }} />}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 11, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{t.preview}</span>
                    <span style={{ fontSize: 10, color: "var(--text-muted)", flexShrink: 0, marginLeft: 8 }}>{t.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ MAIN CONTENT ═══ */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
          animation: modeTransition ? "modeTransOut 0.3s ease-in forwards" : "modeTransIn 0.35s ease-out",
          background: isDark ? "transparent" : "linear-gradient(175deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(14,140,158,0.02) 100%)",
        }}>

          {/* Background particles */}
          <ModeBgParticles mode={mode} isDark={isDark} />

          {/* ── TOP BAR ── */}
          <div style={{
            padding: "10px 24px", borderBottom: "1px solid var(--bdr)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: isDark ? "rgba(8,8,15,0.6)" : "rgba(237,238,243,0.92)", backdropFilter: "blur(12px)", zIndex: 10, overflow: "visible",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ overflow: "visible", position: "relative", zIndex: 12 }}><CharComponent size={58} state={genieState} whisper={!!floatingWhisper} /></div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <h2 style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-display)" }}>{modeConfig.label}</h2>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: `${modeConfig.color}12`, color: modeConfig.color, fontWeight: 600 }}>{modeConfig.character.toUpperCase()}</span>
                </div>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{modeConfig.desc}</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button className="ghost-btn" onClick={triggerWhisper} title="Genie Whisper" style={{ padding: 6 }}><Wind size={14} /></button>
              <button className="ghost-btn" onClick={triggerConfidence} title="Confidence Mode" style={{ padding: 6 }}><Shield size={14} /></button>
              <button className="ghost-btn" onClick={triggerStory} title="Business Story" style={{ padding: 6 }}><Film size={14} /></button>
              <div style={{ width: 1, height: 20, background: "var(--bdr)", margin: "0 4px" }} />

              {/* Scene 5: Role Switch — Dashboard only */}
              {mode === "dashboard" && (
                <div style={{ display: "flex", gap: 4 }}>
                  {Object.entries(ROLE_VIEWS).map(([key, r]) => (
                    <button key={key} className={`role-tab ${activeRole === key ? "active" : ""}`}
                      onClick={() => setActiveRole(key)}>
                      {r.emoji} {r.label}
                    </button>
                  ))}
                </div>
              )}

              {mode === "dashboard" && (
                <button className="ghost-btn" onClick={() => { setTimeMachineOpen(o => !o); if (!timeMachineOpen) setTmIndex(-1); }} title="Time Machine"
                  style={{ padding: "4px 10px", background: timeMachineOpen ? "rgba(167,139,250,0.1)" : undefined, borderColor: timeMachineOpen ? "rgba(167,139,250,0.2)" : undefined, color: timeMachineOpen ? "var(--accent-purple)" : undefined }}>
                  <CalendarClock size={14} style={timeMachineOpen ? { animation: "tmSpin 1s ease-out" } : {}} /> <span style={{ fontSize: 11 }}>Time Machine</span>
                </button>
              )}
              {mode === "dashboard" && !timeMachineOpen && (
                <div style={{ position: "relative" }}>
                  <button className="ghost-btn" onClick={() => setShowTimeDD(!showTimeDD)}>{timeFilter} <ChevronDown size={12} /></button>
                  {showTimeDD && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", right: 0, background: "var(--modal-bg)", border: "1px solid var(--bdr-h)", borderRadius: "var(--r-sm)", boxShadow: "0 12px 40px rgba(0,0,0,0.2)", padding: 4, zIndex: 100, animation: "scaleIn 0.15s ease-out", minWidth: 140 }}>
                      {["Today", "Yesterday", "This Week", "This Month"].map(t => (
                        <button key={t} onClick={() => { setTimeFilter(t); setShowTimeDD(false); }} style={{ display: "block", width: "100%", padding: "7px 12px", border: "none", background: t === timeFilter ? "rgba(34,211,238,0.06)" : "transparent", color: t === timeFilter ? "var(--accent-cyan)" : "var(--text-secondary)", borderRadius: 6, fontSize: 12, textAlign: "left", cursor: "pointer", fontFamily: "var(--font)" }}>{t}</button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <div style={{ width: 1, height: 20, background: "var(--bdr)", margin: "0 4px" }} />
              <div className="theme-toggle" onClick={toggleTheme} title={isDark ? "Switch to light" : "Switch to dark"}>
                <div className="theme-toggle-knob">{isDark ? <Moon size={10} style={{ color: "#08080f" }} /> : <Sun size={10} style={{ color: "#fff" }} />}</div>
              </div>
              <button className="ghost-btn" style={{ padding: 6, position: "relative" }}><Bell size={14} /><span style={{ position: "absolute", top: 2, right: 2, width: 6, height: 6, borderRadius: "50%", background: "var(--accent-red)", boxShadow: "0 0 6px rgba(239,68,68,0.5)" }} /></button>
            </div>
          </div>

          {/* ── MODE CONTENT ── */}
          <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>

            {/* ════════ DASHBOARD ════════ */}
            {mode === "dashboard" && (
              <div style={{ padding: "20px 24px 80px", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Greeting */}
                <div className="glass" style={{ padding: "20px 24px", marginBottom: 20, borderLeft: `3px solid ${!tmIsLive && timeMachineOpen ? "var(--accent-purple)" : "var(--accent-green)"}`, background: `linear-gradient(135deg, ${!tmIsLive && timeMachineOpen ? "rgba(167,139,250,0.04)" : "rgba(34,197,94,0.04)"}, transparent 60%)`, animation: "fadeSlideUp 0.5s ease-out" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <SentinelChar size={60} state={!tmIsLive && timeMachineOpen ? "active" : "idle"} />
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-display)" }}>
                        {!tmIsLive && timeMachineOpen ? `⏪ ${tmSnap.tag} — Looking back` : ROLE_VIEWS[activeRole].greeting}
                      </h2>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{!tmIsLive && timeMachineOpen ? tmSnap.greeting : ROLE_VIEWS[activeRole].desc}</p>
                    </div>
                  </div>
                </div>

                {/* ⏪ TIME MACHINE BAR */}
                {timeMachineOpen && (
                  <div className={`tm-bar ${!tmIsLive ? "active" : ""}`}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <CalendarClock size={15} style={{ color: "var(--accent-purple)", animation: !tmIsLive ? "tmSpin 2s linear infinite" : "none" }} />
                        <span style={{ fontSize: 13, fontWeight: 600, color: !tmIsLive ? "var(--accent-purple)" : "var(--text-primary)" }}>
                          {!tmIsLive ? `⏪ Rewound to ${tmSnap.label} (${tmSnap.tag})` : "📍 Viewing live — drag to rewind"}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        {/* Zoom selector: Days / Weeks / Months */}
                        {["days", "weeks", "months"].map(z => (
                          <button key={z} className="ghost-btn" onClick={() => { setTmZoom(z); setTmIndex(-1); }}
                            style={{ padding: "3px 10px", fontSize: 11, textTransform: "capitalize", background: tmZoom === z ? "rgba(167,139,250,0.1)" : undefined, borderColor: tmZoom === z ? "rgba(167,139,250,0.2)" : undefined, color: tmZoom === z ? "var(--accent-purple)" : undefined }}>
                            {z}
                          </button>
                        ))}
                        {!tmIsLive && <button className="ghost-btn" onClick={() => setTmIndex(-1)} style={{ fontSize: 11, padding: "3px 10px", color: "var(--accent-cyan)" }}><FastForward size={12} /> Live</button>}
                      </div>
                    </div>
                    {/* Track */}
                    <div className="tm-track" onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pct = (e.clientX - rect.left) / rect.width;
                      const idx = Math.round(pct * (tmData.length - 1));
                      scrubTimeMachine(Math.max(0, Math.min(tmData.length - 1, idx)));
                    }}>
                      <div className="tm-track-fill" style={{ width: `${((tmIndex >= 0 ? tmIndex : tmData.length - 1) / (tmData.length - 1)) * 100}%` }} />
                      {tmData.map((_, i) => (
                        <div key={i} className={`tm-tick ${(tmIndex >= 0 ? tmIndex : tmData.length - 1) === i ? "active" : ""}`}
                          style={{ left: `${(i / (tmData.length - 1)) * 100}%` }}
                          onClick={(e) => { e.stopPropagation(); scrubTimeMachine(i); }} />
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                      {tmData.map((snap, i) => (
                        <span key={i} onClick={() => scrubTimeMachine(i)} style={{ fontSize: 10, color: (tmIndex >= 0 ? tmIndex : tmData.length - 1) === i ? "var(--accent-cyan)" : "var(--text-muted)", fontWeight: (tmIndex >= 0 ? tmIndex : tmData.length - 1) === i ? 600 : 400, cursor: "pointer", padding: "2px 4px", transition: "color .2s" }}>{snap.tag}</span>
                      ))}
                    </div>
                    {!tmIsLive && (
                      <div style={{ marginTop: 8, padding: "6px 12px", borderRadius: 6, background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.1)", display: "flex", alignItems: "center", gap: 8, animation: "tmDataFade 0.3s ease-out" }}>
                        <Rewind size={12} style={{ color: "var(--accent-purple)" }} />
                        <span style={{ fontSize: 11, color: "var(--text-secondary)", animation: "tmVHS 3s infinite" }}>
                          Mood: <strong style={{ color: tmSnap.mood === "calm" ? "var(--accent-green)" : "var(--accent-orange)" }}>{tmSnap.mood}</strong>
                          &nbsp;•&nbsp; {tmSnap.alerts.length} alert{tmSnap.alerts.length !== 1 ? "s" : ""}
                          &nbsp;•&nbsp; {tmSnap.highlights.length} highlights
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Metrics — Owner role vs Accountant/Factory role */}
                {activeRole === "owner" ? (<>
                <div className="section-label" style={{ animationDelay: "100ms" }}><Activity size={12} style={{ color: "var(--accent-cyan)" }} /> Key Metrics {timeMachineOpen && !tmIsLive && <span style={{ color: "var(--accent-purple)", fontSize: 9 }}>({tmSnap.tag})</span>}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 24, animation: tmAnimating ? "tmDataFade 0.2s ease-out reverse forwards" : "tmDataFade 0.35s ease-out" }} key={`m-${tmIndex}-${tmZoom}-${timeFilter}`}>
                  {[
                    { label: "Available Cash", val: dashData.cash, suf: "L", pre: "₹", color: tc.cyan, icon: DollarSign, trend: MOCK.cash.trend, sub: dashData.subCash || `Snapshot: ${tmSnap.tag}`, eKey: "cash" },
                    { label: "Sales", val: dashData.sales, suf: "L", pre: "₹", color: tc.purple, icon: dashData.sales >= 3.0 ? TrendingUp : TrendingDown, trend: MOCK.sales.trend, sub: dashData.subSales || `₹${dashData.sales}L on ${tmSnap.tag}`, eKey: "sales" },
                    { label: "Dues to Collect", val: dashData.dues, suf: "L", pre: "₹", color: tc.orange, icon: Clock, trend: MOCK.dues.trend, sub: dashData.subDues || `Dues as of ${tmSnap.tag}`, subC: "var(--accent-red)", eKey: "dues" },
                    { label: "Bills to Pay", val: dashData.bills, suf: "L", pre: "₹", color: tc.pink, icon: Receipt, trend: MOCK.bills.trend, sub: dashData.subBills || `Payables on ${tmSnap.tag}`, subC: "var(--accent-yellow)", eKey: "bills" },
                  ].map((m, i) => {
                    const Ic = m.icon;
                    const valColor = metricColor(m.eKey, m.val);
                    return (
                      <div key={i} className="glass" {...makeLongPress(m.eKey)} style={{ padding: "16px 20px", cursor: "pointer", animation: `fadeSlideUp 0.45s ease-out ${100 + i * 60}ms both`, borderLeft: `3px solid ${valColor}` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                          <div>
                            <p style={{ fontSize: 12, color: valColor, fontWeight: 600, marginBottom: 4, opacity: 0.85 }}>{m.label}</p>
                            <p style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: -1, color: valColor }}><AnimNum value={m.val} prefix={m.pre} suffix={m.suf} /></p>
                          </div>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: `${valColor}15`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ic size={15} style={{ color: valColor }} /></div>
                        </div>
                        <Sparkline data={m.trend} color={valColor} />
                        <p style={{ marginTop: 6, fontSize: 11, color: m.subC || valColor, fontWeight: 500, opacity: 0.8 }}>{m.sub}</p>
                      </div>
                    );
                  })}
                  {[
                    { label: "Low Stock", val: dashData.lowStock, max: 20, color: tc.yellow, sub: `${dashData.lowStock} items low`, subC: "var(--accent-red)", eKey: "lowStock" },
                    { label: "Active Orders", val: dashData.orders, max: 80, color: tc.green, sub: `${dashData.orders} active`, subC: "var(--accent-orange)", eKey: "orders" },
                    { label: "Jobs in Progress", val: dashData.jobs, max: 30, color: isDark ? "#60a5fa" : "#3b72cc", sub: `${dashData.jobs} running`, subC: "var(--accent-yellow)", eKey: "jobs" },
                  ].map((m, i) => {
                    const valColor = metricColor(m.eKey, m.val);
                    return (
                    <div key={`r${i}`} className="glass" {...makeLongPress(m.eKey)} style={{ padding: "16px 20px", cursor: "pointer", animation: `fadeSlideUp 0.45s ease-out ${340 + i * 60}ms both`, borderLeft: `3px solid ${valColor}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <div>
                          <p style={{ fontSize: 12, color: valColor, fontWeight: 600, marginBottom: 4, opacity: 0.85 }}>{m.label}</p>
                          <p style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: -1, color: valColor }}><AnimNum value={m.val} /></p>
                        </div>
                        <ProgressRing value={m.val} max={m.max} color={valColor} />
                      </div>
                      <p style={{ fontSize: 11, color: m.subC, fontWeight: 500 }}>{m.sub}</p>
                    </div>
                    );
                  })}
                </div>

                {/* Highlights */}
                <div className="section-label"><Sparkles size={14} style={{ color: "var(--accent-purple)" }} /> Highlights</div>
                <div className="glass" style={{ padding: "18px 22px", marginBottom: 24, animation: "fadeSlideUp 0.5s ease-out 500ms both" }} key={`hl-${tmIndex}-${tmZoom}`}>
                  {(timeMachineOpen && !tmIsLive ? tmSnap.highlights : MOCK.highlights).map((h, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", animation: `slideInRight 0.4s ease-out ${i * 80}ms both` }}>
                      <CheckCircle size={13} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Alerts + Approvals */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                  <div>
                    <div className="section-label"><AlertTriangle size={14} style={{ color: "var(--accent-orange)" }} /> Needs Attention</div>
                    {(timeMachineOpen && !tmIsLive ? tmSnap.alerts : MOCK.alerts).map((a, i) => (
                      <div key={i} className="glass" style={{ padding: "14px 18px", marginBottom: 10, borderLeft: `3px solid ${a.severity === "red" ? "var(--accent-red)" : "var(--accent-orange)"}`, animation: `fadeSlideUp 0.4s ease-out ${i * 80}ms both` }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: a.severity === "red" ? "var(--accent-red)" : "var(--accent-orange)", boxShadow: `0 0 8px ${a.severity === "red" ? "rgba(239,68,68,0.4)" : "rgba(249,115,22,0.4)"}`, animation: a.severity === "red" ? "pulse-dot 1.5s infinite" : "none" }} />{a.title}
                          </p>
                          {a.time && <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{a.time}</span>}
                        </div>
                        <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: a.genieA ? 10 : 0 }}>{a.desc}</p>
                        {a.genieA && <div style={{ display: "flex", gap: 6 }}>
                          <button className="ghost-btn" style={{ fontSize: 11 }}><Eye size={11} /> Details</button>
                          <button className="action-btn" style={{ fontSize: 11 }} onClick={() => askGenie(`Explain: ${a.title}`, a.genieA)}><Brain size={11} /> Ask Genie</button>
                        </div>}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="section-label"><CheckCircle size={14} style={{ color: "var(--accent-green)" }} /> Pending Approvals</div>
                    {/* Scene 4: Bulk Approval */}
                    {!bulkApproved ? (
                      <div className="glass" style={{ padding: "16px 20px", marginBottom: 12, borderLeft: "3px solid var(--accent-purple)", background: "linear-gradient(135deg, rgba(167,139,250,0.04), transparent 60%)", animation: "fadeSlideUp 0.4s ease-out" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <GenieChar size={50} state="speaking" />
                          <div>
                            <p style={{ fontSize: 13, fontWeight: 600 }}>Approve ₹18.4L supplier payments for this week?</p>
                            <p style={{ fontSize: 11, color: "var(--text-muted)" }}>3 payments • All verified • Within limits</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="approve-btn" onClick={() => {
                            setBulkApproved(true);
                            setBehindScenes([]);
                            BEHIND_SCENES_STEPS.forEach((step, i) => {
                              setTimeout(() => setBehindScenes(prev => [...prev, step]), step.delay);
                            });
                          }}><ThumbsUp size={11} /> Approve All</button>
                          <button className="ghost-btn" style={{ fontSize: 11 }} onClick={() => askGenie("Show me details of all 3 payments", "📋 **This Week's Payments**\n\n1. 💳 Sai Textiles — ₹3.45L (Material)\n2. 💳 Krishna Mills — ₹8.2L (Fabric PO)\n3. 💳 Metro Services — ₹6.75L (Transport)\n\nTotal: **₹18.4L** • All within budget • No anomalies.\n\nShall I approve?")}><Eye size={11} /> Details</button>
                        </div>
                      </div>
                    ) : (
                      <div className="glass" style={{ padding: "16px 20px", marginBottom: 12, borderLeft: "3px solid var(--accent-green)", background: "linear-gradient(135deg, rgba(34,197,94,0.04), transparent 60%)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                          <CheckCircle size={16} style={{ color: "var(--accent-green)", animation: "behindCheck 0.4s cubic-bezier(.22,1,.36,1)" }} />
                          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent-green)" }}>₹18.4L Approved — Behind the scenes:</span>
                        </div>
                        {behindScenes.map((step, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", animation: `behindStepIn 0.4s ease-out both` }}>
                            <span style={{ fontSize: 14 }}>{step.icon}</span>
                            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{step.label}</span>
                          </div>
                        ))}
                        {behindScenes.length === BEHIND_SCENES_STEPS.length && (
                          <p style={{ fontSize: 10, color: "var(--text-muted)", fontStyle: "italic", marginTop: 8, animation: "fadeIn 0.5s ease-out" }}>✨ User never sees vouchers. Outcome-first ERP.</p>
                        )}
                      </div>
                    )}
                    {MOCK.approvals.map((a, i) => (
                      <div key={i} className="glass" style={{ padding: "14px 18px", marginBottom: 10, animation: `fadeSlideUp 0.4s ease-out ${i * 80}ms both` }}>
                        <span style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "var(--accent-cyan)", background: "rgba(34,211,238,0.06)", padding: "1px 6px", borderRadius: 3 }}>{a.type}</span>
                        <p style={{ fontSize: 13, fontWeight: 600, margin: "6px 0 2px" }}>{a.title}</p>
                        <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 2 }}>Amount: <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>{a.amount}</span></p>
                        <p style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 10 }}>By: {a.by} • {a.time}</p>
                        <div style={{ display: "flex", gap: 6 }}>
                          <button className="approve-btn" onClick={() => setApprovalStates(p => ({ ...p, [`d${i}`]: true }))} style={approvalStates[`d${i}`] === true ? { animation: "successPop 0.3s" } : {}}>{approvalStates[`d${i}`] === true ? <><CheckCircle size={11} /> Done</> : <><ThumbsUp size={11} /> Approve</>}</button>
                          {approvalStates[`d${i}`] !== true && <button className="reject-btn"><ThumbsDown size={11} /> Reject</button>}
                          <button className="action-btn" style={{ fontSize: 11 }} onClick={() => askGenie(`Should I approve ${a.title}?`, `Analyzing ${a.title}...\n\n✅ Amount: ${a.amount}\n📊 This looks safe.\n\n🧠 Recommendation: Approve.`)}><Brain size={11} /> Ask Genie</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="section-label"><Brain size={14} style={{ color: "var(--accent-purple)" }} /> AI Insights</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {MOCK.aiInsights.map((ins, i) => {
                    const cMap = { prediction: tc.cyan, anomaly: tc.orange, recommendation: tc.green, warning: tc.yellow };
                    return (
                      <div key={i} className="glass" style={{ padding: "14px 18px", borderLeft: `3px solid ${cMap[ins.type]}`, animation: `fadeSlideUp 0.4s ease-out ${i * 80}ms both` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                          <span style={{ fontSize: 16 }}>{ins.icon}</span>
                          <span style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: cMap[ins.type] }}>{ins.type}</span>
                        </div>
                        <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{ins.title}</p>
                        <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: 10 }}>{ins.desc}</p>
                        <button className="action-btn" style={{ fontSize: 11 }} onClick={() => askGenie(`Deep dive: ${ins.title}`, `${ins.icon} **${ins.title}**\n\n${ins.desc}\n\nWant me to suggest actions?`)}><Brain size={11} /> Deep Dive</button>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="section-label"><Zap size={14} style={{ color: "var(--accent-yellow)" }} /> Quick Actions</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 10 }}>
                  {MOCK.quickActions.map((qa, i) => {
                    const Ic = qa.icon;
                    return (
                      <div key={i} className="glass" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "16px 8px", cursor: "pointer", textAlign: "center", animation: `fadeSlideUp 0.35s ease-out ${i * 40}ms both` }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${qa.color}12`, border: `1px solid ${qa.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ic size={17} style={{ color: qa.color }} /></div>
                        <span style={{ fontSize: 11, fontWeight: 500, color: "var(--text-secondary)" }}>{qa.label}</span>
                      </div>
                    );
                  })}
                </div>
                </>) : (
                  /* ═══ SCENE 5: ROLE-SPECIFIC VIEWS (Accountant / Factory) ═══ */
                  <div key={`role-${activeRole}`} style={{ animation: "fadeSlideUp 0.4s ease-out" }}>
                    <div className="section-label"><Activity size={14} style={{ color: "var(--accent-cyan)" }} /> {ROLE_VIEWS[activeRole].label} Overview</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12, marginBottom: 24 }}>
                      {(ROLE_VIEWS[activeRole].cards || []).map((c, i) => (
                        <div key={i} className="glass" style={{ padding: "16px 20px", borderLeft: `3px solid ${c.color}`, animation: `fadeSlideUp 0.4s ease-out ${i * 80}ms both` }}>
                          <p style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 600, marginBottom: 4 }}>{c.label}</p>
                          <p style={{ fontSize: 20, fontWeight: 700, fontFamily: "var(--font-mono)", color: c.color }}>{c.value}</p>
                          <p style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4 }}>{c.detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="section-label"><CheckCircle size={14} style={{ color: "var(--accent-green)" }} /> Tasks</div>
                    <div className="glass" style={{ padding: "18px 22px", marginBottom: 24 }}>
                      {(ROLE_VIEWS[activeRole].tasks || []).map((t, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < (ROLE_VIEWS[activeRole].tasks || []).length - 1 ? "1px solid var(--bdr)" : "none", animation: `fadeSlideUp 0.35s ease-out ${i * 60}ms both` }}>
                          {t.done ? <CheckCircle size={14} style={{ color: "var(--accent-green)", flexShrink: 0 }} /> : <AlertCircle size={14} style={{ color: "var(--accent-orange)", flexShrink: 0 }} />}
                          <span style={{ fontSize: 13, color: t.done ? "var(--text-muted)" : "var(--text-secondary)", textDecoration: t.done ? "line-through" : "none" }}>{t.text}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center", fontStyle: "italic" }}>💡 Same system. Different reality — {ROLE_VIEWS[activeRole].label} sees only what matters to them.</p>
                  </div>
                )}
              </div>
            )}

            {/* ════════ CHAT ════════ */}
            {mode === "chat" && (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", zIndex: 1 }}>
                {chatMsgs.length <= 1 && (
                  <div style={{ padding: "50px 32px 20px", maxWidth: 640, margin: "0 auto", width: "100%", animation: "fadeSlideUp 0.5s ease-out", overflow: "visible" }}>
                    <div style={{ textAlign: "center", marginBottom: 16, position: "relative" }}>
                      {/* Genie floats above — overlapping into cards below */}
                      <div style={{
                        position: "relative", zIndex: 5, marginBottom: -20,
                        filter: isDark ? "drop-shadow(0 8px 30px rgba(34,211,238,0.15))" : "drop-shadow(0 8px 24px rgba(14,140,158,0.18))",
                        animation: "genieHeroFloat 4s ease-in-out infinite",
                      }}>
                        <GenieChar size={140} state="idle" />
                      </div>
                      {/* Glow ring behind */}
                      <div style={{
                        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)",
                        width: 180, height: 180, borderRadius: "50%", zIndex: 0,
                        background: isDark
                          ? "radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(167,139,250,0.04) 50%, transparent 70%)"
                          : "radial-gradient(circle, rgba(14,140,158,0.08) 0%, rgba(124,77,204,0.04) 50%, transparent 70%)",
                        animation: "genieHeroGlow 3s ease-in-out infinite alternate",
                      }} />
                      <h2 style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-display)", marginTop: 8, position: "relative", zIndex: 2 }}>Hey {MOCK.owner}, what's on your mind?</h2>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, position: "relative", zIndex: 2 }}>Ask me anything or try a quick mode</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
                      {[
                        { icon: Wind, label: "Genie Whispers", desc: "Proactive insights", color: "var(--accent-purple)", action: triggerWhisper },
                        { icon: Shield, label: "Confidence Mode", desc: "What's safe today", color: "var(--accent-green)", action: triggerConfidence },
                        { icon: Film, label: "Business Story", desc: "Your day in 60 sec", color: "var(--accent-cyan)", action: triggerStory },
                      ].map((m, i) => {
                        const Ic = m.icon;
                        return (
                          <div key={i} onClick={m.action} className="glass" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "18px 12px", cursor: "pointer", textAlign: "center", animation: `fadeSlideUp 0.4s ease-out ${100 + i * 80}ms both` }}>
                            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${m.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ic size={20} style={{ color: m.color }} /></div>
                            <span style={{ fontSize: 13, fontWeight: 600 }}>{m.label}</span>
                            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{m.desc}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                      {["💰 Cash", "📈 Sales", "🧾 GST", "💹 Margins", "📦 Stock", "✅ Approvals"].map((s, i) => (
                        <button key={i} className="chip" onClick={() => sendChat(s.slice(2).trim())}>{s}</button>
                      ))}
                    </div>
                  </div>
                )}
                {chatMsgs.length > 1 && (
                  <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
                    <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
                      {chatMsgs.map(m => (
                        <div key={m.id} style={{ maxWidth: "80%", alignSelf: m.from === "user" ? "flex-end" : "flex-start", animation: m.from === "user" ? "slideInRight 0.3s ease-out" : "slideInLeft 0.35s ease-out" }}>
                          {m.from === "ai" ? (
                            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                              <GenieChar size={38} state="idle" />
                              <div>
                                <div style={{ background: m.type === "story" ? "var(--chat-ai-bg)" : "var(--chat-ai-bg)", border: `1px solid ${m.type === "story" ? "var(--accent-cyan)" : "var(--chat-ai-bdr)"}`, borderLeft: m.type === "story" ? "3px solid var(--accent-cyan)" : undefined, borderRadius: "4px 12px 12px 12px", padding: "12px 16px", fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)" }}>{renderMsgText(m.text)}</div>
                                {/* Scene 3: Cause-Effect Chain */}
                                {m.type === "causeEffect" && m.chain && CAUSE_EFFECT_CHAINS[m.chain] && (
                                  <div style={{ display: "flex", alignItems: "center", gap: 0, marginTop: 12, flexWrap: "wrap" }}>
                                    {CAUSE_EFFECT_CHAINS[m.chain].map((node, ni) => (
                                      <div key={ni} style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{
                                          padding: "10px 14px", borderRadius: 12,
                                          background: `${node.color}10`, border: `1px solid ${node.color}25`,
                                          textAlign: "center", minWidth: 100,
                                          animation: `chainNodeIn 0.4s cubic-bezier(.22,1,.36,1) ${ni * 300}ms both`,
                                        }}>
                                          <span style={{ fontSize: 20, display: "block" }}>{node.emoji}</span>
                                          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text-primary)", marginTop: 4 }}>{node.label}</p>
                                          <p style={{ fontSize: 13, fontWeight: 700, fontFamily: "var(--font-mono)", color: node.color, marginTop: 2 }}>{node.value}</p>
                                        </div>
                                        {ni < CAUSE_EFFECT_CHAINS[m.chain].length - 1 && (
                                          <div style={{ display: "flex", alignItems: "center", overflow: "hidden", animation: `chainArrowGrow 0.3s ease-out ${ni * 300 + 200}ms both` }}>
                                            <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${CAUSE_EFFECT_CHAINS[m.chain][ni].color}, ${CAUSE_EFFECT_CHAINS[m.chain][ni + 1].color})` }} />
                                            <ChevronRight size={14} style={{ color: CAUSE_EFFECT_CHAINS[m.chain][ni + 1].color, marginLeft: -4 }} />
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <p style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 3, marginLeft: 2 }}>{m.time}</p>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div style={{ background: "var(--chat-user-bg)", border: "1px solid var(--chat-user-bdr)", borderRadius: "12px 12px 4px 12px", padding: "10px 14px", fontSize: 13, color: "var(--text-secondary)" }}>{m.text}</div>
                              <p style={{ fontSize: 9, color: "var(--text-muted)", marginTop: 3, textAlign: "right" }}>{m.time}</p>
                            </div>
                          )}
                        </div>
                      ))}
                      {isTyping && <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}><GenieChar size={38} state="thinking" /><TypingDots /></div>}
                      <div ref={chatEndRef} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ════════ OPERATIONS ════════ */}
            {mode === "operations" && (
              <div style={{ padding: "24px 24px 80px", maxWidth: 900, margin: "0 auto", animation: "fadeSlideUp 0.5s ease-out", position: "relative", zIndex: 1 }}>
                <div className="glass" style={{ padding: "20px 24px", marginBottom: 20, borderLeft: "3px solid var(--accent-orange)", background: "linear-gradient(135deg, rgba(249,115,22,0.04), transparent 60%)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <PulseChar size={60} state="active" />
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-display)" }}>Production is running ⚡</h2>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>5 active jobs, 2 at risk. Dispatch on track.</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
                  {[
                    { icon: Package, color: "#f97316", label: "Orders Delayed", value: "3", detail: "WO-1201, WO-1204, WO-1209" },
                    { icon: Factory, color: "#60a5fa", label: "Production Active", value: "5", detail: "2 at risk due to material shortage" },
                    { icon: Truck, color: "#22c55e", label: "Dispatch Status", value: "On Track", detail: "3 dispatches scheduled today" },
                    { icon: AlertCircle, color: "#ef4444", label: "Material Risk", value: "Critical", detail: "Fabric-A: 3 days remaining" },
                  ].map((o, i) => {
                    const Ic = o.icon;
                    return (
                      <div key={i} className="glass" style={{ padding: "18px 20px", animation: `fadeSlideUp 0.4s ease-out ${i * 80}ms both` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${o.color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}><Ic size={16} style={{ color: o.color }} /></div>
                          <div>
                            <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{o.label}</p>
                            <p style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{o.value}</p>
                          </div>
                        </div>
                        <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>{o.detail}</p>
                        <button className="action-btn" style={{ fontSize: 11, marginTop: 10 }} onClick={() => askGenie(`Details on ${o.label}`, `⚡ **${o.label}: ${o.value}**\n\n${o.detail}\n\nPulse is monitoring. Want me to act?`)}><Brain size={11} /> Ask Genie</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ════════ INSIGHTS ════════ */}
            {mode === "insights" && (
              <div style={{ padding: "24px 24px 80px", maxWidth: 900, margin: "0 auto", animation: "fadeSlideUp 0.5s ease-out", position: "relative", zIndex: 1 }}>
                <div className="glass" style={{ padding: "20px 24px", marginBottom: 20, borderLeft: "3px solid var(--accent-purple)", background: "linear-gradient(135deg, rgba(167,139,250,0.04), transparent 60%)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <OracleChar size={60} state="active" />
                    <div>
                      <h2 style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-display)" }}>Oracle sees patterns 🔮</h2>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>4 insights generated. 2 need your attention.</p>
                    </div>
                  </div>
                </div>
                {MOCK.aiInsights.map((ins, i) => {
                  const cMap = { prediction: tc.cyan, anomaly: tc.orange, recommendation: tc.green, warning: tc.yellow };
                  return (
                    <div key={i} className="glass" style={{ padding: "18px 22px", marginBottom: 12, borderLeft: `3px solid ${cMap[ins.type]}`, animation: `fadeSlideUp 0.45s ease-out ${i * 100}ms both` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 20 }}>{ins.icon}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: cMap[ins.type] }}>{ins.type}</span>
                      </div>
                      <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{ins.title}</p>
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 12 }}>{ins.desc}</p>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button className="action-btn" onClick={() => askGenie(`Oracle: ${ins.title}`, `${ins.icon} **${ins.title}**\n\n${ins.desc}\n\nOracle analysis: Confidence 87%.\n\nWant me to suggest actions?`)}><Brain size={12} /> Deep Dive</button>
                        <button className="ghost-btn">Dismiss</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── CHAT INPUT ── */}
          <div style={{
            padding: "10px 20px 14px", borderTop: "1px solid var(--bdr)",
            background: isDark ? "rgba(8,8,15,0.7)" : "rgba(243,244,248,0.85)", backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", gap: 8, zIndex: 5,
          }}>
            <input ref={inputRef} value={chatInput} onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") { if (mode !== "chat") switchMode("chat"); setTimeout(() => sendChat(chatInput), mode !== "chat" ? 350 : 0); } }}
              placeholder="Ask Genie anything..." style={{
                flex: 1, background: "var(--input-bg)", border: "1px solid var(--input-bdr)",
                borderRadius: 12, padding: "11px 16px", fontSize: 13, fontFamily: "var(--font)",
                color: "var(--text-primary)", outline: "none", transition: "border-color .25s, box-shadow .25s",
              }}
              onFocus={e => { e.target.style.borderColor = "rgba(34,211,238,0.25)"; e.target.style.boxShadow = "0 0 14px rgba(34,211,238,0.06)"; }}
              onBlur={e => { e.target.style.borderColor = ""; e.target.style.boxShadow = "none"; }} />
            <button onClick={() => { if (mode !== "chat") switchMode("chat"); setTimeout(() => sendChat(chatInput), mode !== "chat" ? 350 : 0); }} style={{
              width: 40, height: 40, borderRadius: 12,
              background: chatInput.trim() ? (isDark ? "linear-gradient(135deg, #22d3ee, #a78bfa)" : "linear-gradient(135deg, #0e8c9e, #7c4dcc)") : "var(--input-bg)",
              border: chatInput.trim() ? "none" : "1px solid var(--input-bdr)",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              transition: "all .3s cubic-bezier(.22,1,.36,1)",
            }}>
              <Send size={16} style={{ color: chatInput.trim() ? "#fff" : "var(--text-muted)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* ═══ FLOATING AMBIENT WHISPER (idle-triggered) ═══ */}
      {floatingWhisper && (
        <div style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 180,
          maxWidth: 360, width: "auto",
          animation: floatingWhisper.phase === "out" ? "floatWhisperOut 0.8s ease-in forwards" : "floatWhisperIn 0.7s cubic-bezier(.22,1,.36,1)",
          pointerEvents: floatingWhisper.phase === "out" ? "none" : "auto",
        }}>
          {/* Ambient glow behind */}
          <div style={{
            position: "absolute", inset: -20, borderRadius: 28,
            background: floatingWhisper.mood === "nudge"
              ? "radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%)"
              : "radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)",
            animation: "floatWhisperCalm 4s ease-in-out infinite", pointerEvents: "none",
          }} />
          {/* Card */}
          <div style={{
            position: "relative",
            background: isDark ? "rgba(18,18,36,0.95)" : "rgba(255,255,255,0.97)",
            border: `1px solid ${floatingWhisper.mood === "nudge" ? "rgba(167,139,250,0.2)" : "rgba(34,211,238,0.15)"}`,
            borderRadius: 18, padding: "16px 20px",
            backdropFilter: "blur(20px)",
            animation: "floatWhisperGlow 4s ease-in-out infinite",
            cursor: "pointer",
          }} onClick={() => {
            setFloatingWhisper(prev => prev ? { ...prev, phase: "out" } : null);
            setTimeout(() => setFloatingWhisper(null), 600);
          }}>
            {/* Header row with Genie */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{ animation: "floatWhisperCharIdle 3s ease-in-out infinite", flexShrink: 0 }}>
                <GenieChar size={66} state="speaking" whisper={true} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.2, color: floatingWhisper.mood === "nudge" ? "var(--accent-purple)" : "var(--accent-cyan)" }}>
                    {floatingWhisper.emoji} Genie whispers
                  </span>
                  {/* Typing dots */}
                  <span style={{ display: "flex", gap: 2 }}>
                    {[0, 1, 2].map(d => (
                      <span key={d} style={{
                        width: 3, height: 3, borderRadius: "50%",
                        background: floatingWhisper.mood === "nudge" ? "var(--accent-purple)" : "var(--accent-cyan)",
                        animation: `floatWhisperDots 1.4s ease-in-out ${d * 0.2}s infinite`,
                      }} />
                    ))}
                  </span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", fontStyle: "italic", marginTop: 4 }}>
                  "{floatingWhisper.text}"
                </p>
              </div>
            </div>
            {/* Subtle footer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid var(--bdr)" }}>
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>Click to dismiss</span>
              <button className="ghost-btn" style={{ padding: "3px 10px", fontSize: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const t = floatingWhisper.text;
                  const chain = /fabric|margin|cost/i.test(t) ? "fabric" : /surat|sales|order/i.test(t) ? "sales" : /stock|material/i.test(t) ? "stock" : null;
                  setFloatingWhisper(null);
                  switchMode("chat");
                  setTimeout(() => {
                    addMsg("user", "Why? Tell me more.");
                    if (chain) {
                      genieReply(`${floatingWhisper.emoji} **Here's the cause-effect chain:**`, { type: "causeEffect", chain });
                    } else {
                      genieReply(`${floatingWhisper.emoji} **Here's what I'm seeing:**\n\n${t}\n\nWant me to dig deeper into this?`);
                    }
                  }, 400);
                }}>
                <Brain size={10} /> Tell me more
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CONFIDENCE OVERLAY ═══ */}
      {confidenceMode && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--overlay-bg)", backdropFilter: "blur(16px)", animation: "confOverlayIn 0.3s ease-out" }}>
          <div style={{ width: 420, padding: "28px", background: "var(--modal-bg)", border: "1px solid rgba(34,197,94,0.1)", borderRadius: 20, animation: "scaleIn 0.35s cubic-bezier(.22,1,.36,1)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <SentinelChar size={80} state="active" />
              <p style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-display)", marginTop: 10 }}>Scanning your business...</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>Sentinel checking all systems</p>
            </div>
            {MOCK.confidenceData.map((c, i) => {
              const sc = { safe: "34,197,94", caution: "234,179,8", risk: "239,68,68" }[c.status];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", marginBottom: 6, background: `rgba(${sc},0.04)`, border: `1px solid rgba(${sc},0.1)`, borderRadius: 8, animation: `fadeSlideUp 0.4s ease-out ${i * 150}ms both` }}>
                  <span style={{ fontSize: 16 }}>{c.icon}</span>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{c.label}</span>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: `rgb(${sc})`, boxShadow: `0 0 6px rgba(${sc},0.4)` }} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ LIVE SCREEN EXPLAINER PANEL ═══ */}
      {explainer && (() => {
        const ExIcon = explainer.icon;
        const ExChar = { sentinel: SentinelChar, genie: GenieChar, pulse: PulseChar, oracle: OracleChar }[explainer.character];
        return (
          <div style={{ position: "fixed", inset: 0, zIndex: 250, display: "flex", justifyContent: "flex-end", animation: "fadeIn 0.2s ease-out" }}
            onClick={() => setExplainer(null)}>
            {/* Backdrop */}
            <div style={{ position: "absolute", inset: 0, background: "var(--overlay-bg)", backdropFilter: "blur(8px)" }} />
            {/* Panel */}
            <div onClick={e => e.stopPropagation()} style={{
              position: "relative", width: 460, maxWidth: "90vw", height: "100vh",
              background: "var(--modal-bg)", borderLeft: `3px solid ${explainer.color}`,
              boxShadow: `-20px 0 60px ${isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.1)"}`,
              display: "flex", flexDirection: "column", animation: "explainerSlideIn 0.45s cubic-bezier(.22,1,.36,1)",
              overflowY: "auto",
            }}>
              {/* Header */}
              <div style={{ padding: "24px 28px 0", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    {/* Character with pulse ring */}
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `2px solid ${explainer.color}20`, animation: "explainerPulseRing 2s ease-in-out infinite" }} />
                      <ExChar size={88} state="active" />
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: explainer.color, marginBottom: 4 }}>
                        <ExIcon size={11} style={{ verticalAlign: -1, marginRight: 4 }} />LIVE EXPLAINER
                      </p>
                      <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: "var(--font-display)" }}>{explainer.title}</h3>
                    </div>
                  </div>
                  <button onClick={() => setExplainer(null)} style={{ background: "var(--input-bg)", border: "1px solid var(--input-bdr)", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}>
                    <X size={16} />
                  </button>
                </div>
                {/* Sentinel says */}
                <div style={{ padding: "12px 16px", borderRadius: 12, background: `${explainer.color}08`, border: `1px solid ${explainer.color}15`, marginBottom: 20, display: "flex", gap: 10, alignItems: "flex-start", animation: "explainerItemIn 0.4s ease-out 100ms both" }}>
                  <ExChar size={40} state="speaking" />
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", fontStyle: "italic" }}>"{explainer.summary}"</p>
                </div>
              </div>

              {/* Breakdown */}
              <div style={{ padding: "0 28px", flex: 1 }}>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text-muted)", marginBottom: 10 }}>Breakdown</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {explainer.breakdown.map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, background: "var(--bg-card)", border: "1px solid var(--bdr)", animation: `explainerItemIn 0.35s ease-out ${150 + i * 80}ms both` }}>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600 }}>{b.label}</p>
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 1 }}>{b.note}</p>
                      </div>
                      <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)", color: explainer.color }}>{b.value}</span>
                    </div>
                  ))}
                </div>

                {/* Risk highlight */}
                <div style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", marginBottom: 20, animation: "explainerItemIn 0.4s ease-out 550ms both" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <AlertTriangle size={13} style={{ color: "var(--accent-red)" }} />
                    <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "var(--accent-red)" }}>Risk</span>
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--text-secondary)" }}>{explainer.risk}</p>
                </div>

                {/* Next Steps */}
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, color: "var(--text-muted)", marginBottom: 10 }}>Suggested Next Steps</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {explainer.nextSteps.map((step, i) => (
                    <div key={i} className="explainer-step" style={{ animation: `explainerItemIn 0.35s ease-out ${650 + i * 100}ms both` }}
                      onClick={() => { setExplainer(null); askGenie(step.label, `🎯 **${step.label}**\n\n${step.action}\n\nI can help you execute this. Want me to proceed?`); }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: `${explainer.color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <ArrowRightCircle size={15} style={{ color: explainer.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 13, fontWeight: 600 }}>{step.label}</p>
                        <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{step.action}</p>
                      </div>
                      <ChevronRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: "16px 28px", borderTop: "1px solid var(--bdr)", display: "flex", gap: 8, flexShrink: 0 }}>
                <button className="action-btn" style={{ flex: 1, justifyContent: "center", padding: "10px 16px" }}
                  onClick={() => { const t = explainer.title; setExplainer(null); askGenie(`Deep dive into ${t}`, `🔎 **${t} — Full Analysis**\n\nLet me pull the complete data and give you a thorough breakdown.\n\n${explainer.breakdown.map(b => `• **${b.label}**: ${b.value} — ${b.note}`).join("\n")}\n\n⚠️ ${explainer.risk}\n\nWhat specific aspect would you like to explore?`); }}>
                  <Brain size={14} /> Ask Genie for More
                </button>
                <button className="ghost-btn" style={{ padding: "10px 16px" }} onClick={() => setExplainer(null)}>Close</button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ═══ SCENE 1: WAKE-UP OVERLAY ═══ */}
      {wakeUpActive && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 210, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: isDark ? "rgba(8,8,15,0.85)" : "rgba(243,244,248,0.88)",
          backdropFilter: "blur(12px)", animation: "fadeIn 0.3s ease-out",
        }}>
          <div style={{ animation: "wakeUpPulse 0.8s cubic-bezier(.22,1,.36,1)", marginBottom: 20 }}>
            <div style={{ animation: "wakeUpGlow 2s ease-in-out infinite" }}>
              <GenieChar size={170} state={genieState} />
            </div>
          </div>
          <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "var(--accent-cyan)", animation: "wakeUpTextIn 0.5s ease-out 0.3s both" }}>✨ Genie is waking up</p>
          <p style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--font-display)", marginTop: 10, animation: "wakeUpTextIn 0.5s ease-out 0.6s both" }}>
            {MOCK.owner}, business is stable.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 6, animation: "wakeUpTextIn 0.5s ease-out 0.9s both" }}>
            One thing needs your attention.
          </p>
          <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))", marginTop: 16, animation: "wakeUpTextIn 0.5s ease-out 1.2s both" }} />
        </div>
      )}

      {/* ═══ MODE ENTRANCE CHARACTER ANIMATION ═══ */}
      {modeEntrance && (() => {
        const ent = MODES[modeEntrance];
        if (!ent) return null;
        const EntChar = { sentinel: SentinelChar, genie: GenieChar, pulse: PulseChar, oracle: OracleChar }[ent.character];
        const taglines = { dashboard: "Guardian of your numbers", chat: "Your business intelligence companion", operations: "Heartbeat of the factory floor", insights: "Patterns others can't see" };
        return (
          <div style={{
            position: "fixed", inset: 0, zIndex: 300, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", pointerEvents: "none",
            background: isDark ? "rgba(8,8,15,0.92)" : "rgba(243,244,248,0.94)",
            backdropFilter: "blur(20px)",
            animation: entranceFading ? "entranceFadeOut 0.6s ease-in forwards" : "fadeIn 0.15s ease-out",
          }}>
            {/* Ripple */}
            <div style={{
              position: "absolute", width: 100, height: 100, borderRadius: "50%",
              border: `2px solid ${ent.color}30`, animation: "entranceRipple 1.2s ease-out forwards",
            }} />
            <div style={{
              position: "absolute", width: 100, height: 100, borderRadius: "50%",
              border: `2px solid ${ent.color}20`, animation: "entranceRipple 1.2s ease-out 0.2s forwards",
            }} />
            {/* Character */}
            <div style={{ animation: "entranceCharIn 0.7s cubic-bezier(.22,1,.36,1)", marginBottom: 16 }}>
              <div style={{ filter: `drop-shadow(0 8px 30px ${ent.color}40)` }}>
                <EntChar size={160} state="active" />
              </div>
            </div>
            {/* Name line */}
            <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${ent.color}, transparent)`, animation: "entranceLineGrow 0.5s ease-out 0.3s both", marginBottom: 14, borderRadius: 1 }} />
            {/* Title */}
            <h1 style={{
              fontSize: 28, fontWeight: 900, fontFamily: "var(--font-display)",
              color: ent.color, textTransform: "uppercase",
              animation: "entranceTitleIn 0.6s cubic-bezier(.22,1,.36,1) 0.2s both",
              textShadow: `0 0 30px ${ent.color}30`,
            }}>{ent.character}</h1>
            {/* Tagline */}
            <p style={{
              fontSize: 13, color: "var(--text-secondary)", marginTop: 6,
              animation: "entranceSubIn 0.5s ease-out 0.5s both",
            }}>{taglines[modeEntrance]}</p>
            {/* Mode badge */}
            <div style={{
              marginTop: 14, padding: "4px 14px", borderRadius: 20,
              background: `${ent.color}12`, border: `1px solid ${ent.color}25`,
              fontSize: 11, fontWeight: 600, color: ent.color,
              animation: "entranceSubIn 0.5s ease-out 0.7s both",
            }}>{ent.label} Mode</div>
          </div>
        );
      })()}
    </>
  );
}
