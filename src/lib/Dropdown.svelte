<script lang="ts">
  type T = $$Generic;
  let open = false;
  export let placeholder: string;
  export let selected: T | null = null;
  export let options: T[] = [];
  let className = "";
  export { className as class };
  export let menuClass = "";
</script>

<div class="relative">
  <button on:click|stopPropagation={() => (open = !open)} class={className}>
    {selected ?? placeholder}
  </button>
  <div class:hidden={!open} class="absolute {menuClass}">
    {#each options as option}
      <button
        on:click={() => {
          selected = selected === option ? null : option;
        }}
        class="block w-full text-start"
      >
        <slot {option} />
      </button>
    {/each}
  </div>
</div>

<svelte:window on:click={() => (open = false)} />
