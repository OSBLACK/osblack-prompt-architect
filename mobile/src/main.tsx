import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { composePrompt, defaultProfile, emptyBrief, estimateTokens, languages, targets, type Brief, type Depth, type Profile, type SavedPrompt, type Target } from '@/lib/architect';
import './mobile.css';

const PROFILE_KEY='osblack-prompt-architect.mobile.profile.v1';
const SAVED_KEY='osblack-prompt-architect.mobile.saved.v1';
const DRAFT_KEY='osblack-prompt-architect.mobile.draft.v1';
const read=<T,>(key:string,fallback:T):T=>{try{return JSON.parse(localStorage.getItem(key)||'null')??fallback}catch{return fallback}};
const write=(key:string,value:unknown)=>localStorage.setItem(key,JSON.stringify(value));

function App(){
  const [brief,setBrief]=useState<Brief>(()=>read(DRAFT_KEY,emptyBrief));
  const [profile]=useState<Profile>(()=>read(PROFILE_KEY,defaultProfile));
  const [output,setOutput]=useState('');
  const [saved,setSaved]=useState<SavedPrompt[]>(()=>read(SAVED_KEY,[]));
  const [notice,setNotice]=useState('Offline-ready · device storage');
  useEffect(()=>{write(DRAFT_KEY,brief)},[brief]);
  const change=<K extends keyof Brief>(key:K,value:Brief[K])=>setBrief(v=>({...v,[key]:value}));
  const generate=()=>{if(!brief.goal.trim()){setNotice('Describe your goal first.');return}setOutput(composePrompt(brief,profile));setNotice('Built locally · zero model calls')};
  const save=()=>{if(!output)return;const item:SavedPrompt={id:crypto.randomUUID(),title:brief.goal.slice(0,80),target:brief.target,content:output,brief:JSON.stringify(brief),createdAt:Date.now()};const next=[item,...saved].slice(0,200);setSaved(next);write(SAVED_KEY,next);setNotice('Saved on this device')};
  const copy=async()=>{try{await navigator.clipboard.writeText(output);setNotice('Copied to clipboard')}catch{setNotice('Select the text and copy it manually')}};
  const exportData=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,profile,prompts:saved},null,2)],{type:'application/json'}));a.download='osblack-prompt-architect-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)};
  return <main>
    <header><div className="mark">OS</div><div><strong>OSBlack Prompt Architect</strong><small>by Owais Baat</small></div><span>{notice}</span></header>
    <section className="hero"><p>DESCRIBE · CRAFT · KEEP</p><h1>Clear intent.<br/><em>Better prompts.</em></h1><span>Create concise prompts without an internet connection. Your mobile data stays on this device unless you copy it elsewhere.</span></section>
    <div className="grid">
      <section className="glass compose"><h2>Build your prompt</h2><label>Target AI<select value={brief.target} onChange={e=>change('target',e.target.value as Target)}>{targets.map(t=><option key={t}>{t}</option>)}</select></label><label>Your goal<textarea value={brief.goal} onChange={e=>change('goal',e.target.value)} placeholder="Describe what you want to accomplish…" maxLength={12000}/></label><div className="row"><label>Language<select value={brief.language} onChange={e=>change('language',e.target.value)}>{languages.map(l=><option key={l}>{l}</option>)}</select></label><label>Detail<select value={brief.depth} onChange={e=>change('depth',e.target.value as Depth)}><option value="economy">Economy</option><option value="balanced">Balanced</option><option value="detailed">Detailed</option></select></label></div><label>Constraints<textarea className="small" value={brief.constraints} onChange={e=>change('constraints',e.target.value)} placeholder="Tone, format, limits, important facts…"/></label><button className="primary" onClick={generate}>Craft prompt</button></section>
      <section className="glass result"><div className="resultHead"><h2>Your prompt</h2><span>{output?`~${estimateTokens(output)} tokens`:'Ready when you are'}</span></div>{output?<textarea value={output} onChange={e=>setOutput(e.target.value)} aria-label="Generated prompt"/>:<div className="empty"><div className="orb">OS</div><p>Your concise, editable prompt will appear here.</p></div>}<div className="actions"><button onClick={copy} disabled={!output}>Copy</button><button onClick={save} disabled={!output}>Save</button><button onClick={exportData}>Backup</button></div></section>
    </div>
    {saved.length>0&&<section className="saved"><h2>Saved on this device</h2>{saved.slice(0,6).map(p=><button key={p.id} onClick={()=>{setOutput(p.content);setBrief(JSON.parse(p.brief));}}><strong>{p.title}</strong><span>{p.target}</span></button>)}</section>}
    <footer>OSBlack Prompt Architect · by Owais Baat · Local prompts are not independently fact-checked.</footer>
  </main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
