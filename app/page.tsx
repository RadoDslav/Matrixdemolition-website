import Link from 'next/link';
import { QuoteSection, SectionHeading, ImageTile } from './components/Content';

const services = [
  ['Pool demolition', 'concrete.webp', '/pool-demolition/', 'In-ground concrete, vinyl, and fiberglass pools.'],
  ['Demolition', 'slab.webp', '/demolition-services/', 'Residential and commercial structures prepared for what comes next.'],
  ['Disaster recovery', 'apartments.webp', '/disaster-recovery/', 'Demolition and cleanup for damaged structures and properties.'],
  ['Ponds and lakes', 'aerial-ranch.webp', '/ponds-lakes/', 'Private lakes, retention ponds, and property water features.'],
  ['Land clearing', 'hauler-brush.webp', '/construction-site-development/', 'Clearing, earthwork, grading, and site preparation.'],
  ['Pads and roads', 'grader-gps.webp', '/road-construction/', 'Road construction, grading, and heavy civil earthwork.'],
] as const;

const gallery = [
  ['willow-park.webp', 'Demolition scope'], ['apartments.webp', 'Demolition scope'], ['mass-grading.webp', 'Site development'], ['aerial-tank.webp', 'Water and land'], ['hauler-sand.webp', 'Earthwork'],
] as const;

export default function Home() {
  return <>
    <section className="dark home-hero">
      <img className="hero-poster" src="/assets/hero-poster.webp" alt="Heavy equipment working on a demolition and excavation site" />
      <div className="hero-scrim" />
      <div className="wrap hero-content">
        <p className="mono hero-kicker">Demolition · Excavation · Site development</p>
        <h1 className="display">From golf courses<br />to <span>backyard pools.</span></h1>
        <div className="hero-bottom"><p>Demolition and excavation services from a family-owned crew with more than 30 years of experience.</p><div className="hero-actions"><Link className="btn btn-primary" href="/contact-us/#quote">Get a free quote</Link><a className="btn btn-outline" href="tel:8175978490">Call 817-597-8490</a></div></div>
      </div>
      <div className="hero-doors"><Link href="/our-services/"><span className="mono">I own a home or land</span><strong className="display">Pools · houses · land</strong><span aria-hidden="true">↗</span></Link><Link href="/builders/"><span className="mono">I build, develop, or GC</span><strong className="display">Sitework · commercial demo</strong><span aria-hidden="true">↗</span></Link><Link className="door-quote" href="/contact-us/#quote"><span className="mono">Start with the scope</span><strong>Get a free quote →</strong></Link></div>
    </section>
    <section className="section"><div className="wrap"><div className="proof-grid"><div><strong>Since 1989</strong><span>Family-owned business</span></div><div><strong>30+ years</strong><span>Demolition and excavation experience</span></div><div><strong>DFW</strong><span>Residential and commercial work</span></div></div></div></section>
    <section id="services" className="section services-section"><div className="wrap"><SectionHeading eyebrow="Homes and land" title="What needs to go?" /><div className="media-grid services-media">{services.map(([title,image,href,copy])=><ImageTile key={href} title={title} image={image} href={href} copy={copy} />)}</div></div></section>
    <section className="dark image-story"><img src="/assets/dozer.webp" alt="Dozer shaping earth on a work site" /><div className="story-scrim" /><div className="wrap story-content"><p className="mono">For builders, developers, and GCs</p><h2 className="display">Before the<br /><span>first phase.</span></h2><p>Site development, excavation, demolition, road construction, ponds and lakes, golf-course excavation, and soil remediation for the next stage of a project.</p><Link className="btn btn-primary" href="/builders/">Builders &amp; GCs start here</Link></div></section>
    <section id="projects" className="section"><div className="wrap"><div className="section-row"><SectionHeading eyebrow="Work gallery" title="Scope, in the field." /><Link className="btn btn-dark" href="/our-work/">See our work</Link></div><div className="media-grid gallery-grid">{gallery.map(([image,label], index)=><ImageTile key={image} image={image} title={label} wide={index===0} href="/our-work/" copy="View asset gallery" />)}</div></div></section>
    <section className="dark section"><div className="wrap"><SectionHeading light eyebrow="How work moves" title="A clear sequence." /><div className="process-grid home-process">{['Consultation and assessment','Permitting and preparation','Work and removal','Cleanup and restoration'].map((step,index)=><div key={step}><span className="display">0{index+1}</span><h3>{step}</h3></div>)}</div></div></section>
    <section className="red section"><div className="wrap action-band"><div><p className="mono">A direct path through difficult work</p><h2 className="display">Tell us what comes next.</h2><p>Share the property, scope, and timeline you can confirm today.</p></div><Link className="btn btn-dark" href="/contact-us/#quote">Get a free quote</Link></div></section>
    <QuoteSection />
  </>;
}
