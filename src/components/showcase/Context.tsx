import { createContext, useContext, useReducer } from "react"

// Types
import { ShowcaseItem, Tag } from "@components/showcase/types"

export interface State {
  activeTag: Tag
  activeItems: ShowcaseItem[] | null
  activeItemIndex: number | null
}

// Actions
export type updateActiveTag = {
  type: "updateActiveTag"
  payload: Tag
}

export type updateActiveItems = {
  type: "updateActiveItems"
  payload: ShowcaseItem[] | null
}

export type updateActiveItemIndex = {
  type: "updateActiveItemIndex"
  payload: number | null
}

export type Action = updateActiveTag | updateActiveItems | updateActiveItemIndex

export type Dispatch = (action: Action) => void

export const defaultState: State = {
  activeTag: "featured",
  activeItemIndex: null,
  activeItems: null,
}

export const showcaseReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "updateActiveTag": {
      return {
        ...state,
        activeTag: action.payload,
      }
    }
    case "updateActiveItems": {
      return {
        ...state,
        activeItems: action.payload,
      }
    }
    case "updateActiveItemIndex": {
      return {
        ...state,
        activeItemIndex: action.payload,
      }
    }
    default:
      // @ts-ignore next-line
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const ShowcaseStateCtx = createContext<State | null>(null)
export const ShowcaseDispatchCtx = createContext<Dispatch | null>(null)

// HOC
export const ShowcaseProvider = ({
  children,
  initialState = defaultState,
}: {
  children: React.ReactNode
  initialState?: State
}) => {
  const [state, dispatch] = useReducer(showcaseReducer, initialState)

  return (
    <ShowcaseStateCtx.Provider value={state}>
      <ShowcaseDispatchCtx.Provider value={dispatch}>
        {children}
      </ShowcaseDispatchCtx.Provider>
    </ShowcaseStateCtx.Provider>
  )
}

// Hooks
export const useShowcaseState = () => {
  const context = useContext(ShowcaseStateCtx)

  if (!context) {
    throw new Error("useShowcaseState must be used within a ShowcaseProvider")
  }

  return context
}

export const useShowcaseDispatch = () => {
  const context = useContext(ShowcaseDispatchCtx)

  if (!context) {
    throw new Error(
      "useShowcaseDispatch must be used within a ShowcaseProvider"
    )
  }

  return context
}
