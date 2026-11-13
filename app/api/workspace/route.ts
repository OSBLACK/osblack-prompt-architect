import {env} from 'cloudflare:workers';import {eq} from 'drizzle-orm';
import {getDb} from '@/db';import {workspaces,prompts} from '@/db/schema';
import {defaultProfile} from '@/lib/architect';import {profileSchema,briefSchema} from '@/lib/validation';
import {json,identity,body,errorResponse} from '@/lib/server';
export const dynamic='force-dynamic';
export async function GET(request:Request) {try {
  const u=await identity(request);const db=getDb();
  const [w]=await db.select().from(workspaces).where(eq(workspaces.userId,u.userId));
  const saved=await db.select().from(prompts).where(eq(prompts.userId,u.userId)).limit(500);
  const e=env as unknown as Record<string,string>;
  return json({profile:w?{...defaultProfile,...JSON.parse(w.profile)}:defaultProfile,draft:w?JSON.parse(w.draft):null,prompts:saved.sort((a,b)=>b.createdAt-a.createdAt),aiReady:!!e.OPENAI_API_KEY&&!!e.OPENAI_MODEL,displayName:u.displayName});
}catch(e){return errorResponse(e);}}
export async function POST(request:Request) {try {
  const u=await identity(request,true);const input=await body(request);const db=getDb();const kind=input.kind;
  if(kind!=='profile'&&kind!=='draft')return json({error:'Unknown save operation.'},400);
  const data=kind==='profile'?profileSchema.parse(input.value):briefSchema.parse(input.value);const now=Date.now();
  await db.insert(workspaces).values({userId:u.userId,[kind]:JSON.stringify(data),updatedAt:now}).onConflictDoUpdate({target:workspaces.userId,set:{[kind]:JSON.stringify(data),updatedAt:now}});
  return json({saved:true,updatedAt:now});
}catch(e){return errorResponse(e);}}
