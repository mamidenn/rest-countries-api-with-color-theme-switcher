<script lang="ts">
  export let text = "";
  export let placeholder = "Search for a country...";
  export let action = "";
  export let name = "text";
</script>

<form
  class="flex rounded-md overflow-hidden font-normal text-light-input dark:text-dark-text bg-light-element dark:bg-dark-element shadow-md focus-within:ring-1 ring-blue"
  {action}
  on:submit
>
  <button type="submit" class="px-8 py-6 focus:ring-0 " tabindex="-1">
    <slot name="icon" />
  </button>
  <input
    type="text"
    {placeholder}
    class="w-full h-full p-6 pl-2 bg-transparent border-0 placeholder:text-light-input focus:ring-0"
    {name}
    bind:value={text}
  />
</form>
