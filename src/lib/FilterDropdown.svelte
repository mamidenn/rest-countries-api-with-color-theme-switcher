<script lang="ts">
  import Dropdown from "$lib/Dropdown.svelte";

  export let options: string[];
  export let selected: string | null;
</script>

<Dropdown
  class="form-select border-0 font-normal text-light-input dark:text-dark-text bg-light-element dark:bg-dark-element text-start px-8 py-6 w-60 rounded-md shadow-md"
  menuClass="mt-2 left-0 right-0 border-0 rounded-md py-4 text-light-input dark:text-dark-text bg-light-element dark:bg-dark-element shadow-md"
  placeholder="Filter by Region"
  {options}
  let:option
  bind:selected
>
  <div
    class="px-8 py-1 hover:bg-light-input/5 {selected === option
      ? 'bg-light-input/5'
      : ''}"
  >
    {option}
  </div>
</Dropdown>
