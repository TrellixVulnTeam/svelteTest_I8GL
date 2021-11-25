<script lang="ts">
  import MainTs from "./main";
  import ItemBox from "../../components/list_itme/listItem.svelte";
</script>

<div>
  {#await MainTs.requetNewsListEvent() then _newList}
    {#each MainTs.newsList as item}
      <ItemBox
        title={item.title}
        imagePath={item.coverPath}
        resTime={item.date}
      />
    {/each}
  {:catch}
    <p>err</p>
  {/await}
</div>
