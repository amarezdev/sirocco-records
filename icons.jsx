/* Icônes — équivalents inline de lucide-react (mêmes tracés, licence ISC).
   Exposés sur window.LIcons pour le composant principal. */
const Ico = ({ size = 18, fill = "none", children, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {children}
  </svg>
);

const Menu = (p) => <Ico {...p}><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></Ico>;
const X = (p) => <Ico {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Ico>;
const ArrowRight = (p) => <Ico {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Ico>;
const ArrowLeft = (p) => <Ico {...p}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></Ico>;
const ArrowUpRight = (p) => <Ico {...p}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></Ico>;
const Plus = (p) => <Ico {...p}><path d="M5 12h14"/><path d="M12 5v14"/></Ico>;
const Check = (p) => <Ico {...p}><path d="M20 6 9 17l-5-5"/></Ico>;
const Send = (p) => <Ico {...p}><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></Ico>;
const Play = (p) => <Ico {...p}><polygon points="6 3 20 12 6 21 6 3"/></Ico>;
const Instagram = (p) => <Ico {...p}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></Ico>;
const Youtube = (p) => <Ico {...p}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></Ico>;
const Facebook = (p) => <Ico {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></Ico>;
const Mail = (p) => <Ico {...p}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Ico>;
const MapPin = (p) => <Ico {...p}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></Ico>;
const Phone = (p) => <Ico {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Ico>;
const Mic = (p) => <Ico {...p}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></Ico>;
const Headphones = (p) => <Ico {...p}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></Ico>;
const SlidersHorizontal = (p) => <Ico {...p}><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></Ico>;
const Camera = (p) => <Ico {...p}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></Ico>;
const Music2 = (p) => <Ico {...p}><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></Ico>;
const Guitar = (p) => <Ico {...p}><path d="M11.9 12.1 19.8 4.2"/><path d="M11.6 13.4a3 3 0 1 0-4.2 4.2 3 3 0 0 0 4.2-4.2"/><path d="m6.4 18.2-2.9 2.9a1 1 0 0 1-1.4-1.4l2.9-2.9"/><circle cx="9.5" cy="15.5" r="1"/><path d="M18 2.5 21.5 6 19 8.5 15.5 5z"/></Ico>;
const Disc3 = (p) => <Ico {...p}><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/></Ico>;
const Users = (p) => <Ico {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Ico>;
const Calendar = (p) => <Ico {...p}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></Ico>;

window.LIcons = {
  Menu, X, ArrowUpRight, ArrowRight, ArrowLeft, Plus, Check, Send, Play,
  Instagram, Youtube, Facebook, Mail, MapPin, Phone, Mic,
  Headphones, SlidersHorizontal, Camera, Music2, Guitar, Disc3, Users, Calendar,
};
