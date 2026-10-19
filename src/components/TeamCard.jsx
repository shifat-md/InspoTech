import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function TeamCard({ member }) {
  const { name, role, image, bio, skills, socialLinks } = member;
  const [imageError, setImageError] = useState(false);

  // Derive initials for avatar fallback (e.g. "Alex Morgan" -> "AM")
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'ET';

  return (
    <div className="team-card">
      <div className="team-image-container">
        {!imageError && image ? (
          <img
            src={image}
            alt={`Portrait of ${name}, ${role}`}
            className="team-photo"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="team-fallback-avatar" aria-label={`Avatar for ${name}`}>
            {initials}
          </div>
        )}
      </div>

      <div className="team-content">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-bio">{bio}</p>

        {skills && skills.length > 0 && (
          <div className="team-skills">
            {skills.map((skill, index) => (
              <span key={index} className="tech-tag">{skill}</span>
            ))}
          </div>
        )}

        {socialLinks && (
          <div className="team-social-links">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label={`${name}'s GitHub profile`}
              >
                <FiGithub size={16} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <FiLinkedin size={16} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-icon"
                aria-label={`${name}'s Twitter / X profile`}
              >
                <FiTwitter size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
