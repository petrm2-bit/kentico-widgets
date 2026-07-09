(function () {
  const mount = document.querySelector('[data-widget="apac-pains"]');
  if (!mount) return;

  mount.innerHTML = /*html*/ `
<style>
  .apac-pains {
    max-width: 1030px;
    margin: 0 auto;
    padding: 48px 0;
  }
  .apac-pains__intro {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 44px;
  }
  .apac-pains__rows {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .apac-pains__row {
    display: grid;
    grid-template-columns: 1fr 56px 1fr;
    align-items: stretch;
  }
  .apac-pains__pain,
  .apac-pains__answer {
    border-radius: 24px;
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .apac-pains__eyebrow {
    font-size: 0.72em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0;
  }
  .apac-pains__pain {
    background: #F7F7F7;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  .apac-pains__pain::before {
    content: "\\201D";
    position: absolute;
    right: 24px;
    bottom: -0.4em;
    font-size: 150px;
    font-weight: 700;
    font-style: normal;
    line-height: 1;
    color: #DFDFDF;
    z-index: -1;
    pointer-events: none;
  }
  .apac-pains__pain .apac-pains__eyebrow {
    color: #9B9B9B;
  }
  .apac-pains__pain p:not(.apac-pains__eyebrow) {
    margin: 0;
    font-style: italic;
    color: #5A5A5A;
    max-width: 85%;
  }
  .apac-pains__answer {
    background: linear-gradient(135deg, #F7F1FF 0%, #F1E6FF 100%);
  }
  .apac-pains__answer .apac-pains__eyebrow {
    color: #7F09B7;
  }
  .apac-pains__answer p:not(.apac-pains__eyebrow) {
    margin: 0;
    color: #1A1A1A;
  }
  .apac-pains__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .apac-pains__arrow span {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1px solid rgba(127, 9, 183, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7F09B7;
    box-shadow: 0 4px 12px rgba(127, 9, 183, 0.12);
  }
  .apac-pains__arrow svg {
    width: 18px;
    height: 18px;
  }
  .apac-pains__chip {
    display: inline-block;
    font-size: 0.8em;
    font-style: normal;
    font-weight: 500;
    color: #7F09B7;
    background: #FFFFFF;
    border: 1px solid rgba(127, 9, 183, 0.35);
    border-radius: 999px;
    padding: 6px 16px;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .apac-pains__chip:hover {
    background: #7F09B7;
    color: #FFFFFF;
  }

  @media (max-width: 760px) {
    .apac-pains {
      padding: 32px 0;
    }
    .apac-pains__rows {
      gap: 44px;
    }
    .apac-pains__row {
      grid-template-columns: 1fr;
    }
    .apac-pains__pain,
    .apac-pains__answer {
      padding: 20px 22px;
    }
    .apac-pains__pain::before {
      font-size: 96px;
      right: 16px;
    }
    .apac-pains__arrow {
      padding: 4px 0;
    }
    .apac-pains__arrow svg {
      transform: rotate(90deg);
    }
  }
</style>

<section class="apac-pains" aria-label="Australian pain points and how Kentico answers them">
  <div class="apac-pains__intro">
    <h2>Why Australian teams are leaving legacy DXPs</h2>
    <p>Same requirements, very different experience.</p>
  </div>

  <div class="apac-pains__rows">

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>US-priced licensing that punishes us for growing the team.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>Unlimited editors, no per-seat tax. Anglicare WA scaled its team, not its bill.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/anglicare-wa-success-story">Read the Anglicare WA story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>WCAG AA and the Privacy Act aren't nice-to-haves — they're the brief.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>WCAG 2.2 AA, ISO 27001 and SOC 2 built in — not bolted on. Cockburn ARC lifted its accessibility score from 76% to 90%, meeting government standards.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/cockburn-arc">Read the Cockburn ARC story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>Finding talent for a niche stack is its own project.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>.NET-native — the ecosystem Australia and NZ already run on, with certified local partners.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/partners/find-a-partner">Find a certified AU/NZ partner</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>Escaping a legacy DXP looks like a year of migration pain.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>A proven path off Sitecore, Adobe and WordPress — in weeks, not quarters. The Australian Institute of Architects migrated 1,200 member-gated pages in just 5 weeks.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/aia-success-story">Read the AIA story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>A five-person team, a fifty-item to-do list.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>AIRA — agentic AI that does the work, not just drafts it.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/platform/aira">Learn more about AIRA</a>
      </div>
    </div>

  </div>
</section>
`;
})();