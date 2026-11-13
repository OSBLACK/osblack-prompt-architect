import test from 'node:test';
import assert from 'node:assert/strict';
import {composePrompt,defaultProfile,emptyBrief,targets,checksFor,questionsFor} from '../lib/architect.ts';
test('preserves exact names, dates, money, non-Latin text and source material',()=>{
 const goal='Draft for [CLIENT], PKR 1,235,000 due 01-Jan-2025. سنڌي متن. Do not invent a payment.';
 const context='Receipt 17: PKR 50,000. Bank statement: payment not located.';
 const result=composePrompt({...emptyBrief,goal,context},defaultProfile);
 assert.ok(result.includes(goal));assert.ok(result.includes(context));assert.match(result,/not independently verified/);
});
test('memory can be paused and current instructions explicitly take priority',()=>{
 const brief={...emptyBrief,goal:'Write a friendly welcome message.'};
 assert.doesNotMatch(composePrompt(brief,{...defaultProfile,useMemory:false,instructions:'PRIVATE_RULE'}),/PRIVATE_RULE/);
 assert.match(composePrompt(brief,{...defaultProfile,instructions:'PRIVATE_RULE'}),/current task takes priority/);
});
test('source-only legal prompts do not direct NotebookLM to browse',()=>{
 const result=composePrompt({...emptyBrief,target:'NotebookLM',goal:'Analyze this court judgment.'},defaultProfile);
 assert.match(result,/only supplied sources/i);assert.match(result,/do not assume they are current/);assert.doesNotMatch(result,/Verify statutes and judgments against primary sources/);
});
test('all targets produce a usable prompt without network requests',()=>{
 for(const target of targets){const result=composePrompt({...emptyBrief,target,goal:'Create a clear explanation of [TOPIC].'},defaultProfile);assert.ok(result.length>100);assert.ok(result.includes('[TOPIC]'));}
});
test('empty goals never generate and optional completeness is not fabricated',()=>{
 assert.equal(composePrompt(emptyBrief,defaultProfile),'');assert.equal(checksFor(emptyBrief).filter(x=>x.ok).length,1);
 assert.equal(questionsFor({...emptyBrief,goal:'Build an application'}).length,3);
});
test('economy does not truncate a long user requirement',()=>{
 const goal='Required facts: '+Array.from({length:900},(_,i)=>`ITEM_${i}`).join(' ');
 assert.ok(composePrompt({...emptyBrief,goal},defaultProfile).includes('ITEM_899'));
});
