import Link from "next/link";
import { members, posts } from "@/data/members";
import { Users, Zap, Heart, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "ExsaBoys - Komunitas Kelas Kami",
  description:
    "ExsaBoys adalah komunitas pelajar yang bersemangat di bidang teknologi, kreativitas, dan kolaborasi.",
};

export default function HomePage() {
  const featuredMembers = members.slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
          <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Komunitas ExsaBoys 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Selamat Datang di{" "}
            <span className="text-secondary-container">ExsaBoys</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Komunitas yang dibuat dengan mantap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-secondary-container hover:text-primary transition-all duration-200 active:scale-95"
            >
              Kenali Anggota Kami <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/25 transition-all duration-200 backdrop-blur-sm active:scale-95"
            >
              Tentang Komunitas
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: <Users className="w-6 h-6" />, value: `${members.length}`, label: "Anggota Aktif" },
            { icon: <Zap className="w-6 h-6" />, value: "1", label: "Proyek Bersama" },
            { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Solid & Kompak" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-sm text-on-surface-variant font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Members */}
      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="flex items-center justify-between mb-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Anggota Kami</h2>
            <p className="text-on-surface-variant">Kenali anggota ExsaBoys</p>
          </div>
          <Link
            href="/members"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
          >
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMembers.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="group bg-white rounded-2xl p-6 member-card-shadow border border-slate-100 flex flex-col items-center text-center hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-surface-container">
                  <Image
                    src={member.avatar}
                    alt={`Avatar ${member.name}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <h3 className="font-bold text-on-surface text-base mb-1">{member.name}</h3>
              <span className="text-xs font-semibold text-secondary bg-secondary-container/30 px-3 py-1 rounded-full mb-3">
                {member.role}
              </span>
              <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-4">{member.bio}</p>
              <span className="text-xs font-semibold text-primary group-hover:underline">Lihat Profil →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/members" className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all">
            Lihat Semua Anggota <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Posts Section */}
      <section className="bg-surface-container-low border-t border-slate-200 py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-lg">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Postingan Komunitas</h2>
            <p className="text-on-surface-variant">Berita dan cerita terbaru dari ExsaBoys</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-6 member-card-shadow border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{post.emoji}</div>
                <span className="text-xs font-bold text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <h3 className="text-lg font-bold text-on-surface mt-3 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{post.content}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <Calendar className="w-4 h-4 text-outline" />
                  <span className="text-xs text-outline">{post.date}</span>
                  <span className="text-xs text-outline mx-1">·</span>
                  <span className="text-xs font-semibold text-on-surface-variant">{post.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-xl text-center">
        <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black mb-4">ExsaBoys</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              
            </p>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-secondary-container transition-all duration-200 active:scale-95"
            >
              Lihat Semua Anggota <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
