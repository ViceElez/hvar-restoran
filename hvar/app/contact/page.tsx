import Image from 'next/image';

export default function Contact() {
  return (
    <main style={{ background: 'var(--color-secondary)' }}>
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
            fontFamily: 'var(--font-body), system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontWeight: 600,
            fontSize: 12,
            color: 'var(--color-hero-accent)',
          }}
        >
          Contact
        </p>
        <h1
          style={{
            margin: '14px 0 10px',
            fontFamily: 'var(--font-heading), ui-serif, Georgia, "Times New Roman", Times, serif',
            color: 'var(--color-text)',
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
            color: 'rgba(44, 44, 44, 0.82)',
            fontSize: 16,
            lineHeight: 1.8,
            fontFamily: 'var(--font-body), system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
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
               href: 'https://www.google.com/maps/place/Elysium/@43.1728673,16.4399534,17z/data=!3m1!4b1!4m6!3m5!1s0x13358195cbb60c0f:0x2c68aa5be4b26cc8!8m2!3d43.1728673!4d16.4425283!16s%2Fg%2F11z9q5vmjn?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D',
             },
           },
           {
             title: 'Phone',
             lines: ['091 727 8484'],
             action: { label: 'Call now', href: 'tel:0917278484' },
           },
           {
             title: 'Email',
             lines: ['elysium.hvar@gmail.com'],
             action: { label: 'Send email', href: 'mailto:elysium.hvar@gmail.com' },
           },
         ].map((card) => (
          <div
            key={card.title}
            style={{
              border: '1px solid rgba(44, 44, 44, 0.14)',
              borderRadius: 14,
              padding: '18px 18px 16px',
              background: 'rgba(255, 255, 255, 0.55)',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: 'var(--font-body), system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 700,
                fontSize: 14,
                color: 'var(--color-text)',
              }}
            >
              {card.title}
            </h3>
            <div style={{ marginTop: 10, color: 'var(--color-text)', fontSize: 16, lineHeight: 1.7, fontFamily: 'var(--font-body), system-ui, -apple-system, "Segoe UI", Arial, sans-serif' }}>
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
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body), system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
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
        {[{ src: '/images/home/img.webp', alt: 'Konoba Table Image' }, { src: '/images/home/img_2.webp', alt: 'Hvar Riva Image' }].map(
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
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority style={{ objectFit: 'cover' }} />
            </div>
          )
        )}
      </section>
    </main>
  );
}