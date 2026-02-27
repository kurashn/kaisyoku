import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Ban } from 'lucide-react';

interface ArticleCardProps {
 title: string;
 excerpt: string;
 slug: string;
 category: string;
 imageUrl: string;
 location?: string;
 features?: string[];
 author?: {
 name: string;
 avatarUrl?: string;
 };
}

export function ArticleCard({ title, excerpt, slug, category, imageUrl, location, features, author }: ArticleCardProps) {
 return (
 <Link href={`/articles/${slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5">
 <div className="relative aspect-video w-full overflow-hidden bg-navy-100">
 <Image
 src={imageUrl}
 alt={title}
 fill
 className="object-cover transition-transform duration-300 group-hover:scale-105"
 />
 </div>

 <div className="flex flex-1 flex-col p-5">
 <div className="mb-3 flex flex-wrap gap-2 text-[10px] font-bold tracking-wider text-navy-400">
 <span className="uppercase text-main">{category}</span>
 {location && (
 <>
 <span>/</span>
 <span>{location}</span>
 </>
 )}
 </div>

 <h3 className="mb-3 font-serif text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-main">
 {title}
 </h3>

 <p className="mb-4 text-xs leading-relaxed text-navy-500 line-clamp-2">
 {excerpt}
 </p>

 <div className="mt-auto border-t border-navy-50 pt-3">
 {features && features.length > 0 && (
 <div className="flex flex-wrap gap-2 text-[10px] text-navy-600">
 {features.slice(0, 3).map((feature, index) => (
 <span key={index} className="flex items-center gap-1">
 <span className="h-1 w-1 rounded-full bg-main/40"></span>
 {feature}
 </span>
 ))}
 </div>
 )}
 </div>

 {/* Author Info */}
 {author && (
 <div className="mt-4 flex items-center gap-2 border-t border-navy-50 pt-3">
 <div className="relative h-6 w-6 overflow-hidden rounded-full bg-navy-100">
 {author.avatarUrl ? (
 <Image src={author.avatarUrl} alt={author.name} fill className="object-cover"/>
 ) : (
 <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-navy-500">
 {author.name.charAt(0)}
 </div>
 )}
 </div>
 <span className="text-xs font-medium text-navy-600">
 {author.name}
 </span>
 </div>
 )}
 </div>
 </Link>
 );
}
