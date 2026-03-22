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

      {/* Images (reuse existing slideshow images) */}
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
        {[{ src: '/images/home/img.png', alt: 'Restaurant view' }, { src: '/images/home/img_1.png', alt: 'Restaurant atmosphere' }].map(
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

        <div style={{
            lineHeight: 0,
            marginTop: '-130px',
            position: 'relative',
            zIndex: 10
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ display: 'block', width: '100%', height: '160px' }}
            >
                <path fill="#0b2f44" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"/>
                <path fill="#0b2f44" fillOpacity="0.6" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L0,320Z"/>
                <path fill="#0b2f44" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,267,576,272C672,277,768,256,864,245.3C960,235,1056,235,1152,245.3C1248,256,1344,277,1392,282.7L1440,288L1440,320L0,320Z"/>
            </svg>
        </div>
    </main>
  );
}