import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseClass } from "../../helpers/BaseClass";

const logoMarkUrl = new URL("../../assets/logo-mark.png", import.meta.url).href;

export type WorkExperienceTranslations = {
  title: string;
  experienceItems: {
    translations: {
      period: string;
      company: string;
      role: string;
      bullets: string[];
    };
    links: {
      company: string;
    };
  }[];
};

@customElement("odr-work-experience")
export class WorkExperience extends BaseClass {
  @property({ attribute: false })
  translations!: WorkExperienceTranslations;

  static styles = [
    css`
      .item {
        display: flex;
        gap: 1rem;
        margin: 0.75rem 0;
      }

      .date {
        color: var(--muted);
        font-size: 0.85rem;
      }

      .role {
        font-weight: 600;
        color: var(--text);
      }

      .icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ];

  render() {
    if (!this.translations) {
      return html``;
    }

    return html`
      <section>
        <h2>${this.translations.title}</h2>
        ${this.translations.experienceItems.map(
          (item) => html`
            <div class="item">
              <div class="icon">
                <img src="${logoMarkUrl}" alt="logo mark" width="24" />
              </div>
              <div>
                <div class="date">${item.translations.period}</div>
                <a href="${item.links.company}" class="role"
                  >${item.translations.company}</a
                >
                <p class="role"><i>${item.translations.role}</i></p>
                <ul class="muted">
                  ${item.translations.bullets.map((bullet) => html`<li>${bullet}</li>`)}
                </ul>
              </div>
            </div>
          `,
        )}
      </section>
    `;
  }
}
