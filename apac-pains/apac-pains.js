(function () {
  const mount = document.querySelector('[data-widget="apac-pains"]');
  if (!mount) return;

  mount.innerHTML = `
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
  }
  .apac-pains__pain .apac-pains__eyebrow {
    color: #9B9B9B;
  }
  .apac-pains__pain p:not(.apac-pains__eyebrow) {
    margin: 0;
    font-style: italic;
    color: #5A5A5A;
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
        <p>"Licensing costs grow every time our team does."</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>Unlimited editors, no per-seat tax.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com">Anglicare WA scaled its team, not its bill</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>"WCAG AA and the Privacy Act aren't optional here."</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>WCAG 2.2 AA, ISO 27001 and SOC 2 built in — not bolted on.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com">Accessibility score 44→92% after migration</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>"Finding talent for a niche stack is its own project."</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>.NET-native — the ecosystem Australia and NZ already run on, with certified local partners.</p>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>"Replatforming feels like a year-long project."</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>A proven path off Sitecore, Adobe and WordPress.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com">1,200 member-gated pages in 5 weeks</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Legacy DXP challenge</p>
        <p>"Five people. Fifty things on the list."</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">The Kentico answer</p>
        <p>AIRA — AI that does the work, not just drafts it.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com">Try AIRA below ↓</a>
      </div>
    </div>

  </div>
</section>
`;
})();