import { useState, useEffect, useRef } from "react";
import medspa1 from "./assets/projects/medspa-1.png"
import medspa2 from "./assets/projects/medspa-2.png"
import medspa3 from "./assets/projects/medspa-3.png"
import medspa4 from "./assets/projects/medspa-4.png"
import acucare1 from "./assets/projects/acucare-1.jpg"
import acucare2 from "./assets/projects/acucare-2.jpg"
import acucare5 from "./assets/projects/acucare-5.jpg"
import acucare6 from "./assets/projects/acucare-6.jpg"
import acucare7 from "./assets/projects/acucare-7.jpg"
import acucare8 from "./assets/projects/acucare-8.jpg"
import acucare9 from "./assets/projects/acucare-9.jpg"
import acucare10 from "./assets/projects/acucare-10.jpg"
import acucare11 from "./assets/projects/acucare-11.jpg"
import medirag1 from "./assets/projects/medirag-1.png"
import medirag2 from "./assets/projects/medirag-2.png"
import medirag3 from "./assets/projects/medirag-3.png"
import medirag4 from "./assets/projects/medirag-4.png"



const T = {
  paper:  "#F7F3EC",
  paper2: "#EDE8DF",
  ink:    "#1A1714",
  ink2:   "#3A3530",
  muted:  "#9A9189",
  sienna: "#C4622D",
  sage:   "#7A9E7E",
  dusty:  "#8B7BA8",
  gold:   "#B8860B",
  rule:   "#D4CEC4",
  white:  "#FDFAF6",
};

const PROJECTS = [
  {
    id: "medspa", no: "01", name: "MedSpa Dashboard",
    subtitle: "Revenue Leakage & Utilization Intelligence", medium: "Data Analytics · Simulation · Python",
    accent: T.sage, year: "2025",
    description: "A full-stack healthcare operations analytics platform that simulates, quantifies, and optimizes revenue leakage in med spa scheduling. Four-phase architecture: synthetic data engine, KPI analytics, Monte Carlo optimization, and an interactive Streamlit executive dashboard.",
    stack: ["Python","Pandas","NumPy","Streamlit","Monte Carlo","Matplotlib","Seaborn"],
    stat: { val: "1,826%", label: "Simulated Combined ROI" },
    images: [medspa1, medspa2, medspa3, medspa4],
    placeholder: false,
    link: "https://github.com/zuhaakashif/medspa_dashboard",
    liveLink: "https://medspadashboard-test.streamlit.app/",
    label: "ANALYTICS",
  },
  {
    id: "acucare", no: "02", name: "AcuCare",
    subtitle: "Intelligent Acne Detection", medium: "Computer Vision · Mobile · ML",
    accent: T.sienna, year: "2025",
    description: "A mobile pipeline for acne lesion detection and classification. YOLOv8 handles detection; a handcrafted ELM classifier distinguishes nodules, papules, and pustules. Flutter frontend, Flask API, Firebase backend.",
    stack: ["YOLOv8","ELM Classifier","Flutter","Flask","Firebase","Python"],
    stat: { val: "87.7%", label: "Classification Accuracy" },
    images: [ acucare1, acucare2, acucare5, acucare6, acucare7, acucare8, acucare9, acucare10, acucare11
    ],
    link: "https://github.com/zuhaakashif/AcuCare-Demo",
    codeLink: "https://github.com/zuhaakashif/AcureCare-Code",
    label: "THESIS",
  },
  {
    id: "medirag", no: "03", name: "MediRAG",
    subtitle: "Role-Aware Medical Knowledge Assistant", medium: "RAG · LLM · FastAPI · Vector DB",
    accent: T.dusty, year: "2025",
    description: "A production-grade RAG chatbot that adapts its answers based on who is asking — doctor, patient, or hospital staff. Role filtering happens at the Pinecone vector level, not just the prompt. Integrates live OpenFDA data for 100,000+ medications and auto-escalates emergency queries.",
    stack: ["Python","FastAPI","Pinecone","LangChain","OpenRouter","Llama 3.3 70B","Streamlit","OpenFDA API"],
    stat: { val: "100K+", label: "Drugs via FDA API" },
    images: [medirag1, medirag2, medirag3, medirag4],
    placeholder: false,
    link: "https://github.com/zuhaakashif/MediRag",
    liveLink: "https://medirag-medical.streamlit.app",
    label: "RAG · LLM",
  },
  {
   id: "unishelf", no: "04", name: "UniShelf",
    subtitle: "Course Materials at Your Fingertips", medium: "Android · Kotlin · Firebase",
    accent: T.gold, year: "2023",
    description: "Android app letting university students browse and access all semester course materials — books, past papers, outlines, notes — organized by semester and subject, with Firebase auth and dark-mode reading.",
    stack: ["Kotlin","Android","Firebase Auth","Firestore","Material Design"],
    stat: { val: "4", label: "Resource Types" },
    images: [
      "https://raw.githubusercontent.com/zuhaakashif/UniShelf/main/unishelf-1.jpg",
      "https://raw.githubusercontent.com/zuhaakashif/UniShelf/main/unishelf-2.jpg",
      "https://raw.githubusercontent.com/zuhaakashif/UniShelf/main/unishelf-3.jpg",
      "https://raw.githubusercontent.com/zuhaakashif/UniShelf/main/unishelf-4.jpg",
      "https://raw.githubusercontent.com/zuhaakashif/UniShelf/main/unishelf-5.jpg",
    ],
    placeholder: false,
    link: "https://github.com/zuhaakashif/UniShelf",
    label: "ANDROID",
  },
  {
    id: "pptcontroller", no: "05", name: "PPT Controller",
    subtitle: "Gesture-Driven Presentations", medium: "Computer Vision · HCI",
    accent: T.sienna, year: "2024",
    description: "Real-time hand tracking via MediaPipe controls PowerPoint entirely through gestures — thumbs up opens, index advances, ring goes back, pinky closes. Zero hardware beyond a webcam.",
    stack: ["Python","OpenCV","MediaPipe","PyAutoGUI","NumPy"],
    stat: { val: "4", label: "Gesture Commands" },
    images: [],
    placeholder: false,
    diagramComponent: true,
    link: "https://github.com/zuhaakashif/PowerPoint-Controller",
    label: "CV",
  },
];

const EXPERIENCE = [
  {
    role: "Research Intern",
    org: "Institute of Space Technology",
    period: "Oct 2025 – Dec 2025",
    accent: T.sienna,
    bullets: [
      "Proposed and evaluated a Catastrophic Failure (CF) Rate metric to audit reliability of medical image segmentation models, revealing failure rates up to 25.5% hidden by average Dice scores.",
      "Conducted controlled benchmarking on the PH² dermoscopic dataset, comparing Fuzzy C-Means and K-Means segmentation.",
      "Applied non-parametric statistical validation (Wilcoxon Signed-Rank, p = 0.010) and confidence interval analysis.",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    org: "Easypaisa Digital Bank",
    period: "Jun 2024 – Aug 2024",
    accent: T.sage,
    bullets: [
      "Analyzed a dataset of 10,000+ customer interactions to identify key friction points, contributing to a 15% streamlining of digital payment workflows.",
      "Collaborated with cross-functional teams to enhance user experiences for payment solutions.",
      "Gained insights into user-centric design and scalable technology implementation.",
    ],
  },
  {
    role: "WordPress Developer",
    org: "Bizwitt Technologies",
    period: "Freelance",
    accent: T.dusty,
    bullets: [
      "Built and maintained websites for international clients using WordPress and Elementor.",
      "Delivered responsive, client-facing web solutions with a focus on clean UX and on-time delivery.",
    ],
  },
];

/* ── helpers ── */
function Rule() {
  return <div style={{ height:"1px", background:T.rule }} />;
}
function Eyebrow({ children, color = T.muted }) {
  return (
    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.28em", color, textTransform:"uppercase", marginBottom:"10px" }}>
      {children}
    </div>
  );
}

function GalleryImage({ src, placeholder, alt = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);
  if (placeholder || !src) return (
    <div style={{ width:"100%", aspectRatio:"4/3", background:T.paper2, border:`1px solid ${T.rule}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"10px" }}>
      <div style={{ fontSize:"2.5rem", opacity:0.18 }}>◻</div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", color:T.muted, letterSpacing:"0.18em" }}>SCREENSHOT PENDING</div>
    </div>
  );
  return (
    <div style={{ position:"relative", overflow:"hidden", aspectRatio:"4/3", background:T.paper2 }}>
      {(!loaded||err) && (
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", color:T.muted }}>{err?"unavailable":"loading…"}</div>
        </div>
      )}
      <img src={src} alt={alt}
        onLoad={()=>setLoaded(true)} onError={()=>setErr(true)}
        style={{ width:"100%", height:"100%", objectFit:"contain", display:"block", opacity:loaded&&!err?1:0, transition:"opacity 0.4s" }}
      />
    </div>
  );
}

function ImageStrip({ images, accent, placeholder, diagramComponent }) {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  if (diagramComponent) return <PptDiagram />;

  const hasMultiple = images && images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;

    // Reset progress bar
    setProgress(0);

    // Animate progress bar over 2.6s
    const DURATION = 2600;
    const TICK = 30;
    let elapsed = 0;
    progressRef.current = setInterval(() => {
      elapsed += TICK;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, TICK);

    // Advance slide after DURATION
    intervalRef.current = setTimeout(() => {
      setIdx(i => (i + 1) % images.length);
    }, DURATION);

    return () => {
      clearTimeout(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, [idx, hasMultiple, images?.length]);

  const src = images && images.length > 0 ? images[idx] : null;

  return (
    <div>
      <div style={{ position:"relative" }}>
        <GalleryImage src={src} placeholder={!src || placeholder} />
        {/* Slide counter badge */}
        {hasMultiple && (
          <div style={{
            position:"absolute", top:"10px", right:"10px",
            fontFamily:"'DM Mono',monospace", fontSize:"0.55rem",
            color: T.white, background:"rgba(26,23,20,0.55)",
            padding:"2px 7px", letterSpacing:"0.1em",
            backdropFilter:"blur(4px)",
          }}>
            {idx + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Progress bar strip */}
      {hasMultiple && (
        <div style={{ display:"flex", gap:"3px", marginTop:"6px" }}>
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => { setIdx(i); setProgress(0); }}
              style={{ flex:1, height:"2px", background:T.rule, cursor:"pointer", position:"relative", overflow:"hidden" }}
            >
              {i === idx && (
                <div style={{
                  position:"absolute", left:0, top:0, bottom:0,
                  width:`${progress}%`,
                  background: accent,
                  transition:"width 0.03s linear",
                }} />
              )}
              {i < idx && (
                <div style={{ position:"absolute", inset:0, background:accent, opacity:0.5 }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, reverse }) {
  const [hov, setHov] = useState(false);
  return (
    <article
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"grid", gridTemplateColumns: reverse ? "1fr 1.15fr" : "1.15fr 1fr",
        border:`1px solid ${T.rule}`,
        transition:"box-shadow 0.3s",
        boxShadow: hov ? `4px 4px 0 ${project.accent}` : "none",
        background: T.white,
        animation:"fadeUp 0.6s ease both",
      }}
    >
      {/* Image side */}
      <div style={{ order: reverse?2:1, overflow:"hidden" }}>
        <ImageStrip images={project.images} accent={project.accent} placeholder={project.placeholder} diagramComponent={project.diagramComponent} />
      </div>

      {/* Info side */}
      <div style={{
        order: reverse?1:2,
        padding:"32px 28px",
        borderLeft: reverse?"none":`1px solid ${T.rule}`,
        borderRight: reverse?`1px solid ${T.rule}`:"none",
        display:"flex", flexDirection:"column",
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"12px" }}>
          <Eyebrow color={project.accent}>{project.label} — {project.year}</Eyebrow>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:T.muted, opacity:0.45 }}>{project.no}</span>
        </div>

        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.45rem", fontWeight:700, color:T.ink, lineHeight:1.15, marginBottom:"5px", letterSpacing:"-0.01em" }}>
          {project.name}
        </h3>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:T.muted, letterSpacing:"0.08em", marginBottom:"16px" }}>
          {project.subtitle}
        </div>

        <Rule /><div style={{ height:"16px" }} />

        <p style={{ fontFamily:"'Lora',serif", fontSize:"0.82rem", color:T.ink2, lineHeight:1.78, marginBottom:"18px", flex:1 }}>
          {project.description}
        </p>

        {/* Stat pull */}
        <div style={{ background:T.paper2, borderLeft:`3px solid ${project.accent}`, padding:"10px 14px", marginBottom:"16px", display:"inline-flex", gap:"10px", alignItems:"baseline" }}>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.55rem", fontWeight:700, color:project.accent }}>{project.stat.val}</span>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase" }}>{project.stat.label}</span>
        </div>

        {/* Stack */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"4px", marginBottom:"18px" }}>
          {project.stack.map(s => (
            <span key={s} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", color:T.ink2, border:`1px solid ${T.rule}`, padding:"2px 7px", background:T.paper, letterSpacing:"0.05em" }}>{s}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
          <a href={project.link} target="_blank" rel="noreferrer"
            style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:project.accent, letterSpacing:"0.1em", borderBottom:`1px solid ${project.accent}`, paddingBottom:"1px", transition:"opacity 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.opacity="0.55"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
          >VIEW ON GITHUB →</a>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer"
              style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:T.sage, letterSpacing:"0.1em", borderBottom:`1px solid ${T.sage}`, paddingBottom:"1px", transition:"opacity 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.opacity="0.55"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
            >LIVE DEMO →</a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noreferrer"
              style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:T.muted, letterSpacing:"0.1em", borderBottom:`1px solid ${T.rule}`, paddingBottom:"1px", transition:"color 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.color=T.ink} onMouseLeave={e=>e.currentTarget.style.color=T.muted}
            >SOURCE →</a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── PPT DIAGRAM ──────────────────────────────────────────────────────────── */
function PptDiagram() {
  return (
    <div style={{ width:"100%", aspectRatio:"4/3", background:"#EDE8DF", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" style={{ width:"100%", height:"100%" }}>
        <defs>
          <style>{`.lbl{font-family:'DM Mono','Courier New',monospace}.ttl{font-family:Georgia,'Times New Roman',serif}`}</style>
        </defs>
        <rect width="800" height="600" fill="#EDE8DF"/>
        <rect x="40" y="52" width="720" height="1.5" fill="#1A1714"/>
        <text x="400" y="40" textAnchor="middle" className="ttl" fontSize="13" fontWeight="700" fill="#1A1714" letterSpacing="1">GESTURE → ACTION MAPPING</text>
        <text x="400" y="68" textAnchor="middle" className="lbl" fontSize="9" fill="#9A9189" letterSpacing="3">POWERPOINT CONTROLLER — MEDIAPIPE HAND MODEL</text>
        <rect x="40" y="76" width="720" height="0.75" fill="#D4CEC4"/>

        {/* Card 1 — Thumbs Up */}
        <g transform="translate(60,110)">
          <rect width="155" height="200" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect width="4" height="200" fill="#C4622D"/>
          <text x="140" y="20" textAnchor="end" className="lbl" fontSize="9" fill="#D4CEC4" letterSpacing="1">01</text>
          <g transform="translate(20,28)">
            <rect x="28" y="60" width="48" height="52" rx="8" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="12" y="22" width="16" height="50" rx="8" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="28" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="41" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="54" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="14" y="24" width="12" height="28" rx="6" fill="#C4622D" fillOpacity="0.18"/>
            <circle cx="20" cy="26" r="3.5" fill="#C4622D"/>
          </g>
          <rect x="12" y="138" width="131" height="0.75" fill="#D4CEC4"/>
          <text x="12" y="158" className="lbl" fontSize="8.5" fill="#C4622D" letterSpacing="2">OPEN</text>
          <text x="12" y="173" className="ttl" fontSize="11" fontWeight="700" fill="#1A1714">PowerPoint</text>
          <text x="12" y="190" className="lbl" fontSize="8" fill="#9A9189">Launches presentation</text>
        </g>

        {/* Card 2 — Index */}
        <g transform="translate(235,110)">
          <rect width="155" height="200" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect width="4" height="200" fill="#7A9E7E"/>
          <text x="140" y="20" textAnchor="end" className="lbl" fontSize="9" fill="#D4CEC4" letterSpacing="1">02</text>
          <g transform="translate(20,28)">
            <rect x="28" y="60" width="48" height="52" rx="8" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="28" y="14" width="13" height="52" rx="6" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="30" y="16" width="9" height="30" rx="5" fill="#7A9E7E" fillOpacity="0.2"/>
            <circle cx="34" cy="18" r="3.5" fill="#7A9E7E"/>
            <rect x="43" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="56" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="14" y="60" width="16" height="22" rx="7" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <text x="82" y="45" fontSize="16" fill="#7A9E7E" fontFamily="serif">→</text>
          </g>
          <rect x="12" y="138" width="131" height="0.75" fill="#D4CEC4"/>
          <text x="12" y="158" className="lbl" fontSize="8.5" fill="#7A9E7E" letterSpacing="2">ADVANCE</text>
          <text x="12" y="173" className="ttl" fontSize="11" fontWeight="700" fill="#1A1714">Next Slide</text>
          <text x="12" y="190" className="lbl" fontSize="8" fill="#9A9189">Index finger raised</text>
        </g>

        {/* Card 3 — Ring */}
        <g transform="translate(410,110)">
          <rect width="155" height="200" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect width="4" height="200" fill="#8B7BA8"/>
          <text x="140" y="20" textAnchor="end" className="lbl" fontSize="9" fill="#D4CEC4" letterSpacing="1">03</text>
          <g transform="translate(20,28)">
            <rect x="28" y="60" width="48" height="52" rx="8" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="54" y="16" width="13" height="50" rx="6" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="56" y="18" width="9" height="28" rx="5" fill="#8B7BA8" fillOpacity="0.2"/>
            <circle cx="60" cy="20" r="3.5" fill="#8B7BA8"/>
            <rect x="28" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="41" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="14" y="60" width="16" height="22" rx="7" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <text x="2" y="45" fontSize="16" fill="#8B7BA8" fontFamily="serif">←</text>
          </g>
          <rect x="12" y="138" width="131" height="0.75" fill="#D4CEC4"/>
          <text x="12" y="158" className="lbl" fontSize="8.5" fill="#8B7BA8" letterSpacing="2">GO BACK</text>
          <text x="12" y="173" className="ttl" fontSize="11" fontWeight="700" fill="#1A1714">Prev Slide</text>
          <text x="12" y="190" className="lbl" fontSize="8" fill="#9A9189">Ring finger raised</text>
        </g>

        {/* Card 4 — Pinky */}
        <g transform="translate(585,110)">
          <rect width="155" height="200" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect width="4" height="200" fill="#B8860B"/>
          <text x="140" y="20" textAnchor="end" className="lbl" fontSize="9" fill="#D4CEC4" letterSpacing="1">04</text>
          <g transform="translate(20,28)">
            <rect x="28" y="60" width="48" height="52" rx="8" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="67" y="20" width="11" height="46" rx="5" fill="none" stroke="#1A1714" strokeWidth="1.8"/>
            <rect x="69" y="22" width="7" height="26" rx="4" fill="#B8860B" fillOpacity="0.2"/>
            <circle cx="72" cy="24" r="3.5" fill="#B8860B"/>
            <rect x="28" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="41" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="54" y="48" width="11" height="18" rx="5" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <rect x="14" y="60" width="16" height="22" rx="7" fill="#EDE8DF" stroke="#1A1714" strokeWidth="1.5"/>
            <text x="2" y="48" fontSize="14" fill="#B8860B" fontFamily="serif" fontWeight="bold">✕</text>
          </g>
          <rect x="12" y="138" width="131" height="0.75" fill="#D4CEC4"/>
          <text x="12" y="158" className="lbl" fontSize="8.5" fill="#B8860B" letterSpacing="2">CLOSE</text>
          <text x="12" y="173" className="ttl" fontSize="11" fontWeight="700" fill="#1A1714">PowerPoint</text>
          <text x="12" y="190" className="lbl" fontSize="8" fill="#9A9189">Pinky finger raised</text>
        </g>

        {/* Flow arrows */}
        <line x1="219" y1="210" x2="231" y2="210" stroke="#D4CEC4" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="231,207 236,210 231,213" fill="#D4CEC4"/>
        <line x1="394" y1="210" x2="406" y2="210" stroke="#D4CEC4" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="406,207 411,210 406,213" fill="#D4CEC4"/>
        <line x1="569" y1="210" x2="581" y2="210" stroke="#D4CEC4" strokeWidth="1.5" strokeDasharray="3,2"/>
        <polygon points="581,207 586,210 581,213" fill="#D4CEC4"/>

        {/* Tech stack */}
        <rect x="40" y="338" width="720" height="0.75" fill="#D4CEC4"/>
        <text x="40" y="368" className="lbl" fontSize="8" fill="#9A9189" letterSpacing="2.5">TECH STACK</text>
        <g transform="translate(40,380)">
          <rect width="68" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="34" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">Python</text>
          <rect x="76" width="68" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="110" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">OpenCV</text>
          <rect x="152" width="80" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="192" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">MediaPipe</text>
          <rect x="240" width="82" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="281" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">PyAutoGUI</text>
          <rect x="330" width="62" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="361" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">NumPy</text>
          <rect x="400" width="86" height="22" fill="none" stroke="#D4CEC4" strokeWidth="1"/>
          <text x="443" y="15" textAnchor="middle" className="lbl" fontSize="8.5" fill="#3A3530" letterSpacing="1">Webcam Input</text>
        </g>

        {/* Pipeline */}
        <rect x="40" y="428" width="720" height="0.75" fill="#D4CEC4"/>
        <text x="40" y="458" className="lbl" fontSize="8" fill="#9A9189" letterSpacing="2.5">PIPELINE</text>
        <g transform="translate(40,472)">
          <rect width="110" height="44" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect width="3" height="44" fill="#C4622D"/>
          <text x="62" y="18" textAnchor="middle" className="lbl" fontSize="7.5" fill="#9A9189" letterSpacing="1.5">INPUT</text>
          <text x="62" y="34" textAnchor="middle" className="ttl" fontSize="10" fontWeight="700" fill="#1A1714">Webcam</text>
          <line x1="114" y1="22" x2="128" y2="22" stroke="#D4CEC4" strokeWidth="1.2"/>
          <polygon points="128,19 133,22 128,25" fill="#D4CEC4"/>
          <rect x="137" width="130" height="44" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect x="137" width="3" height="44" fill="#7A9E7E"/>
          <text x="202" y="18" textAnchor="middle" className="lbl" fontSize="7.5" fill="#9A9189" letterSpacing="1.5">DETECT</text>
          <text x="202" y="34" textAnchor="middle" className="ttl" fontSize="10" fontWeight="700" fill="#1A1714">Hand Landmarks</text>
          <line x1="271" y1="22" x2="285" y2="22" stroke="#D4CEC4" strokeWidth="1.2"/>
          <polygon points="285,19 290,22 285,25" fill="#D4CEC4"/>
          <rect x="294" width="130" height="44" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect x="294" width="3" height="44" fill="#8B7BA8"/>
          <text x="359" y="18" textAnchor="middle" className="lbl" fontSize="7.5" fill="#9A9189" letterSpacing="1.5">CLASSIFY</text>
          <text x="359" y="34" textAnchor="middle" className="ttl" fontSize="10" fontWeight="700" fill="#1A1714">Gesture Type</text>
          <line x1="428" y1="22" x2="442" y2="22" stroke="#D4CEC4" strokeWidth="1.2"/>
          <polygon points="442,19 447,22 442,25" fill="#D4CEC4"/>
          <rect x="451" width="130" height="44" fill="#F7F3EC" stroke="#D4CEC4" strokeWidth="1"/>
          <rect x="451" width="3" height="44" fill="#B8860B"/>
          <text x="516" y="18" textAnchor="middle" className="lbl" fontSize="7.5" fill="#9A9189" letterSpacing="1.5">EXECUTE</text>
          <text x="516" y="34" textAnchor="middle" className="ttl" fontSize="10" fontWeight="700" fill="#1A1714">PyAutoGUI Action</text>
          <line x1="585" y1="22" x2="599" y2="22" stroke="#D4CEC4" strokeWidth="1.2"/>
          <polygon points="599,19 604,22 599,25" fill="#D4CEC4"/>
          <rect x="608" width="112" height="44" fill="#1A1714" stroke="#1A1714" strokeWidth="1"/>
          <text x="664" y="18" textAnchor="middle" className="lbl" fontSize="7.5" fill="#9A9189" letterSpacing="1.5">OUTPUT</text>
          <text x="664" y="34" textAnchor="middle" className="ttl" fontSize="10" fontWeight="700" fill="#F7F3EC">PowerPoint</text>
        </g>

        <rect x="40" y="556" width="720" height="1.5" fill="#1A1714"/>
        <text x="400" y="576" textAnchor="middle" className="lbl" fontSize="8" fill="#9A9189" letterSpacing="2">REAL-TIME · ZERO HARDWARE · WEBCAM ONLY</text>
      </svg>
    </div>
  );
}

/* ── SKILLS MATRIX ────────────────────────────────────────────────────────── */
const MATRIX_SKILLS = [
  { domain: "Machine Learning",  skills: ["Python", "YOLOv8", "OpenCV", "TF-IDF", "ELM", "Scikit-learn"], level: 5 },
  { domain: "Data & Analytics",  skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Monte Carlo", "Streamlit"], level: 5 },
  { domain: "Mobile Dev",        skills: ["Flutter", "Dart", "Firebase", "Firestore", "Kotlin", "Android"], level: 4 },
  { domain: "LLM & NLP",         skills: ["RAG", "TF-IDF", "OpenRouter", "Prompt Eng.", "LLM APIs", ""], level: 4 },
  { domain: "Web & CMS",         skills: ["React", "Flask", "WordPress", "Elementor", "REST APIs", ""], level: 3 },
  { domain: "Research Methods",  skills: ["Wilcoxon", "Logit CI", "UNet", "Med. Imaging", "Repro. NB", ""], level: 4 },
];

const DOT_TOTAL = 6;

function Dot({ filled, accent, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      width: "9px", height: "9px",
      borderRadius: "50%",
      border: `1.5px solid ${filled ? accent : T.rule}`,
      background: filled ? accent : "transparent",
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.4)",
      transition: "opacity 0.3s, transform 0.3s",
      flexShrink: 0,
    }} />
  );
}

function SkillsMatrix() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const accents = [T.sienna, T.sage, T.dusty, T.gold, T.sienna, T.sage];

  return (
    <div ref={ref} style={{ paddingLeft:"52px", paddingTop:"28px", animation:"fadeUp 0.7s ease 0.2s both" }}>
      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"20px" }}>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", letterSpacing:"0.26em", color:T.muted }}>
          SKILLS MATRIX
        </div>
        {/* Legend */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ display:"flex", gap:"3px" }}>
            {[1,2,3,4,5].map(i => (
              <div key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background: i<=3 ? T.sienna : T.rule, border:`1.5px solid ${i<=3?T.sienna:T.rule}` }} />
            ))}
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:T.muted, letterSpacing:"0.1em" }}>
            = proficiency
          </div>
        </div>
      </div>

      {/* Top border */}
      <div style={{ height:"1px", background:T.ink, marginBottom:"0" }} />

      {/* Matrix rows */}
      {MATRIX_SKILLS.map((row, ri) => {
        const accent = accents[ri];
        return (
          <div key={row.domain} style={{
            display:"grid",
            gridTemplateColumns:"130px 1px 1fr 1px auto",
            alignItems:"center",
            borderBottom:`1px solid ${T.rule}`,
            minHeight:"52px",
          }}>
            {/* Domain label */}
            <div style={{ paddingRight:"14px", paddingTop:"10px", paddingBottom:"10px" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"0.78rem", fontWeight:700, color:T.ink, lineHeight:1.2, marginBottom:"2px" }}>
                {row.domain}
              </div>
            </div>

            {/* Rule */}
            <div style={{ background:T.rule, alignSelf:"stretch" }} />

            {/* Skill tags */}
            <div style={{ padding:"10px 14px", display:"flex", flexWrap:"wrap", gap:"4px 6px" }}>
              {row.skills.filter(s => s !== "").map((skill, si) => (
                <span key={skill} style={{
                  fontFamily:"'DM Mono',monospace", fontSize:"0.55rem",
                  color: T.ink2, letterSpacing:"0.06em",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(4px)",
                  transition: `opacity 0.4s ${ri * 80 + si * 40}ms, transform 0.4s ${ri * 80 + si * 40}ms`,
                }}>
                  {skill}{si < row.skills.filter(s=>s!=="").length - 1 ? <span style={{color:T.rule}}> ·</span> : ""}
                </span>
              ))}
            </div>

            {/* Rule */}
            <div style={{ background:T.rule, alignSelf:"stretch" }} />

            {/* Dot proficiency */}
            <div style={{ display:"flex", gap:"4px", alignItems:"center", paddingLeft:"14px", paddingRight:"4px" }}>
              {Array.from({ length: DOT_TOTAL }).map((_, di) => (
                <Dot
                  key={di}
                  filled={inView && di < row.level}
                  accent={accent}
                  delay={inView ? ri * 100 + di * 60 : 0}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Bottom border */}
      <div style={{ height:"2px", background:T.ink }} />

      {/* Footer note */}
      <div style={{ marginTop:"14px", display:"flex", justifyContent:"flex-end", gap:"20px" }}>
        {[
          { dots: 6, label:"Expert" },
          { dots: 4, label:"Proficient" },
          { dots: 3, label:"Familiar" },
        ].map(item => (
          <div key={item.label} style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <div style={{ display:"flex", gap:"2px" }}>
              {Array.from({length:6}).map((_,i) => (
                <div key={i} style={{
                  width:"5px", height:"5px", borderRadius:"50%",
                  background: i < item.dots ? T.ink2 : "transparent",
                  border:`1px solid ${i < item.dots ? T.ink2 : T.rule}`,
                }} />
              ))}
            </div>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.5rem", color:T.muted, letterSpacing:"0.12em" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const NAV = ["Index","Work","Experience","Research","Contact"];

export default function Portfolio() {
  const [active, setActive] = useState("Index");
  const [scrollY, setScrollY] = useState(0);

  useEffect(()=>{
    const fn = ()=>{
      setScrollY(window.scrollY);
      for (const s of [...NAV].reverse()) {
        const el = document.getElementById(s.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(s); return; }
      }
      setActive("Index");
    };
    window.addEventListener("scroll", fn);
    return ()=>window.removeEventListener("scroll", fn);
  },[]);

  const go = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ background:T.paper, minHeight:"100vh", color:T.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#F7F3EC;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-track{background:#F7F3EC;}
        ::-webkit-scrollbar-thumb{background:#D4CEC4;}
        a{text-decoration:none;}
        .nav-lnk:hover{color:#1A1714!important;}
        .contact-row:hover{padding-left:10px!important;}
      `}</style>

      {/* ══ HEADER ════════════════════════════════════════════════════════ */}
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        background: scrollY>40 ? "rgba(247,243,236,0.97)" : T.paper,
        backdropFilter:"blur(10px)",
        borderBottom:`1px solid ${scrollY>40?T.rule:"transparent"}`,
        transition:"all 0.3s",
      }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 52px 0" }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", letterSpacing:"0.28em", color:T.muted }}>PORTFOLIO — VOL. I, 2026</div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.35rem", letterSpacing:"-0.02em", color:T.ink }}>Zuha Fatima</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", letterSpacing:"0.22em", color:T.muted }}>ML ENGINEER · DEVELOPER</div>
        </div>
        <div style={{ height:"1px", background:T.rule, margin:"10px 52px 0" }} />
        <nav style={{ display:"flex", justifyContent:"center", gap:"36px", padding:"8px 52px 12px" }}>
          {NAV.map(item=>(
            <button key={item} className="nav-lnk" onClick={()=>go(item)}
              style={{
                fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase",
                color: active===item ? T.ink : T.muted,
                background:"none", border:"none", cursor:"pointer",
                borderBottom: active===item ? `1px solid ${T.ink}` : "1px solid transparent",
                paddingBottom:"2px", transition:"color 0.2s",
              }}
            >{item}</button>
          ))}
        </nav>
      </header>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section id="index" style={{ paddingTop:"118px" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"0 52px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 2px 1fr", gap:0, alignItems:"start" }}>

            {/* Left */}
            <div style={{ paddingRight:"52px", paddingTop:"28px", animation:"fadeUp 0.7s ease 0.1s both" }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", letterSpacing:"0.3em", color:T.muted, marginBottom:"20px" }}>
                № 001 — MACHINE LEARNING ENGINEER
              </div>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(3.2rem,6.5vw,5.5rem)", lineHeight:0.93, letterSpacing:"-0.03em", color:T.ink, marginBottom:"32px" }}>
                Zuha<br/>
                <em style={{ color:T.sienna, fontStyle:"italic" }}>Fatima.</em>
              </h1>
              <p style={{ fontFamily:"'Lora',serif", fontSize:"0.94rem", color:T.ink2, lineHeight:1.85, maxWidth:"370px", marginBottom:"36px" }}>
                I build intelligent systems — from medical imaging research to analytics platforms, mobile apps, and LLM pipelines. Equal parts researcher, engineer, and obsessive about craft.
              </p>
              <div style={{ display:"flex", gap:"20px", alignItems:"center", flexWrap:"wrap" }}>
                <a href="mailto:zuha.fatima317@gmail.com"
                  style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.63rem", letterSpacing:"0.16em", textTransform:"uppercase", color:T.white, background:T.ink, padding:"11px 24px", display:"inline-block", transition:"background 0.22s" }}
                  onMouseEnter={e=>e.currentTarget.style.background=T.sienna}
                  onMouseLeave={e=>e.currentTarget.style.background=T.ink}
                >Get in Touch</a>
                <a href="https://github.com/zuhaakashif" target="_blank" rel="noreferrer"
                  style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.63rem", letterSpacing:"0.16em", textTransform:"uppercase", color:T.ink, borderBottom:`1px solid ${T.ink}`, paddingBottom:"2px" }}
                >GitHub ↗</a>

              </div>
            </div>

            {/* Spine */}
            <div style={{ background:T.rule, alignSelf:"stretch" }} />

            {/* Right — dot matrix skills grid */}
            <SkillsMatrix />
          </div>
        </div>
        <div style={{ margin:"60px 0 0", borderTop:`3px double ${T.rule}` }} />
      </section>

      {/* ══ PROJECTS ══════════════════════════════════════════════════════ */}
      <section id="work" style={{ scrollMarginTop:"100px" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"56px 52px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"44px" }}>
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:T.ink, letterSpacing:"-0.02em" }}>Projects</h2>
            </div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", color:T.muted, letterSpacing:"0.18em" }}>5 PIECES — 2023–2025</div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"2px" }}>
            {PROJECTS.map((p,i) => <ProjectCard key={p.id} project={p} reverse={i%2!==0} />)}
          </div>
        </div>
        <div style={{ borderTop:`3px double ${T.rule}` }} />
      </section>

      {/* ══ EXPERIENCE ════════════════════════════════════════════════════ */}
      <section id="experience" style={{ scrollMarginTop:"100px" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"56px 52px" }}>
          <div style={{ marginBottom:"44px" }}>
            <Eyebrow>Professional History</Eyebrow>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:T.ink, letterSpacing:"-0.02em" }}>Experience</h2>
          </div>
          <div>
            {EXPERIENCE.map((exp,i)=>(
              <div key={exp.org} style={{
                display:"grid", gridTemplateColumns:"200px 1px 1fr", gap:0,
                borderTop:`1px solid ${T.rule}`, paddingTop:"36px", paddingBottom:"36px",
                animation:`fadeUp 0.55s ease ${i*0.1}s both`,
              }}>
                <div style={{ paddingRight:"32px" }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", letterSpacing:"0.15em", color:exp.accent, textTransform:"uppercase", marginBottom:"8px" }}>{exp.period}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1rem", color:T.ink, marginBottom:"4px" }}>{exp.role}</div>
                  <div style={{ fontFamily:"'Lora',serif", fontStyle:"italic", fontSize:"0.82rem", color:T.muted }}>{exp.org}</div>
                </div>
                <div style={{ background:T.rule }} />
                <div style={{ paddingLeft:"36px" }}>
                  {exp.bullets.map((b,j)=>(
                    <div key={j} style={{ display:"flex", gap:"12px", marginBottom:j<exp.bullets.length-1?"13px":0 }}>
                      <span style={{ color:exp.accent, fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", marginTop:"3px", flexShrink:0 }}>—</span>
                      <p style={{ fontFamily:"'Lora',serif", fontSize:"0.84rem", color:T.ink2, lineHeight:1.72 }}>{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ height:"1px", background:T.rule }} />
          </div>
        </div>
        <div style={{ borderTop:`3px double ${T.rule}` }} />
      </section>

      {/* ══ RESEARCH ══════════════════════════════════════════════════════ */}
      <section id="research" style={{ scrollMarginTop:"100px" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"56px 52px" }}>
          <div style={{ marginBottom:"44px" }}>
            <Eyebrow>Academic Work</Eyebrow>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, color:T.ink, letterSpacing:"-0.02em" }}>Research</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1px 1fr", gap:0 }}>
            {/* Paper 1 */}
            <div style={{ paddingRight:"48px", animation:"fadeUp 0.5s ease 0s both" }}>
              <div style={{ background:T.sienna, color:T.white, fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", letterSpacing:"0.22em", padding:"4px 10px", display:"inline-block", marginBottom:"16px" }}>UNDER REVIEW</div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1.2rem", color:T.ink, lineHeight:1.35, marginBottom:"14px" }}>
                Quantifying Catastrophic Failures in Classical Dermatology Segmentation
              </h3>
              <p style={{ fontFamily:"'Lora',serif", fontSize:"0.83rem", color:T.ink2, lineHeight:1.75, marginBottom:"20px" }}>
                Introduced the <em>CF Rate</em> — a safety-oriented metric that surfaces hidden failure clusters in dermatology segmentation pipelines that average Dice scores systematically conceal. Benchmarked on PH² dataset. Wilcoxon p = 0.010, CF = 25%.
              </p>
              <div style={{ display:"flex", gap:"10px", marginBottom:"18px" }}>
                {["CF = 25%","p = 0.010","PH²"].map(t=>(
                  <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", color:T.sienna, border:`1px solid ${T.sienna}`, padding:"2px 8px", letterSpacing:"0.08em" }}>{t}</span>
                ))}
              </div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", color:T.muted, letterSpacing:"0.1em", marginBottom:"16px" }}>Biomedical Signal Processing and Control</div>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5900029" target="_blank" rel="noreferrer"
                style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:T.sienna, letterSpacing:"0.14em", borderBottom:`1px solid ${T.sienna}`, paddingBottom:"1px" }}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.6"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
              >READ PREPRINT (SSRN) →</a>
            </div>

            <div style={{ background:T.rule }} />

            {/* Paper 2 */}
            <div style={{ paddingLeft:"48px", animation:"fadeUp 0.5s ease 0.12s both" }}>
              <div style={{ background:T.sage, color:T.white, fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", letterSpacing:"0.22em", padding:"4px 10px", display:"inline-block", marginBottom:"16px" }}>LEAD RESEARCHER</div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1.2rem", color:T.ink, lineHeight:1.35, marginBottom:"14px" }}>
                UNet Robustness Across DRIVE, BUSI & PH²
              </h3>
              <p style={{ fontFamily:"'Lora',serif", fontSize:"0.83rem", color:T.ink2, lineHeight:1.75, marginBottom:"20px" }}>
                Comparative robustness analysis of UNet segmentation across three medical imaging modalities under five controlled noise stress-test regimes. Identified modality-specific collapse patterns and proposed mitigation strategies.
              </p>
              <div style={{ display:"flex", gap:"10px", marginBottom:"18px" }}>
                {["3 Datasets","5 Regimes","UNet"].map(t=>(
                  <span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", color:T.sage, border:`1px solid ${T.sage}`, padding:"2px 8px", letterSpacing:"0.08em" }}>{t}</span>
                ))}
              </div>
              <a href="https://zuhaakashif.github.io" target="_blank" rel="noreferrer"
                style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:T.sage, letterSpacing:"0.14em", borderBottom:`1px solid ${T.sage}`, paddingBottom:"1px" }}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.6"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
              >FULL RESEARCH PORTFOLIO →</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop:`3px double ${T.rule}` }} />
      </section>

      {/* ══ CONTACT ═══════════════════════════════════════════════════════ */}
      <section id="contact" style={{ scrollMarginTop:"100px" }}>
        <div style={{ maxWidth:"1160px", margin:"0 auto", padding:"56px 52px 80px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 2px 1fr", gap:0 }}>
            <div style={{ paddingRight:"60px" }}>
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, color:T.ink, letterSpacing:"-0.02em", marginBottom:"22px", lineHeight:1.1 }}>
                Let's make<br/>
                <em style={{ color:T.sienna }}>something great.</em>
              </h2>
              <p style={{ fontFamily:"'Lora',serif", fontSize:"0.9rem", color:T.ink2, lineHeight:1.82, marginBottom:"36px" }}>
                Open to ML engineer, software developer, and research roles. Also available for research collaborations and academic positions in medical imaging or AI reliability.
              </p>
              <a href="mailto:zuha.fatima317@gmail.com"
                style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:T.white, background:T.ink, padding:"13px 28px", display:"inline-block", transition:"background 0.25s" }}
                onMouseEnter={e=>e.currentTarget.style.background=T.sienna}
                onMouseLeave={e=>e.currentTarget.style.background=T.ink}
              >Send a Message</a>
            </div>
            <div style={{ background:T.rule }} />
            <div style={{ paddingLeft:"60px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
              {[
                { label:"Email",       val:"zuha.fatima317@gmail.com",       href:"mailto:zuha.fatima317@gmail.com" },
                { label:"GitHub",      val:"github.com/zuhaakashif",         href:"https://github.com/zuhaakashif" },
                { label:"Research",    val:"zuhaakashif.github.io",           href:"https://zuhaakashif.github.io" },
                
              ].map(item=>(
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("mailto")?undefined:"_blank"} rel="noreferrer"
                  className="contact-row"
                  style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", padding:"18px 0", borderBottom:`1px solid ${T.rule}`, transition:"padding-left 0.22s" }}
                >
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.57rem", color:T.muted, letterSpacing:"0.2em", textTransform:"uppercase" }}>{item.label}</span>
                  <span style={{ fontFamily:"'Lora',serif", fontSize:"0.85rem", color:T.ink }}>{item.val} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop:`1px solid ${T.rule}`, padding:"18px 52px", display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.56rem", color:T.muted, letterSpacing:"0.18em" }}>© 2026 ZUHA FATIMA — ALL RIGHTS RESERVED</span>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.56rem", color:T.muted, letterSpacing:"0.18em" }}>PORTFOLIO NO. 001 — ISLAMABAD, PK</span>
        </div>
      </section>
    </div>
  );
}