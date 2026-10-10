'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../data';

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="dark" style={{borderBottom:'1px solid var(--rule)'}}>
    <div className="wrap" style={{minHeight:76,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24}}>
      <Link href="/" aria-label="Matrix Demolition home" className="display" style={{fontSize:'1.45rem',letterSpacing:'.03em',whiteSpace:'nowrap'}}>Matrix<span style={{color:'var(--red-bright)',colorScheme:'dark'}}>.</span></Link>
      <nav aria-label="Primary navigation" className="desktop-nav" style={{display:'flex',alignItems:'center',gap:24}}>{navLinks.map(([label,href])=><Link key={href} href={href} style={{fontSize:'.88rem'}}>{label}</Link>)}<a href="tel:8175978490" style={{fontWeight:700}}>817-597-8490</a><Link className="btn btn-primary" href="/contact-us/#quote">Get a free quote</Link></nav>
      <div className="mobile-head-actions"><a href="tel:8175978490" aria-label="Call Matrix Demolition">Call</a><button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></div>
    </div>
    {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-menu wrap"><Link href="/" onClick={()=>setOpen(false)}>Home</Link>{navLinks.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="btn btn-primary" href="/contact-us/#quote" onClick={()=>setOpen(false)}>Get a free quote</Link></nav>}
    <style jsx>{`.desktop-nav{display:flex}.mobile-head-actions,.mobile-menu{display:none}@media(max-width:900px){.desktop-nav{display:none}.mobile-head-actions{display:flex;align-items:center;gap:16px;font-size:.84rem}.mobile-head-actions button{border:1px solid var(--muted);background:none;color:inherit;padding:.7rem 1rem;border-radius:4px}.mobile-menu{display:grid;gap:0;padding-bottom:16px}.mobile-menu a{padding:14px 0;border-top:1px solid var(--rule)}.mobile-menu .btn{margin-top:12px;border:0;text-align:center}}`}</style>
  </header>;
}

export function Footer() { return <footer className="dark section" style={{paddingBottom:'7rem'}}><div className="wrap" style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr',gap:48}}><div><p className="display" style={{fontSize:'2rem',marginTop:0}}>Matrix Demolition LLC</p><p style={{maxWidth:360,color:'var(--muted)'}}>Family-owned demolition, excavation, and site development services since 1989.</p><a className="btn btn-primary" href="tel:8175978490">817-597-8490</a></div><div><p className="mono">Explore</p>{navLinks.map(([label,href])=><Link key={href} href={href} style={{display:'block',padding:'.4rem 0',color:'var(--muted)'}}>{label}</Link>)}</div><div><p className="mono">Services</p>{['Demolition','Excavation','Site development','Ponds and lakes','Road construction'].map(label=><p key={label} style={{margin:'.4rem 0',color:'var(--muted)'}}>{label}</p>)}</div></div><div className="wrap" style={{borderTop:'1px solid var(--rule)',marginTop:64,paddingTop:24,color:'var(--muted)',fontSize:'.8rem'}}>© 2026 Matrix Demolition LLC</div><style jsx>{`@media(max-width:700px){footer .wrap:first-child{grid-template-columns:1fr;gap:24px}}`}</style></footer>; }

export function MobileActionBar() { return <div className="mobile-actions"><a href="tel:8175978490">Call now</a><Link href="/contact-us/#quote">Get a free quote</Link><style jsx>{`.mobile-actions{display:none}@media(max-width:767px){.mobile-actions{position:fixed;z-index:20;bottom:0;left:0;right:0;display:grid;grid-template-columns:1fr 1fr;background:var(--ink);padding-bottom:env(safe-area-inset-bottom);box-shadow:0 -2px 12px #0005}.mobile-actions a{min-height:56px;display:grid;place-items:center;color:var(--bone);font-weight:700;border-right:1px solid var(--rule)}.mobile-actions a:last-child{background:var(--red);border:0}}`}</style></div>; }
