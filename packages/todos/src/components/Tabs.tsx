import { children, Component, For, createSignal } from "solid-js"
import type { JSX } from 'solid-js'

interface TabsProps {
  chidlren: JSX.Element
}
interface TabProps {
  title: string
  children: JSX.Element
}

export const Tabs: Component<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = createSignal<number>(0)
  const tabs = children(() => props.chidlren)
  const evaluatedTabs = () => tabs.toArray() as unknown as TabProps[]

  return (
    <div>
      <ul>
        <For each={evaluatedTabs()}>
          {({ title }, index) => (
            <li>
              <button onClick={() => setActiveTab(index)}>{title}</button>
            </li>
          )}
        </For>
      </ul>
      <div>{evaluatedTabs()[activeTab()].children}</div>
    </div>
  )
}

export const Tab: Component<TabProps> = (props) => {
  return props as unknown as JSX.Element
}