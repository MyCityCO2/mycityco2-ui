export default (iconName: string): globalThis.Component =>
  defineAsyncComponent(() =>
    import("@heroicons/vue/20/solid").then((module) => module[iconName])
  );
