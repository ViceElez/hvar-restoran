import Image from 'next/image';

export default function Contact() {
  return (
    <main style={{ background: '#ffffff' }}>
      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '56px 20px 28px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: '"Barlow Condensed", system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontWeight: 600,
            fontSize: 12,
            color: '#0b2f44',
          }}
        >
          Contact
        </p>
        <h1
          style={{
            margin: '14px 0 10px',
            color: '#0b1a2b',
            fontWeight: 600,
            fontSize: 'clamp(34px, 4vw, 56px)',
            lineHeight: 1.05,
          }}
        >
          FIND US IN HEART OF HVAR
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 760,
            marginInline: 'auto',
            color: '#425466',
            fontSize: 16,
            lineHeight: 1.8,
          }}
        >
            For reservations, events, or special requests, feel free to contact us by phone or email. Located in the heart of Hvar, Elysium offers an unforgettable dining experience with stunning sunset views.
        </p>
      </section>

      {/* Contact cards */}
      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '28px 20px 10px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18,
        }}
      >
        {[
          {
            title: 'Location',
            lines: ['Marije Maričić 17, 21450, Hvar', 'Croatia'],
            action: {
              label: 'View on map',
              href: 'https://www.google.com/maps/search/?api=1&query=Marije%20Mari%C4%8Di%C4%87%2017%2C%2021450%2C%20Hvar',
            },
          },
          {
            title: 'Phone',
            lines: ['+385 (0)21 742 999'],
            action: { label: 'Call now', href: 'tel:+38521742999' },
          },
          {
            title: 'Email',
            lines: ['restaurantelysium.hvar@gmail.com'],
            action: { label: 'Send email', href: 'mailto:restaurantelysium.hvar@gmail.com' },
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              border: '1px solid rgba(11, 47, 68, 0.12)',
              borderRadius: 14,
              padding: '18px 18px 16px',
              background: '#fbfcfe',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: '"Barlow Condensed", system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 700,
                fontSize: 14,
                color: '#0b2f44',
              }}
            >
              {card.title}
            </h3>
            <div style={{ marginTop: 10, color: '#0b1a2b', fontSize: 16, lineHeight: 1.7 }}>
              {card.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
            <a
              href={card.action.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: 12,
                color: '#f15a24',
                textDecoration: 'none',
                fontFamily: '"Barlow Condensed", system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              {card.action.label}
            </a>
          </div>
        ))}
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '28px 20px 70px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          alignItems: 'stretch',
        }}
      >
        {[{ src: '/images/home/img.webp', alt: 'Restaurant Table Image' }, { src: '/images/home/img_2.webp', alt: 'Hvar Riva Image' }].map(
          (img) => (
            <div
              key={img.src}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#e8eef3',
              }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          )
        )}
      </section>
    </main>
  );
}