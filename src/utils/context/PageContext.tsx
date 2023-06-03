import { createContext, useContext, useReducer } from "react"

export interface State {
  hasSplashScreenPlayed: boolean
}

// Actions
export type updateHasSplashScreenPlayed = {
  type: "updateHasSplashScreenPlayed"
  payload: boolean
}

export type Action = updateHasSplashScreenPlayed

export type Dispatch = (action: Action) => void

export const initialState: State = {
  hasSplashScreenPlayed: false,
}

export const pageReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "updateHasSplashScreenPlayed": {
      return {
        ...state,
        hasSplashScreenPlayed: action.payload,
      }
    }
    default:
      // @ts-ignore next-line
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const PageStateCtx = createContext<State | null>(null)
export const PageDispatchCtx = createContext<Dispatch | null>(null)

// HOC
export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(pageReducer, initialState)

  return (
    <PageStateCtx.Provider value={state}>
      <PageDispatchCtx.Provider value={dispatch}>
        {children}
      </PageDispatchCtx.Provider>
    </PageStateCtx.Provider>
  )
}

// Hooks
export const usePageState = () => {
  const context = useContext(PageStateCtx)

  if (!context) {
    throw new Error("usePageState must be used within a PageProvider")
  }

  return context
}

export const usePageDispatch = () => {
  const context = useContext(PageDispatchCtx)

  if (!context) {
    throw new Error("usePageDispatch must be used within a PageProvider")
  }

  return context
}
