import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCalendarComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
    }
    .h5 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .calendar {
      width: max-content;
      height: max-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="h5">
          View 1
        </h5>
        <p class="typography__body-1 content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content"></igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <a class="typography__body-1 content">
          This is a link
        </a>
        <a class="typography__body-1 content">
          This is a link
        </a>
        <p class="typography__body-1 content">
          Body 1
        </p>
      </div>
    `;
  }
}
