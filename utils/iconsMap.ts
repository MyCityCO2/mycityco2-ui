import {
  BookOpenIcon,
  RadioIcon,
  ScaleIcon,
  UserPlusIcon,
} from "@heroicons/vue/20/solid"
import type { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue"

interface IIcon {
  [key: string]: FunctionalComponent<HTMLAttributes & VNodeProps>
}

export default (iconName: string) => {
  const icons: IIcon = {
    BookOpenIcon: BookOpenIcon,
    RadioIcon: RadioIcon,
    ScaleIcon: ScaleIcon,
    UserPlusIcon: UserPlusIcon,
  }
  return icons[iconName]
}
