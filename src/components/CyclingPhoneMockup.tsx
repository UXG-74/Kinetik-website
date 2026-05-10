import { useLayoutEffect, useRef, useState } from 'react'
import { bodyLoadBars, cyclingAssets as A } from '../cyclingAssets'
import { IphoneStatusBar } from './IphoneStatusBar'
import './CyclingPhoneMockup.css'

const OUT_W = 447
const OUT_H = 906

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

function formatMainClock(d: Date) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`
}

function formatStatusClock(d: Date) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`
}

export function CyclingPhoneMockup() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [now, setNow] = useState(() => new Date())

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => {
      const w = el.getBoundingClientRect().width
      const s = Math.min(1, w / OUT_W)
      setScale(s > 0 ? s : 1)
    }
    measure()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useLayoutEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(t)
  }, [])

  const hScaled = OUT_H * scale

  return (
    <section className="phone-mount sf" aria-label="KINETIK app preview">
      <div
        ref={viewportRef}
        className="phone-measure-h"
        style={{ width: '100%', height: hScaled }}
      >
        <div
          className="phone-canvas"
          style={{ transform: `scale(${scale})` }}
          aria-hidden
        >
          <div className="phone-screen-abs sf">
            {/* Decorative vector background */}
            <div
              style={{
                position: 'absolute',
                left: '-177px',
                top: '-71px',
                width: '385px',
                height: '380px',
                pointerEvents: 'none',
              }}
            >
              <img
                src={A.decor}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                draggable={false}
              />
            </div>

            <IphoneStatusBar time={formatStatusClock(now)} dateTime={now.toISOString()} />

            {/* Header / timer / weekly — Figma 2108:3448–3451 (px @ 393w) */}
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '197px',
                top: '96px',
                transform: 'translateX(-50%)',
                margin: 0,
                color: '#b1b1b1',
                fontSize: '18px',
                lineHeight: '17px',
                whiteSpace: 'nowrap',
              }}
            >
              CYCLING
            </p>
            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '197px',
                top: '151px',
                transform: 'translateX(-50%)',
                margin: 0,
                color: '#fff',
                fontSize: '60px',
                lineHeight: '22px',
                fontVariantNumeric: 'tabular-nums',
                whiteSpace: 'nowrap',
              }}
            >
              {formatMainClock(now)}
            </p>
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '197.5px',
                top: '201px',
                transform: 'translateX(-50%)',
                margin: 0,
                color: '#b1b1b1',
                fontSize: '12px',
                lineHeight: '17px',
                whiteSpace: 'nowrap',
              }}
            >
              WEEKLY TARGET
            </p>
            <div
              style={{
                position: 'absolute',
                left: '196px',
                top: '243px',
                transform: 'translate(-50%, -100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <p
                className="sf-med"
                style={{
                  margin: 0,
                  color: '#b1b1b1',
                  fontSize: '18px',
                  lineHeight: '22px',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                1174 of 2400
              </p>
            </div>

            {/* Metrics card */}
            <div
              style={{
                position: 'absolute',
                left: '30px',
                top: '275px',
                width: '333px',
                height: '172px',
                borderRadius: '16px',
                background: '#000',
              }}
            />

            {/* Subtle waveform strip over card (matches Figma “image 3” slot height) */}
            <div
              style={{
                position: 'absolute',
                left: '28px',
                top: '369px',
                width: '336px',
                height: '26px',
                background:
                  'linear-gradient(180deg,rgba(20,67,117,.42),rgba(0,0,0,0))',
                opacity: 0.85,
              }}
              aria-hidden
            />

            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '52px',
                top: '292px',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Training Zone
            </p>
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '208px',
                top: '292px',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Body Load
            </p>

            {/* Training zone gauges — Figma 2108:3469–3470 */}
            <div
              style={{
                position: 'absolute',
                left: '55px',
                top: '340px',
                width: '128px',
                height: '64px',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10.16%',
                  right: '-5.08%',
                  bottom: '-10.16%',
                  left: '-5.08%',
                }}
              >
                <img
                  src={A.gaugeArcBg}
                  alt=""
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                left: '55px',
                top: '340px',
                width: '64px',
                height: '64px',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-10.16%',
                }}
              >
                <img
                  src={A.gaugeArcFg}
                  alt=""
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
            {/* Zone badge “2” */}
            <div
              style={{
                position: 'absolute',
                left: '98px',
                top: '321px',
                width: '38px',
                height: '38px',
                borderRadius: '999px',
                background: '#29a4f6',
                border: '2px solid #1c1c1c',
                display: 'grid',
                placeItems: 'center',
              }}
              aria-hidden
            >
              <span className="sf-hv" style={{ fontSize: '28px', color: '#000' }}>
                2
              </span>
            </div>

            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '87px',
                top: '382px',
                margin: 0,
                fontSize: '36px',
                lineHeight: '22px',
                color: '#fff',
                whiteSpace: 'nowrap',
              }}
            >
              121
            </p>

            {/* Heart — Figma 2108:3486 inset % */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '44.73%',
                right: '59.12%',
                bottom: '53.89%',
                left: '37.49%',
              }}
            >
              <span className="k-heart" style={{ width: '100%', height: '100%', display: 'flex' }}>
                <img
                  src={A.heart}
                  alt=""
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </span>
            </div>

            {/* Body-load labels */}
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '222px',
                top: '415px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Low
            </p>
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '276px',
                top: '415px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Med
            </p>
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '332.5px',
                top: '415px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              High
            </p>

            {/* Body-load graph — 13 bars, exact Figma geometry */}
            {bodyLoadBars.map((b, i) => (
              <div
                key={`${b.left}-${b.top}-${i}`}
                className="graph-host"
                style={{
                  position: 'absolute',
                  left: `${b.left}px`,
                  top: `${b.top}px`,
                  width: '8px',
                  height: `${b.h}px`,
                }}
                aria-hidden
              >
                <div className="graph-wave">
                  <div
                    className="graph-grow"
                    style={{ height: '100%', background: b.bg }}
                  />
                </div>
              </div>
            ))}

            {/* Stat grid — Figma 2108:3461–3456 */}
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '66.5px',
                top: '463px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Calories
            </p>
            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '30px',
                top: '493px',
                margin: 0,
                fontSize: '30px',
                lineHeight: '22px',
                color: '#fff',
              }}
            >
              729
            </p>

            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '289px',
                top: '463px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Body Temperature
            </p>
            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '207px',
                top: '493px',
                margin: 0,
                fontSize: '30px',
                lineHeight: '22px',
                color: '#fff',
              }}
            >
              37.5
            </p>

            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '51.5px',
                top: '542px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Pace
            </p>
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '128.5px',
                top: '564px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              min/km
            </p>
            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '30px',
                top: '572px',
                margin: 0,
                fontSize: '30px',
                lineHeight: '22px',
                color: '#fff',
              }}
            >
              11.51
            </p>

            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '208px',
                top: '542px',
                margin: 0,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              Distance
            </p>
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '286.5px',
                top: '564px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              km
            </p>
            <p
              className="sf-sb"
              style={{
                position: 'absolute',
                left: '118.5px',
                top: '415px',
                transform: 'translateX(-50%)',
                margin: 0,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#b1b1b1',
                whiteSpace: 'nowrap',
              }}
            >
              bpm
            </p>
            <p
              className="sf-hv"
              style={{
                position: 'absolute',
                left: '207px',
                top: '572px',
                margin: 0,
                fontSize: '30px',
                lineHeight: '22px',
                color: '#fff',
              }}
            >
              6.04
            </p>

            {/* Slider */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '30px',
                top: '620px',
                width: '333px',
                height: '54px',
                borderRadius: '999px',
                border: '1px solid #02fb9b',
              }}
            />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '36px',
                top: '625px',
                height: '44px',
                borderRadius: '999px',
                background: '#02fb9b',
                border: '1px solid #02fb9b',
                padding: '0 20px',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <span className="sf-sb" style={{ fontSize: '16px', color: '#121a2e' }}>
                Slide to pause
              </span>
            </div>

            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: '126px',
                top: '838px',
                width: '140px',
                height: '6px',
                borderRadius: '30px',
                background: '#fff',
              }}
            />

            {/* Tab bar */}
            <div
              style={{
                position: 'absolute',
                left: '0px',
                top: '732px',
                width: '393px',
                height: '120px',
                background: '#0a0f1b',
              }}
            />

            {/* FAB */}
            <div style={{ position: 'absolute', left: '172px', top: '759px' }}>
              <img src={A.fab} alt="" width={54} height={54} draggable={false} />
            </div>

            {/* Goals */}
            <div style={{ position: 'absolute', left: '267px', top: '765px' }}>
              <img src={A.goalsCentre} alt="" width={22} height={22} draggable={false} />
            </div>
            <div style={{ position: 'absolute', left: '271px', top: '769px' }}>
              <img src={A.goalsRing} alt="" width={14} height={14} draggable={false} />
            </div>
            <div style={{ position: 'absolute', left: '275px', top: '773px' }}>
              <img src={A.goalsDot} alt="" width={6} height={6} draggable={false} />
            </div>

            {/* History */}
            <div style={{ position: 'absolute', left: '109px', top: '765px' }}>
              <img src={A.historyIcon} alt="" width={24} height={23} draggable={false} />
            </div>

            {/* Shop glyphs */}
            <div
              style={{
                position: 'absolute',
                left: '347px',
                top: '772px',
                width: '18px',
                height: '15px',
                border: '1px solid #898e96',
                borderRadius: '0 0 2px 2px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '352px',
                top: '765px',
                width: '8px',
                height: '8px',
                border: '1px solid #898e96',
                borderRadius: '20px 20px 0 0',
              }}
            />

            {/* Insights mini-bars (vector assets) */}
            <div style={{ position: 'absolute', left: '32px', top: '765px' }}>
              <div style={{ position: 'relative', width: '30px', height: '24px' }}>
                {[
                  { l: 15, t: 0, w: 2, h: 22, src: A.insightLines[0] },
                  { l: 10, t: 11, w: 2, h: 11, src: A.insightLines[1] },
                  { l: 0, t: 14, w: 2, h: 8, src: A.insightLines[2] },
                  { l: 5, t: 6, w: 2, h: 16, src: A.insightLines[3] },
                  { l: 20, t: 16, w: 2, h: 6, src: A.insightLines[4] },
                ].map((row, idx) => (
                  <img
                    key={idx}
                    src={row.src}
                    alt=""
                    draggable={false}
                    style={{
                      position: 'absolute',
                      left: `${row.l}px`,
                      top: `${row.t}px`,
                      width: `${row.w}px`,
                      height: `${row.h}px`,
                      objectFit: 'fill',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Plus cross lines */}
            <img
              src={A.insightLines[5]}
              alt=""
              draggable={false}
              style={{
                position: 'absolute',
                left: '199.5px',
                top: '773px',
                width: '1px',
                height: '27px',
                objectFit: 'fill',
              }}
            />
            <img
              src={A.insightLines[6]}
              alt=""
              draggable={false}
              style={{
                position: 'absolute',
                left: '185.5px',
                top: '786px',
                width: '27px',
                height: '1px',
                objectFit: 'fill',
              }}
            />

            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '43px',
                top: '791px',
                margin: 0,
                fontSize: '12px',
                color: '#b1b1b1',
                transform: 'translateX(-50%)',
              }}
            >
              Insights
            </p>
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '122px',
                top: '791px',
                margin: 0,
                fontSize: '12px',
                color: '#b1b1b1',
                transform: 'translateX(-50%)',
              }}
            >
              History
            </p>
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '278.5px',
                top: '791px',
                margin: 0,
                fontSize: '12px',
                color: '#b1b1b1',
                transform: 'translateX(-50%)',
              }}
            >
              Goals
            </p>
            <p
              className="sf-med"
              style={{
                position: 'absolute',
                left: '356px',
                top: '791px',
                margin: 0,
                fontSize: '12px',
                color: '#b1b1b1',
                transform: 'translateX(-50%)',
              }}
            >
              Shop
            </p>
          </div>

          <div className="phone-shadow-abs" aria-hidden>
            <img src={A.shadow} alt="" draggable={false} />
          </div>

          <img
            className="phone-bezel-img"
            src={A.iphoneFrame}
            alt=""
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
