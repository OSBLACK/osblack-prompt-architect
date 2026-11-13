import { z } from 'zod';
import {targets,languages} from './architect';
export const briefSchema=z.object({goal:z.string().max(12000),target:z.enum(targets),depth:z.enum(['economy','balanced','detailed']),language:z.enum(languages as [string,...string[]]),audience:z.string().max(1000),format:z.string().max(1000),constraints:z.string().max(3000),context:z.string().max(18000),revision:z.string().max(3000),domain:z.enum(['auto','code','legal','research','image','writing'])});
export const profileSchema=z.object({language:z.enum(languages as [string,...string[]]),target:z.enum(targets),depth:z.enum(['economy','balanced','detailed']),instructions:z.string().max(4000),useMemory:z.boolean()});
export const promptSchema=z.object({id:z.string().uuid(),title:z.string().min(1).max(180),target:z.enum(targets),content:z.string().min(1).max(45000),brief:z.string().max(45000),createdAt:z.number().int().positive()});
