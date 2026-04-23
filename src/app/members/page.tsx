"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import { Search } from "lucide-react";

const roles = ["Semua", "Programmer", "Designer", "Content Creator", "Data Analyst", "Mobile Developer", "Game Developer", "Cybersecurity", "Ketua Kelas"];

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [activeRole, setActiveRole] = useState("Semua");

  const filtered = members.filter((m) => {
    const matchRole = activeRole === "Semua" || m.role === activeRole;
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchRole && matchSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-4 tracking-tight">
          Anggota Komunitas
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Kenali semua anggota ExsaBoys — pelajar keren dengan skill dan passion masing-masing yang siap berkarya bersama.
        </p>
      </header>

      {/* Search & Filters */}
      <section className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
          <input
            type="text"
            placeholder="Cari anggota atau skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 flex-wrap">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeRole === role
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-white border border-outline-variant text-on-surface-variant hover:border-primary"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </section>

      {/* Count */}
      <p className="text-sm text-on-surface-variant mb-6">
        Menampilkan <span className="font-bold text-on-surface">{filtered.length}</span> anggota
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-on-surface-variant">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold">Anggota tidak ditemukan</p>
          <p className="text-sm mt-1">Coba ubah filter atau kata kunci pencarian.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="group bg-white rounded-2xl p-6 member-card-shadow border border-slate-100 flex flex-col items-center text-center hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-surface-container">
                  <Image
                    src={member.avatar}
                    alt={`Avatar ${member.name}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg text-on-surface mb-1">{member.name}</h3>
              <span className="text-xs font-semibold text-secondary bg-secondary-container/30 px-3 py-1 rounded-full mb-3">
                {member.role}
              </span>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-surface-container px-2 py-1 rounded-md text-on-surface-variant font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="w-full py-2.5 px-4 border border-outline-variant text-on-surface-variant text-xs font-semibold rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-primary-container transition-all text-center block">
                Lihat Profil
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
