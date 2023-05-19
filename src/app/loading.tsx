"use client"

import { useEffect } from "react"

// Config
import { config as appConfig } from "@/config/app.config"

// Utils
import { useAppState, useAppDispatch } from "@/utils/context/AppContext"

// Components
import SplashScreenUI from "@/components/screens/SplashScreenUI"

const Loading: React.FC = () => {
  const appState = useAppState()
  const appDispatch = useAppDispatch()

  useEffect(() => {
    if (appState.isInitialized) return

    appDispatch({
      type: "updateIsInitialized",
      payload: true,
    })
  }, [appState.isInitialized, appDispatch])

  return (
    <div>
      {appConfig.showSplashScreen && !appState.isInitialized ? (
        <SplashScreenUI />
      ) : (
        <div>Page Transition UI</div>
      )}
    </div>
  )
}

export default Loading
