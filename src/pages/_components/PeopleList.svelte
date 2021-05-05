<script>
  // get the people from the PeopleStore and then render each
  // one to a PeopleListItem component. we don't bother using
  // await here because _layout.svelte takes care of it.

  import { people } from "./PeopleStore";
  import PeopleListItem from "./PeopleListItem.svelte";
</script>

<ol>
  {#each $people as person, i}
    <PeopleListItem {person} personId={i} />
  {/each}
</ol>
