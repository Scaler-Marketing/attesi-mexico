import Image from "next/image";

function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="team-card">
      <div className="team-card__photo-wrap">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="team-card__photo"
          />
        ) : (
          <div className="team-card__placeholder" aria-hidden="true">
            <span className="team-card__initials">{initials}</span>
          </div>
        )}
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        {member.role && (
          <p className="team-card__role">{member.role}</p>
        )}
        {member.bio && (
          <p className="team-card__bio">{member.bio}</p>
        )}
      </div>
    </article>
  );
}

export default function TeamGrid({ members = [] }) {
  return (
    <section className="team-grid" aria-label="Team members">
      <div className="team-grid__container">
        <div className="team-grid__grid">
          {members.map((member) => (
            <TeamCard key={member._id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
