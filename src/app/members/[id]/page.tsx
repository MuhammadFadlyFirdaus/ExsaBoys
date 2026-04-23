import { members } from "@/data/members";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, Code2, Mail } from "lucide-react";

export async function generateStaticParams() {
  return members.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);
  if (!member) return { title: "Member Not Found" };
  return {
    title: `${member.name} - ExsaBoys`,
    description: member.bio,
  };
}

export default async function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = members.find((m) => m.id === id);
  if (!member) notFound();

  const otherMembers = [...members]
    .filter((m) => m.id !== member.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Link
        href="/members"
        className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary mb-8 transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Members
      </Link>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl member-card-shadow border border-slate-100 overflow-hidden mb-8">
        {/* Cover */}
        <div className="h-48 bg-gradient-to-br from-primary to-blue-800 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-8 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="px-8 pb-8">
          {/* Avatar + Name */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-10 mb-6">
            <div className="flex items-end gap-4">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-surface-container">
                  <Image
                    src={member.avatar}
                    alt={`Avatar ${member.name}`}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="mb-1">
                <h1 className="text-2xl md:text-3xl font-black text-on-surface">{member.name}</h1>
                <span className="text-sm font-semibold text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">
                  {member.role}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4 md:mt-0">
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold bg-rose-50 text-rose-600 px-4 py-2 rounded-xl hover:bg-rose-100 transition-colors"
                >
                  <Camera className="w-4 h-4" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>
              )}
              {member.github && (
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold bg-slate-100 text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm font-semibold bg-primary-container/20 text-primary px-4 py-2 rounded-xl hover:bg-primary-container/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-lg font-bold text-on-surface mb-3">Tentang</h2>
              <p className="text-on-surface-variant leading-relaxed">{member.fullBio}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-bold text-on-surface mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary-container/15 text-primary text-sm font-semibold px-3 py-1.5 rounded-lg border border-primary-container/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {member.email && (
                <div className="mt-6">
                  <h2 className="text-lg font-bold text-on-surface mb-2">Kontak</h2>
                  <p className="text-sm text-on-surface-variant">{member.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Other Members */}
      <div>
        <h2 className="text-2xl font-black text-on-surface mb-6">Anggota Lainnya</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherMembers.map((m) => (
            <Link
              key={m.id}
              href={`/members/${m.id}`}
              className="group bg-white rounded-2xl p-4 border border-slate-100 member-card-shadow flex flex-col items-center text-center hover:shadow-md hover:translate-y-[-2px] transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow mb-2 bg-surface-container">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <p className="text-sm font-bold text-on-surface">{m.name}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{m.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
