import {
  type Component,
  type ComponentProps,
  Index,
  mergeProps,
  splitProps
} from 'solid-js'
import { RatingGroup, RatingGroupRootProps } from '@ark-ui/solid/rating-group'

const defProps = {
  label: 'Label'
}

const Root: Component<RatingGroupRootProps & ComponentProps<any>> = (props) => {
  const merged = mergeProps(defProps, props)
  const [local, rest] = splitProps(merged, ['class', 'label', 'fill'])
  return (
    <>
      <RatingGroup.Root {...rest} data-fill={local.fill}>
        <RatingGroup.Label>{local.label}</RatingGroup.Label>
        <RatingGroup.Control class="enn-rate-group enn-rating enn-rating-half">
          <RatingGroup.Context>
            {(context) => (
              <Index each={context().items}>
                {(index) => (
                  <RatingGroup.Item class="enn-rate-item" index={index()}>
                    <RatingGroup.ItemContext>
                      {(context) => {
                        const ctx = context()
                        return props.allowHalf ? (
                          <>
                            <i class="enn-mask enn-mask-star-2 enn-mask-half-1" />
                            <i
                              class="enn-mask enn-mask-star-2 enn-mask-half-2"
                              classList={{ half: ctx.half }}
                            />
                          </>
                        ) : (
                          <i class="enn-mask enn-mask-star-2" />
                        )
                      }}
                    </RatingGroup.ItemContext>
                  </RatingGroup.Item>
                )}
              </Index>
            )}
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.Root>
    </>
  )
}

export const DRate = Object.assign(Root, {})
