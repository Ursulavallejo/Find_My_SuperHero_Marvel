## 🎯 Project Requirements

Below is how this application satisfies the project requirements:

### Requirements “G” (Basic Level)

1. **Web Service Calls**

   - Uses Axios to make requests to the Marvel API over HTTPS.
   - Displays at least ten results when performing a search.
   - Does not use the Cities API or any other example service mentioned in class.

2. **Text Interpolation (`{{ }}`)**

   - Displays the user’s name with `{{ userName }}` (e.g., “Hello, <name>!”).
   - Interpolates API data (e.g., `{{ character.name }}`, `{{ commentText }}`).

3. **Attribute Interpolation (`v-bind`)**

   - Uses `v-bind:src="character.thumbnail.path + '.' + character.thumbnail.extension"` to load character images.
   - Binds dynamic routes with `:to="{ name: 'detail', params: { id: character.id } }"`.

4. **Conditional Rendering (`v-if`)**

   - Shows a `<Loader />` component while the API request is pending:
     ```html
     <div v-if="loading">
       <Loader />
     </div>
     <div v-else>
       <!-- Content -->
     </div>
     ```
   - Displays “No results found” if `results.length === 0 && !loading`.

5. **List Rendering (`v-for`)**

   - On the home page, iterates over `initialCharacters` to render 14 cards:
     ```html
     <div class="cards-container">
       <Card
         v-for="(character, idx) in initialCharacters"
         :key="idx"
         :data="character"
       />
     </div>
     ```
   - Uses another `v-for` to loop through up to 10 search results.

6. **Event Handling (`v-on` / `@`)**

   - The search button triggers `@click="searchCharacters"`.
   - The user name input listens for `@keyup.enter="confirmUser"`.
   - Each card uses `@click="viewDetail(character.id)"`.

7. **Two-Way Binding (`v-model`)**

   - In the login form:
     ```html
     <input v-model="userName" placeholder="Enter your name" />
     ```
   - In the search field:
     ```html
     <input v-model="searchText" placeholder="Search hero..." />
     ```

8. **Single Page Application with Vue Router**

   - Defines at least two views (`.vue` files) shown based on routes:
     - `/` → Home view (14 cards + search).
     - `/detail/:id` → Detail view for a specific character.
   - Uses `<router-link>` and `<router-view>`.
   - Contains at least one non-router component (`Card.vue`, `Loader.vue`, `CommentForm.vue`, etc.).

9. **Components Receiving Props**
   - `Card.vue` receives a `character` prop containing basic data (image, name, id).
   - `CommentForm.vue` receives a `characterId` prop to link comments to the correct hero.

---

### Requirements “VG” (Advanced Level)

1. **Use Something Other Than `fetch` (e.g., Axios)**

   - All API calls use Axios (`npm install axios`).

2. **At Least One Computed Property**

   - A computed property calculates the total number of comments, for example:
     ```js
     computed: {
       totalComments() {
         return this.comments.length;
       }
     }
     ```
   - Additional computed properties format data (e.g., full image URL) or derive filtered lists.

3. **At Least One Watcher**

   - A watcher on `searchText` enables/disables the search button in real time:
     ```js
     watch: {
       searchText(newVal) {
         this.canSearch = newVal.length >= 3;
       }
     }
     ```

4. **All Props Are Type-Checked**

   - In each component that receives props, they are defined with `type` and `required: true/false`:
     ```js
     props: {
       character: {
         type: Object,
         required: true
       }
     }
     ```
   - For comments:
     ```js
     props: {
       characterId: {
         type: Number,
         required: true
       }
     }
     ```

5. **At Least One Custom Event**

   - `CommentForm.vue` emits a `new-comment` event to the parent:
     ```js
     this.$emit('new-comment', { user: this.user, text: this.newComment })
     ```

6. **Use at Least One Vue Router Route Parameter**
   - The detail route is defined as `/detail/:id`.
   - In `DetailView.vue`, the `id` is accessed via `this.$route.params.id` (Options API) or using `const route = useRoute(); const id = route.params.id` (Composition API).
