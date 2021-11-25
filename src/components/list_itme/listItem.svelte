<script lang="ts">
  import "./listItem.scss";
  export let imagePath: string = "";
  export let title: string = "";
  export let resTime: string = "";
  function imageErrorEvent(e): void {
    const targetDom = e.target;
    targetDom.src =
      "https://img.ixintu.com/download/jpg/20201027/96bf6a19aae9d7ae48b90d4a66572cee_512_497.jpg!bg";
  }
</script>

<div class="item_box">
  <div class="item_box--child">
    <img on:error={imageErrorEvent} src={imagePath} alt="news_cover" />
    <div class="item_box--title">
      <p>{title}</p>
      <p>{resTime}</p>
    </div>
  </div>
</div>
