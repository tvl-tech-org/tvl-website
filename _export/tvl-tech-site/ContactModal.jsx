// ContactModal.jsx — i18n
const { useState: useStateModal } = React;

function ContactModal({ open, onClose }) {
  const [lang] = window.i18n.useLang();
  const t = window.i18n.t;
  const [step, setStep] = useStateModal('form');
  const [data, setData] = useStateModal({ name: '', email: '', brief: '' });

  if (!open) return null;

  const submit = (e) => { e.preventDefault(); setStep('done'); };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      <div className="tvl-modal-card" onClick={e => e.stopPropagation()} style={{
        background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.15)',
        width: 'min(640px, 100%)', padding: 48, position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'transparent', border: 'none', color: '#777',
          fontSize: 24, cursor: 'pointer',
        }}>×</button>

        {step === 'form' && (
          <form onSubmit={submit}>
            <div style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: '#FF4931', marginBottom: 12 }}>{t('modal.kicker')}</div>
            <h3 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 48, textTransform: 'uppercase', lineHeight: 1, margin: 0, marginBottom: 28, color: '#fff' }}>{t('modal.title')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                ['name', t('modal.f.name'), t('modal.f.name.ph')],
                ['email', t('modal.f.email'), t('modal.f.email.ph')],
              ].map(([k, l, p]) => (
                <label key={k} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#FF4931' }}>{l}</span>
                  <input
                    required value={data[k]} onChange={e => setData({...data, [k]: e.target.value})}
                    placeholder={p}
                    style={{ background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '10px 0', fontSize: 16, fontFamily: 'Open Sans, sans-serif', outline: 'none' }}
                  />
                </label>
              ))}
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#FF4931' }}>{t('modal.f.brief')}</span>
                <textarea
                  required value={data.brief} onChange={e => setData({...data, brief: e.target.value})}
                  rows={4}
                  placeholder={t('modal.f.brief.ph')}
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: 12, fontSize: 15, fontFamily: 'Open Sans, sans-serif', outline: 'none', resize: 'vertical' }}
                />
              </label>
              <button type="submit" style={{
                background: '#FF4931', color: '#fff', border: 'none',
                borderRadius: 4,
                padding: '18px 28px', marginTop: 8,
                fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '0.16em', cursor: 'pointer',
              }}>{t('modal.f.submit')}</button>
            </div>
          </form>
        )}

        {step === 'done' && (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: 64, height: 64, background: '#FF4931', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 32 }}>✓</div>
            <h3 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 48, textTransform: 'uppercase', lineHeight: 1, margin: 0, marginBottom: 16, color: '#fff' }}>{t('modal.done.title')}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 16, color: '#C9C7C2', margin: 0 }}>
              {t('modal.done.body').replace('{name}', data.name.split(' ')[0] || t('modal.done.greet'))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

window.ContactModal = ContactModal;
