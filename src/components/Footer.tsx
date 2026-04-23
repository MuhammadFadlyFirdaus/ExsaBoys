import Link from "next/link";
import { Globe, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 mt-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-6 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-primary">ExsaBoys</div>
          <p className="text-xs text-slate-500 font-plus-jakarta tracking-tight">
            © 2026 ExsaBoys. Komunitas Kelas Kami.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="text-slate-500 text-xs font-plus-jakarta hover:text-blue-600 underline underline-offset-4 transition-all duration-300">
            Privacy Policy
          </Link>
          <Link href="#" className="text-slate-500 text-xs font-plus-jakarta hover:text-blue-600 underline underline-offset-4 transition-all duration-300">
            Terms of Service
          </Link>
          <Link href="#" className="text-slate-500 text-xs font-plus-jakarta hover:text-blue-600 underline underline-offset-4 transition-all duration-300">
            Contact
          </Link>
          <Link href="#" className="text-slate-500 text-xs font-plus-jakarta hover:text-blue-600 underline underline-offset-4 transition-all duration-300">
            FAQ
          </Link>
        </div>
        <div className="flex gap-4">
          <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-blue-600" />
          <Share2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-blue-600" />
          <Mail className="w-5 h-5 text-slate-400 cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </footer>
  );
}
