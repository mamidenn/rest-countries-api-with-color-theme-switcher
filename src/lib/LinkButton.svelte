<script lang="ts">
  export let href = "";
</script>

<a
  class="inline-block text-light-text bg-light-element dark:text-dark-text dark:bg-dark-element p-[0.25em_1.5em] rounded-[0.25em] shadow-md"
  {href}
>
  <slot />
</a>
