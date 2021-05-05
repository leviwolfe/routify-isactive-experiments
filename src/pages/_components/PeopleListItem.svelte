<script>
  // here we render a link to a single person. the active person
  // should be highlighted with a red border.

  import { url, isActive } from "@roxi/routify";
  export let person;
  export let personId;

  // create the permalink for this user
  $: permalink = $url(`/${personId}`);

  // attempt to detect the active person via reactive statement
  $: isPersonActive = $isActive(permalink);
</script>

<!--
  the active class should be applied to the li when we are
  on the route for this user!
-->
<li class:active={$isActive(permalink)}>
  <a href={$url(permalink)}>
    <img src={person.picture.thumbnail} alt={person.name.first} />
    {person.name.first}
    {person.name.last}
    <!-- the active should also be applied here! -->
    <span class="bubble" class:active={isPersonActive}>◉</span>
  </a>
</li>

<style>
  li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: block;
    border: 2px solid lightblue;
  }
  li.active {
    border: 2px solid red;
  }
  li img {
    height: 24px;
    width: 24px;
  }
  .bubble {
    color: lightblue;
    float: right;
  }
  .bubble.active {
    color: red;
  }
</style>
