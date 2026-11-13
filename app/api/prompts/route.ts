import {and,eq} from 'drizzle-orm';import {getDb} from '@/db';import {prompts} from '@/db/schema';
import {promptSchema} from '@/lib/validation';import {json,identity,body,errorResponse} from '@/lib/server';
export const dynamic='force-dynamic';
export async function POST(request:Request){try{
 const u=await identity(request,true);const p=promptSchema.parse(await body(request));
 await getDb().insert(prompts).values({...p,userId:u.userId}).onConflictDoUpdate({target:[prompts.userId,prompts.id],set:{title:p.title,target:p.target,content:p.content,brief:p.brief}});return json({saved:true});
}catch(e){return errorResponse(e);}}
export async function DELETE(request:Request){try{
 const u=await identity(request,true);const {id}=await body(request);if(typeof id!=='string'||id.length>50)return json({error:'Invalid prompt.'},400);
 await getDb().delete(prompts).where(and(eq(prompts.userId,u.userId),eq(prompts.id,id)));return json({deleted:true});
}catch(e){return errorResponse(e);}}
