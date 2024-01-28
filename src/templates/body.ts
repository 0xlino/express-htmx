import { footer } from "./footer";

export function body(): string {
    return `
  <body class="flex flex-col justify-between gap-8 min-h-screen">
    <header>
      <nav class="navbar bg-base-200">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">
            Short Link
          </a>
        </div>
  
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a hx-get="/new" hx-trigger="click, keyup[altKey&&key=='n'] from:body" hx-target="main" hx-indicator="#main-load">
                New link
              </a>
            </li>
  
            <li>
              <a hx-get="/list" hx-trigger="click, keyup[altKey&&key=='l'] from:body" hx-target="main" hx-indicator="#main-load">
                All links
              </a>
            </li>
          </ul>
        <div>
      </nav>  
    </header>
    
    <div class="relative">
      <section class="modal modal-open pointer-events-none htmx-indicator" id="main-load">
        <div class="modal-box text-center w-32">
          <span class="loading loading-dots loading-lg text-accent-focus mx-auto"></span>
        </div>
      </section>
  
      <main hx-get="/new" hx-trigger="load"></main>
    </div>
  
    ${footer()}
  </body>
  `;
}
