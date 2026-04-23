import Link from "next/link";
import { members } from "@/data/members";
import { Users, Target, Heart, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About - ExsaBoys",
  description: "Tentang komunitas ExsaBoys, visi, misi, dan nilai-nilai kami.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Tentang <span className="text-secondary-container">ExsaBoys</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Naon nya
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Target className="w-7 h-7" />,
            title: "Visi",
            desc: "Naon nya",
          },
          {
            icon: <Zap className="w-7 h-7" />,
            title: "Misi",
            desc: "Naon nya",
          },
          {
            icon: <Heart className="w-7 h-7" />,
            title: "Nilai",
            desc: "Naon nya",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 border border-slate-100 member-card-shadow flex flex-col items-start gap-4"
          >
            <div className="w-14 h-14 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <h2 className="text-xl font-black text-on-surface">{item.title}</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* All Members */}
      <section className="bg-surface-container-low border-t border-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">Semua Anggota</h2>
              <p className="text-on-surface-variant">
                <span className="font-bold text-on-surface">{members.length}</span> orang keren tergabung dalam ExsaBoys
              </p>
            </div>
            <Link
              href="/members"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              Halaman Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {members.map((m) => (
              <Link
                key={m.id}
                href={`/members/${m.id}`}
                className="group bg-white rounded-2xl p-4 border border-slate-100 member-card-shadow flex flex-col items-center text-center hover:shadow-md hover:translate-y-[-2px] transition-all duration-200"
              >
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow bg-surface-container">
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  {m.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-blue-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{m.name}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{m.role}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/members" className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary px-6 py-3 rounded-xl">
              Lihat Halaman Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center">Fun Facts ExsaBoys 🎉</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "-", value: "Thendam", label: "77" },
          ].map((fact, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 member-card-shadow text-center">
              <div className="text-4xl mb-3">{fact.emoji}</div>
              <div className="text-3xl font-black text-primary mb-1">{fact.value}</div>
              <div className="text-sm text-on-surface-variant font-medium">{fact.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-blue-900 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Users className="w-12 h-12 mx-auto mb-4 text-secondary-container" />
          <h2 className="text-3xl md:text-4xl font-black mb-4">Kenali Lebih Dekat</h2>
          <p className="text-white/80 mb-8">Kunjungi halaman profil anggota untuk tahu lebih banyak tentang teman-teman ExsaBoys.</p>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-secondary-container transition-all active:scale-95"
          >
            Lihat Semua Anggota <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
