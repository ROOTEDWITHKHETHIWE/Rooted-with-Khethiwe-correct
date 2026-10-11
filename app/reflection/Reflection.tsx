'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { areas, assess, questions } from './model';
import { downloadReflection, type PdfBlock } from './pdf';
import styles from './reflection.module.css';

export default function Reflection() {
  const [step,setStep]=useState(-1);
  const [answers,setAnswers]=useState<string[][]>(()=>questions.map(()=>[]));
  const [example,setExample]=useState(''); const [nextStep,setNextStep]=useState('');
  const [error,setError]=useState('');const [downloading,setDownloading]=useState(false);
  const heading=useRef<HTMLHeadingElement>(null);
  const result=assess(answers);
  const move=(to:number)=>{setError('');setStep(to);setTimeout(()=>{heading.current?.focus();heading.current?.scrollIntoView({block:'start',behavior:'smooth'});},0);};
  const toggle=(id:string)=>{
    const current=answers[step];let selected:string[];
    if(id==='unsure') selected=current.includes(id)?[]:[id];
    else if(current.includes(id))selected=current.filter(x=>x!==id);
    else {const prior=current.filter(x=>x!=='unsure');if(prior.length===3){setError('Choose up to three answers. Deselect one to choose another.');return;}selected=[...prior,id];}
    setError('');setAnswers(answers.map((a,i)=>i===step?selected:a));
  };
  const blocks:PdfBlock[]=[
    {heading:'What Is in Your Hands?',text:'A gifts, skills and stewardship reflection\n'+new Date().toLocaleDateString('en-ZA')+'\nYour answers are a starting point for reflection. They do not determine your calling or define your potential. These areas can overlap and change as you learn and gain experience.'},
    {heading:'Strengths you have practised',text:result.practised.length?'These areas appeared across more than one experience-based answer. Use your own examples and feedback to explore them further.':'Your answers have not yet shown repeated experience in these areas. There is room to discover through small opportunities, practice, and feedback.'},
    ...result.practised.map(a=>({heading:a.title,text:a.description+'\nSkills to nurture: '+a.skills+'\nA practical step: '+a.action})),
    ...(result.emerging.length?[{heading:'Early clues to explore',text:result.emerging.map(a=>a.title).join('; ')+'. These appeared once in your experience answers. Look for a concrete example and feedback before drawing a conclusion.'}]:[]),
    {heading:'Interests and skills to nurture',text:result.interests.length?'These are areas you would like to explore. Interest is an invitation to practise; it is not evidence of current proficiency.':'You have not selected an area of interest yet. Try a small task alongside someone you trust and notice what you learn.'},
    ...result.interests.map(a=>({heading:a.title,text:'Skills to explore: '+a.skills+'\nTry this: '+a.action})),
    {heading:'My experience',text:example.trim()||'Reflect: When have I helped someone or met a need? What did I actually do, and what difference did it make?'},
    {heading:'My next step',text:nextStep.trim()||'Choose one small opportunity to practise this week. Name what you will do, when you will do it, and who can offer honest feedback.'},
    {heading:'Reflect, pray, and respond',text:'What have I overlooked because it feels ordinary to me?\nWhat resources and responsibilities are already in my hands?\nWho can help me recognise both strengths and areas for growth?\nWhat is a wise next step for my present season?\n\nPrayer: Lord, help me recognise what You have entrusted to me. Teach me to nurture it faithfully, serve others humbly, and grow through practice and wise counsel. Amen.\n\nScripture to read: 1 Peter 4:10; Romans 12:4-8; Matthew 25:14-30.\nRooted with Khethiwe'},
  ];
  const download=async()=>{setError('');setDownloading(true);try{await downloadReflection(blocks);}catch{setError('The PDF could not be downloaded. Please try again, or try another browser.');}finally{setDownloading(false);}};
  return <main className={styles.page}>
    <header className={styles.header}><Link href='/' className={styles.brand}>❧ ROOTED WITH KHETHIWE</Link><nav aria-label='Reflection navigation'><Link href='/'>Home</Link><Link href='/courses'>Courses</Link></nav></header>
    <div className={styles.container}>
      <p className={styles.eyebrow}>RECOGNISE · NURTURE · STEWARD</p>
      {step===-1?<section className={styles.intro}>
        <h1 ref={heading} tabIndex={-1}>What Is in<br/><em>Your Hands?</em></h1>
        <p className={styles.lead}>You may carry more than you have recognised.</p>
        <p>Take a moment to notice the ways you help, the skills you have practised, and the interests you could nurture. Let your everyday experiences help you recognise what you can put to use.</p>
        <div className={styles.note}><strong>A reflection with room to grow.</strong><p>There are no right answers or fixed types. This exercise offers clues to explore through prayer, practice, and feedback. It does not identify your spiritual calling.</p></div>
        <p>12 questions · About 5 minutes · Free personalised PDF</p>
        <button className={styles.primary} onClick={()=>move(0)}>Begin my reflection →</button>
        <p className={styles.small}>No email or sign-in needed. This reflection does not send your answers to our server. Keep this page open until you download your copy.</p>
      </section>:step<questions.length?<section className={styles.card}>
        <div className={styles.progressLabel}><span>Question {step+1} of {questions.length}</span><span>{questions[step].kind==='experience'?'Looking at your experience':'Exploring your interests'}</span></div>
        <progress max={questions.length} value={step+1} aria-label='Reflection progress'/>
        <fieldset><legend><h1 ref={heading} tabIndex={-1} className={styles.question}>{questions[step].prompt}</h1></legend>
          <p>Select up to three that reflect your life. Choose “I’m still discovering this” if you haven’t had the opportunity or are unsure.</p>
          <div className={styles.options}>{[...questions[step].options,'I’m still discovering this'].map((label,i)=>{const id=areas[i]?.id??'unsure';return <label key={id} className={answers[step].includes(id)?styles.selected:styles.option}><input type='checkbox' checked={answers[step].includes(id)} onChange={()=>toggle(id)}/><span>{label}</span></label>;})}</div>
        </fieldset>
        <p role='alert' className={styles.error}>{error}</p>
        <div className={styles.actions}><button className={styles.secondary} onClick={()=>move(step-1)}>← Back</button><button className={styles.primary} onClick={()=>{if(!answers[step].length){setError('Choose an answer, including “I’m still discovering this” if you are unsure.');return;}move(step+1);}}>Continue →</button></div>
      </section>:step===questions.length?<section className={styles.card}>
        <h1 ref={heading} tabIndex={-1} className={styles.question}>Give your reflection a real-life example.</h1><p>These optional notes will appear in your PDF. You can also leave them blank and use the prompts later.</p>
        <label className={styles.textLabel} htmlFor='experience'>When have you helped someone or met a need? What did you do, and what difference did it make?</label><textarea id='experience' maxLength={2000} value={example} onChange={e=>setExample(e.target.value)} rows={5}/>
        <label className={styles.textLabel} htmlFor='next-step'>What is one small step you could take this week to practise or develop a skill?</label><textarea id='next-step' maxLength={1000} value={nextStep} onChange={e=>setNextStep(e.target.value)} rows={3}/>
        <div className={styles.actions}><button className={styles.secondary} onClick={()=>move(step-1)}>← Back</button><button className={styles.primary} onClick={()=>move(step+1)}>See my reflection →</button></div>
      </section>:<section>
        <h1 ref={heading} tabIndex={-1}>Your stewardship<br/><em>reflection.</em></h1><p className={styles.lead}>Notice the patterns. Make room for growth. Take one faithful step.</p>
        <div className={styles.note}>These are clues from your own answers, with room for several strengths and new discoveries. A quieter area may reflect limited opportunity rather than limited ability.</div>
        <div className={styles.actions}><button className={styles.primary} disabled={downloading} onClick={download}>{downloading?'Preparing your PDF…':'Download my reflection ↓'}</button><button className={styles.secondary} onClick={()=>move(0)}>Review my answers</button></div>
        <p role='alert' className={styles.error}>{error}</p>
        <h2>Strengths you have practised</h2><p>These appeared across more than one experience-based answer.</p>
        {result.practised.length?<div className={styles.grid}>{result.practised.map(a=><article key={a.id} className={styles.resultCard}><h3>{a.title}</h3><p>{a.description}</p><p><strong>Skills to nurture:</strong> {a.skills}</p><p><strong>Try this:</strong> {a.action}</p></article>)}</div>:<div className={styles.note}>Your answers have not yet shown repeated experience in these areas. Start with a small opportunity and ask someone you trust for feedback.</div>}
        {!!result.emerging.length&&<div className={styles.note}><strong>Early clues:</strong> {result.emerging.map(a=>a.title).join('; ')}. These appeared once. Look for a concrete example and feedback as you explore.</div>}
        <h2>Interests and skills to nurture</h2><p>These reflect what you would like to explore. Interest gives you a place to begin practising.</p>
        {result.interests.length?<div className={styles.grid}>{result.interests.map(a=><article key={a.id} className={styles.resultCard}><h3>{a.title}</h3><p>{a.skills}</p><p><strong>A small beginning:</strong> {a.action}</p></article>)}</div>:<div className={styles.note}>You have not selected an area of interest yet. Try a small task alongside someone you trust and notice what you learn.</div>}
        <div className={styles.card}><h2>My experience</h2><p className={styles.personal}>{example.trim()||'When have I helped someone or met a need? What did I do, and what difference did it make?'}</p><h2>My next step</h2><p className={styles.personal}>{nextStep.trim()||'Choose one small opportunity this week. Decide when you will practise and who can offer feedback.'}</p><p>Read and reflect: 1 Peter 4:10 · Romans 12:4–8 · Matthew 25:14–30</p><button className={styles.secondary} onClick={()=>move(questions.length)}>Edit my notes</button></div>
        <p className={styles.small}>Your PDF includes these results, your notes, further reflection prompts, and a prayer.</p>
      </section>}
    </div><div className={styles.footer}>Rooted with Khethiwe · Faithful with what is in your hands.</div>
  </main>;
}
