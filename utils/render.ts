import { h, resolveDirective, withDirectives } from "vue"

export function renderContentWithDirective(
  content: any,
  directive: string,
  tag: string = "span"
): any {
  if (directive) {
    return withDirectives(h(tag), [[resolveDirective(directive), content]])
  }
  return h(tag, content)
}
