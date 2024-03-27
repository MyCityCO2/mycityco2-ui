export default (iconName: string): globalThis.Component =>
  defineAsyncComponent(() =>
    import("@heroicons/vue/24/outline").then((module) => module[iconName])
  );
