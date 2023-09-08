export const number = {
  mounted(el, binding) {
    el.innerHTML = new Intl.NumberFormat('fr-CH').format(binding.value)
  }
}
