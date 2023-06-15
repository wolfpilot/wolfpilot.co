import { useState, useEffect, useRef } from "react"

// Styles
import * as S from "./styles"

export interface Props {
  className?: string
  src: string
  label: string
  fullWidth?: boolean
}

const VideoSlice: React.FC<Props> = ({
  className,
  src,
  label,
  fullWidth = false,
}) => {
  const [isVideoInit, setIsVideoInit] = useState<boolean>(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!isVideoInit || !videoRef.current) return

    videoRef.current.controls = true
    videoRef.current.play()
  }, [isVideoInit])

  if (!src || !label) return null

  // Handlers
  const handleOverlayBtnClick = () => {
    setIsVideoInit(true)
  }

  return (
    <S.Wrapper className={className} $fullWidth={fullWidth}>
      <S.Video ref={videoRef} loop muted preload="metadata" aria-label={label}>
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.webm`} type="video/webm" />
        {`Oops, it looks like your browser doesn't support HTML5 video in MP4 or
        WebM formats.`}
      </S.Video>

      <S.OverlayBtn $isVideoInit={isVideoInit} onClick={handleOverlayBtnClick}>
        <S.Icon type="play" />
      </S.OverlayBtn>
    </S.Wrapper>
  )
}

export default VideoSlice
