<template>
  <div class="container">
    <h1>About the project</h1>

    <!-- From ITH distans webpage pageSource-->

    <div id="intro" class="box generalbox boxaligncenter">
      <div class="no-overflow">
        <p>
          Skapa en dynamisk <strong>Vite</strong>-webbapplikation. Det går bra
          att utgå från projektmappen som genereras genom
          <code>npx degit jonkri/vite-vue-template#main my-project</code>. Det
          går även bra att utgå från projektmappen som genereras genom
          <code>npm create vite@latest my-project -- --template vue</code>.
        </p>
        <p>För G så ska följande krav uppfyllas:</p>
        <ul>
          <li>
            Webbanrop görs information från en eller flera webbtjänster visas i
            webbapplikationen (Undvik CORS-problem och använd helst HTTPS, för
            applikationen ska fungera bra som publicerad; Visa åtminstone tio
            värden; Använd inte Cities-tjänsten eller någon annan webbtjänst som
            har tagits upp som ett exempel)
          </li>
          <li>Textinterpolering används</li>
          <li>
            Attributinterpolering (<code>v-bind</code> eller dess kortform)
            används (<code>key</code>-props (relaterade till <code>v-for</code>)
            räknas inte)<br />
          </li>
          <li>Villkorlig rendering (<code>v-if</code>) används</li>
          <li>Listrendering (<code>v-for</code>) används</li>
          <li>Händelser (<code>v-on</code> eller dess kortform) används</li>
          <li><code>v-model</code> (och värdet som matas in) används</li>
          <li>
            En Single Page Application, bestående av minst två webbsidor, ska
            skapas med Vue Router (Använd både <code>router-link</code> och
            <code>router-view</code>)
          </li>
          <li>
            Minst en icke-Vue-Router-<code>.vue</code>-komponent (alltså en
            komponent som inte är en “view”) ska skapas (<code>App.vue</code>
            räknas inte)
          </li>
          <li>
            Minst en komponent ska ta emot, och använda, minst en prop (via
            <code>props</code>-nyckeln)
          </li>
        </ul>
        <p>
          För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav
          uppfyllas:
        </p>
        <ul>
          <li>
            Använd någonting annat än <code>fetch</code> (till exempel Axios)
            för att göra webbanrop
          </li>
          <li>Minst en beräknad egenskap (<code>computed</code>) används</li>
          <li>Minst en bevakare (<code>watch</code>) används</li>
          <li>Alla props ska vara typsäkra</li>
          <li>Minst ett custom event används (skickas och tas emot)</li>
          <li>Använd minst ett Vue Router-adressparametervärde</li>
        </ul>
        <p>
          Lämna in koden som en ZIP-fil här på ITHS Distans.
          <code>node_modules</code>-mappen ska <span>inte</span> ingå i
          filarkivet som lämnas in.
        </p>
        <p>
          Det spelar ingen roll om endast Composition API, endast Options API,
          eller en kombination av båda, används.<br />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 3em auto;
  padding: 2em 1em;
  text-align: center;
  max-width: 700px;
  background-color: black;
  color: white;
  border-radius: 10px;
  margin-bottom: 12em;
}

h1 {
  margin-bottom: 1.5em;
}
</style>
