<script>
  export let count;
  export let onClick;

  const countValue = count;
  console.log(countValue);
</script>

<div class="card">
  Svelte: <button on:click={onClick}>
    count is {countValue}
  </button>
</div>
