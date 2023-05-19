import { createContext, useContext, useReducer } from "react"

// Config
import { config as appConfig } from "@/config/app.config"

export interface State {
  isInitialized: boolean
  showDebugGrid: boolean
}

// Actions
export type updateIsInitialized = {
  type: "updateIsInitialized"
  payload: boolean
}

export type updateShowDebugGrid = {
  type: "updateShowDebugGrid"
  payload: boolean
}

export type Action = updateIsInitialized | updateShowDebugGrid

export type Dispatch = (action: Action) => void

export const initialState: State = {
  isInitialized: appConfig.isInitialized,
  showDebugGrid: appConfig.showGridOverlay,
}

export const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "updateIsInitialized": {
      return {
        ...state,
        isInitialized: action.payload,
      }
    }
    case "updateShowDebugGrid": {
      return {
        ...state,
        showDebugGrid: action.payload,
      }
    }
    default:
      // @ts-ignore next-line
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const AppStateCtx = createContext<State | null>(null)
export const AppDispatchCtx = createContext<Dispatch | null>(null)

// HOC
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateCtx.Provider value={state}>
      <AppDispatchCtx.Provider value={dispatch}>
        {children}
      </AppDispatchCtx.Provider>
    </AppStateCtx.Provider>
  )
}

// Hooks
export const useAppState = () => {
  const context = useContext(AppStateCtx)

  if (!context) {
    throw new Error("useAppState must be used within a AppProvider")
  }

  return context
}

export const useAppDispatch = () => {
  const context = useContext(AppDispatchCtx)

  if (!context) {
    throw new Error("useAppDispatch must be used within a AppProvider")
  }

  return context
}
