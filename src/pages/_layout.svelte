<script>
  // the layout is two columns. first we await the people store
  // to fetch random people via an API. once we have data we render
  // two columns: the first is a list of links of people, the second
  // is either our index page or confirmation of the selected person.

  import { getPeople } from "./_components/PeopleStore";
  import PeopleList from "./_components/PeopleList.svelte";
</script>

{#await getPeople()}
  Loading people
{:then}
  <div class="wrapper">
    <div class="column">
      <PeopleList />
    </div>
    <div class="column">
      <slot />
    </div>
  </div>
  <h2>Instructions</h2>
  <p>
    If you follow
    <a href="/1" target="_self">this link</a> directly to a person route then
    <code>$isActive</code> seems to work great and users ARE highlighted.
  </p>
  <p>
    If you follow <a href="/" target="_self">this link</a> and select a person,
    <code>$isActive</code> does not seem to work and users are NOT highlighted.
  </p>
  <p>
    The left column is a list of links each created by the
    <code>PeopleListItem.svelte</code> component. The right is the
    <code>[personIndex].svelte</code> page and shows the currently selected one.
  </p>
{/await}

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding: 1em;
  }
  .column:first-child {
    background-color: aliceblue;
  }
  code {
    background-color: lightgray;
  }
</style>
