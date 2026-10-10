'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export function LegacyRedirect({ destination, label }: { destination: string; label: string }) {
  useEffect(() => { window.location.replace(destination); }, [destination]);
  return <section className="dark section"><meta httpEquiv="refresh" content={`0;url=${destination}`} /><div className="wrap"><p className="mono">Moved</p><h1 className="display">{label}</h1><p>This page moved to its canonical route.</p><Link className="btn btn-primary" href={destination}>Continue</Link></div></section>;
}
