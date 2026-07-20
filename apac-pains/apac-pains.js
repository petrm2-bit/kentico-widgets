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
    max-width: 760px;
    margin: 0 auto 44px;
  }
  .apac-pains__intro p {
    font-size: 15px;
    color: #5A5A5A;
    margin: 8px 0 0;
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
    margin-top: 4px;
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

<section class="apac-pains" aria-label="What's holding Australian organisations back and how Kentico fixes it">
  <div class="apac-pains__intro">
    <h2>What's holding Australian organisations back, and how Xperience by Kentico fixes it</h2>
    <p>The capabilities they need, without the complexity.</p>
  </div>

  <div class="apac-pains__rows">

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Scaling costs</p>
        <p>Growing your team shouldn't mean growing your licensing costs. Legacy licensing charges you for every editor you hire and every traffic spike you weather.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>Unlimited editors, no per-seat limits. Multichannel delivery helps you effortlessly scale channel by channel. It's how Anglicare WA scaled their team and improved governance at the same time, with a 21.6% increase in engagement time after migrating from Sitecore.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/anglicare-wa-success-story">Read the Anglicare WA story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Compliance demands</p>
        <p>WCAG AA and the Privacy Act aren't nice-to-haves, they're the brief. The bar for Australia's privacy and accessibility standards keeps rising, with new Privacy Act disclosure obligations and active OAIC compliance sweeps.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>WCAG 2.2 AA, ISO 27001, and SOC 2 come built in. Cockburn ARC achieved a higher accessibility score, increasing from 76% to 90%, with a 61.2% increase in sessions year over year after upgrading.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/cockburn-arc">Read the Cockburn ARC story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Developer resources</p>
        <p>Finding skilled developers shouldn't slow your project. Hiring is its own ongoing project in the Australian and NZ market, where the talent pool is small and rates keep climbing.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>Built on .NET, which Australia and NZ development teams already know. Supported by certified local implementation partners across Australia and New Zealand.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/partners/find-a-partner">Explore development</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Migration pain</p>
        <p>Migrating from alternative DXPs looks like at least a year of migration pain. Meanwhile, licensing and maintenance costs compound.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>A proven, fast migration path off alternative DXPs with a clear ROI timeline. Pre-configured, documented, and fully customizable migration tools help you bring all of your content and data with you — a confident path to value with no messy transitions. It's why the Australian Institute of Architects migrated 1,200 member-gated pages in just 5 weeks.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/discover/customer-stories/aia-success-story">Read the AIA story</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Disconnected tools</p>
        <p>Blocked by disconnected tools and data, marketing teams face never-ending to-do lists. Juggling multiple platforms means conversions slip away as drop-offs go unnoticed.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>Bring everything together in a unified platform, where campaigns, journeys, and channels all draw from the same source. The built-in AIRA Agentic Marketing Suite adds specialized AI agents to your workflow that keep messaging consistent, catch drop-offs before they cost you, and close SEO and AI-search visibility gaps.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/platform/aira">Learn more about AIRA</a>
      </div>
    </div>

    <div class="apac-pains__row">
      <div class="apac-pains__pain">
        <p class="apac-pains__eyebrow">Local expertise</p>
        <p>You need local expertise — with a global platform behind it.</p>
      </div>
      <div class="apac-pains__arrow" aria-hidden="true">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg></span>
      </div>
      <div class="apac-pains__answer">
        <p class="apac-pains__eyebrow">Xperience by Kentico solution</p>
        <p>Certified Kentico partners across APAC help you implement and launch Xperience by Kentico with confidence.</p>
        <a class="apac-pains__chip" href="https://www.kentico.com/partners/find-a-partner">Find a verified AU/NZ implementation partner</a>
      </div>
    </div>

  </div>
</section>
`;
})();
