// A browser-only PDF export. JPEG pages preserve Unicode text without an external font service.
export function jpegPagesToPdf(pages: Uint8Array[], width: number, height: number): Uint8Array {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = []; let size = 0;
  const offsets: number[] = [0];
  const add = (value: string | Uint8Array) => { const b = typeof value === 'string' ? enc.encode(value) : value; parts.push(b); size += b.length; };
  const object = (id: number, value: string) => { offsets[id] = size; add(`${id} 0 obj\n${value}\nendobj\n`); };
  add('%PDF-1.4\n');
  object(1,'<< /Type /Catalog /Pages 2 0 R >>');
  object(2,`<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_,i)=>`${3+i*3} 0 R`).join(' ')}] >>`);
  pages.forEach((jpeg,i) => {
    const id = 3+i*3;
    object(id,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im${i} ${id+2} 0 R >> >> /Contents ${id+1} 0 R >>`);
    const stream = `q\n595.28 0 0 841.89 0 0 cm\n/Im${i} Do\nQ\n`;
    object(id+1,`<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}endstream`);
    offsets[id+2] = size;
    add(`${id+2} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`);
    add(jpeg); add('\nendstream\nendobj\n');
  });
  const xref = size;
  add(`xref\n0 ${offsets.length}\n0000000000 65535 f \n`);
  offsets.slice(1).forEach(o=>add(`${String(o).padStart(10,'0')} 00000 n \n`));
  add(`trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  const out = new Uint8Array(size); let position = 0;
  parts.forEach(p=>{out.set(p,position); position+=p.length;}); return out;
}
export type PdfBlock = { heading: string; text: string };
export async function downloadReflection(blocks: PdfBlock[]) {
  await document.fonts.ready;
  const canvas = document.createElement('canvas'); canvas.width=1240; canvas.height=1754;
  const ctx = canvas.getContext('2d'); if(!ctx) throw new Error('Your browser could not prepare the PDF. Please try again.');
  const pages: Uint8Array[] = []; let y=0;
  const startPage = () => {
    ctx.fillStyle='#fbfcfe'; ctx.fillRect(0,0,1240,1754);
    ctx.fillStyle='#315a82'; ctx.fillRect(0,0,1240,12);
    ctx.font='22px Arial'; ctx.fillText('ROOTED WITH KHETHIWE · MY STEWARDSHIP REFLECTION',90,75);
    ctx.strokeStyle='#b9cbdc'; ctx.beginPath();ctx.moveTo(90,100);ctx.lineTo(1150,100);ctx.stroke(); y=160;
  };
  const finishPage = () => {
    ctx.fillStyle='#315a82';ctx.font='20px Arial';ctx.fillText(`What Is in Your Hands? · ${pages.length+1}`,90,1690);
    const raw=atob(canvas.toDataURL('image/jpeg',0.94).split(',')[1]);
    pages.push(Uint8Array.from(raw,c=>c.charCodeAt(0)));
  };
  const room = (h:number) => {if(y+h>1620){finishPage();startPage();}};
  const lines = (text:string) => {
    const out:string[]=[];
    for(const paragraph of text.split('\n')) {
      let line='';
      for(const word of paragraph.split(/\s+/)) {
        if(ctx.measureText(line+(line?' ':'')+word).width <=1060) {line+=(line?' ':'')+word;continue;}
        if(line){out.push(line);line='';}
        for(const char of word){if(ctx.measureText(line+char).width>1060){out.push(line);line='';}line+=char;}
      }
      out.push(line);
    } return out;
  };
  startPage();
  for(const block of blocks){
    ctx.font='bold 34px Georgia';const titleLines=lines(block.heading);room(titleLines.length*44+90);
    ctx.fillStyle='#24496d';ctx.font='bold 34px Georgia';
    titleLines.forEach(line=>{ctx.fillText(line,90,y);y+=44;});y+=12;
    ctx.font='27px Arial';const bodyLines=lines(block.text);
    bodyLines.forEach(line=>{room(40);ctx.font='27px Arial';ctx.fillStyle='#354b60';ctx.fillText(line,90,y);y+=40;});y+=35;
  }
  finishPage();
  const bytes=jpegPagesToPdf(pages,canvas.width,canvas.height);
  const blob=new Blob([new Uint8Array(bytes).buffer],{type:'application/pdf'});
  const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='My-Rooted-Stewardship-Reflection.pdf';
  document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
}
