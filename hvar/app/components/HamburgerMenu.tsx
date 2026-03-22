'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import styles from './styles/HamburgerMenu.module.css';

type MenuLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

type HamburgerMenuProps = {
  links?: MenuLink[];
};

export default function HamburgerMenu({
                                        links = [
                                          { href: '/', label: 'HOME' },
                                          { href: '/about', label: 'ABOUT' },
                                          {
                                            href: '',
                                            label: 'MENU',
                                            children: [
                                              { href: '/menu', label: 'ELYSIUM DINNER MENU' },
                                              { href: '/wine-list', label: 'WINE LIST' },
                                            ],
                                          },
                                          { href: '/contact', label: 'CONTACT' },
                                        ],
                                      }: HamburgerMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const btnId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => setOpen(true);
  const closeMenu = () => {
    setOpen(false);
    setOpenDropdowns({});
  };

  const toggleDropdown = (href: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  useEffect(() => {
    setOpen(false);
    setOpenDropdowns({});
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyTouchAction = document.body.style.touchAction;

    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }
    if (!open) setOpenDropdowns({});

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.touchAction = previousBodyTouchAction;
    };
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
      <>
        <div className={styles.wrap}>
          <button
              type="button"
              className={[styles.button, open ? styles.buttonHiddenWhenOpen : null]
                  .filter(Boolean)
                  .join(' ')}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={btnId}
              onClick={openMenu}
          >
          <span className={styles.icon} aria-hidden="true">
            <span className={[styles.line, styles.lineTop].join(' ')} />
            <span className={[styles.line, styles.lineMid].join(' ')} />
            <span className={[styles.line, styles.lineBot].join(' ')} />
          </span>
          </button>
        </div>

        <div
            className={[styles.backdrop, open ? styles.backdropOpen : null].filter(Boolean).join(' ')}
            onClick={closeMenu}
            aria-hidden={!open}
        />

        <div
            id={btnId}
            ref={panelRef}
            className={[styles.panel, open ? styles.panelOpen : null].filter(Boolean).join(' ')}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
        >
          <div className={styles.header}>
            <div />
            <button type="button" className={styles.close} aria-label="Close" onClick={closeMenu}>
              ×
            </button>
          </div>

          <nav className={styles.nav} aria-label="Main">
            {links.map((l) => {
              const isActive = l.href === '/' ? pathname === '/' : pathname?.startsWith(l.href);
              const isDropdownOpen = openDropdowns[l.href] ?? false;

              if (l.children) {
                const isParentActive = l.children.some((c) => pathname === c.href || pathname?.startsWith(c.href));
                return (
                    <div key={l.href} className={styles.dropdownWrap}>
                      <div className={styles.dropdownTrigger}>
                        <button
                            type="button"
                            className={[styles.link, styles.dropdownLabelBtn, isParentActive ? styles.active : null]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => toggleDropdown(l.href)}
                            aria-expanded={isDropdownOpen}
                            aria-controls={`submenu-${l.href || l.label}`}
                        >
                          {l.label}
                        </button>
                        <button
                            type="button"
                            className={[styles.chevronBtn, isDropdownOpen ? styles.chevronOpen : null]
                                .filter(Boolean)
                                .join(' ')}
                            onClick={() => toggleDropdown(l.href)}
                            aria-label={`Toggle ${l.label} submenu`}
                        >
                          ‹
                        </button>
                      </div>

                      <div
                          id={`submenu-${l.href || l.label}`}
                          className={[styles.dropdown, isDropdownOpen ? styles.dropdownOpen : null]
                              .filter(Boolean)
                              .join(' ')}
                      >
                        {l.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                              <Link
                                  key={child.href}
                                  href={child.href}
                                  className={[
                                    styles.dropdownLink,
                                    isChildActive ? styles.dropdownLinkActive : null,
                                  ]
                                      .filter(Boolean)
                                      .join(' ')}
                              >
                                {child.label}
                              </Link>
                          );
                        })}
                      </div>
                    </div>
                );
              }

              return (
                  <Link
                      key={l.href}
                      href={l.href}
                      className={[styles.link, isActive ? styles.active : null]
                          .filter(Boolean)
                          .join(' ')}
                  >
                    {l.label}
                  </Link>
              );
            })}

            <div className={styles.smallLinks}>
              <a className={styles.smallLink} href="https://www.facebook.com/mirko.mucic.7?locale=hr_HR" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className={styles.smallLink} href="https://www.instagram.com/mirko_mucic/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </nav>

          <div className={styles.footer}>
            <div className={styles.footerRow}>
              <span className={styles.iconBubble}>📍</span>
              <a
                  className={styles.footerLink}
                  href="https://www.google.com/maps/search/?api=1&query=Marije%20Mari%C4%8Di%C4%87%2017%2C%2021450%2C%20Hvar"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Marije Maričić 17, 21450, Hvar
              </a>
            </div>
            <div className={styles.footerRow}>
              <span className={styles.iconBubble}>📞</span>
              <span>+385 (0)21 742 999</span>
            </div>
            <div className={styles.footerRow}>
              <span className={styles.iconBubble}>✉️</span>
              <span>restaurantelysium.hvar@gmail.com</span>
            </div>
          </div>
        </div>
      </>
  );
}