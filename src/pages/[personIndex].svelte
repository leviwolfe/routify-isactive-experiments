<script>
  // this page helps to confirm which user is selected
  // from the layout's links created by PeopleListItem

  import { people } from "./_components/PeopleStore";

  // grab the personIndex from the [slug]
  export let personIndex;

  // when the personIndex changes, so does the selected person
  $: person = $people[personIndex];
</script>

<p>
  You have selected {person.name.first}!
</p>
<img src={person.picture.large} alt={person.name.first} />

<style>
  img {
    width: 128px;
    height: 128px;
  }
</style>
