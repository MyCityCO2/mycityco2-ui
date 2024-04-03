import {
  BookOpenIcon,
  RadioIcon,
  ScaleIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid"

import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  LanguageIcon,
  LightBulbIcon,
} from "@heroicons/vue/24/outline"

import type { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue"

interface IIcon {
  [key: string]: FunctionalComponent<HTMLAttributes & VNodeProps>
}

export default (iconName: string) => {
  const icons: IIcon = {
    BookOpenIcon,
    RadioIcon,
    ScaleIcon,
    UserPlusIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon,
    LanguageIcon,
    LightBulbIcon,
  }
  return icons[iconName]
}
