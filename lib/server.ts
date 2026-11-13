import { getChatGPTUser } from '@/app/chatgpt-auth';
export function json(data:unknown,status=200) { return Response.json(data,{status,headers:{'Cache-Control':'private, no-store'}}); }
export async function identity(request:Request,write=false) {
  if(write && request.headers.get('origin')!==new URL(request.url).origin) throw new Error('ORIGIN');
  const u=await getChatGPTUser();if(!u) throw new Error('AUTH');return u;
}
export async function body(request:Request) {const raw=await request.text();if(raw.length>80000) throw new Error('LARGE');return JSON.parse(raw);}
export function errorResponse(e:unknown) {
  const code=e instanceof Error?e.message:'';
  if(code==='AUTH') return json({error:'Sign in to save your private workspace.',signInPath:'/signin-with-chatgpt?return_to=%2F'},401);
  if(code==='ORIGIN') return json({error:'This request must come from your workspace.'},403);
  if(code==='LARGE') return json({error:'This input is too large. Use a shorter excerpt.'},413);
  return json({error:'The request could not be completed. Your local draft is unchanged.'},400);
}
