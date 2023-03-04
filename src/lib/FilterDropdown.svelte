<script lang="ts">
  import Dropdown from "$lib/Dropdown.svelte";

  export let options: string[];
  export let selected: string | null;
</script>

<Dropdown
  class="form-select border-0 font-normal text-start px-8 py-6 w-60 rounded-md text-light-input bg-light-element shadow-md shadow-light-input/10"
  menuClass="mt-1 left-0 right-0 text-light-input bg-light-element rounded-md py-4 shadow-md shadow-light-input/10"
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
