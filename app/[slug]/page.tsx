import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetail } from '../components/Content';
import { allServices, serviceBySlug } from '../data';

export function generateStaticParams(){ return allServices.filter(service=>service.slug!=='pool-demolition').map(service=>({slug:service.slug})); }
export function generateMetadata({params}:{params:{slug:string}}): Metadata { const service=serviceBySlug[params.slug]; return service?{title:service.title,description:service.intro}:{}; }
export default function ServicePage({params}:{params:{slug:string}}){const service=serviceBySlug[params.slug];if(!service) notFound();return <ServiceDetail service={service}/>;}
